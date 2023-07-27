---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
---

{{JSRef}} {{SeeCompatTable}}

La méthode **`Intl.supportedValuesOf()`** renvoie un tableau qui contient le calendrier, la collation, la devise, les systèmes de numérations ou les unités prises en charge par l'implémentation.

Les doublons sont omis et le tableau est trié selon l'ordre lexicographique (plus précisément par [`Array.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) avec `undefined` comme fonction de comparaison).

Cette méthode peut être utilisée afin de tester les fonctionnalités prises en charge par une implémentation donnée afin de les surcharger par une prothèse d'implémentation si nécessaire.
Elle peut également être utilisée pour construire des interfaces utilisateur permettant aux personnes de choisir leurs préférences pour la localisation (par exemple lorsque l'interface est construite dynamiquement en WebGL ou côté serveur).

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html")}}

## Syntaxe

```js
Intl.supportedValuesOf(cle);
```

### Paramètres

- `cle`
  - : Une clé qui indique la catégorie de valeurs à renvoyer. Il peut s'agir de&nbsp;: `"calendar"`, `"collation"`, `"currency"`,`"numberingSystem"`, `"timeZone"`, `"unit"`.

### Valeur de retour

Un tableau trié, contenant des chaînes de caractères uniques indiquant les valeurs prises en charge par l'implémentation pour la clé demandée.

### Exceptions

- `RangeError`
  - : Une clé non prise en charge a été passée en paramètre.

## Exemples

### Test de fonctionnalité

On peut vérifier que la méthode est prise en charge en la comparant à `undefined`&nbsp;:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // la méthode est prise en charge
}
```

### Obtenir toutes les valeurs d'une clé donnée

Pour obtenir les valeurs prises en charge pour les représentations calendaires, on pourra appeler la méthode avec la clé `"calendar"` et parcourir le tableau obtenu&nbsp;:

```js
Intl.supportedValuesOf("calendar").forEach(function (calendar) {
  // "buddhist", "chinese", "coptic", "dangi", ...
});
```

> **Note :** Le tableau renvoyé pour les calendriers contiendra toujours la valeur "gregory" (calendrier grégorien).

Les autres valeurs peuvent être obtenues de la même façon&nbsp;:

```js
Intl.supportedValuesOf("collation").forEach(function (collation) {
  // "big5han", "compat", "dict", "emoji", ...
});

Intl.supportedValuesOf("currency").forEach(function (currency) {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", ...
});

Intl.supportedValuesOf("numberingSystem").forEach(function (numberingSystem) {
  // "adlm", "ahom", "arab", "arabext", "bali", ...
});

Intl.supportedValuesOf("timeZone").forEach(function (timeZone) {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", ...
});

Intl.supportedValuesOf("unit").forEach(function (unit) {
  // "acre", "bit", "byte", "celsius", "centimeter", ...
});
```

### Exception à l'utilisation d'une clé invalide

```js
try {
  Intl.supportedValuesOf("uneCleInvalide");
} catch (err) {
  // Error: RangeError: invalid key: "uneCleInvalide"
}
```

## Prothèse d'émulation (<i lang="en">polyfill</i>)

[Prothèse pour `Intl.supportedValuesOf()` dans la proposition TC39](https://github.com/tc39/proposal-intl-enumeration/tree/master/polyfill)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
