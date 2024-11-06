---
title: a
slug: Web/SVG/Element/a
l10n:
  sourceCommit: fa8a44b8bff24a4032181c4fd155c459c0dc9161
---

{{SVGRef}}

SVG элемент **\<a>** создаёт гиперссылку на другие веб-страницы, файлы, позиции в этом же документе, email-адреса или другие URL. Очень похож на элемент HTML {{htmlelement("a")}}.

SVG элемент `<a>` является контейнером. Это означает, что вы можете обернуть текст в ссылку (как в HTML). Таким же образом можно обернуть фигуру.

## Пример

```css hidden
@namespace svg url(http://www.w3.org/2000/svg);
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Ссылка в фигуре -->
  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- Ссылка в тексте -->
  <a href="/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* Так как SVG по умолчанию не предоставляет визуальных стилей для ссылок,
   будет лучше задать их самостоятельно */

@namespace svg url(http://www.w3.org/2000/svg);
/* Необходимо выделить только SVG элементы <a>, но не HTML.
   Смотрите предупреждение ниже */

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* Даже для текста SVG использует заливку */
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample("Пример", 100, 100)}}

> [!WARNING]
> Поскольку имя этого элемента совпадает с [элементом HTML `<a>`](/ru/docs/Web/HTML/Element/a), обращение `a` в CSS или [`querySelector`](/ru/docs/Web/API/Document/querySelector) может выбрать не тот тип элемента, который требуется. Используйте [правило `@namespace`](/ru/docs/Web/CSS/@namespace), чтобы разделять их.

## Атрибуты

- [`download`](/ru/docs/Web/HTML/Element/a#download) {{experimental_inline}}
  - : Указывает браузеру выполнить загрузку по {{Glossary("URL")}}, вместо того, чтобы переходить по нему. Таким образом пользователю будет предложено сохранить файл локально.
    _Тип_: **\<string>** ;_Значение по умолчанию_: _none_;_Анимируем_: **нет**
- {{SVGAttr("href")}}
  - : {{Glossary("URL")}} или фрагмент URL для перехода.
    _Тип_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- [`hreflang`](/ru/docs/Web/HTML/Element/a#hreflang)
  - : URL на человеческом языке или фрагмент URL для перехода.
    _Тип_: **\<string>**; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- [`ping`](/ru/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : Разделённый пробелами список URL при переходе по которым браузер будет отправлять [`POST`](/ru/docs/Web/HTTP/Methods/POST) запросы с телом `PING` (в фоне). Обычно используется для трекинга.
    _Тип_: **[\<list-of-URLs>](/docs/Web/SVG/Content_type#List-of-Ts)**; _Значение по умолчанию_: _none_; _Анимируем_: **нет**
- [`referrerpolicy`](/ru/docs/Web/HTML/Element/a#referrerpolicy) {{experimental_inline}}
  - : Какой [referrer](/ru/docs/Web/HTTP/Headers/Referer) отправить при получении {{Glossary("URL")}}.
    _Тип_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Значение по умолчанию_: _none_; _Анимируем_: **нет**
- [`rel`](/ru/docs/Web/HTML/Element/a#rel) {{experimental_inline}}
  - : Отношение между целевым объектом и объектом link.
    _Тип_: **[\<list-of-Link-Types>](/docs/Web/HTML/Link_types)** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- {{SVGAttr("target")}}
  - : Где отобразить переход {{Glossary("URL")}}.
    _Тип_: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; _Значение по умолчанию_: `_self`; _Анимируем_: **да**
- [`type`](/ru/docs/Web/HTML/Element/a#type)
  - : {{Glossary("MIME type")}} для ссылки URL.
    _Тип_: **\<string>** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : URL или фрагмент URL, на который указывает гиперссылка. Может понадобиться для обратной совместимости со старыми браузерами.
    _Тип_: **[\<URL>](/docs/Web/SVG/Content_type#URL)** ; _Значение по умолчанию_: _none_; _Анимируем_: **да**

## Примечания по использованию

{{svginfo}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
