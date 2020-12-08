---
title: 画像とキャンバスをオリジン間で利用できるようにする
slug: Web/HTML/CORS_enabled_image
tags:
  - Advanced
  - CORS
  - Canvas
  - HTML
  - セキュリティ
  - リファレンス
  - 上級者
translation_of: Web/HTML/CORS_enabled_image
---
<p><span class="seoSummary">HTML では画像に {{ htmlattrxref("crossorigin", "img") }} 属性を提供し、適切な {{Glossary("CORS")}} ヘッダーと組み合わせることで、 {{ HTMLElement("img") }} 要素で定義されている他のオリジンから読み込まれた画像を、 {{HTMLElement("canvas")}} の中で現在のオリジンから読み込まれた画像であるかのように扱うことができます。</span></p>

<p><code>crossorigin</code> 属性の使い方については <a href="/ja/docs/Web/HTML/CORS_settings_attributes">CORS 設定属性</a>をご覧ください。</p>

<h2 id="Security_and_tainted_canvases" name="Security_and_tainted_canvases">セキュリティと汚染されたキャンバス</h2>

<p>キャンバスのビットマップ内のピクセルは様々なソース、例えば他のホストから受け取った画像や動画などから来ることもありますが、セキュリティの問題が発生することが避けられません。</p>

<p>CORS による許可なしに他のオリジンから読み込んだ何らかのデータをキャンバスに描画すると、キャンバスは<ruby><strong>汚染</strong><rp> (</rp><rt>taint</rt><rp>) </rp></ruby>されてしまいます。汚染されたキャンバスは安全とみなされなくなり、そのキャンバスから画像データを取得しようとすると、例外が発生するでしょう。</p>

<p>外部コンテンツの元が HTML の {{HTMLElement("img")}} または SVG の {{SVGElement("svg")}} 要素であった場合、キャンバスの内容を取得しようとすることは許可されていません。</p>

<p>{{domxref("HTMLCanvasElement")}} または {{domxref("ImageBitMap")}} のどちらかとして取得した、元が同一オリジン規則に合わない画像から取得した外部のコンテンツは、キャンバスの内容を読み取ろうとするとブロックされます。</p>

<p>汚染されたキャンバスで以下の呼び出しを行うと、エラーが発生します。</p>

<ul>
 <li>キャンバスのコンテキストに対する {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} の呼び出し</li>
 <li>{{HTMLElement("canvas")}} 要素自身に対する {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}} の呼び出し</li>
 <li>キャンバスに対する {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} の呼び出し</li>
</ul>

<p>キャンバスが汚染されていた場合にこれらの何れかを行うと、 <code>SecurityError</code> が発生します。これによって、外部のウェブサイトが許可なしに情報を引き出すために、画像を使用して個人的なデータを暴露することからユーザーを守ります。</p>

<h2 id="Storing_an_image_from_a_foreign_origin" name="Storing_an_image_from_a_foreign_origin">異なるオリジンからの画像の保存</h2>

<p>この例では、外部のオリジンから画像を受け取り、ローカルストレージに保存することを許可します。これを実装するには、コードを書くだけでなくそのウェブサイトのサーバーを構成する必要があります。</p>

<h3 id="Web_server_configuration" name="Web_server_configuration">ウェブサーバーの構成</h3>

