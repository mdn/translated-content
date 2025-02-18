---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef}}

La méthode **`delete()`** retire un élément donné de l'objet {{jsxref("WeakMap")}}.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.delete()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.delete(object1));
// Expected output: true

console.log(weakmap1.has(object1));
// Expected output: false
```

## Syntaxe

```js
wm.delete(clé);
```

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

wm.has(window); // Renvoie false. L'objet window n'est plus dans la WeakMap.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("WeakMap")}}
