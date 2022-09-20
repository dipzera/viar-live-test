import { NextPage } from 'next';

import Header from '../../components/Header';
import TourList from '../../components/TourList';

import { Tour } from '../../types';

type Props = {
  tours?: Tour[];
  totalPages: number;
};

type ServerProps = {
  query: {
    page: number;
  };
};

const Tours: NextPage<Props> = ({ tours, totalPages }) => {
  return (
    <div>
      <Header />
      <TourList tours={tours} totalPages={totalPages} title={'Explore'} />
    </div>
  );
};

export const getServerSideProps = async ({ query }: ServerProps) => {
  const pageCount = query.page ? query.page - 1 : 0;

  const url = `${process.env.API_BASE_URL}/tour?page=${pageCount}&size=12&sort=createdAt`;
  const tourData = await fetch(url).then((response) => response.json());

  return {
    props: {
      tours: tourData?.page || [],
      totalPages: tourData?.metadata?.totalPages || 0,
    },
  };
};

export default Tours;
