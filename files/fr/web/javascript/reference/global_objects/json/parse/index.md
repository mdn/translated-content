---
title: "JSON : méthode statique parse()"
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`JSON.parse()`** analyse une chaîne de caractères JSON et construit la valeur ou l'objet JavaScript décrit par cette chaîne de caractères. Une fonction <i lang="en">reviver</i> optionnelle peut être fournie pour effectuer une transformation sur l'objet obtenu avant qu'il ne soit retourné.

{{InteractiveExample("Démonstration JavaScript&nbsp;: JSON.parse()")}}

```js interactive-example
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Résultat attendu : 42

console.log(obj.result);
// Résultat attendu : true
```

## Syntaxe

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Paramètres

- `text`
  - : La chaîne de caractères à analyser comme du JSON. Voir l'objet {{JSxRef("JSON")}} pour une description de la syntaxe JSON.
- `reviver` {{Optional_Inline}}
  - : Si c'est une fonction, elle définit comment chaque valeur produite par l'analyse est transformée avant d'être retournée. Les valeurs non appelables sont ignorées. La fonction est appelée avec les arguments suivants&nbsp;:
    - `key`
      - : La clé associée à la valeur.
    - `value`
      - : La valeur produite par l'analyse.
    - `context` {{Optional_Inline}}
      - : Un objet contexte qui contient l'état pertinent pour l'expression en cours de restauration. C'est un nouvel objet à chaque appel de la fonction <i lang="en">reviver</i>. Il n'est transmis que lors de la restauration de valeurs primitives, mais pas lorsque `value` est un objet ou un tableau. Il contient la propriété suivante&nbsp;:
        - `source`
          - : La chaîne de caractères JSON d'origine représentant cette valeur.

### Valeur de retour

L'objet ({{JSxRef("Object")}}), le tableau ({{JSxRef("Array")}}), la chaîne de caractères, le nombre, le booléen ou la valeur `null` correspondant au `text` JSON fourni.

### Exceptions

- {{JSxRef("SyntaxError")}}
  - : Levée si la chaîne de caractères à analyser ne contient pas du JSON valide.

## Description

`JSON.parse()` analyse une chaîne de caractères JSON selon la [grammaire JSON](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON#grammaire_complète_de_json), puis évalue la chaîne comme s'il s'agissait d'une expression JavaScript. La seule situation où un texte JSON représente une valeur différente de la même expression JavaScript concerne la clé `"__proto__"` — voir [Syntaxe des littéraux d'objet et JSON](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#notation_littérale_et_json).

### Le paramètre `reviver`

Si un `reviver` est défini, la valeur obtenue par l'analyse est _transformée_ avant d'être retournée. Plus précisément, la valeur calculée et toutes ses propriétés (selon un [parcours en profondeur <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Depth-first_search), en commençant par les propriétés les plus imbriquées et en remontant jusqu'à la valeur d'origine) sont passées individuellement au `reviver`.

Le `reviver` est appelé avec l'objet contenant la propriété en cours de traitement comme valeur de `this` (sauf si vous définissez le `reviver` comme une fonction fléchée, auquel cas il n'y a pas de liaison distincte de `this`) et deux arguments&nbsp;: `key` et `value`, représentant respectivement le nom de la propriété sous forme de chaîne de caractères (même pour les tableaux) et la valeur de la propriété. Pour les valeurs primitives, un paramètre supplémentaire `context` est transmis, qui contient le texte source de cette valeur. Si la fonction `reviver` retourne {{JSxRef("undefined")}} (ou ne retourne aucune valeur — par exemple si l'exécution s'arrête à la fin de la fonction), la propriété est supprimée de l'objet. Sinon, la propriété est redéfinie avec la valeur retournée. Si le `reviver` ne transforme que certaines valeurs et pas d'autres, assurez-vous de retourner toutes les valeurs non transformées telles quelles — sinon, elles seront supprimées de l'objet obtenu.

De façon similaire au paramètre `replacer` de {{JSxRef("JSON.stringify()")}}, pour les tableaux et objets, `reviver` sera appelé en dernier sur la valeur racine avec une chaîne de caractères vide comme `key` et l'objet racine comme `value`. Pour les autres valeurs JSON valides, `reviver` fonctionne de façon similaire et est appelé une fois avec une chaîne de caractères vide comme `key` et la valeur elle-même comme `value`.

