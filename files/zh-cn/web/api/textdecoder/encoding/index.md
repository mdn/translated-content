---
title: TextDecoder.encoding
slug: Web/API/TextDecoder/encoding
---

{{APIRef("Encoding API")}}

只读属性 **`TextDecoder.encoding`** 返回一个字符串，其中包含了指定的解码器的解码算法的名称。

编码由[构造函数](/zh-CN/docs/Web/API/TextDecoder/TextDecoder)的 `label` 参数设置，并且默认是 `utf-8`。

## 值

小写的 ASCII 字符，可以是以下值之一：

- Web 推荐的编码：`'utf-8'`。
- 传统的单字节编码：
  [`'ibm866'`](https://zh.wikipedia.org/wiki/Code_page_866)、
  [`'iso-8859-2'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-2)、
  [`'iso-8859-3'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-3)、
  [`'iso-8859-4'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-4)、
  [`'iso-8859-5'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-5)、
  [`'iso-8859-6'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-6)、
  [`'iso-8859-7'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-7)、
  [`'iso-8859-8'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-8)、
  [`'iso-8859-8i'`](https://zh.wikipedia.org/wiki/ISO-8859-8-I)、
  [`'iso-8859-10'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-10)、
  [`'iso-8859-13'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-13)、
  [`'iso-8859-14'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-14)、
  [`'iso-8859-15'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-15)、
  [`'iso-8859-16'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-16)、
  [`'koi8-r'`](https://zh.wikipedia.org/wiki/KOI8-R)、
  [`'koi8-u'`](https://zh.wikipedia.org/wiki/KOI8-U)、
  [`'macintosh'`](https://zh.wikipedia.org/wiki/Mac_OS_Roman)、
  [`'windows-874'`](https://zh.wikipedia.org/wiki/Windows-874)、
  [`'windows-1250'`](https://zh.wikipedia.org/wiki/Windows-1250)、
  [`'windows-1251'`](https://zh.wikipedia.org/wiki/Windows-1251)、
  [`'windows-1252'`](https://zh.wikipedia.org/wiki/Windows-1252)、
  [`'windows-1253'`](https://zh.wikipedia.org/wiki/Windows-1253)、
  [`'windows-1254'`](https://zh.wikipedia.org/wiki/Windows-1254)、
  [`'windows-1255'`](https://zh.wikipedia.org/wiki/Windows-1255)、
  [`'windows-1256'`](https://zh.wikipedia.org/wiki/Windows-1256)、
  [`'windows-1257'`](https://zh.wikipedia.org/wiki/Windows-1257)、
  [`'windows-1258'`](https://zh.wikipedia.org/wiki/Windows-1258) 或
  [`'x-mac-cyrillic'`](https://zh.wikipedia.org/wiki/Macintosh_Cyrillic_encoding)。
- 传统的多字节中文（简体）编码：
  [`'gbk'`](https://zh.wikipedia.org/wiki/GBK)、
  [`'gb18030'`](https://zh.wikipedia.org/wiki/GB_18030) 和
  [`'hz-gb-2312'`](<https://zh.wikipedia.org/wiki/HZ_(character_encoding)>)。
- 传统的多字节中文（繁体）编码：
  [`'big5'`](https://zh.wikipedia.org/wiki/Big5)。
- 传统的多字节日语编码：
  [`'euc-jp'`](https://zh.wikipedia.org/wiki/Extended_Unix_Code#EUC-JP)、
  [`'iso-2022-jp'`](https://zh.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-JP)
  和 [`'shift-jis'`](https://zh.wikipedia.org/wiki/Shift_JIS)。
- 传统的多字节韩语编码：
  [`'euc-kr'`](https://zh.wikipedia.org/wiki/Extended_Unix_Code#EUC-KR) 和
  [`'iso-2022-kr'`](https://zh.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-KR)。
- 传统的其他编码：
  [`'utf-16be'`](https://zh.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes)、
  [`'utf-16le'`](https://zh.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes)
  和 `'x-user-defined'`。
- 一种特殊的编码，`'replacement'`，它只会发出一个错误和一个 `EOF` 代码点。它用于阻止客户端和服务端之间编码不匹配的攻击。`ISO-2022-CN` 和 `ISO-2022-CN-ext` 可能发生这种情况。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextDecoder")}} 接口。
