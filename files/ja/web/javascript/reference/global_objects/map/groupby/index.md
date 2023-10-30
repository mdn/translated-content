---
title: Array.prototype.groupToMap()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
---

{{JSRef}} {{SeeCompatTable}}

**`groupToMap()`** メソッドは、指定されたテスト関数によって返された値を使用して、呼び出された配列の要素をグループ化します。
最終的に返される {{jsxref("Map")}} は、テスト関数から得られる固有の値をキーとして使用し、これを用いて各グループに属する要素の配列を取得することができます。

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

このメソッドは、あるオブジェクトに関連する要素をグループ化するときに、特にそのオブジェクトが時間の経過とともに変化する可能性がある場合に特に有用です。
オブジェクトが不変である場合、代わりに文字列を使用してそれを表現し、{{jsxref("Array.prototype.group()")}}で要素をグループ化することができるかもしれません。

## 構文

```js
// アロー関数
groupToMap((element) => {
  /* … */
});
groupToMap((element, index) => {
  /* … */
});
groupToMap((element, index, array) => {
  /* … */
});

// コールバック関数
groupToMap(callbackFn);
groupToMap(callbackFn, thisArg);

// インラインコールバック関数
groupToMap(function (element) {
  /* … */
});
groupToMap(function (element, index) {
  /* … */
});
groupToMap(function (element, index, array) {
  /* … */
});
groupToMap(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 配列のそれぞれの要素に対して実行する関数です。

    この関数は以下の引数と共に呼び出されます。

    - `element`
      - : 配列における現在の要素。
    - `index`
      - : 配列における現在の要素の添字（位置）。
    - `array`
      - : `groupToMap()` が呼び出された配列。

    コールバックから返される値（{{Glossary("object", "オブジェクト")}}または{{Glossary("primitive", "プリミティブ")}}）は、現在の要素のグループを示します。

- `thisArg` {{optional_inline}}

  - : `callbackFn` 内で {{jsxref("Operators/this", "this")}} として使用されるオブジェクト。

    この引数はアロー関数では無視されます。アロー関数は自分自身でレキシカルなスコープを保有しており、それが代わりに使用されるからです。
    それ以外の場合、もし `thisArg` が指定されていなければ、実行中のスコープの `this` が使用されます。関数が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で呼び出された場合には `undefined` が使用されます。

### 返値

各グループのキーを持つ {{jsxref("Map")}} オブジェクトで、それぞれが関連するグループの要素を含む配列に割り当てられています。

### 例外

- `TypeError`
  - : 指定されたコールバック関数が呼び出し可能でない場合。

## 解説

`groupToMap()` メソッドは、配列の各添字に対して `callbackFn` を一度ずつ実行します。
コールバック関数は、関連付けられた要素のグループを示す値を返します。
`callbackFn` が返す値は、 `groupToMap()` が返す {{jsxref("Map")}} のキーとして使用されます。
各キーには、コールバックが同じ値を返したすべての要素を含む、連想配列があります。

返される {{jsxref("Map")}} と元の配列の要素は同じです（{{glossary("deep copy", "ディープコピー")}}ではありません）。
要素の内部構造を変更すると、元の配列と返される {{jsxref("Map")}} の両方に反映されます。

このメソッドは、時間の経過とともに変化する可能性のある特定のオブジェクトに関連する情報をグループ化する必要がある場合に有用です。
これは、たとえオブジェクトが変更されたとしても、返された `Map` のキーとして動作し続けるからです。
代わりにオブジェクトの文字列表現を作成し、それを {{jsxref("Array.prototype.group()") }} でグループ化のキーとして使用する場合、オブジェクトが変更されたときに元のオブジェクトとその表現との間の対応を維持する必要があります。

> **メモ:** 返された `Map` のグループにアクセスするには、もともと `Map` のキーとして使用されていたオブジェクトと同じものを使用しなければなりません（ただし、そのプロパティを変更することは可能です）。
> たまたま同じ名前とプロパティを持つだけの別のオブジェクトを使用することはできません。

`callbackFn` は現在の要素の値、現在の添字、および配列そのものを指定して呼び出されます。
グループは現在の要素にのみ依存することが多いのですが、配列の他の要素の値に基づいたグループ化方針を実装することも可能です。

`callbackFn` は、値が割り当てられている添字だけでなく、配列のすべての添字に対して呼び出されます。
このため、代入された値のみを参照するメソッドと比較して、不連続な配列では効率が悪くなることがあります。

`groupToMap()` に `thisArg` 引数が指定された場合は、 `callbackFn` を呼び出すたびに `this` の値として使用されます。
指定されなかった場合は、{{jsxref("undefined")}} が使用されます。

### コールバックでの配列の書き替え

`groupToMap()` メソッドは呼び出された配列を書き替えませんが、 `callbackFn` に指定された関数は書き替えることができます。
ただし、 `groupToMap()` で処理される要素は最初に `callbackFn` を呼び出す前に設定されることに注意してください。
したがって、以下のようになります。

- `callbackFn` は `groupToMap()` の呼び出しが始まった後に配列に追加された要素に対しては呼び出されません。
- 既に呼び出された添字に割り当てられた要素や、範囲外の添字に割り当てられた要素に対しては、 `callbackFn` は呼び出されません。
- 配列の既存の、まだ呼び出されていない要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値は、 `groupToMap()` がその要素の添字を処理した時点での値になります。
- [削除](/ja/docs/Web/JavaScript/Reference/Operators/delete#deleting_array_elements)された要素に対しても呼び出されます。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

## 例

最初に、さまざまな食品の在庫を表すオブジェクトを含む配列を定義します。
それぞれの食品は `type` （種類）と `quantity` （量）を保有しています。

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

以下のコードでは、`groupToMap()` にアロー関数を使用し、要素が `quantity < 6` であるかどうかによって `restock` または `sufficient` というオブジェクトのキーを返しています。
返される `result` オブジェクトは `Map` なので、配列を返すにはキーを指定して `get()` を呼び出す必要があります。

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = inventory.groupToMap(({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// expected output: Array [Object { name: "bananas", type: "fruit", quantity: 5 }]
```

関数の引数 `{ quantity }` は、[関数の引数に対するオブジェクトの分割構文](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#引数に指定されたオブジェクトの属性への参照)の基本例であることに注意してください。
これは、引数として渡されたオブジェクトの `quantity` プロパティを展開し、関数本体の `quantity` という名前の変数に代入します。
これは、関数内の要素に関連する値にアクセスするためのとても簡潔な方法です。

`Map` のキーは変更されても使用することができます。
しかし、キーを再作成して、それを使用することはできません。
このため、マップを使用する必要がある何らかのものは、そのキーへの参照を保持することが重要です。

```js
// The key can be modified and still used
restock["fast"] = true;
console.log(result.get(restock));
// expected output: Array [Object { name: "bananas", type: "fruit", quantity: 5 }]

// A new key can't be used, even if it has the same structure!
const restock2 = { restock: true };
console.log(result.get(restock2));
// expected output: undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.group()")}}
- [`Array.prototype.group` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-grouping)
