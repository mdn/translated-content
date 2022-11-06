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

| 仕様書                                                                                       | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName("HTML WHATWG", "#dom-document-close", "document.close()")}} | {{Spec2("HTML WHATWG")}} |      |
| {{SpecName("DOM2 HTML", "html.html#ID-98948567", "document.close()")}} | {{Spec2("DOM2 HTML")}}     |      |

## ブラウザーの互換性

{{Compat}}
