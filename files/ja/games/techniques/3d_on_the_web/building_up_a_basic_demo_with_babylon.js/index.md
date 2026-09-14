---
title: Babylon.js を使った基本的なデモの作成
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

[Babylon.js](https://www.babylonjs.com/) は開発者に使われている最も有名な三次元ゲームエンジンです。他のどんな三次元と同様に、より迅速に共通の三次元機能を実装するのを助けるプラグイン機能を提供します。この記事では、開発環境の構築、必要な HTML の構成、JavaScript コードの記述など、Babylon.js の使用に関する基本について解説します。

まずは、画面の内側へレンダリングされた立方体という簡単なデモを作成してみることにします。もし、すでにこの基本デモの作成[シリーズ](/ja/docs/Games/Techniques/3D_on_the_web) ([Three.js](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas), [A-Frame](/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)) を通して作業をしたことがある人（あるいは、他の三次元ライブラリーに精通している人）は、 Babylon.js がカメラ、光、オブジェクトという同じような概念で動作することに気づくでしょう。

> [!NOTE]
> このガイドは 2024 年 11 月に最終更新され、Babylon.js バージョン `7.34.1` と互換性があります。

## 開発環境の構築

Babylon.js で開発を始めるにあたっては、そんなに多くのものを必要としません。

[WebGL](/ja/docs/Web/API/WebGL_API) によく対応した最新のブラウザーを使用していることを核にしてください。
作業中は、[Babylon.js のドキュメント](https://doc.babylonjs.com/)を別なタブで開いておくと便利です。

IDE を使ってローカル環境で開発する場合は、実験用データを格納するためにディレクトリーを作成し、そのディレクトリー内に[最新の Babylon.js エンジン](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/)のコピーを保存してください。
あるいは、CDN から Babylon.js を読み込むことも可能です。

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

ローカル環境で開発したくない場合は、[CodePen](https://codepen.io/) や [JSFiddle](https://jsfiddle.net/) などのオンラインエディターを使用することができます。
これらのエディターでは、JavaScript のソースとして `https://cdn.babylonjs.com/v7.34.1/babylon.js` を追加することで、コード内で利用可能になります。

### Babylon.js 用の HTML テンプレート

IDE を使ってローカルで自分のプロジェクトを構築してある場合は、まずは以下の HTML 構造から始めてみてください。

```html
<!doctype html>
<html lang="ja-JP">
  <head>
    <meta charset="utf-8" />
    <title>MDN ゲーム: Babylon.js デモ</title>
    <style>
      html,
      body,
      canvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
      }
    </style>
  </head>
  <body>
    <!--  Babylon.js のローカルコピー -->
    <script src="babylon.js"></script>
    <!--  または CDN からダウンロード -->
    <!-- <script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script> -->

    <canvas id="render-canvas"></canvas>

    <script>
      const canvas = document.getElementById("render-canvas");
      /* JavaScript コードはすべてここに記述 */
    </script>
  </body>
</html>
```

ここには文書のタイトル ({{htmlelement("title")}}) や、Babylon.js がその内容を描画するための {{htmlelement("canvas")}} 要素の幅や高さが利用可能なビューポート領域全体を占めるようにする CSS など、文書の基本的な情報が含まれています。初めの {{htmlelement("script")}} 要素は Babylon.js に含みます。次に例となるコードを書いていきます。すでに 1 つの変数が取り込まれており、 `<canvas>` 要素への参照が格納されます。

IDE を使って開発している場合は、このコードを新しいテキストファイルにコピーし、作業ディレクトリーに `index.html` という名前で保存してください。

## Babylon.js エンジンの初期化

ゲームの開発を始める前に、まず Babylon.js エンジンのインスタンスを作成しなければなりません（レンダリングするための `<canvas>` 要素を渡します）。 2 つ目の `<script>` 要素の一番下に、以下のコードを追加してください。

```js
const engine = new BABYLON.Engine(canvas);
```

`BABYLON` グローバルオブジェクトは、エンジンで利用可能なすべての Babylon.js の関数を含んでいます。

## シーンの作成

シーンとは、すべてのゲームコンテンツが表示される場所です。このデモでは、新しいオブジェクトを作成しながら、それらをすべてシーンに追加して、画面の内側へ表示されるようにします。前のコードのすぐ下に次の行を追加して、シーンを作成しましょう。

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

シーンを作成し、 2 つ目の行で背景色をライトグレーに設定しています。

## レンダリングのループを作る

シーンを実際に見えるようにするためには、レンダリングする必要があります。以下の行を `<script>` 要素の最後、閉じる `</script>` の直前に追加してください。

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

エンジンの `runRenderLoop()` メソッドを使用して、 `renderLoop()` 関数をフレームごとに繰り返し実行しています。このループは、停止が指示されるまで無制限にレンダリングしつづけます。

## カメラの作成

さて、セットアップコードができたところで、標準的なシーンコンポーネントであるカメラ、ライト、オブジェクトの実装について考える必要があります。まず、カメラから始めましょう。シーンの作成と `clearColor` を定義した行の下に、次の行を追加してください。

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Babylon.js では多くの[カメラ](https://doc.babylonjs.com/features/featuresDeepDive/cameras)が利用可能です。 `FreeCamera` は最も基本的で汎用的なカメラです。初期化するためには、 3 つの引数を渡す必要があります。使用したい名前、三次元空間での位置の座標、そして追加したいシーンです。

ここで、`BABYLON.Vector3()` メソッドが使用されていることに気づいたかもしれません。これはシーン上の三次元位置を定義するものです。 Babylon.js には、ベクトル、色、行列などを扱うための完全な数学ライブラリーがバンドルされています。

## 光あれ

Babylon.js では、様々な[光源](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights)が利用可能です。最も基本的なものは `PointLight` で、これは懐中電灯のように動作し、指定された方向にスポットライトを照らします。カメラ定義の下に、次の行を追加してください。

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

引数は、先に定義したカメラと非常によく似ています。ライトの名前、三次元空間での位置、ライトを追加するシーンです。

## ジオメトリー

これでシーンが正しくレンダリングされたので、3D図形を追加することができます。 Babylon.js は、開発スピードを上げるために、たくさんの[定義済みプリミティブ](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set)を提供しており、これを使用すれば、 1 行のコードで即座に形状を作成することができます。立方体、球体、円柱、そしてもっと複雑な形状が用意されています。まず、箱型の図形を定義してみましょう。前に追加したコードの下に、次の新しいコードを追加してください。

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

メッシュはエンジンが幾何学的な図形を作成する方法なので、後で簡単に素材（テクスチャ）を適用することができます。この例では、 `Mesh.CreateBox` メソッドを使用して、独自の名前とサイズとして 2、そしてどのシーンに追加するかを宣言してボックスを作成します。

サイズや位置の値（ボックスのサイズなど）は単位がなく、基本的にミリメートル、メートル、フィート、マイルなど、シーンに適した値を設定することができます。

今、保存して更新すると、オブジェクトは正方形のように見えます。なぜなら、カメラに面しているからです。オブジェクトの良いところは、シーン上で好きなように動かせることです。例えば、回転させたり、拡大縮小したりできます。複数の面が見えるように、ボックスに少し回転を加えてみましょう。もう一度、これらの線を前の線の下に追加してください。

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

今のところ、ボックスは黒く見えますが、これはボックスの面に適用する素材を定義していないからです。次にそれを処理しましょう。

## 素材

素材とは、オブジェクトに応じたもの、つまり表面の色や質感のことです。この例では、シンプルな青色を使用して、箱を塗装します。使用できる[素材](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary)の型はたくさんありますが、今のところ標準的なもので十分でしょう。前の行の下に、次の行を追加してください。

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

`StandardMaterial` は、名前と追加したいシーンの 2 つの引数を受け取ります。 2 つ目の行は `emissiveColor` を定義しています。この定義には組み込みの `Color3` 関数を使用することができます。 3 行目では、新しく作成した素材をボックスに割り当てています。

## Babylon.js の図形の例

おめでとうございます。Babylon.js を使用して、三次元環境で最初のオブジェクトを作成することができました。思ったより簡単だったでしょう？
こちらが、現時点で作成したライブサンプルです。
"Play" をクリックすると、MDN Playground でコードを編集可能です。

```html hidden live-sample___babylon-js-intro
<canvas id="render-canvas"></canvas>
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

```js hidden live-sample___babylon-js-intro
const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);

const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);

const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

function renderLoop() {
  scene.render();
}

engine.runRenderLoop(renderLoop);
```

```css hidden live-sample___babylon-js-intro
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("babylon-js-intro", "", "400px")}}

