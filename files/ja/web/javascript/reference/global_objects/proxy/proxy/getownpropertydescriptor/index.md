---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.getOwnPropertyDescriptor()`** は、オブジェクトの `[[GetOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.getOwnPropertyDescriptor()")}} などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  getOwnPropertyDescriptor(target, prop) {
  }
});
```

### 引数

次の引数は `getOwnPropertyDescriptor()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `prop`
  - : ディスクリプタを取得されるプロパティ名です。

### 返値

`getOwnPropertyDescriptor` メソッドはオブジェクト、または `undefined` を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

他にも、`[[GetOwnProperty]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

- `getOwnPropertyDescriptor()` はオブジェクトか、または `undefined` を返さなければなりません。
- プロパティがターゲットオブジェクトの設定不可な独自のプロパティとして存在する場合、存在しないとして報告されてはいけません。
- プロパティがターゲットオブジェクトの独自のプロパティとして存在し、そのターゲットオブジェクトが拡張不可の場合、存在しないとして報告されてはいけません。
- プロパティがターゲットオブジェクトの独自のプロパティとして存在せず、そのターゲットオブジェクトが拡張不可の場合、存在するとして報告されてはいけません。
- プロパティがターゲットオブジェクトの独自のプロパティとして存在しないか、ターゲットオブジェクトの設定可能な独自のプロパティとして存在している場合、設定不可であるとして報告されてはいけません。
- `Object.getOwnPropertyDescriptor(target)` の結果を `Object.defineProperty()` に使用した時に、ターゲットオブジェクトに適用でき、例外を発生させません。

## 例

### getOwnPropertyDescriptor のトラップ

次のコードでは {{jsxref("Object.getOwnPropertyDescriptor()")}} をトラップします。

```js
const p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor(target, prop) {
      console.log(`called: ${prop}`);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value);
// "called: a"
// 10
```

次のコードでは不変条件に違反します。

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor(target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
