---
title: handler.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.get()`** は、オブジェクトの `[[Get]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.get()", "taller")}}

```js interactive-example
const monster = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substring(0, 4)} ... shhhh!`;
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(monster, handler);

console.log(proxy.eyeCount);
// 予想される結果: 4

console.log(proxy.secret);
// 予想される結果: "easi ... shhhh!"
```

## 構文

```js-nolint
new Proxy(target, {
  get(target, property, receiver) {
  }
})
```

### 引数

次の引数が `get()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。
- `property`
  - : プロパティの名称を表す文字列または {{jsxref("Symbol")}} です。
- `receiver`
  - : `this` 値はゲッター用です。 {{jsxref("Reflect.get()")}} を参照してください。これは通常、プロキシー自身か、プロキシーを継承するオブジェクトです。

### 返値

`get()` メソッドはどんな値でも返すことができます。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- プロパティアクセス: `proxy[foo]` と `proxy.bar`
- {{jsxref("Reflect.get()")}}

他にも、`[[Get]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの内部メソッド `[[Get]]` は、ハンドラー定義が以下の不変条件のいずれかに違反している場合、 {{jsxref("TypeError")}} が発生します。

- このプロパティで報告される値は、ターゲットオブジェクトのプロパティが書き込み不可かつ構成不可の自身で所有するデータプロパティである場合、対応するターゲットオブジェクトのプロパティの値と同じでなければなりません。つまり、 {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が、 `target` のプロパティに対して `configurable: false, writable: false` を返した場合、トラップは、 `target` のプロパティ記述子の `value` 属性と同じ値を返さなければなりません。
- 対応するターゲットオブジェクトプロパティが、undefined ゲッターを持つ構成不可な自身のアクセサープロパティである場合、プロパティに対して報告される値は `undefined` でなければなりません。つまり、 {{jsxref("Reflect.getOwnPropertyDescriptor()")}} が、`target` のプロパティに対して `configurable: false, get: undefined` を返す場合、トラップは `undefined` を返す必要があります。

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
