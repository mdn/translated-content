---
title: "Element: insertAdjacentText() メソッド"
short-title: insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`insertAdjacentText()`** は {{domxref("Element")}} インターフェイスのメソッドで、与えられたテキストノードを、メソッドを実行した要素に対する相対的な位置に挿入します。

## 構文

```js-nolint
insertAdjacentText(where, data)
```

### 引数

- `where`

  - : 文字列で、メソッドを呼び出した要素から見た相対的な位置を表します。以下のいずれかでなければなりません。

    - `'beforebegin'`: `element` 本体の前。
    - `'afterbegin'`: `element` のすぐ内側の、最初の子要素の前。
    - `'beforeend'`: `element` のすぐ内側の、最後の子要素の後。
    - `'afterend'`:`element` 本体の後。

- `data`
  - : メソッドが呼び出された要素から相対的に指定された位置 `where` に挿入する新しいテキストノードを作成する文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : `where` が理解できない値である場合に発生します。

### 位置名の図解

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **メモ:** `beforebegin` および `afterend` の位置が使えるのは、対象ノードがツリーの中にあって、親要素を持つ時に限られます。

## 例

```js
beforeBtn.addEventListener("click", () => {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", () => {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

GitHub 上にあるデモ [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) を見てください。（同時に[ソースコード](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentText.html)も読んでください。）ここにはシンプルな段落が 1 つあります。フォーム要素に好きなテキストを入力してから、_Insert before_ または _Insert after_ ボタンを押すと、`insertAdjacentText()` が、入力したテキストを段落のテキストの前または後に挿入します。すでにあるテキストノードにテキストが追加されるのではなく、新しい追加テキストが含まれる別のテキストノードが生成されて、それが追加されることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
