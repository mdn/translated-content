---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserverEntry`** は[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) のインターフェイスで、特定の遷移時点での対象要素とそのルートコンテナー間の交差状態を表します。

`IntersectionObserverEntry` のインスタンスは、 {{domxref("IntersectionObserver")}} のコールバックに `entries` 引数で渡されます。それ以外でこれらのオブジェクト取得することができるのは、 {{domxref("IntersectionObserver.takeRecords()")}} を呼び出した場合のみです。

## プロパティ

- {{domxref("IntersectionObserverEntry.boundingClientRect")}} {{ReadOnlyInline}}
  - : 対象要素の外接矩形を {{domxref("DOMRectReadOnly")}} として返します。境界は {{domxref("Element.getBoundingClientRect()")}} の記事で説明されているのと同様に計算されます。
- {{domxref("IntersectionObserverEntry.intersectionRatio")}} {{ReadOnlyInline}}
  - : `intersectionRect` と `boundingClientRect` の比率を返します。
- {{domxref("IntersectionObserverEntry.intersectionRect")}} {{ReadOnlyInline}}
  - : 対象の表示領域を表す {{domxref("DOMRectReadOnly")}} を返します。
- {{domxref("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : 論理値で、対象要素が、交差を監視しているルートを超えたら `true` になります。この値が `true` の場合、 `IntersectionObserverEntry` は交差状態の変わり目にあります。 `false` の場合、交差ありから交差なしへの変わり目であることがわかります。
- {{domxref("IntersectionObserverEntry.rootBounds")}} {{ReadOnlyInline}}
  - : 交差を監視しているルートの {{domxref("DOMRectReadOnly")}} を返します。
- {{domxref("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : ルートとの交差が変化する {{domxref("Element")}} です。
- {{domxref("IntersectionObserverEntry.time")}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、 `IntersectionObserver` の[時刻の起点](/ja/docs/Web/API/DOMHighResTimeStamp#時刻の起点)を基準にして、交差が記録された時刻を示します。

## メソッド

_このインタフェースにはメソッドがありません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
