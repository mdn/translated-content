---
title: Document.activeElement
slug: Web/API/Document/activeElement
---

{{APIRef("Shadow DOM")}}

**`activeElement`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、DOM 内で現在フォーカスを持っている要素 ({{domxref("Element")}}) を返します。

多くの場合、 `activeElement` はその時点でテキストが選択されていれば {{domxref("HTMLInputElement")}} または {{domxref("HTMLTextAreaElement")}} オブジェクトを返します。もしそうなら、そのオブジェクトの `selectionStart` と `selectionEnd` プロパティを使用することで、より詳細な情報を得ることができます。
その他、フォーカスされている要素が {{HTMLElement("select")}} 要素（メニュー）や {{HTMLElement("input")}} 要素（ `type` `"button"`, `"checkbox"`, `"radio"`） である場合もあります。

通常、ユーザーはタブキーを押して、フォーカス可能な要素間でページ内のフォーカスを移動させ、スペースバーを使用して 1 つの要素をアクティブにします（つまり、ボタンを押したり、ラジオボタンをトグル切り替えしたりします）。どの要素にフォーカスが当たるかは、プラットフォームやブラウザーの現在の設定によって異なります。例えば、 macOS システムでは通常、既定では、テキスト入力要素以外の要素はフォーカスされません。

> **メモ:** フォーカス（どの要素がユーザー入力イベントを受信しているか）と選択範囲（文書内で現在強調表示されている部分）は同じものではありません。現在の選択範囲は {{domxref("window.getSelection()")}} で取得することができます。

## 値

現在フォーカスがある {{domxref('Element')}} です。フォーカスされている要素がない場合は {{HTMLElement("body")}} または `null` となります。

## 例

### HTML

```html
<p>下のテキストエリアからテキストを選択してください。</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
これはテキストエリア 1 です。 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea
  >
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
これはテキストエリア 2 です。 Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea
  >
</form>

<p>アクティブな要素の ID: <b id="output-element"></b></p>
<p>選択されているテキスト: <b id="output-text"></b></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd,
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.innerHTML = activeTextarea.id;
  outputText.innerHTML = selection;
}

const textarea1 = document.getElementById("ta-example-one");
const textarea2 = document.getElementById("ta-example-two");
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);
```

### 結果

{{ EmbedLiveSample('Example', '400', '400') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
