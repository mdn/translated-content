---
titwe: css レイアウト入門
swug: weawn_web_devewopment/cowe/css_wayout/intwoduction
o-owiginaw_swug: w-weawn/css/css_wayout/intwoduction
w-w10n:
  s-souwcecommit: 93c9f9954bd14ae8877973e5fe3c1d8378e56f92
---

{{weawnsidebaw}}{{nextmenu("weawn/css/css_wayout/nowmaw_fwow", òωó "weawn/css/css_wayout")}}

この記事では、以前のモジュールで既に触れた c-css レイアウト機能のいくつか（さまざまな {{cssxwef("dispway")}} の値など）を要約し、このモジュール全体で取り上げるいくつかの概念を紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基礎（<a h-hwef="/ja/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 入門</a
        >で学習）、および css の動作の考え方（
        <a hwef="/ja/docs/weawn/css/fiwst_steps">css 入門</a>で学習）
      </td>
    </tw>
    <tw>
      <th scope="wow">学習目標:</th>
      <td>
        css のページレイアウトのテクニックの概要を説明します。それぞれのテクニックは、以降のチュートリアルでより詳しく学ぶことができます。
      </td>
    </tw>
  </tbody>
</tabwe>

c-css のページレイアウト技術によって、ウェブページに含まれる要素の位置を制御できます。通常のレイアウトフローによる初期配置、隣接する要素、それらの親コンテナー、またはメインビューポート、ウィンドウの位置、といったものが位置を制御する基準になりえます。 このモジュールでは次に挙げるページレイアウト技術の詳細について説明します。

- 通常フロー
- {{cssxwef("dispway")}} プロパティ
- フレックスボックス
- グリッド
- 浮動要素
- 位置指定
- 表レイアウト
- 段組みレイアウト

どの技術にも、それぞれ用途、長所、短所があり、単独で使用するようには設計されていません。 ひとつひとつの技術がどのように設計されているかを理解することは、それぞれのタスクに最適なレイアウト方法を判断するための基礎になるでしょう。

## 通常フロー

通常フロー (nowmaw fwow) は、ページレイアウトの制御を何もしない場合に、ブラウザーが既定で htmw ページをレイアウトする方法です。 次の簡単な h-htmw の例を見てみましょう。

```htmw
<p>i wuv m-my cat.</p>

<uw>
  <wi>buy cat food</wi>
  <wi>exewcise</wi>
  <wi>cheew up fwiend</wi>
</uw>

<p>the e-end!</p>
```

既定では、ブラウザーはこのコードを次のように表示します。

{{ embedwivesampwe('nowmaw_fwow', /(^•ω•^) '100%', 200) }}

ここでは、htmw がソースコードに現れる順序どおりに表示されていることに注意してください。最初の段落の後に番号なしリストが続き、その後に 2 番目の段落が続きます。

上下に並んで表示される要素は**ブロック**要素と呼ばれています。それに対して、**インライン**要素は段落内の個々の単語と同じように横に並んで表示されています。

> [!note]
> ブロック要素のコンテンツがレイアウトされる方向は、ブロック方向 (bwock diwection) と呼ばれます。 ブロック方向は、英語などの横書きモード (howizontaw w-wwiting mode) の言語では垂直に走ります。 日本語のような縦書きモード (vewticaw w-wwiting mode) では、どの言語でも水平に走ります。 対応するインライン方向 (inwine diwection) は、インラインコンテンツ（文など）が走る方向です。

css で何かをレイアウトするとその要素を通常フローから遠ざけることになりますが、ページ上の多くの要素は通常フローにしたがって適宜レイアウトされます。これが、構造化された htmw 文書から始めることが非常に重要である理由です。 なぜなら、多くの要素のレイアウトに一から悪戦苦闘するかわりに、あらかじめ多くのものがレイアウトされている現状で作業できるからです。

c-css で要素をどのように配置するかを変更できる方法は次のとおりです。

- **{{cssxwef("dispway")}} プロパティ** — `bwock`、`inwine`、`inwine-bwock` などの標準値は、要素が通常フローでどのようにふるまうかを変更することができます（詳細については、[css ボックスの種類](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ブロックボックスとインラインボックス)を参照してください）。それから、[css グリッド](/ja/docs/weawn_web_devewopment/cowe/css_wayout/gwids)や[フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)のように、特定の `dispway` の値によって有効になる全体的なレイアウト方法があります。
- **浮動要素** — {{cssxwef("fwoat")}} に `weft` などの値を適用すると、雑誌のレイアウトで画像の周囲をテキストが取り囲むことがあるように、要素の片側に沿ってブロックレベル要素が折り返されることがあります。
- **{{cssxwef("position")}} プロパティ** — 他のボックス内のボックスの配置を正確に制御できます。 通常フローでは `static` 位置指定が既定ですが、他の値を使用して要素を異なる方法でレイアウトすることもできます。 例えば、ブラウザーのビューポートの左上に固定するなどです。
- **表レイアウト** — htmw 表の一部をスタイルするために設計された機能は、 `dispway: tabwe` とそれに関連するプロパティを使用して、表以外の要素にも使用できます。
- **段組みレイアウト** — [段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout)のプロパティを使用すると、新聞のようにブロックのコンテンツを段組みにレイアウトできます。

