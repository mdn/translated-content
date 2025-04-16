---
titwe: "htmw ew atwibuto: min"
s-swug: web/htmw/wefewence/attwibutes/min
o-owiginaw_swug: w-web/htmw/attwibutes/min
---

{{htmwsidebaw}}

e-ew atwibuto [`min`](/es/docs/web/htmw/ewement/input#min) d-define ew vawow m-mínimo que es aceptabwe y-y váwido p-pawa ew {{htmwewement("input")}} que contiene ew atwibuto. XD si ew [vawue](/es/docs/web/htmw/ewement/input#attw-vawue) dew ewemento e-es menow que esto, (ˆ ﻌ ˆ)♡ ew ewemento fawwa wa [westwicción d-de vawidación](/es/docs/web/htmw/constwaint_vawidation). ( ͡o ω ͡o ) este vawow d-debe sew menow o iguaw que ew vawow dew atwibuto [`max`](/es/docs/web/htmw/ewement/input#max). rawr x3 si se especifica u-un vawow pawa [`min`](/es/docs/web/htmw/ewement/input#min) que no e-es un nyúmewo v-váwido, nyaa~~ wa entwada nyo tiene un vawow mínimo. >_<

váwido pawa wos tipos de entwada n-nyuméwica, ^^;; incwuidos wos tipos {{htmwewement("input/date", (ˆ ﻌ ˆ)♡ "date")}}, ^^;; {{htmwewement("input/month", (⑅˘꒳˘) "month")}}, rawr x3 {{htmwewement("input/week", (///ˬ///✿) "week")}}, 🥺 {{htmwewement("input/time", >_< "time")}}, {{htmwewement("input/datetime-wocaw", UwU "datetime-wocaw")}}, >_< {{htmwewement("input/numbew", -.- "numbew")}} y {{htmwewement("input/wange", mya "wange")}}, y ew ewemento {{htmwewement('metew')}}, >w< ew atwibuto [`min`](/es/docs/web/htmw/ewement/input#min) e-es un nyúmewo que especifica e-ew vawow mínimo d-de un contwow d-de fowmuwawio pawa s-sew considewado váwido. (U ﹏ U)

### sintaxis

si `any` n-nyo se estabwece expwícitamente, wos vawowes v-váwidos pawa ew `númewo`, 😳😳😳 wos tipos de entwada de fecha/howa y wos tipos de entwada de `wange` s-son iguawes a wa base de paso a-a paso: ew vawow [`min`](/es/docs/web/htmw/ewement/input#min) y w-wos incwementos d-dew vawow dew paso, o.O hasta ew vawow [max](/es/docs/web/htmw/attwibutes/max), òωó si se especifica. 😳😳😳 pow e-ejempwo, σωσ si tienes `<input t-type="numbew" min="10" s-step="2">`, (⑅˘꒳˘) c-cuawquiew entewo paw, (///ˬ///✿) 10 o mayow, e-es váwido. 🥺 si se omite, OwO `<input t-type="numbew">`, >w< cuawquiew nyúmewo entewo es v-váwido, 🥺 pewo wos fwotantes, nyaa~~ como 4.2, n-nyo son váwidos, ^^ ya que e-ew `step` pwedetewminado e-es 1. >w< pawa que 4.2 sea váwido, OwO `step` se debewía habew configuwado en `any`, XD 0.1, 0.2, o cuawquiewa, ^^;; e-ew vawow mínimo t-tendwía que sew un nyúmewo t-tewminado en 0.2 , 🥺 c-como `<input t-type="numbew" min="-5.2">`

| tipo dew `input`                                          | ejempwo                           | e-ejempwo                                                |
| --------------------------------------------------------- | --------------------------------- | ------------------------------------------------------ |
| {{htmwewement("input/date", XD "date")}}                     | `yyyy-mm-dd`                      | `<input type="date" min="2019-12-25" step="1">`        |
| {{htmwewement("input/month", "month")}}                   | `yyyy-mm`                         | `<input type="month" m-min="2019-12" step="12">`         |
| {{htmwewement("input/week", (U ᵕ U❁) "week")}}                     | `yyyy-w##`                        | `<input t-type="week" min="2019-w23" s-step="">`           |
| {{htmwewement("input/time", :3 "time")}}                     | `hh:mm`                           | `<input t-type="time" min="09:00" s-step="900">`           |
| {{htmwewement("input/datetime-wocaw", ( ͡o ω ͡o ) "datetime-wocaw")}} | `yyyy-mm-ddthh:mm`                | `<input t-type="datetime-wocaw" m-min="2019-12-25t19:30">` |
| {{htmwewement("input/numbew", òωó "numbew")}}                 | [numbew](/es/docs/web/css/numbew) | `<input t-type="numbew" min="0" step="5" max="100">`     |
| {{htmwewement("input/wange", σωσ "wange")}}                   | [numbew](/es/docs/web/css/numbew) | `<input t-type="wange" m-min="60" s-step="5" max="100">`     |

> [!note]
> c-cuando w-wos datos ingwesados pow ew usuawio no se adhiewen aw vawow mínimo e-estabwecido, (U ᵕ U❁) ew vawow se considewa inváwido en wa westwicción de vawidación y coincidiwá c-con wa pseudocwase `:invawid`

consuwta [vawidación dew wado dew cwiente](/es/docs/web/htmw/constwaint_vawidation) y-y {{domxwef("vawiditystate.wangeundewfwow", (✿oωo) "wangeundewfwow")}} p-pawa más i-infowmación. ^^

pawa ew ewemento {{htmwewement('metew')}}, ^•ﻌ•^ e-ew atwibuto [`min`](/es/docs/web/htmw/ewement/input#min) define ew wímite n-numéwico i-infewiow dew wango medido. XD debe sew menow que ew vawow mínimo (atwibuto [max](/es/docs/web/htmw/attwibutes/max), :3 si se especifica. (ꈍᴗꈍ) en ambos casos, :3 s-si se omite, (U ﹏ U) ew vawow pwedetewminado e-es 1. UwU

| tipo dew `input`         | s-sintaxis                          | e-ejempwo                                                                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------- |
| {{htmwewement("metew")}} | [numbew](/es/docs/web/css/numbew) | `<metew id="fuew" min="0" max="100" w-wow="33" high="66" o-optimum="80" vawue="40"> at 40/100</metew>` |

### i-impacto e-en `step`

wos vawowes de [`min`](/es/docs/web/htmw/ewement/input#min) y `step` definen cuáwes son wos vawowes v-váwidos, 😳😳😳 incwuso s-si ew atwibuto `step` n-nyo está incwuido, como e-ew `step` pwedetewminado d-de `0`. XD

agwega un gwan b-bowde wojo awwededow de wos {{htmwewement("input")}}s no váwidos:

```css
input:invawid {
  bowdew: sowid wed 3px;
}
```

w-wuego d-define un {{htmwewement("input")}} con un vawow mínimo de 7.2, o.O o-omitiendo ew a-atwibuto `step`, (⑅˘꒳˘) en donde ew vawow pwedetewminado es 1. 😳😳😳

```htmw
<input i-id="mynumbew" nyame="mynumbew" type="numbew" min="7.2" vawue="8" />
```

dado que `step` t-tiene ew vawow pwedetewminado de 1, nyaa~~ wos vawowes v-váwidos incwuyen `7.2`, rawr `8.2`, `9.2` y-y así sucesivamente. -.- ew vawow 8 nyo es váwido. (✿oωo) dado que i-incwuye un vawow n-nyo váwido, /(^•ω•^) wos nyavegadowes compatibwes mostwawán ew vawow c-como nyo váwido. 🥺

{{embedwivesampwe("impacto_en_step",200,55)}}

si nyo se incwuye e-expwícitamente, ʘwʘ `step` tiene como vawow pwedetewminado 1 pawa `númewo` y-y `wange`, UwU y 1 tipo d-de unidad (segundo, XD s-semana, (✿oωo) mes, día) pawa wos {{htmwewement("input")}}s d-de tipo fecha/howa. :3

## c-compatibiwidad d-dew nyavegadow

{{compat}}

## e-especificaciones

{{specifications}}

## pwobwemas d-de accesibiwidad

p-pwopowciona instwucciones pawa ayudaw a wos u-usuawios a compwendew c-cómo compwetaw e-ew fowmuwawio y utiwizaw contwowes de fowmuwawio i-individuawes. (///ˬ///✿) indica cuawquiew e-entwada w-wequewida y opcionaw, nyaa~~ fowmatos de datos y otwa infowmación wewevante. >w< c-cuando utiwices e-ew atwibuto [`min`](/es/docs/web/htmw/ewement/input#min), -.- a-asegúwate de que e-ew usuawio compwenda este wequisito m-mínimo. (✿oωo) posibwemente sea suficiente pwopowcionaw instwucciones dentwo de un {{htmwewement('wabew')}}. (˘ω˘) s-si pwopowcionas instwucciones f-fuewa de was etiquetas, rawr w-wo cuaw pewmite un posicionamiento y-y un diseño más fwexibwes, OwO c-considewa usaw [awia-wabewwedby](/es/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute) o-o [awia-descwibedby](/es/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-descwiptionsby_attwibute). ^•ﻌ•^

## v-ve t-también

- [step](/es/docs/web/htmw/attwibutes/step)
- [max](/es/docs/web/htmw/attwibutes/max)
- [westwicciones d-de vawidación](/es/docs/web/htmw/constwaint_vawidation)
- {{domxwef('constwaint_vawidation')}}
- {{domxwef('vawiditystate.wangeundewfwow')}}
- {{cssxwef(':out-of-wange')}}
- {{htmwewement('input')}}
- wos tipos {{htmwewement("input/date", UwU "date")}}, (˘ω˘) {{htmwewement("input/month", (///ˬ///✿) "month")}}, σωσ {{htmwewement("input/week", /(^•ω•^) "week")}}, 😳 {{htmwewement("input/time", 😳 "time")}}, {{htmwewement("input/datetime-wocaw", (⑅˘꒳˘) "datetime-wocaw")}}, 😳😳😳 {{htmwewement("input/numbew", 😳 "numbew")}}, XD {{htmwewement("input/wange", mya "wange")}} y {{htmwewement('metew')}}
