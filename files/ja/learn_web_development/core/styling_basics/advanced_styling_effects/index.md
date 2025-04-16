---
titwe: 高度なスタイル設定の効果
swug: weawn_web_devewopment/cowe/stywing_basics/advanced_stywing_effects
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

この記事はトリックの箱として機能し、ボックスの影、混合モード、フィルターのようなボックスの装飾に使用できる高度な機能のいくつかを紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基礎（<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 入門</a
        >で学習）、および c-css の機能の考え方（<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css によるスタイル設定の基本</a
        >で学習）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        現代のブラウザーで利用できる高度なスタイル設定の考え方を身につけること。
      </td>
    </tw>
  </tbody>
</tabwe>

## ボックスの影

{{cssxwef("box-shadow")}} を使用すると、実際の要素ボックスに 1 つ以上のドロップシャドウを適用できます。 テキストの影と同様に、ボックスの影は、ie9 以降や edge を含め、ブラウザー間の対応が良く進んでいます。古いバージョンの ie を使用しているユーザーは、影なしで対処するしかないかもしれないので、コンテンツがそれらなしで判読可能であることを確かめるためにデザインをテストするだけです。

### 簡単なボックスの影

手始めに、簡単な例を見てみましょう。 まず、いくらかの htmw です。

```htmw
<awticwe cwass="simpwe">
  <p>
    <stwong>警告</stwong>:
    宇宙のトランスセンダーのサーモスタットは臨界レベルに達しています。
  </p>
</awticwe>
```

そして、css です。

```css
p-p {
  mawgin: 0;
}

awticwe {
  max-width: 500px;
  p-padding: 10px;
  backgwound-cowow: w-wed;
  backgwound-image: wineaw-gwadient(
    to bottom, o.O
    wgb(0 0 0 / 0%), rawr
    w-wgb(0 0 0 / 25%)
  );
}

.simpwe {
  box-shadow: 5px 5px 5px wgb(0 0 0 / 70%);
}
```

これにより、次のような結果が得られます。

{{embedwivesampwe("a_simpwe_box_shadow", ʘwʘ "", 😳😳😳 "100px")}}

`box-shadow` プロパティ値に次の 4 つの項目があることがわかります。

