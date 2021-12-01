import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Login, User, UserNoPW } from '../models/User';



const httpOptions ={
  headers: new HttpHeaders({
    contentType : 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:  any;
  user: User;
  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    ) { }

    prepEndpoint(ep){
      //1.로컬서버에서 개발시
      //return 'http://localhost:3000/' + ep;
      //2. 클라우드 서버에서 운영시 
      //return ep;

      //3. Ionic app 개발시 클라우드 서비스 주소 이용
      return 'https://jongjong2.herokuapp.com/' +ep;
    }

  registerUser(user: User): Observable<any> {
    //const registerUrl = 'http://localhost:3000/users/register';
    const registerUrl = this.prepEndpoint('users/register');
    return this.http.post(registerUrl, user, httpOptions);
  }
  
  authenticateUser(login: Login): Observable<any> {
    //const loginUrl = 'http://localhost:3000/users/authenticate';
    const loginUrl = this.prepEndpoint('users/authenticate');
    return this.http.post<any>(loginUrl, login ,httpOptions);
    }

  storeUserData(token: any, userNoPW: UserNoPW){
    localStorage.setItem('authToken', token);
    localStorage.setItem('userNoPW', JSON.stringify(userNoPW));
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userNoPW');
    //localStorage.clear();
  }

  getProfile(): Observable<any> {
    const authToken: any = localStorage.getItem('authToken');
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: 'Bearer '+authToken,
      }),
    };
      //const profileUrl = 'http://localhost:3000/users/profile';
      const profileUrl = this.prepEndpoint('users/profile');
      return this.http.get<any>(profileUrl, httpOptions1);

  }

  loggedIn() : boolean{
    let authToken: any = localStorage.getItem('authToken');
    return !this.jwtHelper.isTokenExpired(authToken); // expired됐을 때 yes 면 만료가 된 것이니 앞에 ! 붙여줘야 함 
  }

}



