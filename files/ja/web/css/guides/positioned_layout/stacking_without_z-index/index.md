---
title: z-index プロパティなしの重ね合わせ
short-title: z-index なしの重ね合わせ
slug: Web/CSS/Guides/Positioned_layout/Stacking_without_z-index
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

どの要素にも {{cssxref("z-index")}} プロパティが指定されていない場合、要素は以下の順序で（下から上に）重ね合わせられます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫ブロック、 HTML 内での出現順
3. 位置指定ありの子孫要素、 HTML 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置の種類](/ja/docs/Web/CSS/Reference/Properties/position#位置の種類)を参照してください。

{{cssxref("order")}} プロパティによってフレックスコンテナー ({{cssxref("flex")}}) の中の描画を「HTML の中での出現順」から変更したとき、重ね合わせコンテキストの順も同様に影響することを意識しておいて下さい。

## 例

以下の例では、 #1 から #4 までの要素が位置指定要素です。 #5 の要素は static であり、 HTML マークアップの中で後に来ていたとしても、他の 4 つの要素の下に描かれます。

### HTML

```html live-sample___example
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

```css live-sample___example
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
  background-color: #ffffcc;
  border-color: #999966;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #ffdddd;
  border-color: #990000;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #ccffcc;
  border-color: #669966;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffffcc;
  margin: 0px 50px;
}
```

## 結果

{{EmbedLiveSample("Example", 600, 400)}}

## 関連情報

- [z-index を理解する](/ja/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [z-index の使用](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [浮動ボックスの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
