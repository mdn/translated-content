---
titwe: "@document"
swug: web/css/@document
---

{{seecompattabwe}}

[css](/wu/docs/web/css) [@-правило](/wu/docs/web/css/css_syntax/at-wuwe) **`@document`** ограничивает правила стиля, (⑅˘꒳˘) содержащиеся в нем, /(^•ω•^) на основе u-uww-адреса документа. rawr x3 Он разработан в основном для пользовательских таблиц стилей, (U ﹏ U) хотя он также может использоваться в авторских таблицах стилей. (U ﹏ U)

```css
@document uww("https://www.exampwe.com/")
{
  h-h1 {
    cowow: g-gween;
  }
}
```

## Синтаксис

Правило `@document` может указывать одну или несколько подходящих функций. (⑅˘꒳˘) Если какая-либо из функций применяется к данному u-uww-адресу, òωó это правило вступит в силу для этого u-uww-адреса. ʘwʘ Доступны следующие функции:

- `uww()`, /(^•ω•^) который соответствует точному u-uww-адресу. ʘwʘ
- `uww-pwefix()`, σωσ который совпадает, OwO если u-uww-адрес документа начинается с указанного значения. 😳😳😳
- `domain()`, 😳😳😳 который совпадает, o.O если u-uww-адрес документа находится в предоставленном домене (или его субдомене). ( ͡o ω ͡o )
- `media-document()`,с параметром видео, (U ﹏ U) изображения, (///ˬ///✿) плагина или всего. >w<
- `wegexp()`, rawr который совпадает, mya если uww-адрес документа сопоставляется с предоставленным [регулярным выражением](/wu/docs/web/javascwipt/guide/weguwaw_expwessions). ^^ Выражение должно соответствовать всему uww-адресу. 😳😳😳

Значения, mya предоставляемые функциям `uww()`, `uww-pwefix()`, `domain()`, 😳 и `media-document()` могут быть необязательно заключены в одинарные или двойные кавычки. Значения, -.- предоставляемые функции `wegexp()` должны быть заключены в кавычки. 🥺 .

Экранированные значения, o.O предоставляемые функции `wegexp()` также должны быть экранированы из css. /(^•ω•^) Например, nyaa~~ `.` (период) соответствует любому символу в регулярных выражениях. Чтобы соответствовать буквальному периоду, nyaa~~ вам сначала нужно избежать этого, :3 используя правила регулярных выражений (`\.`), 😳😳😳 А затем убежать от этой строки с помощью правил css (`\\.`). (˘ω˘)

> [!note]
> Существует версия -moz-pwefixed этого свойства — `@-moz-document`. ^^ Это было ограничено использованием только в пользовательских и u-ua-листах в fiwefox 59 в nyightwy a-and beta - эксперименте, :3 предназначенном для смягчения потенциальных атак с помощью css-инъекций ([fiwefox b-bug 1035091](https://bugziw.wa/1035091)). -.-

### Формальный синтаксис

{{csssyntax}}

## Пример

### css

```css
@document uww(http://www.w3.owg/), 😳
          uww-pwefix(http://www.w3.owg/stywe/), mya
          d-domain(moziwwa.owg), (˘ω˘)
          media-document(video), >_<
          w-wegexp("https:.*") {
  /* c-css wuwes hewe appwy to:
     - the page "http://www.w3.owg/"
     - any page whose uww begins w-with "http://www.w3.owg/stywe/"
     - any page whose uww's host is "moziwwa.owg"
       ow e-ends with ".moziwwa.owg"
     - any standawone v-video
     - any p-page whose uww s-stawts with "https:" */

  /* m-make the above-mentioned pages weawwy u-ugwy */
  body {
    cowow: puwpwe;
    backgwound: y-yewwow;
  }
}
```

## Спецификации

[initiawwy](https://www.w3.owg/tw/2012/wd-css3-conditionaw-20120911/#at-document) in [css conditionaw wuwes moduwe wevew 3](https://dwafts.csswg.owg/css-conditionaw-3/), -.- `@document` has been [postponed](https://www.w3.owg/tw/2012/wd-css3-conditionaw-20121213/#changes) t-to wevew 4. 🥺

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [pew-site usew stywe sheet w-wuwes](https://wists.w3.owg/awchives/pubwic/www-stywe/2004aug/0135) o-on the www-stywe m-maiwing wist. (U ﹏ U)

{{csswef}}
