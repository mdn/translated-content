---
title: PasswordCredential
slug: Web/API/PasswordCredential
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}

L'interface **`PasswordCredential`**, rattachée à l'[API Credential Management](/fr/docs/Web/API/Credential_Management_API), fournit des informations quant à un couple nom d'utilisateur/mot de passe. Pour les navigateurs qui prennent en charge cette fonctionnalité, une instance de cette interface peut être passée comme propriété `credential` de l'objet `init` utilisé comme argument de la méthode globale {{domxref('fetch')}}.

## Constructeur

- {{domxref("PasswordCredential.PasswordCredential()","PasswordCredential()")}}
  - : Crée un nouvel objet `PasswordCredential`.

## Propriétés

_Hérite des propriétés de l'interface parente, {{domxref("Credential")}}._

- {{domxref("PasswordCredential.additionalData")}} {{deprecated_inline()}}
  - : Une instance {{domxref("FormData")}} ou une instance {{domxref("URLSearchParams")}} ou {{jsxref("null")}}. Les données de cet objet seront ajoutées au corps de la requête et envoyées au point distant avec les informations d'authentification.
- {{domxref("PasswordCredential.iconURL")}} {{readonlyinline}}
  - : Une chaîne de caractères {{domxref("USVString")}} contenant une URL qui pointe vers une image servant d'icône. Cette image est destinée à être utilisée dans le sélecteur d'informations d'authentification. L'URL doit être accessible sans authentification.
- {{domxref("PasswordCredential.idName")}} {{deprecated_inline()}}
  - : Une chaîne de caractères {{domxref("USVString")}} contenant le nom qui sera uitlisé pour le champ d'identifiant lorsque l'objet courant sera envoyé au point distant grâce à {{domxref("fetch")}}. La valeur par défaut correspond à `"username"` mais il est possible de surcharger cette valeur afin qu'elle corresponde à ce qui est attendu par le service distant.
- {{domxref("PasswordCredential.name")}} {{readonlyinline}}
  - : Une chaîne de caractères {{domxref("USVString")}} qui contient un nom public, lisible par un humain et qui sera affiché dans le sélecteur d'informations d'authentification.
- {{domxref("PasswordCredential.password")}} {{readonlyinline}}
  - : Une chaîne de caractères {{domxref("USVString")}} qui contient le mot de passe associé aux informations d'authentification.
- {{domxref("PasswordCredential.passwordName")}} {{deprecated_inline()}}
  - : Une chaîne de caractères {{domxref("USVString")}} qui représente le nom utilisé pour le mot de passe lorsque l'objet courant est envoyé au point distant avec {{domxref("fetch")}}. Par défaut, cette propriété vaut `"password"` mais elle peut être surchargée afin que sa valeur corresponde à ce qui est attendu par le service distant.

### Gestionnaires d'évènement

Aucun.

## Méthodes

Aucune.

## Exemples

```js
var cred = new PasswordCredential({
  id: id,
  password: password,
  name: name,
  iconURL: iconUrl,
});

navigator.credentials.store(cred).then(function () {
  // Faire quelque chose avec.
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
