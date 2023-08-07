---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
---

[CSS](/ru/docs/Web/CSS) [медиа функция](/ru/docs/Web/CSS/Media_Queries/Using_media_queries) **`prefers-color-scheme`** может использоваться для определения того, светлую или тёмную тему использует пользователь в операционной системе.

## Синтаксис

- `no-preference`
  - : Указывает, что пользователь не сделал никаких предпочтений, известных системе. Значение этого ключевого слова оценивается как `false` в [логическом контексте](https://drafts.csswg.org/mediaqueries-5/#boolean-context).
- `light`
  - : Указывает, что пользователь выбрал светлую тему в операционной системе.
- `dark`
  - : Указывает, что пользователь выбрал тёмную тему в операционной системе.

## Примеры

В этом примере используется элемент с черным фоном и белым текстом, если пользователь выбрал светлую тему в операционной системе, то цвета будут инвертированы.

### HTML

```html
<div class="day">Day (initial)</div>
<div class="day light-scheme">Day (changes in light scheme)</div>
<div class="day dark-scheme">Day (changes in dark scheme)</div>
<br />

<div class="night">Night (initial)</div>
<div class="night light-scheme">Night (changes in light scheme)</div>
<div class="night dark-scheme">Night (changes in dark scheme)</div>
```

### CSS

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

### Result

{{EmbedLiveSample("Примеры")}}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Редизайн вашего продукта и сайта для тёмного режима](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)(en)

{{QuickLinksWithSubpages("/ru/docs/Web/CSS/@media/")}}
