---
title: display
slug: Web/CSS/display
---

{{CSSRef}}

Свойство **`display`** ([CSS](/ru/docs/Web/CSS)) определяет _тип отображения (display type)_ элемента, имеющий два основных свойства, определяющих генерацию боксов — **внешний тип отображения** определяет расположение бокса в [схеме потока (flow layout)](/ru/docs/Web/CSS/CSS_Flow_Layout) и **внутренний тип отображения** определяет расположение дочерних элементов бокса (бокс - это прямоугольная область, являющаяся изображением элемента).

Некоторые значения свойства `display` полностью определены в их индивидуальных спецификациях; смотрите таблицу в конце этого документа со ссылками на все релевантные спецификации. Полный список значений приведён ниже.

```css
/* <display-outside> values */
display: block;
display: inline;
display: run-in;

/* <display-inside> values */
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;

/* <display-outside> plus <display-inside> values */
display: block flow;
display: inline table;
display: flex run-in;

/* <display-listitem> values */
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/* <display-internal> values */
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/* <display-box> values */
display: contents;
display: none;

/* <display-legacy> values */
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;

/* Global values */
display: inherit;
display: initial;
display: unset;
```

{{CSSInfo}}

## Синтаксис

Свойство `display` задаётся с помощью ключевых слов. Ключевые слова группируются по шести категориям:

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Эти ключевые слова определяют внешний тип отображения (outer display type) элемента, который играет существенную роль в схеме потока.
- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Эти ключевые слова определяют внутренний тип отображения ( inner display type) элемента, который определяет тип контекста форматирования, в котором располагается его содержимое (при условии, что это незаменяемый элемент).
- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : Создаёт блоковый бокс для контента и отдельный строковый (inline) бокс для элемента списка.
- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Некоторые модели разметки, такие как `table` и `ruby,` имеют сложную внутреннюю структуру с несколькими различными ролями, которые могут выполнять их дочерние элементы и потомки. Этот раздел определяет те "внутренние" значения отображения, которые имеют смысл только в рамках этих конкретных методов разметок.
- {{CSSxRef("&lt;display-box&gt;")}}
  - : Эти значения определяют, генерирует ли элемент отображение боксов вообще.
- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : В CSS 2 используется синтаксис с одним ключевым словом для свойства `display`, для которого требуются отдельные ключевые слова для блокового и строкового уровней одного способа разметки.
- [`<display-xul>`](/ru/docs/Mozilla/Gecko/Chrome/CSS/display-xul) {{Non-standard_Inline}}{{Deprecated_Inline(62)}}
  - : Значения, используемые только в Firefox, в основном, для стилизации. [XUL documents](/ru/docs/Mozilla/Tech/XUL).

### "Наследственные" значения отображения

Спецификация уровня 3 подразумевает два значения для свойства `display` — позволяет специфицировать внешний и внутренний тип отображения явно — но это поддерживается браузерами пока недостаточно хорошо.

Методы display-legacy позволяют получать такие же результаты с одиночными значениями ключевых слов и должны поддерживаться разработчиками до тех пор, пока два значения ключевых слов не будут лучше поддерживаться. Например, используя два значения, вы можете задать строковый (inline) flex контейнер следующим образом:

```css
.container {
  display: inline flex;
}
```

В настоящее время это можно задать с помощью одного значения.

```css
.container {
  display: inline-flex;
}
```

### Формальный синтаксис

{{CSSSyntax}}

## Примеры

В разделе [Syntax](#syntax) содержатся несколько примеров для разных типов значений `display`, которые это свойство может принимать.

Кроме того, вы можете найти подробные объяснения способов разметки для определённых значений `display` в других статьях на MDN:

- [Разметка CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout)
- [Разметка CSS Flexible box](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Разметка CSS](/ru/docs/Learn/CSS/CSS_layout) (Модуль обучения для начинающих)

## Доступность

### `display: none;`

Если свойство `display` принимает значение `none` на элементе, то элемент удаляется из [дерева доступности](/ru/docs/Learn/Доступность/What_is_accessibility). Это приводит к тому, что элемент и все его дочерние элементы больше не будут восприниматься технологиями чтения экрана.

Если вы хотите визуально скрыть элемент, более доступной альтернативой является использование [комбинации свойств](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) для визуального удаления изображения с экрана, но это сохраняет его для синтаксического анализа с помощью вспомогательных технологий, таких как считыватели экрана.

### `display: contents;`

Браузеры удаляют любой элемент со свойством `display,` имеющим значение `contents` из [дерева доступности](/ru/docs/Learn/Доступность/What_is_accessibility). Это приводит к тому, что элемент (но не его дочерние элементы) больше не будут восприниматься технологиями чтения экрана. Дочерние элементы становятся дочерними элементами элемента следующего уровня в DOM.

- [Display: Contents Is Not a CSS Reset | Adrian Roselli](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [More accessible markup with display: contents — hiddedevries.nl](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)

### Таблицы

Если у элемента {{HTMLElement("table")}} изменить значение свойства `display` на `block`, `grid` или `flex`, это изменит его представление в [дереве доступности](/ru/docs/Learn/Доступность/What_is_accessibility). Это приводит к тому, что таблица не будет объявлена должным образом с помощью технологии чтения экрана.

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Блоковая и Inline разметка нормальном потоке](/ru/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Formatting contexts explained](/ru/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
