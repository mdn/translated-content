---
title: offset-distance
slug: Web/CSS/offset-distance
tags:
  - CSS
  - CSS モーションパス
  - CSS プロパティ
  - 実験的
  - モーションパス
  - リファレンス
  - motion-offset
  - offset-distance
  - recipe:css-property
browser-compat: css.properties.offset-distance
translation_of: Web/CSS/offset-distance
---
{{CSSRef}}

**`offset-distance`** は CSS プロパティで、 {{CSSxRef("offset-path")}} 上の要素を配置する位置を指定します。

{{EmbedInteractiveExample("pages/css/offset-distance.html")}}

## 構文

```css
/* 既定値 */
offset-distance: 0;

/* offset-path の途中 */
offset-distance: 50%;

/* パス上の固定距離の位置 */
offset-distance: 40px;

/* グローバル値 */
offset-distance: inherit;
offset-distance: initial;
offset-distance: revert;
offset-distance: unset;
```

- `{{cssxref('&lt;length-percentage&gt;')}}`

  - : 要素が ({{cssxref('offset-path')}} で定義された) パス上のどのくらいの距離にあるかを指定する長さです。

    100% はパスの全長を表します。 (`offset-path` が基本シェイプまたは `path()` として定義されている場合)。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーション内での offset-distance の使用

CSS モーションパスのモーションアスペクトは、一般に `offset-distance` プロパティのアニメーションから来ています。要素をパス全体の上でアニメーションさせたい場合は、その {{cssxref('offset-path')}} を定義し、 `offset-distance` に `0%` から `100%` までを取るアニメーションを設定してください。

#### HTML

```html
<div id="motion-demo"></div>
```

#### CSS

```css
#motion-demo {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{EmbedLiveSample('Using_offset-distance_in_an_animation', '100%', 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
