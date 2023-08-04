---
title: Comparison entre les sélecteurs CSS et XPath
slug: Web/XPath/Comparison_with_CSS_selectors
---

{{CSSRef("Selectors")}}{{QuickLinksWithSubpages("/fr/docs/Web/XPath")}}

Dans cet article, nous listerons les différences entre les sélecteurs CSS et les fonctionnalités XPath afin que les développeurs web puissent choisir l'outil le plus pertinent.

| [Fonctionnalité XPath](/fr/docs/Web/XPath)                                                                                                             | [Équivalent CSS](/fr/docs/Web/CSS/Sélecteurs_CSS)                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Axe [`ancestor`](/fr/docs/XPath/Axes/ancestor), [`parent`](/fr/docs/XPath/Axes/parent) ou [`preceding-sibling`](/fr/docs/XPath/Axes/preceding-sibling) | {{CSSxRef(":has",":has()")}} selector {{experimental_inline}}                                                                                               |
| Axe [`attribute`](/fr/docs/XPath/Axes/attribute)                                                                                                       | [Sélecteurs d'attribut](/fr/docs/Web/CSS/Attribute_selectors)                                                                                               |
| Axe [`child`](/fr/docs/XPath/Axes/child)                                                                                                               | [Sélecteurs d'enfant](/fr/docs/Web/CSS/Sélecteurs_enfant)                                                                                                   |
| Axe [`descendant`](/fr/docs/XPath/Axes/descendant)                                                                                                     | [Sélecteur de descendant](/fr/docs/Web/CSS/Sélecteurs_descendant)                                                                                           |
| Axe [`following-sibling`](/fr/docs/XPath/Axes/following-sibling)                                                                                       | [Sélecteur de voisin général](/fr/docs/Web/CSS/Sélecteurs_de_voisins_généraux) ou [sélecteur de voisin direct](/fr/docs/Web/CSS/Sélecteur_de_voisin_direct) |
| Axe [`self`](/fr/docs/XPath/Axes/self)                                                                                                                 | Sélecteur {{CSSxRef(":scope")}} ou {{CSSxRef(":host")}}                                                                                                     |
