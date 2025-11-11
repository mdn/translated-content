---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
---

{{AddonSidebar}}

Travailler avec des identités contextuelles&nbsp;: lister, créer, supprimer et mettre à jour des identités contextuelles.

Les «&nbsp;identités contextuelles », également appelées « conteneurs », sont des fonctions de navigation qui répondent à l'idée que les utilisateurs assument plusieurs identités lorsqu'ils naviguent sur le web, et souhaitent maintenir une certaine séparation entre ces identités. Par exemple, un utilisateur peut considérer que son « identité de travail&nbsp;» est distincte de son «&nbsp;identité personnelle&nbsp;» et ne veut pas partager les cookies entre ces deux contextes.

Avec la fonctionnalité d'identités contextuelles, chaque identité contextuelle a un nom, une couleur et une icône. De nouveaux onglets peuvent être assignés à une identité et le nom, l'icône et la couleur apparaîtront dans la barre d'adresse. En interne, chaque identité possède son propre magasin de cookies qui n'est pas partagé avec d'autres onglets…

![](containers.png)Les identités contextuelles sont une fonctionnalité expérimentale de Firefox et ne sont activées par défaut dans Firefox Nightly. Pour activer dans d'autres versions de Firefox, définissez la préférence `privacy.userContext.enabled` sur `true`. Notez que bien que les identités contextuelles soient disponibles dans Firefox pour Android, il n'y a pas d'interface utilisateur pour travailler avec eux dans cette version pour travailler avec eux dans cette versiondu navigateur.

Avant Firefox 57, l'API `contextualIdentities` n'était disponible que si la fonctionnalité d'identités contextuelles était activée. Si une extension essayait d'utiliser l'API `contextualIdentities` sans activer la fonctionnalité, les appels de méthode résolvaient leurs promesses avec `false`.

À partir de Firefox 57, si une extension utilisant l'API `contextualIdentities` est installée, la fonctionnalité d'identités contextuelles est automatiquement activée. Notez cependant qu'il est toujours possible pour l'utilisateur de désactiver la fonctionnalité en utilisant la préférence «&nbsp;privacy.userContext.enabled&nbsp;». Si cela se produit, les appels de méthode `contextualIdentities` rejetteront leurs promesses avec un message d'erreur.

Pour plus d'informations sur les identités contextuelles, consultez [ce guide](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers).

Les identités contextuelles ne sont actuellement pas supportes dans les autres navigateurs.

Pour utiliser cette API, vous devez inclure la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) « contextualIdentities » dans votre fichier [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

## Types

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Contient des informations sur une identité contextuelle.

## Fonctions

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Crée une nouvelle identité contextuelle.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Récupère une identité contextuelle unique, compte tenu de son ID de cookie.
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : Récupère toutes les identités contextuelles ou toutes les identités contextuelles avec un nom particulier.
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : Met à jour les propriétés d'une identité contextuelle existante.
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : Supprime une identité contextuelle.

## Événements

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : Lancé lorsqu'une identité contextuelle est créée
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : Lancé lorsqu'une identité contextuelle est supprimée
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : Lancé lorsqu'une ou plusieurs propriétés d'une identité contextuelle sont mises à jour

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}
