---
title: GLSL シェーダー
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
---

{{GamesSidebar}}

シェーダーは、 C と同様の構文を持つ特別な OpenGL シェーディング言語である GLSL (OpenGL Shading Language) を使用します。 GLSL はグラフィックスパイプラインによって直接実行されます。[様々な種類のシェーダー](https://www.khronos.org/opengl/wiki/Shader)がありますが、ウェブ上のグラフィックを作成するのに良く使用されるのは、頂点 (バーテックス) シェーダーとフラグメント (ピクセル) シェーダーの 2 種類です。 頂点シェーダーは、形状の位置を 3D 描画座標に変換します。 フラグメントシェーダーは、形状の色やその他の属性のレンダリングを計算します。

GLSL は JavaScript ほど直感的ではありません。 GLSL は強く型付けされており、ベクトルと行列を含む多くの数学があります。 それは非常に複雑になる可能性があります — 非常に速くも。 この記事では、立方体をレンダリングする簡単なコード例を作成します。 背景となるコードを高速化するために、Three.js API を使用します。

[基本理論](/ja/docs/Games/Techniques/3D_on_the_web/Basic_theory)の記事から覚えているかもしれませんが、頂点は 3D 座標系の点です。 頂点は追加のプロパティを持つことがあります。 3D 座標系は空間を定義し、頂点はその空間内の形状を定義するのに役立ちます。

## シェーダーの種類

シェーダーは基本的に、画面に何かを描画するために必要な機能です。 シェーダーは、このような操作のために最適化された [GPU](https://ja.wikipedia.org/wiki/Graphics_Processing_Unit) (graphics processing unit) で実行されます。 シェーダーの対処に GPU を使用することで、数値計算の一部を CPU から開放します。 これにより、CPU は、コードの実行などの他のタスクに処理能力を集中することができます。

### 頂点シェーダー

頂点シェーダーは 3D 空間の座標を操作し、頂点ごとに1回呼び出されます。 頂点シェーダーの目的は、`gl_Position` 変数を設定することです。 これは、特別なグローバルな組み込み GLSL 変数です。 `gl_Position` は、現在の頂点の位置を格納するために使用されます。

`void main()` 関数は、`gl_Position` 変数を定義する標準的な方法です。 `void main()` 内のすべては、頂点シェーダーによって実行されます。 頂点シェーダーは、3D 空間での頂点の位置を 2D 画面に投影する方法を含む変数を生成します。

### フラグメントシェーダー

フラグメント（またはテクスチャ）シェーダーは、処理される各ピクセルの RGBA (赤、緑、青、アルファ) 色を定義します。 単一のフラグメントシェーダーは、ピクセルごとに 1 回ずつ呼び出されます。 フラグメントシェーダーの目的は、 `gl_FragColor` 変数を設定することです。 `gl_FragColor` は、 `gl_Position` のような組み込みの GLSL 変数です。

計算の結果、RGBA 色に関する情報を含む変数が得られます。

## デモ

これらのシェーダーの動作を説明する簡単なデモを作成しましょう。 最初に [Three.js のチュートリアル](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)を読んで、シーンの概念、そのオブジェクト、およびマテリアルを把握してください。

> **メモ:** シェーダーを作成するために Three.js やその他のライブラリーを使用する必要はなく、純粋な [WebGL](/ja/docs/Web/API/WebGL_API) (Web Graphics Library) で十分です。 ここでは Three.js を使用して、背景となるコードを非常に単純でわかりやすくしているため、シェーダーのコードに集中することができます。 Three.js やその他の 3D ライブラリーは、多くのことを抽象化します。 このような例を生の WebGL で作成する場合は、実際に機能させるために多くの追加コードを作成する必要があります。

### 環境設定

WebGL シェーダーを使うには、それほど多くは必要ありません。 次のことが必要です。

- 最新の Firefox や Chrome など、[WebGL](/ja/docs/Web/API/WebGL_API) を適切にサポートする最新のブラウザーを使用していることを確認してください。
- 実験を保存するディレクトリーを作成します。
- [最小化された最新の Three.js ライブラリー](https://threejs.org/build/three.min.js)のコピーをディレクトリー内に保存します。

### HTML の構造

使用する HTML の構造は次のとおりです。

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Shaders demo</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-size: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    </style>
    <script src="three.min.js"></script>
  </head>
  <body>
    <script id="vertexShader" type="x-shader/x-vertex">
      // vertex shader's code goes here
    </script>
    <script id="fragmentShader" type="x-shader/x-fragment">
      // fragment shader's code goes here
    </script>
    <script>
      // scene setup goes here
    </script>
  </body>
</html>
```

文書の {{htmlelement("title")}} のような基本情報と、 Three.js がページに挿入する {{htmlelement("canvas")}} 要素の `width` と `height` をビューポートのフルサイズに設定するための CSS が含まれています。 {{htmlelement("head")}} の {{htmlelement("script")}} 要素には、ページの Three.js ライブラリーが含まれています。 {{htmlelement("body")}} タグの 3 つのスクリプトタグにコードを記述します。

1. 最初のものには、頂点シェーダーを含みます。
2. 2 つ目は、フラグメントシェーダーを含みます。
3. 3 つ目は、シーンを生成する実際の JavaScript コードを含みます。

先に進む前に、このコードを新しいテキストファイルにコピーして、作業ディレクトリーに `index.html` として保存してください。 このファイルでは、シェーダーがどのように機能するかを説明するために、単純な立方体を特徴とするシーンを作成します。

### 立方体のソースコード

すべてを最初から作成する代わりに、 [Three.js を使った基本的なデモの構築](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)のソースコードの立方体を再利用できます。 レンダラー、カメラ、ライトなどのほとんどのコンポーネントは同じままですが、基本的なマテリアルの代わりに、シェーダーを使用して立方体の色と位置を設定します。

[GitHub の cube.html ファイル](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html)に移動し、 2 番目の {{htmlelement("script")}} 要素内からすべての JavaScript コードをコピーして、現在の例の 3 番目の `<script>` 要素に貼り付けます。 `index.html` を保存してブラウザーでロードすると、青い立方体が表示されます。

### 頂点シェーダーのコード

続けて、簡単な頂点シェーダーを作成しましょう。 ボディの最初の `<script>` タグ内に以下のコードを追加します。

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

結果の `gl_Position` は、モデルビュー行列と射影行列に各ベクトルを乗算して、いずれの場合も最終的な頂点位置を取得することによって計算されます。

> **メモ:** [頂点処理の段落](/ja/docs/Games/Techniques/3D_on_the_web/Basic_theory#vertex_processing)から、_モデル変換_、_ビュー変換_、および*投影変換*について詳しく知ることができます。 また、この記事の最後にあるリンクからも、詳細を学ぶことができます。

`projectionMatrix` と `modelViewMatrix` はどちらも Three.js によって提供され、ベクトルは新しい 3D 位置を渡します。 これにより、元の立方体がシェーダーを介して平行移動され `x` 軸に沿って 10 単位、`z` 軸に沿って 5 単位移動します。 4番目のパラメーターは無視して、デフォルトの `1.0` 値のままにしておくことができます。 これは、3D 空間の頂点位置のクリッピングを操作するために使用されますが、今回のケースでは必要ありません。

### テクスチャーシェーダーのコード

次に、テクスチャーシェーダーをコードに追加します。 以下のコードをボディの 2 番目の `<script>` タグに追加します。

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

これにより、RGBA 色が設定され、現在の水色が再現されます。 最初の3つの浮動小数点値（`0.0` から `1.0` の範囲）は赤、緑、青のチャンネルを表し、4番目の値はアルファ透明度 (`0.0` の完全に透明から `1.0` の完全に不透明の範囲) を表します。

### シェーダーの適用

新しく作成したシェーダーを実際に立方体に適用するには、最初に `basicMaterial` の定義をコメントアウトします。

```js
// var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
```

次に、 [`shaderMaterial`](https://threejs.org/docs/#Reference/Materials/ShaderMaterial) を作成します。

```js
var shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});
```

このシェーダーマテリアルは、スクリプトからコードを取り出し、マテリアルが割り当てられているオブジェクトに適用します。

次に、立方体を定義する行で、`basicMaterial` を新しく作成した `shaderMaterial` に置き換える必要があります。

```js
// var cube = new THREE.Mesh(boxGeometry, basicMaterial);
var cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js は、このマテリアルが与えられたメッシュにアタッチされたシェーダーをコンパイルして実行します。 この場合、立方体には頂点シェーダーとテクスチャシェーダーの両方が適用されます。 これで完了です。 可能な限り単純なシェーダーを作成しました。 おめでとう! 立方体は次のようになります。

![Three.js blue cube demo](cube.png)

見た目は Three.js の立方体のデモとまったく同じですが、シェーダーを使用すると、位置がわずかに異なり、青色が同じになります。

## 最終的なコード

### HTML

```html
<script src="https://end3r.github.io/MDN-Games-3D/Shaders/js/three.min.js"></script>
<script id="vertexShader" type="x-shader/x-vertex">
  void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
  }
</script>
<script id="fragmentShader" type="x-shader/x-fragment">
  void main() {
      gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
  }
</script>
```

### JavaScript

```js
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);

var boxGeometry = new THREE.BoxGeometry(10, 10, 10);

var shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});

var cube = new THREE.Mesh(boxGeometry, shaderMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

### CSS

```css
body {
  margin: 0;
  padding: 0;
  font-size: 0;
}
canvas {
  width: 100%;
  height: 100%;
}
```

### 結果

{{ EmbedLiveSample('Final_code', '100%', '400') }}

## まとめ

この記事では、シェーダーの基本について説明しました。 私たちの例ではあまり多くのことをしていませんが、シェーダーでできるクールなことがもっとたくさんあります。 [ShaderToy](http://shadertoy.com/) で本当にクールなものをチェックして、インスピレーションを得て、それらのソースから学んでください。

## 関連情報

- [WebGL の学習](https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217) — 一般的な WebGL の知識について (アーカイブ、英語、和訳あり)
- [WebGL の基本での WebGL のシェーダーと GLSL](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) — GLSL 固有の情報について (英語、和訳あり)
