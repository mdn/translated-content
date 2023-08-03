---
title: Селекторы CSS
slug: Learn/CSS/Building_blocks/Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

В {{Glossary("CSS")}}-селекторы используются для стилизации {{glossary("HTML")}} элементов на веб-странице. Существует широкий выбор CSS-селекторов, позволяющий максимально точно отбирать элементы для стилизации. В этой статье и её подстатьях мы в мельчайших подробностях рассмотрим разные их типы и увидим, как они работают.

| Необходимые знания: | Базовая компьютерная грамотность, [основное программное обеспечение](/ru/docs/Learn/Getting_started_with_the_web/Installing_basic_software), понимание [работы с файлами](/ru/docs/Learn/Getting_started_with_the_web/Dealing_with_files), базовые знания HTML (смотрите [Введение в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), и представление о том, как работает CSS (смотрите [Введение в CSS](/ru/docs/Learn/CSS/First_steps)). |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:               | Узнать, как работают CSS-селекторы.                                                                                                                                                                                                                                                                                                                                                                                                         |

## Что такое селекторы?

Вы уже встречались с селекторами. Это выражения, которые говорят браузеру, к какому элементу HTML нужно применить те или иные свойства CSS, определённые внутри блока объявления стиля.

![Some code with the h1 highlighted.](selector.png)

Ранее вы встречали несколько разных селекторов и узнали, что существуют селекторы, которые по-разному относятся к документу, — например используя элемент `h1` или класс `.special`.

В CSS селекторы определяются в спецификации CSS-селекторов; как и другие части CSS, нужно поддерживать их работу в браузерах. Большинство селекторов, которые вы встретите, определены в [Спецификации селекторов 3 уровня](https://www.w3.org/TR/selectors-3/), где вы сможете найти всю информацию о поддержке селекторов в браузерах.

## Несколько селекторов

Несколько селекторов, использующих одни и те же таблицы стилей, можно объединить в _лист селекторов_: правило будет добавлено к каждому селектору. К примеру, у меня есть одинаковые правила для заголовка `h1` и класса `.special`; я могу написать их так:

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

А могу написать короче — просто отделив селекторы запятыми:

```css-nolint
h1, .special {
  color: blue;
}
```

Пробел можно вставлять до или после запятой. Ещё удобнее писать каждый селектор с новой строки:

```css
h1,
.special {
  color: blue;
}
```

В упражнении ниже объедините два селектора в одном правиле. Результат должен остаться таким же.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

При объединении селекторов таким образом, при условии если хоть один селектор будет недействительным, всё правило будет пропущено.

В примере ниже правило для селектора класса не будет работать, в то время как `h1` будет стилизован.

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Но если мы объединим селекторы, правило не применится ни к `h1`, ни к классу: оно считается недействительным.

```css
h1,
..special {
  color: blue;
}
```

## Типы селекторов

Понимание того, какой именно селектор вам нужен, очень помогает подобрать подходящий элемент. Сейчас мы разберём разные виды селекторов.

### Селекторы тегов, классов и идентификаторов

К этой группе относятся селекторы HTML-элементов, таких как `<h1>`.

```css
h1 {
}
```

К группе относятся и селекторы классов:

```css
.box {
}
```

или селекторы идентификаторов (ID):

```css
#unique {
}
```

### Селекторы атрибутов

Эта группа селекторов позволяет выбирать селекторы, основываясь на _наличии_ у них конкретного атрибута элемента:

```css
a[title] {
}
```

или основываясь на _значении_ атрибута:

```css
a[href="https://example.com"]
{
}
```

### Псевдоклассы, псевдоэлементы

К этой группе относятся псевдоклассы, которые стилизуют определённое состояние элемента. Псевдокласс `:hover`, например, применяет правило, только если на элемент наведён курсор мыши

```css
a:hover {
}
```

К группе ещё относятся псевдоэлементы, которые выбирают определённую часть элемента (вместо целого элемента). Например, `::first-line` всегда выбирает первую строку внутри элемента (абзаца `<p>` в нашем случае), действуя, как если бы тег `<span>` оборачивал первую строку, а затем был стилизован.

```css
p::first-line {
}
```

### Комбинаторы

И последняя группа селекторов: она позволяет объединять селекторы, чтобы было легче находить конкретные элементы внутри документа. В следующем примере мы отыскали дочерний элемент `<article>` с помощью комбинатора дочерних элементов (`>`):

```css
article > p {
}
```

## Продолжение

Ниже можно просмотреть таблицу различных видов селекторов с соответствующими ссылками, или вы можете двинуться дальше: нас ждут [селекторы тегов, классов и идентификаторов](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

## Справка о селекторах

В таблице ниже — доступные сейчас селекторы, а также ссылки к страницам, где рассказывается, как использовать каждый из них. Я также добавил ссылки на страницы MDN для каждого селектора, чтобы вы могли проверить, поддерживаются ли они браузерами.

| Селектор                                                                   | Пример              | Руководство                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Селектор по типу](/ru/docs/Web/CSS/Type_selectors)                        | `h1 { }`            | [Селектор по типу](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#%d0%a1%d0%b5%d0%bb%d0%b5%d0%ba%d1%82%d0%be%d1%80%d1%8b_%d0%bf%d0%be_%d1%82%d0%b8%d0%bf%d1%83)                                          |
| [Универсальный селектор](/ru/docs/Web/CSS/Universal_selectors)             | `* { }`             | [Универсальный селектор](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#%d0%a3%d0%bd%d0%b8%d0%b2%d0%b5%d1%80%d1%81%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9_%d1%81%d0%b5%d0%bb%d0%b5%d0%ba%d1%82%d0%be%d1%80) |
| [Селектор класса](/ru/docs/Web/CSS/Class_selectors)                        | `.box { }`          | [Селекторы классов](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#%d0%a1%d0%b5%d0%bb%d0%b5%d0%ba%d1%82%d0%be%d1%80%d1%8b_%d0%ba%d0%bb%d0%b0%d1%81%d1%81%d0%be%d0%b2)                                    |
| [Селектор ID](/ru/docs/Web/CSS/ID_selectors)                               | `#unique { }`       | [Селекторы по ID](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#%d0%a1%d0%b5%d0%bb%d0%b5%d0%ba%d1%82%d0%be%d1%80%d1%8b_%d0%bf%d0%be_id)                                                                 |
| [Селектор атрибутов](/ru/docs/Web/CSS/Attribute_selectors)                 | `a[title] { }`      | [Селекторы атрибутов](/ru/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)                                                                                                                                            |
| [Селектор псевдоклассов](/ru/docs/Web/CSS/Pseudo-classes)                  | `p:first-child { }` | [Псевдоклассы](/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%d0%a7%d1%82%d0%be_%d1%82%d0%b0%d0%ba%d0%be%d0%b5_%d0%bf%d1%81%d0%b5%d0%b2%d0%b4%d0%be%d0%ba%d0%bb%d0%b0%d1%81%d1%81)               |
| [Селектор псевдоэлементов](/ru/docs/Web/CSS/Pseudo-elements)               | `p::first-line { }` | [Псевдоэлементы](/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%d0%a7%d1%82%d0%be_%d1%82%d0%b0%d0%ba%d0%be%d0%b5_%d0%bf%d1%81%d0%b5%d0%b2%d0%b4%d0%be%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82) |
| [Селектор потомков](/ru/docs/Web/CSS/Descendant_combinator)                | `article p`         | [Селектор потомков](/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators#%d0%a1%d0%b5%d0%bb%d0%b5%d0%ba%d1%82%d0%be%d1%80_%d0%bf%d0%be%d1%82%d0%be%d0%bc%d0%ba%d0%be%d0%b2)                                                    |
| [Селектор дочерних элементов](/ru/docs/Web/CSS/Child_combinator)           | `article > p`       | [Селектор дочерних элементов](/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators#%d0%9a%d0%be%d0%bc%d0%b1%d0%b8%d0%bd%d0%b0%d1%82%d0%be%d1%80)                                                                               |
| [Смежные селекторы](/ru/docs/Web/CSS/Adjacent_sibling_combinator)          | `h1 + p`            | [Смежные селекторы](/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators#%d0%a1%d0%bc%d0%b5%d0%b6%d0%bd%d1%8b%d0%b5_%d1%81%d0%b5%d0%bb%d0%b5%d0%ba%d1%82%d0%be%d1%80%d1%8b)                                                    |
| [Селектор братских элементов](/ru/docs/Web/CSS/General_sibling_combinator) | `h1 ~ p`            | [Селектор братских элементов](/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators#%d0%91%d1%80%d0%b0%d1%82%d1%81%d0%ba%d0%b8%d0%b5_%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d1%8b)                                          |

## В этом модуле

1. [Каскад и наследование](/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [CSS-селекторы](/ru/docs/Learn/CSS/Building_blocks/Selectors)

   - [Селекторы по типу, классу и идентификатору](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
   - [Селекторы атрибутов](/ru/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
   - [Псевдоклассы, псевдоэлементы](/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
   - [Комбинации селекторов](/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [Блоки в CSS](/ru/docs/Learn/CSS/Building_blocks/The_box_model)
4. [Фон и границы](/ru/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [Изменение направления текста](/ru/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [Перекрытие содержимого](/ru/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [Значения свойств CSS](/ru/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [Изменение размеров в CSS](/ru/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [Изображения, формы и прочие медиа-элементы](/ru/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Стилизация таблиц](/ru/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Отладка CSS](/ru/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Организация CSS-кода](/ru/docs/Learn/CSS/Building_blocks/Organizing)
