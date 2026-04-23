---
title: handler.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`handler.getPrototypeOf()`** メソッドは、オブジェクトの `[[GetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.getPrototypeOf()")}} などの操作で使用されます。

{{InteractiveExample("JavaScript デモ: handler.getPrototypeOf()", "taller")}}

```js interactive-example
const monster = {
  eyeCount: 4,
};

const monsterPrototype = {
  eyeCount: 2,
};

const handler = {
  getPrototypeOf(target) {
    return monsterPrototype;
  },
};

const proxy = new Proxy(monster, handler);

console.log(Object.getPrototypeOf(proxy) === monsterPrototype);
// 予想される結果: true

console.log(Object.getPrototypeOf(proxy).eyeCount);
// 予想される結果: 2
```

## 構文

```js-nolint
new Proxy(target, {
  getPrototypeOf(target) {
  }
})
```

### 引数

次の引数は `getPrototypeOf()` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`getPrototypeOf()` メソッドは、対象とするオブジェクトのプロトタイプを表すオブジェクトまたは `null` を返す必要があります。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

他にも、`[[GetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

プロキシーの `[[GetPrototypeOf]]` 内部メソッドは、ハンドラー定義が以下のいずれかの不変条件に違反する場合、{{jsxref("TypeError")}} が発生します。

- 結果は、{{jsxref("Object")}} または `null` のどちらかでなければなりません。
- 対象のオブジェクトが拡張可能でない場合（つまり、 {{jsxref("Reflect.isExtensible()")}} が `target` に対して `false` を返す場合）、結果は `Reflect.getPrototypeOf(target)` の結果と同じでなければなりません。

## 例

### 基本的な使い方

```js
const obj = {};
const proto = {};
const handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### getPrototypeOf トラップが発生する５つの方法

```js
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### 2 種類の例外

```js example-bad
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return "foo";
  },
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj2 = Object.preventExtensions({});
const p2 = new Proxy(obj2, {
  getPrototypeOf(target) {
    return {};
  },
});
Object.getPrototypeOf(p2); // TypeError: expected same prototype value
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
