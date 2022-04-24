---
title: ProcessingInstruction.sheet
slug: Web/API/ProcessingInstruction/sheet
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.ProcessingInstruction.sheet
translation_of: Web/API/ProcessingInstruction/sheet
---
{{ApiRef("DOM")}}

**`sheet`** は {{domxref("ProcessingInstruction")}} インターフェイスの読み取り専用プロパティで、 `ProcessingInstruction` に関連付けられたスタイルシートの名前を表します。

処理命令 `xml-stylesheet` は XML ファイル内でスタイルシートを関連付けるために使用されます。

## 値

関連するスタイルシートの名前を含む文字列、または、存在しない場合は `null` です。

## 例

```html
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="rule.css"?>
...
```

この処理命令の `sheet` プロパティは `rule.css` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM API](/ja/docs/Web/API/Document_Object_Model)
