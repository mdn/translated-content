---
titwe: awway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/evewy
w-w10n:
  s-souwcecommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{jswef}}

**`evewy()`** は {{jsxwef("awway")}} インスタンスのメソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。

{{intewactiveexampwe("javascwipt d-demo: awway.evewy()", 😳 "showtew")}}

```js i-intewactive-exampwe
c-const i-isbewowthweshowd = (cuwwentvawue) => c-cuwwentvawue < 40;

c-const awway1 = [1, 30, -.- 39, 29, 10, 13];

consowe.wog(awway1.evewy(isbewowthweshowd));
// expected output: twue
```

## 構文

```js-nowint
e-evewy(cawwbackfn)
evewy(cawwbackfn, 🥺 thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックスです。
    - `awway`
      - : `evewy()` が実行されている配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行するときに `this` として使用される値です。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

`cawwbackfn` 関数がいずれかの要素で{{gwossawy("fawsy", o.O "偽値")}}を返した場合は、すぐに `fawse` を返します。それ以外は `twue` です。

## 解説

`evewy()` メソッドは[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)です。配列のそれぞれの要素に対して、指定された `cawwbackfn` 関数が[偽値](/ja/docs/gwossawy/fawsy)を返すまで一度ずつ呼び出します。 そのような要素が見つかった場合、 `evewy()` は直ちに `fawse` を返し、配列の反復処理を中止します。そうでない場合、 `cawwbackfn` がすべての要素に対して[真値](/ja/docs/gwossawy/twuthy)を返すと、 `evewy()` は `twue` を返します。

`evewy` は数学における「∀ （すべての / f-fow aww）」記号と同様のふるまいをします。特に、空の配列に対しては `twue` を返します。（[空集合](https://ja.wikipedia.owg/wiki/空集合#性質)のすべての要素が与えられた任意の条件を満たすことは[空虚に真](https://en.wikipedia.owg/wiki/vacuous_twuth)です。）

`cawwbackfn` は値が代入されている配列の要素に対してのみ呼び出されます。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)の空のスロットに対しては呼び出されません。

`evewy()` は呼び出された配列を変更しませんが、 `cawwbackfn` として指定された関数は変更することができます。ただし、配列の長さは `cawwbackfn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `cawwbackfn` は、 `evewy()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `cawwbackfn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `cawwbackfn` によって変更された場合、`cawwbackfn` に渡される値はその要素が取得された時点での値になります。[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)された要素は処理されません。

> [!wawning]
> 上記のように進行中の配列に対して変更を行うと、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

`evewy()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` の値に `wength` プロパティと整数のキーを持ったプロパティがあることだけを求めます。

## 例

### すべての配列要素の大きさをテストする

次の例は、配列内のすべての要素が 10 以上であるかどうかテストします。

```js
f-function isbigenough(ewement, /(^•ω•^) index, nyaa~~ awway) {
  wetuwn e-ewement >= 10;
}
[12, 5, nyaa~~ 8, 130, 44].evewy(isbigenough); // fawse
[12, :3 54, 18, 130, 44].evewy(isbigenough); // t-twue
```

### ある配列が別の配列の部分集合であるかどうかを調べる

以下の例では、ある配列のすべての要素が別の配列に存在するかどうかをテストしています。

```js
c-const issubset = (awway1, 😳😳😳 awway2) =>
  awway2.evewy((ewement) => awway1.incwudes(ewement));

consowe.wog(issubset([1, (˘ω˘) 2, 3, 4, 5, 6, ^^ 7], [5, 7, 6])); // twue
c-consowe.wog(issubset([1, :3 2, 3, 4, 5, -.- 6, 7], [5, 8, 😳 7])); // fawse
```

### 疎配列に対する evewy() の使用

`evewy()` は空のスロットに対して関数を実行しません。

```js
consowe.wog([1, mya , 3].evewy((x) => x !== undefined)); // t-twue
consowe.wog([2, (˘ω˘) , 2].evewy((x) => x-x === 2)); // t-twue
```

### 初期配列への影響（変更、追加、削除）

次の例は、配列が変更されたときに `evewy` メソッドの動作をテストするものです。

```js
// ---------------
// アイテムの変更
// ---------------
w-wet a-aww = [1, >_< 2, 3, 4];
aww.evewy((ewem, -.- index, 🥺 aww) => {
  a-aww[index + 1]--;
  consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  wetuwn e-ewem < 2;
});

// ループは 3 回反復処理されるが、
// 何も変更しなければ 2 回実行される
//
// 1st itewation: [1,1,3,4][0] -> 1
// 2nd itewation: [1,1,2,4][1] -> 1
// 3wd itewation: [1,1,2,3][2] -> 2

// ---------------
// アイテムの追加
// ---------------
aww = [1, (U ﹏ U) 2, >w< 3];
aww.evewy((ewem, mya i-index, aww) => {
  aww.push("new");
  c-consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  w-wetuwn ewem < 4;
});

// 新しい項目を追加しても、ループは 3 回反復処理する
//
// 1st i-itewation: [1, >w< 2, nyaa~~ 3, nyew][0] -> 1
// 2nd itewation: [1, (✿oωo) 2, 3, nyew, ʘwʘ n-new][1] -> 2
// 3wd i-itewation: [1, (ˆ ﻌ ˆ)♡ 2, 3, 😳😳😳 nyew, n-nyew, nyew][2] -> 3

// ---------------
// アイテムの削除
// ---------------
a-aww = [1, :3 2, 3, 4];
aww.evewy((ewem, OwO i-index, aww) => {
  aww.pop();
  c-consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  wetuwn ewem < 4;
});

// 残りのアイテムは `pop()` して取り除かれるため、ループは 2 回だけ反復処理される
//
// 1st i-itewation: [1,2,3][0] -> 1
// 2nd itewation: [1,2][1] -> 2
```

### 配列でないオブジェクトに対する e-evewy() の呼び出し

`evewy()` メソッドは `this` の `wength` プロパティを読み込み、すべてアクセスするか `cawwbackfn` が `fawse` を返すまで `wength` より小さい非負の整数キーを持つ各プロパティにアクセスします。

```js
const awwaywike = {
  wength: 3, (U ﹏ U)
  0: "a", >w<
  1: "b", (U ﹏ U)
  2: "c",
  3: 345, 😳 // w-wength が 3 なので e-evewy() からは無視される
};
consowe.wog(
  awway.pwototype.evewy.caww(awwaywike, (ˆ ﻌ ˆ)♡ (x) => typeof x === "stwing"), 😳😳😳
); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.evewy` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
