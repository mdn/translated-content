---
title: Compiling an Existing C Module to WebAssembly
slug: WebAssembly/existing_C_to_wasm
tags:
  - C++
  - Emscripten
  - WebAssembly
  - wasm
  - コンパイル
translation_of: WebAssembly/existing_C_to_wasm
---
<p>{{WebAssemblySidebar}}</p>

<p class="summary">WebAssembly のコアユースケースは、既存の C ライブラリのエコシステムを取得し、開発者が Web 上でそれらを利用できるようにすることです。</p>

<p>これらのライブラリは、Cの標準ライブラリ、オペレーティングシステム、ファイルシステムやその他のものにしばしば依存します。Emscriptenは、いくつかの<a href="https://kripken.github.io/emscripten-site/docs/porting/guidelines/api_limitations.html">制限</a>はあるものの、これらの機能のほとんどを提供しています。</p>

<p>例として、WebP用のエンコーダをwasmにコンパイルしてみましょう。WebPコーデックのソースはC言語で書かれており、拡張<a href="https://developers.google.com/speed/webp/docs/api">API</a>のドキュメントと同様<a href="https://github.com/webmproject/libwebp">GitHubで入手できます</a>。これはとても良いスタート地点です。</p>

<pre class="brush: bash notranslate">$ git clone https://github.com/webmproject/libwebp</pre>

<p>簡単な例から始めましょう。<code>webp.c</code> という C ファイルを書いて<code>encode.h</code>から<code>WebPGetEncoderVersion()</code>をJavaScript に公開します:</p>

<pre class="brush: cpp notranslate">#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}</pre>

<p>これはlibwebp のソースコードをコンパイルできるかテストするのに適したシンプルなプログラムです。この関数を呼び出すのにパラメータや複雑なデータ構造は必要ありません。</p>

<p>このプログラムをコンパイルするには、 -I フラグを使って libwebp のヘッダファイルの場所をコンパイラに教え、また必要な libwebp の<strong>すべての</strong> C ファイルをコンパイラに渡す必要があります。すべての C ファイルをコンパイラ渡して、コンパイラが不要なものをすべて取り除くようにするのは良い戦略です。この戦略はとてもうまくいっているようです。</p>

<pre class="brush: bash notranslate">$ emcc -O3 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c</pre>

<div class="note">
<p><strong>注：</strong> この戦略はすべての C プロジェクトでうまくいく訳ではありません。多くのプロジェクトでは、コンパイルの前にシステム固有のコードを生成するため、autoconf/automake に依存しています。Emscripten は、これらのコマンドをラップして適切なパラメータを注入するための <code>emconfigure</code> と <code>emmake</code> を提供しています。詳細は <a href="https://kripken.github.io/emscripten-site/docs/compiling/Building-Projects.html">Emscripten のドキュメント</a>を読んでください。</p>
</div>

<p>これで、あなたの新しいモジュールを読み込むために必要なのはHTMLとJavaScriptだけになりました：</p>

<pre class="brush: html notranslate">&lt;script src="./a.out.js"&gt;&lt;/script&gt;
&lt;script&gt;
  Module.onRuntimeInitialized = async _ =&gt; {
    const api = {
      version: Module.cwrap('version', 'number', []),
    };
    console.log(api.version());
  };
&lt;/script&gt;</pre>

<p>そして、正しいバージョン番号が<a href="https://googlechrome.github.io/samples/webassembly/version.html">出力</a>されます:</p>

<p><img alt="  正しいバージョン番号を示すデベロッパーツールのコンソールのスクリーンショット" src="https://mdn.mozillademos.org/files/15913/version.png" style="border-style: solid; border-width: 1px;"></p>

<div class="note">
<p><strong>注：</strong> libwebp は現在のバージョン a.b.c を 16 進数の 0xabc で返します。例えば、v0.6.1は0x000601 = 1537としてエンコードされています。</p>
</div>

<h3 id="JavaScriptからWasmに画像を取得する">JavaScriptからWasmに画像を取得する</h3>

<p>エンコーダのバージョン番号を取得するのは素晴らしいことですが、画像をエンコードした方が印象的です。どうすればいいのでしょうか？</p>

<p>最初に答えなければならない質問は、どうやって画像を wasm に入れるのかということです。libwebpの<a href="https://developers.google.com/speed/webp/docs/api#simple_encoding_api">Encoding API</a>を見ると、RGB、RGBA、BGR、BGRAのバイト列を期待していることがわかります。幸いにも Canvas API には {{domxref("CanvasRenderingContext2D.getImageData")}} があり、RGBA の画像データを含む {{jsxref("Uint8ClampedArray")}}が得られます：</p>

<pre class="brush: js notranslate"> async function loadImage(src) {
  // Load image
  const imgBlob = await fetch(src).then(resp =&gt; resp.blob());
  const img = await createImageBitmap(imgBlob);
  // Make canvas same size as image
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw image onto canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}</pre>

<p>これで、JavaScript から wasm にデータをコピーすることだけが「唯一の」問題となります。そのためには、追加で2つの関数を公開する必要があります —  1つは、wasm内で画像のためにメモリを確保する関数、もう1つは、それを再び解放する関数です：</p>

