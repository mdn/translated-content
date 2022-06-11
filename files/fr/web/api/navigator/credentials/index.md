---
title: Navigator.credentials
slug: Web/API/Navigator/credentials
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Propriété
  - Reference
translation_of: Web/API/Navigator/credentials
---
{{securecontext_header}}{{APIRef("")}}

La propriété **`credentials`**, rattachée à l'interface {{domxref("Navigator")}}, renvoie l'interface {{domxref("CredentialsContainer")}} qui expose des méthodes pour demander des informations d'authentification. L'interface {{domxref("CredentialsContainer")}} notifie également l'agent utilisateur lorsqu'un évènement pertinent se produit (une connexion ou une déconnexion réussie par exemple). Cette propriété peut être utilisée pour détecter si la fonctionnalité est prise en charge ou non.

## Syntaxe

    var credentialsContainer = navigator.credentials

### Valeur

L'interface {{domxref("CredentialsContainer")}}.

## Exemples

```js
if ('credentials' in navigator) {
  navigator.credentials.get({password: true})
  .then(function(creds) {
    // Gérer les informations d'authentification
  });
} else {
  // Gérer la connexion comme avant
};
```

## Spécifications

| Spécification                                    | État                                         | Commentaires         |
| ------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('Credential Management')}} | {{Spec2('Credential Management')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Navigator.credentials")}}
