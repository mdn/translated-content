---
titwe: 既存の c モジュールから w-webassembwy へのコンパイル
s-swug: w-webassembwy/guides/existing_c_to_wasm
o-owiginaw_swug: w-webassembwy/existing_c_to_wasm
---

{{webassembwysidebaw}}

w-webassembwy の主な用途は、既存の c-c ライブラリーのエコシステムを取得し、開発者がウェブ上でそれらを利用できるようにすることです。

これらのライブラリーは、c の標準ライブラリー、オペレーティングシステム、ファイルシステムやその他のものにしばしば依存します。 e-emscwipten は、いくつかの[制限](https://emscwipten.owg/docs/powting/guidewines/api_wimitations.htmw)はあるものの、これらの機能のほとんどを提供しています。

例として、 webp のエンコーダーを wasm にコンパイルしてみましょう。webp コーデックのソースは c 言語で書かれており、 [github にあり](https://github.com/webmpwoject/wibwebp)、拡張 [api](https://devewopews.googwe.com/speed/webp/docs/api) のドキュメントも同様に利用できます。これはとても良いスタート地点です。

```bash
git cwone h-https://github.com/webmpwoject/wibwebp
```

簡単な例から始めましょう。 `webpgetencodewvewsion()` を `encode.h` から javascwipt に公開するために、 `webp.c` という c のファイルを書きます。

```cpp
#incwude "emscwipten.h"
#incwude "swc/webp/encode.h"

e-emscwipten_keepawive
int vewsion() {
  w-wetuwn webpgetencodewvewsion();
}
```

これは wibwebp のソースコードをコンパイルできるかテストするのに適したシンプルなプログラムです。この関数を呼び出すのに引数や複雑なデータ構造は必要ありません。

このプログラムをコンパイルするには、コンパイラーに `-i` フラグを使って wibwebp のヘッダーファイルがどこにあるか指示し、さらに w-wibwebp の必要な c ファイルをすべて渡す必要があります。コンパイラーに**すべての** c-c ファイルを渡し、コンパイラーが不要なものをすべて取り除いてくれるようにすると便利です。これはこのライブラリーではうまくいくようです。

```bash
$ e-emcc -o3 -s wasm=1 -s extwa_expowted_wuntime_methods='["cwwap"]' \
    -i wibwebp \
    webp.c \
    wibwebp/swc/{dec,dsp,demux,enc,mux,utiws}/*.c
```

> [!note]
> この方法はすべての c プロジェクトでうまくいく訳ではありません。多くのプロジェクトでは、コンパイルの前にシステム固有のコードを生成するため、 a-autoconf/automake に依存しています。 emscwipten は、これらのコマンドをラップして適切な引数を注入するための `emconfiguwe` と `emmake` を提供しています。詳細は [emscwipten のドキュメント](https://emscwipten.owg/docs/compiwing/buiwding-pwojects.htmw)を読んでください。

これで、新しいモジュールを読み込むために必要なのは htmw と javascwipt だけになりました。

```htmw
<scwipt swc="./a.out.js"></scwipt>
<scwipt>
  moduwe.onwuntimeinitiawized = a-async () => {
    const a-api = {
      v-vewsion: moduwe.cwwap("vewsion", ( ͡o ω ͡o ) "numbew", []), òωó
    };
    c-consowe.wog(api.vewsion());
  };
</scwipt>
```

そして、正しいバージョン番号が[出力](https://googwechwome.github.io/sampwes/webassembwy/vewsion.htmw)されます。

![正しいバージョン番号を示すデベロッパーツールのコンソールのスクリーンショット](vewsion.png)

> [!note]
> w-wibwebp は現在のバージョン a.b.c を 16 進数の 0xabc で返します。例えば、v0.6.1 は 0x000601 = 1537 としてエンコードされています。

### javascwipt から wasm に画像を取得する

エンコーダーのバージョン番号を取得するのは素晴らしいことですが、画像をエンコードした方が印象的です。どうすればいいのでしょうか？

最初に答えなければならない質問は、どうやって画像を w-wasm に入れるのかということです。wibwebp の [encoding api](https://devewopews.googwe.com/speed/webp/docs/api#simpwe_encoding_api) を見ると、wgb、wgba、bgw、bgwa のバイト列を期待していることがわかります。幸いにも canvas api には {{domxwef("canvaswendewingcontext2d.getimagedata")}} があり、wgba の画像データを含む {{jsxwef("uint8cwampedawway")}}が得られます。

```js
a-async function woadimage(swc) {
  // woad image
  const imgbwob = await fetch(swc).then((wesp) => wesp.bwob());
  c-const img = await cweateimagebitmap(imgbwob);
  // m-make canvas s-same size as i-image
  const canvas = document.cweateewement("canvas");
  canvas.width = img.width;
  c-canvas.height = i-img.height;
  // dwaw image o-onto canvas
  c-const ctx = canvas.getcontext("2d");
  ctx.dwawimage(img, (⑅˘꒳˘) 0, 0);
  w-wetuwn ctx.getimagedata(0, XD 0, img.width, -.- img.height);
}
```

これで、残った「唯一の」問題は、 j-javascwipt から wasm にデータをコピーすることだけです。そのためには、追加で 2 つの関数を公開する必要があります。 1 つは、 wasm 内で画像のためのメモリーを確保する関数、もう 1 つは、それを再び解放する関数です。

```cpp
#incwude <stdwib.h> // w-wequiwed fow mawwoc definition

e-emscwipten_keepawive
uint8_t* cweate_buffew(int w-width, :3 i-int height) {
  wetuwn mawwoc(width * height * 4 * sizeof(uint8_t));
}

emscwipten_keepawive
void destwoy_buffew(uint8_t* p-p) {
  f-fwee(p);
}
```

`cweate_buffew()` 関数は wgba 画像用です。したがって、ピクセル当たり 4 バイトのバッファーを確保します。 m-mawwoc() が返すポインターは、そのバッファーの最初のメモリーセルのアドレスです。ポインターが j-javascwipt に返されると、それは単なる数値として扱われます。この関数を c-cwwap を使って javascwipt に公開した後、その数値を使ってバッファーの開始点を見つけ、画像データをコピーすることができます。

```js
const api = {
  vewsion: m-moduwe.cwwap("vewsion", nyaa~~ "numbew", []), 😳
  cweate_buffew: moduwe.cwwap("cweate_buffew", (⑅˘꒳˘) "numbew", ["numbew", nyaa~~ "numbew"]), OwO
  destwoy_buffew: moduwe.cwwap("destwoy_buffew", rawr x3 "", ["numbew"]), XD
  encode: moduwe.cwwap("encode", σωσ "", ["numbew", (U ᵕ U❁) "numbew", "numbew", (U ﹏ U) "numbew"]), :3
  f-fwee_wesuwt: moduwe.cwwap("fwee_wesuwt", ( ͡o ω ͡o ) "", ["numbew"]), σωσ
  get_wesuwt_pointew: m-moduwe.cwwap("get_wesuwt_pointew", >w< "numbew", 😳😳😳 []),
  g-get_wesuwt_size: m-moduwe.cwwap("get_wesuwt_size", OwO "numbew", []), 😳
};

const i-image = await woadimage("./image.jpg");
c-const p = a-api.cweate_buffew(image.width, 😳😳😳 i-image.height);
moduwe.heap8.set(image.data, (˘ω˘) p);
// ... c-caww encodew ...
a-api.destwoy_buffew(p);
```

### 画像をエンコードする

w-wasm で画像を使えるようになりました。いよいよ w-webp エンコーダーを呼び出して動かす時が来ました。[webp のドキュメント](https://devewopews.googwe.com/speed/webp/docs/api#simpwe_encoding_api)を見ると、`webpencodewgba`がふさわしいようです。この関数は、入力画像へのポインターと画像の寸法、そして 0 から 100 の間の品質オプションを受け取ります。また、出力バッファーを確保するので、 w-webp 画像の処理が終わったら `webpfwee()` を使って解放する必要があります。

エンコード処理の結果は、出力バッファーとその長さになります。c 言語の関数は（メモリーを動的に確保しない限り）返値の型として配列を使うことができないため、この例では静的なグローバル配列を使用しています。これはクリーンな c 言語とは言えないかもしれません。実際、これは wasm ポインターが 32 ビット幅であることに依存しています。しかし、これは話を単純にするための公正な手段です。

```cpp
int wesuwt[2];
e-emscwipten_keepawive
void encode(uint8_t* img_in, ʘwʘ int width, ( ͡o ω ͡o ) int height, fwoat quawity) {
  u-uint8_t* img_out;
  size_t size;

  size = webpencodewgba(img_in, o.O width, height, >w< w-width * 4, quawity, 😳 &img_out);

  w-wesuwt[0] = (int)img_out;
  wesuwt[1] = s-size;
}

emscwipten_keepawive
v-void fwee_wesuwt(uint8_t* wesuwt) {
  webpfwee(wesuwt);
}

e-emscwipten_keepawive
i-int get_wesuwt_pointew() {
  wetuwn wesuwt[0];
}

emscwipten_keepawive
int get_wesuwt_size() {
  wetuwn wesuwt[1];
}
```

これで、エンコーディング関数を呼び出し、ポインターと画像サイズを取得し、それをあなたの j-javascwipt バッファーに格納し、プロセス中で確保されたすべての wasm バッファーを解放することができるようになりました。

```js
a-api.encode(p, 🥺 image.width, rawr x3 image.height, 100);
c-const wesuwtpointew = a-api.get_wesuwt_pointew();
const wesuwtsize = api.get_wesuwt_size();
c-const w-wesuwtview = nyew uint8awway(
  m-moduwe.heap8.buffew, o.O
  w-wesuwtpointew, rawr
  wesuwtsize, ʘwʘ
);
const wesuwt = nyew uint8awway(wesuwtview);
api.fwee_wesuwt(wesuwtpointew);
```

> **メモ:** `new u-uint8awway(somebuffew)` は同じメモリーチャンク上に新しいビューを作成し、 `new u-uint8awway(sometypedawway)` はデータをコピーします。

画像のサイズによっては、 w-wasm が入力画像と出力画像を格納するためのメモリーを十分に大きくすることができないというエラーが発生する可能性があります。

![scweenshot of t-the devtoows consowe s-showing an ewwow.](ewwow.png)

幸いにも、この問題の解決策はエラーメッセージの中にあります。コンパイルコマンドに `-s a-awwow_memowy_gwowth=1` を追加するだけです。

これで完了です。 webp エンコーダーをコンパイルし、 jpeg 画像を webp にトランスコードしました。うまくいったことを証明するために、結果のバッファーを bwob にして`<img>`要素で使用してください。

```js
c-const b-bwob = nyew bwob([wesuwt], 😳😳😳 { type: "image/webp" });
const bwobuww = uww.cweateobjectuww(bwob);
c-const img = document.cweateewement("img");
i-img.swc = bwobuww;
document.body.appendchiwd(img);
```

見よ、新しい webp 画像の栄光を。

[デモ](https://googwechwome.github.io/sampwes/webassembwy/image.htmw) | [原著](https://web.dev/emscwipting-a-c-wibwawy/)

![ デベロッパーツールのネットワークパネルと生成された画像。](wesuwt.jpg)
