---
title: HTMLElement.innerText
slug: Web/API/HTMLElement/innerText
tags:
  - API
  - HTML DOM
  - HTMLElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLElement.innerText
translation_of: Web/API/HTMLElement/innerText
---
{{APIRef("HTML DOM")}}

**`innerText`** は {{domxref("HTMLElement")}} のプロパティで、ノードとその子孫の「レンダリングされている」テキスト内容を示します。

ゲッターとしては、カーソルで要素の内容を選択しクリップボードにコピーした際のテキストに近いものを取得することができます。
セッターとしては、この要素の子要素を指定された値で置き換え、すべての改行を {{HTMLElement("br")}} 要素に変換します。

> **Note:** `innerText` は {{domxref("Node.textContent")}} と混同しやすいのですが、両者には重要な違いがあります。基本的に `innerText` はテキストがレンダリングされる表示を意識しますが、 `textContent` はそうではありません。

## 値

{{domxref("DOMString")}} で、要素の表示されたテキストの内容を表します。

要素自身が[表示されないとき](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered)（例えば、文書から切り離されたり、表示から隠されたりしている場合）、返値は {{domxref("Node.textContent")}} プロパティと同じ値になります。

## 例

この例では `innerText` と {{domxref("Node.textContent")}} を比較しています。 `innerText` が {{htmlElement("br")}} 要素のようなものをどのように意識するかや、非表示の要素を無視することに注意してください。

### HTML

```html
<h3>元の要素:</h3>
<p id="source">
  <style>#source { color: red;  } #text { text-transform: uppercase; }</style>
<span id=text>このテキストが<br>どう扱われるか<br>下で見てみてください。</span>
  <span style="display:none">隠しテキスト</span>
</p>
<h3>textContent の結果:</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>...</textarea>
<h3>innerText の結果:</h3>
<textarea id="innerTextOutput" rows="6" cols="30" readonly>...</textarea>
```

### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
```

### 結果

{{EmbedLiveSample("Example", 700, 450)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
