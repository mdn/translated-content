---
title: "console : méthode statique timeStamp()"
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}{{Non-standard_header}}

La méthode **`console.timeStamp()`** permet d'ajouter un marqueur de performance pour l'outil de mesure des performances du navigateur ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Cela permet de dresser des corrélations entre un moment dans le code et d'autres évènements mesurés dans la chronologie (comme ceux relatifs à la disposition ou au rendu à l'écran).

Un argument optionnel permet de fournir un libellé pour le marqueur.

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
timeStamp(libelle)
```

### Paramètres

- `libelle` {{optional_inline}}
  - : Un libellé à utiliser pour le marqueur d'horodatage.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`console.time()`](/fr/docs/Web/API/console/time_static)
- [`console.timeLog()`](/fr/docs/Web/API/console/timeLog_static)
- [`console.timeEnd()`](/fr/docs/Web/API/console/timeEnd_static)
