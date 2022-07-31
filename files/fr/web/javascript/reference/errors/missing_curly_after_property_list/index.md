---
title: 'SyntaxError: missing } after property list'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
original_slug: Web/JavaScript/Reference/Erreurs/Missing_curly_after_property_list
---
{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after property list (Firefox)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Il y a une coquille dans le [littéral objet](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet) utilisé. Cela peut être dû à une accolade manquante ou à une virgule manquante. Il est aussi utile de vérifier que les accolades et les parenthèses sont bien ordonnées. Pour ce type d'erreur, une bonne indentation permet de repérer plus facilement la coquille parmi les lignes de code.

## Exemples

### Une virgule oubliée

Il arrive parfois que ce soit une virgule absente dans le littéral qui entraîne cette erreur :

```js example-bad
var obj = {
  a: 1,
  b: { maProp: 2 }
  c: 3
};
```

La version correcte correspondante est :

```js example-good
var obj = {
  a: 1,
  b: { maProp: 2 },
  c: 3
};
```

## Voir aussi

- [Les littéraux objets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet)
