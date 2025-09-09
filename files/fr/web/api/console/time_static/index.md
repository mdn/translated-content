---
title: "console : méthode statique time()"
slug: Web/API/console/time_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.time()`** démarre un chronomètre qui permet de mesurer la durée d'une opération. Chaque chronomètre peut être identifié avec un nom donné et on peut avoir jusqu'à 10&nbsp;000 chronomètres simultanés sur une même page. Lorsqu'on appelle [`console.timeEnd()`](/fr/docs/Web/API/console/timeEnd_static) avec le même nom, la durée associée depuis le démarrage du chronomètre correspondant s'affichera dans la console (exprimée en millisecondes).

Voir [la section sur les chronomètres de la documentation de `console`](/fr/docs/Web/API/console#chronomètres) pour plus de détails et d'exemples.

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
time()
time(libelle)
```

### Paramètres

- `libelle` {{optional_inline}}
  - : Une chaîne de caractères qui représente le nom à donner au chronomètre. Ce nom servira d'identifiant, qu'il faudra passer à [`console.timeEnd()`](/fr/docs/Web/API/console/timeEnd_static) pour arrêter le chronomètre correspondant. Si cet argument est omis, le libellé `"default"` sera utilisé.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`console.timeEnd()`](/fr/docs/Web/API/console/timeEnd_static)
- [`console.timeLog()`](/fr/docs/Web/API/console/timeLog_static)
