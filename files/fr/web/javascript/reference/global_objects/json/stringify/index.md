---
title: "JSON : méthode statique stringify()"
short-title: stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`JSON.stringify()`** convertit une valeur JavaScript en une chaîne de caractères JSON, en remplaçant éventuellement des valeurs si une fonction de remplacement est définie ou en incluant éventuellement uniquement les propriétés définies si un tableau de remplacement est défini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: JSON.stringify()")}}

```js interactive-example
console.log(JSON.stringify({ x: 5, y: 6 }));
// Résultat attendu : '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)]),
);
// Résultat attendu : '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// Résultat attendu : '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Résultat attendu : '"2006-01-02T15:04:05.000Z"'
```

## Syntaxe

```js-nolint
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### Paramètres

- `value`
  - : La valeur à convertir en chaîne de caractères JSON.
- `replacer` {{Optional_Inline}}
  - : Une fonction qui modifie le comportement du processus de transformation, ou un tableau de chaînes de caractères et de nombres qui définit les propriétés de `value` à inclure dans le résultat. Si `replacer` est un tableau, tous les éléments de ce tableau qui ne sont pas des chaînes de caractères ou des nombres (qu'ils soient primitifs ou objets enveloppants), y compris les valeurs {{JSxRef("Symbol")}}, sont complètement ignorés. Si `replacer` n'est ni une fonction ni un tableau (par exemple, [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) ou non fourni), toutes les propriétés de l'objet dont la clé est une chaîne de caractères sont incluses dans la chaîne de caractères JSON résultante.
- `space` {{Optional_Inline}}
  - : Une chaîne de caractères ou un nombre utilisé pour insérer des espaces (y compris l'indentation, les caractères de saut de ligne, etc.) dans la chaîne de caractères JSON produite afin d'en faciliter la lecture.

    Si c'est un nombre, il indique le nombre d'espaces à utiliser pour l'indentation, limité à 10 (c'est-à-dire que toute valeur supérieure à `10` est traitée comme si elle était `10`). Les valeurs inférieures à 1 signifient qu'aucun espace ne sera utilisé.

    Si c'est une chaîne de caractères, la chaîne de caractères (ou les 10 premiers caractères de la chaîne de caractères, si elle est plus longue) est insérée avant chaque objet ou tableau imbriqué.

    Si `space` n'est ni une chaîne de caractères ni un nombre (qu'il s'agisse d'un primitif ou d'un objet enveloppant) — par exemple, [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) ou non fourni — aucun espace n'est utilisé.

### Valeur de retour

Une chaîne de caractères JSON qui représente la valeur indiquée.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `value` contient une référence circulaire.
    - Une valeur {{JSxRef("BigInt")}} est rencontrée.

## Description

`JSON.stringify()` convertit une valeur en la notation JSON que cette valeur représente. Les valeurs sont converties en chaîne de caractères de la manière suivante&nbsp;:

- Les objets {{JSxRef("Boolean")}}, {{JSxRef("Number")}}, {{JSxRef("String")}} et {{JSxRef("BigInt")}} (obtenus avec [`Object()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) sont convertis en leur valeur primitive correspondante lors de la conversion, conformément à la sémantique de conversion traditionnelle. Les objets {{JSxRef("Symbol")}} (obtenus avec [`Object()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) sont traités comme de simples objets.
- Tenter de sérialiser des valeurs {{JSxRef("BigInt")}} lèvera une exception. Cependant, si le BigInt possède une méthode `toJSON()` (par modification dynamique&nbsp;: `BigInt.prototype.toJSON = ...`), cette méthode peut fournir le résultat de la sérialisation. Cette contrainte garantit qu'un comportement de sérialisation approprié (et, très probablement, sa désérialisation associée) est toujours explicitement fourni par l'utilisateur·ice.
- Les valeurs {{JSxRef("undefined")}}, {{JSxRef("Function")}} et {{JSxRef("Symbol")}} ne sont pas des valeurs JSON valides. Si de telles valeurs sont rencontrées lors de la conversion, elles sont soit omises (lorsqu'elles se trouvent dans un objet), soit transformées en [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) (lorsqu'elles se trouvent dans un tableau). `JSON.stringify()` peut retourner `undefined` lorsqu'on lui passe des valeurs «&nbsp;pures&nbsp;» comme `JSON.stringify(() => {})` ou `JSON.stringify(undefined)`.
- Les nombres {{JSxRef("Infinity")}} et {{JSxRef("NaN")}}, ainsi que la valeur [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null), sont tous considérés comme `null`. (Mais contrairement aux valeurs du point précédent, elles ne seront jamais omises.)
- Les tableaux sont sérialisés comme des tableaux (délimités par des crochets). Seuls les indices de 0 à `length - 1` (inclus) sont sérialisés&nbsp;; les autres propriétés sont ignorées.
- L'objet JSON brut spécial créé avec {{JSxRef("JSON.rawJSON()")}} est sérialisé comme le texte JSON brut qu'il contient (en accédant à sa propriété `rawJSON`).
- Pour les autres objets&nbsp;:
  - Toutes les propriétés dont la clé est un {{JSxRef("Symbol")}} seront complètement ignorées, même lors de l'utilisation du paramètre [`replacer`](#le_paramètres_replacer).

  - Si la valeur possède une méthode `toJSON()`, c'est à elle de définir quelles données seront sérialisées. Au lieu de sérialiser l'objet, la valeur retournée par la méthode `toJSON()` lors de son appel sera sérialisée. `JSON.stringify()` appelle `toJSON` avec un paramètre, `key`, qui a la même sémantique que le paramètre `key` de la fonction [`replacer`](#le_paramètres_replacer)&nbsp;:
    - si cet objet est une valeur de propriété, le nom de la propriété
    - s'il est dans un tableau, l'indice dans le tableau, sous forme de chaîne de caractères
    - si `JSON.stringify()` a été appelé directement sur cet objet, une chaîne vide

    Tous les objets {{JSxRef("Temporal")}} implémentent la méthode `toJSON()`, qui retourne une chaîne de caractères (identique à l'appel de `toString()`). Ainsi, ils seront sérialisés comme des chaînes de caractères. De même, les objets {{JSxRef("Date")}} implémentent `toJSON()`, qui retourne la même chose que [`toISOString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).

  - Seules les [propriétés propres énumérables](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) sont parcourues. Cela signifie que {{JSxRef("Map")}}, {{JSxRef("Set")}}, etc. deviendront `"{}"`. Vous pouvez utiliser le paramètre [`replacer`](#le_paramètres_replacer) pour les sérialiser de manière plus utile.

    Les propriétés sont parcourues en utilisant le même algorithme que [`Object.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), qui a un ordre bien défini et stable entre les implémentations. Par exemple, `JSON.stringify` sur le même objet produira toujours la même chaîne de caractères, et `JSON.parse(JSON.stringify(obj))` produira un objet avec le même ordre de clés que l'original (à condition que l'objet soit entièrement sérialisable en JSON).

### Le paramètre `replacer`

Le paramètre `replacer` peut être soit une fonction, soit un tableau.

S'il s'agit d'un tableau, ses éléments indiquent les noms des propriétés de l'objet à inclure dans la chaîne de caractères JSON résultante. Seules les valeurs de type chaînes de caractères et nombres sont prises en compte&nbsp;; les clés de type symbole sont ignorées.

S'il s'agit d'une fonction, elle prend deux paramètres&nbsp;: la clé (`key`) et la valeur (`value`) à convertir en chaîne de caractères. L'objet dans lequel la clé a été trouvée est fourni comme contexte `this` de la fonction `replacer`.

La fonction `replacer` est également appelée pour l'objet initial à convertir, auquel cas la clé (`key`) est une chaîne vide (`""`). Elle est ensuite appelée pour chaque propriété de l'objet ou du tableau à convertir. Les indices de tableau seront fournis sous forme de chaîne de caractères comme `key`. La valeur de la propriété courante sera remplacée par la valeur de retour de la fonction `replacer` pour la conversion en chaîne de caractères. Cela signifie&nbsp;:

- Si vous retournez un nombre, une chaîne de caractères, un booléen ou `null`, cette valeur est directement sérialisée et utilisée comme valeur de la propriété. (Retourner un `BigInt` lèvera également une exception.)
- Si vous retournez une {{JSxRef("Function")}}, un {{JSxRef("Symbol")}} ou {{JSxRef("undefined")}}, la propriété n'est pas incluse dans le résultat.
- Si vous retournez un autre objet, l'objet est converti récursivement en chaîne de caractères, en appelant la fonction `replacer` sur chaque propriété.

> [!NOTE]
> Lors de l'analyse du JSON généré avec des fonctions `replacer`, vous souhaiterez probablement utiliser le paramètre [`reviver`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#utiliser_le_paramètre_reviver) pour effectuer l'opération inverse.

En général, l'indice des éléments du tableau ne changera jamais (même si l'élément est une valeur invalide comme une fonction, il deviendra `null` au lieu d'être omis). Utiliser la fonction `replacer` vous permet de contrôler l'ordre des éléments du tableau en retournant un tableau différent.

### Le paramètre `space`

Le paramètre `space` peut être utilisé pour contrôler les espacements dans la chaîne de caractères finale.

- S'il s'agit d'un nombre, chaque niveau d'imbrication dans la conversion aura autant d'espaces que ce nombre.
- S'il s'agit d'une chaîne de caractères, chaque niveau d'imbrication sera indenté avec cette chaîne de caractères.

Chaque niveau d'indentation ne dépassera jamais 10. Les valeurs numériques de `space` sont limitées à 10, et les chaînes de caractères sont tronquées à 10 caractères.

## Exemples

### Utiliser la méthode `stringify()`

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("toto"); // '"toto"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5));
// '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// Les éléments de tableau dont la clé est une chaîne de caractères ne sont pas énumérables et n'ont pas de sens en JSON
const a = ["toto", "truc"];
a["tata"] = "quux"; // a: [ 0: 'toto', 1: 'truc', tata: 'quux' ]
JSON.stringify(a);
// '["toto","truc"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Structures de données classiques
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// Symbols :
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("toto")]: "toto" });
// '{}'
JSON.stringify({ [Symbol.for("toto")]: "toto" }, [Symbol.for("toto")]);
// '{}'
JSON.stringify({ [Symbol.for("toto")]: "toto" }, (k, v) => {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// undefined

// Propriétés non énumérables :
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'

// Erreur levée pour les valeurs BigInt
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

### Utiliser une fonction comme `replacer`

```js
function replacer(key, value) {
  // Filtrage des propriétés
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const toto = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(toto, replacer);
// '{"week":45,"month":7}'
```

Si vous souhaitez que le `replacer` distingue l'objet initial d'une propriété dont la clé est une chaîne de caractères vide (puisque les deux donneraient la chaîne vide comme clé et potentiellement un objet comme valeur), vous devrez suivre le nombre d'itérations (si celui-ci dépasse la première itération, il s'agit d'une véritable clé vide).

```js
function makeReplacer() {
  let isInitial = true;

  return (key, value) => {
    if (isInitial) {
      isInitial = false;
      return value;
    }
    if (key === "") {
      // Omet toutes les propriétés dont le nom est "" (sauf l'objet initial)
      return undefined;
    }
    return value;
  };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"
```

### Utiliser un tableau comme `replacer`

```js
const toto = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(toto, ["week", "month"]);
// '{"week":45,"month":7}', ne conserve que les propriétés "week" et "month"
```

### Utiliser le paramètre `space`

Indenter la sortie avec un espace&nbsp;:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Utiliser un caractère de tabulation imite l'apparence standard de l'impression soignée&nbsp;:

<!-- markdownlint-disable MD010 -->

```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
/*
{
	"uno": 1,
	"dos": 2
}
*/
```

<!-- markdownlint-enable MD010 -->

### Comportement de `toJSON()`

Définir `toJSON()` pour un objet permet de remplacer son comportement de sérialisation.

```js
const obj = {
  data: "data",

  toJSON(key) {
    return key
      ? `Maintenant je suis un objet imbriqué sous la clé '${key}'`
      : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj });
// '{"obj":"Maintenant je suis un objet imbriqué sous la clé 'obj'"}'

JSON.stringify([obj]);
// '["Maintenant je suis un objet imbriqué sous la clé '0'"]'
```

### Problème de sérialisation des références circulaires

Comme le [format JSON <sup>(angl.)</sup>](https://www.json.org/) ne prend pas en charge les références d'objet (bien qu'un brouillon IETF existe), une erreur {{JSxRef("TypeError")}} sera levée si l'on tente d'encoder un objet contenant des références circulaires.

```js example-bad
const referenceCirculaire = {};
referenceCirculaire.moiMeme = referenceCirculaire;

// La sérialisation des références circulaires lève "TypeError: cyclic object value"
JSON.stringify(referenceCirculaire);
```

Pour sérialiser des références circulaires, vous pouvez utiliser une bibliothèque qui les prend en charge (par exemple, [cycle.js<sup>(angl.)</sup>](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) de Douglas Crockford) ou implémenter vous‑même une solution, ce qui nécessitera de trouver et remplacer (ou supprimer) les références cycliques par des valeurs sérialisables.

Si vous utilisez `JSON.stringify()` pour effectuer une copie profonde d'un objet, vous pouvez préférer utiliser {{DOMxRef("Window.structuredClone", "structuredClone()")}}, qui prend en charge les références circulaires. Les API des moteurs JavaScript pour la sérialisation binaire, telles que [`v8.serialize()`<sup>(angl.)</sup>](https://nodejs.org/api/v8.html#v8serializevalue), prennent également en charge les références circulaires.

### Utiliser `JSON.stringify()` avec `localStorage`

Dans le cas où vous souhaitez stocker un objet créé par votre utilisateur et permettre sa restauration même après la fermeture du navigateur, l'exemple suivant illustre l'utilisation de `JSON.stringify()`&nbsp;:

```js
// Création d'un exemple JSON
const session = {
  ecran: [],
  state: true,
};
session.ecran.push({ nom: "écranA", largeur: 450, hauteur: 250 });
session.ecran.push({ nom: "écranB", largeur: 650, hauteur: 350 });
session.ecran.push({ nom: "écranC", largeur: 750, hauteur: 120 });
session.ecran.push({ nom: "écranD", largeur: 250, hauteur: 60 });
session.ecran.push({ nom: "écranE", largeur: 390, hauteur: 120 });
session.ecran.push({ nom: "écranF", largeur: 1240, hauteur: 650 });

// Conversion de l'objet en chaîne de caractères JSON avec JSON.stringify()
// puis enregistrement dans localStorage sous le nom "session"
localStorage.setItem("session", JSON.stringify(session));

// Exemple montrant comment reconvertir la chaîne de caractères
// générée par JSON.stringify() et stockée dans localStorage en objet JSON
const sessionRestauree = JSON.parse(localStorage.getItem("session"));

// La variable sessionRestauree contient maintenant l'objet qui a été sauvegardé
// dans localStorage
console.log(sessionRestauree);
```

### `JSON.stringify()` correctement formé

Les moteurs implémentant la [spécification JSON.stringify bien formée <sup>(angl.)</sup>](https://github.com/tc39/proposal-well-formed-stringify) convertiront les substituts isolés (tout point de code compris entre U+D800 et U+DFFF) en chaînes de caractères à l'aide de séquences d'échappement Unicode plutôt que littéralement (en produisant des substituts isolés). Avant cette modification, ces chaînes de caractères ne pouvaient pas être encodées en UTF-8 ou UTF-16 valides&nbsp;:

```js
JSON.stringify("\uD800"); // '"�"'
```

Mais avec cette modification, `JSON.stringify()` représente des substituts isolés à l'aide de séquences d'échappement JSON qui peuvent être encodées en UTF-8 ou UTF-16 valides&nbsp;:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Cette modification devrait être rétrocompatible tant que vous transmettez le résultat de `JSON.stringify()` à des API telles que `JSON.parse()` qui acceptent tout texte JSON valide, car elles traiteront les échappements Unicode des surrogats isolés comme identiques aux surrogats isolés eux-mêmes. Ce n'est que si vous interprétez directement le résultat de `JSON.stringify()` que vous devez traiter avec soin les deux encodages possibles de ces points de code par `JSON.stringify()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation du comportement moderne de `JSON.stringify` (symbol, unicode bien formé, JSON brut) dans `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- La méthode {{JSxRef("JSON.parse()")}}
- La méthode {{JSxRef("JSON.rawJSON()")}}
