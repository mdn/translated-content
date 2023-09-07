---
title: "ProcessingInstruction: sheet プロパティ"
slug: Web/API/ProcessingInstruction/sheet
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`sheet`** は {{domxref("ProcessingInstruction")}} インターフェイスの読み取り専用プロパティで、 `ProcessingInstruction` に関連付けられたスタイルシートを保持します。

処理命令 `xml-stylesheet` は XML ファイル内でスタイルシートを関連付けるために使用されます。

## 値

関連する {{DOMxref("Stylesheet")}} オブジェクト、または存在しない場合は `null` です。

## 例

```html
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="rule.css"?>
<!-- … -->
```

この処理命令の `sheet` プロパティは {{domxref("StyleSheet")}} オブジェクトで、`rule.css` を示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM API](/ja/docs/Web/API/Document_Object_Model)
