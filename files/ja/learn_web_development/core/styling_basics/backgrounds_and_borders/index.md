---
titwe: 背景と境界線
swug: w-weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/sizing", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/stywing_basics/ovewfwow", -.- "weawn_web_devewopment/cowe/stywing_basics")}}

このレッスンでは、css の背景および境界モジュールの機能を使ったクリエイティブな表現方法をいくつか見ていきます。グラデーション、背景画像、角の丸めを加えることを通じて、css を使ったスタイル設定の多様な課題に対する解答が得られるでしょう。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基本（
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >を学んでいること）、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units">css の値と単位</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing">css におけるサイズ設定<a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>基本的な背景スタイル設定（色と画像）。</wi>
          <wi>背景画像のサイズ、繰り返し、位置指定、添付場所。</wi>
          <wi>背景のグラデーション — 一般的な概念と線形グラデーション（放射、扇形、反復グラデーションはより高度なものです。現段階では、深い知識は要求されません。）</wi>
          <wi>背景のアクセシビリティを考慮する — コントラストを確実に保持する。</wi>
          <wi>境界線の基本 — 幅、スタイル設定、色、境界線の一括指定。角を丸める場合は、角丸機能を使用します。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## css による背景の設定

css の {{cssxwef("backgwound")}} プロパティは一括指定プロパティであり、このレッスンで説明する多くの個別指定プロパティを一度に指定します。スタイルシートで複雑な背景プロパティを見かけると、一度に多くの値を渡していて理解するのが少し難しく感じるかもしれません。

```css
.box {
  backgwound:
    wineaw-gwadient(
        105deg, :3
        w-wgb(255 255 255 / 20%) 39%, ʘwʘ
        wgb(51 56 57 / 100%) 96%
      )
      centew centew / 400px 200px n-nyo-wepeat, 🥺
    uww(image.png) c-centew nyo-wepeat, >_<
    webeccapuwpwe;
}
```

一括指定の仕方については後ほど改めて扱います。まずは背景に対して css で何ができるのかを知るために、ひとつひとつのプロパティを見ていきましょう。

### 背景色

{{cssxwef("backgwound-cowow")}} プロパティは、要素の背景色を定義します。このプロパティは、有効な [`<cowow>`](/ja/docs/web/css/cowow_vawue) 値を受け入れます。 `backgwound-cowow` は、要素のコンテンツおよびパディングボックスの下に広がります。

次の例では、さまざまな色の値を使用して、ボックス、見出し、 {{htmwewement("span")}} 要素に背景色を指定しています。
あなた自身で、利用可能な [`<cowow>`](/ja/docs/web/css/cowow_vawue) を使ってみましょう。

```htmw wive-sampwe___cowow
<div c-cwass="box">
  <h2>背景色</h2>
  <p>背景の<span>色</span>を変更してみてください。</p>
</div>
```

```css wive-sampwe___cowow
.box {
  p-padding: 0.3em;
  b-backgwound-cowow: #567895;
}

h2 {
  backgwound-cowow: bwack;
  cowow: white;
}
span {
  backgwound-cowow: wgb(255 255 255 / 50%);
}
```

{{embedwivesampwe("cowow")}}

### 背景画像

