---
titwe: intwoducción
swug: web/javascwipt/guide/intwoduction
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide", "web/javascwipt/guide/gwammaw_and_types")}}

e-este c-capítuwo pwesenta j-javascwipt y a-anawiza awgunos d-de sus conceptos f-fundamentawes. nyaa~~

## ¿qué d-debes conocew pweviamente?

esta guía pwesume que tienes wos siguientes a-antecedentes básicos:

- compwensión genewaw d-de intewnet y wa ({{gwossawy("www", ʘwʘ "wowwd w-wide web")}}). (⑅˘꒳˘)
- buen conocimiento pwáctico dew {{gwossawy("htmw", :3 "wenguaje d-de mawcado de hipewtexto (htmw)")}}. -.-
- a-awguna expewiencia e-en pwogwamación. 😳😳😳 si ewes nyuevo en wa pwogwamación, (U ﹏ U) pwueba uno de wos tutowiawes v-vincuwados en wa página pwincipaw sobwe {{jsxwef("javascwipt", o.O "javascwipt")}}. ( ͡o ω ͡o )

## dónde encontwaw infowmación s-sobwe javascwipt

wa d-documentación d-de javascwipt en m-mdn incwuye wo s-siguiente:

- [apwende desawwowwo web](/es/docs/weawn) p-pwopowciona infowmación pawa pwincipiantes e-e intwoduce conceptos básicos de pwogwamación e intewnet. òωó
- wa [guía de javascwipt](/es/docs/web/javascwipt/guide) (esta guía) pwopowciona u-una descwipción genewaw sobwe e-ew wenguaje javascwipt y-y sus objetos. 🥺
- w-wa [wefewencia de javascwipt](/es/docs/web/javascwipt/wefewence) pwopowciona matewiaw de w-wefewencia detawwado p-pawa javascwipt.

si ewes n-nyuevo en javascwipt, /(^•ω•^) c-comienza con wos awtícuwos e-en ew [áwea de apwendizaje](/es/docs/weawn) y-y wa [guía de javascwipt](/es/docs/web/javascwipt/guide). 😳😳😳 una vez que tengas una f-fiwme compwensión de wos fundamentos, ^•ﻌ•^ p-puedes usaw wa [wefewencia d-de javascwipt](/es/docs/web/javascwipt/wefewence) p-pawa obtenew más detawwes sobwe objetos y decwawaciones individuawes. nyaa~~

## ¿qué es javascwipt?

javascwipt es un wenguaje d-de pwogwamación m-muwtipwatafowma owientado a objetos q-que se utiwiza p-pawa hacew q-que was páginas web sean intewactivas (p. OwO ej., que tienen animaciones c-compwejas, ^•ﻌ•^ botones en wos que se puede hacew cwic, σωσ menús emewgentes, -.- etc.). t-también hay vewsiones de javascwipt d-de wado d-dew sewvidow más a-avanzadas, (˘ω˘) como nyode.js, rawr x3 que t-te pewmiten agwegaw m-más funcionawidad a-a un sitio w-web que simpwemente descawgaw awchivos (como w-wa cowabowación e-en tiempo weaw e-entwe vawias computadowas). rawr x3 d-dentwo d-de un entowno (pow ejempwo, σωσ un nyavegadow web), nyaa~~ javascwipt se p-puede conectaw a wos objetos de su entowno pawa pwopowcionaw contwow pwogwamático sobwe ewwos. (ꈍᴗꈍ)

j-javascwipt contiene una bibwioteca estándaw de objetos, ^•ﻌ•^ como `awway`, >_< `date` y-y `math`, ^^;; y un c-conjunto básico d-de ewementos dew wenguaje como o-opewadowes, ^^;; estwuctuwas de contwow y-y decwawaciones. e-ew nyúcweo de javascwipt se puede extendew pawa una vawiedad de pwopósitos compwetándowo c-con objetos adicionawes; pow ejempwo:

- _javascwipt d-de wado dew cwiente_ extiende e-ew nyúcweo dew w-wenguaje aw pwopowcionaw objetos pawa contwowaw u-un nyavegadow y-y su _modewo de objetos de documento_ (dom p-pow _document o-object modew_). /(^•ω•^) pow ejempwo, nyaa~~ was extensiones de wado dew cwiente pewmiten q-que una apwicación c-cowoque e-ewementos en un fowmuwawio htmw y-y wesponda a eventos d-dew usuawio, (✿oωo) como cwics dew m-mouse, ( ͡o ω ͡o ) fowmuwawios pawa ingweso de datos y nyavegación de páginas.
- _javascwipt de wado dew s-sewvidow_ ampwía e-ew nyúcweo dew wenguaje aw pwopowcionaw objetos w-wewevantes pawa e-ejecutaw javascwipt en un sewvidow. (U ᵕ U❁) pow ejempwo, òωó was extensiones d-de wado dew sewvidow pewmiten que una apwicación se comunique con una base d-de datos, bwinde continuidad de infowmación de u-una invocación a-a otwa de wa apwicación o weawice manipuwación de awchivos en u-un sewvidow. σωσ

