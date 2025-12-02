---
title: fit-content()
slug: Web/CSS/Reference/Values/fit-content_function
original_slug: Web/CSS/fit-content_function
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

**`fit-content()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、指定された寸法を `min(最大サイズ, max(最小サイズ, 引数))` の式に従って有効な範囲の寸法に収めます。

{{InteractiveExample("CSS デモ: fit-content()")}}

```css interactive-example-choice
grid-template-columns: fit-content(8ch) fit-content(8ch) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(100px) fit-content(100px) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(40%) fit-content(40%) 1fr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One. This column has more text in it.</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 250px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  text-align: left;
}
```

この関数は [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のプロパティにおいて、トラックの寸法を `max-content` で定義された最大寸法と `auto` で定義された最小寸法との間で、 `auto` と似た方法（すなわち [`minmax(auto, max-content)`](/ja/docs/Web/CSS/Reference/Values/minmax)）で計算しますが、 `auto` の最小値よりも大きい場合は*引数*がトラックの寸法になるという点が異なります。

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

```html-nolint live-sample___sizing_grid_columns_with_fit-content
<div id="container">
  <div>コンテンツの幅のアイテム。</div>
  <div>
    テキストが多いアイテムです。コンテンツが最大幅より広いため、 300 ピクセルで固定されています。
  </div>
  <div>柔軟なアイテム</div>
</div>
```

#### CSS

```css live-sample___sizing_grid_columns_with_fit-content
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

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("min-content")}} キーワード
- {{cssxref("max-content")}} キーワード
- [CSS ボックスサイズ設定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [グリッドテンプレート領域 - グリッド定義の一括指定](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#グリッド定義の一括指定)
