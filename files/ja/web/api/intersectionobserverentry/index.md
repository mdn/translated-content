---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserverEntry`** は[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) のインターフェイスで、遷移の特定の瞬間における対象要素とそのルートコンテナー間の交差状態を表します。

`IntersectionObserverEntry` のインスタンスは、 {{domxref("IntersectionObserver")}} のコールバックに `entries` 引数で渡されます。それ以外でこれらのオブジェクト取得することができるのは、 {{domxref("IntersectionObserver.takeRecords()")}} を呼び出した場合のみです。

## プロパティ

- {{domxref("IntersectionObserverEntry.boundingClientRect")}} {{ReadOnlyInline}}
  - : 対象要素の外接矩形を {{domxref("DOMRectReadOnly")}} として返します。境界は {{domxref("Element.getBoundingClientRect()")}} の記事で説明されているのと同様に計算されます。
- {{domxref("IntersectionObserverEntry.intersectionRatio")}} {{ReadOnlyInline}}
  - : `intersectionRect` と `boundingClientRect` の比率を返します。
- {{domxref("IntersectionObserverEntry.intersectionRect")}} {{ReadOnlyInline}}
  - : 対象の表示領域の矩形を表す {{domxref("DOMRectReadOnly")}} を返します。
- {{domxref("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : 論理値で、対象要素が、この交差オブザーバーのルートに対象要素が交差したときは `true` になります。この値が `true` の場合、 `IntersectionObserverEntry` は交差状態への変わり目にあることを示します。 `false` の場合、交差状態から交差なしへの変わり目であることがわかります。
- {{domxref("IntersectionObserverEntry.rootBounds")}} {{ReadOnlyInline}}
  - : この交差オブザーバーのルートの矩形である {{domxref("DOMRectReadOnly")}} を返します。
- {{domxref("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : ルートとの交差状態が変化した {{domxref("Element")}} です。
- {{domxref("IntersectionObserverEntry.time")}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、この `IntersectionObserver` の[時刻の起点](/ja/docs/Web/API/DOMHighResTimeStamp#時刻の起点)を基準にして、交差が記録された時刻を示します。

## メソッド

_このインターフェイスにはメソッドがありません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
