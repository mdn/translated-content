---
title: 語法
slug: Web/CSS/Guides/Syntax/Introduction
---

串接式樣式表 ([CSS](/zh-TW/docs/Web/CSS)) 語言的基礎目標是是讓瀏覽器引擎用特定的功能將元素寫在頁面上，像是顏色、位置與裝飾。CSS 語法反映出了目的，而它的基本組成為：

- **屬性**為人可閱讀的識別碼，定義使用哪項功能。
- **參數**描述了引擎必須如何處理這項功能。每個屬性都有一套有效的參數，由形式的文法與語意所定義，並由瀏覽器引擎執行。

## CSS 宣告

設定特定參數值給 CSS 屬性是 CSS 語言的核心功能。一對屬性與參數叫做**宣告**，而為了適當的排版與套用樣式，任何 CSS 引擎會演算每個頁面上的元素該套用哪個宣告。

在 CSS 中屬性與參數都預設為不區分大小寫。它們由冒號區隔，'`:`' (`U+003A COLON`)，而在屬性與參數前、中間與後面並不需要有空白，空白會被忽略。

![css syntax - declaration.png](css_syntax_-_declaration.png)

在 CSS 中有超過[100 種不同的屬性](/zh-TW/docs/Web/CSS/Reference)與接近無限個不同的參數。並非所有的屬性與參數組都是被准許的，且每個屬性定義了哪些是有效的參數。當一個參數對屬性無效的時候，宣告會被認為是無效的且會完全被 CSS 引擎忽略。

## CSS 宣告區塊

Declarations are grouped in **blocks**, that is in a structure delimited by an opening brace, '`{`' (`U+007B LEFT CURLY BRACKET`), and a closing one, '`}`' (`U+007D RIGHT CURLY BRACKET`). Blocks sometimes can be nested, so opening and closing braces must be matched.

![css syntax - block.png](css_syntax_-_block.png)

Such blocks are naturally called **declaration blocks** and declarations inside them are separated by a semi-colon, '`;`' (`U+003B SEMICOLON`). A declaration block may be empty, that is containing null declaration. White spaces around declarations are ignored. The last declaration of a block doesn't need to be terminated by a semi-colon, though it is often considered _good style_ to do it as it prevents forgetting to add it when extending the block with another declaration.

![css syntax - declarations block.png](declaration-block.png)

> [!NOTE]
> The content of a CSS declaration block, that is a list of semi-colon-separated declarations, without the initial and closing braces, can be put inside an HTML [`style`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#style) attribute.

## CSS rulesets

If style sheets could only apply a declaration to each element of a Web page, they would be pretty useless. The real goal is to apply different declarations to different parts of the document.

CSS allows this by associating conditions with declarations blocks. Each (valid) declaration block is preceded by one or more comma-separated **selectors** which are conditions selecting some elements of the page. The pair selector group-declarations block is called a **ruleset**, or often simply a **rule**.

![css syntax - ruleset.png](ruleset.png)

As an element of the page may be matched by several selectors, and therefore by several rules potentially containing a given property several times, with different values, the CSS standard defines which one has precedence over the other and must be applied: this is called the [cascade](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) algorithm.

> [!NOTE]
> It is important to note that even if a ruleset characterized by a group of selectors is a kind of shorthand replacing rulesets with a single selector each, this doesn't apply to the validity of the ruleset itself.
>
> This leads to an important consequence: if one single basic selector is invalid, like when using an unknown pseudo-element or pseudo-class, the whole _selector_ is invalid and therefore the entire rule is ignored (as invalid too).

## CSS statements

Rulesets are the main building blocks of a style sheet, which often consists of only a big list of them. But there is other information that a Web author wants to convey in the style sheet, like the character set, other external style sheets to import, font face or list counter descriptions and many more. It will use other and specific kinds of statements to do that.

A **statement** is a building block that begins with any non-space characters and ends at the first closing brace or semi-colon (outside a string, non-escaped and not included into another {}, () or \[] pair).

![css syntax - statements Venn diag.png](css_syntax_-_statements_venn_diag.png)

There are two kinds of statements:

- **Rulesets** (or _rules_) that, as seen, associate a collection of CSS declarations to a condition described by a selector.
- **At-rules** that start with an at sign, '`@`' (`U+0040 COMMERCIAL AT`), followed by an identifier and then continuing up the end of the statement, that is up to the next semi-colon (;) outside of a block, or the end of the next block. Each type of [at-rules](/zh-TW/docs/Web/CSS/Guides/Syntax/At-rules), defined by the identifier, may have its own internal syntax, and semantics of course. They are used to convey meta-data information (like {{ cssxref("@charset") }} or {{ cssxref("@import") }}), conditional information (like {{ cssxref("@media") }} or {{ cssxref("@document") }}), or descriptive information (like {{ cssxref("@font-face") }}).

Any statement which isn't a ruleset or an at-rule is invalid and ignored.

There is another group of statements - the **nested statements**. These are statements that can be used in a specific subset of at-rules – the _conditional group rules_. These statements only apply if a specific condition is matched: the `@media` at-rule content is applied only if the device on which the browser runs matches the expressed condition; the `@document` at-rule content is applied only if the current page matches some conditions, and so on. In CSS1 and CSS2.1, only _rulesets_ could be used inside conditional group rules. That was very restrictive and this restriction was lifted in [_CSS Conditionals Level 3_](/zh-TW/docs/Web/CSS/CSS3#Conditionals). Now, though still experimental and not supported by every browser, conditional group rules can contain a wider range of content: rulesets but also some, but not all, at-rules.

## See also

- CSS 重要概念：
  - [CSS 語法](/zh-TW/docs/Web/CSS/Guides/Syntax/Introduction)
  - [@ 規則](/zh-TW/docs/Web/CSS/Guides/Syntax/At-rules)
  - [註釋](/zh-TW/docs/Web/CSS/Guides/Syntax/Comments)
  - [優先級](/zh-TW/docs/Web/CSS/Guides/Cascade/Specificity)
  - [繼承](/zh-TW/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [盒模型](/zh-TW/docs/Web/CSS/Guides/Box_model/Introduction)
  - [佈局模式](/zh-TW/docs/Web/CSS/Layout_mode)
  - [視覺格式化模型](/zh-TW/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [外邊距合併](/zh-TW/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - 值
    - [初始值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)
    - [計算值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算值)
    - [解析值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#解析值)
    - [指定值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定值)
    - [應用值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#應用值)
    - [實際值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#實際值)

  - [特性值定義語法](/zh-TW/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [簡寫屬性](/zh-TW/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{glossary("replaced elements", "可置換元素")}}
