---
title: Комбинатор столбцов
slug: Web/CSS/Column_combinator
---

{{CSSRef("Selectors")}}{{SeeCompatTable}}

**Комбинатор столбцов** (`||`) помещается между двумя селекторами CSS. Он соответствует только тем элементам, которым соответствует второй селектор, которые принадлежат элементам столбца, соответствующим первому.

```css
/* Ячейки таблицы, принадлежащие к столбцу "выделено" */
col.selected||td {
  background: gray;
}
```

## Синтаксис

```
column-selector || cell-selector {
  /* свойства стиля */
}
```

## Примеры

### HTML

```html
<table border="1">
  <colgroup>
    <col span="2" />
    <col class="selected" />
  </colgroup>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr>
      <td colspan="2">D</td>
      <td>E</td>
    </tr>
    <tr>
      <td>F</td>
      <td colspan="2">G</td>
    </tr>
  </tbody>
</table>
```

### CSS

```css
col.selected||td {
  background: gray;
  color: white;
  font-weight: bold;
}
```

### Result

{{EmbedLiveSample("Примеры", "100%")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{CSSxRef("grid")}}
