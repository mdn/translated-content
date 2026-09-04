---
title: Comparaisons d'égalité et de similitude
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 188029af4111e0adc8e577c4727cc70c38844b85
---

JavaScript fournit trois opérations permettant de comparer des valeurs&nbsp;:

- [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) — l'égalité stricte (triple égal)
- [`==`](/fr/docs/Web/JavaScript/Reference/Operators/Equality) — l'égalité faible (double égal)
- {{JSxRef("Object.is()")}}

Le choix de l'opération dépend du type de comparaison que vous souhaitez effectuer. En résumé&nbsp;:

- L'égalité faible (`==`) effectue une conversion des deux éléments à comparer et traite `NaN`, `-0` et `+0` de manière spéciale pour se conformer à la norme IEEE 754 (donc `NaN != NaN` et `-0 == +0`);
- L'égalité stricte (`===`) effectue la même comparaison que l'égalité faible (y compris le traitement spécial de `NaN`, `-0` et `+0`) mais sans conversion de type&nbsp;; si les types diffèrent, `false` est retourné.
- `Object.is()` ne fait aucune conversion de type et aucun traitement spécial pour `NaN`, `-0` et `+0` (ce qui lui donne le même comportement que `===` sauf pour ces valeurs numériques spéciales).

Elles correspondent à trois des quatre algorithmes d'égalité en JavaScript&nbsp;:

- [IsLooselyEqual <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal)&nbsp;: `==`
- [IsStrictlyEqual <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal)&nbsp;: `===`
- [SameValue <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue)&nbsp;: `Object.is()`
- [SameValueZero <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero)&nbsp;: utilisé par de nombreuses opérations intégrées

Notez que la distinction entre ces opérations concerne toutes leur traitement des valeurs primitives&nbsp;; aucune d'entre elles ne compare si les paramètres sont conceptuellement similaires dans leur structure. Pour des objets non primitifs `x` et `y` qui ont la même structure mais qui sont des objets distincts, toutes les formes ci-dessus sont évaluées à `false`.

## Égalité stricte avec `===`

L'égalité stricte compare deux valeurs et teste leur égalité. Aucune des valeurs n'est convertie implicitement en une autre valeur avant que la comparaison soit effectuée. Si les valeurs sont typées différemment, elles sont considérées comme différentes. Si les valeurs sont de même type et ne sont pas des nombres, elles sont considérées égales si elles ont la même valeur. Si les deux valeurs sont des nombres, elles sont égales si elles ont la même valeur et que cette valeur n'est pas `NaN` ou si l'une vaut `+0` et l'autre `-0`.

```js
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

L'égalité stricte est presque toujours l'opération de comparaison qu'il convient d'utiliser. Pour toutes les valeurs autres que les nombres, elle applique une sémantique évidente&nbsp;: une valeur n'est égale qu'à elle-même. Pour les nombres, elle utilise une sémantique légèrement différente afin de passer outre deux cas limites distincts. Le premier est que le zéro en virgule flottante peut être signé positivement ou négativement. Cela s'avère utile pour représenter certaines solutions mathématiques, mais comme la plupart des situations ne tiennent pas compte de la différence entre `+0` et `-0`, l'égalité stricte les traite comme une même valeur. Le second cas est que la virgule flottante inclut le concept d'une valeur qui n'est pas un nombre, `NaN`, pour représenter la solution à certains problèmes mathématiques mal définis&nbsp;: l'infini négatif ajouté à l'infini positif, par exemple. L'égalité stricte considère que `NaN` est différent de toute autre valeur — y compris de lui-même. (Le seul cas où `(x !== x)` est `true` est lorsque `x` est `NaN`.)

Outre `===`, l'égalité stricte est également utilisée par les méthodes de recherche d'index dans les tableaux, notamment {{JSxRef("Array.prototype.indexOf()")}}, {{JSxRef("Array.prototype.lastIndexOf()")}}, {{JSxRef("TypedArray.prototype.indexOf()")}}, {{JSxRef("TypedArray.prototype.lastIndexOf()")}} et la correspondance avec [`case`](/fr/docs/Web/JavaScript/Reference/Statements/switch). Cela signifie que vous ne pouvez pas utiliser `indexOf(NaN)` pour trouver l'index d'une valeur `NaN` dans un tableau, ni utiliser `NaN` comme valeur `case` dans une instruction `switch` et le faire correspondre à quoi que ce soit.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Rien n'est journalisé
}
```

## Égalité faible avec `==`