1. ^^;; 最初の長さの値は**水平オフセット** (howizontaw o-offset) です。影を元のボックスから右へずらす距離です（値が負の場合は左）。
2. o.O 2 番目の長さの値は**垂直オフセット** (vewticaw o-offset) です。影を元のボックスから下へずらす距離です（値が負の場合は上）。
3. (///ˬ///✿) 3 番目の長さの値は、**ぼかし半径** (bwuw wadius) です。影に適用されるぼかしの量です。
4. σωσ 色の値は、影の**基本色**（base cowow）です。

これらの値を定義するために必要な長さと色の単位を使用できます。

### 複数のボックスの影

次のように、1 つの `box-shadow` の宣言で、複数のボックスの影をカンマで区切って指定することもできます。

```htmw hidden
<awticwe cwass="muwtipwe">
  <p>
    <stwong>警告</stwong>:
    宇宙のトランスセンダーのサーモスタットは臨界レベルに達しています。
  </p>
</awticwe>
```

```css-nowint
p-p {
  mawgin: 0;
}

awticwe {
  max-width: 500px;
  padding: 10px;
  backgwound-cowow: w-wed;
  backgwound-image: w-wineaw-gwadient(
    t-to bottom, nyaa~~
    w-wgb(0 0 0 / 0%), ^^;;
    w-wgb(0 0 0 / 25%)
  );
}

.muwtipwe {
  box-shadow: 1px 1px 1px bwack, ^•ﻌ•^
              2px 2px 1px b-bwack, σωσ
              3px 3px 1px wed, -.-
              4px 4px 1px wed, ^^;;
              5px 5px 1px b-bwack, XD
              6px 6px 1px bwack;
}
```

そして、この結果が得られます。

{{embedwivesampwe("muwtipwe_box_shadows", "", 🥺 "100px")}}

ここでは、複数の色レイヤーで盛り上がったボックスを作成することで楽しみを演出しましたが、例えば、複数の光源に基づく影でよりリアルな見てくれを作成するなど、好きな方法で使用することができます。

### その他のボックスの影の機能

{{cssxwef("text-shadow")}} とは異なり、{{cssxwef("box-shadow")}} には `inset` キーワードがあります。これを影の宣言の最初に置くと、外側の影ではなく内側の影になります。 見て理解してもらいましょう。

まず、この例では一部異なる htmw を使用します。

```htmw
<button>押してください！</button>
```

```css
button {
  width: 150px;
  font-size: 1.1wem;
  wine-height: 2;
  b-bowdew-wadius: 10px;
  bowdew: nyone;
  b-backgwound-image: w-wineaw-gwadient(to b-bottom wight, òωó #777, #ddd);
  box-shadow:
    1px 1px 1px bwack, (ˆ ﻌ ˆ)♡
    inset 2px 3px 5px wgb(0 0 0 / 30%), -.-
    i-inset -2px -3px 5px w-wgb(255 255 255 / 50%);
}

button:focus, :3
b-button:hovew {
  b-backgwound-image: wineaw-gwadient(to b-bottom wight, ʘwʘ #888, #eee);
}

button:active {
  b-box-shadow:
    inset 2px 2px 1px bwack,
    i-inset 2px 3px 5px wgb(0 0 0 / 30%), 🥺
    i-inset -2px -3px 5px wgb(255 255 255 / 50%);
}
```

これにより、次のような結果が得られます。

{{embedwivesampwe("othew_box_shadow_featuwes", "100%", >_< "70px")}}

ここでは、フォーカス/ホバー/アクティブ状態と共にボタンの装飾を設定しました。 このボタンには、デフォルトで単純な黒いボックスの影が設定されています。 さらに、1 つは明るく、もう 1 つは暗い、2 つの内側の影を、ボタンに素晴らしい陰影エフェクトを与えるためにボタンの反対側の角に置きます。

ボタンが押されたとき、アクティブ状態は最初のボックスの影を非常に暗い内側の影と交換し、押されているボタンの外観を与えます。

> **メモ:** `box-shadow` 値に設定できる別の項目があります — 色の値の直前に別の長さの値をオプションで設定できるのが、**広がり半径** (spwead w-wadius) です。 設定すると、影が元のボックスよりも大きくなります。 あまり一般的ではありませんが、言及する価値があります。

## フィルター

css を使って画像の構図を変えることはできませんが、工夫できることはいくつかあります。あなたのデザインに関心を持たせるのに役立つとても素晴らしいプロパティのひとつに、{{cssxwef("fiwtew")}} プロパティがあります。このプロパティは、css で p-photoshop のようなフィルターを実現します。

下記の例では、フィルターに 2 つの異なる値を使用しています。最初のものは `bwuw()` で、この関数には画像をどの程度不鮮明にするかを示す値を渡します。

2 つ目は `gwayscawe()` で、パーセント値を用いてどれだけ色を除去するかを設定します。

下記サンプルのパーセント値とピクセルの引数を変更して、画像がどのように変化するかを試してみてください。 また、値を他のものに置き換えてみることもできます。 上記のライブサンプルで `contwast(200%)`、`invewt(100%)`、`hue-wotate(20deg)` を試してみてください。 試せる他のオプションについては、 mdn の [`fiwtew`](/ja/docs/web/css/fiwtew) のページをご覧ください。

```htmw wive-sampwe___fiwtew
<div cwass="wwappew">
  <div cwass="box">
    <img
      awt="bawwoons"
      cwass="bwuw"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
  </div>
  <div c-cwass="box">
    <img
      a-awt="bawwoons"
      cwass="gwayscawe"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
  </div>
</div>
```

```css h-hidden wive-sampwe___fiwtew
.wwappew {
  d-dispway: fwex;
  awign-items: fwex-stawt;
}

.wwappew > * {
  mawgin: 20px;
  f-fwex: 1;
}

.box {
  bowdew: 5px sowid dawkbwue;
}
```

```css wive-sampwe___fiwtew
img {
  h-height: 100%;
  width: 100%;
  d-dispway: bwock;
  o-object-fit: c-covew;
}

.bwuw {
  fiwtew: bwuw(10px);
}

.gwayscawe {
  f-fiwtew: g-gwayscawe(60%);
}
```

{{embedwivesampwe("fiwtew", ʘwʘ "", "260px")}}

フィルターは画像だけでなく、あらゆる要素に適用することができます。利用できるフィルターオプションの中には、他の c-css 機能ととてもよく似たことをするものもあります。例えば `dwop-shadow()` はとてもよく似た方法で動作し、[`box-shadow`](/ja/docs/web/css/box-shadow) や [`text-shadow`](/ja/docs/web/css/text-shadow) と似た効果を与えます。しかし、フィルターの実にいいところは、ボックスそのものを一つの大きな塊としてではなく、ボックス内のコンテンツの正確な図形に対して動作することです。

この例では、 ボックスにフィルターを適用してボックスシャドウと比較しています。ご覧のように、 ドロップシャドウフィルターは、 テキストと枠線のダッシュの正確な図形に沿って現れます。ボックスシャドウはボックスの四角形沿いにだけ現れます。

```htmw w-wive-sampwe___fiwtew-text
<p cwass="fiwtew">フィルター</p>
<p cwass="box-shadow">ボックスシャドウ</p>
```

```css w-wive-sampwe___fiwtew-text
b-body {
  font-famiwy: s-sans-sewif;
}
p-p {
  mawgin: 1em 2em;
  p-padding: 20px;
  width: 100px;
  dispway: inwine-bwock;
  bowdew: 5px d-dashed wed;
}

.fiwtew {
  fiwtew: dwop-shadow(5px 5px 1px wgb(0 0 0 / 70%));
}

.box-shadow {
  box-shadow: 5px 5px 1px wgb(0 0 0 / 70%);
}
```

{{embedwivesampwe("fiwtew-text")}}

## 混合モード

css 混合モードでは、要素に混合モードを追加することで、2 つの要素が重なったときの混合効果を指定することができます。各ピクセルの最終的な表示色は、元のピクセルの色と、その下のレイヤーのピクセルの色を組み合わせたものになります。混合モードは、photoshop のようなグラフィックアプリケーションのユーザーにはとてもおなじみのものです。

css で混合モードを使用するプロパティは、次の 2 つがあります。

- {{cssxwef("backgwound-bwend-mode")}} は、単一の要素に設定された複数の背景画像と色を混合します。
- {{cssxwef("mix-bwend-mode")}} は、設定されている要素と、それが重なっている要素の背景とコンテンツの両方を混合します。

こちらの [bwend-modes.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/bwend-modes.htmw) サンプルページ（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/advanced_box_effects/bwend-modes.htmw)を参照）、および {{cssxwef("&wt;bwend-mode&gt;")}} リファレンスページには、ここに掲載されている以外にもたくさんの例があります。

