---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
tags:
  - API
  - Clipboard
  - クリップボード API
  - ClipboardEvent
  - Cut
  - 実験的
  - プロパティ
  - 読み取り専用
  - copy
  - paste
browser-compat: api.ClipboardEvent.clipboardData
translation_of: Web/API/ClipboardEvent/clipboardData
---
{{ apiref("Clipboard API") }} {{SeeCompatTable}}

**`ClipboardEvent.clipboardData`** プロパティは、{{domxref("DataTransfer")}} オブジェクトを保持し、次のように使用します。

- クリップボードに置かれるデータを {{domxref("Element/cut_event", "cut")}} および {{domxref("Element/copy_event", "copy")}} のイベントハンドラーから指定するため。ふつう、{{domxref("DataTransfer.setData", "setData(format, data)")}} の呼び出しで行います。
- 貼り付けられるデータを {{domxref("Element/paste_event", "paste")}} イベントハンドラーから取得するため。ふつう、{{domxref("DataTransfer.getData", "getData(format)")}} の呼び出しで行います。

詳しい情報は、{{domxref("Element/cut_event", "cut")}}、{{domxref("Element/copy_event", "copy")}}、{{domxref("Element/paste_event", "paste")}} イベントのドキュメントを参照してください。

## 構文

```js
data = ClipboardEvent.clipboardData
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Copy 関連イベント： {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- 所属先の {{domxref("ClipboardEvent")}} インターフェイス
- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
