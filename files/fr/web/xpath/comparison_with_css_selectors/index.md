---
title: Comparison entre les sélecteurs CSS et XPath
slug: Web/XPath/Comparison_with_CSS_selectors
---

{{XsltSidebar}}

Dans cet article, nous listerons les différences entre les sélecteurs CSS et les fonctionnalités XPath afin que les développeurs web puissent choisir l'outil le plus pertinent.

| [Fonctionnalité XPath](/fr/docs/Web/XPath)                                                                                                                         | [Équivalent CSS](/fr/docs/Web/CSS/CSS_selectors)                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Axe [`ancestor`](/fr/docs/Web/XPath/Axes#ancestor), [`parent`](/fr/docs/Web/XPath/Axes#parent) ou [`preceding-sibling`](/fr/docs/Web/XPath/Axes#preceding-sibling) | {{CSSxRef(":has",":has()")}} selector {{experimental_inline}}                                                                                           |
| Axe [`attribute`](/fr/docs/Web/XPath/Axes#attribute)                                                                                                               | [Sélecteurs d'attribut](/fr/docs/Web/CSS/Attribute_selectors)                                                                                           |
| Axe [`child`](/fr/docs/Web/XPath/Axes#child)                                                                                                                       | [Sélecteurs d'enfant](/fr/docs/Web/CSS/Child_combinator)                                                                                                |
| Axe [`descendant`](/fr/docs/Web/XPath/Axes#descendant)                                                                                                             | [Sélecteur de descendant](/fr/docs/Web/CSS/Descendant_combinator)                                                                                       |
| Axe [`following-sibling`](/fr/docs/Web/XPath/Axes#following-sibling)                                                                                               | [Sélecteur de voisin général](/fr/docs/Web/CSS/Subsequent-sibling_combinator) ou [sélecteur de voisin direct](/fr/docs/Web/CSS/Next-sibling_combinator) |
| Axe [`self`](/fr/docs/Web/XPath/Axes#self)                                                                                                                         | Sélecteur {{CSSxRef(":scope")}} ou {{CSSxRef(":host")}}                                                                                                 |