L'égalité faible est _symétrique_&nbsp;: `A == B` a toujours la même signification que `B == A` pour toute valeur de `A` et `B` (sauf pour l'ordre des conversions appliquées). Le comportement pour effectuer une égalité faible en utilisant `==` est le suivant&nbsp;:

1. Si les opérandes sont du même type, ils sont comparés comme suit&nbsp;:
   - Objet&nbsp;: retourne `true` uniquement si les deux opérandes font référence au même objet.
   - Chaîne de caractères&nbsp;: retourne `true` uniquement si les deux opérandes contiennent les mêmes caractères dans le même ordre.
   - Nombre&nbsp;: retourne `true` uniquement si les deux opérandes ont la même valeur. `+0` et `-0` sont considérés comme ayant la même valeur. Si l'un des opérandes est `NaN`, retourne `false`&nbsp;; ainsi, `NaN` n'est jamais égal à `NaN`.
   - Booléen&nbsp;: retourne `true` uniquement si les deux opérandes sont soit tous les deux `true`, soit tous les deux `false`.
   - Grand entier&nbsp;: retourne `true` uniquement si les deux opérandes ont la même valeur.
   - Symbole&nbsp;: retourne `true` uniquement si les deux opérandes font référence au même symbole.
2. Si l'un des opérandes est `null` ou `undefined`, l'autre doit également être `null` ou `undefined` pour que la valeur retournée soit `true`. Sinon, retourne `false`.
3. Si l'un des opérandes est un objet et l'autre un type primitif, [convertis l'objet en type primitif](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_primitive).
4. À cette étape, les deux opérandes sont convertis en types primitifs (de type `String`, `Number`, `Boolean`, `Symbol` ou `BigInt`). Le reste de la conversion s'effectue au cas par cas.
   - S'ils sont du même type, comparez-les en suivant l'étape 1.
   - Si l'un des opérandes est un `Symbol` mais pas l'autre, retournez `false`.
   - Si l'un des opérandes est de type `Boolean` mais pas l'autre, [convertissez la valeur booléenne en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique)&nbsp;: `true` est converti en 1 et `false` en 0. Comparez ensuite à nouveau les deux opérandes de manière approximative.
   - Nombre vers chaîne de caractères&nbsp;: [convertir la chaîne de caractères en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique). Un échec de conversion donne lieu à `NaN`, ce qui garantit que l'égalité est `false`.
   - Nombre vers Grand entier&nbsp;: comparaison en fonction de leur valeur mathématique. Si le nombre est ±∞ ou `NaN`, retourne `false`.
   - Chaîne de caractères vers Grand entier&nbsp;: convertit la chaîne de caractères en Grand entier à l'aide du même algorithme que le constructeur {{JSxRef("BigInt/BigInt", "BigInt()")}}. Si la conversion échoue, retourne `false`.

Traditionnellement, et selon ECMAScript, toutes les valeurs primitives et tous les objets sont en égalité faible différents de `undefined` et `null`. Cependant, la plupart des navigateurs autorisent une classe très restreinte d'objets (plus précisément, l'objet `document.all` pour n'importe quelle page) à se comporter, dans certains contextes, comme s'ils _émulaient_ la valeur `undefined`. L'égalité faible est l'un de ces contextes&nbsp;: `null == A` et `undefined == A` sont évalués à vrai si, et seulement si, A est un objet qui _émule_ `undefined`. Dans tous les autres cas, un objet n'est jamais faiblement égal à `undefined` ou `null`.

Dans la plupart des cas, l'utilisation de l'égalité faible est déconseillée. Le résultat d'une comparaison utilisant l'égalité stricte est plus facile à prévoir et peut s'évaluer plus rapidement en raison de l'absence de conversion de type.

L'exemple suivant illustre des comparaisons d'égalité faible impliquant le nombre primitif `0`, le nombre entier grand `0n`, la chaîne de caractères primitive `"0"` et un objet dont la valeur `toString()` est `"0"`.

```js
const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

L'égalité faible n'est utilisée que par l'opérateur `==`.

## Égalité de valeur similaire avec `Object.is()`

L'égalité de valeur détermine si deux valeurs sont _fonctionnellement identiques_ dans tous les contextes. (Ce cas d'utilisation illustre une application du [principe de substitution de Liskov <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Liskov_substitution_principle).) Un cas de figure se présente notamment lorsqu'on tente de modifier une propriété immuable&nbsp;:

```js
// Ajoute une propriété immuable NEGATIVE_ZERO au constructeur Number.
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function tentativeMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty` lève une exception lorsqu'on tente de modifier une propriété immuable, mais ne fait rien si aucun changement réel n'est demandé. Si `v` vaut `-0`, aucun changement n'est demandé et aucune erreur n'est levée. En interne, lorsqu'une propriété immuable est redéfinie, la nouvelle valeur définie est comparée à la valeur actuelle en utilisant l'égalité de valeur similaire.

L'égalité de valeur similaire est fournie par la méthode {{JSxRef("Object.is()")}}. Elle est utilisée presque partout dans le langage lorsqu'une valeur d'identité équivalente est attendue.

## Égalité de valeurs nulles

Semblable à l'égalité de valeur similaire, mais +0 et -0 sont considérés comme égaux.

L'égalité de même valeur zéro n'est pas exposée en tant qu'API JavaScript, mais peut être implémentée à l'aide d'un code personnalisé&nbsp;:

```js
function memeValeurZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x et y sont égaux (peut être -0 et 0) ou sont tous les deux NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

L'égalité de même valeur zéro seule diffère de l'égalité stricte en considérant `NaN` comme équivalent, et ne diffère de l'égalité de même valeur qu'en considérant `-0` comme équivalent à `0`. Cela lui confère généralement le comportement le plus judicieux lors des recherches, en particulier lorsqu'on travaille avec `NaN`. Elle est utilisée par {{JSxRef("Array.prototype.includes()")}}, {{JSxRef("TypedArray.prototype.includes()")}}, ainsi que les méthodes {{JSxRef("Map")}} et {{JSxRef("Set")}}pour comparer l'égalité des clés.

## Comparer les méthodes d'égalité

Les personnes comparent souvent le double égal et le triple égal en affirmant que l'un est une version «&nbsp;améliorée&nbsp;» de l'autre. Par exemple, on peut dire que le double égal est une version étendue du triple égal, car le premier fait tout ce que fait le second, mais avec une conversion de type sur ses opérandes — par exemple, `6 == "6"`. À l'inverse, on peut affirmer que le double égal est la référence, et que le triple égal en est une version améliorée, car il exige que les deux opérandes soient du même type, ajoutant ainsi une contrainte supplémentaire.

Cependant, cette façon de penser implique que les comparaisons d'égalité forment un «&nbsp;spectre&nbsp;» unidimensionnel où «&nbsp;totalement strict&nbsp;» se situe à une extrémité et «&nbsp;totalement souple&nbsp;» à l'autre. Ce modèle ne tient pas la route avec {{JSxRef("Object.is()")}}, car celui-ci n'est ni «&nbsp;plus faible&nbsp;» que le double égal, ni «&nbsp;plus strict&nbsp;» que le triple égal, et ne se situe pas non plus entre les deux (c'est-à-dire à la fois plus strict que le double égal, mais plus faible que le triple égal). Nous pouvons voir dans le tableau de comparaison de l'égalité ci-dessous que cela est dû à la manière dont {{JSxRef("Object.is()")}} traite {{JSxRef("NaN")}}. Notez que si `Object.is(NaN, NaN)` donne `false`, on _peut_ dire qu'il se situe sur le spectre «&nbsp;faible/strict&nbsp;» en tant que forme encore plus stricte du triple égal, qui fait la distinction entre `-0` et `+0`. Cependant, la gestion de {{JSxRef("NaN")}} signifie que ce n'est pas le cas. Malheureusement, {{JSxRef("Object.is()")}} doit être considéré en fonction de ses caractéristiques spécifiques, plutôt qu'en fonction de son caractère «&nbsp;faible&nbsp;» ou «&nbsp;strict&nbsp;» par rapport aux opérateurs d'égalité.

