---
title: マージンの相殺の習得
short-title: マージンの相殺
slug: Web/CSS/Guides/Box_model/Margin_collapsing
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

ブロックの[上端](/ja/docs/Web/CSS/Reference/Properties/margin-top)と[下端](/ja/docs/Web/CSS/Reference/Properties/margin-bottom)のマージンは、それぞれのマージンの大きい方の寸法（または等しい場合はいずれか 1 つ）の単一のマージンに結合される（相殺される、collapsed）ことがあり、**マージンの相殺**という動作として知られています。なお、[浮動](/ja/docs/Web/CSS/Reference/Properties/float)要素と[絶対位置指定](/ja/docs/Web/CSS/Reference/Properties/position#位置の種類)要素では相殺されません。

マージンの相殺は、基本的に 3 つの場合に発生します。

- 隣接兄弟要素
  - : 隣接兄弟要素のマージンは相殺されます（後ろの兄弟要素がそれ以前の浮動状態を[解除](/ja/docs/Web/CSS/Reference/Properties/clear)する必要がある場合を除く）。
- 親と子孫を隔てるコンテンツがない場合
  - : 親ブロックとその子孫ブロックの間の垂直マージンは、両者の間に分離するコンテンツが存在しない場合に相殺されることがあります。具体的には、主に以下の 2 つの場合で現れます。
    - 親要素の {{cssxref("margin-top")}} は、そのフロー内の最初の子要素の {{cssxref("margin-top")}} と相殺されます。ただし、親要素に {{cssxref("border-top")}} や {{cssxref("padding-top")}} が設定されている場合、インラインコンテンツ（テキストなど）が含まれている場合、[浮動の解除](/ja/docs/Web/CSS/Reference/Properties/clear)が行われている場合を除きます。
    - 親要素の {{cssxref("margin-bottom")}} は、そのフロー内の最後の子要素の {{cssxref("margin-bottom")}} と相殺されます。ただし、親要素に {{cssxref("height")}} または {{cssxref("min-height")}}、{{cssxref("border-bottom")}} や {{cssxref("padding-bottom")}} が設定されている場合を除きます。

    どちらの場合でも、親要素に新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)を作成した場合にも、雇用外のマージンの総裁は行われなくなります。

- 空ブロック
  - : あるブロックに {{cssxref("margin-top")}} を {{cssxref("margin-bottom")}} と隔てる境界、パディング、インラインコンテンツ、{{cssxref("height")}} または {{cssxref("min-height")}} のいずれもがない場合、上端と下端のマージンは相殺されます。

注意すべきことがいくつかあります。

- これらのケースが組み合わさると、もっと複雑な (3 つ以上の) マージンの相殺が発生します。
- このルールはマージン幅がゼロの場合にも当てはまるので、親要素のマージンがゼロであるかどうかに関わらず、先頭/末尾の子要素のマージンは最終的に、 (上のルールに従って) その親要素より外側に出ます。
- 負のマージンが含まれる場合には、相殺されるマージンの大きさは、一番大きな正のマージンと一番小さな (もっともマイナス寄りの) マージンの合計値になります。
- すべてのマージンが負の場合、折りたたまれたマージンのサイズは、最小の（最もマイナス寄りの）マージンとなります。これは、隣接する要素と入れ子になった要素の両方に適用されます。
- マージンの相殺は、縦方向にのみ行われます。
- マージンはコンテナーの `display` が `flex` または `grid` に設定されていると相殺されません。

## 例

### HTML

```html-nolint
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

- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
- [CSS ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
  - [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
  - [コメント](/ja/docs/Web/CSS/Guides/Syntax/Comments)
  - [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
  - [継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [レイアウトモード](/ja/docs/Glossary/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - 値
    - [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)
    - [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)
    - [使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)
    - [実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
  - [値の定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{glossary("Replaced elements", "置換要素")}}
