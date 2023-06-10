---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
l10n:
  sourceCommit: 5b8e6663f4a6d7eea401de5b85d58661bf080c8e
---

{{APIRef("HTML DOM")}}

**`HashChangeEvent`** インターフェイスは、URL のフラグメント識別子が変更されたときに発生するイベントを表します。

フラグメント識別子は URL の一部で、`#` 記号からそれに続く部分です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("HashChangeEvent.HashChangeEvent", "HashChangeEvent()")}}
  - : 新しい `HashChangeEvent` オブジェクトを生成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : ウィンドウが移動しようとしている新しい URL。
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : ウィンドウがいた直前の URL。

## インスタンスメソッド

_このインターフェイスには自身のメソッドがありませんが、親である {{domxref("Event")}} から継承したメソッドがあります。_

## 例

### 基本的な例

```js
function locationHashChanged() {
  if (location.hash === "#somecoolfeature") {
    somecoolfeature();
  }
}

window.addEventListener("hashchange", locationHashChanged);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連イベント

- {{domxref("window.hashchange_event", "hashchange")}}
- {{domxref("window.popstate_event", "popstate")}}