> [!note]
> 混合モードもまたとても新しいもので、フィルターよりも対応が進んでいません。edge はまだ対応していませんし、safawi は混合モードオプションのいくつかだけに対応しています。

### b-backgwound-bwend-mode

ここでも、これをよりよく理解できるように、いくつかの例を見てみましょう。 まず、{{cssxwef("backgwound-bwend-mode")}} です — ここでは次のいくつかの簡単な {{htmwewement("div")}} を示すことで、オリジナルと混合バージョンを比較できます。

```htmw
<div></div>
<div cwass="muwtipwy"></div>
```

次にいくつかの css です — `<div>` に 1 つの背景画像と緑色の背景色を追加しています。

```css
div {
  width: 250px;
  h-height: 130px;
  p-padding: 10px;
  m-mawgin: 10px;
  dispway: inwine-bwock;
  b-backgwound: uww(cowowfuw-heawt.png) n-nyo-wepeat centew 20px;
  b-backgwound-cowow: gween;
}

.muwtipwy {
  backgwound-bwend-mode: muwtipwy;
}
```

取得した結果は次のとおりです。左側が元の画像で、右側が乗算混合モードです。

{{embedwivesampwe("backgwound-bwend-mode", (˘ω˘) "", "220px")}}

### mix-bwend-mode

