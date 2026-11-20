---
title: "Window: requestResize() メソッド"
short-title: requestResize()
slug: Web/API/Window/requestResize
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef}}{{SeeCompatTable}}

**`requestResize()`** は {{domxref("Window")}} インターフェイスのメソッドで、埋め込み文書と親文書の間で共有されるサイズ情報を更新します。ただし、[`<meta name="responsive-embedded-sizing">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) メタタグによって、埋め込み文書がサイズ情報の共有を許可している場合に限ります。

## 構文

```js-nolint
requestResize()
```

### 引数

なし。

### 返値

なし（{{jsxref("undefined")}}）。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - `requestResize()` メソッドが最上位（埋め込まれていない）の文書から呼び出された。
    - 埋め込み先の要素が {{htmlelement("iframe")}} ではない。
    - 埋め込まれた文書に [`<meta name="responsive-embedded-sizing">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) タグが含まれておらず、レイアウトサイズの共有が許可されていない。

> [!NOTE]
> 親文書が埋め込み先の `<iframe>` に CSS の {{cssxref("frame-sizing")}} プロパティを設定していない場合、例外は発生しませんが、`<iframe>` のサイズも変更されません。

## 解説

セキュリティとプライバシー上の理由から、{{htmlelement("iframe")}} 要素はデフォルトでは、埋め込んだ文書内のコンテンツのサイズ情報を親文書に公開しません。

コンテンツに応じた `<iframe>` 要素のサイズ変更を有効にするには、埋め込まれた文書に [`<meta name="responsive-embedded-sizing">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) タグを含めて、その文書がサイズ情報を親文書と共有することを許可します。その後、CSS の {{cssxref("frame-sizing")}} プロパティを `<iframe>` に設定すると、埋め込まれた文書の実際のレイアウトサイズに合わせて、水平方向または垂直方向の寸法を調整できます。仕様書ではこのサイズを**内部レイアウトの内在サイズ**（internal layout intrinsic size）と呼びます。これにより、文書のコンテンツが埋め込み先の `<iframe>` に自然に収まり、不要なスクロールバーが表示されないようにできます。

埋め込まれた文書のレイアウトサイズは、{{domxref("Document.DOMContentLoaded_event", "DOMContentLoaded")}} イベントが発生したときに一度自動的に報告され、さらに {{domxref("Window")}} オブジェクトの {{domxref("Window.load_event", "load")}} イベントが発生したときにも報告されます。

それ以外の場合は、埋め込まれた文書から `requestResize()` メソッドを呼び出して、更新後のレイアウトサイズを報告させることができます。通常は、埋め込みコンテンツのサイズ変更を引き起こしたイベントのハンドラー内で呼び出します。`frame-sizing` を使って `<iframe>` のサイズを設定している場合、埋め込みコンテンツが収まるように `<iframe>` のサイズも自動的に更新されます。

## 例

### `requestResize()` の使用

この例では、埋め込まれた文書のコンテンツのレイアウトサイズが変わったときに、`requestResize()` メソッドで `<iframe>` のサイズを自動的に変更する方法を示します。

ここでは、メインの `index.html` 文書と、埋め込まれる `frame.html` 文書を使用します。

#### メインの `index.html`

`index.html` の HTML には、見出しと `<iframe>` があり、その中に `frame.html` 文書が埋め込まれています。

```html
<h1>レスポンシブな iframe — 基本例</h1>

<iframe src="frame.html"></iframe>
```

`index.html` の CSS では、`<iframe>` の `frame-sizing` に `content-block-size` を指定します。`<iframe>` の書字方向は横書きなので、その `height` は埋め込まれた文書のレイアウト上の高さに設定されます。

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### 埋め込まれる `frame.html`

`frame.html` 文書には、フォーカス可能にするために [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) を `0` に設定した {{htmlelement("div")}} 要素があります。この要素には見出しといくつかの段落が含まれます。また、この文書には `<meta name="responsive-embedded-sizing" />` タグがあり、コンテンツのレイアウトサイズを親文書と共有することを許可しています。最後に、デモを制御する JavaScript を含む {{htmlelement("script")}} 要素を追加します。

```html
<head>
  <!-- ... -->

  <meta name="responsive-embedded-sizing" />

  <!-- ... -->
</head>
<body>
  <div tabindex="0">
    <h1>これが私のフレームです</h1>
    <p>これは私の不満の内容です。</p>
    <p>さらにコンテンツがあります。</p>
  </div>
  <script>
    /* ... */
  </script>
</body>
```

`frame.html` 内のスクリプトは、まず `<div>` 要素への参照を取得します。次に、この `<div>` に `click` および `keydown` イベントのリスナーを設定します。どちらのイベントが発生しても、`addParagraph()` という独自関数を実行します。

```js
const divElem = document.querySelector("div");
divElem.addEventListener("click", addParagraph);
window.addEventListener("keydown", addParagraph);
```

`addParagraph()` 関数は新しい段落要素を生成し、`<div>` の末尾に子要素として追加して高さを増やします。その後、`requestResize()` を呼び出して、新しいサイズを親文書に報告します。

```js
function addParagraph() {
  const para = document.createElement("p");
  para.textContent = "新しいコンテンツです。";
  divElem.appendChild(para);
  window.requestResize();
}
```

#### 結果

動作を確認するには、[`requestResize()` のデモ](https://mdn.github.io/dom-examples/responsive-iframe-sizing/js-request-resize/)<sup>(英語)</sup>を別のタブで開いてください（[ソースコード](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/js-request-resize)<sup>(英語)</sup>）。

`height` を `<iframe>` に明示的に設定していなくても、埋め込まれた文書がちょうど収まる高さに調整され、スクロールバーは表示されません。コンテンツをクリックするか、フォーカスしてキーボードのキーを押してみてください。新しい段落が `<div>` に追加されると、`<div>` の高さが増し、それに合わせて `<iframe>` の高さも増えます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("frame-sizing")}} プロパティ
- [CSS ボックスサイズ設定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
- [`<meta name="responsive-embedded-sizing">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
