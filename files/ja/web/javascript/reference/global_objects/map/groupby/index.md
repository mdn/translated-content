---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

> [!NOTE]
> 一部のブラウザーのあるバージョンでは、このメソッドは `Array.prototype.groupToMap()` というメソッドとして実装されていました。ウェブの互換性の問題により、現在は静的メソッドとして実装されています。詳細は[ブラウザーの互換性](#ブラウザーの互換性)を確認してください

**Map.groupBy()** 静的メソッドは、指定されたコールバック関数によって返された値を使用して、指定された反復可能な要素をグループ化します。最終的に返される {{jsxref("Map")}} は、テスト関数からの一意な値をキーとして使用し、各グループの要素の配列を取得するために使用できます。

このメソッドは主に、あるオブジェクトに関連する要素をグループ化するときに便利で、特にそのオブジェクトが時間の経過とともに変化する可能性がある場合に便利です。オブジェクトが不変である場合は、代わりに文字列を使用してそれを表現し、{{jsxref("Object.groupBy()")}} で要素をグループ化することができます。

{{EmbedInteractiveExample("pages/js/map-groupby.html", "taller")}}

## 構文

```js-nolint
Map.groupBy(items, callbackFn)
```

### 引数

- `items`
  - : 要素がグループ化される[反復可能な要素](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)（{{jsxref("Array")}} など）。
- `callbackFn`
  - : 反復可能な各要素に対して実行される関数。これは、現在の要素のグループを示す値（オブジェクトまたはプリミティブ）を返す必要があります。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理中の要素。
    - `index`
      - : 現在処理中の要素のインデックス。

### 返値

各グループのキーを持つ {{jsxref("Map")}} オブジェクトで、それぞれに関連するグループの要素を含む配列が割り当てられたものです。

## 解説

`Map.groupBy()` は、指定された `callbackFn` 関数を反復可能な要素ごとに 1 回呼び出します。コールバック関数は、関連付けられた要素のグループを示す値を返す必要があります。`callbackFn` が返す値は、`Map.groupBy()` が返す {{jsxref("Map")}} のキーとして使用されます。各キーには、コールバックが同じ値を返したすべての要素を含む関連配列があります。

返された {{jsxref("Map")}} と元の反復可能な要素は同じです（{{Glossary("deep copy", "ディープコピー")}}ではありません）。要素の内部構造を変更すると、元の反復可能な要素と返された {{jsxref("Map")}} の両方に反映されます。

このメソッドは、時間の経過とともに変更される可能性のある特定のオブジェクトに関連する情報をグループ化する必要がある場合に便利です。オブジェクトが変更されても、返される `Map` のキーとして機能し続けるからです。代わりにオブジェクトの文字列表現を作成し、それを {{jsxref("Object.groupBy()")}} のグループ化キーとして使用する場合は、オブジェクトが変更されても元のオブジェクトとその表現との間のマッピングを維持する必要があります。

> [!NOTE]
> 返された `Map` のグループにアクセスするには、`Map` のキーとして元々使用されていたのと同じオブジェクトを使用する必要があります（ただし、そのオブジェクトのプロパティを変更することはできます）。たまたま同じ名前とプロパティを持つ別のオブジェクトを使うことはできません。

`Map.groupBy` は `this` の値を読みません。どんなオブジェクトでも呼び出すことができ、新しい {{jsxref("Map")}} インスタンスが返されます。

## 例

### Map.groupBy() の使用

最初に、さまざまな食品の在庫を表すオブジェクトを含む配列を定義します。 それぞれの食品は `type` （種類）と `quantity` （量）を保有しています。

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

以下のコードでは、`Map.groupBy()` とアロー関数を使用しています。この関数は、要素が `quantity < 6` であるかどうかに応じて、`restock` または `enough` というオブジェクトであるキーを返します。返された `result` オブジェクトは `Map` なので、配列を取得するためにキーで `get()` を呼び出す必要があります。

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

関数の引数 `{ quantity }` は、[関数の引数に対するオブジェクトの分割構文](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#関数の引数として渡されたオブジェクトからのプロパティの展開)の基本例であることに注意してください。これは、引数として渡されたオブジェクトの `quantity` プロパティを展開し、関数本体の `quantity` という変数に代入します。これは、関数内の要素に関連する値にアクセスするためのとても簡潔な方法です。

キーである `Map` は内容を変更しても使用し続けることができます。しかし、キーを再作成して使用することはできません。このため、`Map` を使用する必要があるものは、そのキーへの参照を保持し続けることが重要です。

```js
// キーの内容を変更しても使用し続けられます
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// 新しいキーは、たとえ同じ構造の map であっても使用できません
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Map.groupBy` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-grouping)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
