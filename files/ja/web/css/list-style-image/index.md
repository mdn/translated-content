---
title: list-style-image
slug: Web/CSS/list-style-image
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`list-style-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、リストアイテムのマーカーとして使われる画像を設定します。

ふつうは一括指定の {{ cssxref("list-style") }} を使ったほうが便利です。

{{EmbedInteractiveExample("pages/css/list-style-image.html")}}

> [!NOTE]
> このプロパティはリストアイテム、つまり、`{{cssxref("display")}}: list-item;` が指定された要素に対して適用されます。[既定では](https://html.spec.whatwg.org/multipage/rendering.html#lists)、 {{HTMLElement("li")}} 要素を含みます。このプロパティは継承されるので、親要素 (通常は {{HTMLElement("ol")}} や {{HTMLElement("ul")}}) に設定することで、すべてのリストアイテムに適用することができます。

## 構文

```css
/* キーワード値 */
list-style-image: none;

/* <url>  値 */
list-style-image: url("star-solid.gif");

/* 有効な画像値 */
list-style-image: linear-gradient(to left bottom, red, blue);

/* グローバル値 */
list-style-image: inherit;
list-style-image: initial;
list-style-image: revert;
list-style-image: revert-layer;
list-style-image: unset;
```

### 値

- {{cssxref("&lt;image&gt;")}}
  - : マーカーとして使う画像の場所です。
- `none`
  - : 画像をマーカーとして使用しないことを指定します。この値が設定された場合、代わりに {{ Cssxref("list-style-type") }} で定義されたマーカーが使われます。これは、 {{cssxref("list-style")}} の既定値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### url 値の使用

この例ではマーカーとして星印を使用しており、これは {{cssxref("url_value", "&lt;url&gt;")}} 画像関数を使用して入れたものです。

#### HTML

```html
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
</ul>
```

#### CSS

```css
ul {
  list-style-image: url("star-solid.gif");
}
```

#### 結果

{{ EmbedLiveSample('Using_a_url_value') }}

### グラデーションの使用

この例では [CSS グラデーション](/ja/docs/Web/CSS/CSS_images/Using_CSS_gradients)をマーカーとして使用しており、 {{cssxref("gradient/linear-gradient", "linear-gradient()")}} 画像関数を用いて作成しています。

#### HTML

```html
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
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

- {{Cssxref("list-style")}} 一括指定プロパティ
- {{Cssxref("list-style-type")}} プロパティ
- {{Cssxref("list-style-position")}} プロパティ
- {{cssxref("::marker")}} 擬似要素
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール
