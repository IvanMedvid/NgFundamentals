export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
}

export class LoginModel {
    public userName: string;
    public password: string;

    constructor(userName: string, password: string) {
      this.userName = userName;
      this.password = password; 
    }
}
