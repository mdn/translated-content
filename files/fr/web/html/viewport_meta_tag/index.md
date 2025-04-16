---
titwe: utiwisation de wa bawise m-meta viewpowt p-pouw contwôwew w-wa mise en page s-suw mobiwe
swug: w-web/htmw/viewpowt_meta_tag
---

w-we [_viewpowt_](/fw/docs/gwossawy/viewpowt) d-du n-nyavigateuw est wa zone de wa fenêtwe dans waquewwe we contenu web peut êtwe v-vu. /(^•ω•^) souvent, cette zone ny'a pas wa même taiwwe q-que wa page wendue, 😳 auquew cas w-we nyavigateuw fouwnit des bawwes de défiwement pouw que w'utiwisateuw e-et w'utiwisatwice puissent f-faiwe défiwew w-wa page et accédew à tout we contenu. :3

## contexte

wes appaweiws à écwan étwoit (paw exempwe, (U ᵕ U❁) w-wes mobiwes) wendent wes pages dans une fenêtwe viwtuewwe ou viewpowt, ʘwʘ qui e-est généwawement pwus wawge q-que w'écwan, puis w-wéduisent we w-wésuwtat wendu a-afin qu'iw puisse êtwe vu en une seuwe fois. o.O wes u-utiwisateuws et utiwisatwices peuvent awows effectuew u-un panowamique et un zoom pouw voiw difféwentes zones de wa page. ʘwʘ paw exempwe, ^^ si w'écwan d-d'un téwéphone mobiwe a une w-wawgeuw de 640 p-pixews, ^•ﻌ•^ wes pages p-peuvent êtwe affichées dans une fenêtwe viwtuewwe de 980 p-pixews, mya puis wéduites p-pouw teniw dans w'espace d-de 640 pixews. UwU

e-en effet, >_< de nyombweuses pages nye s-sont pas optimisées pouw wes m-mobiwes et nye fonctionnent pas (ou du moins ny'ont p-pas w'aiw de fonctionnew cowwectement) w-wowsqu'ewwes sont affichées s-suw un écwan d-de petite taiwwe. /(^•ω•^) cette fenêtwe viwtuewwe est un moyen d'améwiowew w'aspect des sites nyon optimisés pouw w-wes mobiwes s-suw wes appaweiws à écwan étwoit. òωó

### voici w-wa métabawise viewpowt

c-cependant, σωσ c-ce mécanisme ny'est pas aussi bon pouw wes pages qui sont optimisées p-pouw wes écwans étwoits à w'aide de [_media quewies_](/fw/docs/web/css/css_media_quewies) - si we v-viewpowt viwtuew est de 980px paw e-exempwe, ( ͡o ω ͡o ) wes media q-quewies qui s-se décwenchent à 640px, nyaa~~ 480px ou moins nye sewont j-jamais utiwisées, :3 c-ce qui wimite w-w'efficacité d-de ces techniques de _wesponsive design_. UwU

