---
title: マージンの相殺の習得
slug: Web/CSS/Guides/Box_model/Margin_collapsing
original_slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

ブロックの[上端](/ja/docs/Web/CSS/Reference/Properties/margin-top)と[下端](/ja/docs/Web/CSS/Reference/Properties/margin-bottom)のマージンは、それぞれのマージンの大きい方の寸法（または等しい場合はいずれか 1 つ）の単一のマージンに結合される（折り畳まれる、collapsed）ことがあり、**マージンの相殺**という動作として知られています。なお、[浮動](/ja/docs/Web/CSS/Reference/Properties/float)要素と[絶対位置指定](/ja/docs/Web/CSS/Reference/Properties/position#位置の種類)要素では折り畳まれません。

マージンの相殺は、基本的に 3 つの場合に発生します。

- 隣接兄弟要素
  - : 隣接兄弟要素のマージンは相殺されます (後ろの兄弟要素がそれ以前の浮動状態を[解除](/ja/docs/Web/CSS/Reference/Properties/clear) する必要がある場合を除く)。
- 親と子孫を隔てるコンテンツがない場合
  - : あるブロックの {{cssxref("margin-top")}} と、1 つ以上の子孫ブロックの {{cssxref("margin-top")}} を隔てる境界、パディング、インライン部分、 [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)の生成、_[浮動の解除](/ja/docs/Web/CSS/Reference/Properties/clear)_ のいずれもがない場合、もしくは、あるブロックの {{cssxref("margin-bottom")}} と1つ以上の子孫ブロックの {{cssxref("margin-bottom")}} を隔て境界、パディング、インラインコンテンツ、 {{cssxref("height")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}} のいずれもがない場合、それぞれマージンが折り畳まれます。折り畳まれた側のマージンは、親要素の外側に出ます。
- 空ブロック
  - : あるブロックの {{cssxref("margin-top")}} を {{cssxref("margin-bottom")}} と隔てる境界、パディング、インラインコンテンツ、 {{cssxref("height")}}, {{cssxref("min-height")}} のいずれもがない場合、上端と下端のマージンは相殺されます。

注意すべきことがいくつかあります。

- これらのケースが組み合わさると、もっと複雑な (3 つ以上の) マージンの相殺が発生します。
- このルールはマージン幅がゼロの場合にも当てはまるので、親要素のマージンがゼロであるかどうかに関わらず、先頭/末尾の子要素のマージンは最終的に、 (上のルールに従って) その親要素より外側に出ます。
- 負のマージンが含まれる場合には、相殺されるマージンの大きさは、一番大きな正のマージンと一番小さな (もっともマイナス寄りの) マージンの合計値になります。
- すべてのマージンが負の場合、折りたたまれたマージンのサイズは、最小の (最もマイナス寄りの) マージンとなります。これは、隣接する要素と入れ子になった要素の両方に適用されます。
- マージンの相殺は、縦方向にのみ関係します。
- マージンはコンテナーの `display` が `flex` または `grid` に設定されていると相殺されません。

## 例

### HTML

```html
<p>この段落の下端マージンは相殺されています …</p>
<p>
  … この段落の上端マージンとの間で <code>1.2rem</code> のマージンになります。
</p>

<div>
  この親要素には 2 つの段落があります。
  <p>
    この段落には上のテキストとの間に <code>.4rem</code> のマージンがあります。
  </p>
  <p>
    下端マージンは親と相殺され、下端マージンは <code>2rem</code> になります。
  </p>
</div>

<p>上の要素から下に <code>2rem</code> の位置です。</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### 結果

{{EmbedLiveSample('Examples', 'auto', 350)}}

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
  - [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
  - [コメント](/ja/docs/Web/CSS/Guides/Syntax/Comments)
  - [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
  - [継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
  - [レイアウトモード](/ja/docs/Glossary/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - 値
    - [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)
    - [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)
    - [使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)
    - [実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
  - [値の定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties)
