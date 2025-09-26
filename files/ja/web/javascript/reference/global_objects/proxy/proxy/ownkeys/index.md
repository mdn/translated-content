---
title: handler.ownKeys()
short-title: ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.ownKeys()`** メソッドは、オブジェクトの `[[OwnPropertyKeys]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。 {{jsxref("Object.keys()")}}, {{jsxref("Reflect.ownKeys()")}} などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.ownKeys()", "taller")}}

```js interactive-example
const monster = {
  _age: 111,
  [Symbol("secret")]: "I am scared!",
  eyeCount: 4,
};

const handler = {
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },
};

const proxy = new Proxy(monster, handler);

for (const key of Object.keys(proxy)) {
  console.log(key);
  // 予想される結果: "_age"
  // 予想される結果: "eyeCount"
}
```

## 構文

```js-nolint
new Proxy(target, {
  ownKeys(target) {
  }
})
```

### 引数

次の引数は `ownKeys()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`ownKeys()` メソッドは [配列風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#配列風オブジェクト)を返す必要があります。それぞれの要素は {{jsxref("String")}} または {{jsxref("Symbol")}} であり、重複するアイテムを含んではいけません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

他にも、`[[OwnPropertyKeys]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[OwnPropertyKeys]]` 内部メソッドでは、ハンドラー定義が以下の不変条件のいずれかに違反する場合、{{jsxref("TypeError")}} が発生します。

- 結果が {{jsxref("Object")}} である。
- キーのリストには重複する値が含まれていない。
- それぞれのキーの型が {{jsxref("String")}} または {{jsxref("Symbol")}} のどちらかである。
- 結果リストには、ターゲットオブジェクトのすべての構成不可の自己プロパティのキーが含まれていなければならない。つまり、ターゲットオブジェクトに対して {{jsxref("Reflect.ownKeys()")}} が返すすべてのキーについて、そのキーが {{jsxref("Reflect.getOwnPropertyDescriptor()")}} によって `configurable: false` を返す場合、そのキーは結果リストに含まれていなければならない。
- 対象オブジェクトが拡張不可の場合、結果リストには対象オブジェクトの自己プロパティのすべてのキーが含まれ、それ以外の値は含まれてはいけない。つまり、{{jsxref("Reflect.isExtensible()")}} が `target` で `false` を返す場合、結果リストには {{jsxref("Reflect.ownKeys()")}} を `target` に適用した結果と同じ値が含まれなければならない。

## 例

### getOwnPropertyNames のトラップ

次のコードでは {{jsxref("Object.getOwnPropertyNames()")}} をトラップします。

```js
const p = new Proxy(
  {},
  {
    ownKeys(target) {
      console.log("called");
      return ["a", "b", "c"];
    },
  },
);

console.log(Object.getOwnPropertyNames(p));
// "called"
// [ 'a', 'b', 'c' ]
```

次のコードでは不変条件に違反します。

```js example-bad
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10,
});

const p = new Proxy(obj, {
  ownKeys(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  },
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
