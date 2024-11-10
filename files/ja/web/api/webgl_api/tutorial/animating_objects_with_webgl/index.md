---
title: WebGL でのオブジェクトのアニメーション
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

## 正方形を回転させる

この例では、実際にはカメラを回転させることで、正方形を回転させているように見せていきます。最初に、カメラの現在の回転を追跡する変数が必要です。

> [!NOTE]
> このコードを "webgl-demo.js" スクリプトの始めに追加してください。

```js
let squareRotation = 0.0;
let deltaTime = 0;
```

ここで `drawScene()` 関数を更新して、カメラを描画するときに現在の回転を適用する必要があります。カメラを正方形の初期描画位置に移動させた後、回転を適用します。

> [!NOTE]
> "draw-scene.js" モジュールで、 `drawScene()` 関数の宣言を更新し、使用する回転を渡せるようにします。

```js-nolint
function drawScene(gl, programInfo, buffers, squareRotation) {
```

> **メモ:** `drawScene()` 関数の中で、 `mat4.translate()` の呼び出しの直後に次のコードを追加してください。

```js
mat4.rotate(
  modelViewMatrix, // 出力先の行列
  modelViewMatrix, // 回転する行列
  squareRotation, // ラジアンでの回転量
  [0, 0, 1],
); // 回転軸
```

これは modelViewMatrix を現在の `squareRotation` の値だけ、Z 軸を中心に回転させます。

実際にアニメーションさせるには、 `squareRotation` の値を時間とともに変化させるコードを追加する必要があります。

> [!NOTE]
> このコードを `main()` 関数の終わりに追加し、既存の `drawScene()` の呼び出しを置き換えてください。

```js
let then = 0;

// 繰り返しシーンを描画
function render(now) {
  now *= 0.001; // 秒に変換
  deltaTime = now - then;
  then = now;

  drawScene(gl, programInfo, buffers, squareRotation);
  squareRotation += deltaTime;

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```

このコードでは `requestAnimationFrame` を用いて、各フレームで関数 "`render`" を呼び出すようブラウザーに依頼します。 `requestAnimationFrame` はページが読み込まれてからの時刻をミリ秒単位で渡します。それを秒に変換し、そこから前回の時刻を引いて `deltaTime` を計算します。

最後に `squareRotation` を更新します。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample4) | [新しいページでデモを開く](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
