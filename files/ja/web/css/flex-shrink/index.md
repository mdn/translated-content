---
title: flex-shrink
slug: Web/CSS/flex-shrink
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

**`flex-shrink`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスアイテムの縮小係数を設定します。すべてのフレックスアイテムの寸法がフレックスコンテナーよりも大きい場合、アイテムは `flex-shrink` の数値に従って縮小して収まります。

使用時は `flex-shrink` は {{cssxref("flex-grow")}} や {{cssxref("flex-basis")}} などの他のフレックスプロパティと共に使用され、ふつうは {{cssxref("flex")}} の一括指定を使用して定義されます。

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

`flex-shrink` プロパティは単一の `<number>` で指定します。

### 値

- `<number>`
  - : {{cssxref("&lt;number&gt;")}} を参照してください。負の値は無効です。既定値は 1 です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの縮小係数の設定

#### HTML

```html-nolint
<p>全体の幅は 500px で、フレックスアイテムの flex-basis は 120px です。</p>
<p>A、B、C には flex-shrink:1 が、D と E には flex-shrink:2 が設定されています。</p>
<p>D と E の幅は他より狭くなります。</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```

#### 結果

{{EmbedLiveSample('フレックスアイテムの縮小係数の設定', 500, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS フレックスボックスガイド: _[主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
