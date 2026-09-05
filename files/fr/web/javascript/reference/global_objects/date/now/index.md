---
title: "Date : méthode statique now()"
short-title: now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

La méthode statique **`Date.now()`** retourne le nombre de millisecondes écoulées depuis [l'époque](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), qui est défini comme minuit au début du 1er janvier 1970, UTC.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.now()")}}

```js interactive-example
// Cet exemple prend 2 secondes à s'exécuter
const start = Date.now();

console.log("démarrage du minuteur...");
// Résultat attendu : "démarrage du minuteur..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`secondes écoulées = ${Math.floor(millis / 1000)}`);
  // Résultat attendu : "secondes écoulées = 2"
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

Pour offrir une protection contre les attaques de minutage et [l'empreinte numérique](/fr/docs/Glossary/Fingerprinting), la précision de `Date.now()` peut être réduite selon les réglages du navigateur.

L'horodatage est toujours un nombre entier de millisecondes, sa résolution est donc limitée à 1ms dans tous les contextes. Cela répond déjà à certains besoins élémentaires de sécurité et de confidentialité.

Dans Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut. Avec les réglages par défaut, l'horodatage a une résolution de 1ms. Si `privacy.resistFingerprinting` est activée, l'intervalle d'arrondi est de 16,667ms ou correspond à l'intervalle configuré par `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, selon la valeur la plus grande. Le résultat final est arrondi à un nombre entier.

Par exemple, voici des valeurs possibles dans Firefox&nbsp;:

```js
// Précision temporelle réduite (1ms) avec les réglages par défaut
Date.now();
// Peut être :
// 1519211809934
// 1519211810363
// 1519211811671
// …

// Précision temporelle réduite avec `privacy.resistFingerprinting` activée
Date.now();
// Peut être :
// 1519129853489
// 1519129853506
// 1519129853522
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
