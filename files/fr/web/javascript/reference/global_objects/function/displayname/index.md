---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
---

{{JSRef}} {{Non-standard_header}}

La propriété **`function.displayName`** renvoie le nom affiché de la fonction.

## Description

Lorsque la propriété `displayName` est définie, elle renvoie le nom affiché de la fonction :

```js
function faireTruc() {}

console.log(faireTruc.displayName); // "undefined"

var logMessage = function (contenu) {
  console.log(contenu);
};

logMessage.displayName = "Afficher les messages dans le journal";

console.log(logMessage.displayName); // "Afficher les messages dans le journal"
```

Il est possible de définir une fonction avec un nom d'affichage grâce à une {{jsxref("Fonctions", "expression de fonctions","",1)}}:

```js
var objet = {
  uneMéthode: function () {},
};

objet.uneMéthode.displayName = "uneMéthode";

console.log(objet.uneMéthode.displayName);
// "uneMéthode"

try {
  uneMéthode;
} catch (e) {
  console.log(e);
}
// ReferenceError: uneMéthode is not defined
```

La propriété `displayName` peut être changée dynamiquement :

```js
var objet = {
  // anonyme
  uneMéthode: function (valeur) {
    this.displayName = "uneMéthode (" + valeur + ")";
  },
};

console.log(objet.uneMéthode.displayName); // "undefined"

objet.uneMéthode("123");
console.log(objet.uneMéthode.displayName); // "uneMéthode (123)"
```

## Exemples

On souhaite généralement utiliser cette propriété dans les consoles et profileurs plutôt que {{jsxref("Function.name", "func.name")}}

Le code suivant devrait afficher quelque chose comme "function Ma Fonction()":

```js
var a = function () {};
a.displayName = "Ma Fonction";

a;
```

## Spécifications

N'appartient à aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
