---
title: 浮動ボックスの重ね合わせ
slug: Web/CSS/Guides/Positioned_layout/Stacking_floating_elements
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

浮動 (floating) ボックスについては、重ね合わせ順序が少し異なります。浮動ボックスは位置指定なしの要素と位置指定要素の間に配置されます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫要素、 HTML 内での出現順
3. _浮動ボックス_
4. 位置指定ありの子孫要素、 HTML 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置指定の種類](/ja/docs/Web/CSS/Reference/Properties/position#位置指定の種類)を参照してください。

> [!NOTE]
> 位置指定なしの要素（下記の例の DIV #4）の `opacity` の値を変更すると、その要素の背景と境界が、浮動ボックスや位置指定要素の上に飛び出し、おかしな結果になります。これは、仕様書の中で、 `opacity` の値を適用すると新しい重ね合わせコンテキストを作成するという、奇妙な部分によるものです（[What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/) を参照してください）。

## 例

以下の例に見られるように、位置指定なしの要素 (DIV #4) の背景と境界は、完全に浮動ボックスの影響を受けませんが、内容は影響を受けます。この挙動は、上記のリストに規則を追加することで示すことができます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫要素、 HTML 内での出現順
3. 浮動ボックス
4. _位置指定なしの子孫のインライン要素_
5. 位置指定ありの子孫要素、 HTML 内での出現順

### HTML

```html live-sample___example
<div id="abs1"><strong>DIV #1</strong><br />position: absolute;</div>

<div id="flo1"><strong>DIV #2</strong><br />float: left;</div>

<div id="flo2"><strong>DIV #3</strong><br />float: right;</div>

<br />

<div id="sta1"><strong>DIV #4</strong><br />no positioning</div>

<div id="abs2"><strong>DIV #5</strong><br />position: absolute;</div>

<div id="rel1"><strong>DIV #6</strong><br />position: relative;</div>
```

### CSS

```css live-sample___example
div {
  padding: 10px;
  text-align: center;
}

strong {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #999966;
  background-color: #ffffcc;
  margin: 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #009900;
  background-color: #ccffcc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #009900;
  background-color: #ccffcc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 80px;
  left: 100px;
  border: 1px dashed #999900;
  background-color: #ffdddd;
}

#rel1 {
  position: relative;
  border: 1px dashed #999966;
  background-color: #ccffff;
  margin: 0px 10px;
  text-align: left;
}
```

## 結果

{{EmbedLiveSample("Example", 600, 250)}}

## 関連情報

- [z-index を理解する](/ja/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
- [`z-index` プロパティなしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [z-index の使用](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
