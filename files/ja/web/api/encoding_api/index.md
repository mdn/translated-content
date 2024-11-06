---
title: エンコーディング API
slug: Web/API/Encoding_API
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{DefaultAPISidebar("Encoding API")}}

**エンコーディング API** は、様々な{{Glossary("character encoding", "文字エンコーディング")}}のテキストを扱うメカニズムを提供します。レガシーな {{Glossary("UTF-8")}} 以外のエンコーディングも含みます。

この API は、{{domxref("TextDecoder")}}、{{domxref("TextEncoder")}}、{{domxref("TextDecoderStream")}}、{{domxref("TextEncoderStream")}} の 4 つのインターフェイスを提供します。

{{AvailableInWorkers}}

## インターフェイス

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [エンコーディング API のエンコーディング](/ja/docs/Web/API/Encoding_API/Encodings) - テキストをデコードする際に対応していなければならないエンコーディング。
- 対応していないブラウザーでこのインターフェイスを使用することができる[ポリフィル](https://github.com/inexorabletash/text-encoding)。
