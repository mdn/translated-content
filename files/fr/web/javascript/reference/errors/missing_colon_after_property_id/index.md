---
title: 'SyntaxError: missing : after property id'
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
original_slug: Web/JavaScript/Reference/Erreurs/Missing_colon_after_property_id
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: Expected ':' (Edge)
    SyntaxError: missing : after property id (Firefox)

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Lorsqu'on crée un objet en utilisant un [initialisateur d'objet](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet), il faut utiliser un deux-points ( : ) afin de séparer les clés des valeurs pour les propriétés de l'objet.

```js
var obj = { cleDeLaPropriete: 'valeur' };
```

## Exemples

### Deux-points et signe égal

Le code qui suit provoquera une erreur car on utilise un signe égal (=) à la place du deux-points.

```js example-bad
var obj = { cleDeLaPropriete = 'valeur' };
// SyntaxError: missing : after property id
```

Pour corriger ce problème, on peut utiliser un deux-points ou bien affecter la nouvelle propriété après avoir créé l'objet :

```js example-good
var obj = { cleDeLaPropriete: 'valeur' };

// ou encore :

var obj = { };
obj['cleDeLaPropriete'] = 'valeur';
```

### Propriétés vides

On ne peut pas créer de propriétés vides de cette façon :

```js example-bad
var obj = { cleDeLaPropriete; };
// SyntaxError: missing : after property id
```

Si vous souhaitez définir une propriété sans valeur, vous pouvez utiliser le mot-clé {{jsxref("null")}} :

```js example-good
var obj = { cleDeLaPropriete: null };
```

### Propriétés calculées

Si vous souhaitez créer une clé de propriété à partir d'une expression, il faudra utiliser des crochets pour encadrer l'expression (sinon le nom de la propriété ne pourra pas être calculé) :

```js example-bad
var obj = { 'tr'+'uc': 'toto' };
// SyntaxError: missing : after property id
```

Pour corriger l'erreur, il faudra placer l'expression entre crochets :

```js example-good
var obj = { ['tr'+'uc']: 'toto' };
```

## Voir aussi

- [Initialisateur d'objet](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet)
