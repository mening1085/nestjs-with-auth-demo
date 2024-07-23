export class UserReponseDto {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
export class ResponseUserDto {
  user: UserReponseDto;
  access_token: string;
}
