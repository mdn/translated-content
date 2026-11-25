---
title: "`empty-cells` CSS property"
short-title: empty-cells
slug: Web/CSS/Reference/Properties/empty-cells
page-type: css-property
browser-compat: css.properties.empty-cells
sidebar: cssref
---

Свойство **`empty-cells`** [CSS](/en-US/docs/Web/CSS) определяет, будут ли отображаться рамки и фон вокруг ячеек {{htmlelement("table")}} не имеющих видимого содержимого.

Это свойство действует только тогда, когда свойство {{cssxref("border-collapse")}} имеет значение `separate`.

{{InteractiveExample("CSS Demo: empty-cells")}}

```css interactive-example-choice
empty-cells: show;
```

```css interactive-example-choice
empty-cells: hide;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tbody>
      <tr>
        <th>Имя клиента</th>
        <th>Возраст</th>
      </tr>
      <tr>
        <td></td>
        <td>25</td>
      </tr>
      <tr>
        <td>Мария Ш.</td>
        <td></td>
      </tr>
      <tr>
        <td>Василий Г.</td>
        <td></td>
      </tr>
      <tr>
        <td>Григорий Л.</td>
        <td>71</td>
      </tr>
    </tbody>
  </table>
</section>
```

```css interactive-example
th,
td {
  border: 2px solid #aa1199;
  padding: 0.25rem 0.5rem;
}
```

## Синтаксис

```css
/* Значения ключевых слов */
empty-cells: show;
empty-cells: hide;

/* Глобальные значения */
empty-cells: inherit;
empty-cells: initial;
empty-cells: revert;
empty-cells: revert-layer;
empty-cells: unset;
```

### Значения

Это свойство задаётся одним из следующих ключевых значений:

- `show`
  - : Рамки и фон отрисовываются так же, как у обычных ячеек.
- `hide`
  - : Рамки и фон не отрисовываются.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Отображение и скрытие пустых ячеек таблицы

#### HTML

```html
<table class="table_1">
  <tbody>
    <tr>
      <td>Мария</td>
      <td>Павел</td>
    </tr>
    <tr>
      <td>Сергей</td>
      <td></td>
    </tr>
  </tbody>
</table>
<br />
<table class="table_2">
  <tbody>
    <tr>
      <td>Мария</td>
      <td>Павел</td>
    </tr>
    <tr>
      <td>Сергей</td>
      <td></td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}
```

#### Результат

{{ EmbedLiveSample('Showing_and_hiding_empty_table_cells', '100%', '200') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("border-collapse")}}
- [Learn: Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)
- [CSS table](/en-US/docs/Web/CSS/Guides/Table) module
