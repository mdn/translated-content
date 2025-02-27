---
title: WebGL におけるテクスチャのアニメーション
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

今回のデモンストレーションでは、前回の例で用いた静的なテクスチャを Ogg ビデオファイルのフレームに置き換えます。実はこれを行うのはとても簡単ですが、見ていて楽しいです。さっそく始めましょう。なお同様のコードを、どんな種類のデータ（{{ HTMLElement("canvas") }} など）をテクスチャのソースとして用いる場合でも使用することができます。

## 動画へのアクセス

始めに、ビデオフレームを取り出すのに使う {{ HTMLElement("video") }} 要素を作成します。

> [!NOTE]
> この宣言を "webgl-demo.js" スクリプトの始めに追加しましょう。

```js
// 動画がテクスチャにコピーできる場合は true に設定する
let copyVideo = false;
```

> [!NOTE]
> この関数を "webgl-demo.js" スクリプトに追加しましょう。

```js
function setupVideo(url) {
  const video = document.createElement("video");

  let playing = false;
  let timeupdate = false;

  video.playsInline = true;
  video.muted = true;
  video.loop = true;

  // 動画のデータが確実にあることを保証するために、
  // この 2 つのイベントを待つ

  video.addEventListener(
    "playing",
    () => {
      playing = true;
      checkReady();
    },
    true,
  );

  video.addEventListener(
    "timeupdate",
    () => {
      timeupdate = true;
      checkReady();
    },
    true,
  );

  video.src = url;
  video.play();

  function checkReady() {
    if (playing && timeupdate) {
      copyVideo = true;
    }
  }

  return video;
}
```

最初に動画要素を作成します。動画を自動再生し、音をミュートし、ループ再生するように設定します。次に、動画が再生され、時刻が更新されたことを確認するために 2 つのイベントを設定します。まだ利用できるデータがない動画を WebGL にアップロードするとエラーになるため、この両方のチェックが必要です。これらのイベントをどちらも調べることで、利用できるデータがあることが確認され、WebGL テクスチャへの動画のアップロードを始めるのには安全であることが保証されます。上記のコードでは、これらのイベントをどちらも取得したことを確認しています。取得した場合は、グローバル変数 `copyVideo` に true を設定し、動画をテクスチャにコピーし始めても安全であることを示しています。

そして最後に、 `src` 属性を設定し、 `play` を呼び出して動画の読み込みと再生を開始します。

WebGL にテクスチャデータを提供するために使用するためには、元の動画を安全なソースから読み込む必要があります。つまり、安全なウェブサーバーを使用するようにコードを展開する必要があるだけでなく、テストするための安全なサーバーも必要になります。[ローカルテストサーバーを用意するには](/ja/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server)を参照してください。

## 動画フレームをテクスチャとして使用する

次に変更するのは `initTexture()` です。画像ファイルを読み込む必要がなくなったため、とても単純になります。画像を読み込む代わりに、空のテクスチャオブジェクトを作成して、後で使用するフィルターを設定します。

> [!NOTE]
> "webgl-demo.js" の `loadTexture()` 関数を以下のコードに置き換えましょう。

```js
function initTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 動画はインターネット経由でダウンロードしなければならない
  // ため、準備ができるまで時間がかかる可能性があります。
  // そのため、テクスチャに単一のピクセルを置くことで、
  // 直ちにそれを利用することができます。
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // 不透明の青
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel,
  );

  // mips をオフにし、 wrapping を clamp to edge に設定することで、動画の大きさに関係なく動作するようになります。
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return texture;
}
```

> [!NOTE]
> 以下の関数を "webgl-demo.js" に追加しましょう。

```js
function updateTexture(gl, texture, video) {
  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    srcFormat,
    srcType,
    video,
  );
}
```

このコードは以前にも見たことがあるでしょう。前回の例の画像 onload 関数とほぼ同じですが、 `texImage2D()` を呼び出すときに `Image` オブジェクトを渡す代わりに {{ HTMLElement("video") }} 要素を渡している点が異なります。 WebGL は現在のフレームを取り出し、テクスチャとして使用する方法を知っています。

次に、これらの新しい関数を `main()` 関数から呼び出す必要があります。

> **メモ:** `main()` 関数で、 `loadTexture()` の呼び出しを次のコードに置き換えましょう。

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> [!NOTE]
> また、[Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4) ファイルを JavaScript ファイルと同じローカルディレクトリーにダウンロードする必要があります。

> **メモ:** `main()` 関数で、 `render()` 関数をこのように置き換えましょう。

```js
// シーンを反復して描画
function render(now) {
  now *= 0.001; // 秒へ変換
  deltaTime = now - then;
  then = now;

  if (copyVideo) {
    updateTexture(gl, texture, video);
  }

  drawScene(gl, programInfo, buffers, texture, cubeRotation);
  cubeRotation += deltaTime;

  requestAnimationFrame(render);
}
```

`copyVideo` が true の場合、 `drawScene()` 関数を呼び出す直前に `updateTexture()` を呼び出します。

以上です。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## 関連情報

- [HTML5 の audio 要素と video 要素の使用](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
