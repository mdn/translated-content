---
title: object-fit
slug: Web/CSS/object-fit
---

{{CSSRef}}

Свойство **`object-fit`** определяет, как содержимое заменяемого элемента, такого как [`<img>`](/ru/docs/Web/HTML/Element/img) или [`<video>`](/ru/docs/Web/HTML/Element/video), должно заполнять контейнер относительно его высоты и ширины.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

## Синтаксис

Для `object-fit` можно указать одно из нижеперечисленных свойств.

### Значения

- `fill`
  - : Смещаемый контент меняет свой размер таким образом, чтобы заполнить всю область внутри блока: используется вся ширина и высота блока.
- `contain`
  - : Смещаемый контент меняет свой размер таким образом, чтобы подстроиться под область внутри блока пропорционально собственным параметрам: окончательный размер контента будет определён как "помещённый внутрь" блока, ограничиваясь его шириной и высотой.
- `cover`
  - : Смещаемый контент меняет свой размер таким образом, чтобы сохранять свои пропорции при заполнении блока: окончательный размер контента будет определён как "покрытие" блока, ограничиваясь его шириной и высотой.
- `none`
  - : Смещаемый контент не изменяет свой размер с целью заполнить пространство блока: конечный размер контента будет определён с использованием алгоритма изменения размера по умолчанию, а также размер объекта по умолчанию равен ширине и высоте смещаемого контента.
- `scale-down`
  - : Контент изменяет размер, сравнивая разницу между `none` и `contain`, для того, чтобы найти наименьший конкретный размер объекта.

### Правильный синтаксис

{{csssyntax}}

## Пример

### HTML Контент

```html
<div>
  <h2>object-fit: fill</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="fill" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="fill narrow" />

  <h2>object-fit: contain</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="contain" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="contain narrow" />

  <h2>object-fit: cover</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="cover" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="cover narrow" />

  <h2>object-fit: none</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="none" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="none narrow" />

  <h2>object-fit: scale-down</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="scale-down" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="scale-down narrow" />
</div>
```

### CSS Контент

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

### Результат

{{ EmbedLiveSample('Example', 500, 450) }}

## Технические параметры

| Specification                                                | Status                   | Comment                                        |
| ------------------------------------------------------------ | ------------------------ | ---------------------------------------------- |
| {{SpecName('CSS4 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS4 Images')}} | `Добавлены ключевые слова from-image` `и flip` |
| {{SpecName('CSS3 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS3 Images')}} | Первоначальное определение                     |

{{cssinfo}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- Другие свойства CSS, связанные с изображениями (картинками): {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("background-size")}}
