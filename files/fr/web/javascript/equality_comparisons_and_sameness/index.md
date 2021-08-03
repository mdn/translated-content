---
title: Utiliser les différents tests d'égalité
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Guide
  - Intermédiaire
  - JavaScript
translation_of: Web/JavaScript/Equality_comparisons_and_sameness
original_slug: Web/JavaScript/Les_différents_tests_d_égalité
---
{{jsSidebar("Intermediate")}}

JavaScript fournit trois opérations permettant de comparer des valeurs :

- L'égalité stricte (ou identité ou « triple égal ») utilisant [`===`](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)>),
- L'égalité faible (ou « double égal ») utilisant [`==`](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_simple_(.3D.3D)>),
- {{jsxref("Object.is")}} (ajouté avec ECMAScript 2015).

Ces trois opérations sont associées à quatre algorithmes d'égalité (depuis ES2015) :

- [La comparaison d'égalité abstraite (`==`)](#faible)
- [La comparaison d'égalité stricte (`===`)](#stricte)

  - Utilisée par {{jsxref("Array.indexOf")}} et {{jsxref("Array.lastIndexOf")}} et la sensibilité à la casse

- [_SameValueZero_ (l'égalité de valeurs nulles)](#SameValueZero)

  - Utilisée par les constructeurs {{jsxref("TypedArray")}} et {{jsxref("ArrayBuffer")}} et par les opérations associées à {{jsxref("Map")}} et {{jsxref("Set")}}. Depuis ES2016, cet algorithme est également utilisé par {{jsxref("String.includes")}} et {{jsxref("Array.includes")}}

- [_SameValue_ (l'égalité de valeurs)](#sameValue)

  - Utilisée partout ailleurs

Selon la comparaison qu'on souhaite effectuer, on choisira une de ces opérations.

En résumé :

- L'égalité faible (`==`) effectuera une conversion des deux éléments à comparer avant d'effectuer la comparaison
- L'égalité stricte (`===`) effectuera la même comparaison mais sans conversion préalable (elle renverra toujours false si les types des deux valeurs comparées sont différents)
- Enfin `Object.is()` se comportera comme l'égalité stricte sauf pour les valeurs `NaN`, `-0` et `+0` : pour `Object.is()`, `-0` et `+0` seront différents mais on aura `Object.is(NaN, NaN)` qui sera `true`. (Généralement, quand on compare `NaN` avec `NaN` en utilisant l'égalité stricte ou l'égalité faible, cela donne `false` afin de respecter la norme IEEE 754.)

On notera que pour ces trois opérations, la comparaison s'effectue sur les valeurs des éléments qu'on compare, aucune de ces opérations ne permet de comparer la structure des paramètres. Pour des objets non primitifs, `x` et `y` qui ont la même structure mais qui sont des objets distincs, chacune des opérations présentées ci-avant sera évaluée à `false`.

## L'égalité stricte avec `===`

L'égalité stricte compare deux valeurs et teste leur égalité. Aucune des valeurs n'est convertie implicitement en une autre valeur avant que la comparaison soit effectuée. Si les valeurs sont typées différemment, elles sont considérées comme différentes. Si les valeurs sont de même type et ne sont pas des nombres, elles sont considérées égales si elles ont la même valeur. Si les deux valeurs sont des nombres, elles sont égales si elles ont la même valeur et que cette valeur n'est pas NaN ou si l'une vaut +0 et l'autre -0.

```js
var num = 0;
var obj = new String("0");
var str = "0";

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

Ce test d'égalité stricte est presque toujours la meilleure des opérations à considérer pour ces tests. Excepté pour les nombres, la sémantique utilisée est simple : une valeur est uniquement égale à elle-même. En ce qui concerne les nombres, il y a deux cas aux limites à considérer. Le premier cas concerne le nombre zéro positif ou négatif. Cela peut être utile dans la représentation de problèmes mathématiques mais ne constitue pas une différence pour de nombreuses situations : le test d'égalité stricte considère que ce sont les mêmes valeurs. Le second cas concerne la valeur « n'est pas un nombre », `NaN` (pour « not a number » en anglais) permettant de représenter certaines entités mathématiques : la somme des deux infinis (positif et négatif) par exemple. Le test d'égalité stricte considère que `NaN` est différent de toutes les valeurs, y compris lui-même. (N.B. : Le seul cas de figure pour lequel on a `(x !== x)` qui renvoie `true` est lorsque x vaut `NaN`.)

## L'égalité faible avec `==`

Le test d'égalité faible compare deux valeurs _après_ les avoir converties en valeurs d'un même type. Une fois converties (la conversion peut s'effectuer pour l'une ou les deux valeurs), la comparaison finale est la même que celle effectuée par `===`. L'égalité faible est _symétrique_ : `A == B` aura toujours la même signification que `B == A` pour toute valeur de A et B.

La comparaison d'égalité est effectuée comme suit pour des opérandes de différents types :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th colspan="7" scope="col">Opérande B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>Undefined</td>
      <td>Null</td>
      <td>Number</td>
      <td>String</td>
      <td>Boolean</td>
      <td>Object</td>
    </tr>
    <tr>
      <th colspan="1" rowspan="6" scope="row">Opérande A</th>
      <td>Undefined</td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Null</td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Number</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>A === B</code></td>
      <td><code>A === ToNumber(B)</code></td>
      <td><code>A === ToNumber(B)</code></td>
      <td><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>String</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToNumber(A) === B</code></td>
      <td><code>A === B</code></td>
      <td><code>ToNumber(A) === ToNumber(B)</code></td>
      <td><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToNumber(A) === B</code></td>
      <td><code>ToNumber(A) === ToNumber(B)</code></td>
      <td><code>A === B</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Object</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToPrimitive(A) == B</code></td>
      <td><code>ToPrimitive(A) == B</code></td>
      <td><code>ToPrimitive(A) == ToNumber(B)</code></td>
      <td>
        <p><code>A === B</code></p>
      </td>
    </tr>
  </tbody>
</table>

Dans le tableau ci-dessus, l'expression `ToNumber(A)` correspond à une tentative de convertir l'argument en un nombre avant la comparaison. Le résultat obtenu est équivalent à `+A` (l'opérateur unaire +). `ToPrimitive(A)` correspond à une tentative de convertir l'argument en une valeur primitive grâce à plusieurs méthodes comme `A.toString` et `A.valueOf`.

Selon ECMAScript, au sens de l'égalité faible, tous les objets sont différents de `undefined` et de `null`. Cependant, la plupart des navigateurs autorisent, dans certains contextes, unensemble restreint d'objets (notamment l'objet `document.all`), à agir comme s'ils émulaient la valeur `undefined`. L'égalité faible est un de ces contextes. Pour tous les autres cas, un objet ne sera jamais approximativement égal à `undefined` ou à `null`.

```js
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// Les deux assertions qui suivent sont fausses
// sauf dans certains cas exceptionnels
console.log(obj == null);
console.log(obj == undefined);
```

Certains développeurs considèrent que ce n'est jamais une bonne idée d'utiliser l'égalilté faible. Le résultat d'une comparaison utilisant l'égalité stricte est plus simple à appréhender et à prédire, de plus il n'y a aucune conversion implicite ce qui rend le test plus rapide.

## Égalité de valeurs

L'égalité de valeurs répond à un dernier cas d'utilisation : savoir si deux valeurs sont fonctionnellement identiques pour tout contexte. (Ce cas d'utilisation est un exemple du [principe de substitution de Liskov](https://fr.wikipedia.org/wiki/Principe_de_substitution_de_Liskov)). On retrouve ce cas lorsqu'on essaie de changer une propriété immuable :

```js
// Ajouter la propriété immuable NEGATIVE_ZERO au constructor Number.
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty` lancera une exception pour tout changement de la propriété qui serait réellement un changement. Rien ne se passera si aucun changement n'est nécessaire. Ainsi, si `v` vaut `-0`, aucun changement n'est nécessaire et il n'y aura pas d'erreur. Mais si `v` vaut `+0`, `Number.NEGATIVE_ZERO` n'aurait plus la même valeur immuable. De façon interne à l'implémentation, la nouvelle valeur est comparée avec la valeur courante en utilisant une égalité de valeurs.

L'égalité de valeurs peut être testée grâce à la méthode {{jsxref("Object.is")}}.

## Égalité de valeurs nulles

On utilise la même égalité que l'égalité de valeur et on considère que `+0` et `-0` sont égaux.

## Égalité abstraite, égalité stricte et valeurs identiques : la spécification

Selon ES5, la comparaison effectuée par [`==`](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_simple_(.3D.3D)>) est décrite dans [la section 11.9.3 sur l'algorithme d'égalité abstraite (_Abstract Equality Algorithm_)](https://ecma-international.org/ecma-262/5.1/#sec-11.9.3). La comparaison donnée par [`===`](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)>) est décrite dans [la section 11.9.6 sur l'algorithme d'égalité stricte (_Strict Equality Algorithm_)](https://ecma-international.org/ecma-262/5.1/#sec-11.9.6). Ces documents sont en anglais mais sont tout à fait abordables, ne pas hésiter à les consulter (conseil : d'abord commencer par l'algorithme d'égalité stricte). ES5 décrit également, dans [la section 9.12 sur l'algorithme SameValue](https://ecma-international.org/ecma-262/5.1/#sec-9.12), l'opération utilisée en interne par le moteur JavaScript. Cet algorithme est principalement basé sur l'algorithme d'égalité stricte : 11.9.6.4 et 9.12.4 diffèrent en ce qui concerne les nombres. ES6 (ECMAScript 2015) permet d'utiliser cet algorithme grâce à la méthode {{jsxref("Object.is")}}.

Dans ces documents, on peut voir que l'algorithme d'égalité stricte est un sous-ensemble de l'algorithme d'égalité abstraite (exception faite de la vérification du type) car 11.9.6.2–7 correspond exactement à 11.9.3.1.a–f.

## Un modèle pour mieux comprendre ?

Avant ES6 (ECMAScript 2015), il était courant de dire que l'égalité stricte avec le triple égal était une version « améliorée » de l'égalité faible (double égal) et vice versa. En effet, l'égalité faible ajoute une étape de conversion des types qui n'est pas fournie par l'égalité stricte (ce qui permet d'avoir `6 == "6"`). On peut aussi dire que l'égalité stricte est une version améliorée de l'égalité simple car elle ajoute une fonctionnalité de vérification des types. Selon votre approche et votre problème, une de ces égalités se prêtera mieux à la résolution.

Cependant, ce « modèle de pensées » ne peut pas être étendu avec l'arrivée d'{{jsxref("Object.is")}} avec ES6 (ECMAScript 2015). En effet `Object.is()` n'est pas plus « faible » que l'égalité faible ou plus « stricte » que l'égalité stricte et il n'est pas non plus quelque part entre les deux. Dans le tableau de comparaison ci-après, on voit que la différence provient avant tout de la façon dont {{jsxref("Object.is")}} gère {{jsxref("NaN")}}. On note ici que si `Object.is(NaN, NaN)` valait `false`, on pourrait dire qu'`Object.is()` est plus stricte que == ou === car elle distingue `-0` et `+0`. Cependant, ce n'est pas le cas et on a bien `Object.is(NaN,NaN)` qui vaut `true`. C'est pour cette raison qu'il faut considérer {{jsxref("Object.is")}} selon ses caractéristiques spécifiques plutôt que comme une version plus faible ou plus stricte des autres opérateurs d'égalité.

| x                    | y                    | `==`    | `===`   | `Object.is` | `SameValueZero` |
| -------------------- | -------------------- | ------- | ------- | ----------- | --------------- |
| `undefined`          | `undefined`          | `true`  | `true`  | `true`      | `true`          |
| `null`               | `null`               | `true`  | `true`  | `true`      | `true`          |
| `true`               | `true`               | `true`  | `true`  | `true`      | `true`          |
| `false`              | `false`              | `true`  | `true`  | `true`      | `true`          |
| `'toto'`             | `'toto'`             | `true`  | `true`  | `true`      | `true`          |
| `0`                  | `0`                  | `true`  | `true`  | `true`      | `true`          |
| `+0`                 | `-0`                 | `true`  | `true`  | `false`     | `true`          |
| `+0`                 | `0`                  | `true`  | `true`  | `true`      | `true`          |
| `-0`                 | `0`                  | `true`  | `true`  | `false`     | `true`          |
| `0`                  | `false`              | `true`  | `false` | `false`     | `false`         |
| `""`                 | `false`              | `true`  | `false` | `false`     | `false`         |
| `""`                 | `0`                  | `true`  | `false` | `false`     | `false`         |
| `'0'`                | `0`                  | `true`  | `false` | `false`     | `false`         |
| `'17'`               | `17`                 | `true`  | `false` | `false`     | `false`         |
| `[1, 2]`             | `'1,2'`              | `true`  | `false` | `false`     | `false`         |
| `new String('toto')` | `'toto'`             | `true`  | `false` | `false`     | `false`         |
| `null`               | `undefined`          | `true`  | `false` | `false`     | `false`         |
| `null`               | `false`              | `false` | `false` | `false`     | `false`         |
| `undefined`          | `false`              | `false` | `false` | `false`     | `false`         |
| `{ toto: 'truc' }`   | `{ toto: 'truc' }`   | `false` | `false` | `false`     | `false`         |
| `new String('toto')` | `new String('toto')` | `false` | `false` | `false`     | `false`         |
| `0`                  | `null`               | `false` | `false` | `false`     | `false`         |
| `0`                  | `NaN`                | `false` | `false` | `false`     | `false`         |
| `'toto'`             | `NaN`                | `false` | `false` | `false`     | `false`         |
| `NaN`                | `NaN`                | `false` | `false` | `true`      | `true`          |

## Quand utiliser {{jsxref("Object.is")}} et quand utiliser l'égalité stricte

En plus de la façon dont {{jsxref("Object.is")}} traite `NaN`, la spécificité d'`Object.is()` réside dans sa façon de traiter les valeurs proches de zéro. Dans des cas d'utilisation où on a besoin d'effectuer de la méta-programmation, notamment pour imiter certaines caractéristiques de {{jsxref("Object.defineProperty")}}. Si le scénario d'utilisation ne nécessite pas ce comportement, il est conseillé d'utiliser [`===`](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)>). Même si on souhaite pouvoir comparer `NaN` avec lui-même et que ce test vaille `true`, il sera plus simple d'utiliser la méthode {{jsxref("isNaN")}} disponible avec les versions antérieures d'ECMAScript. En effet, cela évite d'avoir à traiter des cas plus complexes où il faudrait gérer les signes des zéros dans les différentes comparaisons.

Voici une liste (non exhaustive) d'opérateurs et de méthodes natives qui peuvent entraîner l'apparition des valeurs `-0` et `+0` dans le code :

- [`-` (négation unaire)](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Négation_unaire)

  - : Si on prend l'opposé de `0`, on aura, bien entendu,`-0`. Cependant, avec les expressions, cela peut faire que la valeur `-0` se glisse dans les variables sans qu'on s'en rende compte. Par exemple :

    ```js
        let forceArrêt = obj.masse * -obj.vitesse
        ```

    Si `obj.vitesse` vaut `0` (ou est évalué à `0`), un `-0` sera introduit, ce qui fera que `forceArrêt` pourra être négative.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : Ces méthodes peuvent introduire `-0` dans une expression lors de leur évaluation, même si `-0` ne faisait pas partie des paramètres. Par exemple, si on utilise `Math.pow()` pour élever {{jsxref("Infinity", "-Infinity")}} à une puissance négative, on obtiendra `-0` pour une puissance impaire. Pour plus de détails, voir la documentation de chaque méthode.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Ces méthodes peuvent renvoyer `-0` dans certains cas où `-0` est passé en paramètre. Par exemple, `Math.min(-0, +0)` fournira `-0`. Pour plus de détails, voir la documentation de chaque méthode.
- [`~`](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.7E_.28NON_binaire.29), [`<<`](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3C.3C_.28d.C3.A9calage_.C3.A0_gauche.29), [`>>`](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires#.3E.3E_.28d.C3.A9calage_.C3.A0_droite_avec_propagation_du_signe.29)
  - : Chacun de ces opérateurs utilise l'algorithme ToInt32 interne au moteur JavaScript. Étant donné qu'il n'y a qu'une seule représentation pour 0 sur les entiers exprimés avec le type interne sur 32 bits, `-0` ne sera pas invariant pour deux opérations symétriques : `Object.is(~~(-0), -0)` et `Object.is(-0 << 2 >> 2, -0)` renverront tous les deux `false`.

Si on utilise {{jsxref("Object.is")}} et qu'on ne souhaite pas gérer les cas aux limites autour de zéro, cela peut avoir des effet indésirés. En revanche, si on souhaite effectivement comparer `-0` et `+0`, c'est la méthode à adopter.

## Voir aussi

- [Tableau des comparaisons en JavaScript](https://dorey.github.io/JavaScript-Equality-Table/)
