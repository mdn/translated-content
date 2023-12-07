---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 23f1411b3cdb751abd46821402b80bbc99348a72
---

{{CSSRef}}

**`flex-grow`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスコンテナー内の残りの空間が、どれだけフレックスアイテムの[主軸方向の寸法](https://www.w3.org/TR/css-flexbox/#main-size)に割り当てられるべきかを指定するフレックス伸長係数を設定します。

フレックスコンテナーの主軸方向の寸法が、フレックスアイテムの主軸方向の寸法の合計よりも大きい場合、余った空間はフレックスアイテムに分配され、各アイテムが伸びる大きさは、コンテナーのすべてのアイテムのフレックス伸長係数の合計の割合で按分した値になります。

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

## 構文

```css
/* <number> 値 */
flex-grow: 3;
flex-grow: 0.6;

/* グローバル値 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

`flex-grow` プロパティは単一の `<number>` として指定します。

### 値

- `<number>`
  - : {{cssxref("&lt;number&gt;")}} をご覧ください。負の値は無効です。既定値は 0 です。

## 解説

このプロパティは、フレックスコンテナー内の残りの空間のうち、どれだけがそのアイテムに割り当てられるか (フレックス伸長係数) を設定します。

[主軸方向の寸法](https://www.w3.org/TR/css-flexbox/#main-size)は、アイテムの幅または高さのどちらかで、 {{cssxref("flex-direction")}} の値に依存して決まります。

残りの空間とは、フレックスコンテナーの寸法からすべてのフレックスアイテムの寸法を引いたものです。すべての兄弟アイテムが同じフレックス伸長係数であった場合、すべてのアイテムには残りの空間が等しく割り当てられ、そうでなければ定義されたそれぞれフレックス伸長係数の比率に従って分配されます。

使用するにあたって、 `flex-grow` は他のフレックスプロパティである {{cssxref("flex-shrink")}} や {{cssxref("flex-basis")}} とともに使用され、通常はすべての値が設定されることを保証するために一括指定の {{cssxref("flex")}} を使用して定義します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの伸長係数の設定

この例では、 6 つのフレックスアイテムに合計 8 の伸長係数が配分されており、伸長係数 1 あたり余白の 12.5% になります。

#### HTML

```html
<h4>これは Flex-Grow です</h4>
<h5>A、B、C、F は flex-grow:1 です。 D と E は flex-grow:2 です。</h5>
<div id="content">
  <div class="small" style="background-color:red;">A</div>
  <div class="small" style="background-color:lightblue;">B</div>
  <div class="small" style="background-color:yellow;">C</div>
  <div class="double" style="background-color:brown;">D</div>
  <div class="double" style="background-color:lightgreen;">E</div>
  <div class="small" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
```

#### 結果

{{EmbedLiveSample('Setting flex item grow factor')}}

6 つのフレックスアイテムがコンテナーの主軸方向に配置されている場合、それらのフレックスアイテムの内容の主要部分の合計がコンテナーの主軸のサイズよりも小さいと、余分なスペースはサイズのフレックスアイテムに分配され、A、B、C、F はそれぞれ残りの空間の 12.5%、 D と E はそれぞれ残りの空間の 25% を取得します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスアイテムの主軸方向における比率の制御](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) Manuel Matuzovic による CSS-Tricks の記事で、どのように flex-grow が動作するかを解説している
