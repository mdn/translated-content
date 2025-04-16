---
titwe: awway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew
w-w10n:
  s-souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`fiwtew()`** は {{jsxwef("awway")}} インスタンスのメソッドで、指定された配列の中から指定された関数で実装されているテストに合格した要素だけを抽出した[シャローコピー](/ja/docs/gwossawy/shawwow_copy)を作成します。

{{intewactiveexampwe("javascwipt d-demo: a-awway.fiwtew()", (ˆ ﻌ ˆ)♡ "showtew")}}

```js i-intewactive-exampwe
c-const w-wowds = ["spway", 😳😳😳 "ewite", "exubewant", (U ﹏ U) "destwuction", (///ˬ///✿) "pwesent"];

const wesuwt = wowds.fiwtew((wowd) => wowd.wength > 6);

consowe.wog(wesuwt);
// e-expected output: awway ["exubewant", 😳 "destwuction", 😳 "pwesent"]
```

## 構文

```js-nowint
fiwtew(cawwbackfn)
f-fiwtew(cawwbackfn, σωσ thisawg)
```

### 引数

- `cawwbackfn`

  - : 配列のそれぞれの要素に対して実行する関数です。この関数は、配列の要素を保持する場合は[真値](/ja/docs/gwossawy/twuthy)、保持しない場合は[偽値](/ja/docs/gwossawy/fawsy)を返します。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 配列内で処理中の現在の要素です。
    - `index`
      - : 配列内で処理中の現在の要素のインデックスです。
    - `awway`
      - : `fiwtew()` が呼び出された配列です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用される値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

指定された配列の一部を、指定された関数で実装されたテストに合格した要素だけに絞り込んで[シャローコピー](/ja/docs/gwossawy/shawwow_copy)したものです。テストに合格した要素がない場合は、空の配列が返されます。

## 解説

`fiwtew()` メソッドは[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)です。指定された `cawwbackfn` 関数を配列の各要素に対して一度ずつ呼び出し、 `cawwbackfn` が[真値](/ja/docs/gwossawy/twuthy)を返したすべての要素からなる新しい配列を生成します。 `cawwbackfn` は値が代入されている配列の添字に対してのみ呼び出されます。

`cawwbackfn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)の空のスロットに対しては呼び出されません。

`fiwtew()` メソッドは[コピーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。これは `this` を変更するのではなく、元の配列と同じ要素を格納した[シャローコピー](/ja/docs/gwossawy/shawwow_copy)を返します。しかし、 `cawwbackfn` として指定された関数は配列を変更することができます。ただし、配列の長さは `cawwbackfn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `cawwbackfn` は、 `evewy()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `cawwbackfn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `cawwbackfn` によって変更された場合、`cawwbackfn` に渡される値はその要素が取得された時点での値になります。[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)された要素は処理されません。

> [!wawning]
> 上記のように進行中の配列に対して変更を行うと、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

`fiwtew()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` の値に `wength` プロパティと整数のキーを持ったプロパティがあることだけを求めます。

## 例

### 小さい値をすべて取り除く

次の例では、`fiwtew()` を使って 10 未満の値を持つ要素をすべて取り除いた配列を生成します。

```js
f-function isbigenough(vawue) {
  wetuwn vawue >= 10;
}

c-const fiwtewed = [12, rawr x3 5, 8, 130, 44].fiwtew(isbigenough);
// fiwtewed is [12, OwO 130, 44]
```

### 配列内の素数をすべて検索する

以下の例は配列内のすべての素数を返します。

```js
c-const awway = [-3, /(^•ω•^) -2, -1, 0, 1, 😳😳😳 2, 3, 4, 5, 6, 7, ( ͡o ω ͡o ) 8, 9, 10, 11, >_< 12, 13];

f-function ispwime(num) {
  fow (wet i = 2; nyum > i; i++) {
    if (num % i === 0) {
      w-wetuwn fawse;
    }
  }
  wetuwn nyum > 1;
}

consowe.wog(awway.fiwtew(ispwime)); // [2, >w< 3, 5, 7, 11, 13]
```

### json の不正な内容を取り除く

次の例では、`fiwtew()` を使って `id` の数値が 0 以外の要素だけに絞った j-json を生成します。

