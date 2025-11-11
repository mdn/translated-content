---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: 4bfeb5a89c1528da7cb7847a9ccb93f9b00290f0
---

L'objet **`Array`**, comme les tableaux dans d'autres langages de programmation, permet [de stocker une collection de plusieurs éléments sous un même nom de variable](/fr/docs/Learn_web_development/Core/Scripting/Arrays) et possède des membres pour [effectuer des opérations courantes sur les tableaux](#exemples).

## Description

En JavaScript, les tableaux ne sont pas des {{Glossary("Primitive", "primitives")}}, mais des objets `Array` avec les caractéristiques principales suivantes&nbsp;:

- **Les tableaux JavaScript sont redimensionnables** et **peuvent contenir un mélange de différents [types de données](/fr/docs/Web/JavaScript/Guide/Data_structures)**. (Si ces caractéristiques ne conviennent pas, utilisez plutôt les [tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays).)
- **Les tableaux JavaScript ne sont pas des tableaux associatifs**&nbsp;: les éléments d'un tableau ne peuvent pas être accédés avec des chaînes arbitraires comme index, mais uniquement avec des entiers non négatifs (ou leur forme en chaîne de caractères correspondante).
- **Les tableaux JavaScript sont [indexés à partir de zéro](https://en.wikipedia.org/wiki/Zero-based_numbering)**&nbsp;: le premier élément d'un tableau a pour indice `0`, le second `1`, etc. — et le dernier élément est à la position donnée par la propriété {{JSxRef("Array/length", "length")}} du tableau moins `1`.
- **Les [opérations de copie de tableau](#copy_an_array) JavaScript créent des {{Glossary("Shallow_copy", "copies superficielles")}}**. (Toutes les opérations de copie standard intégrées avec _n'importe quel_ objet JavaScript créent des copies superficielles, et non des {{Glossary("Deep_copy", "copies profondes")}}.)

### Indices de tableau

Les objets `Array` ne peuvent pas utiliser de chaînes arbitraires comme indices d'éléments (comme dans un [tableau associatif](https://fr.wikipedia.org/wiki/Tableau_associatif)), mais doivent utiliser des entiers non négatifs (ou leur forme en chaîne de caractères). Définir ou accéder à un élément via une valeur non entière ne définira ni ne récupérera un élément de la liste du tableau, mais définira ou accédera à une variable associée à la [collection de propriétés de l'objet](/fr/docs/Web/JavaScript/Guide/Data_structures#propriétés) de ce tableau. Les propriétés d'objet du tableau et la liste des éléments du tableau sont séparées, et les [opérations de parcours et de modification](/fr/docs/Web/JavaScript/Guide/Indexed_collections#méthodes_des_tableaux) du tableau ne s'appliquent pas à ces propriétés nommées.

Les éléments d'un tableau sont des propriétés d'objet de la même manière que `toString` est une propriété (plus précisément, `toString()` est une méthode). Cependant, essayer d'accéder à un élément d'un tableau comme suit provoque une erreur de syntaxe, car le nom de la propriété n'est pas valide&nbsp;:

```js-nolint example-bad
arr.0; // erreur de syntaxe
```

La syntaxe JavaScript exige que les propriétés commençant par un chiffre soient accédées en utilisant la [notation avec crochets](/fr/docs/Web/JavaScript/Guide/Working_with_objects#les_objets_et_les_propriétés) plutôt que la [notation pointée](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors). Il est aussi possible de mettre des guillemets autour des indices de tableau (par exemple, `annees['2']` au lieu de `annees[2]`), mais ce n'est généralement pas nécessaire.

Le `2` dans `annees[2]` est converti en chaîne de caractères par le moteur JavaScript via une conversion implicite avec `toString`. Ainsi, `'2'` et `'02'` font référence à deux emplacements différents dans l'objet `annees`, et l'exemple suivant peut donc renvoyer `true`&nbsp;:

```js
console.log(annees["2"] !== annees["02"]);
```

Seul `annees['2']` est un véritable indice de tableau. `annees['02']` est une propriété de chaîne arbitraire qui ne sera pas parcourue lors de l'itération sur le tableau.

### Relation entre `length` et les propriétés numériques

La propriété {{JSxRef("Array/length", "length")}} d'un tableau JavaScript et les propriétés numériques sont liées.

Plusieurs méthodes natives de tableau (par exemple, {{JSxRef("Array/join", "join()")}}, {{JSxRef("Array/slice", "slice()")}}, {{JSxRef("Array/indexOf", "indexOf()")}}, etc.) tiennent compte de la valeur de la propriété {{JSxRef("Array/length", "length")}} du tableau lorsqu'elles sont appelées.

D'autres méthodes (par exemple, {{JSxRef("Array/push", "push()")}}, {{JSxRef("Array/splice", "splice()")}}, etc.) modifient également la propriété {{JSxRef("Array/length", "length")}} du tableau.

```js
const fruits = [];
fruits.push("banane", "pomme", "peche");
console.log(fruits.length); // 3
```

Lorsque l'on définit une propriété sur un tableau JavaScript, si la propriété est un indice de tableau valide et que cet indice est en dehors des limites actuelles du tableau, le moteur mettra à jour la propriété {{JSxRef("Array/length", "length")}} du tableau en conséquence&nbsp;:

```js
fruits[5] = "mangue";
console.log(fruits[5]); // 'mangue'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Augmenter la valeur de {{JSxRef("Array/length", "length")}} étend le tableau en ajoutant des emplacements vides sans créer de nouveaux éléments — même pas `undefined`.

```js
fruits.length = 10;
console.log(fruits); // ['banane', 'pomme', 'peche', empty x 2, 'mangue', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

Diminuer la valeur de la propriété {{JSxRef("Array/length", "length")}} supprime les éléments.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Pour plus d'explications, voir la page {{JSxRef("Array/length", "length")}}.

### Méthodes de tableau et emplacements vides

Les méthodes de tableau ont des comportements différents lorsqu'elles rencontrent des emplacements vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux). En général, les méthodes plus anciennes (par exemple, `forEach`) traitent les emplacements vides différemment des indices contenant `undefined`.

Les méthodes qui traitent spécialement les emplacements vides incluent&nbsp;: {{JSxRef("Array/concat", "concat()")}}, {{JSxRef("Array/copyWithin", "copyWithin()")}}, {{JSxRef("Array/every", "every()")}}, {{JSxRef("Array/filter", "filter()")}}, {{JSxRef("Array/flat", "flat()")}}, {{JSxRef("Array/flatMap", "flatMap()")}}, {{JSxRef("Array/forEach", "forEach()")}}, {{JSxRef("Array/indexOf", "indexOf()")}}, {{JSxRef("Array/lastIndexOf", "lastIndexOf()")}}, {{JSxRef("Array/map", "map()")}}, {{JSxRef("Array/reduce", "reduce()")}}, {{JSxRef("Array/reduceRight", "reduceRight()")}}, {{JSxRef("Array/reverse", "reverse()")}}, {{JSxRef("Array/slice", "slice()")}}, {{JSxRef("Array/some", "some()")}}, {{JSxRef("Array/sort", "sort()")}} et {{JSxRef("Array/splice", "splice()")}}. Les méthodes d'itération comme `forEach` ne visitent pas du tout les emplacements vides. D'autres méthodes, comme `concat`, `copyWithin`, etc., préservent les emplacements vides lors de la copie, donc le tableau reste creux.

```js
const couleurs = ["rouge", "jaune", "bleu"];
couleurs[5] = "violet";
couleurs.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Résultat :
// 0: rouge
// 1: jaune
// 2: bleu
// 5: violet

couleurs.reverse(); // ['violet', empty × 2, 'bleu', 'jaune', 'rouge']
```

Les méthodes plus récentes (par exemple, `keys`) ne traitent pas spécialement les emplacements vides et les considèrent comme contenant `undefined`. Les méthodes qui assimilent les emplacements vides à des éléments `undefined` incluent&nbsp;: {{JSxRef("Array/entries", "entries()")}}, {{JSxRef("Array/fill", "fill()")}}, {{JSxRef("Array/find", "find()")}}, {{JSxRef("Array/findIndex", "findIndex()")}}, {{JSxRef("Array/findLast", "findLast()")}}, {{JSxRef("Array/findLastIndex", "findLastIndex()")}}, {{JSxRef("Array/includes", "includes()")}}, {{JSxRef("Array/join", "join()")}}, {{JSxRef("Array/keys", "keys()")}}, {{JSxRef("Array/toLocaleString", "toLocaleString()")}}, {{JSxRef("Array/toReversed", "toReversed()")}}, {{JSxRef("Array/toSorted", "toSorted()")}}, {{JSxRef("Array/toSpliced", "toSpliced()")}}, {{JSxRef("Array/values", "values()")}} et {{JSxRef("Array/with", "with()")}}.

```js
const couleurs = ["rouge", "jaune", "bleu"];
couleurs[5] = "violet";
const iterateur = couleurs.keys();
for (const key of iterateur) {
  console.log(`${key}: ${couleurs[key]}`);
}
// Résultat
// 0: rouge
// 1: jaune
// 2: bleu
// 3: undefined
// 4: undefined
// 5: violet

const nouvellesCouleurs = couleurs.toReversed(); // ['violet', undefined, undefined, 'bleu', 'jaune', 'rouge']
```

### Méthodes de copie et méthodes de mutation

Certaines méthodes ne modifient pas le tableau existant sur lequel la méthode a été appelée, mais renvoient un nouveau tableau. Elles le font en construisant d'abord un nouveau tableau, puis en le remplissant avec les éléments. La copie se fait toujours {{Glossary("Shallow_copy", "de manière superficielle")}} — la méthode ne copie jamais au-delà du tableau initialement créé. Les éléments du ou des tableaux d'origine sont copiés dans le nouveau tableau comme suit&nbsp;:

- Objets&nbsp;: la référence de l'objet est copiée dans le nouveau tableau. Le tableau d'origine et le nouveau tableau font référence au même objet. Ainsi, si un objet référencé est modifié, les changements sont visibles dans les deux tableaux.
- Types primitifs comme les chaînes de caractères, les nombres et les booléens (pas les objets {{JSxRef("String")}}, {{JSxRef("Number")}} et {{JSxRef("Boolean")}})&nbsp;: leurs valeurs sont copiées dans le nouveau tableau.

D'autres méthodes modifient le tableau sur lequel la méthode a été appelée, auquel cas leur valeur de retour diffère selon la méthode&nbsp;: parfois une référence au même tableau, parfois la longueur du nouveau tableau.

Les méthodes suivantes créent de nouveaux tableaux en accédant à [`this.constructor[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) pour déterminer le constructeur à utiliser&nbsp;: {{JSxRef("Array/concat", "concat()")}}, {{JSxRef("Array/filter", "filter()")}}, {{JSxRef("Array/flat", "flat()")}}, {{JSxRef("Array/flatMap", "flatMap()")}}, {{JSxRef("Array/map", "map()")}}, {{JSxRef("Array/slice", "slice()")}}, et {{JSxRef("Array/splice", "splice()")}} (pour construire le tableau des éléments supprimés qui est renvoyé).

Les méthodes suivantes créent toujours de nouveaux tableaux avec le constructeur de base `Array`&nbsp;: {{JSxRef("Array/toReversed", "toReversed()")}}, {{JSxRef("Array/toSorted", "toSorted()")}}, {{JSxRef("Array/toSpliced", "toSpliced()")}}, et {{JSxRef("Array/with", "with()")}}.

Le tableau suivant liste les méthodes qui modifient le tableau d'origine et leur alternative sans mutation&nbsp;:

| Méthode avec mutation                          | Alternative sans mutation                                |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{JSxRef("Array/copyWithin", "copyWithin()")}} | Pas d'alternative en une seule méthode                   |
| {{JSxRef("Array/fill", "fill()")}}             | Pas d'alternative en une seule méthode                   |
| {{JSxRef("Array/pop", "pop()")}}               | {{JSxRef("Array/slice", "slice(0, -1)")}}                |
| {{JSxRef("Array/push", "push(v1, v2)")}}       | {{JSxRef("Array/concat", "concat([v1, v2])")}}           |
| {{JSxRef("Array/reverse", "reverse()")}}       | {{JSxRef("Array/toReversed", "toReversed()")}}           |
| {{JSxRef("Array/shift", "shift()")}}           | {{JSxRef("Array/slice", "slice(1)")}}                    |
| {{JSxRef("Array/sort", "sort()")}}             | {{JSxRef("Array/toSorted", "toSorted()")}}               |
| {{JSxRef("Array/splice", "splice()")}}         | {{JSxRef("Array/toSpliced", "toSpliced()")}}             |
| {{JSxRef("Array/unshift", "unshift(v1, v2)")}} | {{JSxRef("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Un moyen simple de transformer une méthode avec mutation en alternative sans mutation est d'utiliser la [syntaxe de l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ou {{JSxRef("Array/slice", "slice()")}} pour créer d'abord une copie&nbsp;:

```js-nolint
arr.copyWithin(0, 1, 2); // modifie arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // ne modifie pas arr
const arr3 = [...arr].copyWithin(0, 1, 2); // ne modifie pas arr
```

### Méthodes itératives

De nombreuses méthodes de tableau prennent une fonction de rappel (<i lang="en">callback</i> en anglais) en argument. Cette fonction de rappel est appelée séquentiellement et au maximum une fois pour chaque élément du tableau, et la valeur de retour de la fonction de rappel est utilisée pour déterminer la valeur de retour de la méthode. Elles partagent toutes la même signature&nbsp;:

```js-nolint
method(callbackFn, thisArg)
```

Où `callbackFn` prend trois arguments&nbsp;:

- `element`
  - : L'élément courant traité dans le tableau.
- `index`
  - : L'indice de l'élément courant traité dans le tableau.
- `array`
  - : Le tableau sur lequel la méthode a été appelée.

Ce que `callbackFn` doit retourner dépend de la méthode de tableau appelée.

L'argument `thisArg` (par défaut à `undefined`) sera utilisé comme valeur de `this` lors de l'appel de `callbackFn`. La valeur de `this` effectivement observable par `callbackFn` est déterminée selon [les règles habituelles](/fr/docs/Web/JavaScript/Reference/Operators/this)&nbsp;: si `callbackFn` n'est [pas stricte](/fr/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution), les valeurs primitives de `this` sont converties en objets, et `undefined`/`null` est remplacé par [`globalThis`](/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis). L'argument `thisArg` est sans effet pour toute fonction de rappel définie avec une [fonction fléchée](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions), car les fonctions fléchées n'ont pas leur propre {{Glossary("binding", "liaison")}} `this`.

L'argument `array` passé à `callbackFn` est surtout utile si vous souhaitez lire un autre indice pendant l'itération, car vous n'avez pas toujours une variable existante qui fait référence au tableau courant. En général, il ne faut pas modifier le tableau pendant l'itération (voir [modification du tableau initial dans les méthodes itératives](#modification_du_tableau_initial_dans_les_méthodes_itératives)), mais vous pouvez aussi utiliser cet argument à cette fin. L'argument `array` n'est _pas_ le tableau en cours de construction dans le cas de méthodes comme `map()`, `filter()` et `flatMap()` — il n'est pas possible d'accéder au tableau en cours de construction depuis la fonction de rappel.

Toutes les méthodes itératives sont [copiantes](#méthodes_de_copie_et_méthodes_mutantes) et [génériques](#méthodes_de_tableau_génériques), bien qu'elles se comportent différemment avec [les emplacements vides](#méthodes_de_tableau_et_emplacements_vides).

Les méthodes suivantes sont itératives&nbsp;: {{JSxRef("Array/every", "every()")}}, {{JSxRef("Array/filter", "filter()")}}, {{JSxRef("Array/find", "find()")}}, {{JSxRef("Array/findIndex", "findIndex()")}}, {{JSxRef("Array/findLast", "findLast()")}}, {{JSxRef("Array/findLastIndex", "findLastIndex()")}}, {{JSxRef("Array/flatMap", "flatMap()")}}, {{JSxRef("Array/forEach", "forEach()")}}, {{JSxRef("Array/map", "map()")}} et {{JSxRef("Array/some", "some()")}}.

En particulier, {{JSxRef("Array/every", "every()")}}, {{JSxRef("Array/find", "find()")}}, {{JSxRef("Array/findIndex", "findIndex()")}}, {{JSxRef("Array/findLast", "findLast()")}}, {{JSxRef("Array/findLastIndex", "findLastIndex()")}} et {{JSxRef("Array/some", "some()")}} n'invoquent pas toujours `callbackFn` sur chaque élément — elles arrêtent l'itération dès que la valeur de retour est déterminée.

Les méthodes {{JSxRef("Array/reduce", "reduce()")}} et {{JSxRef("Array/reduceRight", "reduceRight()")}} prennent aussi une fonction de rappel et l'exécutent au maximum une fois pour chaque élément du tableau, mais elles ont des signatures légèrement différentes des méthodes itératives classiques (par exemple, elles n'acceptent pas `thisArg`).

La méthode {{JSxRef("Array/sort", "sort()")}} prend aussi une fonction de rappel, mais ce n'est pas une méthode itérative. Elle modifie le tableau en place, n'accepte pas `thisArg` et peut invoquer la fonction de rappel plusieurs fois sur un même indice.

Les méthodes itératives parcourent le tableau comme suit (de nombreux détails techniques sont omis)&nbsp;:

```js
function method(callbackFn, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callbackFn.call(thisArg, this[i], i, this);
      // Faire quelque chose avec result&nbsp;; peut-être retourner tôt
    }
  }
}
```

À noter&nbsp;:

1. Toutes les méthodes ne font pas le test `i in this`. Les méthodes `find`, `findIndex`, `findLast` et `findLastIndex` ne le font pas, mais les autres oui.
2. La valeur de `length` est mémorisée avant le début de la boucle. Cela affecte la gestion des insertions et suppressions pendant l'itération (voir [modification du tableau initial dans les méthodes itératives](#modification_du_tableau_initial_dans_les_méthodes_itératives)).
3. La méthode ne mémorise pas le contenu du tableau, donc si un indice est modifié pendant l'itération, la nouvelle valeur peut être observée.
4. Le code ci-dessus parcourt le tableau dans l'ordre croissant des indices. Certaines méthodes parcourent dans l'ordre décroissant (`for (let i = length - 1; i >= 0; i--)`) : `reduceRight()`, `findLast()` et `findLastIndex()`.
5. `reduce` et `reduceRight` ont des signatures légèrement différentes et ne commencent pas toujours au premier/dernier élément.

### Méthodes de tableau génériques

Les méthodes de tableau sont toujours génériques — elles n'accèdent à aucune donnée interne de l'objet tableau. Elles accèdent uniquement aux éléments du tableau via la propriété `length` et les éléments indexés. Cela signifie qu'elles peuvent aussi être appelées sur des objets ressemblant à des tableaux.

```js
const objetRessemblantATableau = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(objetRessemblantATableau, "+")); // 'a+b'
```

#### Normalisation de la propriété length

La propriété `length` est [convertie en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière) puis bornée entre 0 et 2<sup>53</sup> - 1. `NaN` devient `0`, donc même si `length` n'est pas présente ou vaut `undefined`, elle se comporte comme si elle valait `0`.

Le langage évite d'attribuer à `length` une [valeur entière non sûre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). Toutes les méthodes natives lèveront une {{JSxRef("TypeError")}} si `length` doit être supérieure à 2<sup>53</sup> - 1. Cependant, comme la propriété {{JSxRef("Array/length", "length")}} des tableaux lève une erreur si elle dépasse 2<sup>32</sup> - 1, ce seuil n'est généralement pas atteint sauf si la méthode est appelée sur un objet qui n'est pas un tableau.

```js
Array.prototype.flat.call({}); // []
```

Certaines méthodes de tableau modifient la propriété `length` de l'objet tableau. Elles fixent toujours la valeur après normalisation, donc `length` est toujours un entier au final.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Objets ressemblant à des tableaux

Le terme [_objet ressemblant à un tableau_](/fr/docs/Web/JavaScript/Guide/Indexed_collections#travailler_avec_des_objets_ressemblant_a_des_tableaux) désigne tout objet qui ne lève pas d'erreur lors du processus de conversion de `length` décrit ci-dessus. En pratique, un tel objet est censé avoir effectivement une propriété `length` et des éléments indexés dans l'intervalle de `0` à `length - 1`. (S'il ne possède pas tous les indices, il sera fonctionnellement équivalent à un [tableau creux](#méthodes_de_tableau_et_emplacements_vides).) Tout indice entier inférieur à zéro ou supérieur à `length - 1` est ignoré lorsqu'une méthode de tableau opère sur un objet ressemblant à un tableau.

De nombreux objets du DOM sont ressemblant à des tableaux — par exemple, {{DOMxRef("NodeList")}} et {{DOMxRef("HTMLCollection")}}. L'objet [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments) est aussi ressemblant à un tableau. Vous pouvez appeler des méthodes de tableau sur eux même s'ils ne possèdent pas ces méthodes eux-mêmes.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

## Constructeur

- {{JSxRef("Array/Array", "Array()")}}
  - : Crée un nouvel objet `Array`.

## Propriétés statiques

- [`Array[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
  - : Retourne le constructeur `Array`.

## Méthodes statiques

- {{JSxRef("Array.from()")}}
  - : Cette méthode permet de créer une nouvelle instance d'`Array` à partir d'un objet semblable à un tableau ou d'un itérable.
- {{JSxRef("Array.isArray()")}}
  - : Cette méthode renvoie `true` si la variable est un tableau, `false` sinon.
- {{JSxRef("Array.of()")}}
  - : Cette méthode permet de créer une nouvelle instance d'`Array` à partir d'un nombre variable d'arguments (peu importe la quantité ou le type des arguments utilisés).

## Propriétés d'instance

Ces propriétés sont définies sur `Array.prototype` et partagées par toutes les instances de `Array`.

- {{JSxRef("Object/constructor", "Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'instance de l'objet. Pour les instances de `Array`, la valeur initiale est le constructeur {{JSxRef("Array/Array", "Array")}}.
- [`Array.prototype[Symbol.unscopables]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : Contient les noms de propriétés qui n'étaient pas inclus dans la norme ECMAScript avant la version ES2015 et qui sont ignorés pour l'association d'instructions [`with`](/fr/docs/Web/JavaScript/Reference/Statements/with).

Ces propriétés sont des propriétés propres à chaque instance de `Array`.

- {{JSxRef("Array/length", "length")}}
  - : Reflète le nombre d'éléments dans un tableau.

## Méthodes d'instance

- {{JSxRef("Array.prototype.at()")}}
  - : Retourne l'élément du tableau à l'indice indiqué. Les entiers négatifs sont acceptés en argument et, dans ce cas, la recherche de l'élément se fait depuis la fin du tableau.
- {{JSxRef("Array.prototype.concat()")}}
  - : Retourne un nouveau tableau qui est le tableau courant, joint avec d'autres tableaux ou valeurs.
- {{JSxRef("Array.prototype.copyWithin()")}}
  - : Copie une séquence d'élément d'un tableau au sein du tableau courant.
- {{JSxRef("Array.prototype.entries()")}}
  - : Retourne un nouvel [_itérateur de tableau_](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators) qui contient les paires de clés/valeurs pour chaque indice dans le tableau.
- {{JSxRef("Array.prototype.every()")}}
  - : Retourne `true` si chaque élément du tableau vérifie la condition fixée par la fonction passée en argument.
- {{JSxRef("Array.prototype.fill()")}}
  - : Remplit tous les éléments d'un tableau à partir d'un indice de début jusqu'à un indice de fin avec une valeur statique.
- {{JSxRef("Array.prototype.filter()")}}
  - : Retourne un nouveau tableau qui contient tous les éléments du tableau courant pour lesquels la fonction de filtre passée en argument a renvoyé `true`.
- {{JSxRef("Array.prototype.find()")}}
  - : Retourne l'élément trouvé dans le tableau si un des éléments satisfait la condition fixée par la fonction passée en paramètre. Retourne `undefined` si aucun élément correspondant n'est trouvé.
- {{JSxRef("Array.prototype.findIndex()")}}
  - : Retourne l'indice de l'élément trouvé dans le tableau si un élément du tableau satisfait la condition fixée par la fonction passée en argument ou `-1` si aucun élément n'est trouvé.
- {{JSxRef("Array.prototype.flat()")}}
  - : Retourne un nouveau tableau avec l'ensemble des sous-éléments concaténés récursivement dans le tableau jusqu'à une profondeur indiquée.
- {{JSxRef("Array.prototype.flatMap()")}}
  - : Retourne un nouveau tableau formé en appliquant une fonction de rappel donnée à chaque élément du tableau puis en «&nbsp;aplatissant&nbsp;» le tableau d'un niveau.
- {{JSxRef("Array.prototype.forEach()")}}
  - : Appelle une fonction pour chaque élément du tableau.
- {{JSxRef("Array.prototype.includes()")}}
  - : Détermine si le tableau contient une valeur et renvoie `true` ou `false` selon le cas de figure.
- {{JSxRef("Array.prototype.indexOf()")}}
  - : Retourne l'indice le plus petit d'un élément du tableau égal à la valeur passée en argument ou `-1` si aucun élément n'est trouvé.
- {{JSxRef("Array.prototype.join()")}}
  - : Fusionne tous les éléments du tableau en une chaîne de caractères.
- {{JSxRef("Array.prototype.keys()")}}
  - : Retourne un nouvel [_itérateur de tableau_](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators) qui contient les clés de chaque indice du tableau.
- {{JSxRef("Array.prototype.lastIndexOf()")}}
  - : Retourne le plus grand indice d'un élément du tableau égal à la valeur passée en argument ou `-1` si aucun élément n'est trouvé.
- {{JSxRef("Array.prototype.map()")}}
  - : Retourne un nouveau tableau contenant les résultats de l'appel de la fonction passée en argument sur chaque élément du tableau.
- {{JSxRef("Array.prototype.pop()")}}
  - : Retire le dernier élément du tableau et renvoie cet élément.
- {{JSxRef("Array.prototype.push()")}}
  - : Ajoute un ou plusieurs éléments à la fin du tableau et renvoie la nouvelle longueur (`length`) du tableau.
- {{JSxRef("Array.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque valeur du tableau (de gauche à droite) afin de réduire le tableau à une seule valeur.
- {{JSxRef("Array.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque valeur du tableau (de droite à gauche) afin de réduire le tableau à une seule valeur.
- {{JSxRef("Array.prototype.reverse()")}}
  - : Inverse l'ordre des éléments du tableau _à même le tableau_ (le premier élément devient le dernier, le dernier devient le premier, etc.).
- {{JSxRef("Array.prototype.shift()")}}
  - : Retire le premier élément du tableau et renvoie cet élément.
- {{JSxRef("Array.prototype.slice()")}}
  - : Extrait une section du tableau courant et renvoie un nouveau tableau.
- {{JSxRef("Array.prototype.some()")}}
  - : Retourne `true` si au moins un des éléments du tableau satisfait la condition fournie par la fonction passée en paramètre.
- {{JSxRef("Array.prototype.sort()")}}
  - : Trie les éléments du tableau à même le tableau et renvoie le tableau.
- {{JSxRef("Array.prototype.splice()")}}
  - : Ajoute et/ou retire des éléments du tableau.
- {{JSxRef("Array.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères localisée qui représente le tableau et ses éléments. Cette méthode surcharge la méthode [`Object.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString).
- {{JSxRef("Array.prototype.toReversed()")}}
  - : Retourne un nouveau tableau avec les éléments dans l'ordre inversé, sans modifier le tableau d'origine.
- {{JSxRef("Array.prototype.toSorted()")}}
  - : Retourne un nouveau tableau avec les éléments triés par ordre croissant, sans modifier le tableau d'origine.
- {{JSxRef("Array.prototype.toSpliced()")}}
  - : Retourne un nouveau tableau avec certains éléments supprimés et/ou remplacés à un indice donné, sans modifier le tableau d'origine.
- {{JSxRef("Array.prototype.toString()")}}
  - : Retourne une chaîne de caractères qui représente le tableau et ses éléments. Cette méthode surcharge la méthode {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("Array.prototype.unshift()")}}
  - : Ajoute un ou plusieurs éléments à l'avant du tableau et renvoie la nouvelle longueur du tableau.
- {{JSxRef("Array.prototype.values()")}}
  - : Retourne un nouvel _itérateur de tableau_ qui contient les valeurs pour chaque indice du tableau.
- [`Array.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : Un alias de la méthode {{JSxRef("Array.prototype.values()", "values()")}} par défaut.

## Exemples

Cette section fournit quelques exemples d'opérations courantes sur les tableaux en JavaScript.

> [!NOTE]
> Si vous ne maîtrisez pas encore les bases des tableaux, commencez par lire [Premiers pas en JavaScript&nbsp;: les tableaux](/fr/docs/Learn_web_development/Core/Scripting/Arrays), qui [explique ce qu'est un tableau](/fr/docs/Learn_web_development/Core/Scripting/Arrays#quest‑ce_quun_tableau) et inclut d'autres exemples d'opérations courantes sur les tableaux.

### Créer un tableau

Cet exemple montre trois façons de créer un nouveau tableau&nbsp;: d'abord en utilisant la [notation littérale de tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#notation_litterale_de_tableau), puis en utilisant le constructeur [`Array()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), et enfin en utilisant [`String.prototype.split()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split) pour construire le tableau à partir d'une chaîne de caractères.

```js
// Tableau 'fruits' créé avec la notation littérale.
const fruits = ["Pomme", "Banane"];
console.log(fruits.length);
// 2

// Tableau 'fruits2' créé avec le constructeur Array().
const fruits2 = new Array("Pomme", "Banane");
console.log(fruits2.length);
// 2

// Tableau 'fruits3' créé avec String.prototype.split().
const fruits3 = "Pomme, Banane".split(", ");
console.log(fruits3.length);
// 2
```

### Créer une chaîne à partir d'un tableau

Cet exemple utilise la méthode [`join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join) pour créer une chaîne à partir du tableau `fruits`.

```js
const fruits = ["Pomme", "Banane"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Pomme, Banane"
```

### Accéder à un élément d'un tableau par son indice

Cet exemple montre comment accéder aux éléments du tableau `fruits` en spécifiant l'indice de leur position dans le tableau.

```js
const fruits = ["Pomme", "Banane"];

// L'indice du premier élément d'un tableau est toujours 0.
fruits[0]; // Pomme

// L'indice du deuxième élément d'un tableau est toujours 1.
fruits[1]; // Banane

// L'indice du dernier élément d'un tableau est toujours égal à la longueur du tableau moins un.
fruits[fruits.length - 1]; // Banane

// Utiliser un indice supérieur à la longueur du tableau retourne 'undefined'.
fruits[99]; // undefined
```

### Rechercher l'indice d'un élément dans un tableau

Cet exemple utilise la méthode [`indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) pour trouver la position (indice) de la chaîne de caractères `"Banane"` dans le tableau `fruits`.

```js
const fruits = ["Pomme", "Banane"];
console.log(fruits.indexOf("Banane"));
// 1
```

### Vérifier si un tableau contient un certain élément

Cet exemple montre deux façons de vérifier si le tableau `fruits` contient `"Banane"` et `"Cerise"`&nbsp;: d'abord avec la méthode [`includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), puis avec la méthode [`indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) pour tester si l'indice retourné n'est pas `-1`.

```js
const fruits = ["Pomme", "Banane"];

fruits.includes("Banane"); // true
fruits.includes("Cerise"); // false

// Si indexOf() ne retourne pas -1, le tableau contient l'élément donné.
fruits.indexOf("Banane") !== -1; // true
fruits.indexOf("Cerise") !== -1; // false
```

### Ajouter un élément à un tableau

Cet exemple utilise la méthode [`push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push) pour ajouter une nouvelle chaîne de caractères au tableau `fruits`.

```js
const fruits = ["Pomme", "Banane"];
const nouvelleLongueur = fruits.push("Orange");
console.log(fruits);
// ["Pomme", "Banane", "Orange"]
console.log(nouvelleLongueur);
// 3
```

### Retirer le dernier élément d'un tableau

Cet exemple utilise la méthode [`pop()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) pour retirer le dernier élément du tableau `fruits`.

```js
const fruits = ["Pomme", "Banane", "Orange"];
const elementRetire = fruits.pop();
console.log(fruits);
// ["Pomme", "Banane"]
console.log(elementRetire);
// Orange
```

> [!NOTE]
> `pop()` ne peut être utilisé que pour retirer le dernier élément d'un tableau. Pour retirer plusieurs éléments à la fin d'un tableau, voir l'exemple suivant.

### Retirer plusieurs éléments à la fin d'un tableau

Cet exemple utilise la méthode [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) pour retirer les 3 derniers éléments du tableau `fruits`.

```js
const fruits = ["Pomme", "Banane", "Fraise", "Mangue", "Cerise"];
const debut = -3;
const elementsRetires = fruits.splice(debut);
console.log(fruits);
// ["Pomme", "Banane"]
console.log(elementsRetires);
// ["Fraise", "Mangue", "Cerise"]
```

### Tronquer un tableau à ses N premiers éléments

Cet exemple utilise la méthode [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) pour tronquer le tableau `fruits` à ses 2 premiers éléments.

```js
const fruits = ["Pomme", "Banane", "Fraise", "Mangue", "Cerise"];
const debut = 2;
const elementsRetires = fruits.splice(debut);
console.log(fruits);
// ["Pomme", "Banane"]
console.log(elementsRetires);
// ["Fraise", "Mangue", "Cerise"]
```

### Retirer le premier élément d'un tableau

Cet exemple utilise la méthode [`shift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) pour retirer le premier élément du tableau `fruits`.

```js
const fruits = ["Pomme", "Banane"];
const elementRetire = fruits.shift();
console.log(fruits);
// ["Banane"]
console.log(elementRetire);
// Pomme
```

> [!NOTE]
> `shift()` ne peut être utilisé que pour retirer le premier élément d'un tableau. Pour retirer plusieurs éléments au début d'un tableau, voir l'exemple suivant.

### Retirer plusieurs éléments au début d'un tableau

Cet exemple utilise la méthode [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) pour retirer les 3 premiers éléments du tableau `fruits`.

```js
const fruits = ["Pomme", "Fraise", "Cerise", "Banane", "Mangue"];
const debut = 0;
const nombreASupprimer = 3;
const elementsRetires = fruits.splice(debut, nombreASupprimer);
console.log(fruits);
// ["Banane", "Mangue"]
console.log(elementsRetires);
// ["Pomme", "Fraise", "Cerise"]
```

### Ajouter un nouvel élément en première position d'un tableau

Cet exemple utilise la méthode [`unshift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) pour ajouter, à l'indice `0`, un nouvel élément au tableau `fruits` — il devient alors le premier élément du tableau.

```js
const fruits = ["Banane", "Mangue"];
const nouvelleLongueur = fruits.unshift("Fraise");
console.log(fruits);
// ["Fraise", "Banane", "Mangue"]
console.log(nouvelleLongueur);
// 3
```

### Retirer un élément par son indice

Cet exemple utilise la méthode [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) pour retirer la chaîne de caractères `"Banane"` du tableau `fruits` — en spécifiant la position de l'indice de `"Banane"`.

```js
const fruits = ["Fraise", "Banane", "Mangue"];
const debut = fruits.indexOf("Banane");
const nombreASupprimer = 1;
const elementsRetires = fruits.splice(debut, nombreASupprimer);
console.log(fruits);
// ["Fraise", "Mangue"]
console.log(elementsRetires);
// ["Banane"]
```

### Retirer plusieurs éléments par leur indice

Cet exemple utilise la méthode [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) pour retirer les chaînes de caractères `"Banane"` et `"Fraise"` du tableau `fruits` — en spécifiant la position de l'indice de `"Banane"` et le nombre total d'éléments à retirer.

```js
const fruits = ["Pomme", "Banane", "Fraise", "Mangue"];
const debut = 1;
const nombreASupprimer = 2;
const elementsRetires = fruits.splice(debut, nombreASupprimer);
console.log(fruits);
// ["Pomme", "Mangue"]
console.log(elementsRetires);
// ["Banane", "Fraise"]
```

### Remplacer plusieurs éléments dans un tableau

Cet exemple utilise la méthode [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) pour remplacer les 2 derniers éléments du tableau `fruits` par de nouveaux éléments.

```js
const fruits = ["Pomme", "Banane", "Fraise"];
const debut = -2;
const nombreASupprimer = 2;
const elementsRetires = fruits.splice(
  debut,
  nombreASupprimer,
  "Mangue",
  "Cerise",
);
console.log(fruits);
// ["Pomme", "Mangue", "Cerise"]
console.log(elementsRetires);
// ["Banane", "Fraise"]
```

### Itérer sur un tableau

Cet exemple utilise une boucle [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) pour parcourir le tableau `fruits` et afficher chaque élément dans la console.

```js
const fruits = ["Pomme", "Mangue", "Cerise"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Pomme
// Mangue
// Cerise
```

Mais `for...of` n'est qu'une des nombreuses façons d'itérer sur un tableau&nbsp;: pour d'autres méthodes, voir [Boucles et itération](/fr/docs/Web/JavaScript/Guide/Loops_and_iteration), ainsi que la documentation des méthodes [`every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) et [`reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) — et voir l'exemple suivant qui utilise la méthode [`forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

### Appeler une fonction sur chaque élément d'un tableau

Cet exemple utilise la méthode [`forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) pour appeler une fonction sur chaque élément du tableau `fruits`&nbsp;; la fonction affiche chaque élément dans la console, ainsi que son indice.

```js
const fruits = ["Pomme", "Mangue", "Cerise"];
fruits.forEach((element, indice, tableau) => {
  console.log(element, indice);
});
// Pomme 0
// Mangue 1
// Cerise 2
```

### Fusionner plusieurs tableaux

Cet exemple utilise la méthode [`concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) pour fusionner le tableau `fruits` avec un tableau `autresFruits` et produire un nouveau tableau `fruitsCombines`. Remarquez que `fruits` et `autresFruits` restent inchangés.

```js
const fruits = ["Pomme", "Banane", "Fraise"];
const autresFruits = ["Mangue", "Cerise"];
const fruitsCombines = fruits.concat(autresFruits);
console.log(fruitsCombines);
// ["Pomme", "Banane", "Fraise", "Mangue", "Cerise"]

// Le tableau 'fruits' reste inchangé.
console.log(fruits);
// ["Pomme", "Banane", "Fraise"]

// Le tableau 'autresFruits' reste aussi inchangé.
console.log(autresFruits);
// ["Mangue", "Cerise"]
```

### Copier un tableau

Cet exemple montre trois façons de créer un nouveau tableau à partir du tableau existant `fruits` : d'abord en utilisant la [syntaxe de l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), puis en utilisant la méthode [`from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from), et enfin en utilisant la méthode [`slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

```js
const fruits = ["Strawberry", "Mango"];

// Créer une copie en utilisant la syntaxe de l'opérateur de propagation.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Créer une copie en utilisant la méthode from().
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Créer une copie en utilisant la méthode slice().
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]
```

Toutes les opérations natives de copie de tableau ([syntaxe de l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), et [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) créent des [copies superficielles](/fr/docs/Glossary/Shallow_copy). Si vous souhaitez plutôt une [copie profonde](/fr/docs/Glossary/Deep_copy) d'un tableau, vous pouvez utiliser {{JSxRef("JSON.stringify()")}} pour convertir le tableau en chaîne JSON, puis {{JSxRef("JSON.parse()")}} pour convertir la chaîne en un nouveau tableau totalement indépendant du tableau d'origine.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Vous pouvez également créer des copies profondes en utilisant la méthode {{DOMxRef("Window.structuredClone", "structuredClone()")}}, qui a l'avantage de permettre aux [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects) de la source d'être _transférés_ vers la nouvelle copie, plutôt que simplement clonés.

Enfin, il est important de comprendre qu'affecter un tableau existant à une nouvelle variable ne crée pas une copie du tableau ni de ses éléments. La nouvelle variable n'est qu'une référence, ou alias, vers le tableau d'origine ; c'est-à-dire que le nom du tableau d'origine et le nom de la nouvelle variable sont simplement deux noms pour exactement le même objet (et seront donc toujours [strictement équivalents](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#légalité_stricte_avec)). Ainsi, si vous modifiez la valeur du tableau d'origine ou celle de la nouvelle variable, l'autre changera aussi :

```js
const fruits = ["Strawberry", "Mango"];
const fruitsAlias = fruits;
// 'fruits' et 'fruitsAlias' sont le même objet, strictement équivalents.
fruits === fruitsAlias; // true
// Toute modification du tableau 'fruits' modifie aussi 'fruitsAlias'.
fruits.unshift("Apple", "Banana");
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
```

### Créer un tableau à deux dimensions

L'exemple suivant crée un échiquier sous forme de tableau à deux dimensions de chaînes de caractères. Le premier coup est effectué en copiant le `'p'` de `board[6][4]` vers `board[4][4]`. L'ancienne position `[6][4]` est rendue vide.

```js
const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);

// Avancer le pion du roi de 2 cases
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));
```

Voici le résultat&nbsp;:

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### Utiliser un tableau pour tabuler un ensemble de valeurs

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Ce qui donne

```plain
// La première colonne est l'indice
0  1    0
1  2    2
2  4    8
3  8    18
4  16   32
5  32   50
6  64   72
7  128  98
8  256  128
9  512  162
```

### Créer un tableau à partir du résultat d'une correspondance

Le résultat d'une correspondance entre un {{JSxRef("RegExp")}} et une chaîne peut créer un tableau JavaScript qui possède des propriétés et des éléments fournissant des informations sur la correspondance. Un tel tableau est retourné par {{JSxRef("RegExp.prototype.exec()")}} et {{JSxRef("String.prototype.match()")}}.

Par exemple&nbsp;:

```js
// Correspond à un 'd' suivi d'un ou plusieurs 'b', suivi d'un 'd'
// Mémorise les 'b' correspondants et le 'd' suivant
// Ignore la casse

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]
```

Pour plus d'informations sur le résultat d'une correspondance, voir les pages {{JSxRef("RegExp.prototype.exec()")}} et {{JSxRef("String.prototype.match()")}}.

### Modification du tableau initial dans les méthodes itératives

Les [méthodes itératives](#méthodes_itératives) ne modifient pas le tableau sur lequel elles sont appelées, mais la fonction fournie en tant que `callbackFn` peut le faire. Le principe clé à retenir est que seuls les indices entre 0 et `arrayLength - 1` sont visités, où `arrayLength` est la longueur du tableau au moment où la méthode a été appelée, mais l'élément passé au callback est la valeur au moment où l'indice est visité. Ainsi&nbsp;:

- `callbackFn` ne visitera aucun élément ajouté au-delà de la longueur initiale du tableau au début de l'appel de la méthode itérative.
- Les modifications des indices déjà visités ne provoquent pas un nouvel appel de `callbackFn` sur ceux-ci.
- Si un élément existant mais pas encore visité du tableau est modifié par `callbackFn`, la valeur passée au callback sera celle au moment où cet élément est visité. Les éléments supprimés ne sont pas visités.

> [!WARNING]
> Les modifications concurrentes de ce type conduisent souvent à du code difficile à comprendre et sont généralement à éviter (sauf cas particuliers).

Les exemples suivants utilisent la méthode `forEach`, mais les autres méthodes qui parcourent les indices dans l'ordre croissant fonctionnent de la même manière. Nous allons d'abord définir une fonction utilitaire&nbsp;:

```js
function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
}
```

La modification d'indices pas encore visités sera visible une fois l'indice atteint&nbsp;:

```js
testSideEffect((arr, index) => {
  if (index + 1 < arr.length) arr[index + 1] += "*";
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2*, e3, e4], index: 1, elem: e2*
// array: [e1, e2*, e3*, e4], index: 2, elem: e3*
// array: [e1, e2*, e3*, e4*], index: 3, elem: e4*
// Final array: [e1, e2*, e3*, e4*]
```

La modification d'indices déjà visités ne change pas le comportement de l'itération, même si le tableau sera différent après&nbsp;:

```js
testSideEffect((arr, index) => {
  if (index > 0) arr[index - 1] += "*";
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1*, e2, e3, e4], index: 2, elem: e3
// array: [e1*, e2*, e3, e4], index: 3, elem: e4
// Final array: [e1*, e2*, e3*, e4]
```

L'insertion de _n_ éléments à des indices non encore visités et inférieurs à la longueur initiale du tableau les fera être visités. Les _n_ derniers éléments du tableau d'origine qui ont maintenant un indice supérieur à la longueur initiale ne seront pas visités&nbsp;:

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 0, "new");
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, new, e3, e4], index: 2, elem: new
// array: [e1, e2, new, e3, e4], index: 3, elem: e3
// Final array: [e1, e2, new, e3, e4]
// e4 n'est pas visité car il a maintenant l'indice 4
```

L'insertion de _n_ éléments à un indice supérieur à la longueur initiale du tableau ne les fera pas être visités&nbsp;:

```js
testSideEffect((arr) => arr.push("new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4, new], index: 1, elem: e2
// array: [e1, e2, e3, e4, new, new], index: 2, elem: e3
// array: [e1, e2, e3, e4, new, new, new], index: 3, elem: e4
// Tableau final : [e1, e2, e3, e4, new, new, new, new]
```

L'insertion de _n_ éléments à des indices déjà visités ne les fera pas être visités, mais décale les éléments restants de _n_ vers l'arrière, donc l'indice courant et les _n - 1_ éléments précédents sont visités à nouveau&nbsp;:

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [new, e1, e2, e3, e4], index: 1, elem: e1
// array: [new, new, e1, e2, e3, e4], index: 2, elem: e1
// array: [new, new, new, e1, e2, e3, e4], index: 3, elem: e1
// Tableau final : [new, new, new, new, e1, e2, e3, e4]
// e1 continue d'être visité car il est continuellement décalé vers l'arrière
```

La suppression de _n_ éléments à des indices non encore visités fait qu'ils ne seront plus visités. Comme le tableau a rétréci, les _n_ dernières itérations visiteront des indices hors limites. Si la méthode ignore les indices inexistants (voir [méthodes de tableau et trous](#méthodes_de_tableau_et_emplacements_vides)), les \_n\* dernières itérations seront ignorées&nbsp;; sinon, elles recevront `undefined`&nbsp;:

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 1);
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, e4], index: 2, elem: e4
// Tableau final : [e1, e2, e4]
// Ne visite pas l'indice 3 car il est hors limites

// À comparer avec find(), qui traite les indices inexistants comme undefined :
const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
  if (index === 1) arr.splice(2, 1);
  return false;
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, e4], index: 2, elem: e4
// array: [e1, e2, e4], index: 3, elem: undefined
```

La suppression de _n_ éléments à des indices déjà visités ne change pas le fait qu'ils ont été visités avant d'être supprimés. Comme le tableau a rétréci, les _n_ éléments suivants après l'indice courant sont ignorés. Si la méthode ignore les indices inexistants, les _n_ dernières itérations seront ignorées&nbsp;; sinon, elles recevront `undefined`&nbsp;:

```js
testSideEffect((arr, index) => arr.splice(index, 1));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// Ne visite pas e2 car e2 a maintenant l'indice 0, déjà visité
// array: [e2, e3, e4], index: 1, elem: e3
// Ne visite pas e4 car e4 a maintenant l'indice 1, déjà visité
// Tableau final : [e2, e4]
// L'indice 2 est hors limites, donc non visité

// À comparer avec find(), qui traite les indices inexistants comme undefined :
const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
  arr.splice(index, 1);
  return false;
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e2, e3, e4], index: 1, elem: e3
// array: [e2, e4], index: 2, elem: undefined
// array: [e2, e4], index: 3, elem: undefined
```

Pour les méthodes qui itèrent dans l'ordre décroissant des indices, l'insertion provoque le saut d'éléments et la suppression fait que certains éléments sont visités plusieurs fois. Modifiez le code ci-dessus pour observer les effets.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
