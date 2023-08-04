---
title: A-Frame を使った基本的なデモの作成
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
---

{{GamesSidebar}}

[WebVR](/ja/docs/Games/Techniques/3D_on_the_web/WebVR) API と [WebGL](/ja/docs/Web/API/WebGL_API) API によって、ウェブブラウザー内で仮想現実 (VR) 体験を作成し始めることが可能になっていますが、コミュニティはもっと簡単に作れるツールやライブラリーが現れるのを待っています。Mozilla の [A-Frame](https://aframe.io/) フレームワークは、ウェブ開発者が慣れ親しんでいるシステムを用いて 3D VR 空間を構築するマークアップ言語を提供しています。このシステムはゲーム開発のコーディング原則に従っています。これはプロトタイプやデモを、大量の JavaScript や GLSL を書かずに、迅速にうまく構築するのに役立ちます。この記事では A-Frame をどうやって起動するか、そしてそれをつかって簡単なデモを構築する方法を説明します。

## 高水準の概要

A-Frame の現在のバージョンは 0.3.2 で、まだまだ実験的な段階ですが、既に動作しており、すぐにブラウザーで試すことができます。デスクトップやモバイル (iOS や Android) の Oculus Rift、GearVR、HTC Vive で動作します。

A-Frame は [WebGL](/ja/docs/Web/API/WebGL_API) 上に構築されていて、アプリケーション内で使える構築済みコンポーネント (モデル、ビデオプレイヤー、スカイボックス、ジオメトリー、コントロール、カーソルなど）を持っています。A-Frame は、ゲーム開発業界でよく知られている[エンティティ-コンポーネントシステム](https://ja.wikipedia.org/wiki/エンティティ・コンポーネント・システム)に基づいていますが、マークアップ構造に慣れたウェブ開発者を対象としていて、 JavaScript による操作が可能です。最終的には、既定で VR に対応した 3D ウェブ体験が可能になります。

## 環境設定

A-Frame で何かを作るために環境設定を始めましょう。デモを構築しながら動かしていきます。次のことから始めてください。

- WebGL に十分対応している最新のブラウザー (もし利用可能な VR ハードウェアがある場合は WebVR に対応しているブラウザー)、例えば最新の Firefox や Chrome を使っているか確認してください。 [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) または Chrome (v54 以降) をダウンロードしてください。
- (必要に応じて) Oculus Rift や Google Cardboard のような VR 機器をセットアップします。
- プロジェクトを保存する新しいディレクトリーを作成します。
- そのディレクトリーに、最新の [A-Frame JavaScript ライブラリーファイル](https://github.com/aframevr/aframe/tree/master/dist) (GitHub 最新の安定開発版リポジトリーを確認してください) のコピーを保存します。
- 別のタブで [A-Frame documentation](https://aframe.io/docs/) を開いておきます — 参照するのに便利なので。

## HTML の構造

最初のステップは HTML 文書を作成することです — 先ほど作成したプロジェクトディレクトリーの中に、新しく `index.html` ファイルを作成して、その中に次の HTML を記述して保存してください。

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: A-Frame demo</title>
    <script src="aframe.min.js"></script>
  </head>
  <body>
    <!-- HTML goes here -->
  </body>
</html>
```

これは、文書の `charset` や {{htmlelement("title")}} のような基本的な情報を含んでいます。{{htmlelement("script")}} 要素は、 A-Frame フレームワークをページに取り込みます。例のコードは {{htmlelement("body")}} 要素の中に書くことにします。

### シーンの初期化

シーンは、すべてが起こる場所です。このデモでは新しいオブジェクトを作成したら、それら全てをシーンへ追加していきます。そうすることで、それらのオブジェクトが画面上に表示されるようになります。 A-Frame の中では、シーンは [Scene エンティティ](https://aframe.io/docs/core/scene.html)で表現されます。

> **メモ:** エンティティは任意の要素です — box や cylinder や cone のようなオブジェクトだけでなく、camera、light、sound sourceもエンティティです。

`<body>` 要素の中に `<a-scene>` 要素を追加して、シーンを作成しましょう。

```html
<a-scene> </a-scene>
```

### 立方体の追加

立方体をシーンに追加するには、 `<a-scene>` 要素の中に単純な [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) 要素を追加します。今すぐ追加してみましょう。

```html
<a-box color="#0095DD" position="0 1 0" rotation="20 40 0"> </a-box>
```

いくつかの定義済み引数、 `color`、`position`、`rotation` が含まれています。かなり分かりやすいと思いますが、立方体の色や 3D シーン内の位置、そして立方体の回転状態を定義しています。

> **メモ:** 距離の値 (例えば、立方体の y 方向の位置) は単位がなく、シーンに適切と思える好きな単位 — ミリメートル、メートル、フィート、マイル — と考えてください。あなた次第です。

### 背景の追加: スカイボックス

スカイボックス (sky box) は 3D 空間における背景で、 [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) 要素で表現します。このデモでは、単純な背景色を使いますが、画像などを使うこともできます。周りを見回したときに晴れた空なのか、木造の納屋なのか、どんな場所にいるか好きな印象を与えることができます! `<a-cube>` 要素の直前に次の HTML を追加します。

```html
<a-sky color="#DDDDDD"></a-sky>
```

ここで、コードを保存してブラウザーを更新すると、設定した背景の画面上に立方体が見えるはずです。

![](cube.png)

ここまでで作ってきたコードは次の通りです。

{{JSFiddleEmbed("https://jsfiddle.net/end3r/m85148b4/","","350")}}

[Github 上で確認](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/cube.html)することもできます。

A-Frame は必要となるものをすべてセットアップしてくれます。

- 既定のの光源やカメラが含まれているので、立方体が見えています。
- コントロールも既に動作しています。マウスを使って周りを見回したり、キーボードで移動することができます ( <kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd>、<kbd>D</kbd> キーを試してください)。
- VRモードに入る ("Enter VR mode") ボタンも画面右下にあり、VR ハードウェアがセットアップされて使える状態になっていれば、ステレオ画面分割されたフル画面モードへ移行できます。

### カメラの指定

カメラエンティティは、 [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) 要素をシーンへ追加することで作成することもできます。カメラの位置を明示的に指定することができ、形状が見えるようにシーンの中心から少しだけ後ろに移動させています。 `</a-scene>` 要素を閉じる前にこれを追加します。

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

`cursor-*` 属性を使って、カメラにカーソルを設定することもできます (既定では非表示) — 見やすくするためにカーソルのスケールを設定するだけでなく、背後にあるオブジェクトを隠してしまうのを防ぐために色や透明度を設定することもできます。

### ライトの追加

A-Frame の基本的な光源タイプは directional と ambient です。最初のタイプはシーン内のどこかに配置された平行光源で、2つ目のタイプは最初のタイプから反射しますのでより自然に見えます; このライトはグローバルにセットできます。新しいコードを既存コードの下に追加します — ここでは標準的な `<a-light>` 要素を使います。

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"> </a-light>
```

directional ライトは白色で、強度を `0.5` にセットし、位置 `-1 1 2` に配置しています。ambient ライトは色のみ指定することができ、これも白にしています。

### もう少し高度なジオメトリーの追加

ここまでにシーンに立方体を追加できました。それでは、もう少し図形を追加してみましょう。 `<a-cube>` のような既定のエンティティに制限されているわけではありません — `<a-entity>` を用いて、独自の複雑な形状を作成することができます。トーラスを追加してみましょう — 次の要素を既存コードの下に追加します。

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

ここで追加したエンティティは [トーラスプリミティブ](https://aframe.io/docs/components/geometry.html#Torus)で、トーラス図形を表します。図形に幾つかの初期値を与えています。トーラスの外側エッジの半径、チューブの半径、チューブの円周方向の分割数をそれぞれ指定します。回転と位置は、今までに見てきたものと同様にセットしました。

### マテリアルの定義

シーンにトーラスが表示されましたが、色があまり良くありません — エンティティの見た目を定義するには[マテリアル(材質)](https://aframe.io/docs/components/material.html) を作成する必要があります。 `<a-entity>` を次のように編集して、トーラスの見た目を定義します。

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

新しく追加した `material` 属性では、マテリアルの `color` と、 `roughness` (表面の粗いマテリアルは、滑らかなマテリアルよりも反射光の方向が散らばります)、`metalness` (マテリアルがどの程度金属っぽいか) をセットしています。

## mix のための JavaScript の追加

JavaScript で作成したエンティティをシーンへ追加することもできますので、その機能を使って 3 つ目の図形として円柱を追加してみましょう。 `<body>` 要素の最後、つまり `<a-scene>` の直後に、新たに {{htmlelement("script")}} 要素を追加し、その内側に次の JaveScript コードを記述します。

```js
var scene = document.querySelector("a-scene");
var cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

まず、シーンハンドラーへの参照を取得し、次に円柱要素を A-Frame エンティティとして作成しています。その後、適切な属性を設定します。 `color`、`height`、`radius`、`position` です。最後の行では、新しく作成された円柱をシーンに追加します。これで、 A-Frame を使って 3 つの異なる図形を作成することができました。今のところ、こんな感じです。

![](shapes.png)

数行の HTML と JavaScript でこのようなシーンが作成できてしまうなんて素晴らしいですね。

## アニメーション

`rotation` や `position` を使ってシーン上の形状を動かしてきましたが、拡大縮小をすることもできます。[アニメーション](https://aframe.io/docs/core/animation.html)するイリュージョンを作成するためにこれらの属性を操作できます。

### 回転

特別な [`<a-animation>`](https://aframe.io/docs/core/animation.html) というエンティティがあり、要素のアニメーションを手助けしてくれます。下記の `<a-animation>` 要素を `<a-box>` 要素の子要素として追加してください。

```html
<a-box color="#0095DD" rotation="20 40 0" position="0 1 0">
  <a-animation
    attribute="rotation"
    from="20 0 0"
    to="20 360 0"
    direction="alternate"
    dur="4000"
    repeat="indefinite"
    easing="ease">
  </a-animation>
</a-box>
```

他のエンティティでも同様に、アニメーション用のキープロパティを定義できます。ここでは `rotation` 属性を `20 0 0` から `20 360 0` へとアニメーションさせているので、1周回転することになります。アニメーションの方向 (direction) は、alternate に設定されているため、順方向にアニメーションが再生されます。継続時間 (duration) を 4 秒に、そして繰り返し (repeat) がずっと続く (indefinite) ように設定してします。アニメーションの easing は `ease` を使っています。これは内部的に実装されている [tween.js](https://github.com/tweenjs/tween.js/) によって実行されます。

### 拡大縮小

エンティティのアニメーションは、このデモで使ったトーラスのようなカスタムジオメトリーにも同じように追加することができます。次に示す `<a-animation>` 要素をトーラスへ追加します。

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
  <a-animation
    attribute="scale"
    to="1 0.5 1"
    direction="alternate"
    dur="2000"
    repeat="indefinite"
    easing="linear">
  </a-animation>
</a-entity>
```

このトーラスをアニメーションさせる対象の属性は `scale` です。初期のデフォルトスケールは `1 1 1` で、それを `1 0.5 1` にアニメーションさせていますので、 `y` 軸が `1` から `0.5` へスケールが変化します。easing には `linear` を使っています。direction を `alternate` にセットすることで、 2 秒かけてスケールが `0.5` へ変化したあと `1` へと戻ります。再度、repeat は indefinite を指定して無限に繰り返す設定にしています。

### 移動

3 つ目の図形の位置を変えるには、 `<a-animation>` を使用することもできますが、代わりに JavaScript を使用することもできます。次のコードを `<script>` タグの末尾に追加してください。

```js
var t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", "3 " + (Math.sin(t * 2) + 1) + " 0");
}
render();
```

円柱の位置を毎フレーム更新するために `render()` 関数を使っています。`y` 軸に与える値を変更して、それが移動にどんな影響をあたえるか試してみてください。

## まとめ

すべて適切にレンダリングされてアニメーションしていますね。おめでとう、あなたの最初の A-Frame シーンが構築できました! 最終版がどのように見えて、どのように動くかは、ここで確認できます。

{{JSFiddleEmbed("https://jsfiddle.net/end3r/sq94qd6e/","","350")}}

利用可能な VR 機器を持っていれば、それを使ってあなたのシーンを試す良いタイミングです。

> **メモ:** [Github で確認](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/shapes.html)することもできます。

思ったより簡単だったでしょう？ A-Frame はウェブ開発者を対象に、簡単に使用できるウェブマークアップと、それがもたらす JavaScript 操作などのあらゆる利点を提供します。簡単に始められるだけでなく、高度なコンセプトや、ブラウザー間の差異などを扱うための強力な API も提供しています。対応する VR 機器の数と同じように、コミュニティも増えてきており、このようなフレームワークの実験を始めるには絶好の機会です。

## 関連情報

- [A-Frame ウェブサイト](https://aframe.io/)
- [Mozilla Mixed Reality ウェブサイト](https://mixedreality.mozilla.org/)
- [Introducing A-Frame 0.1.0 article](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [Made with A-Frame Tumblr](https://aframevr.tumblr.com/)
- [A-Frame physics plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame gamepad controls plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
