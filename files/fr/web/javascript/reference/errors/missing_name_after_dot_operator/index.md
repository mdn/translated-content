---
title: 'SyntaxError: missing name after . operator'
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
original_slug: Web/JavaScript/Reference/Erreurs/Missing_name_after_dot_operator
---
{{jsSidebar("Errors")}}

## Message

```
SyntaxError: missing name after . operator
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

L'opérateur `.` (le point) est utilisé pour [accéder aux propriétés d'un objet](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres). Il est nécessaire d'indiquer le nom de la propriété à laquelle on souhaite accéder. Pour les propriétés dont le nom est calculé, il est préférable d'utiliser les crochets pour encadrer le nom. Cela permet de calculer une expression dont le résultat sera le nom de la propriété recherchée. Peut-être cherchiez-vous à utiliser l'opérateur de concaténation ? C'est l'opérateur `+` qu'il faut utiliser dans ce cas. Pour plus de détails, voir les exemples ci-après.

## Exemples

### Accéder à une propriété

[Pour accéder à une propriété](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres) en JavaScript, on utilise le point (.) ou les crochets (`[]`) mais pas une combinaison des deux. Les crochets sont notamment utiles lorsqu'on souhaite accéder à des propriétés dont le nom est calculé.

```js example-bad
var obj = { toto: { truc: "bidule", machin2: "bidule2" } };
var i = 2;

obj.[toto].[truc]
// SyntaxError: missing name after . operator

obj.toto."machin"+i;
// SyntaxError: missing name after . operator
```

Pour corriger ce fragment de code, on pourra accéder aux propriétés de la façon suivante :

```js example-good
obj.toto.truc; // "bidule"
// ou autrement
obj["toto"]["truc"]; // "bidule"

// pour les propriétés dont le
// nom est calculé, il faut les
// crochets
obj.toto["machin" + i]; // "bidule2"
```

### Accéder à une propriété ou concaténer ?

Si vous avez l'habitude de développer en utilisant un autre langage de programmation tel que {{Glossary("PHP")}}, il est possible de mélanger certains opérateurs et d'utiliser le point comme opérateur de concaténation, qui est l'opérateur `+` en JavaScript :

```js example-bad
console.log("Coucou " . "monde");

// SyntaxError: missing name after . operator
```

À la place, on écrira :

```js example-good
console.log("Coucou " + "monde");
```

## Voir aussi

- [Les accesseurs de propriété](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres)
