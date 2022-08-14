---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/split
original_slug: Web/JavaScript/Reference/Objets_globaux/String/split
---
{{JSRef}}

La méthode **`split()`** divise une [chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode.

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## Syntaxe

```js
str.split([separator[, limit]])
```

### Paramètres

- `separator` Facultatif

  - : Le motif décrivant où chaque séparation doit se produire. Le `separator` peut être une simple chaîne de caractères ou peut être une [expression régulière](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

    - Le cas le plus simple est celui où `separator` n'est qu'un seul caractère ; il est utilisé pour diviser une chaîne délimitée. Par exemple, une chaîne contenant des valeurs séparées par des tabulations (TSV) pourrait être analysée en passant un caractère de tabulation comme séparateur, comme ceci : `myString.split("\t")`.
    - Si `separator` contient plusieurs caractères, cette séquence de caractères entière doit être trouvée afin de diviser la chaîne.
    - Si `separator` est omis ou n'apparaît pas dans la chaîne `str`, le tableau retourné contient un élément constitué de la chaîne entière.
    - Si `separator` apparaît au début (ou à la fin) de la chaîne, il a quand même l'effet de division. Le résultat est une chaîne vide (c'est-à-dire de longueur nulle), qui apparaît à la première (ou dernière) position du tableau retourné.
    - Si `separator` est une chaîne vide (`""`), la chaîne `str` est convertie en un tableau de chacun de ses "caractères" UTF-16.

    > **Attention :** Lorsque une chaîne vide (`""`) est utilisée comme séparateur, la chaîne n'est **pas** divisée par des _caractères perçus par l'utilisateur_ ([grappes de graphèmes](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) ou des caractères unicodes (codepoints), mais par des unités de code UTF-16. Cela détruit les [paires de substituts](http://unicode.org/faq/utf_bom.html#utf16-2). Voir [« Comment obtenir une chaîne de caractères vers un tableau de caractères en JavaScript ? » sur StackOverflow](https://stackoverflow.com/a/34717402).

- `limit` Facultatif

  - : Un nombre entier non négatif spécifiant une limite sur le nombre de sous-chaînes à inclure dans le tableau. S'il est fourni, il divise la chaîne de caractères à chaque occurrence du `separator` spécifié, mais s'arrête lorsque la `limit` (limite) d'entrées a été atteinte dans le tableau. Tout texte restant n'est pas du tout inclus dans le tableau.

    - Le tableau peut contenir moins d'entrées que la `limit` (limite), si la fin de la chaîne de caractères est atteinte avant que la limite ne soit atteinte.
    - Si `limit` est paramétré sur `0`, un tableau vide `[]` est retourné.

### Valeur de retour

Un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) qui contient les fragments de la chaîne de caractères, découpée en fonction du séparateur indiqué.

## Description

Lorsqu'il est trouvé, `separator` est supprimé de la chaîne de caractère, et les sous-chaînes sont retournées dans un tableau.

Si `separator` est une expression régulière avec des parenthèses de capture, alors chaque fois que `separator` correspond, les résultats (y compris tout résultat `undefined`) des parenthèses de capture sont joints au tableau de sortie.

Si le séparateur est un tableau, alors ce tableau est converti en une chaîne de caractères et est utilisé comme séparateur.

## Exemples

### Utiliser `split()`

Lorsque la chaîne de caractères est vide, `split()` retourne un tableau contenant une chaîne de caractères vide, plutôt qu'un tableau vide. Si la chaîne et le séparateur sont tous deux des chaînes vides, un tableau vide est retourné.

```js
const myString = ''
const splits = myString.split()

console.log(splits)

// ↪ [""]
```

L'exemple suivant définit une fonction qui divise une chaîne en un tableau de chaînes selon un délimiteur spécifié. Après la coupe de la chaîne, la fonction affiche des messages indiquant la chaîne initiale (avant la coupe), le délimiteur utilisé, le nombre d'éléments dans le tableau, et les éléments du tableau retourné.

```js
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log(`La chaine d'origine est : ${stringToSplit}`);
  console.log(`Le délimiteur est : ${separator}`);
  console.log(`Le tableau comporte ${arrayOfStrings.length} elements : `, arrayOfStrings.join(' / '));
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espace = " ";
var virgule = ",";

splitString(tempestString, espace);
splitString(tempestString);
splitString(monthString, virgule);
```

Cet exemple produira la sortie suivante :

```js
La chaine d'origine est : "Oh brave new world that has such people in it."
Le délimiteur est : " "
Le tableau comporte 10 elements : Oh / brave / new / world / that / has / such / people / in / it. /

La chaine d'origine est : "Oh brave new world that has such people in it."
Le délimiteur est : "undefined"
Le tableau comporte 1 elements : Oh brave new world that has such people in it. /

La chaine d'origine est : "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
Le délimiteur est : ","
Le tableau comporte 12 elements : Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
```

### Supprimer les espaces d'une chaîne

Dans l'exemple suivant, `split` recherche zéro ou plusieurs espaces suivis d'un point-virgule, lui-même suivi par zéro ou plus espaces. Lorsque ce « motif » est trouvé, cela supprime celui-ci de la chaîne. `nameList` est le tableau retourné du résultat de `split`.

```js
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

var re = /\s*(;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);
```

Ceci affichera deux lignes dans la console ; la première ligne correspondant à la chaîne d'origine, et la seconde au tableau de résultats.

```js
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
["Harry Trump","Fred Barney","Helen Rigby","Bill Abel","Chris Hand"]
```

### Retourner un nombre limité de sous-chaînes

Dans l'exemple suivant, `split()` recherche des espaces dans une chaîne et retourne les 3 premières sous-chaînes qui correspondent.

```js
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits);
```

Ce script affichera :

```js
["Hello", "World.", "How"]
```

### Découper une expression rationnelle - Parenthèses capturantes

Si le paramètre `séparateur` est une expression rationnelle qui contient des parenthèses de capture, les résultats seront retournés dans le tableau.

```js
var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(\d)/);

console.log(splits);
```

Ce script affichera :

```js
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **Note :** `\d` correspond à la [classe de caractères](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) pour les chiffres compris entre 0 et 9.

### Inverser une chaîne en utilisant `split()`

> **Attention :** Ce n'est pas une façon robuste d'inverser une chaîne :
>
> ```js example-bad
> const str = 'asdfghjkl'
> const strReverse = str.split('').reverse().join('')
> // 'lkjhgfdsa'
>
> // split() retourne un tableau sur lequel reverse() et join() peuvent être appliqués.
> ```
>
> Cela ne fonctionne pas si la chaîne de caractères contient des groupes de graphèmes, même en utilisant une division sensible aux unicodes. (Utilisez, par exemple, [esrever](https://github.com/mathiasbynens/esrever) à la place).
>
> ```js example-bad
> const str = 'résumé'
> const strReverse = str.split(/(?:)/u).reverse().join('')
> // => "́emuśer"
> ```
>
> **Bonus :** utiliser l'opérateur [`===`](/fr/docs/Web/JavaScript/Reference/Operators) pour tester si la chaîne d'origine est un palindrome.

## Spécifications

| Spécification                                                                                                |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.split', 'String.prototype.split')}} |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.split")}}

## Voir aussi

- [`String.prototype.charAt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [`String.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [`String.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
- [`Array.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Expressions régulières](/fr/docs/Web/JavaScript/Guide/Regular_Expressions)
