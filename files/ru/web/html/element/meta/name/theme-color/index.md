---
title: theme-color
slug: Web/HTML/Element/meta/name/theme-color
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTMLSidebar}}

Значение **`theme-color`** для атрибута [`name`](/ru/docs/Web/HTML/Element/meta#name) элемента {{htmlelement("meta")}} указывает на рекомендуемый цвет, который юзерагенты должны использовать для настройки отображения страницы или окружающего пользовательского интерфейса. Атрибут [`content`](/ru/docs/Web/HTML/Element/meta#content), если задан, должен содержать допустимое значение CSS {{cssxref("&lt;color&gt;")}}.

## Примеры

```html
<meta name="theme-color" content="#4285f4" />
```

Следующее изображение показывает эффект, который элемент {{htmlelement("meta")}} выше окажет страницу, отображаемую в Chrome на Android.

![Изображение, показывающее эффект использования theme-color](theme-color.png)

_Источник изображения: [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), создано и предоставлено Google, используется в соответствии с условиями, описанными в [лицензии Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/)._

Вы можете указать тип медиа или медиа-запрос в атрибуте [`media`](/ru/docs/Web/HTML/Element/meta#media); цвет будет установлен только в том случае, если условие медиа истинно. Например:

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
- Медиа-запрос [`prefers-color-scheme`](/ru/docs/Web/CSS/@media/prefers-color-scheme)
