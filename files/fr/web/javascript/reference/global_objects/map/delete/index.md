---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/delete
original_slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---
{{JSRef}}

La méthode **`delete()`** permet de retirer un élément donné d'un objet `Map` grâce à sa clé.

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## Syntaxe

    maMap.delete(clé);

### Paramètres

- `clé`
  - : Ce paramètre obligatoire correspond à la clé de l'élément qu'on souhaite retirer de l'objet `Map`.

### Valeur de retour

Un booléen. La méthode renvoie `true` si un élément de l'objet `Map` a bien été retiré ou `false` si l'élément n'existe pas.

## Exemples

```js
var maMap = new Map();
maMap.set("truc", "toto");

maMap.delete("truc"); // Renvoie true. La suppression est OK.
maMap.has("truc");    // Renvoie false. "truc" n'est plus présent.
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-map.prototype.delete', 'Map.prototype.delete')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-map.prototype.delete', 'Map.prototype.delete')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map.delete")}}

## Voir aussi

- {{jsxref("Map")}}
