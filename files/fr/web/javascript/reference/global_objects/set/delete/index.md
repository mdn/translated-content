---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/delete
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/delete
---
{{JSRef}}

La méthode **`delete()`** permet de retirer un élément donné d'un objet `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## Syntaxe

```js
monSet.delete(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. Il représente la valeur de l'élément qu'on souhaite retirer de l'objet `Set`.

### Valeur de retour

`true` si un élément de l'objet `Set` a été retiré lors de l'opération, `false` sinon.

## Exemples

### Utiliser la méthode `delete()`

```js
var monSet = new Set();
monSet.add("toto");

monSet.delete("truc"); // Renvoie false. Aucun élément "truc" n'a pu être supprimé.
monSet.delete("toto"); // Renvoie true.  L'élément a pu être supprimé.

monSet.has("toto");    // Renvoie false. L'élément "toto" ne fait plus partie de l'ensemble.
```

### Utiliser `delete()` avec `forEach()`

```js
var objetSet = new Set();
objetSet.add({x: 10, y: 20}); // On ajoute un nouvel objet dans l'ensemble
objetSet.add({x: 20, y: 30}); // On ajoute un nouvel objet dans l'ensemble

// On supprime les points de l'ensemble pour lesquels
// x est supérieur à 10
objetSet.forEach(function(point){
  if(point.x > 10){
    objetSet.delete(point);
  }
});
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.delete', 'Set.prototype.delete')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-set.prototype.delete', 'Set.prototype.delete')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.delete")}}

## Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
