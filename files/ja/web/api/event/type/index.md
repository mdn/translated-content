---
title: Event.type
slug: Web/API/Event/type
page-type: web-api-instance-property
tags:
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.Event.type
translation_of: Web/API/Event/type
---
{{APIRef}}

**`type`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントの種別を表す文字列を返します。イベントが構築されると設定され、この名前は `click`, `load`, `error` のような特定のイベントを参照するためによく使用されます。

## 値

{{domxref("Event")}} の種別を表す文字列です。

## 例

この例は、キーボードのキーを押すか、マウスボタンをクリックするとイベント種別をログに出力します。

### HTML

```html
<p>キーを押すか、マウスをクリックしてください。</p>
<p id="log"></p>
```

### JavaScript

```js
function getEventType(event) {
  const log = document.getElementById('log');
  log.innerText = event.type + '\n' + log.innerText;
}

// キーボードイベント
document.addEventListener('keydown', getEventType, false);  // first
document.addEventListener('keypress', getEventType, false); // second
document.addEventListener('keyup', getEventType, false);    // third

// マウスイベント
document.addEventListener('mousedown', getEventType, false); // first
document.addEventListener('mouseup', getEventType, false);   // second
document.addEventListener('click', getEventType, false);     // third
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("EventTarget.addEventListener()") }}
- {{ domxref("EventTarget.removeEventListener()") }}
