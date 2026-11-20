---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Un objet **`String`** est utilisé afin de représenter et de manipuler une séquence de caractères.

## Description

Les chaînes de caractères sont utiles pour contenir des données pouvant être représentées sous forme de texte. Certaines des opérations les plus utilisées sur les chaînes de caractères consistent à vérifier leur longueur ({{JSxRef("String/length", "length")}}), à les construire et à les concaténer en utilisant les opérateurs de chaîne de caractères [`+` et `+=`](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#opérateurs_de_chaîne_de_caractères), à vérifier l'existence ou la position de sous-chaînes de caractères avec la méthode {{JSxRef("String/indexOf", "indexOf()")}}, ou à extraire des sous-chaînes de caractères avec la méthode {{JSxRef("String/substring", "substring()")}}.

### Créer des chaînes de caractères

Les chaînes de caractères peuvent être créées comme des valeurs primitives, à partir de littéraux de chaîne de caractères, ou comme des objets, en utilisant le constructeur
{{JSxRef("String/String", "String()")}}&nbsp;:

```js-nolint
const string1 = "Une chaîne de caractères primitive";
const string2 = 'Là encore une valeur de chaîne de caractères primitive';
const string3 = `Et ici aussi`;
```

```js
const string4 = new String("Un objet String");
```

Les chaînes de caractères primitives et les objets de chaîne de caractères partagent de nombreux comportements, mais présentent d'autres différences et particularités importantes.
Voir «&nbsp;[Chaîne de caractères primitive et objets de chaîne de caractères](#chaîne_de_caractères_primitive_et_objets_de_chaîne_de_caractères)&nbsp;» ci-dessous.

Les littéraux de chaîne de caractères peuvent être définis en utilisant des guillemets simples ou doubles, qui sont traités de manière identique, ou en utilisant le caractère backtick <kbd>`</kbd>. Cette dernière forme définit un [littéral de gabarit](/fr/docs/Web/JavaScript/Reference/Template_literals)&nbsp;: avec cette forme, vous pouvez interpoler des expressions. Pour plus d'informations sur la syntaxe des littéraux de chaîne de caractères, voir [la grammaire lexicale](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#littéraux_de_chaîne_de_caractères).

### Accéder à un caractère

Il existe deux façons d'accéder à un caractère individuel dans une chaîne de caractères. La première consiste à utiliser la méthode {{JSxRef("String/charAt", "charAt()")}}&nbsp;:

```js
"chat".charAt(2); // retourne "a"
```

Une autre méthode consiste à considérer la chaîne de caractères comme un objet de type tableau, dans lequel chaque caractère correspond à un index numérique&nbsp;:

```js
"chat"[2]; // retourne "a"
```

Lorsque vous utilisez la notation entre crochets pour accéder aux propriétés, toute tentative de suppression ou d'affectation d'une valeur à ces propriétés échoue. Les propriétés concernées ne sont ni modifiables ni configurables. (Voir {{JSxRef("Object.defineProperty()")}} pour plus d'informations.)

### Comparer des chaînes de caractères

Utilisez les [opérateurs inférieur et supérieur](/fr/docs/Web/JavaScript/Reference/Operators) pour comparer des chaînes de caractères&nbsp;:

```js
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} est inférieure à ${b}`);
} else if (a > b) {
  console.log(`${a} est supérieure à ${b}`);
} else {
  console.log(`${a} et ${b} sont égales.`);
}
```

Notez que tous les opérateurs de comparaison, y compris [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) et [`==`](/fr/docs/Web/JavaScript/Reference/Operators/Equality), comparent les chaînes de caractères en tenant compte de la casse. Une façon courante de comparer des chaînes de caractères sans tenir compte de la casse consiste à convertir les deux chaînes de caractères dans le même format (majuscule ou minuscule) avant de les comparer.

```js
function sontEgauxSansSensibiliteDeCasse(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Le choix de transformer par [`toUpperCase()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) ou [`toLowerCase()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) est en grande partie arbitraire, et aucune des deux méthodes n'est entièrement robuste lorsqu'on s'étend au-delà de l'alphabet latin. Par exemple, la lettre minuscule allemande `ß` et `ss` sont toutes deux transformées en `SS` par `toUpperCase()`, tandis que la lettre turque `ı` est faussement signalée comme inégale à `I` par `toLowerCase()` sauf si l'on utilise spécifiquement [`toLocaleLowerCase("tr")`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const sontEgauxEnMajuscules = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const sontEgauxEnMinuscules = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

sontEgauxEnMajuscules("ß", "ss"); // true ; doit être false
sontEgauxEnMinuscules("ı", "I"); // false ; doit être true
```

Une solution robuste et tenant compte des paramètres régionaux pour tester l'égalité sans tenir compte de la casse consiste à utiliser l'API {{JSxRef("Intl.Collator")}} ou la méthode [`localeCompare()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) de la chaîne de caractères — elles partagent la même interface — avec l'option [`sensitivity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) définie sur `"accent"` ou `"base"`.

```js
const sontEgaux = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

sontEgaux("ß", "ss", "de"); // false
sontEgaux("ı", "I", "tr"); // true
```

La méthode `localeCompare()` permet de comparer des chaînes de caractères de manière similaire à `strcmp()` — elle permet de trier des chaînes de caractères en tenant compte des paramètres régionaux.

### Les différences entre les objets `String` et le type primitif pour les chaînes de caractères

Notez que JavaScript distingue entre les objets `String` et les valeurs {{Glossary("Primitive", "de chaîne de caractères primitive")}}. (Il en va de même pour {{JSxRef("Boolean")}} et {{JSxRef("Number")}}.)

Les littéraux de chaînes de caractères (délimités par des quotes doubles ou simples) et les chaînes de caractères retournées par les appels à `String` dans un contexte non constructeur (c'est-à-dire appelés sans utiliser le mot-clé {{JSxRef("new")}}) sont des chaînes de caractères primitives. Dans les contextes où une méthode doit être invoquée sur une chaîne de caractères primitive ou qu'une recherche de propriété se produit, JavaScript enveloppe automatiquement la chaîne de caractères primitive et appelle la méthode ou effectue la recherche de propriété sur l'objet enveloppant à la place.

```js
const strPrim = "toto"; // Un littéral est une chaîne de caractères primitive
const strPrim2 = String(1); // Converti en chaîne de caractères primitive "1"
const strPrim3 = String(true); // Converti en chaîne de caractères primitive "true"
const strObj = new String(strPrim); // String avec new retourne un objet enveloppant de chaîne de caractères.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> [!WARNING]
> Vous devez rarement utiliser `String` comme constructeur.

Les chaînes de caractères primitives et les objets `String` donnent également des résultats différents lorsqu'ils sont utilisés avec {{JSxRef("Global_Objects/eval", "eval()")}}. Les primitives passées à `eval` sont traitées comme du code source&nbsp;; les objets `String` sont traités comme tous les autres objets, en renvoyant l'objet. Par exemple&nbsp;:

```js
const s1 = "2 + 2"; // crée une chaîne de caractères primitive
const s2 = new String("2 + 2"); // crée un objet String
console.log(eval(s1)); // retourne le nombre 4
console.log(eval(s2)); // retourne la chaîne de caractères "2 + 2"
```

Pour ces raisons, le code peut échouer lorsqu'il rencontre des objets `String` alors qu'il attend une chaîne de caractères primitive, bien que, de manière générale, les auteur·ice·s n'aient pas à se soucier de cette distinction.

Un objet `String` peut toujours être converti en son équivalent primitif grâce à la méthode {{JSxRef("String/valueOf", "valueOf()")}}.

```js
console.log(eval(s2.valueOf())); // retourne le nombre 4
```

### Conversion en chaîne de caractères

De nombreuses opérations intégrées qui attendent des chaînes de caractères convertissent d'abord leurs arguments en chaînes de caractères (ce qui explique en grande partie pourquoi les objets `String` se comportent de manière similaire aux chaînes de caractères primitives). [L'opération <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) peut être résumée comme suit&nbsp;:

- Les chaînes de caractères sont retournées telles quelles.
- [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) se transforme en `"undefined"`.
- [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) se transforme en `"null"`.
- `true` se transforme en `"true"`&nbsp;; `false` se transforme en `"false"`.
- Les nombres se transforment avec le même algorithme que [`toString(10)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).
- Les [grands entiers](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) se transforment avec le même algorithme que [`toString(10)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString).
- Les [symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lèvent une {{JSxRef("TypeError")}}.
- Les objets sont d'abord [convertis en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_en_primitive) en appelant leurs méthodes [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (avec `"string"` comme indice), `toString()`, et `valueOf()`, dans cet ordre. La primitive résultante est ensuite convertie en chaîne de caractères.

Il existe plusieurs façons d'obtenir pratiquement le même effet en JavaScript.

- Les [littéraux de modèle](/fr/docs/Web/JavaScript/Reference/Template_literals)&nbsp;: `` `${x}` `` effectuent exactement les étapes de conversion de chaîne de caractères expliquées ci-dessus pour l'expression intégrée.
- La fonction [`String()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/String)&nbsp;: `String(x)` utilise le même algorithme pour convertir `x`, sauf que les [symboles] (/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ne provoquent pas de {{JSxRef("TypeError")}}, mais retournent `"Symbol(description)"`, où `description` est la [description](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) du symbole.
- Utilisation de [l'opérateur `+`](/fr/docs/Web/JavaScript/Reference/Operators/Addition)&nbsp;: `"" + x` convertit son opérande en un _type primitif_ plutôt qu'en une _chaîne de caractères_ et, pour certains objets, présente un comportement totalement différent de la conversion habituelle en chaîne de caractères. Consultez sa [page de référence](/fr/docs/Web/JavaScript/Reference/Operators/Addition) pour plus de détails.

Selon votre cas d'utilisation, vous pouvez utiliser `` `${x}` `` (pour imiter le comportement intégré) ou `String(x)` (pour gérer les valeurs de type symbole sans générer d'erreur), mais vous ne devez pas utiliser `"" + x`.

### Caractères UTF-16, points de code Unicode et groupes de graphèmes

Les chaînes de caractères sont essentiellement représentées sous forme de séquences [d'unités de code UTF-16 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/UTF-16). Dans le jeu de caractères UTF-16, chaque unité de code a une longueur exacte de 16 bits. Cela signifie qu'il existe au maximum 2<sup>16</sup>, soit 65 536 caractères possibles pouvant être représentés par des unités de code UTF-16 individuelles. Ce jeu de caractères est appelé [plan multilingue de base (BMP) <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) et comprend les caractères les plus courants, tels que les alphabets latin, grec et cyrillique, ainsi que de nombreux caractères d'Asie de l'Est. Chaque unité de code peut être écrite dans une chaîne de caractères sous la forme `\u` suivie d'exactement quatre chiffres hexadécimaux.

Cependant, l'ensemble complet des caractères Unicode est bien, bien plus vaste que 65 536. Les caractères supplémentaires sont stockés en UTF-16 sous forme de _paires de substituts_, c'est-à-dire des paires d'unités de code de 16 bits représentant un seul caractère. Pour éviter toute ambiguïté, les deux parties de la paire doivent être comprises entre `0xD800` et `0xDFFF` et ces unités de code ne sont pas utilisées pour encoder des caractères à une seule unité de code. (Plus précisément, les substituts de tête, également appelés unités de code de substitut haut, ont des valeurs comprises entre `0xD800` et `0xDBFF` inclus, tandis que les substituts de queue, également appelés unités de code de substitut bas, ont des valeurs comprises entre `0xDC00` et `0xDFFF` inclus.) Chaque caractère Unicode, composé d'une ou deux unités de code UTF-16, est également appelé _point de code Unicode_. Chaque point de code Unicode peut être écrit dans une chaîne de caractères sous la forme `\u{xxxxxx}`, où `xxxxxx` représente 1 à 6 chiffres hexadécimaux.

Un «&nbsp;caractère de remplacement isolé&nbsp;» est une unité de code de 16 bits répondant à l'une des descriptions suivantes&nbsp;:

- Il se situe dans la plage comprise entre `0xD800` et `0xDBFF`, incluant ces valeurs (c'est-à-dire qu'il s'agit d'un substitut de début), mais il s'agit de la dernière unité de code de la chaîne de caractères, ou l'unité de code suivante n'est pas un substitut de fin.
- Elle se situe dans la plage comprise entre `0xDC00` et `0xDFFF`, incluant ces valeurs (c'est-à-dire qu'il s'agit d'un substitut de fin), mais elle est la première unité de code de la chaîne de caractères, ou l'unité de code précédente n'est pas un substitut de début.

Les caractères de substitution isolés ne représentent aucun caractère Unicode. Bien que la plupart des méthodes intégrées de JavaScript les gèrent correctement, car elles fonctionnent toutes sur la base d'unités de code UTF-16, les caractères de substitution isolés ne constituent souvent pas des valeurs valides lors d'interactions avec d'autres systèmes — par exemple, [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) lève une exception {{JSxRef("URIError")}} pour les caractères de substitution isolés, car l'encodage URI utilise l'encodage UTF-8, qui ne prévoit aucun encodage pour ces caractères. Les chaînes de caractères ne contenant aucun caractère de substitution isolé sont dites _bien formées_ et peuvent être utilisées en toute sécurité avec des fonctions qui ne gèrent pas l'UTF-16 (telles que `encodeURI()` ou {{DOMxRef("TextEncoder")}}). Vous pouvez vérifier si une chaîne de caractères est bien formée à l'aide de la méthode {{JSxRef("String/isWellFormed", "isWellFormed()")}}, ou nettoyer les caractères de substitution isolés à l'aide de la méthode {{JSxRef("String/toWellFormed", "toWellFormed()")}}.

Outre les caractères Unicode, il existe certaines séquences de caractères Unicode qui doivent être considérées comme une seule unité visuelle, appelée _groupe de graphèmes_. Les emojis en sont l'exemple le plus courant&nbsp;: de nombreux emojis, qui présentent toute une gamme de variantes, sont en réalité composés de plusieurs emojis, généralement reliés par le caractère \<ZWJ> (`U+200D`).

Vous devez faire attention au niveau des caractères sur lequel vous effectuez la boucle. Par exemple, [`split("")`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split) effectue une division par unités de code UTF-16 et sépare les paires de caractères de substitution. Les indices de chaîne de caractères font également référence à l'indice de chaque unité de code UTF-16. En revanche, [`[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) effectue une itération par points de code Unicode. Pour itérer sur des groupes de graphèmes, il faut utiliser du code personnalisé.

```js
"😄".split(""); // ['\ud83d', '\ude04'] ; se divise en deux substituts isolés

// « Main avec l'index pointant vers la droite : Teint foncé »
[..."👉🏿"]; // ['👉', '🏿']
// se divise en l'emoji de base « Main avec l'index pointant vers la droite » et
// l'emoji « Teint foncé »

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// se divise en les emojis « Homme » et « Garçon », reliés par un ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// se divise en deux lettres « indicateur de région » « U » et « N ».
// Tous les emojis de drapeau sont formés en joignant deux lettres « indicateur de région »
```

## Constructeur

- {{JSxRef("String/String", "String()")}}
  - : Crée un nouvel `String`. S'il est appelé comme une fonction plutôt que comme un constructeur, il effectue une conversion de la valeur en chaîne de caractères.

## Méthodes statiques

- {{JSxRef("String.fromCharCode()")}}
  - : Retourne une chaîne de caractères créée à partir de la séquence définie de valeurs Unicode.
- {{JSxRef("String.fromCodePoint()")}}
  - : Retourne une chaîne de caractères créée à partir de la séquence de points de code définie.
- {{JSxRef("String.raw()")}}
  - : Retourne une chaîne de caractères créée à partir d'une chaîne de caractères brute de modèle.

## Propriétés d'instance

Ces propriétés sont définies sur `String.prototype` et partagées par toutes les instances de `String`.

- {{JSxRef("Object/constructor", "String.prototype.constructor")}}
  - : La fonction de constructeur qui crée une instance de l'objet. Pour les instances de `String`, la valeur initiale est le constructeur {{JSxRef("String/String", "String()")}}.

Ces propriétés sont des propriétés propres à chaque instance de `String`.

- {{JSxRef("String/length", "length")}} {{ReadOnlyInline}}
  - : Reflète la longueur (`length`) de la chaîne de caractères.

## Méthodes d'instance

- {{JSxRef("String.prototype.at()")}}
  - : Retourne le caractère (exactement une unité de code UTF-16) à un `index` défini. Accepte les entiers négatifs, qui comptent à rebours à partir du dernier caractère de la chaîne de caractères.
- {{JSxRef("String.prototype.charAt()")}}
  - : Retourne le caractère (exactement une unité de code UTF-16) à un `index` défini.
- {{JSxRef("String.prototype.charCodeAt()")}}
  - : Retourne un nombre qui est la valeur de l'unité de code UTF-16 à un `index` donné.
- {{JSxRef("String.prototype.codePointAt()")}}
  - : Retourne un nombre entier non négatif qui est la valeur du point de code de l'unité de code UTF-16 encodée commençant à la position (`pos`) définie.
- {{JSxRef("String.prototype.concat()")}}
  - : Combine le texte de deux chaînes de caractères (ou plus) et retourne une nouvelle chaîne de caractères.
- {{JSxRef("String.prototype.endsWith()")}}
  - : Détermine si une chaîne de caractères se termine par les caractères de la chaîne de caractères `searchString`.
- {{JSxRef("String.prototype.includes()")}}
  - : Détermine si la chaîne de caractères appelante contient `searchString`.
- {{JSxRef("String.prototype.indexOf()")}}
  - : Retourne l'indice, au sein de cette chaîne de caractères, de la première occurrence de `searchValue`, ou `-1` si celle-ci n'est pas trouvée.
- {{JSxRef("String.prototype.isWellFormed()")}}
  - : Retourne une valeur booléenne indiquant si cette chaîne de caractères contient des [substituts isolés](#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).
- {{JSxRef("String.prototype.lastIndexOf()")}}
  - : Retourne l'indice, au sein de cette chaîne de caractères, de la dernière occurrence de `searchValue`, ou `-1` si celle-ci n'est pas trouvée.
- {{JSxRef("String.prototype.localeCompare()")}}
  - : Retourne un nombre indiquant si la chaîne de caractères de référence `compareString` précède, suit ou est équivalente à la chaîne de caractères donnée dans l'ordre de tri.
- {{JSxRef("String.prototype.match()")}}
  - : Permet de comparer l'expression régulière `regexp` à une chaîne de caractères.
- {{JSxRef("String.prototype.matchAll()")}}
  - : Retourne un itérateur contenant toutes les occurrences de `regexp`.
- {{JSxRef("String.prototype.normalize()")}}
  - : Retourne la forme de normalisation Unicode de la valeur de la chaîne de caractères appelée.
- {{JSxRef("String.prototype.padEnd()")}}
  - : Complète la chaîne de caractères actuelle par la fin avec une chaîne de caractères donnée et retourne une nouvelle chaîne de caractères de longueur `targetLength`.
- {{JSxRef("String.prototype.padStart()")}}
  - : Remplit la chaîne de caractères actuelle à partir du début avec une chaîne de caractères donnée et retourne une nouvelle chaîne de caractères d'une longueur de `targetLength`.
- {{JSxRef("String.prototype.repeat()")}}
  - : Retourne une chaîne de caractères composée des éléments de l'objet répétés `count` fois.
- {{JSxRef("String.prototype.replace()")}}
  - : Utilisé pour remplacer les occurrences de `searchFor` en utilisant `replaceWith`. `searchFor` peut être une chaîne de caractères ou une expression régulière, et `replaceWith` peut être une chaîne de caractères ou une fonction.
- {{JSxRef("String.prototype.replaceAll()")}}
  - : Utilisé pour remplacer toutes les occurrences de `searchFor` en utilisant `replaceWith`. `searchFor` peut être une chaîne de caractères ou une expression régulière, et `replaceWith` peut être une chaîne de caractères ou une fonction.
- {{JSxRef("String.prototype.search()")}}
  - : Recherche une correspondance entre une expression régulière `regexp` et la chaîne de caractères appelante.
- {{JSxRef("String.prototype.slice()")}}
  - : Extrait une section d'une chaîne de caractères et retourne une nouvelle chaîne de caractères.
- {{JSxRef("String.prototype.split()")}}
  - : Retourne un tableau de chaînes de caractères obtenu en scindant la chaîne de caractères appelante aux occurrences de la sous-chaîne de caractères `sep`.
- {{JSxRef("String.prototype.startsWith()")}}
  - : Détermine si la chaîne de caractères appelante commence par les caractères de la chaîne de caractères `searchString`.
- {{JSxRef("String.prototype.substr()")}} {{Deprecated_Inline}}
  - : Retourne une portion de la chaîne de caractères, en commençant à l'indice défini et en s'étendant sur un nombre donné de caractères par la suite.
- {{JSxRef("String.prototype.substring()")}}
  - : Retourne une nouvelle chaîne de caractères contenant les caractères de la chaîne de caractères appelante à partir de (ou entre) l'indice (ou les indices) défini(s).
- {{JSxRef("String.prototype.toLocaleLowerCase()")}}
  - : Les caractères d'une chaîne de caractères sont convertis en minuscules tout en respectant la locale actuelle.

    Pour la plupart des langues, cela retourne le même résultat que {{JSxRef("String/toLowerCase", "toLowerCase()")}}.

- {{JSxRef("String.prototype.toLocaleUpperCase()")}}
  - : Les caractères d'une chaîne de caractères sont convertis en majuscules tout en respectant la locale actuelle.

    Pour la plupart des langues, cela retourne le même résultat que {{JSxRef("String/toUpperCase", "toUpperCase()")}}.

- {{JSxRef("String.prototype.toLowerCase()")}}
  - : Retourne la valeur de la chaîne de caractères appelante convertie en minuscules.
- {{JSxRef("String.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant l'objet défini. Remplace la méthode {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("String.prototype.toUpperCase()")}}
  - : Retourne la valeur de la chaîne de caractères appelante convertie en majuscules.
- {{JSxRef("String.prototype.toWellFormed()")}}
  - : Retourne une chaîne de caractères où tous les [substituts isolés](#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes) de cette chaîne de caractères sont remplacés par le caractère de remplacement Unicode U+FFFD.
- {{JSxRef("String.prototype.trim()")}}
  - : Supprime les espaces blancs au début et à la fin de la chaîne de caractères.
- {{JSxRef("String.prototype.trimEnd()")}}
  - : Supprime les espaces blancs à la fin de la chaîne de caractères.
- {{JSxRef("String.prototype.trimStart()")}}
  - : Supprime les espaces blancs au début de la chaîne de caractères.
- {{JSxRef("String.prototype.valueOf()")}}
  - : Retourne la valeur primitive de l'objet défini. Remplace la méthode {{JSxRef("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Retourne un nouvel objet itérateur qui parcourt les points de code d'une valeur de chaîne de caractères, en renvoyant chaque point de code sous forme de valeur de chaîne de caractères.

## Méthodes de conversion HTML

> [!WARNING]
> Obsolète. Évitez d'utiliser ces méthodes.
>
> Elles ont des possibilités limitées, car elles sont basées sur une norme HTML très ancienne et ne fournissent qu'un sous-ensemble des balises et attributs HTML actuellement disponibles. Beaucoup d'entre elles créent aujourd'hui un balisage obsolète ou non standard. De plus, elles effectuent une concaténation de chaînes de caractères sans aucune validation ni assainissement, ce qui en fait une menace potentielle pour la sécurité lorsqu'elles sont insérées directement à l'aide de [`innerHTML`](/fr/docs/Web/API/Element/innerHTML). Utilisez plutôt les [API DOM](/fr/docs/Web/API/Document_Object_Model) telles que [`document.createElement()`](/fr/docs/Web/API/Document/createElement).

- {{JSxRef("String.prototype.anchor()")}} {{Deprecated_Inline}}
  - : [`<a name="name">`](/fr/docs/Web/HTML/Reference/Elements/a#name) (cible hypertexte)
- {{JSxRef("String.prototype.big()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("big")}}
- {{JSxRef("String.prototype.blink()")}} {{Deprecated_Inline}}
  - : `<blink>`
- {{JSxRef("String.prototype.bold()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("b")}}
- {{JSxRef("String.prototype.fixed()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("tt")}}
- {{JSxRef("String.prototype.fontcolor()")}} {{Deprecated_Inline}}
  - : [`<font color="color">`](/fr/docs/Web/HTML/Reference/Elements/font#color)
- {{JSxRef("String.prototype.fontsize()")}} {{Deprecated_Inline}}
  - : [`<font size="size">`](/fr/docs/Web/HTML/Reference/Elements/font#size)
- {{JSxRef("String.prototype.italics()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("i")}}
- {{JSxRef("String.prototype.link()")}} {{Deprecated_Inline}}
  - : [`<a href="url">`](/fr/docs/Web/HTML/Reference/Elements/a#href) (lien vers l'URL)
- {{JSxRef("String.prototype.small()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("small")}}
- {{JSxRef("String.prototype.strike()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("strike")}}
- {{JSxRef("String.prototype.sub()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sub")}}
- {{JSxRef("String.prototype.sup()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sup")}}

Notez que ces méthodes ne vérifient pas si la chaîne de caractères elle-même contient des balises HTML, il est donc possible de créer du HTML invalide&nbsp;:

```js
"</b>".bold(); // <b></b></b>
```

La seule échappement qu'elles effectuent est de remplacer `"` dans la valeur de l'attribut (pour {{JSxRef("String/anchor", "anchor()")}}, {{JSxRef("String/fontcolor", "fontcolor()")}}, {{JSxRef("String/fontsize", "fontsize()")}} et {{JSxRef("String/link", "link()")}}) par `&quot;`.

```js
"toto".anchor('"Bonjour"'); // <a name="&quot;Bonjour&quot;">toto</a>
```

## Exemples

### Conversion en chaîne de caractères

La fonction `String()` est un moyen plus fiable de convertir des valeurs en chaînes de caractères que d'appeler la méthode `toString()` sur la valeur, car la première fonctionne lorsqu'elle est utilisée sur [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) et {{JSxRef("undefined")}}. Par exemple&nbsp;:

```js
// Vous ne pouvez pas accéder aux propriétés de null ou undefined

const nullVar = null;
nullVar.toString(); // TypeError: Cannot read properties of null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: Cannot read properties of undefined
String(undefinedVar); // "undefined"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des nombres et chaînes de caractères](/fr/docs/Web/JavaScript/Guide/Numbers_and_strings)
- L'objet natif {{JSxRef("RegExp")}}
