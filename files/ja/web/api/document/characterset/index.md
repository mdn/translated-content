---
title: "Document: characterSet プロパティ"
short-title: characterSet
slug: Web/API/Document/characterSet
l10n:
  sourceCommit: 84f47487afe5ca1d6356231d1ec2688e22c0ef53
---

{{ ApiRef("DOM") }}

**`Document.characterSet`** プロパティは読み取り専用で、この文書の現在の表示に使われている[文字エンコーディング](/ja/docs/Glossary/Character_encoding)を表す文字列を返します。

> [!NOTE]
> 「文字セット」と「文字エンコーディング」は似ていますが違うものです。プロパティ名に反してエンコーディングを返します。

## 値

文字列です。

## 例

```html
<button onclick="console.log(document.characterSet);">
  Log character encoding
</button>
<!-- "ISO-8859-1" や "UTF-8" など、文書の文字セットが開発者コンソールに表示されます -->
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
