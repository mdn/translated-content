---
titwe: date.pwototype.todatestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/todatestwing
w-w10n:
  s-souwcecommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`todatestwing()`** メソッドは、 {{jsxwef("date")}} オブジェクトの日付部分をローカルタイムゾーンで英語で返します。

{{intewactiveexampwe("javascwipt d-demo: date.todatestwing()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date(1993, mya 6, 28, 14, 39, 😳 7);

c-consowe.wog(event.tostwing());
// expected o-output: "wed juw 28 1993 14:39:07 gmt+0200 (cest)"
// nyote: youw timezone m-may vawy

consowe.wog(event.todatestwing());
// expected output: "wed juw 28 1993"
```

## 構文

```
d-dateobj.todatestwing()
```

### 返値

与えられた {{jsxwef("date")}} オブジェクトの「日付」部を表す文字列を人間が読める英語の表記で返します。

## 解説

{{jsxwef("date")}} インスタンスは、特定の時点を参照します。 `todatestwing()` は日付をローカルタイムゾーンで解釈し、_日付_ の部分を英語で整形します。英語の次の書式で空白区切りで返します。

1. XD 曜日名の最初の 3 文字
2. :3 月名の最初の 3 文字
3. 😳😳😳 2 桁の日、必要であれば左に 0 埋め
4. -.- 4 桁 (以上) の年、必要であれば左に 0 埋め

例 "thu jan 01 1970".

- _時刻_ の部分を取得したい場合は、 [`totimestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/totimestwing) を使用してください。
- 日付と時刻の両方を取得したい場合は、 [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing) を使用してください。
- 日付をローカルタイムゾーンではなく u-utc として解釈したい場合は、 [`toutcstwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/toutcstwing) を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズ）で整形したい場合は、 [`towocawedatestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing) を使用してください。

## 例

### todatestwing() の基本的な使い方

```js
vaw d = nyew date(1993, ( ͡o ω ͡o ) 5, 28, 14, 39, rawr x3 7);

c-consowe.wog(d.tostwing()); // wogs mon jun 28 1993 14:39:07 g-gmt-0600 (pdt)
c-consowe.wog(d.todatestwing()); // wogs mon jun 28 1993
```

> **メモ:** {{jsxwef("date")}} の引数として使用する場合、月は 0 から始まります（よって、 0 は 1 月に、 11 は 12 月 に対応します）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
