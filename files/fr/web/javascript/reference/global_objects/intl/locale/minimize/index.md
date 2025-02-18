---
title: Intl.Locale.prototype.minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
---

{{JSRef}}

La méthode **`Intl.Locale.prototype.minimize()`** tente de retirer les informations qui auraient pu être ajoutée à une locale lors d'un appel à {{jsxref("Locale/maximize", "Locale.maximize()")}}.

{{InteractiveExample("JavaScript Demo: Intl.Locale.prototype.minimize()")}}

```js interactive-example
const english = new Intl.Locale("en-Latn-US");
const korean = new Intl.Locale("ko-Kore-KR");
const arabic = new Intl.Locale("ar-Arab-EG");

console.log(english.minimize().baseName);
// Expected output: "en"

console.log(korean.minimize().baseName);
// Expected output: "ko"

console.log(arabic.minimize().baseName);
// Expected output: "ar"
```

## Syntaxe

```js
locale.minimize();
```

### Valeur de retour

Une instance {{jsxref("Locale", "Locale")}} dont la propriété `baseName` renvoie le résultat de l'exécution de [l'algorithme de suppression des composantes probables](https://www.unicode.org/reports/tr35/#Likely_Subtags) sur `locale.baseName`.

## Description

Cette méthode effectue l'opération inverse de {{jsxref("Locale/maximize", "maximize()")}}, en retirant les fragments de langue/script ou de région qui sont superflus. Ainsi, `"en-Latn"` pourra être minimisé en `"en"` car l'anglais s'écrit uniquement à l'aide de l'alphabet latin.

`minimize()` ne modifie pas les éventuelles extensions décrites dans la chaîne de locale (après le `"-u"`) ou via l'objet de configuration (elle ne modifie donc pas les valeurs de {{jsxref("Locale/hourCycle", "Locale.hourCycle")}}, {{jsxref("Locale/calendar", "Locale.calendar")}} et {{jsxref("Locale/numeric", "Locale.numeric")}}).

## Exemples

```js
let maLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h24",
  calendar: "gregory",
});
console.log(maLocale.baseName); // Affiche "fr-Latn-FR"
console.log(maLocale.toString()); // Affiche "fr-Latn-FR-u-ca-gregory-hc-h24"
let maLocMinimized = maLocale.minimize();

console.log(maLocMinimized.baseName);
// Affiche "fr" car le français est écrit uniquement avec l'alphabet latin et
// parlé le plus largement en France

console.log(maLocMinimized.toString());
// Affiche "fr-u-ca-gregory-hc-h24". On voit ici que les extensions
// (décrites après "-u") restent inchangées.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- {{jsxref("Locale/baseName", "Intl.Locale.baseName")}}
