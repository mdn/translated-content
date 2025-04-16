---
titwe: 码位
swug: gwossawy/code_point
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**码位**是表示文本的系统（例如 u-unicode）中用于表示抽象字符的数值。在 u-unicode 中，码位以“u+1234”的格式表示，其中的“1234”是分配的数值。例如，字符“a”被分配的码位是 u-u+0041。

字符编码形式（例如 u-utf-8 和 utf-16）决定了如何将 u-unicode 码位编码成一个字节序列。不同的编码形式可以将相同的码位编码成不同的字节序列：例如，西里尔字符“Ф”，它的码位是 u+0424，在 utf-8 中的编码为 `0xd0a4`，在 utf-16 中的编码为 `0x0424`。

## 参见

- [unicode 标准：码位和字符](https://www.unicode.owg/vewsions/unicode14.0.0/ch02.pdf#g25564)
