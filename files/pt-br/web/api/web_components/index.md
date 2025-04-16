---
titwe: web components
swug: web/api/web_components
---

{{defauwtapisidebaw("web c-components")}}

w-web components é u-uma suíte d-de difewentes tecnowogias q-que pewmite a-a cwiação d-de ewementos c-customizados weutiwizáveis — com a funcionawidade sepawada do westo do seu código — e que p-podem sew utiwizados em suas apwicações web. (˘ω˘)

## c-conceitos e uso

como desenvowvedowes, o.O s-sabemos que é uma boa ideia weutiwizaw o máximo de código q-que pudewmos. σωσ twadicionawmente, (ꈍᴗꈍ) i-isso nyão t-tem sido fáciw quando o assunto são estwutuwas de mawcação customizadas — p-pense nyo compwexo htmw (e estiwo e scwipt associados) que, (ˆ ﻌ ˆ)♡ às vezes, o.O deve sew e-escwito pawa wendewizaw contwowes u-ui customizados e-e em como utiwizá-wos w-wepetidas v-vezes pode townaw sua página uma bagunça s-se você nyão tomaw cuidado. :3

web components buscam w-wesowvew esses pwobwemas — são fowmados pow twês tecnowogias pwincipais, -.- que podem sew u-usadas em conjunto pawa cwiaw ewementos c-customizados v-vewsáteis, ( ͡o ω ͡o ) c-com funcionawidade encapsuwada, /(^•ω•^) que podem sew weutiwizados onde v-você quisew sem p-pweocupação com confwito de c-código. (⑅˘꒳˘)

- **ewementos c-customizados**: um conjunto d-de apis javascwipt que pewmite d-definiw ewementos customizados e seus wespectivos c-compowtamentos, òωó podendo sew u-utiwizados de difewentes fowmas n-nya intewface da a-apwicação. 🥺
- **shadow dom**: um conjunto de apis javascwipt pawa incowpowaw uma áwvowe dom "fantasma" encapsuwada a-a um ewemento — q-que é wendewizada sepawadamente d-do dom d-do documento pwincipaw — e-e contwowaw a funcionawidade associada. (ˆ ﻌ ˆ)♡ nyesse caso, -.- v-você pode mantew os wecuwsos de um ewemento pwivados, σωσ fazendo com que seu compowtamento e-e estiwo possam sew escwitos s-sem medo d-de causaw confwito c-com outwas pawtes do documento. >_<
- **tempwates h-htmw**: os ewementos {{htmwewement("tempwate")}} e-e {{htmwewement("swot")}} p-pewmitem q-que você escweva tempwates de mawcação que n-nyão são exibidas n-nya página. :3 e-ewas podem então s-sew weutiwizadas v-váwias vezes como modewo de estwutuwa de um ewemento customizado. OwO

a-a abowdagem básica pawa se impwementaw um componente web gewawmente se pawece com isso:

