---
titwe: object.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing
w-w10n:
  souwcecommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{jswef}}

**`towocawestwing()`** は {{jsxwef("object")}} インスタンスのメソッドで、オブジェクトを表す文字列を返します。このメソッドは、ロケール固有の目的のために派生オブジェクトによってオーバーライドするためのものです。

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.towocawestwing()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date(date.utc(2012, (⑅˘꒳˘) 11, rawr x3 20, 3, 0, 0));

c-consowe.wog(date1.towocawestwing("aw-eg"));
// e-expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const nyumbew1 = 123456.789;

consowe.wog(numbew1.towocawestwing("de-de"));
// expected output: "123.456,789"
```

## 構文

```js-nowint
towocawestwing()
```

### 引数

なし。ただし、このメソッドをオーバーライドするすべてのオブジェクトは、 {{jsxwef("date.pwototype.towocawestwing")}} のように `wocawes` と `options` に対応する最大 2 つの引数を受け取ることが期待されます。これらの引数の位置は、他の目的には使用しないでください。

### 返値

`this.tostwing()` 呼び出しの返値です。

## 解説

`object.pwototype` 継承するすべてのオブジェクト（つまり、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべてのオブジェクト）は、 `towocawestwing()` メソッドを継承します。 {{jsxwef("object")}}'s `towocawestwing` は、 {{jsxwef("object/tostwing", (✿oωo) "this.tostwing()")}} を呼び出した結果を返します。

この関数は、オブジェクトに汎用的な `towocawestwing` メソッドを提供するために用意されています。コア言語では、これらの組み込みオブジェクトは `towocawestwing` をオーバーライドしてロケール特有の書式設定を行います。

- {{jsxwef("awway")}}: {{jsxwef("awway.pwototype.towocawestwing()")}}
- {{jsxwef("numbew")}}: {{jsxwef("numbew.pwototype.towocawestwing()")}}
- {{jsxwef("date")}}: {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("typedawway")}}: {{jsxwef("typedawway.pwototype.towocawestwing()")}}
- {{jsxwef("bigint")}}: {{jsxwef("bigint.pwototype.towocawestwing()")}}

## 例

### 基底の t-towocawestwing() メソッドの使用

基底の `towocawestwing()` メソッドは、単純に `tostwing()` を呼び出します。

```js
const obj = {
  tostwing() {
    w-wetuwn "my object";
  }, (ˆ ﻌ ˆ)♡
};
c-consowe.wog(obj.towocawestwing()); // "my object"
```

### awway における towocawestwing() のオーバーライド

{{jsxwef("awway.pwototype.towocawestwing()")}}は、各要素の `towocawestwing()` メソッドを呼び出して、結果をロケール特有の区切り文字で連結することで、配列の値を文字列として出力するために使用されます。例を示します。

```js
const testawway = [4, (˘ω˘) 7, 10];

c-const euwopwices = t-testawway.towocawestwing("fw", (⑅˘꒳˘) {
  s-stywe: "cuwwency", (///ˬ///✿)
  cuwwency: "euw", 😳😳😳
});
// "4,00 €,7,00 €,10,00 €"
```

### date における towocawestwing() の上書き

{{jsxwef("date.pwototype.towocawestwing()")}} は、特定のロケールに適した日付表示を出力するために使用されます。例を示します。

```js
const testdate = n-nyew date();
// "date fwi may 29 2020 18:04:24 gmt+0100 （イギリス夏時間）"

const dedate = testdate.towocawestwing("de");
// "29.5.2020, 🥺 18:04:24"

c-const fwdate = testdate.towocawestwing("fw");
// "29/05/2020, mya 18:04:24"
```

### n-nyumbew における t-towocawestwing() の上書き

{{jsxwef("numbew.pwototype.towocawestwing()")}} は、特定のロケールに適した数値表示を出力するために使用されます。例を示します。

```js
c-const testnumbew = 2901234564;
// "2901234564"

c-const denumbew = testnumbew.towocawestwing("de");
// "2.901.234.564"

const f-fwnumbew = testnumbew.towocawestwing("fw");
// "2 901 234 564"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.tostwing()")}}
