---
title: justify-self
slug: Web/CSS/justify-self
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`justify-self`** プロパティは、配置コンテナーの適切な軸に沿って内部でボックスの位置合わせをする方法を設定します。

{{EmbedInteractiveExample("pages/css/justify-self.html")}}

このプロパティの効果は、現在のレイアウトモードに依存します。

- ブロックレベルレイアウトでは、包含ブロック内のアイテムをインライン軸で配置します。
- 絶対位置指定の要素では、 top, left, bottom, right の各オフセット値を反映して、包含ブロック内のアイテムをインライン軸で配置します。
- 表のセルレイアウトでは、このプロパティは*無視されます* (絶対位置指定および表レイアウトのブロック内の配置については[こちら](/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables))
- フレックスボックスレイアウトでは、このプロパティは*無視されます* (フレックスボックス内での配置については[こちら](/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox))
- グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します (グリッドレイアウト内での配置については[こちら](/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout))

## 構文

```css
/* 基本キーワード */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* 位置による配置 */
justify-self: center; /* 中央付近にアイテムを集める */
justify-self: start; /* 開始側にアイテムを集める */
justify-self: end; /* 終端側にアイテムを集める */
justify-self: flex-start; /* 開始側にフレックスアイテムを集める */
justify-self: flex-end; /* 終端側にフレックスアイテムを集める */
justify-self: self-start;
justify-self: self-end;
justify-self: left; /* 左側にアイテムを集める */
justify-self: right; /* 右側にアイテムを集める */

/* ベースラインの配置 */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* あふれたときの配置 (位置による配置時のみ) */
justify-self: safe center;
justify-self: unsafe center;

/* グローバル値 */
justify-self: inherit;
justify-self: initial;
justify-self: revert;
justify-self: unset;
```

このプロパティは 3 つの異なる形式のうち 1 つを取ることができます。

- 基本キーワード: キーワード値 `normal`, `auto`, `stretch` のうちの一つ。
- ベースラインによる配置: `baseline` キーワードに加えて、任意で `first` または `last` のどちらか。
- 位置による配置:

  - `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left`, `right` のうちの一つ。
  - 加えて任意で `safe` または `unsafe`。

### 値

- `auto`
  - : 使用される値は、ボックスに親があれば、親ボックスの `justify-items` プロパティ、そうでなければ絶対位置であり、このような場合、 `auto` は `normal` を表します。
- `normal`

  - : このキーワードの効果は、レイアウトモードに依存します。
    - ブロックレベルレイアウトでは、このキーワードは `start` の別名です。
    - 絶対位置のレイアウトでは、このキーワードは*置換*の絶対位置ボックスには `start` のように振舞い、*その他*の絶対位置ボックスには `stretch` のように振舞います。
    - 表のセルレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - フレックスボックスレイアウトでは、このキーワードは意味を持たず、*無視*されます。
    - グリッドレイアウトでは、このキーワードは `stretch` のうちの一つと似た動作をしますが、アスペクト比や固有の寸法を持つボックスは `start` のように振舞います。

- `start`
  - : アイテムは適切な軸で配置コンテナーの開始側に向かって、互いに接するように詰められます。
- `end`
  - : アイテムは適切な軸で配置コンテナーの終端側に向かって、互いに接するように詰められます。
- `flex-start`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `start` のように扱われます。
- `flex-end`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `end` のように扱われます。
- `self-start`
  - : アイテムは適切な軸で、アイテムの開始側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `self-end`
  - : アイテムは適切な軸で、アイテムの終端側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `center`
  - : アイテムは配置コンテナーの中央で、互いに接するように詰められます。
- `left`
  - : アイテムは配置コンテナーの左端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行でない場合は、この値は `start` のように動作します。
- `right`
  - : アイテムは配置コンテナーの右端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行ではない場合は、この値は `start` のように動作します。
- `baseline`, `first baseline`, `last baseline`
  - : first- または last-baseline 配置への参加を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、 `last baseline` の代替配置は `end` です。
- `stretch`
  - : アイテムの寸法の合計が配置コンテナーの寸法より小さい場合に、寸法が `auto` であるすべてのアイテムは (比例的にではなく) 均等に引き伸ばされます。ただし、 {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (あるいは同等の機能) による制限は尊重します。これにより、寸法の合計が配置コンテナーを主軸に沿って完全に埋めるようになります。
- `safe`
  - : アイテムの寸法が配置コンテナーをあふれた場合、アイテムは配置モードが `start` であったかのように配置されます。
- `unsafe`
  - : アイテムのと配置コンテナーの寸法の関係にかかわらず、指定した値を尊重します。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

<h3 id="Simple_demonstration">簡単なデモ</h3>

以下の例では簡単な 2 x 2 のグリッドレイアウトを用意しました。最初にグリッドコンテナーには `justify-items` の値を `stretch` に — 既定値に — 設定し、グリッドアイテムがセルの幅全体に広がるようにしています。

2 番目、3 番目、4 番目のグリッドアイテムは、別々な `justify-self` の値を指定し、これらが `justify-items` の値をオーバーライドする様子を表示します。これらの値はグリッドアイテムを内容物の幅に設定し、セルごとに異なる位置に配置しています。

#### HTML

```html
<article class="container">
  <span>First child</span>
  <span>Second child</span>
  <span>Third child</span>
  <span>Fourth child</span>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 300px;
  justify-items: stretch;
}

span:nth-child(2) {
  justify-self: start;
}

span:nth-child(3) {
  justify-self: center;
}

span:nth-child(4) {
  justify-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article {
  margin: 20px;
}
```

#### 結果

{{EmbedLiveSample('Simple_demonstration', '100%', 200)}}

## 仕様書

{{Specifications("css.properties.justify-self.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS グリッドガイド: _[CSS グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
- {{CSSxRef("justify-items")}} プロパティ
