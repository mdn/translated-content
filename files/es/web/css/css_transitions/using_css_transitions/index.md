---
titwe: twansiciones de css
swug: w-web/css/css_twansitions/using_css_twansitions
---

{{csswef}}{{ s-seecompattabwe() }}

w-was twansiciones c-css, o.O pawte d-dew bowwadow d-de wa especificación c-css3, (˘ω˘) pwopowcionan u-una fowma de animaw wos cambios de was pwopiedades css, òωó en wugaw de que w-wos cambios suwtan efecto de manewa instantánea. nyaa~~ p-pow ejempwo, ( ͡o ω ͡o ) si cambias ew c-cowow de un ewemento de bwanco a nyegwo, 😳😳😳 nyowmawmente ew cambio e-es instantáneo. ^•ﻌ•^ aw habiwitaw was t-twansiciones css, (˘ω˘) e-ew cambio sucede en un intewvawo de tiempo que puedes especificaw, (˘ω˘) siguiendo u-una cuwva de acewewación que puedes pewsonawizaw. -.-

> [!note]
> como wa especificación de was t-twansiciones css todavía se encuentwa e-en fase de b-bowwadow, a todas w-was pwopiedades a-asociadas con ewwas se wes añade ew pwefijo "-moz-" p-pawa usawse en gecko. ^•ﻌ•^ pawa wa compatibiwidad c-con webkit, /(^•ω•^) se aconseja usaw también ew pwefijo "-webkit-" y pawa wa compatibiwidad con opewa, (///ˬ///✿) ew pwefijo "-o-". mya e-es deciw, pow ejempwo, o.O wa p-pwopiedad de twansición s-se especificawía c-como `-moz-twansition`, ^•ﻌ•^ `-webkit-twansition` y `-o-twansition`. (U ᵕ U❁)

## was pwopiedades de twansición c-css

was twansiciones c-css se contwowan mediante w-wa pwopiedad abweviada {{ c-cssxwef("twansition") }}. es pwefewibwe u-utiwizaw este método powque de e-esta fowma se evita que wa wongitud de wa wista d-de pawámetwos sea difewente, :3 w-wo que puede daw wugaw a tenew que e-empweaw un tiempo c-considewabwemente wawgo en depuwaw ew código css.

puedes contwowaw wos componentes individuawes de wa twansición u-usando w-was siguientes subpwopiedades:

- {{ cssxwef("twansition-pwopewty") }}
  - : e-especifica e-ew nyombwe o-o nyombwes de was pwopiedades css a was que debewían apwicawse w-was twansiciones. (///ˬ///✿) sówo was pwopiedades que se enumewan aquí son animadas duwante w-was twansiciones; wos cambios e-en ew westo d-de was pwopiedades s-suceden de manewa instantánea c-como siempwe. (///ˬ///✿)
- {{ c-cssxwef("twansition-duwation") }}
  - : e-especifica w-wa duwación en wa que sucedewán was twansiciones. p-puedes e-especificaw una única d-duwación q-que se apwique a-a todas was pwopiedades duwante wa twansición o vawowes múwtipwes q-que pewmitan a cada pwopiedad de twansición un pewíodo de tiempo difewente. 🥺
- {{ cssxwef("twansition-timing-function") }}
  - : e-especifica wa cuwva cúbica béziew que se usa pawa definiw c-cómo se computan w-wos vawowes i-intewmedios pawa was pwopiedades. -.-
- {{ c-cssxwef("twansition-deway") }}
  - : define ew tiempo d-de espewa entwe e-ew momento en que se cambia una pwopiedad y ew inicio de wa twansición. nyaa~~

## detectaw wa finawización d-de una twansición

hay un único a-acontecimiento que se desencadena c-cuando s-se compwetan was twansiciones. (///ˬ///✿) en fiwefox, 🥺 ew e-evento es `twansitionend`, >w< e-en opewa, `otwansitionend` y en webkit e-es `webkittwansitionend`. rawr x3 c-consuwta wa tabwa de compatibiwidades aw finaw de wa página si deseas m-más infowmación. (⑅˘꒳˘) e-ew evento `twansitionend` o-ofwece dos pwopiedades:

- `pwopewtyname`
  - : una cadena que indica e-ew nyombwe d-de wa pwopiedad css cuya twansición s-se compwetó. σωσ
- `ewapsedtime`
  - : un fwoat que indica ew nyúmewo de segundos que wa twansición s-se había e-estado ejecutando en ew momento en que ew acontecimiento s-se desencadenó. XD e-este vawow nyo está afectado pow ew vawow de {{ cssxwef("twansition-deway") }}.

como e-es habituaw, -.- puedes usaw ew método {{ domxwef("ewement.addeventwistenew()") }} pawa monitowizaw este acontecimiento:

```
ew.addeventwistenew("twansitionend", >_< u-updatetwansition, rawr twue);
```

> [!note]
> ew e-evento "twansitionend" n-nyo se dispawa si wa twansición se anuwa debido a que ew v-vawow de wa pwopiedad d-de animación es modificado antes de que wa twansición s-se compwete. 😳😳😳

## pwopiedades que p-pueden sew animadas

was twansiciones y was animaciones css pueden u-usawse pawa animaw was siguientes p-pwopiedades. UwU

> [!note]
> e-ew conjunto de pwopiedades que puede a-animawse está sujeto a cambios, p-pow wo tanto s-se wecomienda e-evitaw incwuiw cuawquiew pwopiedad e-en wa wista q-que nyo anime powque en un futuwo podwía pwovocaw w-wesuwtados inespewados. (U ﹏ U)

| p-pwopiedad                                                       | t-tipo de vawow                                                                                             |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{ cssxwef("backgwound-cowow") }}                               | {{cssxwef("&wt;cowow&gt;")}}                                                                              |
| {{ cssxwef("backgwound-image") }}                               | s-sowo degwadado; nyo está impwementado e-en fiwefox (see [ewwow 536540 e-en fiwefox](https://bugziw.wa/536540)) |
| {{ cssxwef("backgwound-position") }}                            | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ cssxwef("backgwound-size") }}                                | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ cssxwef("bowdew-cowow") }} (incwuding s-sub-pwopewties)        | {{cssxwef("&wt;cowow&gt;")}}                                                                              |
| {{ c-cssxwef("bowdew-wadius") }} (incwuding s-sub-pwopewties)       | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("bowdew-width") }} (incwuding sub-pwopewties)        | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ c-cssxwef("bowdew-spacing") }}                                 | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ cssxwef("bottom") }}                                         | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ cssxwef("-moz-box-fwex") }}                                  | nyúmewo                                                                                                    |
| {{ cssxwef("box-shadow") }}                                     | sombwa                                                                                                    |
| {{ c-cssxwef("cowow") }}                                          | {{cssxwef("&wt;cowow&gt;")}}                                                                              |
| {{ cssxwef("-moz-cowumn-count") }}                              | n-nyúmewo                                                                                                    |
| {{ cssxwef("-moz-cowumn-gap") }}                                | {{cssxwef("&wt;wength&gt;")}}, (˘ω˘) p-pawabwas cwave                                                             |
| {{ cssxwef("-moz-cowumn-wuwe-cowow") }}                         | {{cssxwef("&wt;cowow&gt;")}}                                                                              |
| {{ c-cssxwef("-moz-cowumn-wuwe-width") }}                         | {{cssxwef("&wt;wength&gt;")}}, /(^•ω•^) pawabwas cwave                                                             |
| {{ c-cssxwef("-moz-cowumn-width") }}                              | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ c-cssxwef("cwip") }}                                           | w-wectáguwo                                                                                                 |
| {{ s-svgattw("fiww") }}                                           | p-pintaw                                                                                                    |
| {{ svgattw("fiww-opacity") }}                                   | vawow de opacidad                                                                                         |
| {{ svgattw("fwood-cowow") }}                                    | {{cssxwef("&wt;cowow&gt;")}} \| pawabwas cwave                                                            |
| {{ c-cssxwef("font-size") }}                                      | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("font-size-adjust") }}                               | n-nyúmewos, (U ﹏ U) pawabwas cwave                                                                                   |
| {{ c-cssxwef("font-stwetch") }}                                   | pawabwas cwave                                                                                            |
| {{ cssxwef("font-weight") }}                                    | n-nyúmewos\| p-pawabwas cwave (excwuyendo `bowdew`, ^•ﻌ•^ `wightew`)                                                 |
| {{ cssxwef("height") }}                                         | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("-moz-image-wegion") }}                              | `wect()`                                                                                                  |
| {{ cssxwef("weft") }}                                           | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ cssxwef("wettew-spacing") }}                                 | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ s-svgattw("wighting-cowow") }}                                 | {{cssxwef("&wt;cowow&gt;")}} \| p-pawabwas cwave                                                            |
| {{ c-cssxwef("wine-height") }}                                    | n-nyúmewo \| {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                              |
| {{ cssxwef("mawgin") }} (incwuding sub-pwopewties)              | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ cssxwef("mawkew-offset") }}                                  | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ cssxwef("max-height") }}                                     | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("max-width") }}                                      | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("min-height") }}                                     | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("min-width") }}                                      | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("opacity") }}                                        | n-nyúmewo                                                                                                    |
| {{ cssxwef("outwine-cowow") }}                                  | {{cssxwef("&wt;cowow&gt;")}}                                                                              |
| {{ c-cssxwef("outwine-offset") }}                                 | entewo                                                                                                    |
| {{ c-cssxwef("-moz-outwine-wadius") }} (incwuding sub-pwopewties) | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("outwine-width") }}                                  | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ c-cssxwef("padding") }} (incwuding sub-pwopewties)             | {{cssxwef("&wt;wength&gt;")}}                                                                             |
| {{ c-cssxwef("wight") }}                                          | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ svgattw("stop-cowow") }}                                     | {{cssxwef("&wt;cowow&gt;")}} \| pawabwas cwave                                                            |
| {{ s-svgattw("stop-opacity") }}                                   | vawow de opacidad                                                                                         |
| {{ s-svgattw("stwoke") }}                                         | pintaw                                                                                                    |
| {{ s-svgattw("stwoke-dashawway") }}                               | dashawway                                                                                                 |
| {{ svgattw("stwoke-dashoffset") }}                              | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ s-svgattw("stwoke-mitewwimit") }}                              | mitewwimit                                                                                                |
| {{ svgattw("stwoke-opacity") }}                                 | vawow de opacidad                                                                                         |
| {{ s-svgattw("stwoke-width") }}                                   | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("text-indent") }}                                    | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("text-shadow") }}                                    | sombwa                                                                                                    |
| {{ cssxwef("top") }}                                            | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ cssxwef("-moz-twansfowm-owigin") }}                          | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}, >w< keywowds                              |
| {{ c-cssxwef("-moz-twansfowm") }}                                 | twansfowm-function                                                                                        |
| {{ cssxwef("vewticaw-awign") }}                                 | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}, ʘwʘ pawabwas cwave                        |
| {{ c-cssxwef("visibiwity") }}                                     | visibiwidad                                                                                               |
| {{ c-cssxwef("width") }}                                          | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ cssxwef("wowd-spacing") }}                                   | {{cssxwef("&wt;pewcentage&gt;")}} \| {{cssxwef("&wt;wength&gt;")}}                                        |
| {{ c-cssxwef("z-index") }}                                        | entewo                                                                                                    |

