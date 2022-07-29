---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp
browser-compat: javascript.builtins.RegExp
---
{{JSRef}}

Un objet **RegExp** est utilisé pour étudier les correspondances d'un texte avec un motif donné.

Pour une introduction aux expressions rationnelles, lire [le chapitre Expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) dans [le Guide JavaScript](/fr/docs/Web/JavaScript/Guide/Regular_Expressions).

## Description

### Notation littérale et constructeur

Il existe deux façons de créer un objet `RegExp`&nbsp;: une _notation littérale_ ou un _constructeur_.

- **La notation littérale** est délimitée par des barres obliques (<i lang="en">slashes</i>) et n'utilise pas de quotes
- **Pour le constructeur**, les paramètres passés ne sont pas délimités par des barres obliques mais par des quotes.

Ainsi, les expressions suivantes créent le même objet d'expression rationnelle&nbsp;:

```js
/ab+c/i;                 // notation littérale
new RegExp('ab+c', 'i'); // constructeur
new RegExp(/ab+c/, 'i'); // notation littérale dans un constructeur
```

La notation littérale effectue la compilation de l'expression rationnelle lorsque l'expression est évaluée. Utilisez la notation littérale lorsque l'expression rationnelle reste constante. Par exemple, si vous utilisez la notation littérale pour construire une expression rationnelle utilisée dans une boucle, l'expression rationnelle ne sera pas recompilée à chaque itération.

Le constructeur de l'objet expression rationnelle, par exemple `new RegExp('ab+c')`, effectue la compilation de l'expression rationnelle au moment de l'exécution. Utilisez le constructeur quand vous savez que le motif d'une expression rationnelle sera variable, ou si vous ne connaissez pas le motif et que vous l'obtiendrez d'une autre source, comme un champ de saisie.

## Utiliser des marqueurs avec le constructeur

À partir d'ECMAScript 6, `new RegExp(/ab+c/, 'i')` ne déclenche plus d'exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) (`"can't supply flags when constructing one RegExp from another"`) lorsque le premier argument est une expression rationnelle et que le second argument `marqueurs` est présent. Une nouvelle `RegExp` sera créée à la place à partir des arguments.

