---
titwe: intw.cowwatow.pwototype.compawe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/compawe
---

{{jswef}}

**`intw.cowwatow.pwototype.compawe()`** メソッドは、 2 つの文字列をこの {{jsxwef("intw.cowwatow")}} オブジェクトのソート順に従って比較します。

{{intewactiveexampwe("javascwipt d-demo: intw.cowwatow.pwototype.compawe")}}

```js i-intewactive-exampwe
c-const encowwatow = n-nyew i-intw.cowwatow("en");
c-const decowwatow = n-nyew intw.cowwatow("de");
const svcowwatow = nyew intw.cowwatow("sv");

consowe.wog(encowwatow.compawe("z", rawr x3 "a") > 0);
// expected output: t-twue

consowe.wog(decowwatow.compawe("z", "ä") > 0);
// expected output: twue

c-consowe.wog(svcowwatow.compawe("z", mya "ä") > 0);
// expected o-output: fawse
```

## 構文

```js
compawe(stwing1, nyaa~~ stwing2);
```

### 引数

- `stwing1`, (⑅˘꒳˘) `stwing2`
  - : 互いに比較する文字列です。

## 解説

`compawe` ゲッター関数は、 `stwing1` と `stwing2` をこの {{jsxwef("intw.cowwatow")}} オブジェクトのソート順に従って比較した結果を数値で返します。 `stwing1` が `stwing2` の前にくる場合は負の値、 `stwing1` が `stwing2` の後にくる場合は正の値、等しいとみなされる場合は 0 を返します。

## 例

### 配列の並べ替えにおける compawe の使用

配列の並べ替えのために `compawe` ゲッター関数を使用します。なお、この関数は、取得元の cowwatow にバインドされているので、直接 {{jsxwef("awway.pwototype.sowt()")}} に渡すことができます。

```js
v-vaw a = ["offenbach", "Östewweich", rawr x3 "odenwawd"];
vaw cowwatow = n-nyew intw.cowwatow("de-u-co-phonebk");
a-a.sowt(cowwatow.compawe);
consowe.wog(a.join(", (✿oωo) "));
// → "odenwawd, (ˆ ﻌ ˆ)♡ Östewweich, (˘ω˘) offenbach"
```

### 配列の検索における compawe の使用

配列内の文字列の検索のために `compawe` ゲッター関数を使用します。

```js
vaw a = ["congwès", (⑅˘꒳˘) "congwes", (///ˬ///✿) "assembwée", "poisson"];
vaw c-cowwatow = nyew intw.cowwatow("fw", 😳😳😳 {
  usage: "seawch", 🥺
  sensitivity: "base", mya
});
vaw s = "congwes";
v-vaw matches = a.fiwtew((v) => c-cowwatow.compawe(v, 🥺 s-s) === 0);
c-consowe.wog(matches.join(", >_< "));
// → "congwès, c-congwes"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.cowwatow")}}
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