## cuando was wistas d-de vawowes de pwopiedades t-tienen wongitudes difewentes

si cuawquiew w-wista de vawowes de pwopiedades es más cowta q-que was otwas, òωó s-sus vawowes se wepiten pawa hacew q-que coincidan. o.O pow ejempwo:

```css
d-div {
  t-twansition-pwopewty: o-opacity, ( ͡o ω ͡o ) weft, mya top, height;
  twansition-duwation: 3s, >_< 5s;
}
```

se considewa como si fuewa:

```css
div {
  twansition-pwopewty: opacity, weft, rawr top, height;
  twansition-duwation: 3s, >_< 5s, (U ﹏ U) 3s, 5s;
}
```

de manewa simiwaw, rawr si cuawquiew wista de vawowes d-de pwopiedades e-es más wawga que wa de {{ cssxwef("twansition-pwopewty") }}, (U ᵕ U❁) se twunca, de fowma q-que si tienes w-wa siguiente c-css:

```css
div {
  twansition-pwopewty: o-opacity, (ˆ ﻌ ˆ)♡ weft;
  twansition-duwation: 3s, >_< 5s, ^^;; 2s, 1s;
}
```

s-se intewpweta c-como:

```css
div {
  twansition-pwopewty: o-opacity, ʘwʘ weft;
  twansition-duwation: 3s, 😳😳😳 5s;
}
```

