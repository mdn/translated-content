---
title: "Window : propriété origin"
slug: Web/API/Window/origin
l10n:
  sourceCommit: 5d19ba908628a2713c4ea9f30422dbd9563e1cf4
---

{{APIRef("DOM")}}

La propriété en lecture seule **`origin`** de l'interface [`Window`](/fr/docs/Web/API/Window) renvoie l'origine de la portée globale, sérialisée sous la forme d'une chaîne de caractères.

## Valeur

Une chaîne de caractères.

## Exemples

Exécuter le fragment de code suivant depuis la portée d'une fenêtre permettra d'afficher l'origine de la portée globale du document dans la console.

```js
console.log(window.origin);
```

Si l'origine n'est pas une combinaison schéma/hôte/port (par exemple avec une exécution locale via une URL `file://`), `origin` renverra la chaîne de caractères `"null"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
