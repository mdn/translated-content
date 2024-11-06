---
title: WebGL でのテクスチャの使用
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: 5a651fade3a92110761d2fb613d0e4f6da47826e
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

これで、サンプルプログラムに回転する 3D 立方体ができたので、単色で塗りつぶされている立方体の表面にテクスチャを割り当ててみましょう。

## テクスチャの読み込み

始めに、テクスチャを読み込むコードを追加します。今回は単一のテクスチャを用いて、そのテクスチャを立方体の全 6 面に貼り付けますが、テクスチャがいくつある場合でも同じ方法が適用できます。

> [!NOTE]
> テクスチャの読み込みは[クロスドメインのルール](/ja/docs/Web/HTTP/CORS)に従うことへの注意が重要です。すなわち、コンテンツが CORS で認可されているサイトからのみ、テクスチャを読み込むことができます。詳しくは以下の[ドメインをまたぐテクスチャ](#ドメインをまたぐテクスチャ)を参照してください。

> [!NOTE]
> これら 2 つの関数を "webgl-demo.js" スクリプトに追加しましょう。

```js
//
// テクスチャを初期化して画像を読み込みます。
// 画像の読み込みが完了したら、テクスチャにコピーします。
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 画像はインターネットでダウンロードする必要があるため、
  // 準備ができるまで少し時間がかかることがあります。
  // それまではテクスチャにピクセルを 1 つだけ入れて、すぐに
  // 使用できるようにしておきます。画像のダウンロードが完了
  // したら、画像のコンテンツでテクスチャを更新します。
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

  const image = new Image();
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image,
    );

    // WebGL1 は画像の大きさが 2 のべき乗であるかどうかで
    // 要求されるものが異なるので、画像の両方の軸が 2 の
    // べき乗かどうかを調べます。
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // 2 のべき乗なので、 mips を作成します。
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // 2 のべき乗ではないので、 mips をオフにして、
      // エッジにクランプするようにラッピングを設定します。
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}
```

`loadTexture()` ルーチンは WebGL の {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}} 関数を呼び出して WebGL テクスチャオブジェクト `texture` を作成することから始めます。その後、{{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}を使用して単一の青いピクセルをアップロードします。たとえ画像をダウンロードするのにいくつか時間がかかったとしても、これによってテクスチャは青一色としてすぐに使えるようになります。

画像ファイルからテクスチャを読み込むために、 `Image` オブジェクトを作成し、 `src` にテクスチャとして使用したい画像の URL を割り当てています。 `image.onload` に割り当てる関数は画像のダウンロードが完了すると呼び出されます。この点で、テクスチャのソースを画像として使用して、今回の {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}} を再び呼び出します。その後、テクスチャのフィルタリングとラッピングを、ダウンロードした画像の大きさが、どちらの次元も 2 のべき乗であるかどうかに基づいて設定します。

WebGL1 では、 2 のべき乗でない大きさのテクスチャではフィルタリングが `NEAREST` と `LINEAR` に設定されたしか使用することができず、それらのためにミップマップを生成することはできません。また、ラッピングモードも `CLAMP_TO_EDGE` に設定する必要があります。一方、テクスチャが 2 次元とも 2 のべき乗の大きさの場合、 WebGL はより高品質なフィルタリングを行うことができ、ミップマップを使用し、ラッピングモードを `REPEAT` または `MIRRORED_REPEAT` に設定することができます。

繰り返されるテクスチャの例としては、数個のレンガの画像をタイル状に並べ、レンガの壁を覆うものがあります。

ミップマッピングや UV リピートは、 {{domxref("WebGLRenderingContext.texParameter()", "texParameteri()")}} で無効化できます。これにより、ミップマッピング、 UV ラッピング、 UV タイリング、および機器がテクスチャをどのように扱うかの制御ができなくなる代わりに、 NPOT （2 のべき乗ではない）テクスチャが利用できるようになります。

