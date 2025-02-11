---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
---

{{JSRef}}

La propriété **`Number.NaN`** représente une valeur qui n'est pas un nombre (en anglais «&nbsp;_Not-A-Number_&nbsp;» qui donne NaN). Elle est équivalente à {{jsxref("NaN")}}.

{{InteractiveExample("JavaScript Demo: Number.NaN")}}

```js interactive-example
function clean(x) {
  // eslint-disable-next-line use-isnan
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

Il n'est pas nécessaire de créer un objet {{jsxref("Number")}} pour accéder à cette propriété statique. Il suffit d'utiliser directement `Number.NaN`.

{{js_property_attributes(0,0,0)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{jsxref("NaN")}}&nbsp;;
- L'objet {{jsxref("Number")}} auquel appartient cette propriété.
