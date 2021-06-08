import { Userlogin } from './../model/Userlogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient


  ) { }
  entrar(userLogin: Userlogin):Observable<Userlogin>{
    return this.http.post<Userlogin>('http://localhost8080/usuarios/logar',Userlogin)

  }

  cadastrar(user: User):Observable<User>{
    return this.http.post<User>('http://localhost8080/usuarios/cadastrar',user)

    

  }

  getByIdUser(id: number):Observable<User>{
    return this.http.get<User>(`http://localhost8080/usuarios/${id}`)
  }
  logado(){
    let ok: boolean =false

    if (environment.token !=''){
      ok= true
    }
    

    

    return ok
  }

}
