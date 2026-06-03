---
title: "Document: querySelectorAll() メソッド"
short-title: querySelectorAll()
slug: Web/API/Document/querySelectorAll
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("DOM")}}

{{domxref("Document")}} の **`querySelectorAll()`** メソッドは、指定された CSS セレクターに一致する文書中の要素のリストを示す静的な（生きていない）{{domxref("NodeList")}} を返します。

## 構文

```js-nolint
querySelectorAll(selectors)
```

### 引数

- `selectors`
  - : 文字列で、照合する 1 つまたは複数のセレクターを含みます。
    この文字列は有効な CSS セレクターでなければならず、そうでない場合は `SyntaxError` 例外が発生します。

    なお、HTML 仕様書ではでは、属性値が有効な CSS 識別子であることを要求していません。[`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) または [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の値が有効な CSS 識別子でない場合、セレクター内で使用する前に、その値に対して {{domxref("CSS.escape_static", "CSS.escape()")}} を呼び出すか、[文字のエスケープ](/ja/docs/Web/CSS/Reference/Values/ident#文字のエスケープ)で説明されている手法のいずれかを使用する必要があります。例については、[属性値のエスケープ](#属性値のエスケープ)を参照してください。

### 返値

ライブではない {{domxref("NodeList")}} で、指定されたセレクターの少なくとも 1 つに一致する要素ごとに {{domxref("Element")}} を一つずつ含みます。または一致するものがなければ空の {{domxref("NodeList")}} です。要素は文書内の順序で並んでいます。つまり、親要素が子要素より先に、先に定義された兄弟要素が後に定義された兄弟要素より先に配置されます。

> [!NOTE]
> 指定された `selectors` が [CSS 擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を含む場合、返されるリストは常に空になります。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された `selectors` の構文が妥当ではない場合です。

## 例

### 一致するもののリストの入手

文書内のすべての {{HTMLElement("p")}} 要素の {{domxref("NodeList")}} を入手します。

```js
const matches = document.querySelectorAll("p");
```

次の例では、文書内にあるすべての {{HTMLElement("div")}} 要素のうち、 `note` または `alert` のいずれかのクラスを持つものリストを返します。

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

次に、 `<p>` 要素ののうち直近の親要素が `test` という ID を持つコンテナー内に位置し、直接の親要素が `highlighted` クラスを持つ {{HTMLElement("div")}} であるリストを取得します。

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

次の例では[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)を使用しており、 `data-src` という名前の属性を持つ、文書内の {{HTMLElement("iframe")}} 要素のリストを返します。

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

次の例では、ID が `user-list` の要素の中にあり、`data-active` 属性を持ち、その値が `1` であるリスト項目のリストを返すため、属性セレクターが使用されています。

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### 一致したリストへのアクセス

いったん、一致した要素の {{domxref("NodeList")}} が返されると、それをちょうど配列のように見ることができます。配列が空である (`length` プロパティが 0 である) 場合は、一致がなかったということです。

それ以外の場合は、単純に標準の配列表記を使って、リストの内容にアクセスすることができます。次のように、任意の一般的なループ処理を使うことができます。

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

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
    const elements = document.querySelectorAll(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    elements[0].style.backgroundColor = randomColor;
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

- [DOM ツリーの選択と走査](/ja/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)（CSS ガイド）
- [属性セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)（MDN 学習領域）
- {{domxref("Element.querySelector()")}} および {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}
