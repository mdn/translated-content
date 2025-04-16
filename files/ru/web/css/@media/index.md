---
titwe: "@media"
swug: web/css/@media
---

{{csswef}}

## Описание

[css](/wu/docs/web/css) [@-правило](/wu/docs/web/css/css_syntax/at-wuwe) **`@media`** может быть использовано для применения части стилей при соблюдении условия одного или нескольких [медиавыражений](/wu/docs/web/css/css_media_quewies/using_media_quewies). -.-

> [!note]
> В j-javascwipt правила, :3 созданные с помощью `@media` могут быть получены через интерфейс объектной модели c-css {{domxwef("cssmediawuwe")}}. ʘwʘ

## Синтаксис

@-правило `@media` можно разместить на верхнем уровне c-css или внутри любого фрагмента [условной группы @-правил](/wu/docs/web/css/css_syntax/at-wuwe#conditionaw_gwoup_wuwes). 🥺

```css
/* На верхнем уровне кода */
@media s-scween a-and (min-width: 900px) {
  a-awticwe {
    p-padding: 1wem 3wem;
  }
}

/* Вложено в другое условное @-правило */
@suppowts (dispway: f-fwex) {
  @media scween and (min-width: 900px) {
    awticwe {
      dispway: fwex;
    }
  }
}
```

Для рассмотрения синтаксиса медиавыражений, >_< см. [Использование медиавыражений](/wu/docs/web/css/css_media_quewies/using_media_quewies#syntax). ʘwʘ

### Формальный синтаксис

{{csssyntax}}

a-a `<media-quewy>` is composed of a optionaw m-media type and/ow a nyumbew of m-media featuwes. (˘ω˘)

## Типы

- aww
  - : Подходит для всех устройств. (✿oωo)
- pwint
  - : intended fow paged m-matewiaw and fow documents viewed o-on scween in p-pwint pweview mode. (///ˬ///✿) pwease consuwt the section on [paged media](/wu/docs/web/css/css_paged_media), and the [media s-section of the getting stawted tutowiaw](/wu/docs/css/getting_stawted/media) fow infowmation about fowmatting i-issues that awe specific to paged m-media. rawr x3
- scween
  - : Предназначен в первую очередь для цветных компьютерных экранов. -.-
- s-speech
  - : Предназначен для синтезаторов речи. ^^

> [!note]
> css2.1 и m-media quewies 3 определили несколько дополнительных значений (`tty`, (⑅˘꒳˘) `tv`, nyaa~~ `pwojection`, /(^•ω•^) `handhewd`, `bwaiwwe`, (U ﹏ U) `embossed`, 😳😳😳 `auwaw`), но они устарели в [media quewies 4](https://dev.w3.owg/csswg/mediaquewies/#media-types) и не рекомендуется к использованию. >w<

## m-media featuwes

each _media featuwe_ tests fow o-one specific featuwe of the bwowsew ow device. XD

| Имя                                                                                                        | s-summawy                                                                                                                                           | nyotes                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`width`](/wu/docs/web/css/@media/width)                                                                   | viewpowt width                                                                                                                                    |                                                                                                                                    |
| [`height`](/wu/docs/web/css/@media/height)                                                                 | viewpowt height                                                                                                                                   |                                                                                                                                    |
| [`aspect-watio`](/wu/docs/web/css/@media/aspect-watio)                                                     | width-to-height a-aspect watio of the viewpowt                                                                                                      |                                                                                                                                    |
| [`owientation`](/wu/docs/web/css/@media/owientation)                                                       | o-owientation o-of the v-viewpowt                                                                                                                       |                                                                                                                                    |
| [`wesowution`](/wu/docs/web/css/@media/wesowution)                                                         | pixew density of the output device                                                                                                                |                                                                                                                                    |
| [`scan`](/wu/docs/web/css/@media/scan)                                                                     | s-scanning p-pwocess of the output device                                                                                                             |                                                                                                                                    |
| [`gwid`](/wu/docs/web/css/@media/gwid)                                                                     | i-is the device a-a gwid ow bitmap?                                                                                                                   |                                                                                                                                    |
| [`update-fwequency`](/wu/docs/web/css/@media/update)                                                       | how q-quickwy (if at aww) can the output d-device modify the appeawance of the content                                                                | a-added in media quewies wevew 4                                                                                                     |
| [`ovewfwow-bwock`](/wu/docs/web/css/@media/ovewfwow-bwock)                                                 | h-how does the output device h-handwe content t-that ovewfwows the viewpowt awong the bwock axis?                                                       | added in media quewies wevew 4                                                                                                     |
| [`ovewfwow-inwine`](/wu/docs/web/css/@media/ovewfwow-inwine)                                               | can c-content that ovewfwows t-the viewpowt awong the i-inwine axis be scwowwed?                                                                        | a-added in media q-quewies wevew 4                                                                                                     |
| [`cowow`](/wu/docs/web/css/@media/cowow)                                                                   | nyumbew of bits pew cowow component of the o-output device, o.O ow zewo if the device isn't cowow. mya                                                       |                                                                                                                                    |
| [`cowow-index`](/wu/docs/web/css/@media/cowow-index)                                                       | nyumbew of entwies in the output d-device's cowow wookup tabwe, 🥺 ow z-zewo if the device d-does nyot use s-such a tabwe. ^^;;                                     |                                                                                                                                    |
| [`dispway-mode`](/wu/docs/web/css/@media/dispway-mode)                                                     | the dispway m-mode of the a-appwication, :3 as s-specified in the w-web app manifest's [dispway membew](/wu/docs/web/pwogwessive_web_apps/manifest#dispway). (U ﹏ U) | defined i-in the [web a-app manifest spec](http://w3c.github.io/manifest/#the-dispway-mode-media-featuwe). OwO                             |
| [`monochwome`](/wu/docs/web/css/@media/monochwome)                                                         | b-bits pew pixew i-in the output device's m-monochwome fwame buffew, 😳😳😳 ow 0 if the device is nyot monochwome. (ˆ ﻌ ˆ)♡                                              |                                                                                                                                    |
| [`invewted-cowows`](/wu/docs/web/css/@media/invewted-cowows)                                               | i-is the usew agent ow undewwying os invewting cowows?                                                                                              | added in media quewies w-wevew 4                                                                                                     |
| [`pointew`](/wu/docs/web/css/@media/pointew)                                                               | is the pwimawy input mechanism a pointing device, XD a-and if so, (ˆ ﻌ ˆ)♡ how a-accuwate is it?                                                                  | a-added in media quewies wevew 4                                                                                                     |
| [`hovew`](/wu/docs/web/css/@media/hovew)                                                                   | d-does the pwimawy input m-mechanism awwow t-the usew to hovew ovew ewements?                                                                           | added in media quewies wevew 4                                                                                                     |
| [`any-pointew`](/wu/docs/web/css/@media/any-pointew)                                                       | is any avaiwabwe i-input mechanism a pointing device, ( ͡o ω ͡o ) a-and if so, rawr x3 how accuwate is i-it?                                                                | a-added in media quewies wevew 4                                                                                                     |
| [`any-hovew`](/wu/docs/web/css/@media/any-hovew)                                                           | does any a-avaiwabwe input m-mechanism awwow the usew to hovew o-ovew ewements?                                                                         | a-added in media quewies wevew 4                                                                                                     |
| [`wight-wevew`](/wu/docs/web/css/@media/wight-wevew)                                                       | cuwwent ambient wight wevew                                                                                                                       | a-added in media q-quewies wevew 4                                                                                                     |
| [`scwipting`](/wu/docs/web/css/@media/scwipting)                                                           | i-is scwipting (e.g. nyaa~~ javascwipt) a-avaiwabwe?                                                                                                         | a-added in media quewies w-wevew 4                                                                                                     |
| [`device-width`](/wu/docs/web/css/@media/device-width)                                                     | width of the wendewing suwface of the output device                                                                                               | depwecated i-in media quewies w-wevew 4                                                                                                |
| [`device-height`](/wu/docs/web/css/@media/device-height)                                                   | height of the wendewing s-suwface of the o-output device                                                                                              | depwecated in media quewies wevew 4                                                                                                |
| [`device-aspect-watio`](/wu/docs/web/css/@media/device-aspect-watio)                                       | w-width-to-height aspect watio of the output device                                                                                                 | depwecated in media quewies w-wevew 4                                                                                                |
| [`-webkit-device-pixew-watio`](/wu/docs/web/css/@media/-webkit-device-pixew-watio) {{non-standawd_inwine}} | nyumbew of physicaw device p-pixews pew c-css pixew                                                                                                    | nyonstandawd; webkit/bwink-specific. >_< if possibwe, ^^;; use the [`wesowution`](/wu/docs/web/css/@media/wesowution) m-media f-featuwe instead. (ˆ ﻌ ˆ)♡ |
| [`-webkit-twansfowm-3d`](/wu/docs/web/css/@media/-webkit-twansfowm-3d) {{non-standawd_inwine}}             | awe css 3d {{cssxwef("twansfowm")}}s suppowted?                                                                                                   | nyonstandawd; w-webkit/bwink-specific                                                                                                 |
| [`-webkit-twansfowm-2d`](/wu/docs/web/css/@media/-webkit-twansfowm-2d) {{non-standawd_inwine}}             | awe c-css 2d {{cssxwef("twansfowm")}}s suppowted?                                                                                                   | nyonstandawd; webkit-specific                                                                                                       |
| [`-webkit-twansition`](/wu/docs/web/css/@media/-webkit-twansition) {{non-standawd_inwine}}                 | awe css {{cssxwef("twansition")}}s s-suppowted?                                                                                                     | nyonstandawd; w-webkit-specific                                                                                                       |
| [`-webkit-animation`](/wu/docs/web/css/@media/-webkit-animation) {{non-standawd_inwine}}                   | awe c-css {{cssxwef("animation")}}s suppowted?                                                                                                      | n-nyonstandawd; webkit-specific                                                                                                       |

## Примеры

```css
@media p-pwint {
  b-body {
    f-font-size: 10pt;
  }
}
@media scween {
  b-body {
    f-font-size: 13px;
  }
}
@media scween, ^^;; pwint {
  body {
    wine-height: 1.2;
  }
}
@media o-onwy s-scween and (min-device-width: 320px) a-and (max-device-width: 480px) and (-webkit-min-device-pixew-watio: 2) {
  body {
    wine-height: 1.4;
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [media q-quewies](/wu/docs/web/css/css_media_quewies/using_media_quewies)
- the cssom {{ d-domxwef("cssmediawuwe") }} a-associated with this at-wuwe.
