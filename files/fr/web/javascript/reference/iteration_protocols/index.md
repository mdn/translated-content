---
title: Les protocoles d'itération
slug: Web/JavaScript/Reference/Iteration_protocols
---

{{jsSidebar("More")}}

Un des ajouts à ECMAScript 2015 (ES6) n'est ni une nouvelle syntaxe ni un nouvel objet natif mais des protocoles. Ces protocoles peuvent être implémentés par n'importe quel objet qui respecte certaines conventions.

Il existe deux protocoles concernant l'itération : [le protocole « itérable »](#itérable) et [le protocole « itérateur »](#itérateur).

## Le protocole « itérable »

Le protocole « **itérable** » permet aux objets JavaScript de définir ou de personnaliser leur comportement lors d'une itération, par exemple la façon dont les valeurs seront parcourues avec une boucle {{jsxref("Instructions/for...of", "for..of")}}. Certains types natifs tels que {{jsxref("Array")}} ou {{jsxref("Map")}} possèdent un comportement itératif par défaut, d'autres types, comme {{jsxref("Object")}} n'ont pas ce type de comportement.

Afin d'être **itérable**, un objet doit implémenter la méthode **`@@iterator`**, cela signifie que l'objet (ou un des objets de [sa chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) doit avoir une propriété avec une clé **`@@iterator`** qui est accessible via {{jsxref("Symbol.iterator")}} :

| Propriété           | Valeur                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `[Symbol.iterator]` | Une fonction sans argument qui renvoie un objet conforme au [protocole itérateur](#itérateur). |

Lorsqu'on doit itérer sur un objet (ex. : au début d'une boucle `for..of`), sa méthode `@@iterator` est appelée sans argument et l'**itérateur** qui est renvoyé est utilisé afin d'obtenir les valeurs sur lesquelles itérer.

## Le protocole « itérateur »

Le protocole « **itérateur** » définit une façon standard pour produire une suite de valeurs (finie ou infinie) ainsi qu'une valeur de retour lorsque toutes les valeurs ont été générées.

Un objet est considéré comme un itérateur lorsqu'il implémente une méthode **`next()`** avec la sémantique suivante :

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col">Valeur</th>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>
        <p>
          Une fonction sans argument qui renvoie un objet qui possède au moins
          deux propriétés :
        </p>
        <ul>
          <li>
            <code>done</code> (un booléen)
            <ul>
              <li>
                Qui vaut <code>true</code> lorsque l'itérateur a fini la suite.
                Dans ce cas, la propriété <code>value</code> sera facultative et
                permettra de spécifier la valeur de retour de l'itérateur. Les
                valeurs de retour sont détaillées
                <a
                  href="https://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads"
                  >ici</a
                >.
              </li>
              <li>
                Qui vaut <code>false</code> lorsque l'itérateur a pu produire la
                prochaine valeur de la suite. Si on ne définit pas la propriété
                <code>done</code>, on aura ce comportement par défaut.
              </li>
            </ul>
          </li>
          <li>
            <code>value</code> : n'importe quelle valeur JavaScript, renvoyée
            par l'itérateur. Cette propriété peut être absente lorsque
            <code>done</code> vaut <code>true</code>.
          </li>
        </ul>
        <p>
          La méthode <code>next</code> doit toujours renvoyer un objet contenant
          les propriétés <code>done</code> et <code>value</code>. Si c'est une
          valeur primitive qui est renvoyée (ex. <code>false</code> ou
          <code>undefined</code>), une exception
          {{jsxref("TypeError")}} sera levée ("iterator.next() returned
          a non-object value").
        </p>
      </td>
    </tr>
  </tbody>
</table>

Certains itérateurs sont des itérables :

```js
var unTableau = [1, 5, 7];
var élémentsDuTableau = unTableau.entries();

élémentsDuTableau.toString(); // "[object Array Iterator]"
élémentsDuTableau === élémentsDuTableau[Symbol.iterator](); // true
```

## Exemples d'utilisation des protocoles d'itération

Une {{jsxref("String")}} est un exemple d'objet natif itérable :

```js
var uneChaîne = "coucou";
typeof uneChaîne[Symbol.iterator]; // "function"
```

[L'itérateur par défaut d'un objet `String`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/@@iterator) renverra les caractères de la chaîne les uns à la suite des autres :

```js
var itérateur = uneChaîne[Symbol.iterator]();
itérateur + ""; // "[object String Iterator]"

itérateur.next(); // { value: "c", done: false }
itérateur.next(); // { value: "o", done: false }
itérateur.next(); // { value: "u", done: false }
itérateur.next(); // { value: "c", done: false }
itérateur.next(); // { value: "o", done: false }
itérateur.next(); // { value: "u", done: false }
itérateur.next(); // { value: undefined, done: true }
```

Certains éléments natifs du langage, tels que [la syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition), utilisent ce même protocole :

```js
[...uneChaîne]; // ["c", "o", "u", "c", "o", "u"]
```

Il est possible de redéfinir le comportement par défaut en définissant soi-même le symbole `@@iterator` :

```js
var uneChaîne = new String("yo"); // on construit un objet String explicitement afin d'éviter la conversion automatique

uneChaîne[Symbol.iterator] = function () {
  return {
    // l'objet itérateur qui renvoie un seul élément, la chaîne "bop"
    next: function () {
      if (this._first) {
        this._first = false;
        return { value: "bop", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true,
  };
};
```

On notera que redéfinir le symbole `@@iterator` affecte également le comportement des éléments du langage qui utilisent le protocole :

```js
[...uneChaîne]; // ["bop"]
uneChaîne + ""; // "yo"
```

## Exemples d'itérables

### Les itérables natifs

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} et {{jsxref("Set")}} sont des itérables natifs car leurs prototypes possèdent une méthode `@@iterator`.

### Les itérables définis par l'utilisateur

Il est possible de construire un itérable dans un script de la façon suivante :

```js
var monItérable = {};
monItérable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...monItérable]; // [1, 2, 3]
```

### Les API natives utilisant des itérables

Plusieurs API utilisent les itérables, par exemple : {{jsxref("Map", "Map([itérable])")}}, {{jsxref("WeakMap", "WeakMap([itérable])")}}, {{jsxref("Set", "Set([itérable])")}} et {{jsxref("WeakSet", "WeakSet([itérable])")}} :

```js
var monObjet = {};
new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]).get(2); // "b"
new WeakMap([
  [{}, "a"],
  [monObjet, "b"],
  [{}, "c"],
]).get(monObjet); // "b"
new Set([1, 2, 3]).has(3); // true
new Set("123").has("2"); // true
new WeakSet(
  (function* () {
    yield {};
    yield monObjet;
    yield {};
  })(),
).has(monObjet); // true
```

ainsi que {{jsxref("Promise.all", "Promise.all(itérable)")}}, {{jsxref("Promise.race", "Promise.race(itérable)")}}, {{jsxref("Array.from", "Array.from()")}}

### Les éléments de syntaxe utilisant des itérables

Certains éléments du langage utilisent des itérables, par exemple : [`for..of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of), [la syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition), [yield\*](/fr/docs/Web/JavaScript/Reference/Opérateurs/yield*), [l'affectation par décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition) :

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"
```

### Itérables mal-formés

Si une méthode `@@iterator` d'un objet itérable ne renvoie pas d'objet itérateur, on dira que cet objet est un itérable mal-formé. Utiliser de tels itérables peut provoquer des exceptions lors de l'exécution ou un comportement erratique :

```js
var itérableMalFormé = {}
itérableMalFormé[Symbol.iterator] = () => 1
[...itérableMalFormé] // TypeError: [] is not a function
```

## Exemples d'itérateurs

### Un itérateur simple

```js
function créerItérateur(tableau) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < tableau.length
        ? { value: tableau[nextIndex++], done: false }
        : { done: true };
    },
  };
}

var it = créerItérateur(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### Un itérateur infini

```js
function créateurID() {
  var index = 0;

  return {
    next: function () {
      return { value: index++, done: false };
    },
  };
}

var it = créateurID();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### Avec un générateur

```js
function* créerUnGénérateurSimple(tableau) {
  var nextIndex = 0;

  while (nextIndex < tableau.length) {
    yield tableau[nextIndex++];
  }
}

var gen = créerUnGénérateurSimple(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* créateurID() {
  var index = 0;
  while (true) yield index++;
}

var gen = créateurID();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
```

### Avec une classe ECMAScript 2015 (ES6)

```js
class ClasseSimple {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return { value: this.data[this.index++], done: false };
        } else {
          this.index = 0;
          // En réinitialisant l'index, on peut
          // "reprendre" l'itérateure sans avoir
          // à gérer de mise à jour manuelle
          return { done: true };
        }
      },
    };
  }
}

const simple = new ClasseSimple([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // '1' '2' '3' '4' '5'
}
```

## Un générateur est-il un itérateur ou un itérable ?

Les deux réponses sont correctes :

```js
var unObjetGénérateur = function*(){
    yield 1;
    yield 2;
    yield 3;
}()
typeof unObjetGénérateur.next
// "function", car il possède une fonction next, c'est donc un itérateur
typeof unObjetGénérateur[Symbol.iterator]
// "function", car il possède une méthode @@iterator, c'est donc un itérable
unObjetGénérateur[Symbol.iterator]() === unObjetGénérateur
// vrai car la méthode @@iterator renvoie elle-même, un itérateur, c'est donc un itérable bien formé
[...unObjetGénérateur]
// [1, 2, 3]
```

## Voir aussi

- Pour plus d'informations sur les générateurs définis par ES2015, voir [la page dédiée](/fr/docs/Web/JavaScript/Reference/Instructions/function*).
