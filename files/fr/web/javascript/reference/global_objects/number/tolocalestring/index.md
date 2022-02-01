---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
tags:
  - Internationalisation
  - JavaScript
  - Méthode
  - Number
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/toLocaleString
---
{{JSRef}}

La méthode **`toLocaleString()`** permet de renvoyer une chaîne de caractères représentant un nombre en tenant compte de la locale.

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

Les arguments `locales` et `options` permettent à l'application de spécifier les options de formatage selon la langue utilisée. Ces arguments ont un effet sur le comportement de la fonction. Les implémentations passées, qui ignoraient les arguments `locales` et `options` se basaient uniquement sur l'implémentation pour ce qui concernait la locale et le format.

## Syntaxe

    objetNumber.toLocaleString([locales [, options]])

### Paramètres

Voir la section [compatibilité des navigateurs](#compat "#Browser_Compatibility") afin de voir quels navigateurs supportent les arguments `locales` et `options`. L'exemple [Vérifier le support des arguments `locales` et `options`](#check) permet de détecter cette fonctionnalité.

> **Note :** L'API ECMAScript Internationalization, implémentée avec Firefox 29, a ajouté l'argument `locales` à la méthode [`Number.toLocaleString`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/toLocaleString). Si l'argument vaut `undefined`,cette méthode renvoie les nombres selon la locale du système d'exploitation, les versions antérieures de Firefox renvoyaient un résultat correspondant à la locale anglaise. Ce changement a été rapporté comme une régression, avec un risque de manque de rétrocompatibilité, avant d'être corrigé avec Firefox 55, voir le bug ({{bug(999003)}}).

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/NumberFormat','Paramètres')}}

### Valeur de retour

Une chaîne de caractères qui représente le nombre indiqué en tenant compte de la locale.

## Exemples

### Utiliser `toLocaleString()`

En utilisant la fonction simplement, sans spécifier de locale, la chaîne est formatée dans la locale par défaut et avec des options par défaut.

```js
var nombre = 3500;

console.log(nombre.toLocaleString()); // Affichera "3 500" pour la locale française
```

### Vérifier le support des arguments `locales` et `options`

Les arguments `locales` et `options` ne sont pas supportés par tous les navigateurs. Afin de vérifier qu'une implémentation les prend en charge, on se base sur le fait que les balises de langues incorrectes renvoient une exception{{jsxref("RangeError")}} :

```js
function testSupporttoLocaleString() {
    var nombre = 0;
    try {
        nombre.toLocaleString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
```

Avant ES5.1, il n'était pas nécessaire pour les implémentations de provoquer une erreur d'intervalle si `toLocaleString` était appelé avec des arguments.

Afin de vérifier le support pour tous les environnements, y compris ceux qui supportent ECMA-262 avant la version 5.1, on peut tester les fonctionnalités définies dans ECMA-402, directement sur `Number.prototype.toLocaleString` :

```js
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
```

Cela permet de tester la présence d'un objet global `Intl`, de vérifier que celui-ci n'est pas `null` et qu'il a une méthode `NumberFormat`.

### Utiliser l'argument `locales`

Cet exemple illustre les variations possibles entre les différents formats localisés. Afin que le format de langue utilisé soit celui de votre utilisateur, assurez-vous de fournir la langue utilisée (ainsi que des langues de secours) en utilisant l'argument `locales` :

```js
var nombre= 123456.789;

// Pour la locale allemande, on utilise un point comme séparateur
// pour les milliers et une virgule comme séparateur décimal
console.log(nombre.toLocaleString("de-DE"));
// → 123.456,789

// Les locales arabes, dans la plupart des pays arabophones, utilisent
// les chiffres arabes
console.log(nombre.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// En Inde, on utilise des séparateurs de milliers/lakh/crore
console.log(nombre.toLocaleString("en-IN"));
// → 1,23,456.789

// La clé d'extension nu indique un système numérique, ici le système chinois décimal
console.log(nombre.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// quand on souhaite utiliser un langage qui n'est pas supporté, on peut
// inclure un langage de secours. Exemple ici avec le balinais et l'indonésien
console.log(nombre.toLocaleString(["ban", "id"]));
// → 123.456,789
```

### Utiliser l'argument `options`

Les résultats fournis par `toLocaleString` peuvent être déclinés en utilisant l'argument `options` :

```js
var nombre = 123456.789;

// on formate selon une devise
console.log(nombre.toLocaleString("de-DE", {style: "currency", currency: "EUR"}));
// → 123.456,79 €

// le yen japonais ne possède pas de centimes
console.log(nombre.toLocaleString("ja-JP", {style: "currency", currency: "JPY"}))
// → ￥123,457

// on se limite à trois chiffres significatifs
console.log(nombre.toLocaleString("en-IN", {maximumSignificantDigits: 3}));
// → 1,23,000

// on utilise la langue du système pour la mise en
// forme des nombres
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" quand l'anglais est la langue par défaut
// → "30.000,65" quand l'allemand est la langue par défaut
// → "30 000,65" quand le français est la langue par défaut
```

## Performance

Lors du formatage de beaucoup de nombres, il est préférable de créer un objet {{jsxref("NumberFormat")}} et d'utiliser sa méthode {{jsxref("NumberFormat.format")}}.

## Spécifications

| Spécification                                                                                                                            | État                             | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                 | {{Spec2('ES3')}}             | Définition initiale. Implémentée avec JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.3', 'Number.prototype.toLocaleString')}}                                         | {{Spec2('ES5.1')}}         |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}             | {{Spec2('ES6')}}             |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}     | {{Spec2('ESDraft')}}     |                                                       |
| {{SpecName('ES Int 1.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                                     | {{Spec2('ES Int 1.0')}} |                                                       |
| {{SpecName('ES Int 2.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                                     | {{Spec2('ES Int 2.0')}} |                                                       |
| {{SpecName('ES Int Draft', '#sec-Number.prototype.toLocaleString', 'Number.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.toLocaleString")}}

## Voir aussi

- {{jsxref("Number.prototype.toString()")}}
