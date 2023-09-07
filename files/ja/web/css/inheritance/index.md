---
title: 継承
slug: Web/CSS/Inheritance
---

{{CSSRef}}

CSS において、**継承** (inheritance) はある要素のあるプロパティに値が指定されなかった場合の挙動を制御します。

CSS プロパティは 2 種類に分類することができます。

- **継承プロパティ**は、既定で親要素の[計算値](/ja/docs/Web/CSS/computed_value)に設定されるものです
- **非継承プロパティ**は、既定でそのプロパティの[初期値](/ja/docs/Web/CSS/initial_value)に設定されるものです

[いずれかの CSS プロパティ](/ja/docs/Web/CSS/Reference#keyword_index)の定義を参照して、それぞれのプロパティが既定値を継承するか ("継承: あり") しないか ("継承: なし") を確認してください。

## 継承プロパティ

要素の**継承プロパティ**に値が指定されなかった場合、要素はその親要素のプロパティの[計算値](/ja/docs/Web/CSS/computed_value)を取得します。文書のルート要素だけは、プロパティの概要で与えられた[初期値](/ja/docs/Web/CSS/initial_value)を取得します。

継承プロパティの一般例として {{ Cssxref("color") }} プロパティが挙げられます。以下のスタイルルールとマークアップを考えてみましょう。

```css
p {
  color: green;
}
```

```html
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

「強調されたテキスト」という文字列は、 `em` 要素が `p` 要素から {{ Cssxref("color") }} プロパティの値を継承する為、プロパティの初期値 (※祖先要素の何れにも color プロパティが指定されていない場合に使用される文字色) ではなく、継承値の緑色となります。

## 非継承プロパティ

値を持たない**非継承プロパティ**が要素に指定された場合、要素はプロパティの[初期値](/ja/docs/Web/CSS/initial_value)（※各プロパティのページの「概要」の節に記されています）を取得します。

非継承プロパティの一般的な例としては {{ Cssxref("border") }} プロパティが挙げられます。以下のスタイルルールとマークアップを考えてみましょう。

```css
p {
  border: medium solid;
}
```

```html
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

この場合、「強調されたテキスト」という文字列は ({{ Cssxref("border-style") }} の初期値が `none` であるため) 境界がありません。

## 注

{{ Cssxref("inherit") }} のキーワードで、明示的に継承することを指定することができます。これはこれは継承プロパティでも非継承プロパティでも動作します。

すべてのプロパティに値を適用する {{cssxref("all")}} 一括指定プロパティを使用することで、すべてのプロパティの継承を制御することができます。例えば、

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

これは、 {{cssxref("font")}} プロパティのスタイルを、ユーザーのスタイルシートがなければユーザーエージェントの既定値に、あればその値に戻します。それからフォントの寸法を倍にして、 {{cssxref("font-weight")}} に `"bold"` を適用します。

## 関連情報

- 継承を制御する CSS 値: {{ cssxref("inherit") }}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("unset")}}
- [CSS カスケード入門](/ja/docs/Web/CSS/Cascade)
- [カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [アットルール](/ja/docs/Web/CSS/At-rule)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
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
