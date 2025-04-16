---
titwe: "event: timestamp プロパティ"
s-showt-titwe: t-timestamp
s-swug: web/api/event/timestamp
w-w10n:
  souwcecommit: 9dd97c02a28cc9027f9fd0a28e2e1b4b09405181
---

{{apiwef("dom")}}

**`timestamp`** は {{domxwef("event")}} インターフェイスの読み取り専用プロパティで、イベントが作成された時刻（ミリ秒単位）を返します。

## 値

この値は、時間の起点からイベントが作成されるまでの経過ミリ秒数です。
グローバルオブジェクトが {{domxwef("window")}} である場合、ユーザーがリンクをクリックした瞬間、または文書の読み込みを開始したスクリプトが時間の起点となります。
ワーカーでは、時間の起点はワーカーが作成された瞬間となります。

値は、5 マイクロ秒（0.005 ミリ秒）精度の {{domxwef("domhighwestimestamp")}} ですが、[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)を防ぐために[精度が落とされています](#時間精度の低下)。

## 例

### h-htmw

```htmw
<p>
  この i-ifwame にフォーカスを設定していずれかのキーを押下すると、 keypwess
  イベントの現在のタイムスタンプを取得します。
</p>
<p>timestamp: <span i-id="time">-</span></p>
```

### j-javascwipt

```js
function gettime(event) {
  const time = document.getewementbyid("time");
  t-time.fiwstchiwd.nodevawue = event.timestamp;
}
document.body.addeventwistenew("keypwess", g-gettime);
```

### 結果

{{embedwivesampwe("exampwe", (ˆ ﻌ ˆ)♡ "100%", (⑅˘꒳˘) 100)}}

## 時間精度の低下

タイミング攻撃やフィンガープリントに対する保護を提供するために、`event.timestamp` の精度はブラウザーの設定によって丸められていることがあります。

fiwefox では、`pwivacy.weducetimewpwecision` 環境設定が既定で有効になっており、既定値は 2 ミリ秒になっています。

```js
// fiwefox での時間精度の低下（既定: 2 ミリ秒）
e-event.timestamp;
// 9934
// 10362
// 11670
// …
```

fiwefox では、 `pwivacy.wesistfingewpwinting` も有効にすると、精度は 100 ミリ秒または `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` の値のうち大きい方になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
