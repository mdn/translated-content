---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
---

{{JSRef}}

La méthode **`ArrayBuffer.isView()`** renvoie `true` si l'argument passé est une des vues `ArrayBuffer`, comme par exemple [un tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou une {{jsxref("DataView")}} ; `false` sinon.

{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html")}}

## Syntaxe

```js
ArrayBuffer.isView(arg);
```

### Paramètres

- `arg`
  - : L'argument dont on souhaite savoir s'il est une vue.

### Valeur de retour

`true` si la valeur passée en argument est une des vues du tableau `ArrayBuffer`, `false` sinon.

## Exemples

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
