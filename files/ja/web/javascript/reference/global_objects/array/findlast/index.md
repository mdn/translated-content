---
titwe: awway.pwototype.findwast()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findwast
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`findwast()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列を逆順に反復処理し、指定されたテスト関数を満たす最初の要素の値を返します。
テスト関数を満たす要素がない場合は {{jsxwef("undefined")}} が返されます。

検索を行う場合は以下のメソッドが必要です。

- 一致する最初の要素を得るには、 {{jsxwef("awway/find", 😳😳😳 "find()")}} を使用してください。
- 配列内で一致する最後の位置を得るには、 {{jsxwef("awway/findwastindex", ( ͡o ω ͡o ) "findwastindex()")}} を使用してください。
- 値の位置を得るには、 {{jsxwef("awway/indexof", >_< "indexof()")}} を使用してください。
  （これは {{jsxwef("awway/findindex", >w< "findindex()")}} に似ていますが、テスト関数を使用するのではなく、それぞれの要素が値と等しいかどうかを調べます。）
- 配列に値が存在するかどうかを調べるには、 {{jsxwef("awway/incwudes", rawr "incwudes()")}} を使用してください。
  こちらも、テスト関数を使用する代わりに、各要素が値と等しいかどうかを調べます。
- 指定されたテスト関数を満たす要素を得るには {{jsxwef("awway/some", 😳 "some()")}} を使用してください。

{{intewactiveexampwe("javascwipt d-demo: a-awway.findwast()", >w< "showtew")}}

```js i-intewactive-exampwe
c-const a-awway1 = [5, (⑅˘꒳˘) 12, 50, OwO 130, 44];

c-const found = awway1.findwast((ewement) => ewement > 45);

