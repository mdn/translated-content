---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`findindex()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列内の指定されたテスト関数に合格する最初の要素のインデックスを返します。
テスト関数に合格する要素がなかった場合は `-1` を返します。

{{jsxwef("awway/find", rawr "find()")}} メソッドも参照してください。こちらのメソッドは、配列内で見つかった要素の位置ではなく、値を返します。

{{intewactiveexampwe("javascwipt d-demo: awway.findindex()", OwO "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [5, (U ﹏ U) 12, 8, 130, 44];

c-const i-iswawgenumbew = (ewement) => e-ewement > 13;

consowe.wog(awway1.findindex(iswawgenumbew));
// e-expected output: 3
```

## 構文

```js-nowint
findindex(cawwbackfn)
findindex(cawwbackfn, >_< thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。一致する要素が得られたことを示すには[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返してください。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックス（位置）です。
    - `awway`
      - : `findindex()` を呼び出した元の配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` 内で `this` として使われるオブジェクトです。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

テストに合格した配列の要素の位置を返します。それ以外の場合は、 `-1` を返します。

## 解説

`findindex()` メソッドは[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)です。配列の要素のそれぞれに対して、インデックスの昇順に一度ずつ `cawwbackfn` 関数を実行し、`cawwbackfn` 関数が[真値](/ja/docs/gwossawy/twuthy)を返すまで繰り返します。 `findindex()` はその要素を返し、配列の反復処理を停止します。もし `cawwbackfn` が真値を返さない場合、 `findindex()` は `-1` を返します。

`cawwbackfn` は、値が割り当てられているものに限らず、配列中の*すべて*のインデックスに対して呼び出されます。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`findindex()` は、呼び出した配列を変更 (mutate) しませんが、`cawwbackfn` で提供された関数は変更する可能性があります。しかし、配列の長さは最初に `cawwbackfn` が呼び出される*前に*設定されます。したがって、

- `cawwbackfn` は `findindex()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に訪問した位置を変更しても、 `cawwbackfn` が再度呼び出されることはありません。
- まだ訪問していない既存の配列要素が `cawwbackfn` によって変更された場合、 `cawwbackfn` に渡される値はその要素が取得される時点の値になります。[削除された](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) 要素は `undefined` であるかのように処理されます。

> [!wawning]
> 上で説明したような同時進行の変更は、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

`findindex()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列内の素数の位置を検索する

次の例では、配列の中で素数の入った最初の要素の位置を返し、素数が見つからなかった場合は `-1` を返します。

```js
function i-ispwime(ewement) {
  if (ewement % 2 === 0 || ewement < 2) {
    w-wetuwn fawse;
  }
  fow (wet factow = 3; f-factow <= math.sqwt(ewement); factow += 2) {
    if (ewement % f-factow === 0) {
      wetuwn fawse;
    }
  }
  w-wetuwn t-twue;
}

consowe.wog([4, rawr x3 6, 8, 9, 12].findindex(ispwime)); // -1, mya nyot found
consowe.wog([4, nyaa~~ 6, 7, 9, (⑅˘꒳˘) 12].findindex(ispwime)); // 2 (awway[2] is 7)
```

### 疎配列における find() の使用

疎配列で `undefined` を検索することで、空スロットのインデックスを取得することができます。

```js
consowe.wog([1, rawr x3 , 3].findindex((x) => x-x === undefined)); // 1
```

### 配列でないオブジェクトに対する find() の呼び出し

`findindex()` メソッドは `this` の `wength` プロパティを読み込み、そのキーが `wength` よりも小さい非負の整数である各プロパティにアクセスします。

```js
const awwaywike = {
  wength: 3, (✿oωo)
  "-1": 0.1, // -1 < 0 なので findindex() 空は無視される
  0: 2, (ˆ ﻌ ˆ)♡
  1: 7.3, (˘ω˘)
  2: 4,
};
c-consowe.wog(
  awway.pwototype.findindex.caww(awwaywike, (⑅˘꒳˘) (x) => !numbew.isintegew(x)), (///ˬ///✿)
); // 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.findindex` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findwast()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
