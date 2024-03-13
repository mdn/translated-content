---
title: object-position
slug: Web/CSS/object-position
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`object-position`** определяет выравнивание контента выбранного [замещаемого элемента](/ru/docs/Web/CSS/%D0%97%D0%B0%D0%BC%D0%B5%D1%89%D0%B0%D0%B5%D0%BC%D1%8B%D0%B9_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82) внутри блока элемента. На областях блока, не покрытых объектом замещаемого элемента, будет отображаться фон элемента.

Вы можете задавать способ подстройки собственного размера объекта замещаемого элемента (т. е., его естественного размера) под размер блока элемента, используя свойство {{cssxref("object-fit")}}.

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## Синтаксис

```css
/* значения <position> */
object-position: center top;
object-position: 100px 50px;

/* Глобальные значения */
object-position: inherit;
object-position: initial;
object-position: unset;
```

### Значения

- {{cssxref("&lt;position&gt;")}}
  - : От одного до четырёх значений, которые определяют 2D-позицию элемента. Могут использоваться как абсолютные, так и относительные значения сдвигов.

> **Примечание:** Позиция может быть даже такой, что замещаемый элемент будет отрисовываться за пределами своего блока.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Позиционирование изображений

#### HTML

Здесь мы видим HTML, содержащий два {{HTMLElement("img")}}-элемента, отображающие логотипы MDN.

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### CSS

CSS содержит стандартные стили для самого `<img>`-элемента, а также отдельные стили для обоих изображений.

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

Первое изображение расположено с отступом в 10 пикселей относительно левого края блока элемента. Второе изображение расположено своим правым краем впритык к правому краю блока элемента и сдвинуто вниз на 10% высоты блока элемента.

#### Результат

{{ EmbedLiveSample('Позиционирование_изображений', '100%','600px') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие CSS-свойства, связанные с изображениями: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
