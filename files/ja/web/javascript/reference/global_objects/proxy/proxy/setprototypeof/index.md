---
title: handler.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.setPrototypeOf()`** メソッドは、オブジェクトの `[[SetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。 {{jsxref("Object.setPrototypeOf()")}} などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.setPrototypeOf()", "taller")}}

```js interactive-example
const handler = {
  setPrototypeOf(monster, monsterProto) {
    monster.geneticallyModified = true;
    return false;
  },
};

const monsterProto = {};
const monster = {
  geneticallyModified: false,
};

const proxy = new Proxy(monster, handler);
// Object.setPrototypeOf(proxy, monsterProto); // TypeError が発生

console.log(Reflect.setPrototypeOf(proxy, monsterProto));
// 予想される結果: false

console.log(monster.geneticallyModified);
// 予想される結果: true
```

## 構文

```js-nolint
new Proxy(target, {
  setPrototypeOf(target, prototype) {
  }
})
```

### 引数

次の引数は `setPrototypeOf()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `prototype`
  - : オブジェクトの新しいプロトタイプ、または `null` です。

### 返値

`setPrototypeOf()` メソッドは、プロトタイプが正常に変更されたかどうかを示す {{jsxref("Boolean")}} を返す必要があります。それ以外の値は[論理値に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean#論理型への変換)。

多くの操作（{{jsxref("Object.setPrototypeOf()")}} を含む）では、内部メソッド `[[SetPrototypeOf]]` が `false` を返した場合、{{jsxref("TypeError")}} が発生します。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

他にも、`[[SetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[SetPrototypeOf]]` 内部メソッドでは、ハンドラー定義が次の不変条件のいずれかに違反する場合、{{jsxref("TypeError")}} を発生します。

- 対象とするオブジェクトが拡張不可の場合は、プロトタイプを変更できません。つまり、{{jsxref(「Reflect.isExtensible()」)}} が `target` に対して `false` を返す場合、かつ `prototype` が `Reflect.getPrototypeOf(target)` の結果と一致しない場合、トラップは偽値を返す必要があります。

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
