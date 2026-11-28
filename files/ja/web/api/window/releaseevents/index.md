---
title: "Window: releaseEvents() メソッド"
short-title: releaseEvents()
slug: Web/API/Window/releaseEvents
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

ウィンドウが特定の種類のイベントを捕捉することを解除します。

## 構文

```js-nolint
releaseEvents(eventType)
```

### 引数

- `eventType`
  - : 次の値の組み合わせです。
    `Event.ABORT`, `Event.BLUR`, `Event.CLICK`,
    `Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`,
    `Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`,
    `Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`,
    `Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`,
    `Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`,
    `Event.RESET`, `Event.RESIZE`, `Event.SELECT`,
    `Event.SUBMIT`, `Event.UNLOAD`。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
window.releaseEvents(Event.KEYPRESS);
```

## 注

次の構文を使用すると、イベントのリストをこのメソッドに渡すことができます。
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`。

[`window.captureEvents`](/ja/docs/Web/API/Window/captureEvents) ({{Deprecated_Inline}}) も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
