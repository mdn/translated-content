---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
---

{{JSRef}}

静的な **`Reflect.ownKeys()`** メソッドは、 `target` オブジェクトが持つプロパティキーの配列を返します。

{{EmbedInteractiveExample("pages/js/reflect-ownkeys.html")}}

## 構文

```
Reflect.ownKeys(target)
```

### 引数

- `target`
  - : キーを取得する対象のオブジェクト

### 返値

`target` オブジェクトが持つプロパティキーの {{jsxref("Array")}} 。

### 例外

{{jsxref("TypeError")}}: `target` が {{jsxref("Object")}} ではない場合

## 解説

`Reflect.ownKeys` メソッドは、対象のオブジェクトが持つプロパティキーの配列を返します。この返値は、`{{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(target)", "", 1)}}.concat({{jsxref("Object.getOwnPropertySymbols", "Object.getOwnPropertySymbols(target)", "", 1)}})` と同じです。

## 例

### Reflect.ownKeys() の使用

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

let sym = Symbol.for("comet");
let sym2 = Symbol.for("meteor");
let obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// 数字順のインデックス、
// 挿入順の文字列、
// 挿入順のシンボル
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Reflect.ownKeys")}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
