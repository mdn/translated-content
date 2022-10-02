---
title: TextEncoder()
slug: Web/API/TextEncoder/TextEncoder
---

{{apiref("TextEncoder")}}{{seeCompatTable}}

The **`TextEncoder()`** 构造函数返回一个新创建的{{domxref("TextEncoder")}}对象。

## 语法

```
encoder = new TextEncoder();
```

### 参数

- TextEncoder() 从 Firefox 48 and Chrome 53 开始不再需要参数

**Note**: 在 Firefox 48 和 Chrome 53 之前，编码类型标签被接受为 TextEncoder 对象的参数，现在这两个浏览器已经删除了除 utf-8 之外的任何编码器类型的支持，以符合规范。传入 TextEncoder 构造函数的任何类型标签现在都将被忽略，并且将创建一个 utf-8 TextEncoder。

旧的参数：

| Possible values of _utfLabel_                                                                                                                                                                                                                         | Encoding                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| "`unicode-1-1-utf-8`", "`utf-8`", "`utf8`"                                                                                                                                                                                                            | `'utf-8'`                                                                        |
| "`866`", "`cp866`", "`csibm866`", "`ibm866`"                                                                                                                                                                                                          | [`'ibm866'`](https://zh.wikipedia.org/wiki/Code_page_866)                        |
| "`csisolatin2`", "`iso-8859-2`", "`iso-ir-101`", "`iso8859-2`", "`iso88592`", "`iso_8859-2`", "`iso_8859-2:1987`", "`l2`", "`latin2`"                                                                                                                 | [`'iso-8859-2'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-2)                   |
| "`csisolatin3`", "`iso-8859-3`", "`iso-ir-109`", "`iso8859-3`", "`iso88593`", "`iso_8859-3`", "`iso_8859-3:1988`", "`l3`", "`latin3`"                                                                                                                 | [`'iso-8859-3'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-3)                   |
| "`csisolatin4`", "`iso-8859-4`", "`iso-ir-110`", "`iso8859-4`", "`iso88594`", "`iso_8859-4`", "`iso_8859-4:1988`", "`l4`", "`latin4`"                                                                                                                 | [`'iso-8859-4'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-4)                   |
| "`csisolatincyrillic`", "`cyrillic`", "`iso-8859-5`", "`iso-ir-144`", "`iso88595`", "`iso_8859-5`", "`iso_8859-5:1988`"                                                                                                                               | [`'iso-8859-5'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-5)                   |
| "`arabic`", "`asmo-708`", "`csiso88596e`", "`csiso88596i`", "`csisolatinarabic`", "`ecma-114`", "`iso-8859-6`", "`iso-8859-6-e`", "`iso-8859-6-i`", "`iso-ir-127`", "`iso8859-6`", "`iso88596`", "`iso_8859-6`", "`iso_8859-6:1987`"                  | [`'iso-8859-6'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-6)                   |
| "`csisolatingreek`", "`ecma-118`", "`elot_928`", "`greek`", "`greek8`", "`iso-8859-7`", "`iso-ir-126`", "`iso8859-7`", "`iso88597`", "`iso_8859-7`", "`iso_8859-7:1987`", "`sun_eu_greek`"                                                            | [`'iso-8859-7'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-7)                   |
| "`csiso88598e`", "`csisolatinhebrew`", "`hebrew`", "`iso-8859-8`", "`iso-8859-8-e`", "`iso-ir-138`", "`iso8859-8`", "`iso88598`", "`iso_8859-8`", "`iso_8859-8:1988`", "`visual`"                                                                     | [`'iso-8859-8'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-8)                   |
| "`csiso88598i`", "`iso-8859-8-i`", "`logical`"                                                                                                                                                                                                        | [`'iso-8859-8i'`](https://zh.wikipedia.org/wiki/ISO-8859-8-I)                    |
| "`csisolatin6`", "`iso-8859-10`", "`iso-ir-157`", "`iso8859-10`", "`iso885910`", "`l6`", "`latin6`"                                                                                                                                                   | [`'iso-8859-10'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-10)                 |
| "`iso-8859-13`", "`iso8859-13`", "`iso885913`"                                                                                                                                                                                                        | [`'iso-8859-13'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-13)                 |
| "`iso-8859-14`", "`iso8859-14`", "`iso885914`"                                                                                                                                                                                                        | [`'iso-8859-14'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-14)                 |
| "`csisolatin9`", "`iso-8859-15`", "`iso8859-15`", "`iso885915`", "`l9`", "`latin9`"                                                                                                                                                                   | [`'iso-8859-15'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-15)                 |
| "`iso-8859-16`"                                                                                                                                                                                                                                       | [`'iso-8859-16'`](https://zh.wikipedia.org/wiki/ISO/IEC_8859-16)                 |
| "`cskoi8r`", "`koi`", "`koi8`", "`koi8-r`", "`koi8_r`"                                                                                                                                                                                                | [`'koi8-r'`](https://zh.wikipedia.org/wiki/KOI8-R)                               |
| "`koi8-u`"                                                                                                                                                                                                                                            | [`'koi8-u'`](https://zh.wikipedia.org/wiki/KOI8-U)                               |
| "`csmacintosh`", "`mac`", "`macintosh`", "`x-mac-roman`"                                                                                                                                                                                              | [`'macintosh'`](https://zh.wikipedia.org/wiki/Mac_OS_Roman)                      |
| "`dos-874`", "`iso-8859-11`", "`iso8859-11`", "`iso885911`", "`tis-620`", "`windows-874`"                                                                                                                                                             | [`'windows-874'`](https://zh.wikipedia.org/wiki/Windows-874)                     |
| "`cp1250`", "`windows-1250`", "`x-cp1250`"                                                                                                                                                                                                            | [`'windows-1250'`](https://zh.wikipedia.org/wiki/Windows-1250)                   |
| "`cp1251`", "`windows-1251`", "`x-cp1251`"                                                                                                                                                                                                            | [`'windows-1251'`](https://zh.wikipedia.org/wiki/Windows-1251)                   |
| "`ansi_x3.4-1968`", "`ascii`", "`cp1252`", "`cp819`", "`csisolatin1`", "`ibm819`", "`iso-8859-1`", "`iso-ir-100`", "`iso8859-1`", "`iso88591`", "`iso_8859-1`", "`iso_8859-1:1987`", "`l1`", "`latin1`", "`us-ascii`", "`windows-1252`", "`x-cp1252`" | [`'windows-1252'`](https://zh.wikipedia.org/wiki/Windows-1252)                   |
| "`cp1253`", "`windows-1253`", "`x-cp1253`"                                                                                                                                                                                                            | [`'windows-1253'`](https://zh.wikipedia.org/wiki/Windows-1253)                   |
| "`cp1254`", "`csisolatin5`", "`iso-8859-9`", "`iso-ir-148`", "`iso8859-9`", "`iso88599`", "`iso_8859-9`", "`iso_8859-9:1989`", "`l5`", "`latin5`", "`windows-1254`", "`x-cp1254`"                                                                     | [`'windows-1254'`](https://zh.wikipedia.org/wiki/Windows-1254)                   |
| "`cp1255`", "`windows-1255`", "`x-cp1255`"                                                                                                                                                                                                            | [`'windows-1255'`](https://zh.wikipedia.org/wiki/Windows-1255)                   |
| "`cp1256`", "`windows-1256`", "`x-cp1256`"                                                                                                                                                                                                            | [`'windows-1256'`](https://zh.wikipedia.org/wiki/Windows-1256)                   |
| "`cp1257`", "`windows-1257`", "`x-cp1257`"                                                                                                                                                                                                            | [`'windows-1257'`](https://zh.wikipedia.org/wiki/Windows-1257)                   |
| "`cp1258`", "`windows-1258`", "`x-cp1258`"                                                                                                                                                                                                            | [`'windows-1258'`](https://zh.wikipedia.org/wiki/Windows-1258)                   |
| "`x-mac-cyrillic`", "`x-mac-ukrainian`"                                                                                                                                                                                                               | [`'x-mac-cyrillic'`](https://zh.wikipedia.org/wiki/Macintosh_Cyrillic_encoding)  |
| "`chinese`", "`csgb2312`", "`csiso58gb231280`", "`gb2312`", "`gb_2312`", "`gb_2312-80`", "`gbk`", "`iso-ir-58`", "`x-gbk`"                                                                                                                            | [`'gbk'`](https://zh.wikipedia.org/wiki/GBK)                                     |
| "`gb18030`"                                                                                                                                                                                                                                           | [`'gb18030'`](https://zh.wikipedia.org/wiki/GB_18030)                            |
| "`hz-gb-2312`"                                                                                                                                                                                                                                        | [`'hz-gb-2312'`](<https://zh.wikipedia.org/wiki/HZ_(character_encoding)>)        |
| "`big5`", "`big5-hkscs`", "`cn-big5`", "`csbig5`", "`x-x-big5`"                                                                                                                                                                                       | [`'big5'`](https://zh.wikipedia.org/wiki/Big5)                                   |
| "`cseucpkdfmtjapanese`", "`euc-jp`", "`x-euc-jp`"                                                                                                                                                                                                     | [`'euc-jp'`](https://zh.wikipedia.org/wiki/Extended_Unix_Code#EUC-JP)            |
| "`csiso2022jp`", "`iso-2022-jp`"                                                                                                                                                                                                                      | [`'iso-2022-jp'`](https://zh.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-JP)        |
| "`csshiftjis`", "`ms_kanji`", "`shift-jis`", "`shift_jis`", "`sjis`", "`windows-31j`", "`x-sjis`"                                                                                                                                                     | [`'shift-jis'`](https://zh.wikipedia.org/wiki/Shift_JIS)                         |
| "`cseuckr`", "`csksc56011987`", "`euc-kr`", "`iso-ir-149`", "`korean`", "`ks_c_5601-1987`", "`ks_c_5601-1989`", "`ksc5601`", "`ksc_5601`", "`windows-949`"                                                                                            | [`'euc-kr'`](https://zh.wikipedia.org/wiki/Extended_Unix_Code#EUC-KR)            |
| "`csiso2022kr`", "`iso-2022-kr`"                                                                                                                                                                                                                      | [`'iso-2022-kr'`](https://zh.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-KR)        |
| "`utf-16be`"                                                                                                                                                                                                                                          | [`'utf-16be'`](https://zh.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes) |
| "`utf-16`", "`utf-16le`"                                                                                                                                                                                                                              | [`'utf-16le'`](https://zh.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes) |
| "`x-user-defined`"                                                                                                                                                                                                                                    | `'x-user-defined'`                                                               |
| "`iso-2022-cn`", "`iso-2022-cn-ext`"                                                                                                                                                                                                                  | `'replacement'`                                                                  |

## 例子

```js
var textEncoder = new TextEncoder("iso-8859-1");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- The {{domxref("TextEncoder")}} interface it belongs to。
