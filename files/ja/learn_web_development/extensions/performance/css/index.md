---
title: CSS のパフォーマンス最適化
slug: Learn_web_development/Extensions/Performance/CSS
original_slug: Learn/Performance/CSS
l10n:
  sourceCommit: 6ae1940a0ee5dc65dcc9c80db0d43a83374f76fb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

スタイル設定されていないページを描画し、スタイルが解釈できたら再描画するというのは、ユーザーにとって使い勝手が悪いものです。このため、CSS は、ブラウザーがその CSS が現在必要でないことを知っていない限り、描画ブロックされます。ブラウザーは、CSS をダウンロードし、CSS オブジェクトモデルを構築した時点で、ページを描画することができます。ブラウザーは固有のレンダリングパスに従います。描画はレイアウトの後にのみ行われ、レイアウトはレンダーツリーが作成された後に行われ、そのためには DOM と CSSOM のツリーの両方が必要です。CSSOM 構築を最適化するには、不要なスタイルを削除し、ミニファイ、圧縮、キャッシュを行い、ページ読み込み時に不要な CSS は追加ファイルに分割して CSS の描画ブロックを縮小する必要があります。

### 描画ブロックの最適化

CSS では、メディアクエリーによって、具体的な条件に合わせてスタイル設定を行うことができます。メディアクエリーはレスポンシブウェブデザインにとって重要であり、重要なレンダリングパスを最適化することを支援します。ブラウザーはこれらのスタイルをすべて解釈するまでレンダリングをブロックしますが、印刷スタイルシートのように使用しないことがわかっているスタイルについてはレンダリングをブロックしません。メディアクエリーに基づいて CSS を複数のファイルに分割することで、使用しない CSS をダウンロードする際の描画ブロックを防ぐことができます。ブロックされない CSS リンクを作成するには、印刷スタイルのようなすぐに使用しないスタイルを別個のファイルに移動し、HTML マークアップに [`<link>`](/ja/docs/Web/HTML/Element/link) を追加し、この場合、印刷スタイルであることを示すメディアクエリーを追加してください。

```html
<!-- styles.css の読み込みと解釈は描画ブロック -->
<link rel="stylesheet" href="styles.css" />

<!-- print.css の読み込みと解釈は描画ブロックされない -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- mobile.css の読み込みと解釈は、広い画面では描画ブロックされない -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

既定では、ブラウザーは指定されたスタイルシートが描画ブロックされることを想定しています。スタイルシートが適用されるタイミングは、[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)を使って `media` 属性を追加してブラウザーに指示します。ブラウザーはスタイルシートを見ると、特定のシナリオにのみ適用する必要があることを認識し、スタイルシートをダウンロードしますが、描画はブロックしません。CSS を複数のファイルに区切ることで、描画をブロックするメインのファイル（この場合は "styles.css"）をより小さくし、描画がブロックされる時間を短縮しています。

### GPU でのアニメーション

ブラウザーは CSS アニメーションを処理するように最適化されており、再フロー（つまり再描画）を発生させないプロパティのアニメーションはとてもうまく処理します。パフォーマンスを向上させるために、アニメーションさせるノードをメインスレッドから GPU に移すことができます。合成をもたらすプロパティには、3D 座標変換（[`transform: translateZ()`](/ja/docs/Web/CSS/transform) や [`rotate3d()`](/ja/docs/Web/CSS/transform-function/rotate3d) など）、アニメーション座標変換、[`opacity`](/ja/docs/Web/CSS/opacity)、[`position: fixed`](/ja/docs/Web/CSS/position)、[`will-change`](/ja/docs/Web/CSS/will-change)、[`filter`](/ja/docs/Web/CSS/filter) などがあります。また、[`<video>`](/ja/docs/Web/HTML/Element/video)、[`<canvas>`](/ja/docs/Web/HTML/Element/canvas)、 [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) など、いくつかの要素がレイヤーになることもあります。要素をレイヤーとして昇格させることは、合成とも呼ばれますが、座標変換プロパティのアニメーションを GPU で行うことで、特にモバイルでのパフォーマンスが向上します。

### `will-change` プロパティ

CSS の [`will-change`](/ja/docs/Web/CSS/will-change) プロパティは、要素がどのように変化することが予想されるかをブラウザーに示唆します。ブラウザーは、要素が実際に変更される前に最適化を設定することがあります。この種の最適化は、実際に必要とされる前に高価な可能性のある作業を行うことで、ページのレスポンスを向上させることができます。

> **メモ:** `will-change`は、既存のパフォーマンス問題に対処するための最後の手段として使用することを意図しています。パフォーマンス上の問題を予測するために使用するべきではありません。

```css
.element {
  will-change: opacity, transform;
}
```

### `font-display` プロパティ

[@font-face](/ja/docs/Web/CSS/@font-face) ルールに適用される [font-display](/ja/docs/Web/CSS/@font-face/font-display) プロパティは、フォントファイルがどのようにブラウザーで読み込まれて表示されているのか、フォントの読み込み中、または読み込みが失敗した時に代替フォントでテキストを表示できるようにするかを定義します。これにより、空白の画面を表示することなくテキストを表示することができ、パフォーマンスを向上させることができます。

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

### `contain` プロパティ

{{cssxref('contain')}} は CSS のプロパティで、作成者がある要素とその内容が、できるだけ、文書ツリーの残りの部分から独立指せることを示します。これにより、ブラウザーはページ全体ではなく、DOM の限られた領域に対してレイアウト、スタイル、描画、サイズ、またはそれらの任意の組み合わせを再計算することができるようになります。

## まとめ

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

## 関連情報

- [CSS アニメーションのパフォーマンス](/ja/docs/Web/Performance/CSS_JavaScript_animation_performance)
