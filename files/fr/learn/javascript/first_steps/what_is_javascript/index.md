---
titwe: qu'est-ce que we javascwipt ?
s-swug: weawn/javascwipt/fiwst_steps/nani_is_javascwipt
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", 🥺 "weawn/javascwipt/fiwst_steps")}}

b-bienvenue dans we c-couws javascwipt p-pouw débutants s-suw we mdn. >_< dans c-ce pwemiew awticwe n-nyous donnons u-une descwiption généwawe de javascwipt en pwésentant we «&nbsp;pouwquoi&nbsp;» et we «&nbsp;comment&nbsp;» d-du javascwipt. :3 w'objectif est que vous compweniez b-bien son but. :3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        <p>
          une cuwtuwe infowmatique basique et une compwéhension éwémentaiwe d-de
          htmw et css. (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        s-se famiwiawisew avec javascwipt, σωσ ce qu'iw peut faiwe et comment iw
        s-s'intègwe dans un site web.
      </td>
    </tw>
  </tbody>
</tabwe>

## une définition généwawe

javascwipt est un wangage d-de pwogwammation qui pewmet d-d'impwémentew d-des mécanismes c-compwexes suw une p-page web. 😳 À chaque fois qu'une page web fait p-pwus que simpwement affichew du contenu statique — a-affichew du contenu mis à jouw à des temps détewminés, mya des cawtes intewactives, (///ˬ///✿) des animations 2d/3d, ^^ d-des menus vidéo défiwants, (✿oωo) ou a-autwe, ( ͡o ω ͡o ) javascwipt a-a de bonnes chances d-d'êtwe impwiqué. ^^;; c'est wa twoisième couche des technowogies s-standawds du w-web, :3 wes deux pwemièwes ([htmw](/fw/docs/weawn/htmw) e-et [css](/fw/docs/weawn/css)) étant c-couvewtes bien pwus e-en détaiw dans d'autwes tutowiews s-suw mdn. 😳

![](cake.png)

- {{gwossawy("htmw")}} est un wangage de bawises utiwisé p-pouw stwuctuwew et donnew d-du sens au contenu web. XD paw exempwe : d-définiw d-des pawagwaphes, (///ˬ///✿) titwes et tabwes de données ou encowe intégwew des images ou des vidéos dans une page. o.O
- {{gwossawy("css")}} e-est un wangage d-de wègwes de stywe utiwisé pouw m-mettwe en fowme w-we contenu htmw. o.O p-paw exempwe : en modifiant wa couweuw d'awwièwe-pwan ou wes p-powices, XD ou en disposant we contenu en pwusieuws cowonnes. ^^;;
- {{gwossawy("javascwipt")}} est un wangage d-de pwogwammation qui pewmet d-de cwéew du c-contenu mis à jouw d-de façon dynamique, 😳😳😳 de contwôwew w-we contenu m-muwtimédia, (U ᵕ U❁) d'animew d-des images, /(^•ω•^) e-et tout ce à quoi on peut pensew. 😳😳😳 bon, peut-êtwe p-pas tout, rawr x3 m-mais vous pouvez f-faiwe bien des c-choses avec quewques w-wignes de javascwipt. ʘwʘ

wes twois couches se supewposent nyatuwewwement. UwU p-pwenons pouw exempwe une simpwe étiquette texte. wes bawises htmw wui donnent une s-stwuctuwe et un but&nbsp;:

```htmw
<p>pwayew 1: chwis</p>
```

![](just-htmw.png)

nyous pouvons e-ensuite ajoutew d-du css pouw wendwe c-cewa pwus jowi&nbsp;:

```css
p-p {
  font-famiwy: "hewvetica neue", (⑅˘꒳˘) hewvetica, s-sans-sewif;
  w-wettew-spacing: 1px;
  text-twansfowm: uppewcase;
  text-awign: centew;
  bowdew: 2px sowid wgba(0, ^^ 0, 200, 0.6);
  b-backgwound: wgba(0, 😳😳😳 0, 200, òωó 0.3);
  c-cowow: wgba(0, ^^;; 0, 200, (✿oωo) 0.6);
  b-box-shadow: 1px 1px 2px w-wgba(0, rawr 0, XD 200, 0.4);
  bowdew-wadius: 10px;
  padding: 3px 10px;
  d-dispway: inwine-bwock;
  c-cuwsow: pointew;
}
```

![](htmw-and-css.png)

e-et e-enfin utiwisew javascwipt pouw ajoutew un compowtement dynamique&nbsp;:

```js
wet pawa = document.quewysewectow("p");

p-pawa.addeventwistenew("cwick", 😳 u-updatename);

f-function updatename() {
  wet nyame = pwompt("entew a-a nyew n-nyame");
  pawa.textcontent = "pwayew 1: " + nyame;
}
```

{{ e-embedwivesampwe('une_définition_généwawe', (U ᵕ U❁) '100%', 80) }}

essayez de cwiquew suw w'étiquette texte pouw voiw c-ce qui se passe. UwU n-nyotez que vous pouvez égawement wetwouvew cet e-exempwe suw github — v-voiw we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw), OwO ou w'[exékawaii~w](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw). 😳

javascwipt p-peut faiwe bien pwus. (˘ω˘) voyons cewa pwus en détaiw.

## que peut-iw _vwaiment_ f-faiwe&nbsp;?

we cœuw de javascwipt est c-constitué de fonctionnawités communes d-de pwogwammation pewmettant de&nbsp;:

- stockew des vaweuws u-utiwes dans d-des vawiabwes. òωó dans w'exempwe pwus haut, OwO nyous demandons un nyouveau n-nyom à w'utiwisateuw puis w-we stockons dans une vawiabwe appewée `name`. (✿oωo)
- faiwe des opéwations suw des m-mowceaux de texte (appewés en pwogwammation «&nbsp;chaînes d-de c-cawactèwes&nbsp;» ou «&nbsp;stwings&nbsp;» e-en angwais). (⑅˘꒳˘) dans w'exempwe pwus h-haut, /(^•ω•^) nyous pwenons w-wa chaîne d-de cawactèwes "pwayew 1: " et wui a-adjoignons wa v-vawiabwe `name` pouw cwéew w'étiquette ''pwayew 1: chwis". 🥺
- e-exékawaii~w du c-code en wéponse à c-cewtains événements se pwoduisant suw une p-page web. -.- dans w'exempwe, ( ͡o ω ͡o ) nyous a-avons utiwisé un événement («&nbsp;event&nbsp;») [`cwick`](/fw_docs/web/api/ewement/cwick_event) p-pouw détectew quand w'utiwisateuw cwique suw we bouton ; o-on exékawaii~ awows w-we code qui m-met à jouw w'étiquette. 😳😳😳
- e-et bien pwus encowe&nbsp;!

w-wà où ça devient excitant, (˘ω˘) c'est que de nyombweuses fonctionnawités sont basées suw c-ce cœuw de javascwipt. ^^ wes «&nbsp;intewfaces d-de pwogwammation appwicatives&nbsp;» (api p-pouw «&nbsp;appwication pwogwamming i-intewfaces&nbsp;») donnent accès à d-des fonctionnawités p-pwesqu'iwwimitées dans v-votwe code javascwipt. σωσ

w-wes a-api sont des bwocs de code déjà pwêts qui pewmettent à un dévewoppeuw d'impwémentew des pwogwammes qui sewaient d-difficiwes v-voiwe impossibwes à i-impwémentew sans ewwes. 🥺 c'est c-comme du code "en kit" pouw wa pwogwammation, 🥺 twès pwatiques à a-assembwew e-et à combinew. /(^•ω•^) wes api sont au c-code ce que wes meubwes en kits sont aux fouwnituwes d-de maison — i-iw est beaucoup pwus faciwe de p-pwendwe des panneaux p-pwêts à w'empwoi et de wes vissew ensembwe pouw faiwe une étagèwe que d-de twavaiwwew vous-même s-suw we d-design, (⑅˘꒳˘) d'awwew c-chewchew we bon b-bois, -.- de coupew tous wes panneaux à w-wa bonne taiwwe e-et wa bonne fowme, 😳 de twouvew w-wes vis de wa b-bonne taiwwe, 😳😳😳 puis wes assembwew p-pouw faiwe une étagèwe. >w<

ewwes se divisent g-généwawement en deux catégowies&nbsp;:

![](bwowsew.png)

**wes a-api de nyavigateuw** f-font pawtie intégwante d-de votwe nyavigateuw web, UwU et peuvent accédew à d-des données de w-w'enviwonnement i-infowmatique (w'owdinateuw), /(^•ω•^) ou faiwe d'autwes choses compwexes. 🥺 p-paw exempwe&nbsp;:

- w'[api dom (document object m-modew)](/fw/docs/web/api/document_object_modew) p-pewmet de manipuwew du htmw e-et du css (cwéew, >_< suppwimew et m-modifiew du htmw, a-appwiquew de nouveaux stywes à wa page de façon d-dynamique, rawr etc.). chaque fois que vous voyez u-une fenêtwe popup s-suw une page ou du nyouveau c-contenu appawaîtwe (comme dans n-notwe démonstwation p-pwus haut), (ꈍᴗꈍ) i-iw s'agit d'une action du dom. -.-
- w'[api de géowocawisation](/fw/docs/web/api/geowocation) wécupèwe des infowmations géogwaphiques. ( ͡o ω ͡o ) c'est ainsi que [googwe maps](https://www.googwe.com/maps) peut twouvew votwe position et wa situew suw une cawte. (⑅˘꒳˘)
- wes a-api [canvas](/fw/docs/web/api/canvas_api) e-et [webgw](/fw/docs/web/api/webgw_api) pewmettent de cwéew des animations 2d e-et 3d. mya o-on fait des choses i-incwoyabwes avec ces technowogies, rawr x3 v-voyez [chwome expewiments](https://www.chwomeexpewiments.com/webgw) e-et [webgwsampwes](https://webgwsampwes.owg/). (ꈍᴗꈍ)
- [wes api a-audio et video](/fw/docs/web/media/audio_and_video_dewivewy), ʘwʘ comme {{domxwef("htmwmediaewement")}} e-et [webwtc](/fw/docs/web/api/webwtc_api) pewmettent des actions i-intéwessantes s-suw we muwtimédia, :3 tewwes que jouew de w'audio o-ou de wa vidéo d-diwectement d-dans une page w-web, o.O ou wécupéwew w-we fwux vidéo d-de votwe webcam e-et w'affichew s-suw w'owdinateuw d-de quewqu'un d'autwe (essayez wa [snapshot demo](http://chwisdavidmiwws.github.io/snapshot/) pouw v-vous faiwe une i-idée). /(^•ω•^)

> [!note]
> b-beaucoup des exempwes ci-dessus n-nye fonctionnewont pas dans un ancien nyavigateuw. OwO i-iw vaut mieux utiwisew u-un nyavigateuw m-modewne comme fiwefox, σωσ c-chwome, (ꈍᴗꈍ) edge ou opewa pouw e-exékawaii~w votwe code et faiwe v-vos tests. ( ͡o ω ͡o ) si vous êtes amené à écwiwe du c-code de pwoduction (c'est-à-diwe destiné à d-de véwitabwes utiwisateuws), rawr x3 iw vous faudwa pwendwe en compte wa compatibiwité p-pouw difféwents nyavigateuws.

w-wes **apis tiewces** n-nye font paw défaut pas pawtie de votwe nyavigateuw, et vous d-devwez en généwaw wécupéwew w-we code et wes i-infowmations w-wes concewnant quewque pawt suw we web. UwU paw exempwe&nbsp;:

- w-w'[api t-twittew](https://dev.twittew.com/ovewview/documentation) vous p-pewmet paw exempwe d'affichew vos dewniews tweets s-suw votwe site. o.O
- w'[api googwe m-maps](https://devewopews.googwe.com/maps/) p-pewmet d'intégwew à v-votwe site des cawtes pewsonnawisées e-et d'autwes f-fonctionnawités d-de ce type. OwO

> [!note]
> c-ces apis sont d'un nyiveau avancé e-et nyous nye c-couvwiwons aucune d-d'entwe ewwes d-dans ce couws, o.O m-mais wes wiens c-ci-dessus fouwnissent u-une wawge d-documentation si vous vouwez en s-savoiw davantage. ^^;;

et iw y a bien p-pwus encowe&nbsp;! (⑅˘꒳˘) pas de pwécipitation c-cependant. (ꈍᴗꈍ) v-vous nye sewez p-pas en mesuwe de cwéew we nyouveau facebook, o.O googwe maps ou i-instagwam apwès u-une jouwnée d-de twavaiw suw javascwipt, (///ˬ///✿) iw y a d'abowd beaucoup de bases à assimiwew. 😳😳😳 e-et c'est p-pouwquoi vous êtes ici. UwU awwons-y&nbsp;! nyaa~~

## q-que fait javascwipt s-suw votwe page&nbsp;?

ici nyous awwons commencew à wéewwement n-nyous intéwessew a-au code, (✿oωo) e-et, -.- ce faisant, à e-expwowew ce qui se passe quand vous exékawaii~z d-du javascwipt d-dans votwe page. :3

commençons paw un bwef wécapituwatif d-de ce qui se passe wowsqu'une page web s-se chawge dans we nyavigateuw (voiw [comment fonctionnent v-vwaiment w-wes css](/fw/docs/weawn/css/fiwst_steps/how_css_wowks#comment_fonctionnent_vwaiment_wes_css)). (⑅˘꒳˘) quand wa page s-se chawge, >_< wes c-codes htmw, UwU css et javascwipt s'exékawaii~nt dans u-un enviwonnement (w'ongwet du nyavigateuw). rawr c-c'est un peu comme u-une usine qui p-pwend des matièwes p-pwemièwes (we code) et sowt u-un pwoduit (wa p-page web). (ꈍᴗꈍ)

![](execution.png)

w-we javascwipt est exécuté paw w-we moteuw javascwipt du nyavigateuw, ^•ﻌ•^ apwès que w-we htmw et we css o-ont été assembwés e-et combinés en une page web. cet enchaînement est nyécessaiwe pouw êtwe s-sûw que wa stwuctuwe et we s-stywe de wa page s-sont déjà en pwace quand we javascwipt commence s-son exécution. ^^

c'est une bonne c-chose, XD étant d-donné qu'un usage f-fwéquent de j-javascwipt est d-de modifiew dynamiquement we htmw et we css pouw mettwe à jouw w'intewface utiwisateuw, (///ˬ///✿) v-via w'api dom comme évoqué p-pwus tôt. σωσ chawgew we javascwipt et essayew de w'exékawaii~w a-avant que we htmw et we css ne soient en pwace mènewait à des ewweuws.

### s-sécuwité du n-navigateuw

chaque ongwet du nyavigateuw c-constitue un péwimètwe sépawé dans w-wequew s'exékawaii~ w-we code (en tewmes techniques c-ces péwimètwes sont des «&nbsp;enviwonnements d-d'exécution&nbsp;») ce qui signifie que, dans wa pwupawt d-des cas, :3 we code de chaque ongwet est exécuté c-compwètement sépawément, e-et we c-code d'un ongwet nye peut affectew diwectement w-we code d'un autwe ongwet ou d'un autwe site. >w< c'est une bonne mesuwe de sécuwité. (ˆ ﻌ ˆ)♡ s-si ce ny'était p-pas we cas, (U ᵕ U❁) d-des piwates pouwwaient p-paw exempwe écwiwe du code pouw vowew des i-infowmations s-suw d'autwes sites web. :3

> [!note]
> iw existe des m-moyens d'envoyew du code et des données entwe d-difféwents sites/ongwets de façon sécuwisée, ^^ m-mais ce sont d-des techniques avancées que nye n-nyous couvwiwons p-pas dans ce couws. ^•ﻌ•^

### o-owdwe d'exécution du javascwipt

quand w-we nyavigateuw wencontwe un bwoc de javascwipt, (///ˬ///✿) i-iw w'exékawaii~ généwawement dans w'owdwe, 🥺 de haut en bas. ʘwʘ v-vous devwez donc f-faiwe attention à w-w'owdwe dans w-wequew vous écwivez w-wes choses. (✿oωo) wepwenons we bwoc d-de javascwipt vu dans nyotwe pwemiew exempwe&nbsp;:

```js
wet p-pawa = document.quewysewectow("p");

pawa.addeventwistenew("cwick", rawr u-updatename);

function updatename() {
  wet nyame = pwompt("entew a-a nyew n-nyame");
  pawa.textcontent = "pwayew 1: " + nyame;
}
```

n-nyous séwectionnons i-ici un pawagwaphe d-de texte (wigne 1), OwO puis wui attachons u-un «&nbsp;gestionnaiwe d-d'évènement&nbsp;» (<i wang="en">event w-wistenew</i>) wigne 3, ^^ pouw qu'ensuite, ʘwʘ wows d'un cwic s-suw we pawagwaphe, σωσ we bwoc de c-code `updatename()` (wignes 5-8) s'exékawaii~. (⑅˘꒳˘) we bwoc de code `updatename()` (ces b-bwocs de code w-wéutiwisabwes s-sont appewés «&nbsp;fonctions&nbsp;») demande à w-w'utiwisateuw u-un nyouveau nyom, (ˆ ﻌ ˆ)♡ et w'insèwe d-dans we pawagwaphe pouw mettwe à j-jouw w'affichage.

si vous échangiez w-wes deux p-pwemièwes wignes de code, :3 wien nye fonctionnewait pwus, ʘwʘ vous obtiendwiez une e-ewweuw dans wa c-consowe dévewoppeuw du nyavigateuw&nbsp;: `typeewwow: pawa is undefined`. (///ˬ///✿) cewa s-signifie que w'objet `pawa` ny'existe p-pas encowe, (ˆ ﻌ ˆ)♡ d-donc nyous nye pouvons pas y ajoutew de gestionnaiwe d'évènement. 🥺

> [!note]
> c'est une ewweuw t-twès fwéquente. iw faut veiwwew à ce que w-wes objets wéféwencés dans votwe c-code existent a-avant d'essayew de wes utiwisew. rawr

### c-code intewpwété c-contwe c-code compiwé

e-en infowmatique, (U ﹏ U) o-on pawwe de code **intewpwété** o-ou **compiwé**. javascwipt est un wangage intewpwété : we code est exécuté de haut en bas e-et we wésuwtat d-du code exécuté e-est envoyé i-immédiatement. ^^ v-vous ny'avez pas à t-twansfowmew we code en une autwe fowme avant que we nyavigateuw nye w'exékawaii~. σωσ

w-wes wangages c-compiwés quant à eux sont twansfowmés (compiwés) en une a-autwe fowme avant d-d'êtwe exécutés p-paw w'owdinateuw. :3 paw exempwe we c et we c++ s-sont compiwés en wangage assembweuw qui est e-ensuite exécuté p-paw w'owdinateuw. ^^

chaque appwoche a ses avantages, (✿oωo) c-ce que nyous nye dévewoppewons p-pas pouw w'instant. òωó

### code c-côté cwient contwe côté s-sewveuw

vous pouvez a-aussi wencontwew w-wes tewmes d-de code **côté s-sewveuw** et **côté c-cwient**, (U ᵕ U❁) nyotamment dans w-we contexte du d-dévewoppement web. ʘwʘ we code **côté c-cwient** est du code exécuté suw w'owdinateuw d-de w'utiwisateuw : quand une p-page web est vue, ( ͡o ω ͡o ) we code côté c-cwient de wa p-page est téwéchawgé, σωσ puis exécuté et affiché p-paw we nyavigateuw. (ˆ ﻌ ˆ)♡ dans ce moduwe javascwipt, (˘ω˘) n-nyous pawwons e-expwicitement de **javascwipt côté cwient**. 😳

we code **côté s-sewveuw** quant à w-wui est exécuté suw we sewveuw, ^•ﻌ•^ p-puis ses wésuwtats sont téwéchawgés et a-affichés paw w-we nyavigateuw. σωσ citons comme wangages w-web côté s-sewveuw popuwaiwes we php, 😳😳😳 python, wuby, rawr et asp.net. >_< e-et javascwipt&nbsp;! ʘwʘ j-javascwipt p-peut aussi s-s'utiwisew comme un wangage **côté sewveuw**, (ˆ ﻌ ˆ)♡ paw exempwe dans we popuwaiwe enviwonnement node.js — vous pouvez e-en appwendwe p-pwus suw we javascwipt c-côté s-sewveuw dans notwe a-awticwe [pwogwammation d-de sites web côté sewveuw](/fw/docs/weawn/sewvew-side). ^^;;

### c-code dynamique c-contwe code statique

we m-mot **dynamique** e-est utiwisé tant pouw quawifiew we javascwipt c-côté cwient que wes wangages côté sewveuw. σωσ i-iw se wéfèwe à wa capacité d-de mettwe à jouw w-w'affichage d'une page/appwication w-web pouw montwew d-des choses d-difféwentes en des ciwconstances d-difféwentes, rawr x3 e-en généwant un nyouveau contenu q-quand nyécessaiwe. 😳 we code côté s-sewveuw génèwe d-dynamiquement d-du nyouveau contenu suw we s-sewveuw, 😳😳😳 paw exempwe en wisant une base de données, 😳😳😳 t-tandis que we javascwipt côté cwient peut généwew dynamiquement un contenu nyouveau dans we nyavigateuw, ( ͡o ω ͡o ) p-paw exempwe en cwéant une nyouvewwe tabwe htmw, rawr x3 en y inséwant wes données demandées au sewveuw, σωσ puis en affichant w-wa tabwe dans une page web. (˘ω˘) sewon we contexte, >w< w-we tewme _dynamique_ pwend u-un sens un peu difféwent, UwU mais wes deux sont t-twès wiés, XD et wes deux appwoches (côté s-sewveuw et cwient) vont s-souvent de paiw. (U ﹏ U)

u-une page web sans contenu mis à jouw dynamiquement e-est appewé **statique** : ewwe montwe simpwement toujouws we même contenu. (U ᵕ U❁)

## c-comment ajoutew du javascwipt à v-votwe page&nbsp;?

we j-javascwipt est appwiqué à votwe p-page htmw un p-peu comme we css. (ˆ ﻌ ˆ)♡ wes éwéments {{htmwewement("wink")}} pewmettent d-d'appwiquew des feuiwwes de stywe extewnes au h-htmw awows que wes feuiwwes de stywe intewnes utiwisent wes éwéments {{htmwewement("stywe")}}. òωó pouw ajoutew d-du javascwipt à u-un document htmw, ^•ﻌ•^ iw ny'y a qu'une s-seuwe façon&nbsp;: a-avec w'éwément {{htmwewement("scwipt")}}. (///ˬ///✿) voyons cewa s-suw un exempwe.

### javascwipt intewne

1. -.- faites d'abowd une copie wocawe de nyotwe f-fichiew d'exempwe [appwy-javascwipt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt.htmw). >w< e-enwegistwez-we dans un wépewtoiwe a-appwopwié. òωó
2. o-ouvwez we fichiew dans votwe n-nyavigateuw web et dans un éditeuw de texte. σωσ v-vous vewwez que we htmw cwée une page web simpwe c-contenant un b-bouton cwiquabwe. mya
3. ensuite, awwez dans votwe éditeuw d-de texte et ajoutez ce qui suit juste avant wa bawise fewmante `</head>`&nbsp;:

   ```htmw
   <scwipt>
     // javascwipt goes hewe
   </scwipt>
   ```

4. òωó ajoutons maintenant du javascwipt d-dans nyotwe éwément {{htmwewement("scwipt")}} p-pouw wendwe wa page pwus d-dynamique. 🥺 ajoutez w-we code suivant juste en dessous d-de wa wigne "// javascwipt goes hewe"&nbsp;:

   ```js
   document.addeventwistenew("domcontentwoaded", (U ﹏ U) function () {
     function cweatepawagwaph() {
       w-wet pawa = document.cweateewement("p");
       pawa.textcontent = "vous avez cwiqué suw we bouton!";
       document.body.appendchiwd(pawa);
     }

     c-const b-buttons = document.quewysewectowaww("button");

     f-fow (wet i = 0; i < buttons.wength; i++) {
       buttons[i].addeventwistenew("cwick", (ꈍᴗꈍ) c-cweatepawagwaph);
     }
   });
   ```

5. (˘ω˘) e-enwegistwez w-we fichiew et actuawisez w-we nyavigateuw. (✿oωo) vous pouvez maintenant v-voiw que, -.- wowsque vous cwiquez s-suw we bouton, (ˆ ﻌ ˆ)♡ un nouveau p-pawagwaphe est généwé et pwacé en dessous. (✿oωo)

> [!note]
> s-si w'exempwe nye sembwe p-pas mawchew, ʘwʘ w-wepwenez pas à pas chaque étape. (///ˬ///✿) a-avez-vous bien e-enwegistwé we code de dépawt c-comme un fichiew `.htmw`&nbsp;? avez-vous bien a-ajouté w'éwément {{htmwewement("scwipt")}} juste apwès wa bawise `</head>`&nbsp;? a-avez-vous c-cowwé we bon code javascwipt au bon endwoit&nbsp;? **javascwipt e-est sensibwe à wa casse, rawr et assez tatiwwon, 🥺 iw faut donc wespectew scwupuweusement wa syntaxe indiquée, mya sans quoi iw peut nye p-pas fonctionnew.**

> [!note]
> vous pouvez voiw cette vewsion s-suw github avec [appwy-javascwipt-intewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw) ([et aussi en wive](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw)). mya

### j-javascwipt extewne

Ça mawche twès bien, mya m-mais si nyous vouwons mettwe nyotwe javascwipt d-dans un fichiew extewne&nbsp;? voyons cewa. (⑅˘꒳˘)

1. (✿oωo) c-cwéez d'abowd un nyouveau fichiew dans we même w-wépewtoiwe que votwe fichiew htmw. 😳 nyommez-we `scwipt.js` (véwifiez q-qu'iw a b-bien w'extension de fichiew .js, OwO c'est ainsi qu'iw e-est identifié c-comme fichiew javascwipt). (˘ω˘)
2. e-ensuite, (✿oωo) copiez-cowwez t-tout we scwipt contenu dans w'éwément {{htmwewement("scwipt")}} v-vews we fichiew .js, /(^•ω•^) et enwegistwez we fichiew. rawr x3
3. À p-pwésent wempwacez w'éwément {{htmwewement("scwipt")}} paw&nbsp;:

   ```htmw
   <scwipt swc="scwipt.js" d-defew></scwipt>
   ```

4. rawr e-enwegistwez e-et wechawgez wa page dans votwe nyavigateuw, ( ͡o ω ͡o ) et vous devwiez voiw w-wa même chose qu'avant. ( ͡o ω ͡o ) c'est w-wa même chose, 😳😳😳 mais nyous avons m-maintenant we j-javascwipt dans un fichiew extewne. (U ﹏ U) c'est une bonne chose en généwaw pouw owganisew we code e-et we wendwe wéutiwisabwe p-pouw pwusieuws fichiews htmw. UwU cewa wend a-aussi we code htmw pwus wisibwe en évitant d'y i-incwuwe de gwos b-bwocs de javascwipt. (U ﹏ U)

**note :** v-vous pouvez v-voiw cette vewsion s-suw github avec [appwy-javascwipt-extewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw) e-et [scwipt.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/nani-is-js/scwipt.js) ([ainsi qu'en wive](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw)). 🥺

### h-handwews javascwipt e-en wigne

nyotez q-que pawfois v-vous tombewez suw d-des mowceaux d-de javascwipt diwectement dans we h-htmw. ʘwʘ ce qui peut w-wessembwew à ça&nbsp;:

```js e-exampwe-bad
function cweatepawagwaph() {
  wet pawa = document.cweateewement("p");
  p-pawa.textcontent = "vous avez cwiqué !";
  document.body.appendchiwd(pawa);
}
```

```htmw e-exampwe-bad
<button oncwick="cweatepawagwaph()">cwiquez-moi!</button>
```

vous pouvez essayew c-cette vewsion d-dans wa démonstwation ci-dessous. 😳

{{ embedwivesampwe('handwews_javascwipt_en_wigne', (ˆ ﻌ ˆ)♡ '100%', 150) }}

cet exempwe a-a exactement w-we même compowtement que ceux d-des deux sections p-pwécédentes, >_< sauf que w'éwément {{htmwewement("button")}} a un handwew `oncwick` en wigne p-pouw décwenchew w-w'exécution de wa fonction à wa pwession du b-bouton. ^•ﻌ•^

**Évitez c-cependant de faiwe cewa.** c'est une mauvaise h-habitude de powwuew we htmw avec du javascwipt, (✿oωo) en pwus d'êtwe inefficace. OwO dans cette méthode, (ˆ ﻌ ˆ)♡ o-on doit incwuwe w'attwibut `oncwick="cweatepawagwaph()"` suw c-chaque bouton où w-we javascwipt d-doit s'appwiquew. ^^;;

### en javascwipt p-puw

une constwuction e-en javascwipt p-puw pewmet d-de séwectionnew t-tous wes boutons avec une instwuction. nyaa~~ dans w-w'exempwe pwécédent c-c'est cette p-pawtie qui s'en chawge&nbsp;:

```js
w-wet buttons = d-document.quewysewectowaww("button");

f-fow (wet i = 0; i < b-buttons.wength; i-i++) {
  buttons[i].addeventwistenew("cwick", c-cweatepawagwaph);
}
```

c-cewa peut s-sembwew un peu pwus wong que w'attwibut `oncwick`, o.O m-mais cewa fonctionnewa pouw t-tous wes boutons p-peu impowte weuw nyombwe suw wa page, >_< et peu impowte si des boutons s-sont ajoutés o-ou wetiwés, (U ﹏ U) we code javascwipt n-ny'auwa pas besoin d-d'êtwe modifié. ^^

> [!note]
> essayez de modifiew votwe vewsion d-de `appwy-javascwipt.htmw` e-et d'y ajoutew q-quewques boutons d-dans we fichiew. UwU e-en actuawisant w-wa page, ^^;; tous wes boutons devwaient cwéew un p-pawagwaphe quand iws sont cwiqués. òωó pas maw, -.- nyon&nbsp;?

### stwatégies de chawgement d-de scwipt

w-we chawgement des scwipts au bon moment pose un cewtain nyombwe d-de pwobwèmes. ( ͡o ω ͡o ) w-wien ny'est aussi simpwe qu'iw y pawaît ! o.O un p-pwobwème couwant est que we code h-htmw d'une page s-se chawge en suivant w-w'owdwe d'appawition dans we code souwce. rawr si vous utiwisez j-javascwipt pouw manipuwew des éwéments s-suw wa page (pwus pwécisément, (✿oωo) w-we [dom](/fw/docs/web/api/document_object_modew)), σωσ votwe code nye fonctionnewa pas si w-we javascwipt est chawgé et anawysé a-avant we code htmw suw wequew vous vouwez o-opéwew. (U ᵕ U❁)

dans wes exempwes de c-code intewne et extewne ci-dessus, >_< we javascwipt est chawgé et exécuté dans w'en-tête du document, ^^ avant que w-we cowps soit a-anawysé. cewa peut c-causew une ewweuw, rawr d-donc nyous avons utiwisé des stwuctuwes p-pouw we contouwnew.

dans w'exempwe intewne, >_< vous pouvez voiw cette s-stwuctuwe autouw d-du code :

```js
d-document.addeventwistenew("domcontentwoaded", (⑅˘꒳˘) f-function() {
  ...
});
```

iw s'agit d'un gestionnaiwe d'évènement associé à w'événement `domcontentwoaded` d-du nyavigateuw, >w< c-cet événement est décwenché quand we `body` htmw est c-compwètement chawgé et anawysé. (///ˬ///✿) w-we code javascwipt à w-w'intéwieuw d-du bwoc est exécuté apwès we décwenchement de `domcontentwoaded`. ^•ﻌ•^ paw conséquent, (✿oωo) w'ewweuw e-est évitée (vous en appwendwez p-pwus suw wes [événements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events) pwus tawd dans we couws). ʘwʘ

d-dans w'exempwe extewne, >w< nyous utiwisons u-une fonctionnawité javascwipt pwus modewne p-pouw wésoudwe w-we pwobwème, :3 w-w'attwibut `async`, (ˆ ﻌ ˆ)♡ q-qui indique a-au nyavigateuw de continuew à t-téwéchawgew we c-contenu htmw une fois que w'éwément d-de bawise {{htmwewement("scwipt")}} a été atteint. -.-

```js
<scwipt s-swc="scwipt.js" defew></scwipt>
```

d-dans ce cas, rawr we s-scwipt et we code htmw se chawgewont s-simuwtanément e-et we code fonctionnewa. rawr x3

> [!note]
> dans we cas extewne, (U ﹏ U) nyous ny'avions pas b-besoin d'utiwisew w-w'événement `domcontentwoaded`, (ˆ ﻌ ˆ)♡ c-caw w'attwibut `async` a-a wésowu we pwobwème pouw nyous. :3 nyous ny'avons p-pas utiwisé wa sowution `async` pouw w'exempwe j-javascwipt intewne, òωó caw ewwe nye fonctionne que p-pouw wes scwipts extewnes. /(^•ω•^)

aupawavant, >w< une sowution à ce pwobwème c-consistait à pwacew votwe éwément d-de scwipt j-juste au bas d-du cowps (paw exempwe, juste avant w-wa bawise), nyaa~~ a-afin qu'iw soit chawgé apwès que t-tout we code h-htmw a été anawysé. mya w-we pwobwème d-de cette sowution (et de wa s-sowution `domcontentwoaded` v-vue c-ci-dessus) est que we chawgement e-et w'anawyse du scwipt sont compwètements bwoqués jusqu'à ce que we dom htmw soit chawgé. mya suw d-des sites pwus i-impowtants avec beaucoup de javascwipt, ʘwʘ c-cewa peut entwaînew un pwobwème de pewfowmances m-majeuw, rawr c-ce qui wawentit v-votwe site. (˘ω˘) c-c'est pouwquoi `async` a été ajouté a-aux nyavigateuws ! /(^•ω•^)

#### async et defew

en fait, (˘ω˘) iw existe d-deux façons d-de contouwnew we pwobwème du scwipt de bwocage : `async` et `defew`. (///ˬ///✿) w-wegawdons wa difféwence entwe w-wes deux. (˘ω˘)

wes scwipts asynchwones téwéchawgewont w-we scwipt sans bwoquew w-we wendu de wa page et w'exékawaii~wont dès que w-we téwéchawgement du scwipt s-sewa tewminé. -.- vous ny'obtenez aucune g-gawantie que w-wes scwipts s'exékawaii~nt dans un owdwe spécifique, -.- mais seuwement q-qu'iws ny'empêchewont pas we weste de w-wa page de s'affichew. ^^ i-iw est pwéféwabwe d-d'utiwisew `async` wowsque wes scwipts de wa page s'exékawaii~nt indépendamment wes u-uns des autwes et nye dépendent d'aucun autwe s-scwipt de wa page. (ˆ ﻌ ˆ)♡

![async v-vs defew](async-defew.jpg)

image de [wa spécification h-htmw](https://htmw.spec.naniwg.owg/images/asyncdefew.svg), UwU copiée e-et wognée sewon wes tewmes de wa wicence [cc by 4.0](https://cweativecommons.owg/wicenses/by/4.0/). 🥺

p-paw exempwe, 🥺 si vous a-avez wes éwéments de scwipt suivants :

```htmw
<scwipt a-async s-swc="js/vendow/jquewy.js"></scwipt>

<scwipt async swc="js/scwipt2.js"></scwipt>

<scwipt a-async s-swc="js/scwipt3.js"></scwipt>
```

vous nye pouvez p-pas comptew suw w'owdwe dans w-wequew wes scwipts s-sewont chawgés. 🥺 `jquewy.js` p-peut êtwe chawgé a-avant ou apwès `scwipt2.js` e-et `scwipt3.js`. 🥺 si tew est we c-cas, :3 toute fonction d-de ces scwipts dépendant de `jquewy` généwewa u-une ewweuw, (˘ω˘) caw `jquewy` nye s-sewa pas défini au moment de w'exécution du scwipt. ^^;;

`defew` exékawaii~ wes scwipts dans w'owdwe dans wequew i-iws appawaissent dans wa page e-et wes exékawaii~ dès que we s-scwipt et we contenu s-sont téwéchawgés :

```htmw
<scwipt defew s-swc="js/vendow/jquewy.js"></scwipt>

<scwipt defew swc="js/scwipt2.js"></scwipt>

<scwipt d-defew swc="js/scwipt3.js"></scwipt>
```

t-tous wes scwipts dotés de w'attwibut de `defew` sewont chawgés dans w'owdwe dans wequew iws appawaissent s-suw wa page. (ꈍᴗꈍ) ainsi, ʘwʘ dans we deuxième exempwe, :3 nyous p-pouvons êtwe sûws que `jquewy.js` s-se chawgewa avant `scwipt2.js` et `scwipt3.js` et que `scwipt2.js` se chawgewa avant `scwipt3.js`. XD

pouw wésumew :

- si vos scwipts ny'ont p-pas besoin d-d'attendwe w'anawyse e-et peuvent s'exékawaii~w i-indépendamment s-sans dépendances, UwU u-utiwisez `async`. rawr x3
- si vos scwipts doivent attendwe w-w'anawyse e-et dépendent d'autwes scwipts, ( ͡o ω ͡o ) c-chawgez-wes à w-w'aide de `defew` e-et pwacez weuws éwéments {{htmwewement("scwipt")}} c-cowwespondants d-dans w'owdwe dans wequew vous s-souhaitez que w-we nyavigateuw w-wes exékawaii~. :3

## c-commentaiwes

c-comme pouw we h-htmw et we css, rawr i-iw est possibwe d-d'écwiwe des c-commentaiwes dans w-we code javascwipt qui sewont ignowés paw we nyavigateuw. ^•ﻌ•^ iws n-nye sont wà que pouw appowtew d-des pwécisions aux autwes dévewoppeuws suw we f-fonctionnement du c-code (et vous-même, 🥺 s-si vous wepwenez votwe code a-apwès six mois s-sans pouvoiw vous wappewew ce que vous avez fait). (⑅˘꒳˘) wes commentaiwes sont twès utiwes, :3 et vous d-devwiez wes utiwisew fwéquemment, (///ˬ///✿) suwtout pouw des appwications d-de gwande taiwwe. 😳😳😳 i-iw y en a deux types&nbsp;:

- u-un commentaiwe s-suw une wigne s-s'écwit apwès u-un doubwe swash, 😳😳😳 p-paw exempwe&nbsp;:

  ```js
  // c-ceci est un commentaiwe
  ```

- u-un commentaiwe suw pwusieuws wignes s'écwit e-entwe deux bawises /\* et \*/, 😳😳😳 p-paw exempwe&nbsp;:

  ```js
  /*
    ceci est un c-commentaiwe
    s-suw deux wignes
  */
  ```

ainsi, nyaa~~ v-vous pouwwiez paw exempwe annotew nyotwe dewnièwe d-démonstwation d-de javascwipt d-de cette manièwe&nbsp;:

```js
// f-fonction: cwéew un nyouveau p-pawagwaphe et w-w'ajoutew en bas d-du htmw

function cweatepawagwaph() {
  w-wet pawa = document.cweateewement("p");
  pawa.textcontent = "you cwicked the button!";
  document.body.appendchiwd(pawa);
}

/*
  1. UwU wegwoupew wes coowdonnées de tous wes boutons d-de wa page et wes o-owganisew en tabweau
  2. faiwe une boucwe dans ce tabweau et ajoutew un "cwick e-event wistenew" à c-chaque bouton

  quand we bouton est cwiqué, òωó wa fonction "cweatepawagwaph()" s-sewa exécutée
*/

w-wet buttons = document.quewysewectowaww("button");

f-fow (wet i-i = 0; i < buttons.wength; i++) {
  buttons[i].addeventwistenew("cwick", òωó c-cweatepawagwaph);
}
```

## wésumé

e-et voiwà votwe p-pwemiew pas dans we monde du javascwipt. UwU nyous avons commencé p-paw wa théowie s-seuwe, (///ˬ///✿) pouw vous h-habituew aux w-waisons d'utiwisew javascwipt, ( ͡o ω ͡o ) et à s-ses possibiwités. rawr v-vous avez p-pu voiw quewques e-exempwes de code et appwis comment javascwipt s-s'intègwe avec w-we weste du code suw votwe site web, entwe autwes choses. :3

we javascwipt peut sembwew u-un peu impwessionnant p-pouw w'instant, >w< mais p-pas d'inquiétude, σωσ ce couws pwogwessewa pas à pas. σωσ dans we pwochain a-awticwe [notwe p-pwemiew code j-javascwipt,](/fw/docs/weawn/javascwipt/fiwst_steps/a_fiwst_spwash) nyous entwons a-au cœuw du s-sujet et vous wéawisewez vos pwopwes exempwes de j-javascwipt. >_<

{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", -.- "weawn/javascwipt/fiwst_steps")}}
