---
title: "console : méthode statique clear()"
slug: Web/API/console/clear_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.clear()`** vide l'affichage de la console, si celle-ci le permet. Une console graphique, comme celle utilisée par les navigateurs, autorisera ce vidage, tandis qu'une console affichée dans un terminal (comme celle de Node.js), ne prendra pas en charge ce comportement et la méthode n'aura pas d'effet (et ne déclenchera pas d'erreur non plus).

## Syntaxe

```js-nolint
clear()
```

### Paramètres

Aucune.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
