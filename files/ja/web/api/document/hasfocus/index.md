---
title: document.hasFocus()
slug: Web/API/Document/hasFocus
---

{{APIRef}}

**`hasFocus()`** は {{domxref("Document")}} インターフェイスのメソッドで、 {{jsxref("Boolean")}} の値を返し、文書または文書内の何れかの要素がフォーカスを持っているかどうかを示します。このメソッドは、文書内のアクティブな要素がフォーカスを持っているかどうかを特定するために使用することができます。

> **メモ:** 文書を見ている時、文書内でフォーカスを持つ要素は常に[アクティブ要素](/ja/docs/Web/API/DocumentOrShadowRoot/activeElement)ですが、アクティブ要素がフォーカスを持っているとは限りません。例えば、フォアグラウンドになっていないポップアップウィンドウ内のアクティブ要素はフォーカスを持ちません。

## 構文

```
var focused = document.hasFocus();
```

### 返値

文書内のアクティブ要素にフォーカスがない場合は `false` が、文書内のアクティブ要素にフォーカスがある場合は `true` が返ります。

## 例

この例は、文書がフォーカスを持っているかどうかを 300 ミリ秒ごとに検査します。 `hasFocus()` の機能をテストするために、ボタンを押して新しいウィンドウを開き、二つのページの間を切り替えてみてください。

### HTML

```html
<p id="log">Awaiting focus check.</p>
<button onclick="openWindow()">Open a new window</button>
```

### JavaScript

```js
function checkPageFocus() {
  let body = document.querySelector('body');
  let log = document.getElementById('log');

  if (document.hasFocus()) {
    log.textContent = 'This document has the focus.';
    body.style.background = '#fff';
  }
  else {
    log.textContent = 'This document does not have the focus.';
    body.style.background = '#ccc';
  }
}

function openWindow() {
  window.open('https://developer.mozilla.org/', 'MDN', 'width=640,height=320,left=150,top=150');
}

// Check page focus every 300 milliseconds
setInterval(checkPageFocus, 300);
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

| 仕様書                                                                                                                       | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'interaction.html#dom-document-hasfocus', 'Document.hasFocus()')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Page Visibility API の使用](/ja/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)
