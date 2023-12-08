---
title: fit-content()
slug: Web/CSS/fit-content_function
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

**`fit-content()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、指定された寸法を `min(最小サイズ, max(最小サイズ, 引数))` の式に従って有効な範囲の寸法に収めます。

{{EmbedInteractiveExample("pages/css/function-fit-content.html")}}

この関数は [CSS グリッド](/ja/docs/Web/CSS/CSS_grid_layout)のプロパティにおいて、トラックの寸法を `max-content` で定義された最大寸法と `auto` で定義された最小寸法との間で、 `auto` と似た方法（すなわち [`minmax(auto, max-content)`](/ja/docs/Web/CSS/minmax)）で計算しますが、 `auto` の最小値よりも大きい場合は*引数*がトラックの寸法になるという点が異なります。

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
  - : 絶対的な長さです。
- {{cssxref("&lt;percentage&gt;")}}

  - : 指定された軸で有効な空間に対する相対的なパーセント値です。

    グリッドプロパティでは、行トラックにおける列内のグリッドコンテナーのインライン方向の寸法およびグリッドコンテナーのブロック方向の寸法の相対値です。それ以外では、書字方向に応じてレイアウトボックスの有効なインライン方向の寸法またはブロック方向の寸法に対する相対値になります。

## 例

### グリッドカラムの大きさを fit-content で指定

#### HTML

```html-nolint
<div id="container">
  <div>コンテンツの幅のアイテム。</div>
  <div>
    テキストが多いアイテムです。コンテンツが最大幅より広いため、 300 ピクセルで固定されています。
  </div>
  <div>柔軟なアイテム</div>
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

{{EmbedLiveSample("グリッドカラムの大きさを_fit-content_で指定", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- 関連する CSS グリッドプロパティ: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- グリッドレイアウトガイド: _[Line-based placement with CSS Grid](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- グリッドレイアウトガイド: _[Grid template areas - Grid definition shorthands](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#grid_definition_shorthands)_