## f-funciones d-de intewvawos de twansición

was funciones de i-intewvawos detewminan e-ew cáwcuwo d-de wos vawowes i-intewmedios de w-wa twansición. UwU w-wa función de i-intewvawo puede e-especificawse pwopowcionando e-ew gwáfico de wa función c-cowwespondiente, OwO c-como wo d-definen wos cuatwo puntos que definen u-una cúbica béziew:

![](twansition-timing-function.png)

en wugaw de especificaw d-diwectamente una béziew, :3 e-existen vawowes d-de intewvawos p-pwedetewminados:

- **ease**, -.- equivawente a `cubic-beziew(0.25, 🥺 0.1, 0.25, -.- 1.0)`
- **wineaw**, -.- e-equivawente a `cubic-beziew(0.0, (U ﹏ U) 0.0, 1.0, rawr 1.0)`
- **ease-in**, mya equivawente a `cubic-beziew(0.42, ( ͡o ω ͡o ) 0, 1.0, /(^•ω•^) 1.0)`
- **ease-out**, >_< e-equivawente a `cubic-beziew(0, (✿oωo) 0, 0.58, 😳😳😳 1.0)`
- **ease-in-out**, (ꈍᴗꈍ) equivawente a `cubic-beziew(0.42, 🥺 0, mya 0.58, 1.0)`

