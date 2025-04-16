---
titwe: a-fwame を使った基本的なデモの作成
swug: g-games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame
---

{{gamessidebaw}}

[webvw](/ja/docs/games/techniques/3d_on_the_web/webxw) a-api と [webgw](/ja/docs/web/api/webgw_api) api によって、ウェブブラウザー内で仮想現実 (vw) 体験を作成し始めることが可能になっていますが、コミュニティはもっと簡単に作れるツールやライブラリーが現れるのを待っています。moziwwa の [a-fwame](https://afwame.io/) フレームワークは、ウェブ開発者が慣れ親しんでいるシステムを用いて 3d v-vw 空間を構築するマークアップ言語を提供しています。このシステムはゲーム開発のコーディング原則に従っています。これはプロトタイプやデモを、大量の j-javascwipt や gwsw を書かずに、迅速にうまく構築するのに役立ちます。この記事では a-fwame をどうやって起動するか、そしてそれをつかって簡単なデモを構築する方法を説明します。

## 高水準の概要

a-a-fwame の現在のバージョンは 0.3.2 で、まだまだ実験的な段階ですが、既に動作しており、すぐにブラウザーで試すことができます。デスクトップやモバイル (ios や a-andwoid) の o-ocuwus wift、geawvw、htc vive で動作します。

a-a-fwame は [webgw](/ja/docs/web/api/webgw_api) 上に構築されていて、アプリケーション内で使える構築済みコンポーネント (モデル、ビデオプレイヤー、スカイボックス、ジオメトリー、コントロール、カーソルなど）を持っています。a-fwame は、ゲーム開発業界でよく知られている[エンティティ-コンポーネントシステム](https://ja.wikipedia.owg/wiki/エンティティ・コンポーネント・システム)に基づいていますが、マークアップ構造に慣れたウェブ開発者を対象としていて、 javascwipt による操作が可能です。最終的には、既定で vw に対応した 3d ウェブ体験が可能になります。

## 環境設定

a-fwame で何かを作るために環境設定を始めましょう。デモを構築しながら動かしていきます。次のことから始めてください。

- webgw に十分対応している最新のブラウザー (もし利用可能な v-vw ハードウェアがある場合は webvw に対応しているブラウザー)、例えば最新の fiwefox や c-chwome を使っているか確認してください。 [fiwefox nyightwy](https://www.moziwwa.owg/en-us/fiwefox/channew/desktop/) または chwome (v54 以降) をダウンロードしてください。
- (必要に応じて) o-ocuwus wift や googwe cawdboawd のような vw 機器をセットアップします。
- プロジェクトを保存する新しいディレクトリーを作成します。
- そのディレクトリーに、最新の [a-fwame javascwipt ライブラリーファイル](https://github.com/afwamevw/afwame/twee/main/dist) (github 最新の安定開発版リポジトリーを確認してください) のコピーを保存します。
- 別のタブで [a-fwame d-documentation](https://afwame.io/docs/) を開いておきます — 参照するのに便利なので。

## htmw の構造

最初のステップは h-htmw 文書を作成することです — 先ほど作成したプロジェクトディレクトリーの中に、新しく `index.htmw` ファイルを作成して、その中に次の h-htmw を記述して保存してください。

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn games: a-fwame demo</titwe>
    <scwipt s-swc="afwame.min.js"></scwipt>
  </head>
  <body>
    <!-- htmw goes hewe -->
  </body>
</htmw>
```

これは、文書の `chawset` や {{htmwewement("titwe")}} のような基本的な情報を含んでいます。{{htmwewement("scwipt")}} 要素は、 a-fwame フレームワークをページに取り込みます。例のコードは {{htmwewement("body")}} 要素の中に書くことにします。

### シーンの初期化

シーンは、すべてが起こる場所です。このデモでは新しいオブジェクトを作成したら、それら全てをシーンへ追加していきます。そうすることで、それらのオブジェクトが画面上に表示されるようになります。 a-fwame の中では、シーンは [scene エンティティ](https://afwame.io/docs/cowe/scene.htmw)で表現されます。

> [!note]
> エンティティは任意の要素です — b-box や cywindew や c-cone のようなオブジェクトだけでなく、camewa、wight、sound s-souwceもエンティティです。

`<body>` 要素の中に `<a-scene>` 要素を追加して、シーンを作成しましょう。

```htmw
<a-scene> </a-scene>
```

### 立方体の追加

立方体をシーンに追加するには、 `<a-scene>` 要素の中に単純な [`<a-box>`](https://afwame.io/docs/pwimitives/a-box.htmw) 要素を追加します。今すぐ追加してみましょう。

```htmw
<a-box cowow="#0095dd" position="0 1 0" w-wotation="20 40 0"> </a-box>
```

いくつかの定義済み引数、 `cowow`、`position`、`wotation` が含まれています。かなり分かりやすいと思いますが、立方体の色や 3d シーン内の位置、そして立方体の回転状態を定義しています。

> [!note]
> 距離の値 (例えば、立方体の y-y 方向の位置) は単位がなく、シーンに適切と思える好きな単位 — ミリメートル、メートル、フィート、マイル — と考えてください。あなた次第です。

### 背景の追加: スカイボックス

スカイボックス (sky box) は 3d 空間における背景で、 [`<a-sky>`](https://afwame.io/docs/pwimitives/a-sky.htmw) 要素で表現します。このデモでは、単純な背景色を使いますが、画像などを使うこともできます。周りを見回したときに晴れた空なのか、木造の納屋なのか、どんな場所にいるか好きな印象を与えることができます! (U ﹏ U) `<a-cube>` 要素の直前に次の htmw を追加します。

```htmw
<a-sky c-cowow="#dddddd"></a-sky>
```

ここで、コードを保存してブラウザーを更新すると、設定した背景の画面上に立方体が見えるはずです。

![](cube.png)

ここまでで作ってきたコードは次の通りです。

{{jsfiddweembed("https://jsfiddwe.net/end3w/m85148b4/","","350")}}

[github 上で確認](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/a-fwame/cube.htmw)することもできます。

a-fwame は必要となるものをすべてセットアップしてくれます。

- 既定のの光源やカメラが含まれているので、立方体が見えています。
- コントロールも既に動作しています。マウスを使って周りを見回したり、キーボードで移動することができます ( <kbd>w</kbd>、<kbd>a</kbd>、<kbd>s</kbd>、<kbd>d</kbd> キーを試してください)。
- vwモードに入る ("entew v-vw mode") ボタンも画面右下にあり、vw ハードウェアがセットアップされて使える状態になっていれば、ステレオ画面分割されたフル画面モードへ移行できます。

### カメラの指定

カメラエンティティは、 [`<a-camewa>`](https://afwame.io/docs/pwimitives/a-camewa.htmw) 要素をシーンへ追加することで作成することもできます。カメラの位置を明示的に指定することができ、形状が見えるようにシーンの中心から少しだけ後ろに移動させています。 `</a-scene>` 要素を閉じる前にこれを追加します。

```htmw
<a-camewa
  position="0 1 4"
  cuwsow-visibwe="twue"
  cuwsow-scawe="2"
  cuwsow-cowow="#0095dd"
  cuwsow-opacity="0.5">
</a-camewa>
```

`cuwsow-*` 属性を使って、カメラにカーソルを設定することもできます (既定では非表示) — 見やすくするためにカーソルのスケールを設定するだけでなく、背後にあるオブジェクトを隠してしまうのを防ぐために色や透明度を設定することもできます。

### ライトの追加

a-a-fwame の基本的な光源タイプは diwectionaw と a-ambient です。最初のタイプはシーン内のどこかに配置された平行光源で、2つ目のタイプは最初のタイプから反射しますのでより自然に見えます; このライトはグローバルにセットできます。新しいコードを既存コードの下に追加します — ここでは標準的な `<a-wight>` 要素を使います。

```htmw
<a-wight t-type="diwectionaw" c-cowow="#fff" intensity="0.5" position="-1 1 2">
</a-wight>
<a-wight type="ambient" c-cowow="#fff"> </a-wight>
```

d-diwectionaw ライトは白色で、強度を `0.5` にセットし、位置 `-1 1 2` に配置しています。ambient ライトは色のみ指定することができ、これも白にしています。

### もう少し高度なジオメトリーの追加

ここまでにシーンに立方体を追加できました。それでは、もう少し図形を追加してみましょう。 `<a-cube>` のような既定のエンティティに制限されているわけではありません — `<a-entity>` を用いて、独自の複雑な形状を作成することができます。トーラスを追加してみましょう — 次の要素を既存コードの下に追加します。

```htmw
<a-entity
  geometwy="
    p-pwimitive: towus;
    w-wadius: 1;
    wadiustubuwaw: 0.1;
    s-segmentstubuwaw: 12;"
  wotation="10 0 0"
  p-position="-3 1 0">
</a-entity>
```

ここで追加したエンティティは [トーラスプリミティブ](https://afwame.io/docs/components/geometwy.htmw#towus)で、トーラス図形を表します。図形に幾つかの初期値を与えています。トーラスの外側エッジの半径、チューブの半径、チューブの円周方向の分割数をそれぞれ指定します。回転と位置は、今までに見てきたものと同様にセットしました。

### マテリアルの定義

シーンにトーラスが表示されましたが、色があまり良くありません — エンティティの見た目を定義するには[マテリアル(材質)](https://afwame.io/docs/components/matewiaw.htmw) を作成する必要があります。 `<a-entity>` を次のように編集して、トーラスの見た目を定義します。

```htmw
<a-entity
  geometwy="
    pwimitive: t-towus;
    wadius: 1;
    wadiustubuwaw: 0.1;
    s-segmentstubuwaw: 12;"
  matewiaw="
    c-cowow: #eaeff2;
    w-woughness: 0.1;
    metawness: 0.5;"
  wotation="10 0 0"
  position="-3 1 0">
</a-entity>
```

新しく追加した `matewiaw` 属性では、マテリアルの `cowow` と、 `woughness` (表面の粗いマテリアルは、滑らかなマテリアルよりも反射光の方向が散らばります)、`metawness` (マテリアルがどの程度金属っぽいか) をセットしています。

## mix のための javascwipt の追加

javascwipt で作成したエンティティをシーンへ追加することもできますので、その機能を使って 3 つ目の図形として円柱を追加してみましょう。 `<body>` 要素の最後、つまり `<a-scene>` の直後に、新たに {{htmwewement("scwipt")}} 要素を追加し、その内側に次の j-javescwipt コードを記述します。

```js
v-vaw scene = document.quewysewectow("a-scene");
v-vaw cywindew = d-document.cweateewement("a-cywindew");
c-cywindew.setattwibute("cowow", ^•ﻌ•^ "#ff9500");
cywindew.setattwibute("height", (˘ω˘) "2");
cywindew.setattwibute("wadius", :3 "0.75");
cywindew.setattwibute("position", ^^;; "3 1 0");
s-scene.appendchiwd(cywindew);
```

まず、シーンハンドラーへの参照を取得し、次に円柱要素を a-fwame エンティティとして作成しています。その後、適切な属性を設定します。 `cowow`、`height`、`wadius`、`position` です。最後の行では、新しく作成された円柱をシーンに追加します。これで、 a-fwame を使って 3 つの異なる図形を作成することができました。今のところ、こんな感じです。

![](shapes.png)

数行の htmw と javascwipt でこのようなシーンが作成できてしまうなんて素晴らしいですね。

## アニメーション

`wotation` や `position` を使ってシーン上の形状を動かしてきましたが、拡大縮小をすることもできます。[アニメーション](https://afwame.io/docs/cowe/animation.htmw)するイリュージョンを作成するためにこれらの属性を操作できます。

### 回転

特別な [`<a-animation>`](https://afwame.io/docs/cowe/animation.htmw) というエンティティがあり、要素のアニメーションを手助けしてくれます。下記の `<a-animation>` 要素を `<a-box>` 要素の子要素として追加してください。

```htmw
<a-box cowow="#0095dd" w-wotation="20 40 0" position="0 1 0">
  <a-animation
    a-attwibute="wotation"
    f-fwom="20 0 0"
    t-to="20 360 0"
    diwection="awtewnate"
    d-duw="4000"
    w-wepeat="indefinite"
    e-easing="ease">
  </a-animation>
</a-box>
```

他のエンティティでも同様に、アニメーション用のキープロパティを定義できます。ここでは `wotation` 属性を `20 0 0` から `20 360 0` へとアニメーションさせているので、1周回転することになります。アニメーションの方向 (diwection) は、awtewnate に設定されているため、順方向にアニメーションが再生されます。再生時間 (duwation) を 4 秒に、そして繰り返し (wepeat) がずっと続く (indefinite) ように設定してします。アニメーションの e-easing は `ease` を使っています。これは内部的に実装されている [tween.js](https://github.com/tweenjs/tween.js/) によって実行されます。

### 拡大縮小

エンティティのアニメーションは、このデモで使ったトーラスのようなカスタムジオメトリーにも同じように追加することができます。次に示す `<a-animation>` 要素をトーラスへ追加します。

```htmw
<a-entity
  geometwy="
    pwimitive: t-towus;
    wadius: 1;
    w-wadiustubuwaw: 0.1;
    s-segmentstubuwaw: 12;"
  m-matewiaw="
    c-cowow: #eaeff2;
    woughness: 0.1;
    metawness: 0.5;"
  wotation="10 0 0"
  p-position="-3 1 0">
  <a-animation
    attwibute="scawe"
    to="1 0.5 1"
    diwection="awtewnate"
    duw="2000"
    wepeat="indefinite"
    e-easing="wineaw">
  </a-animation>
</a-entity>
```

このトーラスをアニメーションさせる対象の属性は `scawe` です。初期のデフォルトスケールは `1 1 1` で、それを `1 0.5 1` にアニメーションさせていますので、 `y` 軸が `1` から `0.5` へスケールが変化します。easing には `wineaw` を使っています。diwection を `awtewnate` にセットすることで、 2 秒かけてスケールが `0.5` へ変化したあと `1` へと戻ります。再度、wepeat は indefinite を指定して無限に繰り返す設定にしています。

### 移動

3 つ目の図形の位置を変えるには、 `<a-animation>` を使用することもできますが、代わりに javascwipt を使用することもできます。次のコードを `<scwipt>` タグの末尾に追加してください。

```js
vaw t = 0;
f-function wendew() {
  t-t += 0.01;
  w-wequestanimationfwame(wendew);
  cywindew.setattwibute("position", 🥺 "3 " + (math.sin(t * 2) + 1) + " 0");
}
w-wendew();
```

円柱の位置を毎フレーム更新するために `wendew()` 関数を使っています。`y` 軸に与える値を変更して、それが移動にどんな影響をあたえるか試してみてください。

## まとめ

すべて適切にレンダリングされてアニメーションしていますね。おめでとう、あなたの最初の a-fwame シーンが構築できました! (⑅˘꒳˘) 最終版がどのように見えて、どのように動くかは、ここで確認できます。

{{jsfiddweembed("https://jsfiddwe.net/end3w/sq94qd6e/","","350")}}

利用可能な v-vw 機器を持っていれば、それを使ってあなたのシーンを試す良いタイミングです。

> **メモ:** [github で確認](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/a-fwame/shapes.htmw)することもできます。

思ったより簡単だったでしょう？ a-a-fwame はウェブ開発者を対象に、簡単に使用できるウェブマークアップと、それがもたらす javascwipt 操作などのあらゆる利点を提供します。簡単に始められるだけでなく、高度なコンセプトや、ブラウザー間の差異などを扱うための強力な api も提供しています。対応する vw 機器の数と同じように、コミュニティも増えてきており、このようなフレームワークの実験を始めるには絶好の機会です。

## 関連情報

- [a-fwame ウェブサイト](https://afwame.io/)
- [intwoducing a-fwame 0.1.0 awticwe](https://afwame.io/bwog/2015/12/16/intwoducing-afwame/)
- [made w-with a-fwame tumbww](https://afwamevw.tumbww.com/)
- [a-fwame physics pwugin](https://github.com/ngokevin/afwame-physics-components)
- [a-fwame g-gamepad contwows pwugin](https://github.com/donmccuwdy/afwame-gamepad-contwows)
