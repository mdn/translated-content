---
title: PasswordCredential
slug: Web/API/PasswordCredential/PasswordCredential
---

{{APIRef("")}}{{Non-standard_header}}

Le constructeur **`PasswordCredential`** permet de créer un nouvel objet {{domxref("PasswordCredential")}}.

Pour les navigateurs qui prennent en charge cette fonctionnalité, une instance de cette classe peut être utilisée comme propriété `credential` pour l'objet `init` qui sera l'argument pour un appel à {{domxref('fetch')}}.

## Syntaxe

```js
var mesCredentials = new PasswordCredential(passwordCredentialData);
var mesCredentials = new PasswordCredential(HTMLFormElement);
```

### Paramètres

Le constructeur peut prendre l'une de ces deux valeurs en argument.

- `passwordCredentialData`

  - : Un dictionnaire `PasswordCredentialData` avec les champs suivants :

    - `iconURL` {{optional_inline}} : l'URL de l'image pour l'avatar de l'utilisateur.
    - `id` : l'identifiant de l'utilisateur qui se connecte.
    - `name` {{optional_inline}} : le nom de l'utilisateur qui se connecte.
    - `password` : le mot de passe de l'utilisateur qui se connecte.

- `htmlFormElement`
  - : Une référence à un objet {{domxref("HTMLFormElement")}} contenant les champs de saisis appropriés. Le formulaire correspondant devrait contenir au moins un champ `id` et un champ `password`. Le formulaire peut aussi demander un jeton CSRF.

## Exemples

Dans cet exemple, nous verrons comment définir un formulaire et capturer les données saisies pour créer un objet {{domxref("PasswordCredential")}}.

### HTML

```html
<form id="form" method="post">
  <input type="text" name="id" autocomplete="username" />
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

### JavaScript

Dans le script, on pourra faire référence à ce formulaire et l'utiliser pour créer un objet {{domxref("PasswordCredential")}} afin de le stocker dans le système de mots de passe de l'agent utilisateur.

```js
var form = document.querySelector("#form");
var creds = new PasswordCredential(form);
// Stocker les informations d'authentification
navigator.credentials.store(creds).then(function (creds) {
  // Faire quelque chose avec les informations d'authentification si besoin
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
