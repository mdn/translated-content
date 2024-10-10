---
title: NDEFMessage：NDEFMessage() 构造函数
slug: Web/API/NDEFMessage/NDEFMessage
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{SecureContext_Header}}{{APIRef("Web NFC API")}}{{SeeCompatTable}}

**`NDEFMessage()`** 构造函数使用给定的 NDEF 记录创建一个新的 {{domxref("NDEFMessage")}} 对象。

## 语法

```js-nolint
new NDEFMessage(records)
```

### 参数

- `records`

  - : 包含以下成员的对象数组：

    - `data` {{optional_inline}}
      - : 包含要传输的数据；可以是字符串、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} 或嵌套记录数组之一。
    - `encoding` {{optional_inline}}
      - : 指定记录编码的字符串。
    - `id` {{optional_inline}}
      - : 开发人员为记录定义的标识符。
    - `lang` {{optional_inline}}
      - : 根据 {{RFC(5646, "用于标识语言的标记（又称 BCP 47）")}}规定的有效语言标签。
    - `mediaType` {{optional_inline}}
      - : 有效的 [MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types)。
    - `recordType`

      - : 指示存储在 `data` 中的数据类型的字符串。必须是以下值之一：

        - `"absolute-url"`

          指向数据的绝对 URL。

          `"empty"`

          - : 一个空的 {{domxref("NDEFRecord")}}。

        - `"mime"`
          - : 有效的 [MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types)。
        - `"smart-poster"`
          - : 一个由 [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) 规范定义的智能海报。
        - `"text"`
          - : 由 [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) 规范定义的文本。
        - `"unknown"`
          - : 记录类型未知。
        - `"URL"`
          - : 由 [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) 规范定义的 URL。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
