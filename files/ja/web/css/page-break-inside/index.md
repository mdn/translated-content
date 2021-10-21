---
title: page-break-inside
slug: Web/CSS/page-break-inside
tags:
  - CSS
  - CSS プロパティ
  - 改ページ
  - Reference
  - recipe:css-property
browser-compat: css.properties.page-break-inside
translation_of: Web/CSS/page-break-inside
---
{{CSSRef}}

> **Warning:** このプロパティは {{cssxref("break-inside")}} プロパティによって置き換えられました。

CSS の **`page-break-inside`** プロパティは、現在の要素の*内側の* 改ページを調整します。

```css
/* キーワード値 */
page-break-inside: auto;
page-break-inside: avoid;

/* グローバル値 */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: revert;
page-break-inside: unset;
```

## 構文

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `avoid`
  - : 要素の内側で改ページされないようにします。

## 改ページの別名

`page-break-inside` プロパティは古いプロパティとなり、 {{cssxref("break-inside")}} によって置き換えられました。

互換性のため、 `page-break-inside` はブラウザーから `break-inside` の別名として扱われます。これにより、 `page-break-inside` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Avoiding_page_breaks_inside_elements">要素の途中の改ページを防ぐ</h3>

#### HTML

```html
<div class="page">
  <p>これは最初の段落です。</p>
  <section class="list">
    <span>リスト</span>
    <ol>
      <li>one</li>
<!--       <li>two</li> -->
    </ol>
  </section>
  <ul>
    <li>one</li>
<!--     <li>two</li> -->
  </ul>
  <p>Tこれは第二段落です。</p>
  <p>これは第三段落です。文章の量が多くなっています。</p>
  <p>これは第四段落です。第三段落よりも、さらにもう少しだけ、文章の量が多くなっています。</p>
</div>
```

#### CSS

```css
.page {
  background-color: #8cffa0;
  height: 90px;
  width: 200px;
  columns: 1;
  column-width: 100px;
}

.list, ol, ul, p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol, ul, .list {
  margin: 0.5em 0;
  display: block;
  background-color: orange;
}

p:first-child {
  margin-top: 0;
}
```

#### 結果

{{EmbedLiveSample("Avoiding_page_breaks_inside_elements", 400, 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-before")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
