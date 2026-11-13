---
title: position
slug: Web/CSS/Reference/Properties/position
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**`position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、文書内で要素がどのように配置されるかを設定します。 {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, {{Cssxref("left")}} の各物理的プロパティ、 {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}} のフロー相対論理的プロパティが、配置された要素の最終的な位置を決めます。

{{InteractiveExample("CSS デモ: position")}}

```css interactive-example-choice
position: static;
```

```css interactive-example-choice
position: relative;
top: 40px;
left: 40px;
```

```css interactive-example-choice
position: absolute;
inset-inline-start: 40px;
inset-block-start: 40px;
```

```css interactive-example-choice
position: sticky;
top: 20px;
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <div id="example-element-container">
    <p>
      このデモでは、黄色いボックスの <code>position</code> プロパティを制御することができます。
    </p>
    <div class="box"></div>
    <div class="box" id="example-element"></div>
    <div class="box"></div>
    <p class="clear">
      <code>sticky</code> 配置の効果を確認するには、<code>position: sticky</code> オプションを選択し、このコンテナーをスクロールしてください。
    </p>
    <p>
      要素はコンテナーの上端（または <code>top</code> で指定されたオフセット）に到達するまでコンテナーと共にスクロールし、その後スクロールを停止して表示されたままになります。
    </p>
    <p>
      このテキストの残りの部分は、コンテナーがオーバーフローするように意図的に追加されています。これにより、スクロールしてその効果を確認できるようになっています。
    </p>
    <hr />
    <p>
      銀河系の西の渦巻腕の、流行遅れな端っこにある、未踏の辺境の奥深くに、小さな見過ごされた黄色い太陽が一つある。
      およそ 9200 万マイルの距離を周回する、まったく取るに足らない小さな青緑色の惑星がある。その惑星に住む類人猿から進化した生命体は驚くほど未発達で、今でもデジタル時計がなかなか良いアイデアだと思っている。
    </p>
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
  overflow: auto;
}

.box {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  float: left;
  width: 65px;
  height: 65px;
}

.box + .box {
  margin-left: 10px;
}

.clear {
  clear: both;
  padding-top: 1em;
}

#example-element-container {
  position: relative;
  text-align: left;
}

#example-element {
  background-color: yellow;
  border: 3px solid red;
  z-index: 1;
}
```

## 構文

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* グローバル値 */
position: inherit;
position: initial;
position: revert;
position: revert-layer;
position: unset;
```

### 値

- `static`
  - : 要素は文書の[通常フロー](/ja/docs/Learn_web_development/Core/CSS_layout/Introduction#通常フロー)に従って配置されます。 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("z-index")}} プロパティは効果がありません。これが既定値です。
- `relative`
  - : 要素は文書の通常のフローに従って配置され、 `top`, `right`, `bottom`, `left` の値に基づいて*自分自身からの相対*オフセットで配置されます。オフセットは他の要素の配置には影響を与えません。つまり、ページレイアウト内で要素に与えられる空間は、位置が `static` であった時と同じです。

    `z-index` の値が `auto` でない場合、新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を生成します。 `table-*-group`, `table-row`, `table-column`, `table-cell`, `table-caption` の要素における効果は未定義です。

- `absolute`
  - : 要素は文書の通常のフローから除外され、ページレイアウト内にこの要素のための空間が作成されません。この要素に直近の位置指定されている祖先があればそれに対して、そうでなければ、初期の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)に対して相対配置されます。最終的な位置は `top`, `right`, `bottom`, `left` の値によって決定されます。

    この値では、 `z-index` の値が `auto` ではない場合、新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を作成します。絶対位置指定ボックスのマージンは、他の要素のマージンと[相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)されません。

- `fixed`
  - : 要素は文書の通常のフローから除外され、ページレイアウト内に要素のための空間が作成されません。要素は最初の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)（視覚メディア要素の場合はビューポート）から相対的に配置されます。最終的な位置は `top`、`right`、`bottom`、`left` の値によって決まります。

    この値は、常に新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を作成します。印刷文書の場合、要素は各ページの同じ位置に配置されます。

