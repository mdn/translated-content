---
title: "Element: querySelector() メソッド"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`querySelector()`** は {{domxref("Element")}} インターフェイスのメソッドで、呼び出された要素の子孫要素の中で、指定されたセレクター群に一致する最初の要素を返します。

## 構文

```js-nolint
querySelector(selectors)
```

### 引数

- `selectors`
  - : その要素 ({{domxref("Element")}}) の子孫要素と照合する[セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)群です。これは有効な CSS 構文でなければならず、そうでない場合は `SyntaxError` 例外が発生します。このセレクター群に一致する最初の要素が返されます。

### 返値

`baseElement` の子孫要素のうち、 `selectors` で指定されたセレクター群に一致するものを返します。照合の際には、 `baseElement` とその子孫を含む要素群の外にあるものも含めて、要素の階層全体を考慮します。言い換えると、 `selectors` はまず `baseElement` ではなく、文書全体に適用され、候補となる要素の初期リストが生成されます。その結果得られた要素が、 `baseElement` の子孫であるかどうかが調べられます。それらの残りの要素のうち、最初に一致したものが `querySelector()` メソッドによって返されます。

一致するものが見つからなかったら、返値は `null` になります。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された `selectors` が無効であった場合に発生します。

## 例

いくつかの例を検討してみましょう。

### 属性に特定の値を持つ特定の要素を探す

この最初の例では、 HTML 文書の本文内で type 属性がないか、 type 属性が "text/css" である要素のうち最初のものを返します。

```js
const el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### :scope 擬似クラスを使用して直接の子を取得

この例では {{cssxref(":scope")}} 擬似クラスを使用して、 `parentElement` 要素の直接の子を取得します。

#### HTML

```html
<div>
  <h6>ページタイトル</h6>
  <div id="parent">
    <span>愛は情け深い。</span>
    <span>
      <span>愛は忍耐強い。</span>
    </span>
    <span>
      <span>愛は見返りを求めない。</span>
    </span>
  </div>
</div>
```

#### CSS

```css
span {
  display: block;
  margin-bottom: 5px;
}
.red span {
  background-color: red;
  padding: 5px;
}
```

#### JavaScript

```js
const parentElement = document.querySelector("#parent");
let allChildren = parentElement.querySelectorAll(":scope > span");
allChildren.forEach((item) => item.classList.add("red"));
```

#### 結果

{{ EmbedLiveSample('Get_direct_descendants_using_the_scope_pseudo-class', 600, 160) }}

### 全体の階層数

この例では、 `selectors` を適用する際に、文書全体の階層を考慮することを示しています。そのため、位置を照合する際には、指定した `baseElement` 以外のレベルも考慮されることになります。

#### HTML

```html
<div>
  <h5>オリジナルコンテンツ</h5>
  <p>
    内部の段落
    <span>内部の span</span>
    内部の段落
  </p>
</div>
<div>
  <h5>出力</h5>
  <div id="output"></div>
</div>
```

#### JavaScript

```js
const baseElement = document.querySelector("p");
document.getElementById("output").innerHTML =
  baseElement.querySelector("div span").innerHTML;
```

#### 結果

結果は次のようになります。

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

`"div span"` セレクターは、 `baseElement` の子ノードが {{HTMLElement("div")}} 要素を含んでいなくても、 {{HTMLElement("span")}} 要素に一致することに注目してください（これはまだ指定したセレクターに含まれています）。

### それ以外の例

`selectors` の適切な書式について、その他の例は {{domxref("Document.querySelector()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- CSS ガイドの[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)
- MDN 学習領域の[属性セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} および
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} および
  {{domxref("DocumentFragment.querySelectorAll()")}}
- セレクターを取る他のメソッド: {{domxref("element.closest()")}} および
  {{domxref("element.matches()")}}.
