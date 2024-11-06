---
title: 遅延読み込み
slug: Web/Performance/Lazy_loading
l10n:
  sourceCommit: 9bbf5b1cc3cf5736fad6b3d972657df8f8cec234
---

{{QuickLinksWithSubPages("/ja/docs/Web/Performance")}}

**遅延読み込み** (Lazy loading) とは、リソースをノンブロッキング（クリティカルでない）ものとして識別し、必要なときだけこれらを読み込む戦略のことです。[クリティカルレンダリングパス](/ja/docs/Web/Performance/Critical_rendering_path)の長さを短縮する方法であり、ページのロード時間の短縮につながります。

遅延読み込みはアプリケーションのさまざまな場面で発生しますが、一般的にはスクロールやナビゲーションなど、何らかのユーザー操作の際に発生します。

## 概要

ウェブの進化に伴い、ユーザーに送信される資産の数とサイズが大幅に増加するようになりました。
2011 年から 2019 年の間に、リソース重量の中央値は、デスクトップでは **~100KB** から **~400KB** に、モバイルでは **~50KB** から **~350KB** に増加しました。一方、画像サイズは、デスクトップで **~250KB** から **~900KB** に、モバイルで **~100KB** から **~850KB** に増加しました。

この問題に対処するために使用できる方法の 1 つが、[クリティカルレンダリングパス](/ja/docs/Web/Performance/Critical_rendering_path)の長さを短くすることで、最初のレンダリングに重要ではないリソースを遅延読み込みすることです。
実際の例としては、e コマースサイトのトップページにカートページ/セクションへのリンクがあり、カートページのリソース（JavaScript、CSS、画像など）は、そこに移動する**までは**ダウンロードされないというものがあります。

## 戦略

遅延読み込みは、複数のリソースに、複数の戦略で適用することができます。

### 全般

#### コード分割

JavaScript、CSS、HTML は小さな塊に分割して送信することができます。これにより、値を提供するために必要な最小限のコードを前もって送信することができ、ページの読み込み時間を改善することができます。残りはオンデマンドで読み込むことができます。

- エントリーポイント分割: アプリ内のエントリーポイントごとにコードを区切ります。
- 動的分割: [dynamic import()](/ja/docs/Web/JavaScript/Reference/Operators/import) 式を使用しているコードを区切ります。

### JavaScript

#### モジュール型のスクリプト

`type="module"` を持つスクリプトタグは、既定では [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules) として扱われ、先送りされます。

### CSS

既定では、CSS は[描画ブロック](/ja/docs/Web/Performance/Critical_rendering_path)リソースとして扱われ、[CSSOM](/ja/docs/Web/API/CSS_Object_Model) が構築されるまでブラウザーは処理済みのコンテンツを描画しません。CSSは薄く、使用可能な限りすばやく配信する必要があり、レンダリングのブロックを解除するために、メディアタイプや クエリーを使用することが推奨されます。

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

いくらか [CSS の最適化](/ja/docs/Learn/Performance/CSS)をすることで、これを達成することができます。

### フォント

既定では、フォントリクエストはレンダーツリーが構築されるまで遅延されるため、テキスト描画が遅延することがあります。

既定値を上書きしてウェブのフォントリソースを事前読み込みするために、`<link rel="preload">` や [CSS font-display プロパティ](/ja/docs/Web/CSS/@font-face/font-display)、[フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) を使用することが可能です。

[link 要素](/ja/docs/Web/HTML/Element/link) も参照してください。

### 画像と iframe

ウェブページには、データ使用量やページの読み込み速度に影響する画像がたくさん格納されていることがとてもよくあります。これらの画像のほとんどは画面外にあり（[クリティカルではない](/ja/docs/Web/Performance/Critical_rendering_path)）、それらを表示するためにはスクロールなど、ユーザーの操作を必要とします。

#### loading 属性

[`loading`](/ja/docs/Web/HTML/Element/img#loading) 属性を {{HTMLElement("img")}} 要素に（または [`loading`](/ja/docs/Web/HTML/Element/iframe#loading) 属性を {{HTMLElement("iframe")}} 要素に）設定することで、ユーザーが近くにスクロールするまで、画面に表示されている画像や iframe の読み込みを延期するように、ブラウザーに指示することができます。
これにより、クリティカルでないリソースは必要な場合のみ読み込まれるようになり、ページの初期読み込みが高速化され、ネットワーク使用量が縮小する可能性があります。

```html
<img loading="lazy" src="image.jpg" alt="..." />
<iframe loading="lazy" src="video-player.html" title="..."></iframe>
```

`load` イベントは、積極的に読み込まれたコンテンツがすべて読み込まれたときに発行されます。このとき、{{Glossary("visual viewport", "視覚ビューポート")}}の範囲内にまだ読み込まれていない遅延読み込みされた画像または iframe があることは十分に考えられます（というか、あり得ます）。

指定された画像の読み込みが完了したかどうかは、論理型の {{domxref("HTMLImageElement.complete", "complete")}} プロパティの値を調べることで判断することができます。

#### 交差オブザーバー API

[交差オブザーバー](/ja/docs/Web/API/IntersectionObserver)は、監視対象要素がブラウザーのビューポートに入ったとき、または出たときに、ユーザーに知らせることができるようにします。

#### イベントハンドラー

ブラウザーとの互換性が重要な場合、いくつかのオプションがあります。

- [交差オブザーバーのポリフィル](https://github.com/w3c/IntersectionObserver)
- スクロール、リサイズ、方向転換イベントハンドラーのフォールバックで、特定の要素がビューポート内にあるかどうかを判断します。

## 仕様書

{{Specifications}}

## 関連情報

- [Render blocking CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css)
- [Use lazy loading to improve loading speed](https://web.dev/articles/lazy-loading)
