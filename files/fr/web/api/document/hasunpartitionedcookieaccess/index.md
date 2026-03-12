---
title: "Document : méthode hasUnpartitionedCookieAccess()"
short-title: hasUnpartitionedCookieAccess()
slug: Web/API/Document/hasUnpartitionedCookieAccess
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Storage Access API")}}

La méthode **`hasUnpartitionedCookieAccess()`** de l'interface {{DOMxRef("Document")}} retourne une promesse ({{JSxRef("Promise")}}) qui se résout avec une valeur booléenne indiquant si le document a accès aux [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) et aux [cookies non partitionnés](/fr/docs/Web/API/Storage_Access_API#cookie_partitionnés_et_non_partitionnés).

Cette méthode fait partie de [l'API Storage Access](/fr/docs/Web/API/Storage_Access_API).

Cette méthode est un nouveau nom pour {{DOMxRef("Document.hasStorageAccess()")}}.

## Syntaxe

```js-nolint
hasUnpartitionedCookieAccess()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec une valeur booléenne indiquant si le document a accès aux cookies tiers — `true` si c'est le cas, et `false` sinon.

Voir {{DOMxRef("Document.hasStorageAccess()")}} pour plus de détails.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si le {{DOMxRef("Document")}} actuel n'est pas encore actif.

## Exemples

```js
document.hasUnpartitionedCookieAccess().then((hasAccess) => {
  if (hasAccess) {
    // l'accès au stockage a déjà été accordé.
    console.log("accès aux cookies accordé");
  } else {
    // l'accès au stockage n'a pas encore été accordé&nbsp;;
    // vous pouvez vouloir appeler requestStorageAccess().
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

- {{DOMxRef("Document.hasStorageAccess()")}}, {{DOMxRef("Document.requestStorageAccess()")}}, {{DOMxRef("Document.requestStorageAccessFor()")}}
- [Utiliser l'API Storage Access](/fr/docs/Web/API/Storage_Access_API/Using)
- [Introduction à l'API Storage Access <sup>(angl.)</sup>](https://webkit.org/blog/8124/introducing-storage-access-api/) (blog WebKit)
