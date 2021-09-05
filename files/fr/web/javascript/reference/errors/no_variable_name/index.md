---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/No_variable_name
original_slug: Web/JavaScript/Reference/Erreurs/No_variable_name
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: missing variable name (Firefox)
    SyntaxError: Unexpected token = (Chrome)

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Il manque un nom pour une variable. Cela est probablement dû à une erreur de syntaxe dans le code. Peut-être qu'une variable est placée au mauvais endroit ou peut-être qu'il manque un nom car on n'a pas trouvé de nom pertinent… (ce qui est souvent assez difficile).

## Exemples

### Absence d'un nom pour une variable

```js example-bad
var = "toto";
```

Il est souvent compliqué de trouver le bon nom pour une variable…

```js example-good
var àDéfautDeMieux = "toto";
```

### Les mots-clés réservés ne peuvent pas être utilisés comme noms de variables

Quelques mots-clés sont [réservés](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Mots-clés) et ne peuvent pas être utilisés comme noms de variable :

```js example-bad
var debugger = "zuuuuut";
// SyntaxError: missing variable name
```

### Déclarer plusieurs variables

Attention aux virgules lorsqu'on déclare plusieurs variables… Y a-t-il plus de virgules que nécessairee ? Une virgule est-elle utilisée à la place d'un point-virgule ?

```js example-bad
var x, y = "toto",
var x, = "toto"

var un = document.getElementById('un'),
var deux = document.getElementById('deux'),

// SyntaxError: missing variable name
```

Voici une version corrigée :

```js example-good
var x, y = "toto";
var x = "toto";

var un = document.getElementById('un');
var deux = document.getElementById('deux');
```

### Tableaux

Pour former un littéral de tableau ({{jsxref("Array")}}), il est nécessaire d'ajouter des crochets autour des valeurs des éléments. Le fragment de code suivant ne fonctionnera pas :

```js example-bad
var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

Voici la forme équivalente correcte :

```js example-good
var arr = [1,2,3,4,5];
```

## Voir aussi

- [Choisir de bons noms de variable (en anglais)](http://wiki.c2.com/?GoodVariableNames)
- [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var)
- [Guide JavaScript : Les déclarations de variable](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Déclarations)
