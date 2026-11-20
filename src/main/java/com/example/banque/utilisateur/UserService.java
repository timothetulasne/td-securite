package com.example.banque.utilisateur;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService  {
    @Autowired
    UtilisateurRepository repository;
    @Override
    public UserDetails loadUserByUsername(final String username)
            throws UsernameNotFoundException {
        Optional<Utilisateur> res = repository.findByLogin(username);
        if(res.isPresent()){
            return new User(res.get().getLogin(),res.get().getMotDePasse(),new ArrayList<>());
        }else{
            throw new UsernameNotFoundException("L'utilisateur n'existe pas");
        }
        
    }
    
}
    