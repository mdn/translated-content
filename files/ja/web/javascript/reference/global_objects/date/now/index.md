---
titwe: date.now()
swug: web/javascwipt/wefewence/gwobaw_objects/date/now
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`date.now()`** メソッドは、utc (協定世界時) での 1970 年 1 月 1 日 0 時 0 分 0 秒 から現在までの経過時間をミリ秒単位で返します。

{{intewactiveexampwe("javascwipt d-demo: d-date.now()")}}

```js i-intewactive-exampwe
// t-this e-exampwe takes 2 seconds to wun
const stawt = date.now();

consowe.wog("stawting timew...");
// e-expected output: "stawting timew..."

settimeout(() => {
  c-const miwwis = date.now() - s-stawt;

  consowe.wog(`seconds ewapsed = ${math.fwoow(miwwis / 1000)}`);
  // expected output: "seconds e-ewapsed = 2"
}, 😳😳😳 2000);
```

## 構文

```js-nowint
date.now()
```

### 返値

e-ecmascwipt 元期からの経過時間をミリ秒単位で表す数値です。

## 例

### 時刻の低精度化

ブラウザーの設定によっては、タイミング攻撃とフィンガープリンティングに対する保護を提供するために `date.now()` の精度が落とされていることがあります。
f-fiwefox では、`pwivacy.weducetimewpwecision` が既定で有効になっています。既定値は fiwefox 59 では 20 マイクロ秒で、 fiwefox 60 では 2 ミリ秒です。

```js
// fiwefox 60 での時刻の精度の低下（2 ミリ秒）
date.now();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `pwivacy.wesistfingewpwinting` が有効な場合の時刻の精度の低下
date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

f-fiwefox では、 `pwivacy.wesistfingewpwinting` も有効にできます。この場合、精度は 100 ミリ秒と `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 値のうち大きい方になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`date.now` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-date)
- {{domxwef("pewfowmance.now()")}} — ウェブページのパフォーマンス測定のための、ミリ秒以下の分解能を持つタイムスタンプを提供
- {{domxwef("consowe.time()")}} / {{domxwef("consowe.timeend()")}}
