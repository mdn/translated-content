---
title: ウェブパフォーマンスのベストプラクティスとヒント
short-title: ベストプラクティスとヒント
slug: Learn_web_development/Extensions/Performance/Best_practices
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

ウェブサイトが可能な限りのパフォーマンスを発揮すべき[理由](https://web.dev/learn/performance/why-speed-matters)はたくさんあります。
以下に、各トピックの詳細情報を提供するためのリンク付きのベストプラクティス、ツール、API の簡単なレビューを示します。

## ベストプラクティス

- まずは、ブラウザーの[クリティカルレンダリングパス](/ja/docs/Web/Performance/Guides/Critical_rendering_path)について学びましょう。これを理解することで、ウェブサイトのパフォーマンスを改善する方法を把握できるようになります。
- リソースヒント、例えば [`rel=preconnect`](/ja/docs/Web/HTML/Reference/Attributes/rel/preconnect)、[`rel=dns-prefetch`](/ja/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)、[`rel=prefetch`](/ja/docs/Web/HTML/Reference/Attributes/rel/prefetch)、[`rel=preload`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) を使用します。
- JavaScript のサイズを[最小]に抑えてください。現在のページで必要となる分だけ JavaScript を使用するようにしてください。
- [CSS](/ja/docs/Learn_web_development/Extensions/Performance/CSS) パフォーマンス要因
- {{Glossary("HTTP_2", "HTTP/2")}} をサーバー（または CDN）で使用します。
- 読み込み時間を大幅に短縮できるリソースには、CDN をご利用ください。
- リソースを [gzip](https://www.gnu.org/software/gzip/)、[Brotli](https://github.com/google/brotli)、[Zopfli](https://github.com/google/zopfli) などを使用して圧縮してください。
- 画像の最適化（可能であれば CSS アニメーションまたは SVG を使用する）。
- ビューポート外にあるアプリケーションの一部を遅延読み込みします。その場合は、SEOのための代替策（例：ボットトラフィック向けにページ全体をレンダリングする）を用意してください。例えば、[`loading`](/ja/docs/Web/HTML/Reference/Elements/img#loading) 属性を{{HTMLElement("img")}} 要素に使用したり、同様に {{HTMLElement("iframe")}}、 {{HTMLElement("video")}}、{{HTMLElement("audio")}} 要素に設定したりするなどです。
- 同時に、ユーザーにとって何が本当に重要なのかを理解することも極めて重要です。それは厳密なタイミングではなく、[ユーザーの体感](/ja/docs/Learn_web_development/Extensions/Performance/Perceived_performance)であることがあります。

## 即効性のある方法

### CSS

ウェブパフォーマンスの本質は、ユーザー体験と知覚的パフォーマンスにあります。[クリティカルレンダリングパス](/ja/docs/Web/Performance/Guides/Critical_rendering_path)のドキュメントで学んだように、従来の `rel="stylesheet"` 属性を持つ link タグで CSS を読み込むと、同期処理となり、レンダリングがブロックされてしまいます。レンダリングを妨げる CSS を除去することで、ページのレンダリングを最適化しましょう。

CSS を非同期で読み込むには、メディア種別を `print` に設定し、読み込まれた後に `all` に変更します。これには JavaScript が要求されるため、従来のフォールバックを含む `<noscript>` タグを記載することが重要です。

```html
<link
  id="my-stylesheet"
  rel="stylesheet"
  href="/path/to/my.css"
  media="print" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

```js
const stylesheet = document.getElementById("my-stylesheet");
stylesheet.addEventListener("load", () => {
  stylesheet.media = "all";
});
```

この手法の欠点は、スタイルが適用されていないテキストが一時的に表示されてしまうこと (FOUT) です。これを解決する最も簡単な方法は、スクロールする前にブラウザーのビューポート内に表示されるコンテンツ（スクロールせずに見える範囲）に必要な CSS をインラインで記述することです。これにより、CSS ファイルの読み込みが不要になるため、知覚的パフォーマンスが改善されます。

```html
<style>
  /* ここに CSS を挿入 */
</style>
```

### JavaScript

[`async`](/ja/docs/Web/HTML/Reference/Elements/script) または [`defer`](/ja/docs/Web/HTML/Reference/Elements/script) 属性を使用するか、JavaScript リソースをページの DOM 要素の後に配置することで、JavaScript によるレンダリングのブロックを避けることができます。JavaScript は、DOM ツリー上で script タグの後に現れる要素のレンダリングのみをブロックします。

### ウェブフォント

EOT や TTF 形式は、デフォルトで圧縮されません。これらのファイル形式には、GZIPやBrotliなどの圧縮を適用してください。WOFF や WOFF2 をご利用ください。これらの形式には、圧縮機能が組み込まれています。

@font-face 内では、font-display: swap を指定してください。font-display を swap に指定することで、ブラウザーはレンダリングを中断せず、定義された代替のシステムフォントを使用します。ウェブフォントにできるだけ一致するよう、[フォントの太さ](/ja/docs/Web/CSS/Reference/Properties/font-weight)を調整してください。

#### アイコンウェブフォント

可能であれば、アイコン用ウェブフォントは避け、圧縮された SVG を使用してください。さらに最適化するには、HTML マークアップ内に SVG データをインラインで埋め込んで使用してください。

## ツール

- [Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) を使用して、サイトのパフォーマンスを分析する方法を学びましょう。
- [PageSpeed Insights](https://pagespeed.web.dev/) を使用すると、ページを分析し、パフォーマンスの改善のための一般的なヒントを得ることができます。
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) を使用すると、サイトのパフォーマンス、SEO、アクセシビリティなど、さまざまな側面について詳細な分析結果を得ることができます。
- [WebPageTest.org](https://www.webpagetest.org/) を使用して、ページの読み込み速度をテストしてください。ここでは、さまざまな実機タイプや場所を設定してテストを行うことができます。
- 実際のユーザー指標を数値化した [Chrome ユーザーエクスペリエンスレポート](https://developer.chrome.com/docs/crux/)をお試しください。
- [パフォーマンス予算](/ja/docs/Web/Performance/Guides/Performance_budgets)を定義しましょう。

### API

- [boomerang](https://github.com/akamai/boomerang) ライブラリーを使用して、ユーザー指標を収集します。
- あるいは、[window.performance.timing](/ja/docs/Web/API/Performance/timing) を直接取得して集計します

### 避けるべきこと（悪い習慣）

- すべてをダウンロードする
- 未圧縮のメディアファイルを使用する

## 関連情報

- <https://github.com/filamentgroup/loadCSS>
