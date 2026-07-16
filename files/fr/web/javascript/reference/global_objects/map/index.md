---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

Un objet **`Map`** contient des paires de clé-valeur et mémorise l'ordre dans lequel les clés ont été insérées. N'importe quelle valeur (objet ou {{Glossary("Primitive", "valeur primitive")}}) peut être utilisée comme clé ou comme valeur.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map", "taller")}}

```js interactive-example
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Sortie attendue : 1

map.set("a", 97);

console.log(map.get("a"));
// Sortie attendue : 97

console.log(map.size);
// Sortie attendue : 3

map.delete("b");

console.log(map.size);
// Sortie attendue : 2
```

## Description

Les objets `Map` sont des collections de paires clé-valeur. Une clé dans `Map` **ne peut apparaître qu'une seule fois**&nbsp;; elle est unique dans la collection de `Map`. Un objet Map est itéré par paires clé-valeur — une boucle {{JSxRef("Statements/for...of", "for...of")}} retourne un tableau à deux éléments `[key, value]` pour chaque itération. L'itération se fait dans _l'ordre d'insertion_, ce qui correspond à l'ordre dans lequel chaque paire clé-valeur a été insérée pour la première fois dans la map par la méthode {{JSxRef("Map/set", "set()")}} (c'est-à-dire qu'il n'y avait pas de clé avec la même valeur déjà dans la map lorsque `set()` a été appelée).

La spécification exige que les tables associatives soient implémentées «&nbsp;de sorte qu'elles fournissent, en moyenne, des temps d'accès sous-linéaires par rapport au nombre d'éléments de la collection&nbsp;». Elles peuvent donc être représentées en interne par une table de hachage (avec une recherche en O(1)), un arbre de recherche (avec une recherche en O(log(N))) ou toute autre structure de données, tant que la complexité est meilleure que O(N).

### Égalité des clés

