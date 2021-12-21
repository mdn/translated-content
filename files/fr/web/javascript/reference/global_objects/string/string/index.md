---
title: Constructeur String()
slug: Web/JavaScript/Reference/Global_Objects/String/String
translation_of: Web/JavaScript/Reference/Global_Objects/String/String
browser-compat: javascript.builtins.String.String
---
{{JSRef}}

Le constructeur **`String`** est utilisé afin de créer un nouvel objet [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente une chaîne de caractères. Lorsqu'il est appelé comme une fonction (et pas comme un constructeur, c'est-à-dire sans être précédé du mot-clé `new`), il effectue une conversion de la valeur fournie en argument en une chaîne de caractères primitive, ce qui peut être plus utile.

## Syntaxe

```js
new String(truc)
String(truc)
```

### Paramètres

- `truc`
  - : N'importe quelle valeur qui peut être convertie en une chaîne de caractères.

## Exemples 

### Distinction entre le constructeur `String()` et la fonction `String()`

Selon qu'on utilise `String()` comme une fonction ou comme un constructeur, cela produira différents résultats&nbsp;:

```js
typeof String('Coucou monde'); // string
typeof new String('Coucou monde'); // object
```

Ici, la fonction produit une chaîne de caractères (une valeur primitive). Toutefois, le constructeur produit une instance objet de `String`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'article sur le formatage du texte dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Text_formatting)
