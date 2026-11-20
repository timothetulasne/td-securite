import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { API } from '../api/banque';

export interface Utilisateur {
  readonly login: string;
  readonly roles: readonly string[];
}

/**
 * Garde l'utilisateur connecté. Squelette du TD : à compléter en partie 2.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly utilisateur = signal<Utilisateur | null>(null);
  readonly http = inject(HttpClient);
  private login?: string;
  private password?: string;

  /**
   * Vérifie les identifiants auprès du serveur (GET /api/me avec l'en-tête
   * Basic) et mémorise l'utilisateur. Doit échouer (throw) si le serveur répond 401.
   */
  async connecter(login: string, motDePasse: string): Promise<void> {
    // TODO : appeler /api/me, retenir les identifiants pour l'intercepteur,
    // puis renseigner `utilisateur`.    
    this.password = motDePasse;
    this.login = login;
    //return firstValueFrom(this.http.get<void>(`${API}/me`, basic() }}));
  }

  deconnecter(): void {
    // TODO : oublier les identifiants et l'utilisateur.
  }

  basic() : string | undefined {
    if(this.login && this.password) {
      return btoa(this.login+":"+this.password);
    }
    return undefined;
  }
}
