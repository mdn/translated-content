---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Symbol.isConcatSpreadable`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)である `Symbol.isConcatSpreadable` を表します。{{jsxref("Array.prototype.concat()")}} メソッドは、連結される各オブジェクトに対してこのシンボルを探し、配列風オブジェクトとして扱って配列要素を平坦化すべきかどうかを判断します。

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## 値

ウェルノウンシンボル `Symbol.isConcatSpreadable` です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`[Symbol.isConcatSpreadable]` プロパティは、直接または継承されたプロパティとして定義でき、その値は論理値です。これが配列や配列風オブジェクトの挙動を制御できます。

- 配列オブジェクトでは、既定の動作は要素の展開（平坦化）です。`Symbol.isConcatSpreadable` により、これらの場合に平坦化を避けることができます。
- 配列風オブジェクトでは、既定の動作は展開や平坦化を行いません。`Symbol.isConcatSpreadable` により、これらの場合に平坦化を強制することができます。

## 例

### 配列

既定で、{{jsxref("Array.prototype.concat()")}} は配列を次の結果のように展開（平坦化）します。

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 結果: ['a', 'b', 'c', 1, 2, 3]
```

`Symbol.isConcatSpreadable` を `false` に設定すると、既定の動作を無効にすることができます。

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 結果: ['a', 'b', 'c', [1, 2, 3] ]
```

### 配列風オブジェクト

配列風オブジェクトは、既定で展開されません。平坦化された配列を取得するには、`Symbol.isConcatSpreadable` を `true` に設定する必要があります。

```js
const x = [1, 2, 3];

const fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

> **メモ:** `length` プロパティは、追加するオブジェクトプロパティの数を制御するために使用されます。上記の例では、`length:2` は 2 つのプロパティを追加する必要があることを示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.isConcatSpreadable` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}
