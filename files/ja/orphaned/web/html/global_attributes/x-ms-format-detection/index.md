---
title: x-ms-format-detection
slug: orphaned/Web/HTML/Global_attributes/x-ms-format-detection
original_slug: Web/HTML/Global_attributes/x-ms-format-detection
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

[`x-ms-format-detection`](<https://docs.microsoft.com/en-us/previous-versions/dn337007(v%3Dvs.85)>) 属性は、電話番号の様な要素のテキスト内データ形式が自動的にフォロー可能なリンクに変換されるかどうかを決定します。

`tel:` スキームのリンクなど既存のリンクは影響を受けません。

> **メモ:** format detection によって作成されたリンクは DOM に表示されません。

{{Non-standard_inline}} この独自プロパティは Internet Explorer と Microsoft Edge に固有です。

## 構文

```html
<html x-ms-format-detection="none">
```

## 値

- `all`
  - : サポートされているすべてのデータ形式が検出されます。
- `none`
  - : Format detection はオフになっています。
- `phone`
  - : 電話番号パターンは自動的にリンクされます。

## 関連情報

- [Microsoft API 拡張](/ja/docs/Web/API/Microsoft_API_extensions)
- [Safari Supported Meta Tags](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)
