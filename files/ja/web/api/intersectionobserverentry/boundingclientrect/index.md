---
title: IntersectionObserverEntry.boundingClientRect
slug: Web/API/IntersectionObserverEntry/boundingClientRect
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} インターフェイスの読み取り専用の **`boundingClientRect`** プロパティは、要するに対象要素全体を含む最小の矩形を記述した {{domxref("DOMRectReadOnly")}} を返します。

## 値

{{domxref("DOMRectReadOnly")}} で、交差状態の変化を記述している対象要素のすべての部分を含む、最小の矩形を記述します。この値は {{domxref("Element.getBoundingClientRect()")}} と同じアルゴリズムで取得されるので、この矩形を得るために何が行われ、何がその境界内に含まれ、何が含まれないかという正確な内容については、その記事を参照してください。

しかし、一般的なケースでは、これを対象要素の外接矩形と考えるのが無難でしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
