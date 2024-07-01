---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
---

{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaîne de caractères représentant le grand entier pour la ou les locale(s) indiquée(s).

{{EmbedInteractiveExample("pages/js/bigint-tolocalestring.html")}}

## Syntaxe

```js
bigIntObj.toLocaleString([locales [, options]])
```

### Paramètres

- `locales` {{optional_inline}}
  - : Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument `locales`. Pour plus de détails quant à la forme et l'interprétation de l'argument `locales`, on consultera la page {{jsxref("Intl")}}.
- `options` {{optional_inline}}
  - : Un objet qui contient des propriétés de configuration. Pour les nombres, consulter {{jsxref("Number.prototype.toLocaleString()")}}, pour les dates, consulter {{jsxref("Date.prototype.toLocaleString()")}}.

### Valeur de retour

Une chaîne de caractères qui représente le grand entier selon la ou les locales et les options indiquées.

## Exemples

### Utiliser `toLocaleString()`

Voici un exemple d'utilisation simple, sans indiquer de locale ni d'options.

```js
var bigint = 3500n;

bigint.toLocaleString();
// Affichera "3500" en français
```

### Utiliser `locales`

Cet exemple illustre certaines variations pour la représentation d'une même valeur en fonction des différentes locales. En fonction de la langue utilisée par l'utilisateur et par votre interface, vous pourrez utiliser `locales` pour indiquer la locale ciblée :

```js
var bigint = 123456789123456789n;

// En allemand, on utilise les points pour séparer
// les milliers
console.log(bigint.toLocaleString("de-DE"));
// → 123.456.789.123.456.789

// La plupart des pays arabes utilise
// des chiffres hindoux-arabes
console.log(bigint.toLocaleString("ar-EG"));
// → ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// India utilise des séparateurs pour
// les milliers/lakh/crore
console.log(bigint.toLocaleString("en-IN"));
// → 1,23,45,67,89,12,34,56,789

// La clé d'extension requiert un système de numérotation
// par exemple, le système décimal chinois
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六,七八九,一二三,四五六,七八九

// Lorsqu'on demande une langue qui peut ne pas être prise
// en charge (ici le balinais), on peut ajouter une autre
// locale qui sera utilisée en recours (ici l'indonésien)
console.log(bigint.toLocaleString(["ban", "id"]));
// → 123.456.789.123.456.789
```

### Utiliser `options`

Ici, on personnalise le résultat fourni par `toLocaleString()` grâce à l'argument `options` :

```js
var bigint = 123456789123456789n;

// On utilise un format avec une devise
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// → 123.456.789.123.456.789,00 €

// Le yen japonais n'utilise pas de sous-unité
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// → ￥123,456,789,123,456,789

// On limite l'écriture aux trois premiers chiffres significatifs
console.log(bigint.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// → 1,23,00,00,00,00,00,00,000
```

## Performance

Lorsqu'on souhaite mettre en forme une grande quantité de nombres, mieux vaudra créer un objet {{jsxref("NumberFormat")}} et utiliser la fonction fournie par sa propriété {{jsxref("NumberFormat.format")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("BigInt.toString()")}}
