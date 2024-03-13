---
title: Nombres et dates
slug: Web/JavaScript/Guide/Numbers_and_dates
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_et_Opérateurs", "Web/JavaScript/Guide/Formatage_du_texte")}}

Ce chapitre illustre le fonctionnement des nombres et des dates en JavaScript grâce aux concepts, objets et fonctions utilisables avec ce langage. Cela inclut notamment l'écriture de nombre selon différentes bases (décimale, binaire, hexadécimale) et l'utilisation de l'objet global {{jsxref("Math")}}.

## Nombres

Les nombres en JavaScript sont implémentés comme des [nombres sur 64 bits à précision double selon le format IEEE-754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) qui est un standard pour la représentation des nombres flottants et qui permet d'avoir jusqu'à 16 chiffres significatifs. Le type numérique possède également trois valeurs spéciales symboliques : +{{jsxref("Infinity")}}, -{{jsxref("Infinity")}} et {{jsxref("NaN")}} (pour désigner une valeur qui n'est pas un nombre).

Le format IEEE-754 permet de représenter des valeurs entre ±2^−1022 et ±2^+1023, ce qui correspond à des valeurs entre ±10^−308 et ±10^+308 avec une précision sur 53 bits. Les nombres entiers compris sur l'intervalle ±2^53 − 1 peuvent être représentés exactement.

Le type {{jsxref("BigInt")}} est une addition récente à JavaScript qui permet de représenter de grands entiers. Toutefois, il n'est pas possible de mélanger les `BigInt` et les nombres ({{jsxref("Number")}}) dans les mêmes opérations et on ne peut pas utiliser l'objet {{jsxref("Math")}} avec les valeurs `BigInt`.

Voir également [les types de données et structures JavaScript](/fr/docs/Web/JavaScript/Structures_de_données) pour l'articulation des types primitifs en JavaScript.

Il est possible d'utiliser quatre types de littéraux numériques : décimal, binaire, octal et hexadécimal.

### Les nombres décimaux

```js
1234567980;
42;

// Attention à l'utilisation des zéros
// en début de nombre

0888; // 888 analysé en base décimale
0777; // en mode non-strict, analysé en base octale,
// ce qui correspond
// à 511 en base décimale
```

On voit ici que les littéraux numériques qui commencent par un zéro (`0`) et contiennent un chiffre strictement inférieur à 8 après ce 0 sont analysés comme étant exprimés en base octale.

### Les nombres binaires

Pour utiliser des nombres binaires, on utilise un littéral qui commence par un 0 suivi d'un b minuscule ou majuscule (`0b` ou `0B`). Si les chiffres qui suivent ce préfixe ne sont pas des 0 ou des 1, une exception {{jsxref("SyntaxError")}} sera levée.

```js
var FLT_BITSIGNE = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPOSANT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSE = 0b00000000011111111111111111111111; // 8388607
```

### Les nombres octaux

Pour utiliser des nombres en base octale, on utilisera un préfixe avec un `0`. Si les nombres qui suivent ce 0 ne sont pas compris entre 0 et 7 (au sens strict), le nombre sera interprété comme un nombre décimal.

```js
var n = 0755; // 493 en base 10
var m = 0644; // 420 en base 10
```

En mode strict, ECMAScript 5 interdit cette syntaxe octale. Cette syntaxe ne fait pas partie d'ECMAScript 5 mais est supportée par la majorité des navigateurs. Avec ECMAScript 2015 (ES6), il est possible de représenter un nombre en notation octale grâce au préfixe "`0o`" :

```js
var a = 0o10; // Notation octale pour ES2015
```

### Les nombres hexadécimaux

Pour utiliser des nombres exprimés en base hexadécimale, on utilisera un préfixe avec un zéro suivi d'un x majuscule ou minuscule (`0x` ou `0X`). Si les chiffres qui suivent ce préfixe ne sont pas 0123456789ABCDEF, cela provoquera une exception {{jsxref("SyntaxError")}}.

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### Notation scientifique

```js
1e3; // 100
2e6; // 2000000
0.1e2; // 10
```

## L'objet `Number`

L'objet {{jsxref("Number")}} possède certaines propriétés représentant les constantes numériques telles que : la valeur maximale représentable en JavaScript, une valeur spéciale pour dire que la valeur numérique n'est pas un nombre et l'infini. Ces valeurs ne peuvent pas être modifiées, on pourra les utiliser de la façon suivante :

```js
var plusGrandNombre = Number.MAX_VALUE;
var plusPetitNombre = Number.MIN_VALUE;
var infini = Number.POSITIVE_INFINITY;
var infiniNégatif = Number.NEGATIVE_INFINITY;
var pasUnNombre = Number.NaN;
```

On utilisera toujours ces valeurs directement avec l'objet natif `Number` (et non pas avec les propriétés d'une instance d'un objet `Number` qu'on aurait créé).

