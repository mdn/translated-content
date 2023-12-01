---
title: justify-content
slug: Web/CSS/justify-content
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`justify-content`** определяет, как браузер распределяет пространство между и вокруг элементов контента вдоль {{Glossary("Main Axis", "главной оси")}} flex контейнера, или вдоль строчной оси grid контейнера.

Интерактивный пример ниже демонстрирует некоторые значения, используя Grid размещение.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

Выравнивание выполняется после того, как применяются длины и автоматические поля, что означает, что если во [Flexbox разметке](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout) есть хотя бы один flex-элемент, с {{cssxref("flex-grow")}} отличным от `0`, эффект не будет применён, потому что не останется свободного места.

## Синтаксис

```css
/* Позиционное выравнивание */
justify-content: center; /* Выравнивание элементов по центру */
justify-content: start; /* Выравнивание элементов в начале */
justify-content: end; /* Выравнивание элементов в конце */
justify-content: flex-start; /* Выравнивание флекс-элементов с начала */
justify-content: flex-end; /* Выравнивание флекс-элементов с конца */
justify-content: left; /* Выравнивание элементов по левому краю */
justify-content: right; /* Выравнивание элементов по правому краю */

/* Выравнивание относительно осевой линии */
justify-content: baseline;
justify-content: first baseline;
justify-content: last baseline;

/* Распределённое выравнивание */
justify-content: space-between; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Первый элемент вначале, последний в конце */
justify-content: space-around; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Все элементы имеют полноразмерное пространство

                                   с обоих концов */
justify-content: space-evenly; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Все элементы имеют равное пространство вокруг */
justify-content: stretch; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Все элементы имеют "авто-размер", чтобы соответствовать

                                   контейнеру */

/* Выравнивание при переполнении */
justify-content: safe center;
justify-content: unsafe center;

/* Глобальные значения */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

### Значения

- `start`
  - : Элементы располагаются друг за другом и прижимаются к началу контейнера по главной оси.
- `end`
  - : Элементы располагаются друг за другом и прижимаются к концу контейнера по главной оси.
- `flex-start`
  - : Элементы располагаются друг за другом и прижимаются к началу контейнера по главной оси, в зависимости от её направления ([flex-direction](/ru/docs/Web/CSS/flex-direction)). Для элементов, которые не являются дочерними элементами flex контейнера, это значение обрабатывается как `start`.
- `flex-end`
  - : Элементы располагаются друг за другом и прижимаются к концу контейнера по главной оси, в зависимости от её направления ([flex-direction](/ru/docs/Web/CSS/flex-direction)). Для элементов, которые не являются дочерними элементами flex контейнера, это значение обрабатывается как `end`.
- `center`
  - : Элементы располагаются друг за другом в центре контейнера по главной оси.
- `left`
  - : Элементы располагаются друг за другом и прижимаются к левому краю контейнера по главной оси. Если главная ось не горизонтальна, это значение работает как `start`.
- `right`
  - : Элементы располагаются друг за другом и прижимаются к правому краю контейнера по главной оси. Если главная ось не горизонтальна, это значение работает как `start`.
- `normal`
  - : Элементы располагаются на своих обычных позициях, так как будто свойство `justify-content` не задано. Этот параметр ведёт себя как `stretch` в grid и flex контейнерах.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `space-between`
  - : Элементы равномерно распределены вдоль главной оси контейнера. Расстояния между каждой парой соседних элементов равны. Первый элемент прижат к началу контейнера по главной оси, а последний - к концу.
- `space-around`
  - : Элементы равномерно распределены вдоль главной оси контейнера. Расстояния между каждой парой соседних элементов равны. Пустые пространства перед первым элементом и после последнего элемента равны половине расстояния между парами соседних элементов.
- `space-evenly`
  - : Элементы равномерно распределены вдоль главной оси контейнера. Расстояния между каждой парой соседних элементов равны расстояниям от начала контейнера до первого элемента и от последнего элемента до конца контейнера.
- `stretch`
  - : If the combined size of the items is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container along the main axis.

> **Примечание:** `stretch` не поддерживается гибкими контейнерами (flexbox).

- `safe`
  - : If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were `start`.
- `unsafe`
  - : Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.

### Формальный синтаксис

{{csssyntax}}

## Пример

### CSS

```css
#container {
  display: flex;
  justify-content: space-between; /* Может быть изменено */
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}
```

```html hidden
<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="baseline">baseline</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
var justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", function (evt) {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

### Результат

{{EmbedLiveSample("Пример", "100%", 140)}}

## Спецификации

{{Specifications("css.properties.justify-content.grid_context")}}

{{cssinfo}}

## Совместимость с браузерами

### Поддержка в Flex разметке

{{Compat}}

### Поддержка в Grid разметке

{{Compat}}

## Смотрите также

- Гид по CSS Flexbox: _[Основные понятия Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Выравнивание элементов во Flex контейнере](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Выравнивание_элементов_в_Flex_контейнере)_
- CSS Grid Guide: _[Выравнивание ячейки в CSS Grid layout](/ru/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [Выравнивание полей CSS](/ru/docs/Web/CSS/CSS_Box_Alignment)
