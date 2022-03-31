---
title: position
slug: Web/CSS/position
tags:
  - CSS
  - CSS 位置指定レイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.position
translation_of: Web/CSS/position
---
{{CSSRef}}

**`position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、文書内で要素がどのように配置されるかを設定します。 {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, {{Cssxref("left")}} の各プロパティが、配置された要素の最終的な位置を決めます。

{{EmbedInteractiveExample("pages/css/position.html")}}

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
position: unset;
```

### 値

- `static`
  - : 要素は文書の通常のフローに従って配置されます。 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("z-index")}} プロパティは*効果がありません*。これが既定値です。
- `relative`

  - : 要素は文書の通常のフローに従って配置され、 `top`, `right`, `bottom`, `left` の値に基づいて*自分自身からの相対*オフセットで配置されます。オフセットは他の要素の配置には影響を与えません。つまり、ページレイアウト内で要素に与えられる空間は、位置が `static` であった時と同じです。

    `z-index` の値が `auto` でない場合、新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)を生成します。 `table-*-group`, `table-row`, `table-column`, `table-cell`, `table-caption` の要素における効果は未定義です。

- `absolute`

  - : 要素は文書の通常のフローから除外され、ページレイアウト内に要素のための空間が作成されません。直近の配置されている祖先があれば、それに対して相対配置されます。そうでなければ、初期の[包含ブロック](/ja/docs/Web/CSS/Containing_block)に対して相対配置されます。最終的な位置は `top`, `right`, `bottom`, `left` の値によって決定されます。

    この値では、 `z-index` の値が `auto` ではない場合、新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)を作成します。絶対位置指定ボックスのマージンは、他の要素のマージンと[相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)されません。

