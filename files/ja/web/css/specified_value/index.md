---
title: 指定値
slug: Web/CSS/specified_value
---

{{CSSRef}}

**指定値** (specified value) は、 [CSS](/ja/docs/Web/CSS) プロパティにおいて文書のスタイルシートから受け取る値です。指定されたプロパティの指定値は、以下の規則に従って決定されます。

1. 文書のスタイルシートが明示的にプロパティに値を指定した場合は、その値が使用されます。
2. 文書のスタイルシートが値を指定しなかった場合、可能であれば親要素から値を継承します。
3. 上記のいずれも利用できない場合、要素の[初期値](/ja/docs/Web/CSS/initial_value)が使用されます。

## 例

### HTML

```html
<p>ここに指定された色は、 CSS で明示的に与えられています。</p>

<div>
  この要素では、 CSS で何も指定されていないため、
  すべてのプロパティの指定値は既定で初期値になっています。
</div>

<div class="fun">
  <p>
    このフォントファミリーは CSS で明示的に指定されていないため、
    指定値は親から継承されます。 ただし、 border
    は継承されたプロパティではありません。
  </p>
</div>
```

### CSS

```css
.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
```

### 結果

{{EmbedLiveSample("Examples", 500, 220)}}

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
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
