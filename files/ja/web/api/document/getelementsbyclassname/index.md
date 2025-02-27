---
title: "Document: getElementsByClassName() メソッド"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("DOM")}}

**`getElementsByClassName`** は {{domxref("Document")}} インターフェイスのメソッドで、指定されたクラス名をすべて持つすべての子要素の配列風オブジェクトを返します。

{{domxref("document")}} オブジェクトに対して呼び出したときは、ルートノードを含む文書全体が検索されます。任意の要素に対して {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} を呼び出すこともできます。その場合は、指定されたルート要素下の指定されたクラス名を持つ要素だけを返します。

> [!WARNING]
> これは生きた {{domxref("HTMLCollection")}} です。DOM の変更は、その都度配列に反映されます。この配列で選択された要素がセレクターに該当しなくなった場合は、 自動的に除去されます。反復処理する際には、このことに注意しましょう。

## 構文

```js-nolint
getElementsByClassName(names)
```

### 引数

- `names`
  - : 照合するクラス名を表す文字列です。複数のクラス名はホワイトスペースで区切ります。

### 返値

見つかった要素の生きた {{domxref("HTMLCollection")}} です。

## 例

'test' クラスを持つすべての要素を取得します。

```js
document.getElementsByClassName("test");
```

'red' および 'test' クラスを両方持つすべての要素を取得します。

```js
document.getElementsByClassName("red test");
```

'main' という ID を持った要素の中にある、 'text' クラスを持つすべての要素を取得します。

```js
document.getElementById("main").getElementsByClassName("test");
```

'test' クラスを持つ最初の要素を取得し、一致する要素がなければ `undefined` になります。

```js
document.getElementsByClassName("test")[0];
```

メソッドの _this_ 値として {{domxref("HTMLCollection")}} を渡すことで、Array.prototype のメソッドを `HTMLCollection` で使用することができます。ここでは、 'test' クラスを持つすべての div 要素を検索します。

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### クラスが 'test' である最初の要素を取得する

これは最もよく使われる操作のメソッドです。

```html
<html lang="en">
  <body>
    <div id="parent-id">
      <p>hello world 1</p>
      <p class="test">hello world 2</p>
      <p>hello world 3</p>
      <p>hello world 4</p>
    </div>

    <script>
      const parentDOM = document.getElementById("parent-id");

      const test = parentDOM.getElementsByClassName("test"); // 一致する要素のリストであり、要素自身では*ない*
      console.log(test); // HTMLCollection[1]

      const testTarget = parentDOM.getElementsByClassName("test")[0]; // 求める最初の要素
      console.log(testTarget); // <p class="test">hello world 2</p>
    </script>
  </body>
</html>
```

### 複数のクラスの例

`document.getElementsByClassName` は `document.querySelector` や `document.querySelectorAll` ととても似た動きをします。指定されたクラス名がすべてある要素のみが選択されます。

#### HTML

```html
<span class="orange fruit">Orange Fruit</span>
<span class="orange juice">Orange Juice</span>
<span class="apple juice">Apple Juice</span>
<span class="foo bar">Something Random</span>
<textarea id="resultArea" style="width:98%;height:7em"></textarea>
```

#### JavaScript

```js
// getElementsByClassName は指定された両方のクラスを持つ要素のみを選択する
const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
let result = "document.getElementsByClassName('orange juice')";
for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
  result += `\n ${allOrangeJuiceByClass[i].textContent}`;
}

// querySelector は完全一致するもののみ選択する
const allOrangeJuiceQuery = document.querySelectorAll(".orange.juice");
result += "\n\ndocument.querySelectorAll('.orange.juice')";
for (let i = 0; i < allOrangeJuiceQuery.length; i++) {
  result += `\n ${allOrangeJuiceQuery[i].textContent}`;
}

document.getElementById("resultArea").value = result;
```

#### 結果

{{EmbedLiveSample('Multiple_Classes_Example', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
