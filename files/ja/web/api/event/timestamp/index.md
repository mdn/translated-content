---
title: "Event: timeStamp プロパティ"
short-title: timeStamp
slug: Web/API/Event/timeStamp
l10n:
  sourceCommit: 9dd97c02a28cc9027f9fd0a28e2e1b4b09405181
---

{{APIRef("DOM")}}

**`timeStamp`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが作成された時刻（ミリ秒単位）を返します。

## 値

この値は、時間の起点からイベントが作成されるまでの経過ミリ秒数です。
グローバルオブジェクトが {{domxref("Window")}} である場合、ユーザーがリンクをクリックした瞬間、または文書の読み込みを開始したスクリプトが時間の起点となります。
ワーカーでは、時間の起点はワーカーが作成された瞬間となります。

値は、5 マイクロ秒（0.005 ミリ秒）精度の {{domxref("DOMHighResTimeStamp")}} ですが、[フィンガープリンティング(/ja/docs/Glossary/Fingerprinting)を防ぐために[精度が落とされています](#時間精度の低下)。

## 例

### HTML

```html
<p>
  この iframe にフォーカスを設定していずれかのキーを押下すると、 keypress
  イベントの現在のタイムスタンプを取得します。
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript

```js
function getTime(event) {
  const time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### 結果

{{EmbedLiveSample("Example", "100%", 100)}}

## 時間精度の低下

タイミング攻撃やフィンガープリントに対する保護を提供するために、`Event.timeStamp` の精度はブラウザーの設定によって丸められていることがあります。

Firefox では、`privacy.reduceTimerPrecision` 環境設定が既定で有効になっており、既定値は 2 ミリ秒になっています。

```js
// Firefox での時間精度の低下（既定: 2 ミリ秒）
event.timeStamp;
// 9934
// 10362
// 11670
// …
```

Firefox では、 `privacy.resistFingerprinting` も有効にすると、精度は 100 ミリ秒または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のうち大きい方になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
