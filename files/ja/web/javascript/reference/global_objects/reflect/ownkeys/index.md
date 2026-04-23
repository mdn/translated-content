---
title: Reflect.ownKeys()
short-title: ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.ownKeys()`** は静的メソッドで、`target` オブジェクトが持つプロパティキーの配列を返します。

{{InteractiveExample("JavaScript デモ: Reflect.ownKeys()")}}

```js interactive-example
const object = {
  property1: 42,
  property2: 13,
};

const array1 = [];

console.log(Reflect.ownKeys(object));
// 予想される結果: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// 予想される結果: Array ["length"]
```

## 構文

```js-nolint
Reflect.ownKeys(target)
```

### 引数

- `target`
  - : キーを取得する対象のオブジェクトです。

### 返値

{{jsxref("Array")}} で、`target` オブジェクト自身のプロパティキー（文字列とシンボルを含む）が含まれます。ほとんどのオブジェクトでは、配列は次の順序になります。

1. 非負の整数インデックスを昇順の数値順（ただし文字列として）
2. その他の文字列キー（プロパティ作成順）
3. シンボルキー（プロパティ作成順）

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合に発生します。

## 解説

`Reflect.ownKeys()` は、オブジェクトのすべてのプロパティキーを取得する反射的意味付けを指定します。これは、追加のフィルタリングロジックなしで、列挙可能・列挙不可、文字列・シンボルを問わず、すべての固有プロパティを一回の呼び出しで取得する唯一の方法です。例えば、{{jsxref("Object.getOwnPropertyNames()")}} は `Reflect.ownKeys()` の返値を受け取り、文字列値のみにフィルタリングします。一方、{{jsxref("Object.getOwnPropertySymbols()")}} はシンボル値のみにフィルタリングします。通常のオブジェクトは `[[OwnPropertyKeys]]` を実装してシンボルキーの前にすべての文字列キーを返すため、`Reflect.ownKeys(target)` は通常 `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))` と同等です。ただし、オブジェクトが独自の `[[OwnPropertyKeys]]` メソッド（プロキシーオブジェクトの [`ownKeys`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys) ハンドラーなど）を持つ場合、キーの順序が異なる可能性があります。

`Reflect.ownKeys()` は、`target` の `[[OwnPropertyKeys]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.ownKeys() の使用

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

const sym = Symbol.for("comet");
const sym2 = Symbol.for("meteor");
const obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// 数字順のインデックス、
// 挿入順の文字列、
// 挿入順のシンボル
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.ownKeys` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- [es-shims による `Reflect.ownKeys` のポリフィル](https://www.npmjs.com/package/reflect.ownkeys)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [`handler.ownKeys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
