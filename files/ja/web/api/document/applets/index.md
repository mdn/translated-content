---
title: "Document: applets プロパティ"
short-title: applets
slug: Web/API/Document/applets
l10n:
  sourceCommit: a468a537c0234a3035951e80af76715e1c36c8f7
---

{{APIRef("DOM")}} {{Deprecated_Header}}

**`applets`** は {{domxref("Document")}} のプロパティで、空の {{domxref("HTMLCollection")}} を返します。このプロパティは互換性のためだけに残されています。古いバージョンのブラウザーでは、文書内のアプレットのリストを返していました。

> **メモ:** `<applet>` 要素の対応はすべてのブラウザーで除去されました。そのため、`document.applets`を呼び出すと常に空の集合を返します。

### 値

空の {{domxref("HTMLCollection")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
