---
title: Compiling an Existing C Module to WebAssembly
slug: WebAssembly/existing_C_to_wasm
---
{{WebAssemblySidebar}}

WebAssembly のコアユースケースは、既存の C ライブラリのエコシステムを取得し、開発者が Web 上でそれらを利用できるようにすることです。

これらのライブラリは、C の標準ライブラリ、オペレーティングシステム、ファイルシステムやその他のものにしばしば依存します。Emscripten は、いくつかの[制限](https://kripken.github.io/emscripten-site/docs/porting/guidelines/api_limitations.html)はあるものの、これらの機能のほとんどを提供しています。

例として、WebP 用のエンコーダを wasm にコンパイルしてみましょう。WebP コーデックのソースは C 言語で書かれており、拡張[API](https://developers.google.com/speed/webp/docs/api)のドキュメントと同様[GitHub で入手できます](https://github.com/webmproject/libwebp)。これはとても良いスタート地点です。

```bash
$ git clone https://github.com/webmproject/libwebp
```

簡単な例から始めましょう。`webp.c` という C ファイルを書いて`encode.h`から`WebPGetEncoderVersion()`を JavaScript に公開します:

```cpp
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}
```

これは libwebp のソースコードをコンパイルできるかテストするのに適したシンプルなプログラムです。この関数を呼び出すのにパラメータや複雑なデータ構造は必要ありません。

このプログラムをコンパイルするには、 -I フラグを使って libwebp のヘッダファイルの場所をコンパイラに教え、また必要な libwebp の**すべての** C ファイルをコンパイラに渡す必要があります。すべての C ファイルをコンパイラ渡して、コンパイラが不要なものをすべて取り除くようにするのは良い戦略です。この戦略はとてもうまくいっているようです。

```bash
$ emcc -O3 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c
```

> **Note:** **注：** この戦略はすべての C プロジェクトでうまくいく訳ではありません。多くのプロジェクトでは、コンパイルの前にシステム固有のコードを生成するため、autoconf/automake に依存しています。Emscripten は、これらのコマンドをラップして適切なパラメータを注入するための `emconfigure` と `emmake` を提供しています。詳細は [Emscripten のドキュメント](https://kripken.github.io/emscripten-site/docs/compiling/Building-Projects.html)を読んでください。

これで、あなたの新しいモジュールを読み込むために必要なのは HTML と JavaScript だけになりました：

```html
<script src="./a.out.js"></script>
<script>
  Module.onRuntimeInitialized = async _ => {
    const api = {
      version: Module.cwrap('version', 'number', []),
    };
    console.log(api.version());
  };
</script>
```

そして、正しいバージョン番号が[出力](https://googlechrome.github.io/samples/webassembly/version.html)されます:

![  正しいバージョン番号を示すデベロッパーツールのコンソールのスクリーンショット](https://mdn.mozillademos.org/files/15913/version.png)

> **Note:** **注：** libwebp は現在のバージョン a.b.c を 16 進数の 0xabc で返します。例えば、v0.6.1 は 0x000601 = 1537 としてエンコードされています。

### JavaScript から Wasm に画像を取得する

エンコーダのバージョン番号を取得するのは素晴らしいことですが、画像をエンコードした方が印象的です。どうすればいいのでしょうか？

最初に答えなければならない質問は、どうやって画像を wasm に入れるのかということです。libwebp の[Encoding API](https://developers.google.com/speed/webp/docs/api#simple_encoding_api)を見ると、RGB、RGBA、BGR、BGRA のバイト列を期待していることがわかります。幸いにも Canvas API には {{domxref("CanvasRenderingContext2D.getImageData")}} があり、RGBA の画像データを含む {{jsxref("Uint8ClampedArray")}}が得られます：

```js
 async function loadImage(src) {
  // Load image
  const imgBlob = await fetch(src).then(resp => resp.blob());
  const img = await createImageBitmap(imgBlob);
  // Make canvas same size as image
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw image onto canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}
```

これで、JavaScript から wasm にデータをコピーすることだけが「唯一の」問題となります。そのためには、追加で 2 つの関数を公開する必要があります — 1 つは、wasm 内で画像のためにメモリを確保する関数、もう 1 つは、それを再び解放する関数です：

```cpp
#include <stdlib.h> // required for malloc definition

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int width, int height) {
  return malloc(width * height * 4 * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
  free(p);
}
```

`create_buffer()` 関数は RGBA 画像用 — したがって、ピクセル当たり 4 バイト — のバッファを確保します。malloc() が返すポインタは、そのバッファの最初のメモリセルのアドレスです。ポインタが JavaScript に返されると、それは単なる数値として扱われます。この関数を cwrap を使って JavaScript に公開した後、その数値を使ってバッファの開始点を見つけ、画像データをコピーすることができます。

```js
const api = {
  version: Module.cwrap('version', 'number', []),
  create_buffer: Module.cwrap('create_buffer', 'number', ['number', 'number']),
  destroy_buffer: Module.cwrap('destroy_buffer', '', ['number']),
};

const image = await loadImage('./image.jpg');
const p = api.create_buffer(image.width, image.height);
Module.HEAP8.set(image.data, p);
// ... call encoder ...
api.destroy_buffer(p);
```

### 画像をエンコードする

wasm で画像を使えるようになりました。いよいよ WebP エンコーダを呼び出して動かす時が来ました。[WebP のドキュメント](https://developers.google.com/speed/webp/docs/api#simple_encoding_api)を見ると、`WebPEncodeRGBA`がふさわしいようです。この関数は、入力画像へのポインタと画像の寸法、そして 0 から 100 の間のクオリティーオプションを受け取ります。また、出力バッファを確保するので、WebP 画像の処理が終わったら `WebPFree()`を使って解放する必要があります。

エンコード処理の結果は、出力バッファとその長さになります。C 言語の関数は(メモリを動的に確保しない限り)戻り値の型として配列を使うことができないため 、この例では静的なグローバル配列を使用しています。これはクリーンな C 言語とは言えないかもしれません。実際、これは wasm ポインタが 32 ビット幅であることに依存しています。しかし、これは話を単純にするための公正な手段です。

```js
int result[2];
EMSCRIPTEN_KEEPALIVE
void encode(uint8_t* img_in, int width, int height, float quality) {
  uint8_t* img_out;
  size_t size;

  size = WebPEncodeRGBA(img_in, width, height, width * 4, quality, &img_out);

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
}
```

これで、エンコーディング関数を呼び出し、ポインタと画像サイズを取得し、それをあなたの JavaScript バッファに格納し、プロセス中で確保されたすべての wasm バッファを解放することができるようになりました。

```js
api.encode(p, image.width, image.height, 100);
const resultPointer = api.get_result_pointer();
const resultSize = api.get_result_size();
const resultView = new Uint8Array(Module.HEAP8.buffer, resultPointer, resultSize);
const result = new Uint8Array(resultView);
api.free_result(resultPointer);
```

> **Note:** `new Uint8Array(someBuffer)`は同じメモリチャンク上に新しいビューを作成し、`new Uint8Array(someTypedArray)`はデータをコピーします。

画像のサイズによっては、wasm が入力画像と出力画像を格納するためのメモリを十分に大きくすることができないというエラーが発生する可能性があります:

![
  Screenshot of the DevTools console showing an error.](https://mdn.mozillademos.org/files/15922/error.png)

幸いにも、この問題の解決策はエラーメッセージの中にあります。コンパイルコマンドに`-s ALLOW_MEMORY_GROWTH=1`を追加するだけです。

これで完了です。WebP エンコーダをコンパイルし、JPEG 画像を WebP にトランスコードしました。うまくいったことを証明するために、結果のバッファを blob にして`<img>`要素で使用してください:

```js
const blob = new Blob([result], {type: 'image/webp'});
const blobURL = URL.createObjectURL(blob);
const img = document.createElement('img');
img.src = blobURL;
document.body.appendChild(img)
```

見るがいい、新しい WebP 画像の栄光を。

[デモ](https://googlechrome.github.io/samples/webassembly/image.html) | [原著](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library)

![ デベロッパーツールのネットワークパネルと生成された画像。](https://mdn.mozillademos.org/files/15914/result.jpg)
