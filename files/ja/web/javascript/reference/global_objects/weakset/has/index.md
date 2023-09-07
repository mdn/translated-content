---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
---

{{JSRef}}

**`has()`** メソッドは、特定の値をもつ要素が `WeakSet` オブジェクト内に存在するかどうかを示す真偽値を返します。

{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}

## 構文

```
ws.has(value);
```

### 引数

- `value`
  - : `WeakSet` オブジェクトに存在するかテストする値です。

### 返値

- Boolean
  - : `WeakSet` オブジェクト内に特定の値をもつ要素が存在していたら `true` を返します。さもなければ `false` を返します。

## 例

### has() メソッドの使用

```js
var ws = new WeakSet();
var obj = {};
ws.add(window);

mySet.has(window); // returns true
mySet.has(obj); // returns false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakSet.has")}}

## 関連情報

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
