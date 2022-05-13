---
title: NDEFRecord.recordType
slug: Web/API/NDEFRecord/recordType
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.recordType
translation_of: Web/API/NDEFRecord/recordType
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`recordType`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、このレコードのレコード型を返します。

## 構文

```js
NDEFRecord.recordType
```

### 値

{{DOMxRef("USVString")}} で、以下のうちのいずれかを取ります。

- `"empty"`
  - : 空の NDEF レコードです。
- `"text"`
  - : テキストの NDEF レコードです。
- `"url"`
  - : URI の NDEF レコードです。
- `"smart-poster"`
  - : 「スマートポスター」の NDEF レコードです。
- `"absolute-url"`
  - : 絶対 URL の NDEF レコードです。
- `"mime"`
  - : {{Glossary("MIME type", "MIME タイプ")}}の NDEF レコードです。
- `"unknown"`
  - : NDEF レコード型が不明です。
- ローカル型名
  - : ローカル型名を表します。他のレコードに埋め込まれた NDEF レコードを指定するのによく使われます。
- 外部型名
  - : ドメイン名とカスタムタイプ名をコロン (":") で区切ったカスタム文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
