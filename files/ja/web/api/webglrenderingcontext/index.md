---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
l10n:
  sourceCommit: d65814793b7c76e11cb03ed60267d0d447dc0a64
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext`** インターフェースは、 {{HTMLElement("canvas")}} 要素の描画サーフェスのための OpenGL ES 2.0 の描画コンテキストを提供します。

このインターフェースを取得するためには、 {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} を `<canvas>` 要素に対して、 "webgl" の引数を与えて呼び出します。

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");
```

キャンバスの WebGL 描画コンテキストを取得すると、そのキャンバス内で描画を行うことができます。 [WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)には、 WebGL を使い始めるための詳細な情報、例、リソースが掲載されています。

WebGL 2.0 のコンテキストが必要な場合は、{{domxref("WebGL2RenderingContext")}}を参照してください。これは、 OpenGL ES 3.0 グラフィックスの実装にアクセスするためのものです。

## 定数

[WebGL 定数](/ja/docs/Web/API/WebGL_API/Constants)のページを参照してください。

## WebGL コンテキスト

以下のプロパティとメソッドは、 WebGL コンテキストを扱うための一般的な情報と機能を提供します。

- {{domxref("WebGLRenderingContext.canvas")}}
  - : 読み取り専用の {{domxref("HTMLCanvasElement")}} への後方参照です。{{HTMLElement("canvas")}} 要素と関連付けられていない場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返すことがあります。
- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
  - : 読み取り専用の現在の描画バッファーの幅です。コンテキストが関連付けされた canvas 要素の幅と一致しているといえます。
- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
  - : 読み取り専用の現在の描画バッファーの高さです。コンテキストが関連付けされた canvas 要素の高さと一致しているといえます。
- {{domxref("WebGLRenderingContext.getContextAttributes()")}}
  - : 実際のコンテキスト引数を含む `WebGLContextAttributes` オブジェクトを返します。コンテキストが失われていた場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返すことがあります。
- {{domxref("WebGLRenderingContext.isContextLost()")}}
  - : コンテキストが失われている場合は `true` を返し、そうでない場合は `false` を返します。
- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
  - : コンテキストがユーザーの XR ハードウェアと互換性があることを確認し、必要に応じて新しい設定でコンテキストを再作成して実行します。これは、標準的な 2D プレゼンテーションを使用してアプリケーションを開始し、後で VR または AR モードの使用に移行するために使用することができます。

## 表示とクリッピング

- {{domxref("WebGLRenderingContext.scissor()")}}
  - : シザーボックスを定義します。
- {{domxref("WebGLRenderingContext.viewport()")}}
  - : ビューポートを設定します。

## ステート情報

- {{domxref("WebGLRenderingContext.activeTexture()")}}
  - : アクティブなテクスチャユニットを選択します。
- {{domxref("WebGLRenderingContext.blendColor()")}}
  - : ブレンド元とブレンド先のブレンド係数を設定します。
- {{domxref("WebGLRenderingContext.blendEquation()")}}
  - : RGB のブレンド式とアルファのブレンド式をひとつの式に設定します。
- {{domxref("WebGLRenderingContext.blendEquationSeparate()")}}
  - : RGB のブレンド式とアルファのブレンド式を分けて式に設定します。
- {{domxref("WebGLRenderingContext.blendFunc()")}}
  - : どの関数がピクセルのブレンド演算に使用されるかを定義します。
- {{domxref("WebGLRenderingContext.blendFuncSeparate()")}}
  - : RGB とアルファ成分のピクセル演算を別々にブレンドするために、どの関数を使用するかを定義します。
- {{domxref("WebGLRenderingContext.clearColor()")}}
  - : カラーバッファーをクリアする時に使われる色を指定します。
- {{domxref("WebGLRenderingContext.clearDepth()")}}
  - : 深度バッファーをクリアする時に使用する深度値を指定します。
- {{domxref("WebGLRenderingContext.clearStencil()")}}
  - : ステンシルバッファーをクリアする時に使用するステンシル値を指定します。
