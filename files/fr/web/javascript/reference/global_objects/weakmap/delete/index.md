---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap/delete
---
{{JSRef}}

La méthode **`delete()`** retire un élément donné de l'objet {{jsxref("WeakMap")}}.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-delete.html")}}

## Syntaxe

    wm.delete(clé);

### Paramètre

- `clé`
  - : Il correspond à la clé de l'élément qu'on souhaite retirer de l'objet `WeakMap`.

### Valeur de retour

`true` si un élément de l'objet `WeakMap` a bien été retiré, `false` si la clé n'a pas été trouvée ou si la clé n'est pas un objet.

## Exemples

```js
var wm = new WeakMap();
wm.set(window, "toto");

wm.delete(window); // Renvoie true. La suppression a bien eu lieu.

wm.has(window);    // Renvoie false. L'objet window n'est plus dans la WeakMap.
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.delete', 'WeakMap.prototype.delete')}} | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.delete', 'WeakMap.prototype.delete')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakMap.delete")}}

## Voir aussi

- {{jsxref("WeakMap")}}
