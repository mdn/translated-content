---
title: Document.hidden
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{ ApiRef("DOM") }}

**`Document.hidden`** は読み取り専用のプロパティで、ページが非表示になっているとみられるかどうかを示す論理値を返します。

> **メモ:** このプロパティは、[Page Visibility Level 2 仕様書](https://www.w3.org/TR/page-visibility-2/)では「歴史的」と記述されています。代わりに {{domxref("Document.visibilityState")}} プロパティを使用することを検討してください。

## 構文

```js-nolint
document.hidden
```

## 例

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
  // 振る舞いを修正...
});
```

## 使用上の注意

> **警告:** プリレンダリングのために、ページがユーザーにとって実際に可視であっても、`document.hidden` が true になることがあります。このようなシナリオでは、ページの読み込みは `document.visibilityState = "prerender"` で始まり、ある程度遅れて `document.visibilityState = "visible"` に遷移します。このシナリオは、 Safari で新しいブラウザータブを開き、 URL バーに URL を貼り付けて、その URL へ移動することで再現することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