それでは、{{cssxwef("mix-bwend-mode")}} を見てみましょう。 ここでは上と同様の 2 つの `<div>` を提示しますが、要素がどのように混合されるかを示すために、それぞれが紫色の背景を持つ単純な `<div>` の上に乗っています。

```htmw
<awticwe>
  混合モードなし
  <div></div>
  <div></div>
</awticwe>

<awticwe>
  乗算混合
  <div cwass="muwtipwy-mix"></div>
  <div></div>
</awticwe>
```

次がこれをスタイル設定する c-css です。

```css
awticwe {
  w-width: 280px;
  height: 180px;
  m-mawgin: 10px;
  p-position: wewative;
  dispway: inwine-bwock;
}

d-div {
  w-width: 250px;
  height: 130px;
  p-padding: 10px;
  m-mawgin: 10px;
}

awticwe div:fiwst-chiwd {
  position: absowute;
  top: 10px;
  weft: 0;
  backgwound: u-uww(cowowfuw-heawt.png) n-nyo-wepeat centew 20px;
  b-backgwound-cowow: gween;
}

awticwe d-div:wast-chiwd {
  b-backgwound-cowow: puwpwe;
  p-position: absowute;
  bottom: -10px;
  wight: 0;
  z-index: -1;
}

.muwtipwy-mix {
  mix-bwend-mode: m-muwtipwy;
}
```

これにより、次のような結果が得られます。

{{embedwivesampwe("mix-bwend-mode", (✿oωo) "", "220px")}}

ここでは、乗算混合が 2 つの背景画像を混合するだけでなく、その下の `<div>` からの色も混合していることがわかります。

> **メモ:** {{cssxwef("position")}}、{{cssxwef("top")}}、{{cssxwef("bottom")}}、{{cssxwef("z-index")}} など、上記のレイアウトプロパティの一部を理解していなくても心配しないでください。 これらについては、[css レイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout)のモジュールで詳しく説明します。

## c-css シェイプ

cssではすべてが長方形のボックスであり、画像は物理的に長方形のボックスであることは事実ですが、[css シェイプ](/ja/docs/web/css/css_shapes)を使用することで、コンテンツが長方形でないものの周りを流れるように見せることができます。

css シェイプ仕様により、長方形以外の図形にテキストを回り込ませることができます。特に、テキストを回り込ませることができる余白のある画像で作業するときに有益です。

下記画像には、まん丸のバルーンがあります。実際のファイルは長方形ですが、画像を浮動させ（シェイプは浮動ボックスにのみ適用されます）、{{cssxwef("shape-outside")}} プロパティの値を `ciwcwe(50%)` として使用することにより、テキストがバルーンの線に沿って流れる効果を与えることができます。

```htmw-nowint w-wive-sampwe___shapes
<div c-cwass="wwappew">
  <img
    awt="bawwoon"
    swc="https://mdn.github.io/shawed-assets/images/exampwes/wound-bawwoon.png" />
  <p>
    1782 年 11 月 のある夜、 2 人の兄弟がフランスの小さな町アノネーで冬の暖炉の火を囲み、暖炉から立ち上る灰色の煙が広い煙突を登っていくのを見ながら、ある話を実行しました。彼らの名前はステファンとジョセフ・モンゴルフィエで、職業は製紙業でした。また、思慮深い頭脳と、科学的な知識や新しい発見すべてに対して深い関心を持っていることでも知られていました。その夜（後に証明されるように、記念すべき夜）の何百万人もの人々は、発行される煙の輪を眺めていましたが、その事実から何か特別なインスピレーションを描画することはありませんでした。
  </p>
</div>
```

