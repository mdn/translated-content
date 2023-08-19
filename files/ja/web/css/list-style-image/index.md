---
title: list-style-image
slug: Web/CSS/list-style-image
---

{{CSSRef}}

**`list-style-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、リスト項目のマーカーとして使われる画像を設定します。

ふつうは一括指定の {{cssxref("list-style")}} を使ったほうが便利です。

{{EmbedInteractiveExample("pages/css/list-style-image.html")}}

> **メモ:** このプロパティはリスト項目、つまり、`{{cssxref("display")}}: list-item;` が指定された要素に対して適用されます。[既定では](https://www.w3.org/TR/html5/rendering.html#lists)、 {{HTMLElement("li")}} 要素を含みます。このプロパティは継承されるので、親要素 (通常は {{HTMLElement("ol")}} や {{HTMLElement("ul")}}) に設定することで、すべてのリスト項目に適用することができます。

## 構文

```css
/* キーワード値 */
list-style-image: none;

/* <url>  値 */
list-style-image: url("starsolid.gif");

/* 有効な画像値 */
list-style-image: linear-gradient(to left bottom, red, blue);

/* グローバル値 */
list-style-image: inherit;
list-style-image: initial;
list-style-image: revert;
list-style-image: unset;
```

### 値

- {{cssxref("&lt;image&gt;")}}
  - : マーカーとして使う画像の場所です。
- `none`
  - : 画像をマーカーとして使用しないことを指定します。この値が設定された場合、代わりに {{ Cssxref("list-style-type") }} で定義されたマーカーが使われます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Using_a_url_value">url 値の使用</h3>

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### CSS

```css
ul {
  list-style-image: url("starsolid.gif");
}
```

#### 結果

{{ EmbedLiveSample('Using_a_url_value') }}

<h3 id="Using_a_gradient">グラデーションの使用</h3>

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### CSS

```css
ul {
  font-size: 200%;
  list-style-image: linear-gradient(to left bottom, red, blue);
}
```

#### 結果

{{ EmbedLiveSample('Using_a_gradient') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-position")}}
- {{cssxref("url()", "url()")}} 関数