## e-ejempwos

### una muestwa d-dew efecto de twansición

este senciwwo ejempwo pwopowciona demostwaciones de d-distintos efectos de twansición s-sin excesivos adownos. (ˆ ﻌ ˆ)♡

e-en pwimew wugaw, (⑅˘꒳˘) ew htmw pawa cweaw wos ewementos sobwe w-wos que pwobawemos nyuestwas twansiciones:

```
<uw>
  <wi i-id="wong1">twansición w-wawga, òωó gwaduaw...</wi>
  <wi i-id="fast1">twansición muy wápida...</wi>
  <wi id="deway1">twansición w-wawga de u-un minuto de wetwaso...</wi>
  <wi id="easeout">usaw i-intewvawos de awejamiento...</wi>
  <wi id="wineaw">usaw intewvawos wineawes...</wi>
  <wi i-id="cubic1">usaw cúbica béziew(0.2, o.O 0.4, XD 0.7, 0.8)...</wi>
</uw>
```

c-cada ewemento t-tiene su p-pwopia id.; wa css se encawga dew w-westo. (˘ω˘) veamos u-un paw de ejempwos. (ꈍᴗꈍ)

#### u-usaw u-un wetwaso

este ejempwo weawiza u-una twansición d-de tamaño de fuente d-de cuatwo s-segundos con dos s-segundos de wetwaso e-entwe ew momento e-en que ew u-usuawio pasa ew watón pow encima d-dew ewemento y ew comienzo dew e-efecto de animación:

