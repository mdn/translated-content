---
title: L'opérateur delete
slug: Web/JavaScript/Reference/Operators/delete
---

{{jsSidebar("Operators")}}

L'opérateur **`delete`** permet de retirer une propriété d'un objet.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## Syntaxe

```js
delete expression;
```

où _expression_ est évaluée comme une référence à une propriété :

```js
delete objet.propriete;
delete objet["propriete"];
```

### Paramètres

- `objet`
  - : Le nom d'un objet ou une expression dont l'évaluation fournit un objet.
- `propriete`
  - : La propriété qu'on souhaite supprimer.

### Valeur de retour

`true` pour tous les cas sauf lorsque la propriété est une propriété [propre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) [non-configurable](/fr/docs/Web/JavaScript/Reference/Erreurs/Cant_delete) auquel cas `false` est renvoyé en mode non-strict.

### Exceptions

Cet opérateur lève une exception {{jsxref("TypeError")}} en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) si la propriété est une propriété propre qui est non-configurable.

## Description

Contrairement à ce qu'on pourrait penser, l'opérateur `delete` n'a rien à voir avec une libération de mémoire directe. La gestion de la mémoire en JavaScript est réalisée de façon indirecte en tenant compte des références, [voir cette page pour plus de détails](/fr/docs/Web/JavaScript/Gestion_de_la_mémoire).

L'opérateur **`delete`** permet de retirer une propriété donnée d'un objet. Lorsque la suppression se déroule sans problème, l'opération renvoie `true`, sinon c'est la valeur `false` qui est renvoyée. Voici quelques scénarios importants qui précisent ce comportement :

- Si la propriété qu'on souhaite supprimer n'existe pas, `delete` n'aura aucun effet et l'opération renverra `true`
- Si une propriété du même nom existe sur la chaîne de prototypes, après la suppression, l'objet utilisera la propriété disponible sur la chaîne de prototypes. Autrement dit, `delete` n'a d'effet que sur les propriétés directement rattachées à un objet (les propriétés « propres »).
- Toute propriété déclarée avec {{jsxref("Instructions/var","var")}} ne peut pas être supprimée de la portée globale ou de la portée d'une fonction.

  - Aussi, `delete` ne pourra supprimer des fonctions de la portée globale (que ce soit une définition de fonction ou une expression de fonction).
  - Les fonctions qui font partie d'un objet (à l'exception de la portée globale) peuvent être supprimées avec `delete`.

- Toute propriété déclarée avec {{jsxref("Instructions/let","let")}} ou {{jsxref("Instructions/const","const")}} ne peut être supprimée de la portée dans laquelle elles ont été créées.
- Les propriétés non-configurable ne peuvent pas être retirées. Cela inclut les propriétés des objets natifs comme {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} et les propriétés qui sont créées comme non-configurable grâce à la méthode {{jsxref("Object.defineProperty()")}}.

Voici un fragment de code qui illustre certains cas :

```js
var Employe = {
  age: 28,
  nom: "abc",
  designation: "developpeur",
};

console.log(delete Employe.nom); // renvoie true
console.log(delete Employe.age); // renvoie true

// Lorsqu'on souhaite supprimer une propriété
// inexistante, on obtient true
console.log(delete Employe.salaire); // renvoie true
```

### Les propriétés non-configurables

Lorsqu'une propriété est marquée comme non-configurable, `delete` n'aura aucun effet et l'opération renverra `false`. En mode strict, cela déclenchera une exception `TypeError`.

```js
var Employe = {};
Object.defineProperty(Employe, "nom", { configurable: false });

console.log(delete Employe.nom); // renvoie false
```

{{jsxref("Instructions/var","var")}} (ou `let` ou `const`) crée des propriétés non-configurables qui ne peuvent pas être supprimées via `delete` :

```js
var autreNom = "XYZ";

// On peut accéder à la description de cette
// propriété globale grâce à :
Object.getOwnPropertyDescriptor(window, "autreNom");

/* Object {value: "XYZ",
                  writable: true,
                  enumerable: true,
                  configurable: false}
*/

// On voit que "autreNom", ajouté avec var
// est marquée comme "non-configurable"

delete autreNom; // renvoie false
```

En mode strict, cela aurait déclenché une exception.

### Mode strict ou non-strict ?

Lorsqu'on est en mode strict, si `delete` est utilisé sur une référence directe à une variable, un argument de fonction ou un nom de fonction, il déclenchera une exception {{jsxref("SyntaxError")}}**.**

