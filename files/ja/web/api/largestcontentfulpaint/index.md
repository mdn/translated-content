---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

`LargestContentfulPaint` インターフェイスは、ウェブページ上でユーザー入力が行われる前に描画される最大の画像またはテキストに関するタイミング情報を提供します。

## 解説

この API が提供する重要な指標は、{{Glossary("Largest Contentful Paint")}} (LCP) です。これは、ページの読み込みが開始された時点から記録され、ビューポート内に表示される最大の画像またはテキストブロックのレンダリング時間を示します。LCP を算出する際には、以下の要素が考慮されます。

- {{HTMLElement("img")}} 要素
- SVG 内の [`<image>`](/ja/docs/Web/SVG/Reference/Element/image) 要素。
- {{HTMLElement("video")}} 要素のポスター画像。
- {{cssxref("background-image")}} 付きの要素。
- テキストノードのグループ、例えば {{HTMLElement("p")}}。

他の要素のレンダリング時間を測定するには、{{domxref("PerformanceElementTiming")}} API を使用してください。
その他の主要な描画のタイミングについては、{{domxref("PerformancePaintTiming")}} API が提供しています。

- {{Glossary("First Paint")}} (FP): 何らかのものがレンダリングされた時点。なお、ファーストペイントの計測は任意であり、すべてのユーザーエージェントがこれを報告するわけではありません。
- {{Glossary("First Contentful Paint")}} (FCP): DOM 上のテキストまたは画像コンテンツの最初の部分がレンダリングされた時点。

`LargestContentfulPaint` は {{domxref("PerformanceEntry")}} を継承しています。

{{InheritanceDiagram}}

異なるオリジンからのリソースのレンダリング時間を正確に取得するには、{{httpheader("Timing-Allow-Origin")}} ヘッダーを設定してください。

詳細については、[異なるオリジンからの画像のレンダリング時間](/ja/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) および [renderTime ではなく startTime を使用する](/ja/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime) を参照してください。

## インスタンスプロパティ

このインターフェイスは、以下のプロパティを直接定義しています。

- {{domxref("LargestContentfulPaint.element")}} {{ReadOnlyInline}}
  - : 現在 LCP である要素。
- {{domxref("LargestContentfulPaint.renderTime")}} {{ReadOnlyInline}}
  - : 要素が画面に描画された時点。要素の画像が異なるオリジンからのもので、`Timing-Allow-Origin` ヘッダーなしで読み込まれた場合、値が丸められていることがあります。
- {{domxref("LargestContentfulPaint.loadTime")}} {{ReadOnlyInline}}
  - : その要素が読み込まれた時点。
- {{domxref("LargestContentfulPaint.size")}} {{ReadOnlyInline}}
  - : 面積（幅 × 高さ）として返される要素の内在サイズ。
- {{domxref("LargestContentfulPaint.id")}} {{ReadOnlyInline}}
  - : 要素の ID。このプロパティは、ID が存在しない場合、空文字列を返します。
- {{domxref("LargestContentfulPaint.paintTime")}}
  - : レンダリングフェーズが終了し、ペイントフェーズが始まった時点の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。
- {{domxref("LargestContentfulPaint.presentationTime")}}
  - : ピクセルが実際に画面上に描画された時点の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。
- {{domxref("LargestContentfulPaint.url")}} {{ReadOnlyInline}}
  - : 要素が画像の場合、その画像のリクエスト URL。

同時に、以下の {{domxref("PerformanceEntry")}} プロパティを拡張し、以下に説明する通り、それらに条件や制約を課しています。

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : `"largest-contentful-paint"` を返します。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 常に空文字列を返します。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この項目の {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} の値を返します。
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 期間はこのインターフェイスには適用できないため、`0` を返します。

## インスタンスメソッド

_このインターフェイスには、{{domxref("PerformanceEntry")}} から継承したメソッドもあります。_

- {{domxref("LargestContentfulPaint.toJSON()")}}
  - : `LargestContentfulPaint` オブジェクトの JSON 表現を返します。

## 例

### LCP の監視

次の例では、ページの読み込み中に LCP を取得するために、{{domxref("PerformanceObserver")}} を登録しています。`buffered` フラグを使用すると、オブザーバーの作成以前のデータにアクセスできます。

LCP API は、見つけたすべての内容（DOM から除去された内容も含む）を分析します。新しい最大コンテンツが見つかった場合、新しい項目を作成します。スクロールや入力イベントが発生すると、ウェブサイト上に新しいコンテンツが追加される可能性が高いことから、それ以上の大きなコンテンツの検索を停止します。したがって、LCP はオブザーバーから報告される最後のパフォーマンス項目となります。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 最新の LCP 候補を使用
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### 描画と表示のタイミングを別個に観察

`paintTime` および `presentationTime` プロパティを使用すると、描画フェーズが始まる時点や、描画されたピクセルが画面に表示される時点といった具体的なタイミングを取得することができます。`paintTime` は広く相互運用性がありますが、`presentationTime` は実装に依存します。

この例は、前述のオブザーバーの例を基にしており、`paintTime` および `presentationTime` の対応状況を調べ、利用できる場合はそれらの値を取得する方法を示しています。対応していないブラウザーでは、コードは対応している値に応じて `renderTime` または `loadTime` を取得します。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 最新の LCP 候補を使用
  if (lastEntry.presentationTime) {
    console.log(
      "LCP paintTime:",
      lastEntry.paintTime,
      "LCP presentationTime:",
      lastEntry.presentationTime,
    );
  } else if (lastEntry.paintTime) {
    console.log("LCP paintTime:", lastEntry.paintTime);
  } else if (lastEntry.renderTime) {
    console.log("LCP renderTime:", lastEntry.renderTime);
  } else {
    console.log("LCP loadTime:", lastEntry.loadTime);
  }
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Glossary("Largest Contentful Paint")}}
- {{Glossary("First Contentful Paint")}}
- {{Glossary("First Paint")}}
