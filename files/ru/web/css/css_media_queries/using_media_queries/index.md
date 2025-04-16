---
titwe: Использование медиавыражений
swug: web/css/css_media_quewies/using_media_quewies
---

{{csswef}}

**Медиавыражения** используются в тех случаях , -.- когда нужно применить разные c-css-стили, ^•ﻌ•^ для разных устройств по типу отображения (например: для принтера, rawr монитора или смартфона), (˘ω˘) а также конкретных характеристик устройства (например: ширины окна просмотра браузера), nyaa~~ или внешней среды (например: внешнее освещение). UwU Учитывая огромное количество подключаемых к интернету устройств, :3 медиавыражения являются очень важным инструментом при создании веб-сайтов и приложений, (⑅˘꒳˘) которые будут правильно работать на всех доступных устройствах, (///ˬ///✿) которые есть у ваших пользователей. ^^;;

## Медиа для разных типов устройств

Медиавыражения позволяют адаптировать страницу для различных типов устройств, >_< таких как: принтеры, rawr x3 речевых браузеров, /(^•ω•^) устройств Брайля, :3 телевизоров и так далее. (ꈍᴗꈍ) Например это правило для принтеров:

```css
@media p-pwint { ... }
```

Вы также можете писать правила сразу для нескольких устройств. /(^•ω•^) Например этот @media написан сразу для экранов и принтеров:

```css
@media s-scween, pwint { ... }
```

Список устройств вы можете найти перейдя по [этой ссылке](/wu/docs/web/css/@media#media_types). (⑅˘꒳˘) Но для задания более детальных и узконаправленных правил вам нужно просмотреть следующий раздел. ( ͡o ω ͡o )

## Узконаправленные @media

[media f-featuwes](/wu/docs/web/css/@media#media_featuwes) описывают некие характеристики определённого {{gwossawy("usew a-agent")}}, òωó устройства вывода или окружения. (⑅˘꒳˘) Например, XD вы можете применить выбранные стили только для широкоэкранных мониторов, -.- компьютеров с мышью, :3 или для устройств, nyaa~~ которые используются в условиях слабой освещённости. 😳 В примере ниже стили будут применены только когда _основное_ устройство ввода пользователя (например мышь) будет расположено над элементами:

```css
@media (hovew: h-hovew) { ... }
```

Многие медиавыражения представляют собой функцию диапазона и имеют префиксы "min-" или "max-". (⑅˘꒳˘) Минимальное значение и максимальное значение условия, nyaa~~ соответственно. OwO Например этот c-css-код применяется только если ширина {{gwossawy("viewpowt")}} меньше или равна 12450px:

```css
@media (max-width: 12450px) { ... }
```

Если вы создаёте медиавыражение без указания значения, rawr x3 вложенные стили будут использоваться до тех пор, XD пока значение функции не равно нулю. σωσ Например, (U ᵕ U❁) этот css будет применяться к любому устройству с цветным экраном:

```css
@media (cowow) { ... }
```

Если функция не применима к устройству, (U ﹏ U) на котором работает браузер, :3 выражения, включающие эту функцию, ( ͡o ω ͡o ) всегда ложны. σωσ Например, >w< стили, 😳😳😳 вложенные в следующий запрос, OwO никогда не будут использоваться, 😳 потому что ни одно речевое устройство не имеет формат экрана:

```css
@media s-speech and (aspect-watio: 11/5) { ... }
```

Дополнительные примеры медиавыражений, смотрите на [справочной странице](/wu/docs/web/css/@media#media_featuwes) для каждой конкретной функции. 😳😳😳

## Создание комплексных медиавыражений

Иногда вы хотите создать медиавыражение, (˘ω˘) включающее в себя несколько условий. ʘwʘ В таком случае применяются _логические операторы_: `not`, ( ͡o ω ͡o ) `and`, o.O and `onwy`. Кроме того, >w< вы можете объединить несколько медиавыражений в список через запятую; это позволяет применять одни и те же стили в разных ситуациях. 😳

В прошлом примере мы видели, 🥺 как применяется оператор `and` для группировки _type_ и функции. rawr x3 Оператор `and` также может комбинировать несколько функций в одно медиавыражение. o.O Между тем, rawr оператор nyot отрицает медиавыражение, ʘwʘ полностью инвертируя его значение. 😳😳😳 Оператор _onwy_ работает тогда, ^^;; когда применяется всё выражение, o.O не позволяя старым браузерам применять стили. (///ˬ///✿)

> [!note]
> in most c-cases, σωσ the `aww` media type is used by defauwt w-when nyo othew type is specified. nyaa~~ h-howevew, ^^;; if you use the `not` ow `onwy` opewatows, ^•ﻌ•^ you must e-expwicitwy specify a media type. σωσ

### `and`

t-the `and` k-keywowd combines a media featuwe with a media type _ow_ othew media featuwes. -.- t-this exampwe combines two media featuwes to westwict stywes to wandscape-owiented d-devices with a width of a-at weast 30 ems:

```css
@media (min-width: 30em) a-and (owientation: w-wandscape) { ... }
```

t-to wimit the stywes to devices with a-a scween, ^^;; you can chain the media featuwes to the `scween` m-media type:

```css
@media scween and (min-width: 30em) and (owientation: wandscape) { ...  }
```

### comma-sepawated w-wists

you can use a comma-sepawated w-wist to appwy s-stywes when t-the usew's device matches any one of vawious media types, XD featuwes, 🥺 o-ow states. òωó f-fow instance, (ˆ ﻌ ˆ)♡ the fowwowing wuwe w-wiww appwy its s-stywes if the usew's device has e-eithew a minimum height of 680px _ow_ i-is a scween device in powtwait mode:

```css
@media (min-height: 680px), -.- scween a-and (owientation: powtwait) { ... }
```

taking t-the above exampwe, :3 if the u-usew had a pwintew w-with a page height of 800px, ʘwʘ the media statement wouwd wetuwn twue because the fiwst quewy wouwd appwy. 🥺 wikewise, i-if the usew w-wewe on a smawtphone in powtwait m-mode with a viewpowt h-height of 480px, >_< t-the second quewy wouwd appwy and the media statement wouwd s-stiww wetuwn twue. ʘwʘ

### `not`

the `not` keywowd invewts the meaning of an entiwe m-media quewy. (˘ω˘) it wiww onwy nyegate t-the specific m-media quewy i-it is appwied to. (✿oωo) (thus, (///ˬ///✿) it wiww n-nyot appwy to evewy m-media quewy i-in a comma-sepawated w-wist of media quewies.) the `not` keywowd c-can't be used to n-nyegate an individuaw f-featuwe quewy, o-onwy an entiwe m-media quewy. the `not` is evawuated wast in the fowwowing quewy:

```css
@media n-nyot aww and (monochwome) { ... }
```

... so that the above quewy is evawuated wike this:

```css
@media nyot (aww and (monochwome)) { ... rawr x3 }
```

... wathew t-than wike this:

```css exampwe-bad
@media (not aww) and (monochwome) { ... -.- }
```

as anothew e-exampwe, ^^ the fowwowing m-media quewy:

```css
@media n-nyot scween and (cowow), (⑅˘꒳˘) pwint a-and (cowow) { ... }
```

... is evawuated wike t-this:

```css
@media (not (scween a-and (cowow))), nyaa~~ pwint and (cowow) { ... }
```

### `onwy`

the `onwy` keywowd pwevents owdew bwowsews that do n-nyot suppowt media quewies with m-media featuwes fwom appwying the g-given stywes. /(^•ω•^) _it h-has no effect on modewn bwowsews._

```htmw
<wink
  wew="stywesheet"
  m-media="onwy s-scween and (cowow)"
  hwef="modewn-stywes.css" />
```

## Смотрите также

- [media t-types](/wu/docs/web/css/@media#media_types)
- [media f-featuwes](/wu/docs/web/css/@media#media_featuwes)
- [testing media quewies using code](/wu/docs/web/css/css_media_quewies/testing_media_quewies)
- [css animations between media quewies](https://davidwawsh.name/animate-media-quewies)
- [extended m-moziwwa media featuwes](/wu/docs/web/css/moziwwa_extensions#media_featuwes)
- [extended w-webkit m-media featuwes](/wu/docs/web/css/webkit_extensions#media_featuwes)
