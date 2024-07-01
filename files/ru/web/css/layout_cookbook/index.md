---
title: CSS Layout cookbook
slug: Web/CSS/Layout_cookbook
---

{{CSSRef}}
Книга рецептов CSS объединяет примеры большинства наиболее распространённых лейаут паттернов, которые могу встретиться вам при разработке веб-сайтов.

В дополнение к представленным примерам кода, - которые вы вполне можете использовать в качестве отправной точки для своих проектов, - эти рецепты иллюстрируют нестандартные способы применения существующих лейаут (layout) спецификаций. Паттерны, представленные ниже, должны помочь вам увидеть новые варианты решения проблем, встречающихся в жизни разработчика.
**Примечание.** Если вы новичок в в работе с CSS, то сначала вы можете взглянуть на наш модуль обучения макетам CSS, так как он даст вам базовые знания, необходимые для использования приведённых здесь рецептов.

## The Recipes

| Recipe                                                                          | Description                                                                                                  | Layout Methods                                                                                                                              |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [Media Objects](/ru/docs/Web/CSS/Layout_cookbook/Media_objects)                 | A two-column box with an image on one side and descriptive text on the other, e.g. a facebook post or tweet. | [CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout), {{cssxref("float")}} fallback, {{cssxref("fit-content")}} sizing                              |
| [Columns](/ru/docs/Web/CSS/Layout_cookbook/Column_layouts)                      | When to choose multi-column layout, flexbox or grid for your columns                                         | [CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout), [Multicol](/ru/docs/Web/CSS/CSS_Columns), [Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout) |
| [Center an element](/ru/docs/Web/CSS/Layout_cookbook/Center_an_element)         | How to center an item horizontally and vertically                                                            | [Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout), [Box Alignment](/ru/docs/Web/CSS/CSS_Box_Alignment)                                    |
| [Sticky footers](/ru/docs/Web/CSS/Layout_cookbook/Sticky_footers)               | Creating a footer which sits at the bottom of the container or viewport when the content is shorter.         | [CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout), [Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout)                                           |
| [Split Navigation](/ru/docs/Web/CSS/Layout_cookbook/Split_Navigation)           | A navigation pattern where some links are visually separated from the others.                                | [Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout), {{cssxref("margin")}}                                                                  |
| [Breadcrumb Navigation](/ru/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation) | Creating a list of links to allow the visitor to navigate back up through the page hierarchy.                | [Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout)                                                                                         |

## Contribute a Recipe

As with all of MDN we would love you to contribute a recipe in the same format as the ones shown above. [See this page](/ru/docs/user:chrisdavidmills/Layout_Cookbook_Home/Contribute_a_recipe) for a template and guidelines for writing your own example.
