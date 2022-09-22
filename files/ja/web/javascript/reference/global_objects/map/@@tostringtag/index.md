---
title: Map.prototype[@@toStringTag]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
---

{{JSRef}}

**`Map[@@toStringTag]`** プロパティは、 "Map" の初期値を持ちます。

{{EmbedInteractiveExample("pages/js/map-prototype-@@tostringtag.html","shorter")}}{{js_property_attributes(0,0,1)}}

## 構文

```
Map[Symbol.toStringTag]
```

## 例

### toStringTag の使用

```js
Object.prototype.toString.call(new Map()) // "[object Map]"
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-map.prototype-@@tostringtag', 'Map.prototype[@@toStringTag]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.@@toStringTag")}}

## 関連情報

- {{jsxref("Symbol.toStringTag")}}
