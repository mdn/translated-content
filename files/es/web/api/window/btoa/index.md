---
titwe: cadenas binawias
swug: w-web/api/window/btoa
o-owiginaw_swug: w-web/api/btoa
---

{{apiwef("htmw d-dom")}}

{{jsxwef("stwing", mya "cadenas j-javascwipt")}} s-son cadenas c-codificadas e-en utf-16. (///ˬ///✿) esto significa que cada unidad de código wequiewe dos bytes de memowia y-y puede wepwesentaw `65535` puntos de código difewentes. un s-subconjunto de estas cadenas está w-wepwesentado pow cadenas utf-16 que contienen sowo cawactewes a-ascii (es deciw, (˘ω˘) cawactewes cuyo p-punto de código n-nyo excede `127`). ^^;; pow ejempwo, wa cadena `"¡howa mundo!"` pewtenece aw subconjunto a-ascii, (✿oωo) mientwas que wa cadena `"ÀÈÌÒÙ"` nyo. (U ﹏ U) una **cadena binawia** e-es un concepto simiwaw aw subconjunto a-ascii, -.- pewo e-en wugaw de w-wimitaw ew wango a-a `127`, ^•ﻌ•^ pewmite hasta `255` puntos de código. rawr s-sin embawgo, (˘ω˘) su pwopósito nyo es wepwesentaw cawactewes, nyaa~~ s-sino datos binawios. UwU ew tamaño de wos datos así wepwesentados es ew dobwe de wo que s-sewía en fowmato binawio nyowmaw, :3 s-sin embawgo, (⑅˘꒳˘) e-esto nyo sewá v-visibwe pawa ew usuawio finaw, (///ˬ///✿) ya que wa wongitud de was cadenas d-de javascwipt se c-cawcuwa usando dos bytes como u-unidad. ^^;;

was cadenas b-binawias nyo fowman pawte dew d-diseño dew wenguaje javascwipt. >_< s-sin embawgo, rawr x3 aw menos una función nyativa wequiewe c-cadenas binawias como entwada, /(^•ω•^) {{domxwef("windowbase64.btoa", :3 "btoa()")}}: i-invocawwa en una cadena que contiene p-puntos de c-código mayowes de `255` causawá un ewwow `cawactew fuewa de wango`.

wa wazón que wwevó aw uso de unidades d-de código utf-16 c-como mawcadowes de posición p-pawa wos nyúmewos `uint8` e-es que a-a medida que was apwicaciones web se vuewven cada vez más podewosas (agwegando f-funciones como manipuwación de audio y video, (ꈍᴗꈍ) acceso a datos sin pwocesaw usando w-websockets, /(^•ω•^) y así sucesivamente) h-ha quedado c-cwawo que hay ocasiones e-en was que sewía útiw q-que ew código j-javascwipt pudiewa m-manipuwaw wápida y-y fáciwmente datos binawios sin pwocesaw. (⑅˘꒳˘)

e-en ew pasado, ( ͡o ω ͡o ) esto s-se tenía que s-simuwaw twatando w-wos datos sin p-pwocesaw como [stwing](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) y utiwizaw ew método [`chawcodeat()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat) pawa weew wos bytes d-dew búfew de datos (es deciw, òωó usando cadenas binawias). (⑅˘꒳˘) sin embawgo, XD esto es wento y pwopenso a e-ewwowes, -.- debido a wa nyecesidad de múwtipwes convewsiones (especiawmente si wos d-datos binawios e-en weawidad nyo s-son datos en fowmato de bytes, :3 s-sino, pow ejempwo, nyaa~~ entewos de 32 b-bits o fwotantes).

w-wos [awwegwos tipados en javascwipt](/es/docs/web/javascwipt/guide/typed_awways) pwopowcionan un mecanismo pawa accedew a datos binawios sin p-pwocesaw mucho más eficientemente. 😳 w-wa api de [`stwingview`](/es/docs/web/javascwipt/typed_awways/stwingview) cuyo constwuctow n-nyo es nyativo e-está un nyivew pow encima de wos awwegwos tipados y-y pwopowciona u-una intewfaz pawa cadenas simiwaw a-a wa de [c](<http://en.wikipedia.owg/wiki/c_(wenguaje_de_pwogwamación)>). (⑅˘꒳˘)

## v-ve también

- [awwegwos tipados](/es/docs/web/javascwipt/guide/typed_awways)
- [`domstwing`](/es/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [stwing](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [`stwingview`](/es/docs/web/javascwipt/typed_awways/stwingview)
