---
title: Three.js を使った基本的なデモの作成
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 40ed53eb3e3513d7a9da90253238f9770b47b7dd
---

ゲームの一般的な三次元シーンは、たとえ最もシンプルなものであっても、座標系に配置された図形、それらを見るためのカメラ、見栄えを良くするためのライトや素材、生き生きと見せるためのアニメーションなど、標準的なアイテムが含まれています。 **Three.js** は、他の三次元ライブラリーと同様に、一般的な三次元機能をより迅速に実装するためのヘルパー関数が組み込まれています。この記事では、開発環境の設定、必要な HTML の構成、 Three の基本オブジェクト、基本的なデモの作成方法など、 Three を使用するための本当の基本を紹介します。

Three は、最も人気のある [WebGL](/ja/docs/Web/API/WebGL_API) ライブラリーの一つですが、他の WebGL ライブラリーよりも優れていると言っているわけではありません。ぜひ他のライブラリーも試してみてください。

> [!NOTE]
> このガイドは 2026 年 8 月に最終更新され、Three.js バージョン `r185` に対応しています。

## 開発環境の構築

Three.js で開発を始めるには、[WebGL](/ja/docs/Web/API/WebGL_API) に十分対応した最新のブラウザーを使用していることを確認してください。

コード内では、Three.js を [CDN または Node.js を使用して](https://threejs.org/docs/#manual/en/introduction/Installation) インポートできます。
CDN から読み込む場合は、HTML 内で以下の URL を使用することができます。

```html
<script type="module">
  import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.185.0/three.webgpu.js";
</script>
```

特定のバージョンの Three.js を使用して開発を行う場合、Three.js を依存関係としてインストールした Node.js 環境は便利であり、共同作業や展開を効率化することができます：

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

あるいは、[最新の Three.js ライブラリー](https://github.com/mrdoob/three.js/archive/master.zip)をダウンロードし、解凍したアーカイブ内の `build/three.webgpu.js` にある Three.js のミニ化版を自分のプロジェクトにコピーすることもできます。
なお、アーカイブにはソースファイルが含まれているため、ダウンロードサイズは約 360MB になる点にご注意ください。

どのような方法で始めるにしても、作業中は、参照用に [Three.js のドキュメント](https://threejs.org/docs/)をどこかに開いておくようにしてください。

### Three.js 用の HTML テンプレート

IDE を使ってローカルで自分のプロジェクトを構築する場合は、まず以下の HTML 構造から始めてみてください。

```html
<!doctype html>
<html lang="ja-JP">
  <head>
    <meta charset="utf-8" />
    <title>MDN ゲーム: Three.js デモ</title>
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
    <script type="importmap">
      {
        "imports": {
          "three": "https://cdn.jsdelivr.net/npm/three@0.185.0/build/three.webgpu.js",
          "three/webgpu": "https://cdn.jsdelivr.net/npm/three@0.185.0/build/three.webgpu.js"
        }
      }
    </script>
    <script type="module">
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* すべての JavaScript コードをここに置きます */
    </script>
  </body>
</html>
```

これには、文書の {{htmlelement("title")}} のような基本情報と、Three.js がページに挿入する {{htmlelement("canvas")}} 要素の `width` と `height` を、ビューポート空間全体を埋めるために 100% に設定するためのいくつかの CSS が含まれています。最初の {{htmlelement("script")}} 要素は、 Three.js ライブラリーをページ内に入れ、 2 つ目の要素内に例のコードを書きます。すでに 2 つのヘルパー変数が含まれており、ウィンドウの `width` と `height` が格納されています。

先に進む前に、このコードを新しいテキストファイルにコピーしデモ用ディレクトリーに`index.html`として保存しましょう。

## レンダラー

レンダラーとは、ブラウザー上でシーンを正しく表示するためのツールです。レンダラーにはいくつかの種類があります。デフォルトでは WebGL ですが、その他に WebGPU、Canvas、SVG、CSS、DOM を使用することができます。これらはすべてのレンダリング方法が異なるため、 WebGL の実装と CSS のレンダリングは異なります。目標を達成する方法はさまざまですが、ユーザーにとっての体験は同じになります。このアプローチのおかげで、希望する技術がブラウザーで対応していない場合、代替を使用することができます。たとえば、WebGPU レンダラーはデフォルトで WebGPU バックエンドを使用し、必要に応じて WebGL 2 バックエンドを代替として使用します。

下記コードは、新しい WebGPU レンダラーを生成し、そのサイズを画面上の利用可能なスペース全体に合うように設定し、DOM 構造をページに追加します。
1 行目の `antialias` 引数にお気づきかもしれません。これは、図形の縁をより滑らかにレンダリングするためのものです。`setClearColor()` メソッドは、デフォルトの黒ではなく、背景色を薄い灰色に設定します。

```js
import * as THREE from "three/webgpu";

const renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

await renderer.init();
```

このコードを 2 つ目の {{htmlelement("script")}} 要素に、 JavaScript のコメントのすぐ下に追加してください。

## シーン

シーンは全てが起こる場所です。
このデモでは、新しいオブジェクトを生成する際は、それらをすべてシーン内に追加して、画面に表示されるようにしています。
Three.js ではシーンは `Scene` オブジェクトで表します。前項のコードの下にこれを追加し、シーンを作成しましょう。

```js
const scene = new THREE.Scene();
```

追加されると、 `.add()` 関数を使いオブジェクトをそのシーンに追加できるようになります。

## カメラ

レンダリングされたシーンはありますが、私たちの作品を見るためにカメラを追加する必要があります。カメラのない映画のセットを想像してみてください。以下の行は、三次元座標系上にカメラを配置し、シーンの方向を指しています。

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

上記の行を、先に追加した行の下に追加してください。

他の種類のカメラ（Cube、Orthographic）もありますが、最もシンプルなのは Perspective（遠近法）です。このカメラを初期化するには、視野と縦横比を設定する必要があります。前者は見える範囲を設定するのに使用し、後者は画面上のオブジェクトがレンダリング時に正しい比率を持ち、引き伸ばされたように見えないようにするために重要です。上のコードで設定している値を説明しましょう。

- 視野率に設定した値 70 は、値を大きくすればするほど、カメラが映し出すシーンの量が増えるというもので、実際に試してみることができます。通常のカメラビューと魚眼効果を想像してください。デフォルト値は 50 です。
- アスペクト比はウィンドウの現在の幅と高さに設定されるため、動的に調整されます。固定された比率を設定することもできます。例：16 ⁄ 9、これはワイドスクリーンテレビのアスペクト比です。デフォルト値は 1 です。
- `z` 位置は 50 単位で、カメラと `z` 軸上のシーンの中心との距離です。ここでは、カメラを後ろに移動して、シーン内のオブジェクトを見ることができるようにしています。 50 はちょうどいい感じです。近すぎず遠すぎず、またオブジェクトの大きさによって、与えられた視野の中でシーンに留まることができます。 `x` と `y` の値は指定しない場合、デフォルトで 0 になります。

これらの値を試してみて、シーンで見えるものがどのように変わるかを見てみるとよいでしょう。
これらの座標（カメラの z 位置など）の引数に決まった単位は存在しないため、シーンに適している単位 (ミリメートル、メートル、フィートやマイルでも) で構いません。あなたの決めるところです。

## シーンのレンダリング

全ての準備が終わりましたが、まだ私たちは何も目にしていません。レンダラーを作ったなら、全てをレンダリングしましょう。 `render()` は、そのレンダリングを [`requestAnimationFrame()`](/ja/docs/Web/API/Window/requestAnimationFrame) の助けを借り行います。このコードは、全フレームで常にシーンがレンダリングされるようになります。

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

新しいフレームごとに `render` 関数が呼び出され、`renderer` が `scene` と `camera` をレンダリングします。関数の宣言の直後に、その関数を呼び出してループが始まるようにすると、その後はループが継続的に実行されます。

もう一度、この新しいコードを、前に追加したコードの下に追加してください。ファイルを保存して、ブラウザーで開いてみてください。グレーのウィンドウが表示されるはずです。おめでとうございます。

## ジオメトリー

シーンが正しくレンダリングされたら、三次元図形の追加を開始します。開発を効率化するため、Three.js には多数の定義済みプリミティブが用意されており、これらを使用することでたった 1 行のコードで即座に図形を生成することができます。立方体、球体、円柱、さらに複雑な形状も利用可能です。指定された形状に必要な頂点や面の描画といった詳細な処理は Three.js が自動的に処理してくれるため、開発者はより高レベルのコーディングに集中できます。まずは立方体の形状を定義してみましょう。`render()` 関数の直上に、以下のコードを追加してください。

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

このコードでは、 10 x 10 x 10 の簡単な立方体が生成されます。ジオメトリーだけでは不十分で、図形には素材が必要です。

## 素材

素材とは、オブジェクトに応じた、その表面にある色や質感を表すものです。ここでは、シンプルな青色を選んでボックスを塗装します。あらかじめ定義されている、使用できる素材がいくつかあります。基本 (Basic), フォン (Phong), ランバート (Lambert) です。後の 2 つは後で使ってみましょう。

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## メッシュ

素材を図形のジオメトリーに適用させるには、メッシュを使用します。メッシュは、素材を図形の表面に適用してくれます。

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

もう一回前項で追加したコードの下にこれを追加しましょう。

## 立方体をシーンに追加する

これまでに、ジオメトリーや素材を定義して立方体を作り出しました。最後に私たちが行うべきことはシーンに追加することです。さきほどのコードの下にこれを追加してください。

```js
scene.add(cube);
```

コードを保存してページを更新すると、オブジェクトがカメラの方向を向いているのでオブジェクトは正方形に見えます。オブジェクトの良いところは、シーン内で移動できるということです。例えば、私たちの思うままに回転や拡大縮小を行ったり。立方体を少し回転させ、複数の面を見てみましょう。また、コードの下にこれを追加します。

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Three.js 図形の例

ここまでの手順を問題なく進めてきたなら、Three.js を使って三次元環境で最初のオブジェクトを作成できたことになります！
おめでとうございます。
コードは、以下のライブサンプルのような状態になっているはずです。
"Play" をクリックすると、MDN Playground でコードを表示・編集できます。

```html hidden live-sample___three-js-intro
<script type="module">
  import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.185.0/three.webgpu.js";

  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  const renderer = new THREE.WebGPURenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0xdddddd, 1);
  document.body.appendChild(renderer.domElement);

  await renderer.init();

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
  camera.position.z = 50;
  scene.add(camera);

  const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
  const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
  const cube = new THREE.Mesh(boxGeometry, basicMaterial);
  scene.add(cube);
  cube.rotation.set(0.4, 0.2, 0);

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
</script>
```

```css hidden live-sample___three-js-intro
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-intro", "", "400px")}}

## 図形や素材の追加

今度は、このシーンにさらに図形を追加し、他の図形や素材、照明などを調べてみましょう。立方体を左側に移動して、友達のための領域を作ってあげましょう。前の行のすぐ下に、次の行を追加してください。

```js
cube.position.x = -25;
```

では、さらに図形や素材を増やしてみましょう。フォンの素材で包まれた円環を追加するとどうなるでしょうか。立方体を定義している線のすぐ下に、次の線を加えてみてください。

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

`TorusGeometry()` メソッドの引数で定義します。引数は `radius`, `tube diameter`, `radial segment count`, `tubular segment count` です。フォンの素材は箱のシンプルな基本素材よりも光沢があるように見えますが、今のところ円環はただの黒にしか見えません。
回転を加えることで、円環に初期の深みが生まれ、平らに見えなくなります。

もっと楽しい定義済み図形を選べます。もう少し遊んでみましょう。円環を定義している行の下に、次の行を追加してください。

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

今回は、 12 の平らな面を持つ正十二面体を作成します。引数 `DodecahedronGeometry()' はオブジェクトの大きさを定義します。ランバート素材を使用します。フォンと似ていますが、光沢が少ないほうがいいでしょう。ここでも今のところ黒です。オブジェクトを右に移動して、箱や円環と同じ位置にはならないようにしています。

上記のように、新しいオブジェクトは現在、ただ黒く見えるだけです。フォンとランバートの両方の素材をきちんと見えるようにするには、光源を導入する必要があります。

## 光源

Three.js では様々なタイプの光源が利用できます。最も基本的なものは `PointLight` で、これは懐中電灯のように定義された方向にスポットライトを照らすように動作します。以下の行を、図形の定義の下に追加してください。

```js
const light = new THREE.PointLight(0xffffff, 5000);
light.position.set(-10, 15, 50);
scene.add(light);
```

白い光の点を定義して、その位置をシーンの中心から離して設定し、図形の一部を照らすようにし、最後にシーンに追加します。これはうまくいき、 3 つの図形がすべて見えるようになりました。アンビエント、ディレクショナル、ヘミスフィア、スポットなど、他のタイプのライトについても、ドキュメントで確認する必要があります。それらをシーンに配置して、どのように影響するかを試してみてください。

これは大きな進歩ですが、もっと面白いものにできます。ゲームでは、たいてい何かが起こっています。アニメーションを見たりすることもあるでしょう。そこで、この図形に少し命を吹き込んで、アニメーションをつけてみましょう。

## アニメーション

立方体の位置を調整するために、すでに回転を使用しました。また、図形を拡大縮小したり、位置を変更したりすることもできます。アニメーションを表示するには、レンダリングループの中でこれらの値を変更し、各フレームで更新する必要があります。

### 回転

回転させるのは簡単です。各フレームで与えられた回転方向の値を追加します。以下のコードを `render` 関数内の `requestAnimationFrame()` 呼び出しの直後に追加してください。

```js
cube.rotation.y += 0.01;
```

これにより、立方体がフレームごとにほんの少し回転し、アニメーションが滑らかに見えるようになります。

### 拡大縮小

また、オブジェクトを拡大縮小することもできます。一定の値を適用して、一度だけ大きくしたり、小さくしたりするのだ。もっと面白いことをやってみよう。まず、経過時間をカウントするためのヘルパー変数 `t` を実装します。これを `render()` 関数の直前に追加します。

```js
let t = 0;
```

さて、フレームごとに値が増えるようにしましょう。 `requestAnimationFrame()` のすぐ後にこれを書き足しましょう。

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

私たちは `Math.sin` を使用して、非常に興味深い結果にたどり着きました。 `sin` は周期的な関数なので、これは円環を拡大縮小し、そのプロセスを繰り返します。拡大縮小する値を `Math.abs` でラップして、 0 以上の絶対値を渡しています。 sin は -1 から 1 までの値なので、負の値は円環をおかしくレンダリングするかもしれません。この場合、半分くらいは黒く見えます。

### 動かす

回転と拡大縮小の他に、オブジェクトをシーン上で移動させることもできます。 `requestAnimationFrame()` 呼び出しのすぐ下に、次のようなものを追加します。

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

これは、各フレームの y 軸に `sin()` 値を適用することによって、正十二面体を上下に動かし、よりクールな見た目になるように少し調整するものです。これらの値を変えてみて、アニメーションにどのような影響を与えるか見てみましょう。

## アニメーションする Three.js の例

アニメーションをつけた図形を含む最終的なコードは次のとおりです。
"Play" をクリックすると、MDN Playground でこの例を編集できます。

```html hidden live-sample___three-js-animation
<script type="module">
  import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.185.0/three.webgpu.js";

  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  const renderer = new THREE.WebGPURenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0xdddddd, 1);
  document.body.appendChild(renderer.domElement);

  await renderer.init();

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 10000);
  camera.position.z = 50;
  scene.add(camera);

  const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
  const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
  const cube = new THREE.Mesh(boxGeometry, basicMaterial);
  cube.position.x = -25;
  cube.rotation.set(0.4, 0.2, 0);
  scene.add(cube);

  const torusGeometry = new THREE.TorusGeometry(7, 1, 16, 32);
  const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
  const torus = new THREE.Mesh(torusGeometry, phongMaterial);
  torus.rotation.set(0.5, 0.5, 0);
  scene.add(torus);

  const strangeGeometry = new THREE.DodecahedronGeometry(7);
  const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
  const dodecahedron = new THREE.Mesh(strangeGeometry, lambertMaterial);
  dodecahedron.position.x = 25;
  scene.add(dodecahedron);

  const light = new THREE.PointLight(0xffffff, 5000);
  light.position.set(-10, 15, 50);
  scene.add(light);

  let t = 0;
  function render() {
    t += 0.01;
    requestAnimationFrame(render);
    cube.rotation.y += 0.01;
    torus.scale.y = Math.abs(Math.sin(t));
    dodecahedron.position.y = -7 * Math.sin(t * 2);
    renderer.render(scene, camera);
  }
  render();
</script>
```

```css hidden live-sample___three-js-animation
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-animation", "", "400px")}}

## まとめ

これで Three.js の基礎は理解できましたね。ぜひ楽しく実験してみてください！
さらに詳しく学ぶ場合は、[ウェブ上の三次元ゲーム](/ja/docs/Games/Techniques/3D_on_the_web)のドキュメントを続けることが可能です。
同時に、内部で何が起きているかをより深く理解するために、WebGL や WebGPU を学ぶのも良いでしょう。
詳しくは、[WebGL ドキュメント](/ja/docs/Web/API/WebGL_API)および [WebGPU ドキュメント](/ja/docs/Web/API/WebGPU_API)をご覧ください。
