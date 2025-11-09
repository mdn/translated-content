---
title: 印刷
slug: Web/CSS/Guides/Media_queries/Printing
original_slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

コンテンツを印刷するときに、ウェブサイトまたはアプリケーションで使い勝手を向上させたい場合があります。考えられるシナリオはいくつかあります。

- 紙の大きさと形状を生かしてレイアウトを調整したい
- (画面とは) 異なるスタイルを利用して、紙の上でのコンテンツの見栄えを良くしたい
- 良い結果をるために、より高解像度の画像を使用したい
- 印刷を始める前にコンテンツの印刷プレビュー版を表示するなど、印刷の使い勝手を調整したい

他にも印刷処理を管理したい場合がありますが、これらは最も一般的なシナリオの一部です。この記事では、ウェブコンテンツの印刷品質を向上させるためのヒントとテクニックを紹介します。

## 印刷スタイルシートの使用

{{HTMLElement("head")}} タグの中に次のように追加してください。

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## レイアウトを改善するためのメディアクエリーの使用

CSS の {{cssxref("@media")}} アットルールを使用すると、ウェブページを紙や PDF で印刷する場合と、画面に表示する場合とで、異なるスタイルを設定することができます。`print` [メディア種別](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア種別)は、印刷メディアのスタイルを設定します。これらのスタイルは、印刷されるコンテンツにのみ使用されます。

これをスタイルシートの最後に追加してください。[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)と優先度のルールは引き続き適用されることにご注意ください。

```css
@media print {
  /* 印刷用スタイルはすべてこちらへ */
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

{{cssxref("@page")}} アットルールを使用して、ページの寸法、向き、マージンなど、印刷ページのさまざまな側面を変更することもできます。 `@page` アットルールは、印刷物のすべてのページ、または特定のサブセットのページをターゲットとして使用することができます。

## 印刷リクエストの検出

ブラウザーは、印刷がいつ発生したかを判断するために、 {{domxref("Window/beforeprint_event", "beforeprint")}} および {{domxref("Window/afterprint_event", "afterprint")}} イベントを送信します。これを使用して、印刷中に表示されるユーザーインターフェイスを調整することができます （例えば、印刷処理中にユーザーインターフェイスの要素を表示または非表示にするなど）。

## 例

よくある例をいくつか紹介します。

### 終了時に自動的にウィンドウを閉じる

次の例は、ユーザーがコンテンツを出力した後、ウィンドウを閉じます。

```js
window.addEventListener("afterprint", () => self.close);
```

### 外部ページを開かずに印刷する

外部ページを開かずに印刷できるようにしたい場合は、非表示の {{HTMLElement("iframe")}} （[HTMLIFrameElement](/ja/docs/Web/API/HTMLIFrameElement) を参照）を利用し、ユーザーがコンテンツを印刷した後で自動的にそれを削除するようにすることで実現できます。以下の例は、 `externalPage.html` という名前のファイルを印刷することができる例です。

#### HTML

```html
<button id="print_external">Print external page!</button>
```

#### JavaScript

```js
function setPrint() {
  const closePrint = () => {
    document.body.removeChild(this);
  };
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.print();
}

document.getElementById("print_external").addEventListener("click", () => {
  const hideFrame = document.createElement("iframe");
  hideFrame.onload = setPrint;
  hideFrame.style.display = "none"; // hide iframe
  hideFrame.src = "external-page.html";
  document.body.appendChild(hideFrame);
});
```

## 関連情報

- [`window.print`](/ja/docs/Web/API/Window/print)
- {{ domxref("window.beforeprint_event", "beforeprint") }} イベント
- {{ domxref("window.afterprint_event", "afterprint") }} イベント
- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
- [CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)モジュール
