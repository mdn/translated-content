---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
tags:
- Error
- Errors
- JavaScript
- TypeError
translation_of: Web/JavaScript/Reference/Errors/No_non-null_object
---
{{JSSidebar("Errors")}}

JavaScript の例外 "is not a non-null object" は、ある場所でオブジェクトが期待されているのに提供されなかった場合に発生します。 {{jsxref("null")}} はオブジェクトではなく、動作しません。

## エラーメッセージ

```js
TypeError: Invalid descriptor for property {x} (Edge)
TypeError: "x" is not a non-null object (Firefox)
TypeError: Property description must be an object: "x" (Chrome)
TypeError: Invalid value used in weak set (Chrome)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

ある場所でオブジェクトが期待されていますが、提供されませんでした。 {{jsxref("null")}} はオブジェクトではなく、動作しません。与えられた状況で適切なオブジェクトを提供しなければなりません。

## 例

## プロパティ記述子が求められている場合

{{jsxref("Object.create()")}} メソッドや {{jsxref("Object.defineProperty()")}} メソッド、{{jsxref("Object.defineProperties()")}} メソッドを使用するとき、省略可能な記述子の引数として、プロパティ記述子オブジェクトが想定されます。 (ただの数値など) オブジェクト以外のものを提供すると、エラーが発生します。

```js example-bad
Object.defineProperty({}, 'key', 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, 'key', null);
// TypeError: null is not a non-null object
```

有効なプロパティ記述子はこのようになります。

```js example-good
Object.defineProperty({}, 'key', { value: 'foo', writable: false });
```

## `WeakMap` および `WeakSet` オブジェクトにはオブジェクトキーが必要

{{jsxref("WeakMap")}} および {{jsxref("WeakSet")}} オブジェクトはオブジェクトをキーとして保持します。そのほかの型をキーとして使用できません。

```js example-bad
var ws = new WeakSet();
ws.add('foo');
// TypeError: "foo" is not a non-null object
```

代わりにオブジェクトを使用してください。

```js example-good
ws.add({foo: 'bar'});
ws.add(window);
```

## 関連項目

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}
