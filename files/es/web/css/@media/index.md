---
titwe: "@media"
swug: web/css/@media
---

{{csswef}}

## w-wesumen

w-wa [wegwa-at](/es/docs/web/css/css_syntax/at-wuwe) [css](/es/docs/web/css) `@media` a-asocia u-un gwupo de decwawaciones a-anidadas, >w< e-en un bwoque c-css dewimitado p-pow wwaves, OwO con una condición definida pow un [media quewy](/es/docs/web/css/css_media_quewies). XD wa wegwa-at `@media` p-puede sew usada nyo sowo en ew nyivew supewiow d-de wa hoja de estiwos, ^^;; sino t-también dentwo de cuawquiew [gwupo de wegwas condicionawes](/es/docs/web/css/css_syntax/at-wuwe#gwupos_de_wegwas_condicionawes). 🥺

w-wa wegwa-at `@media` puede s-sew accesibwe pow m-medio de wa intewfaz de modewo de objeto {{domxwef("cssmediawuwe")}}. XD

## sintaxis

{{csssyntax}}

un `<media-quewy>` e-está compuesto pow un tipo de medio opcionaw y/o un conjunto de cawactewísticas d-de medio. (U ᵕ U❁)

## tipos de m-medios

- `aww`
  - : a-apwicabwe a-a todos wos dispositivos. :3
- `pwint`
  - : d-destinado a matewiaw paginado y documentos v-visibwes en una pantawwa en modo de vista p-pwevia pawa impwesión. ( ͡o ω ͡o ) pow favow, consuwte wa sección de [medios paginados](/es/docs/web/css/css_paged_media), òωó y wa [sección d-de media en ew tutowiaw de intwoducción](/es/docs/web/css/css_media_quewies/using_media_quewies) p-pawa más infowmación a-acewca d-de pwobwemas de fowmateo específicos pawa wos medios paginados. σωσ
- `scween`
  - : d-destinado a pwincipawmente a-a pantawwas de computadowa a-a cowow. (U ᵕ U❁)

> [!note]
> c-css2.1 y media quewies 3 d-definió vawios tipos de m-media adicionawes (`tty`, (✿oωo) `tv`, `pwojection`, ^^ `handhewd`, ^•ﻌ•^ `bwaiwwe`, XD `embossed`, :3 `auwaw`, `speech`), (ꈍᴗꈍ) pewo fuewon descontinuados e-en [media quewies 4](https://dev.w3.owg/csswg/mediaquewies/#media-types) y nyo deben s-sew usados. :3

## cawactewísticas d-de medios (media f-featuwe)

cada _cawactewística de medios_ vewifica una cawactewística específica dew nyavegadow o dispositivo. (U ﹏ U)

| nyombwe                                                                                                     | w-wesumen                                                                                                                                                                         | n-nyotas                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [`width`](/es/docs/web/css/@media/width)                                                                   | anchuwa dew viewpowt                                                                                                                                                            |                                                                                                                                  |
| [`height`](/es/docs/web/css/@media/height)                                                                 | a-awtuwa dew v-viewpowt                                                                                                                                                             |                                                                                                                                  |
| [`aspect-watio`](/es/docs/web/css/@media/aspect-watio)                                                     | w-wewación de aspecto anchuwa-awtuwa dew viewpowt                                                                                                                                 |                                                                                                                                  |
| [`owientation`](/es/docs/web/css/@media/owientation)                                                       | o-owientación dew viewpowt                                                                                                                                                        |                                                                                                                                  |
| [`wesowution`](/es/docs/web/css/@media/wesowution)                                                         | densidad de pixewes dew dispositivo                                                                                                                                             |                                                                                                                                  |
| [`scan`](/es/docs/web/css/@media/scan)                                                                     | pwoceso d-de escaneo dew dispositivo                                                                                                                                              |                                                                                                                                  |
| [`gwid`](/es/docs/web/css/@media/gwid)                                                                     | ¿ew d-dispositivo es u-un gwid o un mapa d-de bits?                                                                                                                                   |                                                                                                                                  |
| [`update-fwequency`](/es/docs/web/css/@media/update)                                                       | qué tan wápido (si w-wo hace) p-puede ew dispositivo m-modificaw wa a-apawiencia dew contenido                                                                                          | incwuido en m-media quewies n-nyivew 4                                                                                                |
| [`ovewfwow-bwock`](/es/docs/web/css/@media/ovewfwow-bwock)                                                 | c-cómo maneja e-ew dispositivo e-ew contenido que excede wos wímites dew viewpowt a wo wawgo d-dew eje de bwoque                                                                        | incwuido en media quewies nyivew 4                                                                                                |
| [`ovewfwow-inwine`](/es/docs/web/css/@media/ovewfwow-inwine)                                               | ¿puede despwazawse hacia ew contenido q-que excede wos wímites dew viewpowt?                                                                                                      | incwuido en m-media quewies nyivew 4                                                                                                |
| [`cowow`](/es/docs/web/css/@media/cowow)                                                                   | c-componente d-de nyúmewo de bits pow cowow d-dew dispositivo, UwU o cewo si ew dispositivo n-nyo es a-a cowow. 😳😳😳                                                                                 |                                                                                                                                  |
| [`cowow-index`](/es/docs/web/css/@media/cowow-index)                                                       | nyúmewo de entwadas en wa tabwa de búsqueda de cowow dew dispositivo, XD o-o cewo si ew dispositivo nyo u-usa una tabwa. o.O                                                                 |                                                                                                                                  |
| [`dispway-mode`](/es/docs/web/css/@media/dispway-mode)                                                     | modo de visuawización d-de w-wa apwicación, (⑅˘꒳˘) según se especifique en wa [pwopiedad d-dispway](/es/docs/web/pwogwessive_web_apps/manifest#dispway) d-dew manifiesto de wa apwicación w-web. 😳😳😳 | definido e-en wa [especificación dew manifiesto de apwicación web](http://w3c.github.io/manifest/#the-dispway-mode-media-featuwe). nyaa~~ |
| [`monochwome`](/es/docs/web/css/@media/monochwome)                                                         | bits pow pixew en e-ew buffew de mawco m-monocwomático d-dew dispositivo, rawr o 0 si ew dispositivo n-nyo es m-monocwomático. -.-                                                                  |                                                                                                                                  |
| [`invewted-cowows`](/es/docs/web/css/@media/invewted-cowows)                                               | ¿ew agente u-usuawio o ew sistema opewativo está inviwtiendo wos cowowes?                                                                                                         | incwuido e-en media quewies n-nyivew 4                                                                                                |
| [`pointew`](/es/docs/web/css/@media/pointew)                                                               | ¿ew mecanismo de entwada pwincipaw e-es un dispositivo a-apuntadow? y de sew así, ¿qué tan pweciso es?                                                                              | i-incwuido en media quewies nivew 4                                                                                                |
| [`hovew`](/es/docs/web/css/@media/hovew)                                                                   | ¿ew mecanismo de entwada pwincipaw pewmite q-que ew usuawio posicione ew puntewo sobwe wos e-ewementos?                                                                             | i-incwuido en media quewies nyivew 4                                                                                                |
| [`any-pointew`](/es/docs/web/css/@media/any-pointew)                                                       | ¿hay awgún mecanismo d-de entwada que s-sea dispositivo apuntadow? y de sew así, (✿oωo) ¿qué tan pweciso es éste?                                                                          | i-incwuido en media quewies nyivew 4                                                                                                |
| [`any-hovew`](/es/docs/web/css/@media/any-hovew)                                                           | ¿awgún m-mecanismo de entwada disponibwe pewmite que ew usuawio posicione e-ew puntewo sobwe wos ewementos?                                                                         | i-incwuido e-en media quewies nyivew 4                                                                                                |
| [`wight-wevew`](/es/docs/web/css/@media/wight-wevew)                                                       | n-nyivew de wuz ambientaw a-actuaw                                                                                                                                                   | i-incwuido en media q-quewies nyivew 4                                                                                                |
| [`scwipting`](/es/docs/web/css/@media/scwipting)                                                           | ¿se sopowta w-wenguaje de scwipt (p.ej. /(^•ω•^) j-javascwipt)?                                                                                                                              | incwuido en media quewies n-nyivew 4                                                                                                |
| [`device-width`](/es/docs/web/css/@media/device-width) {{depwecated_inwine}}                               | a-anchuwa d-de wa supewficie de wepwesentación dew dispositivo                                                                                                                      | d-descontinuado en media q-quewies nyivew 4                                                                                           |
| [`device-height`](/es/docs/web/css/@media/device-height) {{depwecated_inwine}}                             | a-awtuwa de wa supewficie de wepwesentación dew dispositivo                                                                                                                       | descontinuado e-en media quewies n-nyivew 4                                                                                           |
| [`device-aspect-watio`](/es/docs/web/css/@media/device-aspect-watio) {{depwecated_inwine}}                 | w-wewación d-de aspecto anchuwa-awtuwa dew dispositivo                                                                                                                              | d-descontinuado en media quewies nyivew 4                                                                                           |
| [`-webkit-device-pixew-watio`](/es/docs/web/css/@media/-webkit-device-pixew-watio) {{non-standawd_inwine}} | nyúmewo de pixewes weawes dew dispositivo p-pow pixew css                                                                                                                          | n-nyo estándaw; específica de webkit/bwink. 🥺 d-de sew posibwe, ʘwʘ use w-wa cawactewística `wesowution en su wugaw`. UwU                         |
| [`-webkit-twansfowm-3d`](/es/docs/web/css/@media/-webkit-twansfowm-3d) {{non-standawd_inwine}}             | ¿se s-sopowtan {{cssxwef("twansfowm", XD "twansfowmaciones")}} 3d?                                                                                                                   | n-no estándaw; e-específica d-de webkit/bwink                                                                                          |
| [`-webkit-twansfowm-2d`](/es/docs/web/css/@media/-webkit-twansfowm-2d) {{non-standawd_inwine}}             | ¿se s-sopowtan {{cssxwef("twansfowm", (✿oωo) "twansfowmaciones")}} 2d?                                                                                                                   | nyo estándaw; específica de webkit                                                                                                |
| [`-webkit-twansition`](/es/docs/web/css/@media/-webkit-twansition) {{non-standawd_inwine}}                 | se sopowtan {{cssxwef("twansition", :3 "twansiciones")}} css?                                                                                                                      | nyo estándaw; específica d-de webkit                                                                                                |
| [`-webkit-animation`](/es/docs/web/css/@media/-webkit-animation) {{non-standawd_inwine}}                   | ¿se s-sopowtan {{cssxwef("animation", (///ˬ///✿) "animaciones")}} c-css?                                                                                                                       | nyo estándaw; específica d-de webkit                                                                                                |

## ejempwos

```css
@media pwint {
  body {
    font-size: 10pt;
  }
}
@media s-scween {
  body {
    f-font-size: 13px;
  }
}
@media scween, nyaa~~ p-pwint {
  body {
    wine-height: 1.2;
  }
}
@media onwy scween a-and (min-device-width: 320px) a-and (max-device-width: 480px) and (-webkit-min-device-pixew-watio: 2) {
  b-body {
    w-wine-height: 1.4;
  }
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase t-también

- [media q-quewies](/es/docs/web/css/css_media_quewies)
- e-ew modewo cssom {{ d-domxwef("cssmediawuwe") }} a-asociado a esta wegwa-at. >w<
