---
title: Document.getSelection()
slug: Web/API/Document/getSelection
---

{{APIRef("DOM")}}

**`getSelection()`** は {{DOMxRef("Document")}} インターフェイスのプロパティで、ユーザーが選択したテキストの範囲、またはキャレットの現在位置を表す {{DOMxRef("Selection")}} オブジェクトを返します。

## 構文

```js
getSelection();
```

### 引数

なし。

### 返値

{{DOMxRef("Selection")}} オブジェクト。

## 例

### Selection オブジェクトを取得

```js
let selection = document.getSelection();
let selRange = selection.getRangeAt(0);
// この範囲に対して何かをする

console.log(selection); // Selection オブジェクト
```

### Selection オブジェクトの文字列表現

JavaScript では、オブジェクトが文字列を取る関数 ({{DOMxRef("Window.alert()")}} など) に渡された場合、オブジェクトの {{JSxRef("Object.toString", "toString()")}} メソッドが呼び出され、関数にその返値が渡されます。これにより、プロパティやメソッドを持つ実際のオブジェクトであった場合、他の関数に使われると文字列になって現れることがあります。

```js
alert(selection);
```

ただし、すべての関数で自動的に `toString()` が呼び出されるとは限りません。 `Selection` オブジェクトを文字列として使用する場合は、 `toString()` メソッドを直接呼び出してください。

```js
let selectedText = selection.toString();
```

## 関連するオブジェクト

{{domxref("Window.getSelection()")}} を呼び出すと、 `Document.getSelection()` と同等の動作をします。

Firefox において現在は `getSelection()` は {{htmlelement("input")}} 要素の中では動作しないことに注意してください。 {{domxref("HTMLInputElement.setSelectionRange()")}} を使用することで回避できます。

_selection_ と _focus_ との違いにも注意してください。 {{domxref("Document.activeElement")}} はフォーカスを持つ要素を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
