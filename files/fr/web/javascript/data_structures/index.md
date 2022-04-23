---
title: Types et structures de données JavaScript
slug: Web/JavaScript/Data_structures
translation_of: Web/JavaScript/Data_structures
original_slug: Web/JavaScript/Structures_de_données
---
{{jsSidebar("More")}}

Les langages de programmation disposent de structures de données natives. Selon les langages, les structures mises à disposition peuvent être différentes. Dans cet article, on listera les structures de données natives en JavaScript. On détaillera leurs propriétés et les façons de les utiliser voire de les combiner. Dans certains cas, on comparera ces structures avec celles d'autres langages.

## Un typage dynamique

JavaScript est un langage dont le typage est _faible_ et _dynamique_. Cela signifie qu'il n'est pas nécessaire de déclarer le type d'une variable avant de l'utiliser. Le type de la variable sera automatiquement déterminé lorsque le programme sera exécuté. Cela signifie également que la même variable pourra avoir différents types au cours de son existence&nbsp;:

```js
let toto = 42;     // toto est un nombre
    toto = 'truc'; // toto est désormais une chaîne de caractères
    toto = true;   // toto est désormais un booléen
```

## Les types de données JavaScript

L'ensemble des types disponible en JavaScript se compose [_des valeurs primitives_](#les_valeurs_primitives) et [_des objets_](#les_objects).

