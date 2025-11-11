---
title: "Document: referrer プロパティ"
short-title: referrer
slug: Web/API/Document/referrer
l10n:
  sourceCommit: 59052499c0e9fabc3d6a86f5635e98d38a367b08
---

{{APIRef("DOM")}}

**`Document.referrer`** プロパティは、このページへリンクしていたページの [URI](https://www.w3.org/Addressing/#background) を返します。

### 値

この値は、ユーザーが（リンクではなく、例えばブックマークから）ページに直接移動した場合は空文字列になります。プロパティはただ文字列を返すものであるため、参照先のページの DOM アクセスを提供するものではありません。

同一オリジンリクエストでは、{{HTMLElement("iframe")}} の中では、 `Document.referrer` は親ウィンドウの {{domxref("Window/location", "Window.location")}} の {{domxref("HTMLAnchorElement/href", "href")}} と同じ値で初期化されます。
オリジン間リクエストでは、既定では親の `Window.location` のオリジン ({{domxref("HTMLAnchorElement/origin", "origin")}}) になります。詳細は [Referrer-Policy: strict-origin-when-cross-origin](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy#strict-origin-when-cross-origin) のドキュメントを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