## もっと図形を加える

このシーンにはすでに箱がありますが、さらに図形を追加してみましょう。

### 円環

円環を追加してみましょう。先ほどのコードの下に、以下の行を追加してください。

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

これは円環を作成し、シーンに追加します。引数は、名前、直径、厚さ、テセレーション（分割数）、追加するシーンです。また、円環を少し左側に配置し、見やすくするために `x` 軸で回転させます。それでは、素材を追加してみましょう。

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

ボックス要素と同じように見えます。標準的な素材を作成し、グレーがかった色をつけて、円環に割り当てています。

### 円柱

円柱とその素材の作成は、円環の場合とほぼ同じ方法で行います。次のコードを、やはりスクリプトの一番下に追加してください。

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

円柱の引数は、名前、高さ、上部の直径、下部の直径、テセレーション、高さの細分化、追加するシーンです。そして立方体の右側に配置し、三次元形状が見えるように少し回転させ、黄色の素材を与えます。

これは良い進歩ですが、もっと面白くしましょう！ゲームでは、たいてい何かが現れます――アニメーションなどが表示されます――そこで、それらの図形にアニメーションを加えて、生き生きとした動きを出してみましょう。

## アニメーション

すでに `position` と `rotation` を使用して、図形の位置を調整しました。また、拡大縮小も可能です。実際のアニメーションを表示するには、コードの最後にあるレンダリングループの中でこれらの値を変更し、すべてのフレームで更新されるようにする必要があります。アニメーションに使用するヘルパー変数 `t` を `renderLoop` の直前に定義し、ループ内の各フレームでデクリメントするようにします。

