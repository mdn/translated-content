---
title: Document.close()
slug: Web/API/Document/close
---

{{APIRef("DOM")}}

**`Document.close()`** メソッドは、 {{domxref("Document.open()")}} で開かれた文書への書き込みを終了します。

## 構文

```
document.close();
```

## 例

```
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