Le tableau qui suit liste certaines des propriétés de `Number`.

<table class="standard-table">
  <caption>
    Propriétés de
    <code>Number</code>
  </caption>
  <tbody>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td>{{jsxref("Number.MAX_VALUE")}}</td>
      <td>
        Le plus grand nombre qu'on peut représenter en JavaScript
        (<code>±1.7976931348623157e+308</code>).
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Number.MIN_VALUE")}}</td>
      <td>
        Le plus petit nombre qu'on peut représenter en JavaScript
        (<code>±5e-324</code>).
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Number.NaN")}}</td>
      <td>Une valeur spéciale signifiant que la valeur n'est pas un nombre.</td>
    </tr>
    <tr>
      <td>{{jsxref("Number.NEGATIVE_INFINITY")}}</td>
      <td>L'infini négatif, renvoyé lorsqu'on dépasse la valeur minimale.</td>
    </tr>
    <tr>
      <td>{{jsxref("Number.POSITIVE_INFINITY")}}</td>
      <td>L'infini positif, renvoyé lorsqu'on dépasse la valeur maximale.</td>
    </tr>
    <tr>
      <td>{{jsxref("Number.EPSILON")}}</td>
      <td>
        La différence entre 1 et la première valeur supérieure à 1 qui puisse
        être représentée comme {{jsxref("Number")}}.
        (<code>2.220446049250313e-16</code>)
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Number.MIN_SAFE_INTEGER")}}</td>
      <td>
        Le plus petit entier qu'on puisse représenter en JavaScript. (−2^53 + 1
        ou <code>−9007199254740991</code>)
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Number.MAX_SAFE_INTEGER")}}</td>
      <td>
        <p>
          L'entier le plus grand qu'on puisse représenter en JavaScript (+2^53 −
          1 ou <code>+9007199254740991</code>)
        </p>
      </td>
    </tr>
  </tbody>
</table>

| Méthode                              | Description                                                                                                                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Analyse un argument qui est une chaîne de caractères et renvoie un nombre décimal. Cette méthode est équivalente à la fonction {{jsxref("parseFloat", "parseFloat()")}}.                  |
| {{jsxref("Number.parseInt()")}}      | Analyse un argument qui est une chaîne de caractères et renvoie un entier exprimé dans une base donnée. Cette méthode est équivalente à la fonction {{jsxref("parseInt", "parseInt()")}}. |
| {{jsxref("Number.isFinite()")}}      | Détermine si la valeur passée en argument est un nombre fini.                                                                                                                             |
| {{jsxref("Number.isInteger()")}}     | Détermine si la valeur passée en argument est un nombre entier.                                                                                                                           |
| {{jsxref("Number.isNaN()")}}         | Détermine si la valeur passée en argument est {{jsxref("NaN")}}. Cette version est plus robuste que la fonction globale {{jsxref("Objets_globaux/isNaN", "isNaN()")}}.                    |
| {{jsxref("Number.isSafeInteger()")}} | Détermine si la valeur fournie est un nombre qu'il est possible de représenter comme un entier sans perdre d'information.                                                                 |

Le prototype de `Number` fournit certaines méthodes pour exprimer les valeurs représentées par les objets `Number` dans différents formats. Le tableau suivant liste certaines de ces méthodes de `Number.prototype`.

| Méthode                                               | Description                                                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.toExponential", "toExponential()")}} | Renvoie une chaîne de caractères représentant le nombre en notation exponentielle.                          |
| {{jsxref("Number.toFixed", "toFixed()")}}             | Renvoie une chaîne de caractères représentant le nombre en notation à point fixe.                           |
| {{jsxref("Number.toPrecision", "toPrecision()")}}     | Renvoie une chaîne de caractères représentant le nombre en notation à point fixe avec une précision donnée. |

## L'objet `Math`

L'objet natif {{jsxref("Math")}} possède des propriétés et des méthodes statiques pour représenter des constantes et des fonctions mathématiques. Ainsi, la propriété `PI` de l'objet `Math` représente la valeur de la constante <math><semantics><mi>π</mi><annotation encoding="TeX">\pi</annotation></semantics></math> (3.141...), on peut l'utiliser dans les applications avec :

```js
Math.PI;
```

De la même façon, les fonctions mathématiques usuelles sont des méthodes de `Math`. On retrouve par exemple les fonctions trigonométriques, logarithmiques et exponentielles ainsi que d'autres fonctions. Si on souhaite utiliser la fonction sinus, on pourra écrire :

