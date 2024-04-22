---
title: CredentialsContainer.create()
slug: Web/API/CredentialsContainer/create
---

{{APIRef("Credential Management")}}{{SeeCompatTable}}

La méthode **`create()`**, rattachée à l'interface {{domxref("CredentialsContainer")}}, renvoie une promesse ({{jsxref("Promise")}}) qui est résolue en

- une nouvelle instance {{domxref("Credential")}} construite avec les options fournies
- {{jsxref("null")}} si aucun objet `Credential` ne peut être créé.

> **Note :** Cette méthode ne peut être utilisé que pour les contextes de navigation les plus hauts. Les appels lancés depuis une {{HTMLElement("iframe")}} résoudront la promesse sans aucun effet.

## Syntaxe

```js
var promise = CredentialsContainer.create([options]);
```

### Paramètres

- `options`

  - : Un objet de type {{domxref("CredentialCreationOptions")}} qui contient des options pour le nouvel objet `Credentials` demandé. Cet objet doit posséder au moins une des propriétés parmi `"password"`, `"federated"` ou `"publicKey"`. Les options sont :

    - password: {{optional_inline}} un objet {{domxref("HTMLFormElement")}} ou un objet {{domxref("PasswordCredentialData")}}

      - `id`: (obligatoire) {{domxref("USVString")}} hérité de {{domxref("CredentialData")}}.
      - `name`: {{optional_inline}} {{domxref("USVString")}}
      - `iconURL`: {{optional_inline}} {{domxref("USVString")}}
      - `password`: (required) {{domxref("USVString")}}

    - federated : {{optional_inline}} un objet {{domxref("FederatedCredentialInit")}}. Cet objet contient le nécessaire pour créer/obtenir des informations d'authentification fédérées. Les propriétés disponibles sont :

      - `id`: (required) {{domxref("USVString")}} hérité de {{domxref("CredentialData")}}.
      - `name`: {{optional_inline}} {{domxref("USVString")}}
      - `iconURL`: {{optional_inline}} {{domxref("USVString")}}
      - `provider`: (required) {{domxref("USVString")}}
      - `protocol`: {{optional_inline}} {{domxref("USVString")}}

    - `publicKey` : {{optional_inline}} un objet {{domxref("PublicKeyCredentialCreationOptions")}} qui décrit les options pour créer une information d'authentification [WebAuthn](/fr/docs/Web/API/Web_Authentication_API).

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) dont la valeur de résolution est une instance {{domxref("Credential")}} telle que {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}} ou {{domxref("PublicKeyCredential")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