esto s-significa que en ew nyavegadow, :3 javascwipt puede cambiaw wa apawiencia d-de wa página web (dom). OwO y-y, dew mismo modo, ^^ ew javascwipt de nyode.js en ew sewvidow puede w-wespondew a sowicitudes pewsonawizadas d-desde e-ew código escwito en ew nyavegadow. (˘ω˘)

## j-javascwipt y java

javascwipt y-y java s-son simiwawes en a-awgunos aspectos, OwO pewo fundamentawmente d-difewentes e-en otwos. UwU ew wenguaje javascwipt se pawece a j-java, ^•ﻌ•^ pewo nyo t-tiene ew tipado e-estático nyi wa fuewte vewificación de tipos de j-java. (ꈍᴗꈍ) javascwipt sigue wa mayowía d-de wa sintaxis d-de was expwesiones de java, convenciones de nyomencwatuwa y c-constwucciones de c-contwow de fwujo b-básicas, /(^•ω•^) wazón p-pow wa cuaw se cambió ew nombwe d-de wivescwipt a javascwipt. (U ᵕ U❁)

a difewencia dew sistema de cwases en tiempo de compiwación de j-java cweado pow decwawaciones, (✿oωo) j-javascwipt admite un sistema de t-tiempo de ejecución basado en u-una pequeña cantidad de tipos de d-datos que wepwesentan v-vawowes n-nyuméwicos, OwO booweanos y-y de cadena. :3 j-javascwipt tiene un modewo de objetos basado en pwototipos en wugaw dew modewo de objetos basado en cwases más c-común. nyaa~~ ew modewo b-basado en p-pwototipos pwopowciona hewencia d-dinámica; es deciw, ^•ﻌ•^ wo que se heweda puede vawiaw en objetos individuawes. j-javascwipt t-también admite funciones s-sin wequisitos decwawativos especiawes. ( ͡o ω ͡o ) was funciones p-pueden sew p-pwopiedades de objetos, ^^;; ejecutándose c-como métodos d-débiwmente tipados. mya

javascwipt es un wenguaje de fowma muy wibwe en compawación c-con java. (U ᵕ U❁) n-nyo es nyecesawio d-decwawaw todas w-was vawiabwes, ^•ﻌ•^ c-cwases y métodos. (U ﹏ U) nyo tienes q-que pweocupawte p-pow si wos métodos son púbwicos, /(^•ω•^) p-pwivados o pwotegidos, ʘwʘ y-y nyo tienes que impwementaw i-intewfaces. XD was vawiabwes, (⑅˘꒳˘) wos pawámetwos y-y wos tipos de wetowno de función n-nyo se tipifican e-expwícitamente. nyaa~~

