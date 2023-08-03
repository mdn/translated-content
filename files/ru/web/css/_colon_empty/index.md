---
title: ":empty"
slug: Web/CSS/:empty
---

{{ CSSRef() }}

## Описание

{{ Cssxref("pseudo-classes", "Псевдокласс") }} `:empty` находит любой элемент, у которого нет потомков. Учитываются элементы и текст (включая пробелы). Комментарии не повлияют на то, что элемент будет рассматриваться как не пустой.

## Синтаксис

```
<element>:empty { /* стили */ }
```

## Примеры

```css
.box {
  background: red;
  height: 200px;
  width: 200px;
}

.box:empty {
  background: lime;
}
```

```html
<div class="box"><!-- Я буду лаймовым --></div>
<div class="box">Я буду красным</div>
<div class="box">
  <!-- Я буду красным, так как перед комментарием стоят пробелы -->
</div>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
