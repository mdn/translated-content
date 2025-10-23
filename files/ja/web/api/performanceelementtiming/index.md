---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`PerformanceElementTiming`** インターフェイスは、開発者が [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性で記述した画像やテキストのノード要素の描画タイミング情報を保持します。

## 解説

要素タイミング API の目的は、ウェブ開発者や分析ツールにページ上の重要な要素のレンダリングタイムスタンプを測定する機能を提供することです。

API は以下の要素のタイミング情報に対応しています。

- {{htmlelement("img")}} 要素
- {{SVGElement("image")}} 要素（{{SVGElement("svg")}} 内）
- [ポスター画像](/ja/docs/Web/HTML/Reference/Elements/video#poster)（{{htmlelement("video")}} 要素）
- {{cssxref("background-image")}} がある要素
- テキストノードのグループ、 {{htmlelement("p")}} など

作者は要素に [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性を追加することで、監視のためのフラグを立てます。

`PerformanceElementTiming` は {{domxref("PerformanceEntry")}} を継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

このインターフェイスは、以下のイベントタイミングパフォーマンス項目型である {{domxref("PerformanceEntry")}} プロパティを以下のように修飾して拡張しています。

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 常に `0` を返します。 `duration` はこのインターフェイスでは利用できません。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 常に `"element"` を返します。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 画像には `"image-paint"` を返し、テキストには `"text-paint"` を返します。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この項目の {{domxref("PerformanceElementTiming.renderTime", "renderTime")}} の値が `0` でない場合はその値を返し、そうでない場合はこの項目の {{domxref("PerformanceElementTiming.loadTime", "loadTime")}} の値を返します。

このインターフェイスは以下のプロパティにも対応しています。

- {{domxref("PerformanceElementTiming.element")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 情報を返す要素を表す {{domxref("Element")}} です。
- {{domxref("PerformanceElementTiming.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) である文字列です。
- {{domxref("PerformanceElementTiming.identifier")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 要素の [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/for) 属性の値である文字列です。
- {{domxref("PerformanceElementTiming.intersectionRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ビューポート内の要素の矩形である {{domxref("DOMRectReadOnly")}} です。
- {{domxref("PerformanceElementTiming.loadTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 要素の読み込み時間を持つ {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref("PerformanceElementTiming.naturalHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 符号なし 32 ビット整数 (unsigned long) で、これが画像に適用されているときは画像の内在的な高さを表し、テキストのときは 0 です。
- {{domxref("PerformanceElementTiming.naturalWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 符号なし 32 ビット整数 (unsigned long) で、これが画像に適用されているときは画像の内在的な幅を表し、テキストのときは 0 です。
- {{domxref("PerformanceElementTiming.renderTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 要素の描画時間を持つ {{domxref("DOMHighResTimeStamp")}} です。
- {{domxref("PerformanceElementTiming.url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 画像の場合はリソースをリクエストする初期 URL となる文字列です。テキストの場合は 0 です。

## インスタンスメソッド

- {{domxref("PerformanceElementTiming.toJSON()")}} {{Experimental_Inline}}
  - : `PerformanceElementTiming` オブジェクトを JSON で返します。

## 例

### 固有の要素のレンダリング時間の監視

この例では、 [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性を追加することで、 2 つの要素を監視しています。 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録され、 `buffered` フラグを使用してオブザーバー作成前のデータにアクセスしています。

```html
<img src="image.jpg" elementtiming="big-image" />
<p elementtiming="text" id="text-id">text here</p>
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});
observer.observe({ type: "element", buffered: true });
```

2 つの項目がコンソールに出力されます。最初の項目は画像の詳細を格納し、 2 つ目はテキストノードの詳細を格納します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) HTML 属性