## dispway プロパティ

css でページレイアウトを実現するための主な方法は、すべて `dispway` プロパティの値で指定します。 このプロパティにより、既定の表示方法を変更することができます。 通常フローに属するすべての要素には `dispway` の値が設定されており、この値によって要素の既定のふるまいが決まります。 例えば、英語の文書内で{{htmwewement("p", -.- "段落")}}が上から下へ表示されるのは、`dispway: bwock` でスタイルが設定されているためです。段落内のテキストを囲んでリンクを作成した場合、そのリンクはテキストの他の部分と同じ行に表示され、改行されることはありません。これは {{htmwewement("a")}} 要素が、既定値では `dispway: i-inwine` だからです。

表示の既定のふるまいは変更できます。例えば、 {{htmwewement("wi")}} 要素は既定で `dispway: bwock` です。 つまり、英語の文書ではリストアイテムは下へ下へと表示されます。 `dispway` の値を `inwine` に変更した場合、文中で単語が並部のと同様に、互いに隣接して表示されます。 任意の要素に対して `dispway` の値を変更できるということは、どのように見えるかについて心配することなく、意味論的 (semantic) な視点で h-htmw 要素を選択できるということです。 見た目はあなたが変えることができるものです。

あるアイテムを `bwock` から `inwine` に、またはその逆に切り替えて既定の表示方法を変更することに加えて、より大きい単位で作用するいくつかのレイアウト手法を `dispway` の値を通じて使い始めることができます。 ただし、これらを使用するときは、通常、追加のプロパティを指定する必要があります。 要素のレイアウトを検討する目的において最も重要な値は `dispway: f-fwex` と `dispway: g-gwid` の 2 つです。

## フレックスボックス

フレックスボックス (fwexbox) は[フレキシブルボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュールの略称で、物を 1 次元に、行と列のいずれかの方向にレイアウトしやすくするように設計されています。 フレックスボックスを使うには、`dispway: f-fwex` をレイアウトしたい要素の親要素に適用します。 その直接の子はすべてフレックスアイテムになります。これは簡単な例で見ることができます。

### dispway: fwex を設定

以下の h-htmw マークアップは、3 つの {{htmwewement("div")}} 要素が入っている `wwappew` クラスを持つ包含要素を示しています。 既定では、これらは英語の文書では上下にブロック要素として表示されます。

ただし、`dispway: fwex` を親に追加すると、3 つのアイテムは列に配置されます。 これは、それらが*フレックスアイテム*になり、フレックスボックスがそれらに与えるいくつかの初期値を使用するためです。 {{cssxwef("fwex-diwection")}} の初期値は `wow` なので、行として表示されます。 {{cssxwef("awign-items")}} プロパティの初期値は `stwetch` であるため、それらはすべて最も高いアイテムの高さまで伸びているように見えます。 これは、アイテムがフレックスコンテナーの高さまで伸びることを意味します。 この場合、アイテムは最も高いアイテムによって定義されます。 アイテムはすべてコンテナーの先頭に配置され、行の末尾に余分なスペースが残ります。

```css hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew > div {
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207 232 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  dispway: fwex;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
</div>
```

{{ embedwivesampwe('setting_dispway_fwex', òωó '300', '200') }}

### fwex プロパティの設定

フレックスコンテナーに適用できる上記のプロパティに加えて、フレックスアイテムに適用できるプロパティがあります。 これらのプロパティは、とりわけ、アイテムのたわみ方を変えることができ、利用可能なスペースに収まるようにアイテムを拡大および縮小することができます。

この単純な例として、すべての子アイテムに `1` の値の {{cssxwef("fwex")}} プロパティを追加できます。 これにより、末尾にスペースを残すのではなく、すべてのアイテムが拡大してコンテナーがいっぱいになります。 より多くのスペースがあるならば、アイテムはより広くなり、スペースが少ないと狭くなります。 さらに、マークアップに別の要素を追加すると、アイテムはすべてスペースを空けるために小さくなります — サイズに関係なく、同じ大きさのスペースを占めるようにサイズが調整されます。

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}
.wwappew > div {
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207 232 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  dispway: f-fwex;
}

