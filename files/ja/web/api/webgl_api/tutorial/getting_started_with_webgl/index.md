---
title: WebGL 入門
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](/ja/docs/Web/API/WebGL_API) により、ウェブコンテンツで [OpenGL ES](https://www.khronos.org/opengles/) 2.0 ベースの API を用いて、対応しているブラウザーではプラグインを使わずに、 2D および 3D の描画を HTML の [`canvas`](/ja/docs/Web/API/Canvas_API) において行うことができます。

WebGL のプログラムは JavaScript で記述する制御コードと、コンピューターの Graphics Processing Unit (GPU) で実行するシェーダーコード (GLSL) で構成されます。 WebGL 要素は他の HTML 要素と混ぜられ、他のページ部品やページの背景と合成されます。

この記事では、 WebGL の基礎を紹介します。ここでは、 3D グラフィックに関して数学的に理解していることを前提とし、 3D グラフィックの概念自体の説明は行いません。

このチュートリアルで使用するコード例は、[GitHub の webgl-examples リポジトリー](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial)で確認できます。

この一連の記事は WebGL 自体を紹介していることに注意してください。ただし [THREE.js](https://threejs.org/) など、 WebGL の機能をカプセル化する数多くのフレームワークを利用して、 3D アプリケーションとゲームをより簡単に構築することが可能です。

## 3D 描画の準備

最初に、次の 2 つのファイルを作成してください。

- "index.html"
- "webgl-demo.js"

"index.html" ファイルには、以下のような内容を入れてください。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>WebGL デモ</title>
    <script src="webgl-demo.js" type="module"></script>
  </head>

  <body>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </body>
</html>
```

これは、サンプルが描画するキャンバスを宣言しています。

### WebGL コンテキストの準備

以下のコードを "webgl-demo.js" ファイルに追加してください。

```js
main();

//
// ここから開始
//
function main() {
  const canvas = document.querySelector("#glcanvas");
  // GL コンテキストを初期化
  const gl = canvas.getContext("webgl");

  // WebGL が使用可能で動作している場合にのみ続行
  if (gl === null) {
    alert(
      "WebGL を初期化できません。ブラウザーまたはマシンが対応していない可能性があります。",
    );
    return;
  }

  // クリアカラーを黒に設定し、完全に不透明する
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 指定されたクリアカラーでカラーバッファーをクリアする
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

スクリプトが読み込まれると `main()` 関数が呼び出されます。この関数の目的は WebGL コンテキストをセットアップし、コンテンツのレンダリングを始めることです。

ここで最初に行うことはキャンバスへの参照を取得し、それを `canvas` という名前の変数に割り当てることです。

キャンバスを取得したら、キャンバスの [`WebGLRenderingContext`](/ja/docs/Web/API/WebGLRenderingContext) を取得するために [`getContext()`](/ja/docs/Web/API/HTMLCanvasElement/getContext) を呼び出して文字列 `"webgl"` を渡します。ブラウザーが WebGL に対応していない場合、 `getContext()` は `null` を返します。その場合はユーザーにメッセージを表示して終了します。

コンテキストが正常に初期化された場合、変数 `gl` はその参照になります。この場合、クリアカラーを黒に設定し、そのカラーのコンテキストをクリア（背景色でキャンバスを再描画）します。

この時点で、 WebGL コンテキストが正常に初期化されるのに十分なコードがあり、コンテンツを受信する準備ができて待機している大きな黒い空のボックスになります。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## 関連情報

- [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/): Luz Caballero が著し、dev.opera.com で公開しています。この記事では WebGL とは何かやどのように WebGL が動作するか（レンダリングパイプラインの概念を含む）を説明して、WebGL ライブラリーをいくつか紹介しています。
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [An intro to modern OpenGL:](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents) Joe Groff が OpenGL に関するすばらしい記事シリーズを著しており、OpenGL の歴史から重要なグラフィックスパイプラインの概念までの説明、およびどのように OpenGL が動作するかを示すデモを紹介しています。OpenGL の知識を持っていない場合は、ここから始めるとよいでしょう。

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
