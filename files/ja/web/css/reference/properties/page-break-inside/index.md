---
title: CSS `page-break-inside` プロパティ
short-title: page-break-inside
slug: Web/CSS/Reference/Properties/page-break-inside
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{deprecated_header}}

> [!WARNING]
> このプロパティは {{cssxref("break-inside")}} プロパティによって置き換えられました。

**`page-break-inside`** は [CSS](/ja/docs/Web/CSS) のプロパティで、現在の要素の*内部*の改ページを調整します。

{{InteractiveExample("CSS デモ: page-break-inside")}}

```css interactive-example-choice
page-break-inside: auto;
```

```css interactive-example-choice
page-break-inside: avoid;
```

```html-nolint interactive-example
<div>
  <p>
    このプロパティの効果は、ドキュメントを印刷する際や、印刷プレビューを表示させた際に確認できます。
  </p>
  <button id="print-btn">印刷プレビューを表示</button>
  <div class="box-container">
    <div class="box">このプロパティの前のコンテンツ</div>
    <div class="box" id="example-element">'page-break-inside' の付いたコンテンツ</div>
    <div class="box">このプロパティの後のコンテンツ</div>
  </div>
</div>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}

@media print {
  #example-element {
    height: 25cm;
  }
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
});
```

## 構文

```css
/* キーワード値 */
page-break-inside: auto;
page-break-inside: avoid;

/* グローバル値 */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: revert;
page-break-inside: revert-layer;
page-break-inside: unset;
```

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます（強制も禁止もしません）。
- `avoid`
  - : 要素の内部で改ページされないようにします。

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

### 要素の途中の改ページを防ぐ

#### HTML

```html
<div class="page">
  <p>これは最初の段落です。</p>
  <section class="list">
    <span>リスト</span>
    <ol>
      <li>one</li>
      <!-- <li>two</li> -->
    </ol>
  </section>
  <ul>
    <li>one</li>
    <!-- <li>two</li> -->
  </ul>
  <p>これは第二段落です。</p>
  <p>これは第三段落です。文章の量が多くなっています。</p>
  <p>
    これは第四段落です。第三段落よりも、さらにもう少しだけ、文章の量が多くなっています。
  </p>
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

.list,
ol,
ul,
p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol,
ul,
.list {
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
