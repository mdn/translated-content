---
title: CSS セレクターと XPath の比較
slug: Web/XML/XPath/Guides/Comparison_with_CSS_selectors
original_slug: Web/XPath/Guides/Comparison_with_CSS_selectors
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{XsltSidebar}}

この記事では、ウェブ開発者が適材適所のツールを選択できるように、CSSセレクターとXPathの違いを説明することを目的としています。

| [XPath 機能](/ja/docs/Web/XML/XPath)                                                                                                                                                                        | [相当する CSS](/ja/docs/Web/CSS/Guides/Selectors)                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ancestor`](/ja/docs/Web/XML/XPath/Reference/Axes#ancestor), [`parent`](/ja/docs/Web/XML/XPath/Reference/Axes#parent) or [`preceding-sibling`](/ja/docs/Web/XML/XPath/Reference/Axes#preceding-sibling) 軸 | {{CSSxRef(":has",":has()")}} セレクター {{experimental_inline}}                                                                                                        |
| [`attribute`](/ja/docs/Web/XML/XPath/Reference/Axes#attribute) 軸                                                                                                                                           | [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)                                                                                             |
| [`child`](/ja/docs/Web/XML/XPath/Reference/Axes#child) 軸                                                                                                                                                   | [子結合子](/ja/docs/Web/CSS/Reference/Selectors/Child_combinator)                                                                                                      |
| [`descendant`](/ja/docs/Web/XML/XPath/Reference/Axes#descendant) 軸                                                                                                                                         | [子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)                                                                                               |
| [`following-sibling`](/ja/docs/Web/XML/XPath/Reference/Axes#following-sibling) 軸                                                                                                                           | [後続兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)または[次兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) |
| [`self`](/ja/docs/Web/XML/XPath/Reference/Axes#self) 軸                                                                                                                                                     | {{CSSxRef(":scope")}} または {{CSSxRef(":host")}} セレクター＾                                                                                                         |
