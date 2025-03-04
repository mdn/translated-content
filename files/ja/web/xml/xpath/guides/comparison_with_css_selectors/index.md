---
title: CSS セレクターと XPath の比較
slug: Web/XML/XPath/Guides/Comparison_with_CSS_selectors
original_slug: Web/XPath/Guides/Comparison_with_CSS_selectors
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{XsltSidebar}}

この記事では、ウェブ開発者が適材適所のツールを選択できるように、CSSセレクターとXPathの違いを説明することを目的としています。

| [XPath 機能](/ja/docs/Web/XPath)                                                                                                                                  | [相当する CSS](/ja/docs/Web/CSS/CSS_selectors)                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`ancestor`](/ja/docs/Web/XPath/Axes#ancestor), [`parent`](/ja/docs/Web/XPath/Axes#parent) or [`preceding-sibling`](/ja/docs/Web/XPath/Axes#preceding-sibling) 軸 | {{CSSxRef(":has",":has()")}} セレクター {{experimental_inline}}                                                                |
| [`attribute`](/ja/docs/Web/XPath/Axes#attribute) 軸                                                                                                               | [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)                                                                         |
| [`child`](/ja/docs/Web/XPath/Axes#child) 軸                                                                                                                       | [子結合子](/ja/docs/Web/CSS/Child_combinator)                                                                                  |
| [`descendant`](/ja/docs/Web/XPath/Axes#descendant) 軸                                                                                                             | [子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)                                                                           |
| [`following-sibling`](/ja/docs/Web/XPath/Axes#following-sibling) 軸                                                                                               | [後続兄弟結合子](/ja/docs/Web/CSS/Subsequent-sibling_combinator)または[次兄弟結合子](/ja/docs/Web/CSS/Next-sibling_combinator) |
| [`self`](/ja/docs/Web/XPath/Axes#self) 軸                                                                                                                         | {{CSSxRef(":scope")}} または {{CSSxRef(":host")}} セレクター＾                                                                 |
