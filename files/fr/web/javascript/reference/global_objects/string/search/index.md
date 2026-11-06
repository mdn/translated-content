---
title: "String : méthode search()"
short-title: search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`search()`** des valeurs {{JSxRef("String")}} exécute une recherche d'une correspondance avec une expression rationnelle dans cette chaîne de caractères, renvoyant l'indice de la première correspondance.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.search()")}}

```js interactive-example
const paragraph = "Je pense que le chien de Ruth est plus mignon que le tien !";

// N'importe quel caractère sauf mot, espace ou apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Résultat attendu : 41

console.log(paragraph[paragraph.search(regex)]);
// Résultat attendu : "!"
```

## Syntaxe

```js-nolint
search(regexp)
```

### Paramètres

- `regexp`
  - : Un objet représentant une expression rationnelle, ou tout objet ayant une méthode [`Symbol.search`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search).

    Si `regexp` n'est pas un objet `RegExp` et n'a pas de méthode `Symbol.search`, il est converti en {{JSxRef("RegExp")}} avec `new RegExp(regexp)`.

### Valeur de retour

L'indice de la première correspondance avec l'expression rationnelle, ou `-1` si aucune correspondance.

## Description

L'implémentation de `String.prototype.search()` ne fait pas grand-chose à part appeler la méthode `Symbol.search` de l'argument avec la chaîne de caractères comme premier paramètre. L'implémentation réelle vient de [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

L'indicateur `g` de `regexp` n'a pas d'effet sur le résultat de `search()`. La recherche se fait toujours comme si `lastIndex` est 0. Pour plus d'information sur le comportement de `search()`, voir [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Quand vous voulez savoir si un motif est trouvé, et _aussi_ connaître son indice dans la chaîne de caractères, utilisez `search()`.

- Si vous voulez juste savoir si ça existe, utilisez la méthode {{JSxRef("RegExp.prototype.test()")}}.
- Si vous avez besoin du texte trouvé, utilisez {{JSxRef("String.prototype.match()")}} ou {{JSxRef("RegExp.prototype.exec()")}}.

## Exemples

### Utiliser la méthode `search()`

L'exemple suivant montre l'utilisation de deux expressions rationnelles différentes pour illustrer une recherche réussie (valeur positive) et une recherche infructueuse (`-1`).

```js
const chaine = "coucOu";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(chaine.search(re)); // retourne 4, qui est l'indice de la première lettre majuscule "O"
console.log(chaine.search(reDot)); // retourne -1 ne trouve pas de point de ponctuation '.'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.search` dans `core-js` qui corrige et implémente le comportement moderne comme la prise en charge de `Symbol.search` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- La méthode {{JSxRef("String.prototype.match()")}}
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
