---
title: "Date : méthode statique now()"
short-title: now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`now()`** retourne le nombre de millisecondes écoulées depuis [l'epoch](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), qui est défini comme minuit au début du 1er janvier 1970, UTC.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.now()")}}

```js interactive-example
// Cet exemple prend 2 secondes à s'exécuter
const start = Date.now();

console.log("démarrage du minuteur...");
// Sortie attendue : "démarrage du minuteur..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`secondes écoulées = ${Math.floor(millis / 1000)}`);
  // Sortie attendue : "secondes écoulées = 2"
}, 2000);
```

## Syntaxe

```js-nolint
Date.now()
```

### Paramètres

Aucun.

### Valeur de retour

Un nombre représentant le [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), en millisecondes, de l'heure actuelle.

## Description

## Précision temporelle réduite

Pour offrir une protection contre les attaques de minutage et [l'empreinte numérique](/fr/docs/Glossary/Fingerprinting), la précision de `Date.now()` peut être arrondie selon les paramètres du navigateur. Sous Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut et vaut 2ms. Vous pouvez aussi activer `privacy.resistFingerprinting`, auquel cas la précision sera de 100ms ou la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, selon laquelle est la plus grande.

Par exemple, avec une précision temporelle réduite, le résultat de `Date.now()` sera toujours un multiple de 2, ou un multiple de 100 (ou de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) si `privacy.resistFingerprinting` est activé.

```js
// Précision temporelle réduite (2ms) pour Firefox 60
new Date().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// précision temporelle avec `privacy.resistFingerprinting` activé
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Exemples

### Mesurer le temps écoulé

Vous pouvez utiliser `Date.now()` pour obtenir l'heure actuelle en millisecondes, puis soustraire une heure précédente pour savoir combien de temps s'est écoulé entre les deux appels.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Temps écoulé : ${Date.now() - start} ms`);
```

Pour des scénarios plus complexes, vous pouvez utiliser plutôt [l'API Performance](/fr/docs/Web/API/Performance_API/High_precision_timing).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Date.now` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-date)
- La méthode API {{DOMxRef("Performance.now()")}}
- La méthode {{DOMxRef("console/time_static", "console.time()")}}
- La méthode {{DOMxRef("console/timeEnd_static", "console.timeEnd()")}}
