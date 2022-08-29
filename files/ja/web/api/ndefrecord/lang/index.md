---
title: NDEFRecord.lang
slug: Web/API/NDEFRecord/lang
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.lang
translation_of: Web/API/NDEFRecord/lang
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`lang`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、テキストのペイロードの言語を返します。提供されていない場合は `null` を返します。

レコードには言語タグが付いていないことがあります。例えば、記録された情報がロケールに依存しない場合などです。

## 構文

```js
NDEFRecord.lang
```

### 値

{{DOMxRef("USVString")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML の `lang` 属性](/ja/docs/Web/HTML/Global_attributes/lang): 文書やその要素のコンテンツの言語を宣言します
- コンテンツの言語を宣言する HTTP ヘッダー: {{HTTPHeader("Content-Language")}} および {{HTTPHEader("Accept-Language")}}
