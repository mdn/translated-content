---
title: background-clip
slug: Web/CSS/background-clip
---

{{CSSRef}}

## Описание

Свойство CSS **`background-clip`** определяет как цвет фона или фоновое изображение будут выводиться под границами блока.

Если фоновое изображение или цвет не заданы, это свойство будет иметь визуальный эффект, только если у границы есть прозрачные области или частично непрозрачные области (из-за {{cssxref("border-style")}} или {{cssxref("border-image")}}); в противном случае граница скрывает разницу.

## Синтаксис

```css
/* Значения ключевых слов */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Глобальные значения */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```

### Значения

- `border-box`
  - : Фон распространяется до внешнего края границы (но под границей в z-порядке).
- `padding-box`
  - : Фон распространяется до внешнего края отступа. Под границей фон не рисуется.
- `content-box`
  - : Фон закрашивается внутри (обрезается) поля содержимого.
- `text` {{experimental_inline}}
  - : Фон закрашивается внутри (обрезается) текста переднего плана.

### Формальный синтаксис

{{csssyntax}}

## Примеры

#### HTML

```html
<p class="border-box">The background extends behind the border.</p>
<p class="padding-box">
  The background extends to the inside edge of the border.
</p>
<p class="content-box">
  The background extends only to the edge of the content box.
</p>
<p class="text">The background is clipped to the foreground text.</p>
```

#### CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  color: rgba(0, 0, 0, 0.2);
}
```

#### Результат

{{EmbedLiveSample('Example', 600, 580)}}

## Спецификации

| Спецификация                                                                | Статус                        | Комментарий                 |
| --------------------------------------------------------------------------- | ----------------------------- | --------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-clip', 'background-clip')}} | {{Spec2('CSS3 Backgrounds')}} | Первоначальное определение. |
| {{SpecName('CSS4 Backgrounds', '#background-clip', 'background-clip')}}     | {{Spec2('CSS4 Backgrounds')}} | Добавляет значение `text`.  |

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Свойство {{cssxref("clip-path")}} создаёт область отсечения, которая определяет, которая определяет, какая часть целого элемента должна отображаться.
- Свойства фона: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}
- [Введение в блочную модель CSS](/ru/docs/Web/CSS/box_model)
