---
title: Object.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

> [!NOTE]
> 一部のブラウザーのあるバージョンでは、このメソッドは `Array.prototype.group()` というメソッドとして実装されていました。ウェブの互換性の問題により、現在は静的メソッドとして実装されています。詳細は[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

**`Object.groupBy()`** は静的メソッドで、指定されたコールバック関数によって返された文字列値に従って、指定された反復可能な要素をグループ化します。返されるオブジェクトには、グループごとに個別のプロパティがあり、グループ内の要素を含む配列が格納されます。

このメソッドは、グループ名が文字列で表現できる場合に使用します。任意の値をキーとして要素をグループ化する必要がある場合は、代わりに {{jsxref("Map.groupBy()")}} を使用してください。

{{InteractiveExample("JavaScript デモ: Object.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## 構文

```js-nolint
Object.groupBy(items, callbackFn)
```

### 引数

- `items`
  - : 要素がグループ化される[反復可能な要素](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)（{{jsxref("Array")}} など）。
- `callbackFn`
  - : 反復可能な各要素に対して実行される関数。これは、現在の要素のグループを示すプロパティのキー（文字列または[シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)）に変換できる値を返す必要があります。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理中の要素。
    - `index`
      - : 現在処理中の要素のインデックス。

### 返値

すべてのグループのプロパティを持つ [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト) で、それぞれに関連するグループの要素を含む配列が割り当てられたものです。

## 解説

`Object.groupBy()` は、指定された `callbackFn` 関数を反復可能な要素ごとに 1 回呼び出します。コールバック関数は、関連付けられた要素のグループを示す文字列またはシンボル（どちらの型でもない値は[文字列変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)されます）を返す必要があります。 `callbackFn` が返す値は、`Object.groupBy()` が返すオブジェクトのキーとして使用されます。各キーには、コールバックが同じ値を返したすべての要素を含む連想配列があります。

返されたオブジェクトの要素と元の反復可能な要素は同じです（{{Glossary("deep copy", "ディープコピー")}}ではありません）。要素の内部構造を変更すると、反復可能な要素と返されたオブジェクトの両方に反映されます。

## 例

### Object.groupBy() の使用

最初に、さまざまな食品の在庫を表すオブジェクトを含む配列を定義します。 それぞれの食品は `type` （種類）と `quantity` （量）を保有しています。

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

以下のコードでは、`type` プロパティの値によって要素をグループ化します。

```js
const result = Object.groupBy(inventory, ({ type }) => type);

/* 結果:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

このアロー関数は、呼び出されるたびに配列のそれぞれの要素の 型 を返すだけです。 関数の引数 { type } は、[関数の引数に対するオブジェクトの構造分解構文](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#関数の引数として渡されたオブジェクトからのプロパティの展開)の基本例であることに注意してください。 これは、引数として渡されたオブジェクトの `type` プロパティを展開し、関数本体の `type` という名前の変数に代入します。 これは、関数内の要素に関連する値にアクセスするためのとても簡潔な方法です。

また、要素の 1 つまたは複数のプロパティの値から推測されるグループを作成することもできます。 以下は、`quantity` フィールドの値に基づいて、項目を `ok` または `restock` グループに入れる、とても似たような例です。

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

/* 結果:
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.groupBy` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-grouping)
- [es-shims による `Object.groupBy` のポリフィル](https://www.npmjs.com/package/object.groupby)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
