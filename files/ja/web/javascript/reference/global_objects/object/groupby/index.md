---
title: Array.prototype.group()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
---

{{JSRef}} {{SeeCompatTable}}

**`group()`** メソッドは、指定されたテスト関数によって返された文字列の値に従って、呼び出された配列の要素をグループ化します。
返されたオブジェクトは、それぞれのグループに対して別個のプロパティを持ち、その中にグループの要素を持つ配列が含まれます。

<!-- {{EmbedInteractiveExample("pages/js/array-groupby.html")}} -->

このメソッドは、グループ名が文字列で表現できる場合に使用すべきものです。
任意の値をキーとして要素をグループ化する必要がある場合は、代わりに {{jsxref("Array.prototype.groupToMap()")}} を使用してください。

## 構文

```js
// アロー関数
group((element) => {
  /* … */
});
group((element, index) => {
  /* … */
});
group((element, index, array) => {
  /* … */
});

// コールバック関数
group(callbackFn);
group(callbackFn, thisArg);

// インラインコールバック関数
group(function (element) {
  /* … */
});
group(function (element, index) {
  /* … */
});
group(function (element, index, array) {
  /* … */
});
group(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 配列のそれぞれの要素に対して実行する関数

    この関数は以下の引数と共に呼び出されます。

    - `element`
      - : 配列における現在の要素の値。
    - `index`
      - : 配列における現在の要素の添字（位置）。
    - `array`
      - : `group()` が呼び出された配列。

    コールバックから返されるオブジェクトは、現在の要素のグループを示します。
    この返されたコールバック値は、文字列に変換することが可能でなければなりません（この文字列は、最終的に返されるオブジェクトのプロパティ名として使用されます）。

- `thisArg` {{optional_inline}}

  - : `callbackFn` 内で {{jsxref("Operators/this", "this")}} として使用されるオブジェクト。

    この引数はアロー関数では無視されます。アロー関数は自分自身でレキシカルなスコープを保有しており、それが代わりに使用されるからです。
    それ以外の場合、もし `thisArg` が指定されていなければ、実行中のスコープの `this` が使用されます。関数が[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で呼び出された場合には `undefined` が使用されます。

### 返値

すべてのグループのプロパティを持つ [`Object`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) で、それぞれに関連するグループの要素を含む配列が割り当てられてたものです。値は、 `Object.prototype` を継承しないオブジェクトです。

### 例外

- `TypeError`
  - : 指定されたコールバック関数が呼び出し可能でない場合。

## 解説

`group()` メソッドは、配列のそれぞれの要素に対して、その要素のグループを示す文字列（または文字列に強制できる値）を返す `callbackFn` 関数を一度ずつ実行します。
コールバックによって返された固有のグループ名ごとに、新しいプロパティと配列が結果のオブジェクトに作成されます。
それぞれの要素は、そのグループに対応するプロパティ内の配列に追加されます。

返されたオブジェクトは、元の配列と同じ要素を参照することに注意しましょう（{{glossary("deep copy","ディープコピー")}}ではありません）。
これらの要素の内部構造を変更すると、元の配列と返されるオブジェクトの両方に反映されます。

`callbackFn` は現在の要素の値、現在の添字、および配列そのものを指定して呼び出されます。
グループは現在の要素にのみ依存することが多いのですが、配列の他の要素の値に基づいたグループ化方針を実装することも可能です。

`callbackFn` は、値が割り当てられている添字だけでなく、配列のすべての添字に対して呼び出されます。
このため、代入された値のみを参照するメソッドと比較して、不連続な配列では効率が悪くなることがあります。

`group()` に `thisArg` 引数が指定された場合は、 `callbackFn` を呼び出すたびに `this` の値として使用されます。
指定されなかった場合は、{{jsxref("undefined")}} が使用されます。

### コールバックでの配列の書き替え

`group()` メソッドは呼び出された配列を書き替えませんが、 `callbackFn` に指定された関数は書き替えることができます。
ただし、 `group()` で処理される要素は最初に `callbackFn` を呼び出す前に設定されることに注意してください。
したがって、以下のようになります。

- `callbackFn` は `group()` の呼び出しが始まった後に配列に追加された要素に対しては呼び出されません。
- 既に呼び出された添字に割り当てられた要素や、範囲外の添字に割り当てられた要素に対しては、 `callbackFn` は呼び出されません。
- 配列の既存の、まだ呼び出されていない要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値は、 `group()` がその要素の添字を処理した時点での値になります。
- {{jsxref("Operators/delete", "削除", "", 1)}}された要素に対しても呼び出されます。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

## 例

最初に、さまざまな食品の在庫を表すオブジェクトを含む配列を定義します。
それぞれの食品は `type` （種類）と `quantity` （量）を保有しています。

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

以下のコードでは、 type` プロパティの値によって要素をグループ化します。

```js
const result = inventory.group(({ type }) => type);

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

このアロー関数は、呼び出されるたびに配列のそれぞれの要素の `型` を返すだけです。
関数の引数 `{ type }` は、[関数の引数に対するオブジェクトの分割構文](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#引数に指定されたオブジェクトの属性への参照)の基本例であることに注意してください。
これは、引数として渡されたオブジェクトの `type` プロパティを展開し、関数本体の `type` という名前の変数に代入します。
これは、関数内の要素に関連する値にアクセスするためのとても簡潔な方法です。

また、要素の 1 つまたは複数のプロパティの値から推測されるグループを作成することもできます。
以下は、 `quantity` フィールドの値に基づいて、項目を `ok` または `restock` グループに入れる、とても似たような例です。

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

result = inventory.group(myCallback);

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

- {{jsxref("Array.prototype.groupToMap()")}} – 任意の種類のオブジェクトをキーまたは値として使用し、配列をマップにグループ化します。
- [`Array.prototype.group` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-grouping)