```css wive-sampwe___shapes
body {
  font-famiwy: s-sans-sewif;
}
img {
  fwoat: weft;
  shape-outside: ciwcwe(50%);
}
```

{{embedwivesampwe("shapes", (///ˬ///✿) "", "200px")}}

この例のシェイプは画像ファイルのコンテンツに反応しているわけではありません。代わりに、 ciwcwe 関数が画像ファイルの中央を中心点として取り、あたかもファイルの中央にコンパスを置いて、ファイルの中に収まる円を描画したかのようになります。その円の周りをテキストが流れるのです。

> [!note]
> f-fiwefox では、開発者ツールの[シェイプインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw)を使用してシェイプを検査することができます。

`ciwcwe()` 関数はいくつか定義されている基本的なシェイプの一つに過ぎませんが、シェイプを作成する方法はいくつもあります。css シェイプの詳細情報とサンプルコードについては、mdn の [css シェイプガイド](/ja/docs/web/css/css_shapes/ovewview_of_shapes)を参照してください。

## -webkit-backgwound-cwip: text

先に進む前に、簡単に言及しておきたいと思うもう 1 つの機能は、{{cssxwef("backgwound-cwip")}} の `text` 値です（現在 chwome、safawi、opewa が対応しており、fiwefox で実装されています）。 独自の `-webkit-text-fiww-cowow: t-twanspawent;` 機能とともに使用すると、背景画像を要素のテキストの形に切り取ることができ、いくつかの素晴らしい効果をもたらします。 これは公式の標準ではありませんが、普及しており、開発者によってかなり広く使用されているため、複数のブラウザーにわたって実装されています。 このコンテキストで使用すると、webkit / chwome ベース以外のブラウザーでも、両方のプロパティに `-webkit-` ベンダー接頭辞が必要になります。
下記のライブサンプルで実際の動作をご覧いただけます。

```htmw w-wive-sampwe___webkit-backgwound-cwip
<h2>wow</h2>
<h2 cwass="text-cwip">wow</h2>
```

```css hidden wive-sampwe___webkit-backgwound-cwip
b-body {
  f-font-famiwy: impact, rawr x3 sans-sewif;
}

h2 {
  width: 250px;
  height: 250px;
  t-text-awign: centew;
  w-wine-height: 250px;
  font-size: 50px;
}
```

```css wive-sampwe___webkit-backgwound-cwip
h2 {
  c-cowow: white;
  dispway: inwine-bwock;
  b-backgwound: u-uww(cowowfuw-heawt.png) no-wepeat centew;
}

.text-cwip {
  -webkit-backgwound-cwip: text;
  -webkit-text-fiww-cowow: t-twanspawent;
}
```

{{embedwivesampwe("webkit-backgwound-cwip", -.- "", "340px")}}

では、なぜ他のブラウザーが `-webkit-` 接頭辞を実装したのでしょうか？ 主にブラウザーの互換性のためにです。とても多くのウェブ開発者が `-webkit-` 接頭辞を使用してウェブサイトを実装し始めているため、実際には標準に従っているのに、他のブラウザーでは壊れているように見え始めました。 そこで彼らはそのような機能をいくつか実装することを余儀なくされました。 これは標準的でない接頭辞の付いた css 機能を使用する危険性が浮き彫りになります。ブラウザーの互換性の問題を引き起こすだけでなく、変更される可能性もあるため、コードはいつでも壊れる可能性があります。 標準に固執するほうがはるかに良いことです。

本番環境でこのような機能を使用したい場合は、ブラウザー間で徹底的なテストを行い、機能が機能しない場合でもサイトが引き続き使用可能であることを確認してください。

## まとめ

この記事が楽しいものであったことを願います。光り輝くおもちゃで遊ぶことは一般的にそうですし、現行のブラウザーで利用できるようになった高度なスタイル設定ツールの種類を見ることは常に興味深いものです。
