---
title: HTMLMediaElement.onerror
slug: conflicting/Web/API/HTMLMediaElement/error_event
original_slug: Web/API/HTMLMediaElement/onerror
---

{{APIRef("HTML DOM")}}

**`onerror`** は {{domxref("HTMLMediaElement")}} インターフェイスのプロパティで、 {{domxref("HTMLMediaElement/error_event", "error")}} イベントを処理するための[イベントハンドラー](/ja/docs/Web/API/Document_Object_Model/Events)です。

`error` イベントは、メディアを読み込んだり実行しようとしたときに何らかのエラーが発生したときに発生します。

## 値

{{jsxref("function")}} で、 {{domxref("HTMLMediaElement/error_event", "error")}} イベントのイベントハンドラーとして機能するものです。エラーが発生すると、指定した関数が呼び出されます。 `null` の場合、エラーハンドラーは無効です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}
- {{HTMLElement("audio")}} および {{HTMLElement("video")}}