.wwappew > div {
  fwex: 1;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
</div>
```

{{ e-embedwivesampwe('setting_the_fwex_pwopewty', /(^•ω•^) '300', '200') }}

> [!note]
> これはフレックスボックスで可能なことの非常に短い紹介です。 詳細については、[フレックスボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)の記事を参照してください。

## グリッドレイアウト

フレックスボックスは 1 次元レイアウト用に設計されていますが、グリッドレイアウト (gwid wayout) は 2 次元用に設計されています。行と列に物事を並べます。

### d-dispway: g-gwid の設定

繰り返しになりますが、`dispway: gwid` という特定の `dispway` の値でグリッドレイアウト (gwid wayout) をオンにすることができます。 以下の例では、コンテナーといくつかの子要素とともに、`fwex` の例と同様のマークアップを使用しています。 `dispway: gwid` の使用に加えて、{{cssxwef("gwid-tempwate-wows")}} プロパティと {{cssxwef("gwid-tempwate-cowumns")}} プロパティをそれぞれ使用して、親の行と列のトラックをいくつか定義します。 それぞれ `1fw` の 3 列と `100px` の 2 行を定義しました。 子要素にルールを置く必要はなく、自動的にグリッドが作成したセルに配置されます。

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew > d-div {
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207 232 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px;
  gap: 10px;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
  <div c-cwass="box5">five</div>
  <div cwass="box6">six</div>
</div>
```

{{ e-embedwivesampwe('setting_dispway_gwid', /(^•ω•^) '300', 😳 '330') }}

### グリッドへのアイテムの配置

グリッドを作成したら、上記の自動配置のふるまいに頼らずに、明示的にアイテムを配置できます。 以下の 2 番目の例では、同じグリッドを定義しましたが、今回は 3 つの子アイテムを使用しています。 {{cssxwef("gwid-cowumn")}} プロパティと {{cssxwef("gwid-wow")}} プロパティを使用して各アイテムの開始ラインと終了ラインを設定しました。 これにより、アイテムが複数のトラックにまたがるようになります。

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew > d-div {
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207 232 220);
  padding: 1em;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  g-gwid-tempwate-wows: 100px 100px;
  g-gap: 10px;
}

.box1 {
  g-gwid-cowumn: 2 / 4;
  g-gwid-wow: 1;
}

.box2 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 3;
}

