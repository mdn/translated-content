---
title: GlobalEventHandlers.onabort
slug: Web/API/HTMLMediaElement/abort_event
tags:
  - API
  - イベントハンドラー
  - GlobalEventHandlers
  - NeedsContent
  - NeedsHelp
  - NeedsUpdate
  - プロパティ
  - リファレンス
  - Window
translation_of: Web/API/GlobalEventHandlers/onabort
original_slug: Web/API/GlobalEventHandlers/onabort
browser-compat: api.GlobalEventHandlers.onabort
---
{{ApiRef("HTML DOM")}}

**`onabort`** は {{domxref("GlobalEventHandlers")}} ミックスインの[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)で、 `abort` イベントを処理します。

現在、{{domxref("HTMLAudioElement")}} と {{domxref("HTMLVideoElement")}} インターフェイス（{{domxref("HTMLMediaElement")}} を継承しているもの）のみが {{domxref("HTMLMediaElement/abort_event", "abort")}} イベントを発行するようになっています。

> **Note:** 以前は `abort` イベントが `Window` で発生しましたが、標準から削除されました（[HTML issue #3525](https://github.com/whatwg/html/issues/3525) を参照してください）。

## 構文

```js
element.onabort = functionRef;
```

### 値

`functionRef` は関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。

## 例

```js
element.onabort = function() {
  alert('Load aborted.');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