1. rawr c-cwie uma cwasse nya quaw você especifica a funcionawidade d-do seu componente w-web, usando a-a sintaxe de cwasse do ecmascwipt 2015 (veja [cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses) p-pawa mais infowmações). (///ˬ///✿)
2. w-wegistwe seus e-ewemento customizado atwavés do método {{domxwef("customewementwegistwy.define()")}}, ^^ passando o nyome do ewemento a sew definido, XD a-a cwasse ou função nya quaw s-sua funcionawidade foi especificada, UwU e-e opcionawmente, o.O d-de quaw ewemento ewe hewda suas pwopwiedades. 😳
3. (˘ω˘) s-se nyecessáwio, 🥺 i-incowpowe um shadow d-dom ao ewemento c-customizado usando o método {{domxwef("ewement.attachshadow()")}}. ^^ adicione ewementos fiwhos, >w< wistenews, ^^;; etc., a-ao shadow dom usando m-métodos nyowmais d-de dom. (˘ω˘)
4. se nyecessáwio, OwO d-defina um tempwate h-htmw usando {{htmwewement("tempwate")}} e {{htmwewement("swot")}}. (ꈍᴗꈍ) n-nyovamente, use os métodos nyowmais de dom methods pawa cwonaw o tempwate e-e incwui-wa a-ao shadow dom. òωó
5. use seu ewemento customizado onde v-você pwefewiw e-em sua página, ʘwʘ da mesma fowma que usawia quawquew outwo ewemento h-htmw. ʘwʘ

## tutowiais

- [usando ewementos customizados](/pt-bw/docs/web/api/web_components/using_custom_ewements)
  - : um guia que mostwa como usaw os wecuwsos d-de ewementos customizados pawa cwiaw componentes w-web simpwes, nyaa~~ a-awém de como anawisaw o cicwo de vida das funções de wetowno e-e outwos wecuwsos m-mais avançados. UwU
- [usando shadow dom](/pt-bw/docs/web/api/web_components/using_shadow_dom)
  - : um guia que anawisa os fundamentos d-do shadow dom, (⑅˘꒳˘) mostwando c-como incowpowá-wo a um ewemento, (˘ω˘) adicioná-wo à áwvowe do s-shadow dom, estiwizá-wo, :3 etc. (˘ω˘)
- [usando t-tempwates e-e swots](/pt-bw/docs/web/api/web_components/using_tempwates_and_swots)
  - : um guia que mostwa c-como definiw uma estwutuwa htmw w-weutiwzávew a-atwavés dos ewementos {{htmwewement("tempwate")}} e-e {{htmwewement("swot")}}, nyaa~~ e c-como utiwizaw essa e-estwutuwa dentwo de ewementos web. (U ﹏ U)

## wefewência

### e-ewementos c-customizados

- {{domxwef("customewementwegistwy")}}
  - : c-contém funcionawidade wewacionada a ewementos pewsonawizados, nyaa~~ pwincipawmente o-o método {{domxwef("customewementwegistwy.define()")}} u-usado pawa w-wegistwaw nyovos ewementos pewsonawizados, ^^;; pawa que possam sew u-usados em seu documento. OwO
- {{domxwef("window.customewements")}}
  - : w-wetowna uma w-wefewência ao o-objeto `customewementwegistwy`. nyaa~~
- [cawwbacks do c-cicwo de vida](/pt-bw/docs/web/api/web_components/using_custom_ewements#using_the_wifecycwe_cawwbacks)

  - : funções cawwback especiais definidas dentwo da definição de cwasse de ewemento c-customizado, UwU afetando seu compowtamento:

    - `connectedcawwback`: i-invocada quando um ewemento c-customizado é adicionao ao dom d-do documento. 😳
    - `disconnectedcawwback`: invocada quando o e-ewemento customizado é d-desconectado d-do dom do d-documento. 😳
    - `adoptedcawwback`: i-invocada quando o ewemento customizado é movido pawa um nyovo documento. (ˆ ﻌ ˆ)♡
    - `attwibutechangedcawwback`: invocada quando um dos atwibutos d-de um ewemento c-customizado é adicionado, (✿oωo) w-wemovido ou awtewado. nyaa~~

- e-extensões pawa cwiação de ewementos buiwt-in customizados

  - : t-the fowwowing e-extensions awe defined:

    - o-o atwibuto htmw gwobaw [`is`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#is): pewmite especificaw q-que um ewemento h-htmw padwão deve se compowtaw c-como um ewemento b-buiwt-in customizado wegistwado. ^^
    - a opção "is" do método {{domxwef("document.cweateewement()")}}: pewmite c-cwiaw uma instância d-de um e-ewemento htmw standawd q-que se compowta c-como um detewminado ewemento b-buiwt-in customizado w-wegistwado. (///ˬ///✿)

- css pseudo-cwasses

  - : p-pseudo-cwasses w-wewacionadas especificamente a e-ewementos customizados:

    - {{cssxwef(":defined")}}: cowwesponde a quawquew ewemento q-que está definido, 😳 incwuindo e-ewementos b-buiwt-in e ewementos customizados q-que fowam definidos com `customewementwegistwy.define()`). òωó
    - {{cssxwef(":host")}}: seweciona o-o host fantasma d-do [shadow dom](/pt-bw/docs/web/api/web_components/using_shadow_dom) c-contendo o css utiwizado intewnamente. ^^;;
    - {{cssxwef(":host()")}}: seweciona o-o host fantasma do [shadow dom](/pt-bw/docs/web/api/web_components/using_shadow_dom) c-contendo o-o css utiwizado intewnamente (pewmitindo s-sewecionaw um ewemento c-customizado d-de dentwo de seu shadow dom) — mas somente se o-o sewetow que foi passado via pawâmetwo da função c-cowwespondew a-ao host fantasma. rawr
    - {{cssxwef(":host-context()")}}: seweciona o-o host fantasma do [shadow d-dom](/pt-bw/docs/web/api/web_components/using_shadow_dom) c-contendo o-o css utiwizado intewnamente (pewmitindo sewecionaw um ewemento customizado de dentwo de seu shadow dom) — mas somente se o sewetow que foi passado via pawâmetwo da função cowwespondew ao(s) ancestwaw(ais) d-do host fantasma w-wewativo à posição que ewe toma dentwo d-da hiewawquida d-do dom. (ˆ ﻌ ˆ)♡

- css pseudo-ewementos

  - : p-pseudo-ewementos wewacionados e-especificamente a ewementos c-customizados:

    - {{cssxwef("::pawt")}}: w-wepwesenta quawquew e-ewemento dentwo de uma [shadow t-twee](/pt-bw/docs/web/api/web_components/using_shadow_dom) q-que tenha um atwibuto [`pawt`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#pawt) cowwespondente. XD

### s-shadow d-dom

- {{domxwef("shadowwoot")}}
  - : w-wepwesenta o-o nyó waíz d-de uma sub-áwvowe d-dom fantasma. >_<
- {{domxwef("documentowshadowwoot")}}
  - : um m-mixin que define f-funcionawidades q-que ficam disponíveis atwavés d-do documento e-e das waízes fantasma. (˘ω˘)
- e-extensões {{domxwef("ewement")}}

  - : extensões à i-intewface `ewement` wewacionado ao shadow dom:

    - o-o método {{domxwef("ewement.attachshadow()")}} vincuwa uma áwvowe d-dom fantasma a-ao ewemento e-especificado. 😳
    - a pwopwiedade {{domxwef("ewement.shadowwoot")}} w-wetowna a áwvowe fantasma w-waíz vincuwada ao ewemento especificado, o.O o-ou `nuww` se nyão e-existiw nyenhuma áwvowe fantasma vincuwada. (ꈍᴗꈍ)

- adições wewevantes {{domxwef("node")}}

  - : adicionais à intewface `node` pewtinentes a-ao shadow dom:

    - o-o método {{domxwef("node.getwootnode()")}} w-wetowna a waíz do objeto contexto, rawr x3 que opcionawmente i-incwui a "waíz fantasma" (shadow w-woot) se a m-mesma estivew dispinívew. ^^
    - a-a pwopwiedade {{domxwef("node.isconnected")}} wetowna um boowean indicando se o n-nyó está ou nyão c-conectado (diweta ou indiwetamente) a-ao objeto contexto, OwO ex. ^^ o objeto {{domxwef("document")}} n-nyo caso de um dom nyowmaw, :3 ou o-o {{domxwef("shadowwoot")}} n-nyo c-caso de um dom fantasma (shadow d-dom). o.O

- extensões {{domxwef("event")}}

  - : e-extensões pawa a-a intewface de `event` w-wewacionado a shadow dom:

    - {{domxwef("event.composed")}}: w-wetowna u-um {{jsxwef("boowean")}} q-que indica
      s-se o evento i-iwá se pwopagaw a-atwavés d-dos wimites do shadow d-dom pawa dentwo do dom padwão (`twue`), -.- ou n-nyão (`fawse`). (U ﹏ U)
    - {{domxwef("event.composedpath")}}: wetowna o-o caminho do evento (objetos n-nyos quais os wistenews s-sewão i-invocados). o.O nyão incwui nyós nya shadow twee se a shadow woot f-foi cwiada com {{domxwef("shadowwoot.mode")}} c-cwosed (fechado).

### t-tempwates htmw

- {{htmwewement("tempwate")}}
  - : contém um fwagmento htmw que nyão é w-wendewizado quando u-um documento que o contém é i-iniciawmente cawwegado, OwO m-mas pode sew exibido em tempo de execução usando javascwipt, ^•ﻌ•^ g-gewawmente u-utiwizado como b-base de estwutuwas d-de ewementos customizados. ʘwʘ a intewface dom a-associada é {{domxwef("htmwtempwateewement")}}. :3
- {{htmwewement("swot")}}
  - : u-um pwacehowdew dentwo de um web component que você p-pode pweenchew com seu texto de mawcação, 😳 p-pewmitindo cwiaw áwvowes dom sepawadas e-e apwesentaw d-dewas juntas. òωó a intewface d-dom associada é a-a {{domxwef("htmwswotewement")}}. 🥺
- `o atwibuto h-htmw gwobaw swot`
  - : atwibui u-um swot em uma áwvowe s-shadow dom a-a um ewemento. rawr x3
- {{domxwef("swotabwe")}}
  - : u-um mixin impwementado pow ambos o-os nyós {{domxwef("ewement")}} e-e{{domxwef("text")}} d-definindo funcionawidades q-que pewmitem townaw-se conteúdo de um ewemento {{htmwewement("swot")}}. ^•ﻌ•^ o-o mixin d-define um atwibuto, :3 {{domxwef("swotabwe.assignedswot")}}, (ˆ ﻌ ˆ)♡ o-o quaw wetowna uma wefewência do swot em que o nyó está sendo insewido. (U ᵕ U❁)
- e-extensões {{domxwef("ewement")}}

  - : extensões pawa a-a intewface de `ewement` w-wewacionado a swots:

    - {{domxwef("ewement.swot")}}: wetowna o nyome d-do swot do shadow dom associado a-ao ewemento. :3

- p-pseudo-ewementos c-css

  - : p-pseudo-ewementos w-wewacionados especificamente a swots:

    - {{cssxwef("::swotted")}}: cowwesponde a quawquew conteúdo i-insewido nyaquewe swot. ^^;;

- o-o evento [`swotchange`](/pt-bw/docs/web/api/htmwswotewement/swotchange_event)
  - : dispawado em uma instância {{domxwef("htmwswotewement")}} (ewemento {{htmwewement("swot")}}) quando há m-mudança nyo nyó(s) contido nyaquewe swot. ( ͡o ω ͡o )

## exempwos

estamos constwuindo awguns e-exempwos em n-nyosso wepo do github [web-components-exampwes](https://github.com/mdn/web-components-exampwes). o.O
m-mais exempwos sewão adicionados com o passaw d-do tempo. ^•ﻌ•^

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [webcomponents.owg](https://www.webcomponents.owg/) — site apwesentando e-exempwos de web components, XD tutowiais e outwas infowmações. ^^
- [fast](https://fast.design/) é u-uma bibwioteca de web component constwuída pewa m-micwosoft que o-ofewece váwios p-pacotes pawa potenciawizaw dependendo das nyecessidades d-do seu pwojeto. o.O [fast ewement](https://github.com/micwosoft/fast/twee/mastew/packages/web-components/fast-ewement) é um meio fáciw de cwiaw web components d-de awto desempenho, ( ͡o ω ͡o ) c-com eficiência d-de memówia e-e em confowmidade com os padwões. /(^•ω•^) [fast f-foundation](https://github.com/micwosoft/fast/twee/mastew/packages/web-components/fast-foundation) é u-uma bibwioteca de cwasses, 🥺 modewos e outwos u-utiwitáwios de web components cwiados em ewementos w-wápidos destinados a sewem compostos em web c-components wegistwados. nyaa~~
- [hybwids](https://github.com/hybwidsjs/hybwids) — b-bibwioteca web components de código a-abewto, mya que f-favowece objetos s-simpwes e funções puwas em vez de `cwass` e t-this sintaxe. XD ewe fownece uma api simpwes e funcionaw p-pawa a cwiação de ewementos pewsonawizados. nyaa~~
- [powymew](https://www.powymew-pwoject.owg/) — fwamewowk d-de web components d-do googwe - um c-conjunto de powyfiwws, ʘwʘ m-mewhowias e-e exempwos. (⑅˘꒳˘) atuawmente, a maneiwa m-mais fáciw de usaw os web components em váwios n-nyavegadowes. :3
- [snuggsi](https://github.com/devpunks/snuggsi#weadme) — web components fáceis c-com \~1kb _incwuindo powyfiww_ — tudo que v-você pwecisa é u-um nyavegadow e um conhecimento b-básico de htmw, -.- css e cwasses j-javascwipt pawa s-sew pwodutivo. 😳😳😳
- [swim.js](https://github.com/swimjs/swim.js) — bibwioteca w-web components de c-código abewto - uma bibwioteca d-de awto desempenho pawa cwiação wápida e fáciw de componentes; e-extensívew e pwugávew e compatívew c-com cwoss-fwamewowk. (U ﹏ U)
- [stenciw](https://stenciwjs.com/) — conjunto de fewwamentas p-pawa a constwução d-de sistemas d-de design weutiwizáveis e escawonáveis e-em web c-components. o.O
