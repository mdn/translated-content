---
title: "Window : propriété origin"
slug: Web/API/Window/origin
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`origin`** de l'interface {{DOMxRef("Window")}} retourne l'origine de la portée globale, sérialisée sous la forme d'une chaîne de caractères.

## Valeur

Une chaîne de caractères.

## Exemples

Exécuter le fragment de code suivant depuis la portée d'une fenêtre permet d'afficher l'origine de la portée globale du document dans la console.

```js
console.log(window.origin); // Sur cette page, retourne 'https://developer.mozilla.org'
```

Si l'origine n'est pas une combinaison schéma/hôte/port (par exemple avec une exécution locale avec une URL `file://`), `origin` retourne la chaîne de caractères `"null"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("WorkerGlobalScope.origin")}}
- Le terme de glossaire {{Glossary("origin", "origine")}}
