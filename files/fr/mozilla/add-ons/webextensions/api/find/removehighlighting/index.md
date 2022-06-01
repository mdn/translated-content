---
title: find.removeHighlighting()
slug: Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - find
  - removeHighlighting
translation_of: Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting
---
{{AddonSidebar()}}

Supprimer toute mise en évidence d'une recherche précédente qui a été appliquée par un appel précédent à {{WebExtAPIRef("highlightResults()")}}, ou par l'interface utilisateur native du navigateur.

## Syntaxe

```js
browser.find.removeHighlighting()
```

### Paramètres

Aucun

### Valeur retournée

Aucune.

## Compatibilité du navigateur

{{Compat("webextensions.api.find.removeHighlighting", 10)}}

## Exemples

```js
browser.find.removeHighlighting();
```
