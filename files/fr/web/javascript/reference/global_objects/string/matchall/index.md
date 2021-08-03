---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/matchAll
original_slug: Web/JavaScript/Reference/Objets_globaux/String/matchAll
---
{{JSRef}}

La méthode **`matchAll()`** renvoie un itérateur contenant l'ensemble des correspondances entre une chaîne de caractères d'une part et une expression rationnelle d'autre part (y compris les groupes capturants).

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Syntaxe

    str.matchAll(regexp)

### Paramètres

- `regexp`
  - : Un objet représentant une expression rationnelle. Si cet objet n'est pas une instance de {{jsxref("RegExp")}}, il est automatiquement et implicitement converti en une telle instance à l'aide de `new RegExp(obj)`.

### Valeur de retour

Un [itérateur](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs).

## Exemples

### `Regexp.exec()` et `matchAll()`

Avant l'apparition de `matchAll()` en JavaScript, il était possible d'utiliser {{jsxref("RegExp.exec")}} (et des expressions rationnelles utilisant le marqueur `/g`) dans une boucle afin d'obtenir l'ensemble des correspondances :

```js
const regexp = RegExp('foo*','g');
const str = 'table football, foosball';

while ((matches = regexp.exec(str)) !== null) {
  console.log(`${matches[0]} trouvé. Prochaine recherche à partir de ${regexp.lastIndex}.`);
  // dans la console : "foo trouvé. Prochaine recherche à partir de 9."
  // dans la console : "foo trouvé. Prochaine recherche à partir de 19."
}
```

Avec `matchAll()`, on peut éviter la boucle `while` et le marqueur global. On récupère l'itérateur et on utilise une boucle [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of), [la décomposition de tableau](/fr/docs/Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition) ou encore {{jsxref("Array.from()")}} :

```js
const regexp = RegExp('foo*','g');
const str = 'table football, foosball';
let matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(match);
}
// Array [ "foo" ]
// Array [ "foo" ]

// l'itérateur est épuise après l'itération via for..of
// On rappelle matchAll afin de créer un nouvel itérateur
matches = str.matchAll(regexp);

Array.from(matches, m => m[0]);
// Array [ "foo", "foo" ]
```

### Meilleur accès aux groupes capturants

Un autre avantage de `matchAll()` est un meilleur accès aux groupes capturants. De fait, les groupes capturants sont ignorés par [`match()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match) lorsqu'on utilise le marqueur global `/g` :

```js
var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']
```

Avec `matchAll()`, on peut y accéder :

```js
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.matchall', 'String.prototype.matchAll')}} | {{Spec2('ESDraft')}} |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.matchAll")}}

## Voir aussi

- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