- {{domxref("WebGLRenderingContext.colorMask()")}}
  - : ドローイングまたは {{domxref("WebGLFramebuffer")}} へのレンダリングの際に、どの色要素を有効または無効にするかを設定します。
- {{domxref("WebGLRenderingContext.cullFace()")}}
  - : 前面ポリゴンと後面ポリゴンのいずれか、または両方をカリングするかどうかを指定します。
- {{domxref("WebGLRenderingContext.depthFunc()")}}
  - : 現在の深度バッファーの深度値と書き込むピクセルの深度値を比較する関数を指定します。
- {{domxref("WebGLRenderingContext.depthMask()")}}
  - : 深度バッファーへの書き込みを有効にするか無効にするかどうかを設定します。
- {{domxref("WebGLRenderingContext.depthRange()")}}
  - : 正規化デバイス座標系からウィンドウまたはビューポート座標系への深度レンジマッピングを指定します。
- {{domxref("WebGLRenderingContext.disable()")}}
  - : このコンテキストにおいて、指定した WebGL 機能を無効にします。
- {{domxref("WebGLRenderingContext.enable()")}}
  - : このコンテキストにおいて、指定した WebGL 機能を有効にします。
- {{domxref("WebGLRenderingContext.frontFace()")}}
  - : 前面ポリゴンなのか後面ポリゴンなのかを周る方向によって指定します。
- {{domxref("WebGLRenderingContext.getParameter()")}}
  - : 渡された引数名の値を返します。
- {{domxref("WebGLRenderingContext.getError()")}}
  - : エラー情報を返します。
- {{domxref("WebGLRenderingContext.hint()")}}
  - : 一定の振る舞いについてのヒントを指定します。このヒントの振る舞いは実装に依存します。
- {{domxref("WebGLRenderingContext.isEnabled()")}}
  - : このコンテキストで指定された WebGL 機能が有効であるか無効であるかをテストします。
- {{domxref("WebGLRenderingContext.lineWidth()")}}
  - : ラスタライズする線の幅を設定します。
- {{domxref("WebGLRenderingContext.pixelStorei()")}}
  - : ピクセルストレージモードを指定します。
- {{domxref("WebGLRenderingContext.polygonOffset()")}}
  - : 深度値を計算するためのスケール係数と単位を指定します。
- {{domxref("WebGLRenderingContext.sampleCoverage()")}}
  - : アンチエイリアシング効果のためのマルチサンプルカバレッジ引数を指定します。
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
  - : ステンシルテストための関数と参照値を、前面と後面の両面を設定します。
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
  - : ステンシルテストための関数と参照値を、前面と後面の両面、またはいずれかを設定します。
- {{domxref("WebGLRenderingContext.stencilMask()")}}
  - : ステンシル平面の個々のビットの書き込みの有効と無効を、前面と後面の両面を操作します。
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
  - : ステンシル平面の個々のビットの書き込みの有効と無効を、前面と後面のいずれか、または両面を操作します。
- {{domxref("WebGLRenderingContext.stencilOp()")}}
  - : 前面と後面のステンシルテストの振る舞いを同時に設定します。
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
  - : 前面と後面のステンシルテストの振る舞いを設定します。

## バッファー

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
  - : `WebGLBuffer` オブジェクトを与えられたターゲットにバインドします。
- {{domxref("WebGLRenderingContext.bufferData()")}}
  - : バッファーデータを更新します。
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
  - : バッファーデータを与えられたオフセットから更新します。
- {{domxref("WebGLRenderingContext.createBuffer()")}}
  - : `WebGLBuffer` オブジェクトを作成します。
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
  - : `WebGLBuffer` オブジェクトを削除します。
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
  - : バッファーについての情報を返します。
- {{domxref("WebGLRenderingContext.isBuffer()")}}
  - : 与えられたバッファーが有効であるかの論理値を返します。

