---
title: "Element: querySelector() メソッド"
short-title: querySelector()
slug: Web/API/Element/querySelector
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}

**`querySelector()`** は {{domxref("Element")}} インターフェイスのメソッドで、呼び出された要素の子孫要素の中で、指定されたセレクター群に一致する最初の要素を返します。

## 構文

```js-nolint
querySelector(selectors)
```

### 引数

- `selectors`
  - : 照合する 1 つ以上のセレクターの入った文字列です。この文字列は、有効な CSS セレクターの文字列でなければなりません。そうでない場合は `SyntaxError` 例外が発生します。

    HTML 仕様では、属性値が有効な CSS 識別子であることを求めていないことに注意してください。 [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) または [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の値が有効な CSS 識別子でない場合は、セレクターで使用する前に、値に対して {{domxref("CSS.escape_static", "CSS.escape()")}} で呼び出してエスケープするか、または「[文字エスケープ](/ja/docs/Web/CSS/Reference/Values/ident#文字のエスケープ)」で記述されているテクニックのいずれかを使用してエスケープする必要があります。例えば、「[属性値のエスケープ](#属性値のエスケープ)」を参照してください。

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
document.getElementById("output").textContent =
  baseElement.querySelector("div span").textContent;
```

#### 結果

結果は次のようになります。

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

`"div span"` セレクターは、 `baseElement` の子ノードが {{HTMLElement("div")}} 要素を含んでいなくても、 {{HTMLElement("span")}} 要素に一致することに注目してください（これはまだ指定したセレクターに含まれています）。

### 属性値のエスケープ

例えば、 HTML 文書の中の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) が有効な [CSS 識別子](/ja/docs/Web/CSS/Reference/Values/ident)ではないものが含まれている場合、 `querySelector()` で使用する前に属性値をエスケープする必要があります。

#### HTML

以下のコードは、 {{htmlelement("div")}} 要素には `id` として `"this?element"` が設定されており、これは有効な CSS 識別子ではありません。 `"?"` 文字が CSS 識別子に許可されていないためです。

ここには 3 つのボタンがあり、エラーを出力するために {{htmlelement("pre")}} 要素があります。

```html
<div id="container">
  <div id="this?element"></div>
</div>

<button id="no-escape">エスケープなし</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">手動エスケープ</button>

<pre id="log"></pre>
```

#### CSS

```css
div {
  background-color: blue;
  margin: 1rem 0;
  height: 100px;
  width: 200px;
}
```

#### JavaScript

3 つのボタンはどれも、クリックすると、 `<div>` を選択して、その背景色をランダムな値に設定しようとします。

- 最初のボタンは `"this?element"` の値を直接使用しています。
- 2 つ目のボタンは {{domxref("CSS.escape_static", "CSS.escape()")}} で値をエスケープします。
- 3 つ目のボタンはバックスラッシュを用いて、明示的に `"?"` 文字をエスケープしています。なお、もう一つのバックスラッシュを用いて、 `"\\?"` のようにバックスラッシュ自体をエスケープする必要があります。

```js
const container = document.querySelector("#container");
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = container.querySelector(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});
```

#### 結果

最初のボタンをクリックするとエラーが返されますが、 2 つ目と 3 つ目のボタンは正規に動作します。

{{embedlivesample("escaping_attribute_values", "", 200)}}

### それ以外の例

`selectors` の適切な書式について、その他の例は {{domxref("Document.querySelector()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- CSS ガイドの[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- MDN 学習領域の[属性セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} および
  {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} および
  {{domxref("DocumentFragment.querySelectorAll()")}}
- セレクターを取る他のメソッド: {{domxref("element.closest()")}} および
  {{domxref("element.matches()")}}.
