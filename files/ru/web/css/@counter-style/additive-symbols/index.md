---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
---

## Описание

Дескриптор аддитивных символов аналогичен дескриптору {{cssxref('symbols')}} и позволяет пользователю указывать символы которые будут использоваться для представлений счётчика, когда значение дескриптора {{cssxref('system')}} _аддитивное_. Дескриптор `additive-symbols` определяет так называемые аддитивные кортежи, каждый из которых представляет собой пару, содержащую символ и неотрицательный целочисленный вес. Аддитивная система используется для построения систем нумерации знаков, таких как римские цифры.

Когда значение системного дескриптора является циклическим, числовым, буквенным, символическим или фиксированным, дескриптор `symbols` используется вместо аддитивных символов для указания символов счётчика.

{{cssinfo}}

## Синтаксис

```css
additive-symbols: 3 "0";
additive-symbols:
  3 "0",
  2 "\2E\20";
additive-symbols:
  3 "0",
  2 url(symbol.png);
```

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

### CSS

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols: I 1;
}
.list {
  list-style: additive-symbols-example;
}
```

### Результат

{{ EmbedLiveSample('Example') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, функциональная запись, создающая анонимные стили счётчиков.
