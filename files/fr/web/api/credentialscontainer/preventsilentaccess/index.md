---
title: CredentialsContainer.preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Méthode
  - Reference
translation_of: Web/API/CredentialsContainer/preventSilentAccess
---
{{APIRef("")}}{{SeeCompatTable}}

La méthode **`preventSilentAccess()`**, rattachée à l'interface  {{domxref("CredentialsContainer")}}, permet de paramétrer une option pour indiquer si les connexions automatiques sont autorisées pour les futures visites à l'origine. Elle renvoie ensuite une promesse ({{jsxref("Promise")}}) vide.

Cette méthode peut, par exemple, être appelée lorsqu'un utilisateur se déconnecte d'un site web afin de s'assurer qu'il n'est pas reconnecté à la prochaine visite. Cette gestion doit être gérée pour chaque origine.

Dans des versions antérieures de la spécification, cette méthode était intitulée `requireUserMediation()`. Voir le tableau ci-après sur la compatibilité des navigateurs pour plus de détails.

## Syntaxe

    var Promise = CredentialsContainer.preventSilentAccess()

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) vide.

## Spécifications

| Spécification                                                                                                                                    | État                                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('Credential Management','#dom-credentialscontainer-preventsilentaccess','preventSilentAccess()')}} | {{Spec2('Credential Management')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.CredentialsContainer.preventSilentAccess")}}
