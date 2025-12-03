---
title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTMLSidebar}}

Значение **`theme-color`** атрибута [`name`](/ru/docs/Web/HTML/Reference/Elements/meta#name) элемента {{htmlelement("meta")}} указывает на рекомендуемый цвет, который пользовательские агенты должны использовать для настройки отображения страницы или окружающего пользовательского интерфейса. Атрибут [`content`](/ru/docs/Web/HTML/Reference/Elements/meta#content), если указан, должен содержать допустимое значение CSS {{cssxref("&lt;color&gt;")}}.

## Примеры

```html
<meta name="theme-color" content="#4285f4" />
```

Следующее изображение показывает эффект применения элемента {{htmlelement("meta")}} из примера выше на страницу, отображаемую в Chrome на мобильном устройстве Android.

![Изображение, показывающее эффект использования theme-color](theme-color.png)

_Источник изображения: [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), создано и предоставлено Google, используется в соответствии с условиями, описанными в [лицензии Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/)._

Можно указать тип медиа или медиа-запрос в атрибуте [`media`](/ru/docs/Web/HTML/Reference/Elements/meta#media), тогда цвет будет установлен только в том случае, если условие выполнено. Например:

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Свойство CSS {{cssxref("color-scheme")}}
- Медиа-запрос [`prefers-color-scheme`](/ru/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