```js
Math.sin(1.56);
```

> **Note :** Les méthodes trigonométriques de `Math` prennent des arguments exprimés en radians.

Le tableau suivant liste les méthodes de l'objet `Math`.

| Méthode                                                                                                                                                                                                            | Description                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Math.abs", "abs()")}}                                                                                                                                                                                    | Valeur absolue                                                                                                                                                          |
| {{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}                                                                                                                  | Fonctions trigonométriques standards (les arguments sont exprimés en radians)                                                                                           |
| {{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}                                                                       | Fonctions trigonométriques inverses (les valeurs renvoyées sont exprimées en radians)                                                                                   |
| {{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}                                                                                                            | Fonctions trigonométriques hyperboliques (les arguments sont exprimés en radians)                                                                                       |
| {{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}                                                                                                      | Fonctions trigonométriques hyperboliques inverses (les valeurs renvoyées sont exprimées en radians).                                                                    |
| {{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}} | Fonctions exponentielles et logarithmiques                                                                                                                              |
| {{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}                                                                                                                                             | Renvoie le plus petit/grand entier inférieur/supérieur ou égal à l'argument donné                                                                                       |
| {{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}                                                                                                                                                   | Renvoie le plus petit (resp. grand) nombre d'une liste de nombres séparés par des virgules                                                                              |
| {{jsxref("Math.random", "random()")}}                                                                                                                                                                              | Renvoie un nombre aléatoire compris entre 0 et 1                                                                                                                        |
| {{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},                                                                                                   | Fonctions d'arrondis et de troncature                                                                                                                                   |
| {{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}                                                                                                          | Racine carrée, cubique et racine carrée de la somme des carrés des arguments                                                                                            |
| {{jsxref("Math.sign", "sign()")}}                                                                                                                                                                                  | Renvoie le signe d'un nombre et indique si la valeur est négative, positive ou nulle                                                                                    |
| {{jsxref("Math.clz32", "clz32()")}}, {{jsxref("Math.imul", "imul()")}}                                                                                                                                             | Le nombre de zéros qui commencent un nombre sur 32 bits en représentation binaire. La résultat de la multiplication de deux arguments sur 32 bits effectuée comme en C. |

À la différence des autres objets, on ne crée pas d'objet de type `Math`. Ses propriétés sont statiques, on les appelle donc toujours depuis l'objet `Math`.

## L'objet `Date`

JavaScript ne possède pas de type primitif pour représenter des dates. Cependant l'objet {{jsxref("Date")}} et ses méthodes permettent de manipuler des dates et des heures au sein d'une application. L'objet `Date` possède de nombreuses méthodes pour définir, modifier, obtenir des dates. Il ne possède pas de propriétés.

JavaScript gère les dates de façon similaire à Java. Les deux langages possèdent de nombreuses méthodes en commun et les deux langages stockent les dates selon les nombres de millisecondes écoulées depuis le premier janvier 1970 à 00h00:00.

L'objet `Date` permet de représenter des dates allant de -100 000 000 jours jusqu'à +100 000 000 jours par rapport au premier janvier 1970 UTC.

Pour créer un objet `Date`, on utilisera la syntaxe suivante :

```js
var monObjetDate = new Date([paramètres]);
```

avec `monObjetDate` étant le nom de l'objet à créer, cela peut être un nouvel objet ou une propriété d'un objet existant.

Lorsqu'on appelle `Date` sans le mot-clé `new`, cela renvoie la date fournie sous la forme d'une chaîne de caractères.

Les `paramètres` qui peuvent être utilisés sont :

- Aucun paramètre : l'objet créé représentera la date et l'heure courante.
- Une chaîne de caractères représentant une date au format suivant : "jour, année heures:minutes:secondes". Par exemple `var noël95 = new Date("December 25, 1995 13:30:00")`. Si les valeurs pour les heures, minutes ou secondes sont absentes, elles vaudront 0 par défaut.
- Un ensemble de valeurs entières pour l'année, le mois et le jour : `var noël95 = new Date(1995, 11, 25)`.
- Un ensemble de valeurs entières pour l'année, le mois, le jour, l'heure, les minutes et les secondes : `var noël95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Méthodes de l'objet `Date`

Les méthodes de l'objet `Date` se répartissent en différentes catégories :

- celles utilisées pour définir et modifier les valeurs des objets `Date` (mutateurs).
- celles utilisées pour obtenir des informations à partir des objets `Date` (accesseurs).
- celles utilisées pour convertir les objets `Date` sous différents formats (souvent en chaînes de caractères).
- celles utilisées pour analyser et convertir des chaînes de caractères représentant des dates.

Avec les accesseurs et les mutateurs, il est possible d'obtenir ou de modifier séparément les secondes, les minutes, les heures, le jour du mois ou de la semaine, le mois et l'année. Il existe une méthode `getDay` qui renvoie le jour de la semaine mais il n'existe pas de méthode réciproque `setDay` car le jour de la semaine est automatiquement déterminé. Ces méthodes utilisent des entiers pour représenter les valeurs utilisées :

- Pour les secondes et les minutes : 0 à 59
- Pour les heures : 0 à 23
- Pour les jours : 0 (dimanche) à 6 (samedi)
- Pour les dates : 1 à 31 (jour du mois)
- Pour les mois : 0 (janvier) à 11 (décembre)
- Pour les années : les années à partir de 1900

Ainsi, si on définit la date suivante :

```js
var noël95 = new Date("December 25, 1995");
```

`noël95.getMonth()` renverra 11, et `noël95.getFullYear()` renverra 1995.

Les méthodes `getTime` et `setTime` peuvent être utiles pour comparer des dates entre elles. La méthode `getTime` renvoie le nombre de millisecondes écoulées depuis le premier janvier 1970 à 00:00:00 pour l'objet `Date`.

Par exemple, les instructions suivantes affichent le nombre de jours qui restent pour l'année courante :

```js
var aujourdhui = new Date();

// On définit le jour et le mois
var finAnnée = new Date(1995, 11, 31, 23, 59, 59, 999);

// On définit l'année avec l'année courante
finAnnée.setFullYear(aujourdhui.getFullYear());

// On calcule le nombre de millisecondes par jour
var msParJour = 24 * 60 * 60 * 1000;

// On renvoie le nombre de jours restants dans l'année
var joursRestants = (finAnnée.getTime() - aujourdhui.getTime()) / msParJour;

joursRestants = Math.round(joursRestants);
```

Cet exemple crée un objet `Date` nommé `aujourdhui` qui contient la date du jour. On crée ensuite un objet `Date` nommé `finAnnée` pour lequel on définit ensuite l'année avec l'année courante. Après, on calcule le nombre de millisecondes qui s'écoulent dans une journée. Enfin, on calcule le nombre de jours entre `aujourdhui` et `finAnnée` en utilisant `getTime` puis on arrondit le tout pour avoir un nombre de jours.

La méthode `parse` est utile lorsqu'on souhaite affecter des valeurs temporelles à partir de chaînes de caractères. Par exemple, dans le code qui suit, on utilise les méthodes `parse` et `setTime` pour affecter la valeur d'une date à un objet `IPOdate` :

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

### Exemple d'utilisation de l'objet `Date`

Dans l'exemple qui suit, la fonction `JSClock()` renvoie le temps au format d'une horloge numérique représentant les heures sur 12 heures :

```js
function JSClock() {
  var temps = new Date();
  var heures = temps.getHours();
  var minutes = temps.getMinutes();
  var secondes = temps.getSeconds();
  var calc = "" + (heures > 12) ? heures - 12 : heures);
  if (heures == 0)
    calc = "12";
  calc += ((minutes < 10) ? ":0" : ":") + minutes;
  calc += ((secondes < 10) ? ":0" : ":") + secondes;
  calc += (heures >= 12) ? " P.M." : " A.M.";
  return calc;
}
```

Pour commencer, la fonction `JSClock` crée un objet `Date` appelé `temps` qui représente la date et l'heure à l'instant où la fonction est exécutée. Ensuite, les méthodes `getHours`, `getMinutes`, et `getSeconds` sont appelées afin d'affecter les valeurs correspondantes à `heures`, `minute`s, et `secondes`.

Les quatre instructions suivantes permettent de construire une chaîne de caractères à partir de la valeur temporelle. La première instruction crée une variable `calc` et lui affecte une valeur avec une expression conditionnelle : si `heures` est supérieure à 12, on affichera (`heures - 12`), sinon on affichera l'heure sauf si c'est 0 auquel cas on affichera 12.

L'instruction qui suit concatène la valeur de `minutes` à `calc`. Si la valeur de `minutes` est inférieure à 10, l'expression conditionnelle ajoutera une chaîne avec un zéro pour que la valeur soit affichée avec deux chiffres. De la même façon, l'instruction qui suit concatène la valeur de `calc` avec les secondes.

Enfin, une expression conditionnelle est utilisée pour ajouter "P.M." à `calc` si `heures` vaut 12 ou plus, sinon ce sera la chaîne "A.M." qui sera ajoutée à la fin de `calc`.

{{PreviousNext("Web/JavaScript/Guide/Expressions_et_Opérateurs", "Web/JavaScript/Guide/Formatage_du_texte")}}
