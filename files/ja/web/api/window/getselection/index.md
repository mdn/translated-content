---
title: Window.getSelection()
slug: Web/API/Window/getSelection
l10n:
  sourceCommit: 964126ef650d6d6c11287db3f0e5c747bc5e36ac
---

{{ ApiRef() }}

**`Window.getSelection()`** メソッドは、ユーザーが選択した文字列の範囲やキャレットの現在位置を示す {{domxref("Selection")}} オブジェクトを返します。

## 構文

```js
getSelection();
```

### 引数

なし。

### 返値

A {{domxref("Selection")}} オブジェクト。

文字列へ型変換すると、空の文字列 (`""`) を追加するか {{domxref("Selection.toString()")}} を使って、選択された文字列を返します。

表示されていない {{htmlelement("iframe")}} に対して呼び出された場合（例えば `display: none` が設定されている場合）、 Firefox は `null` を、他のブラウザーは `None` を設定した {{domxref("Selection.type")}} オブジェクトを返します。

## 例

```js
function foo() {
  const selObj = window.getSelection();
  alert(selObj);
  const selRange = selObj.getRangeAt(0);
  // 以下、取得した選択文字列に対して何らかの処理を行う
}
```

## メモ

### Selection オブジェクトの文字列表現

JavaScript では、文字列が渡されることを前提としている関数 ({{ Domxref("window.alert()") }} や {{ Domxref("document.write()") }}) にオブジェクトが渡されると、そのオブジェクトの {{jsxref("Object.toString", "toString()")}} メソッドが呼び出され、その結果が関数へ渡されます。このため、実際はプロパティとメソッドを持つオブジェクトなのに、文字列であるかのように見えてしまいます。

上の例では、 `selObj.toString()` が {{domxref("window.alert()")}} へ渡されるときに自動的に呼び出されます。しかし、 JavaScript の [String](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) のプロパティや、 [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)、[`substr`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substr) などのメソッドを直接 {{domxref("Selection")}} オブジェクトに対して使おうとすると、オブジェクトにその名前のプロパティやメソッドが存在しないはエラーとなり、存在する場合は予期せぬ結果を返すでしょう。 `Selection` オブジェクトを文字列として使うなら、下記のように `toString()` メソッドを呼び出してください。

```js
const selectedText = selObj.toString();
```

- `selObj` は `Selection` オブジェクトです。
- `selectedText` は文字列です。 (選択された文字列)

### 関連オブジェクト

同じように機能する {{domxref("Document.getSelection()")}} を呼び出すことができます。

現在 `getSelection()` は Firefox、Edge (旧)、Internet Explorer では、 {{htmlelement("textarea")}} と {{htmlelement("input")}} 要素の内容に対して動作しないことは知っておくとよいでしょう。{{domxref("HTMLInputElement.setSelectionRange()")}} または `selectionStart` と `selectionEnd` プロパティを使用すると、この問題を回避することができます。

_選択_ と _フォーカス_ の違いに注意してください。{{domxref("Document.activeElement")}} はフォーカスされた要素を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [選択 API](/ja/docs/Web/API/Selection)
- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