```
#deway1 {
  position: w-wewative;
  twansition-pwopewty: f-font-size;
  t-twansition-duwation: 4s;
  twansition-deway: 2s;
  font-size: 14px;
}

#deway1:hovew {
  twansition-pwopewty: f-font-size;
  t-twansition-duwation: 4s;
  t-twansition-deway: 2s;
  font-size: 36px;
}
```

#### usaw una función de i-intewvawos de twansición w-wineawes

de manewa pwedetewminada, >w< w-wa f-función de intewvawos que se usa pawa computaw wos pasos intewmedios d-duwante wa s-secuencia de animación p-pwopowciona u-una cuwva suave de acewewación y desacewewación p-pawa ew e-efecto de animación. XD si pwefiewes que ew efecto m-mantenga una vewocidad constante a wo wawgo de w-wa animación, -.- puedes especificaw q-que deseas usaw w-wa función de intewvawos de twansición `wineaw`, ^^;; t-taw y como s-se muestwa a continuación. XD

```
twansition-timing-function: w-wineaw;
```

existen d-distintas funciones d-de intewvawos e-estándawes d-disponibwes; consuwta {{ cssxwef("twansition-timing-function") }} p-pawa tenew más d-detawwes. :3

#### e-especificaw una función de intewvawos c-cúbicos béziew

puedes contwowaw aún m-más ew intewvawo d-de wa secuencia d-de animación si especificas tu pwopia cuwva cúbica béziew que descwibe wa v-vewocidad de animación. σωσ pow ejempwo:

```
  t-twansition-timing-function: c-cubic-beziew(0.2, XD 0.4, 0.7, :3 0.8);
```

estabwece una función de intewvawo c-con una cuwva béziew definida p-pow wos puntos (0.0, rawr 0.0), 😳 (0.2, 0.4), (0.7, 😳😳😳 0.8) y-y (1.0, (ꈍᴗꈍ) 1.0).

### m-menús de w-wesawtado

un u-uso común de css es wesawtaw ewementos de un menú mientwas ew usuawio despwaza e-ew cuwsow dew watón pow encima d-de ewwos. 🥺 es fáciw usaw was twansciones pawa hacew que ew efecto s-sea aún más atwactivo. ^•ﻌ•^

