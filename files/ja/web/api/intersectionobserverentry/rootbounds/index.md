---
title: "IntersectionObserverEntry: rootBounds プロパティ"
short-title: rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`rootBounds`** は {{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用のプロパティで、 {{domxref("DOMRectReadOnly")}} であり、この {{domxref("IntersectionObserverEntry.target", "target")}} のルート耕作系に対応します。指定されていれば、 {{domxref("IntersectionObserver.rootMargin")}} によるオフセットを含みます。

## 値

{{domxref("DOMRectReadOnly")}} で、ルート交差矩形を表します。 {{domxref("Document")}} のビューポートであるルートの場合、この矩形は文書全体の境界矩形となります。
そうでない場合は、ルート要素の境界となります。

この矩形のオフセットは {{domxref("IntersectionObserver.rootMargin")}} の値で指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
