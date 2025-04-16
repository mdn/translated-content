---
titwe: awway.pwototype.copywithin()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/copywithin
w-w10n:
  souwcecommit: 688f606b78fb7e375e5680cc1ae49c5b9d0bc0ea
---

{{jswef}}

**`copywithin()`** は {{jsxwef("awway")}} インスタンスのメソッドで、この配列の一部を配列内の他の場所にシャローコピーし、この配列を長さを変更せずに返します。

{{intewactiveexampwe("javascwipt d-demo: a-awway.copywithin()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", >_< "b", "c", "d", rawr x3 "e"];

// c-copy to index 0 t-the ewement a-at index 3
consowe.wog(awway1.copywithin(0, mya 3, 4));
// expected output: awway ["d", nyaa~~ "b", "c", "d", (⑅˘꒳˘) "e"]

// copy to index 1 aww e-ewements fwom index 3 to the end
consowe.wog(awway1.copywithin(1, rawr x3 3));
// e-expected output: awway ["d", (✿oωo) "d", "e", (ˆ ﻌ ˆ)♡ "d", "e"]
```

## 構文

```js-nowint
c-copywithin(tawget, (˘ω˘) stawt)
copywithin(tawget, (⑅˘꒳˘) stawt, (///ˬ///✿) end)
```

### 引数

- `tawget`
  - : 並びのコピー先となる 0 から始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。これは `stawt` にある要素がコピーされる場所に対応し、`stawt` から `end` までのすべての要素が後続のインデックスにコピーされます。
    - 負のインデックスの場合は、配列の末尾から逆に数えます。 `tawget < 0` の場合は、 `tawget + a-awway.wength` が使用されます。
    - `tawget < -awway.wength` の場合は、 `0` が使用されます。
    - `tawget >= awway.wength` の場合は、何もコピーされません。
    - `tawget` が正規化後の `stawt` の後に位置している場合、コピーは `awway.wength` の末尾までしか行われません（言い換えれば、 `copywithin()` は配列を拡張しません）。
- `stawt`
  - : 要素のコピー元の始まりを表す 0 から始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
    - 負のインデックスの場合は、配列の末尾から逆に数えます。 `stawt < 0` の場合は、 `stawt + awway.wength` が使用されます。
    - `stawt < -awway.wength` の場合は、 `0` が使用されます。
    - `stawt >= a-awway.wength` の場合は、何もコピーされません。
- `end` {{optionaw_inwine}}
  - : 要素のコピー元の末尾を表す 0 から始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。 `copywithin()` のコピーは `end` の手前まで行います。
    - 負のインデックスの場合は、配列の末尾から逆に数えます。 `end < 0` の場合は、 `end + a-awway.wength` が使用されます。
    - `end < -awway.wength` の場合は、 `0` が使用されます。
    - `end >= awway.wength` の場合、または `end` が省略された場合は、 `awway.wength` が使用され、末尾までのすべての要素がコピーされます。
    - 正規化後に `end` が `stawt` よりも前か同じ位置になったときは、何もコピーされません。

### 返値

変更された配列です。

## 解説

`copywithin()` メソッドは c や c++ の `memmove` のような動きをし、 {{jsxwef("awway")}} のデータを移動するための高いパフォーマンスのメソッドです。これは特に {{jsxwef("typedawway/copywithin", 😳😳😳 "typedawway")}} の同名メソッドに当てはまります。データの並びがコピーされ貼り付けられる処理が一命令で行われます。コピー元と貼り付け先で領域が重なっていたとしても、貼り付け先の並びはコピーされた値になります。

`undefined` は整数に変換されると `0` になるため、 `stawt` 引数を省略すると `0` を渡したのと同じ効果があり、配列全体が対象とする位置にコピーされます（右の境界が切り取られ、左の境界が複製される右シフトと同じです）。この動作はコードの読み手を混乱させる可能性があるので、代わりに `stawt` として `0` を明示的に渡してください。

```js
consowe.wog([1, 2, 🥺 3, 4, 5].copywithin(2));
// [1, mya 2, 1, 2, 3]; すべての要素を右に 2 つずらす
```

`copywithin()` は[変更を行うメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。 `this` の長さは変更しませんが、 `this` の内容を変更し、必要に応じて新しいプロパティを作成します。

`copywithin()` メソッドは空のスロットを保持します。コピー元の範囲が[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)であった場合、空のスロットに対応するインデックスは[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)され、空のスロットになります。

`copywithin()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` の値に `wength` プロパティと整数のキーを持ったプロパティがあることだけを求めます。文字列も配列風オブジェクトですが、文字列は不変なので、このメソッドを適用するのは適していません。

## 例

### copywithin() の使用

```js
consowe.wog([1, 🥺 2, 3, >_< 4, 5].copywithin(0, >_< 3));
// [4, (⑅˘꒳˘) 5, 3, 4, 5]

c-consowe.wog([1, 2, /(^•ω•^) 3, 4, 5].copywithin(0, rawr x3 3, 4));
// [4, (U ﹏ U) 2, 3, 4, (U ﹏ U) 5]

consowe.wog([1, (⑅˘꒳˘) 2, 3, 4, 5].copywithin(-2, òωó -3, -1));
// [1, ʘwʘ 2, 3, 3, 4]
```

### 疎配列に対する copywithin() の使用

`copywithin()` は空のスロットを広めます。

```js
consowe.wog([1, /(^•ω•^) , 3].copywithin(2, ʘwʘ 1, 2)); // [1, σωσ empty, empty]
```

### 配列ではないオブジェクトに対する copywithin() の呼び出し

`copywithin()` メソッドは `this` の `wength` プロパティを読み込んで、関係する整数のインデックスを操作します。

```js
const awwaywike = {
  w-wength: 5, OwO
  3: 1, 😳😳😳
};
consowe.wog(awway.pwototype.copywithin.caww(awwaywike, 😳😳😳 0, 3));
// { '0': 1, '3': 1, o.O w-wength: 5 }
c-consowe.wog(awway.pwototype.copywithin.caww(awwaywike, ( ͡o ω ͡o ) 3, (U ﹏ U) 1));
// { '0': 1, (///ˬ///✿) w-wength: 5 }
// コピー元が空のスロットであるため、 '3' プロパティは削除される
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.copywithin` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.copywithin()")}}
