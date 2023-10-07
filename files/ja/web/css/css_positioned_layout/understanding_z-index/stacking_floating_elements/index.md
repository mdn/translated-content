---
title: 浮動ブロックの重ね合わせ
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements
---

{{CSSRef}}

浮動 (floated) ブロックについては、重ね合わせ順序が少し異なります。浮動ブロックは位置指定なしのブロックと位置指定ブロックの間に配置されます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫ブロック、 HTML 内での出現順
3. _浮動ブロック_
4. 位置指定ありの子孫要素、 HTML 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置指定の種類](/ja/docs/Web/CSS/position#types_of_positioning)を参照してください。

実際、以下の例に見られるように、位置指定なしのブロック (DIV #4) の背景と境界は、完全に浮動ブロックの影響を受けませんが、内容は影響を受けます。この挙動は、上記のリストに規則を追加することで示すことができます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫ブロック、 HTML 内での出現順
3. 浮動ブロック
4. <em>位置指定なしの子孫のインライン要素</em>
5. 位置指定ありの子孫要素、 HTML 内での出現順

{{EmbedLiveSample("Source_code_for_the_example", 600, 250)}}

> **メモ:** 位置指定なしのブロック (DIV #4) の `opacity` の値を変更すると、そのブロックの背景と境界が、浮動ブロックや位置指定ブロックの上に飛び出し、おかしな結果になります。これは、仕様書の中で、 `opacity` の値を適用すると新しい重ね合わせコンテキストを作成するという、奇妙な部分によるものです ([What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/) を参照してください)。

<h2 id="Source_code_for_the_example">例のソースコード</h2>

### HTML

```html
<div id="abs1"><b>DIV #1</b><br />position: absolute;</div>

<div id="flo1"><b>DIV #2</b><br />float: left;</div>

<div id="flo2"><b>DIV #3</b><br />float: right;</div>

<br />

<div id="sta1"><b>DIV #4</b><br />no positioning</div>

<div id="abs2"><b>DIV #5</b><br />position: absolute;</div>

<div id="rel1"><b>DIV #6</b><br />position: relative;</div>
```

### CSS

```css
div {
  padding: 10px;
  text-align: center;
}

b {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 10px 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 80px;
  left: 100px;
  border: 1px dashed #990;
  background-color: #fdd;
}

#rel1 {
  position: relative;
  border: 1px dashed #996;
  background-color: #cff;
  margin: 0px 10px 0px 10px;
  text-align: left;
}
```

## 関連情報

- [z-index なしの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): 既定の重ね合わせ規則
- [z-index の追加](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2 階層の HTML 構造で、最終階層の z-index
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの z-index
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の z-index
