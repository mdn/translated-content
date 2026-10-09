---
title: "`frame-sizing` プロパティ (CSS)"
short-title: frame-sizing
slug: Web/CSS/Reference/Properties/frame-sizing
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

{{SeeCompatTable}}

**`frame-sizing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、これにより、{{htmlelement("iframe")}} 要素の水平方向または垂直方向のサイズを、埋め込まれた文書のレイアウトサイズと同じサイズに設定することができます。ただし、これは埋め込まれた文書がサイズ情報の共有を有効にしている場合に限られます。

## 構文

```css
/* キーワード値 */
frame-sizing: auto;
frame-sizing: content-width;
frame-sizing: content-height;
frame-sizing: content-inline-size;
frame-sizing: content-block-size;

/* グローバル値 */
frame-sizing: inherit;
frame-sizing: initial;
frame-sizing: revert;
frame-sizing: revert-layer;
frame-sizing: unset;
```

### 値

このプロパティは、以下のキーワード値のいずれかとして指定します。

- `auto`
  - : 初期値です。`<iframe>` 要素のサイズは、埋め込まれた文書のレイアウトサイズの影響を受けません。
- `content-width`
  - : `<iframe>` 要素の {{cssxref("width")}} は、埋め込まれた文書のレイアウト幅に設定されます。
- `content-height`
  - : `<iframe>` 要素の {{cssxref("height")}} は、埋め込まれた文書のレイアウト高さに設定されます。
- `content-inline-size`
  - : `<iframe>` 要素の {{cssxref("inline-size")}} は、埋め込まれた文書のインライン方向におけるレイアウトサイズに設定されます。
- `content-block-size`
  - : `<iframe>` 要素の {{cssxref("block-size")}} は、埋め込まれた文書のブロック方向におけるレイアウトサイズに設定されます。

## 解説

セキュリティおよびプライバシー上の理由から、{{htmlelement("iframe")}} 要素は、デフォルトで、埋め込まれている文書内のコンテンツのサイズに関する情報を親文書に対して一切公開しません。

{{htmlelement("iframe")}} 要素のサイズをそのコンテンツに基づいてレスポンシブに調整できるようにするには、埋め込み文書に [`<meta name="responsive-embedded-sizing">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) タグを記載することで、親文書とのサイズ情報の共有を有効にすることができます。これにより、`<iframe>` に `frame-sizing` プロパティを設定することで、埋め込み文書の実際のコンテンツサイズ（仕様書では **内部レイアウトの内在サイズ** と呼ばれていますが、当ドキュメントでは「レイアウトサイズ」と略称しています）と同じ水平または垂直サイズを発生させることができます。その結果、文書のコンテンツは埋め込み先の `<iframe>` にシームレスに収まり、不要なスクロールバーの表示を避けることができます。

`frame-sizing` プロパティには `content-width` または `content-height` を指定することで、`<iframe>` 要素の `width` または `height` を、それぞれ埋め込まれた文書のレイアウト幅またはレイアウト高さに発生させることができます。

論理的に同等の機能も利用可能です。`frame-sizing` に `content-inline-size` または `content-block-size` を指定すると、`<iframe>` 要素の `inline-size` または `block-size` が、それぞれ埋め込まれた文書のインラインサイズまたはブロックサイズを反映します。ブロック方向またはインライン方向は、埋め込まれたドキュメントのコンテンツの方向ではなく、`<iframe>` 要素の {{cssxref("writing-mode")}} によって決定されます。

埋め込み文書のレイアウトサイズが変更された際に、`<iframe>` のサイズを動的に変更するには、埋め込み文書側から {{domxref("Window.requestResize()")}} メソッドを呼び出し、更新されたサイズを報告させることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例は、`frame-sizing` プロパティの使用方法を示しています。

ここでは、メインの `index.html` 文書と、そこに埋め込まれた `frame.html` 文書の 2 つの文書があります。

#### メインの `index.html`

`index.html` の文書の HTML には、見出しと `<iframe>` が含まれており、その中に `frame.html` という文書が埋め込まれています。

```html
<h1>レスポンシブ iframe — 基本的な例</h1>

<iframe src="frame.html"></iframe>
```

`index.html` の CSS では、`<iframe>` に `frame-sizing` の値として `content-block-size` を指定しています。`<iframe>` の `writing-mode` が水平方向であるため、その `height` は埋め込まれた文書のレイアウト高さに設定されます。

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### 埋め込まれた `frame.html`

`frame.html`文書に、見出しといくつかの段落が含まれています。しかし、さらに重要なのは、この文書に`<meta name="responsive-embedded-sizing" />`タグが記載されており、これにより、そのコンテンツのレイアウトサイズを親文書と共有するよう設定されている点です。

```html
<head>
  ...

  <meta name="responsive-embedded-sizing" />

  ...
</head>
<body>
  <h1>これはフレームです。</h1>
  <p>This is the content of my discontent.</p>
  <p>This is some more content.</p>
</body>
```

#### 結果

別のタブで[基本的なレスポンシブ対応の `<iframe>` サイズ変更デモ](https://mdn.github.io/dom-examples/responsive-iframe-sizing/basic/) を開いて、実際の動作を確認してください（[ソースコードはこちら](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/basic)）。

`<iframe>` には明示的な `height` が設定されていませんが、埋め込まれた文書をスクロールバーが表示されないように、ちょうど含まれる適切な高さに調整されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
- [`<meta name="responsive-embedded-sizing">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
- {{domxref("Window.requestResize()")}}
