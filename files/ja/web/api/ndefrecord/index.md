---
title: NDEFRecord
slug: Web/API/NDEFRecord
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

**`NDEFRecord`** は[ウェブ NFC API](/ja/docs/Web/API/Web_NFC_API) のインターフェイスで、 NDEF に対応する NFC タグなど、互換性のある NFC 機器から読み取ったり、書き込んだりできるデータを提供します。

## コンストラクター

- {{DOMxRef("NDEFRecord.NDEFRecord", "NDEFRecord()")}} {{Experimental_Inline}}
  - : 新しい `NDEFRecord` を返します。

## インスタンスプロパティ

- {{DOMxRef("NDEFRecord.recordType")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : このレコードのレコード型を返します。レコードは標準のよく知られた型名を持つ必要があります。例えば `"empty"`, `"text"`, `"url"`, `"smart-poster"`, `"absolute-url"`, `"mime"`, `"unknown"` またはそれ以外に、ドメイン名で構成された外部型名や、コロン (":") で区切られたカスタム型名です。
- {{DOMxRef("NDEFRecord.mediaType")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : このレコードの {{Glossary("MIME type", "MIME タイプ")}}です。この値は `recordType` が `"mime"` と等しくない場合は `null` になります。
- {{DOMxRef("NDEFRecord.id")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : レコード識別子、レコードを識別するために使用される絶対または相対 URL を返します。
    > **メモ:** 識別子の一意性は、レコードの生成者によってのみ強制されます。
- {{DOMxRef("NDEFRecord.data")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : このレコードのペイロードの生のバイト列が入った {{jsxref("DataView")}} を返します。
- {{DOMxRef("NDEFRecord.encoding")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : テキストペイロードのエンコーディングを返します。それ以外の場合は `null` です。
- {{DOMxRef("NDEFRecord.lang")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : テキストペイロードの言語を返します。提供されていない場合は `null` です。

## インスタンスメソッド

- {{DOMxRef("NDEFRecord.toRecords", "NDEFRecord.toRecords()")}} {{Experimental_Inline}}
  - : {{DOMxRef("NDEFRecord.data")}} をレコードの並びに変換します。これにより、スマートポスターや外部型レコードなど、ネストしたレコードを含む可能性のあるレコードタイプのペイロードを解釈することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
