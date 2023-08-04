---
title: align-items
slug: Web/CSS/align-items
---

{{CSSRef}}

## Описание

[CSS](/ru/docs/CSS) свойство **`align-items`** выравнивает flex-элементы текущей flex-линии таким же образом, как и [`justify-content`](/en/CSS/justify-content), но в перпендикулярном направлении.

{{cssinfo}}

Подробнее и больше информации читайте в [Использование гибких блоков CSS](/en/CSS/Using_CSS_flexible_boxes).

## Синтаксис

```css
/* Align to cross-start */
align-items: flex-start;

/* Align to cross-end */
align-items: flex-end;

/* Центрировать элементы в поперечной оси */
align-items: center;

/* Выровняйте базовые линии предметов */
align-items: baseline;

/* Растянуть предметы, чтобы соответствовать */
align-items: stretch;

/* Глобальные значения */
align-items: inherit;
align-items: initial;
align-items: unset;
```

### Значения

- `normal`
  - : Эффект этого ключевого слова зависит от режима макета, в котором мы находимся:
    - В абсолютно позиционированных макетах ключевое слово ведёт себя как `start` в _заменённых_ абсолютно позиционированных блоках, и как `stretch` во _всех других_ абсолютно позиционированных блоках.
    - В статическом положении абсолютно позиционированных макетов ключевое слово ведёт себя как `stretch`.
    - Для гибких элементов ключевое слово ведёт себя как `stretch`.
    - Для элементов сетки это ключевое слово ведёт к поведению, аналогичному `stretch`, за исключением полей с соотношением сторон или внутренних размеров, где оно ведёт себя как `start`.
    - Это свойство не применяется к блокам уровня блока и к ячейкам таблицы.
- `flex-start`
  - : Край поперечного начала края гибкого элемента выровнен с краем поперечного начала линии.
- `flex-end`
  - : The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.
- `center`
  - : Внешний отступ полей гибкого элемента центрируется в пределах линии на поперечной оси. Если поперечный размер элемента больше, чем у гибкого контейнера, он будет одинаково переполнен в обоих направлениях.
- `baseline`
  - : All flex items are aligned such that their baselines align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.
- `stretch`
  - : Элементы Flex растягиваются, например, поперечный размер поля элемента совпадает с линией при соблюдении ограничений ширины и высоты.

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications("css.properties.align-items.grid_context")}}

## Совместимость с браузерами

### Support in Flex layout

{{Compat}}

### Support in Grid layout

{{Compat}}

## Смотрите также

- [Использование гибких блоков CSS](/ru/docs/CSS/Using_CSS_flexible_boxes)
