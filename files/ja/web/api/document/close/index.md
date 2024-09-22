---
title: "Document: close() メソッド"
short-title: close()
slug: Web/API/Document/close
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.close()`** メソッドは、 {{domxref("Document.open()")}} で開かれた文書への書き込みを終了します。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// 書きこむ文書を開きます。
document.open();

// 文書の内容を書き込みます。
document.write("<p>たったひとつの内容。</p>");

// 文書を閉じます。
document.close();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
