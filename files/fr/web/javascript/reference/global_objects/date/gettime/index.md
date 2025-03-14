---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
---

{{JSRef}}

La méthode **`getTime()`** renvoie la valeur numérique correspondant au temps pour la date renseignée, d'après le temps universel (c'est-à-dire relative à UTC, une mesure donnée par `getTime()` sera indépendante du fuseau horaire sur lequel on se trouve). Cette valeur numérique est le nombre de millisecondes écoulées depuis le premier janvier 1970 à minuit UTC.

Vous pouvez utiliser cette méthode pour vous affecter une date et un temps à une autre instance de `Date`. Cette méthode est fonctionnellement équivalente à la méthode {{jsxref("Date.valueof", "valueOf()")}}.

{{InteractiveExample("JavaScript Demo: Date.getTime()")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000
```

## Syntaxe

```js
dateObj.getTime();
```

### Valeur de retour

La valeur renvoyée par la méthode `getTime()` est le nombre de millièmes de secondes entre le 1 janvier 1970 à 00:00:00 UTC et la date indiquée.

## Exemples

### Utiliser `getTime()`

L'exemple qui suit assigne la valeur de `anniversaire` à `copie` :

```js
var anniversaire = new Date(1994, 11, 10); // 10 décembre 1994
var copie = new Date();
copie.setTime(anniversaire.getTime());
```

### Mesurer un temps d'exécution

Effectuer une soustration entre deux appels à `getTime()` donne la durée écoulée entre ces appels. On peut donc utiliser cette méthode afin de connaître la durée d'exécution de certaines opérations (voir également la méthode {{jsxref("Date.now()")}} qui peut permettre d'éviter d'instancier des objets intermédiaires).

```js
var fin, début;

début = new Date();
for (var i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
fin = new Date();

console.log(
  "Durée de cette opération : " + (fin.getTime() - début.getTime()) + " msec",
);
```

## Précision temporelle réduite

Afin de protéger contre les attaques de minutage et d'identification, la précision de `new Date().getTime()` peut être arrondie en fonction des paramètres du navigateur. Pour Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut et vaut, par défaut 20µs pour Firefox 59 et 2ms pour Firefox 60.

```js
// Précision temporelle réduite (2ms) pour Firefox 60
new Date().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// précision temporelle avec `privacy.resistFingerprinting` activé
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Pour Firefox, il est également possible d'activer `privacy.resistFingerprinting` auquel cas la précision sera 100ms ou la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` selon laquelle est plus grande.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.prototype.now()")}}
