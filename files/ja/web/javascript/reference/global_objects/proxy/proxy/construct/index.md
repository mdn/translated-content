---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
---

{{JSRef}}

**`handler.construct()`** メソッドは {{jsxref("Operators/new", "new")}} 演算子のトラップです。結果として得られるプロキシオブジェクトに対して新しい操作を有効にするためには、プロキシを初期化するために使われるターゲット自身が `[[Construct]]` 内部メソッドを持っていなければなりません(つまり、 `new target` が有効でなければなりません)。

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## 構文

```js
const p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {
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

**`handler.construct()`** メソッドは {{jsxref("Operators/new", "new")}} 操作に対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- `new proxy(...args)`
- {{jsxref("Reflect.construct()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- 結果が `Object` でならなければならない。

## 例

### new 演算子のトラップ

次のコードでは {{jsxref("Operators/new", "new")}} 操作をトラップします。

```js
const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "called: 1"
                             // 10
```

次のコードでは不変条件に違反します。

```js example-bad
const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

new p(); // TypeError is thrown
```

次のコードはプロキシを正しく初期化していません。プロキシの `target` の初期化は、それ自身が {{jsxref("Operators/new", "new")}} 演算子に有効なコンストラクターでなければなりません。

```js example-bad
const p = new Proxy({}, {
  construct: function(target, argumentsList, newTarget) {
    return {};
  }
});

new p(); // TypeError is thrown, "p" is not a constructor
```

## 仕様書

| 仕様書                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget', '[[Construct]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.construct")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Operators/new", "new")}} operator.
- {{jsxref("Reflect.construct()")}}
