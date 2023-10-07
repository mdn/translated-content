---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
---

{{JSRef}}

静的な **`Reflect.get()`** メソッドは、オブジェクト (`target[propertyKey]`) からプロパティを関数として取得するように動作します。

{{EmbedInteractiveExample("pages/js/reflect-get.html")}}

## 構文

```js
Reflect.get(target, propertyKey[, receiver])
```

### 引数

- `target`
  - : プロパティを取得する対象のオブジェクト。
- `propertyKey`
  - : 設定するプロパティ名。
- `receiver` {{optional_inline}}
  - : ゲッターがあった場合、 `target` への呼び出しで使用する `this` の値を提供します。 {{jsxref("Proxy")}} とともに使用すると、 `target` から継承しているオブジェクトにすることができます。

### 返値

プロパティの値です。

### 例外

`target` が {{jsxref("Object")}} でなかった場合、 {{jsxref("TypeError")}} が発生します。

## 解説

`Reflect.get` メソッドはオブジェクトのプロパティを取得します。機能としては[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)構文と似ています。

## 例

### `Reflect.get()` の使用

```js
// オブジェクト
let obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// 配列
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler
let x = { p: 1 };

let obj = new Proxy(x, {
  get(t, k, r) {
    return k + "bar";
  },
});
Reflect.get(obj, "foo"); // "foobar"

//Proxy with get handler and receiver
let x = { p: 1, foo: 2 };
let y = { foo: 3 };

let obj = new Proxy(x, {
  get(t, prop, receiver) {
    return receiver[prop] + "bar";
  },
});
Reflect.get(obj, "foo", y); // "3bar"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Reflect.get")}}

## 関連情報

- {{jsxref("Reflect")}}
- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
