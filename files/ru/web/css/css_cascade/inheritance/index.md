---
title: Наследование
slug: Web/CSS/CSS_cascade/Inheritance
---

{{CSSRef}}

## Описание

Описание каждого [CSS-свойства](/ru/docs/Web/CSS/Reference) говорит наследуется ли оно по умолчанию ("Наследуется: да/нет"). Наследование контролирует, что происходит, если значение свойства элемента не определено.

## Наследуемые свойства

Когда никакого значения для **свойства, которое наследуется**, у элемента не установлено, элемент получает [вычисленное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d) этого свойства от его родителя. Только корневой элемент документа получает [начальное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing) из описания свойства.

Типичный пример наследуемого свойства {{ Cssxref("color") }}. Стили:

```css
p {
  color: green;
}
```

и разметка:

```html
<p>В этом параграфе <em>подчёркнутый текст</em>.</p>
```

слова "подчёркнутый текст" станут зелёными, т.к. тег `em` унаследовал значение свойства {{ Cssxref("color") }} от элемента `p`, а не получают начальное значение свойства (цвет, который используется для корневого элемента, когда страница не определяет цвет).

## Ненаследуемые свойства

Когда значения **свойства** элемента, которое **не наследуется**, не указано(иногда называемое Mozilla - **сброшенное свойство**), элемент получает [начальное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing) этого свойства (как указано в описании свойства).

Пример ненаследуемого свойства {{ Cssxref("border") }}. Стили:

```css
p {
  border: medium solid;
}
```

и разметка:

```html
<p>В этом параграфе <em>подчёркнутый текст</em>.</p>
```

у слов "подчёркнутый текст" не будет рамки (т.к. начальное значение {{ Cssxref("border-style") }}: `none`).

## Замечание

Ключевое слово {{ Cssxref("inherit") }} позволяет нам явно задать наследование. Это работает и на наследуемых, и на ненаследуемых свойствах.

## Смотрите также

- [CSS документация](/ru/docs/Web/CSS/Reference)
- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/CSS_syntax/Syntax)
  - [@-правила](/ru/docs/Web/CSS/CSS_syntax/At-rules)
  - [комментарии](/ru/docs/Web/CSS/CSS_syntax/Comments)
  - [специфичность](/ru/docs/Web/CSS/CSS_cascade/Specificity)
  - [наследование](/ru/docs/Web/CSS/CSS_cascade/Inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Glossary/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
    - [вычисленные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/ru/docs/Web/CSS/CSS_cascade/Value_processing)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/CSS_images/Replaced_element_properties)

- {{ Cssxref("inherit") }}