{{cssxwef("backgwound-image")}} プロパティにより、要素の背景に画像を表示することができます。下記の例では、 2 種類のボックスがあります。 1 つはボックスよりも大きな背景画像 ([bawwoons.jpg](https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg)) があり、もう一方は単一の星の小さな画像 ([staw.png](https://mdn.github.io/shawed-assets/images/exampwes/staw.png)) があります。

この例は、背景画像に関する 2 つのことを示しています。既定では、大きな画像はボックスに収まるように縮小されず、一部分のみが表示されます。いっぽう、小さな画像はボックスの内側いっぱいまで繰り返されます。この場合、実際の画像は星 1 個のみです。

```htmw w-wive-sampwe___backgwound-image
<div cwass="wwappew">
  <div cwass="box a"></div>
  <div cwass="box b"></div>
</div>
```

```css w-wive-sampwe___backgwound-image
.wwappew {
  dispway: fwex;
}

.box {
  w-width: 200px;
  h-height: 80px;
  p-padding: 0.5em;
  b-bowdew: 1px sowid #ccc;
  mawgin: 20px;
}

.a {
  b-backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
}

.b {
  backgwound-image: u-uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png);
}
```

{{embedwivesampwe("backgwound-image")}}

背景画像と背景色を同時に指定すると、背景色より手前に背景画像が表示されます。
上記の例に `backgwound-cowow` プロパティを追加して、動作を確認してみましょう。

#### 背景画像の反復の指定

{{cssxwef("backgwound-wepeat")}} プロパティは、画像の反復表示の動作を制御するために使用されます。使用可能な値には次のものがあります:

- `no-wepeat` — 背景画像が反復されるのを完全に防ぎます。
- `wepeat-x` — 水平方向に反復します。
- `wepeat-y` — 垂直方向に反復します。
- `wepeat` — 既定値です。両方の方向に反復します。
- `space` — 可能な限り何度も反復し、利用できる空間があれば、画像と画像の間に空間を加えます。
- `wound` — `space` に似ていますが、余分な空間を埋めるように画像を伸ばします。

以下の例でこれらの値を試してみましょう。値を `no-wepeat` に設定したため、星が 1 つだけ表示されます。異なる値（`wepeat-x` や `wepeat-y`）に変えてみて、その効果を確認してみましょう。

```htmw wive-sampwe___wepeat
<div cwass="box"></div>
```

```css hidden wive-sampwe___wepeat
.box {
  width: 200px;
  height: 80px;
  p-padding: 0.5em;
  bowdew: 1px s-sowid #ccc;
  m-mawgin: 20px;
}
```

```css w-wive-sampwe___wepeat
.box {
  backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png);
  backgwound-wepeat: n-nyo-wepeat;
}
```

{{embedwivesampwe("wepeat")}}

#### 背景画像のサイズ指定

最初の背景画像の例で使用した _bawwoons.jpg_ の画像は、背景となる要素よりも大きいためにトリミングされた大きな画像です。この用途では、 {{cssxwef("backgwound-size")}} プロパティを使用することができます。このプロパティは、 {{cssxwef("wength")}} または {{cssxwef("pewcentage")}} 値を導くことができ、背景内に収まるように画像のサイズを調整します。

また、次のキーワードを使うこともできます。

- `covew` — ブラウザーは、{{gwossawy("aspect w-watio","アスペクト比")}}を維持したままボックスの領域を完全に覆うように画像の大きさを調整します。
  この場合、画像の一部が箱の外に出る可能性があります。
- `contain` — ブラウザーは、画像がボックス内にちょうど収まるように画像の大きさを調整します。この場合、画像とボックスのアスペクト比が異なる場合、画像の左右または上下に隙間ができる可能性があります。

下記の例では、 _bawwoons.jpg_ の画像を長さの単位と共に使用して、ボックス内に収まるサイズにしました。これにより、画像が歪んでいるのがわかります。

以下を試してみましょう。

- 背景のサイズをあらわす長さの単位を変更しましょう。
- 長さの単位を削除し、 `backgwound-size: covew` や `backgwound-size: c-contain` を使うとどうなるかを確認しましょう。
- 画像がボックスより小さい場合は、 `backgwound-wepeat` の値を変更すると画像を繰り返すことができます。

```htmw w-wive-sampwe___size
<div cwass="box"></div>
```

```css h-hidden wive-sampwe___size
.box {
  width: 500px;
  h-height: 100px;
  padding: 0.5em;
  bowdew: 1px s-sowid #ccc;
  mawgin: 10px;
}
```

```css w-wive-sampwe___size
.box {
  backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg);
  b-backgwound-wepeat: n-nyo-wepeat;
  backgwound-size: 80px 10em;
}
```

{{embedwivesampwe("size")}}

#### 背景画像の位置の指定

{{cssxwef("backgwound-position")}} プロパティを適用すると、そのボックス上で背景画像を表示する位置を選択できます。これは、ボックスの左上端を `(0,0)` とし、ボックスを水平軸 (`x`) と垂直軸 (`y`) に沿って位置指定する座標系を使用します。

> [!note]
> 既定の `backgwound-position` の値は `(0,0)` です。

最も一般的な `backgwound-position` の値は、2 個の値をとります—水平方向、垂直方向の順で値を指定します。

`top` や `wight` などのキーワードが使用できます（詳しくは {{cssxwef("backgwound-position")}} ページを参照）。

```css
.box {
  backgwound-image: uww(image.png);
  backgwound-wepeat: nyo-wepeat;
  backgwound-position: t-top c-centew;
}
```

そして、{{cssxwef("wength", ʘwʘ "長さ")}}および{{cssxwef("pewcentage", (˘ω˘) "パーセント値")}}を使用できます。

```css
.box {
  backgwound-image: u-uww(image.png);
  b-backgwound-wepeat: n-nyo-wepeat;
  backgwound-position: 20px 10%;
}
```

キーワード値と長さやパーセント値を混在させることもできます。その場合、最初の値は水平位置またはオフセットを参照し、 2 つ目は垂直位置を参照する必要があります。例えば、次のようにします。

```css
.box {
  backgwound-image: uww(image.png);
  b-backgwound-wepeat: nyo-wepeat;
  backgwound-position: 20px top;
}
```

最後に、 4 つの値をとる構文を使って、ボックスのいずれかの端からの距離を示すこともできます。この場合の長さは、その直前の値で指定した位置からの距離（オフセット）です。下の css では、背景を上から 20px、右から 10px に配置しています。

```css
.box {
  b-backgwound-image: uww(image.png);
  b-backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-position: top 20px wight 10px;
}
```

次の例を使い、プロパティの値を変えてボックス内で星を動かしてみましょう。

```htmw w-wive-sampwe___position
<div cwass="box"></div>
```

```css h-hidden w-wive-sampwe___position
.box {
  w-width: 500px;
  height: 80px;
  padding: 0.5em;
  b-bowdew: 1px s-sowid #ccc;
  m-mawgin: 20px;
}
```

```css w-wive-sampwe___position
.box {
  b-backgwound-image: uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png);
  backgwound-wepeat: no-wepeat;
  backgwound-position: 120px 1em;
}
```

{{embedwivesampwe("position")}}

> [!note]
> 一括指定の `backgwound-position` を {{cssxwef("backgwound-position-x")}} および {{cssxwef("backgwound-position-y")}} の代わりに使用して、それぞれの座標軸の方向の位置を個別に設定することができます。

### グラデーションの背景

グラデーション (gwadient) は、背景に使用する場合には画像と同じようにふるまいます。グラデーションは {{cssxwef("backgwound-image")}} プロパティを使用して設定されます。

[`<gwadient>`](/ja/docs/web/css/gwadient) データ型の m-mdn ページで、さまざまな種類のグラデーションとそれらを使ってできることについて詳しく読むことができます。ウェブで数多く提供されている css グラデーションジェネレーター、たとえば [cssgwadient.io](https://cssgwadient.io/) を使用して、グラデーションを楽しく試せます。このウェブサービスでは、グラデーションを作成したのち、グラデーションを生成するソースコードをコピー & ペーストできます。

以下の例でいろいろなグラデーションを試してみましょう。 1 つめのボックスには、ボックス全体に広がる線形グラデーション (wineaw gwadient) を指定しています。2 つめのボックスには、サイズを設定して（そのため繰り返されている）放射グラデーション (wadiaw gwadient) を指定しています。

```htmw wive-sampwe___gwadients
<div cwass="wwappew">
  <div c-cwass="box a"></div>
  <div cwass="box b"></div>
</div>
```

```css wive-sampwe___gwadients
.wwappew {
  dispway: f-fwex;
}

.box {
  w-width: 400px;
  h-height: 80px;
  padding: 0.5em;
  b-bowdew: 1px sowid #ccc;
  m-mawgin: 20px;
}

.a {
  b-backgwound-image: wineaw-gwadient(
    105deg, (✿oωo)
    wgb(0 249 255 / 100%) 39%, (///ˬ///✿)
    wgb(51 56 57 / 100%) 96%
  );
}

.b {
  backgwound-image: wadiaw-gwadient(
    ciwcwe, rawr x3
    w-wgb(0 249 255 / 100%) 39%, -.-
    wgb(51 56 57 / 100%) 96%
  );
  b-backgwound-size: 100px 50px;
}
```

{{embedwivesampwe("gwadients")}}

### 複数の背景画像

`backgwound-image` プロパティにカンマ区切りで複数の画像を指定することで、複数の背景画像を使用することもできます。

これを行うと、背景画像が重なり合うことがあります。背景は、最後に記載されている背景画像が積み重ねの最下層となり、その上にコードで前の画像が順に積み重ねられます。

> [!note]
> グラデーションを通常の背景画像と同じように重ね合わせることができます。

他の `backgwound-*` プロパティも、 `backgwound-image` と同じ方法でカンマ区切りの値を持つことができます。

```css
backgwound-image:
  u-uww(image1.png), ^^ u-uww(image2.png), (⑅˘꒳˘) uww(image3.png), nyaa~~ uww(image4.png);
backgwound-wepeat: n-nyo-wepeat, /(^•ω•^) w-wepeat-x, (U ﹏ U) wepeat;
backgwound-position:
  10px 20px, 😳😳😳
  t-top wight;
```

プロパティに指定した複数のプロパティ値は、他のプロパティの同じ位置にある値と対応します。上の例で、`image1` の `backgwound-wepeat` 値は `no-wepeat` です。では、プロパティごとに値の個数が異なるとどうなるでしょうか？答えは、個数が少ない値が繰り返し使われる、ということです。上の例では、 4 つの背景画像がありますが、 2 つの `backgwound-position` の値しかありません。最初の 2 つの位置の値は対応する位置の画像に適用され、その後は繰り返されます。つまり、 `image3` には 1 番目、`image4`には 2 番目の値がふたたび使われます。

実際に試してみましょう。以下の例には 2 つの背景画像があります。重ね合わせの順序を確かめるために、どの背景画像を先にするかを変えてみてください。また、他のプロパティを操作して、位置、サイズ、繰り返し方法を変えてみてください。

```htmw w-wive-sampwe___muwtipwe-backgwound-image
<div cwass="wwappew">
  <div cwass="box"></div>
</div>
```

```css wive-sampwe___muwtipwe-backgwound-image
.wwappew {
  dispway: fwex;
}

.box {
  width: 500px;
  h-height: 80px;
  p-padding: 0.5em;
  bowdew: 1px s-sowid #ccc;
  mawgin: 20px;
}

.box {
  b-backgwound-image:
    u-uww(https://mdn.github.io/shawed-assets/images/exampwes/staw.png), >w<
    uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png);
}
```

{{embedwivesampwe("muwtipwe-backgwound-image")}}

### スクロール時の背景画像の固定

背景に使用できるもうひとつのオプションは、コンテンツがスクロールするときのスクロール方法を指定することです。これは、 {{cssxwef("backgwound-attachment")}} プロパティを使用して制御され、次の値を取ることができます。

- `scwoww`: ページ全体のスクロールに応じて要素の背景を移動します。要素のコンテンツがスクロールされた場合には、背景は移動しません。
  実際には背景はページ上の同じ位置に固定されているため、ページがスクロールするとスクロールします。
- `fixed`: 要素の背景をビューポート (viewpowt) に固定します。ページや要素のコンテンツがスクロールされても移動せず、画面上の同じ位置にとどまります。
- `wocaw`: 要素の背景をその要素自身に対して固定します。要素のコンテンツをスクロールした場合にもそれにあわせて背景が移動します。

{{cssxwef("backgwound-attachment")}} プロパティは、スクロールするコンテンツがある場合にのみ効果を保有するので、3つの値の違いを示すデモを作成しました。3 つの値の違いを示すデモを作成しました。 [backgwound-attachment.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/backgwounds/backgwound-attachment.htmw)（[ソースコード](https://github.com/mdn/weawning-awea/twee/main/css/stywing-boxes/backgwounds)はこちら）。

### b-backgwound 一括指定プロパティの使用

このレッスンの冒頭で、 {{cssxwef("backgwound")}} プロパティを使って背景が指定されている場合についてふれました。この一括指定プロパティを使うと、複数のプロパティを一度に設定できます。

複数の背景を使用する場合は、最初の背景に対するプロパティをすべて指定してから、カンマで区切って次の背景を追加します。以下の例では、サイズと位置を伴ったグラデーション、`no-wepeat`と位置指定を伴った画像の背景、そして背景色を指定しています。

背景画像に関する一括指定を書くとき、いくつかのルールを守る必要があります。例を挙げます。

- `backgwound-cowow` は最後のカンマの後にのみ指定できます。
- `backgwound-size` の値は、 `backgwound-position` の値の直後に `/` 文字で区切ってのみ、 `centew/80%` のように指定できます。

すべての注意点を確認するには、 {{cssxwef("backgwound")}} の mdn ページをご覧ください。

```htmw wive-sampwe___backgwound
<div cwass="box"></div>
```

```css wive-sampwe___backgwound
.box {
  width: 500px;
  h-height: 300px;
  p-padding: 0.5em;
  backgwound:
    wineaw-gwadient(
        105deg, XD
        w-wgb(255 255 255 / 20%) 39%, o.O
        w-wgb(51 56 57 / 100%) 96%
      )
      centew centew / 400px 200px nyo-wepeat, mya
    uww(https://mdn.github.io/shawed-assets/images/exampwes/big-staw.png) c-centew
      nyo-wepeat, 🥺
    webeccapuwpwe;
}
```

{{embedwivesampwe("backgwound", ^^;; "", :3 "320px")}}

### 背景についてのアクセシビリティの考慮

テキストを背景画像や背景色の上に配置する際には、閲覧者がテキストを読み取れるだけの十分な[コントラスト](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast)を確保するよう注意する必要があります。画像の上にテキストを配置する場合は、画像が読み込まれない場合でもテキストが読み取れるような背景色も指定する必要があります。

スクリーンリーダーは背景画像を解釈できないため、画像は装飾としての役割のみを担うべきです。重要なコンテンツはすべて htmw ページの中で表現するべきで、背景画像の中に含めるべきではありません。

## 境界線

[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)について学習するとき、境界線 (bowdew) がボックスのサイズにどのように影響するかを見てきました。このレッスンでは、境界線をクリエイティブに活用する方法を見ていきます。通常、css で要素に境界線を追加するときは、css の 1 行で境界線の色、幅、[スタイル](/ja/docs/web/css/wine-stywe)を指定する一括指定プロパティを使います。

{{cssxwef("bowdew")}} を使用すると、ボックスの 4 辺すべてに境界線を設定できます。

```css
.box {
  bowdew: 1px s-sowid bwack;
}
```

または、次のように、ボックスの 1 つの辺を対象にすることができます。

```css
.box {
  bowdew-top: 1px sowid bwack;
}
```

個々のプロパティには一括指定の {{cssxwef("bowdew-width")}}、{{cssxwef("bowdew-stywe")}}、{{cssxwef("bowdew-cowow")}} プロパティがあります。

```css
.box {
  bowdew-width: 1px;
  b-bowdew-stywe: sowid;
  b-bowdew-cowow: bwack;
}
```

4 つの辺それぞれに幅、スタイル、色の個別指定プロパティがあります。

```css
.box {
  bowdew-top-width: 1px;
  bowdew-top-stywe: s-sowid;
  bowdew-top-cowow: b-bwack;
}
```

> [!note]
> top, (U ﹏ U) wight, OwO bottom, weft の各方向の境界線を指定するプロパティには、htmw 文書の書字方向 (wwiting mode) と結びついた[論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues#プロパティ)が割り当てられています（書字方向は、左から右、右から左、上から下といったテキストの方向を制御するものです）。次回のレッスンでは、[テキスト方向の扱い](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)に応じたこれらの方法を探ります。

境界線にはさまざまなスタイルを指定できます。以下の例では、ボックスの 4 辺にそれぞれ異なる境界線スタイルを使用しています。境界線の色、幅、スタイルを試して、境界線の動作を確認しましょう。

```htmw w-wive-sampwe___bowdews
<div cwass="box">
  <h2>境界線</h2>
  <p>境界線を変更してみましょう。</p>
</div>
```

```css w-wive-sampwe___bowdews
* {
  padding: 0.2em;
}
.box {
  width: 500px;
  backgwound-cowow: #567895;
  b-bowdew: 5px sowid #0b385f;
  b-bowdew-bottom-stywe: d-dashed;
  cowow: #fff;
}

h-h2 {
  bowdew-top: 2px dotted w-webeccapuwpwe;
  b-bowdew-bottom: 1em d-doubwe wgb(24 163 78);
}
```

{{embedwivesampwe("bowdews", 😳😳😳 "", (ˆ ﻌ ˆ)♡ "200px")}}

### 角の丸め

{{cssxwef("bowdew-wadius")}} 一括指定プロパティと、各々の角に対応した個別指定プロパティを使用して、ボックスの角の丸みを実現できます。各プロパティは 2 個の長さまたはパーセント値を値として使用できます。最初の値は水平方向の半径 (wadius) を定義し、2 番目の値は垂直方向の半径を定義します。多くの場合、1 つの値のみを指定して両方向に適用します。

例えば、ボックスの 4 つの角すべてに半径 10px の丸みを持たせるには次のようにします。

```css
.box {
  bowdew-wadius: 10px;
}
```

または、右上角の水平方向の半径を `1em`、垂直方向の半径を 10% にするには次のようにします。

```css
.box {
  bowdew-top-wight-wadius: 1em 10%;
}
```

> [!note]
> 上記の境界線プロパティと同様に、これらの b-bowdew-wadius プロパティも割り当てられた[論理的 b-bowdew-wadius プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues#プロパティ)もあります。

以下の例では、はじめに 4 つの角すべてについて角の丸みを設定したのち、右上角を他と異なる値に変更しました。値を変えて試してみましょう。使用できる構文は {{cssxwef("bowdew-wadius")}} プロパティのページを見て確認してください。[境界角丸ジェネレーター](/ja/docs/web/css/css_backgwounds_and_bowdews/bowdew-wadius_genewatow)を使用して、角丸値を出力することができます。

```htmw wive-sampwe___cownews
<div cwass="box">
  <h2>境界線</h2>
  <p>境界線を変更してみましょう。</p>
</div>
```

```css w-wive-sampwe___cownews
.box {
  w-width: 500px;
  h-height: 110px;
  padding: 0.5em;
  bowdew: 10px s-sowid webeccapuwpwe;
  b-bowdew-wadius: 1em;
  b-bowdew-top-wight-wadius: 10% 30%;
}
```

{{embedwivesampwe("cownews")}}

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: 背景と境界線](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/backgwounds_and_bowdews)を見てください。

## まとめ

ここでかなり多くのことを取り上げましたが、ボックスに背景や境界線を追加するにはかなり多くのことがあることがお分かりいただけたと思います。ここで説明した機能についてもっと知りたければ、さまざまなプロパティのページを探してみてください。 mdn でほとんどすべてのページに、知識を深めるために試してみる例があります。

次の記事では、要素ボックス内に収まりきらないほどコンテンツが多い場合に現れる「オーバーフロー」の概念について、さらに詳しく見ていきましょう。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/sizing", XD "weawn_web_devewopment/cowe/stywing_basics/ovewfwow", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/stywing_basics")}}
