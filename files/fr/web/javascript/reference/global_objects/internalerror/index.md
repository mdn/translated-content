---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
tags:
  - Error
  - InternalError
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/InternalError
original_slug: Web/JavaScript/Reference/Objets_globaux/InternalError
---
{{JSRef}} {{non-standard_header}}

L'objet **`InternalError`** indique qu'une erreur liée au moteur JavaScript s'est produite. Par exemple **"InternalError** : Niveau de récursion trop important".

## Syntaxe

    new InternalError([message[, fileName[, lineNumber]]])

### Paramètres

- `message`
  - : Paramètre optionnel. Une description de l'erreur compréhensible pour un être humain.
- `fileName` {{Non-standard_inline}}
  - : Paramètre optionnel. Le nom du fichier contenant le code à l'origine de l'erreur.
- `lineNumber` {{Non-standard_inline}}
  - : Paramètre optionnel. Le numéro de la ligne du code à l'origine de l'erreur.

## Description

Une exception `InternalError` est levée à chaque fois qu'il se produit une erreur interne au moteur JavaScript.

Le plus souvent, cette exception se produit lorsque quelque chose atteint un niveau trop élévé. Par exemple :

- trop de cas dans une construction switch,
- trop de parenthèses au sein d'une expression rationnelle,
- un tableau littéral trop grand,
- trop de niveaux de récursion.

## Propriétés

- {{jsxref("InternalError.prototype")}}
  - : Permet l'ajout de nouvelles propriétés à un objet `InternalError`.

## Méthodes

L'objet global `InternalError` ne contient pas de méthode propre. En revanche, il hérite de certaines méthodes via sa chaîne de prototypes.

## Instances de `InternalError`

### Propriétés

{{page("/fr/docs/JavaScript/Reference/Objets_globaux/InternalError/prototype","Properties")}}

### Méthodes

{{page("/fr/docs/JavaScript/Reference/Objets_globaux/InternalError/prototype","Methods")}}

## Spécifications

Cet objet ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.InternalError")}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("InternalError.prototype")}}
