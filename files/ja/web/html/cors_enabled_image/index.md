---
title: 画像とキャンバスをオリジン間で利用できるようにする
slug: Web/HTML/CORS_enabled_image
l10n:
  sourceCommit: 730d99b6f2830adccce4bd61e81e79ad5a87c941
---

{{HTMLSidebar}}

HTML では画像に [`crossorigin`](/ja/docs/Web/HTML/Element/img#crossorigin) 属性を提供し、適切な {{Glossary("CORS")}} ヘッダーと組み合わせることで、 {{ HTMLElement("img") }} 要素で定義されている他のオリジンから読み込まれた画像を、 {{HTMLElement("canvas")}} の中で現在のオリジンから読み込まれた画像であるかのように扱うことができます。

`crossorigin` 属性の使い方については [CORS 設定属性](/ja/docs/Web/HTML/Attributes/crossorigin)をご覧ください。

## セキュリティと汚染されたキャンバス

キャンバスのビットマップ内のピクセルは様々なソース、例えば他のホストから受け取った画像や動画などから来ることもありますが、セキュリティの問題が発生することが避けられません。

CORS による許可なしに他のオリジンから読み込んだ何らかのデータをキャンバスに描画すると、キャンバスは**汚染** (taint) されてしまいます。汚染されたキャンバスは安全とみなされなくなり、そのキャンバスから画像データを取得しようとすると、例外が発生するでしょう。

外部コンテンツの元が HTML の {{HTMLElement("img")}} または SVG の {{SVGElement("svg")}} 要素であった場合、キャンバスの内容を取得しようとすることは許可されていません。

{{domxref("HTMLCanvasElement")}} または {{domxref("ImageBitMap")}} のどちらかとして取得した、元が同一オリジン規則に合わない画像から取得した外部のコンテンツは、キャンバスの内容を読み取ろうとするとブロックされます。

汚染されたキャンバスで以下の呼び出しを行うと、エラーが発生します。

- キャンバスのコンテキストに対する {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} の呼び出し
- {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}}、{{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}}、{{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} の {{HTMLElement("canvas")}} 要素自身に対する呼び出し

キャンバスが汚染されていた場合にこれらの何れかを行うと、 `SecurityError` が発生します。これによって、外部のウェブサイトが許可なしに情報を引き出すために、画像を使用して個人的なデータを暴露することからユーザーを守ります。

## 異なるオリジンからの画像の保存

この例では、外部のオリジンから画像を受け取り、ローカルストレージに保存することを許可します。これを実装するには、コードを書くだけでなくそのウェブサイトのサーバーを構成する必要があります。

### ウェブサーバーの構成

最初に必要なものは、画像をホスティングし、画像ファイルに対するオリジン間のアクセスを許可するために、 {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーが構成されたサーバーが必要です。

[Apache](https://httpd.apache.org/) を使用してサイトを提供してみましょう。 HTML5 Boilerplate の [CORS 画像のための Apache サーバー構成ファイル](https://github.com/h5bp/server-configs-apache/blob/master/h5bp/cross-origin/images.conf)を考えてみましょう。

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(avifs?|bmp|cur|gif|ico|jpe?g|jxl|a?png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

つまり、この構成はサーバーにグラフィックのファイル（拡張子が ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz", ".webp" であるもの）を、インターネットのどこからでもオリジン間のアクセスができるようにします。

### 保存機能の実装

サーバーをオリジン間の画像の取得ができるように構成したので、画像がコードを実行しているところと同じドメインから提供されたものであるかのように、ユーザーが画像を[ローカルストレージ](/ja/docs/Web/API/Web_Storage_API)に保存することができるようにするコードを書くことができます。

鍵となるのは、 {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}} を画像が読み込まれる {{domxref("HTMLImageElement")}} に設定することで、[`crossorigin`](/ja/docs/Web/HTML/Element/img#crossorigin) 属性を使用することです。これでブラウザーに画像データをダウンロードしようとするときにオリジン間のリクエストを命じます。

#### ダウンロードの開始

ダウンロードを始める (つまり、ユーザーが「ダウンロード」ボタンをクリックした時の) コードは次にようになります。

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";
  let imageDescription = "The Mozilla logo";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

ここではハードコーディングされた URL (`imageURL`) を使用していますが、どこからでも持ってくるのは簡単でしょう。画像のダウンロードを始めるために、新しい {{domxref("HTMLImageElement")}} を {{domxref("HTMLImageElement.Image", "Image()")}} コンストラクターを使用して生成します。それから画像は `crossOrigin` 属性を `"Anonymous"` (つまり、認証のないオリジン間の画像のダウンロード) に設定することで、オリジン間のダウンロードができるように構成します。画像要素で {{domxref("Window/load_event", "load")}} イベントが発生した場合、つまり画像データが受信された場合のイベントリスナーを追加します。

最後に、画像の {{domxref("HTMLImageElement.src", "src")}} 属性をダウンロードする画像に設定します。これがダウンロードを始める引き金になります。

#### 画像の受信と保存

新規の画像のダウンロードを扱うコードは、 `imageReceived()` メソッドに見られます。

```js
function imageReceived() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;
  canvas.innerText = downloadedImg.alt;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
```

`imageReceived()` は `HTMLImageElement` 上でダウンロードした画像を受け取ったことを表す `"load"` イベントを扱うために呼び出されます。このイベントは、ダウンロードしたデータがすべて利用可能になったら一度呼び出されます。新しい {{HTMLElement("canvas")}} 要素を作成することから始まり、画像をデータ URL に変換して、キャンバスの二次元描画コンテキスト ({{domxref("CanvasRenderingContext2D")}}) がある変数 `context` へのアクセスを取得します。

キャンバスの寸法は受信した画像に合うよう調整され、それから {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} を使って画像をキャンバスに描画します。それからキャンバスが文書に挿入され、画像が見えるようになります。

実際に画像をローカルに保存する時になりました。このためにはウェブストレージ API のローカルストレージの仕組みを使用し、 {{domxref("Window.localStorage", "localStorage")}} グローバル変数を通してアクセスします。キャンバスのメソッド {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} を使用して画像を data:// URL が表す PNG 画像に変換し、それから {{domxref("Storage.setItem", "setItem()")}} を用いてローカルストレージに保存します。

## 関連情報

- [Using Cross-domain images in WebGL and Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML Specification - the `crossorigin` attribute](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API)
