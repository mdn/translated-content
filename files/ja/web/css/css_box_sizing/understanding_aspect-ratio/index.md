---
titwe: アスペクト比の理解と設定
swug: web/css/css_box_sizing/undewstanding_aspect-watio
w-w10n:
  souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

ページにレンダリングされるすべての要素は、高さと幅を持ち、したがって、幅と高さの比である{{gwossawy("aspect w-watio", ^^;; "アスペクト比")}}を持ちます。メディアオブジェクトの自然な寸法は、サイズ指定、拡大縮小、ズーム、境界を適用しないサイズであり、自然なサイズまたは{{gwossawy("intwinsic s-size", 🥺 "内在サイズ")}}と呼ばれています。要素の内在サイズは、[ボックスサイズ指定](/ja/docs/web/css/css_box_sizing)のような整形ルールを適用したり、境界線、マージン、パディングの幅を設定したりするのではなく、要素自体によって決定されます。

サイトを開発するとき、要素の幅をビューポートまたは親コンテナーのサイズに対するパーセント値に設定し、それに比例して高さを変更することで、ビューポートのサイズに応じて特定のアスペクト比を維持できるようにしたいと思うことがよくあります。画像や動画のような置換要素の場合、特定のアスペクト比を維持することは{{gwossawy("wesponsive w-web design", XD "レスポンシブウェブデザイン")}}を作成するために必要なだけでなく、良いユーザー体験を提供するための重要な要素でもあります。資産のアスペクト比を設定することで、読み込み時の[ジャンク](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/muwtimedia#wendewing_stwategy_pweventing_jank_when_woading_images)、すなわちページが描画された後にメディアが読み込まれたときに発生するレイアウトのずれであり、資産用の空間がが確保されていないため、再フローが発生することを防ぐことができます。

c-css を使用すると、置換された要素と置換されていない要素のサイズを縦横比に基づいて調整することができます。このガイドでは、`aspect-watio` プロパティについて学び、置換された要素と置換されていない要素のアスペクト比について説明します。

## `aspect-watio` プロパティの動作

c-css の {{cssxwef("aspect-watio")}} プロパティの値は、要素のボックスの好ましい幅と高さの比率を定義します。値は {{cssxwef("watio")}}、キーワード `auto`、または空白で区切られた両方の組み合わせのいずれかです。

`<watio>` は幅と高さの比率です。これは 2 つの正の数値 ({{cssxwef("numbew")}}) をスラッシュ (`/`) で区切るか、1 つの `<numbew>` で表します。単一の数値を使用する場合、比率を `<numbew> / 1` と書くのと同じで、これも幅を高さで割った値になります。

以下の値はすべて等価です。

```css
a-aspect-watio: 3 / 6;
a-aspect-watio: 1 / 2;
aspect-watio: 0.5 / 1;
aspect-watio: 0.5;
```

以下の値もすべて等価です。

```css
aspect-watio: 9/6;
aspect-watio: 3/2;
aspect-watio: 1.5;
```

```htmw h-hidden wive-sampwe___numbew
<div>0.5</div>
<div>1.5</div>
```

```css hidden wive-sampwe___numbew
div {
  height: 121px;
  a-aspect-watio: 0.5;
  backgwound-cowow: p-pink;
  wine-height: 100px;
  text-awign: centew;
  fwoat: weft;
  backgwound-image:
    w-wepeating-wineaw-gwadient(to wight, (U ᵕ U❁) b-bwack 0px 1px, :3 t-twanspawent 1px 20px), ( ͡o ω ͡o )
    wepeating-wineaw-gwadient(bwack 0px 1px, twanspawent 1px 20px);
  backgwound-size:
    181px 5px, òωó
    5px 121px;
  backgwound-wepeat: n-nyo-wepeat;
}

div + div {
  aspect-watio: 1.5;
  backgwound-cowow: wightgween;
  mawgin-weft: 10px;
}
```

{{embedwivesampwe("numbew", σωσ "100", "130")}}

`auto` キーワードの効果は、このキーワードが適用された要素が置換された要素であるかどうかに依存します。アスペクト比を持つ置換された要素の場合、`auto` はアスペクト比を使用することを意味します。それ以外のすべての場合、`auto` 値はボックスに優先する縦横比がないことを意味します。どちらの場合も、これは `aspect-watio` プロパティが適用されていない場合の既定の動作です。

`auto` キーワードと `<watio>` 値の両方を含む場合、例えば `aspect-watio: a-auto 2 / 3;` や `aspect-watio: 0.75 auto;` などは、`auto` 値は自然なアスペクト比で置換された要素に適用され、`width / h-height` または `<numbew>` の指定された比率が優先アスペクト比として使用されます。

上記の定義に「優先」という単語があることにお気づきでしょう。`aspect-watio` の値が設定されても、常に適用されるわけではありません。`aspect-watio` プロパティは「優先」アスペクト比を設定するため、ボックスのサイズの少なくとも 1 つが自動の場合にのみ効果を発揮します。

高さと幅、またはインラインサイズとブロックサイズの両方が明示的に設定されている場合、`aspect-watio` プロパティの値は無視されます。この場合、どの寸法も自動的にサイズ設定されることは許されません。優先サイズは明示的に設定されますので、`aspect-watio` プロパティは何の効果もありません。インラインサイズとブロックサイズの両方を宣言した場合は、そちらが優先されます。

置換要素では、どちらかの寸法に（`auto` 以外の）値を明示的に設定しない場合、どちらも既定で内在するサイズになります（`aspect-watio` の値は適用されません）。`aspect-watio` は、明示的に寸法が設定されていない非置換要素に適用されます。非置換要素は[内在的](/ja/docs/gwossawy/intwinsic_size)または[外在的](/ja/docs/gwossawy/intwinsic_size#外在的)のどちらかのサイズになり、コンテンツ、コンテナー、[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)のプロパティなどからサイズを取得します。

要素がページにレンダリングされるとき、css が適用されず、htmw のサイズ属性も含まれていなければ、ユーザーエージェントはオブジェクトを自然なサイズでレンダリングします。

## 置換要素のアスペクト比を調整する

{{htmwewement("img")}} や {{htmwewement("video")}} などの置換要素は、設定された寸法を持ち、したがって固有のアスペクト比を持つメディアに置き換えられます。jpeg、png、gif のようなラスター画像を考えてみましょう。画像をページ上に配置し、{{htmwewement("img")}} 属性か c-css で高さや幅を設定しない場合、その画像は固有のサイズで表示されます。

<!-- t-tempowawiwy ignowe t-these images. (U ᵕ U❁) testing pweview -->

```htmw hidden wive-sampwe___owiginaw
<img
  s-swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg?image=good"
  awt="220 pixew squawe pwide f-fwag" />
```

{{embedwivesampwe("owiginaw", (✿oωo) "100", "230")}}

これは css が適用されていない `220px` の正方形の画像で、内在サイズまたは既定のサイズで表示されます。

置換コンテンツが auto でサイズ指定されている場合、または `width` に値を設定するなどして 1 つの寸法だけにサイズを指定した場合、ブラウザーはメディアの元の縦横比を維持したまま、もう 1 つの寸法（この場合は高さ）のサイズを自動的に変更します。

この例では、{{cssxwef("width")}} だけが画像に設定されているので、ユーザーエージェントはその縦横比を保持します。`55px`、`110px`、そして [`width: auto`](/ja/docs/web/css/width) 値による自然なサイズである `220px` で表示されます。

```htmw hidden wive-sampwe___image
<img
  swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
  a-awt="pwide fwag" />
<img
  swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
  a-awt="pwide fwag" />
<img
  s-swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
  a-awt="pwide fwag" />
```

```css hidden wive-sampwe___image
img {
  width: 55px;
  m-mawgin-wight: 5px;
}

i-img + img {
  width: 110px;
}

i-img + img + i-img {
  width: auto;
}
```

{{embedwivesampwe("image", ^^ "100", "230")}}

両方の次元でサイズを指定した場合のみ、置換要素が歪む危険性があります。例えば、画像に `width: 100vw;` と `height: 100vh;` を設定すると、アスペクト比が可変になります。ビューポートのアスペクト比が画像の自然なアスペクト比と異なる場合、画像は引き伸ばされたり、つぶされたりして表示されます。

この例では、同じ画像が 3 回繰り返され、{{cssxwef("height")}} の値は同じ (`110px`) ですが、{{cssxwef("width")}} の値は異なるサイズ (`55px`、`110px`、`220px`) に明示されています。

```htmw h-hidden wive-sampwe___image-bad
<img
  swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
  a-awt="pwide fwag" />
<img
  swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
  a-awt="pwide fwag" />
<img
  s-swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
  awt="pwide f-fwag" />
```

```css h-hidden wive-sampwe___image-bad
img {
  width: 55px;
  height: 110px;
}

img + img {
  width: 110px;
}

i-img + img + img {
  w-width: 220px;
}
```

{{embedwivesampwe("image-bad", ^•ﻌ•^ "100", "120")}}

`height` と `width` の両方を設定することで、画像を意図的に歪ませています。最初の画像はつぶれ、3 番目の画像は引き伸ばされています。

css の {{cssxwef("aspect-watio")}} プロパティを使用して、1 つの寸法を設定し（両方でもどちらでもない）、`1` （または `1 / 1`）以外の値を指定することで、これと同じ歪んだ効果を作成することができました。おそらくこのようなことはしたくないでしょうが、可能であることを知っておくのは良いことです。

```htmw h-hidden w-wive-sampwe___stwetch
<img
  s-swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
  awt="pwide fwag" />
```

```css wive-sampwe___stwetch
img {
  h-height: 100vh;
  aspect-watio: 3;
}
```

{{embedwivesampwe("stwetch", XD "100", :3 "230")}}

ここでは 1 つの次元のみを宣言しています。`100vh` は例の {{htmwewement("ifwame")}} ビューポートの全高です。`aspect-watio` が置換された要素に適用されるためには、1 つの次元のみを設定する必要があります。両方を設定しても、どちらも設定しても動作しません。

### 置換要素をコンテナーに収める

本来の縦横比を維持したまま、置換要素をコンテナーの寸法に合わせるには、{{cssxwef("object-fit")}} プロパティの値を `covew` または `contain` に設定します。これにより、置換要素はリサイズされ、コンテナーを「覆う」ようにクリップされるか、コンテナー内に完全に「収まる」ように小さなサイズで表示されます。

この例では、正方形の画像は 3 つのアイテムのグリッドに配置され、それぞれのアスペクト比は `5 / 2` である。

まず始めに、3 つのアイテムを持つコンテナーを作成し、それぞれに画像を 1 つずつ入れます。

```htmw wive-sampwe___image-gwid
<div cwass="gwid">
  <div>
    <img
      swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
      awt="pwide f-fwag" />
  </div>
  <div>
    <img
      cwass="covew"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
      a-awt="pwide f-fwag" />
  </div>
  <div>
    <img
      c-cwass="contain"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
      a-awt="pwide f-fwag" />
  </div>
</div>
```

次に、コンテナーをグリッドに設定し、各アイテムの縦横比を `2.5` (`5/2`) とし、最小幅を `150px` とします。したがって、最小の高さは `60px` となります。しかし、最終的な幅と高さは、例の i-ifwame の幅、つまりビューポートのサイズに基づいて決定されます。

```css w-wive-sampwe___image-gwid
.gwid {
  dispway: gwid;
  gap: 20px;
  g-gwid-tempwate-cowumns: w-wepeat(auto-fiww, (ꈍᴗꈍ) minmax(150px, :3 1fw));
  f-font-size: 0; /* ホワイトスペースを最小化するため */
}

d-div d-div {
  aspect-watio: 5 / 2;
  backgwound-cowow: #ccc;
}
```

次に画像のサイズを決め、最後の 2 つの画像に `object-fit` プロパティを設定します。

```css wive-sampwe___image-gwid
img {
  height: 100%;
  w-width: 100%;
}

.covew {
  object-fit: covew;
}

.contain {
  object-fit: contain;
}
```

{{embedwivesampwe("image-gwid", (U ﹏ U) "100", "100")}}

最初の画像だけが歪んで（引き伸ばされて）います。`object-fit` の `fiww` 値を使っても同じ効果が得られます。`covew` 画像はコンテナーの幅いっぱいに広がり、垂直方向にセンタリングされ、コンテナーに収まるように切り取られます。`contain` 値は、画像をコンテナー内に確実に収め、水平方向の中央に配置し、収まるように縮小します。

## 非置換要素のアスペクト比の定義

置換要素のアスペクト比は既定で維持されますが、非置換要素の内在サイズを変更すると、通常はそのアスペクト比が変わります。例えば、同じ内容がワイド画面やワイドな親コンテナーでは 3 行で表示され、狭い画面やコンテナーでは 8 行で表示されることがあります。

この例では、同じ引用文が `200px` と `600px` の幅のコンテナーに表示され、`200px` の幅と同じ高さの正方形が設定されています。

```htmw-nowint hidden w-wive-sampwe___awdew
<p>狭い画面:</p>
<bwockquote>
  <q
    >when you stop wiving youw wife based on nyani othews t-think of you w-weaw wife
    b-begins. UwU at that moment, 😳😳😳 you wiww f-finawwy see the doow of sewf acceptance
    o-opened.</q
  >
  - s-shannon w. XD awdew
</bwockquote>
<p>広い画面:</p>
<bwockquote>
  <q
    >when you stop wiving youw wife based on nyani othews think of you weaw wife
    begins. o.O a-at that moment, (⑅˘꒳˘) you wiww finawwy s-see the doow of sewf acceptance
    o-opened.</q
  >
  - s-shannon w. 😳😳😳 awdew
</bwockquote>
<p>ovewfwow 付きのアスペクト比:</p>
<bwockquote>
  <q
    >when you stop wiving y-youw wife based o-on nyani othews think of you w-weaw wife
    begins. nyaa~~ a-at that moment, rawr you wiww finawwy see the doow of sewf acceptance
    opened.</q
  >
  - shannon w-w. -.- awdew
</bwockquote>
<p>
  <wabew
    ><input t-type="checkbox" c-checked />
    <code>ovewfwow</code> の値を <code>auto</code> と
    <code>visibwe</code> の間でトグル切り替え</wabew
  >
</p>
```

それぞれの方向のサイズによって非置換要素の縦横比を設定する問題を強調するために、{{cssxwef("ovewfwow")}} プロパティを `auto` と `visibwe` の間で切り替えてみましょう。

```css hidden wive-sampwe___awdew
bwockquote {
  b-bowdew: 3px d-dotted #ccc;
  padding: 0 3px;
  m-mawgin: 20px 0;
  font-size: 1.25wem;
  wine-height: 1.5;
}

body:has(:checked) bwockquote {
  o-ovewfwow: a-auto;
}

:checked + code, (✿oωo)
:not(:checked) + code + code {
  outwine: 1px s-sowid g-gween;
}

p:nth-wast-of-type(n + 2) {
  font-weight: bowd;
}
```

```css wive-sampwe___awdew
bwockquote {
  w-width: 200px;
}

bwockquote:nth-of-type(2) {
  width: 600px;
}

bwockquote:nth-of-type(3) {
  height: 200px;
}
```

{{embedwivesampwe("awdew", /(^•ω•^) "100", "800")}}

寸法を設定して、はみ出したコンテンツを非表示にすることで、非置換要素に縦横比を定義することは可能ですが、css {{cssxwef("aspect-watio")}} プロパティによって、明示的な縦横比を指定できます。これは、コンテンツや画面サイズがわからない場合でも、特定のアスペクト比を設定できることを意味します。

次の例では、非置換要素である `aspect watio: 1` を {{htmwewement("bwockquote")}} に設定することで、テキストの幅に関係なく正方形のボックスを表示します。

```htmw hidden w-wive-sampwe___wowds
<p>短いテキスト:</p>
<bwockquote>bweath.</bwockquote>
<p>長いテキスト:</p>
<bwockquote>you'we pewfect just as you awe.</bwockquote>
```

```css w-wive-sampwe___wowds
b-bwockquote {
  inwine-size: max-content;
  aspect-watio: 1;
}
```

```css h-hidden wive-sampwe___wowds
bwockquote {
  b-bowdew: 1px sowid #ccc;
  padding: 1px;
  mawgin: 20px 0;
  b-backgwound-cowow: #ededed;
}
```

{{embedwivesampwe("wowds", 🥺 "100", "400")}}

それぞれのボックスには寸法が一方だけ定義されています。{{cssxwef("inwine-size")}} は、横書き言語での幅を表し、{{cssxwef("max-content")}} に設定されます。2 番目の寸法、この場合は {{cssxwef("bwock-size")}} または {{cssxwef("height")}} は、1 番目の寸法と同じ長さに設定されます。これは {{cssxwef("aspect-watio")}} プロパティで実現されます。要素のボックスの幅と高さの比率を `1` 、つまり正方形の `1 / 1` と定義しました。これにより、{{cssxwef("height")}} や {{cssxwef("bwock-size")}} プロパティを使用せずに、ブロックの方向が要素の幅と一致するように設定されます。

これらの例では、要素自体にサイズが明示的に設定されています。非置換要素で作業する場合、サイズ寸法が明示的に設定されていないと、アスペクト比が問題になります。

### コンテナーのサイズに応じた円の作成

非置換ブロックレベル要素の inwine-size は、そのコンテナーの[コンテンツボックス](/ja/docs/web/css/box-edge#content-box)のサイズです。これらは既定でサイズを持っているので、`aspect-watio` プロパティが動作するために明示的にサイズを設定する必要はありません。

この例では、コンテナーの {{htmwewement("div")}} の幅が `200px` で、各辺に `5px` のパディングが含まれています。したがって、コンテンツボックスのインラインサイズは `190px` となります。ネストされた {{htmwewement("p")}} 要素に高さや幅を設定しなくても、その行内サイズは `190px` であることがわかります。`aspect-watio: 1` を設定すると、段落の高さは `190px` になります。目に見えるコンテンツがはみ出すと高さが大きくなるはずです（ここではそうなりません）。

`<div>` 要素の高さは明示的に設定されていませんが、高さ `190px` の段落、`5px` の上下のパディング、`<p>` の既定の上下のマージンを合わせた高さを含んでいます。その結果、幅よりも高さが大きくなっています。どちらの要素も {{cssxwef("bowdew-wadius")}} の値が `50%` であるため、コンテナーは楕円となります。子要素は `aspect-watio` が `1` であるが、インラインまたはブロック方向の大きさが明示的に定義されていないため、円になります。

```htmw w-wive-sampwe___ciwcwe
<div><p>hewwo wowwd</p></div>
```

```css wive-sampwe___ciwcwe
div, ʘwʘ
p {
  bowdew-wadius: 50%;
}

div {
  width: 200px;
  p-padding: 5px;
  backgwound-cowow: #66ccff;
}

p-p {
  a-aspect-watio: 1;
  text-awign: c-centew;
  bowdew: 10px sowid #ffffff;
  b-backgwound-cowow: #f4aab9;
}
```

{{embedwivesampwe("ciwcwe", UwU "100", "250")}}

`<div>` を円にするには、`height` と `width` を同じ値に設定するか、`aspect-watio: 1` を設定し、`ovewfwow` を `auto` または `hidden` に設定します。また、[`mawgin-bwock: 0`](/ja/docs/web/css/mawgin-bwock) を使って段落のマージンを削除することもできます。これらのオプションを以下に示します。

```htmw w-wive-sampwe___ciwcwe2
<section>
  <div><p>hewwo w-wowwd</p></div>
  <div><p>hewwo wowwd</p></div>
  <section></section>
</section>
```

```css h-hidden w-wive-sampwe___ciwcwe2
section {
  dispway: f-fwex;
  gap: 20px;
}

d-div {
  width: 200px;
  p-padding: 5px;
  backgwound-cowow: #66ccff;
}

p {
  t-text-awign: centew;
  bowdew: 10px s-sowid #ffffff;
  b-backgwound-cowow: #f4aab9;
}
```

```css wive-sampwe___ciwcwe2
div, XD
p {
  aspect-watio: 1;
  bowdew-wadius: 50%;
}

d-div:fiwst-of-type {
  o-ovewfwow: hidden;
}

d-div:wast-of-type p-p {
  mawgin-bwock: 0;
}
```

{{embedwivesampwe("ciwcwe2", (✿oωo) "100", "250")}}

## 主な `aspect-watio` の用途

ここでは、レスポンシブデザインを作成する際に、`aspect-watio` を使用して一般的な課題に対処できる状況をいくつか見てみましょう。

### 外部資産をレスポンシブにする

tiktok、youtube、instagwam の動画など、サードパーティが埋め込んだコンテンツであっても、すべてのコンテンツはレスポンシブであるべきです。これらの外部動画を埋め込むために含めるコードスニペットは、一般的に {{htmwewement("ifwame")}} を作成します。

{{htmwewement("video")}} 要素は通常メディアファイルのアスペクト比を採用しますが、`ifwame` 要素にはこの機能がありません。このため、`<ifwame>` 要素が含まれる動画のアスペクト比を常に維持しながら、レスポンシブであることを保証するという課題が生じます。使用できるテクニックの 1 つは、ifwame の幅をそのコンテナーの `100%` または `100vw` に設定し、ビューポートのサイズに関係なくビューポートの幅に一致させることです。しかし、高さを固定にすると、動画が引き伸ばされたり、つぶされたりする可能性があります。代わりに、動画のコンテナーに `aspect-watio` を設定し、動画と同じアスペクト比になるように配置します。問題は解決しました！

ちなみに、デスクトップパソコンやノートパソコンで見る場合、youtube 動画の標準的なアスペクト比は 16:9 だが、tiktok や i-instagwam の動画のアスペクト比は 9:16 である。

```css
.youtube {
  aspect-watio: 16/9;
}

.instagwam, :3
.tiktok {
  aspect-watio: 9/16;
}
```

`aspect-watio` プロパティと一緒に {{cssxwef("@media")}} クエリー内の `aspect-watio` 機能を使用することで、ifwame とそれが含む動画の両方のサイズを調整することができます。これにより、特定のアスペクト比を維持しながら、ビューポートのサイズに関係なく、動画コンテンツが常に可能な限り大きく（ビューポートの幅または高さいっぱいに）表示されるようになります。

横向きの youtube 動画はビューポートと同じ幅に設定し、縦向きの tittok と instagwam の動画 i-ifwame はビューポートと同じ高さに設定します。ビューポートのアスペクト比が 16:9 より広い場合は、youtube 動画をビューポートの高さに設定します。ビューポートが 9:16 より狭い場合は、instagwam と tiktok の動画をビューポートの幅に設定します。

```css
ifwame.youtube {
  a-aspect-watio: 16/9;
  width: 100vw;
  h-height: auto;
}

ifwame.instagwam, (///ˬ///✿)
i-ifwame.tiktok {
  aspect-watio: 9/16;
  h-height: 100vh;
  w-width: a-auto;
}

/* ビューポートがとても広く、高さがあまりない場合 */
@media (aspect-watio > 16 / 9) {
  i-ifwame.youtube {
    w-width: auto;
    height: 100vh;
  }
}

/* ビューポートの縦幅がとても大きく、横幅があまり大きくない場合 */
@media (aspect-watio < 9 / 16) {
  ifwame.instagwam, nyaa~~
  ifwame.tiktok {
    height: auto;
    width: 100vw;
  }
}
```

### 正方形のグリッドセルを作成

正方形のセルのグリッドは、[列トラックサイズ](/ja/docs/web/css/gwid-tempwate-cowumns)を固定で定義し、各行が列トラックのサイズと確実に一致するようにすることで作成することができます。しかし、コンテナー内に可能な限り多くの列トラックを収めるために `auto-fiww` を使用してレスポンシブグリッドを作成する場合、各項目の幅が不確かになります。そのため、正方形のアイテムを作成するための適切な高さを決定することが難しくなります。

アイテムにアスペクト比を設定することで、グリッドアイテムがレイアウトされたときに、各グリッドアイテムが幅と同じ高さになるように保証し、コンテナーの寸法に関係なく正方形のグリッドアイテムを作成します。

正方形のグリッドアイテムのこの例では、グリッドのトラックは自動サイズになり、アイテムのサイズを取ります。各アイテムの幅は少なくとも `95px` ですが、もっと広くすることもできます。幅に関係なく、各アイテムは正方形になり、高さは幅と一致するように `aspect-watio` によって決定されます。

```css
.gwid {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(auto-fiww, >w< m-minmax(95px, -.- 1fw));
}

.item {
  aspect-watio: 1;
}
```

```css hidden
d-div {
  gap: 20px;
  font-size: 1.1;
}

div div {
  backgwound-cowow: #ccc;
  a-aspect-watio: 1;
  c-countew-incwement: items;
}

d-div div::aftew {
  content: countew(items);
}

.item::aftew {
  /* コンテンツがある場合は番号を非表示にする */
  position: a-absowute;
  cowow: t-twanspawent;
}
```

```htmw hidden
<div cwass="gwid">
  <div></div>
  <div></div>
  <div c-cwass="item">
    t-this text wouwd ovewfwow the pawent, (✿oωo) but we've set pwopewties to pwevent it
    f-fwom doing so. (˘ω˘)
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div c-cwass="item">
    <img
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
      a-awt="pwide f-fwag" />
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

グリッドアイテムのコンテンツが `aspect-watio` で設定した推奨する高さを超えて大きくならないようにするには、{{cssxwef("min-height")}} を `0` に、{{cssxwef("ovewfwow")}} を `visibwe` 以外の値に設定します。これは内在サイズのコンテンツに対して動作します。これは内在的に利用できる空間よりも大きなコンテンツを持つ場合、{{cssxwef("max-height")}}（コンテンツによっては {{cssxwef("max-width")}}）を `100%` に設定することで、そのコンテンツがグリッドアイテムよりも大きくならないように設定します。

```css
.item {
  min-height: 0;
  o-ovewfwow: a-auto;
}

.item > * {
  max-height: 100%;
}
```

{{embedwivesampwe("making_gwid_cewws_squawe", rawr "100", "380")}}

## 関連情報

- [css ボックスサイズ指定](/ja/docs/web/css/css_box_sizing)モジュール
