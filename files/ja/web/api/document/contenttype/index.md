---
title: Document.contentType
slug: Web/API/Document/contentType
---

{{APIRef}}

**`Document.contentType`** プロパティは読み取り専用で、文書がレンダリングされる MIME タイプを返します。これは HTTP ヘッダーやその他の MIME 情報のソースから来る可能性があり、ブラウザーや拡張機能によって行われる自動型変換の影響を受ける可能性があります。

> **メモ:** このプロパティは {{HTMLElement("meta")}} 要素には影響されません。

## 構文

```
contentType = document.contentType;
```

### 値

`contentType` は読み取り専用のプロパティです。

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('DOM WHATWG', '#dom-document-contenttype', 'Document.contentType')}} | {{Spec2('DOM WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}
