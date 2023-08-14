---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.has()`** は、オブジェクトの `[[HasProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Operators/in", "in")}} 演算子などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-has.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  has(target, prop) {
  }
});
```

### 引数

次の引数は `has()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `prop`
  - : 存在を確認するプロパティ名です。

### 返値

`has` メソッドは論理値を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子: `foo in proxy`
- [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) チェック: `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

他にも、`[[HasProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

- プロパティがターゲットオブジェクトの設定不可の独自プロパティとして存在する場合、存在しないとして報告されてはいけません。
- プロパティがターゲットオブジェクトの独自プロパティとして存在し、そのターゲットオブジェクトが拡張不可の場合、存在しないとして報告されてはいけません。

## 例

### in 演算子のトラップ

次のコードでは {{jsxref("Operators/in", "in")}} 演算子をトラップします。

```js
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p);
// "called: a"
// true
```

次のコードでは不変条件に違反します。

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/in", "in")}} 演算子
- {{jsxref("Reflect.has()")}}
