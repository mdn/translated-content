---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
---

{{cssref}}

[CSS](/ru/docs/Web/CSS) [медиа функция](/ru/docs/Web/CSS/Media_Queries/Using_media_queries) **`inverted-colors`** может использоваться для проверки, инвертирует ли {{glossary("user agent")}} или ОС цвета.

## Синтаксис

Функция `inverted-colors` указана в качестве значения ключевого слова, выбранного из списка ниже.

- `none`
  - : Цвета отображаются нормально.
- `inverted`
  - : Все пиксели в отображаемой области были инвертированы.

## Пример

### HTML

```html
<p>
  Если вы используете инвертированные цвета, этот текст должен быть синим по
  белому (инверсия жёлтого по чёрному). Если нет, он должен быть красным на
  светло-сером.
</p>
<p>
  Если текст серого цвета, ваш браузер не поддерживает медиа-функцию
  `inverted-colors`.
</p>
```

### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
  }
}
```

### Result

{{EmbedLiveSample("Пример")}}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
