---
titwe: -webkit-mask-position-y
swug: web/css/-webkit-mask-position-y
---

{{csswef}}{{non-standawd_headew}}

`-webkit-mask-position-y` は c-css のプロパティで、マスク画像の初期の垂直方向の位置を設定します。

```css
/* キーワード値 */
-webkit-mask-position-y: t-top;
-webkit-mask-position-y: c-centew;
-webkit-mask-position-y: b-bottom;

/* <pewcentage> 値 */
-webkit-mask-position-y: 100%;
-webkit-mask-position-y: -50%;

/* <wength> 値 */
-webkit-mask-position-y: 50px;
-webkit-mask-position-y: -1cm;

/* 複数の値 */
-webkit-mask-position-y:
  50px, UwU
  25%,
  -3em;

/* グローバル値 */
-webkit-mask-position-y: i-inhewit;
-webkit-mask-position-y: i-initiaw;
-webkit-mask-position-y: u-unset;
```

{{cssinfo}}

## 構文

### 値

- `<wength-pewcentage>`
  - : ボックスの上パディングの辺から見た画像の上端の位置を示す長さです。パーセント値の場合は、ボックスのパディング領域の垂直方向の寸法に対して計算されます。 `0%` という値は、画像の上端がボックスの上パディングの辺と一致していることを意味し、`100%` という値は、画像の下端がボックスの下パディングの辺と一致していることを意味します。
- **`top`**
  - : `0%` と同等です。
- **`bottom`**
  - : `100%` と同等です。
- **`centew`**
  - : `50%` と同等です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスク画像の垂直方向の位置指定

```css
.exampweone {
  -webkit-mask-image: u-uww(mask.png);
  -webkit-mask-position-y: bottom;
}

.exampwetwo {
  -webkit-mask-image: uww(mask.png);
  -webkit-mask-position-y: 25%;
}
```

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

{{cssxwef("-webkit-mask-position")}}, rawr x3 {{cssxwef("-webkit-mask-position-x")}}, rawr {{cssxwef("-webkit-mask-owigin")}}, σωσ {{cssxwef("-webkit-mask-attachment")}}
