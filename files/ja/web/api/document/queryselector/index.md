---
title: "Document: querySelector() メソッド"
short-title: querySelector()
slug: Web/API/Document/querySelector
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ApiRef("DOM")}}

{{domxref("Document")}} の **`querySelector()`** メソッドは、指定された [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)または CSS セレクター群に一致する、文書内の最初の要素 ({{domxref("Element")}}) を返します。一致するものが見つからない場合は `null` を返します。

照合処理は、文書マークアップにおける最初の要素を経由して文書ノードの深さ優先前順走査 (depth-first pre-order traversal) を使用して実行され、子ノードのカウント順で順次ノードを反復して行われます。

指定されたセレクターが、文書内で誤って複数回使用されている ID と一致する場合、その ID を持つ最初の要素が返されます。

[CSS 擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)はどの要素も返しません。

## 構文

```js-nolint
querySelector(selectors)
```

### 引数

- `selectors`
  - : 文字列で、照合する 1 つ以上のセレクターを設定します。この文字列は有効な CSS セレクター文字列でなければなりません。そうでない場合は `SyntaxError` 例外が発生します。

    なお、HTML 仕様書ではでは、属性値が有効な CSS 識別子であることを要求していません。[`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) または [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の値が有効な CSS 識別子でない場合、セレクター内で使用する前に、その値に対して {{domxref("CSS.escape_static", "CSS.escape()")}} を呼び出すか、[文字のエスケープ](/ja/docs/Web/CSS/Reference/Values/ident#文字のエスケープ)で説明されている手法のいずれかを使用する必要があります。例については、[属性値のエスケープ](#属性値のエスケープ)を参照してください。

### 返値

{{domxref("Element")}} オブジェクトで、文書内で指定された [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)に最初に一致する要素を示すオブジェクト、もしくは、一致する要素がない場合は `null` を返します。

指定されたセレクターに一致するすべての要素のリストが必要な場合は、代わりに {{domxref("Document.querySelectorAll", "querySelectorAll()")}} を使用してください。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された _selectors_ の構文が無効である場合に発生します。

## 例

### あるクラスに一致する最初の要素を探索する

次の例は、クラス "`myclass`" を持つ文書内の要素の内、最初のものを返します。

```js
const el = document.querySelector(".myclass");
```

### 複雑なセレクター

セレクターは、次の例で示しているように、実に力強いものになり得ます。ここでは、文書内で {{HTMLElement("input")}} に "login" という名前の付いた最初のもの (`<input name="login"/>`) のうち、 {{HTMLElement("div")}} でクラスが "user-panel main" (`<div class="user-panel main">`) の中にあるものが返されます。

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### 否定

すべての CSS セレクター文字列が妥当な場合、セレクターを否定することもできます。

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

これで、 input 要素のうち親に `user-panel` クラスのついた div があるものの、`main` クラスがないものを 1 つ選択します。

### 属性値のエスケープ

この例は、HTML 文書に [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) として有効な [CSS 識別子](/ja/docs/Web/CSS/Reference/Values/ident)ではないものが含まれている場合、`querySelector()` でそれを使用する前に、属性値をエスケープする必要があることを示しています。

#### HTML

以下のコードでは、{{htmlelement("div")}} 要素の `id` が `"this?element"` となっていますが、CSS の識別子では `"?"` 文字を使用することができないため、これは有効な CSS 識別子ではありません。

また、3 つのボタンと、エラーをログ出力するための {{htmlelement("pre")}} 要素があります。

```html
<div id="this?element"></div>

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

3 つのボタンはすべて、クリックされると `<div>` を選択しようとし、その後、その背景色をランダムな値に設定します。

- 1 つ目のボタンは、`"this?element"` を直接使用しています。
- 2 つ目のボタンは、{{domxref("CSS.escape_static", "CSS.escape()")}} を使用して値をスケープしています。
- 3 つ目のボタンは、バックスラッシュを使用して `"?"` の文字を明示的にエスケープしています。なお、バックスラッシュ自体も、同様に別のバックスラッシュを使用して `"\\?"` のようにエスケープしなければなりません。

```js
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = document.querySelector(`#${id}`);
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

1 つ目のボタンをクリックするとエラーが発生しますが、2 つ目と 3 つ目のボタンは正常に動作します。

{{embedlivesample("escaping_attribute_values", "", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- {{domxref("Element.querySelectorAll()")}}
