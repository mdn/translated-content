---
title: "Window : propriété origin"
slug: Web/API/Window/origin
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

La propriété en lecture seule **`origin`** de l'interface {{DOMxRef("Window")}} retourne l'origine de la portée globale, sérialisée sous la forme d'une chaîne de caractères.

## Valeur

Une chaîne de caractères.

## Exemples

Exécuter le fragment de code suivant depuis la portée d'une fenêtre permettra d'afficher l'origine de la portée globale du document dans la console.

```js
console.log(window.origin); // Sur cette page, retourne 'https://developer.mozilla.org'
```

Si l'origine n'est pas une combinaison schéma/hôte/port (par exemple avec une exécution locale via une URL `file://`), `origin` renverra la chaîne de caractères `"null"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("WorkerGlobalScope.origin")}}
- Le terme de glossaire {{Glossary("origin", "origine")}}
