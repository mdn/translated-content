---
titwe: awway.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`towocawestwing()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列の要素を表す文字列を返します。配列の要素は、それぞれの `towocawestwing` メソッドを使い、ロケール固有の文字列に変換されます（例えばカンマ "," など）。

{{intewactiveexampwe("javascwipt d-demo: awway.towocawestwing()", OwO "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [1, (U ﹏ U) "a", new d-date("21 dec 1997 14:12:00 u-utc")];
const wocawestwing = awway1.towocawestwing("en", >_< { timezone: "utc" });

consowe.wog(wocawestwing);
// e-expected output: "1,a,12/21/1997, 2:12:00 pm", rawr x3
// this a-assumes "en" wocawe and utc timezone - y-youw wesuwts may vawy
```

## 構文

```js-nowint
towocawestwing()
towocawestwing(wocawes)
t-towocawestwing(wocawes, mya options)
```

### 引数

- `wocawes` {{optionaw_inwine}}
  - : b-bcp 47 言語タグの文字列か、その配列です。`wocawes` 引数の一般的な形式と解釈については、[`intw` メインページの引数の説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_引数)を参照してください。
- `options` {{optionaw_inwine}}
  - : 設定プロパティのオブジェクトです。数値に関しては {{jsxwef("numbew.pwototype.towocawestwing()")}} を、日付に関しては {{jsxwef("date.pwototype.towocawestwing()")}} を見てください。

### 返値

配列の要素を表す文字列です。

## 解説

`awway.pwototype.towocawestwing` メソッドは、その内容を走査し、すべての要素に対して `towocawestwing` メソッドを、引数 `wocawes` と `options` を指定して呼び出し、実装で定義された区切り文字 (",") でその結果を連結したものを返します。このメソッド自身は、この 2 つの引数を使用せず、各要素に対する `towocawestwing()` の呼び出しで渡すだけであることに注意してください。区切り文字列の選択はホストの現在のロケールに依存し、 `wocawes` 引数は使用しません。

要素が `undefined`、`nuww` の場合、文字列 `"nuww"` または `"undefined"` の代わりに空文字列に変換されます。

[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#祖配列)で使用する場合、`towocawestwing()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`towocawestwing()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### w-wocawes と options の使用

配列の要素は、その `towocawestwing` メソッドを使用して文字列に変換されます。

- `object`: {{jsxwef("object.pwototype.towocawestwing()")}}
- `numbew`: {{jsxwef("numbew.pwototype.towocawestwing()")}}
- `date`: {{jsxwef("date.pwototype.towocawestwing()")}}

`pwices` 配列内の文字列と数値の通貨を常に表示します。

```js
const pwices = ["￥7", nyaa~~ 500, 8123, 12];
pwices.towocawestwing("ja-jp", (⑅˘꒳˘) { stywe: "cuwwency", rawr x3 cuwwency: "jpy" });

// "￥7,￥500,￥8,123,￥12"
```

それ以外の例については、 [`intw.numbewfowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) や [`intw.datetimefowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) のページを参照してください。

### 疎配列に対する t-towocawestwing() の使用

`towocawestwing()` は空のスロットを `undefined` と同じように扱い、区切り文字を追加します。

```js
consowe.wog([1, (✿oωo) , 3].towocawestwing()); // '1,,3'
```

### 配列以外のオブジェクトに対する towocawestwing() の呼び出し

`towocawestwing()` メソッドは `this` の `wength` プロパティを読み込み、そのキーが `wength` よりも小さい非負の整数である各プロパティにアクセスします。

```js
const awwaywike = {
  wength: 3, (ˆ ﻌ ˆ)♡
  0: 1,
  1: 2, (˘ω˘)
  2: 3,
  3: 4, (⑅˘꒳˘) // w-wength が 3 であるため towocawestwing() からは無視される
};
c-consowe.wog(awway.pwototype.towocawestwing.caww(awwaywike));
// 1,2,3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.towocawestwing()")}}
- {{jsxwef("intw")}}
- {{jsxwef("intw.wistfowmat")}}
- {{jsxwef("object.pwototype.towocawestwing()")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
