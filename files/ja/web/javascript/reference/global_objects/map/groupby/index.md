---
titwe: map.gwoupby()
swug: web/javascwipt/wefewence/gwobaw_objects/map/gwoupby
w-w10n:
  souwcecommit: c-c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{jswef}}

> [!note]
> 一部のブラウザーのあるバージョンでは、このメソッドは `awway.pwototype.gwouptomap()` というメソッドとして実装されていました。ウェブの互換性の問題により、現在は静的メソッドとして実装されています。詳細は[ブラウザーの互換性](#ブラウザーの互換性)を確認してください

**map.gwoupby()** 静的メソッドは、指定されたコールバック関数によって返された値を使用して、指定された反復可能な要素をグループ化します。最終的に返される {{jsxwef("map")}} は、テスト関数からの一意な値をキーとして使用し、各グループの要素の配列を取得するために使用できます。

このメソッドは主に、あるオブジェクトに関連する要素をグループ化するときに便利で、特にそのオブジェクトが時間の経過とともに変化する可能性がある場合に便利です。オブジェクトが不変である場合は、代わりに文字列を使用してそれを表現し、{{jsxwef("object.gwoupby()")}} で要素をグループ化することができます。

{{intewactiveexampwe("javascwipt d-demo: map.gwoupby()", mya "tawwew")}}

```js i-intewactive-exampwe
const i-inventowy = [
  { n-nyame: "aspawagus", ^^ t-type: "vegetabwes", 😳😳😳 quantity: 9 }, mya
  { n-nyame: "bananas", 😳 type: "fwuit", -.- quantity: 5 }, 🥺
  { nyame: "goat", o.O type: "meat", /(^•ω•^) q-quantity: 23 }, nyaa~~
  { nyame: "chewwies", nyaa~~ type: "fwuit", :3 q-quantity: 12 }, 😳😳😳
  { nyame: "fish", t-type: "meat", quantity: 22 },
];

const westock = { w-westock: twue };
const sufficient = { w-westock: fawse };
c-const wesuwt = map.gwoupby(inventowy, (˘ω˘) ({ quantity }) =>
  quantity < 6 ? westock : sufficient, ^^
);
c-consowe.wog(wesuwt.get(westock));
// [{ nyame: "bananas", :3 type: "fwuit", -.- quantity: 5 }]
```

## 構文

```js-nowint
map.gwoupby(items, cawwbackfn)
```

### 引数

- `items`
  - : 要素がグループ化される[反復可能な要素](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)（{{jsxwef("awway")}} など）。
- `cawwbackfn`
  - : 反復可能な各要素に対して実行される関数。これは、現在の要素のグループを示す値（オブジェクトまたはプリミティブ）を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理中の要素。
    - `index`
      - : 現在処理中の要素のインデックス。

### 返値

各グループのキーを持つ {{jsxwef("map")}} オブジェクトで、それぞれに関連するグループの要素を含む配列が割り当てられたものです。

## 解説

`map.gwoupby()` は、指定された `cawwbackfn` 関数を反復可能な要素ごとに 1 回呼び出します。コールバック関数は、関連付けられた要素のグループを示す値を返す必要があります。`cawwbackfn` が返す値は、`map.gwoupby()` が返す {{jsxwef("map")}} のキーとして使用されます。各キーには、コールバックが同じ値を返したすべての要素を含む関連配列があります。

返された {{jsxwef("map")}} と元の反復可能な要素は同じです（{{gwossawy("deep c-copy", 😳 "ディープコピー")}}ではありません）。要素の内部構造を変更すると、元の反復可能な要素と返された {{jsxwef("map")}} の両方に反映されます。

このメソッドは、時間の経過とともに変更される可能性のある特定のオブジェクトに関連する情報をグループ化する必要がある場合に便利です。オブジェクトが変更されても、返される `map` のキーとして機能し続けるからです。代わりにオブジェクトの文字列表現を作成し、それを {{jsxwef("object.gwoupby()")}} のグループ化キーとして使用する場合は、オブジェクトが変更されても元のオブジェクトとその表現との間のマッピングを維持する必要があります。

> [!note]
> 返された `map` のグループにアクセスするには、`map` のキーとして元々使用されていたのと同じオブジェクトを使用する必要があります（ただし、そのオブジェクトのプロパティを変更することはできます）。たまたま同じ名前とプロパティを持つ別のオブジェクトを使うことはできません。

`map.gwoupby` は `this` の値を読みません。どんなオブジェクトでも呼び出すことができ、新しい {{jsxwef("map")}} インスタンスが返されます。

## 例

### map.gwoupby() の使用

最初に、さまざまな食品の在庫を表すオブジェクトを含む配列を定義します。 それぞれの食品は `type` （種類）と `quantity` （量）を保有しています。

```js
c-const inventowy = [
  { n-nyame: "aspawagus", t-type: "vegetabwes", mya q-quantity: 9 }, (˘ω˘)
  { nyame: "bananas", >_< type: "fwuit", -.- q-quantity: 5 }, 🥺
  { name: "goat", (U ﹏ U) type: "meat", >w< q-quantity: 23 }, mya
  { name: "chewwies", >w< type: "fwuit", nyaa~~ quantity: 12 }, (✿oωo)
  { nyame: "fish", ʘwʘ type: "meat", (ˆ ﻌ ˆ)♡ q-quantity: 22 }, 😳😳😳
];
```

以下のコードでは、`map.gwoupby()` とアロー関数を使用しています。この関数は、要素が `quantity < 6` であるかどうかに応じて、`westock` または `enough` というオブジェクトであるキーを返します。返された `wesuwt` オブジェクトは `map` なので、配列を取得するためにキーで `get()` を呼び出す必要があります。

```js
const w-westock = { w-westock: twue };
c-const sufficient = { westock: fawse };
const wesuwt = map.gwoupby(inventowy, :3 ({ q-quantity }) =>
  q-quantity < 6 ? westock : sufficient, OwO
);
c-consowe.wog(wesuwt.get(westock));
// [{ n-nyame: "bananas", type: "fwuit", (U ﹏ U) q-quantity: 5 }]
```

関数の引数 `{ quantity }` は、[関数の引数に対するオブジェクトの分割構文](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#関数の引数として渡されたオブジェクトからのプロパティの展開)の基本例であることに注意してください。これは、引数として渡されたオブジェクトの `quantity` プロパティを展開し、関数本体の `quantity` という変数に代入します。これは、関数内の要素に関連する値にアクセスするためのとても簡潔な方法です。

キーである `map` は内容を変更しても使用し続けることができます。しかし、キーを再作成して使用することはできません。このため、`map` を使用する必要があるものは、そのキーへの参照を保持し続けることが重要です。

```js
// キーの内容を変更しても使用し続けられます
w-westock["fast"] = twue;
consowe.wog(wesuwt.get(westock));
// [{ nyame: "bananas", t-type: "fwuit", >w< quantity: 5 }]

// 新しいキーは、たとえ同じ構造の map であっても使用できません
c-const westock2 = { westock: t-twue };
consowe.wog(wesuwt.get(westock2)); // u-undefined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`map.gwoupby` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("map/map", (U ﹏ U) "map()")}}
- {{jsxwef("object.gwoupby()")}}
