---
title: "<h1>–<h6>: HTML-элементы заголовков секций"
slug: Web/HTML/Element/Heading_Elements
---

**HTML-элементы `<h1>`–`<h6>`** представляют собой 6 уровней заголовков секций. `<h1>` это наибольший заголовок и `<h6>` - наименьший

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | [Поток контента](/ru/docs/Web/HTML/Content_categories#Flow_content), заголовок контента, явный контент.                                                                                 |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Фразированное содержание](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                                                                      |
| Пропуск тегов                                              | {{no_tag_omission}}                                                                                                                                                                     |
| Допустимые родители                                        | Любые элементы которые принимают [Содержание потока](/ru/docs/Web/HTML/Content_categories#Flow_content); не используй как дочерний {{HTMLElement("hgroup")}} элемент, сейчас он устарел |
| Допустимые ARIA-роли                                       | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/tab_role">tab</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>          |
| DOM-интерфейс                                              | {{domxref("HTMLHeadingElement")}}                                                                                                                                                       |

## Атрибуты

Эти элементы включают [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

> **Примечание:** Атрибут `align` устаревший; не используйте его.

## Примечания к использованию

- Информация о заголовке может использоваться пользовательскими агентами, например, для автоматического создания оглавления для документа
- Не используйте низкие уровни чтобы снизить размер шрифта: используйте [CSS](/ru/docs/Web/CSS) {{cssxref("font-size")}} вместо.
- Избегайте пропуск уровней заголовков: всегда начинайте с `<h1>`, потом используйте `<h2>`, и так далее.
- Вам следует рассмотреть избегание использования \<h1> более раза на страницу.

## Примеры

### Все заголовки

Следующий код показывает все уровни заголовков в действии

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

Вот результат этого кода:

{{ EmbedLiveSample('Все_заголовки', '280', '300', '') }}

### Пример страницы

Следующий код показывает несколько заголовков с некоторым содержанием под ними .

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

Результат кода:

{{ EmbedLiveSample('Пример_страницы', '280', '480', '') }}

## Проблемы доступности

### Навигация

Обычный метод навигации для пользователей программ чтения с экрана - это переход от заголовка к заголовку для быстрого определения содержимого страницы. Из-за этого важно не пропускать один или несколько уровней заголовка. Это может создать путаницу, так как человеку, который движется по этому пути, может быть интересно узнать, где находится отсутствующий заголовок.

#### Не делай

```html
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

#### Делай

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### Расположение

Заголовки могут быть вложены в подразделы, чтобы отразить организацию содержимого страницы. Большинство программ чтения с экрана также могут создавать упорядоченный список всех заголовков на странице, что может помочь человеку быстро определить иерархию содержимого:

1. `h1` Жуки

   1. `h2` Этимология
   2. `h2` Распределение и разнообразие
   3. `h2` Эволюция

      1. `h3` Поздний палеозой
      2. `h3` Юрский период
      3. `h3` Меловойский период
      4. `h3` Кайнозойский период

   4. `h2` Внешняя морфология

      1. `h3` Голова

         1. `h4` Рот

      2. `h3` Туловище

         1. `h4` Передгрудь
         2. `h4` Пиероторакс

      3. `h3` Ноги
      4. `h3` Крыла
      5. `h3` Живот

Когда заголовки вложены, уровни заголовков могут быть «пропущены» при закрытии подраздела.

- [Заголовки • Структура страницы • Обучающие материалы по веб-доступности WAI](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Понимание WCAG, объяснение Руководства 1.3](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Понимание критерия успеха 1.3.1 | W3C Понимание WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Понимание WCAG, Руководство 2.4 пояснения](/ru/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Понимание критерия успеха 2.4.1 | W3C Понимание WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Понимание критерия успеха 2.4.6 | W3C Понимание WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Понимание критерия успеха 2.4.10 | W3C Понимание WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Содержание раздела маркировки

Другим распространённым методом навигации для пользователей программ чтения с экрана является создание списка содержимого секций и использование его для определения макета страницы.

Содержимое секционирования можно пометить, используя комбинацию [`aria-labelledby`](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) и [`id`](/ru/docs/Web/HTML/Global_attributes#id) атрибута, с ярлыком, кратко описывающим назначение раздела. Этот метод полезен в ситуациях, когда на одной странице имеется более одного элемента секционирования.

#### Пример

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Primary navigation</h2>
    <!-- navigation items -->
  </nav>
</header>

<!-- page content -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Footer navigation</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

В этом примере технология чтения с экрана объявила бы, что есть два {{HTMLElement("nav")}} разделы, один называется «Основная навигация», а другой - «Нижний колонтитул». Если ярлыки не были предоставлены, человеку, использующему программное обеспечение для чтения с экрана, возможно, придётся расследовать каждый `nav` содержание элемента, чтобы определить их назначение.

- [Использование атрибута aria-labelledby](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- [Обозначение регионов • Структура страницы • Учебные пособия по WAC WAI](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Характеристики

| Характеристика                                                                                                                                                     | Статус                   | Комментарий |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ----------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}}   | {{Spec2('HTML5 W3C')}}   |             |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.5', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}}                               | {{Spec2('HTML4.01')}}    |             |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