```js
// gl.LINEAR の代わりに gl.NEAREST も可能。ミップマップは不可
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// S 座標のラッピング（繰り返し）を禁止
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// T 座標のラッピング（繰り返し）を禁止
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

繰り返しますが、これらの引数を付加すると、 WebGL デバイスは自動的に（対応する最大サイズまでの）任意の解像度のテクスチャを受け入れます。上記の構成を行わないと、 WebGL は NPOT テクスチャのすべてのサンプルを、透明な黒 (`rgba(0,0,0,0)`) を返して失敗させる必要があります。

画像を読み込むために、 `main()` 関数内に `loadTexture()` 関数の呼び出しを追加します。これは `initBuffers(gl)` 呼び出しの後に追加できます。

しかし、ブラウザーは読み込まれたイメージのピクセルを上から下、つまり左上の角から順にコピーするのに対し、 WebGL はピクセルを下から上、つまり左下の角から順にコピーするという点に注意してください。（詳細については、 [Why is my WebGL texture upside-down?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/) を参照してください。）

そのため、レンダリング時に画像テクスチャが間違った方向になるのを防ぐために、 [`pixelStorei()`](/ja/docs/Web/API/WebGLRenderingContext/pixelStorei) を `gl.UNPACK_FLIP_Y_WEBGL` 引数を `true` に設定して呼び出す必要があります。

> [!NOTE]
> 以下のコードを `main()` 関数の `initBuffers()` を呼び出した直後に追加してください。

```js
// テクスチャの読み込み
const texture = loadTexture(gl, "cubetexture.png");
// 画像ピクセルを WebGL が期待する下から上への順序に反転させる
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> 最後に、 [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) ファイルを JavaScript ファイルと同じローカルディレクトリーにダウンロードしましょう。

## テクスチャを表面にマッピングする

以上で、テクスチャの読み込みと使用する準備ができました。しかしテクスチャが使用できるようになるには、まず立方体の面の頂点にテクスチャの座標をマッピングする必要があります。これには `initBuffers()` にある、立方体の各面に色を設定する既存のコードを置き換えます。

> [!NOTE]
> この関数を "init-buffer.js" モジュールに追加しましょう。

```js
function initTextureBuffer(gl) {
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // 前面
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // 背面
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // 上面
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // 下面
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // 右面
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // 左面
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinates),
    gl.STATIC_DRAW,
  );

  return textureCoordBuffer;
}
```

始めに、このコードは各面のテクスチャの座標を収める GL のバッファーを作成して、そのバッファーを書き込みを行う配列としてバインドします。

`textureCoordinates` 配列は、各面の各座標に対応するテクスチャの座標を定義します。テクスチャの座標の範囲は 0.0 から 1.0 であることに注意してください。テクスチャマッピングのために、テクスチャの寸法は実際の大きさに関わらず 0.0 から 1.0 の範囲に正規化されます。

テクスチャマッピングの配列を設定したら、配列をバッファーに渡すことで GL がそのデータを使用する準備が完了します。

そしてその新しいバッファーを返します。

次に、色バッファーの代わりにテクスチャー座標バッファーを作成して返すように `initBuffers()` を更新する必要があります。

> [!NOTE]
> "init-buffers.js" モジュールの `initBuffers()` 関数で、 `initColorBuffer()` の呼び出しを以下の行に置き換えましょう。

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> "init-buffers.js" モジュールの `initBuffers()` 関数で、 `return` 文を以下に置き換えましょう。

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## シェーダーの更新

シェーダープログラムも、単色の代わりにテクスチャを使用するように更新する必要があります。

### 頂点シェーダー

頂点シェーダーを、色データを取得する代わりに、テクスチャ座標データを取得するように置き換える必要があります。

> [!NOTE]
> 以下のように `main()` 関数の `vsSource` 宣言を更新しましょう。

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;
```

ここでの重要な変更は、頂点の色を取得する代わりに、テクスチャ座標を取得して頂点シェーダーに渡していることです。これにより、頂点に対応するテクスチャ内の位置を示します。

### フラグメントシェーダー

フラグメントシェーダーも同様に更新する必要があります。

> [!NOTE]
> 以下のように `main()` 関数の `fsSource` 宣言を更新しましょう。

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;
    out vec4 fragColor;

    void main(void) {
      fragColor = texture(uSampler, vTextureCoord);
    }
  `;
