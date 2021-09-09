---
title: CSS-селектор
slug: Glossary/CSS_Selector
tags:
  - CSS
  - CSS-селектор
  - HTML
  - Глоссарий
  - селектор
translation_of: Glossary/CSS_Selector
original_slug: Глоссарий/CSS_Selector
---
**CSS-селектор** это часть CSS-правила, которая позволяет вам указать, к какому элементу (элементам) применить стиль. Например:

    ***HTML***
    <div> I am inside of a div element. </div>
    <p> I am inside of a paragraph element. </p>


    ***CSS***
    div {
     color: green;
    }

    p {
     color: red;
    }

В первом CSS-правиле я выбираю элемент div и задаю его стиль (цвет текста <span class="st">—</span> зелёный). Во втором CSS-правиле выбираю элемент p и задаю красный цвет текста. Вот как выглядит результат:

<img alt="CSS selector coding results" src="https://mdn.mozillademos.org/files/13941/cssSelectorMDNGlossary.jpg" style="border: 1px solid black; height: 101px; width: 343px;">

## Смотрите также

### Основные статьи

1.  Базовые селекторы

    1.  [Селекторы по типу](/en-US/docs/Web/CSS/Type_selectors) `elementname`
    2.  [Селекторы по классу](/en-US/docs/Web/CSS/Class_selectors) `.classname`
    3.  [Селекторы по ID](/en-US/docs/Web/CSS/ID_selectors) `#idname`
    4.  [Универсальные селекторы](/en-US/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
    5.  [Атрибутивные селекторы](/en-US/docs/Web/CSS/Attribute_selectors) `[attr=value]`
    6.  [Селекторы состояния элементов](/en-US/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

2.  Группирующие селекторы

    1.  <a dir="ltr" href="/ru/docs/Web/CSS/Selector_list" lang="ru-RU">Список селекторов</a>

        `A, B`

3.  Комбинаторы

    1.  [Adjacent sibling selectors](/en-US/docs/Web/CSS/Adjacent_sibling_selectors) `A + B`
    2.  [General sibling selectors](/en-US/docs/Web/CSS/General_sibling_selectors) `A ~ B`
    3.  [Child selectors](/en-US/docs/Web/CSS/Child_selectors) `A > B`
    4.  [Descendant selectors](/en-US/docs/Web/CSS/Descendant_selectors) `A B`

4.  Псевдо

    1.  [Псевдоклассы](/en-US/docs/Web/CSS/Pseudo-classes) `:`
    2.  [Псевдоэлементы](/en-US/docs/Web/CSS/Pseudo-elements) `::`

### Техническая справка

{{SpecName("CSS3 Selectors")}}
