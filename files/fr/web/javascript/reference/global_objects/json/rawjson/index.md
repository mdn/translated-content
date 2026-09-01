---
title: "JSON : méthode statique rawJSON()"
short-title: rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`JSON.rawJSON()`** crée un objet «&nbsp;raw JSON&nbsp;» contenant un fragment de texte JSON. Lorsqu'il est sérialisé en JSON, l'objet JSON brut est traité comme s'il était déjà du texte JSON. Ce texte doit être un JSON valide.

## Syntaxe

```js-nolint
JSON.rawJSON(string)
```

### Paramètres

- `string`
  - : Le texte JSON. Doit être un JSON valide **représentant une valeur primitive**.

### Valeur de retour

Un objet qui peut être utilisé pour créer du texte JSON ayant exactement le même contenu que la `string` fournie, sans guillemets autour de la chaîne elle‑même. Cet objet possède un [prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#prototypes_dobjets_null) et [est figé](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) (il ne sera donc jamais sérialisé accidentellement en objet ordinaire par une conversion primitive), et il expose la propriété suivante&nbsp;:

- `rawJSON`
  - : La chaîne de caractères (`string`) JSON d'origine fournie.

De plus, il possède un [champ privé](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements) qui le marque comme un objet JSON brut. Cela permet à {{JSxRef("JSON.stringify()")}} et {{JSxRef("JSON.isRawJSON()")}} de l'identifier.

### Exceptions

- {{JSxRef("SyntaxError")}}
  - : Levée si la chaîne de caractères (`string`) n'est pas un JSON valide, ou si elle représente un objet ou un tableau.

## Description

Un objet JSON brut peut être vu comme une structure de données atomique et immuable, similaire à n'importe quel type de [primitif](/fr/docs/Web/JavaScript/Guide/Data_structures#les_valeurs_primitives). Ce n'est pas un objet ordinaire et il ne contient aucune donnée autre que le texte JSON brut. Il sert à «&nbsp;pré‑sérialiser&nbsp;» des données vers des formats que `JSON.stringify` ne peut pas produire lui‑même pour diverses raisons. Le cas d'usage le plus typique est la perte de précision liée aux nombres à virgule flottante. Par exemple&nbsp;:

```js
JSON.stringify({ valeur: 12345678901234567890 });
// {"valeur":12345678901234567000}
```

La valeur n'est plus exactement équivalente au nombre d'origine&nbsp;! En JavaScript, les nombres utilisent une représentation en virgule flottante et ne peuvent donc pas représenter tous les entiers exactement. Le littéral numérique `12345678901234567890` est déjà arrondi au nombre représentable le plus proche lorsqu'il est analysé par JavaScript.

Sans `JSON.rawJSON`, il est impossible d'indiquer à `JSON.stringify` de produire le littéral numérique `12345678901234567890`, car il n'existe tout simplement aucune valeur numérique JavaScript correspondante. Avec JSON brut, vous pouvez indiquer directement à `JSON.stringify()` comment une valeur particulière doit être sérialisée&nbsp;:

```js
const jsonBrut = JSON.rawJSON("12345678901234567890");
JSON.stringify({ valeur: jsonBrut });
// {"valeur":12345678901234567890}
```

Pour un exemple plus complet, voir [Sérialisation de nombres sans perte](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON#sérialisation_des_nombres_sans_perte).

Notez que bien que nous ayons passé une chaîne de caractères à `JSON.rawJSON()`, elle devient tout de même un nombre dans le JSON final. Cela s'explique parce que la chaîne de caractères représente le texte JSON littéral. Si vous souhaitez sérialiser une chaîne de caractères, vous devez utiliser `JSON.rawJSON()` avec une valeur de chaîne entourée de guillemets&nbsp;:

```js
const jsonBrut = JSON.rawJSON('"Bonjour le monde"');
JSON.stringify({ valeur: jsonBrut });
// {"valeur":"Bonjour le monde"}
```

`JSON.rawJSON` vous permet d'insérer du texte JSON arbitraire, mais ne vous autorise pas à créer du JSON invalide. Tout ce qui n'est pas permis par la syntaxe JSON n'est pas non plus permis par `JSON.rawJSON()`&nbsp;:

```js example-bad
const jsonBrut = JSON.rawJSON('"Bonjour\nle monde"'); // Syntax error, because line breaks are not allowed in JSON strings
```

De plus, vous ne pouvez pas utiliser `JSON.rawJSON()` pour créer des objets ou des tableaux JSON.

## Exemples

### Utiliser `JSON.rawJSON()` pour créer des expressions JSON de différents types

```js
const nombreJSON = JSON.rawJSON("123");
const chaineJSON = JSON.rawJSON('"Bonjour le monde"');
const booleenJSON = JSON.rawJSON("true");
const nullJSON = JSON.rawJSON("null");

console.log(
  JSON.stringify({
    age: nombreJSON,
    message: chaineJSON,
    estActif: booleenJSON,
    rien: nullJSON,
  }),
);

// {"age":123,"message":"Bonjour le monde","estActif":true,"rien":null}
```

Cependant, vous ne pouvez pas utiliser `JSON.rawJSON()` pour créer des objets ou des tableaux JSON&nbsp;:

```js example-bad
const tableauJSON = JSON.rawJSON("[1, 2, 3]");
const objetJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### Utiliser `JSON.rawJSON()` pour créer des littéraux de chaîne de caractères échappés

À part les nombres, il n'existe qu'un seul autre type qui n'a pas de correspondance un-à-un entre les valeurs JavaScript et le texte JSON&nbsp;: les chaînes de caractères. Lorsque les chaînes de caractères sont sérialisées en JSON, tous les points de code, à l'exception de ceux qui ne sont pas légaux à l'intérieur des littéraux de chaîne de caractères JSON (comme les sauts de ligne), sont imprimés littéralement&nbsp;:

```js
console.log(JSON.stringify({ valeur: "\ud83d\ude04" })); // {"valeur":"😄"}
```

Cela peut ne pas être souhaitable, car le récepteur de cette chaîne peut gérer Unicode différemment. Pour améliorer l'interopérabilité, vous pouvez définir explicitement la chaîne de caractères à sérialiser avec des séquences d'échappement&nbsp;:

```js
const jsonBrut = JSON.rawJSON('"\\ud83d\\ude04"');
const chaineEnObjet = JSON.stringify({ valeur: jsonBrut });
console.log(chaineEnObjet); // {"valeur":"\ud83d\ude04"}
console.log(JSON.parse(chaineEnObjet).valeur); // 😄
```

Notez que les doubles barres obliques dans `rawJSON` représentent en réalité un seul caractère slash.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `JSON.rawJSON` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- L'objet natif {{JSxRef("JSON")}}
- La méthode {{JSxRef("JSON.isRawJSON()")}}
- La méthode {{JSxRef("JSON.stringify()")}}