- `sticky`
  - : 要素は文書の通常のフローに従って配置され、*直近のスクロールする祖先*および[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)（直近のブロックレベル祖先、表関連要素を含む）に対して `top`, `right`, `bottom`, `left` の値に基づいて相対配置されます。このオフセットは他の要素の配置には影響を与えません。

    この値は、常に新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を生成します。なお粘着要素は、直近の祖先がスクロールしない場合でも、「スクロールの仕組み」を持つ直近の祖先（`overflow` が `hidden`, `scroll`, `auto`, `overlay` として作成されたもの）に「粘着」します。

    > [!NOTE]
    > 要素を粘着させる必要がある軸に対して、少なくとも 1 つの[インセット](/ja/docs/Web/CSS/Reference/Properties/inset)プロパティ（{{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}} など）を `auto` 以外の値に設定する必要があります。軸の `inset` プロパティが両方とも `auto` に設定されている場合、その軸では `sticky` 値は `relative` として動作します。

## 解説

### 位置指定の種類

- **位置指定要素** (positioned element) とは、 `position` の[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)が `relative`, `absolute`, `fixed`, `sticky` のいずれかである要素です。 (言い換えれば、`static` 以外の全てです。)
- **相対位置指定要素** (relatively positioned element) とは、`position` の[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)が `relative` である要素です。 {{Cssxref("top")}} および {{Cssxref("bottom")}} プロパティは、通常の位置からの垂直方向のオフセットを指定します。 {{Cssxref("left")}} および {{Cssxref("right")}} プロパティは、水平方向のオフセットを指定します。
- **絶対位置指定要素** (absolutely positioned element) とは、`position` の[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)が `absolute` または `fixed` である要素です。 {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, {{Cssxref("left")}} の各プロパティは、この要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の端からのオフセットを指定します。 (包含ブロックは配置される要素の祖先です。) 要素にマージンがある場合は、オフセットにマージンが追加されます。この要素は内容のために新しい [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) を生成します。
- **粘着位置指定要素** (stickily positioned element) とは、`position` の[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)が `sticky` である要素です。これは[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)がフロールート (またはその中でスクロールするコンテナー) 内の指定されたしきい値 (例えば {{Cssxref("top")}} に設定された auto 以外の値など) を達するまでは相対的な配置として扱われ、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の反対の端が来るまでその位置に「粘着」するものとして扱われます。

ほとんどの場合、絶対位置指定要素に {{Cssxref("height")}} および {{Cssxref("width")}} が `auto` が設定されると、内容に合うように大きさが調整されます。しかし、非[置換](/ja/docs/Glossary/Replaced_elements)要素で絶対位置指定要素は、 {{Cssxref("top")}} および {{Cssxref("bottom")}} を指定して {{Cssxref("height")}} を指定しない (つまり `auto` の) ままにすることで、利用できる垂直の空間を埋めることができます。同様に、 {{Cssxref("left")}} および {{Cssxref("right")}} を指定して {{Cssxref("width")}} を `auto` のままにすることで、利用できる水平の空間を埋めることができます。

以下に記述された場合を除きます（絶対位置指定要素で利用できる空間を埋める場合）。

- `top` と `bottom` の両方を指定すると (`auto`ではなく)、 `top` が優先されます。
- `left` と `right` の両方を指定すると、 {{Cssxref("direction")}} が `ltr` (英語、横書き日本語、など) の場合は `left` が優先され、 {{Cssxref("direction")}} が `rtl` (ペルシャ語、アラビア語、ヘブライ語、 など)の場合は `right` が優先されます。

## アクセシビリティ

`absolute` または `fixed` の値で配置された要素は、ページがズームしてテキストの大きさを大きくしたら、その他の要素を妨害していないかどうかを確認してください。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Visual Presentation: Understanding SC 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### パフォーマンスとアクセシビリティ

`fixed` または `sticky` を含む要素の内容をスクロールすると、パフォーマンスやアクセシビリティの問題を引き起こす可能性があります。ユーザーがスクロールする際、ブラウザーは sticky や fixed のコンテンツを新しい場所に再描画しなければなりません。再描画する必要があるコンテンツ、ブラウザーの性能や、端末の処理速度によっては、ブラウザーは 60 fps で再描画を管理することができません。このような状況は、動作の不安定（[ジャンク](/ja/docs/Glossary/Jank)）につながる可能性があり、さらに重要なこととして、敏感な人にとってはアクセシビリティの問題となります。一つの解決方法として、位置指定要素に {{cssxref("will-change", "will-change: transform")}} を追加して要素を独自のレイヤーで描画させるようにすると、再描画の速度が上がり、性能問題やアクセシビリティを改善することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 相対位置指定

相対位置指定の要素は文書中の通常の配置から、指定された量だけオフセットしますが、ほかの要素にはオフセットの影響を与えません。以下の例では、 "Two" が通常の位置に空間を得ているように他の要素が配置されることに注意してください。

#### HTML

```html
<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

{{EmbedLiveSample('相対位置指定', '', '200px')}}

### 絶対位置指定

相対位置指定の要素も、文書の通常のフローの中に配置されます。それに対して、絶対位置指定の要素はフローから除外されます。つまり、他の要素はこの要素が存在しないかのように配置されます。絶対位置指定の要素は*配置された直近の祖先*（つまり、 `static` ではない直近の祖先）に対して相対的に配置されます。配置された祖先がない場合は、[初期包含ブロック](https://drafts.csswg.org/css-display/#initial-containing-block) (ICB)、すなわち文書のルート要素の包含ブロックに対する相対的な配置になります。

#### HTML

```html-nolint
<h1>絶対位置指定</h1>

<p>
  これは基本的なブロックレベル要素です。隣接するブロックレベル要素は、この下に新しい行に配置します。
</p>

<p class="positioned">
  既定では、親要素の幅を 100% 使用し、子コンテンツの高さと同じ高さになります。コンテンツの幅と高さの合計は、コンテンツの高さ＋パディング＋境界線の幅/高さとなります。
</p>

<p>
  これはマージンによって別個の存在となっています。マージンが相殺されているため、両方ではなく、一方のマージンの幅となっています。
</p>

<p>
  インライン要素は、<span>この要素</span>と<span>この要素</span>が互いに同じ行に位置し、同じ行に空間がある場合には隣接するテキストノードが位置します。オーバーフローしたインライン要素は、可能な場合には新しい行に<span>このテキストを含む要素のように折り返されます</span>。またはそうでない場合には新しい行に移動します。この画像のようになります。
  <img src="https://mdn.github.io/shared-assets/images/examples/long.jpg" />
</p>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  inset-block-start: 30px;
  inset-inline-start: 30px;
}
```

#### 結果

{{EmbedLiveSample('絶対位置指定', '', '420px')}}

### 固定位置指定

固定位置指定は絶対位置指定に似ていますが、要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)が*ビューポート*によって定義される初期包含ブロックであるという点が異なり、祖先の一つに `transform`, `perspective`, `filter` の何れかのプロパティが `none` 以外（[固定位置指定包含ブロック](https://drafts.csswg.org/css-position/#fixed-positioning-containing-block) を参照）に設定されている場合は例外で、その場合は祖先が[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)としてふるまいます。これはよく、ページをスクロールしても同位置に留まり続けるような「浮く」要素 ("floating" element) を作るのに使われます。下の例ではボックス "One" はページの上から 80px、左から 10px の位置に固定されます。スクロールしても、ビューポートに対して同じ位置に留まり続けます。また、 [`will-change`](/ja/docs/Web/CSS/Reference/Properties/will-change) プロパティに `transform` を設定すると、新しい包含ブロックが設定されます。

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <div class="box" id="one">One</div>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#one {
  position: fixed;
  top: 80px;
  left: 10px;
  background: blue;
}

.outer {
  width: 500px;
  height: 300px;
  overflow: scroll;
  padding-left: 150px;
}
```

