---
title: Constructeur String()
short-title: String()
slug: Web/JavaScript/Reference/Global_Objects/String/String
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`String()`** crée des objets {{JSxRef("String")}}. Lorsqu'il est appelé comme une fonction, il retourne des valeurs primitives de type chaîne de caractères.

## Syntaxe

```js-nolint
new String(thing)
String(thing)
```

> [!NOTE]
> `String()` peut être appelé avec ou sans {{JSxRef("new")}}, mais avec des effets différents. Voir [Valeur de retour](#valeur_de_retour).

### Paramètres

- `thing`
  - : N'importe quelle valeur qui peut être convertie en une chaîne de caractères.

### Valeur de retour

Lorsque `String()` est appelé comme une fonction (sans {{JSxRef("new")}}), il retourne `value` [converti en une chaîne de caractères primitive](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères). Plus particulièrement, les valeurs de [Symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) sont converties en `"Symbol(description)"`, où `description` est la [description](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) du Symbol, au lieu de générer une erreur.

Lorsque `String()` est appelé comme un constructeur (avec `new`), il convertit `value` en une chaîne de caractères primitive (sans traitement spécial des Symbol) et retourne un objet enveloppant {{JSxRef("String")}}, qui n'est **pas** une valeur primitive.

> [!WARNING]
> Vous devez rarement vous trouver à utiliser `String` comme constructeur.

## Exemples

### Le constructeur `String()` et la fonction `String()`

La fonction `String()` et le constructeur `String()` produisent des résultats différents&nbsp;:

```js
const a = new String("Bonjour le monde"); // a === "Bonjour le monde" est false
const b = String("Bonjour le monde"); // b === "Bonjour le monde" est true
b instanceof String; // est true
b instanceof String; // est false
typeof a; // "object"
typeof b; // "string"
```

Ici, la fonction produit une chaîne de caractères (le type {{Glossary("primitive", "primitif")}}) comme prévu.
Cependant, le constructeur produit une instance du type chaîne de caractères (un objet enveloppant) et c'est pourquoi vous voulez rarement utiliser le constructeur `String()`.

### Utiliser `String()` pour convertir un symbole en chaîne de caractères

`String()` est le seul cas où un symbole peut être converti en chaîne de caractères sans générer d'erreur, car c'est très explicite.

```js example-bad
const sym = Symbol("exemple");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```

```js example-good
const sym = Symbol("exemple");
String(sym); // "Symbol(exemple)"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des nombres et des chaînes de caractères](/fr/docs/Web/JavaScript/Guide/Numbers_and_strings)
