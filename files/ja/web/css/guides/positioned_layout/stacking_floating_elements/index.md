---
title: 浮動ボックスの重ね合わせ
slug: Web/CSS/Guides/Positioned_layout/Stacking_floating_elements
original_slug: Web/CSS/CSS_positioned_layout/Stacking_floating_elements
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

浮動 (floating) ボックスについては、重ね合わせ順序が少し異なります。浮動ボックスは位置指定なしの要素と位置指定要素の間に配置されます。

1. ルート要素の背景と境界
2. 位置指定なしの子孫要素、 HTML 内での出現順
3. _浮動ボックス_
4. 位置指定ありの子孫要素、 HTML 内での出現順

位置指定要素、位置指定なしの要素についての説明は、[位置指定の種類](/ja/docs/Web/CSS/Reference/Properties/position#位置の種類)を参照してください。

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

## 結果

{{EmbedLiveSample("Example", 600, 250)}}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index): 既定の重ね合わせ規則
- [`z-index` の追加](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1): 2 階層の HTML 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2): 2 階層の HTML 構造、全階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3): 3 階層の HTML 構造、第 2 階層の `z-index`
