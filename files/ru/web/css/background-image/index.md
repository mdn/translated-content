---
title: background-image
slug: Web/CSS/background-image
---

{{CSSRef}}

## Краткое описание

Свойство [CSS](/ru/docs/CSS) **`background-image`** устанавливает одно или несколько фоновых изображений для элемента. Изображения рисуются в слоях контекстов наложения одно поверх другого. Первый слой выводится так, чтобы он был ближе всего к пользователю.

[Границы](/ru/CSS/border) {{cssxref("border")}} элемента затем рисуются поверх них, и {{cssxref("background-color")}} рисуется под ними. То, как изображения отрисовываются относительно рамки и её границ, определяется CSS-свойствами {{cssxref("background-clip")}} и {{cssxref("background-origin")}}.

Если указанное изображение не может быть нарисовано (например, когда файл, определённый указанным URI, не может быть загружен), браузеры обрабатывают его так, как если бы оно было значением `none`.

> **Примечание:** Даже, если изображение непрозрачно и цвет не будет показан при нормальных обстоятельствах, веб-разработчику следует всегда указывать атрибут {{cssxref("background-color")}}. Если изображение не может быть загружено —например, в случае отказа сетевого подключения — у элемента будет отображён цветной фон.

{{cssinfo}}

## Синтаксис

```css
background-image: none;
background-image: url(http://www.example.com/bck.png);

background-image: inherit;
```

### Значения

- `none`
  - : Это ключевое слово обозначает отсутствие изображений.
- `<image>`
  - : {{cssxref("&lt;image&gt;")}} обозначает изображение для отображения. Их может быть несколько, разделённых запятыми, поскольку поддерживается[несколько фонов](/ru/docs/CSS/Multiple_backgrounds).

### Официальный синтаксис

{{csssyntax("background-image")}}

## Примеры

### Несколько фонов и прозрачность

Обратите внимание, что изображение звезды частично прозрачно и наложено на изображение кошки.

#### HTML содержимое

```html
<div>
  <p class="catsandstars">This paragraph is full of cats<br />and stars.</p>
  <p>This paragraph is not.</p>
  <p class="catsandstars">Here are more cats for you.<br />Look at them!</p>
  <p>And no more.</p>
</div>
```

#### CSS содержимое

```css
pre,
p {
  font-size: 1.5em;
  color: #fe7f88;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

p {
  background-image: none;
}

.catsandstars {
  background-image: url("startransparent.gif"), url("catfront.png");
  background-color: transparent;
}
```

{{EmbedLiveSample('Multiple_backgrounds_and_transparency')}}

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- [CSS спрайты изображений](/ru/docs/Web/Guide/CSS/CSS_Image_Sprites)
- {{HTMLElement("img")}}
- Статьи, связанные с изображениями:: {{cssxref("&lt;image&gt;")}}, {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, {{cssxref("element")}}.
