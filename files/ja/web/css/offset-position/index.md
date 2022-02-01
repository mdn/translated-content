---
title: offset-position
slug: Web/CSS/offset-position
tags:
  - CSS
  - CSS モーションパス
  - CSS プロパティ
  - 実験的
  - プロパティ
  - offset-position
  - recipe:css-property
browser-compat: css.properties.offset-position
translation_of: Web/CSS/offset-position
---
{{CSSRef}}{{SeeCompatTable}}

**`offset-position`** は CSS のプロパティで、 {{cssxref("offset-path")}} の[初期位置](https://www.w3.org/TR/motion-1/#valdef-offsetpath-initial-position)を定義します。

## 構文

```css
/* キーワード値 */
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* <percentage> 値 */
offset-position: 25% 75%;

/* <length> 値 */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* 辺とオフセット値 */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* グローバル値 */
offset-position: inherit;
offset-position: initial;
offset-position: revert;
offset-position: unset;
```

### 値

- `auto`
  - : 初期位置は {{cssxref("position")}} プロパティで指定されたボックスの位置です。
- `<position>`
  - : {{cssxref("&lt;position&gt;")}} です。位置は x/y 座標を定義し、要素のボックスの辺から相対的にアイテムを配置します。 1 つから 4 つの値を使って定義することができます。キーワード以外の値を 2 つ指定した場合、 1 つ目の値は水平方向の位置を、 2 つ目の値は垂直方向の位置を表します。 1 つの値のみを指定した場合は、 2 番目の値は `center` とみなされます。 3 つまたは 4 つの値が使用される場合、長さとパーセントの値は、前のキーワード値からのオフセットとなります。これらの値タイプの詳細については、 {{cssxref("background-position")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 初期オフセット位置の設定

```html
<div id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  offset-position: left top;
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
