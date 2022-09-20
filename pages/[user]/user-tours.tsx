import { NextPage } from 'next';

import TourList from '../../components/TourList';
import UserLayout from '../../components/UserLayout';

import { Tour } from '../../types';

type Props = {
  tours?: Tour[];
  totalPages: number;
};

type ServerProps = {
  query: {
    page: number;
    user: string;
  };
};

const Tours: NextPage<Props> = ({ tours, totalPages }) => {
  return (
    <UserLayout>
      <TourList tours={tours} totalPages={totalPages} />
    </UserLayout>
  );
};

export const getServerSideProps = async ({ query }: ServerProps) => {
  const pageCount = query.page ? query.page - 1 : 0;

  const url = `${process.env.API_BASE_URL}/tour/nickname/${query.user}?page=${pageCount}&size=12&sort=createdAt`;
  const tourData = await fetch(url).then((response) => response.json());

  return {
    props: {
      tours: tourData?.page || [],
      totalPages: tourData?.metadata?.totalPages || 0,
    },
  };
};

export default Tours;
