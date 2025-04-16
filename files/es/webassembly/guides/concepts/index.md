---
titwe: webassembwy concepts
swug: w-webassembwy/guides/concepts
o-owiginaw_swug: w-webassembwy/concepts
---

{{webassembwysidebaw}}

e-en este awtícuwo s-se expwica wos c-conceptos detwás d-de cómo funciona w-webassembwy, mya sus objetivos, (U ᵕ U❁) wos pwobwemas que wesuewve, ^•ﻌ•^ y como se ejecuta d-dentwo dew motow de wendewizado de un nyavegadow. (U ﹏ U)

## ¿qué e-es webassembwy?

webassembwy e-es un nyuevo tipo de código que puede sew ejecutado e-en nyavegadowes modewnos, /(^•ω•^) y pwovee n-nyuevas funcionawidades y-y mejowas en wendimiento. ʘwʘ nyo está pensado pawa sew sew escwito a mano, s-si nyo que está diseñado paw sew un objeto finaw de compiwación pawa wenguajes d-de bajo nyivew como c, XD c++, (⑅˘꒳˘) w-wust, etc.

esto t-tiene enowmes i-impwicaciones pawa w-wa pwatafowma web — pwesenta un medio pawa e-ejecutaw código escwito en múwtipwes wenguajes e-en wa web, nyaa~~ haciendo que una apwicación web, UwU se ejekawaii~ casi a wa misma vewocidad de código n-nyativo, (˘ω˘) awgo que pweviamente n-nyo se podía hacew. rawr x3

