---
title: "NDEFRecord: lang プロパティ"
short-title: lang
slug: Web/API/NDEFRecord/lang
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

**`lang`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、テキストのペイロードの言語を返します。提供されていない場合は `null` を返します。

レコードには言語タグが付いていないことがあります。例えば、記録された情報がロケールに依存しない場合などです。

## 構文

```js-nolint
NDEFRecord.lang
```

### 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML の `lang` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/lang): 文書やその要素のコンテンツの言語を宣言します
- コンテンツの言語を宣言する HTTP ヘッダー: {{HTTPHeader("Content-Language")}} および {{HTTPHEader("Accept-Language")}}
