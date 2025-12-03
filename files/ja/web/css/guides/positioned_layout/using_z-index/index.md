---
title: z-index の使用
slug: Web/CSS/Guides/Positioned_layout/Using_z-index
original_slug: Web/CSS/CSS_positioned_layout/Using_z-index
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

この記事の最初の部分、 [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)は、既定でどのように重ね合わせが行われるのかを説明します。独自の重ね合わせ順を定義したい場合は、 {{cssxref("z-index")}} プロパティを[位置指定](/ja/docs/Web/CSS/Reference/Properties/position#位置の種類)要素に使用して行うことができます。

`z-index` プロパティは整数値（正の数、ゼロ、負の数）で指定することができ、想像上の Z 軸方向の要素の位置を表します。もし「Z 軸」という言葉になじみがないのであれば、重ね合わされたレイヤーがあって、それぞれに番号が付いていることを想像してください。レイヤーは番号順に、より大きな番号はより小さな番号の上に描画されます（_X_ は任意の正の整数を示します）。

| レイヤー       | 説明                         |
| -------------- | ---------------------------- |
| 最下位レイヤー | 観ている人から最も遠い       |
| レイヤー -X    | `z-index` が負の値のレイヤー |
| レイヤー 0     | 既定の描画レイヤー           |
| レイヤー X     | `z-index` が正の値のレイヤー |
| 最上位レイヤー | 観ている人に最も近い         |

> [!NOTE]
>
> - `z-index` プロパティが定義されていなければ、要素は既定の描画レイヤー 0 (ゼロ) に描画されます。
> - 同じ `z-index` 値を持つ要素が複数あれば (＝同じレイヤー上にある場合)、 [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)で説明した重ね合わせ規則が当てはまります。

## 例

この例では、レイヤーの重ね合わせ順が `z-index` を使って決め直されています。 DIV #5 の `z-index` は 、位置指定要素でないため効果を持ちません。

### HTML

```html live-sample___example
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
  <br />位置指定なし <br />z-index: 8;
</div>
```

### CSS

```css live-sample___example
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

{{EmbedLiveSample("Example", 600, 400)}}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index) : 既定の重ね合わせ規則
- [浮動ボックスの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements): 浮動ボックスが重ね合わせでどのように扱われるか
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1): 2 階層の HTML 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2): 2 階層の HTML 構造、全階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3): 3 階層の HTML 構造、第 2 階層の `z-index`
