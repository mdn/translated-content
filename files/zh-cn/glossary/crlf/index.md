---
title: CRLF
slug: Glossary/CRLF
---

回车符（CR）和换行符（LF）是文本文件用于标记换行的控制字符（[control characters](https://en.wikipedia.org/wiki/Control_character)）或字节码（[bytecode](https://en.wikipedia.org/wiki/Bytecode)）。

- CR = **Carriage Return**，回车符号（`\r`，十六进制 ascii 码为`0x0D`，十进制 ascii 码为 13），用于将鼠标移动到行首，并不前进至下一行。
- LF = **Line Feed**，换行符号（ `\n`, 十六进制 ascii 码为 `0x0A`，十进制 ascii 码为 10）。

紧邻的 CR 和 LF（组成 CRLF，`\r\n`，或十六进制 `0x0D0A`）将鼠标移动到下一行行首。（Windows 操作系统默认的文本换行符为 CRLF；Linux 以及 macOS 系统默认使用 LF，早期的 mac os 系统使用 CR 换行。）

## 相关链接

### General knowledge

- [Newline](https://zh.wikipedia.org/wiki/Newline#In_programming_languages) on Wikipedia
- [Carriage return](https://zh.wikipedia.org/wiki/Carriage_return#Computers) on Wikipedia
