---
title: Encoding API
slug: Web/API/Encoding_API
---

{{DefaultAPISidebar("Encoding API")}}{{SeeCompatTable}}

**Encoding API** はレガシーな非{{Glossary("UTF-8")}}エンコーディングを含む様々な{{Glossary("character encoding", "文字エンコーディング")}}のテキストを扱うメカニズムを提供します。

この API は 4 つのインターフェースを提供します。それは、 {{domxref("TextDecoder")}}、 {{domxref("TextEncoder")}}、 {{domxref("TextDecoderStream")}} そして {{domxref("TextEncoderStream")}} です。

## インターフェース

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## チュートリアルとツール

- [shim](http://code.google.com/p/stringencoding/)はこのインターフェースをサポートしていないブラウザでもこのインターフェスを使えるようにします。
- [`StringView`](/ja/Add-ons/Code_snippets/StringView) は C 言語の文字列配列型のような表現を提供します。

## 仕様書

| 仕様書                           | 状態                         | 備考     |
| -------------------------------- | ---------------------------- | -------- |
| {{SpecName("Encoding")}} | {{Spec2("Encoding")}} | 初回定義 |

## ブラウザーの対応

### `TextDecoder`

{{Compat("api.TextDecoder")}}

### `TextEncoder`

{{Compat("api.TextEncoder")}}
