---
title: "String : méthode matchAll()"
short-title: matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`matchAll()`** des valeurs {{JSxRef("String")}} retourne un itérateur contenant l'ensemble des résultats correspondant à cette chaîne de caractères par rapport à une [expression rationnelle](/fr/docs/Web/JavaScript/Guide/Regular_expressions), y compris les [groupes capturant](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.matchAll()")}}

```js interactive-example
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Résultat attendu : Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Résultat attendu : Array ["test2", "e", "st2", "2"]
```

## Syntaxe

```js-nolint
matchAll(regexp)
```

### Paramètres

- `regexp`
  - : Un objet représentant une expression rationnelle, ou tout objet possédant une méthode [`Symbol.matchAll`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll).

    Si `regexp` n'est pas un objet `RegExp` et ne possède pas de méthode `Symbol.matchAll`, il est implicitement converti en {{JSxRef("RegExp")}} en utilisant `new RegExp(regexp, 'g')`.

    Si `regexp` [est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles), alors il doit avoir l'indicateur global (`g`) activé, sinon un {{JSxRef("TypeError")}} est levé.

### Valeur de retour

Un [objet itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (qui ne peut pas être relancé) contenant les correspondances ou un itérateur vide si aucune correspondance n'est trouvée. Chaque valeur retournée par l'itérateur est un tableau ayant la même structure que la valeur de retour de {{JSxRef("RegExp.prototype.exec()")}}.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levé si le paramètre `regexp` [est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles) qui n'a pas l'indicateur global (`g`) activé (sa propriété [`flags`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) ne contient pas `"g"`).

## Description

L'implémentation de `String.prototype.matchAll` ne fait pas grand-chose d'autre que d'appeler la méthode `Symbol.matchAll` de l'argument avec la chaîne de caractères comme premier paramètre (à part la validation supplémentaire que l'expression rationnelle est globale). L'implémentation réelle provient de [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll).

## Exemples

### `Regexp.prototype.exec()` et `matchAll()`

Sans `matchAll()`, il est possible d'utiliser l'appel à [`regexp.exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (et des expressions rationnelles avec l'indicateur `g`) dans une boucle pour obtenir toutes les correspondances&nbsp;:

```js
const regexp = /foo[a-z]*/g;
const chaine = "table football, foosball";

let correspondance;
while ((correspondance = regexp.exec(chaine)) !== null) {
  console.log(
    `${correspondance[0]} trouvé. Prochaine recherche à partir de ${regexp.lastIndex}.`,
  );
  // dans la console : "foo trouvé. Prochaine recherche à partir de 9."
  // dans la console : "foo trouvé. Prochaine recherche à partir de 19."
}
```

Avec `matchAll()`, on peut éviter la boucle {{JSxRef("Statements/while", "while")}} et le marqueur global. On récupère l'itérateur et on utilise une boucle {{JSxRef("Statements/for...of", "for...of")}}, [la décomposition de tableau](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ou le constructeur {{JSxRef("Array.from()")}}&nbsp;:

```js
const regexp = /foo[a-z]*/g;
const chaine = "table football, foosball";
const correspondances = chaine.matchAll(regexp);

for (const correspondance of correspondances) {
  console.log(
    `${correspondance[0]} trouvé start=${correspondance.index} end=${
      correspondance.index + correspondance[0].length
    }.`,
  );
}
// football trouvé start=6 end=14.
// foosball trouvé start=16 end=24.

// L'itérateur correspondants est épuisé après l'itération for…of
// Appelez à nouveau matchAll pour créer un nouvel itérateur
correspondances = chaine.matchAll(regexp);

Array.from(correspondances, (m) => m[0]);
// [ "football", "foosball" ]
```

`matchAll` lève une exception si l'indicateur `g` est absent.

```js
const regexp = /[a-c]/;
const str = "abc";
str.matchAll(regexp);
// TypeError
```

`matchAll` crée en interne une copie de `regexp` — ainsi, contrairement à {{JSxRef("RegExp/exec", "regexp.exec()")}}, `lastIndex` ne change pas pendant le parcours de la chaîne de caractères.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Cependant, contrairement à l'utilisation de [`regexp.exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) dans une boucle, vous ne pouvez pas modifier `lastIndex` pour faire avancer ou reculer l'expression rationnelle.

### Meilleur accès aux groupes capturant (que `String.prototype.match()`)

Une autre raison importante d'utiliser `matchAll` est le meilleur accès aux groupes capturant.

Les groupes capturant sont ignorés lors de l'utilisation de {{JSxRef("String/match", "match()")}} avec l'indicateur global `g`&nbsp;:

```js
const regexp = /t(e)(st(\d?))/g;
const chaine = "test1test2";

chaine.match(regexp); // ['test1', 'test2']
```

Avec `matchAll`, vous pouvez facilement accéder aux groupes capturant&nbsp;:

```js
const tableau = [...chaine.matchAll(regexp)];

tableau[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
tableau[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### Utiliser `matchAll()` avec un objet autre qu'une expression rationnelle qui implémente `[Symbol.matchAll]()`

Si un objet possède une méthode `Symbol.matchAll`, il peut servir de moteur de correspondance personnalisé. La valeur de retour de `Symbol.matchAll` devient celle de `matchAll()`.

```js
const chaine = "Hmm, c'est intéressant.";

chaine.matchAll({
  [Symbol.matchAll](chaine) {
    return [["Oui, c'est intéressant."]];
  },
}); // retourne [["Oui, c'est intéressant."]]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.matchAll` dans `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.matchAll`](https://www.npmjs.com/package/string.prototype.matchall)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- Le guide [des groupes et références arrière](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- La méthode {{JSxRef("String.prototype.match()")}}
- L'objet natif {{JSxRef("RegExp")}}
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
- La méthode [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
