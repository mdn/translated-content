---
title: 实体
slug: Glossary/Entity
l10n:
  sourceCommit: 4c84a7d7e7ae2b79562bc6d2e7c8861b254af847
---

{{GlossarySidebar}}

{{glossary("HTML")}} **实体**是一段以连字号（`&`）开头、以分号（`;`）结尾的文本（字符串）。HTML 实体常用于显示保留字符（这些字符会被解析为 HTML 代码）和不可见的字符（如“不换行空格”）。你也可以用 HTML 字符实体来代替其他难以用标准键盘键入的字符。

> [!NOTE]
> 很多字符都有易于记忆的实体。例如版权符号（`©`）的实体是 `&copy;`。对于没那么容易记住的字符，例如 `&#8212;` 或 `&#x2014;`，你可以查看[参照表](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)或使用[解码工具](https://mothereff.in/html-entities)。

## 保留字符

有一些特别的字符被保留用于 HTML 中，这意味着浏览器会将这些字符解析为 HTML 代码。例如，如果你使用小于号（`<`），浏览器会将其后的文本解析为{{Glossary("tag", "标签")}}。

为了将这些字符显示为文本，需要使用相应的字符实体来代替它们，如下表所示。

| 字符 | 实体      | 说明                                              |
| ---- | --------- | ------------------------------------------------- |
| &    | `&amp;`   | 解析为实体或字符引用的开头                        |
| <    | `&lt;`    | 解析为 {{Glossary('tag')}} 的开头                 |
| >    | `&gt;`    | 解析为 {{Glossary('tag')}} 的结尾                 |
| "    | `&quot;`  | 解析为 {{Glossary('attribute')}} 的值的开头和结尾 |
|      | `&nbsp;`  | 解析为不换行空格                                  |
| –    | `&ndash;` | 解析为短破折号（等于 em 单位的一半宽度）          |
| —    | `&mdash;` | 解析为长破折号（等于 "m" 字符的宽度）             |
| ©   | `&copy;`  | 解析为版权符号                                    |
| ®   | `&reg;`   | 解析为注册商标符号                                |
| ™   | `&trade;` | 解析为商标符号                                    |
| ≈    | `&asymp;` | 解析为近似等于符号                                |
| ≠    | `&ne;`    | 解析为不等于符号                                  |
| £    | `&pound;` | 解析为英镑符号                                    |
| €    | `&euro;`  | 解析为欧元符号                                    |
| °    | `&deg;`   | 解析为度符号                                      |

## 参见

- [字符实体的官方列表](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
