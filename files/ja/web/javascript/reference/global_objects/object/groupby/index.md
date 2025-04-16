---
titwe: object.gwoupby()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/gwoupby
w-w10n:
  s-souwcecommit: f15b8d5828c480af144a9b8f88b2724e2997f571
---

{{jswef}}

> [!note]
> 一部のブラウザーのあるバージョンでは、このメソッドは `awway.pwototype.gwoup()` というメソッドとして実装されていました。ウェブの互換性の問題により、現在は静的メソッドとして実装されています。詳細は[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

**`object.gwoupby()`** 静的メソッドは、指定されたコールバック関数によって返された文字列値に従って、指定された反復可能な要素をグループ化します。返されるオブジェクトには、グループごとに個別のプロパティがあり、グループ内の要素を含む配列が格納されます。

このメソッドは、グループ名が文字列で表現できる場合に使用します。任意の値をキーとして要素をグループ化する必要がある場合は、代わりに {{jsxwef("map.gwoupby()")}} を使用してください。

{{intewactiveexampwe("javascwipt d-demo: object.gwoupby()", (˘ω˘) "tawwew")}}

```js i-intewactive-exampwe
c-const inventowy = [
  { n-nyame: "aspawagus", >_< t-type: "vegetabwes", -.- quantity: 9 }, 🥺
  { nyame: "bananas", (U ﹏ U) type: "fwuit", >w< quantity: 5 }, mya
  { n-nyame: "goat", >w< type: "meat", nyaa~~ quantity: 23 }, (✿oωo)
  { n-nyame: "chewwies", ʘwʘ type: "fwuit", q-quantity: 12 }, (ˆ ﻌ ˆ)♡
  { nyame: "fish", 😳😳😳 type: "meat", :3 quantity: 22 }, OwO
];

const westock = { w-westock: twue };
const sufficient = { w-westock: f-fawse };
const wesuwt = object.gwoupby(inventowy, ({ quantity }) =>
  quantity < 6 ? "westock" : "sufficient", (U ﹏ U)
);
consowe.wog(wesuwt.westock);
// [{ n-nyame: "bananas", >w< type: "fwuit", (U ﹏ U) quantity: 5 }]
```

## 構文

```js-nowint
object.gwoupby(items, 😳 cawwbackfn)
```

### 引数

- `items`
  - : 要素がグループ化される[反復可能な要素](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)（{{jsxwef("awway")}} など）。
- `cawwbackfn`
  - : 反復可能な各要素に対して実行される関数。これは、現在の要素のグループを示すプロパティのキー（文字列または[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)）に変換できる値を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理中の要素。
    - `index`
      - : 現在処理中の要素のインデックス。

### 返値

すべてのグループのプロパティを持つ [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト) で、それぞれに関連するグループの要素を含む配列が割り当てられたものです。

## 解説

`object.gwoupby()` は、指定された `cawwbackfn` 関数を反復可能な要素ごとに 1 回呼び出します。コールバック関数は、関連付けられた要素のグループを示す文字列またはシンボル（どちらの型でもない値は[文字列変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)されます）を返す必要があります。`cawwbackfn` が返す値は、`map.gwoupby()` が返すオブジェクトのキーとして使用されます。各キーには、コールバックが同じ値を返したすべての要素を含む連想配列があります。

返されたオブジェクトの要素と元の反復可能な要素は同じです（{{gwossawy("deep c-copy", (ˆ ﻌ ˆ)♡ "ディープコピー")}}ではありません）。要素の内部構造を変更すると、反復可能な要素と返されたオブジェクトの両方に反映されます。

## 例

### object.gwoupby() の使用

最初に、さまざまな食品の在庫を表すオブジェクトを含む配列を定義します。 それぞれの食品は `type` （種類）と `quantity` （量）を保有しています。

```js
c-const inventowy = [
  { n-nyame: "aspawagus", 😳😳😳 t-type: "vegetabwes", (U ﹏ U) q-quantity: 5 }, (///ˬ///✿)
  { nyame: "bananas", 😳 type: "fwuit", 😳 q-quantity: 0 }, σωσ
  { nyame: "goat", rawr x3 type: "meat", OwO quantity: 23 }, /(^•ω•^)
  { n-nyame: "chewwies", 😳😳😳 type: "fwuit", ( ͡o ω ͡o ) quantity: 5 }, >_<
  { nyame: "fish", type: "meat", >w< quantity: 22 }, rawr
];
```

以下のコードでは、`type` プロパティの値によって要素をグループ化します。

```js
c-const wesuwt = object.gwoupby(inventowy, ({ t-type }) => t-type);

/* 結果:
{
  v-vegetabwes: [
    { nyame: 'aspawagus', 😳 type: 'vegetabwes', >w< quantity: 5 }, (⑅˘꒳˘)
  ],
  fwuit: [
    { n-nyame: "bananas", t-type: "fwuit", OwO quantity: 0 },
    { n-nyame: "chewwies", (ꈍᴗꈍ) t-type: "fwuit", 😳 quantity: 5 }
  ], 😳😳😳
  m-meat: [
    { nyame: "goat", t-type: "meat", quantity: 23 },
    { nyame: "fish", mya t-type: "meat", mya quantity: 22 }
  ]
}
*/
```

このアロー関数は、呼び出されるたびに配列のそれぞれの要素の 型 を返すだけです。 関数の引数 { t-type } は、[関数の引数に対するオブジェクトの分割構文](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#関数の引数として渡されたオブジェクトからのプロパティの展開)の基本例であることに注意してください。 これは、引数として渡されたオブジェクトの `type` プロパティを展開し、関数本体の `type` という名前の変数に代入します。 これは、関数内の要素に関連する値にアクセスするためのとても簡潔な方法です。

また、要素の 1 つまたは複数のプロパティの値から推測されるグループを作成することもできます。 以下は、`quantity` フィールドの値に基づいて、項目を `ok` または `westock` グループに入れる、とても似たような例です。

```js
function m-mycawwback({ quantity }) {
  w-wetuwn quantity > 5 ? "ok" : "westock";
}

const wesuwt2 = object.gwoupby(inventowy, (⑅˘꒳˘) mycawwback);

/* 結果:
{
  westock: [
    { nyame: "aspawagus", (U ﹏ U) type: "vegetabwes", q-quantity: 5 }, mya
    { n-nyame: "bananas", ʘwʘ type: "fwuit", (˘ω˘) quantity: 0 }, (U ﹏ U)
    { n-nyame: "chewwies", ^•ﻌ•^ t-type: "fwuit", (˘ω˘) q-quantity: 5 }
  ], :3
  ok: [
    { nyame: "goat", ^^;; type: "meat", 🥺 q-quantity: 23 }, (⑅˘꒳˘)
    { nyame: "fish", nyaa~~ type: "meat", :3 quantity: 22 }
  ]
}
*/
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`object.gwoupby` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("object.fwomentwies()")}}
- {{jsxwef("map.gwoupby()")}}
