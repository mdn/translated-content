---
title: z-index の使用
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

この記事の最初の部分、 [z-index なしの重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index)は、既定でどのように重ね合わせが行われるのかを説明します。独自の重ね合わせ順を定義したい場合は、[位置指定](/ja/docs/Web/CSS/position#位置の種類)要素に {{cssxref("z-index")}} プロパティを使用して行うことができます。

`z-index` プロパティは整数値（正の数、ゼロ、負の数）で指定することができ、 Z 軸方向の要素の位置を表します。もし Z 軸になじみがないのであれば、重ね合わされたレイヤーがあって、それぞれに番号が付いていることを想像してください。レイヤーは番号順に、大きな番号は小さな番号の上に描画されます。

| レイヤー       | 説明                         |
| -------------- | ---------------------------- |
| 最下位レイヤー | 観ている人から最も遠い       |
| レイヤー -X    | `z-index` が負の値のレイヤー |
| レイヤー 0     | 既定のレンダリングレイヤー   |
| レイヤー X     | `z-index` が正の値のレイヤー |
| 最上位レイヤー | 観ている人に最も近い         |

> [!NOTE]
>
> - `z-index` プロパティが定義されていなければ、要素は既定の描画レイヤー 0 (ゼロ) に描画されます。
> - 同じ `z-index` 値を持つ要素が複数あれば (＝同じレイヤー上にある場合)、 [z-index なしの重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index)で説明した重ね合わせ規則が当てはまります。

## 例

この例では、レイヤーの重ね合わせ順が `z-index` を使って決め直されています。#5 の `z-index` は 、位置指定要素でないため効果を持ちません。

### HTML

```html
<div id="abs1">
  <strong>DIV #1</strong>
  <br />position: absolute; <br />z-index: 5;
</div>

<div id="rel1">
  <strong>DIV #2</strong>
  <br />position: relative; <br />z-index: 3;
</div>

<div id="rel2">
  <strong>DIV #3</strong>
  <br />position: relative; <br />z-index: 2;
</div>

<div id="abs2">
  <strong>DIV #4</strong>
  <br />position: absolute; <br />z-index: 1;
</div>

<div id="sta1">
  <strong>DIV #5</strong>
  <br />no positioning <br />z-index: 8;
</div>
```

### CSS

```css
div {
  padding: 10px;
  opacity: 0.7;
  text-align: center;
}

strong {
  font-family: sans-serif;
}

#abs1 {
  z-index: 5;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  left: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#rel1 {
  z-index: 3;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  z-index: 2;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## 結果

{{EmbedLiveSample("例", 600, 400)}}

## 関連情報

- [z-index なしの重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index) : 既定の重ね合わせ規則
- [浮動ブロックの重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): 浮動要素が重ね合わせでどのように扱われるか
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2 階層の HTML 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の `z-index`
