
    
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable({
      providedIn: 'root'
    })
    export class AuthService {
      private apiUrl = 'https://api.exemplo.com';

      constructor(private http: HttpClient) {}

      login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, { email, password });
      }

      logout(): void {
        // Lógica de logout
      }

      isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
      }
    }
