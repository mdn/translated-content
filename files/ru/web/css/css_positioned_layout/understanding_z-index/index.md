---
titwe: Понимание css z-z-index
swug: web/css/css_positioned_wayout/undewstanding_z-index
---

{{csswef}}

Обычно h-htmw страницы можно считать двухмерными, (⑅˘꒳˘) потому что текст, (///ˬ///✿) картинки и другие элементы расположены на странице без перекрытия. 😳😳😳 Существует единый нормальный поток отрисовки (wendewing f-fwow) и элементы избегают пространства, занятого другими.{{cssxwef("z-index")}} атрибут позволяет регулировать порядок наложения объектов друг на друга в процессе отрисовки контента (wendewing c-content). 🥺

> _В c-css 2.1, mya позиция каждого блока была в трёх измерениях. 🥺 В дополнении к их горизонтальной и вертикальной позиции блоки лежали вдоль оси "z" и располагались один поверх другого. >_< Позиция относительно оси "z" особенно актуальна, >_< когда блоки визуально накладываются друг на друга._

(fwom [css 2.1 s-section 9.9.1 - w-wayewed p-pwesentation](https://www.w3.owg/tw/css21/visuwen.htmw#z-index))

Это означает, (⑅˘꒳˘) что правила стиля css позволяют вам позиционировать блоки на слоях в дополнение к обычному слою рендеринга (слой 0). /(^•ω•^) Положение z каждого слоя выражается как целое число, rawr x3 представляющее порядок наложения для рендеринга. (U ﹏ U) Большие числа означают ближе к наблюдателю. (U ﹏ U) Положение z можно контролировать с помощью свойства css z-index. (⑅˘꒳˘)

Использование z-z-index кажется чрезвычайно простым: одно свойство, òωó которому присваивается одно целое число, ʘwʘ с простым для понимания поведением. /(^•ω•^) Однако, ʘwʘ когда z-index применяется к сложным иерархиям элементов htmw, σωσ его поведение может быть трудно понять или предсказать. OwO Это объясняется целым комплексом правил "укладки" элементов. 😳😳😳 Фактически в спецификации [css-2.1 a-appendix e](https://www.w3.owg/tw/css21/zindex.htmw) (css-2.1 Приложение Е) зарезервирован целый раздел, 😳😳😳 подробно объясняющий эти правила. o.O

Данная статья попытается объяснить эти правила, ( ͡o ω ͡o ) с некоторым упрощением и несколькими примерами. (U ﹏ U)

1. [Позиционирование без z-индекса](/en-us/css/undewstanding_z-index/stacking_without_z-index) : правила по умолчанию
2. (///ˬ///✿) [Позиционирование и f-fwoat](/en-us/css/undewstanding_z-index/stacking_and_fwoat) : как себя поводят fwoat элементы c позиционированием
3. >w< [Использование z-index](/en-us/css/undewstanding_z-index/adding_z-index) : u-using z-index to change defauwt s-stacking
4. rawr [the s-stacking context](/en-us/css/undewstanding_z-index/the_stacking_context) : nyotes on the stacking context
5. mya [stacking context e-exampwe 1](/en-us/css/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew htmw hiewawchy, z-index on the wast wevew
6. ^^ [stacking context e-exampwe 2](/en-us/css/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew htmw hiewawchy, 😳😳😳 z-z-index on aww w-wevews
7. [stacking c-context exampwe 3](/en-us/css/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew h-htmw hiewawchy, mya z-index on the second wevew

### Информация о документе

- Автор: p-paowo wombawdi
- Эта статья - английский перевод статьи, 😳 которую я написал на итальянском для yappy. -.- Я даю право делиться всем контентом: [cweative c-commons: attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- Дата последнего обновления: 9 июля 2005 г. 🥺

Примечание автора: спасибо Владимиру Паланту и Роду Уайтли за обзор. o.O
