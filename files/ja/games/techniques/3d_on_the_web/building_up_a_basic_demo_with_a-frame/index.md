---
title: A-Frame を使った基本的なデモの作成
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

[WebXR](/ja/docs/Games/Techniques/3D_on_the_web/WebXR) と [WebGL](/ja/docs/Web/API/WebGL_API) の API を使えば、ウェブブラウザー内で仮想現実（VR）や拡張現実（AR）体験を制作し始められます。
これをより簡単にするために、Mozilla の [A-Frame](https://aframe.io/) フレームワークは、ウェブ開発者が使い慣れたやり方で 3D VR 空間を作れるマークアップ言語を提供しており、ゲーム開発のコーディング原則に準拠しています。
これにより、JavaScript や GLSL を大量に書くことなく、プロトタイプやデモを迅速かつ効果的に作れます。
この記事では、A-Frame のセットアップやり方と、それを使って簡単なデモを作るやり方について説明します。

> [!NOTE]
> このガイドは 2024 年 11 月に最終更新され、A-Frame バージョン 1.6.0 に対応しています。

## 高水準の概要

A-Frame は、デスクトップ、モバイル（iOS および Android）、Oculus Rift、Gear VR、HTC Vive などのデバイスといった、ほとんどの環境で動きます。

A-Frame は [WebGL](/ja/docs/Web/API/WebGL_API) をベースに作られており、アプリケーションで使える前もって作ってあるコンポーネント (モデル、ビデオプレーヤー、スカイボックス、ジオメトリー、コントロール、アニメーション、カーソルなど) を提供します。ゲーム開発の世界ではよく知られている [エンティティコンポーネントシステム](https://en.wikipedia.org/wiki/Entity_component_system) をベースにしていますが、JavaScript で動かせる馴染みのあるマークアップ構造でウェブ開発者を対象としています。
最終的に得られるのは、デフォルトで VR に対応した 3D ウェブ体験です。

## 環境設定

A-Frame での開発を始めるには、WebGL（WebGL API）をしっかりサポートする最新のブラウザーを使っていることを確かめてください。
実験には、Oculus Rift や Google Cardboard などの VR デバイスをセットアップするのも一つのやり方です。

IDE でローカル開発する場合は、実験を保存するディレクトリーを作り、そのディレクトリー内に最新の A-Frame エンジン（インストール手順はこちら）を保存してください。
あるいは、CDN から A-Frame を読み込めます。

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

どちらのやり方で始めるにしても、作業中は必ず [A-Frame のドキュメント](https://aframe.io/docs/) を開いて参照するようにしてください。

### A-Frame の HTML スターター

IDE でローカルにプロジェクトを作る場合は、以下の HTML 構造から始めてください。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: A-Frame demo</title>
    <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
  </head>
  <body>
    <!-- HTML goes here -->
  </body>
</html>
```

これは、文書の `charset` や {{htmlelement("title")}} のような基本的な情報を含んでいます。 {{htmlelement("script")}} 要素は、 A-Frame フレームワークをページに取り込みます。例のコードは {{htmlelement("body")}} 要素の中に書くことにします。

### A-Frame でシーンを初期化する

シーンとは、あらゆる出来事が起こる所です。デモで新しいオブジェクトを作る際、それらをすべてシーンに加えて画面上に表示させます。A-Frame では、シーンは [シーンエンティティ](https://aframe.io/docs/core/scene.html) で表されます。
エンティティはあらゆる要素です。ボックス、円柱、円錐などのオブジェクトだけでなく、カメラ、光源、音などもエンティティとして使えます。

`<body>` 要素の中に `<a-scene>` 要素を加えて、シーンを作りましょう。

```html
<a-scene></a-scene>
```

### 立方体の追加

立方体をシーンに加えるには、 `<a-scene>` 要素の中にシンプルな [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) 要素を加えます。今すぐ加えてみましょう。

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

既に定義済みのパラメータがいくつかあります。`color`、`position`、`rotation` です。これらはとても分かりやすく、キューブの基本色、3D シーン内での位置、そしてキューブの回転を決めます。
距離の値（例えば、立方体の y 座標）は無単位なので、シーンに適した単位であれば何でも構いません。ミリメートル、メートル、フィート、マイルなど、自由に決められます。

### 背景の追加: スカイボックス

スカイボックス (sky box) は 3D 空間における背景で、 [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) 要素で表します。このデモでは、シンプルな背景色を使いますが、画像なども使えます。周りを見回したときに晴れた空なのか、木で造られている納屋なのか、どんな所にいるか好きな印象を与えられます! `<a-cube>` 要素の直前に次の HTML を加えます。

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame の形の例

ここで、コードを保存してブラウザーを更新すると、設定した背景の画面上に立方体が見えるはずです。

```html live-sample___a-frame-intro
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
<a-scene>
  <a-sky color="#DDDDDD"></a-sky>
  <a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
</a-scene>
```

```css hidden live-sample___a-frame-intro
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("a-frame-intro", "", "400px")}}

A-Frame は必要となるものをすべてセットアップしてくれます。

- 既にある光源やカメラが含まれているので、立方体が見えています。
- 操作は既にできます。マウスで視点を動かし、キーボードで動かせます。
- <kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd>、<kbd>D</kbd> キーを試してみてください。
- 画面右下隅に「VR モードに入る」ボタンがあります。必要な VR ハードウェアがセットアップされ準備が整っている場合は、このボタンをクリックすると、フルスクリーンで立体視画像を表示できます。

### カメラの指定

カメラエンティティは、シーンに [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) 要素を加えることで作れます。カメラの位置を明示的に決め、シーンの真ん中から少し後ろに動かすことで、形を表示できるようになります。閉じタグ `</a-scene>` の直前に以下を加えてください。

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

`cursor-*` 属性を使って、カメラにカーソルを決めることもできます (既定では非表示) — 見やすくするためにカーソルのスケールを決めるだけでなく、背後にあるオブジェクトを隠してしまうのを防ぐために色や透明度を決めることもできます。

### ライトの追加

A-Frame の基本的な光源タイプは directional と ambient です。初めのタイプはシーン内のどこかに置かれた平行光源で、2 つ目のタイプは初めのタイプから反射しますのでより自然に見えます; このライトはグローバルにセットできます。新しいコードを既にあるコードの下に加えます — ここでは標準的な `<a-light>` 要素を使います。

```html
<a-light type="directional" color="white" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="white"></a-light>
```

directional ライトは白色で、強さを `0.5` にセットし、位置 `-1 1 2` に置いています。ambient ライトは色のみ指定でき、これも白にしています。

### もう少し高度なジオメトリーの追加

ここまでにシーンに立方体を加えられました。それでは、もう少し図形を加えてみましょう。 `<a-cube>` のような既にあるエンティティに制限されているわけではありません — `<a-entity>` を用いて、独自の複雑な形を作れます。トーラスを加えてみましょう — 次の要素を既にあるコードの下に加えます。

```html
<a-entity
  geometry="
    primitive: torus;
    radius: 1;
    radiusTubular: 0.1;
    segmentsTubular: 12;"
  rotation="10 0 0"
  position="-3 1 0">
</a-entity>
```

ここで加えたエンティティは [トーラスプリミティブ](https://aframe.io/docs/components/geometry.html#Torus) で、トーラス図形を表します。図形にいくつかの初期値を与えています。トーラスの外側エッジの半径、チューブの半径、チューブの円周方向の分割数をそれぞれ決めます。回転と位置は、今までに見てきたものと同じくセットしました。

### マテリアルの定義

シーンにトーラスが表示されましたが、色があまり良くありません — エンティティの見た目を決めるには [マテリアル(材質)](https://aframe.io/docs/components/material.html) を作る必要があります。 `<a-entity>` を次のように書き換えて、トーラスの見た目を決めます。

```html
<a-entity
  geometry="
    primitive: torus;
    radius: 1;
    radiusTubular: 0.1;
    segmentsTubular: 12;"
  material="
    color: #EAEFF2;
    roughness: 0.1;
    metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0">
</a-entity>
```

新しく加えた `material` 属性では、マテリアルの `color` と、 `roughness` (表面の粗いマテリアルは、滑らかなマテリアルよりも反射光の向きが散らばります)、`metalness` (マテリアルがどの程度金属っぽいか) をセットしています。

## mix のために JavaScript を加える

JavaScript で作ったエンティティをシーンへ加えられますので、その機能を使って 3 つ目の図形として円柱を加えてみましょう。 `<body>` 要素の最後、つまり `<a-scene>` の後に、新たに {{htmlelement("script")}} 要素を加え、その内側に次の JavaScript コードを書きます。

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

まずシーンハンドラへの参照を取得し、次に円柱要素を A-Frame エンティティとして作ります。その後は、`color`、`height`、`radius`、`position` といった適切な属性を決めるだけです。最後の行で、新しく作った円柱をシーンに加えます。これで、A-Frame を使って 3 種類の異なる形を作れました！
わずか数行の HTML と JavaScript でこのようなシーンを作れるのは素晴らしいことです。

## アニメーション

すでに `rotation` と `position` を使ってシーン上の形を動かし、拡大縮小も行いました。これらの属性を操作することで、[アニメーション](https://aframe.io/docs/1.6.0/components/animation.html) のような効果を生み出せます。

### 回転

要素にアニメーション効果を与えるのに役立つ特別な [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) コンポーネントがあります。以下に示すように、`animation` コンポーネントを `<a-box>` 要素のプロパティとして加えます。

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

他のエンティティと同じく、アニメーションのキープロパティを決められます。ここでは、`rotation` 属性を `20 0 0` から `20 360 0` までアニメーションさせ、360 度回します。アニメーションの向きは交互に決められているため、アニメーションは順方向と逆方向に再生されます。再生時間 (duration) を 4 秒に、そして繰り返し (repeat) がずっと続きます (indefinite) 。アニメーションのイージングには `easing` が使われ、内部的には [tween.js](https://github.com/tweenjs/tween.js/) が実装されています。

### 拡大縮小

トーラスのようなカスタムジオメトリーを持つエンティティにも、似たやり方でアニメーションを加えられます。トーラスに以下の `animation` コンポーネントを加えてください。

```html
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
  material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; direction: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

このトーラスをアニメーションさせる対象の属性は `scale` です。初期のデフォルトスケールは `1 1 1` で、それを `1 0.5 1` にアニメーションさせていますので、 `y` 軸が `1` から `0.5` へスケールが変わります。easing には `linear` を使っています。direction を `alternate` にセットすることで、 2 秒かけてスケールが `0.5` へ変わったあと `1` へと戻ります。再度、repeat は indefinite を指定して無限に繰り返します。

### 移動

3 番目の図形の位置を変えるには、`animation` も使えますが、JavaScript も使えます。`<script>` タグの最後に次のコードを加えてください。

```js
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

円柱の位置を毎フレーム書き換えるために `render()` 関数を使っています。`y` 軸に与える値を変えて、それが移動にどんな影響を与えるか試してみてください。

## A-Frame の例（アニメーション付き）

すべて適切にレンダリングされてアニメーションしていますね。おめでとう、あなたの初めの A-Frame シーンが作れました! 最終版がどのように見えて、どのように動くかは、ここで確かめられます。

```html live-sample___a-frame-animation
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
<a-scene>
  <a-sky color="#DDDDDD"></a-sky>

  <a-light
    type="directional"
    color="white"
    intensity="0.5"
    position="-1 1 2"></a-light>
  <a-light type="ambient" color="white"></a-light>

  <a-camera position="0 1 4">
    <a-cursor color="#0095DD" opacity="0.5" scale="2 2 2"> </a-cursor>
  </a-camera>

  <a-box
    color="#0095DD"
    rotation="20 40 0"
    position="0 1 0"
    animation="property: rotation; from: 20 0 0; to: 20 360 0; 
      dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
  </a-box>

  <a-entity
    geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
    material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
    rotation="10 0 0"
    position="-3 1 0"
    animation="property: scale; to: 1 0.5 1; direction: alternate; 
      dur: 2000; loop: true; easing: linear;">
  </a-entity>
</a-scene>
```

```css hidden live-sample___a-frame-animation
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

```js live-sample___a-frame-animation
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

{{embedlivesample("a-frame-animation", "", "400px")}}

## まとめ

A-Frame は、JavaScript 操作などのメリットを備えたウェブマークアップを提供することで、ウェブ開発者をターゲットにしています。高度な概念に対応できる強い API を備え、ブラウザー間の違いにも対応しています。このようなフレームワークを試し始めるにはとても良い機会です。

## 関連情報

- [A-Frame ウェブサイト](https://aframe.io/)
- [A-Frame 0.1.0 の紹介記事](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame 物理演算プラグイン](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame ゲームパッド操作プラグイン](https://github.com/donmccurdy/aframe-gamepad-controls)
