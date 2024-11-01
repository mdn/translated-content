---
title: "<h1>–<h6>: заголовки разделов"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: 2e2264afa75514b2eedcbd20f0d29c2334f99672
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элементы от **`<h1>`** до **`<h6>`** представляют шесть уровней заголовков разделов. `<h1>` — это заголовок самого верхнего уровня, а `<h6>` — самого нижнего. По умолчанию все элементы заголовков создают в разметке [блочный](/ru/docs/Glossary/Block-level_content) контейнер, начинающийся на новой строке и занимающий всю доступную ширину в содержащем его блоке.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/HTML/Content_categories">Категории содержимого</a>
      </th>
      <td>
        <a href="/ru/docs/Web/HTML/Content_categories#основной_поток">Основной поток</a>, содержимое заголовков, явное содержимое.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимое содержимое</th>
      <td>
        <a href="/ru/docs/Web/HTML/Content_categories#фразовый_контент">Фразовое содержимое</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегов</th>
      <td>Нет, открывающий и закрывающий теги обязательны.</td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>
        Любой элемент, разрешающий <a href="/ru/docs/Web/HTML/Content_categories#основной_поток">основной поток</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявная ARIA-роль</th>
      <td>
        <a href="/ru/docs/Web/Accessibility/ARIA/Roles/heading_role">heading</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>
        <a href="/ru/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> или
        <a href="/ru/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Интерфейс DOM</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## Атрибуты

Эти элементы допускают только [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

## Примечания по использованию

- Информация о заголовках может использоваться пользовательскими агентами для автоматического создания оглавления документа.
- Не используйте элементы заголовков для управления размером шрифта. Для этих целей следует применять {{glossary("CSS")}}-свойство {{cssxref("font-size")}}.
- Не пропускайте уровни заголовков: всегда начинайте с `<h1>`, потом используйте `<h2>` и так далее.

### Избегайте использования нескольких элементов `<h1>` на одной странице

Использование нескольких элементов `<h1>` на одной странице разрешено стандартом HTML (если они не [вложены друг в друга](#вложенность)), но это считается плохой практикой. Хорошо, когда на странице есть единственный элемент `<h1>`, который описывает содержимое этой страницы (по аналогии с элементом [`<title>`](/ru/docs/Web/HTML/Element/title)).

> [!NOTE]
> Использование нескольких элементов `<h1>` во вложенных [элементах разделов](/ru/docs/Web/HTML/Element#секционирование_содержания) было разрешено в старых версиях стандарта HTML. Однако это никогда не считалось хорошей практикой, а теперь не соответствует требованиям. Больше информации об этом в статье [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Старайтесь использовать один элемент `<h1>` на странице и [вложенные заголовки](#вложенность) без пропуска уровней.

## Примеры

### Все заголовки

Следующий код показывает все уровни заголовков в действии.

```html
<h1>Заголовок уровня 1</h1>
<h2>Заголовок уровня 2</h2>
<h3>Заголовок уровня 3</h3>
<h4>Заголовок уровня 4</h4>
<h5>Заголовок уровня 5</h5>
<h6>Заголовок уровня 6</h6>
```

{{EmbedLiveSample('Все заголовки', '280', '300')}}

### Пример страницы

Следующий код показывает несколько заголовков с содержимым под ними.

```html
<h1>Элементы заголовков</h1>
<h2>Краткое содержание</h2>
<p>Обычный текст...</p>

<h2>Примеры</h2>
<h3>Пример 1</h3>
<p>Обычный текст...</p>

<h3>Пример 2</h3>
<p>Обычный текст...</p>

<h2>Смотрите также</h2>
<p>Обычный текст...</p>
```

{{EmbedLiveSample('Пример страницы', '280', '480')}}

## Доступность

### Навигация

Обычный метод навигации для пользователей программ чтения с экрана — это переход от заголовка к заголовку для быстрого ознакомления с содержимым страницы. Из-за этого важно не пропускать уровни заголовка. Это может создать путаницу, так как человеку, который использует такой способ навигации, может быть непонятно, где находится отсутствующий заголовок.

**Неправильно:**

```html example-bad
<h1>Заголовок уровня 1</h1>
<h3>Заголовок уровня 3</h3>
<h4>Заголовок уровня 4</h4>
```

**Правильно:**

```html example-good
<h1>Заголовок уровня 1</h1>
<h2>Заголовок уровня 2</h2>
<h3>Заголовок уровня 3</h3>
```

#### Вложенность

Заголовки могут быть вложены в подразделы, чтобы отразить структуру содержимого страницы. Большинство программ чтения с экрана могут создавать упорядоченный список всех заголовков на странице, что может помочь человеку быстро определить иерархию содержимого:

1. `h1` Жуки

   1. `h2` Этимология
   2. `h2` Распределение и разнообразие
   3. `h2` Эволюция

      1. `h3` Поздний палеозой
      2. `h3` Юрский период
      3. `h3` Меловой период
      4. `h3` Кайнозойский период

   4. `h2` Внешняя морфология

      1. `h3` Голова

         1. `h4` Рот

      2. `h3` Туловище

         1. `h4` Переднегрудь
         2. `h4` Птероторакс

      3. `h3` Ноги
      4. `h3` Крыла
      5. `h3` Живот

Когда заголовки вложены, уровни заголовков могут быть «пропущены» при закрытии подраздела.

- [MDN Understanding WCAG, Guideline 1.3 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Headings • Page Structure • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Маркировка разделов содержимого

Другим распространённым методом навигации для пользователей программ чтения с экрана является создание списка [секционированного содержимого](/ru/docs/Web/HTML/Element#секционирование_содержания) и его использование для определения разметки страницы.

Разделы содержимого могут быть размечены с помощью комбинации атрибутов [`aria-labelledby`](/ru/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) и [`id`](/ru/docs/Web/HTML/Global_attributes#id), с кратко описывающим назначение раздела значением. Этот метод полезен в ситуациях, когда на одной странице имеется более одного элемента секционирования.

#### Примеры секционированного содержимого

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Основная навигация</h2>
    <!-- Элементы навигации -->
  </nav>
</header>

<!-- Содержимое страницы -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Вторичная навигация</h2>
    <!-- Элементы навигации -->
  </nav>
</footer>
```

{{EmbedLiveSample('Примеры секционированного содержимого')}}

В этом примере технология чтения с экрана определила бы, что есть два раздела {{HTMLElement("nav")}}, один называется «Основная навигация», а другой — «Вторичная навигация». Если атрибуты доступности не были установлены, то человеку, использующему программу для чтения с экрана, возможно придётся исследовать каждый элемент `nav`, чтобы определить его назначение.

- [Using the aria-labelledby attribute](/ru/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