<p>最初に必要なものは、画像をホスティングし、画像ファイルに対するオリジン間のアクセスを許可するために、 {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーが構成されたサーバーが必要です。</p>

<p><a href="https://httpd.apache.org/">Apache</a> を使用してサイトを提供してみましょう。 HTML5 Boilerplate の <a href="https://github.com/h5bp/server-configs-apache/blob/master/h5bp/cross-origin/images.conf">CORS 画像のための Apache サーバー構成ファイル</a>を考えてみましょう。</p>

<pre class="brush: xml notranslate">&lt;IfModule mod_setenvif.c&gt;
  &lt;IfModule mod_headers.c&gt;
    &lt;FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$"&gt;
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    &lt;/FilesMatch&gt;
  &lt;/IfModule&gt;
&lt;/IfModule&gt;</pre>

<p>つまり、この構成はサーバーにグラフィックのファイル (拡張子が ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz", ".webp" であるもの) を、インターネットのどこからでもオリジン間のアクセスができるようにします。</p>

<h3 id="Implementing_the_save_feature" name="Implementing_the_save_feature">保存機能の実装</h3>

<p>サーバーをオリジン間の画像の取得ができるように構成したので、画像がコードを実行しているところと同じドメインから提供されたものであるかのように、ユーザーが画像を<a href="/ja/docs/Web/API/Web_Storage_API">ローカルストレージ</a>に保存することができるようにするコードを書くことができます。</p>

<p>鍵となるのは、 {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}} を画像が読み込まれる {{domxref("HTMLImageElement")}} に設定することで、 {{htmlattrxref("crossorigin")}} 属性を使用することです。これでブラウザーに画像データをダウンロードしようとするときにオリジン間のリクエストを命じます。</p>

<h4 id="Starting_the_download" name="Starting_the_download">ダウンロードの開始</h4>

<p>ダウンロードを始める (つまり、ユーザーが「ダウンロード」ボタンをクリックした時の) コードは次にようになります。</p>

<pre class="brush: js notranslate">function startDownload() {
  let imageURL = "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image;
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}</pre>

<p>ここではハードコーディングされた URL (<code>imageURL</code>) を使用していますが、どこからでも持ってくるのは簡単でしょう。画像のダウンロードを始めるために、 {{domxref("HTMLImageElement.Image", "Image()")}} コンストラクターを使用することで新しい {{domxref("HTMLImageElement")}} を生成します。それから画像は <code>crossOrigin</code> 属性を <code>"Anonymous"</code> (つまり、認証のないオリジン間の画像のダウンロード) に設定することで、オリジン間のダウンロードができるように構成します。 image 要素で {{event("load")}} イベントが発火した場合、つまり画像データが受信された場合のイベントリスナーを追加します。</p>

<p>最後に、画像の {{domxref("HTMLImageElement.src", "src")}} 属性をダウンロードする画像に設定します。これがダウンロードを始める引き金になります。</p>

<h4 id="Receiving_and_saving_the_image" name="Receiving_and_saving_the_image">画像の受信と保存</h4>

<p>新規の画像のダウンロードを扱うコードは、 <code>imageReceived()</code> メソッドに見られます。</p>

<pre class="brush: js notranslate">function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  }
  catch(err) {
    console.log("Error: " + err);
  }
}</pre>

<p><code>imageReceived()</code> は <code>HTMLImageElement</code> 上でダウンロードした画像を受け取ったことを表す <code>"load"</code> イベントを扱うために呼び出されます。このイベントは、ダウンロードしたデータがすべて利用可能になったら一度呼び出されます。新しい {{HTMLElement("canvas")}} 要素を作成することから始まり、画像をデータ URL に変換して、キャンバスの二次元描画コンテキスト ({{domxref("CanvasRenderingContext2D")}}) がある変数 <code>context</code> へのアクセスを取得します。</p>

<p>キャンバスの寸法は受信した画像に合うよう調整され、それから {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} を使って画像をキャンバスに描画します。それからキャンバスが文書に挿入され、画像が見えるようになります。</p>

<p>実際に画像をローカルに保存する時になりました。このためにはウェブストレージ API のローカルストレージの仕組みを使用し、 {{domxref("Window.localStorage", "localStorage")}} グローバル変数を通してアクセスします。キャンバスのメソッド {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} を使用して画像を data:// URL が表す PNG 画像に変換し、それから {{domxref("Storage.setItem", "setItem()")}} を用いてローカルストレージに保存します。</p>

<p>この例は Glitch で<a href="https://cors-image-example.glitch.me/">試用</a>または<a href="https://glitch.com/edit/#!/remix/cors-image-example">リミックス</a>することができます。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="external" href="http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html">Using Cross-domain images in WebGL and Chrome 13</a></li>
 <li><a class="external" href="http://whatwg.org/html#attr-img-crossorigin">HTML Specification - the <code>crossorigin</code> attribute</a></li>
 <li><a href="/ja/docs/Web/API/Web_Storage_API">Web Storage API</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/HTML/")}}</div>
