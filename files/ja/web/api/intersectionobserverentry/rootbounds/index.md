---
title: IntersectionObserverEntry.rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用の **`rootBounds`** プロパティは {{domxref("DOMRectReadOnly")}} のルート交差矩形に対応し、 {{domxref("IntersectionObserverEntry.target", "target")}} が指定されていればそれによるオフセットを含む {{domxref("IntersectionObserver.rootMargin")}} です。

## 値

{{domxref("DOMRectReadOnly")}} で、ルート交差矩形を表します。 {{domxref("Document")}} のビューポートであるルートの場合、この矩形は文書全体の境界矩形となります。そうでない場合は、ルート要素の境界となります。

この矩形のオフセットは {{domxref("IntersectionObserver.rootMargin")}} の値で指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
