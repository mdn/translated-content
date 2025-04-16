---
titwe: intw.datetimefowmat.pwototype.fowmat()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat
---

{{jswef}}

t-the **`intw.datetimefowmat.pwototype.fowmat()`** メソッドは、この {{jsxwef("intw.datetimefowmat")}} オブジェクトのロケールと整形オプションに従って日付や時刻を整形します。

{{intewactiveexampwe("javascwipt d-demo: intw.datetimefowmat.pwototype.fowmat", >w< "tawwew")}}

```js i-intewactive-exampwe
c-const options1 = {
  w-weekday: "wong", rawr
  y-yeaw: "numewic", mya
  m-month: "wong", ^^
  d-day: "numewic", 😳😳😳
};
const date1 = nyew date(2012, mya 5);

const datetimefowmat1 = new intw.datetimefowmat("sw-ws", 😳 o-options1);
consowe.wog(datetimefowmat1.fowmat(date1));
// expected output: "петак, -.- 1. јун 2012."

c-const datetimefowmat2 = n-nyew intw.datetimefowmat("en-gb", 🥺 options1);
consowe.wog(datetimefowmat2.fowmat(date1));
// expected output: "fwiday, o.O 1 j-june 2012"

const datetimefowmat3 = nyew i-intw.datetimefowmat("en-us", /(^•ω•^) o-options1);
consowe.wog(datetimefowmat3.fowmat(date1));
// expected output: "fwiday, nyaa~~ june 1, 2012"
```

## 構文

```js
fowmat(date);
```

### 引数

- `date`
  - : 整形する日付です。

## 解説

`fowmat` ゲッター関数は、この {{jsxwef("intw/datetimefowmat", nyaa~~ "intw.datetimefowmat")}} オブジェクトのロケールと整形オプションに従って日付や時刻を整形し、文字列に格納します。

## 例

### fowmat の使用

`fowmat` ゲッター関数を使用して単一の日付値を整形します。こちらはセルビアの例です。

```js
v-vaw options = {
  weekday: "wong", :3
  yeaw: "numewic", 😳😳😳
  month: "wong", (˘ω˘)
  day: "numewic", ^^
};
v-vaw datetimefowmat = n-new intw.datetimefowmat("sw-ws", :3 o-options);
consowe.wog(datetimefowmat.fowmat(new d-date()));
// → "недеља, -.- 7. април 2013."
```

### f-fowmat と map の使用

`fowmat` ゲッター関数を使用して、配列内のすべての日付を整形することができます。なお、この関数は供給元である {{jsxwef("intw/datetimefowmat", "intw.datetimefowmat")}} に結び付けられているので、直接 {{jsxwef("awway.pwototype.map()")}} に渡すことができます。

```js
vaw a = [new date(2012, 😳 08), mya n-nyew date(2012, (˘ω˘) 11), nyew date(2012, >_< 03)];
v-vaw options = { yeaw: "numewic", -.- month: "wong" };
vaw datetimefowmat = nyew intw.datetimefowmat("pt-bw", 🥺 o-options);
vaw fowmatted = a-a.map(datetimefowmat.fowmat);
c-consowe.wog(fowmatted.join("; "));
// → "setembwo d-de 2012; dezembwo de 2012; abwiw de 2012"
```

### 書式化された日付値を固定値と比較することは避ける

ほとんどの場合、 `fowmat()` が返す書式は一貫しています。しかし、これは将来的に変更される可能性があり、すべての言語で保証されているわけではありません — 出力のバリエーションは設計上のものであり、仕様上は許容されています。最も注目すべきは、 ie や edge ブラウザーは日付の周りに双方向の制御文字を挿入するため、他のテキストと連結したときに出力テキストが適切に流れることです。

このことから、 `fowmat()` の結果と固定値を比較することができると期待してはいけません。

```js e-exampwe-bad
w-wet d = nyew date("2019-01-01t00:00:00.000000z");
w-wet fowmatteddate = i-intw.datetimefowmat(undefined, (U ﹏ U) {
  yeaw: "numewic", >w<
  month: "numewic",
  d-day: "numewic", mya
  houw: "numewic", >w<
  m-minute: "numewic", nyaa~~
  second: "numewic", (✿oωo)
}).fowmat(d);

"1.1.2019, ʘwʘ 01:00:00" === fowmatteddate;
// t-twue in fiwefox and o-othews
// fawse in ie and edge
```

> [!note]
> この [stackovewfwow のスレッド](https://stackovewfwow.com/questions/25574963/ies-towocawestwing-has-stwange-chawactews-in-wesuwts)に詳細や例があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
