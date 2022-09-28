---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
---

{{JSRef}}

**`handler.setPrototypeOf()`** メソッドは、 {{jsxref("Object.setPrototypeOf()")}} に対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller", "taller")}}

## 構文

```
const p = new Proxy(target, {
  setPrototypeOf: function(target, prototype) {
  }
});
```

### 引数

次の引数は `setPrototypeOf()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `prototype`
  - : オブジェクトの新しいプロトタイプ、または `null` です。

### 返値

`setPrototypeOf()` メソッドは `[[Prototype]]` の変更に成功したら `true` を返し、そうでない場合は `false` を返します。

## 解説

**`handler.setPrototypeOf()`** メソッドは {{jsxref("Object.setPrototypeOf()")}} に対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- `target` が拡張可能でない場合、引数の `prototype` は `Object.getPrototypeOf(target)` と同じ値でなければなりません。

## 例

オブジェクトに新しいプロトタイプを設定することを禁止したい場合は、ハンドラーの `setPrototypeOf()` メソッドで `false` を返したり、例外を発生させたりするようにすることができます。

### アプローチ 1: false を返す

このアプローチでは、例外を発生させる変更操作は、それ自身で例外を生成する必要があります。

例えば、 {{jsxref("Object.setPrototypeOf()")}} は、それ自体が {{jsxref("TypeError")}} を発生させます。 {{jsxref("Reflect.setPrototypeOf()")}} のように、失敗しても通常は例外が発生しない操作で変更操作が行われた場合、例外は発生しません。

```js
const handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

const newProto = {}, target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

### アプローチ 2: 例外を発生

後者のアプローチでは、変更を試みるすべての操作で例外が発生します。このアプローチは、例外を発生しない操作でも失敗時に例外をは正させたい場合や、カスタムの例外値を発生させたい場合に最適です。

```js
const handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error('custom error');
    }
};

const newProto = {}, target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto);  // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## 仕様書

| 仕様書                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v', '[[SetPrototypeOf]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.setPrototypeOf")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
