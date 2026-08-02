---
title: WebGL のベストプラクティス
slug: Web/API/WebGL_API/WebGL_best_practices
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("WebGL")}}

WebGL は複雑な API であり、その推奨される使用方法が直感的に分かりにくいことがよくあります。このページでは、あらゆるレベルの専門知識を持つユーザーに向けた推奨事項を取り上げ、すべきこと・すべきでないことを紹介するだけでなく、その理由についても詳しく解説しています。このドキュメントを参考に手法を選択すれば、ユーザーがどのブラウザーやハードウェアを使用しているかに関わらず、適切な方向に進んでいることを確認できます。

## WebGL のエラーを特定して解消する

アプリケーションは、 WebGL エラー（`getError` によって返されるもの）を一切発生させることなく実行する必要があります。すべての WebGL エラーは、説明的なメッセージ付きの JavaScript 警告としてウェブコンソールに報告されます。エラーが一定数（Firefox では 32 件）を超えると、WebGL は説明メッセージの表示を停止するため、デバッグが実に困難になります。

正しく構成されたページで発生するエラーは、 `OUT_OF_MEMORY` と `CONTEXT_LOST` のみです。

## 拡張機能が利用できることを確認する

ほとんどの WebGL 拡張機能の利用可否は、クライアントシステムによって異なります。WebGL 拡張機能を使用する際は、可能であれば、対応していない場合にも適切に対応し、それらの機能をオプションとして扱えるようにしてください。

以下の WebGL 1 拡張機能は対応が進んでおり、確実に利用可能です。

- ANGLE_instanced_arrays
- EXT_blend_minmax
- OES_element_index_uint
- OES_standard_derivatives
- OES_vertex_array_object
- WEBGL_debug_renderer_info
- WEBGL_lose_context