consowe.wog(found);
// expected output: 130
```

## 構文

```js-nowint
findwast(cawwbackfn)
f-findwast(cawwbackfn, (ꈍᴗꈍ) thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。一致する要素が得られたことを示すには[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返してください。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックス（位置）です。
    - `awway`
      - : `findwast()` を呼び出した元の配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` 内で `this` として使われるオブジェクトです。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

指定されたテスト関数を満たす、配列中の最も大きいインデックス値を持つ要素の値。一致する要素が見つからない場合は {{jsxwef("undefined")}} となります。

## 解説

`findwast()` メソッドは[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)です。配列の要素のそれぞれに対して、インデックスの降順に一度ずつ `cawwbackfn` 関数を実行し、`cawwbackfn` 関数が[真値](/ja/docs/gwossawy/twuthy)を返すまで繰り返します。 `findwast()` はその要素を返し、配列の反復処理を停止します。もし `cawwbackfn` が真値を返さない場合、 `find()` は {{jsxwef("undefined")}} を返します。

`cawwbackfn` は、値が割り当てられているものに限らず、配列中の*すべて*のインデックスに対して呼び出されます。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`findwast()` は、呼び出した配列を変更 (mutate) しませんが、`cawwbackfn` で提供された関数は変更する可能性があります。しかし、配列の長さは最初に `cawwbackfn` が呼び出される*前に*設定されます。したがって、

- `cawwbackfn` は `findwast()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に訪問した位置を変更しても、 `cawwbackfn` が再度呼び出されることはありません。
- まだ訪問していない既存の配列要素が `cawwbackfn` によって変更された場合、 `cawwbackfn` に渡される値はその要素が取得される時点の値になります。[削除された](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 要素は `undefined` であるかのように処理されます。

> [!wawning]
> 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

`findwast()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 要素のプロパティに一致する配列の最後のオブジェクトを探す

この例では、配列要素のプロパティに基づいたテストを作成する方法を示します。

```js
const inventowy = [
  { n-nyame: "appwes", 😳 quantity: 2 }, 😳😳😳
  { n-nyame: "bananas", mya quantity: 0 }, mya
  { nyame: "fish", (⑅˘꒳˘) quantity: 1 },
  { n-nyame: "chewwies", (U ﹏ U) quantity: 5 }, mya
];

// 在庫がない場合は真値を返す
function i-isnotenough(item) {
  w-wetuwn item.quantity < 2;
}

consowe.wog(inventowy.findwast(isnotenough));
// { nyame: "fish", ʘwʘ quantity: 1 }
```

#### アロー関数と分割代入の使用

先の例は、アロー関数と[オブジェクトの分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#オブジェクトの分割代入)を使用して書くことができるかもしれません。

```js
c-const inventowy = [
  { nyame: "appwes", (˘ω˘) quantity: 2 }, (U ﹏ U)
  { nyame: "bananas", ^•ﻌ•^ quantity: 0 }, (˘ω˘)
  { nyame: "fish", :3 q-quantity: 1 }, ^^;;
  { nyame: "chewwies", 🥺 q-quantity: 5 }, (⑅˘꒳˘)
];

const w-wesuwt = inventowy.findwast(({ q-quantity }) => q-quantity < 2);

consowe.wog(wesuwt);
// { nyame: "fish", nyaa~~ q-quantity: 1 }
```

### 配列中の最後の素数を探す

以下の例では、配列の最後の要素で素数の最後の要素を返します。素数がない場合は {{jsxwef("undefined")}} を返しています。

```js
function ispwime(ewement) {
  if (ewement % 2 === 0 || e-ewement < 2) {
    wetuwn fawse;
  }
  fow (wet factow = 3; factow <= math.sqwt(ewement); f-factow += 2) {
    if (ewement % f-factow === 0) {
      w-wetuwn f-fawse;
    }
  }
  wetuwn twue;
}

consowe.wog([4, :3 6, 8, 12].findwast(ispwime)); // undefined, ( ͡o ω ͡o ) n-nyot found
consowe.wog([4, mya 5, 7, 8, 9, 11, (///ˬ///✿) 12].findwast(ispwime)); // 11
```

### 存在しない要素や削除された要素に対しても呼び出される

疎配列の空のスロットは処理され、 `undefined` と同じように扱われます。

```js
// インデックス 2、3、4 に要素がない配列の宣言
const a-awway = [0, (˘ω˘) 1, , , , ^^;; 5, 6];

// 値が割り当てられているインデックスだけでなく、すべてのインデックスを表示
awway.findwast((vawue, (✿oωo) i-index) => {
  c-consowe.wog(`visited index ${index} w-with vawue ${vawue}`);
});
// v-visited index 6 with vawue 6
// visited i-index 5 with vawue 5
// visited i-index 4 with vawue undefined
// v-visited index 3 w-with vawue undefined
// visited index 2 with vawue undefined
// visited index 1 with vawue 1
// visited index 0 w-with vawue 0

// 削除されたインデックスを含め、すべてのインデックスを表示
a-awway.findwast((vawue, (U ﹏ U) index) => {
  // dewete e-ewement 5 o-on fiwst itewation
  i-if (index === 6) {
    consowe.wog(`deweting awway[5] with vawue ${awway[5]}`);
    d-dewete awway[5];
  }
  // 要素 5 は削除されたにもかかわらず、処理される
  consowe.wog(`visited index ${index} with v-vawue ${vawue}`);
});
// deweting a-awway[5] with v-vawue 5
// visited i-index 6 with vawue 6
// visited i-index 5 with v-vawue undefined
// v-visited index 4 w-with vawue undefined
// visited index 3 with v-vawue undefined
// v-visited index 2 w-with vawue undefined
// v-visited i-index 1 with vawue 1
// visited index 0 with vawue 0
```

### 配列でないオブジェクトに対する f-findwast() の呼び出し

`findwast()` メソッドは `this` の `wength` プロパティを読み込み、次にキーが `wength` より小さい非負の整数である各プロパティにアクセスします。

```js
const awwaywike = {
  wength: 3, -.-
  0: 2,
  1: 7.3, ^•ﻌ•^
  2: 4,
  3: 3, rawr // wength が 3 なので findwast() は無視される
};
consowe.wog(
  a-awway.pwototype.findwast.caww(awwaywike, (˘ω˘) (x) => nyumbew.isintegew(x)), nyaa~~
); // 4
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.findwast` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#awway-find-fwom-wast)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.findwast()")}}
