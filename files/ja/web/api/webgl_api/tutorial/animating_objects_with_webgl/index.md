---
title: WebGL でのオブジェクトのアニメーティング
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

前の例で作成したコードはすでに、WebGL のシーンを 15 ミリ秒ごとに再描画するよう設定されています。今までは単純に、毎回同じものをそのまま再描画していました。これから、正方形が実際に動くようにコードを変えていきます。

今回の例では 2D の正方形を 3 次元空間で、実際に回転や移動させます。これにより、作成したのは 2D のオブジェクトですが、それは 3D 空間に存在していることが証明されます。

## 正方形を回転させる

正方形を回転させてみましょう。始めに、正方形の回転をたどる変数が必要です:

```js
var squareRotation = 0.0;
```

そして、描画する際に正方形に回転を適用するよう、`drawScene()` 関数を更新することが必要です。正方形の初期描画位置に移した後、回転を以下のように適用します:

```js
mvPushMatrix();
mvRotate(squareRotation, [1, 0, 1]);
```

これを現在のモデルビュー行列に保存し、そして行列を現在の `squareRotation` の値を基に、X 軸および Z 軸で回転させます。

描画後は、元の行列に戻さなければなりません:

```js
  mvPopMatrix();
```

後に描画する別のオブジェクトを回転させてしまうことを防ぐために、元の行列を保存および復元します。今回の例では他に描画するものがありませんので、これは役目がありません。

実際に動かすために、時間がたつにつれて `squareRotation` の値を変えていくコードを追加しなければなりません。これは最後にアニメーションを行った時刻を追跡する新たな変数 (`lastSquareUpdateTime` と呼びましょう) を作成することで実現できるので、`drawScene()` 関数の末尾に以下のコードを追加します。:

```js
  var currentTime = Date.now();
  if (lastSquareUpdateTime) {
    var delta = currentTime - lastSquareUpdateTime;

    squareRotation += (30 * delta) / 1000.0;
  }

  lastSquareUpdateTime = currentTime;
```

このコードは正方形をどれだけ回転させるかを決めるために、最後に `squareRotation` の値を更新してから経過した時間を使用しています。

## 正方形を動かす

同様に、描画前に位置情報を変えていくことで正方形を移動させることができます。以下の例で、いくつかの基本的なアニメーションを行ってみます (当然ながら、実際はここまで極端に動かそうとは思わないでしょう) 。

新しい変数で、移動する際の各軸のオフセットをたどりましょう:

```js
var squareXOffset = 0.0;
var squareYOffset = 0.0;
var squareZOffset = 0.0;
```

また、各軸の値をどれだけ変化させるかを以下の変数で示します:

```js
var xIncValue = 0.2;
var yIncValue = -0.4;
var zIncValue = 0.3;
```

そして先ほどの回転させるサンプルコードを、以下のコードを追加して更新します:

```js
    squareXOffset += xIncValue * ((30 * delta) / 1000.0);
    squareYOffset += yIncValue * ((30 * delta) / 1000.0);
    squareZOffset += zIncValue * ((30 * delta) / 1000.0);

    if (Math.abs(squareYOffset) > 2.5) {
      xIncValue = -xIncValue;
      yIncValue = -yIncValue;
      zIncValue = -zIncValue;
    }
```

最後に、以下のコードを `drawScene()` 関数に追加します:

```js
mvTranslate([squareXOffset, squareYOffset, squareZOffset]);
```

以上で、正方形が回転するとともにズームイン・ズームアウトしながら、環境内を近づいたり遠ざかったりするようランダムに動き回ります。これはスクリーンセーバーのようです。

{{EmbedGHLiveSample('webgl-examples/tutorial/sample4/index.html', 670, 510)}}

[コードを確認する](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample4) | [新しいページでデモを開く](http://mdn.github.io/webgl-examples/tutorial/sample4/)

## さらに行列を操作する

この例は、行列をスタックから取り出す・スタックへ格納する 2 つのルーチンや、与えられた角度の値に基づいて行列を回転させるルーチンといった、高度な行列操作を行っています。参考として、以下にそれを掲載します:

```js
var mvMatrixStack = [];

function mvPushMatrix(m) {
  if (m) {
    mvMatrixStack.push(m.dup());
    mvMatrix = m.dup();
  } else {
    mvMatrixStack.push(mvMatrix.dup());
  }
}

function mvPopMatrix() {
  if (!mvMatrixStack.length) {
    throw("空の行列スタックからポップすることはできません。");
  }

  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, v) {
  var inRadians = angle * Math.PI / 180.0;

  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
  multMatrix(m);
}
```

これらのルーチンは、以前 Vlad Vukićević 氏が記述されたサンプルより取り入れています。

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
