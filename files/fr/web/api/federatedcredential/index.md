---
title: FederatedCredential
slug: Web/API/FederatedCredential
tags:
  - API
  - Credential Management API
  - Interface
  - Reference
translation_of: Web/API/FederatedCredential
---
{{SeeCompatTable}}{{APIRef("Credential Management API")}}

L'interface **`FederatedCredential`**, rattachée à l'[API Credential Management](/en-US/docs/Web/API/Credential_Management_API), donne des détails quant aux informations d'authentification fournies par un fournisseur d'identité fédéré. Un fournisseur d'identité fédéré est une entité en laquelle un site web à confiance pour authentifier un utilisateur et qui fournit une API à cet effet. [OpenID Connect](http://openid.net/developers/specs/) est un exemple de _framework_ pour construire un fournisseur d'identité fédéré.

Pour les navigateurs qui le prennent en charge, une instance de cette interface pourra être passée comme propriété `credential` de l'objet `init` pour la méthode globale {{domxref('fetch')}}.

## Constructeur

- {{domxref("FederatedCredential.FederatedCredential()","FederatedCredential()")}}
  - : Crée un nouvel objet `FederatedCredential`.

## Propriétés

_Hérite des propriétés de l'interface parente : {{domxref("Credential")}}._

- {{domxref("FederatedCredential.provider")}} {{readonlyInline}}
  - : Une chaîne de caractères {{domxref("USVString")}} qui contient l'information sur le fournisseur d'authentification fédéré.

### Gestionnaires d'évènements

Aucun.

## Méthodes

Aucun.

## Exemples

```js
var cred = new FederatedCredential({
  id: id,
  name: name,
  provider: 'https://account.google.com',
  iconURL: iconUrl
});

// Enregistrer les informations d'authentification
navigator.credentials.store(cred)
  .then(function() {
  // Faire quelque chose
});
```

## Spécifications

| Spécification                                    | État                                         | Commentaires         |
| ------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('Credential Management')}} | {{Spec2('Credential Management')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.FederatedCredential")}}
