---
title: NDEFRecord()
slug: Web/API/NDEFRecord/NDEFRecord
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.NDEFRecord
translation_of: Web/API/NDEFRecord/NDEFRecord
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`NDEFRecord()`** は[ウェブ NFC API](/ja/docs/Web/API/Web_NFC_API) のコンストラクターで、新しく構築された {{DOMxRef("NDEFRecord")}} オブジェクトを返します。これは互換性のある NFC 機器（例えば、NDEF に対応している NFC タグ）から読み書きできるデータを表すものです。

## 構文

```js
writer = new NDEFRecord(options);
```

### 引数

- `options`

  - : 以下のプロパティを持つオブジェクトです。

    - `data` {{optional_inline}}
      - : 転送されるデータが入ります。文字列、{{domxref("BufferSource")}}、またはネストされたレコードの配列のいずれかです。
    - `encoding` {{optional_inline}}
      - : 文字列で、このレコードのエンコーディングを指定します。
    - `id` {{optional_inline}}
      - : このレコードの開発者が定義した識別子です。
    - `lang` {{optional_inline}}
      - : {{RFC(5646, "Tags for Identifying Languages （または BCP 47）")}}による有効な言語タグです。
    - `mediaType` {{optional_inline}}
      - : 有効な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
    - `recordType`

      - : 文字列で、 `data` に格納されたデータの型を示します。以下の値の何れかである必要があります。

        - `"absolute-url"`

          データへの絶対 URL です。

          `"empty"`

          - : 空の {{domxref("NDEFRecord")}} です。

        - `"mime"`
          - : 有効な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
        - `"smart-poster"`
          - : [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) 仕様書で定義されたスマートポスターです。
        - `"text"`
          - : [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) 仕様書で定義されたテキストです。
        - `"unknown"`
          - : レコードの型が不明です。
        - `"URL"`
          - : [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) 仕様書で定義された URL です。

### 返値

新しい {{DOMxRef("NDEFRecord")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
