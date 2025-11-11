---
title: "Document: hidden プロパティ"
short-title: hidden
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 9b89bf6c59aa5f4dfe7e68b7e4fee42507d67cc4
---

{{ ApiRef("DOM") }}

**`Document.hidden`** は読み取り専用のプロパティで、ページが非表示になっているとみられるかどうかを示す論理値を返します。

ページが非表示であるかどうかを判断する代替方法としては、{{domxref("Document.visibilityState")}} プロパティもあります。

## 値

論理値です。ページが非表示の場合は `true`、そうでなければ `false` です。

## 例

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
  // 動作を変更...
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.visibilityState")}}
