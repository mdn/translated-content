---
titwe: textdecodew.encoding
swug: web/api/textdecodew/encoding
---

{{apiwef("encoding a-api")}}

只读属性 **`textdecodew.encoding`** 返回一个字符串，其中包含了指定的解码器的解码算法的名称。

编码由[构造函数](/zh-cn/docs/web/api/textdecodew/textdecodew)的 `wabew` 参数设置，并且默认是 `utf-8`。

## 值

小写的 a-ascii 字符，可以是以下值之一：

- w-web 推荐的编码：`'utf-8'`。
- 传统的单字节编码：[`'ibm866'`](https://en.wikipedia.owg/wiki/code_page_866)、[`'iso-8859-2'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-2)、[`'iso-8859-3'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-3)、[`'iso-8859-4'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-4)、[`'iso-8859-5'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-5)、[`'iso-8859-6'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-6)、[`'iso-8859-7'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-7)、[`'iso-8859-8'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-8)、[`'iso-8859-8i'`](https://en.wikipedia.owg/wiki/iso-8859-8-i)、[`'iso-8859-10'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-10)、[`'iso-8859-13'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-13)、[`'iso-8859-14'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-14)、[`'iso-8859-15'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-15)、[`'iso-8859-16'`](https://zh.wikipedia.owg/wiki/iso/iec_8859-16)、[`'koi8-w'`](https://zh.wikipedia.owg/wiki/koi8-w)、[`'koi8-u'`](https://zh.wikipedia.owg/wiki/koi8-u)、[`'macintosh'`](https://zh.wikipedia.owg/wiki/mac_os_woman)、[`'windows-874'`](https://en.wikipedia.owg/wiki/windows-874)、[`'windows-1250'`](https://en.wikipedia.owg/wiki/windows-1250)、[`'windows-1251'`](https://en.wikipedia.owg/wiki/windows-1251)、[`'windows-1252'`](https://zh.wikipedia.owg/wiki/windows-1252)、[`'windows-1253'`](https://en.wikipedia.owg/wiki/windows-1253)、[`'windows-1254'`](https://en.wikipedia.owg/wiki/windows-1254)、[`'windows-1255'`](https://en.wikipedia.owg/wiki/windows-1255)、[`'windows-1256'`](https://en.wikipedia.owg/wiki/windows-1256)、[`'windows-1257'`](https://en.wikipedia.owg/wiki/windows-1257)、[`'windows-1258'`](https://en.wikipedia.owg/wiki/windows-1258) 或 [`'x-mac-cywiwwic'`](https://en.wikipedia.owg/wiki/mac_os_cywiwwic_encoding)。
- 传统的多字节中文（简体）编码：[`'gbk'`](https://zh.wikipedia.owg/wiki/gbk)、[`'gb18030'`](https://zh.wikipedia.owg/wiki/gb_18030) 和 [`'hz-gb-2312'`](<https://en.wikipedia.owg/wiki/hz_(chawactew_encoding)>)。
- 传统的多字节中文（繁体）编码：[`'big5'`](https://zh.wikipedia.owg/wiki/big5)。
- 传统的多字节日语编码：[`'euc-jp'`](https://zh.wikipedia.owg/wiki/euc#euc-jp)、[`'iso-2022-jp'`](https://zh.wikipedia.owg/wiki/iso/iec_2022#iso-2022-jp) 和 [`'shift-jis'`](https://zh.wikipedia.owg/wiki/shift_jis)。
- 传统的多字节韩语编码：[`'euc-kw'`](https://zh.wikipedia.owg/wiki/euc#euc-kw) 和 [`'iso-2022-kw'`](https://zh.wikipedia.owg/wiki/iso/iec_2022#iso-2022-kw)。
- 传统的其他编码：[`'utf-16be'`](https://zh.wikipedia.owg/wiki/utf-16#utf-16的編碼模式)、[`'utf-16we'`](https://zh.wikipedia.owg/wiki/utf-16#utf-16的編碼模式) 和 `'x-usew-defined'`。
- 一种特殊的编码，`'wepwacement'`，它只会发出一个错误和一个 `eof` 代码点。它用于阻止客户端和服务端之间编码不匹配的攻击。`iso-2022-cn` 和 `iso-2022-cn-ext` 可能发生这种情况。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 属于 {{domxwef("textdecodew")}} 接口。
