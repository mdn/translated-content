---
title: スクリプティング
slug: Web/SVG/Scripting
---

ブラウザーの既定の動作を `evt.preventDefault( )` メソッドで上書きしたり、イベントリスナーを `element.addEventListener(event, function, useCapture)` という構文でオブジェクトに追加したり、要素のプロパティを `svgElement.style.setProperty("fill-opacity", "0.0", "")` などで設定することが可能です。 3 つの引数がすべてプロパティを設定していることに注意してください。

### イベントコードの既定の挙動を防ぐ

ドラッグ＆ドロップのコードを書いていると、ページのテキストをドラッグ中に誤って付随的に選択してしまうことがあります。もしくは自分のコードの中でバックスペースキーを使いたい場合、バックスペースキーを押下したときに前のページへ戻るという、ブラウザーの既定の振る舞いを上書きしたくなるでしょう。このようなことは、 `evt.preventDefault()` メソッドで実現することができます。

### オブジェクトに `eventListener` を使う

`addEventListener()` や `removeEventListener()` は、対話的な SVG を書くときとても勇湯王です。これらのメソッドの第二引数として、 `handleEvent` インターフェイスを実装するオブジェクトを渡すことができます。

```js
function myRect(x, y, w, h, message) {
  this.message = message;

  this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  this.rect.setAttributeNS(null, "x", x);
  this.rect.setAttributeNS(null, "y", y);
  this.rect.setAttributeNS(null, "width", w);
  this.rect.setAttributeNS(null, "height", h);
  document.documentElement.appendChild(this.rect);

  this.rect.addEventListener("click", this, false);

  this.handleEvent = function (evt) {
    switch (evt.type) {
      case "click":
        alert(this.message);
        break;
    }
  };
}
```

## 文書間のスクリプティング - 埋め込み SVG の参照

HTML 内で SVG を使用する場合、Adobe の SVG Viewer 3.0 は自動的に `svgDocument` という SVG 文書を指すウィンドウのプロパティを含みます。これは、Mozilla のネイティブ SVG 実装には当てはまりません。したがって、 `window.svgDocument` を使用しても Mozilla ではうまくいきません。その代わりに、

```js
var svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

を使用して埋め込まれた SVG 文書の参照を取得することができます。

SVG 文書を表す {{domxref("Document")}} にアクセスするには、以下のように {{domxref("HTMLIFrameElement.contentDocument")}} （文書が {{HTMLElement("iframe")}} で表現されている場合）または {{domxref("HTMLObjectElement.contentDocument")}} （文書が {{HTMLElement("object")}} 要素で表現されている場合）に注目するとよいでしょう。

```js
var svgDoc = document.getElementById("iframe_element").contentDocument;
```

さらに、{{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}} の各要素は `getSVGDocument()` というメソッドを提供しており、要素の埋め込み SVG を表す {{domxref("XMLDocument")}} または要素が SVG 文書を表さない場合には `null` を返します。

また、 `document.getElementById("svg_elem_name").getSVGDocument()` を用いても同じ結果を得ることができます。

> **メモ:** `SVGDocument` インターフェイスに言及しているドキュメントを見かけることがあります。 SVG 2 より前は、 SVG 文書はこのインターフェイスを使って表現されていました。しかし、現在では SVG 文書は代わりに {{domxref("XMLDocument")}} インターフェイスを用いて表現されています。

### 文書をまたがるスクリプティング - JavaScript 関数の呼び出し

HTML 文書に埋め込まれた SVG ファイルから HTML ファイルの中にある JavaScript 関数を呼び出すとき、その関数を参照するには `parent.functionname()` を使うべきです。Adobe SVG Viewer プラグインは `functionname()` の利用を許可していますが、このようなことを行うには適していません。

> **メモ:** [SVG wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) によると、 JavaScript の変数 `"parent"` は Adobe の SVG バージョン 6 プレビュープラグインでは壊れているとのことです。回避策として、`"parent"`の代わりに`"top"`を使用することが提案されています。このプラグインはベータ版なので、おそらく無視しても大丈夫でしょう。

更なる情報といくつかの例は [SVG wiki inter-document scripting page](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) で見つかります。

### `setProperty` には 3 つの引数がある

`svgElement.style.setProperty("fill-opacity", "0.0")` と関数を呼び出すと、 Mozilla では DOMException が `SYNTAX ERR` で発生します。この挙動は W3C によって DOM Level 2 Style 仕様の中で定められています。 `setProperty` 関数は 3 つの引数を持つ関数として定義されています。上記のものは、 `'svgElement.style.setProperty("fill-opacity", "0.0", "")'` で置き換えることができ、これが標準に準拠しています。

### リンク

[SVG wiki on Scripting and Programming](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
