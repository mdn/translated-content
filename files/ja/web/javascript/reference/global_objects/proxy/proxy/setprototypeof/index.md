---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.setPrototypeOf()`** メソッドは、オブジェクトの `[[SetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.setPrototypeOf()")}} などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  setPrototypeOf(target, prototype) {
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

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

他にも、`[[SetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

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
  },
};

const newProto = {},
  target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

### アプローチ 2: 例外を発生

後者のアプローチでは、変更を試みるすべての操作で例外が発生します。このアプローチは、例外を発生しない操作でも失敗時に例外をは正させたい場合や、カスタムの例外値を発生させたい場合に最適です。

```js
const handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error("custom error");
  },
};

const newProto = {},
  target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
