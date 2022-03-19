---
title: fit-content()
slug: Web/CSS/fit-content_function
tags:
  - CSS
  - CSS 関数
  - CSS グリッド
  - 関数
  - レイアウト
  - リファレンス
  - ウェブ
translation_of: Web/CSS/fit-content()
original_slug: Web/CSS/fit-content()
---
{{CSSRef}}

**`fit-content()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、指定された寸法を `min(max-content, max(min-content, 引数))` の式に従って有効な範囲の寸法に収めます。

{{EmbedInteractiveExample("pages/css/function-fit-content.html")}}

この関数は [CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)のプロパティにおいて、トラックの寸法を `max-content` で定義された最大寸法と `auto` で定義された最小寸法との間で、 `auto` と似た方法 (すなわち [`minmax(auto, max-content)`](/ja/docs/Web/CSS/minmax())) で計算しますが、 `auto` の最小値よりも大きい場合は*引数*がトラックの寸法になるという点が異なります。

`max-content` および `auto` キーワードについての詳細は、 {{cssxref("grid-template-columns")}} ページを参照してください。

`fit-content()` 関数は {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, {{cssxref("max-height")}} のレイアウトボックスの寸法としても使用され、最大寸法は内容物の最大寸法、最小寸法は内容物の最小寸法になります。

## 構文

引数として `<length>` または `<percentage>` を受け付ける関数です。

```css
/* <length> 値 */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* <percentage> 値 */
fit-content(40%)
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 絶対的な長さ。
- {{cssxref("&lt;percentage&gt;")}}

  - : 指定された軸で有効な空間に対する相対的なパーセント値です。

    グリッドプロパティでは、行トラックにおける列内のグリッドコンテナーのインライン方向の寸法およびグリッドコンテナーのブロック方向の寸法の相対値です。それ以外では、書字方向に応じてレイアウトボックスの有効なインライン方向の寸法またはブロック方向の寸法に対する相対値になります。

## 例

<h3 id="Sizing_grid_columns_with_fit-content">グリッドカラムの大きさを fit-content で指定</h3>

#### HTML

```html
<div id="container">
  Item as wide as the content.
  <div>
    Item with more text in it. Because the contents of it are
    wider than the maximum width, it is clamped at 300 pixels.
  </div>
  Flexible item
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample("Sizing_grid_columns_with_fit-content", "100%", 200)}}

## 仕様書
| 仕様書                                                                                                            | 状態                           | 備考                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS3 Sizing", "#valdef-width-fit-content-length-percentage", "fit-content()")}} | {{Spec2("CSS3 Sizing")}} | {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, {{cssxref("max-height")}} のレイアウトボックスの寸法としての関数を定義。 |
| {{SpecName("CSS Grid", "#valdef-grid-template-columns-fit-content", "fit-content()")}}     | {{Spec2("CSS Grid")}}     | トラックの寸法として使用される際の関数を定義。                                                                                                                                                                                                      |

## ブラウザーの互換性

### width (および他の大きさのプロパティ) での対応

{{Compat("css.properties.width.fit-content_function")}}

### グリッドレイアウトでの対応

{{Compat("css.properties.grid-template-columns.fit-content")}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- 関連する CSS グリッドプロパティ: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- グリッドレイアウトガイド: _[Line-based placement with CSS Grid](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- グリッドレイアウトガイド: _[Grid template areas - Grid definition shorthands](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#grid_definition_shorthands)_
