---
title: "Document: hasFocus() メソッド"
slug: Web/API/Document/hasFocus
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`hasFocus()`** は {{domxref("Document")}} インターフェイスのメソッドで、文書または文書内の何れかの要素がフォーカスを持っているかどうかを示す論理値を返します。
このメソッドは、文書内のアクティブな要素がフォーカスを持っているかどうかを特定するために使用することができます。

> **メモ:** 文書を見ている時、文書内でフォーカスを持つ要素は常に[アクティブ要素](/ja/docs/Web/API/Document/activeElement)ですが、アクティブ要素がフォーカスを持っているとは限りません。
> 例えば、フォアグラウンドになっていないポップアップウィンドウ内のアクティブ要素はフォーカスを持ちません。

## 構文

```js-nolint
hasFocus()
```

### 引数

なし。

### 返値

文書内のアクティブ要素にフォーカスがない場合は `false` を返します。
文書内のアクティブ要素にフォーカスがある場合は `true` を返します。

## 例

この例は、文書がフォーカスを持っているかどうかを検査します。
`checkPageFocus()` という関数は、`document.hasFocus()` の結果に応じて段落要素を更新します。
新しいウィンドウを開くと文書からフォーカスがなくなり、元のウィンドウに戻すとフォーカスが回復します。

### HTML

```html
<p id="log">フォーカスのチェック結果はこちらに表示されます。</p>
<button id="newWindow">新しいウィンドウを開く</button>
```

```css hidden
body {
  padding: 1rem;
  background: gray;
  text-align: center;
  font-size: 1.5rem;
}
```

### JavaScript

```js
const body = document.querySelector("body");
const log = document.getElementById("log");

function checkDocumentFocus() {
  if (document.hasFocus()) {
    log.textContent = "この文書にフォーカスがあります。";
    body.style.background = "white";
  } else {
    log.textContent = "この文書にはフォーカスがありません。";
    body.style.background = "gray";
  }
}

function openWindow() {
  window.open(
    "https://developer.mozilla.org/",
    "MDN",
    "width=640,height=320,left=150,top=150",
  );
}

document.getElementById("newWindow").addEventListener("click", openWindow);
setInterval(checkDocumentFocus, 300);
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.activeElement")}}
- [ページ可視性 API の使用](/ja/docs/Web/API/Page_Visibility_API)
