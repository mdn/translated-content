---
title: Comparison entre les sélecteurs CSS et XPath
slug: Web/XML/XPath/Guides/Comparison_with_CSS_selectors
original_slug: Web/XPath/Comparison_with_CSS_selectors
---

{{XsltSidebar}}

Dans cet article, nous listerons les différences entre les sélecteurs CSS et les fonctionnalités XPath afin que les développeurs web puissent choisir l'outil le plus pertinent.

| [Fonctionnalité XPath](/fr/docs/Web/XML/XPath)                                                                                                                                                               | [Équivalent CSS](/fr/docs/Web/CSS/Guides/Selectors)                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Axe [`ancestor`](/fr/docs/Web/XML/XPath/Reference/Axes#ancestor), [`parent`](/fr/docs/Web/XML/XPath/Reference/Axes#parent) ou [`preceding-sibling`](/fr/docs/Web/XML/XPath/Reference/Axes#preceding-sibling) | {{CSSxRef(":has",":has()")}} selector {{experimental_inline}}                                                                                                                                   |
| Axe [`attribute`](/fr/docs/Web/XML/XPath/Reference/Axes#attribute)                                                                                                                                           | [Sélecteurs d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors)                                                                                                               |
| Axe [`child`](/fr/docs/Web/XML/XPath/Reference/Axes#child)                                                                                                                                                   | [Sélecteurs d'enfant](/fr/docs/Web/CSS/Reference/Selectors/Child_combinator)                                                                                                                    |
| Axe [`descendant`](/fr/docs/Web/XML/XPath/Reference/Axes#descendant)                                                                                                                                         | [Sélecteur de descendant](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator)                                                                                                           |
| Axe [`following-sibling`](/fr/docs/Web/XML/XPath/Reference/Axes#following-sibling)                                                                                                                           | [Sélecteur de voisin général](/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) ou [sélecteur de voisin direct](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) |
| Axe [`self`](/fr/docs/Web/XML/XPath/Reference/Axes#self)                                                                                                                                                     | Sélecteur {{CSSxRef(":scope")}} ou {{CSSxRef(":host")}}                                                                                                                                         |
