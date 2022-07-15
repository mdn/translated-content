---
title: TextDecoder.encoding
slug: Web/API/TextDecoder/encoding
page-type: web-api-instance-property
tags:
  - API
  - Encoding
  - Experimental
  - Property
  - Read-only
  - TextDecoder
translation_of: Web/api/TextDecoder/encoding
---
{{APIRef("Encoding API")}}{{SeeCompatTable}}

只读属性 **`TextDecoder.encoding`** 返回一个字符串，其中包含了指定的 decoder 解码算法的名称。

它可以是以下值之一：

- Web 推荐的编码： `'utf-8'`。
- 传统的单字节编码：
  `{{interwiki('wikipedia', 'Code_page_866', "'ibm866'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-2', "'iso-8859-2'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-3', "'iso-8859-3'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-4', "'iso-8859-4'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-5', "'iso-8859-5'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-6', "'iso-8859-6'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-7', "'iso-8859-7'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-8', "'iso-8859-8'")}}'`、
  `{{interwiki('wikipedia', 'ISO-8859-8-I', "'iso-8859-8i'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-10', "'iso-8859-10'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-13', "'iso-8859-13'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-14', "'iso-8859-14'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-15', "'iso-8859-15'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_8859-16', "'iso-8859-16'")}}`、
  `{{interwiki('wikipedia', 'KOI8-R', "'koi8-r'")}}`、
  `{{interwiki('wikipedia', 'KOI8-U', "'koi8-u'")}}`、
  `{{interwiki('wikipedia', 'Mac OS Roman', "'macintosh'")}}`、
  `{{interwiki('wikipedia', 'Windows-874', "'windows-874'")}}`、
  `{{interwiki('wikipedia', 'Windows-1250', "'windows-1250'")}}`、
  `{{interwiki('wikipedia', 'Windows-1251', "'windows-1251'")}}`、
  `{{interwiki('wikipedia', 'Windows-1252', "'windows-1252'")}}`、
  `{{interwiki('wikipedia', 'Windows-1253', "'windows-1253'")}}`、
  `{{interwiki('wikipedia', 'Windows-1254', "'windows-1254'")}}`、
  `{{interwiki('wikipedia', 'Windows-1255', "'windows-1255'")}}`、
  `{{interwiki('wikipedia', 'Windows-1256', "'windows-1256'")}}`、
  `{{interwiki('wikipedia', 'Windows-1257', "'windows-1257'")}}`、
  `{{interwiki('wikipedia', 'Windows-1258', "'windows-1258'")}}` 或
  `{{interwiki('wikipedia', 'Macintosh Cyrillic encoding', "'x-mac-cyrillic'")}}`。
- 传统的多字节中文（简体）编码：
  `{{interwiki('wikipedia', 'GBK', "'gbk'")}}`、
  `{{interwiki('wikipedia', 'GB_18030', "'gb18030'")}}` 和
  `{{interwiki('wikipedia', 'HZ_(character_encoding)', "'hz-gb-2312'")}}`。
- 传统的多字节中文（繁体）编码：
  `{{interwiki('wikipedia', 'Big5', "'big5'")}}`。
- 传统的多字节日语编码：
  `{{interwiki('wikipedia', 'Extended_Unix_Code#EUC-JP', "'euc-jp'")}}`、
  `{{interwiki('wikipedia', 'ISO/IEC_2022#ISO-2022-JP', "'iso-2022-jp'")}}`
  和 `{{interwiki('wikipedia', 'Shift JIS', "'shift-jis'")}}`。
- 传统的多字节韩语编码：
  `{{interwiki('wikipedia', 'Extended_Unix_Code#EUC-KR', "'euc-kr'")}}` 和
  `{{interwiki('wikipedia', 'ISO/IEC_2022#ISO-2022-KR', "'iso-2022-kr'")}}`。
- 传统的其他编码：
  `{{interwiki('wikipedia', 'UTF-16#Byte_order_encoding_schemes', "'utf-16be'")}}`、
  `{{interwiki('wikipedia', 'UTF-16#Byte_order_encoding_schemes', "'utf-16le'")}}`
  和 `'x-user-defined'`。
- 一种特殊的编码，`'replacement'`，它只会发出一个错误和一个 `EOF` 代码点。它用于阻止客户端和服务端之间编码不匹配的攻击。`ISO-2022-CN` 和 `ISO-2022-CN-ext` 可能发生这种情况。

## 值

一个字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextDecoder")}} 接口。
