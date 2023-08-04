---
title: FederatedCredential
slug: Web/API/FederatedCredential/FederatedCredential
---

{{APIRef("")}}{{Non-standard_header}}

Le constructeur **`FederatedCredential`** permet de créer un nouvel objet {{domxref("FederatedCredential")}}.

Pour les navigateurs qui le prennent en charge, une instance de cette classe pourra être passée comme propriété `credential` pour l'objet `init` utilisé comme argument pour {{domxref('fetch')}}.

## Syntaxe

```js
var mesCredentials = new FederatedCredential(init);
```

### Paramètres

- `init`

  - : Les propriétés de cet objet sont :

    - `provider` : une chaîne de caractères {{domxref("USVString")}} identifiant le fournisseur d'information d'authentification.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
