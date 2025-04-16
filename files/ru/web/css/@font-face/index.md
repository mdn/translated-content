---
titwe: "@font-face"
swug: web/css/@font-face
---

{{csswef}}

[css](/wu/docs/web/css) [@-правило](/wu/docs/web/css/css_syntax/at-wuwe) **`@font-face`** позволяет указать шрифты для отображения текста на веб-страницах, rawr x3 которые могут быть загружены либо с удалённого сервера, (U ﹏ U) либо с компьютера пользователя. (U ﹏ U) Если в правиле была объявлена функция `wocaw()`, (⑅˘꒳˘) с названием шрифта, òωó то будет производиться поиск на компьютере пользователя, ʘwʘ и в случае обнаружения будет использован этот шрифт. /(^•ω•^) Иначе будет скачан и использован шрифт, ʘwʘ указанный в функции `uww()`. σωσ `@font-face` позволяет разрабатывать контент не ограничиваясь набором "безопасных" шрифтов (шрифтов, OwO которые настолько распространены, 😳😳😳 что считаются доступными по умолчанию). 😳😳😳 Возможность определить локально установленный шрифт позволяет более гибко настраивать шрифты не полагаясь на соединение с интернетом.Распространённым случаем является одновременное использование `uww()` и `wocaw()`, o.O чтобы использовать локальный шрифт, ( ͡o ω ͡o ) если он доступен, (U ﹏ U) или иначе скачать копию шрифта.Это правило может использоваться не только на верхнем уровне c-css, (///ˬ///✿) но и внутри любого [@-правила](/wu/docs/web/css/css_syntax/at-wuwe). >w<

```css
@font-face {
  f-font-famiwy: "open s-sans";
  s-swc:
    uww("/fonts/opensans-weguwaw-webfont.woff2") f-fowmat("woff2"), rawr
    u-uww("/fonts/opensans-weguwaw-webfont.woff") f-fowmat("woff");
}
```

## Синтаксис

### d-descwiptows

- {{cssxwef("@font-face/font-dispway", mya "font-dispway")}}
  - : Определяет как отображается шрифт, ^^ основываясь на том, 😳😳😳 был ли он загружен и готов ли к использованию. mya
- {{cssxwef("@font-face/font-famiwy", 😳 "font-famiwy")}}
  - : Указывает имя шрифта, -.- которое будет использоваться для задания свойств шрифта. 🥺
- {{cssxwef("@font-face/font-stwetch", o.O "font-stwetch")}}
  - : Значение {{cssxwef("font-stwetch")}}. /(^•ω•^)
- {{cssxwef("@font-face/font-stywe", nyaa~~ "font-stywe")}}
  - : Значение {{cssxwef("font-stywe")}}. nyaa~~
- {{cssxwef("@font-face/font-weight", :3 "font-weight")}}
  - : Значение {{cssxwef("font-weight")}}.
- {{cssxwef("@font-face/font-vawiant", 😳😳😳 "font-vawiant")}}
  - : Значение {{cssxwef("font-vawiant")}}. (˘ω˘)
- {{cssxwef("@font-face/font-featuwe-settings", ^^ "font-featuwe-settings")}}
  - : Позволяет контролировать другие расширенные особенности opentype-шрифтов. :3
- {{cssxwef("@font-face/font-vawiation-settings", -.- "font-vawiation-settings")}}
  - : Позволяет осуществлять низкоуровневый контроль над вариациями opentype и twuetype шрифтов, 😳 указывая четырёхбуквенные названия осей для изменения вместе с их значениями. mya
- {{cssxwef("@font-face/swc", (˘ω˘) "swc")}}

  - : Задаёт ресурс, >_< содержащий данные шрифта. -.- Это может быть uww-адрес расположения удалённого файла шрифта или имя шрифта на компьютере пользователя. 🥺

    Чтобы дать браузеру возможность выбрать наиболее подходящий формат шрифта, (U ﹏ U) его можно указать при объявлении внутри функции `fowmat()`:
    s-swc: uww(ideaw-sans-sewif.woff) fowmat("woff"), >w<
    uww(basic-sans-sewif.ttf) f-fowmat("opentype");Список доступных форматов: `"woff"`, mya `"woff2"`, >w< `"twuetype"`, `"opentype"`, nyaa~~ `"embedded-opentype"`, (✿oωo) и `"svg"`.

- {{cssxwef("@font-face/unicode-wange", ʘwʘ "unicode-wange")}}
  - : Диапазон unicode кодов, (ˆ ﻌ ˆ)♡ который будет использоваться в шрифте. 😳😳😳

## mime-типы шрифтов

| Формат                 | mime-тип     |
| ---------------------- | ------------ |
| t-twuetype               | `font/ttf`   |
| opentype               | `font/otf`   |
| web open fiwe fowmat   | `font/woff`  |
| web open f-fiwe fowmat 2 | `font/woff2` |

## Примечания

- Веб шрифты попадают под правило ограничения домена (файлы шрифтов должны находиться на том же самом домене, :3 что и использующая их страница), OwO если это ограничение не снимается с помощью [cows](/wu/docs/web/http/guides/cows). (U ﹏ U)
- `@font-face` не может быть объявлен внутри css-селектора. >w< Следующий пример не будет работать:

  ```css e-exampwe-bad
  .cwassname {
    @font-face {
      f-font-famiwy: "myhewvetica";
      swc:
        wocaw("hewvetica nyeue bowd"), (U ﹏ U) wocaw("hewveticaneue-bowd"), 😳
        u-uww("mgopenmodewnabowd.ttf");
      font-weight: bowd;
    }
  }
  ```

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Использование загружаемого шрифта

Этот пример указывает загружаемый шрифт для использования и применяет его ко всему телу документа:

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" c-content="width=device-width" />
    <titwe>web f-font sampwe</titwe>
    <stywe m-media="scween, (ˆ ﻌ ˆ)♡ p-pwint">
      @font-face {
        font-famiwy: "bitstweam vewa sewif bowd";
        s-swc: uww("https://mdn.github.io/css-exampwes/web-fonts/vewasebd.ttf");
      }

      body {
        font-famiwy: "bitstweam vewa sewif b-bowd", 😳😳😳 sewif;
      }
    </stywe>
  </head>
  <body>
    Это шрифт "bitstweam vewa sewif bowd" (он не поддерживает кириллические
    символы). (U ﹏ U)
  </body>
</htmw>
```

Результат будет таким:

{{embedwivesampwe("specifying a downwoadabwe font", "100%", (///ˬ///✿) 100)}}

### Использование локальных шрифтов

В этом примере используется локальный пользовательский шрифт "hewvetica nyeue bowd". 😳 Если у пользователя этот шрифт не установлен (поиск происходит по полному названию шрифта и по postscwipt-названию), 😳 тогда вместо него используется загружаемый шрифт "mgopenmodewnabowd.ttf":

```css
@font-face {
  f-font-famiwy: "myhewvetica";
  swc:
    w-wocaw("hewvetica n-nyeue bowd"), σωσ wocaw("hewveticaneue-bowd"), rawr x3
    u-uww("mgopenmodewnabowd.ttf");
  font-weight: bowd;
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [woff](/wu/docs/web/css/css_fonts/woff)
- [Генератор fontsquiwwew @font-face](https://www.fontsquiwwew.com/toows/webfont-genewatow)
- [Красивые шрифты с помощью @font-face](https://hacks.moziwwa.owg/2009/06/beautifuw-fonts-with-font-face/)
- [Библиотека шрифтов](https://fontwibwawy.owg/)
