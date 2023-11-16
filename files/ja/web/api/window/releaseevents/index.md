---
title: Window.releaseEvents()
slug: Web/API/Window/releaseEvents
---

{{ ApiRef() }} {{Deprecated_Header}} {{Non-standard_header}}

このウィンドウが指定された種類のイベントを捕捉することを解除します。

## 構文

```js
window.releaseEvents(eventType);
```

`eventType` は、 `Event.ABORT`, `Event.BLUR`, `Event.CLICK`, `Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`, `Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`, `Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`, `Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`, `Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`, `Event.RESET`, `Event.RESIZE`, `Event.SELECT`, `Event.SUBMIT`, `Event.UNLOAD` の値の組み合わせです。

## 例

```js
window.releaseEvents(Event.KEYPRESS);
```

## 注

イベントのリストをこのメソッドに渡すには、 `window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)` のような構文を使用することに注意してください。

[`window.captureEvents`](/ja/docs/Web/API/Window/captureEvents) ({{deprecated_inline}}) も参照してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}
