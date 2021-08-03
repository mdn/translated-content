---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Boolean/toString
---
{{JSRef}}

La méthode **`toString()`** renvoie une chaine de caractères correspondant à l'objet `Boolean` courant.

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## Syntaxe

    bool.toString()

### Valeur de retour

Une chaîne de caractères qui représente l'objet {{jsxref("Boolean")}}.

## Description

L'objet {{jsxref("Boolean")}} surcharge la méthode `toString()` de l'objet {{jsxref("Object")}} ; il n'hérite pas de la méthode {{jsxref("Object.prototype.toString()")}}. Pour les objets de type `Boolean`, la méthode `toString()` renvoie une chaine de caractère representative de l'objet.

La méthode `toString()` est automatiquement appelée quand le `Boolean` doit être representé comme une texte ou lorsque qu'il est concaténé avec une chaine de caractères.

Pour les objets de type `Boolean` , la fonction native `toString()` renvoie la chaine de caractère "`true`" ou "`false`" en fonction de la valeur de l'objet.

## Exemples

### Utiliser `toString()`

Dans ce code, `flag.toString()` renvoie "`true`" :

```js
var flag = new Boolean(true);
var maVar = flag.toString();
```

## Spécifications

| Spécification                                                                                                        | Statut                       | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.6.4.2', 'Boolean.prototype.toString')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Boolean.toString")}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