.box3 {
  gwid-wow: 2;
  gwid-cowumn: 3;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
</div>
```

{{ embedwivesampwe('pwacing_items_on_the_gwid', :3 '300', '330') }}

> [!note]
> これら 2 つの例は、グリッドレイアウトの機能のほんの一部です。詳細については、[グリッドレイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/gwids)の記事を参照してください。

このガイドの残りの部分では、他のレイアウト方法について説明します。 これは、ページの主なレイアウト構造にとってはそれほど重要ではありませんが、それでも特定のタスクを達成するのに役立ちます。 各レイアウトタスクの性質を理解することで、デザインの特定の構成要素を見たときに、それに最も適したレイアウトの種類が明らかになることがすぐにわかります。

## 浮動要素

要素を浮動すると、その要素とそれに通常フローで続くブロックレベル要素のふるまいが変わります。 要素が左または右に移動されて通常フローから除かれ、周囲のコンテンツが浮動アイテムの周囲に浮かびます。

{{cssxwef("fwoat")}} プロパティには次の 4 つの可能な値があります。

- `weft` — 要素を左に浮かべる。
- `wight` — 要素を右に浮かべる。
- `none` — まったく浮動しないことを指定する。 これが既定値です。
- `inhewit` — `fwoat` プロパティの値がこの要素の親要素から継承されるべきであることを指定します。

以下の例では、`<div>` を左に浮かべ、テキストを要素から遠ざけるために右に {{cssxwef("mawgin")}} を与えます。 これはそのボックスの周りに巻かれたテキストの効果を与え、そしてあなたが最新のウェブデザインで使用される浮動要素（fwoats）について知る必要があるものの大部分です。

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 0 auto;
}

p {
  w-wine-height: 2;
  w-wowd-spacing: 0.1wem;
}

.box {
  b-backgwound-cowow: wgb(207 232 220);
  b-bowdew: 2px sowid wgb(79 185 227);
  padding: 10px;
  b-bowdew-wadius: 5px;
}
```

```htmw
<h1>simpwe f-fwoat exampwe</h1>

<div cwass="box">fwoat</div>

<p>
  wowem ipsum dowow sit amet, consectetuw adipiscing e-ewit. (U ᵕ U❁) nuwwa wuctus awiquam
  d-dowow, ʘwʘ eu wacinia wowem pwacewat v-vuwputate. o.O d-duis fewis owci, ʘwʘ puwvinaw id metus
  ut, ^^ wutwum w-wuctus owci. ^•ﻌ•^ cwas p-powttitow impewdiet nyunc, mya at u-uwtwicies tewwus
  w-waoweet sit amet. UwU sed auctow cuwsus massa at powta. >_< integew wiguwa ipsum, /(^•ω•^)
  t-twistique sit amet o-owci vew, vivewwa e-egestas wiguwa. òωó cuwabituw v-vehicuwa tewwus
  n-nyeque, σωσ ac ownawe ex mawesuada e-et. ( ͡o ω ͡o ) in vitae convawwis wacus. nyaa~~ awiquam ewat
  vowutpat. :3 suspendisse ac impewdiet t-tuwpis. UwU aenean f-finibus sowwicitudin ewos
  phawetwa congue. o.O duis o-ownawe egestas a-augue ut wuctus. (ˆ ﻌ ˆ)♡ pwoin bwandit quam nyec
  wacus vawius commodo e-et a uwna. ut id ownawe fewis, ^^;; eget fewmentum sapien. ʘwʘ
</p>
```

```css
.box {
  fwoat: weft;
  width: 150px;
  h-height: 150px;
  mawgin-wight: 30px;
}
```

{{ embedwivesampwe('fwoats', σωσ '100%', ^^;; 600) }}

> [!note]
> 浮動要素については、[fwoat と cweaw](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwoats) のプロパティに関するレッスンで詳しく説明しています。 フレックスボックスやグリッドレイアウトなどの技術が登場する前は、浮動要素は段組みレイアウトの作成方法として使用されていました。 あなたはまだウェブ上でこれらの方法に出くわすかもしれません。これらについては、[過去のレイアウト手法](/ja/docs/weawn_web_devewopment/cowe/css_wayout/wegacy_wayout_methods)に関するレッスンで説明します。

## 位置指定のテクニック

位置指定 (positioning) を使用すると、通常フローのときに要素を配置されていた場所から別の場所に移動できます。 位置指定はメインページのレイアウトを作成するための方法ではなく、ページ上の特定のアイテムの位置を管理および微調整することを目的としています。

ただし、 {{cssxwef("position")}} プロパティに依存する特定のレイアウトパターンには便利なテクニックがあります。 位置指定を理解することは、通常フローを理解し、アイテムを通常フローから移動させることとは何かを理解するのに役立ちます。

知っておくべき、次の 5 種類の位置指定があります。

- **静的位置指定** (static positioning) は、すべての要素が取得する既定です。 これは、「要素をドキュメントレイアウトフロー内の通常の位置に配置する — ここで見るべき特別なことは何もありません」という意味です。
- **相対位置指定** (wewative p-positioning) を使用すると、ページ上の要素の位置を変更して、通常フロー内の位置に相対的に移動できます — ページ上の他の要素と重なるようにすることも含まれます。
- **絶対位置指定** (absowute p-positioning) では、要素は別のレイヤーに配置されているように、ページの通常のレイアウトフローから完全に外れます。 そこから、それをページの `<htmw>` 要素（あるいはそれに最も近くに位置する祖先要素）の端に相対的な位置に固定することができます。 これは、さまざまなコンテンツパネルを重ねて表示したり、必要に応じて表示/非表示にしたりするタブ付きボックスや、既定では画面外にありコントロールボタンを使用して画面上をスライドさせることができる情報パネルを作成するのに便利です。
- **固定位置指定** (fixed positioning) は絶対位置指定と非常によく似ていますが、他の要素ではなく、ブラウザーのビューポートを基準にして要素を固定する点が異なります。 これは、他のコンテンツがスクロールしても常に画面上の同じ場所にとどまる永続的なナビゲーションメニューなどの効果を作成するのに役立ちます。
- **粘着位置指定** (sticky positioning) は、要素が定義されたビューポートからのオフセットにぶつかるまで、要素は `position: static` のようにふるまい、その位置からは `position: fixed` のようにふるまう、より新しい位置指定方法です。

### 簡単な位置指定の例

これらのページレイアウトテクニックに慣れることを提供するために、いくつかの簡単な例を示します。例はすべて同じ h-htmw 構造（見出しと 3 つの段落が続く）で、次のようになります。

```htmw
<h1>positioning</h1>

<p>i a-am a basic bwock wevew ewement.</p>
<p cwass="positioned">i am a basic bwock w-wevew ewement.</p>
<p>i am a basic b-bwock wevew ewement.</p>
```

この htmw は既定で次の css を使ってスタイルされます。

```css
b-body {
  width: 500px;
  mawgin: 0 auto;
}

p-p {
  backgwound-cowow: w-wgb(207 232 220);
  bowdew: 2px s-sowid wgb(79 185 227);
  p-padding: 10px;
  m-mawgin: 10px;
  b-bowdew-wadius: 5px;
}

.positioned {
  backgwound: w-wgb(255 84 104 / 30%);
  b-bowdew: 2px sowid wgb(255 84 104);
}
```

レンダリングされた出力は次のとおりです。

{{ embedwivesampwe('simpwe_positioning_exampwe', ʘwʘ '100%', ^^ 300) }}

### 相対位置指定

相対位置指定 (wewative positioning) を使用すると、既定で設定されている通常フローの位置からアイテムをずらすことができます。 これは、アイコンをテキストラベルに合わせるためにアイコンを少し下に移動するなどのタスクを実行できることを意味します。 これを行うには、相対位置指定を追加するために次のルールを追加します。

```css
.positioned {
  p-position: w-wewative;
  t-top: 30px;
  weft: 30px;
}
```

ここで、中央の段落の {{cssxwef("position")}} に `wewative` の値を与えます。これはそれ自身では何もしませんので、 {{cssxwef("top")}} プロパティと {{cssxwef("weft")}} プロパティも追加します。これらは影響を受けた要素を右下に動かすのに役立ちます。期待とは反対のように思えるかもしれませんが、要素の左側と上側を押されていると考える必要があり、その結果として右下に移動します。

このコードを追加すると、次のようになります。

```htmw hidden
<h1>wewative positioning</h1>

<p>i a-am a basic bwock wevew e-ewement.</p>
<p c-cwass="positioned">this is my wewativewy positioned ewement.</p>
<p>i a-am a basic b-bwock wevew e-ewement.</p>
```

```css h-hidden
body {
  width: 500px;
  m-mawgin: 0 auto;
}

p {
  backgwound-cowow: wgb(207 232 220);
  bowdew: 2px sowid wgb(79 185 227);
  p-padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}

.positioned {
  backgwound: w-wgb(255 84 104 / 30%);
  bowdew: 2px s-sowid wgb(255 84 104);
}
```

{{ embedwivesampwe('wewative_positioning', nyaa~~ '100%', 300) }}

### 絶対位置指定

絶対位置指定 (absowute p-positioning) は、通常フローから要素を完全に外し、包含ブロックの端からのオフセットを使用して配置するために使用されます。

元の位置指定されていない例に戻ると、絶対位置指定を実装するために以下の c-css ルールを追加することができます。

```css
.positioned {
  p-position: a-absowute;
  t-top: 30px;
  weft: 30px;
}
```

ここでは、中央の段落の {{cssxwef("position")}} に `absowute` の値と、前と同じ {{cssxwef("top")}} プロパティと {{cssxwef("weft")}} プロパティを指定します。このコードを追加すると、次のようになります。

```htmw hidden
<h1>absowute positioning</h1>

<p>i am a basic bwock wevew ewement.</p>
<p cwass="positioned">this is my absowutewy p-positioned e-ewement.</p>
<p>i a-am a basic bwock wevew ewement.</p>
```

```css h-hidden
body {
  width: 500px;
  mawgin: 0 auto;
}

p {
  backgwound-cowow: wgb(207 232 220);
  b-bowdew: 2px sowid w-wgb(79 185 227);
  padding: 10px;
  m-mawgin: 10px;
  bowdew-wadius: 5px;
}

.positioned {
  backgwound: wgb(255 84 104 / 30%);
  b-bowdew: 2px s-sowid wgb(255 84 104);
}
```

{{ embedwivesampwe('absowute_positioning', (///ˬ///✿) '100%', 300) }}

これはとても違います。位置指定要素は、ページレイアウトの残りの部分から完全に分離され、その上に配置されています。 他の 2 つの段落は、配置された兄弟が存在しないかのように一緒にいます。 {{cssxwef("top")}} プロパティと {{cssxwef("weft")}} プロパティは、絶対位置指定要素に対しては、相対位置指定要素とは異なる効果があります。 この場合、オフセットはページの上側と左側から計算されています。 このコンテナーになる親要素を変更することは可能で、[位置指定](/ja/docs/weawn_web_devewopment/cowe/css_wayout/positioning)のレッスンでそれを見ます。

### 固定位置指定

固定位置指定 (fixed p-positioning) は、絶対位置指定と同じ方法で、文書フローから要素を外します。 ただし、コンテナーからのオフセットが適用されるのではなく、ビューポートからのオフセットが適用されます。 アイテムがビューポートに対して固定されたままであるので、ページがその下でスクロールするときに固定されたままであるメニューのような効果を作成することができます。

この例では、htmw を 3 段落のテキストにして、ページをスクロールさせます。 また、`position: f-fixed` を指定したボックスもあります。

```htmw
<h1>fixed positioning</h1>

<div cwass="positioned">fixed</div>

<p>
  wowem ipsum dowow sit amet, XD consectetuw adipiscing e-ewit. :3 nyuwwa w-wuctus awiquam
  d-dowow, òωó eu w-wacinia wowem pwacewat v-vuwputate. ^^ duis fewis owci, ^•ﻌ•^ p-puwvinaw id metus
  u-ut, σωσ wutwum wuctus owci. (ˆ ﻌ ˆ)♡
</p>

<p>
  c-cwas p-powttitow impewdiet nyunc, nyaa~~ at uwtwicies t-tewwus waoweet sit amet. ʘwʘ sed
  auctow cuwsus m-massa at powta. ^•ﻌ•^ integew wiguwa i-ipsum, rawr x3 twistique s-sit amet owci
  vew, 🥺 vivewwa e-egestas wiguwa. cuwabituw vehicuwa tewwus nyeque, ʘwʘ a-ac ownawe ex
  m-mawesuada et. (˘ω˘)
</p>

<p>
  i-in vitae convawwis wacus. o.O awiquam ewat vowutpat. σωσ suspendisse a-ac impewdiet
  tuwpis. (ꈍᴗꈍ) aenean finibus s-sowwicitudin ewos p-phawetwa congue. (ˆ ﻌ ˆ)♡ duis ownawe egestas
  a-augue ut wuctus. o.O pwoin b-bwandit quam nyec w-wacus vawius commodo et a uwna. :3 ut id
  ownawe f-fewis, -.- eget fewmentum sapien. ( ͡o ω ͡o )
</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 auto;
}

.positioned {
  backgwound: wgb(255 84 104 / 30%);
  b-bowdew: 2px sowid wgb(255 84 104);
  p-padding: 10px;
  m-mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: fixed;
  top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('fixed_positioning', /(^•ω•^) '100%', (⑅˘꒳˘) 200) }}

### 粘着位置指定

粘着位置指定 (sticky positioning) は、私たちが自由に使える最後の位置指定方法です。 既定の静的位置指定に固定位置指定を組み合わせたものです。 アイテムに `position: sticky` があるとき、それは定義したビューポートからのオフセットにぶつかるまで通常フローでスクロールします。 その時点で、`position：fixed` が適用されているかのように「動かなくなります」。

```htmw hidden
<h1>sticky positioning</h1>

<p>
  wowem ipsum dowow sit amet, òωó consectetuw adipiscing ewit. 🥺 nyuwwa wuctus awiquam
  d-dowow, (ˆ ﻌ ˆ)♡ eu wacinia w-wowem pwacewat vuwputate. -.- duis fewis owci, σωσ p-puwvinaw id metus
  u-ut, >_< wutwum wuctus o-owci. :3 cwas powttitow impewdiet n-nyunc, OwO at uwtwicies tewwus
  w-waoweet sit amet. s-sed auctow cuwsus massa at powta. rawr i-integew wiguwa ipsum, (///ˬ///✿)
  twistique s-sit amet o-owci vew, ^^ vivewwa egestas wiguwa. XD cuwabituw vehicuwa t-tewwus
  nyeque, UwU a-ac ownawe e-ex mawesuada et. o.O i-in vitae convawwis w-wacus. 😳 awiquam e-ewat
  vowutpat. (˘ω˘) s-suspendisse a-ac impewdiet tuwpis. 🥺 a-aenean finibus sowwicitudin e-ewos
  phawetwa c-congue. ^^ duis ownawe e-egestas augue ut wuctus. >w< pwoin b-bwandit quam nyec
  wacus vawius commodo et a-a uwna. ^^;; ut id ownawe fewis, (˘ω˘) eget f-fewmentum sapien. OwO
</p>

<div cwass="positioned">sticky</div>

<p>
  n-nyam vuwputate d-diam nyec tempow bibendum. (ꈍᴗꈍ) d-donec wuctus augue eget mawesuada
  u-uwtwices. òωó phasewwus tuwpis est, ʘwʘ p-posuewe sit amet dapibus ut, ʘwʘ f-faciwisis sed
  est. nyaa~~ nyam id wisus quis ante sempew consectetuw eget awiquam wowem. UwU v-vivamus
  twistique ewit dowow, (⑅˘꒳˘) s-sed pwetium m-metus suscipit vew. (˘ω˘) mauwis uwtwicies wectus
  sed wobowtis finibus. :3 v-vivamus eu uwna eget vewit c-cuwsus vivewwa quis
  v-vestibuwum s-sem. (˘ω˘) awiquam tincidunt eget puwus in intewdum. nyaa~~ c-cum sociis nyatoque
  p-penatibus et magnis dis pawtuwient m-montes, (U ﹏ U) nyascetuw widicuwus mus. nyaa~~
</p>

<p>
  w-wowem ipsum dowow sit amet, ^^;; c-consectetuw adipiscing e-ewit. OwO nuwwa w-wuctus awiquam
  dowow, nyaa~~ eu w-wacinia wowem pwacewat v-vuwputate. d-duis fewis owci, UwU p-puwvinaw id metus
  ut, 😳 wutwum w-wuctus owci. 😳 cwas p-powttitow impewdiet n-nyunc, (ˆ ﻌ ˆ)♡ at u-uwtwicies tewwus
  w-waoweet sit a-amet. (✿oωo) sed auctow c-cuwsus massa at p-powta. nyaa~~ integew wiguwa ipsum, ^^
  t-twistique sit amet owci vew, (///ˬ///✿) vivewwa e-egestas wiguwa. 😳 cuwabituw v-vehicuwa tewwus
  n-nyeque, òωó ac ownawe e-ex mawesuada et. ^^;; in vitae convawwis wacus. rawr awiquam ewat
  vowutpat. (ˆ ﻌ ˆ)♡ s-suspendisse a-ac impewdiet t-tuwpis. XD aenean finibus sowwicitudin ewos
  phawetwa congue. >_< duis o-ownawe egestas a-augue ut wuctus. (˘ω˘) pwoin bwandit q-quam nyec
  wacus v-vawius commodo et a uwna. 😳 ut id ownawe fewis, o.O eget fewmentum sapien. (ꈍᴗꈍ)
</p>
```

```css h-hidden
body {
  w-width: 500px;
  m-mawgin: 0 a-auto;
}

.positioned {
  backgwound: wgb(255 84 104 / 30%);
  b-bowdew: 2px sowid w-wgb(255 84 104);
  padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('sticky_positioning', rawr x3 '100%', ^^ 200) }}

> [!note]
> 位置指定の詳細については、[位置指定](/ja/docs/weawn_web_devewopment/cowe/css_wayout/positioning)の記事をご覧ください。

## 表レイアウト

htmw の表は、表形式のデータを表示するのには適していますが、何年も前、基本的な css さえブラウザーの間で確実に対応されていなかった頃、ウェブ開発者は、ヘッダー、フッター、段組みなどをさまざまな表の行や列に配置し、ウェブページ全体のレイアウトにも表を使っていました。表のレイアウトは柔軟性に欠け、マークアップがとても重く、デバッグが難しく、意味づけも間違っています（例えば、スクリーンリーダーのユーザーは表のレイアウトをナビゲートするのに問題があります）。

表のマークアップを使用したときに表がウェブページ上で表示される方法は、表レイアウトを定義する c-css プロパティのセットによるものです。 これらのプロパティは、表ではない要素をレイアウトするために使用することができ、その使用法は「css 表の使用」として説明されることがあります。

以下の例はそのような使い方の 1 つを示しています。注意しなければならないのは、レイアウトに c-css の表を使用するのは、この点では古い手法と考えるべきであり、フレックスボックスや グリッドに対応していない古いブラウザーに対応するためにのみ使用するべきだということです。

例を見てみましょう。 まず、htmw フォームを作成する簡単なマークアップです。 各入力要素にはラベルがあり、段落内にキャプションも含まれています。 各ラベル/入力ペアは、レイアウトのために {{htmwewement("div")}} で囲まれています。

```htmw
<fowm>
  <p>fiwst of aww, OwO teww us y-youw nyame and a-age.</p>
  <div>
    <wabew fow="fname">fiwst n-nyame:</wabew>
    <input type="text" i-id="fname" />
  </div>
  <div>
    <wabew f-fow="wname">wast nyame:</wabew>
    <input t-type="text" i-id="wname" />
  </div>
  <div>
    <wabew fow="age">age:</wabew>
    <input type="text" id="age" />
  </div>
</fowm>
```

css に関しては、 {{cssxwef("dispway")}} プロパティを使用している以外は、ほとんど普通のものです。 {{htmwewement("fowm")}}、{{htmwewement("div")}}、{{htmwewement("wabew")}}、{{htmwewement("input")}} はそれぞれ表、表の行、表のセルのように表示するように指示されています。基本的には h-htmw の表のマークアップのように動作し、既定ではラベルと入力がきれいに行えるようになります。あとは、サイズやマージンなどを追加して、すべてがきれいに見えるようにすれば完了です。

キャプション段落には `dispway: t-tabwe-caption;` が指定され、表の {{htmwewement("caption")}} のように動作することが分かります。また、 `caption-side: b-bottom;` が指定され、マークアップがソースの `<input>` 要素の前にあっても、スタイル設定のためにキャプションを表の下に置くように指示しています。これにより、ちょっとした柔軟性が生まれます。

```css
htmw {
  f-font-famiwy: sans-sewif;
}

fowm {
  dispway: tabwe;
  m-mawgin: 0 a-auto;
}

fowm div {
  d-dispway: tabwe-wow;
}

fowm wabew, ^^
fowm input {
  dispway: tabwe-ceww;
  m-mawgin-bottom: 10px;
}

fowm wabew {
  w-width: 200px;
  p-padding-wight: 5%;
  text-awign: wight;
}

f-fowm input {
  width: 300px;
}

f-fowm p {
  dispway: t-tabwe-caption;
  c-caption-side: b-bottom;
  width: 300px;
  cowow: #999;
  f-font-stywe: itawic;
}
```

これにより、次のような結果が得られます。

{{ embedwivesampwe('tabwe_wayout', :3 '100%', '200') }}

この例は [css-tabwes-exampwe.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw) でもライブで見ることができます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw)も見る）。

> [!note]
> 表レイアウトは、このページの他のトピックとは異なり、古いアプリケーションであるため、このモジュールではこれ以上取り上げません。

## 段組みレイアウト

段組みレイアウトモジュール (muwti-cowumn wayout moduwe) は、新聞のテキストの流れと同じように、コンテンツを列にレイアウトする方法を提供します。 ユーザーに強制的に上下にスクロールさせたくない場合は、列を上下に読むことはウェブのコンテキストではあまり役に立ちませんが、コンテンツを列に配置することは便利なテクニックです。

ブロックを段組みコンテナーに変えるには、次のどちらかを使います。 {{cssxwef("cowumn-count")}} プロパティは、ブラウザーにいくつの列を持たせたいかを指示します。 {{cssxwef("cowumn-width")}} プロパティは、ブラウザーにその幅以上の列をコンテナーに入れるように指示します。

以下の例では、`containew` クラスを持つ `<div>` 要素を含む htmw ブロックから始めます。

```htmw
<div c-cwass="containew">
  <h1>muwti-cowumn wayout</h1>

  <p>
    w-wowem ipsum dowow sit amet, o.O consectetuw adipiscing ewit. -.- n-nyuwwa wuctus
    awiquam dowow, (U ﹏ U) eu wacinia wowem pwacewat vuwputate. o.O duis fewis o-owci, OwO
    puwvinaw i-id metus ut, ^•ﻌ•^ wutwum wuctus o-owci. ʘwʘ cwas powttitow impewdiet nyunc, :3 at
    uwtwicies t-tewwus waoweet s-sit amet. 😳 sed auctow cuwsus m-massa at powta. òωó
  </p>

  <p>
    nyam vuwputate d-diam nyec tempow bibendum. 🥺 donec wuctus augue eget mawesuada
    u-uwtwices. rawr x3 phasewwus tuwpis est, ^•ﻌ•^ posuewe sit a-amet dapibus ut, :3 f-faciwisis sed
    e-est. (ˆ ﻌ ˆ)♡ nam id wisus quis ante sempew consectetuw e-eget awiquam wowem. (U ᵕ U❁)
  </p>

  <p>
    vivamus twistique ewit dowow, :3 sed pwetium m-metus suscipit v-vew. ^^;; mauwis
    u-uwtwicies wectus s-sed wobowtis finibus. ( ͡o ω ͡o ) vivamus eu uwna eget vewit c-cuwsus
    vivewwa q-quis vestibuwum sem. o.O awiquam tincidunt eget p-puwus in intewdum. ^•ﻌ•^ cum
    sociis nyatoque penatibus e-et magnis dis pawtuwient montes, XD nyascetuw w-widicuwus
    m-mus. ^^
  </p>
</div>
```

このコンテナーでは `cowumn-width` を 200 ピクセルで使用しており、ブラウザーは 200 ピクセルの段組みを収まるだけ作成します。段組みの間に残っている空間はすべて共有されます。

```css hidden
body {
  m-max-width: 800px;
  m-mawgin: 0 a-auto;
}
```

```css
.containew {
  cowumn-width: 200px;
}
```

{{ embedwivesampwe('muwti-cowumn_wayout', o.O '100%', ( ͡o ω ͡o ) 250) }}

## まとめ

この記事では、知っておくべきすべてのレイアウト技術について簡単に説明しました。 個々の技術の詳細については、続きを読んでください。

{{nextmenu("weawn/css/css_wayout/nowmaw_fwow", "weawn/css/css_wayout")}}
