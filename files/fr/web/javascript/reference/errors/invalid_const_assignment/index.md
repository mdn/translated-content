---
title: 'TypeError: invalid assignment to const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_const_assignment
original_slug: Web/JavaScript/Reference/Erreurs/Invalid_const_assignment
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: invalid assignment to const "x" (Firefox)
TypeError: Assignment to constant variable. (Chrome)
TypeError: Redeclaration of const 'x' (Edge)
```

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

Une constante est une valeur qui ne peut pas être modifiée lors de l'exécution du programme. Elle ne peut pas être modifiée grâce à une réaffectation ou grâce à une redéclaration. En JavaScript, les constantes sont déclarées grâce au mot-clé [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const).

## Exemples

### Redéclaration invalide

Si on affecte une valeur à une constante dans la même portée de bloc que celui qui contient l'affectation initiale, une exception sera levée :

```js example-bad
const COLUMNS = 80;

// ...

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### Résoudre le problème

Il existe plusieurs façons de résoudre ce problème et il faut au préalable comprendre le rôle de la constante en question.

#### Utiliser un autre nom

Si on souhaite déclarer une autre constante, on peut utiliser un autre nom que celui qui est déjà pris dans cette portée :

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### `const`, `let` ou `var` ?

`const` ne doit pas être utilisé si on ne souhaite pas déclarer de constante. Peut-être qu'on souhaite simplement déclarer une variable avec une portée de bloc grâce à [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let) ou une variable globale avec [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var).

```js example-good
let columns = 80;

// ...

let columns = 120;
```

#### Gérer les portées

On peut également vérifier qu'on est dans la bonne portée. Est-ce que la constante devait apparaître dans la portée en question ou devait être utilisée dans une fonction ?

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### `const` et l'immuabilité

La déclaration `const` crée une référence en lecture seule vers une valeur. Elle ne signifie pas que la valeur en question est immuable mais uniquement que l'identifiant de la référence ne peut pas recevoir de nouvelle valeur. Ainsi, si le contenu est un objet, celui-ci pourra toujours être modifié :

```js example-bad
const obj = {toto: 'truc'};
obj = {toto: 'bidule'}; // TypeError: invalid assignment to const `obj'
```

En revanche, on peut modifier les propriétés :

```js example-good
obj.toto = 'bidule';
obj; // Object { toto: "bidule" }
```

## Voir aussi

- [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const)
- [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let)
- [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var)
