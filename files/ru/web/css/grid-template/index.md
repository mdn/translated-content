---
title: grid-template
slug: Web/CSS/grid-template
---

{{CSSRef}}

[Сокращённое CSS-свойство](/ru/docs/Web/CSS/Shorthand_properties) **`grid-template`** определяет {{glossary("grid column", "колонки")}}, {{glossary("grid rows", "ряды")}} и {{glossary("grid areas", "области")}} грид-раскладки.

{{EmbedInteractiveExample("pages/css/grid-template.html")}}

## Составные свойства

Это свойство является сокращённой формой записи для следующих CSS-свойств:

- [`grid-template-areas`](/ru/docs/Web/CSS/grid-template-areas)
- [`grid-template-columns`](/ru/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](/ru/docs/Web/CSS/grid-template-rows)

## Синтаксис

```css
/* Ключевые слова в качестве значения */
grid-template: none;

/* Значения в формате grid-template-rows / grid-template-columns */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* Значения в формате grid-template-areas grid-template-rows / grid-template-columns */
grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;

/* Глобальные значения */
grid-template: inherit;
grid-template: initial;
grid-template: revert;
grid-template: unset;
```

### Значения

- `none`
  - : Это ключевое задаёт значение `none` для всех трёх связанных свойств, что означает отсутствие явно заданной грид-раскладки. Соответственно, грид-области будут неименованными. Ряды и колонки будут создаваться неявным образом, а их размер определяться свойствами {{cssxref("grid-auto-rows")}} и {{cssxref("grid-auto-columns")}}.
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : Задаёт указанные значения для {{cssxref("grid-template-rows")}} и {{cssxref("grid-template-columns")}}, а для свойства {{cssxref("grid-template-areas")}} ― значение `none`.
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

  - : Перечисленные строки задают свойство {{cssxref("grid-template-areas")}}, значения после каждой строки устанавливают размеры грид-полос для свойства {{cssxref("grid-template-rows")}} (либо `auto` в случае их отсутствия), объединяя именованные грид-линии, расположенные до и после каждого размера, далее определяется {{cssxref("grid-template-columns")}} значениями, расположенными после слеша (либо `none` в случае их отсутствия).

**Примечание:** при перечислении грид-полос нельзя использовать функцию {{cssxref("repeat()")}}, поскольку предполагается, что ряды и колонки будут располагаться вместе другом с другом в стиле "ASCII-рисунков".

> **Примечание:** сокращённое свойство {{cssxref("grid")}} имеет тот же самый формат значений, но также сбрасывает неявные грид-свойства к их первоначальным значениям. Используйте `grid` (в отличие от `grid-template`), чтобы предотвратить каскадирование этих значений по отдельности.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Создание грид-раскладки

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template:
    [header-left] "head head" 30px [header-right]
    [main-left] "nav  main" 1fr [main-right]
    [footer-left] "nav  foot" 30px [footer-right]
    / 120px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  background-color: yellow;
  grid-area: main;
}

footer {
  background-color: red;
  grid-area: foot;
}
```

#### HTML

```html
<section id="page">
  <header>Шапка</header>
  <nav>Навигация</nav>
  <main>Основной контент</main>
  <footer>Подвал</footer>
</section>
```

#### Результат

{{EmbedLiveSample("Создание грид-раскладки", "100%", "200px")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные CSS-свойства: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}
- Руководство по грид-раскладке: _[Расположение элементов по грид-линиям с помощью CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Руководство по грид-раскладке: _[Шаблоны грид-областей - сокращённое определение грида](/ru/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#grid_definition_shorthands)_
- Обучающее видео: _[Grid Template shorthand](http://gridbyexample.com/video/grid-template-shorthand/)_
