---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.construct()`** メソッドは、オブジェクトの `[[Construct]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Operators/new", "new")}} 演算子などの操作で使用されます。結果としてのプロキシーオブジェクトが new 演算子を使用できるようにするためには、プロキシを初期化するために使用されるターゲット自体が有効なコンストラクターである必要があります。

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  construct(target, argumentsList, newTarget) {
  }
});
```

### 引数

次の引数が `construct()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクト
- `argumentsList`
  - : コンストラクタに対する引数のリスト
- `newTarget`
  - : 上記の `p` に呼び出された元のコンストラクターです。

### 返値

`construct` メソッドはオブジェクトを返す必要があります。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- The [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

他にも、`[[Construct]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、呼び出されるとトラップで {{jsxref("TypeError")}} が発生します。

- 結果が `Object` でならなければならない。

## 例

### new 演算子のトラップ

次のコードでは {{jsxref("Operators/new", "new")}} 操作をトラップします。

```js
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    console.log(`called: ${argumentsList}`);
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "called: 1"
// 10
```

次のコードでは不変条件に違反します。

```js example-bad
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    return 1;
  },
});

new p(); // TypeError is thrown
```

次のコードはプロキシーを正しく初期化していません。プロキシーの `target` の初期化は、それ自身が {{jsxref("Operators/new", "new")}} 演算子に有効なコンストラクターでなければなりません。

```js example-bad
const p = new Proxy(
  {},
  {
    construct(target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError is thrown, "p" is not a constructor
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/new", "new")}} 演算子
- {{jsxref("Reflect.construct()")}}
