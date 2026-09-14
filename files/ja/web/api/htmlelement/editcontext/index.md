---
title: "HTMLElement: editContext プロパティ"
short-title: editContext
slug: Web/API/HTMLElement/editContext
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`editContext`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素に関連付けられた {{domxref("EditContext")}} オブジェクトを取得したり設定したりします。

{{domxref("EditContext API", "", "", "nocode")}} を使用することで、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) の変換や絵文字ピッカー、その他のプラットフォーム固有の編集関連 UI サーフェスなど、高度なテキスト入力に対応したリッチテキストエディターをウェブ上で構築することができます。

### 利用可能な要素

`editContext` プロパティを設定して動作するのは、一部の種類の要素だけです。

- HTML 要素のうち、 [`<article>`](/ja/docs/Web/HTML/Reference/Elements/article), [`<aside>`](/ja/docs/Web/HTML/Reference/Elements/aside), [`<blockquote>`](/ja/docs/Web/HTML/Reference/Elements/blockquote), [`<body>`](/ja/docs/Web/HTML/Reference/Elements/body), [`<div>`](/ja/docs/Web/HTML/Reference/Elements/div), [`<footer>`](/ja/docs/Web/HTML/Reference/Elements/footer), [`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h2>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h3>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h4>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h5>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h6>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<header>`](/ja/docs/Web/HTML/Reference/Elements/header), [`<main>`](/ja/docs/Web/HTML/Reference/Elements/main), [`<nav>`](/ja/docs/Web/HTML/Reference/Elements/nav), [`<p>`](/ja/docs/Web/HTML/Reference/Elements/p), [`<section>`](/ja/docs/Web/HTML/Reference/Elements/section), [`<span>`](/ja/docs/Web/HTML/Reference/Elements/span) のいずれか。
- 有効な[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)。
- [`<canvas>`](/ja/docs/Web/HTML/Reference/Elements/canvas) 要素。

上記以外の要素で `editContext` プロパティを設定しようとすると、`NotSupportedError` の {{domxref("DOMException")}} が発生します。

### 要素の関連付け

要素の `editContext` プロパティに {{domxref("EditContext")}} インスタンスを設定すると、その要素と `EditContext` インスタンスの関連付けが行われます。

関連は 1 対 1 で行われます。

- 要素は 1 つの `EditContext` インスタンスにのみ関連付けることができます。
- 1　つの `EditContext` インスタンスは　1　つの要素にのみ関連付けることができます。

すでに関連付けられた `EditContext` インスタンスを別の要素に関連付けようとすると、 {{domxref("DOMException")}} が発生します。

他の `EditContext` インスタンスを既に関連付けられた要素に関連付けようとした場合も、 {{domxref("DOMException")}} が発生します。

要素がすでに `EditContext` インスタンスに関連付けられているかどうかを調べるには、{{domxref("EditContext.attachedElements()")}} メソッドを使用してください。

### ガベージコレクション

`EditContext` インスタンスは、関連する要素が DOM から除去されても、他の参照する要素があれば、その関連する要素を維持し続けます。

要素が確実にガベージコレクションされるようにしたい場合は、要素の `editContext` プロパティをクリアして下さい。

## 値

{{domxref("EditContext")}} オブジェクトまたは `null` です。

## 例

### 要素の `editContext` プロパティの設定

この例では、要素を編集可能にするために `<canvas>` 要素の `editContext` プロパティを新しい `EditContext` インスタンスに設定する方法を示します。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

### 要素の `editContext` プロパティのクリア

この例では、DOM から要素を安全に除去するために、編集可能な `<canvas>` 要素の `editContext` プロパティをクリアする方法を示します。

```html
<canvas id="editor-canvas"></canvas>
```

```js
// EditContext を作成して canvas 要素に関連付ける
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

// そのあとで editContext プロパティをクリアし、要素を除去する
canvas.editContext = null;
canvas.remove();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("EditContext")}} インターフェイス
