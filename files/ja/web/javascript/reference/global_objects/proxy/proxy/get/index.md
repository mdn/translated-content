---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.get()`** は、オブジェクトの `[[Get]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  get(target, property, receiver) {
  }
});
```

### 引数

次の引数が `get()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクト
- `property`
  - : 取得するプロパティの名称
- `receiver`
  - : プロキシー、またはプロキシーから継承するオブジェクトのどちらか

### 返値

`get()` メソッドはどんな値でも返すことができます。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- プロパティアクセス: `proxy[foo]` と `proxy.bar`
- {{jsxref("Reflect.get()")}}

他にも、`[[Get]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

- ターゲットオブジェクトプロパティが書き込み不可、構成不可の自分自身のデータプロパティである場合、プロパティとして報告される値は、対応するターゲットオブジェクトプロパティの値と同じでなければなりません。
- 対応する対象オブジェクトのプロパティが、`[[Get]]` 属性として `undefined` を持つ、構成不可の自分自身のアクセサープロパティである場合、プロパティに対して報告される値は undefined でなければなりません。

## 例

### プロパティ値の取得のトラップ

次のコードではプロパティ値の取得をトラップします。

```js
const p = new Proxy(
  {},
  {
    get(target, property, receiver) {
      console.log(`called: ${property}`);
      return 10;
    },
  },
);

console.log(p.a);
// "called: a"
// 10
```

次のコードでは不変条件に違反します。

```js
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

const p = new Proxy(obj, {
  get(target, property) {
    return 20;
  },
});

p.a; // TypeError is thrown
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.get()")}}
