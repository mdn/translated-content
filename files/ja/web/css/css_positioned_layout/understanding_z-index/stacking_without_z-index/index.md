---
title: z-index なしの重ね合わせ
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

どの要素にも {{cssxref("z-index")}} プロパティが指定されていない場合、要素は以下の順序で（下から上に）重ね合わせられます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫ブロック、 HTML 内での出現順
3. 位置指定ありの子孫要素、 HTML 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置の種類](/ja/docs/Web/CSS/position#位置の種類)を参照してください。

{{cssxref("order")}} プロパティによってフレックスコンテナー ({{cssxref("flex")}}) の中の描画を「HTML の中での出現順」から変更したとき、重ね合わせコンテキストの順も同様に影響することを意識しておいて下さい。

## 例

以下の例では、 #1 から #4 までの要素が位置指定要素です。 #5 の要素は static であり、 HTML マークアップの中で後に来ていたとしても、他の 4 つの要素の下に描かれます。

### HTML

```html
<div id="abs1" class="absolute">
  <strong>DIV #1</strong><br />position: absolute;
</div>
<div id="rel1" class="relative">
  <strong>DIV #2</strong><br />position: relative;
</div>
<div id="rel2" class="relative">
  <strong>DIV #3</strong><br />position: relative;
</div>
<div id="abs2" class="absolute">
  <strong>DIV #4</strong><br />position: absolute;
</div>
<div id="sta1" class="static">
  <strong>DIV #5</strong><br />position: static;
</div>
```

### CSS

```css
strong {
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

## 結果

{{EmbedLiveSample("例", 600, 400)}}

## 関連情報

- [浮動ブロックの重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): 浮動要素が重ね合わせでどのように扱われるか
- [z-index の追加](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2 階層の HTML 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の `z-index`
