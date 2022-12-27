---
title: element.insertAdjacentHTML
slug: Web/API/Element/insertAdjacentHTML
---

{{ApiRef("DOM")}}

## 概要

`insertAdjacentHTML()` は、第二引数で指定するテキストを HTML または XML としてパースし、その結果であるノードを DOM ツリー内の指定された位置（第一引数で指定）に挿入します。これは挿入先の要素を再度パースするものではないため、既存の要素や要素内部の破壊を伴いません。余分なシリアル化のステップを回避できる分、 `innerHTML` への代入による直接的な操作よりもはるかに高速な動作となります。

## 構文

```
element.insertAdjacentHTML(position, text);
```

`position` には `element` に対する相対位置を、以下に示す文字列の 1 つで指定します。

- `'beforebegin'`
  - : element の直前に挿入
- `'afterbegin'`
  - : `element` 内部の、最初の子要素の前に挿入
- `'beforeend'`
  - : `element` 内部の、最後の子要素の後に挿入
- `'afterend'`
  - : `element` の直後に挿入

`text`\_ \_には HTML または XML としてパースし DOM ツリーに挿入することが可能な文字列を指定します。

### ポジション名の可視化

```
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

> **メモ:** `beforebegin` および `afterend` の位置指定で動作するのは、ノードがツリー内にあり、かつ親要素が存在する場合のみとなります。

## 例

```js
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// 挿入位置および挿入後の構造は、以下のようになります。
// <div id="one">one</div><div id="two">two</div>
```

## 仕様

| 仕様                                                                                                                                                                                 | ステータス                           | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('DOM Parsing', '#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text', 'Element.insertAdjacentHTML()')}} | {{ Spec2('DOM Parsing') }} |          |

## ブラウザ実装状況

{{Compat}}

## 関連情報

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- Henri Sivonen 氏による [hacks.mozilla.org へのゲストポスト](http://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) には、幾つかのケースでは insertAdjacentHTML がより速い方法であることを示すベンチマークが含まれています。
