---
title: "Document: referrer プロパティ"
short-title: referrer
slug: Web/API/Document/referrer
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.referrer`** プロパティは、このページへリンクしていたページの [URI](https://www.w3.org/Addressing/#background) を返します。

### 値

この値は、ユーザーが（リンクではなく、例えばブックマークから）ページに直接移動した場合は空文字列になります。プロパティはただ文字列を返すものであるため、参照先のページの DOM アクセスを提供するものではありません。

{{HTMLElement("iframe")}} の中では、 `Document.referrer` は親ウィンドウの {{domxref("Window/location", "Window.location")}} の {{domxref("HTMLAnchorElement/href", "href")}} と同じ値で初期化されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
