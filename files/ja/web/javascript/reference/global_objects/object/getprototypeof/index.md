---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---

{{JSRef}}

**`Object.getPrototypeOf()`** メソッドは、指定されたオブジェクトのプロトタイプ (つまり、内部プロパティ `[[Prototype]]` の値) を返します。

{{EmbedInteractiveExample("pages/js/object-getprototypeof.html")}}

## 構文

```
Object.getPrototypeOf(obj)
```

### 引数

- `obj`
  - : プロトタイプを取得したいオブジェクト。

### 返値

指定されたオブジェクトのプロトタイプです。何も継承していないオブジェクトの場合は {{jsxref("null")}} です。

## 例

### getPrototypeOf の使用

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### オブジェクト以外の型変換

ES5 では引数 _obj_ がオブジェクトではない場合 {{jsxref("TypeError")}} が発生します。しかし ES2015 では対応する {{jsxref("Object")}} に変換されてから処理されます。

```js
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf("foo");
// String.prototype                  (ES2015 code)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.getPrototypeOf")}}

### Opera 固有のメモ

古いバージョンの Opera は `Object.getPrototypeOf()` に対応していませんが、 Opera 10.50 以降で標準外の [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) に対応しています。

## 関連情報

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- John Resig 氏の記事 : [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)
- {{jsxref("Reflect.getPrototypeOf()")}}
