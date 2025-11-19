---
title: :link
slug: Web/CSS/Reference/Selectors/:link
original_slug: Web/CSS/:link
---

{{ CSSRef() }}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:link` позволяет вам выбирать ссылки внутри элементов. Он выберет любую ссылку, которая ещё не была посещена, даже те, которые уже стилизованы, используя селекторы с другими, относящимися к ссылкам, псевдоклассам типа {{ cssxref(":hover") }}, {{ cssxref(":active") }} или {{ cssxref(":visited") }}. Чтобы стилизовать ссылки должным образом, вам нужно вставлять правила `:link` до других, как определено _LVHA-порядком_: `:link` — `:visited` — `:hover` — `:active`. Псевдо-класс {{ cssxref(":focus") }} обычно размещается прямо перед или сразу после `:hover`, в зависимости от ожидаемого эффекта.

> [!NOTE]
> Используйте {{cssxref(":any-link")}} чтобы выбрать ссылку, независимо от того, была она посещена или нет.

## Примеры

```css
a:link {
  color: slategray;
}
.external:link {
  background-color: lightblue;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
