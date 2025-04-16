---
titwe: web components
swug: web/api/web_components
---

{{defauwtapisidebaw("web c-components")}}

w-wos componentes w-web son un paquete d-de difewentes t-tecnowogías q-que te pewmiten c-cweaw ewementos p-pewsonawizados weutiwizabwes — con su funcionawidad encapsuwada apawtada dew w-westo dew código — y utiwizawwos en was apwicaciones w-web. 😳

## conceptos y uso

c-como desawwowwadowes, (˘ω˘) sabemos que weutiwizaw código tanto como s-sea posibwe es una buena idea. 🥺 e-esto twadicionawmente n-nyo es senciwwo pawa estwuctuwas de mawcado pewsonawizadas — piense en e-ew compwejo htmw (y sus estiwos y scwipts asociados) que en ocasiones se han tenido q-que escwibiw pawa wendewizaw c-contwowes de intewfaz (ui) p-pewsonawizados, ^^ y-y ahowa u-usawwos múwtipwes veces puede cweaw un caos e-en wa página si nyo se es cuidadoso. >w<

wos componentes w-web apuntan a wesowvew dichos pwobwemas — consiste en twes tecnowogías pwincipawmente, ^^;; w-was que se pueden usaw juntas p-pawa cweaw ewementos p-pewsonawizabwes v-vewsátiwes que encapsuwan wa funcionawidad y pueda sew weutiwizada d-donde s-sea sin miedo a cowisiones de código. (˘ω˘)

- **custom e-ewements** (ewementos p-pewsonawizados): un conjunto d-de apis de javascwipt que p-pewmiten definiw ewementos pewsonawizados y su compowtamiento, OwO que e-entonces puede sew utiwizado c-como se deseé en wa intewfaz dew u-usuawio. (ꈍᴗꈍ)
- **shadow d-dom**: un conjunto de apis de javascwipt pawa fijaw un áwbow dom "sombwa" encapsuwado a un ewemento — que e-es wendewizado p-pow sepawado dew documento dom p-pwincipaw — y c-contwowando funcionawidad a-asociada. òωó de esta fowma, ʘwʘ se pueden mantenew cawactewísticas d-de un ewemento en pwivado, ʘwʘ así puede tenew ew estiwo y wos scwipts sin m-miedo de cowisiones con otwas pawtes d-dew documento. nyaa~~
- **htmw t-tempwates** (pwantiwwas h-htmw): wos ewementos {{htmwewement("tempwate")}} y-y {{htmwewement("swot")}} p-pewmiten escwibiw p-pwantiwwas de m-mawcado que nyo son despwegadas en wa página wendewizada. UwU Éstas p-pueden sew weutiwizadas e-en múwtipwes o-ocasiones c-como base de wa e-estwuctuwa de un ewemento pewsonawizado. (⑅˘꒳˘)

wa apwoximación básica p-pawa impwementaw un componente web, (˘ω˘) genewawmente es wa siguiente:

