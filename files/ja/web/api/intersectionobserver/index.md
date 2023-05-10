---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserver`** は[交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API) のインターフェイスで、対象となる要素と祖先要素または文書の最上位の{{Glossary('viewport', 'ビューポート')}}との交差状態の変化を非同期に監視する方法を提供します。祖先要素またはビューポートがルートとして参照されます。

`IntersectionObserver` が生成されると、ルート内での可視部分の比率を監視するように構成されます。この構成はいったん `IntersectionObserver` が生成されると変更できませんので、与えられた監視オブジェクトは可視性の面における特定の変化を監視する場合にのみ有用です。しかし、同じオブザーバーで複数の対象要素を監視することができます。

## コンストラクター

- {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}
  - : 対象の要素の可視性が 1 つまたは複数の閾値を通過したことを検出したときに、指定されたコールバック関数を実行する新しい `IntersectionObserver` オブジェクトを生成します。

## プロパティ

- {{domxref("IntersectionObserver.root")}} {{ReadOnlyInline}}
  - : 指定された、監視対象となる {{domxref("Element")}} または {{domxref("Document")}} の祖先です。 `root` の値がコンストラクターに渡されなかったり、 `null` が渡されたりした場合は、最上位の文書のビューポートが使用されます。
- {{domxref("IntersectionObserver.rootMargin")}} {{ReadOnlyInline}}
  - : 交差状態を計算するときにルートの{{Glossary('bounding box', '外接ボックス')}}に適用されるオフセットの矩形で、計算のためにルートを効果的に縮小または拡大させます。このプロパティから返される値は、内部的な要件に合わせて変化するので、コンストラクターを呼び出したときに指定したものと同じにならないことがあります。それぞれのオフセットはピクセル数 (`px`) またはパーセント値 (`%`) で表すことができます。既定値は "0px 0px 0px 0px" です。
- {{domxref("IntersectionObserver.thresholds")}} {{ReadOnlyInline}}
  - : 交差領域と監視対象の外接ボックス領域との比の閾値を昇順に並べたリストです。対象の通知は、対象においていずれかの閾値を通過した場合に生成されます。コンストラクターで値が渡されなければ、 0 が使用されます。

## メソッド

- {{domxref("IntersectionObserver.disconnect()")}}
  - : `IntersectionObserver` オブジェクトが対象を監視することを停止します。
- {{domxref("IntersectionObserver.observe()")}}
  - : `IntersectionObserver` が対象の要素を監視するよう命じます。
- {{domxref("IntersectionObserver.takeRecords()")}}
  - : 監視対象すべての {{domxref("IntersectionObserverEntry")}} オブジェクトの配列を返し、すべての監視を停止します。
- {{domxref("IntersectionObserver.unobserve()")}}
  - : `IntersectionObserver` が特定の要素の監視を停止するよう命じます。

## 例

```js
const intersectionObserver = new IntersectionObserver((entries) => {
  // intersectionRatio が 0 の場合、対象がビューの外にあるので、
  // 何かをする必要はありません。
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log('Loaded new items');
});
// 監視を開始
intersectionObserver.observe(document.querySelector('.scrollerFooter'));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('MutationObserver')}}
- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
