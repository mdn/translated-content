---
title: "Element: querySelectorAll() メソッド"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: dac3299ae197f40fcf3369f6f58d49e00538bb1e
---

{{APIRef("DOM")}}

{{domxref("Element")}} の **`querySelectorAll()`** メソッドは、静的な (ライブではない) {{domxref("NodeList")}} で、メソッド呼び出しの時点でそのオブジェクトの子孫にあたる要素のうち、一連のセレクターに一致するもののリストを返します。

## 構文

```js-nolint
querySelectorAll(selectors)
```

### 引数

- `selectors`

  - : 照合する 1 つまたは複数のセレクターを含む文字列です。この文字列は妥当な [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)でなければならず、そうでない場合は `SyntaxError` 例外が発生します。セレクターの仕様と要素の識別の詳細は、[セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)を参照してください。複数のセレクターを指定する際は、カンマで区切ります。

    なお、セレクターは `querySelectorAll()` が呼ばれた特定の要素だけでなく、文書全体に適用されることに注意してください。セレクターを `querySelectorAll()` が呼び出された要素に限定するには、セレクターの最初に [`:scope`](/ja/docs/Web/CSS/:scope) 擬似クラスを記述してください。[セレクターのスコープ](#セレクターのスコープ)の例を参照してください。

> **メモ:** 標準の CSS 構文の一部ではない文字は、バックスラッシュ文字を使ってエスケープしなければなりません。 JavaScript でもバックスラッシュによるエスケープが使われているため、これらの文字を使った文字列リテラルを記述する際は、特に注意する必要があります。詳細は[特殊文字のエスケープ](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#エスケープシーケンス)を参照してください。

### 返値

生きていない {{domxref("NodeList")}} で、指定されたセレクターの 1 つ以上に一致する子孫ノード 1 つに対して 1 つずつの {{domxref("Element")}} を含みます。

> **メモ:** 指定された `selectors` が [CSS 擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を含む場合、返されるリストは常に空になります。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された `selectors` の構文が妥当ではない場合に発生します。

## 例

### データセットセレクターと属性セレクター

```html
<section class="box" id="sect1">
  <div class="funnel-chart-percent1">10.900%</div>
  <div class="funnel-chart-percent2">3700.00%</div>
  <div class="funnel-chart-percent3">0.00%</div>
</section>
```

```js
// データセットセレクター
const refs = [
  ...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`),
];

// 属性セレクター
// const refs = [...document.querySelectorAll(`[class*="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class^="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class$="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class~="funnel-chart-percent"]`)];
```

### 一致するもののリストの入手

{{domxref("NodeList")}} で `"myBox"` 要素の中にあるすべての {{HTMLElement("p")}} 要素を取得するには、次のようにします。

```js
const matches = myBox.querySelectorAll("p");
```

次の例では、文書内にあるすべての {{HTMLElement("div")}} 要素のうち、 "`note`" または "`alert`" のいずれかのクラスを持つもののリストを返します。

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

ここでは、文書の `<p>` 要素のうち、直接の親要素が {{HTMLElement("div")}} の `"highlighted"` クラスのものであり、それが ID が `"test"` であるコンテナーの中にあるものの一覧を取得します。

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

次の例では[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)を使用して、文書内の {{HTMLElement("iframe")}} 要素のうち `"data-src"` という名前の属性を持つもののリストを返します。

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

こちらでは、属性セレクターを使用して、ID が `"userlist"` の要素の中にあり、`"data-active"` 属性を持ち、その値が `"1"` であるリスト項目のリストを返しています。

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### 照合結果へのアクセス

一致した要素の {{domxref("NodeList")}} が返されると、配列と同様に調べることができます。配列が空であれば（つまり、 `length` プロパティが 0 であれば）、一致するものが見つからなかったということです。

それ以外の場合は、標準的な配列記法でリストの内容にアクセスすることができます。次のような一般的なループ文を使用することができます。

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> **メモ:** `NodeList` は、厳密には配列ではありません。つまり、`slice`、`some`、`map` などの配列メソッドを持っていません。これを配列に変換するには、 `Array.from(nodeList)` と実行してください。

### セレクターのスコープ

`querySelectorAll()` メソッドは、セレクターを文書全体に適用します。このメソッドが呼び出された要素だけのスコープにするわけではありません。セレクターのスコープを設定するには、セレクター文字列の先頭に [`:scope`](/ja/docs/Web/CSS/:scope) 擬似クラスを置いてください。

#### HTML

この例では、HTML に次のものが含まれています。

- 2 つのボタン: `#select` および `#select-scope`
- 3 重に入れ子になった `<div>` 要素: `#outer`, `#subject`, `#inner`
- この例が出力に使用する `<pre>` 要素

```html
<button id="select">Select</button>
<button id="select-scope">Select with :scope</button>

<div id="outer">
  .outer
  <div id="subject">
    .subject
    <div id="inner">.inner</div>
  </div>
</div>

<pre id="output"></pre>
```

```css hidden
div {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 3px #20b2aa solid;
  border-radius: 5px;
  font-family: monospace;
}

pre,
button {
  margin: 0.5rem;
  padding: 0.5rem;
}
```

#### JavaScript

JavaScript では、まず `#subject` 要素を選択します。

`select` ボタンが押されたら、セレクター文字列として `"#outer #inner"` を渡して `#subject` に対して `querySelectorAll()` を呼び出します。

`#select-scope` ボタンが押されたら、再び `querySelectorAll()` を `#subject` に対して呼び出しますが、この時は `":scope #outer #inner"` をセレクター文字列として渡します。

```js
const subject = document.querySelector("#subject");

const select = document.querySelector("#select");
select.addEventListener("click", () => {
  const selected = subject.querySelectorAll("#outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});

const selectScope = document.querySelector("#select-scope");
selectScope.addEventListener("click", () => {
  const selected = subject.querySelectorAll(":scope #outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});
```

#### 結果

{{EmbedLiveSample("Selector scope", "", 300)}}

"Select" を押すと、セレクターは `inner` という ID を持つ要素のうち、`outer` という ID を持つ祖先を持つ要素をすべて選択します。なお、`#outer` は `#subject` 要素の外側にあるにもかかわらず、選択で使用されるため、`#inner` 要素が見つかります。

"Select with :scope" を押すと、`:scope` 擬似クラスがセレクターのスコープを `#subject` に制限するので、セレクターの照合では `#outer` は使われず、`#inner` 要素は見つかりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- CSS ガイドの[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)
- MDN 学習エリアの[属性セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}
