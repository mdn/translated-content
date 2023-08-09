---
title: Ориентация
slug: Web/CSS/@media/orientation
---

{{cssref}}

[CSS](/ru/docs/CSS) [медиа-функции](/ru/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) **`orientation`** может использоваться для проверки ориентации области {{glossary("просмотра")}} (или поля страницы для [медийных страниц](/ru/docs/Web/CSS/Paged_media)).

> **Примечание:** Эта функция не соответствует ориентации _устройства_. Открытие программной клавиатуры на многих устройствах в книжной ориентации приведёт к тому, что область просмотра станет шире, чем высокая, в результате чего браузер будет использовать альбомные стили вместо портретного.

## Синтаксис

Функция `orientation` указывается в качестве значения ключевого слова, выбранного из списка ниже.

### Значения ключевых слов

- `portrait`
  - : Окно просмотра находится в портретной ориентации, то есть высота больше или равна ширине.
- `landscape`
  - : Окно просмотра находится в альбомной ориентации, то есть ширина больше высоты.

## Пример

### HTML

```html
<div>Вставка 1</div>
<div>Вставка 2</div>
<div>Вставка 3</div>
```

### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

### Результат

{{EmbedLiveSample("Пример")}}

## Характеристики

| Спецификация                                                      | Статус                          | Комментарий            |
| ----------------------------------------------------------------- | ------------------------------- | ---------------------- |
| {{SpecName('CSS4 Media Queries', '#orientation', 'orientation')}} | {{Spec2('CSS4 Media Queries')}} | Бе изменений.          |
| {{SpecName('CSS3 Media Queries', '#orientation', 'orientation')}} | {{Spec2('CSS3 Media Queries')}} | Начальное определение. |

## Совместимость браузеров

{{Compat}}
