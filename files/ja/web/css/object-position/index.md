---
title: object-position
slug: Web/CSS/object-position
tags:
  - CSS
  - CSS 画像
  - CSS プロパティ
  - レイアウト
  - 位置
  - Reference
  - 置換要素
  - css レイアウト
  - object-position
  - recipe:css-property
browser-compat: css.properties.object-position
translation_of: Web/CSS/object-position
---
{{CSSRef}}

**`object-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックス内における[置換要素](/ja/docs/Web/CSS/Replaced_element)の中身の配置を指定します。ボックスの領域内で置換要素のオブジェクトに覆われていない部分は、要素の背景が表示されます。

置換要素の本来のサイズ (すなわち、自然なサイズ) を、その要素のボックス内に合わせる方法を調整するには、{{cssxref("object-fit")}} プロパティを使用することができます。

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## 構文

```css
/* <position> 値 */
object-position: center top;
object-position: 100px 50px;

/* グローバル値 */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: unset;
```

### 値

- {{cssxref("&lt;position&gt;")}}
  - : 要素のボックスの端に対する 2D 上の位置を表す、1 個から 4 個の値です。相対値または絶対値のオフセットを指定できます。

> **Note:** 置換要素がボックス外にはみ出る位置も指定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Positioning_image_content">画像の内容の配置を設定</h3>

#### HTML

それぞれ MDN のロゴを表示する 2 つの {{HTMLElement("img")}} 要素があります。

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo"/>
<img id="object-position-2" src="mdn.svg" alt="MDN Logo"/>
```

#### CSS

この CSS には、`<img>` 要素自体の既定のスタイルと、2 つの画像それぞれに個別のスタイルが含まれています。

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

1 枚目の画像は、その左端が要素のボックスの左端から 10 ピクセルはみ出して配置されています。2 番目の画像は、その右端が要素のボックスの右端と同じ位置にあり、要素のボックスの高さの 10% の位置にあります。

#### 結果

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の画像関連 CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}