```

フラグメントの色に色の値を割り当てる代わりに、フラグメントの色を {{Glossary("texel")}} （つまり、テクスチャ内のピクセル）を取得することで、色と同様に頂点間で補間される `vTextureCoord` の値に基づいて計算するようにします。

### 属性とユニフォームの位置

属性を変更し、ユニフォームを追加したので、それらの位置を調べていく必要があります。

> **メモ:** `main()` 関数の `programInfo` 宣言を次のように更新しましょう。

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

## テクスチャを貼り付けた立方体の描画

`drawScene()` 関数の変更点は簡単です。

> [!NOTE]
> "draw-scene.js" モジュールの `drawScene()` 関数内に、以下の関数を追加しましょう。

```js
// テクスチャ座標をバッファーから取り出す方法を webgl に伝える。
function setTextureAttribute(gl, buffers, programInfo) {
  const num = 2; // すべての座標は 2 つの値からなる
  const type = gl.FLOAT; // バッファー内のデータは 32 ビット浮動小数点数
  const normalize = false; // 正規化なし
  const stride = 0; // あるセットから次のセットまで、何バイトで移動するか
  const offset = 0; // バッファ内の何バイトから開始するか
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
  gl.vertexAttribPointer(
    programInfo.attribLocations.textureCoord,
    num,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}
```

> [!NOTE]
> "draw-scene.js" モジュールの `drawScene()` 関数内で、 `setColorAttribute()` の呼び出しを以下の行に置き換えましょう。

```js
setTextureAttribute(gl, buffers, programInfo);
```

次に、面にマッピングするテクスチャを指定するコードを追加します。

> **メモ:** `drawScene()` 関数の中で、 `gl.uniformMatrix4fv()` を 2 回呼び出した直後に、以下のコードを追加しましょう。

```js
// テクスチャユニット 0 に影響を与えたいことを WebGL に伝える
gl.activeTexture(gl.TEXTURE0);

// テクスチャをテクスチャユニット 0 にバインドする
gl.bindTexture(gl.TEXTURE_2D, texture);

// テクスチャをテクスチャユニット 0 にバインドすることをシェーダーに伝える
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL は最低 8 つのテクスチャユニットを提供します。そのうちの最初のユニットが `gl.TEXTURE0` です。ユニット 0 に適用したいことを WebGL に伝えます。そして、 {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}} を呼び出し、テクスチャをテクスチャユニット 0 の `TEXTURE_2D` バインドポイントにバインドします。 `uSampler` にはテクスチャユニット 0 を使用するようにシェーダーに伝えます。

最後に、`drawScene()` 関数の引数として `texture` を追加します。

> **メモ:** `drawScene()` 関数の宣言を更新し、新しい引数を追加しましょう。

```js-nolint
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```

> **メモ:** `main()` 関数の `drawScene()` を呼び出す場所を更新しましょう。

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

これで、回転する立方体は問題なく動作します。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## ドメインをまたぐテクスチャ

WebGL のテクスチャの読み込みは、ドメイン間アクセス制御に従います。コンテンツで他のドメインからテクスチャを読み込むためには、 CORS で許可を得なければなりません。 CORS について詳しくは、 [HTTP アクセス制御](/ja/docs/Web/HTTP/CORS) をご覧ください。

WebGL は安全なコンテキストからテクスチャを読み込む必要があるため、 WebGL で `file:///` の URL から読み込んだテクスチャを使用することはできません。つまり、コードのテストと展開には、安全なウェブサーバーが必要だということです。ローカルでテストする場合は[ローカルテストサーバーを用意するには](/ja/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server)を参照してください。

CORS で許可された画像を WebGL のテクスチャとして使用する方法の説明を、[こちらの hacks.mozilla.org の記事](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/)に掲載しています。

汚染された（書き込み専用の） 2D キャンバスを WebGL のテクスチャとして使用することはできません。 2D の {{HTMLElement("canvas")}} が汚染されたとは、例えば、別ドメインの画像が canvas 上に描画された状態を指します。

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