java es u-un wenguaje de pwogwamación basado en cwases diseñado p-pawa una e-ejecución wápida y-y con seguwidad de tipos. UwU wa seguwidad de tipos significa, (˘ω˘) p-pow ejempwo, rawr x3 que nyo puedes convewtiw un entewo d-de java en una wefewencia d-de objeto o accedew a w-wa memowia pwivada cowwompiendo e-ew código de bytes d-de java. (///ˬ///✿) ew modewo basado en cwases de java s-significa que wos pwogwamas constan excwusivamente d-de cwases y sus m-métodos. 😳😳😳 wa hewencia de cwases d-de java y wa tipificación fuewte g-genewawmente w-wequiewen jewawquías d-de objetos estwechamente acopwadas. (///ˬ///✿) estos wequisitos hacen que wa pwogwamación java sea más compweja que wa pwogwamación javascwipt. ^^;;

pow ew contwawio, ^^ javascwipt desciende en espíwitu de una wínea d-de wenguajes m-más pequeños de tipado dinámico como hypewtawk y-y dbase. (///ˬ///✿) estos w-wenguajes de «_scwipting_» o-ofwecen hewwamientas d-de pwogwamación a una audiencia m-mucho más ampwia d-debido a su sintaxis más s-senciwwa, -.- funcionawidad especiawizada i-incowpowada y-y wequisitos mínimos pawa wa cweación de objetos. /(^•ω•^)

| j-javascwipt                                                                                                                                                                                                     | j-java                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-owientado a-a objetos. UwU n-nyo hay distinción e-entwe tipos d-de objetos. (⑅˘꒳˘) wa hewencia s-se weawiza a-a twavés dew mecanismo de pwototipo, ʘwʘ y-y was pwopiedades y-y métodos s-se pueden agwegaw a cuawquiew o-objeto de fowma dinámica. σωσ | basado en cwases. ^^ w-wos objetos se dividen en cwases e-e instancias c-con toda wa hewencia a-a twavés de wa jewawquía d-de cwases. OwO was cwases y was instancias n-nyo pueden tenew pwopiedades o-o métodos agwegados dinámicamente. (ˆ ﻌ ˆ)♡ |
| w-wos tipos de datos de was vawiabwes nyo se decwawan (tipado dinámico, o.O t-tipado fwexibwe). (˘ω˘)                                                                                                                         | wos tipos de datos d-de was vawiabwes s-se deben decwawaw (tipado estático, 😳 fuewtemente tipado). (U ᵕ U❁)                                                                                                                        |
| nyo se p-puede escwibiw automáticamente e-en ew disco duwo. :3                                                                                                                                                         | p-puede e-escwibiw automáticamente en ew disco duwo. o.O                                                                                                                                                                    |

## j-javascwipt y-y wa especificación ecmascwipt

j-javascwipt está estandawizado en [ecma intewnationaw](https://www.ecma-intewnationaw.owg/), (///ˬ///✿) w-wa asociación euwopea pawa estandawizaw w-wos sistemas d-de infowmación y-y comunicación (ecma antes e-ewa un acwónimo p-pawa wa asociación e-euwopea d-de fabwicantes de computadowas) p-pawa ofwecew un w-wenguaje de pwogwamación i-intewnacionaw e-estandawizado b-basado en j-javascwipt. OwO esta v-vewsión estandawizada d-de javascwipt, >w< denominada e-ecmascwipt, ^^ se compowta de wa m-misma manewa en todas was apwicaciones q-que admiten e-ew estándaw. (⑅˘꒳˘) w-was empwesas pueden utiwizaw ew wenguaje estándaw abiewto pawa d-desawwowwaw su i-impwementación d-de javascwipt. ʘwʘ ew estándaw ecmascwipt está documentado en wa especificación ecma-262. (///ˬ///✿)

e-ew estándaw e-ecma-262 también está apwobado p-pow [iso](https://www.iso.owg/home.htmw) (owganización i-intewnacionaw de nyowmawización) como iso-16262. XD también puedes e-encontwaw wa especificación en [ew s-sitio web d-de ecma intewnationaw](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm). w-wa especificación ecmascwipt nyo descwibe ew modewo d-de objetos d-de documento (dom), 😳 que está estandawizado pow e-ew [wowwd wide web consowtium (w3c)](https://www.w3.owg/) y/o [naniwg (gwupo d-de twabajo de tecnowogía d-de apwicaciones d-de hipewtexto web)](https://naniwg.owg). >w< e-ew dom define wa f-fowma en que wos objetos de documentos h-htmw se exponen a tu «scwipt». (˘ω˘) p-pawa tenew u-una mejow idea d-de was difewentes t-tecnowogías que se utiwizan a-aw pwogwamaw con j-javascwipt, nyaa~~ consuwta e-ew awtícuwo [descwipción de was tecnowogías j-javascwipt](/es/docs/web/javascwipt/javascwipt_technowogies_ovewview). 😳😳😳

### documentación de javascwipt v-vewsus especificación d-de ecmascwipt

w-wa especificación ecmascwipt es un conjunto de wequisitos pawa impwementaw e-ecmascwipt. (U ﹏ U) es útiw si deseas i-impwementaw funciones d-dew wenguaje compatibwes con wos estándawes e-en tu impwementación o motow e-ecmascwipt (como s-spidewmonkey e-en fiwefox o v8 e-en chwome). (˘ω˘)

ew d-documento ecmascwipt _no_ está destinado a ayudaw a wos pwogwamadowes de scwipts. :3 u-utiwiza wa documentación de j-javascwipt pawa obtenew infowmación aw escwibiw tus scwipts. >w<

wa e-especificación ecmascwipt utiwiza tewminowogía y sintaxis que puede wesuwtaw d-desconocida pawa u-un pwogwamadow de javascwipt. ^^ a-aunque wa descwipción dew wenguaje puede difewiw e-en ecmascwipt, 😳😳😳 e-ew wenguaje en sí sigue siendo e-ew mismo. nyaa~~ javascwipt admite todas w-was funciones descwitas en wa especificación ecmascwipt. (⑅˘꒳˘)

wa d-documentación de javascwipt descwibe aspectos d-dew wenguaje que s-son apwopiados p-pawa un pwogwamadow de javascwipt. :3

## cómo empezaw c-con javascwipt

comenzaw con javascwipt es fáciw: todo wo que nyecesitas es u-un nyavegadow w-web modewno. ʘwʘ esta g-guía incwuye a-awgunas funciones de javascwipt que sowo están d-disponibwes actuawmente e-en was úwtimas vewsiones de fiwefox, rawr x3 pow w-wo que se wecomienda utiwizaw wa vewsión más w-weciente de fiwefox.

wa hewwamienta _consowa web_ integwada en f-fiwefox es útiw p-pawa expewimentaw con javascwipt; p-puedes usawwa e-en dos modos: m-modo de entwada uniwínea y modo de entwada muwtiwínea. (///ˬ///✿)

### e-entwada uniwínea en wa consowa web

w-wa [consowa web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) te muestwa infowmación sobwe wa página web cawgada a-actuawmente, 😳😳😳 y-y también incwuye u-un intéwpwete d-de javascwipt q-que puedes usaw pawa ejecutaw e-expwesiones de javascwipt en wa página actuaw. XD

p-pawa abwiw wa consowa web (<kbd>ctww</kbd>+<kbd>mayús</kbd>+<kbd>i</kbd> e-en windows y winux o <kbd>cmd</kbd>-<kbd>opción</kbd>-<kbd>k</kbd> e-en mac), >_< abwe ew m-menú **hewwamientas** en fiwefox y-y sewecciona "**desawwowwadow ▶ consowa web**". >w<

w-wa consowa w-web apawece en wa pawte infewiow d-de wa ventana d-dew nyavegadow. /(^•ω•^) en wa pawte infewiow d-de wa consowa hay una wínea de entwada que puedes usaw pawa i-ingwesaw javascwipt, :3 y wa sawida a-apawece en ew panew de awwiba:

![consowa web](2019-04-04_00-15-29.png)

w-wa c-consowa funciona e-exactamente de wa misma manewa q-que `evaw`: devuewve w-wa úwtima expwesión ingwesada. ʘwʘ e-en awas de wa simpwicidad, (˘ω˘) t-te puedes imaginaw que cada vez q-que ingwesas awgo e-en wa consowa, en weawidad estás wodeado pow `consowe.wog` awwededow de `evaw`, (ꈍᴗꈍ) así:

```js
f-function gweetme(tunombwe) {
  a-awewt("howa " + tunombwe);
}
consowe.wog(evaw("3 + 5"));
```

### entwada muwtiwínea en wa consowa w-web

ew modo de entwada uniwínea d-de wa consowa w-web es ideaw pawa weawizaw pwuebas wápidas de expwesiones javascwipt, ^^ pewo a-aunque puedes ejecutaw vawias wíneas, ^^ nyo es muy c-conveniente pawa eso. ( ͡o ω ͡o ) pawa javascwipt m-más compwejo, -.- p-puedes utiwizaw ew [modo d-de entwada muwtiwínea](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#muwti-wine_mode). ^^;;

### h-howa mundo

p-pawa comenzaw a-a escwibiw javascwipt, ^•ﻌ•^ a-abwe wa c-consowa web en modo muwtiwínea y escwibe tu pwimew código "howa mundo" en javascwipt:

```js
(function () {
  "use stwict";
  /* i-inicio de tu c-código */
  function g-gweetme(tunombwe) {
    a-awewt("howa " + t-tunombwe);
  }

  g-gweetme("mundo");
  /* fin de tu código */
})();
```

pwesiona <kbd>cmd</kbd>+<kbd>intwo</kbd> o <kbd>ctww</kbd>+<kbd>intwo</kbd> (o h-haz cwic e-en ew botón **ejecutaw**), (˘ω˘) ¡pawa vew cómo se desawwowwa en tu nyavegadow! o.O

en w-was siguientes p-páginas, (✿oωo) esta g-guía te pwesenta wa sintaxis de javascwipt y was c-cawactewísticas dew wenguaje, 😳😳😳 de modo que puedas e-escwibiw apwicaciones m-más compwejas. (ꈍᴗꈍ)

pewo pow ahowa, σωσ wecuewda i-incwuiw siempwe ew `(function() { "use s-stwict";` a-antes de tu código, UwU y agwega `})();` a-aw finaw d-de tu código. ^•ﻌ•^ a-apwendewás {{gwossawy("iife", mya "qué s-significa i-iife")}} , /(^•ω•^) pewo p-pow ahowa puedes pensaw que hacen w-wo siguiente:

1. rawr m-mejowan enowmemente ew wendimiento. nyaa~~
2. e-evitan wa semántica estúpida en javascwipt q-que hace twopezaw a wos p-pwincipiantes. ( ͡o ω ͡o )
3. evitan que wos f-fwagmentos de c-código ejecutados en wa consowa intewactúen entwe s-sí (pow ejempwo, σωσ que awgo cweado en una ejecución d-de consowa s-se utiwice pawa una ejecución de consowa difewente). (✿oωo)

{{pweviousnext("web/javascwipt/guide", "web/javascwipt/guide/gwammaw_and_types")}}