Toute variable définie avec `var` est marquée comme non-configurable. Dans l'exemple qui suit, `salaire` est non-configurable et ne peut pas être supprimé. En mode non-strict, l'opération `delete` renverra `false`.

```js
function Employe() {
  delete salaire;
  var salaire;
}

Employe();
```

Voyons comment ce code se comporte en mode strict : au lieu de renvoyer false, l'instruction lève une exception `SyntaxError`.

```js
"use strict";

function Employe() {
  delete salaire; // SyntaxError
  var salaire;
}

// De même, tout accès direct à une fonction
// avec delete lèvera une SyntaxError

function DemoFunction() {
  //du code
}

delete DemoFunction; // SyntaxError
```

## Exemples

```js
// on crée la propriété adminName sur la portée globale
adminName = "xyz";

// on crée la propriété empCount sur la portée globale
// On utilise var, elle est donc non-configurable
var empCount = 43;

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// adminName est une propriété de la portée globale
// qui peut être supprimée car configurable.
delete adminName; // renvoie true

// En revanche empCount n'est pas configurable
// car c'est var qui a été utilisée.
delete empCount; // renvoie false

// delete peut être utilisé pour retirer des propriétés
// d'objets
delete EmployeeDetails.name; // renvoie true

// Même lorsque la propriété n'existe pas,
// l'opération renvoie "true"
delete EmployeeDetails.salary; // renvoie true

// delete n'a pas d'impact sur les propriétés
// statiques natives
delete Math.PI; // renvoie false

// EmployeeDetails est une propriété de la portée globale
// définie sans var, elle est donc configurable
delete EmployeeDetails; // renvoie true

function f() {
  var z = 44;

  // delete n'a pas d'impact sur les noms
  // des variables locales
  delete z; // returns false
}
```

### `delete` et la chaîne de prototypes

Dans l'exemple qui suit, on supprime une propriété directement rattachée à un objet (une propriété « propre ») alors qu'une propriété du même nom existe sur la chaîne de prototypes :

```js
function Toto() {
  this.truc = 10;
}

Toto.prototype.truc = 42;

var toto = new Toto();

// L'instruction suivante renvoie true,
// après avoir effectivement supprimé
// la propriété de l'objet toto
delete toto.truc;

// toto.truc est toujours disponible car
// elle est disponible sur la chaîne de
// prototypes
console.log(toto.truc);

// Ici on supprime la propriété du prototype
delete Toto.prototype.truc;

// On aura "undefined" dans la console
// car l'objet n'hérite plus de cette propriété
// qui a été supprimée
console.log(toto.truc);
```

### Supprimer les éléments d'un tableau

Lorsqu'on supprime un élément d'un tableau, la longueur du tableau n'est pas modifiée. Cela vaut également lorsqu'on supprime le dernier élément du tableau.

Lorsqu'on utilise `delete` pour retirer un élément du tableau, cet élément n'est plus dans le tableau. Dans l'exemple suivant, on retire `arbres[3]` grâce à `delete`.

```js
var arbres = ["cèdre", "pin", "chêne", "érable", "sapin"];
delete arbres[3];
if (3 in arbres) {
  // Le code ici ne sera pas exécuté
}
```

Si on veut conserver l'existence d'un élément du tableau avec une valeur indéfinie, on pourra affecter la valeur `undefined` à cet élément. Ainsi, contrairement à l'exemple précédent, en utilisant `undefined`, `arbres[3]` continue d'être présent :

```js
var arbres = ["cèdre", "pin", "chêne", "érable", "sapin"];
arbres[3] = undefined;
if (3 in arbres) {
  // Le code ici sera bien exécuté
}
```

Si on souhaite plutôt retirer un élément du tableau en changeant le contenu du tableau, on pourra utiliser la méthode {{jsxref("Array.splice()")}}. Dans l'exemple qui suit, la valeur actuelle de `arbres[3]` est retirée du tableau grâce à `splice()` mais l'index suivant se décale et arbres\[4] devient arbres\[3] :

```js
var arbres = ["cèdre", "pin", "chêne", "érable", "sapin"];
if (3 in arbres) {
  // Le code ici sera exécuté
}
arbres.splice(3, 1);
console.log(arbres); // ["cèdre","pin","chêne","sapin"];
if (3 in arbres) {
  // Le code ici sera également exécuté
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une analyse de `delete` par Kangax, en anglais](https://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
