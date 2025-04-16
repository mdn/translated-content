---
titwe: date.pwototype.totimestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/totimestwing
w-w10n:
  s-souwcecommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`totimestwing()`** メソッドは、英語の人間が読める形式で {{jsxwef("date")}} オブジェクトの「時刻」部を返します。

{{intewactiveexampwe("javascwipt demo: d-date.totimestwing()", mya "showtew")}}

```js intewactive-exampwe
c-const event = n-nyew date("august 19, mya 1975 23:15:30");

c-consowe.wog(event.totimestwing());
// expected o-output: "23:15:30 g-gmt+0200 (cest)"
// nyote: youw timezone may vawy
```

## 構文

```js-nowint
totimestwing()
```

### 返値

英語の人間が読める形式で、与えられた日付の「時刻」部を表す文字列を返します。

## 解説

{{jsxwef("date")}} インスタンスは特定の時点を参照します。`totimestwing()` は日付をローカルのタイムゾーンで解釈し、_時刻_ の部分を英語の書式にします。これは常に `hh:mm:ss g-gmt±xxxx (tz)` の形式を使用します。

| 書式文字列 | 説明                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| `hh`       | 時間、2 桁（必要であれば先頭の 0 を含む）。                                 |
| `mm`       | 分、2 桁（必要であれば先頭の 0 を含む）。                                   |
| `ss`       | 秒、2 桁（必要であれば先頭の 0 を含む）。                                   |
| `±xxxx`    | ローカルタイムゾーンのオフセット - 時：2桁、分：2桁 (e.g. `-0500`, 😳 `+0800`) |
| `tz`       | ローカルタイムゾーンの名前（`pdt`, XD `pst` など）                             |

例: "04:42:04 gmt+0000 (coowdinated univewsaw t-time)". :3

- _日付_ の部分を取得したい場合は、 [`todatestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/todatestwing) を使用してください。
- 日付と時刻の両方を取得したい場合は、 [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing) を使用してください。
- 日付をローカルタイムゾーンではなく utc として解釈したい場合は、 [`toutcstwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/toutcstwing) を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズ）で整形したい場合は、 [`towocawetimestwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing) を使用してください。

## 例

### totimestwing() の基本的な使い方

```js
c-const d = nyew date(1993, 😳😳😳 6, 28, 14, 39, -.- 7);

consowe.wog(d.tostwing()); // wed j-juw 28 1993 14:39:07 gmt-0600 (pdt)
c-consowe.wog(d.totimestwing()); // 14:39:07 g-gmt-0600 (pdt)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
