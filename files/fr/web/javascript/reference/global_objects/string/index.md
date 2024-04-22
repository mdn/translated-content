---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef}}

Un objet **`String`** est utilisé afin de représenter et de manipuler une chaîne de caractères.

## Description

Les chaînes de caractères sont utiles pour stocker des données qui peuvent être représentées sous forme de texte. Parmi les opérations les plus utilisées pour manipuler les chaînes de caractères, on a : la vérification de leur longueur avec [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length), la construction et la concaténation avec [les opérateurs `+` et `+=`](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators), la recherche de sous-chaîne avec les méthodes [`includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ou [`indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) ou encore l'extraction de sous-chaînes avec la méthode [`substring()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring).

### Créer des chaînes de caractères

Il est possible de créer des chaînes de caractères comme des valeurs primitives ou comme des objets avec le constructeur [`String()`](/fr/docs/Web/JavaScript/Reference/String/String) :

```js
const string1 = "Une chaîne de caractères primitive";
const string2 = "Là encore une valeur de chaîne de caractères primitive";
const string3 = `Et ici aussi`;
```

```js
const string4 = new String("Un objet String");
```

Les valeurs primitives ou les objets représentant des chaînes de caractères peuvent être utilisés de façon interchangeable dans la plupart des situations. Voir ci-après [Chaînes de caractères : valeurs primitives et objets](#string_primitives_and_string_objects).

Les valeurs littérales pour les chaînes de caractères peuvent être indiquées avec des simples quotes (<kbd>'</kbd>), des doubles quotes (<kbd>"</kbd>) ou encore par des accents graves (<kbd>`</kbd>). Cette dernière forme permet de définir un [littéral de gabarit de chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Template_literals) avec lequel on pourra interpoler des expressions dans une chaîne de caractères.

### Accéder à un caractère

Il existe deux façons d'accéder à un caractère dans une chaîne. La première façon consiste à utiliser la méthode [`charAt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) :

```js
return "chat".charAt(2); // renvoie "a"
```

La seconde méthode, introduite avec ECMAScript 5, est de manipuler la chaîne comme un tableau, où les caractères sont les éléments du tableau et ont un indice correspondant à leur position :

```js
return "chat"[2]; // renvoie "a"
```

En utilisant la seconde notation, il est impossible de supprimer ou d'affecter une valeur à ces propriétés. En effet, les propriétés concernées ne sont ni accessibles en écriture ni configurables. Pour plus d'informations, voir la page de [`Object.defineProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### Comparer des chaînes de caractères

Les développeurs C utilisent la fonction `strcmp()` pour comparer des chaînes de caractères. En JavaScript, il est possible d'utiliser [les opérateurs inférieur et supérieur](/fr/docs/Web/JavaScript/Reference/Operators)&nbsp;:

```js
let a = "a";
let b = "b";
if (a < b) {
  // true
  console.log(a + " est inférieure à " + b);
} else if (a > b) {
  console.log(a + " est supérieure à " + b);
} else {
  console.log(a + " et " + b + " sont égales.");
}
```

On peut obtenir un résultat semblable avec la méthode [`localeCompare()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) qui permet de prendre en compte la locale utilisée et qui est héritée par toutes les instances de `String`.

On notera que `a == b` compare les chaînes de caractères `a` et `b` de façon sensible à la casse. Si on souhaite comparer des chaînes sans être sensible à la casse, on pourra utiliser une fonction semblable à&nbsp;:

```js
function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

On utilise ici une conversion en majuscules plutôt qu'en minuscules, car cela cause certains problèmes de conversion pour certains caractères UTF-8.

### Les différences entre les objets `String` et le type primitif pour les chaînes de caractères

En JavaScript, on distingue d'une part les objets `String` et d'autre par les valeurs primitives qui sont des chaînes de caractères (il en va de même pour les booléens/[`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) et les nombres/[`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)).

Les valeurs littérales (délimitées par des simples quotes, des doubles quotes ou des accents graves et les chaînes de caractères renvoyées par les appels à `String` sans le mot-clé [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new) sont des chaînes de caractères primitives. JavaScript convertit automatiquement les valeurs primitives en objets `String` et il est donc possible d'utiliser les méthodes objet de `String` sur les chaînes de caractères primitives. Dans les contextes où une méthode est appelée sur une chaîne de caractères primitive ou alors qu'on recherche une propriété, JavaScript convertira implicitement la valeur primitive et appellera la méthode ou accèdera à la propriété correspondante.

```js
let s_prim = "toto";
let s_obj = new String(s_prim);

console.log(typeof s_prim); // affiche "string"
console.log(typeof s_obj); // affiche "object"
```

Les chaînes primitives et les objets `String` renvoient des résultats différents lorsqu'ils sont évalués avec [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Les chaînes primitives sont traitées comme du code source, tandis que les objets `String` sont traités comme tous les autres objets, en renvoyant l'objet. Par exemple :

```js
let s1 = "2 + 2"; // crée une chaîne primitive
let s2 = new String("2 + 2"); // crée un objet String
console.log(eval(s1)); // renvoie le nombre 4
console.log(eval(s2)); // renvoie la chaîne "2 + 2"
```

Pour ces raisons, il peut y avoir certains problèmes quand le code attend une chaîne primitive plutôt qu'un objet `String`. Toutefois, cette distinction est rarement nécessaire en pratique.

Un objet `String` peut toujours être converti en son équivalent primitif grâce à la méthode [`valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf).

```js
console.log(eval(s2.valueOf())); // renvoie 4
```

### Échappement des caractères

En dehors des caractères classiques, des caractères spéciaux peuvent être encodés grâce à l'échappement :

| Code                                                                                                     | Résultat                                                                                                                |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `\0`                                                                                                     | Caractère nul (U+0000 NULL)                                                                                             |
| `\'`                                                                                                     | simple quote (U+0027 APOSTROPHE)                                                                                        |
| `\"`                                                                                                     | double quote (U+0022 QUOTATION MARK)                                                                                    |
| `\\`                                                                                                     | barre oblique inversée (U+005C REVERSE SOLIDUS)                                                                         |
| `\n`                                                                                                     | nouvelle ligne (U+000A LINE FEED; LF)                                                                                   |
| `\r`                                                                                                     | retour chariot (U+000D CARRIAGE RETURN; CR)                                                                             |
| `\v`                                                                                                     | tabulation verticale (U+000B LINE TABULATION)                                                                           |
| `\t`                                                                                                     | tabulation (U+0009 CHARACTER TABULATION)                                                                                |
| `\b`                                                                                                     | retour arrière (U+0008 BACKSPACE)                                                                                       |
| `\f`                                                                                                     | saut de page (U+000C FORM FEED)                                                                                         |
| `\uXXXX` (`XXXX` étant 4 chiffres hexadécimaux pour l'intervalle of 0x0000 - 0xFFFF)                     | Point de code Unicode entre U+0000 et U+FFFF (représente le plan Unicode multilingue basique)                           |
| `\u{X}` ... `\u{XXXXXX}` (`X…XXXXXX` étant 1 à 6 chiffres hexadécimaux pour l'intervalle 0x0 - 0x10FFFF) | Point de code Unicode entre U+0000 et U+10FFFF (représente l'intégralité d'Unicode)                                     |
| `\xXX` (`XX` étant 2 chiffres hexadécimaux pour l'intervalle 0x00 - 0xFF)                                | Point de code Unicode entre U+0000 et U+00FF (correspond à Basic Latin et Latin-1 supplement ; équivalent à ISO-8859-1) |

### Littéraux pour les chaînes longues

Il peut arriver que le code contienne des chaînes plutôt longues. Plutôt que d'avoir des lignes qui s'étirent sur tout le fichier et dans un éditeur de code, il est possible de casser la chaîne sur plusieurs lignes sans que cela modifie le contenu de la chaîne. Il existe deux façons de faire.

#### Méthode 1

```js
let chaineLongue =
  "Voici une très longue chaîne qui a besoin " +
  " d'être passée à la ligne parce que sinon " +
  " ça risque de devenir illisible.";
```

#### Méthode 2

On peut sinon utiliser le caractère barre oblique inversée "\\" à la fin de chaque ligne pour indiquer que la chaîne continue sur la ligne suivante. Il faut bien faire attention à ce que la barre oblique soit bien le dernier caractère de la ligne avant le saut de ligne. Sinon, cela ne fonctionnera pas. Voilà comment se présente cette forme :

```js
let chaineLongue =
  "Voici une très longue chaîne qui a besoin \
d'être passée à la ligne parce que sinon \
ça risque de devenir illisible.";
```

#### Méthode 3

Si les sauts de ligne doivent faire partie du résultat, on peut utiliser l'accent grave comme délimiteur de chaîne. Celui-ci permet d'utiliser des sauts de ligne à l'intérieur de la valeur littérale.

```js
let chaineLongue = `Voici une très longue chaîne qui a besoin
d'être passée à la ligne parce que sinon
ça risque de devenir illisible.`;
```

## Constructeur

- [`String()`](/fr/docs/Web/JavaScript/Reference/String/String)
  - : Crée un nouvel `String`. S'il est appelé comme une fonction plutôt que comme un constructeur, il effectue une conversion de la valeur en chaîne de caractères.

## Méthodes statiques

- [`String.fromCharCode(num1 [, ...[,numN]])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
  - : Renvoie une chaîne de caractères créée en utilisant la séquence indiquée de valeurs Unicode.
- [`String.fromCodePoint(num1 [, ...[,numN]])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
  - : Renvoie une chaîne de caractères créée en utilisant la séquence indiquée de points de code.
- [`String.raw()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/raw)

  - : Renvoie une chaîne de caractères créée à partir d'un gabarit de chaîne de caractères brut.

## Propriétés des instances

- [`String.prototype.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length)
  - : Cette propriété indique la longueur de la chaîne de caractères. Elle est en lecture seule.

## Méthodes des instances

- [`String.prototype.at(index)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/at){{Experimental_Inline}}
  - : Renvoie le caractère (exactement un seul codet UTF-16) à l'indice indiqué par `index`. Les indices négatifs sont acceptés, dans ce cas ils indiquent la position par rapport au dernier caractère.
- [`String.prototype.charAt(index)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
  - : Renvoie le caractère (exactement un seul codet UTF-16) à l'indice indiqué par `index`.
- [`String.prototype.charCodeAt(index)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
  - : Renvoie un nombre qui est la valeur du codet UTF-16 à l'indice indiqué par `index`.
- [`String.prototype.codePointAt(pos)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
  - : Renvoie un entier positif qui correspond à la valeur du codet UTF-16 à la position indiquée par `pos`.
- [`String.prototype.concat(str [,...strN ])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
  - : Combine le texte de deux (ou plusieurs) chaînes en une nouvelle chaîne de caractères.
- [`String.prototype.includes(searchString [, position])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
  - : Détermine si la chaîne de caractères courante contient `searchString`.
- [`String.prototype.endsWith(searchString [, length])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
  - : Détermine si la chaîne de caractères courante se termine par `searchString`.
- [`String.prototype.indexOf(searchValue [, fromIndex])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
  - : Renvoie l'indice, au sein de la chaîne courante, de la première occurrence de `searchValue` ou `-1` si ce motif n'est pas trouvé.
- [`String.prototype.lastIndexOf(searchValue [, fromIndex])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
  - : Renvoie l'indice, au sein de la chaîne courant, de la dernière occurrence de `searchValue` ou `-1` si ce motif n'est pas trouvé.
- [`String.prototype.localeCompare(compareString [, locales [, options]])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
  - : Renvoie un nombre indiquant si la chaîne courante vient avant ou après (ou est équivalente à ) `compareString` pour l'ordre de tri.
- [`String.prototype.match(regexp)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match)
  - : Permet de tester la correspondance d'une expression rationnelle entre `regexp` et la chaîne de caractères courante.
- [`String.prototype.matchAll(regexp)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
  - : Renvoie un itérateur contenant l'ensemble des correspondances de l'expression rationnelle `regexp` au sein de la chaîne de caractères courante.
- [`String.prototype.normalize([form])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  - : Renvoie la forme Unicode normalisée de la chaîne courante.
- [`String.prototype.padEnd(targetLength [, padString])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
  - : Complète la chaîne courante à la fin avec une chaîne donnée afin d'obtenir une longueur cible `targetLength` et renvoie la chaîne ainsi construite.
- [`String.prototype.padStart(targetLength [, padString])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
  - : Complète la chaîne courante au début avec une chaîne donnée afin d'obtenir une longueur cible `targetLength` et renvoie la chaîne ainsi construite.
- [`String.prototype.repeat(count)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
  - : Renvoie une chaîne de caractères qui est la répétition (`count` fois) de la chaîne de caractères courante.
- [`String.prototype.replace(searchFor, replaceWith)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
  - : Remplace les occurrences de `searchFor` par `replaceWith`. `searchFor` peut être une chaîne de caractères ou une expression rationnelle et `replaceWith` peut être une chaîne de caractères ou une fonction.
- [`String.prototype.replaceAll(searchFor, replaceWith)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
  - : Remplace toutes les occurrences de `searchFor` avec `replaceWith`. `searchFor` peut être une chaîne de caractères ou une expression rationnelle et `replaceWith` peut être une chaîne de caractères ou une fonction.
- [`String.prototype.search(regexp)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/search)
  - : Recherche une correspondance entre une expression rationnelle `regexp` et la chaîne de caractères courante.
- [`String.prototype.slice(beginIndex[, endIndex])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
  - : Extrait une section de la chaîne de caractères et renvoie une nouvelle chaîne de caractères.
- [`String.prototype.split([sep [, limit] ])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split)
  - : Renvoie un tableau de chaînes de caractères composé des fragments de la chaîne courante scindée à chaque occurrence de la sous-chaîne `sep`.
- [`String.prototype.startsWith(searchString [, length])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
  - : Détermine si la chaîne courante commence par la chaîne de caractères indiquée en paramètre (`searchString`).
- [`String.prototype.substring(indexStart [, indexEnd])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
  - : Renvoie une nouvelle chaîne de caractères contenant les caractères de la chaîne courante, situés à partir de l'indice donné ou entre les indices donnés.
- [`String.prototype.toLocaleLowerCase( [locale, ...locales])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)

  - : Renvoie une conversion en minuscules de la chaîne de caractères courante qui respecte la locale indiquée.

    Pour la plupart des langues, cela renverra la même valeur que [`toLowerCase()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

- [`String.prototype.toLocaleUpperCase( [locale, ...locales])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)

  - : Renvoie une conversion en majuscules de la chaîne de caractères courante qui respecte la locale indiquée.

    Pour la plupart des langues, cela renverra la même valeur que [`toUpperCase()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase).

- [`String.prototype.toLowerCase()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  - : Renvoie la valeur de la chaîne de caractères, convertie en minuscules.
- [`String.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toString)
  - : Renvoie une chaîne de caractères représentant l'objet courant. Surcharge la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`String.prototype.toUpperCase()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  - : Renvoie la valeur de la chaîne de caractères, convertie en majuscules.
- [`String.prototype.trim()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
  - : Retire les blancs situés au début et à la fin de la chaîne de caractères.
- [`String.prototype.trimStart()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
  - : Retire les blancs situés au début de la chaîne de caractères.
- [`String.prototype.trimEnd()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
  - : Retire les blancs situés à la fin de la chaîne de caractères.
- [`String.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf)
  - : Renvoie la valeur primitive de l'objet courant. Surcharge la méthode [`Object.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).
- [`String.prototype.@@iterator()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
  - : Renvoie un nouvel objet itérateur qui permet d'itérer sur les points de code composant la chaîne de caractère. Chaque point de code est renvoyé comme une chaîne de caractères.

## Méthodes de conversion HTML

> **Attention :** Ces méthodes sont dépréciées et ne doivent plus être utilisées.
>
> Elles ont des possibilités limitées et ne concernent qu'une petite sous-partie des éléments et attributs HTML disponibles.

- [`String.prototype.anchor()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/anchor)
  - : [`<a name="name">`](/fr/docs/Web/HTML/Element/a#attr-name) (cible hypertexte)
- [`String.prototype.big()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/big)
  - : [`<big>`](/fr/docs/Web/HTML/Element/big)
- [`String.prototype.blink()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/blink)
  - : [`<blink>`](/fr/docs/Web/HTML/Element/blink)
- [`String.prototype.bold()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/bold)
  - : [`<b>`](/fr/docs/Web/HTML/Element/b)
- [`String.prototype.fixed()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fixed)
  - : [`<tt>`](/fr/docs/Web/HTML/Element/tt)
- [`String.prototype.fontcolor()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor)
  - : [`<font color="color">`](/fr/docs/Web/HTML/Element/font#attr-color)
- [`String.prototype.fontsize()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize)
  - : [`<font size="size">`](/fr/docs/Web/HTML/Element/font#attr-size)
- [`String.prototype.italics()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/italics)
  - : [`<i>`](/fr/docs/Web/HTML/Element/i)
- [`String.prototype.link()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/link)
  - : [`<a href="url">`](/fr/docs/Web/HTML/Element/a#attr-href) (lien d'une URL)
- [`String.prototype.small()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/small)
  - : [`<small>`](/fr/docs/Web/HTML/Element/small)
- [`String.prototype.strike()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/strike)
  - : [`<strike>`](/fr/docs/Web/HTML/Element/strike)
- [`String.prototype.sub()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/sub)
  - : [`<sub>`](/fr/docs/Web/HTML/Element/sub)
- [`String.prototype.sup()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/sup)
  - : [`<sup>`](/fr/docs/Web/HTML/Element/sup)

## Exemples

### Conversion en chaîne de caractères

Il est possible d'utiliser `String` comme une alternative à [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toString) car cela permet de traiter les valeurs [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null), [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) et les [symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ainsi :

```js
let chainesSortie = [];
for (let i = 0, n = valeursEntree.length; i < n; ++i) {
  chainesSortie.push(String(valeursEntree[i]));
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Formatage du texte dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Text_formatting)
- [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [`DOMString`](/fr/docs/Web/API/DOMString)
- [Les chaînes binaires](/fr/docs/Web/API/DOMString/Binary)
