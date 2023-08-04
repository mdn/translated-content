---
title: text-align-last
slug: Web/CSS/text-align-last
---

{{CSSRef}}{{SeeCompatTable}}

## Кратко

`text-align-last` CSS-свойство описывает как выравнивается последняя строка в блоке или строка, идущая сразу перед принудительным разрывом строки.

{{cssinfo}}

## Синтаксис

[Formal syntax](/ru/docs/CSS/Value_definition_syntax): {{csssyntax("text-align-last")}}

```css
text-align-last: auto
text-align-last: start
text-align-last: end
text-align-last: left
text-align-last: right
text-align-last: center
text-align-last: justify

text-align-last: inherit
```

### Значения

- `auto`
  - : Затронутая строка выравнивается в зависимости от значения {{cssxref("text-align")}}, за исключением {{cssxref("text-align")}} со значением `justify`, в этом случае эффект такой же как установить `text-align-last` равным `left`.
- `start`
  - : Подобно `left` если направление слева направо, и `right` если направление справа налево.
- `end`
  - : Подобно `right` если направление слева направо, и `left` если направление справа налево.
- `left`
  - : Линейное содержимое выравнивается по левому краю линейного блока.
- `right`
  - : Линейное содержимое выравнивается по правому краю линейного блока.
- `center`
  - : Линейное содержимое центрируется внутри линейного блока.
- `justify`
  - : Текст выравнивается по ширине. Тексту следует выстраивать свои левые и правые границы по левым и правым границам содержимого параграфа.

## Примеры

```css
div {
  text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
}
```

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- {{cssxref("text-align")}}
