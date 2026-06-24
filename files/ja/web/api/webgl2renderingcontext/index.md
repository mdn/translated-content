---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
l10n:
  sourceCommit: 72a2131decd44410a5c2acb9d4d5c1c7c6340e6a
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

**WebGL2RenderingContext** インターフェイスは、OpenGL ES 3.0 のレンダリングコンテキストを HTML の {{HTMLElement("canvas")}} 要素の描画領域に対して提供します。

このインターフェイスのオブジェクトを取得するには、{{domxref("HTMLCanvasElement.getContext()", "getContext()")}} を `<canvas>` 要素に対して呼び出し、引数として "webgl2" を提供してください。

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl2");
```

> [!NOTE]
> WebGL 2 は WebGL 1 の拡張版です。`WebGL2RenderingContext` インターフェイスは、{{domxref("WebGLRenderingContext")}} インターフェイスのすべてのメンバーを実装しています。WebGL 1 コンテキストのメソッドの中には、WebGL 2 コンテキストで使用する場合、追加の値を受け入れることができるものがあります。この点については、WebGL 1 のリファレンスページで探すことができます。

[WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)には、WebGL を始めるための詳しい情報、サンプル、およびリソースが掲載されています。

## 定数

[WebGL 定数](/ja/docs/Web/API/WebGL_API/Constants)ページを参照してください。

## 状態情報

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
  - : 指定された `target` のインデックス付けされた値を返します。

## バッファー

- {{domxref("WebGL2RenderingContext.bufferData()")}}
  - : バッファーオブジェクトのデータストアを初期化して作成します。
- {{domxref("WebGL2RenderingContext.bufferSubData()")}}
  - : バッファーオブジェクトのデータストアのサブセットを更新します。
- {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}
  - : あるバッファーのデータの一部を、別のバッファーにコピーします。
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}
  - : バッファーからデータを読み取り、{{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} へ書き出します。

## フレームバッファー

- {{domxref("WebGL2RenderingContext.blitFramebuffer()")}}
  - : 読み取り用フレームバッファーから描画用フレームバッファーへ、ピクセルをブロックで転送します。
- {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}}
  - : テクスチャを単一の層でフレームバッファーに添付します。
- {{domxref("WebGL2RenderingContext.invalidateFramebuffer()")}}
  - : フレームバッファー内に添付されたコンテンツを無効化します。
- {{domxref("WebGL2RenderingContext.invalidateSubFramebuffer()")}}
  - : フレームバッファー内に添付されたコンテンツの一部を無効化します。
- {{domxref("WebGL2RenderingContext.readBuffer()")}}
  - : 色バッファーをピクセルのソースとして選択します。

## レンダーバッファー

- {{domxref("WebGL2RenderingContext.getInternalformatParameter()")}}
  - : 内部形式に対する実装依存の対応状況に関する情報を返します。
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}
  - : レンダーバッファーオブジェクトのデータストアを作成して初期化し、使用するサンプル数を指定することができるようにします。

## テクスチャ

- {{domxref("WebGL2RenderingContext.texStorage2D()")}}
  - : 二次元テクスチャのすべての保存レベルを指定します。
- {{domxref("WebGL2RenderingContext.texStorage3D()")}}
  - : 三次元テクスチャまたは二次元配列テクスチャのすべてのレベルを指定します。
- {{domxref("WebGL2RenderingContext.texImage3D()")}}
  - : 三次元テクスチャ画像を指定します。
- {{domxref("WebGL2RenderingContext.texSubImage3D()")}}
  - : 現在の三次元テクスチャのサブ矩形を指定します。
- {{domxref("WebGL2RenderingContext.copyTexSubImage3D()")}}
  - : 現在の [`WebGLFramebuffer`](/ja/docs/Web/API/WebGLFramebuffer) から、既存の三次元テクスチャのサブイメージにピクセルをコピーします。
- {{domxref("WebGL2RenderingContext.compressedTexImage3D")}}
  - : 圧縮形式の三次元テクスチャ画像を指定します。
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
  - : 圧縮形式のテクスチャ画像に対して、三次元の部分矩形を指定します。

## プログラムとシェーダー

- {{domxref("WebGL2RenderingContext.getFragDataLocation()")}}
  - : 色数値とユーザー定義の可変出力変数との対応関係を返します。

## ユニフォームと属性

- [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/ja/docs/Web/API/WebGL2RenderingContext/uniform)
  - : ユニフォーム変数に値を指定するメソッドです。
- {{domxref("WebGL2RenderingContext.uniformMatrix()", "WebGL2RenderingContext.uniformMatrix[234]x[234]fv()")}}
  - : ユニフォーム変数に対する行列値を指定するメソッドです。
- {{domxref("WebGL2RenderingContext.vertexAttribI()", "WebGL2RenderingContext.vertexAttribI4[u]i[v]()")}}
  - : 汎用頂点属性に対して整数値を指定するメソッドです。
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
  - : 頂点属性配列における整数データの書式化および頂点属性の配置を指定します。

## 色空間

- {{domxref("WebGL2RenderingContext.drawingBufferColorSpace")}}
  - : WebGL 描画バッファーの色空間を指定します。
- {{domxref("WebGL2RenderingContext.unpackColorSpace")}}
  - : テクスチャをインポートする際に変換する色空間を指定します。

## 描画バッファー

- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
  - : {{domxref("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} および {{domxref("WebGL2RenderingContext.drawElementsInstanced()", "gl.drawElementsInstanced()")}} によってプリミティブの複数のインスタンスをレンダリングする際、汎用頂点属性の処理順序を変更します。
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
  - : 配列データからプリミティブを描画します。さらに、要素の範囲に対して複数のインスタンスを実行することも可能です。
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
  - : 配列データからプリミティブを描画します。さらに、一連の要素に対して複数のインスタンスを実行することも可能です。
- {{domxref("WebGL2RenderingContext.drawRangeElements()")}}
  - : 指定された範囲の配列データからプリミティブを描画します。
- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
  - : 描画されるカラーバッファのリストを指定します。
- {{domxref("WebGL2RenderingContext.clearBuffer()", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
  - : 現在バインドされているフレームバッファーからバッファーをクリアします。

## 問い合わせオブジェクト

{{domxref("WebGLQuery")}} オブジェクトと共に動作するメソッドです。

- {{domxref("WebGL2RenderingContext.createQuery()")}}
  - : 新しい {{domxref("WebGLQuery")}} オブジェクトを作成します。
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
  - : 指定された {{domxref("WebGLQuery")}} オブジェクトを削除します。
- {{domxref("WebGL2RenderingContext.isQuery()")}}
  - : 指定されたオブジェクトが有効な {{domxref("WebGLQuery")}} オブジェクトである場合、`true` を返します。
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
  - : 非同期問い合わせを開始します。
- {{domxref("WebGL2RenderingContext.endQuery()")}}
  - : 非同期問い合わせの終了を示します。
- {{domxref("WebGL2RenderingContext.getQuery()")}}
  - : 指定されたターゲットの {{domxref("WebGLQuery")}} オブジェクトを返します。
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}
  - : 問い合わせに関する情報を返します。

## サンプラーオブジェクト

- {{domxref("WebGL2RenderingContext.createSampler()")}}
  - : 新しい {{domxref("WebGLSampler")}} オブジェクトを作成します。
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
  - : 指定された {{domxref("WebGLSampler")}} オブジェクトを削除します。
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
  - : 指定された {{domxref("WebGLSampler")}} をテクスチャユニットにバインドします。
- {{domxref("WebGL2RenderingContext.isSampler()")}}
  - : 指定されたオブジェクトが有効な {{domxref("WebGLSampler")}} オブジェクトである場合、`true` を返します。
- {{domxref("WebGL2RenderingContext.samplerParameter()", "WebGL2RenderingContext.samplerParameter[if]()")}}
  - : サンプラー引数を設定します。
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}
  - : サンプラー引数の情報を返します。

## 同期オブジェクト

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
  - : 新しい {{domxref("WebGLSync")}} オブジェクトを生成し、それを GL コマンドストリームに挿入します。
- {{domxref("WebGL2RenderingContext.isSync()")}}
  - : 渡されたオブジェクトが有効な {{domxref("WebGLSync")}} オブジェクトである場合、`true` を返します。
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
  - : 指定された {{domxref("WebGLSync")}} オブジェクトを削除します。
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
  - : {{domxref("WebGLSync")}} オブジェクトがシグナル状態になるか、指定されたタイムアウト時間が経過するまで待機します。
- {{domxref("WebGL2RenderingContext.waitSync()")}}
  - : 直ちに返りますが、指定された {{domxref("WebGLSync")}} オブジェクトにシグナルが送信されるまで、GL サーバーで待ちます。
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}
  - : {{domxref("WebGLSync")}} オブジェクトの引数情報を返します。

## 座標変換フィードバック

- {{domxref("WebGL2RenderingContext.createTransformFeedback()")}}
  - : {{domxref("WebGLTransformFeedback")}} オブジェクトを作成し初期化します。
- {{domxref("WebGL2RenderingContext.deleteTransformFeedback()")}}
  - : 指定された {{domxref("WebGLTransformFeedback")}} オブジェクトを削除します。
- {{domxref("WebGL2RenderingContext.isTransformFeedback()")}}
  - : 渡されたオブジェクトが有効な {{domxref("WebGLTransformFeedback")}} オブジェクトである場合、`true` を返します。
- {{domxref("WebGL2RenderingContext.bindTransformFeedback()")}}
  - : 渡された {{domxref("WebGLTransformFeedback")}} オブジェクトを、現在の GL 状態にバインドします。
- {{domxref("WebGL2RenderingContext.beginTransformFeedback()")}}
  - : 座標変換フィードバック操作を開始します。
- {{domxref("WebGL2RenderingContext.endTransformFeedback()")}}
  - : 座標変換フィードバック操作を終了します。
- {{domxref("WebGL2RenderingContext.transformFeedbackVaryings()")}}
  - : {{domxref("WebGLTransformFeedback")}} バッファーに記録する値を指定します。
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}
  - : {{domxref("WebGLTransformFeedback")}} バッファー内の可変変数に関する情報を返します。
- {{domxref("WebGL2RenderingContext.pauseTransformFeedback()")}}
  - : 座標変換フィードバック操作を一時停止します。
- {{domxref("WebGL2RenderingContext.resumeTransformFeedback()")}}
  - : 座標変換フィードバック操作を再開します。

## ユニフォームバッファーオブジェクト

- {{domxref("WebGL2RenderingContext.bindBufferBase()")}}
  - : 指定された {{domxref("WebGLBuffer")}} を、指定されたバインディングポイント (`target`) の指定された `index` にバインドします。
- {{domxref("WebGL2RenderingContext.bindBufferRange()")}}
  - : 指定された {{domxref("WebGLBuffer")}} の範囲を、指定されたバインディングポイント (`target`) の指定された `index` にバインドします。
- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
  - : {{domxref("WebGLProgram")}} 内の複数のユニフォームのインデックスを取得します。
- {{domxref("WebGL2RenderingContext.getActiveUniforms()")}}
  - : {{domxref("WebGLProgram")}} 内のアクティブなユニフォームに関する情報を取得します。
- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
  - : {{domxref("WebGLProgram")}} 内のユニフォームブロックのインデックスを取得します。
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockParameter()")}}
  - : {{domxref("WebGLProgram")}} 内のアクティブなユニフォームブロックに関する情報を取得します。
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockName()")}}
  - : {{domxref("WebGLProgram")}}内の指定された位置にある、アクティブなユニフォームブロックの名前を取得します。
- {{domxref("WebGL2RenderingContext.uniformBlockBinding()")}}
  - : アクティブなユニフォームブロックにバインディングポイントを代入します。

## 頂点配列オブジェクト

{{domxref("WebGLVertexArrayObject")}} (VAO) オブジェクトで共に動作するメソッドです。

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - : 新しい {{domxref("WebGLVertexArrayObject")}} を作成します。
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - : 指定された {{domxref("WebGLVertexArrayObject")}} を削除します。
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - : 渡されたオブジェクトが有効な {{domxref("WebGLVertexArrayObject")}} オブジェクトである場合、`true` を返します。
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
  - : 指定された {{domxref("WebGLVertexArrayObject")}} をこのバッファーにバインドします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement")}}
- {{domxref("WebGLRenderingContext")}}
