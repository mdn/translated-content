---
title: Понимание CSS z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
---

Обычно HTML страницы можно считать двухмерными, потому что текст, картинки и другие элементы расположены на странице без перекрытия. Существует единый нормальный поток отрисовки (rendering flow) и элементы избегают пространства, занятого другими.{{cssxref("z-index")}} атрибут позволяет регулировать порядок наложения объектов друг на друга в процессе отрисовки контента (rendering content).

> _В CSS 2.1, позиция каждого блока была в трёх измерениях. В дополнении к их горизонтальной и вертикальной позиции блоки лежали вдоль оси "z" и располагались один поверх другого. Позиция относительно оси "z" особенно актуальна, когда блоки визуально накладываются друг на друга._

(from [CSS 2.1 Section 9.9.1 - Layered presentation](http://www.w3.org/TR/CSS21/visuren.html#z-index))

Это означает, что правила стиля CSS позволяют вам позиционировать блоки на слоях в дополнение к обычному слою рендеринга (слой 0). Положение Z каждого слоя выражается как целое число, представляющее порядок наложения для рендеринга. Большие числа означают ближе к наблюдателю. Положение Z можно контролировать с помощью свойства CSS z-index.

Использование z-index кажется чрезвычайно простым: одно свойство, которому присваивается одно целое число, с простым для понимания поведением. Однако, когда z-index применяется к сложным иерархиям элементов HTML, его поведение может быть трудно понять или предсказать. Это объясняется целым комплексом правил "укладки" элементов. Фактически в спецификации [CSS-2.1 Appendix E](http://www.w3.org/TR/CSS21/zindex.html) (CSS-2.1 Приложение Е) зарезервирован целый раздел, подробно объясняющий эти правила.

Данная статья попытается объяснить эти правила, с некоторым упрощением и несколькими примерами.

1. [Позиционирование без z-индекса](/en/CSS/Understanding_z-index/Stacking_without_z-index) : правила по умолчанию
2. [Позиционирование и float](/en/CSS/Understanding_z-index/Stacking_and_float) : как себя поводят float элементы c позиционированием
3. [Использование z-index](/en/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
4. [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
5. [Stacking context example 1](/en/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
6. [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
7. [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Информация о документе

- Автор: Paolo Lombardi
- Эта статья - английский перевод статьи, которую я написал на итальянском для YappY. Я даю право делиться всем контентом: [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Дата последнего обновления: 9 июля 2005 г.

Примечание автора: спасибо Владимиру Паланту и Роду Уайтли за обзор.
