---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
---

{{SeeCompatTable}}{{APIRef("Intersection Observer API")}}

[Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API) の **`IntersectionObserverEntry`** インターフェイスは、特定の遷移時点でのターゲット要素とそのルートコンテナ間の共通部分を記述します。 `IntersectionObserverEntry` のインスタンスは、その `entries` パラメータで {{domxref("IntersectionObserver")}} コールバックに渡されます。それ以外の場合、これらのオブジェクトは {{domxref("IntersectionObserver.takeRecords()")}} を呼び出すことによってのみ取得できます。

## プロパティ

- {{domxref("IntersectionObserverEntry.boundingClientRect")}} {{readonlyinline}}
  - : ターゲット要素の矩形の境界を {{domxref("DOMRectReadOnly")}} として返します。境界は {{domxref("Element.getBoundingClientRect()")}} のドキュメントで説明されているのと同様に計算されます。
- {{domxref("IntersectionObserverEntry.intersectionRatio")}} {{readonlyinline}}
  - : `intersectionRect` と `boundingClientRect` の比率を返します。
- {{domxref("IntersectionObserverEntry.intersectionRect")}} {{readonlyinline}}
  - : ターゲットの表示領域を表す {{domxref("DOMRectReadOnly")}} を返します。
- {{domxref("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : ターゲットの要素が、交差を監視しているルートを超えたら `true` を返す真偽値です。 `true` の場合、 `IntersectionObserverEntry` は交差状態の変わり目にあります。 `false` の場合、交差から非交差への変わり目であることがわかります。
- {{domxref("IntersectionObserverEntry.rootBounds")}} {{readonlyinline}}
  - : 交差を監視しているルートの {{domxref("DOMRectReadOnly")}} を返します。
- {{domxref("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : ルートとの交差が変化する {{domxref("Element")}} 。
- {{domxref("IntersectionObserverEntry.time")}} {{readonlyinline}}
  - : `IntersectionObserver` の[時刻の起点](/ja/docs/Web/API/DOMHighResTimeStamp#The_time_origin)を基準にして、交差が記録された時刻を示す {{domxref("DOMHighResTimeStamp")}} 。

## メソッド

_このインタフェースにはメソッドがありません。_

## 仕様

| 仕様書                                                                                                                           | ステータス                                   | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('IntersectionObserver','#intersection-observer-entry','IntersectionObserverEntry')}} | {{Spec2('IntersectionObserver')}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.IntersectionObserverEntry")}}
