---
title: justify-items
slug: Web/CSS/Reference/Properties/justify-items
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

[CSS](/ja/docs/Web/CSS) の **`justify-items`** プロパティは、ボックスのすべてのアイテムに既定の {{CSSxRef("justify-self")}} を定義し、それぞれのボックスの調整を適切な軸に沿って、既定の方法で行ないます。

{{InteractiveExample("CSS デモ: justify-items")}}

```css interactive-example-choice
justify-items: stretch;
```

```css interactive-example-choice
justify-items: center;
```

```css interactive-example-choice
justify-items: start;
```

```css interactive-example-choice
justify-items: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

このプロパティの効果は、現在のレイアウトモードに依存します。

- ブロックレベルレイアウトでは、包含ブロック内のアイテムをインライン軸で配置します。
- 絶対位置指定の要素では、 top, left, bottom, right の各オフセット値を反映して、包含ブロック内のアイテムをインライン軸で配置します。
- 表のセルレイアウトでは、このプロパティは無視されます（[ブロック、絶対配置、表レイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)を参照）
- フレックスボックスレイアウトでは、このプロパティは無視されます（[フレックスボックスでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)を参照）
- グリッドレイアウトでは、グリッド領域内のアイテムに、インライン方向の整列を設定します（[グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)を参照）

## 構文

```css
/* 基本キーワード */
justify-items: normal;
justify-items: stretch;

/* 位置による配置 */
justify-items: center; /* 中央付近にアイテムを集める */
justify-items: start; /* 先頭側にアイテムを集める */
justify-items: end; /* 末尾側にアイテムを集める */
justify-items: flex-start; /* 'start' と同等です。なお、 justify-items はフレックスボックスレイアウト内では無視されます。 */
justify-items: flex-end; /* 'end' と同等です。なお、 justify-items はフレックスボックスレイアウト内では無視されます。 */
justify-items: self-start;
justify-items: self-end;
justify-items: left; /* 左側にアイテムを集める */
justify-items: right; /* 右側にアイテムを集める */
justify-items: anchor-center;

/* ベースラインの配置 */
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;

/* あふれたときの配置 (位置による配置時のみ) */
justify-items: safe center;
justify-items: unsafe center;

/* 従来の配置 */
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;

/* グローバル値 */
justify-items: inherit;
justify-items: initial;
justify-items: revert;
justify-items: revert-layer;
justify-items: unset;
```

このプロパティは 4 つの異なる形式のうち 1 つを取ることができます。

- 基本キーワード: キーワード値 `normal`, `stretch` のどちらか。
- ベースラインによる配置: `baseline` キーワードに加えて、任意で `first` または `last` のどちらか。
- 位置による配置: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left`, `right` のうちの一つ。加えて任意で `safe` または `unsafe`。
- 歴史的な配置: `legacy` キーワードに続いて、 `left` または `right` のどちらかの値。

### 値

- `normal`
  - : このキーワードの効果は、現在のレイアウトモードに依存します。
    - ブロックレベルレイアウトでは、このキーワードは `start` の別名です。
    - 絶対位置のレイアウトでは、このキーワードは置換ボックスには `start` のように動作し、その他の絶対位置指定ボックスには `stretch` のように動作します。
    - 表のセルレイアウトでは、このキーワードは意味を持たず、無視されます。
    - フレックスボックスレイアウトでは、このキーワードは意味を持たず、無視されます。
    - グリッドレイアウトでは、このキーワードは `stretch` のうちの一つと似た動作をしますが、アスペクト比や固有のサイズを持つボックスは `start` のように動作します。
- `start`
  - : アイテムは適切な軸で配置コンテナーの先頭側に向かって、互いに接するように詰められます。
- `end`
  - : アイテムは適切な軸で配置コンテナーの末尾側に向かって、互いに接するように詰められます。
- `flex-start`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `start` のように扱われます。
- `flex-end`
  - : フレックスコンテナーの子ではないアイテムにおいては、この値は `end` のように扱われます。
- `self-start`
  - : アイテムは適切な軸で、アイテムの先頭側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `self-end`
  - : アイテムは適切な軸で、アイテムの末尾側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。
- `center`
  - : アイテムは配置コンテナーの中央で、互いに接するように詰められます。
- `left`
  - : アイテムは配置コンテナーの左端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行でない場合は、この値は `start` のように動作します。
- `right`
  - : アイテムは配置コンテナーの右端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行ではない場合は、この値は `start` のように動作します。
- `baseline`, `first baseline`, `last baseline`
  - : first-baseline または last-baseline 配置への参加を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `stretch`
  - : アイテムのサイズの合計が配置コンテナーのサイズより小さい場合に、サイズが `auto` であるすべてのアイテムは（比例的にではなく）均等に引き伸ばされます。ただし、 {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} （あるいは同等の機能）による制限は尊重します。これにより、サイズの合計が配置コンテナーを主軸に沿って完全に埋めるようになります。
- `anchor-center`
  - : [アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)要素の場合、関連付けられたアンカー要素のインライン方向の中心にアイテムを配置します。 [`anchor-center` を使用してアンカーの中央に配置](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-center_を使用してアンカーの中央に配置)を参照してください。
- `safe`
  - : アイテムのサイズが配置コンテナーをあふれた場合、アイテムは配置モードが `start` であったかのように配置されます。
- `unsafe`
  - : アイテムのと配置コンテナーのサイズの関係にかかわらず、指定した値を尊重します。
- `legacy`
  - : 値がボックスの子孫に継承されるようにします。なお、子孫が `justify-self: auto` の値を持っている場合、 `legacy` キーワードは子孫からは考慮されず、関連付けられた `left`, `right`, `center` の値のみが継承されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的なデモ

この例では、 2 x 2 のグリッドレイアウトを示します。初期状態では、グリッドコンテナーには `justify-items` の値として `stretch` （既定値）が設定されており、グリッドアイテムはそのセルの幅全体に広がっています。

しかし、グリッドコンテナーの上にマウスカーソルを置いたり、タブを押したりすると、グリッドアイテムには `justify-items` の値である `center` が設定され、グリッドアイテムの幅はコンテンツの幅と同じだけ広がり、セルの中心に整列します。

#### HTML

```html
<article class="container" tabindex="0">
  <span>First child</span>
  <span>Second child</span>
  <span>Third child</span>
  <span>Fourth child</span>
</article>
```

#### CSS

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
  justify-items: stretch;
}

article:hover,
article:focus {
  justify-items: center;
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
```

#### 結果

{{EmbedLiveSample('Basic_demonstration', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("justify-self")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("place-items")}} 一括指定
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
