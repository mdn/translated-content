---
title: Reflect.has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
---

{{JSRef}}

静的な **`Reflect.has()`** メソッドは、機能としては [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)のように動作します。

{{EmbedInteractiveExample("pages/js/reflect-has.html")}}

## 構文

```
Reflect.has(target, propertyKey)
```

### 引数

- `target`
  - : プロパティを探す対象のオブジェクト。
- `propertyKey`
  - : チェックするプロパティ名。

### 返値

対象がプロパティを持つかどうかを示す {{jsxref("Boolean")}} 値。

### 例外

`target` が {{jsxref("Object")}} でなかった場合、 {{jsxref("TypeError")}} が発生します。

## 解説

`Reflect.has` メソッドは、オブジェクトプロパティがあるかをチェックします。機能としては [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)のように動作します。

## 例

### Reflect.has() の使用

```js
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// プロトタイプチェーンのプロパティがあるため、true が返る
Reflect.has({ x: 0 }, "toString");

// Proxy with .has() handler method
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith("door");
    },
  },
);
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

`Reflect.has` は継承されたプロパティについて `true` を返し、これは [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)と同様です。

```js
const a = { foo: 123 };
const b = { __proto__: a };
const c = { __proto__: b };
// The prototype chain is: c -> b -> a
Reflect.has(c, "foo"); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Reflect.has")}}

## 関連情報

- {{jsxref("Reflect")}}
- [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)