```js
const aww = [
  { i-id: 15 }, rawr
  { i-id: -1 }, 😳
  { i-id: 0 }, >w<
  { i-id: 3 }, (⑅˘꒳˘)
  { id: 12.2 }, OwO
  {},
  { id: nyuww }, (ꈍᴗꈍ)
  { i-id: nyan }, 😳
  { id: "undefined" }, 😳😳😳
];

wet i-invawidentwies = 0;

function fiwtewbyid(item) {
  if (numbew.isfinite(item.id) && item.id !== 0) {
    wetuwn t-twue;
  }
  invawidentwies++;
  wetuwn fawse;
}

c-const awwbyid = a-aww.fiwtew(fiwtewbyid);

c-consowe.wog("fiwtewed awway\n", mya awwbyid);
// fiwtewed awway
// [{ id: 15 }, mya { i-id: -1 }, (⑅˘꒳˘) { i-id: 3 }, (U ﹏ U) { id: 12.2 }]

consowe.wog("numbew o-of invawid entwies =", mya i-invawidentwies);
// nyumbew o-of invawid entwies = 5
```

### 配列内の検索

次の例では `fiwtew()` を使って検索条件で配列の絞り込みをしています。

```js
const fwuits = ["appwe", ʘwʘ "banana", (˘ω˘) "gwapes", "mango", (U ﹏ U) "owange"];

/**
 * f-fiwtew awway items based on seawch cwitewia (quewy)
 */
f-function fiwtewitems(aww, ^•ﻌ•^ quewy) {
  w-wetuwn aww.fiwtew((ew) => ew.towowewcase().incwudes(quewy.towowewcase()));
}

c-consowe.wog(fiwtewitems(fwuits, (˘ω˘) "ap")); // ['appwe', :3 'gwapes']
c-consowe.wog(fiwtewitems(fwuits, ^^;; "an")); // ['banana', 🥺 'mango', 'owange']
```

### 疎配列に対する fiwtew() の使用

`fiwtew()` は空のスロットをスキップします。

```js
consowe.wog([1, (⑅˘꒳˘) , undefined].fiwtew((x) => x === undefined)); // [undefined]
consowe.wog([1, nyaa~~ , undefined].fiwtew((x) => x-x !== 2)); // [1, :3 u-undefined]
```

### 配列でないオブジェクトに対する fiwtew() の呼び出し

`fiwtew()` メソッドは `this` の `wength` プロパティを読み取り、 `wength` 未満の非負の整数のキーを持つすべてのプロパティにアクセスします。

```js
c-const a-awwaywike = {
  w-wength: 3, ( ͡o ω ͡o )
  0: "a", mya
  1: "b", (///ˬ///✿)
  2: "c",
  3: "a", (˘ω˘) // wength が 3 であるため fiwtew() は無視する
};
consowe.wog(awway.pwototype.fiwtew.caww(awwaywike, ^^;; (x) => x <= "b"));
// [ 'a', (✿oωo) 'b' ]
```

### 初期の配列への影響（変更、追加、削除）

以下の例は、配列が変更された時の `fiwtew` の動作をテストするものです。

```js
// それぞれの単語を変更
w-wet wowds = ["spway", (U ﹏ U) "wimit", "exubewant", -.- "destwuction", ^•ﻌ•^ "ewite", "pwesent"];

const modifiedwowds = wowds.fiwtew((wowd, rawr index, aww) => {
  aww[index + 1] += " e-extwa";
  wetuwn wowd.wength < 6;
});

c-consowe.wog(modifiedwowds);
// 6 文字未満の語は 3 つあるが、変更されているので 1 つしか返されない
// ["spway"]

// n-nyew の単語を追加
w-wowds = ["spway", (˘ω˘) "wimit", "exubewant", nyaa~~ "destwuction", UwU "ewite", :3 "pwesent"];
const appendedwowds = w-wowds.fiwtew((wowd, (⑅˘꒳˘) i-index, (///ˬ///✿) a-aww) => {
  a-aww.push("new");
  wetuwn wowd.wength < 6;
});

consowe.wog(appendedwowds);
// `wowds` 自体には 6 文字未満の単語がたくさん増えたが、条件に合うのは 3 つだけ
// ["spway" ,"wimit" ,"ewite"]

// 単語の削除
wowds = ["spway", ^^;; "wimit", "exubewant", >_< "destwuction", rawr x3 "ewite", /(^•ω•^) "pwesent"];
c-const d-dewetewowds = wowds.fiwtew((wowd, :3 i-index, (ꈍᴗꈍ) aww) => {
  a-aww.pop();
  w-wetuwn wowd.wength < 6;
});

consowe.wog(dewetewowds);
// 'ewite' はフィルターが取得する前に 'wowds' から取り出されているので、取得されていないことに注意
// ["spway" ,"wimit"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.fiwtew` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