#### 結果

{{EmbedLiveSample('固定位置指定', '', '300px')}}

### 粘着位置指定

次の CSS ルールは、ビューポートがスクロールされるまで、id が "one" である要素を相対的に位置指定し、要素が上から 10 ピクセルの位置にくるようにします。この閾値を超えると、要素は上から 10 ピクセルの位置に固定されます。

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### 粘着見出しのあるリスト

粘着位置指定は一般的に、アルファベット順や五十音順のリストの見出しに使用されます。見出し A の項目をスクリーン外にスクロールするまで、見出し B は A の項目の後ろに表示されています。見出し B はコンテンツの残りの部分とともにスクリーン外に移動するのではなく、見出し B のすべての項目をスクリーン外にスクロールして見出し C に含まれる部分に達するまで、ビューポートの上部に固定されます。

粘着位置指定を想定したとおりに動作させるためには、 `top`, `right`, `bottom`, `left` のうち少なくとも一つでしきい値を指定しなければなりません。しきい値を指定しなければ、相対位置指定との違いがなくなるでしょう。

##### HTML

```html
<dl>
  <div>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </div>
  <div>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </div>
  <div>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </div>
  <div>
    <dt>T</dt>
    <dd>Ted Leo &amp; The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>
```

##### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: white;
  padding-top: 24px;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: white;
  font:
    bold 18px/21px "Helvetica",
    "Arial",
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px "Helvetica",
    "Arial",
    sans-serif;
  margin: 0;
  padding-left: 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #cccccc;
}
```

##### 結果

{{EmbedLiveSample('粘着見出しのあるリスト', '', '300px')}}

#### すべての内接境界を指定した粘着位置

次の例は、すべての内接境界をすべて設定した場合の要素の動作を示しています。ここでは、2 つの電球の絵文字が段落内にあります。電球は粘着位置指定を使用しており、内接境界は上から 50px、右から 100px、下から 50px、左から 50pxと指定されています。親の div 要素の灰色の背景が内接領域を示しています。

##### HTML

```html-nolint
スクロールバーを使用して、以下のテキスト内の正しい場所に電球 (💡) を配置してください。
<div>
  <p>
    The representation of an idea by a light bulb(<span class="bulb">💡</span>)
    is a commonly used metaphor that symbolizes the moment of inspiration or the
    birth of a new idea. The association between a light bulb and an idea can be
    traced back to the invention of the incandescent light bulb(<span
      class="bulb"
      >💡</span
    >) by Thomas Edison in the late 19th century. The light bulb is a powerful
    symbol because it represents illumination, clarity, and the sudden
    brightening of one's thoughts or understanding. When someone has an idea, it
    is often described as a light bulb turning on in their mind, signifying a
    moment of insight or creativity. The image of a light bulb also suggests the
    idea of energy, power, and the potential for growth and development.
  </p>
</div>
```

##### CSS

```css hidden
div {
  width: 400px;
  height: 200px;
  overflow: scroll;
  scrollbar-width: thin;
  font-size: 16px;
  font-family: "Verdana";
  border: 1px solid;
}

p {
  width: 600px;
  user-select: none;
  margin: 0;
  border: 110px solid transparent;
}
```

```css
.bulb {
  position: sticky;
  inset: 50px 100px;
}

div {
  /* インセット境界線で定義された領域を灰色で塗りつぶす */
  background: linear-gradient(#99999999, #99999999) 100px 50px / 192px 100px
    no-repeat;
}
```

##### 結果

{{EmbedLiveSample('すべての内接境界を指定した粘着位置', '', '300px')}}

どちらの電球も正しい場所に置くと、相対位置が内接領域内に指定されていることがわかります。内接領域から移されると、その方向の内接境界に固定（粘着）されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{glossary("Inset properties", "インセットプロパティ")}}
- [CSS の学習: 位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [位置指定レイアウトにおけるインセットプロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning#例_位置指定レイアウトにおける_inset_プロパティ)
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