## フレームバッファー

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
  - : `WebGLFrameBuffer` オブジェクトを与えられたターゲットにバインドします。
- {{domxref("WebGLRenderingContext.checkFramebufferStatus()")}}
  - : フレームバッファーのステータスを返します。
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
  - : `WebGLFrameBuffer` オブジェクトを作成します。
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
  - : `WebGLFrameBuffer` オブジェクトを削除します。
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
  - : `WebGLRenderingBuffer` オブジェクトを `WebGLFrameBuffer` オブジェクトにアタッチします。
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
  - : テクスチャ画像を `WebGLFrameBuffer` オブジェクトにアタッチします。
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
  - : フレームバッファーについての情報を返します。
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
  - : 渡された `WebGLFrameBuffer` オブジェクトが有効かどうかを表す論理値を返します。
- {{domxref("WebGLRenderingContext.readPixels()")}}
  - : `WebGLFrameBuffer` からピクセルブロックを読み取ります。

## レンダーバッファー

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
  - : 与えられたターゲットに `WebGLRenderBuffer` オブジェクトをバインドします。
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
  - : `WebGLRenderBuffer` オブジェクトを作成します。
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
  - : `WebGLRenderBuffer` オブジェクトを削除します。
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
  - : レンダーバッファーについての情報を返します。
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
  - : 渡された `WebGLRenderingBuffer` が有効かどうかを表す論理値を返します。
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
  - : レンダーバッファーデータストアを作成します。

## テクスチャ

- {{domxref("WebGLRenderingContext.bindTexture()")}}
  - : 与えられたターゲットに `WebGLTexture` オブジェクトをバインドします。
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
  - : 2D テクスチャの画像を圧縮フォーマットで指定します。
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
  - : 2D テクスチャの部分画像を圧縮フォーマットで指定します。
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
  - : 2D テクスチャの画像をコピーします。
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
  - : 2D テクスチャの部分画像をコピーします。
- {{domxref("WebGLRenderingContext.createTexture()")}}
  - : `WebGLTexture` オブジェクトを作成します。
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
  - : `WebGLTexture` オブジェクトを削除します。
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
  - : `WebGLTexture` オブジェクトに対してミップマップ集合を生成します。
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
  - : テクスチャに対しての情報を返します。
- {{domxref("WebGLRenderingContext.isTexture()")}}
  - : 渡された `WebGLTexture` が有効かどうかを表す論理値を返します。
- {{domxref("WebGLRenderingContext.texImage2D()")}}
  - : 2D テクスチャ画像を指定します。
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
  - : 現在の `WebGLTexture` の部分矩形を更新します。
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
  - : テクスチャ引数を設定します。
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
  - : テクスチャ引数を設定します。

## プログラムとシェーダー

- {{domxref("WebGLRenderingContext.attachShader()")}}
  - : `WebGLShader` を `WebGLProgram` にアタッチします。
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
  - : 汎用頂点インデックスを名前付き属性変数にバインドします。
- {{domxref("WebGLRenderingContext.compileShader()")}}
  - : `WebGLShader` をコンパイルします。
- {{domxref("WebGLRenderingContext.createProgram()")}}
  - : `WebGLProgram` を作成します。
- {{domxref("WebGLRenderingContext.createShader()")}}
  - : `WebGLShader` を作成します。
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
  - : `WebGLProgram` を削除します。
- {{domxref("WebGLRenderingContext.deleteShader()")}}
  - : `WebGLShader` を削除します。
- {{domxref("WebGLRenderingContext.detachShader()")}}
  - : `WebGLShader` をでタッチします。
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
  - : `WebGLProgram` にアタッチされた `WebGLShader` オブジェクトのリストを返します。
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
  - : プログラムについての情報を返します。
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
  - : `WebGLProgram` オブジェクトについての情報ログを返します。
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
  - : シェーダーについての情報を返します。
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
  - : シェーダーの数値フォーマットの精度について記述した `WebGLShaderPrecisionFormat` オブジェクトを返します。
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
  - : `WebGLShader` についての情報ログを返します。
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
  - : `WebGLShader` のソースコードを文字列として返します。
