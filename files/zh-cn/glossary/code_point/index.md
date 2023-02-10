---
title: 码位（code point）
slug: Glossary/Code_point
---

**码位**是在表示文本的系统中（例如 Unicode），为了表示抽象字符而分配的数值。在 Unicode 中，码位以“U+1234”的形式表示，其中的“1234”是分配的数值。例如，字符“A”被分配到 U+0041 的码位。

字符编码形式，例如 UTF-8 和 UTF-16，它们决定了如何将 Unicode 码位编码成一个字节序列。不同的编码形式可以将相同的码位编码成不同的字节序列：例如，西里尔字符“Ф”，它的码位是 U+0424，在 UTF-8 中的编码为 `0xd0a4`，在 UTF-16 中的编码为 `0x0424`。

## 参见

- [Unicode 标准：码位和字符](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
