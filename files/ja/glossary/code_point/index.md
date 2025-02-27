---
title: Code point (コードポイント)
slug: Glossary/Code_point
---

{{GlossarySidebar}}

**コードポイント**は、 (Unicode などの) テキストを表現するシステムにおいて、抽象文字を表現するために割り当てられた番号のことです。 Unicode では、コードポイントは、 "U+1234" という形式で表現されます。ここで「1234」が割り当てられた番号です。例えば、 "A" という文字には、 U+0041 というコードポイントが割り当てられています。

UTF-8 や UTF-16 などの文字エンコーディング形式では、 Unicode のコードポイントをバイト列としてどのように符号化するべきかを決めています。エンコーディング形式が異なると、同じコードポイントが異なるバイト列に符号化される場合もあります。例えば、コードポイントが U+0424 であるキリル文字 "Ф" は、 UTF-8 では `0xd0a4` として符号化され、 UTF-16 では `0x0424` として符号化されます。

## 関連情報

- [The Unicode Standard: Code Points and Characters](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
