---
title: "@font-face"
slug: Web/CSS/@font-face
---

**`@font-face`** [CSS](/ru/docs/CSS) [@-правило](/ru/docs/CSS/At-rule) позволяет указать шрифты для отображения текста на веб-страницах, которые могут быть загружены либо с удалённого сервера, либо с компьютера пользователя. Если в правиле была объявлена функция `local()`, с названием шрифта, то будет производиться поиск на компьютере пользователя, и в случае обнаружения будет использован этот шрифт. Иначе будет скачан и использован шрифт, указанный в функции `url()`. `@font-face` позволяет разрабатывать контент не ограничиваясь набором "безопасных" шрифтов (шрифтов, которые настолько распространены, что считаются доступными по умолчанию). Возможность определить локально установленный шрифт позволяет более гибко настраивать шрифты не полагаясь на соединение с интернетом.Распространённым случаем является одновременное использование `url()` и `local()`, чтобы использовать локальный шрифт, если он доступен, или иначе скачать копию шрифта.Это правило может использоваться не только на верхнем уровне CSS, но и внутри любого [@-правила](/ru/docs/CSS/At-rule).

```css
@font-face {
  font-family: "Open Sans";
  src:
    url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

## Синтаксис

### Descriptors

- {{cssxref("@font-face/font-display", "font-display")}}
  - : Определяет как отображается шрифт, основываясь на том, был ли он загружен и готов ли к использованию.

<!---->

- {{cssxref("@font-face/font-family", "font-family")}}
  - : Указывает имя шрифта, которое будет использоваться для задания свойств шрифта.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Значение {{cssxref("font-stretch")}}.
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Значение {{cssxref("font-style")}}.
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Значение {{cssxref("font-weight")}}.
- {{cssxref("@font-face/font-variant", "font-variant")}}
  - : Значение {{cssxref("font-variant")}}.
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Позволяет контролировать другие расширенные особенности OpenType-шрифтов.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Позволяет осуществлять низкоуровневый контроль над вариациями OpenType и TrueType шрифтов, указывая четырёхбуквенные названия осей для изменения вместе с их значениями.
- {{cssxref("@font-face/src", "src")}}

  - : Задаёт ресурс, содержащий данные шрифта. Это может быть URL-адрес расположения удалённого файла шрифта или имя шрифта на компьютере пользователя.

    Чтобы дать браузеру возможность выбрать наиболее подходящий формат шрифта, его можно указать при объявлении внутри функции `format()`:
    src: url(ideal-sans-serif.woff) format("woff"),
    url(basic-sans-serif.ttf) format("opentype");Список доступных форматов: `"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"`, и `"svg"`.

<!---->

- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Диапазон Unicode кодов, который будет использоваться в шрифте.

### Formal syntax

{{csssyntax}}

## Примеры

Этот пример просто указывает загружаемый шрифт для использования и применяет его ко всему телу документа:

[Смотреть живой пример](https://mdn.mozillademos.org/files/7775/webfont-sample.html)

```html
<html>
  <head>
    <title>Web Font Sample</title>
    <style type="text/css" media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    This is Bitstream Vera Serif Bold.
  </body>
</html>
```

В этом примере используется локальный пользовательский шрифт "Helvetica Neue Bold"; если у пользователя этот шрифт не установлен (используются два различных имени), тогда вместо него используется загружаемый шрифт с названием "MgOpenModernaBold.ttf":

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

## MIME-типы шрифтов

| Формат                 | MIME-тип     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open File Format   | `font/woff`  |
| Web Open File Format 2 | `font/woff2` |

## Примечания

- Веб шрифты попадают под правило ограничения домена (файлы шрифтов должны находиться на том же самом домене, что и использующая их страница), если это ограничение не снимается с помощью [CORS](/ru/docs/Glossary/CORS).
- @font-face не может быть объявлен внутри CSS-селектора. Следующий пример не будет работать:

  ```css example-bad
  .className {
    @font-face {
      font-family: MyHelvetica;
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url(MgOpenModernaBold.ttf);
      font-weight: bold;
    }
  }
  ```

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [About WOFF](/ru/docs/WOFF)
- [Everythingfonts font-face generator](https://everythingfonts.com/font-face)
- [FontSquirrel @font-face generator](http://www.fontsquirrel.com/fontface/generator)
- [Beautiful fonts with @font-face](http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Open Font Library](http://openfontlibrary.org/)
- [Microsoft Developer Network (MSDN) @font-face reference](<http://msdn.microsoft.com/en-us/library/ms530757(VS.85).aspx>)
- [When can I use WOFF?](http://caniuse.com/woff)
- [When can I use SVG Fonts?](http://caniuse.com/svg-fonts)

{{CSSRef}}
