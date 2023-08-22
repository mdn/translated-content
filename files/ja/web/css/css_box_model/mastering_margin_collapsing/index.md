---
title: マージンの相殺の習得
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
---

{{CSSRef}}

ブロックの[上端](/ja/docs/Web/CSS/margin-top)と[下端](/ja/docs/Web/CSS/margin-bottom)のマージンは、それぞれのマージンの最も大きい寸法 (または等しい場合はいずれか 1 つ) の単一のマージンに結合される (折り畳まれる、collapsed) ことがあり、**マージンの相殺**という動作として知られています。なお、[浮動](/ja/docs/Web/CSS/float)要素と[絶対位置指定](/ja/docs/Web/CSS/position#types_of_positioning)要素では折り畳まれません。

マージンの相殺は、基本的に 3 つの場合に発生します。

- 隣接兄弟要素
  - : 隣接兄弟要素のマージンは相殺されます (後ろの兄弟要素がそれ以前の浮動状態を[解除](/ja/docs/Web/CSS/clear) する必要がある場合を除く)。
- 親と子孫を隔てるコンテンツがない場合
  - : あるブロックの {{cssxref("margin-top")}} と、1 つ以上の子孫ブロックの {{cssxref("margin-top")}} を隔てる境界、パディング、インライン部分、 [ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)の生成、_[浮動の解除](/ja/docs/Web/CSS/clear)_ のいずれもがない場合、もしくは、あるブロックの {{cssxref("margin-bottom")}} と1つ以上の子孫ブロックの {{cssxref("margin-bottom")}} を隔て境界、パディング、インラインコンテンツ、 {{cssxref("height")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}} のいずれもがない場合、それぞれマージンが折り畳まれます。折り畳まれた側のマージンは、親要素の外側に出ます。
- 空ブロック
  - : あるブロックの {{cssxref("margin-top")}} を {{cssxref("margin-bottom")}} と隔てる境界、パディング、インラインコンテンツ、 {{cssxref("height")}}, {{cssxref("min-height")}} のいずれもがない場合、上端と下端のマージンは相殺されます。

注意すべきことがいくつかあります。

- これらのケースが組み合わさると、もっと複雑な (3 つ以上の) マージンの相殺が発生します。
- このルールはマージン幅がゼロの場合にも当てはまるので、親要素のマージンがゼロであるかどうかに関わらず、先頭/末尾の子要素のマージンは最終的に、 (上のルールに従って) その親要素より外側に出ます。
- 負のマージンが含まれる場合には、相殺されるマージンの大きさは、一番大きな正のマージンと一番小さな (もっともマイナス寄りの) マージンの合計値になります。
- すべてのマージンが負の場合、折りたたまれたマージンのサイズは、最小の (最もマイナス寄りの) マージンとなります。これは、隣接する要素と入れ子になった要素の両方に適用されます。
- マージンの相殺は、縦方向にのみ関係します。

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

## 仕様書

{{Specifications}}

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [アットルール](/ja/docs/Web/CSS/At-rule)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
  - [継承](/ja/docs/Web/CSS/inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [レイアウトモード](/ja/docs/Web/CSS/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