- {{domxref("WebGLRenderingContext.isProgram()")}}
  - : 渡された `WebGLProgram` 有効かを表す論理値を返します。
- {{domxref("WebGLRenderingContext.isShader()")}}
  - : 渡された `WebGLShader` 有効かを表す論理値を返します。
- {{domxref("WebGLRenderingContext.linkProgram()")}}
  - : 渡された `WebGLProgram` オブジェクトをリンクします。
- {{domxref("WebGLRenderingContext.shaderSource()")}}
  - : `WebGLShader` にソースコードを設定します。
- {{domxref("WebGLRenderingContext.useProgram()")}}
  - : 指定した `WebGLProgram` を現在のレンダリングステートの一部として使用します。
- {{domxref("WebGLRenderingContext.validateProgram()")}}
  - : `WebGLProgram` を検証します。

## ユニフォームと属性

- {{domxref("WebGLRenderingContext.disableVertexAttribArray()")}}
  - : 指定された位置の頂点属性配列を無効にします。
- {{domxref("WebGLRenderingContext.enableVertexAttribArray()")}}
  - : 指定された位置の頂点属性配列を有効にします。
- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
  - : 有効な属性変数についての情報を返します。
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
  - : 有効なユニフォーム変数についての情報を返します。
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
  - : 属性変数のロケーションを返します。
- {{domxref("WebGLRenderingContext.getUniform()")}}
  - : 与えられたロケーションのユニフォーム変数の値を返します。
- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
  - : ユニフォーム変数のロケーションを返します。
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
  - : 指定された位置の頂点属性についての情報を返します。
- {{domxref("WebGLRenderingContext.getVertexAttribOffset()")}}
  - : 与えられた頂点配列のアドレスを返します。
  <!-- markdownlint-disable MD052 -- text in code block is misidentified as image -->
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/ja/docs/Web/API/WebGLRenderingContext/uniform)
  - : ユニフォーム変数の値を指定します。
- {{domxref("WebGLRenderingContext.uniformMatrix()", "WebGLRenderingContext.uniformMatrix[234]fv()")}}
  - : ユニフォーム変数の行列を指定します。
- {{domxref("WebGLRenderingContext.vertexAttrib()", "WebGLRenderingContext.vertexAttrib[1234]f[v]()")}}
  - : 汎用頂点属性の値を指定します。
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
  - : データフォーマットと頂点属性配列中の頂点属性のロケーションを指定します。

## バッファーへの描画

- {{domxref("WebGLRenderingContext.clear()")}}
  - : 指定されたバッファーを既定値でクリアします。
- {{domxref("WebGLRenderingContext.drawArrays()")}}
  - : プリミティブを配列データからレンダリングします。
- {{domxref("WebGLRenderingContext.drawElements()")}}
  - : プリミティブを要素配列データからレンダリングします。
- {{domxref("WebGLRenderingContext.finish()")}}
  - : 以前に呼び出されたコマンドが終了するまで処理をブロックします。
- {{domxref("WebGLRenderingContext.flush()")}}
  - : 可能な限り速くすべてのコマンドを実行し、バッファーコマンドを空にします。

## 色空間

- {{domxref("WebGLRenderingContext.drawingBufferColorSpace")}}
  - : WebGL 描画バッファーの色空間を指定します。
- {{domxref("WebGLRenderingContext.unpackColorSpace")}} {{Experimental_Inline}}
  - : テクスチャのインポート時に変換する色空間を指定します。

## 拡張機能の使用

WebGL 拡張機能の管理を行うメソッドです。

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
  - : サポートしている全ての WebGL拡張 を文字列の配列 ({{jsxref("Array")}}) で返します。
- {{domxref("WebGLRenderingContext.getExtension()")}}
  - : 拡張オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement")}}
