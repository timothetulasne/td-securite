package com.example.banque.utilisateur.out;

import java.util.Optional;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.banque.utilisateur.Utilisateur;
import com.example.banque.utilisateur.UtilisateurRepository;

/** Qui fait la requête en cours. Vide si personne n'est connecté. */
@Service 
public class UtilisateurCourant {

    private final UtilisateurRepository utilisateurs;

    public UtilisateurCourant(UtilisateurRepository utilisateurs) {
        this.utilisateurs = utilisateurs;
    }

    public Optional<Utilisateur> get() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated() 
                && !(authentication instanceof AnonymousAuthenticationToken)) {
            return utilisateurs.findByLogin(authentication.getName()); 
        } else {
            return null;
        }
        
    }
}
