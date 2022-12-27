---
title: Element.insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
---

{{APIRef("DOM")}}

`insertAdjacentText()` メソッドは、与えられたテキストノードを、メソッドを実行した要素に対する相対的な位置に挿入します。

## 構文

```
element.insertAdjacentText(position, element);
```

### パラメーター

- position

  - : `element` に対する相対的な位置を {{domxref("DOMString")}} 表現で指定します。次の文字列のうち 1 つを取ります。

    - `'beforebegin'`: `element` 本体の前。
    - `'afterbegin'`: `element` のすぐ内側の、最初の子要素の前。
    - `'beforeend'`: `element` のすぐ内側の、最後の子要素の後。
    - `'afterend'`:`element` 本体の後。

- element
  - : DOM ツリーに挿入するテキストの {{domxref("DOMString")}} 表現。

### 返り値

Void。

### 例外

| 例外          | 説明                                                    |
| ------------- | ------------------------------------------------------- |
| `SyntaxError` | `position` として指定した文字列が認識できない値だった。 |

### ポジション名の視覚的な表現

```
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

> **メモ:** `beforebegin` および `afterend` の positions が使えるのは、対象ノードがツリーの中にあって、親要素を持つ時に限られます。

```js
beforeBtn.addEventListener('click', function() {
  para.insertAdjacentText('afterbegin',textInput.value);
});

afterBtn.addEventListener('click', function() {
  para.insertAdjacentText('beforeend',textInput.value);
});
```

私たちが GitHub に用意した [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html) デモを見てください。(同時に [source code](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentText.html) も読んでください。) ここにはシンプルなパラグラフが 1 つあります。フォーム要素に好きなテキストを入力してから、_Insert before_ または _Insert after_ ボタンを押すと、`insertAdjacentText()` が、入力したテキストをパラグラフのテキストの前または後に挿入します。すでにあるテキストノードにテキストが追加されるのではなく、新しい追加テキストが含まれる別のテキストノードが生成されて、それが追加されることに注意してください。

**仕様**

| 仕様                                                                                                             | ステータス                       | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('DOM WHATWG', '#dom-element-insertadjacenttext', 'insertAdjacentText()')}} | {{ Spec2('DOM WHATWG') }} |          |

## ブラウザー間の互換性

{{Compat}}

## 関連項目

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