- [Les valeurs primitives](#les_valeurs_primitives) (des données immuables, représentées au niveau le plus bas du langage)
  - [Le type booléen](#le_type_booléen)
  - [Le type nul](#le_type_nul)
  - [Le type indéfini](#le_type_indéfini)
  - [Le type nombre](#le_type_nombre)
  - [Le type pour les grands entiers](#le_type_bigint)
  - [Le type pour les chaînes de caractères](#le_type_chaîne_de_caractères_string)
  - [Le type symbole](#le_type_symbole)

- [Les objets](#les_objets) (des ensembles de propriétés)

## Les valeurs primitives

Tous les types, sauf les objets, définissent des valeurs immuables (qu'on ne peut modifier). Ainsi, contrairement au C, les chaînes de caractères sont immuables en JavaScript. Les valeurs immuables pour chacun de ces types sont appelées «&nbsp;valeurs primitives&nbsp;».

### Le type booléen

Un booléen représente le résultat d'une assertion logique et peut avoir deux valeurs&nbsp;: `true` (pour le vrai logique) et `false` (pour le faux logique) (voir [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) pour plus de détails sur la représentation objet de ce type).

### Le type nul

Le type nul ne possède qu'une valeur&nbsp;: `null`. Voir [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) et [la page du glossaire](/fr/docs/Glossary/Null) pour plus d'informations.

### Le type indéfini

Une variable à laquelle on n'a pas affecté de valeur vaudra `undefined`. Voir [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) et [la page du glossaire](/fr/docs/Glossary/undefined) pour plus d'informations.

### Les types numériques

ECMAScript possède deux types numériques natifs&nbsp;: [`Number`](#le_type_nombre) et [`BigInt`](#le_type_bigint), ainsi que la valeur spéciale [`NaN`](#nan).

### Le type nombre

Le type `Number` est géré pour représenter les nombres&nbsp;: [les nombres flottants à précision double, représentés sur 64 bits, selon le format IEEE 754](https://fr.wikipedia.org/wiki/IEEE_754). Cette représentation permet de stocker des nombres décimaux entre `2^-1074` et `2^1024`, mais ne permet de représenter des entiers de façon sûre qu'au sein de l'intervalle allant de `-(2^53 − 1)` à `2^53 − 1`. Les valeurs en dehors de l'intervalle compris entre [`Number.MIN_VALUE`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) et [`Number.MAX_VALUE`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) sont automatiquement converties en `+Infinity` ou `-Infinity`, qui se comporteront de façon analogue à l'infini mathématique (voir la page sur [`Number.POSITIVE_INFINITY`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY) pour les détails et les quelques différences).

> **Note :** Vous pouvez vérifier si un nombre est un nombre entier représentable de façon exacte avec une représentation en nombre flottant à double précision avec la méthode [`Number.isSafeInteger()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger). En dehors de l'intervalle entre [`Number.MIN_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) et [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), JavaScript ne peut plus représenter un entier de façon exacte et ce sera une approximation avec un nombre flottant à double précision.

Pour le type `Number`, il n'y a qu'un seul nombre qui possède plusieurs représentations&nbsp;: `0` qui est représenté comme `-0` et `+0` (avec `0` étant un synonyme pour `+0`). En pratique, il n'y a presque pas de différences entre ces représentations et `+0 === -0` vaut `true`. Toutefois, on pourra remarquer la nuance lors de la division par zéro&nbsp;:

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

Dans la plupart des cas, un nombre représente sa propre valeur et JavaScript fournit des [opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Operators).

> **Note :** Bien que les opérateurs binaires _puissent_ être utilisés afin de représenter plusieurs valeurs booléennes avec un seul nombre en utilisant [un masque de bits](https://fr.wikipedia.org/wiki/Masquage), c'est généralement une mauvaise pratique. En effet, JavaScript fournit d'autres moyens pour représenter un ensemble de valeurs booléennes comme les tableaux ou l'utilisation de propriétés nommées pour stocker ces valeurs. L'utilisation d'un masque de bit dégrade également la lisibilité, la clarté et la maintenabilité du code.

Il peut être nécessaire d'utiliser de telles techniques dans des environnements extrêmement contraints, pour gérer des limites de stockage local ou lorsque chaque bit transmis sur le réseau compte. Cette technique devrait uniquement être considérée comme dernière mesure pour réduire la taille.

### Le type `BigInt`

Le type [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) est un type numérique qui permet de représenter des entiers avec une précision arbitraire. Avec ce type, on peut donc manipuler des entiers plus grands que ceux représentables avec `Number`.

Pour créer un grand entier, on ajoutera un `n` après l'entier ou on appellera le constructeur [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

On peut connaître la valeur la plus grande qui peut être incrémentée et représentée avec le type `Number` en utilisant la constante [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). Avec les grands entiers, on peut manipuler des nombres qui vont au-delà de [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

Dans l'exemple qui suit, on voit le résultat obtenu lorsqu'on incrémente la valeur de [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)&nbsp;:

```js
// BigInt
> const x = BigInt(Number.MAX_SAFE_INTEGER);
9007199254740991n
> x + 1n === x + 2n; // 9007199254740992n === 9007199254740993n
false

// Number
> Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 === 9007199254740992
true
```

À l'instar des nombres classiques, on peut utiliser les opérateurs `+`,  `*`, `-`, `**` et `%`. Un grand entier ne sera pas strictement égal à un nombre mais on pourra avoir une égalité faible.

Un grand entier se comportera comme un nombre lorsqu'il est converti en booléen avec `if`, `||`, `&&`, `Boolean` et `!`.

Il n'est pas possible d'utiliser des grands entiers et des nombres de façon interchangeable. Une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera déclenchée en cas d'incompatibilité.

#### NaN

[`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) (pour <i lang="en">Not A Number</i> en anglais, qui signifie «&nbsp;qui n'est pas un nombre&nbsp;») est utilisée lorsque le résultat d'une opération arithmétique ne peut pas être exprimée comme un nombre. Il s'agit également de la seule valeur JavaScript qui n'est pas égale à elle-même (du fait de la norme IEEE 754).

### Le type chaîne de caractères (`String`)

Ce type JavaScript est utilisé afin de représenter des données de texte. C'est un ensemble d'«&nbsp;éléments&nbsp;» de valeurs entières non-signées représentées sur 16 bits. Chaque élément occupe une position au sein de cette chaîne de caractères. Le premier élément est situé à l'indice `0`, le deuxième à l'indice `1` et ainsi de suite. La longueur d'une chaîne de caractères correspond au nombre d'éléments qu'elle contient.

À la différence d'autres langages (comme le C), les chaînes de caractères JavaScript sont immuables. Cela signifie qu'une fois une chaîne créée, il est impossible de la modifier.

En revanche, il est toujours possible de créer une autre chaîne basée sur la première grâce à des opérations. Par exemple&nbsp;:

- Un fragment de la chaîne originelle en sélectionnant certaines lettres ou en utilisant [`String.substr()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substr).
- Une concaténation de deux chaînes de caractères en utilisant l'opérateur de concaténation (`+`) ou [`String.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Attention à ne pas utiliser les chaînes pour tout et n'importe quoi&nbsp;!

Ça peut être tentant de vouloir utiliser des chaînes afin de représenter des données complexes. En revanche, les avantages de cette méthode ne sont que très superficiels&nbsp;:

- On peut facilement construire des chaînes complexes grâce à la concaténation.
- On peut déboguer rapidement le contenu des chaînes de caractères.
- Les chaînes de caractères sont utilisées à de multiples endroits dans beaucoup d'API ([champs de saisie](/fr/docs/Web/API/HTMLInputElement), valeurs en [stockage local](/fr/docs/Web/API/Web_Storage_API), réponses [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) avec `responseText`, etc.).

En utilisant des conventions, il peut être possible de représenter n'importe quelle donnée sous forme d'une chaîne de caractères, en revanche cela n'est souvent pas la meilleure façon. Par exemple, avec un séparateur, on pourrait émuler le comportement d'un tableau en «&nbsp;interdisant&nbsp;» que ce séparateur soit utilisé pour éléments, etc. On pourrait ensuite définir un caractère d'échappement, qui serait à son tour inutilisable dans les chaînes&nbsp;: toutes ces pseudo-conventions entraîneront de lourdes conséquences en termes de maintenance.

En résumé, les chaînes doivent être utilisées pour les données de texte. Pour des données plus complexes, utilisez une abstraction adéquate et analysez/parsez les chaînes que vous recevez d'autres API.

### Le type symbole

Un symbole est une valeur primitive **unique** et **immuable** pouvant être utilisée comme clé pour propriété d'un objet (voir ci-après). Dans d'autres langages de programmation, les symboles sont appelés atomes.

Pour plus de détails, voir les pages [du glossaire](/fr/docs/Glossary/Symbol) et de [`Symbol`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) JavaScript.

## Les objets

En informatique, un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un [identifiant](/fr/docs/Glossary/Identifier).

### Propriétés

En JavaScript, les objets peuvent être considérés comme des collections de propriétés. En utilisant [un littéral objet](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#les_littéraux_dobjets), il est possible d'initialiser un ensemble limité de propriétés&nbsp;; d'autres propriétés peuvent ensuite être ajoutées et/ou retirées. Les valeurs des propriétés peuvent être de n'importe quel type, y compris des objets. Cela permet de construire des structures de données complexes. Les propriétés sont identifiées grâce à une «&nbsp;clé&nbsp;». Une clé peut être une chaîne de caractères ou un symbole.

Il existe deux types de propriétés qui ont certains attributs&nbsp;: des [propriétés de _données_](#propriétés_de_données) (<i lang="en">data property</i>) et des [propriétés d'_accesseur_](#propriétés_daccesseur).

> **Note :** Chaque propriété est décrite par des *attributs* correspondants. Ceux-ci sont utilisés par le moteur JavaScript et ne peuvent pas être manipulés depuis le code. Pour les identifier, les attributs sont indiqués entre double crochets.
>
> Voir la page [`Object.defineProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) pour en savoir plus.

#### Propriétés de données

Elles associent une clé avec une valeur et possèdent les attributs suivants&nbsp;:

<table class="standard-table">
  <caption>
    Attributs d'une propriété de donnée
  </caption>
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
      <th scope="col">Valeur par défaut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[[Value]]</code></td>
      <td>N'importe quel type JavaScript</td>
      <td>La valeur obtenue lorsqu'on accède à la propriété.</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td><code>[[Writable]]</code></td>
      <td>Booléen</td>
      <td>
        Si cet attribut vaut <code>false</code>, l'attribut <code>[[Value]]</code> de la propriété ne pourra pas être changé.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>[[Enumerable]]</code></td>
      <td>Booléen</td>
      <td>
        <p>
          Si cet attribut vaut <code>true</code>, la propriété sera énumérée dans les boucles <a href="/fr/docs/Web/JavaScript/Reference/Statements/for...in"><code>for…in</code></a>. Voir aussi <a href="/fr/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Rattachement et caractère énumérable des propriétés</a>.
        </p>
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>[[Configurable]]</code></td>
      <td>Booléen</td>
      <td>
        Si cet attribut vaut <code>false</code>, la propriété ne peut pas être supprimée, ne peut pas être changée en propriété d'accesseur et les attributs en dehors de <code>[[Value]]</code> et <code>[[Writable]]</code> ne pourront pas être changés.
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

| Attribut     | Type    | Description                                             |
| ------------ | ------- | ------------------------------------------------------- |
| `Read-only`  | Booléen | État symétrique pour l'attribut ES5 `[[Writable]]`.     |
| `DontEnum`   | Booléen | État symétrique pour l'attribut ES5 `[[Enumerable]]`.   |
| `DontDelete` | Booléen | État symétrique pour l'attribut ES5 `[[Configurable]]`. |

#### Propriétés d'accesseur

Ces propriétés associent une clé avec une ou deux fonctions accesseur et mutateur (respectivement `get` et `set`) qui permettent de récupérer ou d'enregistrer une valeur.

> **Note :** Il est important de noter qu'on parle de _propriété_ d'accesseur et pas de _méthode_. On peut donner des accesseurs semblables à ceux d'une classe à un objet en utilisant une fonction comme valeur d'une propriété mais ça ne fait pas de l'objet une classe.

Elles possèdent les attributs suivants&nbsp;:

| Attribut           | Type                               | Description                                                                                                                                                                                                                                            | Valeur par défaut |
| ------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `[[Get]]`          | Un objet `Function` ou `undefined` | La fonction qui est appelée sans argument afin de récupérer la valeur de la propriété quand on souhaite y accéder. Voir aussi la page sur [`get`](/fr/docs/Web/JavaScript/Reference/Functions/get).                                                    | `undefined`       |
| `[[Set]]`          | Un objet `Function` ou `undefined` | La fonction, appelée avec un argument qui contient la valeur qu'on souhaite affecter à la valeur et qui est exécutée à chaque fois qu'on souhaite modifier la valeur. Voir aussi la page sur [`set`](/fr/docs/Web/JavaScript/Reference/Functions/set). | `undefined`       |
| `[[Enumerable]]`   | Booléen                            | S'il vaut `true`, la propriété sera listée dans les boucles [`for…in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in).                                                                                                                     | `false`           |
| `[[Configurable]]` | Booléen                            | S'il vaut `false`, la propriété ne pourra pas être supprimée et ne pourra pas être transformée en une propriété de données.                                                                                                                            | `false`           |

### Les objets «&nbsp;normaux&nbsp;» et les fonctions

Un objet JavaScript est un ensemble de correspondances entre des _clés_ et des _valeurs_. Les clés sont représentées par des chaînes ou des symboles ([`Symbol`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)). Les valeurs peuvent être de n'importe quel type. Grâce à cela, les objets peuvent, naturellement, être utilisés comme [tables de hachage](https://fr.wikipedia.org/wiki/Table_de_hachage).

Les fonctions sont des objets classiques à la seule différence qu'on peut les appeler.

### Les dates

Lorsqu'on souhaite représenter des dates, il est tout indiqué d'utiliser le type utilitaire natif [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) de JavaScript.

### Les collections indexées&nbsp;: les tableaux (<i lang="en">Arrays</i>) et les tableaux typés (<i lang="en">Typed Arrays</i>)

[Les tableaux](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) (ou <i lang="en">Arrays</i> en anglais) sont des objets natifs qui permettent d'organiser des valeurs numérotées et qui ont une relation particulière avec la propriété `length`.

De plus, les tableaux héritent de `Array.prototype` qui permet de bénéficier de plusieurs méthodes pour manipuler les tableaux. Par exemple, [`indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) qui permet de rechercher une valeur dans le tableau ou [`push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push) qui permet d'ajouter un élément au tableau. Les tableaux sont donc indiqués quand on souhaite représenter des listes de valeurs ou d'objets.

[Les tableaux typés](/fr/docs/Web/JavaScript/Typed_arrays) (<i lang="en">Typed Arrays</i> en anglais) ont été ajoutés avec ECMAScript 2015 et offrent une vue sous forme d'un tableau pour manipuler des tampons de données binaires. Le tableau qui suit illustre les types de données équivalents en C&nbsp;:


<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Type</td>
      <td class="header">Intervalle</td>
      <td class="header">Taille (exprimée en octets)</td>
      <td class="header">Description</td>
      <td class="header">Type Web IDL</td>
      <td class="header">Type équivalent en C</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Int8Array"><code>Int8Array</code></a></td>
      <td>-128 à 127</td>
      <td>1</td>
      <td>Entier signé en complément à deux sur 8 bits.</td>
      <td><code>byte</code></td>
      <td><code>int8_t</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"><code>Uint8Array</code></a></td>
      <td>0 à 255</td>
      <td>1</td>
      <td>Entier non signé sur 8 bits.</td>
      <td><code>octet</code></td>
      <td><code>uint8_t</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray"><code>Uint8ClampedArray</code></a></td>
      <td>0 à 255</td>
      <td>1</td>
      <td>Entier non signé sur 8 bits (compris entre 0 et 255).</td>
      <td><code>octet</code></td>
      <td><code>uint8_t</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Int16Array"><code>Int16Array</code></a></td>
      <td>-32768 à 32767</td>
      <td>2</td>
      <td>Entier signé en complément à deux sur 16 bits.</td>
      <td><code>short</code></td>
      <td><code>int16_t</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array"><code>Uint16Array</code></a></td>
      <td>0 à 65535</td>
      <td>2</td>
      <td>Entier non signé sur 16 bits.</td>
      <td><code>unsigned short</code></td>
      <td><code>uint16_t</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"><code>Int32Array</code></a></td>
      <td>-2147483648 à 2147483647</td>
      <td>4</td>
      <td>Entier signé en complément à deux sur 32 bits.</td>
      <td><code>long</code></td>
      <td><code>int32_t</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array"><code>Uint32Array</code></a></td>
      <td>0 à 4294967295</td>
      <td>4</td>
      <td>Entier non signé sur 32 bits.</td>
      <td><code>unsigned long</code></td>
      <td><code>uint32_t</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Float32Array"><code>Float32Array</code></a></td>
      <td>1.2x10^-38 à 3.4x10^38</td>
      <td>4</td>
      <td>
        Nombre flottant sur 32 bits selon la représentation IEEE (7 chiffres significatifs).
      </td>
      <td><code>unrestricted float</code></td>
      <td><code>float</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Float64Array"><code>Float64Array</code></a></td>
      <td>5.0x10^-324 à 1.8x10^308</td>
      <td>8</td>
      <td>
        Nombre flottant sur 64 bits selon la représentation IEEE (16 chiffres significatifs).
      </td>
      <td><code>unrestricted double</code></td>
      <td><code>double</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array"><code>BigInt64Array</code></a></td>
      <td>-2^63 à 2^63-1</td>
      <td>8</td>
      <td>Nombre entier signé sur 64 bits en complément à deux.</td>
      <td><code>bigint</code></td>
      <td><code>int64_t (signed long long)</code></td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array"><code>BigUint64Array</code></a></td>
      <td>0 à 2^64-1</td>
      <td>8</td>
      <td>Nombre entier non signé sur 64 bits.</td>
      <td><code>bigint</code></td>
      <td><code>uint64_t (unsigned long long)</code></td>
    </tr>
  </tbody>
</table>

### Les collections avec clés&nbsp;: `Map`, `Set`, `WeakMap`, `WeakSet`

Ces structures de données utilisent des clés pour référencer des objets. Elles ont été introduites avec ECMAScript 2015. [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set) et [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) représentent des ensembles d'objets, [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map) et [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) associent une valeur à un objet.

Il est possible d'énumérer les valeurs contenues dans un objet `Map` mais pas dans un objet `WeakMap`. Les `WeakMap` quant à eux permettent certaines optimisations dans la gestion de la mémoire et le travail du ramasse-miettes.

Il est possible d'implémenter des objets `Map` et `Set` grâce à ECMAScript 5. Cependant, comme les objets ne peuvent pas être comparés (avec une relation d'ordre par exemple), la complexité obtenue pour rechercher un élément serait nécessairement linéaire. Les implémentations natives (y compris celle des `WeakMap`) permettent d'obtenir des performances logarithmiques voire constantes.

Généralement, si on voulait lier des données à un nœud DOM, on pouvait utiliser les attributs `data-*` ou définir les propriétés à un même l'objet. Malheureusement, cela rendait les données disponibles à n'importe quel script fonctionnant dans le même contexte. Les objets `Map` et `WeakMap` permettent de gérer plus simplement une liaison «&nbsp;privée&nbsp;» entre des données et un objet.

### Les données structurées&nbsp;: JSON

JSON (<i lang="en">JavaScript Object Notation</i>) est un format d'échange de données léger, dérivé de JavaScript et utilisé par plusieurs langages de programmation. JSON permet ainsi de construire des structures de données universelles pouvant être échangées entre programmes.

Pour plus d'informations, voir [la page du glossaire](/fr/docs/Glossary/JSON) et [la page sur `JSON`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON).

### Les autres objets de la bibliothèque standard

JavaScript possède une bibliothèque standard d'objets natifs. Veuillez lire la [référence](/fr/docs/Web/JavaScript/Reference/Global_Objects) pour en savoir plus sur ces objets.

## Déterminer le type des objets grâce à l'opérateur `typeof`

L'opérateur `typeof` peut vous aider à déterminer le type d'une variable. Pour plus d'informations et sur les cas particuliers, voir la page de référence sur [cet opérateur](/fr/docs/Web/JavaScript/Reference/Operators/typeof).

## Voir aussi

- [Structures de données et algorithmes JavaScript par Oleksii Trekhleb](https://github.com/trekhleb/javascript-algorithms) (en anglais)
- [Un ensemble de structures de données usuelles et d'algorithmes classiques, en JavaScript, par Nicholas Zakas](https://github.com/nzakas/computer-science-in-javascript/) (en anglais)
- [Implémentations de différentes structures de données et utilitaires de recherche en JavaScript](https://github.com/monmohan/DataStructures_In_Javascript) (en anglais)
- [Types de données et valeurs dans la spécification ECMAScript](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (en anglais)
