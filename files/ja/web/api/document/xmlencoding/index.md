---
title: "Document: xmlEncoding プロパティ"
short-title: xmlEncoding
slug: Web/API/Document/xmlEncoding
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{deprecated_header}}

XML 宣言によって決定されたエンコード方式を返します。未指定または不明の場合は `null` となります。

> [!WARNING]
> この属性を使用しないでください。この属性は DOM Level 4 仕様から除去され、Firefox 10.0 では対応していません。

以下の XML 宣言を想像してください。

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

こうすると、結果は "UTF-16" になります。

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定もありません。

## ブラウザーの互換性

{{Compat}}