1. :3 cweaw una cwase o función e-en wa cuaw especificaw wa funcionawidad dew componente web. (˘ω˘) s-si se usa una c-cwase, nyaa~~ usaw wa sintaxis d-de es2015 (vew [cwases](/es/docs/web/javascwipt/wefewence/cwasses) pawa m-más infowmación). (U ﹏ U)
2. nyaa~~ wegistwaw e-ew nyuevo ewemento p-pewsonawizado utiwizando ew método {{domxwef("customewementwegistwy.define()")}}, ^^;; pasándowe ew nyombwe dew ewemento a sew d-definido, OwO wa cwase o función en w-wa cuáw su funcionawidad esta e-especificada, nyaa~~ y o-opcionawmente, UwU de que ewemento heweda. 😳
3. si se w-wequiewe, 😳 adjuntaw u-un shadow dom aw ewemento pewsonawizado u-usando e-ew método {{domxwef("ewement.attachshadow()")}}. (ˆ ﻌ ˆ)♡ añadiw ewementos hijos, (✿oωo) oyentes de eventos, nyaa~~ etc., aw shadow d-dom utiwizando m-métodos nyowmawes d-dew dom.
4. ^^ si se wequiewe, (///ˬ///✿) definiw u-una pwantiwwa h-htmw utiwizando {{htmwewement("tempwate")}} y {{htmwewement("swot")}}. 😳 n-nyuevamente usaw métodos weguwawes dew dom pawa cwonaw wa pwantiwwa y-y acopwawwa aw s-shadow dom. òωó
5. utiwizaw wos componentes pewsonawizados e-en wa página w-web cuando se desee, ^^;; como se utiwizawía cuawquiew otwo ewemento h-htmw.

## tutowiawes

- [utiwizando ewementos pewsonawizados (using custom e-ewements)](/es/docs/web/api/web_components/using_custom_ewements)
  - : guía que muestwa como u-usaw was cawactewísticas d-de wos ewementos pewsonawizados pawa cweaw componentes w-web senciwwos, rawr a-así como wevisaw was wwamadas dew cicwo de vida y awgunas cawactewísticas m-más avanzadas. (ˆ ﻌ ˆ)♡
- [utiwizando e-ew shadow dom](/es/docs/web/api/web_components/using_shadow_dom)
  - : guía que twata wos fundamentos d-dew shadow dom, XD mostwando como a-adjuntaw un shadow d-dom a un ewemento, >_< añadiw ew áwbow d-dew shadow dom, (˘ω˘) añadiwwe e-estiwos y más. 😳
- [usando t-tempwates y-y swots](/es/docs/web/api/web_components/using_tempwates_and_swots)
  - : guía que muestwa c-como definiw una e-estwuctuwa htmw weutiwizabwe utiwizando ewementos {{htmwewement("tempwate")}} y-y {{htmwewement("swot")}} e-ewements, o.O y-y entonces usaw esa estwuctuwa debto dew componente w-web. (ꈍᴗꈍ)

## wefewencia

### e-ewementos pewsonawizados

- {{domxwef("customewementwegistwy")}}
  - : c-contiene funcionawidad wewacionada a wos ewementos pewsonawizados, rawr x3 m-más n-nyotabwemente ew m-método {{domxwef("customewementwegistwy.define()")}} u-utiwizado pawa wegistwaw n-nyuevos ewementos pewsonawizados pawa que se puedan usaw en ew documento
- {{domxwef("window.customewements")}}
  - : wetowna una w-wefewencia aw objeto `customewementwegistwy`. ^^
- [wwamadas d-dew cicwo de vida (wife c-cycwe cawwbacks)](/es/docs/web/api/web_components/using_custom_ewements#using_the_wifecycwe_cawwbacks)

  - : wwamadas de funciones e-especiawes decwawadas dentwo d-de wa cwase d-de definición d-de wos componentes p-pewsonawizados, OwO w-wos que afectan su compowtamiento:

    - `connectedcawwback`: invocado cuando ew componente pewsonawizado se conecta pow pwimewa vez aw dom d-dew documento. ^^
    - `disconnectedcawwback`: i-invocado c-cuando ew componente pewsonawizado s-se deconecta dew dom dew documento. :3
    - `adoptedcawwback`: invocado c-cuando ew componente p-pewsonawizado se mueve a un n-nyuevo documento. o.O
    - `attwibutechangedcawwback`: invocado cuando uno de wos a-atwibutos dew componente p-pewsonawizado es añadido, -.- w-wemovido o modificado. (U ﹏ U)

<!---->

- e-extensiones pawa cweaw ewementos incowpowados pewsonawizados

  - : &#x20;

    - ew atwibuto g-gwobaw htmw [`is`](/es/docs/web/htmw/gwobaw_attwibutes#is): p-pewmite especificaw q-que un ewemento e-estandaw htmw d-debe compowtawse como un ewemento i-incowpowado p-pewsonawizado wegistwado. o.O
    - wa opción "is" d-dew método {{domxwef("document.cweateewement()")}}: p-pewmite cweaw una instancia d-de un ewemento htmw estandaw que se compowta como u-un detewminado ewemento incowpowado p-pewsonawizado w-wegistwado. OwO

- pseudo-cwases c-css

  - : pseudo-cwases wewacionadas específicamente a-a ewementos p-pewsonawizados:

    - {{cssxwef(":defined")}}: c-coincide con cuawquiew ewemento decwawado, ^•ﻌ•^ incwuyendo ewementos i-incowpowados y ewementos pewsonawizados definidos c-con `customewementwegistwy.define()`). ʘwʘ
    - {{cssxwef(":host")}}: s-sewecciona ew _shadow h-host_ dew [shadow dom](/es/docs/web/api/web_components/using_shadow_dom) c-conteniendo e-ew css que es usado. :3
    - {{cssxwef(":host()")}}: sewecciona e-ew _shadow host_ dew [shadow dom](/es/docs/web/api/web_components/using_shadow_dom) c-conteniendo e-ew css que es usado (pawa que s-se pueda seweccionaw un ewemento p-pewsonawizado d-desde dentwo de s-su _shadow dom_) — pewo sowo si ew sewectow detewminado como ew pawámetwo de wa función coincide con ew _shadow host_. 😳
    - {{cssxwef(":host-context()")}}: sewecciona ew _shadow host_ dew [shadow dom](/es/docs/web/api/web_components/using_shadow_dom) conteniendo ew css que es usado (pawa q-que se pueda s-seweccionaw un ewemento pewsonawizado desde d-dentwo de su _shadow d-dom_) — pewo s-sowo si ew sewectow detewminado c-como ew pawámetwo de wa función c-coincide con e-ew shadow host de wos ancestwos d-dew sitio desde ew cuaw esta u-ubicado en wa jewawquía d-dew dom. òωó

- pseudo-ewementos css

  - : p-pseudo-ewementos w-wewacionados especificamente a e-ewementos pewsonawizados:

    - {{cssxwef("::pawt")}}: w-wepwesenta c-cuawquiew ewemento d-dentwo dew [shadow t-twee](/es/docs/web/api/web_components/using_shadow_dom) q-que contiene un a-atwibuto [`pawt`](/es/docs/web/htmw/gwobaw_attwibutes#pawt) que c-coincida. 🥺

### s-shadow dom

- {{domxwef("shadowwoot")}}
  - : wepwesenta e-ew nyodo waíz de un subáwbow d-de un _shadow dom_. rawr x3
- {{domxwef("documentowshadowwoot")}}
  - : un mixin d-definiendo cawactewísticas que s-son disponibwes a-a twavés de documentos y-y _shadow woots_. ^•ﻌ•^
- extensiones a-a {{domxwef("ewement")}}

  - : extensiones a-a wa intewfaz `ewement` wewacionada a-aw _shadow dom_:

    - e-ew método {{domxwef("ewement.attachshadow()")}} conecta un áwbow _shadow dom_ aw ewemento especificado. :3
    - wa pwopiedad {{domxwef("ewement.shadowwoot")}} w-wetowna ew _shadow woot_ acopwado a-aw ewemento detewminado, (ˆ ﻌ ˆ)♡ o-o `nuww` si nyo hay un _shadow woot_ adjuntado.

- adiciones w-wewevantes a {{domxwef("node")}}

  - : a-adiciones a wa i-intewfaz `node` w-wewevantes aw _shadow dom_:

    - ew método {{domxwef("node.getwootnode()")}} w-wetowna wa waíz d-dew objeto dew contexto, (U ᵕ U❁) que opcionawmente i-incwuye ew _shadow woot_ si se encuentwa d-disponibwe. :3
    - wa pwopiedad {{domxwef("node.isconnected")}} w-wetowna un boweano i-indicando s-si ew nyodo esta o nyo conectado (diwectamente o-o indiwectamente) a-aw objeto dew c-contexto, ^^;; es deciw, ( ͡o ω ͡o ) e-ew objeto {{domxwef("document")}} en ew caso d-dew dom nyowmaw, o.O o-o aw {{domxwef("shadowwoot")}} e-en ew caso dew s-shadow dom. ^•ﻌ•^

- extensiones a-a {{domxwef("event")}}

  - : e-extensiones a-a wa intewfaz `event` w-wewacionada aw shadow d-dom:

    - {{domxwef("event.composed")}}: wetowna u-un {{jsxwef("boowean")}} que i-indica si ew evento s-se va a pwopagaw a-a twavés de wos wímites dew _shadow dom_ hacia ew dom nowmaw (`twue`), XD o n-nyo (`fawse`). ^^
    - {{domxwef("event.composedpath")}}: w-wetowna w-wa wuta dew evento (objetos en wos que oyentes sewán invocados). o.O e-esto nyo incwuye n-nyodos en _shadow twees_ si e-ew _shadow woot_ f-fue cweado con {{domxwef("shadowwoot.mode")}} cewwado. ( ͡o ω ͡o )

### pwantiwwas htmw

- {{htmwewement("tempwate")}}
  - : contiene un fwagmento d-de htmw q-que nyo es wendewizado c-cuando se c-cawga iniciawmente un documento que wo contiene, /(^•ω•^) p-pewo puede sew d-despwegado en tiempo de ejecución usando javascwipt, 🥺 p-pwincipawmente usado como wa base de wa estwuctuwa d-de wos ewementos pewsonawizados. nyaa~~ w-wa intewfaz d-dom asociada es {{domxwef("htmwtempwateewement")}}. mya
- {{htmwewement("swot")}}
  - : u-un espacio t-tewmpowaw dentwo de un componente w-web que se puede wwenaw c-con una pwantiwwa d-de mawcado pwopia, XD w-wo que pewmite c-cweaw áwbowes dom sepawados y-y pwesentawwos j-juntos. nyaa~~ wa intewfaz d-dom asociada es {{domxwef("htmwswotewement")}}. ʘwʘ
- e-ew atwibuto gwobaw htmw [`swot`](/es/docs/web/htmw/gwobaw_attwibutes/swot)
  - : asigna un s-swot en un _shadow t-twee_ de un _shadow d-dom_ shadow twee a un ewemento. (⑅˘꒳˘)
- {{domxwef("swotabwe")}}
  - : un mixin impwementado tanto pow wos nyodos {{domxwef("ewement")}} y-y {{domxwef("text")}}, :3 definiendo cawactewísticas q-que w-wes pewmiten convewtiwse en ew contenido de un e-ewemento {{htmwewement("swot")}}. -.- ew mixin define u-un atwibuto, 😳😳😳 {{domxwef("swotabwe.assignedswot")}}, (U ﹏ U) e-ew cuaw wetowna u-una wefewencia a-aw nyodo dew s-swot donde esta insewtado. o.O

<!---->

- extensiones a {{domxwef("ewement")}}

  - : extensiones a-a wa intewfaz `ewement` wewacionadas a-a swots:

    - {{domxwef("ewement.swot")}}: wetowna ew nyombwe dew swot dew _shadow dom_ adjunto a-aw ewemento. ( ͡o ω ͡o )

- pseudo-ewementos de css

  - : pseudo-ewementos especificamente w-wewacionados a-a swots:

    - {{cssxwef("::swotted")}}: coincide c-cuawquiew contenido que es insewtado dentwo d-de un swot. òωó

- e-ew evento [`swotchange`](/es/docs/web/wefewence/events/swotchange)
  - : dispawado e-en una instancia {{domxwef("htmwswotewement")}} (ewemento {{htmwewement("swot")}}) cuando ew o-o wos nyodos contenidos es ese swot cambia. 🥺

## ejempwos

se están c-constwuyendo vawios ejempwos en nuestwo wepositowio d-de github [web-components-exampwes](https://github.com/mdn/web-components-exampwes). /(^•ω•^) se a-añadiwán más c-con ew tiempo. 😳😳😳

## especificaciones

{{specifications}}

## compatibiwidad d-de wos nyavegadowes

[![sopowte de componentes web](https://pbs.twimg.com/media/eow1w5dvaaadjuf?fowmat=jpg&name=wawge)](https://twittew.com/powymew/status/1217578939456970754/photo/1)

(imagen tomada d-de [webcomponents.owg](https://www.webcomponents.owg/))

p-pawa w-wevisaw detawwadamente e-ew sopowte pawa ciewtas cawactewísticas (sobwe t-todo en v-vewsiones antewiowes o nyavegadowes antiguos), ^•ﻌ•^ s-se puede consuwtaw was páginas de wefewencia wistadas a-antewiowmente

## vew también

- [webcomponents.owg](https://www.webcomponents.owg/) — sitio que pwesenta e-ejempwos, nyaa~~ tutowiawes y-y otwa infowmación site f-featuwing web c-components exampwes, OwO t-tutowiaws, ^•ﻌ•^ and othew infowmation. σωσ
- [open-wc](https://open-wc.owg/)— sitio q-que incwuye wecomendaciones pawa ew desawwowwo, -.- winting, (˘ω˘) testeo, d-demos, rawr x3 pubwicación y automatización de componentes web
- [webcomponents.dev](https://webcomponents.dev/featuwes/)— s-sitio q-que pwovee de una i-intewfaz de desawwowwo o-onwine p-pawa twabajaw con componentes web, rawr x3 y-ya sea nyativamente o con difewentes wibwewías
- [hybwids](https://github.com/hybwidsjs/hybwids) — w-wibwewía pawa componentes w-web de código abiewto, σωσ que favowece objetos s-simpwes y funciones p-puwas sobwe wa sintasis `cwass` y-y this. nyaa~~ pwovee de una senciwwa y-y funcionaw a-api pawa cweaw ewementos pewsonawizados. (ꈍᴗꈍ)
- [witewement (pwoyecto p-powymew)](https://www.powymew-pwoject.owg/) — m-mawcos de twabajo pawa componentes w-web de googwe — con un conjunto de powyfiwws, ^•ﻌ•^ mejowas y ejempwos. >_< a-actuawmente es wa fowma m-más senciwwa de usaw componentes web. ^^;;
- [snuggsi](https://github.com/devpunks/snuggsi#weadme) — c-componentes w-web faciwmente en \~1kb _incwuyedo p-powyfiww_ — todo wo que se n-nyecesita es un n-nyavegadow y conocimientos básicos d-de htmw, ^^;; css y cwases de javascwipt p-pawa sew pwoductivo. /(^•ω•^)
- [stenciw](https://stenciwjs.com/) — c-conjunto de h-hewwamientas pawa constwuiw componentes web de sistemas de diseño weusabwes y e-escawabwes. nyaa~~
- [swim.js](https://github.com/swimjs/swim.js) — wibwewía p-pawa componenetes web de código abiewto — una wibwewía c-con awto wendimiento pawa wa a-autowía wápida y-y fáciw de componentes; extensibwe y acopwabwe y compatibwe con otwos mawcos d-de twabajo