- `fixed`

  - : 要素は文書の通常のフローから除外され、ページレイアウト内に要素のための空間が作成されません。{{glossary("viewport", "ビューポート")}}によって定められた初期の[包含ブロック](/ja/docs/Web/CSS/Containing_block)に対して相対配置されますが、祖先の一つに `transform`, `perspective`, `filter` の何れかのプロパティが `none` 以外 ([CSS Transforms 仕様書](https://www.w3.org/TR/css-transforms-1/#propdef-transform)を参照) に設定されている場合は例外で、その場合は祖先が包含ブロックとしてふるまいます。 (なお、包含ブロック形成に寄与している `perspective` と `filter` に矛盾のあるブラウザーがあります。) 最終的な位置は `top`, `right`, `bottom`, `left` の値によって決定されます。

    この値は、常に新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)を作成します。印刷文書の場合、要素は*各ページ*の同じ位置に配置されます。

- `sticky`

  - : 要素は文書の通常のフローに従って配置され、*直近のスクロールする祖先*および[包含ブロック](/ja/docs/Web/CSS/Containing_block) (直近のブロックレベル祖先、表関連要素を含む) に対して `top`, `right`, `bottom`, `left` の値に基づいて相対配置されます。オフセットは他の要素の配置には影響を与えません。

    この値は、常に新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)を生成します。なお粘着要素は、直近の祖先がスクロールしない場合でも、「スクロールの仕組み」を持つ直近の祖先 (`overflow` が `hidden`, `scroll`, `auto`, `overlay` として作成されたもの) に「粘着」します。これによって「粘着」のふるまいを効果的に抑止します ([GitHub issue on W3C CSSWG](https://github.com/w3c/csswg-drafts/issues/865) を参照)。

## 解説

<h3 id="Types_of_positioning">位置の種類</h3>

- **位置指定要素** (positioned element) とは、 `position` の[計算値](/ja/docs/Web/CSS/computed_value)が `relative`, `absolute`, `fixed`, `sticky` のいずれかである要素です。 (言い換えれば、 `static` 以外の全てです。)
- **相対位置指定要素** (relatively positioned element) とは、 `position` の[計算値](/ja/docs/Web/CSS/computed_value)が `relative` である要素です。 {{Cssxref("top")}} および {{Cssxref("bottom")}} プロパティは、通常の位置からの垂直方向のオフセットを指定します。 {{Cssxref("left")}} および {{Cssxref("right")}} プロパティは、水平方向のオフセットを指定します。
- **絶対位置指定要素** (absolutely positioned element) とは、 `position` の[計算値](/ja/docs/Web/CSS/computed_value)が `absolute` または `fixed` である要素です。 {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, {{Cssxref("left")}} の各プロパティは、この要素の[包含ブロック](/ja/docs/Web/CSS/Containing_block)の端からのオフセットを指定します。 (包含ブロックは配置される要素の祖先です。) 要素にマージンがある場合は、オフセットにマージンが追加されます。この要素は内容のために新しい [ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context) (BFC) を生成します。
- **粘着位置指定要素** (stickily positioned element) とは、 `position` の[計算値](/ja/docs/Web/CSS/computed_value)が `sticky` である要素です。これは[包含ブロック](/ja/docs/Web/CSS/Containing_block)がフロールート (またはその中でスクロールするコンテナー) 内の指定されたしきい値 (例えば {{Cssxref("top")}} に設定された auto 以外の値など) を達するまでは相対的な配置として扱われ、[包含ブロック](/ja/docs/Web/CSS/Containing_block)の反対の端が来るまでその位置に「粘着」するものとして扱われます。

ほとんどの場合、絶対位置指定要素に {{Cssxref("height")}} および {{Cssxref("width")}} が `auto` が設定されると、内容に合うように大きさが調整されます。しかし、非[置換](/ja/docs/Web/CSS/Replaced_element)要素で絶対位置指定要素は、 {{Cssxref("top")}} および {{Cssxref("bottom")}} を指定して {{Cssxref("height")}} を指定しない (つまり `auto` の) ままにすることで、利用できる垂直の空間を埋めることができます。同様に、 {{Cssxref("left")}} および {{Cssxref("right")}} を指定して {{Cssxref("width")}} を `auto` のままにすることで、利用できる水平の空間を埋めることができます。

以下に記述された場合を除きます (絶対位置指定要素で利用できる空間を埋める場合)。

- `top` と `bottom` の両方を指定すると (`auto`ではなく)、 `top` が優先されます。
- `left` と `right` の両方を指定すると、 {{Cssxref("direction")}} が `ltr` (英語、横書き日本語、など) の場合は `left` が優先され、 {{Cssxref("direction")}} が `rtl` (ペルシャ語、アラビア語、ヘブライ語、 など)の場合は `right` が優先されます。

## アクセシビリティの考慮

`absolute` または `fixed` の値で配置された要素は、ページがズームしてテキストの大きさを大きくしたら、その他の要素を妨害していないかどうかを確認してください。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visual Presentation: Understanding SC 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### パフォーマンスとアクセシビリティ

`fixed` または `sticky` を含む要素の内容をスクロールすると、パフォーマンスやアクセシビリティの問題を引き起こす可能性があります。ユーザーがスクロールする際、ブラウザーは sticky や fixed のコンテンツを新しい場所に再描画しなければなりません。再描画する必要があるコンテンツ、ブラウザーの性能や、端末の処理速度によっては、ブラウザーは 60 fps で再描画を管理することができず、敏感な人々にアクセシビリティの問題を起こし、誰からも汚く見えることになります。一つの解決方法として、位置指定要素に {{cssxref("will-change", "will-change: transform")}} を追加して要素を独自のレイヤーで描画させるようにすると、再描画の速度が上がり、性能問題やアクセシビリティを改善することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Relative_positioning">相対位置指定</h3>

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

{{EmbedLiveSample('Relative_positioning', '', '200px')}}

<h3 id="Absolute_positioning">絶対位置指定</h3>

相対位置指定の要素も、文書の通常のフローの中に配置されます。それに対して、絶対位置指定の要素はフローから除外されます。つまり、他の要素はこの要素が存在しないかのように配置されます。絶対位置指定の要素は*配置された直近の祖先* (つまり、 `static` ではない直近の祖先) に対して相対的に配置されます。配置された祖先がない場合は、 ICB (initial containing block — [W3C の定義](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)も御覧ください) すなわち文書のルート要素の包含ブロックに対する相対的な配置になります。

#### HTML

```html
<h1>Absolute positioning</h1>

<p>I am a basic block level element. My adjacent block level elements sit on new lines below me.</p>

<p class="positioned">By default we span 100% of the width of our parent element, and we are as tall as our child content. Our total width and height is our content + padding + border width/height.</p>

<p>We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.</p>

<p>inline elements <span>like this one</span> and <span>this one</span> sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements <span>wrap onto a new line if possible — like this one containing text</span>, or just go on to a new line if not, much like this image will do: <img src="long.jpg"></p>
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
  top: 30px;
  left: 30px;
}
```

#### 結果

{{EmbedLiveSample('Absolute_positioning', '', '420px')}}

<h3 id="Fixed_positioning">固定位置指定</h3>

固定位置指定は絶対位置指定に似ていますが、要素の[包含ブロック](/ja/docs/Web/CSS/Containing_block)が*ビューポート*によって定義される初期包含ブロックであるという点が異なり、祖先の一つに `transform`, `perspective`, `filter` の何れかのプロパティが `none` 以外 ([CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform) を参照) に設定されている場合は例外で、その場合は祖先が[包含ブロック](/ja/docs/Web/CSS/Containing_block)としてふるまいます。これはよく、ページをスクロールしても同位置に留まり続けるような「浮く」要素 ("floating" element) を作るのに使われます。下の例ではボックス "One" はページの上から 80px、左から 10px の位置に固定されます。スクロールしても、ビューポートに対して同じ位置に留まり続けます。

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor eget pulvinar lobortis.
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ac dolor augue.
    Pellentesque mi mi, laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut arcu aliquam purus viverra dictum vel sit amet mi.
    Duis nisl mauris, aliquam sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem aliquam, congue porttitor tortor.
    Sed tempor nisl a lorem consequat, id maximus erat aliquet. Sed sagittis porta libero sed condimentum.
    Aliquam finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor eget pulvinar lobortis.
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ac dolor augue.
    Pellentesque mi mi, laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut arcu aliquam purus viverra dictum vel sit amet mi.
    Duis nisl mauris, aliquam sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem aliquam, congue porttitor tortor.
    Sed tempor nisl a lorem consequat, id maximus erat aliquet. Sed sagittis porta libero sed condimentum.
    Aliquam finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id ultrices ultrices, tempor et tellus.
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

{{EmbedLiveSample('Fixed_positioning', '', '300px')}}

<h3 id="Sticky_positioning">粘着位置指定</h3>

粘着位置指定は、相対位置指定と固定位置指定を組み合わせたものです。粘着位置指定された要素は、指定したしきい値に達するまでは相対位置指定として、しきい値に達したら固定位置指定として扱われます。例えば・・・

```css
#one { position: sticky; top: 10px; }
```

例えば上記のスタイルは、ビューポートをスクロールして要素の位置が上端から 10px より小さくなるまでは、相対位置指定の要素としてふるまいます。それ以降はしきい値を超えるほどビューポートのスクロールを戻すまで、上端から 10px で固定位置指定になります。

粘着位置指定は一般的に、アルファベット順や五十音順のリストの見出しに使用されます。見出し A の項目をスクリーン外にスクロールするまで、見出し B は A の項目の後ろに表示されています。見出し B はコンテンツの残りの部分とともにスクリーン外に移動するのではなく、見出し B のすべての項目をスクリーン外にスクロールして見出し C に含まれる部分に達するまで、ビューポートの上部に固定されます。

粘着位置指定を想定したとおりに動作させるためには、 `top`, `right`, `bottom`, `left` のうち少なくとも一つでしきい値を指定しなければなりません。しきい値を指定しなければ、相対位置指定との違いがなくなるでしょう。

#### HTML

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

#### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: #FFF;
  padding: 24px 0 0 0;
}

dt {
  background: #B8C1C8;
  border-bottom: 1px solid #989EA4;
  border-top: 1px solid #717D85;
  color: #FFF;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font: bold 20px/45px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #CCC;
}
```

#### 結果

{{EmbedLiveSample('Sticky_positioning', '', '300px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS を学ぶ: 位置指定](/ja/docs/Learn/CSS/CSS_layout/Positioning)
