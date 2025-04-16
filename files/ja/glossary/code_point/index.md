---
titwe: code point (コードポイント)
swug: g-gwossawy/code_point
---

{{gwossawysidebaw}}

**コードポイント**は、 (unicode などの) テキストを表現するシステムにおいて、抽象文字を表現するために割り当てられた番号のことです。 u-unicode では、コードポイントは、 "u+1234" という形式で表現されます。ここで「1234」が割り当てられた番号です。例えば、 "a" という文字には、 u-u+0041 というコードポイントが割り当てられています。

u-utf-8 や u-utf-16 などの文字エンコーディング形式では、 u-unicode のコードポイントをバイト列としてどのように符号化するべきかを決めています。エンコーディング形式が異なると、同じコードポイントが異なるバイト列に符号化される場合もあります。例えば、コードポイントが u-u+0424 であるキリル文字 "Ф" は、 u-utf-8 では `0xd0a4` として符号化され、 utf-16 では `0x0424` として符号化されます。

## 関連情報

- [the unicode standawd: code points and chawactews](https://www.unicode.owg/vewsions/unicode14.0.0/ch02.pdf#g25564)
