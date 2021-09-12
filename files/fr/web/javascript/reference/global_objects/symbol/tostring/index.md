---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/toString
---
{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractères représentant l'objet `Symbol`.

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## Syntaxe

    Symbol().toString();

### Valeur de retour

Une chaîne de caractères qui représente l'objet {{jsxref("Symbol")}}.

## Description

L'objet {{jsxref("Symbol")}} surcharge la méthode `toString()` d'{{jsxref("Object")}} et n'hérite pas de {{jsxref("Object.prototype.toString()")}}. Pour les objets `Symbol`, la méthode `toString()` renvoie représentation de l'objet sous forme d'une chaîne de caractères.

### Concaténation de chaînes et symboles

Bien qu'il soit possible d'appeler `toString()` pour les symboles, il n'est pas possible de concaténer une chaîne de caractères avec ce type d'objet :

```js
Symbol("toto") + "machin";  // TypeError : Impossible de convertir un symbole en chaîne de caractères
```

## Exemples

```js
Symbol("desc").toString();   // "Symbol(desc)"

// symboles connus
Symbol.iterator.toString();  // "Symbol(Symbol.iterator)

// symboles globaux
Symbol.for("toto").toString() // "Symbol(toto)"
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires        |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-symbol.prototype.tostring', 'Symbol.prototype.toString')}}     | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-symbol.prototype.tostring', 'Symbol.prototype.toString')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.toString")}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