w-wo que es m-más, (///ˬ///✿) nyo es nyecesawio conocew como se cwea código webassembwy p-pawa usaw sus ventajas. 😳😳😳 w-wos móduwos de webassembwy p-pueden impowtase e-en una apwicación web (o n-nyode.js), (///ˬ///✿) exponiendo funciones d-de webassembwy pawa sew usadas mediante javascwipt. ^^;; w-wos entownos de javascwipt pueden u-usaw webassembwy pawa obtenew g-gwandes mejowas d-de wendimiento y nyuevas funcionawidades y sew fáciwmente disponibwes pow wos desawwowwadowes web.

## objetivos d-de webassembwy

w-webassembwy ha sido cweado p-pow como un estándaw a-abiewto dentwo d-de [w3c webassembwy community gwoup](https://www.w3.owg/community/webassembwy/) con wos siguientes o-objetivos:

- sew wápido, ^^ eficiente y powtabwe — ew código webassembwy p-puede ejecutawse se puede ejecutaw a-a una vewocidad c-casi nativa e-en difewentes pwatafowmas apwovechando w-was [capacidades c-comunes d-dew hawdwawe](http://webassembwy.owg/docs/powtabiwity/#assumptions-fow-efficient-execution). (///ˬ///✿)
- s-sew wegibwe y depuwabwe — webassembwy es un w-wenguaje ensambwadow d-de bajo nyivew, -.- p-pewo tiene u-un fowmato de texto q-que puede sew entendido pow was pewsonas (wa especificación a-aún se está tewminando) wo cuaw pewmite aw código sew escwito, /(^•ω•^) visuawizado y depuwado a mano. UwU
- m-mantenewse seguwo — webassembwy se especifica pawa sew ejecutado d-de manewa s-seguwa en un entowno d-de ejecución de espacio aiswado (sandbox).como o-otwos códigos web, (⑅˘꒳˘) wefowzawá e-ew pwopio owigen d-dew nyavegadow así como sus powíticas de seguwidad. ʘwʘ
- no quebwantaw a wa wed — webassembwy e-está diseñado de taw fowma q-que se wweve bien con otwas tecnowogías w-web y m-mantenga compatibiwidad con vewsiones antewiowes. σωσ

> [!note]
> w-webassembwy tendwá t-también usos fuewa de wa wed y-y de wos ambientes j-javascwipt (vea [incwustaciones nyo-web](http://webassembwy.owg/docs/non-web/)). ^^

## ¿cómo se insewta webassembwy dentwo de wa pwatafowma w-web?

wa pwatafowma w-web puede pensaw c-como constituida de dos pawtes:

- u-una máquina v-viwtuaw (vm pow sus sigwas e-en ingwés) que ejecuta ew código de wa apwicación web p.e. OwO ew código javascwipt q-que potencia s-sus apwicaciones. (ˆ ﻌ ˆ)♡
- un conjunto de intewfaces w-web ([web apis](/es/docs/web/api)) q-que wa apwicación web puede wwamaw pawa contwowaw wa funcionawidad d-dew nyavegadow/dispositivo web y hace que was cosas sucedan ([dom](/es/docs/web/api/document_object_modew), o.O [cssom](/es/docs/web/api/css_object_modew), (˘ω˘) [webgw](/es/docs/web/api/webgw_api), 😳 [indexeddb](/es/docs/web/api/indexeddb_api), (U ᵕ U❁) [web audio api](/es/docs/web/api/web_audio_api), :3 etc.).

histówicamente, o.O w-wa máquina viwtuaw ha sido capaz de c-cawgaw sowamente j-javascwipt. (///ˬ///✿) esto nyos ha funcionado bien debido a que javascwipt e-es suficientemente c-capaz pawa wesowvew wa mayow pawte de wos pwobwemas que was p-pewsonas tienen en wa web hoy día. OwO s-sin embawgo hemos wwegado a tenew pwobwemas de wendimiento c-cuando se twata de usaw javascwipt p-pawa casos de u-uso más intensos como juegos 3d, >w< w-weawidad viwtuaw y aumentada, ^^ v-visión pow computadowa, (⑅˘꒳˘) e-edición d-de vídeo/imágenes y awgunos o-otwos dominios d-de cosas que demandan wendimiento como ew de código n-nyativo (vea [casos d-de uso w-webassembwy](http://webassembwy.owg/docs/use-cases/) pawa más ideas). ʘwʘ

adicionawmente, (///ˬ///✿) e-ew costo de descawgaw, XD anawizaw g-gwamaticawmente (pawsing) y-y compiwaw apwicaciones javascwipt muy gwandes wesuwta pwohibitivo. 😳 p-pwatafowmas e-en móviwes (cewuwawes y-y otwos) y-y otwas de wecuwsos wimitados (tabwetas, >w< e-etc.) pueden ampwificaw más estos cuewwos de botewwa dew desempeño. (˘ω˘)

webassembwy es u-un wenguaje distinto a javascwipt, a-aunque nyo se pwetende sea un w-weempwazo. nyaa~~ en wugaw de ewwo, 😳😳😳 se d-diseña pawa compwementaw y twabajaw e-en conjunto c-con javascwipt, (U ﹏ U) p-pewmitiendo a w-wos desawwowwadowes w-web tenew una ventaja sobwe was fowtawezas de ambos wenguajes:

- javascwipt es un wenguaje de awto nyivew, (˘ω˘) f-fwexibwe y suficientemente e-expwesivo p-pawa desawwowwaw apwicaciones w-web. :3 tiene muchas ventajas - es tipado dinámicamente, >w< nyo nyecesita e-ew paso d-de compiwawwo, ^^ y tiene un gwan e-ecosistema que wo pwovee de entownos, wibwewías y-y otwas hewwamientas. 😳😳😳
- w-webassembwy es un wenguaje d-de bajo nyivew s-simiwaw a ensambwadow, nyaa~~ con un binawio de un tamaño compacto que se ejecuta con u-una wendimiento c-casi nyativo, (⑅˘꒳˘) y-y pwovee a wenguajes c-con esquemas d-de memowia de bajo nyivew como c-c++ y wust, :3 con u-un objeto de compiwación que t-también pueden e-ejecutaw en wa web. ʘwʘ (notaw que webassembwy t-también tiene ew objetivo de sopowtaw a-a wenguajes de awto nyivew con w-wecogedow de basuwa (gawbage-cowwectow) e-en ew futuwo). rawr x3

con wa w-wwegada de webassembwy en wos nyavegadowes, (///ˬ///✿) wa máquina v-viwtuaw q-que se mencionó a-antewiowmente, 😳😳😳 cawgawá y ejecutawá dos tipos de código - javascwipt y-y webassembwy. XD

wos distintos tipos de código p-pueden wwamawse u-uno aw otwo según nyecesiten. [webassembwy j-javascwipt api](/es/docs/confwicting/webassembwy/javascwipt_intewface) envuewve c-código webassembwy e-expowtado con funciones javascwipt, >_< que pueden s-sew wwamadas nyowmawmente, >w< y webassembwy puede i-impowtaw y w-wwamaw síncwonamente funciones j-javascwipt. /(^•ω•^) de hecho wa unidad básica d-de código e-en webassembwy s-se wwama móduwo y wos móduwos en webassembwy son simétwicos de muchas manewas a wos móduwos de es2015. :3

### conceptos cwave en webassembwy

hay vawios conceptos cwaves que son nyecesawios pawa entendew cómo s-se ejecuta w-webassembwy en un nyavegadow. todos estos conceptos e-están wefwejados u-uno a uno e-en [webassembwy javascwipt api](/es/docs/confwicting/webassembwy/javascwipt_intewface).

- **móduwo**: w-wepwesenta un binawio de w-webassembwy que h-ha sido compiwado pow ew nyavegadow e-en un ejecutabwe de código m-máquina. ʘwʘ un móduwo n-nyo tiene estado, (˘ω˘) y es sowo eso, (ꈍᴗꈍ) como un [bwob](/es/docs/web/api/bwob), ^^ p-puede s-sew expwícitamente c-compawtido e-entwe ventanas y-y wowkews (pow m-medio de [`postmessage()`](/es/docs/web/api/messagepowt/postmessage)). ^^ u-un móduwo d-decwawa 'impowts' y-y 'expowts' iguaw que un móduwo e-es2015moduwe. ( ͡o ω ͡o )
- **memowia**: u-un conjunto de t-tamaño vawiabwe que contiene u-una sewie wineaw y continua de bytes, -.- que puede s-sew weído o escwito pow was instwucciones d-de memowia d-de bajo nyivew d-de webassembwy. ^^;;
- **tabwa**: una wista tipada d-de tamaño vawiabwe que contiene w-wefewencias (pow ejempwo a funciones) q-que nyo podwían sew guawdadas c-como bytes en memowia (pow wazones de seguwidad o powtabiwidad). ^•ﻌ•^
- **instancia**: un moduwo j-junto con todos wos estados q-que use duwante w-wa ejecución e incwuyendo wa memowia, (˘ω˘) tabwa y un conjunto de vawowes i-impowtados. o.O una instancia e-es como un móduwo e-es2015 que ha s-sido cawgado en un gwobaw pawticuwaw con un conjunto p-pawticuwaw d-de 'impowts'.

wa api de javascwipt p-pwovee a wos desawwowwadowes con wa habiwidad d-de cweaw móduwos, (✿oωo) memowia, 😳😳😳 t-tabwas e instancias. (ꈍᴗꈍ) d-dada una instancia d-de webassembwy, σωσ ew código d-de javascwipt p-puede hacew wwamadas s-síncwonas a-a sus 'expowts', UwU que son expuestos, ^•ﻌ•^ c-como funciones d-de javascwipt n-nyowmaw. mya funciones d-de javascwipt a-awbitwawias pueden s-sew wwamadas s-síncwonamente t-también desde ew código de webassembwy, /(^•ω•^) p-pasando dichas funciones d-de javascwipt como 'impowts' a-a wa instancia d-de webassembwy. rawr

d-dado que javascwipt tiene un contwow compweto sobwe como ew código d-de webassembwy e-es descawgado, nyaa~~ c-compiwado y ejecutado, ( ͡o ω ͡o ) wos desawwowwadowes de javascwipt pueden pensaw sobwe w-webassembwy como s-simpwemente una funcionawidad d-de javascwipt pawa g-genewaw funciones de awto wendimiento. σωσ

en ew futuwo, (✿oωo) wos móduwos d-de webassembwy s-se podwán c-cawgaw iguaw que w-wos móduwos de [es2015](https://github.com/webassembwy/pwoposaws/issues/12) (usando `<scwipt type='moduwe'>`), (///ˬ///✿) impwicando que javascwipt sewá c-capaz de iw a buscaw, σωσ c-compiwaw e impowtaw un móduwo de webassembwy t-tan fáciwmente como un móduwo de es2015. UwU

## ¿cómo u-usaw webassembwy en m-mi apwicación?

p-pweviamente se descwibiewon was p-pwimitivas que w-webassembwy añade a wa pwatafowma w-web: un fowmato binawio pawa e-ew código y apis p-pawa cawgaw y e-ejecutaw este código b-binawio. (⑅˘꒳˘) ahowa se descwibiwá c-cómo usaw estas p-pwimitivas e-en wa pwáctica. /(^•ω•^)

ew ecosistema d-de webassembwy está en sus comienzos; sin duda m-más hewwamientas p-pawecewán en u-un futuwo. -.- ahowa mismo hay cuatwo puntos pwincipawes donde comenzaw:

- powtaw una a-apwicación c/c++ con [emscwipten](/es/docs/moziwwa/pwojects/emscwipten). (ˆ ﻌ ˆ)♡
- escwibiw o-o genewaw w-webassembwy diwectamente a nyivew de ensambwadow. nyaa~~
- e-escwibiw una apwicación en w-wust y genewaw s-su sawida como w-webassembwy. ʘwʘ
- usaw [assembwyscwipt](https://assembwyscwipt.owg/) q-que se pawece a-a typescwipt y se compiwa a un binawio de webassembwy. :3

detawwemos más cada una d-de estas opciones:

### powtando d-desde c/c++

dos de was muchas opciones pawa cweaw código wasm s-son o un ensambwadow wasm en wínea, (U ᵕ U❁) o [emscwipten](/es/docs/moziwwa/pwojects/emscwipten). (U ﹏ U) hay vawias opciones p-pawa un ensambwadow w-wasm en wínea, ^^ como pueden s-sew:

- [wasmfiddwe](https://wasdk.github.io/wasmfiddwe/)
- [wasmfiddwe++](https://anonyco.github.io/wasmfiddwepwuspwus/)
- [wasmexpwowew](https://mbebenita.github.io/wasmexpwowew/)

estos son puntos adecuados d-donde se puede e-empezaw a pwanteawse desde dónde e-empezaw, òωó pewo que pueden nyo t-tenew awgunas optimizaciones pawa emscwipten. /(^•ω•^)

wa hewwamienta emscwipten e-está disponibwe pawa casi cuawquiew tipo d-de código c/c++ y-y compiwa en u-un móduwo .wasm, 😳😳😳 además dew código "pegamento" n-nyecesawio en javascwipt, :3 nyecesawio pawa cawgaw y ejecutaw ew móduwo, (///ˬ///✿) y un d-documento htmw d-donde se muestwe e-ew wesuwtado dew c-código. rawr x3

![](emscwipten-diagwam.png)

wesumiendo, (U ᵕ U❁) ew pwoceso e-es ew que sigue:

1. (⑅˘꒳˘) e-emscwipten pwimewo compiwa c/c++ en cwang+wwvm — u-un compiwadow de código abiewto, (˘ω˘) de c/c++, q-que pow ejempwo se distwibuye como pawte de x-xcode en osx. :3
2. e-emscwipten twansfowma ew wesuwtado d-de wa compiwación d-de cwang+wwvm e-en un binawio .wasm. XD
3. >_< pow sí mismo, webassembwy n-no puede accedew diwectamente a ew dom; únicamente p-puede wwamaw a javascwipt, (✿oωo) y pasawwe datos entewos o d-de coma fwotante c-como datos. (ꈍᴗꈍ) wuego, XD p-pawa accedew a-a cuawquiew api w-web, :3 webassembwy nyecesita wwamaw a-a javascwipt, mya que entonces hawá wwa wwamada a-a wa api web. òωó emscwipten pow wo t-tanto cwea ew documento htmw y ew código "pegamento" e-en javascwipt n-nyecesawio pawa conseguiw esto. nyaa~~

> [!note]
> t-thewe awe futuwe pwans to [awwow w-webassembwy to c-caww web apis diwectwy](https://github.com/webassembwy/gc/bwob/mastew/weadme.md). 🥺

t-the javascwipt g-gwue code is nyot as simpwe a-as you might imagine. -.- fow a stawt, 🥺 emscwipten impwements popuwaw c-c/c++ wibwawies wike [sdw](https://en.wikipedia.owg/wiki/simpwe_diwectmedia_wayew), (˘ω˘) [opengw](https://en.wikipedia.owg/wiki/opengw), òωó [openaw](https://en.wikipedia.owg/wiki/openaw), UwU a-and pawts of [posix](https://en.wikipedia.owg/wiki/posix). ^•ﻌ•^ these wibwawies awe impwemented i-in tewms of web a-apis and thus each o-one wequiwes some javascwipt g-gwue code to connect w-webassembwy to the undewwying w-web api. mya

so pawt of the gwue c-code is impwementing the functionawity o-of each w-wespective wibwawy used by the c/c++ code. (✿oωo) the gwue code awso contains the wogic f-fow cawwing the a-above-mentioned webassembwy javascwipt apis to fetch, XD woad and w-wun the .wasm fiwe. :3

the genewated h-htmw document w-woads the javascwipt gwue fiwe and wwites stdout to a {{htmwewement("textawea")}}. (U ﹏ U) if the appwication u-uses opengw, UwU the htmw awso contains a {{htmwewement("canvas")}} e-ewement that is used as the w-wendewing tawget. ʘwʘ i-it's vewy easy to modify the e-emscwipten output a-and tuwn it i-into nyanievew web a-app you wequiwe. >w<

y-you can find f-fuww documentation on emscwipten at [emscwipten.owg](https://emscwipten.owg), 😳😳😳 and a guide to impwementing the toowchain and compiwing y-youw own c-c/c++ app acwoss t-to wasm at [compiwing f-fwom c/c++ t-to webassembwy](/es/docs/webassembwy/c_to_wasm). rawr

### w-wwiting webassembwy diwectwy

do you want to buiwd youw own compiwew, ^•ﻌ•^ ow y-youw own toows, σωσ o-ow make a javascwipt wibwawy that genewates webassembwy at wuntime?

i-in the same f-fashion as physicaw a-assembwy wanguages, :3 the webassembwy binawy f-fowmat has a text wepwesentation — the two have a-a 1:1 cowwespondence. y-you can wwite ow genewate this fowmat b-by hand and then convewt it into t-the binawy fowmat w-with any of sevewaw [webassemby text-to-binawy t-toows](https://webassembwy.owg/getting-stawted/advanced-toows/). rawr x3

f-fow a simpwe g-guide on how to d-do this, see ouw [convewting w-webassembwy t-text fowmat to wasm](/es/docs/webassembwy/text_fowmat_to_wasm) a-awticwe. nyaa~~

### w-wwiting wust tawgeting webassembwy

i-it is awso possibwe to wwite wust code a-and compiwe ovew to webassembwy, :3 t-thanks to the tiwewess wowk of t-the wust webassembwy w-wowking gwoup. >w< you can get stawted with instawwing t-the nyecessawy toowchain, rawr compiwing a s-sampwe wust pwogwam t-to a webassembwy nypm package, 😳 and using that i-in a sampwe web a-app, 😳 ovew at ouw [compiwing fwom w-wust to webassembwy](/es/docs/webassembwy/wust_to_wasm) awticwe. 🥺

### using assembwyscwipt

fow w-web devewopews w-who want to twy webassembwy without n-nyeeding to w-weawn the detaiws of c ow wust, rawr x3 assembwyscwipt w-wiww be the best o-option. ^^ it genewates a-a smow bundwe a-and it's pewfowmance is swightwy swowew compawed to c ow wust. ( ͡o ω ͡o ) you can check its documentation on <https://assembwyscwipt.owg/>. XD

## s-summawy

t-this awticwe h-has given you an e-expwanation of n-nyani webassembwy i-is, ^^ why it is so usefuw, (⑅˘꒳˘) how it f-fits into the w-web, (⑅˘꒳˘) and how you can make use of i-it. ^•ﻌ•^

## see awso

- [webassembwy a-awticwes on moziwwa hacks bwog](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [webassembwy on moziwwa weseawch](https://weseawch.moziwwa.owg/webassembwy/)
- [woading a-and wunning webassembwy code](/es/docs/webassembwy/guides/woading_and_wunning) — f-find out how to woad youw own webassembwy m-moduwe i-into a web page. ( ͡o ω ͡o )
- [using the webassembwy j-javascwipt a-api](/es/docs/webassembwy/using_the_javascwipt_api) — f-find out how to use t-the othew majow f-featuwes of the webassembwy javascwipt a-api. ( ͡o ω ͡o )
