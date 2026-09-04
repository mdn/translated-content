---
title: "Document : méthode hasStorageAccess()"
short-title: hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Storage Access API")}}

La méthode **`hasStorageAccess()`** de l'interface {{DOMxRef("Document")}} retourne une promesse ({{JSxRef("Promise")}}) qui se résout avec une valeur booléenne indiquant si le document a accès aux [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) et aux [cookies non partitionnés](/fr/docs/Web/API/Storage_Access_API#cookies_partitionnés_et_non_partitionnés).

Cette méthode fait partie de [l'API Storage Access](/fr/docs/Web/API/Storage_Access_API).

> [!NOTE]
> Cette méthode est un autre nom pour {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}. Il n'y a actuellement aucun plan pour supprimer cette méthode au profit de {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}.

## Syntaxe

```js-nolint
hasStorageAccess()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec une valeur booléenne indiquant si le document a accès aux cookies tiers — `true` si c'est le cas, et `false` sinon.

Le résultat retourné par cette méthode peut être inexact dans certaines circonstances&nbsp;:

1. L'utilisateur·ice peut avoir des paramètres de navigateur actifs qui bloquent les cookies tiers&nbsp;; dans ce cas, `true` peut être retourné même si les cookies tiers restent inaccessibles. Pour gérer une telle situation, vous devez gérer avec souplesse toute erreur résultant de valeurs de cookies non récupérables&nbsp;; par exemple, informer l'utilisateur·ice que l'accès à ses paramètres personnalisés est bloqué et l'inviter à se connecter à nouveau pour les utiliser.
2. Le navigateur peut ne pas bloquer l'accès aux cookies tiers par défaut&nbsp;; dans ce cas, `false` peut être retourné même si les cookies tiers sont accessibles, et l'accès au stockage n'aurait pas besoin d'être demandé (c'est-à-dire via {{DOMxRef("Document.requestStorageAccess()")}}). Pour contourner ce problème, vous pouvez interroger {{DOMxRef("Document.cookie")}} pour savoir si vos cookies sont accessibles, et appeler {{DOMxRef("Document.requestStorageAccess()")}} s'ils ne le sont pas.

> [!NOTE]
> Si la promesse est résolue et qu'un évènement de geste utilisateur·ice était en cours de traitement lorsque la fonction a été appelée à l'origine, le gestionnaire de résolution s'exécutera comme si un geste utilisateur·ice était en cours de traitement, il pourra donc appeler des API qui nécessitent une activation par l'utilisateur·ice.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si le {{DOMxRef("Document")}} actuel n'est pas encore actif.

## Exemples

```js
document.hasStorageAccess().then((hasAccess) => {
  if (hasAccess) {
    // l'accès au stockage a déjà été accordé.
    console.log("accès aux cookies accordé");
  } else {
    // l'accès au stockage n'a pas encore été accordé ;
    // vous pouvez appeler requestStorageAccess().
    console.log("accès aux cookies refusé");
  }
});
```

> [!NOTE]
> Voir [Utiliser l'API Storage Access](/fr/docs/Web/API/Storage_Access_API/Using) pour un exemple plus complet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les méthodes {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}, {{DOMxRef("Document.requestStorageAccess()")}}, {{DOMxRef("Document.requestStorageAccessFor()")}}
- [Utiliser l'API Storage Access](/fr/docs/Web/API/Storage_Access_API/Using)
- [Introduction à l'API Storage Access <sup>(angl.)</sup>](https://webkit.org/blog/8124/introducing-storage-access-api/) (blog WebKit)
