---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
---

{{JSRef}}

La méthode **`JSON.parse()`** analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne. On peut éventuellement utiliser cette fonction avec un paramètre de modification permettant de traiter l'objet avant qu'il soit renvoyé.

{{InteractiveExample("JavaScript Demo: JSON.parse()")}}

```js interactive-example
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
```

## Syntaxe

```js
JSON.parse(texte[, reviver])
```

### Paramètres

- `texte`
  - : La chaine de caractère à analyser comme du JSON. Voir l'objet {{jsxref("JSON")}} pour une description de la syntaxe JSON.
- `reviver`
  - : Si l'argument est une fonction, effectue une opération de transformation sur la valeur analysée avant de la renvoyer.

### Valeur de retour

Un objet ({{jsxref("Object")}}) correspondant au texte envoyé.

### Exceptions

Lève une exception {{jsxref("SyntaxError")}} si la chaine de caractère à analyser ne contient pas du JSON valide.

## Exemples

### Utiliser `JSON.parse()`

```js
try {
  JSON.parse("{}"); // {}
  JSON.parse("true"); // true
  JSON.parse('"toto"'); // "toto"
  JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
  JSON.parse("null"); // null
} catch (e) {
  console.error("Parsing error:", e);
}
```

### Utiliser le paramètre `reviver`

Si un _reviver_ est spécifié, la valeur obtenue par l'analyse est transformée avant d'être renvoyée. Plus précisément, la valeur calculée, et toutes les propriétés (commençant avec les propriétés les plus imbriquées), sont passées individuellement au _reviver_, qui est appelé avec : l'objet contenant la propriété en cours de traitement, le nom de la propriété en chaine de caractères et la valeur de la propriété. Si la fonction _reviver_ retourne {{jsxref("undefined")}} (ou ne retourne aucune valeur, par exemple si l'exécution s'arrête à la fin de la fonction), la propriété est supprimée de l'objet. Autrement la propriété est redéfinie avec la valeur retournée.

Si le _reviver_ ne transforme que certaines valeurs et pas d'autres, assurez-vous que les valeurs inchangées soient renvoyées telles quelles. En effet, si elles ne sont pas renvoyées, elles seront supprimés sur l'objet obtenu !

```js
JSON.parse('{"p": 5}', (key, value) => {
  if (typeof value === "number") {
    return value * 2; // renvoie value * 2 pour les nombres
  }
  return value; // pour le reste, la valeur est inchangée
});

// { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // on affiche le nom de la propriété dans la console
  return value; // et on renvoie la valeur inchangée.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `JSON.parse()` n'accepte pas les virgules en fin de tableau

```js example-bad
// les deux instructions qui suivent lèveront une SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{ "toto" : 1, }');
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("JSON.stringify()")}}
