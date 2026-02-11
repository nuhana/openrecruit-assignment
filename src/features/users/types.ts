export type UserStatus =
  | "status.hired"
  | "status.attraction"
  | "status.qualification"
  | "status.screening";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  number: number;
  rating: number;
  city: string;
  country: string;
  profileTypesCount: number;
  applicationCount: number;
  talentPoolCount: number;
  latestActivity: number;
  profilePictureId: string;
  status: UserStatus;
  humatch: number;
};

export type UsersResponse = {
  users: User[];
};