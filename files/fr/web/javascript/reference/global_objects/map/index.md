---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
---

{{JSRef}}

Un objet **`Map`** contient des paires de clé-valeur et mémorise l'ordre dans lequel les clés ont été insérées. N'importe quel type de valeur ([primitive](/fr/docs/Glossary/Primitive) ou objet) peut être utilisée comme clé ou comme valeur.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Description

Un objet `Map` permet de parcourir ses éléments selon leur ordre d'insertion. Par exemple, une boucle [`for…of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) renverra un tableau `[clé, valeur]` pour chaque itération.

### Égalité des clés

- L'égalité des clés est testée avec l'algorithme basé sur [`sameValueZero`](/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness#samevaluezero)
- [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) est considéré égal à `NaN` (bien que pour l'égalité stricte, on a `NaN !== NaN`) et toutes les autres valeurs sont considérées égales au sens de l'égalité stricte (l'opérateur `===`).
- Dans la version actuelle de la spécification ECMAScript, `-0` et `+0` sont considérées égaux même si ce n'était pas le cas dans les brouillons antérieurs. Voir [le tableau de compatibilité](#compatibilité_des_navigateurs) pour plus de détails.

### Comparaison entre objets et `Map`

Les [structures objets](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object) sont similaires aux structures `Map`, chacune permet d'associer des clés à des valeurs, de récupérer ces valeurs, de supprimer des clés, de détecter si une valeur est associée à une clé. Aussi, avant l'apparition de `Map`, on utilisait les objets pour représenter cette structure.

Toutefois, il existe des différences importantes qui font que `Map` se démarque et peut être préférable dans certains cas&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">`Map`</th>
      <th scope="col">Objet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Clés accidentelles</th>
      <td>Un objet <code>Map</code> ne contient aucune clé par défaut. Il ne contient que ce qui y est explicitement placé.</td>
      <td>
        <p>
          Un objet <code>Object</code> possède un prototype et dispose donc de certaines clés par défaut, ce qui peut être source de collision avec vos propres clés si vous ne faites pas attention.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note :</strong> Avec ES5, il est possible de contourner ceci en utilisant <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><code>Object.create(null)</code></a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Types de clés</th>
      <td>Pour une structure <code>Map</code>, les clés peuvent être n'importe quelle valeur (y compris des fonctions, des objets ou des valeurs primitives).</td>
      <td>Les clés d'une structure <code>Object</code> doivent être une chaîne de caractères (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a>) ou un symbole (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ordre des clés</th>
      <td>Les clés d'une structure <code>Map</code> sont triées selon leur ordre d'insertion.</td>
      <td>
        <p>
          Bien que les clés d'une structure <code>Object</code> soient désormais triées, ça n'a pas toujours été le cas et l'ordre en question est complexe. Aussi, mieux vaut ne pas utiliser cet ordre des propriétés.
        </p>
        <p>
          L'ordre des propriétés propres d'un objet a été défini pour la première fois avec ECMAScript 2015. ECMAScript 2020 a défini l'ordre des propriétés héritées. Voir les opérations abstraites <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys">OrdinaryOwnPropertyKeys</a> et <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties">EnumerateObjectProperties</a> qui sont décrites dans la spécification. On notera toutefois qu'aucun mécanisme ne parcourt <strong>toutes</strong> les propriétés d'un objet&nbsp;; chaque mécanisme d'itération porte sur différents ensembles de propriétés&nbsp;: <a href="/fr/docs/Web/JavaScript/Reference/Statements/for...in"><code>for…in</code></a> ne porte que sur les propriétés énumérables dont les clés sont des chaînes de caractères, <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys()</code></a> ne porte que sur les propriétés propres, énumérables et dont les clés sont des chaînes de caractères, <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"><code>Object.getOwnPropertyNames()</code></a> ne porte que sur les propriétés propres dont les clés sont des chaînes de caractères, y compris celles qui ne sont pas énumérables, et <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"><code>Object.getOwnPropertySymbols()</code></a> porte de la même façon sur les propriétés dont les clés sont des symboles.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Taille</th>
      <td>Le nombre d'éléments d'une structure <code>Map</code> est facilement accessible avec la propriété <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/size"><code>size</code></a>.</td>
      <td>Le nombre d'éléments d'une structure <code>Object</code> doit être déterminé manuellement.</td>
    </tr>
    <tr>
      <th scope="row">Itération</th>
      <td>Une structure <code>Map</code> est un <a href="/fr/docs/Web/JavaScript/Reference/Iteration_protocols">itérable</a>, et on peut donc le parcourir directement.</td>
      <td>
        <p>
          <code>Object</code> n'implémente pas de <a href="/fr/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">protocole d'itération</a>, et les objets ne peuvent donc pas être parcourus directement avec une boucle <a href="/fr/docs/Web/JavaScript/Reference/Statements/for...of"><code>for…of</code></a> (par défaut).
        </p>
        <div class="notecard note">
          <p><strong>Note :</strong></p>
          <ul>
            <li>Il est possible d'implémenter manuellement le protocole d'itération ou d'obtenir un itérable avec <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys()</code></a> ou <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"><code>Object.entries()</code></a>.</li>
            <li>L'instruction <a href="/fr/docs/Web/JavaScript/Reference/Statements/for...in"><code>for…in</code></a> permet de parcourir les propriétés <em>enumérables</em> d'un objet.</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Performance</th>
      <td>Meilleures performances pour les utilisations avec de nombreuses additions/suppressions de clés/valeurs.</td>
      <td>Pas d'optimisation pour les utilisations avec de nombreuses additions/suppressions de clés/valeurs.</td>
    </tr>
    <tr>
      <th scope="row">Sérialisation et désérialisation</th>
      <td>
        <p>Pas de prise en charge native pour la sérialisation ou la désérialisation.</p>
        <p>Il est toutefois possible de construire soi-même un mécanisme de sérialisation/désérialisation pour <code>Map</code> grâce à la fonction <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a> et son argument de remplacement et grâce à la fonction <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"><code>JSON.parse()</code></a> et son argument de régénération. Voir <a href="https://stackoverflow.com/q/29085197/">la question StackOverflow (en anglais) sur la transformation en chaîne de caractères d'une structure <code>Map</code></a>.</p>
      </td>
      <td>
        <p><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a> permet la prise en charge native de la sérialisation des structures <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a> en JSON.</p>
        <p><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"><code>JSON.parse()</code></a> permet la prise en charge native de la désérialisation des structures <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>Object</code></a> en JSON.</p>
      </td>
    </tr>
  </tbody>
</table>

### Ajouter des propriétés objet

Les structures `Map` sont également des objets et il est donc possible de leur rajouter des propriétés objets. Attention toutefois, car cela peut être source de confusion.

Ainsi, on pourra faire&nbsp;:

```js example-bad
const mauvaiseMap = new Map();
mauvaiseMap["bla"] = "blaa";
mauvaiseMap["bla2"] = "blaaa2";

console.log(mauvaiseMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Mais ces instructions n'interagissent pas avec la structure `Map`, elles ne font qu'ajouter des propriétés objet. La valeur associée à la clé `"bla"` n'est pas stockée dans la `Map`. Ainsi, si on utilise les méthodes de `Map`, cela échouera&nbsp;:

```js example-bad
mauvaiseMap.has('bla');    // false
mauvaiseMap.delete('bla'); // false
console.log(mauvaiseMap),  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Pour stocker des données dans une structure `Map`, on utilisera plutôt la méthode `set(cle, valeur)`.

```js example-good
const contacts = new Map();
contacts.set("Jessie", {
  phone: "01 99 00 12 34",
  address: "1 Rue de l'avenue",
});
contacts.has("Jessie"); // true
contacts.get("James"); // undefined
contacts.set("James", { phone: "06 39 98 78 89", address: "3 Chemin du Parc" });
contacts.get("Jessie"); // {phone: "01 99 00 12 34", address: "1 Rue de l'avenue"}
contacts.delete("Miaouss"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

## Constructeur

- [`Map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)
  - : Crée un nouvel objet `Map`.

## Propriétés statiques

- [`get Map[@@species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species)
  - : La fonction de construction utilisée pour créer les objets dérivés.

## Propriétés des instances

- [`Map.prototype.size`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/size)
  - : Renvoie le nombre de paires clé/valeur contenues dans l'objet `Map`.

## Méthodes des instances

- [`Map.prototype.clear()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)
  - : Supprime toutes les paires de clé/valeur de l'objet `Map`.
- [`Map.prototype.delete(var>cle</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
  - : Renvoie `true` si un élément existait dans l'objet `Map` et qu'il a été retiré, ou `false` si l'élément n'existe pas. Après cette opération, `Map.prototype.has(cle)` renverra `false`.
- [`Map.prototype.get(<var>cle</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/get)
  - : Renvoie la valeur associée à la clé passée en argument, ou `undefined` s'il n'y a pas de valeur pour cette clé.
- [`Map.prototype.has(<var>cle</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
  - : Renvoie un booléen indiquant s'il existe une valeur associée à la clé fournie par l'argument dans l'objet `Map`.
- [`Map.prototype.set(<var>cle</var>, <var>valeur</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
  - : Définit une valeur pour la clé, indiquées par les arguments. Renvoie l'objet `Map` à jour.

### Méthodes d'itération

- [`Map.prototype[@@iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
  - : Renvoie un nouvel objet itérateur qui contient **un tableau de `[cle, valeur]`** pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.
- [`Map.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)
  - : Renvoie un nouvel objet itérateur qui contient les **clés** pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.
- [`Map.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/values)
  - : Renvoie un nouvel objet itérateur qui contient les **valeurs** pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.
- [`Map.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)
  - : Renvoie un nouvel objet itérateur qui contient **un tableau de `[cle, valeur]`** pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.
- [`Map.prototype.forEach(<var>fnRappel</var>[,<var>thisArg</var>])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
  - : Appelle la fonction `fnRappel` une fois pour chaque paire clé/valeur contenue dans l'objet `Map`, dans leur ordre d'insertion. Si un paramètre `thisArg` est fourni à `forEach()`, sa valeur sera utilisée comme valeur pour `this` lors de chaque appel.

## Exemples

### Utiliser un objet `Map`

```js
const maMap = new Map();

const objectKey = {},
  functionKey = function () {},
  stringKey = "une chaîne";

// définir les valeurs
maMap.set(stringKey, "valeur associée à 'une chaîne'");
maMap.set(objectKey, "valeur associée à objectKey");
maMap.set(functionKey, "valeur associée à functionKey");

maMap.size; // 3

// récupérer les valeurs
maMap.get(stringKey); // "valeur associée à 'une chaîne'"
maMap.get(objectKey); // "valeur associée à objetClé"
maMap.get(functionKey); // "valeur associée à fonctionClé"

maMap.get("une chaîne"); // "valeur associée à 'une chaîne'"
// car chaineClé === 'une chaîne'
maMap.get({}); // indéfini car objetClé !== {}
maMap.get(function () {}); // indéfini car fonctionClé !== function () {}
```

### Utiliser `NaN` comme clé

[`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) peut être utilisé comme une clé. Bien que `NaN` ne soit pas strictement égal à lui-même (`NaN !== NaN` vaut `true`), on peut bâtir l'exemple suivant, car on ne peut pas distinguer deux valeurs `NaN`&nbsp;:

```js
const maMap = new Map();
maMap.set(NaN, "not a number");

maMap.get(NaN); // "not a number"

const otherNaN = Number("toto");
maMap.get(otherNaN); // "not a number"
```

### Parcourir des objets `Maps` avec `for…of`

Il est possible de parcourir les objets `Map` grâce à des boucles `for…of`&nbsp;:

```js
const maMap = new Map();
maMap.set(0, "zéro");
maMap.set(1, "un");

for (const [key, value] of maMap) {
  console.log(`${key} = ${value}`);
}
// "0 = zéro"
// "1 = un"

for (const key of maMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of maMap.values()) {
  console.log(valeur);
}
// zéro
// un

for (const [key, value] of maMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zéro
// 1 = un
```

### Parcourir des objets `Map` avec `forEach()`

Il est aussi possible de parcourir des objets `Map` avec la méthode [`forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)&nbsp;:

```js
maMap.forEach(function (value, key) {
  console.log(`${key} = ${value}`);
});
// 0 = zéro
// 1 = un
```

### Relation avec les objets `Array`

```js
const keyValuePair = [
  ["clé1", "valeur1"],
  ["clé2", "valeur2"],
];

// On utilise le constructeur Map
// pour transformer un tableau de clés/valeurs
// en un objet Map
const maMap = new Map(keyValuePair);

maMap.get("clé1"); // renvoie "valeur1"

// On utilise la fonction Array.from pour transformer
// une map en un tableau de clés/valeurs
console.log(Array.from(maMap)); // affichera la même chose que tableauCléValeur

// Avec une méthode plus concise grâce à la décomposition
console.log([...maMap]);

// On peut aussi l'utiliser pour n'extraire que les clés
// ou les valeurs et créer le tableau associé
console.log(Array.from(maMap.keys())); // affichera ["clé1", "clé2"]
```

### Cloner et fusionner des objets `Map`

Il est possible de cloner des `Map` comme on clone des tableaux&nbsp;:

```js
const original = new Map([[1, "un"]]);

const clone = new Map(original);

console.log(clone.get(1)); // un
console.log(original === clone); // false. Utile pour une comparaison superficielle
```

> **Note :** La donnée contenue dans la `Map` n'est pas clonée.

Il est également possible de fusionner deux `Map` en conservant le critère d'unicité sur les clés&nbsp;:

```js
const premier = new Map([
  [1, "un"],
  [2, "deux"],
  [3, "trois"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// On fusionne les deux maps. C'est la "dernière" version
// de la clé qui l'emporte.
// L'opérateur de décomposition nous permet principalement ici
// de convertir une map en un tableau
const fusion = new Map([...premier, ...second]);

console.log(fusion.get(1)); // uno
console.log(fusion.get(2)); // dos
console.log(fusion.get(3)); // trois
```

Il est également possible de fusionner des objets `Map` avec des objets `Array`&nbsp;:

```js
const premier = new Map([
  [1, "un"],
  [2, "deux"],
  [3, "trois"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// On peut fusionner des Maps avec un tableau
// Là encore c'est le dernier exemplaire de la clé qui l'emporte
const fusion = new Map([...premier, ...second, [1, "eins"]]);

console.log(fusion.get(1)); // eins
console.log(fusion.get(2)); // dos
console.log(fusion.get(3)); // trois
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Une prothèse d'émulation pour `Map`, disponible avec [la bibliothèque `core-js`](https://github.com/zloirock/core-js#map)
- [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
