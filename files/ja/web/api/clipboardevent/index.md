---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}

**`ClipboardEvent`** は[クリップボード API](/ja/docs/Web/API/Clipboard_API) のインターフェイスで、 クリップボードの変更に関連する情報を提供するイベントを表します。すなわち、{{domxref("Element/cut_event", "cut")}}、{{domxref("Element/copy_event", "copy")}}、{{domxref("Element/paste_event", "paste")}} イベントです。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : 指定した引数で `ClipboardEvent` イベントを生成します。

## インスタンスプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : ユーザーが開始した {{domxref("Element/cut_event", "cut")}}、{{domxref("Element/copy_event", "copy")}}、{{domxref("Element/paste_event", "paste")}} 操作によって影響を受けたデータとその MIME タイプを含む {{domxref("DataTransfer")}} オブジェクト。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("Event")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Copy 関連イベント： {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
