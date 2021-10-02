---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
tags:
  - API
  - Credential Management API
  - Interface
  - Reference
  - Web Authentication API
  - WebAuthn
translation_of: Web/API/CredentialsContainer
---
{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

L'interface **`CredentialsContainer`**, rattachée à l'[API Credential Management](/en-US/docs/Web/API/Credential_Management_API), expose des méthodes pour demander l'accès aux informations d'authentification et informer l'agent utilisateur lorsque des évènements pertinents se produisent (connexion et déconnexion réussies par exemple). On peut accéder à cette interface via {{domxref('Navigator.credentials')}}.

## Propriétés

Aucune.

### Gestionnaires d'évènements

Aucun.

## Methods

- {{domxref("CredentialsContainer.create()")}}{{securecontext_inline}}
  - : Cette méthode renvoie une promesse ({{jsxref("Promise")}}) qui est résolue avec une nouvelle instance {{domxref("Credential")}} construite selon les options fournies ou `null` si aucun objet `Credential` ne peut être créé.
- {{domxref("CredentialsContainer.get()")}}{{securecontext_inline}}
  - : Cette méthode renvoie une promesse ({{jsxref("Promise")}}) qui est résolue avec l'instance de {{domxref("Credential")}} qui correspond aux paramètres fournis.
- {{domxref("CredentialsContainer.preventSilentAccess()")}}{{securecontext_inline}}

  - : Cette méthode active un marqueur qui indique si une connexion automatique est autorisée pour les futures visites sur cette origine et renvoie une promesse ({{jsxref("Promise")}}) vide.

    On pourra par exemple appeler cette méthode après qu'un utilisateur se soit déconnecté d'un site web pour s'assurer qu'il n'est pas reconnecté à la prochaine visite. Dans des versions antérieures de la spécification, cette méthode était intitulée `requireUserMediation()`. Voir le tableau de compatibilité ci-après pour plus de détails.

- {{domxref("CredentialsContainer.store()")}}{{securecontext_inline}}
  - : Cette méthode enregistre des informations d'authentification pour un utilisateur à partir d'une instance {{domxref("Credential")}} fournie et renvoie cette instance dans une promesse ({{jsxref("Promise")}}).

## Exemples

```js
// TBD
```

## Spécifications

| Spécification                                    | État                                         | Commentaires         |
| ------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('Credential Management')}} | {{Spec2('Credential Management')}} | Définition initiale. |
| {{SpecName('WebAuthn')}}                 | {{Spec2('WebAuthn')}}                 | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.CredentialsContainer")}}
