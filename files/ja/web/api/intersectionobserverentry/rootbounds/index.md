---
title: "IntersectionObserverEntry: rootBounds プロパティ"
short-title: rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用の **`rootBounds`** プロパティは {{domxref("DOMRectReadOnly")}} であり、この {{domxref("IntersectionObserverEntry.target", "target")}} のルート耕作系に対応します。指定されていれば、 {{domxref("IntersectionObserver.rootMargin")}} によるオフセットを含みます。

## 値

{{domxref("DOMRectReadOnly")}} で、ルート交差矩形を表します。 {{domxref("Document")}} のビューポートであるルートの場合、この矩形は文書全体の境界矩形となります。そうでない場合は、ルート要素の境界となります。

この矩形のオフセットは {{domxref("IntersectionObserver.rootMargin")}} の値で指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
