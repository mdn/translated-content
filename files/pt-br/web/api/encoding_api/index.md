---
title: Encoding API
slug: Web/API/Encoding_API
translation_of: Web/API/Encoding_API
---
{{DefaultAPISidebar("Encoding API")}}{{SeeCompatTable}}

O **Encoding API** providência uma mecânismo para tratar textos em vários tipos de {{Glossary("character encoding", "encode de caracteres")}}, incluindo encodes legados non-{{Glossary("UTF-8")}}

A API provém de quatro interfaces: {{domxref("TextDecoder")}}, {{domxref("TextEncoder")}}, {{domxref("TextDecoderStream")}} e {{domxref("TextEncoderStream")}}.

## Interfaces

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## Tutoriais & ferramentas

- O [shim](http://code.google.com/p/stringencoding/) permite usar essa interface em navegadores que não a suportam.
- [`StringView`](/en-US/Add-ons/Code_snippets/StringView) – Um C-like reperesentação de strings baseados em arrays tipados

| Specification                    | Status                       | Comment            |
| -------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("Encoding")}} | {{Spec2("Encoding")}} | Definição inicial. |

## Compatibilidade com navegadores

### `TextDecoder`

{{Compat("api.TextDecoder")}}

### `TextEncoder`

{{Compat("api.TextEncoder")}}