<pre class="brush: cpp notranslate">#include &lt;stdlib.h&gt; // required for malloc definition

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int width, int height) {
  return malloc(width * height * 4 * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
  free(p);
}</pre>

<p><code>create_buffer()</code> 関数は RGBA 画像用 — したがって、ピクセル当たり4バイト — のバッファを確保します。malloc() が返すポインタは、そのバッファの最初のメモリセルのアドレスです。ポインタが JavaScript に返されると、それは単なる数値として扱われます。この関数を cwrap を使って JavaScript に公開した後、その数値を使ってバッファの開始点を見つけ、画像データをコピーすることができます。</p>

<pre class="brush: js notranslate">const api = {
  version: Module.cwrap('version', 'number', []),
  create_buffer: Module.cwrap('create_buffer', 'number', ['number', 'number']),
  destroy_buffer: Module.cwrap('destroy_buffer', '', ['number']),
};

const image = await loadImage('./image.jpg');
const p = api.create_buffer(image.width, image.height);
Module.HEAP8.set(image.data, p);
// ... call encoder ...
api.destroy_buffer(p);</pre>

<h3 id="画像をエンコードする">画像をエンコードする</h3>

<p>wasmで画像を使えるようになりました。いよいよWebPエンコーダを呼び出して動かす時が来ました。<a href="https://developers.google.com/speed/webp/docs/api#simple_encoding_api">WebPのドキュメント</a>を見ると、<code>WebPEncodeRGBA</code>がふさわしいようです。この関数は、入力画像へのポインタと画像の寸法、そして 0 から 100 の間のクオリティーオプションを受け取ります。また、出力バッファを確保するので、WebP 画像の処理が終わったら <code>WebPFree()</code>を使って解放する必要があります。</p>

<p>エンコード処理の結果は、出力バッファとその長さになります。C 言語の関数は(メモリを動的に確保しない限り)戻り値の型として配列を使うことができないため 、この例では静的なグローバル配列を使用しています。これはクリーンな C 言語とは言えないかもしれません。実際、これは wasm ポインタが 32 ビット幅であることに依存しています。しかし、これは話を単純にするための公正な手段です。</p>

<pre class="brush: js notranslate">int result[2];
EMSCRIPTEN_KEEPALIVE
void encode(uint8_t* img_in, int width, int height, float quality) {
  uint8_t* img_out;
  size_t size;

  size = WebPEncodeRGBA(img_in, width, height, width * 4, quality, &amp;img_out);

  result[0] = (int)img_out;
  result[1] = size;
}

EMSCRIPTEN_KEEPALIVE
void free_result(uint8_t* result) {
  WebPFree(result);
}

EMSCRIPTEN_KEEPALIVE
int get_result_pointer() {
  return result[0];
}

EMSCRIPTEN_KEEPALIVE
int get_result_size() {
  return result[1];
}</pre>

<p>これで、エンコーディング関数を呼び出し、ポインタと画像サイズを取得し、それをあなたの JavaScript バッファに格納し、プロセス中で確保されたすべての wasm バッファを解放することができるようになりました。</p>

<pre class="brush: js notranslate">api.encode(p, image.width, image.height, 100);
const resultPointer = api.get_result_pointer();
const resultSize = api.get_result_size();
const resultView = new Uint8Array(Module.HEAP8.buffer, resultPointer, resultSize);
const result = new Uint8Array(resultView);
api.free_result(resultPointer);</pre>

<div class="note">
<p><strong>Note:</strong> <code>new Uint8Array(someBuffer)</code>は同じメモリチャンク上に新しいビューを作成し、<code>new Uint8Array(someTypedArray)</code>はデータをコピーします。</p>
</div>

<p>画像のサイズによっては、wasmが入力画像と出力画像を格納するためのメモリを十分に大きくすることができないというエラーが発生する可能性があります:</p>

<p><img alt="
  Screenshot of the DevTools console showing an error." src="https://mdn.mozillademos.org/files/15922/error.png"></p>

<p>幸いにも、この問題の解決策はエラーメッセージの中にあります。コンパイルコマンドに<code>-s ALLOW_MEMORY_GROWTH=1</code>を追加するだけです。</p>

<p>これで完了です。WebPエンコーダをコンパイルし、JPEG画像をWebPにトランスコードしました。うまくいったことを証明するために、結果のバッファをblobにして<code>&lt;img&gt;</code>要素で使用してください:</p>

<pre class="brush: js notranslate">const blob = new Blob([result], {type: 'image/webp'});
const blobURL = URL.createObjectURL(blob);
const img = document.createElement('img');
img.src = blobURL;
document.body.appendChild(img)
</pre>

<p>見るがいい、新しいWebP画像の栄光を。</p>

<p><a href="https://googlechrome.github.io/samples/webassembly/image.html">デモ</a> | <a dir="ltr" href="https://developers.google.com/web/updates/2018/03/emscripting-a-c-library">原著</a></p>

<p><img alt=" デベロッパーツールのネットワークパネルと生成された画像。" src="https://mdn.mozillademos.org/files/15914/result.jpg" style="border-style: solid; border-width: 1px;"></p>
