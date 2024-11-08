import { LoginResponseDto } from './login-response.dto';

export interface UserLogin extends Omit<LoginResponseDto, 'id'> {
  token: string;
  email: string;
}
