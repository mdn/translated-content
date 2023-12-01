---
title: scripting
slug: Web/CSS/@media/scripting
---

{{cssref}}

[CSS](/ru/docs/Web/CSS) [медиа функция](/ru/docs/Web/CSS/Media_Queries/Using_media_queries) **`scripting`** может использоваться для проверки доступности скриптов (таких как JavaScript)

## Синтаксис

Функция **`scripting`** указывается в качестве значения ключевого слова, выбранного из списка ниже.

- `none`
  - : Скрипты полностью недоступны в текущем документе.
- `initial-only`
  - : Скрипты включаются во время начальной загрузки страницы, но не после.
- `enabled`
  - : Скрипты поддерживаются и активны в текущем документе.

## Пример

### HTML

```html
<p class="script-none">You do not have scripting available. :-(</p>
<p class="script-initial-only">
  Your scripting is only enabled during the initial page load. Weird.
</p>
<p class="script-enabled">You have scripting enabled! :-)</p>
```

### CSS

```css
p {
  color: lightgray;
}

@media (scripting: none) {
  .script-none {
    color: red;
  }
}

@media (scripting: initial-only) {
  .script-initial-only {
    color: red;
  }
}

@media (scripting: enabled) {
  .script-enabled {
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
