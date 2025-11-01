---
title: page-break-after
slug: Web/CSS/Reference/Properties/page-break-after
original_slug: Web/CSS/page-break-after
---

> [!WARNING]
> このプロパティは {{cssxref("break-after")}} プロパティで置き換えられました。

**`page-break-after`** は CSS のプロパティで、現在の要素の*後で*改ページが行われるように調整します。

```css
/* キーワード値 */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* グローバル値 */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: unset;
```

{{InteractiveExample("CSS デモ: page-break-after")}}

```css interactive-example-choice
page-break-after: auto;
```

```css interactive-example-choice
page-break-after: always;
```

```html interactive-example
<section id="default-example">
  <div>
    <p>
      The effect of this property can be noticed when the document is being
      printed or a preview of a print is displayed.
    </p>
    <button id="print-btn">Show Print Preview</button>
    <div class="box-container">
      <div class="box">Content before the property</div>
      <div class="box" id="example-element">
        Content with 'page-break-after'
      </div>
      <div class="box">Content after the property</div>
    </div>
  </div>
</section>
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

.hide-element {
  display: none;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");
const editorContainer = document.getElementsByClassName(
  "css-editor-container",
)[0];
const exampleHTMLElement = document.getElementById("default-example");

const printableSection = document.createElement("div");
printableSection.setAttribute("id", "printable-section");
printableSection.classList.add("hide-element");
document.body.appendChild(printableSection);

btn.addEventListener("click", () => {
  const exampleContent = exampleHTMLElement.innerHTML;

  editorContainer.classList.add("hide-element");
  printableSection.innerHTML = exampleContent;
  printableSection.classList.remove("hide-element");

  window.print();

  printableSection.classList.add("hide-element");
  printableSection.innerHTML = "";
  editorContainer.classList.remove("hide-element");
});
```

このプロパティは、ボックスを生成するブロックレベル要素に適用されます。ボックスを生成しない空の {{HTMLElement("div")}} には適用されません。

## 構文

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `always`
  - : 要素の後で必ず改ページが行われるように強制します。
- `avoid`
  - : 要素の後で改ページされないようにします。
- `left`
  - : 要素の後における改ページを強制し、次のページが左ページとして整形されるようにします。
- `right`
  - : 要素の後における改ページを強制し、次のページが右ページとして整形されるようにします。
- `recto` {{experimental_inline}}
  - : 左から右に進むページにおいて `right` と同じ動作をします。右から左に進むページであれば `left` と同じ働きをします。
- `verso` {{experimental_inline}}
  - : 左から右に進むページにおいて `left` と同じ動作をします。右から左に進むページであれば `right` と同じ働きをします。

## 改ページの別名

`page-break-after` プロパティは古いプロパティとなり、 {{cssxref("break-after")}} で置き換えられました。

互換性のため、 `page-break-after` はブラウザーでは `break-after` の別名として扱われます。これにより、 `page-break-after` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 脚注の後にページ区切りを設定

```css
/* 脚注の後で新しいページに移ります */
div.footnotes {
  page-break-after: always;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-before")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