L'égalité de valeur est basée sur l'algorithme [SameValueZero](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). (Auparavant, elle utilisait [SameValue](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is), qui traitait `0` et `-0` comme deux valeurs différentes. Voir [la compatibilité des navigateurs](#compatibilité_des_navigateurs).) Cela signifie que {{JSxRef("NaN")}} est considéré comme égal à `NaN` (même si `NaN !== NaN`) et toutes les autres valeurs sont considérées comme égales selon la sémantique de l'opérateur `===`. De plus, pour les clés d'objet, l'égalité est basée sur l'identité de l'objet. Elles sont comparées par référence, et non par valeur. Voir [Utiliser l'objet Map](#utiliser_lobjet_map) pour des exemples.

### Comparaison entre objets et `Map`

{{JSxRef("Object")}} est similaire à `Map` — les deux permettent d'associer des clés à des valeurs, de récupérer ces valeurs, de supprimer des clés et de détecter si quelque chose est stocké sous une clé. Pour cette raison (et parce qu'il n'existait pas d'alternatives intégrées), `Object` a été historiquement utilisé comme `Map`.

Toutefois, il existe des différences importantes qui font que `Map` se démarque et peut être préférable dans certains cas&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
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
            <strong>Note :</strong> Il est possible de contourner ceci en utilisant {{JSxRef("Object.create", "Object.create(null)")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Sécurité</th>
      <td>
        Un objet <code>Map</code> est sûr à utiliser avec des clés et des valeurs fournies par l'utilisateur·ice.
      </td>
      <td>
        <p>
          Définir des paires clé-valeur fournies par l'utilisateur·ice sur un <code>Object</code> peut permettre à un attaquant de remplacer le prototype de l'objet, ce qui peut entraîner des <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">attaques par injection d'objet <sup>(angl.)</sup></a> ou des <a href="/fr/docs/Web/Security/Attacks/Prototype_pollution">attaques de pollution de prototype</a>. Comme pour le problème des clés accidentelles, cela peut également être atténué en utilisant un objet avec un prototype <code>null</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Types de clés</th>
      <td>Pour une structure <code>Map</code>, les clés peuvent être n'importe quelle valeur (y compris des fonctions, des objets ou des valeurs primitives).</td>
      <td>Les clés d'une structure <code>Object</code> doivent être une chaîne de caractères ({{JSxRef("String")}}) ou un symbole ({{JSxRef("Symbol")}}).
      </td>
    </tr>
    <tr>
      <th scope="row">Ordre des clés</th>
      <td>Les clés d'une structure <code>Map</code> sont triées selon leur ordre d'insertion.</td>
      <td>
        <p>
          Bien que les clés d'un <code>Object</code> ordinaire soient désormais ordonnées, ce n'était pas toujours le cas et l'ordre est complexe. Par conséquent, il est préférable de ne pas se fier à l'ordre des propriétés.
        </p>
        <p>
          L'ordre a été défini pour la première fois uniquement pour les propriétés propres dans ECMAScript 2015&nbsp;; ECMAScript 2020 définit également l'ordre pour les propriétés héritées. Notez toutefois qu'aucun mécanisme unique ne parcourt <strong>toutes</strong> les propriétés d'un objet&nbsp;; chaque mécanisme inclut différents sous-ensembles de propriétés. ({{JSxRef("Statements/for...in", "for...in")}} n'inclut que les propriétés énumérables dont les clés sont des chaînes de caractères&nbsp;; {{JSxRef("Object.keys")}} n'inclut que les propriétés propres, énumérables et dont les clés sont des chaînes de caractères&nbsp;; {{JSxRef("Object.getOwnPropertyNames")}} inclut les propriétés propres dont les clés sont des chaînes de caractères, même si elles ne sont pas énumérables&nbsp;; {{JSxRef("Object.getOwnPropertySymbols")}} fait de même pour les propriétés dont les clés sont des <code>Symbol</code>, etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Taille</th>
      <td>Le nombre d'éléments d'une structure <code>Map</code> est facilement accessible avec la propriété {{JSxRef("Map.prototype.size", "size")}}.</td>
      <td>Le nombre d'éléments d'une structure <code>Object</code> doit être déterminé manuellement.</td>
    </tr>
    <tr>
      <th scope="row">Itération</th>
      <td>Une structure <code>Map</code> est un <a href="/fr/docs/Web/JavaScript/Reference/Iteration_protocols">itérable</a>, et on peut donc le parcourir directement.</td>
      <td>
        <p>
          <code>Object</code> n'implémente pas de <a href="/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»">protocole d'itération</a>, et les objets ne peuvent donc pas être parcourus directement avec une boucle {{JSxRef("Statements/for...of", "for...of")}} (par défaut).
        </p>
        <div class="notecard note">
          <p><strong>Note :</strong></p>
          <ul>
            <li>Il est possible d'implémenter manuellement le protocole d'itération ou d'obtenir un itérable avec {{JSxRef("Object.keys()")}} ou {{JSxRef("Object.entries()")}}.</li>
            <li>L'instruction {{JSxRef("Statements/for...in", "for...in")}} permet de parcourir les propriétés <em>enumérables</em> d'un objet.</li>
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
        <p>
          (Mais vous pouvez implémenter votre propre prise en charge de la sérialisation et de l'analyse pour <code>Map</code> en utilisant {{JSxRef("JSON.stringify()")}} avec son argument <code>replacer</code>, et en utilisant {{JSxRef("JSON.parse()")}} avec son argument <code>reviver</code>. Voir la question Stack Overflow <a href="https://stackoverflow.com/q/29085197/">Comment JSON.stringify une Map ES6&nbsp;? <sup>(angl.)</sup></a>).
        </p>
      </td>
      <td>
        <p>
          Prise en charge native de la sérialisation d'un {{JSxRef("Object")}} vers JSON, en utilisant {{JSxRef("JSON.stringify()")}}.
        </p>
        <p>
          Prise en charge native de l'analyse syntaxique de JSON vers {{JSxRef("Object")}}, en utilisant {{JSxRef("JSON.parse()")}}.
        </p>
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
mauvaiseMap.has("bla"); // false
mauvaiseMap.delete("bla"); // false
console.log(mauvaiseMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Pour stocker des données dans une structure `Map`, on utilisera plutôt la méthode `set(cle, valeur)`.

```js example-good
const contacts = new Map();
contacts.set("Jessie", {
  telephone: "01 99 00 12 34",
  adresse: "1 Rue de l'avenue",
});
contacts.has("Jessie"); // true
contacts.get("James"); // undefined
contacts.set("James", {
  telephone: "06 39 98 78 89",
  adresse: "3 Chemin du Parc",
});
contacts.get("Jessie"); // {telephone: "01 99 00 12 34", adresse: "1 Rue de l'avenue"}
contacts.delete("Miaouss"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

### API de navigateur similaires à `Map`

**Objets `Map` du navigateur** (ou «&nbsp;objets semblables à `Map`&nbsp;») sont des interfaces [API Web](/fr/docs/Web/API) qui se comportent de nombreuses façons comme une `Map`.

Comme `Map`, les entrées peuvent être parcourues dans le même ordre que celui de leur ajout à l'objet.
Les objets de type `Map` et `Map` lui-même possèdent également des propriétés et des méthodes portant les mêmes noms et ayant le même comportement.
Cependant, contrairement à `Map`, ils n'autorisent que des types prédéfinis spécifiques pour les clés et les valeurs de chaque entrée.

Les types autorisés sont définis dans la définition IDL de la spécification.
Par exemple, {{DOMxRef("RTCStatsReport")}} est un objet de type `Map` qui doit utiliser des chaînes de caractères pour les clés et des objets pour les valeurs.
Ceci est défini dans l'IDL de la spécification ci‑dessous&nbsp;:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Les objets de type `Map` sont soit en lecture seule, soit en lecture-écriture (voir le mot-clé `readonly` dans l'IDL ci‑dessus).

- Les objets de type `Map` en lecture seule possèdent la propriété {{JSxRef("Map/size", "size")}}, et les méthodes&nbsp;: {{JSxRef("Map/entries", "entries()")}}, {{JSxRef("Map/forEach", "forEach()")}}, {{JSxRef("Map/get", "get()")}}, {{JSxRef("Map/has", "has()")}}, {{JSxRef("Map/keys", "keys()")}}, {{JSxRef("Map/values", "values()")}}, et [`Symbol.iterator()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Les objets de type `Map` modifiables possèdent en plus les méthodes&nbsp;: {{JSxRef("Map/clear", "clear()")}}, {{JSxRef("Map/delete", "delete()")}}, et {{JSxRef("Map/set", "set()")}}.

Les méthodes et propriétés ont le même comportement que leurs équivalents dans `Map`, sauf pour la restriction sur les types des clés et des valeurs.

Les exemples suivants sont des objets de navigateur de type `Map` en lecture seule&nbsp;:

- {{DOMxRef("AudioParamMap")}}
- {{DOMxRef("CSSFontFeatureValuesMap")}}
- {{DOMxRef("EventCounts")}}
- {{DOMxRef("KeyboardLayoutMap")}}
- {{DOMxRef("MIDIInputMap")}}
- {{DOMxRef("MIDIOutputMap")}}
- {{DOMxRef("RTCStatsReport")}}

## Constructeur

- {{JSxRef("Map/Map", "Map()")}}
  - : Crée un nouvel objet `Map`.

## Propriétés statiques

- {{JSxRef("Map/Symbol.species", "Map[Symbol.species]")}}
  - : La fonction de construction utilisée pour créer les objets dérivés.

## Méthodes statiques

- {{JSxRef("Map.groupBy()")}}
  - : Regroupe les éléments d'un itérable donné en utilisant les valeurs retournées par une fonction de rappel fournie. La `Map` finale retournée utilise les valeurs uniques de la fonction de test comme clés, ce qui permet d'obtenir le tableau d'éléments de chaque groupe.

## Propriétés d'instances

Ces propriétés sont définies sur `Map.prototype` et sont partagées par toutes les instances de `Map`.

- {{JSxRef("Object/constructor", "Map.prototype.constructor")}}
  - : La fonction de construction qui a créé l'objet instance. Pour les instances de `Map`, la valeur initiale est le constructeur {{JSxRef("Map/Map", "Map()")}}.
- {{JSxRef("Map.prototype.size")}}
  - : Retourne le nombre de paires clé/valeur contenues dans l'objet `Map`.
- `Map.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Map"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instances

- {{JSxRef("Map.prototype.clear()")}}
  - : Supprime toutes les paires de clé/valeur de l'objet `Map`.
- {{JSxRef("Map.prototype.delete()")}}
  - : Supprime l'entrée définie par la clé spécifiée de cet objet `Map`.
- {{JSxRef("Map.prototype.entries()")}}
  - : Retourne un nouvel objet itérateur qui contient un tableau de `[key, value]` pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.
- {{JSxRef("Map.prototype.forEach()")}}
  - : Appelle la fonction `callbackFn` une fois pour chaque paire clé/valeur contenue dans l'objet `Map`, dans leur ordre d'insertion. Si un paramètre `thisArg` est fourni à `forEach()`, sa valeur sera utilisée comme valeur pour `this` lors de chaque appel.
- {{JSxRef("Map.prototype.get()")}}
  - : Retourne la valeur associée à la clé passée en argument à la `Map`, ou `undefined` s'il n'y en a pas.
- {{JSxRef("Map.prototype.getOrInsert()")}}
  - : Retourne la valeur correspondant à la clé définie dans cette `Map`. Si la clé n'est pas présente, elle insère une nouvelle entrée avec la clé et une valeur par défaut fournie, puis retourne la valeur insérée.
- {{JSxRef("Map.prototype.getOrInsertComputed()")}}
  - : Retourne la valeur correspondant à la clé définie dans cette `Map`. Si la clé n'est pas présente, elle insère une nouvelle entrée avec la clé et une valeur par défaut calculée par un rappel fourni, puis retourne la valeur insérée.
- {{JSxRef("Map.prototype.has()")}}
  - : Retourne un booléen indiquant s'il existe une valeur associée à la clé fournie par l'argument dans l'objet `Map`.
- {{JSxRef("Map.prototype.keys()")}}
  - : Retourne un nouvel objet itérateur qui contient les **clés** pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.
- {{JSxRef("Map.prototype.set()")}}
  - : Ajoute une nouvelle entrée avec une clé et une valeur définie à cette `Map`, ou met à jour une entrée existante si la clé existe déjà.
- {{JSxRef("Map.prototype.values()")}}
  - : Retourne un nouvel objet itérateur qui contient les **valeurs** pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.
- [`Map.prototype[@@iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Retourne un nouvel objet itérateur qui contient un tableau de `[key, value]` pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.

## Exemples

### Utiliser l'objet `Map`

```js
const maMap = new Map();

const cleChaine = "une chaîne de caractères";
const cleObjet = {};
const cleFonction = () => {};

// définir les valeurs
maMap.set(cleChaine, "valeur associée à 'une chaîne de caractères'");
maMap.set(cleObjet, "valeur associée à cleObjet");
maMap.set(cleFonction, "valeur associée à cleFonction");

console.log(maMap.size); // 3

// récupérer les valeurs
console.log(maMap.get(cleChaine)); // "valeur associée à 'une chaîne de caractères'"
console.log(maMap.get(cleObjet)); // "valeur associée à cleObjet"
console.log(maMap.get(cleFonction)); // "valeur associée à cleFonction"

console.log(maMap.get("une chaîne de caractères")); // "valeur associée à 'une chaîne de caractères'", parce que cleChaine === 'une chaîne de caractères'
console.log(maMap.get({})); // undefined, parce que cleObjet !== {}
console.log(maMap.get(() => {})); // undefined, parce que cleFonction !== () => {}
```

### Utiliser `NaN` comme clés de `Map`

{{JSxRef("NaN")}} peut être utilisé comme une clé. Bien que `NaN` ne soit pas strictement égal à lui-même (`NaN !== NaN` vaut `true`), on peut bâtir l'exemple suivant, car on ne peut pas distinguer deux valeurs `NaN`&nbsp;:

```js
const maMap = new Map();
maMap.set(NaN, "not a number");

maMap.get(NaN); // "not a number"

const autreNaN = Number("toto");
maMap.get(autreNaN); // "not a number"
```

### Parcourir des objets `Maps` avec `for…of`

Il est possible de parcourir les objets `Map` grâce à des boucles `for…of`&nbsp;:

```js
const maMap = new Map();
maMap.set(0, "zéro");
maMap.set(1, "un");

for (const [cle, valeur] of maMap) {
  console.log(`${cle} = ${valeur}`);
}
// "0 = zéro"
// "1 = un"

for (const cle of maMap.keys()) {
  console.log(cle);
}
// 0
// 1

for (const valeur of maMap.values()) {
  console.log(valeur);
}
// zéro
// un

for (const [cle, valeur] of maMap.entries()) {
  console.log(`${cle} = ${valeur}`);
}
// 0 = zéro
// 1 = un
```

### Parcourir des objets `Map` avec `forEach()`

Il est aussi possible de parcourir des objets `Map` avec la méthode {{JSxRef("Map/forEach", "forEach()")}}&nbsp;:

```js
maMap.forEach(function (valeur, cle) {
  console.log(`${cle} = ${valeur}`);
});
// 0 = zéro
// 1 = un
```

### Relation avec les objets `Array`

```js
const paireCleValeur = [
  ["clé1", "valeur1"],
  ["clé2", "valeur2"],
];

// On utilise le constructeur Map
// pour transformer un tableau de clés/valeurs
// en un objet Map
const maMap = new Map(paireCleValeur);

maMap.get("clé1"); // renvoie "valeur1"

// On utilise la fonction Array.from pour transformer
// une map en un tableau de clés/valeurs
console.log(Array.from(maMap)); // affichera la même chose que paireCleValeur

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
console.log(original === clone); // false (utile pour une comparaison superficielle)
```

> [!NOTE]
> Gardez à l'esprit que _les données elles-mêmes_ ne sont pas clonées. Autrement dit, il s'agit seulement d'une [copie superficielle](/fr/docs/Glossary/Shallow_copy) de la `Map`.

Les tableaux associatifs peuvent être fusionnés, en conservant l'unicité des clés&nbsp;:

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

// Fusionner deux tableaux associatifs. La dernière clé répétée l'emporte.
// La syntaxe de décomposition convertit essentiellement un tableau associatif en un tableau
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

// On peut fusionner des Maps avec un tableau.
// La dernière clé répétée l'emporte.
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

- [Prothèse d'émulation pour `Map` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#map)
- [Prothèse d'émulation pour `Map` dans es-shims <sup>(angl.)</sup>](https://www.npmjs.com/package/es-map)
- L'objet {{JSxRef("Set")}}
- L'objet {{JSxRef("WeakMap")}}
- L'objet {{JSxRef("WeakSet")}}
