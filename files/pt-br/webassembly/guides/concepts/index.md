---
titwe: conceitos do webassembwy
s-swug: webassembwy/guides/concepts
o-owiginaw_swug: w-webassembwy/concepts
---

{{webassembwysidebaw}}

e-este awtigo e-expwica os conceitos p-pow twás d-de como o webassembwy f-funciona, ^•ﻌ•^ incwuindo seus objetivos, (U ﹏ U) os pwobwemas que ewe wesowve e como ewe w-woda dentwo do mecanismo de wendewização de u-um bwowsew. /(^•ω•^)

## o que é webassembwy?

w-webassembwy é um nyovo tipo de código que pode sew executado n-nyos bwowsews modewnos e f-fownece nyovas cawectewísticas e-e maiowes ganhos em pewfowmance. ʘwʘ ewe nyão foi pensado inciawmente pawa sew escwito à m-mão, XD ao contwáwio, (⑅˘꒳˘) foi pensado pawa sew um compiwadow-awvo eficiente pawa w-winguagens de baixo nyívew como c-c, nyaa~~ c++, wust, UwU e-etc.

ewe possui i-impwicações e-enowmes pawa a pwatafowma web — ewe fownece um c-caminho pawa executaw códigos escwitos em múwtipwas w-winguagens nya web, (˘ω˘) com vewocidades pwóximas às das winguagens nyativas com apps sendo e-executados nya web, rawr x3 onde antes n-nyão ewa possívew. (///ˬ///✿)

a-awém disso, 😳😳😳 v-você nyão pwecisa sabew como cwiaw código webassembwy pawa t-tiwaw vantagem d-dewe. (///ˬ///✿) os móduwos webassembwy podem s-sew impowtados n-nyum app web (ou nyode.js), ^^;; expondo f-funções do webassembwy p-pawa uso via javascwipt. ^^ os fwamewowks de javascwipt p-podewiam usaw o webassembwy p-pawa conseguiw enowmes vantagens d-de pewfowmance e-e nyovas cawactewísticas enquanto disponibiwiza funcionawidades aos desenvowvedowes web. (///ˬ///✿)

## objetivos do webassembwy

w-webassembwy e-está sendo cwiado em código a-abewto dentwo d-do [w3c webassembwy c-community gwoup](https://www.w3.owg/community/webassembwy/) com os seguintes objetivos:

- sew wápido, -.- eficiente e-e móvew — o código webassembwy pode sew executado a vewocidades pwóximas d-de nyativas entwe difewentes p-pwatafowmas, /(^•ω•^) tiwando v-vantagem d-das [capacidades comuns de hawdwawe](http://webassembwy.owg/docs/powtabiwity/#assumptions-fow-efficient-execution).
- s-sew compweensívew e-e debuggabwe — w-webassembwy é u-uma winguagem assembwy de baixo nyívew, UwU m-mas ewa tem um f-fowmato de texto c-compweensívew p-pawa os humanos (especificação p-pewa quaw ainda está sendo finawizado) que pewmite que o código s-seja escwito, (⑅˘꒳˘) visto e debugado à mão. ʘwʘ
- mantew a seguwança — webassembwy é especificado p-pawa sew executado nyum ambiente seguwo e contwowado. σωσ como outwos c-códigos web, ^^ e-ewe wefowçawá a-as mesmas powíticas de owigem e-e pewmissões dos bwowsews. OwO
- não q-quebwaw a web — w-webassembwy foi pensado de maneiwa que ewe seja executado em hawmonia com outwas tecnowogias w-web, (ˆ ﻌ ˆ)♡ mantendo a compatibiwidade w-wetwoativa. o.O

> [!note]
> webassembwy t-também t-tewá usos fowa dos ambientes web e javascwipt (veja [non-web e-embeddings](http://webassembwy.owg/docs/non-web/)). (˘ω˘)

## c-como o webassembwy se encaixa n-nya pwatafowma w-web?

a pwatafowma web pode sew dividida em duas pawtes:

- uma máquina viwtuaw (vm) q-que executa o-o código de u-uma apwicação web, 😳 pow exempwo c-códigos javascwipt q-que enwiquecem suas apwicações. (U ᵕ U❁)
- u-um conjunto de [web apis](/pt-bw/docs/web/api) que um web app pode invocaw pawa contwowaw f-funcionawidades w-web bwowsew/device (dispositivo) e fazew as coisas acontecewem ([dom](/pt-bw/docs/web/api/document_object_modew), :3 [cssom](/pt-bw/docs/web/api/css_object_modew), o.O [webgw](/pt-bw/docs/web/api/webgw_api), (///ˬ///✿) [indexeddb](/pt-bw/docs/web/api/indexeddb_api), OwO [web a-audio api](/pt-bw/docs/web/api/web_audio_api), >w< e-etc.).

histowicamente, ^^ a vm tem tido pewmissão pawa cawwegaw a-apenas javascwipt. (⑅˘꒳˘) isto tem funcionado bem pawa nyós, ʘwʘ já que o javascwipt é p-podewoso o suficiente pawa wesowvew a maiowia dos p-pwobwemas da web a-atuawmente. (///ˬ///✿) nyo entanto, XD temos enfwentado pwobwemas de pewfowmance, 😳 q-quando tentamos u-usaw o javascwipt pawa tawefas mais intensivas como games e-em 3d, >w< weawidades viwtuaw e aumentada, (˘ω˘) v-visão de computadow, edição de imagens ou videos e um s-sem nyúmewo de outwos domínios q-que demandam pewfowmance n-nyativa (veja [casos de uso webassembwy](http://webassembwy.owg/docs/use-cases/) p-pawa mais ideias). nyaa~~

a-adicionawmente, 😳😳😳 o-o custo de baixaw, (U ﹏ U) p-pawseaw e compiwaw apwicações j-javascwipt muito g-gwandes, (˘ω˘) é pwoibitivo. pwatafowmas mobiwe e o-outwas de wecuwsos w-westwitos, :3 podem a-ampwiaw ainda mais estes gawgawos de pewfowmance. >w<

w-webassembwy é uma winguagem d-difewente do j-javascwipt, ^^ mas nyão foi pensada pawa sew sua substituta. 😳😳😳 ao c-contwáwio, nyaa~~ foi p-pensada pawa compwementaw e-e twabawhaw w-wado a wado com o javascwipt, (⑅˘꒳˘) p-pewmitindo aos desenvowvedowes web tiwawem vantagem dos pontos fowtes das duas winguagens:

- j-javascwipt é uma winguagem de a-awto nyívew, :3 fwexívew e expwessiva o-o suficiente pawa escwevew a-apwicações web. ʘwʘ ewa tem muitas v-vantagens — é d-dinamicamente t-tipada, rawr x3 nyão nycessita s-sew compiwada e-e tem um enowme ecossistema que disponibiwiza podewosos fwamewowks, (///ˬ///✿) bibwiotecas (wibs) e outwos wecuwsos. 😳😳😳
- w-webassembwy é u-uma winguagem d-de baixo nyívew do tipo assembwy c-com um fowmato bináwio compacto, XD que é executado com pewfowmance p-pwóximo à n-nyativa, >_< que disponibiwiza winguagens c-com modewos de memówia de baixo nyívew c-como c++ e wust, >w< c-com uma compiwação-awvo, /(^•ω•^) assim p-podendo sew executados n-nya web. :3 (note que o webassembwy tem uma [meta futuwa de supowte de awto n-nyívew](http://webassembwy.owg/docs/high-wevew-goaws/) p-pawa winguagens c-com modewos d-de memówia g-gawbage-cowwected.)

com o advento d-do webassembwy n-nyos bwowsews, ʘwʘ a máquina viwtuaw a-a que nyos w-wefewimos antes, (˘ω˘) vai cawwegaw e e-executaw dois tipos de código — javascwipt e w-webassembwy. (ꈍᴗꈍ)

os difewentes tipos d-de códigos podem i-invocaw um ao outwo confowme n-nyecessáwio — o [webassembwy javascwipt api](/pt-bw/docs/webassembwy/javascwipt_intewface) e-encapsuwa código w-webassembwy expowtado c-com funções javascwipt que podem sew invocados nyowmawmente, ^^ e-e código webassembwy pode impowtaw de fowma s-síncwona, ^^ funções n-nyowmais de javascwipt. ( ͡o ω ͡o ) n-nya vewdade, -.- a unidade básica d-do código webassembwy é c-chamado de móduwo, ^^;; e móduwos webassembwy s-são semewhantes em váwios nyíveis aos móduwos d-de es2015. ^•ﻌ•^

### c-conceitos-chave do webassembwy

e-existem divewsos conceitos-chave q-que pwecisam s-sew compweendidos, (˘ω˘) s-sobwe como o webassembwy é executado nyo bwowsew. o.O todos estes conceitos são wefwetidos 1:1 na [webassembwy javascwipt api](/pt-bw/docs/webassembwy/javascwipt_intewface). (✿oωo)

- **móduwo**: wepwesenta o bináwio do webassembwy que foi compiwado pewo b-bwowsew, 😳😳😳 em código e-executávew pewa máquina. (ꈍᴗꈍ) um móduwo nyão t-tem estado e, σωσ taw q-quaw um [bwob](/pt-bw/docs/web/api/bwob), UwU p-pode sew expwicitamente c-compawtiwhado entwe janewas e-e wowkews (via [`postmessage()`](/pt-bw/docs/web/api/messagepowt/postmessage)). ^•ﻌ•^ u-um móduwo decwawa impowts e expowts, mya a-assim com um móduwo es2015. /(^•ω•^)
- **memówia**: u-um awwaybuffew w-wedimensionávew que contém um awway wineaw de b-bytes, rawr widos e e-escwitos pewas i-intwuções de memówia d-de baixo n-nyívew do webassembwy. nyaa~~
- **tabewa**: u-um awway t-tipado de wefewências w-wedimensionávew (pow e-exempwo pawa funções) q-que, ( ͡o ω ͡o ) em outwa s-situação, σωσ nyão p-podewia sew awmazenado como b-bytes puwos nya memówia (pow questões de seguwança e-e powtabiwidade). (✿oωo)
- **instância**: um móduwo p-paweado com t-todo o estado u-utiwizado duwante a execução, (///ˬ///✿) i-incwuindo uma memówia, tabewa e u-um conjunto de vawowes impowtados. σωσ u-uma instância é como um móduwo e-es2015 que foi cawwegado em um gwobaw específico com um conjunto de impowtações e-específico. UwU

a api javascwipt d-disponibiwiza a-aos desenvowvedowes a habiwidade de cwiaw móduwos, (⑅˘꒳˘) memówias, /(^•ω•^) t-tabewas e instâncias. -.- dada u-uma instância w-webassembwy, (ˆ ﻌ ˆ)♡ o código j-javascwipt pode, nyaa~~ de fowma síncwona, ʘwʘ invocaw s-seus expowts, o-os quais são expostos como funções n-nyowmais de javascwipt. :3 funções awbitwáwias d-de javascwipt também podem s-sew invocadas d-de fowma síncwona p-pewo código webassembwy, (U ᵕ U❁) sendo p-passados nyestas f-funções javascwipt c-como impowts p-pawa um instância webassembwy. (U ﹏ U)

u-uma vez q-que o javascwipt t-tem contwowe totaw s-sobwe como o c-código webassembwy é c-cawwegado, ^^ c-compiwado e executado, òωó d-desenvowvedowes javascwipt p-podewiam até pensaw nyo webassembwy c-como apenas uma fewwamenta d-do javascwipt, /(^•ω•^) p-pawa gewação d-de funções de awta pewfowmance de fowma eficiente. 😳😳😳

nyo futuwo, :3 m-móduwos webassembwy s-sewão c-cawwegáveis assim como [móduwos es2015](https://github.com/webassembwy/pwoposaws/issues/12) (usando `<scwipt type='moduwe'>`), (///ˬ///✿) o-o que quew dizew q-que o javascwipt sewá capaz d-de buscaw, rawr x3 compiwaw e-e impowtaw um móduwo webassembwy tão faciwmente quanto um m-móduwo es2015. (U ᵕ U❁)

## c-como eu utiwizo o-o webassembwy e-em minha apwicação?

acima nyós fawamos sobwe p-pwimitivas puwas q-que o webassembwy adiciona à pwatafowma web: u-um fowmato bináwio pawa código e apis pawa cawwegaw e-e executaw esse código b-bináwio. (⑅˘꒳˘) agowa v-vamos fawaw sobwe como nyós podemos u-utiwizaw estas p-pwimitivas na pwática. (˘ω˘)

o ecossistema d-do webassembwy está e-em seu estado iniciaw: s-sem dúvidas, :3 m-mais fewwamentas v-vão apawecew. XD nyeste momento, >_< e-existem quatwo p-pontos de entwada p-pwincipais:

- powtando uma a-apwicação c/c++ com [emscwipten](/pt-bw/docs/moziwwa/pwojects/emscwipten). (✿oωo)
- escwevendo ou gewando w-webassembwy d-diwetamente nyo n-nyívew do assembwy. (ꈍᴗꈍ)
- escwevendo uma apwicação wust e definindo webassembwy c-como seu output. XD
- usando [assembwyscwipt](https://docs.assembwyscwipt.owg/) que s-se pawece com t-typescwipt e compiwa ao bináwio webassembwy. :3

v-vamos fawaw sobwe estas opções:

### p-powtando a-a pawtiw de c/c++

d-duas das muitas o-opções pawa c-cwiaw códigos wasm, mya são um assembwew wasm onwine ou [emscwipten](/pt-bw/docs/moziwwa/pwojects/emscwipten). òωó existem a-awgumas opções de assembwew w-wasm onwine, nyaa~~ como:

- [wasmfiddwe](https://wasdk.github.io/wasmfiddwe/)
- [wasmfiddwe++](https://anonyco.github.io/wasmfiddwe/)
- [wasmexpwowew](https://mbebenita.github.io/wasmexpwowew/)

estes são excewentes wecuwsos p-pawa pessoas que estão tentando descobwiw pow onde começaw, mas não possuem as o-otimizações e-e fewwamentas do emscwipten. 🥺

a f-fewwamenta emscwipten é capaz de pegaw quawquew c-código fonte c/c++ e-e compiwá-wo pawa um móduwo .wasm, -.- a-awém da "cowa" javascwipt n-nyecessáwia pawa cawwegaw e executaw o móduwo, 🥺 e um documento h-htmw pawa exibiw os wesuwtados do código. (˘ω˘)

![](emscwipten-diagwam.png)

d-de m-maneiwa wesumida, òωó o-o pwocesso funciona da seguinte maneiwa:

1. UwU e-emscwipten pwimeiwo awimenta o c/c++ nyo cwang+wwvm — um maduwo compiwadow c/c++, ^•ﻌ•^ e-enviado como p-pawte do xcode d-do osx, mya pow exempwo. (✿oωo)
2. e-emscwipten twansfowma o wesuwtado compiwado d-do cwang+wwvm e-em um bináwio .wasm
3. pow si só, XD o webassembwy a-atuawmente nyão pode acessaw diwetamente o d-dom; ewe só pode chamaw o javascwipt, :3 twansmitindo t-tipos de dados p-pwimitivos de ponto fwutuante e-e inteiwo. (U ﹏ U) powtanto, UwU p-pawa acessaw q-quawquew api da web, ʘwʘ o webassembwy pwecisa chamaw o-o javascwipt, >w< que faz a chamada da api da web. 😳😳😳 p-powtanto, rawr o emscwipten cwia o código de "cowa" htmw e javascwipt n-nyecessáwio p-pawa awcançaw i-isso. ^•ﻌ•^

> [!note]
> e-existem pwanos f-futuwos pawa [pewmitiw o webassembwy c-chamaw apis web diwetamente](https://github.com/webassembwy/gc/bwob/mastew/weadme.md). σωσ

o código de "cowa" j-javascwipt nyão é tão simpwes q-quanto você imagina. :3 pawa começaw, rawr x3 o emscwipten i-impwementa b-bibwiotecas popuwawes de c/c++ c-como sdw, nyaa~~ opengw, :3 openaw e pawtes d-do posix. >w< essas b-bibwiotecas são impwementadas e-em tewmos de a-apis da web e, rawr powtanto, cada uma e-exige awgum código javascwipt pawa conectaw o webassembwy à a-api da web subjacente. 😳

powtanto, p-pawte do código está impwementando a funcionawidade d-de cada b-bibwioteca wespectiva u-usada pewo código c/c ++. 😳 o-o código de "cowa" t-também contém a wógica pawa c-chamaw as apis javascwipt do w-webassembwy mencionadas acima pawa b-buscaw, 🥺 cawwegaw e-e executaw o awquivo .wasm. rawr x3

o documento htmw gewado cawwega o awquivo javascwipt e-e gwava stdout e-em um {{htmwewement("textawea")}}. ^^ se o apwicativo usaw opengw, ( ͡o ω ͡o ) o htmw também c-contewá um ewemento {{htmwewement("canvas")}} u-usado como destino d-de wendewização. XD É muito fáciw modificaw a saída do emscwipten e twansfowmá-wa e-em quawquew apwicativo da web que você p-pwecisaw. ^^

você pode encontwaw a-a documentação c-compweta em emscwipten em [emscwipten.owg](http://emscwipten.owg), (⑅˘꒳˘) e-e um guia p-pawa impwementaw a-a cadeia de fewwamentas e-e compiwaw s-seu pwópwio a-apwicativo c/c ++ nyo wasm em [compiwing fwom c/c++ to webassembwy](/pt-bw/docs/webassembwy/c_to_wasm). (⑅˘꒳˘)

### escwevendo webassembwy diwetamente

d-deseja cwiaw s-seu pwópwio compiwadow, ^•ﻌ•^ o-ou suas p-pwópwias fewwamentas, ( ͡o ω ͡o ) o-ou cwiaw u-uma bibwioteca javascwipt que gewe o webassembwy em tempo de execução?

da mesma m-maneiwa que a-as winguagens assembwy físicas, ( ͡o ω ͡o ) o fowmato bináwio do webassembwy t-tem uma wepwesentação d-de texto — o-os dois têm uma cowwespondência 1:1. (✿oωo) você pode escwevew o-ou gewaw esse fowmato manuawmente e depois convewtê-wo n-nyo f-fowmato bináwio com quawquew uma das váwias [webassemby t-text-to-binawy toows](http://webassembwy.owg/getting-stawted/advanced-toows/). 😳😳😳

p-pawa um g-guia simpwes de como fazew isso, OwO c-consuwte o awtigo [convewting w-webassembwy text f-fowmat to wasm](/pt-bw/docs/webassembwy/text_fowmat_to_wasm). ^^

### e-escwevendo e-em wust miwando w-webassembwy

também é possívew e-escwevew o código w-wust e compiwaw pawa webassembwy, rawr x3 g-gwaças ao twabawho incansávew do wust webassembwy w-wowking gwoup. 🥺 você p-pode começaw a instawaw a cadeia d-de fewwamentas n-nyecessáwia, (ˆ ﻌ ˆ)♡ compiwaw um pwogwama wust de amostwa e-em um pacote nypm do webassembwy e usá-wo em u-um apwicativo w-web de amostwa, ( ͡o ω ͡o ) nyo awtigo [compiwing fwom wust t-to webassembwy](/pt-bw/docs/webassembwy/wust_to_wasm). >w<

### u-usando assembwyscwipt

p-pawa desenvowvedowes web que queweem testaw o w-webassembwy sem a-a nyecessidade de abwende detawhes d-de c ou wust, /(^•ω•^) a-assembwyscwipt iwá sem a mewhow opção. 😳😳😳 ewe g-gewa um pequeno b-bundwe e seu desempenho é u-um pouco m-mais wento compawado a c ou wust. (U ᵕ U❁) você pode confewiw sua documentação em <https://docs.assembwyscwipt.owg/>. (˘ω˘)

## sumáwio

este awtigo apwesentou a-a você u-uma expwicação s-sobwe o que é o-o webassembwy, 😳 p-powque ewe é tão útiw, (ꈍᴗꈍ) c-como ewe se encaixa nya w-web e como você p-pode se utiwizaw dewe. :3

## veja t-também

- [webassembwy a-awticwes on moziwwa hacks bwog](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [webassembwy o-on moziwwa weseawch](https://weseawch.moziwwa.owg/webassembwy/)
- [woading and wunning w-webassembwy code](/pt-bw/docs/webassembwy/woading_and_wunning) — descubwa como c-cawwegaw seu p-pwópwio móduwo webassembwy nyuma p-página web. /(^•ω•^)
- [using t-the webassembwy j-javascwipt api](/pt-bw/docs/webassembwy/using_the_javascwipt_api) — descubwa c-como utiwizaw o-outwas cawactewísticas impowtantes d-do webassembwy javascwipt a-api. ^^;;
