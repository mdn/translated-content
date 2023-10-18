---
title: "@document"
slug: Web/CSS/@document
---

{{SeeCompatTable}}

**`@document`** [CSS](/ru/docs/Web/CSS) [at-rule](/ru/docs/Web/CSS/At-rule) ограничивает правила стиля, содержащиеся в нем, на основе URL-адреса документа. Он разработан в основном для пользовательских таблиц стилей, хотя он также может использоваться в авторских таблицах стилей.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Синтаксис

Правило `@document` может указывать одну или несколько подходящих функций. Если какая-либо из функций применяется к данному URL-адресу, это правило вступит в силу для этого URL-адреса. Доступны следующие функции:

- `url()`, который соответствует точному URL-адресу.
- `url-prefix()`, который совпадает, если URL-адрес документа начинается с указанного значения.
- `domain()`, который совпадает, если URL-адрес документа находится в предоставленном домене (или его субдомене).
- `media-document()`,с параметром видео, изображения, плагина или всего.
- `regexp()`, который совпадает, если URL-адрес документа сопоставляется с предоставленным [регулярным выражением](/ru/docs/Web/JavaScript/Guide/Regular_Expressions). Выражение должно соответствовать всему URL-адресу.

Значения, предоставляемые функциям `url()`, `url-prefix()`, `domain()`, и `media-document()` могут быть необязательно заключены в одинарные или двойные кавычки. Значения, предоставляемые функции `regexp()` должны быть заключены в кавычки. .

Экранированные значения, предоставляемые функции `regexp()` также должны быть экранированы из CSS. Например, `.` (период) соответствует любому символу в регулярных выражениях. Чтобы соответствовать буквальному периоду, вам сначала нужно избежать этого, используя правила регулярных выражений (`\.`), А затем убежать от этой строки с помощью правил CSS (`\\.`).

> **Примечание:** Существует версия -moz-prefixed этого свойства — `@-moz-document`. Это было ограничено использованием только в пользовательских и UA-листах в Firefox 59 в Nightly and Beta - эксперименте, предназначенном для смягчения потенциальных атак с помощью CSS-инъекций ({{bug(1035091)}}).

### Формальный синтаксис

{{csssyntax}}

## Пример

### CSS

```css
@document url(http://www.w3.org/),
          url-prefix(http://www.w3.org/Style/),
          domain(mozilla.org),
          media-document(video),
          regexp("https:.*") {
  /* CSS rules here apply to:
     - The page "http://www.w3.org/"
     - Any page whose URL begins with "http://www.w3.org/Style/"
     - Any page whose URL's host is "mozilla.org"
       or ends with ".mozilla.org"
     - Any standalone video
     - Any page whose URL starts with "https:" */

  /* Make the above-mentioned pages really ugly */
  body {
    color: purple;
    background: yellow;
  }
}
```

## Specifications

[Initially](http://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in {{SpecName('CSS3 Conditional')}}, `@document` has been [postponed](http://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) to Level 4.

## Browser compatibility

{{Compat}}

## See also

- [Per-site user style sheet rules](http://lists.w3.org/Archives/Public/www-style/2004Aug/0135) on the www-style mailing list.

{{CSSRef}}
