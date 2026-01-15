---
title: 論理的プロパティと値の基本概念
slug: Web/CSS/Guides/Logical_properties_and_values/Basic_concepts
original_slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS 論理的プロパティと値モジュール](/ja/docs/Web/CSS/Guides/Logical_properties_and_values#プロパティ)は、CSS の数多くの{{glossary("physical properties", "物理的プロパティ")}}と、値のフローに関連した対応付けを定義しています。この記事では、このモジュールについて説明し、{{glossary("flow relative values", "フロー関連値")}}とプロパティについて解説します。

## なぜ論理的プロパティが必要なのか

CSS 2.1 以前では、画面の物理的な次元に沿って大きさを決めていました。したがって、ボックスを {{CSSxRef("width")}} および {{CSSxRef("height")}} を用いて記述したり、アイテムを `top` および `left` で配置したり、境界、マージン、パディングを `top`, `right`, `bottom`, `left` で割り当てたりします。論理的プロパティと値モジュールは、これらの{{glossary("physical properties", "物理的プロパティ")}}を論理的、またはフローやその反対に関連したものへの対応付けを定義します。例えば `start` と `end` は `left` と `right` または `top` と `bottom` に対応します。

これらの対応関係は、元のレイアウトとは異なる書き込みモードの言語に翻訳されるサイトにとって、とても便利です。例えば、 CSS グリッドレイアウトでは、グリッドコンテナーに、グリッドアイテムの配置に使用される {{CSSxRef("align-self")}} および {{CSSxRef("justify-self")}} プロパティで幅が適用されている場合、これらのプロパティはフローに関連しているため、 `justify-self: start` はアイテムをインライン次元の先頭に配置し、 `align-self: start` はブロック次元の先頭に配置します。

![横書きモードでのグリッド](grid-horizontal-width-sm.png)

この部分の書字方向として `vertical-rl` を {{CSSxRef("writing-mode")}} プロパティに設定すると、配置は同様の方向で動作し続けます。インライン次元は垂直になり、ブロック次元は水平になります。しかし、幅がコンテナーの水平の寸法で割り当てられており、寸法が論理的またはテキストの流れではなく物理的な次元に結び付けられているため、グリッドは同じようには見えません。

![縦書きモードでのグリッド](grid-vertical-width-sm.png)

`width` プロパティの代わりに論理的プロパティである {{CSSxRef("inline-size")}} を使用すれば、コンポーネントは表示される書字方向が何であっても同じように動作するようになります。

![縦書きモードでのグリッドレイアウト](grid-vertical-inline-size-small.png)

次のライブサンプルを試してみましょう。 `.grid` の `writing-mode` を `vertical-rl` から `horizontal-tb` へ変更すると、プロパティが変わるとどのようにレイアウトが変わるかを確認することができます。

```html live-sample___intro-grid-example
<div class="grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css hidden live-sample___intro-grid-example
body {
  font: 1.2em / 1.5 sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}

.grid > * {
  border-radius: 5px;
  border: 2px solid rgb(96 139 168 / 0.4);
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.grid :nth-child(1) {
  align-self: start;
}

.grid :nth-child(2) {
  justify-self: end;
}
```

```css live-sample___intro-grid-example
.grid {
  writing-mode: vertical-rl;
  inline-size: 400px;
}
```

{{EmbedLiveSample("intro-grid-example", "", "450px")}}

水平方向、下方向以外の書字方向でサイトを操作する場合や、クリエイティブな理由で書字方向を使用する場合、コンテンツの流れに関連づけることができるのはとても意味のあることです。

## ブロック次元とインライン次元

フローに関連したプロパティや値を扱う上で重要な概念は、ブロックとインラインという 2 つの次元です。前述したように、フレックスボックスやグリッドレイアウトなどの新しい CSS レイアウト手法では、アイテムを配置する際に、 `right` と `left` や `top` と `bottom` ではなく、 `block` と `inline` の概念を使用します。

インライン次元は、使用されている書字方向でテキストの行が流れる方向の次元です。したがって、テキストが水平方向に左から右へ流れる英語の文書や、テキストが水平方向に右から左へ流れるアラビア語の文書では、インライン次元は水平になります。縦書きの文書 (日本語の文書など) に切り替えると、行が垂直方向に流れるので、縦書きの文書では行が縦に流れるので、インライン次元は垂直になります。

ブロック次元はもう一つの次元で、段落などのブロックが次々と表示される方向を示します。英語やアラビア語では垂直方向に表示されますが、縦書きの場合は水平方向に表示されます。

下の図は、横書きモードの場合のインラインとブロックの次元を示しています。

![インライン軸が横、ブロック軸が縦の図。](mdn-horizontal.png)

この図は、縦書きモードでのブロックとインラインの方向を示しています。

![ブロック軸が水平、インライン軸が垂直に走っている図。](mdn-vertical.png)

## 関連情報

- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [フレックスレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [フローレイアウトと書字方向](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Understanding logical properties and values](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/) (Smashing Magazine, 2018)
