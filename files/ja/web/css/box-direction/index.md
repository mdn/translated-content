---
title: box-direction
slug: Web/CSS/box-direction
tags:
  - CSS
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.box-direction
translation_of: Web/CSS/box-direction
---
{{CSSRef}}{{Non-standard_header}}

> **Warning:** これはもともと CSS Flexible Box Layout Module の草稿のプロパティでしたが、より新しい標準に置き換えられました。以前の標準であった `box-direction` は `flex-direction` に置き換えられたので、 `-moz-box-direction` は XUL でのみ使用されます。現在の標準についての情報は[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)を参照してください。

**`box-direction`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックスが内容を通常通りに (上または左から) 配置するか、逆方向に (下または右から) 配置するかを指定します。

```css
/* キーワード値 */
box-direction: normal;
box-direction: reverse;

/* グローバル値 */
box-direction: inherit;
box-direction: initial;
box-direction: revert;
box-direction: unset;
```

## 構文

`box-direction` プロパティは以下に挙げたキーワード値のうちの一つで指定します。

### 値

- `normal`
  - : ボックスが内容を先頭 (左または上の端) から配置します。
- `reverse`
  - : ボックスが内容を末尾 (右または下の端) から配置します。

## メモ

整列のために _start_ と指定されたボックスの辺は、ボックスの方向によって異なります。

- 水平方向の要素の場合、 _start_ は上端になります。
- 垂直方向の要素の場合、 _start_ は左端になります。

start の反対側の端は _end_ となります。

要素の `dir` 属性を使用して書字方向を設定した場合は、このスタイルは無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ボックスの方向を設定

```css
.example {
  /* bottom-to-top layout */
  -moz-box-direction: reverse;      /* Mozilla */
  -webkit-box-direction: reverse;   /* WebKit */
  box-direction: reverse;           /* 仕様書通り */
}
```

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