```js
let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  // animation code goes here
}
engine.runRenderLoop(renderLoop);
```

変数 `t` はレンダリングフレームごとに増加します。

### 回転

回転を適用するには、`renderLoop` 関数の最後にこの行を追加する必要があります。

```js
box.rotation.y = t * 2;
```

これは、 `y` 軸に沿ってボックスを回転させます。

### 拡大縮小

この行を前の行の下に追加して、円環を拡大縮小します。

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

アニメーションの見た目を良くするために、少し調整が加えられています。値を変えてみて、アニメーションにどのような影響が出るか試してみてください。

### 移動

円柱の位置を直接変更することで、シーン上で円柱を動かすことができます。この行を前の行の下に追加してください。

```js
cylinder.position.y = Math.sin(t * 3);
```

円柱は `Math.sin()` 関数のおかげで `y` 軸上で上下に浮き沈みします。

## アニメーション付きの Babylon.js の例

以下は、アニメーションをつけた図形を含む最終的なコードです。
"Play" をクリックすると、MDN Playground でこの例を編集可能です。

```html hidden live-sample___babylon-js-animation
<canvas id="render-canvas"></canvas>
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

```js live-sample___babylon-js-animation
const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: false,
  alpha: true,
});

const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;

const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;

const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;

let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  box.rotation.y = t * 2;
  torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
  cylinder.position.y = Math.sin(t * 3);
}
engine.runRenderLoop(renderLoop);
```

```css hidden live-sample___babylon-js-animation
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  color: rgb(204 204 204);
}
```

{{embedlivesample("babylon-js-animation", "", "400px")}}
