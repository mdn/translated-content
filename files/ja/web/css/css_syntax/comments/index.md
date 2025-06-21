---
title: コメント
slug: Web/CSS/CSS_syntax/Comments
original_slug: Web/CSS/Comments
---

{{CSSRef}}

CSS の**コメント**は、説明的なメモをコードに追加したり、スタイルシートの特定の部分をブラウザーに解釈させないようにしたりするために使用します。設計上、コメントは文書のレイアウトにおいて効果を持ちません。

## 構文

コメントはスタイルシート内で、ホワイトスペースが置ける場所ならばどこでも配置できます。1 行で使用したり、複数行に渡らせたりすることができます。

```css
/* コメント */
```

## 例

```css
/* 1 行のコメント */

/*
複数行に
またがる
コメント
*/

/* 以下のコメントは、特定の
   スタイルを無効にします。 */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

## メモ

`/* */` のコメント構文は、 1 行のコメントにも複数行のコメントにも使用されます。外部のスタイルシートでコメントを指定する方法は他にありません。しかし、推奨されませんが、 {{htmlelement("style")}} 要素を使用するときは、古いブラウザーから CSS を隠すために `<!-- -->` を使用することができます。 `/* */` のコメント文法を使用する他のプログラミング言語と同様、コメントは入れ子にすることができません。言い換えれば、 `/*` の後で最初に `*/` が出現すると、コメントが終了します。

## 仕様書

- [CSS 2.1 Syntax and basic data types #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## 関連情報

- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/CSS_syntax/Syntax)
  - [アットルール](/ja/docs/Web/CSS/CSS_syntax/At-rule)
  - [詳細度](/ja/docs/Web/CSS/CSS_cascade/Specificity)
  - [継承](/ja/docs/Web/CSS/CSS_cascade/Inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [レイアウトモード](/ja/docs/Glossary/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#初期値)
    - [計算値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#計算値)
    - [使用値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#使用値)
    - [実効値](/ja/docs/Web/CSS/CSS_cascade/Value_processing#実効値)
  - [値の定義構文](/ja/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/CSS_images/Replaced_element_properties)