_(関連情報: [WebGL feature levels and % support](https://kdashg.github.io/misc/webgl/webgl-feature-levels.html))_

これらを WebGLRenderingContext にポリフィルするように検討しましょう。例えば、<https://github.com/kdashg/misc/blob/tip/webgl/webgl-v1.1.js> のようにします。

## システムの制限を理解する

拡張機能と同様に、自分のシステムの制限はクライアントのシステムとは異なります！自分のマシンで動作するからといって、シェーダー 1 つにつき 30 個のテクスチャサンプラーを使用することが可能だと思い込まないでください！

WebGLの最小要件はかなり低いです。実際には、事実上すべてのシステムが少なくとも以下の機能に対応しています。

```plain
MAX_CUBE_MAP_TEXTURE_SIZE: 4096
MAX_RENDERBUFFER_SIZE: 4096
MAX_TEXTURE_SIZE: 4096
MAX_VIEWPORT_DIMS: [4096,4096]
MAX_VERTEX_TEXTURE_IMAGE_UNITS: 4
MAX_TEXTURE_IMAGE_UNITS: 8
MAX_COMBINED_TEXTURE_IMAGE_UNITS: 8
MAX_VERTEX_ATTRIBS: 16
MAX_VARYING_VECTORS: 8
MAX_VERTEX_UNIFORM_VECTORS: 128
MAX_FRAGMENT_UNIFORM_VECTORS: 64
ALIASED_POINT_SIZE_RANGE: [1,100]
```

お使いのデスクトップPCでは 16k のテクスチャや、頂点シェーダーで 16 個のテクスチャユニットに対応しているかもしれませんが、他のほとんどのシステムでは対応しておらず、あなたにとって動作するコンテンツでも、それらのシステムでは動作しません！

## FBO アタッチメントのバインディングを不正な状態にすることを避ける

FBO のバインディングに変更を加えると、ほとんどの場合、そのフレームバッファの完全性が失われます。ホットフレームバッファはあらかじめ設定しておいてください。

Firefox では、about:config で設定項目 `webgl.perf.max-warnings` を `-1` に設定すると、FB の完全性無効化に関する警告を含むパフォーマンス警告を有効にすることができます。

### VAO アタッチメントの変更（vertexAttribPointer、disable/enableVertexAttribArray）を避ける

静的で変化しない VAO から描画を行う方が、描画コールごとに同じ VAO を変更するよりも高速です。変化しない VAO の場合、ブラウザーはフェッチ制限をキャッシュできますが、VAO が変化すると、ブラウザーはリミットの再検証と再計算を行わなければなりません。この処理にかかるオーバーヘッドは比較的低いですが、VAO を再利用することで `vertexAttribPointer` の呼び出し回数も減らせるため、容易に実施できる場合は行う価値があります。

## オブジェクトを速やかに削除する

ガベージコレクターやサイクルコレクターが、オブジェクトが孤立していることに気づいて破棄するのを待ってはいけません。実装側ではオブジェクトの生存状態を追跡しているため、API レベルでオブジェクトを「削除」しても、実際のオブジェクトを参照するハンドルが解放されるだけです（概念的には、オブジェクトへのハンドルの参照ポインタが解放されることになります）。オブジェクトが実装内で使用されなくなった時点で初めて、実際に解放されます。例えば、シェーダーオブジェクトに今後繰り返しアクセスする予定が全くない場合は、プログラムオブジェクトに添付した後、そのハンドルを削除するだけで十分です。

## コンテキストを積極的に破棄する

また、WebGL コンテキストの使用が確実に終了し、対象のキャンバスのレンダリング結果が不要になった場合は、`WEBGL_lose_context` 拡張機能を使用して、積極的に WebGL コンテキストを解放することを考えてみることを検討してください。なお、ページから離れる際にはこの処理をするのが最適ではありません。そのためだけに unload イベントハンドラーを追加しないでください。

## 結果を待つ時にフラッシュする

クエリーなどの結果を待つ場合や、レンダリングフレームの完了時には、`flush()` を呼び出してください。

Flush は、待機中のコマンドをさらにキューに入れるのを待ってから送信するのではなく、待機中のすべてのコマンドをキューから排出（フラッシュ）して実行するよう実装に指示します。

例えば、コンテキストの損失なく以下の処理を完了させることができない場合があります。

```js
sync = glFenceSync(GL_SYNC_GPU_COMMANDS_COMPLETE, 0);
glClientWaitSync(sync, 0, GL_TIMEOUT_IGNORED);
```

WebGL はデフォルトで SwapBuffers 関数を保有していないため、フラッシュを行うことでその不足分を補うことも可能です。

### `requestAnimationFrame` を使用しない場合は、`webgl.flush()` を使用する

RAF が使用されていない場合は、`webgl.flush()` を使用して、キューに入れられたコマンドの即時実行を促してください。

RAF の直後にフレーム境界が続くため、RAF を使用する場合は明示的な `webgl.flush()` は実際には必要ありません。

## 本番環境での API 呼び出しのブロックを避ける

`getError` や `getParameter` を含む特定の WebGL エントリーポイントは、呼び出しスレッド上で同期的なストールを引き起こします。基本的なリクエストでも最大 1 ミリ秒かかる場合がありますが、すべてのグラフィック処理が完了するのを待つ必要がある場合は、さらに時間がかかることもあります（ネイティブ OpenGL の `glFinish()` と同様の効果があります）。

本番環境のコードでは、このようなエントリーポイントの使用を避けることができます。特にブラウザーのメインスレッドでは、ページ全体（多くの場合、スクロールやブラウザー全体を含む）の動作がカクつく原因となる可能性があります。

- `getError()`: フラッシュが発生し、GPU プロセスからエラーを取得するために往復通信を行います。

  例えば、Firefox では、glGetError を調べるのは、割り当て（`bufferData`、`*texImage*`、`texStorage*`）の後だけであり、GL_OUT_OF_MEMORY エラーが発生していないかを確認するためです。

- `getShader/ProgramParameter()`、`getShader/ProgramInfoLog()`、およびシェーダー／プログラムに関するその他の `get` メソッド: シェーダーのコンパイル完了後にも実行されない場合、フラッシュ + シェーダーのコンパイル + ラウンドトリップが発生します。（下記の[並列シェーダーコンパイル](#シェーダーのコンパイルとプログラムのリンクを並列に実行する)も参照してください。）
- 一般的な `get*Parameter()`：フラッシュ + ラウンドトリップが発生する可能性があります。場合によっては、ラウンドトリップを避けることができますが、このことに頼っていないでください。
- `checkFramebufferStatus()`：フラッシュ + ラウンドトリップが発生する可能性があります。
- `getBufferSubData()`：通常は完了 + ラウンドトリップが発生します。（フェンスと組み合わせてREADバッファを使用する場合は問題ありません。下記 [async データ読み出し](#ブロッキングされない_async_データ読み取りを使用する)を参照してください。）
- CPU への `readPixels()`（つまり、UNPACK バッファーがバインドされていない場合）：完了＋ラウンドトリップが発生します。代わりに、async データ読み出しと組み合わせて GPU-GPU 間の `readPixels` を使用してください。

## 頂点属性 0 を常に配列として利用できるようにする

頂点属性 0 を配列として有効にせずに描画を行うと、デスクトップ OpenGL（macOS など）上で動作する際、ブラウザーに複雑なエミュレーションをするのが最適になります。これは、デスクトップ OpenGL では、頂点属性 0 が配列として有効になっていない場合、何も描画されないためです。`bindAttribLocation` を使用して頂点属性に位置 0 を強制的に割り当て、`enableVertexAttribArray(0)` を使用して配列有効化を行うことができます。

## ピクセルごとの VRAM 使用量を推定する

WebGL には、システム上のビデオメモリーの最大容量を問い合わせるための API が用意されていません。これは、そのようなクエリーが移植性に欠けるためです。とはいえ、アプリケーションは VRAM の使用状況を常に意識し、単に可能な限り多くのメモリーを割り当てるだけではいけません。

Google Maps チームが先駆けて導入した手法の一つに、ピクセル単位の VRAM 割り当てという概念があります。

1\) 1 つのシステム（例：具体的なデスクトップ PC やノート PC）について、アプリケーションが使用する VRAM の最大量を決定します。2) 最大化されたブラウザーウィンドウが網羅するピクセル数を算出します。例：`(window.innerWidth * devicePixelRatio) * (window.innerHeight * window.devicePixelRatio)` 3) 1 ピクセルあたりの VRAM 使用上限は、(1) を (2) で割った値であり、これは定数となります。

この定数は、一般的に、システム間で移植性があるはずです。モバイル端末は通常、大型モニターを備えた高性能なデスクトップマシンよりも画面が小さくなっています。信頼性の高い推定値を取得するためには、いくつかの対象システムでこの定数を再計算してください。

これで、アプリケーション内のすべての内部キャッシュ（WebGL バッファ、WebGL テクスチャなど）を、この定数に現在のブラウザーウィンドウがカバーするピクセル数を乗じて算出される最大サイズに従うように調整します。これには、例えばそれぞれのテクスチャが消費するバイト数を推定する必要があります。また、通常、ブラウザーウィンドウのサイズ変更に合わせて制限値を更新し、制限以上にある古いリソースを削除する必要があります。

アプリケーションの VRAM 使用量がこの上限以下に抑えることで、メモリ不足エラーやそれに関連付けられた動作の不安定さを避けることができます。

## より小さいバッファーへのレンダリングを考えてみる

品質と速度のバランスをとるための一般的（かつ簡単な）方法として、より小さいバックバッファーにレンダリングし、その結果をアップスケーリングするというものがあります。canvas.width と height を縮小し、canvas.style.width と height を一定のサイズに保つことを考えてみることを検討してみてください。

## 描画呼び出しのバッチ処理

描画呼び出しを「バッチ処理」して、より少ない数の大規模な描画呼び出しにまとめることで、一般的にパフォーマンスが改善されます。描画するスプライトが 1000 個ある場合は、単一の drawArrays() または drawElements() 呼び出しで処理するのが最適です。

不連続なオブジェクトを単一の drawArrays(TRIANGLE_STRIP) 呼び出しで描画する必要がある場合、「縮退三角形」を使用するのが一般的です。縮退三角形とは、面積を持たない三角形、つまり、複数の点がまったく同じ位置にある三角形のことです。これらの三角形は事実上スキップされるため、複数の描画呼び出しに分割することなく、前回の三角形ストリップとは独立した新しい三角形ストリップを開始することができます。

バッチ処理におけるもう 1 つの重要な手法が「テクスチャアトラス」です。これは、複数の画像を 1 つのテクスチャに、多くの場合チェッカーボード状に配置する手法です。テクスチャを変更するには描画呼び出しのバッチを分割する必要があるため、テクスチャアトラスを使用することで、より多くの描画呼び出しを、より少ない数の大きなバッチにまとめることができます。複数のテクスチャアトラスを参照するスプライトを、単一の描画呼び出しにまとめる方法を示した[この例](https://webglsamples.org/sprites/readme.html)をご覧ください。

## "#ifdef GL_ES" を避ける

WebGL シェーダーでは、`#ifdef GL_ES` を決して使用しないでください。WebGLでは、この条件は常に真となります。初期のサンプルコードではこれを使用していたものもありますが、必要ありません。

## 頂点シェーダーでの処理を推奨する

フラグメントシェーダーではなく、頂点シェーダーでできる限りの処理を行ってください。これは、1 回の描画呼び出しにつき、フラグメントシェーダーは一般的に頂点シェーダーよりもはるかに多くの回数実行されるためです。頂点で計算が可能であり、その後（`varying` を通じて）フラグメント間で補間するだけで済む処理は、パフォーマンスの大幅な向上につながります。（varying の補間処理はとても低コストであり、グラフィックパイプラインの固定機能ラスタライズフェーズによって自動的に行われます。）

例えば、テクスチャが適用されたサーフェスの単純なアニメーションは、テクスチャ座標の時間依存的な変換によって実現できます（最も単純な場合としては、テクスチャ座標の属性ベクトルに一様なベクトルを加算することが挙げられます）。視覚的に受け入れられる場合、パフォーマンスを向上させるために、フラグメントシェーダーではなく頂点シェーダーでテクスチャ座標を変換することも可能です。

よくある妥協案として、フラグメント（ピクセル）単位ではなく、頂点単位で一部の照明計算を行うことがあります。場合によっては、特に単純なモデルや頂点密度の高いモデルでは、この方法で十分な結果が得られます。

これとは逆に、モデルの頂点数がレンダリング出力のピクセル数よりも多い場合もあります。しかし、通常はこの問題の解決策として LOD メッシュが用いられ、頂点シェーダーからフラグメントシェーダーへ処理を移すことはほとんどありません。

## シェーダーのコンパイルとプログラムのリンクを並列に実行する

シェーダーのコンパイルやプログラムのリンクを順次実行したくなるものですが、多くのブラウザーでは、バックグラウンドスレッド上で並列にコンパイルやリンクを行うことが可能です。

次のようにする代わりに、

```js
function compileOnce(gl, shader) {
  if (shader.compiled) return;
  gl.compileShader(shader);
  shader.compiled = true;
}
for (const [vs, fs, prog] of programs) {
  compileOnce(gl, vs);
  compileOnce(gl, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
    console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
    console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
  }
}
```

次のようにすることを検討してください。

```js
function compileOnce(gl, shader) {
  if (shader.compiled) return;
  gl.compileShader(shader);
  shader.compiled = true;
}
for (const [vs, fs, prog] of programs) {
  compileOnce(gl, vs);
  compileOnce(gl, fs);
}
for (const [vs, fs, prog] of programs) {
  gl.linkProgram(prog);
}
for (const [vs, fs, prog] of programs) {
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
    console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
    console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
  }
}
```

## KHR_parallel_shader_compile を推奨する

ブラウザーが並列でコンパイルやリンクを行うことができるようにするパターンを記述しましたが、通常、`COMPILE_STATUS` や `LINK_STATUS` を調べると、コンパイルやリンクが完了するまで処理がブロックされてしまいます。この機能が利用できるブラウザーでは、[KHR_parallel_shader_compile](https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/) 拡張機能により、ノンブロッキングな `COMPLETION_STATUS` 問い合わせが提供されます。この拡張機能を有効にして使用することを推奨します。

Example usage:

```js
ext = gl.getExtension("KHR_parallel_shader_compile");
gl.compileProgram(vs);
gl.compileProgram(fs);
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);

// Store program in your data structure.
// Later, for example the next frame:

if (ext) {
  if (gl.getProgramParameter(prog, ext.COMPLETION_STATUS_KHR)) {
    // Check program link status; if OK, use and draw with it.
  }
} else {
  // Program linking is synchronous.
  // Check program link status; if OK, use and draw with it.
}
```

この手法は、すべてのアプリケーションで動作するとは限りません。例えば、レンダリングのためにプログラムを即座に利用できる必要があるアプリケーションなどでは動作しない可能性があります。とはいえ、そのバリエーションがどのように機能するかを考えてみてください。

## リンクに失敗した場合を除き、シェーダーのコンパイラー状態を調べない

シェーダーのコンパイル失敗を保証するものの、リンク時に先送りできないエラーはとてもわずかです。[ESSL3 仕様書](https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf)の「エラー処理」の項では、次のように言っています。

> 実装では、エラーはできるだけ早い段階で報告すべきですが、いずれの場合も以下の条件を満たさなければなりません。
>
> - glLinkProgram の呼び出し後に、語彙、文法、意味に関するすべての誤りが検出されていなければならない
> - 頂点シェーダーとフラグメントシェーダーの不一致によるエラー（リンクエラー）は、glLinkProgram の呼び出し後に検出しなければならない
> - リソース制限の超過によるエラーは、ドローコールまたは glValidateProgram の呼び出しの後に検出しなければならない
> - glValidateProgram の呼び出しでは、指定された現在の GL 状態において、プログラムオブジェクトに関連付けられたすべてのエラーを報告しなければならない。
>
> コンパイラーとリンカ間のタスクの割り当ては、実装に依存します。そのため、実装によっては、コンパイル時またはリンク時のいずれかで検出される可能性のあるエラーが数多くあります。

さらに、コンパイル状況のクエリーは同期呼び出しであるため、パイプライン処理が中断されます。

次のようにする代わりに、

```js
gl.compileShader(vs);
if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
  console.error(`vs compile failed: ${gl.getShaderInfoLog(vs)}`);
}

gl.compileShader(fs);
if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
  console.error(`fs compile failed: ${gl.getShaderInfoLog(fs)}`);
}

gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
  console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
}
```

次のようにすることを検討してください。

```js
gl.compileShader(vs);
gl.compileShader(fs);
gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
  console.error(`Link failed: ${gl.getProgramInfoLog(prog)}`);
  console.error(`vs info-log: ${gl.getShaderInfoLog(vs)}`);
  console.error(`fs info-log: ${gl.getShaderInfoLog(fs)}`);
}
```

## GLSL の精度アノテーションは正確につける

シェーダー間での essl300 の `int` の受け渡しを想定しており、その型を 32 ビットにする必要がある場合は、必ず `highp` を使用する必要があります。そうしないと、移植性の問題が発生します。（デスクトップでは動作しますが、Android では動作しません）

浮動小数点型のテクスチャを使用する場合、iOS では `highp sampler2D foo;` を使用する必要があります。そうしないと、非常に厄介なことに `lowp` のテクスチャサンプルが返されてしまいます！（最大±2.0 という範囲では、おそらく不十分でしょう）

### 暗黙のデフォルト値

頂点言語には、グローバルスコープのデフォルト精度に関する以下の事前宣言された文があります。

```glsl
precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
```

このフラグメント言語は、グローバルスコープで事前定義された以下のデフォルトの精度に関する文があります。

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```

### WebGL 1 では、フラグメントシェーダーで "highp float" に対応しているかどうかはオプション

フラグメントシェーダーで無条件に `highp` 精度を使用すると、一部の古いモバイル端末ではコンテンツが正常に動作しなくなります。

代わりに `mediump float` を使用することができますが、精度の不足により（特にモバイルシステムでは）レンダリングが破損することがよくあるため、注意が必要です。ただし、一般的なデスクトップコンピューターでは、その破損は目に見えないでしょう。

必要な精度が分かっている場合は、`getShaderPrecisionFormat()` を使用することで、システムが対応している精度を指示します。

`highp float` が利用できる場合、`GL_FRAGMENT_PRECISION_HIGH` は `1` として定義されます。

「常に最高の精度を要求する」場合の良いパターン：

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

### ESSL100 の最小要件 (WebGL 1)

| `float`   | think               | 範囲          | ゼロより上の最小値 | 精度           |
| --------- | ------------------- | ------------- | ------------------ | -------------- |
| `highp`   | float24\*           | (-2^62, 2^62) | 2^-62              | 2^-16 relative |
| `mediump` | IEEE float16        | (-2^14, 2^14) | 2^-14              | 2^-10 relative |
| `lowp`    | 10-bit signed fixed | (-2, 2)       | 2^-8               | 2^-8 absolute  |

| `int`     | think | 範囲          |
| --------- | ----- | ------------- |
| `highp`   | int17 | (-2^16, 2^16) |
| `mediump` | int11 | (-2^10, 2^10) |
| `lowp`    | int9  | (-2^8, 2^8)   |

_\*float24: 符号ビット、7 ビットの指数部、16 ビットの仮数部。_

### ESSL300 の最小要件 (WebGL 2)

| `float`   | think               | 範囲            | ゼロより上の最小値 | 精度           |
| --------- | ------------------- | --------------- | ------------------ | -------------- |
| `highp`   | IEEE float32        | (-2^126, 2^127) | 2^-126             | 2^-24 relative |
| `mediump` | IEEE float16        | (-2^14, 2^14)   | 2^-14              | 2^-10 relative |
| `lowp`    | 10-bit signed fixed | (-2, 2)         | 2^-8               | 2^-8 absolute  |

| `(u)int`  | think    | `int` の範囲  | `unsigned int` の範囲 |
| --------- | -------- | ------------- | --------------------- |
| `highp`   | (u)int32 | [-2^31, 2^31] | [0, 2^32]             |
| `mediump` | (u)int16 | [-2^15, 2^15] | [0, 2^16]             |
| `lowp`    | (u)int9  | [-2^8, 2^8]   | [0, 2^9]              |

## 自分自身で作成するよりも、組み込み関数を使うことを推奨

`dot`、`mix`、`normalize` といった組み込み関数を推奨します。独自の実装が、置き換える組み込み関数と同等の速度で実行する場合もありますが、それを期待すべきではありません。ハードウェアには、組み込み関数向けに高度に最適化された、あるいは専用の命令を持つことができることが多く、コンパイラーが、ユーザーが作成した組み込み関数の代替実装を、組み込み関数の特別なコードパスに確実に置き換えることはできません。

## 三次元で表示されるテクスチャにはすべてミップマップを使用する

迷った場合は、テクスチャのアップロード後にもう一度 `generateMipmaps()` を呼び出してください。ミップマップはメモリー消費が少なく（オーバーヘッドはわずか 30%）、三次元空間でテクスチャが「ズームアウト」されたり、遠方での表示時に一般的に縮小されたりする場合、さらには立方体マップの場合でも、多くの場合、大幅なパフォーマンス向上をもたらします！

テクスチャ画像が小さいほど、テクスチャフェッチキャッシュの局所性が向上するため、サンプリングが高速になります。ミップマップ化されていないテクスチャでズームアウトすると、隣接するピクセルがもはや隣接するテクセルからサンプリングできなくなりましたので、テクスチャフェッチキャッシュの局所性が損なわれてしまいます！

ただし、「ズームアウト」されることのない二次元リソースについては、ミップマップのために 30% のメモリーオーバーヘッドを負担する必要はありません：

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Defaults to NEAREST_MIPMAP_LINEAR, for mipmapping!
```

（WebGL 2 では、`texStorage` を `levels=1` で使用してください）

注意点として、`generateMipmaps` は、テクスチャをフレームバッファにアタッチした場合にレンダリングが可能である場合にのみ機能します（仕様書ではこれを「カラーレンダリング可能なフォーマット」と呼んでいます）。例えば、システムが浮動小数点テクスチャに対応していても、浮動小数点へのレンダリングに対応していない場合、浮動小数点フォーマットに対して `generateMipmaps` は失敗します。

## float テクスチャへのレンダリングが可能だと想定しない

RGBA32F テクスチャに対応するシステムは数多く存在しますが、これをフレームバッファに添付すると、`checkFramebufferStatus()` から `FRAMEBUFFER_INCOMPLETE_ATTACHMENT` が取得されます。お使いのシステムでは動作するかもしれませんが、ほとんどのモバイルシステムでは対応していません！

WebGL 1 では、`EXT_color_buffer_half_float` および `WEBGL_color_buffer_float` エクステンションを使用して、それぞれ float16 および float32 に対する `WEBGL_color_buffer_float` の対応状況を調べてください。

WebGL 2 では、`EXT_color_buffer_float` は float32 および float16 の両方に対する float テクスチャへのレンダリングの対応状況を調べてください。`EXT_color_buffer_half_float` は、float16 テクスチャへのレンダリングのみに対応するシステムに存在します。

### Render-to-float32 は、必ずしも float32 ブレンドを意味するわけではない

お使いのシステムでは動作しますが、他の多くのシステムでは動作しません。可能であれば使用を避けてください。対応状況を調べるには、`EXT_float_blend` 拡張機能があるかどうかを確認してください。

float16-blending に常に対応しています。

## 一部の形式（RGB など）はエミュレートされることがある

いくつかの形式（特に 3 チャンネル形式）はエミュレートされています。例えば、RGB32F は多くの場合、RGBA32F である場合が多く、Luminance8 は多くの場合、RGBA8 である場合があります。特に RGB8 は、アルファチャンネルのマスク処理やブレンド関数のパッチ適用にかなりのオーバーヘッドがかかるため、意外にも処理速度が遅くなりがちです。パフォーマンスを向上させるためには、RGBA8 を使用し、アルファチャンネルは自分で無視することを推奨します。

## 処理負荷が高くなる可能性があるため alpha:false の使用を避ける

コンテキストの作成時に `alpha:false` を指定すると、ブラウザーは WebGL でレンダリングされたキャンバスを不透明なものとして合成し、アプリケーションがフラグメントシェーダーで書き込んだアルファ値を無視します。一部のプラットフォームでは、残念ながらこの機能を利用するとパフォーマンスが大幅に低下してしまいます。RGB バックバッファーを RGBA サーフェスの上でエミュレートする必要がある場合があり、RGBA サーフェスにアルファチャンネルがないかのようにアプリケーションに認識させるための OpenGL API で利用できる手法はいくつかしかありません。[調査の結果](https://crbug.com/1045643)、これらの手法はすべて、影響を受けるプラットフォームにおいて、パフォーマンスへの影響がほぼ同等であることが分かっています。

アルファ合成が要求されるアプリケーションを含め、ほとんどのアプリケーションは、アルファチャンネルに `1.0` を生成するように構成することができます。主な例外は、ブレンディング関数で出力先アルファを必要とするアプリケーションです。可能であれば、`alpha:false` を使用するのではなく、この方法を採用するのが最適です。

## 圧縮されたテクスチャ書式を検討する

JPG や PNG は一般的にネットワーク経由での転送サイズが小さい一方、GPU 圧縮されたテクスチャ形式は GPU メモリー上でのサイズが小さく、サンプリングも高速です（これにより、モバイル端末では貴重なテクスチャメモリーの帯域幅を縮小できます）。ただし、圧縮されたテクスチャ形式は JPG よりも画質が劣り、一般的に色情報（法線や座標などではない）にのみ受け入れられます。

残念ながら、普遍的に対応している単一のフォーマットはありません。ただし、どのシステムにも以下のうち少なくとも 1 つはあります：

- WEBGL_compressed_texture_s3tc (デスクトップ)
- WEBGL_compressed_texture_etc1 (Android)
- WEBGL_compressed_texture_pvrtc (iOS)

WebGL 2 は、以下の要素を組み合わせることで、幅広い対応状況を実現しています。

- WEBGL_compressed_texture_s3tc (デスクトップ)
- WEBGL_compressed_texture_etc (mobile)

WEBGL_compressed_texture_astc は、画質が高く、圧縮率も高いですが、新しいハードウェアでのみ対応しています。

### Basis Universal テクスチャ圧縮形式/ライブラリー

Basis Universal は、以上述べた課題のいくつかを解決します。このライブラリーは、読み込み時に効率的にフォーマットを変換する JavaScript ライブラリーを通じて、単一の圧縮テクスチャファイルで、すべての一般的な圧縮テクスチャフォーマットに対応する方法を提供します。また、追加の圧縮機能により、Basis Universal の圧縮テクスチャファイルは、ネットワーク経由で転送される通常の圧縮テクスチャよりもはるかにサイズが小さくなり、JPEG に近いレベルになります。

<https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md>

## 深度およびステンシル書式のメモリー使用量

多くの端末において、深度およびステンシルのアタッチメントとフォーマットは実際には切り離せない関係にあります。DEPTH_COMPONENT24 や STENCIL_INDEX8 を要求しても、実際には裏側で D24X8 や X24S8 といった 32bpp フォーマットが取得されることが多くの場合あります。深度およびステンシルのフォーマットのメモリー使用量は、4 つのバイト単位で丸められるものと想定してください。

## texImage/texSubImage のアップロード（特に動画）により、パイプラインのフラッシュを発生させる可能性がある

DOM 要素からのテクスチャのアップロードのほとんどは、内部でGLプログラムを一時的に切り替える処理パスを伴い、パイプラインのフラッシュを発生させます。（パイプラインは[Vulkan](https://docs.vulkan.org/spec/latest/chapters/pipelines.html)などで明示的に定義されていますが、OpenGLやWebGLでは裏側で暗黙的に扱われています。パイプラインとは、おおむねシェーダープログラム、深度／ステンシル／マルチサンプル／ブレンド／ラスタライズ状態からなるタプルです）

WebGL では、

```glsl
    …
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    drawArrays()
    …
```

ブラウザーの舞台裏では、

```glsl
    …
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_transform_prog)
<pipeline flush>
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
        +useProgram(prog1)
<pipeline flush>
    drawArrays()
    …
```

描画が始まる前に、あるいは少なくとも各工程の合間にアップロードするのが最適です。

WebGL では、

```glsl
    …
    bindTexture(webgl_texture)
    texImage2D(HTMLVideoElement)
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    …
```

ブラウザーの舞台裏では、

```glsl
    …
    bindTexture(webgl_texture)
    -texImage2D(HTMLVideoElement):
        +useProgram(_internal_tex_transform_prog)
<pipeline flush>
        +bindFramebuffer(webgl_texture._internal_framebuffer)
        +bindTexture(HTMLVideoElement._internal_video_tex)
        +drawArrays() // y-flip/colorspace-transform/alpha-(un)premultiply
        +bindTexture(webgl_texture)
        +bindFramebuffer(target)
    useProgram(prog1)
<pipeline flush>
    bindFramebuffer(target)
    drawArrays()
    bindTexture(webgl_texture)
    drawArrays()
    …
```

## texStorage を使用してテクスチャを作成する

WebGL 2.0の`texImage*` APIでは、それぞれのミップレベルを個別に、任意のサイズで定義することができます。ミップサイズの不一致であっても、描画時まではエラーとはみなされません。つまり、テクスチャがまず描画されるまでは、ドライバーが GPU メモリー内でそのテクスチャを実際に準備することは可能ではありません。

さらに、一部のドライバでは、たとえ単一のレベルだけが必要であっても、mip-chain 全体を無条件に割り当ててしまうことがあります（メモリー使用量が 30% 増加！）。

したがって、WebGL 2 でのテクスチャには `texStorage` と `texSubImage` を推奨します。

## invalidateFramebuffer を使用する

二度と使用しないデータを保存することは、特にモバイル端末で一般的なタイルレンダリング方式の GPU において、大きなオーバーヘッドとなる可能性があります。フレームバッファアタッチメントのコンテンツの使用が終了したら、ドライバーに後で使用するためにデータを格納させることで時間を無駄にさせるのではなく、WebGL 2.0 の `invalidateFramebuffer` を使用してデータを破棄してください。具体的な場合、DEPTH/STENCIL やマルチサンプリングのアタッチメントは、`invalidateFramebuffer` を使用するのに最適な対象です。

## ブロッキングされない async データ読み取りを使用する

`readPixels` や `getBufferSubData` といった操作は通常、同期的な操作ですが、同じ API を使用することで、ブロッキングされず非同期のデータ読み出しを実現できます。WebGL 2 におけるこの手法は、OpenGL の手法  [Async downloads in blocking APIs](https://kdashg.github.io/misc/async-gpu-downloads.html) と類似しています。

```js
function clientWaitAsync(gl, sync, flags, intervalMs) {
  return new Promise((resolve, reject) => {
    function test() {
      const res = gl.clientWaitSync(sync, flags, 0);
      if (res === gl.WAIT_FAILED) {
        reject(new Error("clientWaitSync failed"));
        return;
      }
      if (res === gl.TIMEOUT_EXPIRED) {
        setTimeout(test, intervalMs);
        return;
      }
      resolve();
    }
    test();
  });
}

async function getBufferSubDataAsync(
  gl,
  target,
  buffer,
  srcByteOffset,
  dstBuffer,
  /* optional */ dstOffset,
  /* optional */ length,
) {
  const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
  gl.flush();

  await clientWaitAsync(gl, sync, 0, 10);
  gl.deleteSync(sync);

  gl.bindBuffer(target, buffer);
  gl.getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length);
  gl.bindBuffer(target, null);

  return dstBuffer;
}

async function readPixelsAsync(gl, x, y, w, h, format, type, dest) {
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
  gl.bufferData(gl.PIXEL_PACK_BUFFER, dest.byteLength, gl.STREAM_READ);
  gl.readPixels(x, y, w, h, format, type, 0);
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);

  await getBufferSubDataAsync(gl, gl.PIXEL_PACK_BUFFER, buf, 0, dest);

  gl.deleteBuffer(buf);
  return dest;
}
```

## `devicePixelRatio` と高 DPI レンダリング

`devicePixelRatio !== 1.0` を処理するのは厄介です。一般的な手法として `canvas.width = width * devicePixelRatio` を設定する方法がありますが、Windows での UI 変倍や、すべてのプラットフォームでのズーム操作などでよく見られるように、`devicePixelRatio` の値が整数でない場合、この手法ではモアレノイズが発生します。

その代わりに、CSSの`top`/`bottom`/`left`/`right`に整数以外の値を使用することで、キャンバスを端末の整数座標にかなり確実に「事前スナップ」させることができます。

デモ: [端末ピクセルへの事前スナップ](https://kdashg.github.io/misc/webgl/device-pixel-presnap.html)

## ResizeObserver と 'device-pixel-content-box'

[対応ブラウザー](/ja/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize#browser_compatibility)では、`ResizeObserver` を `"device-pixel-content-box"` と組み合わせて使用することで、要素の実際の{{glossary("device pixel", "デバイスピクセル")}}サイズを含むコールバックを要求することができます。これを使用することで、非同期でありながら正確な関数を作成することができます。

```js
function getDevicePixelSize(elem) {
  return new Promise((resolve) => {
    const observer = new ResizeObserver(([cur]) => {
      if (!cur) {
        throw new Error(
          `device-pixel-content-box not observed for elem ${elem}`,
        );
      }
      const devSize = cur.devicePixelContentBoxSize;
      const ret = {
        width: devSize[0].inlineSize,
        height: devSize[0].blockSize,
      };
      resolve(ret);
      observer.disconnect();
    });
    observer.observe(elem, { box: "device-pixel-content-box" });
  });
}
```

## 可能な場合は `WEBGL_provoking_vertex` を使用する

頂点を三角形や直線などのプリミティブに組み立てる際、 OpenGL の規約では、プリミティブの最後の頂点が「プロヴォーキング頂点」とみなされます。これは、ESSL300 (WebGL 2) で `flat` 頂点属性補間処理を使用する場合に関連します。この場合、プロヴォーキング頂点の属性値が、そのプリミティブのすべての頂点に対して使用されます。

現在、多くのブラウザーの WebGL 実装は、OpenGL とは異なるグラフィック API を基盤としており、これらの API の中には、描画コマンドの開始頂点として最初の頂点を使用するものもあります。OpenGL の開始頂点に関する規約をエミュレートすることは、こうした API の一部において、計算負荷が高くなる可能性があります。

このため、[WEBGL_provoking_vertex](https://registry.khronos.org/webgl/extensions/WEBGL_provoking_vertex/) 拡張機能が導入されました。WebGL の実装がこの拡張機能を公開している場合、これはアプリケーションに対して、規約を `FIRST_VERTEX_CONVENTION_WEBGL` に変更することでパフォーマンスを改善するというヒントとなります。フラットシェーディングを使用するアプリケーションでは、この拡張機能の有無を調べ、利用できる場合はこれを使用することを強く推奨します。なお、これにはアプリケーションの頂点バッファーやシェーダーの変更が要求される場合があります。
