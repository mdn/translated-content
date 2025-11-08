---
title: widows
slug: Web/CSS/Reference/Properties/widows
original_slug: Web/CSS/widows
---

{{CSSRef}}

Свойство `widows` [CSS](/ru/docs/Web/CSS) определяет какое минимальное количество линий должно быть оставлено в начале новой страницы на `paged` носителе. В типографике, «висячая» строка **(**_widow)_ это последняя строка параграфа, оказавшаяся в начале следующей страницы. Установка свойства `widows` позволяет предотвратить висячие строки.

На нестраничных носителях, таких как `screen`, CSS-свойство `widows` не имеет эффекта.

{{cssinfo}}

## Синтаксис

[Formal syntax](/ru/docs/Web/CSS/Value_definition_syntax): {{csssyntax("widows")}}

```css
widows: 2
widows: 3

widows: inherit
```

### Значения

- `<integer>`
  - : Обозначает минимальное количество строк, которые могут остаться одни вверху новой страницы. Если значение не **положительное**, такое объявление недействительно.

## Пример

```css
p {
  widows: 3;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("orphans")}}
- {{cssxref("Paged Media")}}
