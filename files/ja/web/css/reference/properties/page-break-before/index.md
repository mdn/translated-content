---
title: CSS `page-break-before` プロパティ
short-title: page-break-before
slug: Web/CSS/Reference/Properties/page-break-before
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{deprecated_header}}

> [!WARNING]
> このプロパティは {{cssxref("break-before")}} プロパティによって置き換えられました。

**`page-break-before`** は [CSS](/ja/docs/Web/CSS) のプロパティで、現在の要素の*前*で改ページが行われるように調整します。

{{InteractiveExample("CSS デモ: page-break-before")}}

```css interactive-example-choice
page-break-before: auto;
```

```css interactive-example-choice
page-break-before: always;
```

```html-nolint interactive-example
<div>
  <p>
    このプロパティの効果は、ドキュメントを印刷する際や、印刷プレビューを表示させた際に確認できます。
  </p>
  <button id="print-btn">印刷プレビューを表示</button>
  <div class="box-container">
    <div class="box">このプロパティの前のコンテンツ</div>
    <div class="box" id="example-element">'page-break-before' の付いたコンテンツ</div>
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
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* グローバル値 */
page-break-before: inherit;
page-break-before: initial;
page-break-before: revert;
page-break-before: revert-layer;
page-break-before: unset;
```

このプロパティは、ボックスを生成するブロックレベル要素に適用されます。ボックスを生成しない空の {{HTMLElement("div")}} には適用されません。

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `always`
  - : この要素の前で必ず改ページが行われるように強制します。
- `avoid`
  - : この要素の前で改ページされないようにします。
- `left`
  - : この要素の前で強制的に改ページを行い、次のページが左ページとして配置されるようにします。これは、本の背表紙の左側、または両面印刷の場合にページの裏側に配置されるページのことです。
- `right`
  - : この要素の前で強制的に改ページを行い、次のページが右ページとして配置されるようにします。これは、本の背表紙の右側、または両面印刷の場合にページの表側に配置されるページのことです。
- `recto`
  - : 左から右に進むページにおいて `right` と同じ動作をします。右から左に進むページであれば `left` と同じ働きをします。
- `verso`
  - : 左から右に進むページにおいて `left` と同じ動作をします。右から左に進むページであれば `right` と同じ働きをします。

## 改ページの別名

`page-break-before` プロパティは古いプロパティとなり、 {{cssxref("break-before")}} によって置き換えられました。

互換性のため、 `page-break-before` はブラウザーでは `break-before` の別名として扱われます。これにより、 `page-break-before` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ある要素の前で改ページを防ぐ

```css
/* div の前で改ページされないようにします */
div.note {
  page-break-before: avoid;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
