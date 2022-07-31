---
title: Event.timeStamp
slug: Web/API/Event/timeStamp
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Event.timeStamp
translation_of: Web/API/Event/timeStamp
---
{{APIRef("DOM")}}

**`timeStamp`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが作成された時刻（ミリ秒単位）を返します。

## 値

この値は、時間の起点からイベントが作成されるまでの経過ミリ秒数です。グローバルオブジェクトが {{domxref("Window")}} である場合、ユーザーがリンクをクリックした瞬間、または文書の読み込みを開始したスクリプトが時間の起点となります。ワーカーでは、時間の起点はワーカーが作成された瞬間となります。

値は、 5 マイクロ秒（0.005 ミリ秒）精度の {{domxref("DOMHighResTimeStamp")}} ですが、フィンガープリンティングを防ぐために[精度が落とされています](#時間精度の低下)。

## 例

### HTML

```html
<p>
  この iframe にフォーカスを設定していずれかのキーを押下すると、 keypress イベントの現在のタイムスタンプを取得します。
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript

```js
function getTime(event) {
  var time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### 結果

{{EmbedLiveSample("Example", "100%", 100)}}

## 時間精度の低下

タイミング攻撃やフィンガープリントに対する保護を提供するために、 `Event.timeStamp` の精度はブラウザーの設定によって丸められていることがあります。

Firefox では、 `privacy.reduceTimerPrecision` 環境設定が既定で有効になっており、既定値は 2 ミリ秒になっています。

```js
// Firefox 60 では時間の精度が低下します。
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// `privacy.resistFingerprinting` を有効にすると、時間の精度が低下します。
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Firefox では、 `privacy.resistFingerprinting` も有効にすると、精度は 100 ミリ秒または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のうち大きい方になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
