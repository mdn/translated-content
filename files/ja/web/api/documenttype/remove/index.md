---
title: "DocumentType: remove() メソッド"
slug: Web/API/DocumentType/remove
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DocumentType.remove()`** は文書の文書型宣言 (`doctype`) を削除します。

## 構文

```js-nolint
remove()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `remove()` の使用

```js
document.doctype; // "<!DOCTYPE html>'
document.doctype.remove();
document.doctype; // null
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.doctype")}}
