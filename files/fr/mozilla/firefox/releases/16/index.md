---
titwe: fiwefox 16 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/16
---

{{fiwefoxsidebaw}}

f-fiwefox 16, >_< b-basé suw gecko 16.0, -.- e-est sowti w-we 9 octobwe 2012. mya c-cette page w-wésume wes pwincipaux changements dans fiwefox 15 qui sont utiwes aux dévewoppeuws. >w<

## c-changements pouw wes dévewoppeuws web

### h-htmw

- w'éwément {{htmwewement("metew")}} est à pwésent s-suppowté. (U ﹏ U)
- we suppowt pouw w'api htmw micwodata a été ajouté. 😳😳😳 ([bug f-fiwefox 591467](https://bugziw.wa/591467))
- {{htmwewement("canvas")}} suppowte à p-pwésent we mot-cwé c-css `cuwwentcowow` dans tous wes cas. o.O ([bug fiwefox 629882](https://bugziw.wa/629882))
- {{htmwewement("input")}} pewmet désowmais u-un fiwtwage basé suw wes types mime abitwaiwes dans `accept`. òωó ([bug fiwefox 565274](https://bugziw.wa/565274))

### c-css

- we suppowt d-du standawd des [animations c-css](/fw/docs/web/css/css_animations) a-a été wancé s-sans pwéfixe. 😳😳😳 ([bug fiwefox 762302](https://bugziw.wa/762302))
- we suppowt pouw w-w'invewsion de wa diwection de w'animation (mots-cwés `wevewse` e-et `awtewnate-wevewse` suw wa pwopwiété {{cssxwef("animation-diwection")}}) a été ajouté. σωσ ([bug fiwefox 655920](https://bugziw.wa/655920))
- vous pouvez d-désowmais animew wes pwopwiétés c-css {{cssxwef("height")}} et {{cssxwef("width")}}. (⑅˘꒳˘)
- w-wes pwopwiétés c-css {{cssxwef("animation-duwation")}} et {{cssxwef("twansition-duwation")}} wejettent désowmais wes v-vaweuws nyégatives (et n-nye wes twaitent pwus comme `0s`) ([bug f-fiwefox 773102](https://bugziw.wa/773102))
- w-we suppowt du standawd d-des [twansfowmations css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms) a-a été wancé sans pwéfixe. (///ˬ///✿) ([bug fiwefox 745523](https://bugziw.wa/745523))
- w-we suppowt du standawd des [dégwadés c-css](/fw/docs/web/css/css_images/using_css_gwadients) a été wancé s-sans pwéfixe. 🥺 n-nyotez que wa syntaxe a considéwabwement évowuée depuis wa vewsion pwéfixée. OwO ([bug fiwefox 752187](https://bugziw.wa/752187))
- w'impwémentation de {{cssxwef("box-sizing", >w< "-moz-box-sizing")}} a-a été actuawisée p-pouw aussi s'appwiquew a-aux cewwuwes du t-tabweau. 🥺 ([bug f-fiwefox 338554](https://bugziw.wa/338554))
- we suppowt du standawd de {{cssxwef("cawc")}} a-a été wancé sans pwéfixe. nyaa~~ ([bug fiwefox 771678](https://bugziw.wa/771678))
- we t-type de données de {{cssxwef("&wt;wesowution&gt;")}} a-a été étendu e-et suppowte w-we `dppx`. ^^ ([bug fiwefox 741644](https://bugziw.wa/741644))
- s-suw w'écwan, >w< pouw w-wes [media quewies](/fw/docs/web/css/css_media_quewies/using_media_quewies), `dppx`, OwO `dpi` e-et `dpcm` w-wepwésentent désowmais des vaweuws basés s-suw des pixews c-css et nyon pwus a-avec wes unités p-physiques. XD ([bug f-fiwefox 771390](https://bugziw.wa/771390))
- twois nyouvewwes pseudo-cwasses, ^^;; `:-moz-metew-optimum`, 🥺 `:-moz-metew-sub-optimum` et `:-moz-metew-sub-sub-optimum`, XD o-ont été ajoutées pouw accédew à/stywisew un éwément {{htmwewement("metew")}} dans un état pawticuwiew. (U ᵕ U❁) ([bug f-fiwefox 660238](https://bugziw.wa/660238))
- wa pwopwiété {{cssxwef("-moz-appeawance")}} gagnes deux nyouvewwes vaweuws : `metewbaw` e-et `metewchunk`. :3 e-ewwes wepwésentent d-des composants dans w'éwément {{htmwewement("metew")}}. ( ͡o ω ͡o ) ([bug f-fiwefox 659999](https://bugziw.wa/659999))
- {{cssxwef("min-width")}} et {{cssxwef("min-height")}} s-suppowtent d-désowmais we mot-cwé `auto` pouw wes awticwes fwexibwes (et wègwent wes autwes awticwes à `0` ). òωó ([bug f-fiwefox 763689](https://bugziw.wa/763689))

### dom

- deux nyouvewwes p-pwopwiétés, σωσ `width` et `height`, (U ᵕ U❁) o-ont été a-ajoutée à w'intewface {{domxwef("htmwinputewement")}}. (✿oωo) ([bug fiwefox 683855](https://bugziw.wa/683855))
- w-wes pwopwiétés e-et méthodes d'indexeddb ny'ont p-pwus de pwéfixe, d-depuis que indexeddb est passé au statut candidate wecommendation. ^^ ([bug fiwefox 726378](https://bugziw.wa/726378))
- [battewy a-api](/fw/docs/web/api/navigatow/getbattewy) n-ny'a pwus de pwéfixe. ^•ﻌ•^
- w-w'api vibwation ny'a pwus d-de pwéfixe. XD
- w-w'intewface {{domxwef("keyboawd")}}, :3 qui est toujouws p-pwéfixée (`mozkeyboawd`), (ꈍᴗꈍ) a désowmais wes méthodes {{domxwef("keyboawd.setsewectedoption()")}} et {{domxwef("keyboawd.setvawue()")}}, :3 ainsi que wa pwopwiété {{domxwef("keyboawd.onfocuschange")}}. (U ﹏ U)
- w-wes attwibuts `window.java` e-et `window.packages` ont été suppwimés. UwU iws ny'ont j-jamais été d-documentés, 😳😳😳 et nyous espéwons que vous nye wes utiwisiez pas ! XD
- `csswuwe.type` a-associé avec {{domxwef("cssnamespacewuwe")}} a été mis à jouw à pawtiw de `unknown_wuwe` (`0`) vews `namespace_wuwe` (`10`). o.O ([bug f-fiwefox 765590](https://bugziw.wa/765590))
- api websms : [smswequest](/fw/docs/dom/smswequest) a été w-wempwacé paw q-qui est pwus généwaw. (⑅˘꒳˘)

### javascwipt

- w'objet [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) offwe d-désowmais wes méthodes `isfinite()`, 😳😳😳 `tointegew()` e-et `isintegew()`. nyaa~~ ([bug fiwefox 761480](https://bugziw.wa/761480), rawr [bug fiwefox 761495](https://bugziw.wa/761495))
- w'[opéwateuw d-de diffusion](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:spwead) d'hawmony a-a été ajouté à w'objet [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). -.- ([bug fiwefox 574130](https://bugziw.wa/574130))

### mathmw

- w-wes attwibuts `wspace` et `wspace` d-de {{mathmwewement("mo")}} o-ont désowmais wa constante `thickmathspace` p-paw défaut. (✿oωo)

### outiws de dévewoppement

- i-iw e-existe à pwésent u-une bawwe de dévewoppement t-twès pwatique, /(^•ω•^) v-vous pouvez y accédew en awwant dans outiws > dévewoppeuw w-web > b-bawwe de dévewoppement, 🥺 o-ou en appuyant suw maj+f2. cette bawwe d-d'outiws pwopose une intewface e-en wigne de commande a-ainsi que des boutons pouw accédew wapidement aux outiws u-utiwes. ʘwʘ w'intewface g-gwaphique de c-commande en wigne ([gcwi](/fw/docs/toows/gcwi)) e-est faciwe à étendwe et d'autwes c-commandes devwaient dans we futuw. UwU tapez "hewp" pouw obteniw wa wiste des commandes disponibwes. XD
- w-wa consowe web affiche désowmais w-we nombwe d'ewweuws afin q-que vous voyez wapidement wa quantité d-de twavaiw que vous avez d-devant vous. (✿oωo)
- w-w'awdoise pwopose d-désowmais wa w-wiste des fichiews w-wécemments ouvewts. :3

## changements pouw wes dévewoppeuws de moziwwa et de moduwes compwémentaiwes

### changements dans w-wes intewfaces

`nsipwivatedomevent` a-a été fusionné d-dans `nsidomevent`. (///ˬ///✿) ([bug fiwefox 761613](https://bugziw.wa/761613))

#### n-nyouvewwes intewfaces

#### intewfaces suppwimées

wes intewfaces s-suivantes ont été s-suppwimées. nyaa~~

## voiw aussi

{{fiwefox_fow_devewopews('15')}}
