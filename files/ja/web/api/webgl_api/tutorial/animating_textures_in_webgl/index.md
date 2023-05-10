---
title: WebGL でのテクスチャのアニメーティング
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

今回のデモンストレーションでは、前回の例で用いた静的なテクスチャを Ogg ビデオファイルのフレームに置き換えます。実はこれを行うのはとても簡単ですが、見ていて楽しいです。さっそく始めましょう。なお同様のコードを、どんな種類のデータ ({{HTMLElement("canvas")}} など) をテクスチャのソースとして用いる場合でも使用することができます。

## ビデオにアクセスする

始めに、ビデオフレームを取り出すのに使う {{HTMLElement("video")}} 要素を作成する HTML を追加します:

```html
<video id="video">
  HTML5 <code>&lt;video&gt;</code> 要素をサポートしていません。
</video>
```

これは単純に、ビデオファイル "Firefox.ogv" を再生する要素を作成します。この video 要素が表示されないようにするため、以下の CSS を使用します:

```css
video {
  display: none;
}
```

続いて、JavaScript のコードに注意を向けます。まずは `start()` 関数に、`video` 要素への参照を取得するコードを追加します:

```js
videoElement = document.getElementById("video");
```

次に、インターバル駆動による `drawScene()` の呼び出しを設定しているコードを以下のコードに置き換えます:

```js
videoElement.addEventListener("canplaythrough", startVideo, true);
videoElement.addEventListener("ended", videoDone, true);
```

最後に、ビデオの読み込みを始めるために `src` 属性を設定します。FIXME (bjacob): ここで `preload="auto"` も必要です。そうしなければ、Firefox で `canplaythrough` が発生しません。Chrome では、`preload="auto"` の有無に関わらずビデオを読み込みます。

```js
video.preload = "auto";
videoElement.src = "Firefox.ogv";
```

これには、ビデオの再生が中断されないよう充分にバッファリングされるまではアニメーションを始めたくないという考え方があります。そこで、データが充分にバッファリングされてビデオが切れ目なく再生できると期待できることを、`video` 要素が通知するまで待つためのイベントリスナを追加します。

`startVideo()` 関数は以下のようにします:

```js
function startVideo() {
  videoElement.play();
  intervalID = setInterval(drawScene, 15);
}
```

これは単にビデオの再生を開始して、キューブの描画を制御するために `drawScene()` のインターバル駆動による呼び出しを定義します。

また、ビデオの再生が終わったときにアニメーションを停止できるように、video の "ended" イベントにイベントリスナを追加します。そうしなければ、正当な理由がないのに CPU 時間を浪費することになってしまうためです。

```js
function videoDone() {
  clearInterval(intervalID);
}
```

`videoDone()` 関数は単純に、アニメーションの更新を終わらせるために {{domxref("window.clearInterval()")}} を呼び出します。

## ビデオフレームをテクスチャとして使用する

次に変更するのは `initTexture()` です。画像ファイルを読み込む必要がなくなったため、とても単純になります。画像を読み込む代わりに、空のテクスチャオブジェクトを作成して、後で使用するフィルタを設定します:

```js
function initTextures() {
  cubeTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
```

`updateTexture()` 関数は以下のようになります。ここで実際の処理を行います:

```js
function updateTexture() {
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, videoElement);
}
```

このコードは、以前見たことがあります。これは以前の例にあった `handleTextureLoaded()` ルーチンとほぼ同じであり、`texImage2D()` を呼び出すときに `Image` オブジェクトに代わり {{HTMLElement("video")}} 要素を渡すところが異なります。WebGL は、現在のフレームを取り出してテクスチャとして使用する方法がわかります。

`updateTexture()` はシーンを再描画する準備が整ったときに毎回、`drawScene()` によって呼び出されます。`drawScene()` の唯一の変更点は、処理の最初に `updateTexture()` の呼び出しを追加することです。

以上で完了です!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## 関連情報

- [HTML5 の audio 要素と video 要素の使用](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
