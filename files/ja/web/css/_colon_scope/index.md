---
title: :scope
slug: Web/CSS/:scope
l10n:
  sourceCommit: 88930816e169c5b51afdfcd22c3b2c54383a22b7
---

{{CSSRef}}

**`:scope`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、セレクターが選択する対象の参照点である要素を表します。

```css
/* スコープとなる要素を選択 */
:scope {
  background-color: lime;
}
```

どの要素が `:scope` に一致するかは、それが使用されるコンテキストによって変わります。

- スタイルシートのルートレベルで使用する場合、 `:scope` は {{cssxref(":root")}} と等価であり、通常の HTML 文書内の {{htmlelement("html")}} 要素に一致します。
- {{cssxref("@scope")}} ブロックの中で使用した場合、 `:scope` はブロックの定義するスコープのルートに一致します。これは `@scope` ブロック自身からスコープのルートにスタイル設定を適用する方法を提供します。
- DOM API 呼び出し（{{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}}, {{domxref("Element.closest()")}} など）で使用した場合、 `:scope` はメソッドを呼び出した要素を選択します。

## 構文

```css
:scope {
  /* ... */
}
```

## 例

### `:scope` を `:root` で代用

この例では、スタイルシートのルートレベルで使用した場合、 `:scope` が `:root` と等価であることを示しています。この場合、指定された CSS は `<html>` 要素の背景をオレンジ色に着色しています。

#### HTML

```html
<html></html>
```

#### CSS

```css
:scope {
  background-color: orange;
}
```

#### 結果

{{ EmbedLiveSample("Using :scope as an alternative to :root", "100%", 50) }}

### `:scope` を使用して `@scope` ブロック内のスコープルートにスタイル設定

この例では、 2 つの別個の `@scope` ブロックを使用して、それぞれ `.light-scheme` と `.dark-scheme` クラスを持つ要素内のリンクと照合しています。また、 `:scope` がスコープルート自体を選択し、スタイル設定を提供するために使用されていることに注意してください。この例では、スコープルートは {{htmlelement("div")}} 要素であり、それらにクラスが適用されています。

#### HTML

```html-nolint
<div class="light-scheme">
  <p>
    MDN には、
    <a href="/ja/docs/Web/HTML">HTML</a>, <a href="/ja/docs/Web/CSS">CSS</a>,
    <a href="/ja/docs/Web/JavaScript">JavaScript</a>
    に関するたくさんの情報が含まれています。
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN には、
    <a href="/ja/docs/Web/HTML">HTML</a>, <a href="/ja/docs/Web/CSS">CSS</a>,
    <a href="/ja/docs/Web/JavaScript">JavaScript</a>
    に関するたくさんの情報が含まれています。
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### 結果

{{ EmbedLiveSample("Using :scope to style the scope root in a @scope block", "100%", 150) }}

### JavaScript における `:scope` の使用

`:scope` 擬似クラスが有用だと示されるのは、すでに受け取っている {{domxref("Element")}} の直接の子を取得する必要がある場合です。

#### HTML

```html
<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
  </div>
</div>
<p>
  選択された要素の ID:
  <span id="results"></span>
</p>
```

#### JavaScript

```js
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join(", ");
```

#### 結果

`context` のスコープは [`id`](/ja/docs/Web/HTML/Global_attributes#id) が `context` である要素です。選択される要素は、そのコンテキストの直接の子である `<div>` 要素、すなわち `element-1` と `element-2` です。

{{ EmbedLiveSample('Using :scope in JavaScript') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@scope")}} [アットルール](/ja/docs/Web/CSS/At-rule)
- {{cssxref(":root")}} [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)
- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}} および {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}