Lorsqu'on utilise le constructeur, les règles normales d'échappement de chaîne (le fait de faire précéder d'un \ les caractères spéciaux à l'intérieur d'une chaîne) sont requises.

Par exemple, les définitions suivantes sont équivalentes&nbsp;:

```js
var re = /\w+/;
var re = new RegExp('\\w+');
```

### Propriétés semblables à Perl

Plusieurs des propriétés de `RegExp` ont un nom long et un nom court (semblable à celui utilisé par le langage Perl). Les deux noms font référence à la même valeur. Cela vient du fait que les expressions rationnelles JavaScript ont été conçues en s'inspirant des expressions rationnelles Perl). Voir aussi [les propriétés dépréciées de `RegExp`](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#propriétés_de_regexp).

## Constructeur

- [`RegExp()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)
  - : Crée un nouvel objet `RegExp`.

## Propriétés statiques

- [`get RegExp[@@species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@species)
  - : La fonction de construction qui est utilisée pour créer des objets dérivés.

## Propriétés des instances

- [`RegExp.prototype.flags`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)
  - : Une chaîne de caractères contenant les marqueurs de l'objet `RegExp`.
- [`RegExp.prototype.dotAll`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
  - : Indique si `.` correspond aux sauts de ligne.
- [`RegExp.prototype.global`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
  - : Indique si l'expression rationnelle cherche l'ensemble des correspondances dans la chaîne de caractères ou uniquement la première.
- [`RegExp.prototype.hasIndices`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
  - : Indique si le résultat de l'expression rationnelle indiquera les indices de début et de fin des sous-chaînes capturées.
- [`RegExp.prototype.ignoreCase`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
  - : Indique si la casse est ignorée pour la recherche de correspondances dans une chaîne de caractères.
- [`RegExp.prototype.multiline`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
  - : Indique si la recherche de correspondances dans une chaîne se fait sur plusieurs lignes.
- [`RegExp.prototype.source`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)
  - : Le texte du motif recherché.
- [`RegExp.prototype.sticky`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
  - : Indique si la recherche est adhérente.
- [`RegExp.prototype.unicode`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
  - : Indique si les fonctionnalités Unicode sont activées.
- [`RegExp: lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)
  - : L'indice à partir duquel chercher la prochaine correspondance.

## Méthodes des instances

- [`RegExp.prototype.compile()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile) {{deprecated_inline}}
  - : (Re)compile une expression rationnelle lors de l'exécution d'un script.
- [`RegExp.prototype.exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
  - : Exécute une recherche de correspondance sur la chaîne de caractères passée en argument.
- [`RegExp.prototype.test()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
  - : Teste la présence d'une correspondance sur la chaîne de caractères passée en argument.
- [`RegExp.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString)
  - : Renvoie une chaîne de caractères représentant l'objet. Il s'agit d'une surcharge de la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`RegExp.prototype[@@match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)
  - : Recherche une correspondance sur la chaîne de caractères donnée en argument et renvoie le résultat de la correspondance.
- [`RegExp.prototype[@@matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
  - : Renvoie l'ensemble des correspondances entre l'expression rationnelle et la chaîne de caractères passée en argument.
- [`RegExp.prototype[@@replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
  - : Remplace les correspondances trouvées sur la chaîne de caractères passée en argument par une nouvelle sous-chaîne.
- [`RegExp.prototype[@@search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
  - : Recherche une correspondance sur la chaîne de caractères donnée en argument et renvoie l'indice à partir duquel le motif a été trouvé dans la chaîne.
- [`RegExp.prototype[@@split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)
  - : Découpe une chaîne de caractères donnée en argument en un tableau.

## Exemples

### Utiliser une expression rationnelle pour modifier un format de données

Dans le script suivant, on utilise la méthode [`replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace) de [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) pour effectuer une correspondance sur le prénom et le nom pour les inverser.

On utilise des parenthèses capturantes pour pouvoir utiliser les correspondances dans la construction du résultat (avec `$1` et `$2`).

```js
let re = /(\w+)\s(\w+)/;
let chaine = 'Alain Dupont';
let nouvelleChaine = chaine.replace(re, '$2, $1');
console.log(nouvelleChaine);
// Dupont, Alain
```

### Utiliser une expression rationnelle pour découper des lignes avec différents sauts de ligne/fins de ligne

La fin de ligne par défaut dépend de la plateforme (Unix, Windows, etc.). Cette méthode de découpage fournie permet de découper indépendamment de la plateforme utilisée.

```js
let texte = 'Un texte\net un autre\r\npuis ensuite\rla fin';
let lignes = texte.split(/\r\n|\r|\n/);
console.log(lignes); // affiche [ 'Un texte', 'et un autre', 'puis ensuite', 'la fin' ]
```

On notera que l'ordre des modèles dans l'expression rationnelle est important.

### Utiliser une expression rationnelle sur plusieurs lignes

```js
let s = 'Et voici\nune autre ligne !';

s.match(/voici.*ligne/);
// Renvoie null

s.match(/voici[^]*ligne/);
// Renvoie ['voici\nune autre ligne']
```

### Utiliser une expression rationnelle avec le marqueur d'adhérence

Cet exemple illustre comment on peut utiliser le marqueur [`sticky`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) qui recherche une correspondance après [`RegExp.prototype.lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex).

```js
let str = '#toto#';
let regex = /toto/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex est pris en compte avec ce marqueur)
regex.lastIndex; // 0 (réinitialisation suite à l'échec)
```

### Différence entre le marqueur d'adhérence et le marqueur global

Avec le marqueur d'adhérence `y`, la prochaine correspondance doit être placée à la position fournie par `lastIndex`. En revanche, avec le marqueur global `g`, la correspondance peut avoir lieu à la position indiquée par `lastIndex` ou après&nbsp;:

```js
re = /\d/y;
while (r = re.exec("123 456")) console.log(r, "ET re.lastIndex", re.lastIndex);

// [ '1', index: 0, input: '123 456', groups: undefined ] ET re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] ET re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] ET re.lastIndex 3
//   ... et ensuite il n'y a plus de correspondance
```

Avec le marqueur global `g`, les 6 chiffres auraient été trouvés (pas seulement 3).

### Les expressions rationnelles et les caractères Unicode

Comme mentionné ci-avant, les classes `\w` ou `\W` ne correspondent qu'à des caractères ASCII "a" à "z", "A" à "Z", "0" à "9" et "\_".

Pour effectuer des correspondances sur d'autres caractères (par exemple les caractères cyrilliques), on utilisera `\uhhhh`, où "hhhh" représente la valeur Unicode exprimée en hexadécimal.

Cet exemple illustre comment il est possible de séparer les caractères Unicode d'un mot.

```js
let texte = 'Образец text на русском языке';
let regex = /[\u0400-\u04FF]+/g;

let corresp = regex.exec(texte);
console.log(corresp[0]);      // affiche 'Образец'
console.log(regex.lastIndex); // affiche '7'

let corresp2 = regex.exec(texte);
console.log(corresp2[0]);     // affiche 'на' (n'affiche pas text
console.log(regex.lastIndex); // affiche '15'

// et ainsi de suite
```

Les [échappements de propriété Unicode](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes), plus récents, permettent une solution plus élégante en utilisant `\p{scx=Cyrl}` à la place.

### Extraire un sous-domaine d'une URL

```js
let url = 'http://xxx.domaine.com';
console.log(/[^.]+/.exec(url)[0].substr(7)); // affiche 'xxx'
```

> **Note :** Cet exemple est uniquement illustratif. Pour analyser une URL, mieux vaudra utiliser les outils adaptés et notamment [l'API URL](/fr/docs/Web/API/URL_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes spécifiques à Firefox

À partir de Firefox 34, dans le cas où on utilise un groupe capturant avec des quantificateurs qui l'invalident, le texte correspondant au groupe est désormais `undefined` et non la chaîne vide&nbsp;:

```js
// Firefox 33 ou antérieur
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
}); // 'group:'

// Firefox 34 ou supérieur
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
}); // 'group:undefined'
```

Pour des raisons de compatibilité web, `RegExp.$N` renverra une chaîne vide au lieu de `undefined` ([bug 1053944](https://bugzilla.mozilla.org/show_bug.cgi?id=1053944)).

## Voir aussi

- [Une prothèse d'émulation pour les différentes fonctionnalités récentes des `RegExp` (marqueurs `dotAll` et `sticky`, groupes de capture nommés, etc.) avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Le chapitre sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) au sein du [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- [`String.prototype.match()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [`String.prototype.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [`String.prototype.split()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split)
