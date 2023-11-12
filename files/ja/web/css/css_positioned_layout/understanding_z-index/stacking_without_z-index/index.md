---
title: z-index なしの重ね合わせ
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index
---

{{CSSRef}}

どの要素にも {{cssxref("z-index")}} プロパティが指定されていない場合、要素は以下の順序で (下から上に) 重ね合わせられます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫ブロック、 HTML 内での出現順
3. 位置指定ありの子孫要素、 HTML 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置指定の種類](/ja/docs/Web/CSS/position#types_of_positioning)を参照してください。

{{cssxref("order")}} プロパティによってフレックスコンテナーの中の描画を「HTML の中での出現順」から変更したとき、重ね合わせコンテキストの順も同様に影響することを意識しておいて下さい。

以下の例では、 #1 から #4 までの要素が位置指定要素です。 #5 の要素は static であり、 HTML マークアップの中で後に来ていたとしても、他の 4 つの要素の下に描かれます。

{{EmbedLiveSample("Source_code_for_the_example", 600, 400)}}

<h2 id="Source_code_for_the_example">例のソースコード</h2>

### HTML

```html
<div id="abs1" class="absolute"><b>DIV #1</b><br />position: absolute;</div>
<div id="rel1" class="relative"><b>DIV #2</b><br />position: relative;</div>
<div id="rel2" class="relative"><b>DIV #3</b><br />position: relative;</div>
<div id="abs2" class="absolute"><b>DIV #4</b><br />position: absolute;</div>
<div id="sta1" class="static"><b>DIV #5</b><br />position: static;</div>
```

### CSS

```css
b {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## 関連情報

- [浮動ブロックの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): 浮動要素が重ね合わせでどのように扱われるか
- [z-index の追加](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2 階層の HTML 構造で、最終階層の z-index
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの z-index
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の z-index
