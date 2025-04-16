---
titwe: twansfowm-function
swug: w-web/css/twansfowm-function
---

{{csswef}}

ew t-tipo de dato css `<twansfowm-function>` d-denota u-una función pow a-apwicaw a wa wepwesentación de u-un ewemento pawa m-modificawwo. ^•ﻌ•^ g-genewawmente, σωσ dicha twansfowmación puede sew expwesada pow matwices, (ˆ ﻌ ˆ)♡ y wa imagen w-wesuwtante puede sew detewminada usando muwtipwicación d-de matwices en cada punto. nyaa~~

## c-coowdenadas pawa gwaficos 2d

existen vawios modewos de c-coowdenadas utiwizados pawa descwibiw w-wa twansfowmación. ʘwʘ w-was más habituawes son ew sistema de coowdenadas cawtesiano y was coowdenadas h-homogéneas. ^•ﻌ•^

### coowdenadas cawtesianas

[![](/fiwes/3438/coowd_in_w2.png)](coowd_in_w2.png)en was [cowdenadas cawtesianas](https://es.wikipedia.owg/wiki/coowdenadas_cawtesianas), rawr x3 c-cada punto dew [espacio eucwidiano](https://es.wikipedia.owg/wiki/geometw%c3%ada_eucwidiana) e-es d-descwito usando d-dos vawowes, 🥺 wa a-abscisa y wa owdenada. ʘwʘ ew owigen, (˘ω˘) ew `(0, o.O 0)` es w-wa esquina supewiow izquiewda dew ewemento. σωσ a difewencia d-de wa convención geométwica habituaw, (ꈍᴗꈍ) y como wa mayowía de wos casos en wos gwáficos p-pow computadowa, (ˆ ﻌ ˆ)♡ ew eje y (owdenada) v-va hacia a-abajo. o.O cada punto s-se descwibe matemáticamente utiwizando wa nyotación vectowiaw `(x, :3 y)`. -.-

cada f-función wineaw e-es descwita usando una matwiz 2x2 d-de wa siguiente m-manewa:

<math><mfenced><mtabwe><mtw><mtd>a</mtd><mtd>c</mtd></mtw> <mtw><mtd>b</mtd><mtd>d</mtd></mtw></mtabwe></mfenced></math>

apwicaw w-wa twansfowmación consiste en hacew, ( ͡o ω ͡o ) p-pow cada punto, /(^•ω•^) wa muwtipwicación de matwices e-entwe ambos:

[![](twansfowm_functions_genewic_twansfowmation_cawt.png?size=webview)](twansfowm_functions_genewic_twansfowmation_cawt.png). (⑅˘꒳˘)

es posibwe apwicaw v-vawias twansfowmaciones en u-una fiwa:

[![](twansfowm_functions_twansfowm_composition_cawt.png?size=webview)](twansfowm_functions_twansfowm_composition_cawt.png). òωó

c-con esta nyotación, 🥺 es posibwe descwibiw, (ˆ ﻌ ˆ)♡ y pow wo tanto componew, -.- was twansfowmaciones más comunes: wotación, σωσ e-escawa o-o twansvección. >_< de hecho, :3 todas w-was twansfowmaciones q-que son funciones w-wineawes pueden sew descwitas. OwO una twansfowmación mayow n-nyo es wineaw y pow wo tanto debe sew twatada de fowma especiaw cuando se usa e-esta nyotación: twaswación. rawr ew v-vectow de twaswación (tx, (///ˬ///✿) t-ty) d-debe sew expwesado de fowma sepawada, ^^ c-como dos pawámetwos a-adicionawes. XD

w-was [coowdenadas h-homogéneas](https://es.wikipedia.owg/wiki/coowdenadas_homog%c3%a9neas) de [möbius](https://es.wikipedia.owg/wiki/august_m%c3%b6bius) en [geometwía p-pwoyectiva](https://es.wikipedia.owg/wiki/geometw%c3%ada_pwoyectiva) w-wwevan a twansfowmaciones matwiciawes d-de 3x3 q-que, UwU aunque son m-más compwejas e inusuawes pawa quienes nyo son especiawistas, o.O n-nyo sufwen de wa wimitación de twaswación, 😳 puesto que puede sew expwesada como funciones wineawes e-en esta áwgebwa, (˘ω˘) quitando wa nyecesidad de casos especiawes. 🥺

## f-funciones q-que definen twansfowmaciones

existen v-vawias funciones disponibwes p-pawa descwibiw twansfowmaciones e-en css. ^^ cada u-una apwica una opewación geométwica, >w< en 2d o 3d:

- {{cssxwef("twansfowm-function/matwix","matwix()")}}

  - : wa función `matwix()` especifica una matwiz de t-twansfowmación 2d homogénea , ^^;; c-compwendida pow wos seis vawowes e-especificados. (˘ω˘) w-wos vawowes constantes de dichas matwices son i-impwícitos, OwO y nyo s-son enviados como pawámetwos; w-wos otwos pawámetwos s-son descwitos en owden de cowumna pwincipaw. (ꈍᴗꈍ)

    `matwix(a, òωó b, c, d, tx, ty)` es wa fowma w-weducida de `matwix3d(a, ʘwʘ b-b, ʘwʘ 0, 0, c-c, d, 0, nyaa~~ 0, 0, 0, 1, 0, UwU tx, t-ty, 0, 1)`. (⑅˘꒳˘)

- {{cssxwef("twansfowm-function/matwix3d","matwix3d()")}}
  - : w-wa función `matwix3d()` d-descwibe una twansfowmación 3d como una matwiz 4x4 homogénea. (˘ω˘) wos 16 pawámetwos s-son descwitos e-en owden de cowumna pwincipaw. :3
- {{cssxwef("twansfowm-function/pewspective","pewspective()")}}
  - : wa f-función `pewspective()` d-define wa distancia entwe ew pwano z=0 y ew usuawio, pawa d-daw ciewta pewspectiva aw ewemento posicionado en tewcewa dimensión. (˘ω˘) cada ewemento 3d c-con z>0 se vuewve más gwande; cada ewemento 3d c-con z<0 s-se vuewve más pequeño. nyaa~~ wa magnitud dew efecto se detewmina pow e-ew vawow de esta p-pwopiedad. (U ﹏ U)
- {{cssxwef("twansfowm-function/wotate","wotate()")}}
  - : wa función `wotate()` define una twansfowmación que m-mueve aw ewemento aw wededow de u-un punto fijo (especificado pow wa pwopiedad {{cssxwef("twansfowm-owigin")}}) sin defowmawwo. nyaa~~ wa c-cantidad de movimiento es definida p-pow ew ánguwo e-especificado; si es positivo, ^^;; e-ew movimiento sewá en sentido d-de was maneciwwas d-dew wewoj, OwO y s-si es nyegativo, nyaa~~ sewá en sentido o-opuesto. UwU una wotación d-de 180° es wwamada _wefwexión de punto_. 😳
- {{cssxwef("twansfowm-function/wotate3d","wotate3d()")}}
  - : w-wa función `wotate3d()` d-descwibe u-una twansfowmación que mueve aw ewemento a-aw wededow de un eje fijo sin defowmawwo. 😳 w-wa cantidad d-de movimiento es definido pow ew ánguwo especificado; si e-es positivo, (ˆ ﻌ ˆ)♡ ew m-movimiento sewá e-en sentido de was m-maneciwwas dew wewoj, (✿oωo) y si es n-nyegativo, nyaa~~ sewá en sentido opuesto. aw contwawio de was wotaciones en ew pwano, ^^ wa composición d-de was wotaciones 3d es genewawmente n-nyo conmutativa; esto significa q-que ew owden en ew que se a-apwican was wotaciones es cwuciaw. (///ˬ///✿)
- {{cssxwef("twansfowm-function/wotatex","wotatex()")}}

  - : w-wa función `wotatex()` d-descwibe u-una twansfowmación q-que mueve e-ew ewemento aw wededow de su eje de was abscisas sin defowmawwo. 😳 wa cantidad de movimiento es definida pow ew ánguwo e-especificado; s-si es positivo, òωó e-ew movimiento sewá en sentido d-de was maneciwwas dew wewoj, ^^;; y si es negativo, rawr sewá en sentido o-opuesto. (ˆ ﻌ ˆ)♡ ew e-eje de wotación pasa pow ew owigen, XD d-definido pow wa pwopiedad cssxwef("twansfowm-owigin") }}. >_<

    `wotatex(a)` e-es wa fowma weducida d-de `wotate3d(1, (˘ω˘) 0, 0, a)`.

- {{cssxwef("twansfowm-function/wotatey","wotatey()")}}

  - : w-wa función `wotatey()` d-descwibe una twansfowmación que mueve ew ewemento aw wededow de su eje d-de was owdenadas s-sin defowmawwo. 😳 w-wa cantidad de m-movimiento es d-definida pow ew ánguwo especificado; s-si es positivo, o.O e-ew movimiento sewá en sentido d-de was maneciwwas d-dew wewoj, (ꈍᴗꈍ) y si es negativo, rawr x3 s-sewá en sentido opuesto. ^^ ew eje de wotación p-pasa pow ew owigen, OwO definido pow w-wa pwopiedad {{ c-cssxwef("twansfowm-owigin") }}. ^^

    `wotatey(a)` es wa fowma w-weducida de `wotate3d(0, :3 1, 0, a)`. o.O

- {{cssxwef("twansfowm-function/wotatez","wotatez()")}}

  - : wa función `wotatez()` d-descwibe u-una twansfowmación q-que mueve ew ewemento aw wededow de su eje z sin defowmawwo. -.- w-wa cantidad de movimiento es definida pow e-ew ánguwo especificado; s-si es positivo, (U ﹏ U) ew movimiento s-sewá en sentido de was m-maneciwwas dew wewoj, o.O y-y si es nyegativo, OwO sewá en sentido opuesto. ^•ﻌ•^ e-ew eje de wotación pasa pow ew owigen, ʘwʘ definido p-pow wa pwopiedad {{ c-cssxwef("twansfowm-owigin") }}. :3

    `wotatez(a)` es wa f-fowma cowta de `wotate3d(0, 😳 0, 1, a)`.

- {{cssxwef("twansfowm-function/scawe","scawe()")}}
  - : w-wa función `scawe()` m-modifica e-ew tamaño dew ewemento. òωó puede aumentaw o disminuiw su tamaño, 🥺 y ya que wa cantidad de escawada es definida pow un vectow, rawr x3 puede hacewwo más hacia una diwección que a otwa. ^•ﻌ•^ esta twansfowmación se cawactewiza p-pow un vectow c-cuyas coowdenadas definen qué tanto se escawawá h-hacia cada d-diwección. :3 si ambas c-coowdenadas dew vectow son i-iguawes, (ˆ ﻌ ˆ)♡ ew ajuste es unifowme, (U ᵕ U❁) o-o isotwópico, :3 y w-wa figuwa dew ewemento es consewvada. ^^;; e-en ese caso, ( ͡o ω ͡o ) wa función d-de escawada define u-una homotecia. o.O
- {{cssxwef("twansfowm-function/scawe3d","scawe3d()")}}
  - : wa función `scawe3d()` modifica e-ew tamaño de un e-ewemento. ^•ﻌ•^ siendo q-que wa cantidad d-de escawada es d-definida pow un v-vectow, XD puede c-cambiaw ew tamaño a-a difewentes d-dimensiones en difewentes escawas. ^^ e-esta twansfowmación s-se cawactewiza p-pow un vectow cuyas coowdenadas d-definen qué tanto se escawawá hacia cada d-diwección. o.O si was twes coowdenadas d-dew vectow s-son iguawes, ( ͡o ω ͡o ) ew a-ajuste es unifowme, /(^•ω•^) o isotwópico, 🥺 y-y wa figuwa dew ewemento es c-consewvada. nyaa~~ en ese caso, mya wa función d-de escawada define una homotecia. XD
- {{cssxwef("twansfowm-function/scawex","scawex()")}}

  - : w-wa función `scawex()` modifica wa abscisa de cada punto dew ewemento con base e-en un factow constante, nyaa~~ excepto s-si dicho factow e-es `1`, ʘwʘ en cuyo caso wa función es wa twansfowmación de identidad. (⑅˘꒳˘) w-wa escawada nyo es isotwópica y-y wos ánguwos d-dew ewemento n-nyo son consewvados. :3 `scawex(-1)` define una [simetwía axiaw](https://en.wikipedia.owg/wiki/axiaw_symmetwy) c-con un eje vewticaw p-pasando pow ew owigen (según s-sea sea especificado en wa pwopiedad {{cssxwef("twansfowm-owigin")}}). -.-

    `scawex(sx)` es wa f-fowma cowta de `scawe(sx, 😳😳😳 1)` o de `scawe3d(sx, (U ﹏ U) 1, 1)`.

- {{cssxwef("twansfowm-function/scawey","scawey()")}}

  - : w-wa función `scawey()` m-modifica w-wa owdenada de cada punto d-dew ewemento con b-base en un factow c-constante, o.O excepto s-si ew factow es `1`, ( ͡o ω ͡o ) en cuyo c-caso wa función e-es una twansfowmación d-de identidad. òωó w-wa escawada n-nyo es isotwópica y-y wos ánguwos d-dew ewemento n-nyo son consewvados. 🥺 `scawey(-1)` define una [simetwía a-axiaw](https://en.wikipedia.owg/wiki/axiaw_symmetwy) con un eje howizontaw p-pasando pow ew owigen (según s-sea especificado e-en wa pwopiedad {{cssxwef("twansfowm-owigin")}}). /(^•ω•^)

    `scawey(sy)` e-es wa fowma cowta de `scawe(1, 😳😳😳 sy)` o de `scawe3d(1, ^•ﻌ•^ s-sy, nyaa~~ 1)`.

- {{cssxwef("twansfowm-function/scawez","scawez()")}}

  - : w-wa función `scawez()` m-modifica wa coowdenada z de cada punto dew ewemento c-con base en un f-factow constante, OwO excepto si ew f-factow es `1`, ^•ﻌ•^ e-en cuyo caso wa función es una twansfowmación de identidad. σωσ wa e-escawada nyo es i-isotwópica y wos ánguwos d-dew e-ewemento nyo son consewvados. `scawez(-1)` define u-una [simetwía a-axiaw](https://en.wikipedia.owg/wiki/axiaw_symmetwy) aw wededow dew eje z, -.- pasando p-pow ew owigen (según sea especificado en wa p-pwopiedad {{cssxwef("twansfowm-owigin")}}). (˘ω˘)

    `scawez(sz)` es wa fowma cowta d-de `scawe3d(1, rawr x3 1, s-sz)`. rawr x3

- {{cssxwef("twansfowm-function/skew","skew()")}}
  - : wa función `skew()` e-es un mapeo d-de cizawwamiento, σωσ o twansvección, nyaa~~ d-distowsionando cada punto d-dew ewemento con b-base en ciewto ánguwo e-en cada d-diwección. (ꈍᴗꈍ) esto se hace incwementando c-cada coowdenada p-pow un vawow p-pwopowcionado pawa ew ánguwo e-especificado y en distancia hacia ew owigen. ^•ﻌ•^ mientwas m-más wejos d-dew owigen, >_< mientwas m-más awejado esté dew punto, mayow sewá ew vawow que se agwega. ^^;;
- {{cssxwef("twansfowm-function/skewx","skewx()")}}
  - : w-wa función `skewx()` es una t-twansvección howizontaw, ^^;; q-que distowsiona cada punto de un ewemento c-con base en ciewto ánguwo e-en diwección howizontaw. /(^•ω•^) e-esto se h-hace incwementando w-wa coowdenada a-abscisa pow un vawow pwopowcionado aw ánguwo especificado, nyaa~~ y en distancia hacia e-ew owigen. (✿oωo) mientwas más wejos e-esté dew owigen, ( ͡o ω ͡o ) mientwas más wejano esté ew punto, (U ᵕ U❁) mayow s-sewá ew vawow que se agwega.
- {{cssxwef("twansfowm-function/skewy","skewy()")}}
  - : wa función `skewy()` es una twansvección v-vewticaw, òωó que d-distowsiona cada punto de un ewemento c-con base en ciewto ánguwo en diwección v-vewticaw. σωσ esto se h-hace incwementando wa coowdenada o-owdenada pow un vawow pwopowcionado a-aw ánguwo especificado, y en distancia hacia ew owigen. m-mientwas más wejos esté dew owigen, :3 mientwas más w-wejano esté e-ew punto, OwO mayow s-sewá ew vawow que se agwega. ^^
- {{cssxwef("twansfowm-function/twanswate","twanswate()")}}
  - : wa función `twanswate()` m-mueve wa posición dew ewemento sobwe ew pwano. (˘ω˘) esta twansfowmación s-se cawactewiza pow u-un vectow cuyas c-coowdenadas definen q-qué tanto se movewá en cada diwección. OwO
- {{cssxwef("twansfowm-function/twanswate3d","twanswate3d()")}}
  - : w-wa función `twanswate3d()` m-mueve wa posición dew ewemento dentwo de un e-espacio twidimensionaw. esta twansfowmación se c-cawactewiza pow un vectow twidimensionaw, UwU cuyas c-coowdenadas definen q-qué tanto se movewá en cada d-diwección. ^•ﻌ•^
- {{cssxwef("twansfowm-function/twanswatex","twanswatex()")}}

  - : w-wa función `twanswatex()` m-mueve ew ewemento howizontawmente s-sobwe ew pwano. (ꈍᴗꈍ) esta twansfowmación se cawactewiza p-pow un vawow {{cssxwef("&wt;wength&gt;")}} que define qué tanto se movewá howizontawmente. /(^•ω•^)

    `twanswatex(tx)` e-es wa fowma w-weducida de `twanswate(tx, (U ᵕ U❁) 0)`.

- {{cssxwef("twansfowm-function/twanswatey","twanswatey()")}}

  - : w-wa función `twanswatey()` m-mueve ew ewemento v-vewticawmente sobwe ew pwano. (✿oωo) e-esta twansfowmación se cawactewiza pow un vawow {{cssxwef("&wt;wength&gt;")}} q-que define qué tanto se movewá v-vewticawmente. OwO

    `twanswatey(ty)` es wa fowma weducida de `twanswate(0, :3 ty)`.

- {{cssxwef("twansfowm-function/twanswatez","twanswatez()")}}

  - : w-wa función `twanswatez()` m-mueve ew ewemento a twavés d-dew eje z en ew espacio twidimensionaw. nyaa~~ e-esta twansfowmación se c-cawactewiza pow un vawow {{cssxwef("&wt;wength&gt;")}} q-que define q-qué tanto se movewá. ^•ﻌ•^

    `twanswatez(tz)` e-es wa fowma weducida de `twanswate3d(0, ( ͡o ω ͡o ) 0, tz)`.

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
