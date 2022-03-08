---
title: offset-rotate
slug: Web/CSS/offset-rotate
tags:
  - CSS
  - CSS モーションパス
  - CSS プロパティ
  - 実験的
  - リファレンス
  - offset-rotate
  - recipe:css-property
browser-compat: css.properties.offset-rotate
translation_of: Web/CSS/offset-rotate
---
{{CSSRef}}

**`offset-rotate`** は CSS のプロパティで、要素が {{cssxref("offset-path")}} に沿って配置された場合の向き/方向を定義します。

{{EmbedInteractiveExample("pages/css/offset-rotate.html")}}

> **Note:** 初期のころの仕様書では、このプロパティを `motion-rotation` と呼んでいました。

## 構文

```css
/* パスの方向に従い、任意で角度を追加 */
offset-rotate: auto;
offset-rotate: auto 45deg;

/* パスの方向に従うが、 auto とは逆の方向を向く */
offset-rotate: reverse;

/* パスの位置に関係なく、決められた回転を維持する */
offset-rotate: 90deg;
offset-rotate: .5turn;

/* グローバル値 */
offset-rotate: inherit;
offset-rotate: initial;
offset-rotate: revert;
offset-rotate: unset;
```

- `auto`
  - : 要素は正方向の X 軸から見た {{cssxref("offset-path")}} 方向の角度で回転します。これが既定値です。
- `{{cssxref("&lt;angle&gt;")}}`
  - : 要素は指定された回転角によって、時計方向に固定値で回転変換されます。
- `auto <angle>`
  - : `auto` に {{cssxref("&lt;angle&gt;")}} が続いた場合、その角度が `auto` の計算値に加算されます。
- `reverse`
  - : 要素は `auto` と同様に回転しますが、反対方向を向きます。 `auto 180deg` の値を指定したのと同等です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### オフセットパスに沿って要素の方向を設定

#### HTML

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

```css
div {
  width: 40px;
  height: 40px;
  background: #2BC4A2;
  margin: 20px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;

  offset-path: path('M20,20 C20,50 180,-10 180,20');
}
div:nth-child(1) {
  offset-rotate: auto;
}
div:nth-child(2) {
  offset-rotate: auto 90deg;
}
div:nth-child(3) {
  offset-rotate: 30deg;
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{EmbedLiveSample('Setting_element_orientation_along_its_offset_path', '100%', '200')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