| x                    | y                    | `==`       | `===`      | `Object.is` | `SameValueZero` |
| -------------------- | -------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`          | `undefined`          | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `null`               | `null`               | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `true`               | `true`               | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `false`              | `false`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `'toto'`             | `'toto'`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                  | `0`                  | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `+0`                 | `-0`                 | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `+0`                 | `0`                  | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `-0`                 | `0`                  | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `0n`                 | `-0n`                | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                  | `false`              | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                 | `false`              | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                 | `0`                  | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'0'`                | `0`                  | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'17'`               | `17`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `[1, 2]`             | `'1,2'`              | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('toto')` | `'toto'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`               | `undefined`          | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`               | `false`              | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `undefined`          | `false`              | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `{ toto: 'bar' }`    | `{ toto: 'bar' }`    | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('toto')` | `new String('toto')` | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                  | `null`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                  | `NaN`                | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `'toto'`             | `NaN`                | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `NaN`                | `NaN`                | `❌ false` | `❌ false` | `✅ true`   | `✅ true`       |

## Quand utiliser `Object.is()` ou l'égalité stricte

En général, le seul moment où le comportement spécial de {{JSxRef("Object.is()")}} envers les zéros est susceptible d'intéresser est dans la poursuite de certains schémas de méta-programmation, en particulier en ce qui concerne les descripteurs de propriétés, lorsque vous souhaitez que votre travail reflète certaines des caractéristiques de {{JSxRef("Object.defineProperty")}}. Si votre cas d'utilisation ne nécessite pas cela, il est conseillé d'éviter {{JSxRef("Object.is()")}} et d'utiliser [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) à la place. Même si vos exigences impliquent que les comparaisons entre deux valeurs {{JSxRef("NaN")}} évaluent à `true`, il est généralement plus facile de traiter les vérifications {{JSxRef("NaN")}} de manière spéciale (en utilisant la méthode {{JSxRef("isNaN")}} disponible dans les versions précédentes d'ECMAScript) que de déterminer comment les calculs environnants peuvent affecter le signe de tous les zéros que vous rencontrez dans votre comparaison.

Voici une liste non exhaustive des méthodes et opérateurs intégrés qui peuvent provoquer une distinction entre `-0` et `+0` dans votre code&nbsp;:

- [`-` (négation unaire)](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
  - : Considérez l'exemple suivant&nbsp;:

    ```js
    const forceArret = obj.masse * -obj.velocite;
    ```

    Si `obj.velocite` est `0` (ou se calcule à `0`), un `-0` est introduit à cet endroit et se propage dans `forceArret`.

- {{JSxRef("Math.atan2")}}, {{JSxRef("Math.ceil")}}, {{JSxRef("Math.pow")}}, {{JSxRef("Math.round")}}
  - : Dans certains cas, il est possible qu'un `-0` soit introduit dans une expression en tant que valeur de retour de ces méthodes même lorsqu'aucun `-0` n'existe en tant que paramètre. Par exemple, utiliser {{JSxRef("Math.pow")}} pour élever {{JSxRef("Infinity", "-Infinity")}} à la puissance de tout exposant négatif impair évalue à `-0`. Consultez la documentation des méthodes individuelles.
- {{JSxRef("Math.floor")}}, {{JSxRef("Math.max")}}, {{JSxRef("Math.min")}}, {{JSxRef("Math.sin")}}, {{JSxRef("Math.sqrt")}}, {{JSxRef("Math.tan")}}
  - : Il est possible d'obtenir une valeur de retour `-0` de ces méthodes dans certains cas où un `-0` existe en tant que paramètre. Par exemple, `Math.min(-0, +0)` évalue à `-0`. Consultez la documentation des méthodes individuelles.
- [`~`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Chacun de ces opérateurs utilise l'algorithme ToInt32 en interne. Comme il n'existe qu'une seule représentation pour 0 dans le type entier 32 bits interne, `-0` ne survit pas à un aller-retour après une opération inverse. Par exemple, `Object.is(~~(-0), -0)` et `Object.is(-0 << 2 >> 2, -0)` évaluent tous deux à `false`.

Se fier à {{JSxRef("Object.is")}} lorsque le signe des zéros n'est pas pris en compte peut être dangereux. Bien sûr, lorsque l'intention est de distinguer entre `-0` et `+0`, cela fait exactement ce qui est souhaité.

### Mise en garde : `Object.is()` et `NaN`

La spécification de {{JSxRef("Object.is")}} considère toutes les instances de {{JSxRef("NaN")}} comme le même objet. Cependant, comme les [tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays) sont disponibles, nous pouvons avoir des représentations en virgule flottante distinctes de `NaN` qui ne se comportent pas de manière identique dans tous les contextes. Par exemple&nbsp;:

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Obtient une représentation en octets de NaN
const n = f2b(NaN);
// Change le premier bit, qui est le bit de signe et n'a pas d'importance pour NaN
n[7] |= 0x80;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
```

> [!NOTE]
> Les implémentations sont autorisées à canoniser la représentation binaire de `NaN`, donc `nan2`, lorsqu'il est reconverti en virgule flottante, peut avoir la même représentation binaire que le `NaN` original.

## Voir aussi

- [Tableau des comparaisons en JavaScript <sup>(angl.)</sup>](https://dorey.github.io/JavaScript-Equality-Table/) par [dorey <sup>(angl.)</sup>](https://github.com/dorey)
