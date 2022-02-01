---
title: 'SyntaxError: missing formal parameter'
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_formal_parameter
original_slug: Web/JavaScript/Reference/Erreurs/Missing_formal_parameter
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: missing formal parameter (Firefox)

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

« _Formal parameter_ » (ou « paramètre formel ») est une façon de désigner un paramètre d'une fonction. Ici, certains des paramètres de la fonction sont invalides. Lorsqu'on déclare une fonction, les paramètres doivent être des identifiants et non des valeurs (telles que des nombres, des chaînes de caractères ou des objets). La déclaration et l'appel de la fonction forment deux étapes distinctes. Les déclarations utilisent uniquement des identifiants comme paramètres. Lorsqu'on appelle une fonction, on fournit les valeurs à utiliser.

En JavaScript, les identifiants peuvent contenir n'importe quel caractère alphanumérique (ou "$" or "\_") et ne doivent pas commencer par un nombre. Un identifiant n'est pas une chaîne de caractères, une chaîne de caractères est une donnée alors qu'un identifiant fait partie du code.

## Exemples

Lorsqu'on définit une fonction, les paramètres doivent être des identifiants. Aucune des fonctions suivantes ne répond à ce critère (elles lèvent donc toutes une erreur) car elles utilisent des valeurs :

```js example-bad
function carre(3) {
  return nombre * nombre;
};
// SyntaxError: missing formal parameter

function salutation("Coucou") {
  return salut;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
```

Il faut utiliser des identifiants lors de la déclaration des fonctions :

```js example-good
function carre(nombre) {
  return nombre * nombre;
};

function salutation(salut) {
  return salut;
};

function log(arg) {
  console.log(arg)
};
```

Ensuite, on pourra appeler ces fonctions avec les arguments voulus :

```js
carre(2); // 4
salutation("Coucou"); // "Coucou"
log({obj: "value"});  // Object { obj: "value" }
```

## Voir aussi

- Les autres erreurs relatives aux paramètres formels :

  - [SyntaxError: Malformed formal parameter](/fr/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  - [SyntaxError: redeclaration of formal parameter "x"](/fr/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
