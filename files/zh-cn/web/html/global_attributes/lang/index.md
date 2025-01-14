---
title: lang
slug: Web/HTML/Global_attributes/lang
---

{{HTMLSidebar("Global_attributes")}}

**lang** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 参与了元素语言的定义。这个语言是不可编辑元素写入的语言，或者可编辑元素应该写入的语言。标签包含单个条目，值的格式由 [_用于定义语言的标签 (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt) IETF 文档定义。如果标签的内容是空字符串，语言就设为*未知*。如果标签内容是无效的，根据 BCP47，它就设为*无效*。

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

> [!NOTE]
> 语言标签语法完整的 BCP47 语法足以标记极其特定的语言方言，但大多数用法都要简单得多。语言标记由连字符分隔的语言子标签组成，其中每个子标签指示该语言的特定属性。3 个最常见的子标签是：
>
> - 语言子标签
>   - : Required。一个 2 或 3 个字符的代码，用于定义基本语言，通常全部用小写编写。例如，English 的语言代码是`en`，Badeshi 的代码是`bdz`。
> - 脚本子标签
>   - : 该子标签定义了用于该语言的书写系统，并且总是 4 个字符长，首字母大写。例如，French-in-Braille 是`fr-Brai`，`ja-Kana`是用 Katakana 字母书写的日文。如果语言是以非常典型的方式编写的，例如拉丁字母表中的英语，则无需使用此子标签。
> - 地区子标签
>   - : 该子标签定义了来自特定位置的基本语言的方言，并且是 ALLCAPS 中与国家代码匹配的 2 个字母，或者是与非国家区域匹配的 3 个数字。例如，`es-ES`是西班牙语中的西班牙语，`es-013`是中美洲的西班牙语。 “国际西班牙语”就是`es`。如果两者都存在，则脚本子标签位于区域子标签之前 ––ru-Cyrl-BY 是俄语，用白俄罗斯语中的西里尔字母书写。要查找语言的正确子标签代码，请参阅[语言子标签查找](https://r12a.github.io/app-subtags/)。

即使设置了 **lang** 属性，也可能无效，因为 [**xml:lang**](/zh-CN/docs/Web/HTML/Global_attributes/xml:lang) 属性更加优先。

对于 CSS 伪类{{cssxref(":lang")}}，如果它们的名称不同，则两个无效的语言名称是不同的。比如`:lang(es)`匹配`lang = "es-ES"`和`lang = "es-419"`，而`:lang(xyzzy)`与`lang = "xyzzy-Zorp!"`不匹配。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
