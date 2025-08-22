---
title: Object.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.getPrototypeOf()`** メソッドは、指定されたオブジェクトのプロトタイプ (つまり、内部プロパティ `[[Prototype]]` の値) を返します。

{{InteractiveExample("JavaScript デモ: Object.getPrototypeOf()", "shorter")}}

```js interactive-example
const prototype = {};
const object = Object.create(prototype);

console.log(Object.getPrototypeOf(object) === prototype);
// 予想される結果: true
```

## 構文

```js-nolint
Object.getPrototypeOf(obj)
```

### 引数

- `obj`
  - : プロトタイプを取得したいオブジェクト。

### 返値

指定されたオブジェクトのプロトタイプです。何も継承していないオブジェクトの場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

## 例

### getPrototypeOf の使用

```js
const proto = {};
const obj = Object.create(proto);
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

{{Compat}}

## 関連情報

- [`Object.getPrototypeOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims による `Object.getPrototypeOf` のポリフィル](https://www.npmjs.com/package/object.getprototypeof)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Reflect.getPrototypeOf()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) (John Resig, 2008)
