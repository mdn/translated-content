---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/@@iterator
original_slug: Web/JavaScript/Reference/Objets_globaux/String/@@iterator
---
{{JSRef}}

La méthode **`[@@iterator]()`** renvoie un nouvel objet [`Iterator`](/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator) qui itère sur les points de code (codets) d'une chaîne de caractères, en renvoyant chaque point de code sous forme d'une chaîne de caractères.

{{EmbedInteractiveExample("pages/js/string-iterator.html")}}

## Syntaxe

    chaîneDeCaractères[Symbol.iterator]

### Valeur de retour

Un nouvel objet `Iterator`.

## Exemples

### Utiliser `[@@iterator]()`

```js
var chaîne = "A\uD835\uDC68";

var chaîneIter = chaîne[Symbol.iterator]();

console.log(chaîneIter.next().value); // "A"
console.log(chaîneIter.next().value); // "\uD835\uDC68"
```

### Utiliser `[@@iterator]()` avec une boucle `for..of`

```js
var chaine = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (var c of chaine) {
  console.log(c);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-string.prototype-@@iterator', 'String.prototype[@@iterator]()')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-string.prototype-@@iterator', 'String.prototype[@@iterator]()')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.@@iterator")}}

## Voir aussi

- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