Si vous retournez une autre valeur depuis `reviver`, cette valeur remplacera complètement la valeur analysée à l'origine. Cela s'applique même à la valeur racine. Par exemple&nbsp;:

```js
const transformedObj = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj); // undefined
```

Il n'existe aucun moyen de contourner cela de façon générique. Vous ne pouvez pas traiter spécifiquement le cas où `key` est une chaîne de caractères vide, car les objets JSON peuvent aussi contenir des clés qui sont des chaînes de caractères vides. Vous devez savoir très précisément quel type de transformation est nécessaire pour chaque clé lors de l'implémentation du `reviver`.

Notez que `reviver` est exécuté après l'analyse de la valeur. Par exemple, les nombres dans le texte JSON auront déjà été convertis en nombres JavaScript, et peuvent perdre en précision lors du processus. Une façon de transférer de grands nombres sans perte de précision est de les sérialiser en tant que chaînes de caractères, puis de les restaurer en [des `BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt), ou dans d'autres formats à précision arbitraire appropriés.

Vous pouvez également utiliser la propriété `context.source` pour accéder au texte source JSON d'origine représentant la valeur, comme illustré ci-dessous&nbsp;:

```js
const bigJSON = '{"gross_gdp": 12345678901234567890}';
const bigObj = JSON.parse(bigJSON, (key, value, context) => {
  if (key === "gross_gdp") {
    // Ignorer la valeur car elle a déjà perdu en précision
    return BigInt(context.source);
  }
  return value;
});
```

## Exemples

### Utiliser la méthode `parse()`

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Utiliser le paramètre `reviver`

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // retourner value * 2 pour les nombres
      : value, // retourner tout le reste inchangé
);
// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### Utiliser `reviver` avec le `replacer` de {{JSxRef("JSON.stringify()")}}

Pour qu'une valeur puisse être correctement sérialisée puis désérialisée (c'est-à-dire qu'elle soit désérialisée en le même objet d'origine), le processus de sérialisation doit préserver les informations de type. Par exemple, vous pouvez utiliser le paramètre `replacer` de {{JSxRef("JSON.stringify()")}} à cet effet&nbsp;:

```js
// Les Map sont normalement sérialisées comme des objets sans propriétés.
// Nous pouvons utiliser le paramètre replacer pour définir les entrées à sérialiser.
const map = new Map([
  [1, "un"],
  [2, "deux"],
  [3, "trois"],
]);

const jsonText = JSON.stringify(map, (key, value) =>
  value instanceof Map ? Array.from(value.entries()) : value,
);

console.log(jsonText);
// [[1,"un"],[2,"deux"],[3,"trois"]]

const map2 = JSON.parse(jsonText, (key, value) =>
  Array.isArray(value) && value.every(Array.isArray) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "un", 2 => "deux", 3 => "trois" }
```

Comme JSON ne possède pas de syntaxe permettant d'annoter les métadonnées de type, pour restaurer des valeurs qui ne sont pas de simples objets, vous devez envisager l'une des solutions suivantes&nbsp;:

- Sérialiser l'objet entier en une chaîne de caractères et le préfixer avec une étiquette de type.
- «&nbsp;Deviner&nbsp;» en fonction de la structure des données (par exemple, un tableau de tableaux à deux éléments)
- Si la structure de la charge utile est fixe, se baser sur le nom de la propriété (par exemple, toutes les propriétés nommées `registry` contiennent des objets `Map`).

### JSON illégal

Lorsque `JSON.parse` reçoit une chaîne de caractères qui ne respecte pas la grammaire JSON, il lève une exception `SyntaxError`.

Les tableaux et objets ne peuvent pas avoir de [virgules finales](/fr/docs/Web/JavaScript/Reference/Trailing_commas) en JSON&nbsp;:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

Les chaînes de caractères JSON doivent être délimitées par des guillemets doubles (et pas simples)&nbsp;:

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

Si vous écrivez du JSON à l'intérieur d'une chaîne de caractères littérale JavaScript, vous devez soit utiliser des guillemets simples pour délimiter la chaîne de caractères JavaScript, soit échapper les guillemets doubles qui délimitent la chaîne de caractères JSON&nbsp;:

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("JSON.stringify()")}}
