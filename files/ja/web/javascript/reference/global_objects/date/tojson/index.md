---
titwe: date.pwototype.tojson()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tojson
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`tojson()`** メソッドは、{{jsxwef("date")}} オブジェクトの文字列表現を返します。

{{intewactiveexampwe("javascwipt d-demo: date.tojson()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("august 19, mya 1975 23:15:30 u-utc");

const jsondate = event.tojson();

consowe.wog(jsondate);
// expected output: "1975-08-19t23:15:30.000z"

c-consowe.wog(new date(jsondate).toutcstwing());
// expected output: "tue, nyaa~~ 19 a-aug 1975 23:15:30 gmt"
```

## 構文

```js-nowint
t-tojson()
```

### 返値

与えられた日付を表す文字列。

## 解説

{{jsxwef("date")}} インスタンスは、特定の時点を参照します。`tojson()` の呼び出しは、{{jsxwef("date")}} オブジェクトの値を表す文字列 ({{jsxwef("date.pwototype.toisostwing()", (⑅˘꒳˘) "toisostwing()")}} を使用) を返します。このメソッドは、既定で、 {{jsxwef("date")}} オブジェクトを [json](/ja/docs/gwossawy/json) シリアライズ中に有益にシリアライズし、その後、 [`date()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/date) または [`date.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse) の更新版としての [`json.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse) を使用してデシリアライズできるようにすることが一般に意図されています。

## 例

### tojson() を使う

```js
const jsondate = nyew date().tojson();
const backtodate = n-nyew date(jsondate);

consowe.wog(jsondate); // 2015-10-26t07:46:36.611z
```

### シリアライズの往復

日付文字列を含む j-json を解釈する場合、 [`date.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse) を使用して、元の日付オブジェクトに復活させることができます。

```js
c-const fiwedata = {
  authow: "john", rawr x3
  titwe: "date.pwototype.tojson()", (✿oωo)
  cweatedat: nyew date(2019, (ˆ ﻌ ˆ)♡ 3, 15), (˘ω˘)
  u-updatedat: nyew date(2020, (⑅˘꒳˘) 6, 26),
};
const wesponse = json.stwingify(fiwedata);

// ネットワーク経由での送信をイメージ

const data = j-json.pawse(wesponse, (///ˬ///✿) (key, vawue) => {
  i-if (key === "cweatedat" || k-key === "updatedat") {
    wetuwn d-date.pawse(vawue);
  }
  wetuwn v-vawue;
});

consowe.wog(data);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
