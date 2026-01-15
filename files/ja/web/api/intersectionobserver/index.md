---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 1b61fe3aa68b972468514d5ab13ed93497b13a96
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserver`** は[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) のインターフェイスで、対象となる要素と祖先要素または文書の最上位の{{Glossary('viewport', 'ビューポート')}}とがの交差状態（重なり合っている状態）の変化を非同期に監視する方法を提供します。その祖先要素またはビューポートはルートと呼ばれます。

`IntersectionObserver` が生成されると、ルート内での可視部分の比率を監視するように構成されます。この構成はいったん `IntersectionObserver` が生成されると変更できませんので、与えられたオブザーバーオブジェクトは可視性の特定の変化を監視する場合にのみ利用できます。しかし、同じオブザーバーで複数の対象要素を監視することができます。

## コンストラクター

- {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}
  - : 新しい `IntersectionObserver` オブジェクトを生成します。これは対象の要素の可視性が 1 つまたは複数のしきい値を通過したことを検出したときに、指定されたコールバック関数を実行します。

## インスタンスプロパティ

- {{domxref("IntersectionObserver.delay")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 整数で、オブザーバーからの通知間の最小遅延時間を示します。
- {{domxref("IntersectionObserver.root")}} {{ReadOnlyInline}}
  - : {{domxref("Element")}} または {{domxref("Document")}} であり、この外接矩形が交差を検査するときに外接ボックスとして使用されます。 `root` の値がコンストラクターに渡されなかったり、 `null` が渡されたりした場合は、最上位の文書のビューポートが使用されます。
- {{domxref("IntersectionObserver.rootMargin")}} {{ReadOnlyInline}}
  - : 交差状態を計算するときにルートの{{Glossary('bounding box', '外接ボックス')}}に適用されるオフセットの矩形で、計算に使用するルートの矩形を縮小または拡大させます。このプロパティから返される値は、内部的な要件に合わせて変化するので、コンストラクターを呼び出したときに指定したものと同じにならないことがあります。それぞれのオフセットはピクセル数 (`px`) またはパーセント値 (`%`) で表すことができます。既定値は "0px 0px 0px 0px" です。
- {{domxref("IntersectionObserver.scrollMargin")}} {{ReadOnlyInline}}
  - : 交差ルートから対象までのパス上のそれぞれの{{glossary("scroll container", "スクロールコンテナー")}}に適用されるオフセット矩形。これにより、交差計算に使用されるクリップ矩形が効果的に縮小または拡張されます。
    このプロパティが返す値は、コンストラクター呼び出し時に指定された値と同一ではない場合があります。
- {{domxref("IntersectionObserver.thresholds")}} {{ReadOnlyInline}}
  - : しきい値のリストで、交差領域と監視対象の外接ボックス領域との比を昇順に並べます。あるターゲットのしきい値を超えると、そのターゲットに対する通知が生成されます。コンストラクターに値が渡されなかった場合、 0 が使用されます。
- {{domxref("IntersectionObserver.trackVisibility")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 論理値で、この `IntersectionObserver` が対象の可視性が損なわれていないことを調べるかどうかを表します。

## インスタンスメソッド

- {{domxref("IntersectionObserver.disconnect()")}}
  - : `IntersectionObserver` オブジェクトによる対象の監視を停止します。
- {{domxref("IntersectionObserver.observe()")}}
  - : `IntersectionObserver` に対象の要素を監視するよう指示します。
- {{domxref("IntersectionObserver.takeRecords()")}}
  - : 監視対象すべての {{domxref("IntersectionObserverEntry")}} オブジェクトの配列を返します。
- {{domxref("IntersectionObserver.unobserve()")}}
  - : `IntersectionObserver` が特定の要素の監視を停止するよう指示します。

## 例

```js
const intersectionObserver = new IntersectionObserver((entries) => {
  // intersectionRatio が 0 の場合、対象がビューの外にあるので、
  // 何かをする必要はありません。
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log("Loaded new items");
});
// 監視を開始
intersectionObserver.observe(document.querySelector(".scrollerFooter"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('MutationObserver')}}
- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
