---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
---

{{APIRef("Intersection Observer API")}}

[Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API) の **`IntersectionObserver`** インターフェイスは、対象の要素と祖先要素または文書の最上位の{{Glossary('viewport', 'ビューポート')}}との交差状態の変化を非同期に監視する方法を提供します。祖先要素またはビューポートがルートとして参照されます。

`IntersectionObserver` が生成されると、ルート内での可視部分の比率を監視するように構築されます。構成はいったん `IntersectionObserver` が生成されると変更できませんので、与えられた監視オブジェクトは可視性の観点による特定の変化を監視する場合にのみ有用です。しかしながら、同じオブザーバーで複数の対象要素を監視することができます。

## コンストラクター

- {{domxref("IntersectionObserver.IntersectionObserver()")}}
  - : 対象の要素の可視性が 1 つまたは複数の閾値を通過したことを検出したときに、指定されたコールバック関数を実行する新しい `IntersectionObserver` オブジェクトを生成します。

## プロパティ

- {{domxref("IntersectionObserver.root")}} {{readonlyinline}}
  - : 指定された、監視対象となる {{domxref("element")}} の祖先です。コンストラクターに値が渡されなかった場合はこの値が `null` となり、最上位の文書のビューポートが使用されます。
- {{domxref("IntersectionObserver.rootMargin")}} {{readonlyinline}}
  - : 交差状態を計算するときに root の {{Glossary('bounding box', 'バウンディングボックス')}} に適用されるオフセットの矩形で、計算のために root を効果的に縮小または拡大させます。このプロパティから返る値は、内部的な要件に合わせて変化するので、コンストラクターを呼び出したときに指定したものと同じにならないことがあります。それぞれのオフセットはピクセル数 (`px`) またはパーセント値 (`%`) で表すことができます。既定値は "0px 0px 0px 0px" です。
- {{domxref("IntersectionObserver.thresholds")}} {{readonlyinline}}
  - : 交差領域と監視対象のバウンディングボックス領域との比の閾値を昇順に並べたリストです。対象の通知は、対象においていずれかの閾値を通過した場合に生成されます。コンストラクターで値が渡されなければ、 0 が使用されます。

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
var intersectionObserver = new IntersectionObserver(function(entries) {
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

| 仕様書                                           | 状態                                         | 備考 |
| ------------------------------------------------ | -------------------------------------------- | ---- |
| {{SpecName('IntersectionObserver')}} | {{Spec2('IntersectionObserver')}} |      |

## ブラウザーの対応

{{Compat("api.IntersectionObserver")}}
