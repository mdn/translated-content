---
title: "Function : propriété displayName"
short-title: displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

La propriété optionnelle **`displayName`** d'une instance de {{JSxRef("Function")}} définit le nom affiché de la fonction.

## Valeur

La propriété `displayName` n'est initialement présente sur aucune fonction — elle est ajoutée par les auteur·ice·s du code. À des fins d'affichage, elle doit être une chaîne de caractères.

## Description

Si elle est présente, la propriété `displayName` peut être préférée par les consoles et profileurs à la propriété {{JSxRef("Function/name", "name")}} pour l'affichage du nom d'une fonction.

Parmi les navigateurs, seule la console de Firefox utilise cette propriété. Les outils React devtools utilisent également la propriété [`displayName` <sup>(angl.)</sup>](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) lors de l'affichage de l'arbre des composants.

Firefox tente de décoder la propriété `displayName` qui peut être générée par l'algorithme de [convention de nommage des fonctions JavaScript anonymes <sup>(angl.)</sup>](https://johnjbarton.github.io/nonymous/index.html). Les motifs suivants sont détectés&nbsp;:

- Si `displayName` se termine par une séquence de caractères alphanumériques, `_` et `$`, le plus long suffixe de ce type est affiché.
- Si `displayName` se termine par une séquence de caractères entourés de `[]`, cette séquence est affichée sans les crochets.
- Si `displayName` se termine par une séquence de caractères alphanumériques et `_` suivie de `/`, `.`, ou `<`, la séquence est retournée sans les caractères `/`, `.`, ou `<` finaux.
- Si `displayName` se termine par une séquence de caractères alphanumériques et `_` suivie de `(^)`, la séquence est affichée sans le `(^)`.

Si aucun des motifs ci-dessus ne correspond, l'intégralité de `displayName` est affichée.

## Exemples

### Définir un `displayName`

En entrant le code suivant dans la console de Firefox, cela devrait afficher quelque chose comme `function MaFonction()`&nbsp;:

```js
function a() {}
a.displayName = "MaFonction";

a; // function MaFonction()
```

### Changer dynamiquement le `displayName`

Vous pouvez changer dynamiquement le `displayName` d'une fonction&nbsp;:

```js
const objet = {
  // anonyme
  uneMethode: function uneMethode(value) {
    uneMethode.displayName = `uneMethode (${value})`;
  },
};

console.log(objet.uneMethode.displayName); // undefined

objet.uneMethode("123");
console.log(objet.uneMethode.displayName); // "uneMethode (123)"
```

### Nettoyage de `displayName`

Firefox devtools nettoie quelques motifs courants dans la propriété `displayName` avant de l'afficher.

```js
function toto() {}

function nomTest(nom) {
  toto.displayName = nom;
  console.log(toto);
}

nomTest("$toto$"); // function $toto$()
nomTest("toto bar"); // function bar()
nomTest("Foo.prototype.add"); // function add()
nomTest("toto ."); // function toto .()
nomTest("toto <"); // function toto <()
nomTest("toto?"); // function toto?()
nomTest("toto()"); // function toto()()

nomTest("[...]"); // function ...()
nomTest("toto<"); // function toto()
nomTest("toto..."); // function toto()
nomTest("toto(^)"); // function toto()
```

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Function.prototype.name")}}
