---
title: ":visited"
slug: Web/CSS/:visited
---

{{ CSSRef() }}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:visited` позволяет вам выбирать ссылки, которые были посещены. Этот стиль может переопределяться другими относящимися к ссылкам псевдоклассами, такими как {{ cssxref(":link") }}, {{ cssxref(":hover") }} и {{ cssxref(":active") }}, появляющимися в соответствующем порядке. Чтобы стилизировать ссылки должным образом, вставьте правило `:visited` после правила `:link` до правил `:hover` и `:active`, как определено _LVHA-порядком_: `:link` — `:visited` — `:hover` — `:active`.

> **Примечание:** Из-за причин приватности, браузеры строго ограничивают стили, которые вы можете применить к элементу, используя этот псевдокласс: только {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("column-rule-color") }}, `fill` и `stroke`. Компонент альфа-канала в доступных стилях будет игнорироваться. Вместо него будет использоваться альфа-канал, используемый для непосещённых ссылок. Если в цвете альфа-канала для посещённых ссылок задан `0`, то в этом случае будет использоваться цвет непосещённых ссылок.Несмотря на то, что цвет может меняться, метод `getComputedStyle` наврёт и всегда будет давать значение цвета непосещённых ссылок.Для дополнительной информации об ограничениях и их причин, смотрите [Приватность и селектор :visited](/ru/docs/CSS/Privacy_and_the_:visited_selector).

## Примеры

```css
a:visited {
  color: #4b2f89;
}
a:visited {
  background-color: white;
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Приватность и селектор :visited](/ru/docs/CSS/Privacy_and_the_:visited_selector)
- Относящиеся к ссылкам псевдоклассы: {{cssxref(":link")}}, {{cssxref(":active")}} и {{cssxref(":hover")}}.
