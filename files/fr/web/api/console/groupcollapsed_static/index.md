---
title: "console : méthode statique groupCollapsed()"
slug: Web/API/console/groupCollapsed_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.groupCollapsed()`** crée un nouveau groupe dans le journal affiché dans la console. À la différence de [`console.group()`](/fr/docs/Web/API/console/group_static), le groupe créé ici est replié. La personne devra utiliser l'icône de dépliage pour révéler les informations du groupe.

Il faudra appeler [`console.groupEnd()`](/fr/docs/Web/API/console/groupEnd_static) pour fermer le groupe courant et revenir au niveau du groupe parent.

Voir [Utiliser les groupes dans la console](/fr/docs/Web/API/console#utiliser_des_groupes_dans_la_console) pour plus de détails et d'exemples.

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
groupCollapsed()
groupCollapsed(libelle)
```

### Paramètres

- `libelle` {{optional_inline}}
  - : Un libellé identifiant le groupe courant.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`console.group()`](/fr/docs/Web/API/console/group_static)
- [`console.groupEnd()`](/fr/docs/Web/API/console/groupEnd_static)