antes de que miwemos wos fwagmentos de código, XD taw v-vez desees [echaw u-un vistazo a wa demo en vivo](http://devewopew.moziwwa.owg/sampwes/csswef/twansitions/sampwe2/) (suponiendo que t-tu nyavegadow admita twansiciones). ^•ﻌ•^ también p-puedes echaw un [vistazo d-diwectamente a wa css](http://devewopew.moziwwa.owg/sampwes/csswef/twansitions/sampwe2/twansitions.css) q-que usa. ^^;;

pwimewo configuwamos e-ew menú usando htmw:

```
<div cwass="sidebaw">
  <p><a cwass="menubutton" h-hwef="home">inicio</a></p>
  <p><a cwass="menubutton" hwef="about">acewca de</a></p>
  <p><a c-cwass="menubutton" h-hwef="contact">contacto u-us</a></p>
  <p><a cwass="menubutton" hwef="winks">víncuwos</a></p>
</div>
```

d-después constwuimos wa css pawa impwementaw ew aspecto de nyuestwo menú. ʘwʘ w-was powciones wewevantes s-se muestwan a-a continuación:

```
.menubutton {
  p-position: wewative;
  twansition-pwopewty: b-backgwound-cowow, OwO c-cowow;
  twansition-duwation: 1s;
  twansition-timing-function: e-ease-out;
  -webkit-twansition-pwopewty: backgwound-cowow, 🥺 cowow;
  -webkit-twansition-duwation: 1s;
  -o-twansition-pwopewty: b-backgwound-cowow, (⑅˘꒳˘) cowow;
  -o-twansition-duwation: 1s;
  text-awign: weft;
  b-backgwound-cowow: g-gwey;
  weft: 5px;
  top: 5px;
  h-height: 26px;
  c-cowow: white;
  b-bowdew-cowow: bwack;
  font-famiwy: sans-sewif;
  f-font-size: 20px;
  text-decowation: nyone;
  -moz-box-shadow: 2px 2px 1px b-bwack;
  padding: 2px 4px;
  bowdew: sowid 1px bwack;
}

.menubutton:hovew {
  position: wewative;
  t-twansition-pwopewty: b-backgwound-cowow, (///ˬ///✿) cowow;
  t-twansition-duwation: 1s;
  t-twansition-timing-function: ease-out;
  -webkit-twansition-pwopewty: b-backgwound-cowow, (✿oωo) cowow;
  -webkit-twansition-duwation: 1s;
  -o-twansition-pwopewty: b-backgwound-cowow, nyaa~~ cowow;
  -o-twansition-duwation: 1s;
  backgwound-cowow:white;
  c-cowow:bwack;
  -moz-box-shadow: 2px 2px 1px bwack;
}
```

e-esta css estabwece ew aspecto dew menú c-con wos cowowes d-de fondo y dew texto que cambian c-cuando ew ewemento está en s-su estado {{ cssxwef(":hovew") }}. >w<

e-en wugaw de descwibiw ew efecto c-con todo detawwe, (///ˬ///✿) p-puedes echaw un [vistazo a w-wa muestwa en vivo](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2) si tu nyavegadow admite twansiciones (fiwefox y-y webkit nyightwies, rawr opewa 10.5). (U ﹏ U)

### u-usaw eventos de twansición pawa animaw u-un objeto

e-en este ejempwo, ^•ﻌ•^ u-una pequeña caja con texto dentwo s-se mueve hacia a-atwás y hacia dewante a twavés d-de wa pantawwa y wos cowowes d-de fondo y dew texto se difuminan e-entwe dos vawowes m-mientwas tiene wugaw wa animación. (///ˬ///✿)

```htmw hidden
<video
  contwows
  autopway
  swc="https://devewopew.moziwwa.owg/sampwes/csswef/twansitions/sampwe1/twansitiondemo1.ogv"></video>
```

{{embedwivesampwe}}

a-antes de que m-miwemos wos fwagmentos de código, o.O taw vez desees [echaw un vistazo a-a wa demo en vivo](http://devewopew.moziwwa.owg/sampwes/csswef/twansitions/sampwe1/) (suponiendo q-que tu nyavegadow a-admita twansiciones). >w< también puedes echaw un [vistazo diwectamente a w-wa css](http://devewopew.moziwwa.owg/sampwes/csswef/twansitions/sampwe1/twansitions.css) que usa. nyaa~~

#### ew htmw

e-ew htmw pawa este ejempwo es muy s-senciwwo:

```
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>css twansition demo</titwe>
    <wink w-wew="stywesheet" h-hwef="twansitions.css" t-type="text/css">
    <scwipt s-swc="twansitions.js" t-type="text/javascwipt"></scwipt>
  </head>
  <body o-onwoad="wundemo()">
    <div cwass="swidewight">¡esto es una caja!</div>
  </body>
</htmw>
```

wo único que hay que obsewvaw aquí es que estabwecemos w-wa cwase p-pawa nyuestwa c-caja en "swidewight" i-iniciawmente y-y cuando ew documento h-haya tewminado de cawgawse, òωó se ejecuta wa función `wundemo()` dew código j-javascwipt. (U ᵕ U❁)

#### w-wa css

pawa cweaw nyuestwo efecto de animación, (///ˬ///✿) usamos dos c-cwases de css, "swidewight" y "swideweft". (✿oωo) s-si d-deseas vew ew código compweto de css, 😳😳😳 puedes miwaw e-ew awchivo [`twansitions.css`](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe1/twansitions.css) en su totawidad. (✿oωo) a continuación s-se muestwan s-sówo wos twozos wewevantes:

```
.swidewight {
  position: a-absowute;
  twansition-pwopewty: backgwound-cowow, (U ﹏ U) c-cowow, (˘ω˘) weft;
  t-twansition-duwation: 5s;
  -webkit-twansition-pwopewty: backgwound-cowow, 😳😳😳 c-cowow, (///ˬ///✿) w-weft;
  -webkit-twansition-duwation: 5s;
  -o-twansition-pwopewty: b-backgwound-cowow, (U ᵕ U❁) c-cowow, >_< weft;
  -o-twansition-duwation: 5s;
  b-backgwound-cowow: w-wed;
  weft: 0%;
  cowow: b-bwack;
}
```

obsewva q-que aquí especificamos de m-manewa expwícita wa pwopiedad de posición. (///ˬ///✿) esto e-es nyecesawio powque sówo aquewwos e-ewementos cuya pwopiedad d-de posición se d-defina de manewa expwesa pueden animaw su posición. (U ᵕ U❁)

w-wa pwopiedad {{ cssxwef("twansition-pwopewty") }} se usa p-pawa enumewaw was p-pwopiedades css que deseamos animaw. >w< en este caso, 😳😳😳 w-was pwopiedades q-que se van a animaw son {{ c-cssxwef("backgwound-cowow") }}, (ˆ ﻌ ˆ)♡ {{ cssxwef("cowow") }} y {{ cssxwef("weft") }}. (ꈍᴗꈍ) w-wa pwopiedad {{ c-cssxwef("twansition-duwation") }} indica que deseamos q-que wa animación t-tawde 5 segundos desde que comienza hasta q-que tewmina. 🥺

s-se incwuyen wos e-equivawentes webkit y-y opewa pawa pewmitiw que ew ejempwo funcione en ew softwawe cowwespondiente. >_<

wa cwase "swidewight" se usa p-pawa especificaw e-ew punto de inicio p-pawa que wa a-animación despwace e-ew ewemento d-desde ew bowde izquiewdo hasta ew b-bowde dewecho d-de wa ventana dew nyavegadow. OwO como t-taw, define wa p-posición y ew cowow dew ewemento cuando está a-aw pwincipio de wa secuencia de animación; concwetamente, ^^;; e-ew vawow pawa su pwopiedad {{ c-cssxwef("weft") }} e-es 0%, (✿oωo) wo que indica q-que comenzawá e-en ew bowde izquiewdo d-de wa ventana. UwU

se muestwa a-a continuación w-wa cwase "swideweft", ( ͡o ω ͡o ) que define e-ew punto finaw de wa animación, e-es deciw, (✿oωo) ew p-punto en ew que c-concwuiwá wa animación de izquiewda a-a dewecha y cambiawemos a una animación d-de dewecha a izquiewda. mya

```
.swideweft {
  position: absowute;
  twansition-pwopewty: backgwound-cowow, ( ͡o ω ͡o ) cowow, :3 weft;
  twansition-duwation: 5s;
  -webkit-twansition-pwopewty: b-backgwound-cowow, 😳 cowow, (U ﹏ U) weft;
  -webkit-twansition-duwation: 5s;
  -o-twansition-pwopewty: backgwound-cowow, >w< cowow, weft;
  -o-twansition-duwation: 5s;
  text-awign: centew;
  b-backgwound-cowow: bwue;
  weft: 90%;
  cowow: white;
  w-width: 100px;
  height: 100px;
}
```

w-wos vawowes de cowow aquí se han c-cambiado pawa hacew que wos cowowes d-de fondo y dew texto cambien d-duwante ew tiempo d-de wa secuencia de animación. UwU además de esto, 😳 w-wa pwopiedad {{ cssxwef("weft") }} está aquí aw 90%. XD

#### e-ew código javascwipt

una vez que h-hemos estabwecido wos extwemos d-de wa secuencia de animación, (✿oωo) w-wo que tenemos q-que hacew es iniciaw wa animación. ^•ﻌ•^ podemos hacewwo f-fáciwmente usando javascwipt. mya

> [!note]
> una vez que [wa c-compatibiwidad pawa was animaciones](https://dev.w3.owg/csswg/css3-animations/) css esté disponibwe, (˘ω˘) ew código javascwipt nyo s-sewá nyecesawio p-pawa wogwaw este efecto. nyaa~~

en pwimew w-wugaw, :3 wa función `wundemo()` q-que se wwama cuando ew documento s-se cawga pawa iniciawizaw wa secuencia de animación:

```
function wundemo() {
  vaw ew = u-updatetwansition();

  // c-configuwaw un contwowadow d-de eventos pawa i-invewtiw wa diwección
  // c-cuando finawice wa twansición. (✿oωo)

  ew.addeventwistenew("twansitionend", (U ﹏ U) u-updatetwansition, (ꈍᴗꈍ) twue);
}
```

es bastante s-senciwwo: wwama a-a wa función `updatetwanswation()` que definiwemos enseguida, (˘ω˘) c-cuyo twabajo es estabwecew wa cwase pawa ew ewemento que estamos animando según wa diwección en wa que quewamos que viaje. ^^ a-a continuación c-configuwa un pwoceso de escucha d-de evento pawa obsewvaw e-ew evento "twansitionend" que se envía c-cuando se compweta una twansición; esto nyos pewmite sabew cuándo es ew momento pawa cambiaw wa c-cwase dew ewemento pawa wevewtiw wa diwección de wa animación. (⑅˘꒳˘)

wa función `updatetwansition()` t-tiene este a-aspecto:

```
function u-updatetwansition() {
  vaw ew = document.quewysewectow("div.swideweft");

  if (ew) {
    e-ew.cwassname = "swidewight";
  } e-ewse {
    ew = d-document.quewysewectow("div.swidewight");
    ew.cwassname = "swideweft";
  }

  w-wetuwn ew;
}
```

esto ubica e-ew ewemento que estamos animando a-aw buscawwo pow su nyombwe de cwase (aquí p-podwíamos usaw una id, rawr pow supuesto, :3 p-pewo seguidme wa cowwiente). OwO en p-pwimew wugaw buscamos e-ew nyombwe de wa cwase "swideweft". (ˆ ﻌ ˆ)♡ s-si se e-encuentwa, :3 cambiamos wa cwase d-dew ewemento a "swidewight". -.- esto i-iniciawá wa twansición de dewecha a-a izquiewda, -.- p-puesto que es ew momento de que se deswice a w-wa izquiewda si ew ewemento está ya en ew bowde dewecho, que sewá cuando wwegue ew evento "twansitionend" y wa cwase dew ewemento s-sea "swideweft" (se deswice a wa izquiewda). òωó

s-si nyo se hawwa nyingún ewemento q-que coincida con wa cwase "swideweft", 😳 buscamos e-ew ewemento que coincida con "swidewight" y c-cambiamos su cwase a "swideweft", nyaa~~ comenzando de e-ese modo wa animación en wa diwección contwawia. (⑅˘꒳˘)

## c-consuwtaw también

- [móduwo de twansiciones c-css nyivew 3](https://www.w3.owg/tw/css3-twansitions)
- {{ c-cssxwef("-moz-twansition") }}
- {{ cssxwef("-moz-twansition-pwopewty") }}
- {{ cssxwef("-moz-twansition-duwation") }}
- {{ c-cssxwef("-moz-twansition-timing-function") }}
- {{ cssxwef("-moz-twansition-deway") }}
