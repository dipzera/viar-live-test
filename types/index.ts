export type StartingPoint = {
  ath: string;
  atv: string;
  coverUrl: string;
  fov: string;
  previewUrl: string;
  sphereId: string;
  thumbUrl: string;
};

export type User = {
  nickname: string;
};

export type Views = {
  day: number;
  week: number;
  month: number;
  year: number;
  total: number;
};

export enum PAGE_VISIBILITY {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export type Tour = {
  id: string;
  collaborators: any[];
  createdAt: number;
  description: string;
  editable: boolean;
  keypoints: any[];
  paid: boolean;
  sphereCount: number;
  spheres: any[];
  startingPoint: StartingPoint;
  title: string;
  updatedAt: number;
  user: User;
  userTags: any[];
  views: Views;
  visibility: PAGE_VISIBILITY;
};

export type Metadata = {
  numberOfPage: number;
  numberOfPageElements: number;
  perPage: number;
  totalPages: number;
};

export type TourData = {
  metadata: Metadata;
  page: Tour;
};
