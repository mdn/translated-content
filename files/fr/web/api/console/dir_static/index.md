---
title: "console : méthode statique dir()"
slug: Web/API/console/dir_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.dir()`** affiche une liste interactive des propriétés de l'objet JavaScript passé en argument. L'affichage est une hiérarchie avec des flèches/triangles qui permettent de déplier/replier le contenu des propriétés et objets enfants.

Autrement dit, `console.dir()` permet de voir l'ensemble des propriétés d'un objet JavaScript dans la console et de manipuler les niveaux hiérarchiques.

{{AvailableInWorkers}}

![console-dir.png](console-dir.png)

## Syntaxe

```js-nolint
dir(objet)
```

### Paramètres

- `objet`
  - : Un objet JavaScript dont on souhaite afficher les propriétés.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La documentation Edge sur `console.dir()`](https://learn.microsoft.com/fr-fr/microsoft-edge/devtools-guide-chromium/console/utilities#dir)
- [La documentation Chrome sur `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
