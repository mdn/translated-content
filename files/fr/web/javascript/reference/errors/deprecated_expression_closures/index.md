---
title: 'Warning: expression closures are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
tags:
  - Avertissement
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
original_slug: Web/JavaScript/Reference/Erreurs/Deprecated_expression_closures
---
{{jsSidebar("Errors")}}

## Message

```
Warning: expression closures are deprecated
```

## Type d'erreur

Un avertissement, l'exécution du code JavaScript ne sera pas interrompue.

## Quel est le problème ?

La syntaxe non-standard avec [une expression de fermeture](/fr/docs/Web/JavaScript/Reference/Opérateurs/Expression_closures) est dépréciée et ne devrait plus être utilisée. Cette syntaxe sera complètement retirée avec le bug {{bug(1083458)}} et les scripts qui l'utilisent déclencheront alors une exception {{jsxref("SyntaxError")}}.

## Exemples

### Syntaxe dépréciée

Les expression de fermeture permettent de ne pas utiliser les accolades ou les instructions `return` au sein d'une déclaration de fonction ou pour une définition de méthode dans un objet.

```js example-bad
var x = function() 1;

var obj = {
  count: function() 1
};
```

### Syntaxe standard

Pour convertir cette syntaxe non-standard en une syntaxe standard, il suffit d'ajouter des accolades et l'instruction return.

```js example-good
var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
```

### Syntaxe standard avec les fonctions fléchées

On peut aussi utiliser [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées) :

```js example-good
var x = () => 1;
```

### Syntaxe standard avec la notation raccourcie pour les méthodes

On retrouve parfois les expressions de fermeture dans les accesseurs et les mutateurs, par exemple :

```js example-bad
var obj = {
  get x() 1,
  set x(v) this.v = v
};
```

Grâce aux [définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Fonctions/Définition_de_méthode) ES2015, on peut convertir le fragment de code précédent en :

```js example-good
var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
```

## Voir aussi

- [Les expressions de fermeture](/fr/docs/Web/JavaScript/Reference/Opérateurs/Expression_closures)
- [Les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées)
- [Les définitions de méthode](/fr/docs/Web/JavaScript/Reference/Fonctions/Définition_de_méthode)
