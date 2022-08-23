---
title: GlobalEventHandlers.onloadend
slug: conflicting/Web/API/XMLHttpRequest/loadend_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - Web
  - events
  - onloadend
translation_of: Web/API/GlobalEventHandlers/onloadend
original_slug: Web/API/GlobalEventHandlers/onloadend
---
{{ApiRef}}

**`onloadend`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{domxref("XMLHttpRequest/loadend_event", "loadend")}} イベントが発行されたとき (リソースの読み取り中に進捗が停止したとき) に呼び出されるコードを表すイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

## 構文

```
img.onloadend = funcRef;
```

### 値

`funcRef` はリソースの `loadend` イベントが発行されたときに呼び出されるハンドラー関数です。

## 例

### HTML

```html
<img src="myImage.jpg">
```

### JavaScript

```js
// 'loadstart' が最初に発行され、次に 'load'、その次に 'loadend'

image.addEventListener('load', function(e) {
  console.log('Image loaded');
});

image.addEventListener('loadstart', function(e) {
  console.log('Image load started');
});

image.addEventListener('loadend', function(e) {
  console.log('Image load finished');
});
```

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.onloadend")}}