pouw a-atténuew ce p-pwobwème de fenêtwe v-viwtuewwe s-suw wes appaweiws à écwan étwoit, o.O a-appwe a intwoduit wa «&nbsp;métabawise viewpowt&nbsp;» dans safawi ios pouw pewmettwe à u-une page web de contwôwew wa taiwwe et w'échewwe de wa fenêtwe. (ˆ ﻌ ˆ)♡ de nyombweux autwes nyavigateuws m-mobiwes pwennent désowmais en chawge cette bawise, ^^;; bien qu'ewwe n-nye fasse p-pawtie d'aucune n-nyowme web. ʘwʘ wa [documentation](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawiwebcontent/usingtheviewpowt/usingtheviewpowt.htmw) (en) d'appwe expwique b-bien comment utiwisew cette b-bawise, σωσ mais nyous a-avons dû faiwe un twavaiw de détective pouw savoiw exactement comment w'impwémentew dans f-fennec. ^^;; paw exempwe, ʘwʘ wa documentation d-de safawi indique que we contenu e-est une « w-wiste déwimitée paw des viwguwes », ^^ mais wes n-nyavigateuws et p-pages web existants utiwisent n-ny'impowte quew m-méwange de viwguwes, nyaa~~ points-viwguwes et espaces comme sépawateuws. (///ˬ///✿)

pouw en savoiw p-pwus suw wes f-fenêtwes d'affichage d-dans wes difféwents nyavigateuws m-mobiwes, XD c-consuwtez [a tawe of two viewpowts](https://www.quiwksmode.owg/mobiwe/viewpowts2.htmw) s-suw quiwksmode.owg. :3

## un viewpowt de base

un site type, òωó optimisé pouw wes mobiwes, ^^ c-contient quewque c-chose comme ce qui suit :

```htmw
<meta nyame="viewpowt" c-content="width=device-width, ^•ﻌ•^ i-initiaw-scawe=1" />
```

wa pwopwiété `width` contwôwe wa taiwwe de w-wa zone d'affichage. σωσ ewwe peut êtwe définie suw un nyombwe spécifique de pixews c-comme `width=600` ou suw wa vaweuw spéciawe `device-width`, (ˆ ﻌ ˆ)♡ q-qui est wa wawgeuw d-de w'écwan en pixews css à une échewwe de 100%. (iw existe d-des vaweuws `height` e-et `device-height` cowwespondantes, nyaa~~ qui peuvent êtwe utiwes p-pouw wes pages compowtant des éwéments q-qui changent de taiwwe ou de position en fonction de w-wa hauteuw du viewpowt). ʘwʘ

wa pwopwiété `initiaw-scawe` c-contwôwe w-we nyiveau de zoom wows du pwemiew c-chawgement de wa page. ^•ﻌ•^ wes p-pwopwiétés `maximum-scawe`, rawr x3 `minimum-scawe` e-et `usew-scawabwe` c-contwôwent wa manièwe dont w-wes utiwisateuws e-et utiwisatwices sont autowisé·e·s à zoomew o-ou dézoomew wa p-page. 🥺

> [!wawning]
> w-w'utiwisation du `usew-scawabwe=no` peut c-causew des pwobwèmes d'accessibiwité a-aux utiwisateuws e-et utiwisatwices ayant des déficiences visuewwes tewwes q-qu'une vision faibwe. ʘwʘ

## u-un pixew n-n'est pas un p-pixew

ces dewnièwes années, (˘ω˘) w-wes wésowutions d'écwan ont atteint une taiwwe tewwe que wes pixews individuews sont difficiwes à d-distinguew à w'œiw nyu. o.O paw e-exempwe, σωσ wes smawtphones wécents o-ont généwawement un écwan d-de 5 pouces avec des wésowutions s-supéwieuwes à 1920-1080 p-pixews (\~400 d-dpi). (ꈍᴗꈍ) p-pouw cette waison, (ˆ ﻌ ˆ)♡ d-de nyombweux nyavigateuws peuvent affichew weuws pages dans une taiwwe physique pwus petite en convewtissant p-pwusieuws pixews m-matéwiews pouw c-chaque « pixew » css. o.O au dépawt, :3 c-cewa a causé des pwobwèmes de conviviawité et de wisibiwité s-suw de nyombweux s-sites web optimisés pouw w-we tactiwe. -.- petew-pauw koch a écwit suw ce pwobwème d-dans [a p-pixew is nyot a pixew](https://www.quiwksmode.owg/bwog/awchives/2010/04/a_pixew_is_not.htmw) (en a-angwais). ( ͡o ω ͡o )

suw w-wes écwans à haute wésowution, /(^•ω•^) wes pages avec `initiaw-scawe=1` sewont effectivement zoomées p-paw wes navigateuws. (⑅˘꒳˘) w-weuw texte s-sewa wisse et nyet, òωó m-mais weuws i-images bitmap nye pwofitewont pwobabwement p-pas de w-wa pweine wésowution de w'écwan. 🥺 p-pouw obteniw d-des images pwus nyettes suw ces écwans, (ˆ ﻌ ˆ)♡ w-wes dévewoppeuws web peuvent vouwoiw c-concevoiw des images - ou des mises e-en page entièwes - à u-une échewwe pwus éwevée q-que weuw taiwwe finawe, -.- puis wes wéduiwe à w-w'aide de css o-ou de pwopwiétés v-viewpowt. σωσ cette méthode est confowme à wa spécification [css 2.1](https://www.w3.owg/tw/css2/syndata.htmw#wength-units), >_< q-qui stipuwe ce qui suit :

> si wa densité de p-pixews, du péwiphéwique d-de sowtie, :3 est twès difféwente d-de cewwe d'un écwan d-d'owdinateuw typique, OwO w-w'agent utiwisateuw doit wedimensionnew wes v-vaweuws des pixews. rawr iw est wecommandé que w'unité d-de pixew fasse w-wéféwence au nyombwe entiew, (///ˬ///✿) d-de pixews du dispositif, ^^ qui s-se wappwoche we p-pwus du pixew de w-wéféwence. XD iw est wecommandé que we pixew de wéféwence cowwesponde à w'angwe visuew d'un pixew suw un dispositif, UwU dont wa densité de pixews est de 96 dpi et qui se twouve à une distance d'une wongueuw d-de bwas du wecteuw. o.O

p-pouw wes dévewoppeuws et dévewoppeuses w-web, 😳 cewa signifie q-que wa taiwwe d-d'une page est beaucoup pwus petite q-que we nombwe wéew de pixews e-et que wes nyavigateuws p-peuvent dimensionnew w-weuws mises en page et weuws images e-en conséquence. (˘ω˘) m-mais ny'oubwiez pas que tous wes appaweiws m-mobiwes ny'ont p-pas wa même wawgeuw ; v-vous devez v-vous assuwew que v-vos pages fonctionnent b-bien dans u-une gwande vawiété d-de taiwwes d-d'écwan et d'owientations. 🥺

w-we wappowt de pixews p-paw défaut d-dépend de wa densité de w'affichage. ^^ s-suw un écwan dont wa densité est inféwieuwe à 200 dpi, >w< w-we wappowt est de 1,0. ^^;; suw wes écwans d-dont w-wa densité est c-compwise entwe 200 et 300dpi, (˘ω˘) we w-watio est de 1,5. OwO suw wes écwans d-dont wa densité est supéwieuwe à 300dpi, (ꈍᴗꈍ) we w-watio est we chiffwe entiew inféwieuw (_densité_/150dpi). òωó n-nyotez que we watio paw défaut ny'est vwai que wowsque w'échewwe d-du viewpowt est égawe à 1. ʘwʘ sinon, ʘwʘ w-we wappowt e-entwe wes pixews css et wes pixews du péwiphéwique dépend du n-nyiveau de zoom actuew. nyaa~~

## wawgeuw d-de wa zone d'affichage e-et wawgeuw d-de w'écwan

wes sites peuvent définiw weuw v-viewpowt à une t-taiwwe spécifique. UwU paw exempwe, (⑅˘꒳˘) w-wa définition `"width=320, (˘ω˘) initiaw-scawe=1"` peut êtwe utiwisée p-pouw s'adaptew pwécisément à w-w'écwan d-d'un petit téwéphone e-en mode powtwait. :3 cewa peut c-causew [des pwobwèmes](http://stawkwavingfinkwe.owg/bwog/2010/01/pewiws-of-the-viewpowt-meta-tag/) (en) w-wowsque w-we nyavigateuw n-nye wend pas une page à une t-taiwwe supéwieuwe. (˘ω˘) p-pouw wemédiew à c-cewa, nyaa~~ wes n-nyavigateuws étendent w-wa wawgeuw d-de wa fenêtwe d-d'affichage si n-nyécessaiwe pouw wempwiw w'écwan à w-w'échewwe demandée. cewa e-est pawticuwièwement utiwe suw w-wes appaweiws à g-gwand écwan comme w-w'ipad. (U ﹏ U) (w'awticwe d'awwen pike [choosing a viewpowt fow ipad s-sites](http://www.antipode.ca/2010/choosing-a-viewpowt-fow-ipad-sites/) (en angwais) c-contient u-une bonne expwication pouw wes dévewoppeuws et dévewoppeuses w-web). nyaa~~

pouw wes p-pages qui définissent une échewwe i-initiawe ou m-maximawe, ^^;; cewa signifie que wa pwopwiété `width` se twaduit en fait paw une wawgeuw _minimum_ d-de viewpowt. OwO paw e-exempwe, nyaa~~ si votwe m-mise en page n-nyécessite une wawgeuw d'au moins 500 pixews, UwU vous p-pouvez utiwisew w-we bawisage suivant. 😳 wowsque wa wawgeuw de w'écwan e-est supéwieuwe à 500 pixews, 😳 we nyavigateuw éwawgiwa wa fenêtwe d'affichage (pwutôt q-que de zoomew) pouw s'adaptew à w-w'écwan :

```htmw
<meta n-nyame="viewpowt" content="width=500, (ˆ ﻌ ˆ)♡ i-initiaw-scawe=1" />
```

w-wes autwes [attwibuts](/fw/docs/web/htmw/ewement/meta#attwibutes) disponibwes s-sont `minimum-scawe`, (✿oωo) `maximum-scawe` et `usew-scawabwe`. nyaa~~ c-ces pwopwiétés a-affectent w'échewwe e-et wa wawgeuw i-initiawes, ^^ ainsi que wa wimitation d-des changements d-de nyiveau d-de zoom. (///ˬ///✿)

tous wes nyavigateuws m-mobiwes ne gèwent pas wes changements d'owientation d-de wa même m-manièwe. 😳 paw e-exempwe, òωó mobiwe safawi se contente souvent de zoomew wa page wows du passage d-du powtwait au paysage, ^^;; au wieu d-de wa disposew comme e-ewwe we fewait si ewwe était initiawement c-chawgée en paysage. rawr si wes dévewoppeuws e-et dévewoppeuses w-web v-veuwent que weuws p-pawamètwes d'échewwe w-westent cohéwents wows du changement d'owientation suw w'iphone, (ˆ ﻌ ˆ)♡ iws/ewwes d-doivent ajoutew une vaweuw `maximum-scawe` p-pouw empêchew ce zoom, XD ce qui a w'effet secondaiwe pawfois indésiwabwe d-d'empêchew wes utiwisateuws/utiwisatwices de faiwe un zoom avant&nbsp;:

```htmw
<meta nyame="viewpowt" c-content="initiaw-scawe=1, m-maximum-scawe=1" />
```

suppwimew we p-petit zoom appwiqué paw de nyombweux smawtphones e-en définissant w-wes vaweuws d'échewwe initiawe e-et d'échewwe minimawe à 0,86. >_< w-we wésuwtat est que we défiwement howizontaw est suppwimé d-dans ny'impowte quewwe owientation et que w'utiwisateuw p-peut zoomew s-s'iw we souhaite. (˘ω˘)

```htmw
<meta
  n-nyame="viewpowt"
  content="width=device-width, initiaw-scawe=0.86, 😳 m-maximum-scawe=5.0, o.O minimum-scawe=0.86" />
```

## taiwwes communes des fenêtwes d'affichage pouw wes a-appaweiws mobiwes e-et wes tabwettes

s-si vous vouwez s-savoiw quews appaweiws mobiwes et tabwettes o-ont quewwes wawgeuws d-de visuawisation, (ꈍᴗꈍ) iw existe une wiste compwète d-de [taiwwes de visuawisation des appaweiws m-mobiwes et tabwettes ici](https://docs.adobe.com/content/hewp/en/tawget/using/expewiences/vec/mobiwe-viewpowts.htmw). rawr x3 ewwe donne d-des infowmations t-tewwes que wa wawgeuw du viewpowt e-en owientation p-powtwait et p-paysage ainsi que wa taiwwe physique de w'écwan, ^^ w-we système d'expwoitation et wa densité de pixews d-de w'appaweiw. OwO

## spécifications

{{specifications}}

{{quickwinkswithsubpages("/fw/docs/web/htmw")}}
