---
title: Reflect.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.getOwnPropertyDescriptor()`** は静的メソッドで、{{jsxref("Object.getOwnPropertyDescriptor()")}} と似ています。オブジェクトに指定されたプロパティが存在する場合、そのプロパティ記述子を返します。存在しない場合は {{jsxref("undefined")}} を返します。

{{InteractiveExample("JavaScript デモ: Reflect.getOwnPropertyDescriptor()")}}

```js interactive-example
const object = {
  property1: 42,
};

console.log(Reflect.getOwnPropertyDescriptor(object, "property1").value);
// 予想される結果: 42

console.log(Reflect.getOwnPropertyDescriptor(object, "property2"));
// 予想される結果: undefined

console.log(Reflect.getOwnPropertyDescriptor(object, "property1").writable);
// 予想される結果: true
```

## 構文

```js-nolint
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### 引数

- `target`
  - : プロパティを探す対象のオブジェクト。
- `propertyKey`
  - : 所有しているプロパティ記述子を取得するためのプロパティ名。

### 返値

`target` オブジェクト内にプロパティが存在する場合は、プロパティ記述子オブジェクト、または {{jsxref("undefined")}}。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合

## 解説

`Reflect.getOwnPropertyDescriptor()` は、オブジェクトのプロパティ記述子を取得する反射的意味づけを提供します。{{jsxref("Object.getOwnPropertyDescriptor()")}} との唯一の違いは、オブジェクト以外の対象の処理方法です。`Reflect.getOwnPropertyDescriptor()` は対象がオブジェクトでない場合に {{jsxref("TypeError")}} を発生しますが、`Object.getOwnPropertyDescriptor()` はそれをオブジェクトに変換します。

`Reflect.getOwnPropertyDescriptor()` は、`target` の `[[GetOwnProperty]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.getOwnPropertyDescriptor() の使用

```js
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Object.getOwnPropertyDescriptor() との違い

このメソッドへの最初の引数がオブジェクトではない (プリミティブであった) 場合、 {{jsxref("TypeError")}} が発生します。 {{jsxref("Object.getOwnPropertyDescriptor")}} だと、非オブジェクトである最初の引数は強制的にオブジェクトに変換されます。

```js
Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
// { value: "f", writable: false, enumerable: true, configurable: false }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.getOwnPropertyDescriptor` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`handler.getOwnPropertyDescriptor()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)
