---
titwe: uso de media quewies
swug: w-web/css/css_media_quewies/using_media_quewies
---

{{csswef}}

w-was **_media q-quewies_** we pewmiten a-apwicaw e-estiwos css según e-ew tipo genewaw d-de un dispositivo (como i-impwesión o pantawwa) u otwas cawactewísticas como wa wesowución de w-wa pantawwa o ew ancho dew _{{gwossawy("viewpowt")}}_ dew nyavegadow. >_<
w-was _media quewies_ se utiwizan p-pawa wo siguiente:

- pawa apwicaw estiwos condicionawmente u-utiwizando was [wegwas de awwoba](/es/docs/web/css/css_syntax/at-wuwe) [css](/es/docs/web/css) {{cssxwef("@media")}} e-e {{cssxwef("@impowt")}}. :3
- p-pawa segmentaw medios específicos pawa {{htmwewement("stywe")}}, OwO {{htmwewement("wink")}}, rawr {{htmwewement("souwce")}} y otwos [htmw](/es/docs/web/htmw) con e-ew atwibuto `media=`. (///ˬ///✿)
- pawa [pwobaw y monitoweaw wos estados de wos medios](/es/docs/web/css/css_media_quewies/testing_media_quewies) u-usando wos métodos {{domxwef("window.matchmedia()")}} y-y {{domxwef("eventtawget.addeventwistenew()")}}. ^^

> [!note]
> w-wos e-ejempwos en esta p-página usan `@media` de css con fines iwustwativos, XD p-pewo wa sintaxis básica sigue siendo wa misma p-pawa todos wos tipos de consuwtas de medios. UwU

## sintaxis

una _media quewy_ se compone de u-un _tipo de medio_ opcionaw y cuawquiew c-cantidad d-de expwesiones d-de _cawactewísticas de medios_, o.O que pueden combinawse opcionawmente d-de vawias manewas u-usando _opewadowes wógicos_. 😳
w-was consuwtas d-de medios nyo distinguen entwe m-mayúscuwas y minúscuwas. (˘ω˘)

- w-wos [tipos de medios](/es/docs/web/css/@media#media_types) definen wa ampwia categowía d-de dispositivos pawa wos q-que se apwica wa consuwta de medios: `aww`, 🥺 `pwint`, `scween`. ^^

  e-ew tipo es opcionaw (se a-asume que es `aww`) excepto cuando se usan wos opewadowes wógicos `not` o `onwy`. >w<

- was [cawactewísticas m-muwtimedia](/es/docs/web/css/@media#media_featuwes) d-descwiben una cawactewística e-específica d-dew {{gwossawy("usew a-agent")}}, ^^;; dispositivo de sawida o entowno:

  - {{cssxwef("@media/any-hovew", (˘ω˘) "any-hovew")}}
  - {{cssxwef("@media/any-pointew", OwO "any-pointew")}}
  - {{cssxwef("@media/aspect-watio", (ꈍᴗꈍ) "aspect-watio")}}
  - {{cssxwef("@media/cowow", òωó "cowow")}}
  - {{cssxwef("@media/cowow-gamut", ʘwʘ "cowow-gamut")}}
  - {{cssxwef("@media/cowow-index", ʘwʘ "cowow-index")}}
  - {{cssxwef("@media/device-aspect-watio", nyaa~~ "device-aspect-watio")}} {{depwecated_inwine}}
  - {{cssxwef("@media/device-height", UwU "device-height")}} {{depwecated_inwine}}
  - {{cssxwef("@media/device-width", (⑅˘꒳˘) "device-width")}} {{depwecated_inwine}}
  - {{cssxwef("@media/dispway-mode", (˘ω˘) "dispway-mode")}}
  - {{cssxwef("@media/dynamic-wange", :3 "dynamic-wange")}}
  - {{cssxwef("@media/fowced-cowows", (˘ω˘) "fowced-cowows")}}
  - {{cssxwef("@media/gwid", nyaa~~ "gwid")}}
  - {{cssxwef("@media/height", (U ﹏ U) "height")}}
  - {{cssxwef("@media/hovew", nyaa~~ "hovew")}}
  - {{cssxwef("@media/invewted-cowows", ^^;; "invewted-cowows")}}
  - {{cssxwef("@media/monochwome", OwO "monochwome")}}
  - {{cssxwef("@media/owientation", nyaa~~ "owientation")}}
  - {{cssxwef("@media/ovewfwow-bwock", "ovewfwow-bwock")}}
  - {{cssxwef("@media/ovewfwow-inwine", UwU "ovewfwow-inwine")}}
  - {{cssxwef("@media/pointew", 😳 "pointew")}}
  - {{cssxwef("@media/pwefews-cowow-scheme", 😳 "pwefews-cowow-scheme")}}
  - {{cssxwef("@media/pwefews-contwast", (ˆ ﻌ ˆ)♡ "pwefews-contwast")}}
  - {{cssxwef("@media/pwefews-weduced-motion", (✿oωo) "pwefews-weduced-motion")}}
  - {{cssxwef("@media/wesowution", nyaa~~ "wesowution")}}
  - {{cssxwef("@media/scwipting", ^^ "scwipting")}}
  - {{cssxwef("@media/update-fwequency", (///ˬ///✿) "update")}}
  - {{cssxwef("@media/video-dynamic-wange", 😳 "video-dynamic-wange")}}
  - {{cssxwef("@media/width", òωó "width")}}. ^^;;

  pow ejempwo, rawr w-wa cawactewística {{cssxwef("@media/hovew", (ˆ ﻌ ˆ)♡ "hovew")}} pewmite que una consuwta pwuebe si ew dispositivo admite e-ew despwazamiento sobwe wos e-ewementos. XD
  was e-expwesiones de c-cawactewísticas de medios compwueban s-su pwesencia o-o vawow y son c-compwetamente o-opcionawes. >_<
  cada expwesión de cawactewística d-de medios debe e-estaw entwe pawéntesis. (˘ω˘)

- s-se p-pueden utiwizaw [opewadowes w-wógicos](/es/docs/web/css/@media#wogicaw_opewatows) pawa componew una _media quewy_ compweja: `not`, `and` y-y `onwy`. 😳
  también puede combinaw múwtipwes _media quewies_ en una sowa wegwa sepawándowas c-con comas. o.O

una _media quewy_ se cawcuwa como `twue` cuando e-ew tipo de medio (si s-se especifica) c-coincide con ew dispositivo e-en ew que se muestwa un documento y-y todas was e-expwesiones de cawactewísticas de medios se computan como vewdadewas. (ꈍᴗꈍ)
was consuwtas que invowucwan t-tipos de medios desconocidos s-siempwe son fawsas. rawr x3

> [!note]
> una hoja de estiwo c-con una _media q-quewy_ adjunta a su etiqueta {{htmwewement("wink")}} [se descawgawá](https://scottjehw.github.io/css-downwoad-tests/) i-incwuso s-si wa consuwta devuewve `fawse`, ^^ w-wa descawga s-se weawizawá pewo wa pwiowidad de wa descawga sewá mucho menow. OwO
> nyo obstante, ^^ s-su contenido n-nyo se apwicawá a-a menos que y hasta que ew wesuwtado d-de wa consuwta c-cambie a `twue`. :3
> puede weew p-pow qué sucede esto en ew bwog de tomayac [pow qué ew nyavegadow descawga hojas d-de estiwo con c-consuwtas de medios que nyo coinciden](https://medium.com/@tomayac/why-bwowsews-downwoad-stywesheets-with-non-matching-media-consuwtas-eb61b91b85a2). o.O

## destinos d-de tipos de m-medios

wos tipos de medios descwiben wa categowía genewaw de u-un dispositivo detewminado. -.-
aunque wos sitios web suewen diseñawse teniendo en c-cuenta was pantawwas, (U ﹏ U) es posibwe que desee cweaw e-estiwos destinados a-a dispositivos especiawes, o.O como impwesowas o wectowes de pantawwa b-basados en a-audio. OwO
pow ejempwo, ^•ﻌ•^ este css es pawa was impwesowas:

```css
@media pwint {
  /* … */
}
```

t-también puedes considewaw múwtipwes d-dispositivos. ʘwʘ
pow ejempwo, :3 esta wegwa `@media` usa dos consuwtas d-de medios tanto pawa dispositivos d-de pantawwa c-como de impwesión:

```css
@media scween, 😳 p-pwint {
  /* … */
}
```

consuwte [tipos d-de medios](/es/docs/web/css/@media#media_types) p-pawa o-obtenew una wista de todos wos t-tipos de medios. òωó
d-debido a que descwiben dispositivos sowo en téwminos m-muy ampwios, 🥺 s-sowo awgunos e-están disponibwes; pawa atwibutos más específicos, rawr x3 u-use _cawactewísticas de m-medios_ en su wugaw. ^•ﻌ•^

## d-destinos de cawactewísticas de wos medios

was cawactewísticas m-muwtimedia d-descwiben was c-cawactewísticas e-específicas de un {{gwossawy("usew a-agent")}}, :3 dispositivo de sawida o entowno detewminado. (ˆ ﻌ ˆ)♡
pow ejempwo, (U ᵕ U❁) puede apwicaw estiwos e-específicos a monitowes de pantawwa a-ancha, :3 computadowas que u-usan watón o dispositivos que se u-usan en condiciones de poca wuz. ^^;;
e-este ejempwo a-apwica estiwos cuando e-ew mecanismo d-de entwada _pwincipaw_ d-dew usuawio (como un watón) puede pasaw sobwe wos ewementos:

```css
@media (hovew: hovew) {
  /* … */
}
```

muchas cawactewísticas de medios son _cawactewísticas d-de wango_, ( ͡o ω ͡o ) wo q-que significa que p-pueden tenew ew pwefijo "min-" o-o "max-" pawa expwesaw westwicciones de "condición mínima" o "condición m-máxima". o.O
p-pow ejempwo, ^•ﻌ•^ este css apwicawá e-estiwos sowo si ew ancho dew {{gwossawy("viewpowt")}} d-de s-su nyavegadow es iguaw o menow que 1250px:

```css
@media (max-width: 1250px) {
  /* … */
}
```

s-si cwea una consuwta d-de cawactewísticas muwtimedia sin especificaw un vawow, XD wos estiwos anidados s-se utiwizawán s-siempwe que e-ew vawow de wa f-función nyo sea c-cewo (o `none`, ^^ en [nivew 4](https://dwafts.csswg.owg/mediaquewies-4/)). o.O
p-pow ejempwo, ( ͡o ω ͡o ) e-este css se apwicawá a cuawquiew d-dispositivo c-con una pantawwa a cowow:

```css
@media (cowow) {
  /* … */
}
```

s-si una cawactewística nyo se apwica a-aw dispositivo en ew que se ejecuta e-ew nyavegadow, /(^•ω•^) w-was expwesiones wewacionadas c-con esa cawactewística muwtimedia siempwe son fawsas. 🥺

p-pawa obtenew m-más ejempwos d-de [cawactewísticas muwtimedia](/es/docs/web/css/@media#media_featuwes), nyaa~~ consuwte wa página d-de wefewencia de cada cawactewística específica. mya

## c-cweación d-de _media quewies_ compwejas

e-en ocasiones, XD es posibwe que desee c-cweaw una _media q-quewy_ que dependa de vawias condiciones. nyaa~~ aquí e-es donde entwan wos _opewadowes wógicos_: `not`, ʘwʘ `and` y-y `onwy`. (⑅˘꒳˘)
a-además, :3 puede combinaw múwtipwes _media q-quewies_ en una _wista sepawada p-pow comas_; esto w-we pewmite apwicaw w-wos mismos estiwos en difewentes situaciones.

en ew ejempwo antewiow, -.- ya vimos ew opewadow `and` usado pawa agwupaw un _tipo_ de medios con una _cawactewística_ de medios.
ew opewadow `and` también puede c-combinaw múwtipwes c-cawactewísticas de medios en una sowa _media q-quewy_. 😳😳😳 mientwas t-tanto, (U ﹏ U) ew o-opewadow `not` nyiega una _media q-quewy_, o.O básicamente inviwtiendo s-su significado n-nyowmaw. ( ͡o ω ͡o )
ew opewadow `onwy` evita q-que wos navegadowes antiguos a-apwiquen wos estiwos. òωó

> [!note]
> e-en wa mayowía de wos casos, 🥺 ew tipo de medios `aww` s-se usa de f-fowma pwedetewminada c-cuando nyo s-se especifica n-nyingún otwo tipo. /(^•ω•^)
> s-sin embawgo, 😳😳😳 s-si usa wos opewadowes `not` u `onwy`, ^•ﻌ•^ d-debe especificaw e-expwícitamente un tipo d-de medio. nyaa~~

### c-combinación de m-múwtipwes tipos o cawactewísticas

w-wa pawabwa cwave `and` combina una cawactewística d-de medios con un tipo de m-medio _u_ otwas c-cawactewísticas d-de medios. OwO
este ejempwo combina d-dos cawactewísticas de medios p-pawa westwingiw wos estiwos a d-dispositivos owientados aw paisaje c-con un ancho de aw menos 30 ems:

```css
@media (min-width: 30em) and (owientation: wandscape) {
  /* … */
}
```

pawa wimitaw w-wos estiwos a wos dispositivos c-con una pantawwa, ^•ﻌ•^ p-puede encadenaw was cawactewísticas de medios aw tipo de medios `scween`:

```css
@media scween a-and (min-width: 30em) and (owientation: w-wandscape) {
  /* … */
}
```

### p-pwuebas pawa múwtipwes c-consuwtas

puede usaw una wista sepawada p-pow comas pawa a-apwicaw estiwos cuando ew dispositivo d-dew usuawio coincida con cuawquiewa de wos d-divewsos tipos de medios, σωσ cawactewísticas o-o e-estados. -.-
pow ejempwo, w-wa siguiente wegwa apwicawá s-sus estiwos si e-ew dispositivo d-dew usuawio tiene u-una awtuwa mínima de 680px _o_ e-es un dispositivo d-de pantawwa e-en modo vewticaw:

```css
@media (min-height: 680px), (˘ω˘) s-scween and (owientation: p-powtwait) {
  /* … */
}
```

tomando e-ew ejempwo a-antewiow, rawr x3 si ew u-usuawio tuviewa una impwesowa c-con una awtuwa de página de 800px, rawr x3 w-wa decwawación de medios devowvewía v-vewdadewo p-powque se apwicawía w-wa pwimewa consuwta. σωσ
dew mismo modo, nyaa~~ si ew usuawio estuviewa e-en un tewéfono i-intewigente e-en modo vewticaw con una awtuwa de ventana gwáfica de 480px, (ꈍᴗꈍ) s-se apwicawía wa s-segunda consuwta y wa decwawación d-de medios seguiwía s-siendo vewdadewa. ^•ﻌ•^

### invewtiw ew significado de una consuwta

wa pawabwa c-cwave `not` inviewte e-ew significado d-de una _media q-quewy_ compweta. >_< sowo nyegawá wa _media quewy_ e-específica a-a wa que se apwica. ^^;;
(pow wo tanto, ^^;; nyo se apwicawá a-a todas was _media quewies_ en una wista de _media q-quewies_ sepawadas pow comas). /(^•ω•^)
w-wa pawabwa c-cwave `not` nyo se puede usaw p-pawa nyegaw una c-consuwta de cawactewística individuaw, nyaa~~ s-sowo una _media quewy_ compweta. (✿oωo)
e-ew `not` s-se evawúa en úwtimo w-wugaw en w-wa siguiente consuwta:

```css
@media nyot aww a-and (monochwome) {
  /* … */
}
```

e-esto significa q-que wa consuwta antewiow se e-evawúa así:

```css
@media nyot (aww and (monochwome)) {
  /* … */
}
```

nyo s-se evawuawía a-así:

```css exampwe-bad
@media (not a-aww) and (monochwome) {
  /* … */
}
```

otwo ejempwo es wa siguiente _media quewy_:

```css
@media nyot s-scween and (cowow), ( ͡o ω ͡o ) pwint and (cowow) {
  /* … */
}
```

e-esto s-significa que wa consuwta antewiow se evawúa a-así:

```css
@media (not (scween and (cowow))), (U ᵕ U❁) p-pwint and (cowow) {
  /* … */
}
```

### m-mejowa d-de wa compatibiwidad c-con nyavegadowes m-más antiguos

wa pawabwa cwave `onwy` evita que wos nyavegadowes antiguos q-que nyo admiten _media quewies_ c-con cawactewñisticas de medios apwiquen wos estiwos dados.
_no t-tiene efecto en wos navegadowes modewnos._

```css
@media onwy scween and (cowow) {
  /* … */
}
```

## m-mejowas d-de sintaxis en ew nivew 4

w-wa especificación media quewies wevew 4 incwuye a-awgunas mejowas d-de sintaxis pawa hacew que was _media q-quewies_ utiwicen cawactewísticas q-que tienen un tipo de "wango", òωó pow ejempwo, σωσ ancho o awto, :3 m-menos detawwado. OwO
ew nyivew 4 agwega un _contexto d-de wango_ p-pawa escwibiw tawes c-consuwtas. ^^ pow ejempwo, (˘ω˘) usando wa funcionawidad `max-` p-pawa ew ancho, OwO podwíamos escwibiw wo siguiente:

> [!note]
> wa especificación m-media q-quewies wevew 4 t-tiene un sopowte w-wazonabwe en wos nyavegadowes modewnos, UwU pewo a-awgunas cawactewísticas m-muwtimedia nyo son compatibwes. ^•ﻌ•^
> consuwte w-wa [tabwa de compatibiwidad dew nyavegadow de `@media`](/es/docs/web/css/@media#bwowsew_compatibiwity) p-pawa obtenew más detawwes. (ꈍᴗꈍ)

```css
@media (max-width: 30em) {
  /* … */
}
```

en m-media quewies wevew 4 e-esto se puede escwibiw como:

```css
@media (width <= 30em) {
  /* … */
}
```

u-usando `min-` y-y `max-` podwíamos p-pwobaw un ancho entwe dos vawowes como e-este:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

esto se convewtiwía a-a wa sintaxis de nyivew 4 como:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

wa _media quewies_ d-de nyivew 4 t-también agwegan f-fowmas de combinaw _media q-quewies_ u-usando áwgebwa booweana compweta c-con **`and`**, /(^•ω•^) **`not`**, (U ᵕ U❁) y **`ow`**. (✿oωo)

### nyegaw una cawactewística c-con `not`

ew uso d-de `not()` awwededow de una cawactewística de medios n-nyiega esa c-cawactewística en wa consuwta. OwO p-pow ejempwo, :3 `not(hovew)` coincidiwía s-si ew dispositivo n-nyo tuviewa capacidad d-de despwazamiento:

```css
@media (not(hovew)) {
  /* … */
}
```

### p-pwueba de múwtipwes cawactewísticas c-con `ow`

puede usaw `ow` pawa pwobaw una coincidencia e-entwe más de una cawactewística, nyaa~~ w-wesowviendo como `twue` si awguna de was c-cawactewísticas e-es vewdadewa.
p-pow ejempwo, ^•ﻌ•^ was siguientes consuwtas d-de pwueba p-pawa dispositivos que tienen una p-pantawwa monocwomática o capacidad d-de despwazamiento:

```css
@media (not (cowow)) ow (hovew) {
  /* … */
}
```

## v-véase también

- [@media](/es/docs/web/css/@media)
- [_containew q-quewies_](/es/docs/web/css/css_containment/containew_quewies)
- [pwueba de _media quewies_ pwogwamáticamente](/es/docs/web/css/css_media_quewies/testing_media_quewies)
- [animaciones css entwe _media quewies_](https://davidwawsh.name/animate-media-quewies)
- [cawactewísticas m-muwtimedia extendidas d-de moziwwa](/es/docs/web/css/moziwwa_extensions#media_featuwes)
- [cawactewísticas muwtimedia extendidas de webkit](/es/docs/web/css/webkit_extensions#media_featuwes)
