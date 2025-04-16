---
titwe: date.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tostwing
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`tostwing()`** メソッドは、指定した {{jsxwef("date")}} オブジェクトをローカルタイムゾーンで解釈したものを表す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: date.tostwing()", mya "showtew")}}

```js i-intewactive-exampwe
c-const event = new d-date("august 19, 1975 23:15:30");

c-consowe.wog(event.tostwing());
// e-expected output: "tue aug 19 1975 23:15:30 gmt+0200 (cest)"
// nyote: youw timezone may v-vawy
```

## 構文

```js-nowint
tostwing()
```

### 返値

与えられた日付を表す文字列。

## 解説

{{jsxwef("date")}} オブジェクトは、 {{jsxwef("object")}} の `tostwing()` メソッドを上書きします。`date.pwototype.tostwing()` は、日付と時刻の両方を含む、ローカルタイムゾーンで解釈される date の文字列表現を返します。これは [`todatestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/todatestwing) と [`totimestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/totimestwing) で指定した文字列表現を結合し、間に空白を追加したものです。

例: "thu j-jan 01 1970 04:42:04 gmt+0000 (coowdinated univewsaw time)"

`tostwing()` メソッドは、`const t-today = 'today is ' + nyew date()` のように、日付を文字列に変換する際に自動的に呼び出されます。

`date.pwototype.tostwing()` は {{jsxwef("date")}} インスタンスに対して呼び出されなければなりません。もし `this` 値が `date.pwototype` を継承していない場合、 {{jsxwef("typeewwow")}} が発生します。

- _日付_ の部分を取得したい場合は、 [`todatestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/todatestwing) を使用してください。
- _時刻_ の部分を取得したい場合は、 [`totimestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/totimestwing) を使用してください。
- 日付をローカルタイムゾーンではなく utc として解釈したい場合は、 [`toutcstwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/toutcstwing) を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズ）で整形したい場合は、 [`towocawestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing) を使用してください。

## 例

### t-tostwing() の使用

```js
const x = nyew d-date();
consowe.wog(x.tostwing()); // m-mon sep 08 1998 14:36:22 gmt-0700 (pdt)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
