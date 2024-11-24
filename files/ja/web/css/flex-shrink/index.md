---
title: flex-shrink
slug: Web/CSS/flex-shrink
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**`flex-shrink`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスアイテムのフレックス縮小係数を設定します。すべてのフレックスアイテムの寸法がフレックスコンテナーより大きい場合、フレックスアイテムは `flex-shrink` 値に従って[収縮します](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#flex-shrink_プロパティ)。それぞれのフレックス行の[負の余白](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#正と負の余白)は、その行の `flex-shrink` 値が `0` より大きいフレックスアイテム間で分配されます。

> **メモ:** {{cssxref("flex")}} 一括指定を使用する方が、個別に `flex-shrink`、{{cssxref("flex-grow")}}、{{cssxref("flex-basis")}} の宣言を使用するよりも推奨されます。この文書では、一括指定成分の一つである `flex-shrink` プロパティについて説明していますので、ここではこれらを別個のものとしています。

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

## 構文

```css
/* <number> 値 */
flex-shrink: 2;
flex-shrink: 0.6;

/* グローバル値 */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: revert;
flex-shrink: revert-layer;
flex-shrink: unset;
```

## 解説

`flex-shrink` プロパティはフレックス縮小係数を指定します。これは、フレックスコンテナー内でフレックスアイテムに負の余白が配分されたときに、そのフレックスアイテムが他のフレックスアイテムに対して相対的にどれだけ縮小するかを決定します。

このプロパティは、ブラウザーがフレックスアイテムの flex-basis 値を計算し、フレックスコンテナー内で収まらない大きさであることを見つけた場合に対処します。flex-shrink が正の値を持つ限り、アイテムはコンテナー内であふれないように縮小されます。

`flex-grow` プロパティは、各アイテムのフレックス伸長係数に比例して、利用できる正の余白を指定するプロパティで、 `flex-grow` プロパティの値のみを考慮します。 `flex-shrink` プロパティは、ボックスがあふれることなくコンテナー内で収まるように、負の余白を除去することを管理します。余白の除去は余白を追加するよりも少し複雑です。フレックス縮小係数はフレックス基本サイズに掛け合わされ、アイテムがどれだけ縮小できるかに比例して負の空間を分配します。これにより、大きなアイテムが顕著に縮小する前に、小さなアイテムが `0px` まで縮小してしまうことを防ぎます。

一般的に、 `flex-shrink` は {{cssxref("flex-grow")}} や {{cssxref("flex-basis")}} プロパティと一緒に使用します。 `flex` 一括指定では、フレックス縮小係数は常に 2 つ目の `<number>` になります。一括指定に 1 つの数値しか記載されていない場合、その値は `flex-grow` 値であると想定されます。

### 値

`flex-shrink` プロパティは単一の `<number>` で指定します。

- `<number>`
  - : {{cssxref("&lt;number&gt;")}} を参照してください。負の値は無効です。既定値は 1 です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの縮小係数の設定

この例は、アイテムの縮小係数に基づいて負の余白がどのように分配されるかを示しています。この例には、 `flex-shrink` 値が 0 より大きい 5 つのフレックスアイテムが含まれており、これらのアイテムの組み合わせ幅は、親フレックスコンテナーの幅よりも大きくなっています。

#### HTML

```html live-sample___setting_flex_item_shrink_factor
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box4" style="background-color:lightsalmon;">D</div>
  <div class="box5" style="background-color:lightgreen;">E</div>
</div>
```

#### CSS

各フレックスアイテムの {{cssxref("width")}} は `200px` です。 {{cssxref("flex-basis")}} プロパティは既定で `auto` なので、各アイテムの flex-basis は `200px` になります。これにより、フレックスアイテムの合計幅は `1000px` となり、コンテナー内で使用するサイズの 2 倍になります。すべてのフレックスアイテムは縮小可能で、 `flex-shrink` 値が `0` より大きく設定しています。 最後の 2 つのアイテムはより縮小されるように `flex-shrink` 値が大きく設定されています。

```css live-sample___setting_flex_item_shrink_factor
#content {
  display: flex;
  width: 500px;
}

#content div {
  width: 200px;
}

.box {
  flex-shrink: 1;
}

.box4 {
  flex-shrink: 1.5;
}

.box5 {
  flex-shrink: 2;
}
```

```css hidden
#content {
  margin: 5px;
}
div {
  font-family: monospace;
  outline: 1px solid;
  line-height: 4em;
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample('Setting_flex_item_shrink_factor', 500, 100)}}

フレックスアイテムは縮小できるので、コンテナー内であふれることはありません。 `500px` の負の余白は、 `flex-shrink` の値に基づいて 5 つのアイテムに分配されます。最初の 3 つのアイテムには `flex-shrink: 1` が設定されています。 D は `flex-shrink: 1.5`、 E は `flex-shrink: 2` を設定しています。 D と E の最終的な幅は他よりも小さくなり、 E は D より小さくなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール
