---
title: WebGL 入門
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
---
{{WebGLSidebar("Tutorial")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](/ja/docs/Web/API/WebGL_API) により、ウェブコンテンツが [OpenGL ES](https://www.khronos.org/opengles/) 2.0 ベースの API を用いて、対応しているブラウザーではプラグインを使わずに、二次元および三次元の描画を HTML の [`canvas`](/ja/docs/Web/API/Canvas_API) において行うことができます。

WebGL のプログラムは JavaScript で記述する制御コードと、コンピューターの Graphics Processing Unit (GPU) で実行するシェーダーコード (GLSL)  で構成されます。 WebGL 要素は他の HTML 要素と混ぜられ、他のページ部品やページの背景と合成されます。

この記事では、 WebGL の基礎を紹介します。ここでは、三次元グラフィックスに関する数学的な知識を理解していることを前提とします。よって、 OpenGL そのものの説明は行いません。

このチュートリアルで使用するコード例は、[GitHub の webgl-examples リポジトリー](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial)で確認できます。

この一連の記事が WebGL 自体を紹介していることに注意してください。ただし [THREE.js](https://threejs.org/) など、 WebGL の機能をカプセル化する多くのフレームワークが利用でき、三次元アプリケーションとゲームを簡単に構築することが可能です。

## 三次元描画の準備

レンダリングに WebGL を使用するために最初に必要なのはキャンバスです。以下の HTML の断片は、サンプルが描画されるキャンバスを宣言します。

```html
<body>
  <canvas id="glCanvas" width="640" height="480"></canvas>
</body>
```

### WebGL コンテキストの準備

JavaScript コードの `main()` 関数は、スクリプトが読み込まれたときに呼び出されます。その目的は、WebGL コンテキストをセットアップし、コンテンツのレンダリングを開始することです。

```js
//
// ここから開始
//
function main() {
  const canvas = document.querySelector("#glCanvas");
  // GL コンテキストを初期化する
  const gl = canvas.getContext("webgl");

  // WebGL が使用可能で動作している場合にのみ続行します
  if (gl === null) {
    alert("WebGL を初期化できません。ブラウザーまたはマシンが対応していない可能性があります。");
    return;
  }

  // クリアカラーを黒に設定し、完全に不透明にします
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 指定されたクリアカラーでカラーバッファーをクリアします
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
```

ここで最初に行うことはキャンバスへの参照を取得し、それを `canvas` という名前の変数に割り当てることです。

キャンバスを取得したら、キャンバスの [`WebGLRenderingContext`](/ja/docs/Web/API/WebGLRenderingContext) を取得するために [`getContext()`](/ja/docs/Web/API/HTMLCanvasElement/getContext) を呼び出して文字列 `"webgl"` を渡します。ブラウザーが WebGL に対応していない場合、 `getContext()` は `null` を返します。その場合はユーザーにメッセージを表示して終了します。

コンテキストが正常に初期化された場合、変数 `gl` はそれへの参照です。この場合、クリアカラーを黒に設定し、そのカラーのコンテキストをクリア（背景色でキャンバスを再描画）します。

この時点で、 WebGL コンテキストが正常に初期化されるのに十分なコードがあり、コンテンツを受信する準備ができて待機している大きな黒い空のボックスになります。

{{EmbedGHLiveSample('webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample1) | [新しいページでデモを開く](https://mdn.github.io/webgl-examples/tutorial/sample1/)

## 関連情報

- [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/): Luz Caballero が著し、dev.opera.com で公開しています。この記事では WebGL とは何かやどのように WebGL が動作するか (レンダリングパイプラインの概念を含む) を説明して、WebGL ライブラリーをいくつか紹介しています。
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [An intro to modern OpenGL:](https://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html) Joe Groff が OpenGL に関するすばらしい記事シリーズを著しており、OpenGL の歴史から重要なグラフィックスパイプラインの概念までの説明、およびどのように OpenGL が動作するかを示すデモを紹介しています。OpenGL の知識を持っていない場合は、ここから始めるとよいでしょう。

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
