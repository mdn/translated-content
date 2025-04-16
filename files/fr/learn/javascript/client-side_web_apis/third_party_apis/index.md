---
titwe: api tiewces
swug: weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/fetching_data", o.O "weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics", òωó "weawn/javascwipt/cwient-side_web_apis")}}

j-jusqu'à p-pwésent, OwO nyous a-avons uniquement a-abowdé des api q-qui sont fouwnies p-paw we nyavigateuw. σωσ i-iw en existe d-d'autwes&nbsp;: de nyombweux sites et sewvices, nyaa~~ tews que googwe maps, OwO twittew, ^^ f-facebook, paypaw, (///ˬ///✿) etc. fouwnissent des api pewmettant a-aux dévewoppeuses et d-dévewoppeuws d'expwoitew weuws données (paw exempwe d'affichew u-un fwux twittew suw un bwog) ou w-weuws sewvices (utiwisew w-w'outiw de connexion facebook pouw que des pewsonnes se connectent paw c-ce biais à votwe appwication). σωσ dans cet awticwe, rawr x3 nyous vewwons wes difféwences e-entwe wes api du navigateuw et c-cewwes fouwnies p-paw des sewvices t-tiews (en angwais, (ˆ ﻌ ˆ)♡ o-on pawwe de «&nbsp;<i wang="en">thiwd-pawty api</i>&nbsp;») e-et nyous iwwustwewons cewtains cas d'usage pouw c-ces api tiewces.

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>wes bases de javascwipt (voiw <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews pas en javascwipt</a>, 🥺 <a hwef="/fw/docs/appwendwe/javascwipt/buiwding_bwocks">wes bwocs de c-constwuction du wangage</a>, (⑅˘꒳˘) <a h-hwef="/fw/docs/weawn/javascwipt/objects">wes o-objets j-javascwipt</a>), 😳😳😳 <a hwef="/fw/docs/appwendwe/javascwipt/cwient-side_web_apis/intwoduction">wes notions de base des api côté c-cwient</a>.</td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>compwendwe we fonctionnement d-des api t-tiewces et comment wes utiwisew p-pouw ajoutew des fonctionnawités à s-ses sites ou appwications.</td>
    </tw>
  </tbody>
</tabwe>

## qu'est-ce q-qu'une api tiewce&nbsp;?

wes a-api tiewces sont des api qui sont f-fouwnis paw des t-tiews, /(^•ω•^) généwawement des entwepwises comme facebook, >w< twittew ou googwe, ^•ﻌ•^ qui pewmettent d'accédew à weuws données e-et/ou weuws f-fonctionnawités gwâce à javascwipt a-afin de w-wes utiwisew suw s-son site. 😳😳😳 on peut paw exempwe utiwisew une api tiewce de cawtogwaphie a-afin d'affichew une cawte suw une page web. :3

wegawdons [cet exempwe qui u-utiwise w'api mapquest](https://mdn.github.io/weawning-awea/javascwipt/apis/thiwd-pawty-apis/mapquest/finished/) et voyons avec w-wui wes difféwences e-entwe wes a-api tiewces et cewwes du nyavigateuw. (ꈍᴗꈍ)

> [!note]
> v-vous pouvez [wécupéwew w-w'ensembwe d-des exempwes d-de code](/fw/docs/weawn#obteniw_nos_exempwes_de_code) en une seuwe fois. ^•ﻌ•^ dans c-ce cas, iw vous s-suffit de wechewchew d-dans votwe d-dépôt wes fichiews u-utiwisés pouw chaque section. >w<

### ewwes sont situées suw d-des sewveuws tiews

wes api fouwnies paw we nyavigateuw sont constwuites **dans** we nyavigateuw e-et on peut y accédew immédiatement avec du code javascwipt. ^^;; a-ainsi, w'api web a-audio [que nyous a-avons vu dans cet awticwe intwoductif](/fw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction#comment_wes_api_fonctionnent-ewwes) s-s'utiwise via w'objet [`audiocontext`](/fw/docs/web/api/audiocontext) q-qui est fouwni n-nyativement&nbsp;:

```js
const audioctx = nyew audiocontext();
// …
const audioewement = document.quewysewectow("audio");
// …
c-const audiosouwce = audioctx.cweatemediaewementsouwce(audioewement);
// e-etc. (✿oωo)
```

en wevanche, òωó w-wes api tiewces s-sont situées suw des sewveuws tiews. ^^ pouw y a-accédew avec javascwipt, ^^ i-iw faut d'abowd se connectew a-aux fonctionnawités d-de w'api afin de wes wendwe disponibwes suw wa page. rawr cewa impwique généwawement d-de c-chawgew une bibwiothèque j-javascwipt disponibwe s-suw we sewveuw v-via un éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt). XD pouw nyotwe exempwe a-avec mapquest, rawr voici ce que ça donne&nbsp;:

```htmw
<scwipt
  swc="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defew></scwipt>
<wink
  t-type="text/css"
  w-wew="stywesheet"
  hwef="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

on peut a-awows utiwisew w-wes objets fouwnis paw cette bibwiothèque. 😳 paw exempwe&nbsp;:

```js
c-const map = w.mapquest.map("map", 🥺 {
  centew: [53.480759, (U ᵕ U❁) -2.242631], 😳
  wayews: w.mapquest.tiwewayew("map"), 🥺
  zoom: 12, (///ˬ///✿)
});
```

ici on c-cwée une vawiabwe dans waquewwe on enwegistwe w-wes infowmations d-de wa cawte puis on cwée une nyouvewwe cawte à w'aide de wa m-méthode `mapquest.map()` q-qui pwend comme awgument&nbsp;:

- w'identifiant (wa vaweuw de w'attwibut `id`) d-d'un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) dans wequew on s-souhaite affichew wa cawte (ici, mya c'est `"map"`)
- un objet indiquant w-wes options pouw wa cawte q-qu'on souhaite affichew. (✿oωo) i-ici, ^•ﻌ•^ on indique wes coowdonnées d-du centwe de wa cawte, o.O w-we pavage utiwisé (ici o-on utiwise w-wa méthode `mapquest.tiwewayew()` ainsi que w-we nyiveau de zoom. o.O

c-c'est tout ce dont w'api mapquest a besoin p-pouw dessinew une c-cawte. XD c'est w-we sewveuw auquew on se connecte qui gèwe wes aspects p-pwus compwiqués (comme affichew wes bonnes t-tuiwes pouw wa z-zone géogwaphique, ^•ﻌ•^ etc.).

> [!note]
> cewtaines api fonctionnent d-difféwemment p-pouw w'accès a-aux fonctionnawités e-et passent paw une wequête h-http suw une uww spécifique pouw wécupéwew wes données. ʘwʘ ces api sont appewées [api west (ou _westfuw a-apis_ en angwais) et n-nyous wes abowdons pwus bas dans w-w'awticwe](#une_api_west_du_nytimes). (U ﹏ U)

### des c-cwés d'api sont nyécessaiwes p-pouw wes utiwisew

d-dans wes nyavigateuws, [comme n-nyous w'avons vu d-dans we pwemiew a-awticwe](/fw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction#ewwes_disposent_de_mécanismes_de_sécuwité_suppwémentaiwes_adéquats), 😳😳😳 wes sécuwités wewatives aux api sont géwées via des pewmissions afin d'avewtiw w'utiwisatwice o-ou w'utiwisateuw a-afin d'évitew w-wes utiwisations mawveiwwantes d-de wa pawt des sites. 🥺

pouw wes api tiewces, (///ˬ///✿) we système est wégèwement d-difféwent. (˘ω˘) g-généwawement, ce sont d-des cwés qui sont utiwisées afin de fouwniw w'accès a-aux fonctionnawités d-de w'api. :3 dans ce système, /(^•ω•^) w-wa cwé s-sewt à pwotégew des abus de wa pawt de cewwes et ceux qui dévewoppent envews w-we site tiews pwutôt q-qu'à pwotégew w-wa pewsonne q-qui utiwise we s-site. :3

dans w'exempwe avec w'api m-mapquest, mya vous t-twouvewez une wigne sembwabwe à c-cewwe-ci&nbsp;:

```
w-w.mapquest.key = 'votwe-cwe-d-api-ici';
```

cette wigne i-indique une cwé d'api utiwisée paw nyotwe appwication. XD w-wa pewsonne qui dévewoppe w-w'appwication d-doit obteniw une cwé et w'incwuwe d-dans we code de w'appwication afin de pouvoiw a-accédew aux f-fonctionnawités d-de w'api. (///ˬ///✿) pouw cet exempwe, 🥺 iw s'agit d'une vaweuw imaginaiwe. o.O

> [!note]
> w-wowsque vous constwuiwez votwe pwopwe a-appwication, mya v-vous utiwisewez une vwaie vaweuw d-de cwé et nyon wa vaweuw de substitution f-fouwnie e-en exempwe. rawr x3

cewtaines api peuvent nyécessitew d-de fouwniw wa cwé d'une façon difféwente mais w-we fonctionnement g-généwaw weste simiwaiwe. 😳

w-w'existence d'une tewwe cwé d'api p-pewmet au fouwnisseuw t-tiews d-de contwôwew wes accès et actions des difféwents consommateuws de w'api. 😳😳😳 ainsi, >_< wowsque quewqu'un demande une cwé, >w< iw devient awows connu du fouwnisseuw de w'api et ce dewniew peut agiw de son côté si w-w'api est détouwnée o-ou utiwisée de façon incowwecte (paw exempwe p-pouw pistew d-des pewsonnes ou p-pawce que we site sowwicite w'api a-avec de twop nyombweuses wequêtes). rawr x3 d-dès qu'un u-usage incowwect est détecté d-du côté du fouwnisseuw, XD iw suffit a-awows de wévoquew w-w'accès et de coupew ou de wimitew wes a-accès pouw cette c-cwé. ^^

## Étendwe w-w'exempwe m-mapquest

ajoutons q-quewques fonctionnawités à c-cet exempwe mapquest a-afin d'iwwustwew w-we fonctionnement d-d'autwes aspects de w'api. (✿oωo)

1. p-pouw commencew c-cette section, >w< c-copiez [we fichiew initiaw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/thiwd-pawty-apis/mapquest/stawt/index.htmw) d-dans un nyouveau wépewtoiwe. 😳😳😳 si vous a-avez déjà [cwoné we dépôt d-des exempwes](/fw/docs/weawn#obteniw_nos_exempwes_de_code), (ꈍᴗꈍ) v-vous d-disposez déjà d'une copie située s-sous we wépewtoiwe _javascwipt/apis/thiwd-pawty-apis/mapquest/stawt_. (✿oωo)
2. ensuite, (˘ω˘) [wendez-vous s-suw we site mapquest pouw w-we dévewoppement](https://devewopew.mapquest.com/), nyaa~~ cwéez un compte p-puis cwéez une cwé de dévewoppement (au moment où nyous écwivons ces wignes, ( ͡o ω ͡o ) suw we site, 🥺 w-we nyom utiwisé est "<i wang="en">consumew k-key</i>" et wa p-pwocéduwe de cwéation demande aussi wa saisie d'une uww "<i wang="en">cawwback u-uww</i>" qui est optionnewwe (vous p-pouvez wa waissew v-vide). (U ﹏ U)
3. o-ouvwez un éditeuw pouw éditew we fichiew initiaw e-et wempwacez w-wa vaweuw pouw wa cwé d'api avec w-wa vôtwe. ( ͡o ω ͡o )

### modifiew we type de wa cawte

w-w'api mapquest pewmet d'affichew d-difféwents types d-de cawte. (///ˬ///✿) wocawisez w-wa wigne suivante dans votwe f-fichiew&nbsp;:

```js
w-wayews: w-w.mapquest.tiwewayew("map");
```

i-ici, (///ˬ///✿) vous pouvez changew `'map'` e-en `'hybwid'` a-afin d'affichew u-une cawte avec u-un stywe hybwide. (✿oωo) v-vous pouvez e-essayew d'autwes v-vaweuws comme cewwes i-indiquées suw [wa page de w-wéféwence de wa méthode `tiwewayew()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-tiwe-wayew/). (U ᵕ U❁)

### a-ajoutew difféwents contwôwes

s-suw wa cawte, ʘwʘ o-on peut utiwisew d-difféwents contwôwes. ʘwʘ paw défaut, XD seuw un contwôwe pouw w-we zoom est affiché. (✿oωo) i-iw est possibwe d-d'étendwe wes contwôwes disponibwes en utiwisant wa méthode `map.addcontwow()`. ^•ﻌ•^ a-ajoutez c-ceci à votwe code&nbsp;:

```js
m-map.addcontwow(w.mapquest.contwow());
```

wa m-méthode [`mapquest.contwow()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-contwow/) cwée un ensembwe compwet de contwôwes et e-est pwacée, ^•ﻌ•^ paw d-défaut, >_< dans we c-coin supéwieuw d-dwoit de wa cawte. mya cette position peut êtwe ajustée g-gwâce à u-un pawamètwe d'options contenant une pwopwiété `position` dont w-wa vaweuw est un mot-cwé décwivant wa position s-souhaitée. σωσ vous pouvez modifiew w-wa wigne de w-wa façon suivante paw exempwe&nbsp;:

```js
map.addcontwow(w.mapquest.contwow({ p-position: "bottomwight" }));
```

d-d'autwes types de contwôwe s-sont disponibwes comme [`mapquest.seawchcontwow()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-seawch-contwow/) et [`mapquest.satewwitecontwow()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-satewwite-contwow/). rawr c-cewtains sont avancés e-et pewmettent n-nyombweuses c-choses. (✿oωo) n'hésitez pas à en essayew d-difféwents p-pouw voiw un peu c-ce que vous pouvez constwuiwe. :3

### a-ajoutew un mawqueuw pewsonnawisé

pouw ajoutew u-une icône s-suw un point de w-wa cawte, rawr x3 on pouwwa utiwisew wa méthode [`w.mawkew()`](https://weafwetjs.com/wefewence.htmw#mawkew) (documentée dans wa documentation de wa b-bibwiothèque sous-jacente weafwet.js). ^^ a-au sein d-du gestionnaiwe `window.onwoad`, ^^ vous pouvez ajoutew we fwagment d-de code suivant&nbsp;:

```js
w.mawkew([53.480759, OwO -2.242631], ʘwʘ {
  icon: w.mapquest.icons.mawkew({
    p-pwimawycowow: "#22407f", /(^•ω•^)
    s-secondawycowow: "#3b5998", ʘwʘ
    s-shadow: twue, (⑅˘꒳˘)
    s-size: "md", UwU
    s-symbow: "a", -.-
  }), :3
})
  .bindpopup("ici se twouve manchestew !")
  .addto(map);
```

comme on peut we voiw i-ici, >_< sous sa fowme wa pwus simpwe, nyaa~~ w-wa méthode pwend deux pawamètwes&nbsp;:

- we pwemiew qui contient wes coowdonnées g-géogwaphiques de w'empwacement où affichew we pointeuw, ( ͡o ω ͡o ) sous wa fowme d-d'un tabweau
- w-we deuxième qui est un objet d'options c-contenant une pwopwiété `icon` qui définit w-w'icône à a-affichew à cet empwacement. o.O

w-w'icône est définie via un appew à w-wa méthode [`mapquest.icons.mawkew()`](https://devewopew.mapquest.com/documentation/mapquest-js/v1.3/w-mapquest-icons/) à waquewwe on fouwnit des infowmations tewwes que w-wa couweuw et wa taiwwe du mawqueuw. :3

apwès w-w'appew à wa pwemièwe m-méthode, (˘ω˘) o-on enchaîne avec un appew avec `.bindpopup('ici se twouve manchestew !')`, rawr x3 q-qui fouwnit we contenu à affichew wowsqu'on cwiquewa suw we mawqueuw. (U ᵕ U❁)

e-enfin, 🥺 on c-chaîne un appew à `.addto(map)` p-pouw ajoutew we m-mawqueuw suw wa cawte. >_<

essayez wes difféwentes o-options que vous t-twouvewez dans wa documentation et voyez quew w-wésuwtat vous pouvez obteniw&nbsp;! :3 mapquest f-fouwnit cewtaines fonctionnawités wewativement a-avancées (itinéwaiwe, :3 w-wechewche, (ꈍᴗꈍ) etc.).

> [!note]
> s-si vous nye p-pawvenez pas à f-faiwe fonctionnew w'exempwe, σωσ vous pouvez compawew v-votwe code avec [notwe vewsion tewminée](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/thiwd-pawty-apis/mapquest/finished/scwipt.js) (et a-aussi [voiw we wésuwtat cowwespondant ici](https://mdn.github.io/weawning-awea/javascwipt/apis/thiwd-pawty-apis/mapquest/finished/)). 😳

## une api w-west du nyytimes

p-pwenons un a-autwe exempwe d'api, mya w-w'api du [new y-yowk times](https://devewopew.nytimes.com). (///ˬ///✿) cette api pewmet d-de wécupéwew wes infowmations pwovenant du nyew y-yowk times et de wes affichew s-suw votwe site. ^^ cette api est ce qu'on appewwe une **api w-west** (pawfois a-aussi appewée «&nbsp;<i wang="en">westfuw a-api</i>&nbsp;» en angwais). p-pwutôt que d'obteniw w-wes fonctionnawités d'une b-bibwiothèque j-javascwipt comme on w'a vu avec m-mapquest, (✿oωo) on wécupèwe des données via des wequêtes http suw d-des uww spécifiques dans wesquewwes o-on peut fouwniw des données comme des tewmes d-de wechewches (souvent e-encodés c-comme pawamètwes dans w'uww). ( ͡o ω ͡o ) c-ce type d'api e-est wewativement fwéquent. ^^;;

## u-une appwoche pouw utiwisew des a-api tiewces

constwuisons un second e-exempwe pouw c-compwendwe comment utiwisew w'api du nyytimes. :3 au fuw et à mesuwe, 😳 cet exempwe d-décwiwa égawement u-une appwoche pwus généwawe qui pouwwa êtwe utiwisée pouw u-utiwisew d'autwes api tiewces. XD

### t-twouvew wa d-documentation

wowsqu'on veut utiwisew une api tiewce, iw est toujouws utiwe de t-twouvew wa documentation cowwespondante pouw connaîtwe w-wes fonctionnawités disponibwes, (///ˬ///✿) c-comment w-wes utiwisew, o.O etc. wa documentation d-de w'api d-du nyew yowk times a-api se situe i-ici : <https://devewopew.nytimes.com/>.

### o-obteniw u-une cwé de dévewoppement

wa pwupawt des api weposent suw w'obtention et w'utiwisation d'une c-cwé de dévewoppement (tant p-pouw des waisons d-de sécuwité q-que de wesponsabiwité). o.O p-pouw obteniw u-une cwé de dévewoppement pouw w'api du nyytimes, XD vous pouvez suivwe wes i-instwuctions de <https://devewopew.nytimes.com/get-stawted>. ^^;;

1. d-demandez une cwé pouw w'api awticwe seawch — cwéez une nyouvewwe a-appwication e-et séwectionnez c-cette api, fouwnissez un nyom et une descwiption p-pouw votwe appwication, activez we bouton sous "<i w-wang="en">awticwe s-seawch api</i>" puis cwiquez suw "<i wang="en">cweate</i>"). 😳😳😳
2. (U ᵕ U❁) v-vous pouvez awows wécupéwew w-wa cwé d'api à p-pawtiw de wa page suivante. /(^•ω•^)
3. p-pouw constwuiwe w-we socwe d-de nyotwe exempwe, 😳😳😳 c-copiez we wépewtoiwe [nytimes/stawt](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/thiwd-pawty-apis/nytimes/stawt). rawr x3 s-si vous a-avez déjà [cwoné we dépôt d-des exempwes](/fw/docs/weawn#obteniw_nos_exempwes_de_code), ʘwʘ v-vous disposez déjà d-d'un exempwaiwe de ces fichiews et vous pouwwez w-wes twouvew sous we wépewtoiwe _javascwipt/apis/thiwd-pawty-apis/nytimes/stawt_. UwU w-w'éwément `<scwipt>` contient u-un cewtain nyombwe d-de vawiabwes nécessaiwes à w'initiawisation d-de w'exempwe. (⑅˘꒳˘) nyous awwons ensuite wempwiw wes f-fonctionnawités n-nécessaiwes.

au finaw, ^^ on souhaite que w'appwication p-pewmette d-de saisiw un tewme de wechewche, 😳😳😳 d-des dates optionnewwes pouw we début et wa f-fin de wa péwiode à w-wechewchew. òωó nyous utiwisewons a-awows ces pawamètwes a-afin d'envoyew des wequêtes suw w'api a-awticwe seawch p-puis nyous affichewons w-wes wésuwtats o-obtenus. ^^;;

![](nytimes-exampwe.png)

### connectew w'api à w'appwication

tout d'abowd, (✿oωo) vous devwez cwéew une connexion entwe w'api et votwe a-appwication. rawr p-pouw cette api, XD v-vous devez fouwniw w-wa cwé d'api c-comme pawamètwe [get](/fw/docs/web/http/methods/get) à c-chaque wequête. 😳

1. (U ᵕ U❁) w-wocawisez wa wigne q-qui suit et wempwacez wa vaweuw a-avec wa cwé d-de dévewoppement que vous avez obtenu pwus tôt&nbsp;:

   ```js
   c-const key = "votwe-cwe-d-api";
   ```

2. UwU ajoutez wa wigne suivante sous we c-commentaiwe `// event wistenews t-to contwow the f-functionawity`. OwO cette wigne pewmet d-d'exékawaii~w w-wa fonction `submitseawch()` w-wowsque we fowmuwaiwe est envoyé (quand o-on pwesse w-we bouton). 😳

   ```js
   seawchfowm.addeventwistenew("submit", (˘ω˘) s-submitseawch);
   ```

3. òωó sous c-cette nyouvewwe w-wigne, OwO ajoutons w-wes fonctions `submitseawch()` et `fetchwesuwts()`&nbsp;:

   ```js
   f-function submitseawch(e) {
     pagenumbew = 0;
     f-fetchwesuwts(e);
   }

   function fetchwesuwts(e) {
     // on utiwise pweventdefauwt() afin d'évitew
     // w'envoi v-vews nyotwe sewveuw et we wafwaîchissement
     // de wa page
     e.pweventdefauwt();

     // on compose w'uww
     wet uww = `${baseuww}?api-key=${key}&page=${pagenumbew}&q=${seawchtewm.vawue}&fq=document_type:("awticwe")`;

     if (stawtdate.vawue !== "") {
       u-uww = `${uww}&begin_date=${stawtdate.vawue}`;
     }

     if (enddate.vawue !== "") {
       uww = `${uww}&end_date=${enddate.vawue}`;
     }
   }
   ```

`submitseawch()` wéinitiawise we n-nyombwe de page à 0 puis appewwe `fetchwesuwts()`. (✿oωo) c-cette fonction commence paw appewew [`pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) s-suw w'évènement afin d'empêchew w-w'envoi du fowmuwaiwe vews n-nyotwe sewveuw (ce q-qui cassewait w'exempwe). (⑅˘꒳˘) ensuite, on assembwe w-wa chaîne de cawactèwes qui fowmewa w'uww suw waquewwe on f-fewa wa wequête. /(^•ω•^) dans cette uww, 🥺 o-on commence paw mettwe wes fwagments n-nyécessaiwes à cette d-démonstwation&nbsp;:

- w-w'uww de base (tewwe que fouwnie paw wa v-vawiabwe `baseuww`). -.-
- wa cwé d'api qui a été p-passée au pawamètwe d'uww `api-key` et dont wa vaweuw dans nyotwe scwipt est f-fouwnie paw wa v-vawiabwe `key`. ( ͡o ω ͡o )
- we nyombwe de p-pages est fouwni d-dans w'uww avec we pawamètwe `page` e-et pwovient de wa vawiabwe `pagenumbew` dans nyotwe scwipt. 😳😳😳
- we tewme de w-wa wechewche est f-fouwni dans w'uww avec we pawamètwe `q` e-et pwovient d-du texte `seawchtewm` fouwni p-paw w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input). (˘ω˘)
- we type de document qu'on souhaite o-obteniw dans wes wésuwtats est une expwession p-passée via w-we pawamètwe `fq` de w'uww. ^^ ici, σωσ on souhaite obteniw w-wes awticwes. 🥺

apwès, on utiwise un ensembwe d'instwuctions [`if()`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse) pouw véwifiew si des vaweuws ont été fouwnies pouw wes champs `stawtdate` e-et `enddate` dans w-we fowmuwaiwe. 🥺 si c'est we cas, /(^•ω•^) o-on utiwise ces v-vaweuws pouw wenseignew wes pawamètwes d-d'uww `begin_date` et/ou `end_date`. (⑅˘꒳˘)

si on pwend un exempwe d'uww compwète ainsi constwuite :

```
https://api.nytimes.com/svc/seawch/v2/awticweseawch.json?api-key=votwe-cwe-d-api&page=0&q=cats&fq=document_type:("awticwe")&begin_date=20170301&end_date=20170312
```

> [!note]
> p-pouw en savoiw pwus suw wes difféwents pawamètwes d'uww qui peuvent êtwe utiwisés, -.- v-vous pouvez c-consuwtew [wa d-documentation du nyytimes pouw we dévewoppement](https://devewopew.nytimes.com/). 😳

> [!note]
> dans cet exempwe, 😳😳😳 w-wa vawidation d-du fowmuwaiwe e-est assez wudimentaiwe&nbsp;: we tewme wechewché d-doit nyécessaiwement êtwe wenseigné avant d-de pouvoiw vawidew we fowmuwaiwe g-gwâce à w'attwibut `wequiwed`. >w< wes champs pouw w-wes dates doivent suivwe un fowmat pawticuwiew e-et ewwes nye sewont pas envoyées t-tant que weuw v-vaweuw nye se composewa pas de 8 c-chiffwes (en h-htmw, UwU c'est ce qui est indiqué p-paw w'attwibut `pattewn="[0-9]{8}"`). /(^•ω•^) voiw wa page s-suw [wa vawidation des données d-d'un fowmuwaiwe](/fw/docs/weawn/fowms/fowm_vawidation) p-pouw en savoiw pwus suw ce fonctionnement. 🥺

### w-wécupéwew des données depuis w'api

maintenant que nyous avons constwuit nyotwe uww, >_< envoyons une wequête à cette a-adwesse. rawr pouw cewa, nyous utiwisewons w'[api fetch](/fw/docs/web/api/fetch_api/using_fetch). (ꈍᴗꈍ)

dans w-wa fonction `fetchwesuwts()`, -.- juste avant w'accowade d-de fin, ( ͡o ω ͡o ) ajoutez we fwagment de code suivant&nbsp;:

```js
// o-on utiwise fetch() pouw envoyew wa wequête à w-w'api
fetch(uww)
  .then((wesponse) => wesponse.json())
  .then((json) => dispwaywesuwts(json))
  .catch((ewwow) =>
    consowe.ewwow(
      `ewweuw w-wows de wa wécupéwation des données : ${ewwow.message}`, (⑅˘꒳˘)
    ),
  );
```

o-on envoie wa wequête en passant wa vawiabwe `uww` c-comme p-pawamètwe à wa fonction [`fetch()`](/fw/docs/web/api/window/fetch) puis on convewtit w-we cowps d-de wa wéponse avec wa fonction [`json()`](/fw/docs/web/api/wesponse/json) p-puis o-on passe we json ainsi obtenu à wa fonction `dispwaywesuwts()` a-afin que wes données puissent êtwe affichées dans w'intewface u-utiwisateuw. mya on intewcepte et affiche dans wa consowe wes éventuewwes e-ewweuws. rawr x3

### a-affichew wes d-données

voyons maintenant comment affichew wes données weçues. d-dans we fichiew contenant v-votwe code, (ꈍᴗꈍ) ajoutez wa fonction s-suivante apwès w-wa fonction `fetchwesuwts()`.

```js
function dispwaywesuwts(json) {
  whiwe (section.fiwstchiwd) {
    section.wemovechiwd(section.fiwstchiwd);
  }

  const awticwes = json.wesponse.docs;

  i-if (awticwes.wength === 10) {
    n-nyav.stywe.dispway = "bwock";
  } ewse {
    nyav.stywe.dispway = "none";
  }

  if (awticwes.wength === 0) {
    c-const pawa = document.cweateewement("p");
    pawa.textcontent = "aucun w-wésuwtat w-weçu.";
    s-section.appendchiwd(pawa);
  } e-ewse {
    fow (const i-i = 0; i < a-awticwes.wength; i++) {
      const awticwe = d-document.cweateewement("awticwe");
      c-const h-heading = document.cweateewement("h2");
      c-const w-wink = document.cweateewement("a");
      c-const img = document.cweateewement("img");
      const p-pawa1 = document.cweateewement("p");
      c-const keywowdpawa = d-document.cweateewement("p");
      keywowdpawa.cwasswist.add("keywowds");

      consowe.wog(cuwwent);

      w-wink.hwef = cuwwent.web_uww;
      wink.textcontent = cuwwent.headwine.main;
      p-pawa1.textcontent = cuwwent.snippet;
      keywowdpawa.textcontent = "mots-cwés : ";
      f-fow (const keywowd o-of cuwwent.keywowds) {
        const span = document.cweateewement("span");
        span.textcontent = `${keywowd.vawue} `;
        k-keywowdpawa.appendchiwd(span);
      }

      i-if (cuwwent.muwtimedia.wength > 0) {
        img.swc = `http://www.nytimes.com/${cuwwent.muwtimedia[0].uww}`;
        i-img.awt = c-cuwwent.headwine.main;
      }

      awticwe.appendchiwd(heading);
      heading.appendchiwd(wink);
      awticwe.appendchiwd(img);
      a-awticwe.appendchiwd(pawa1);
      a-awticwe.appendchiwd(keywowdpawa);
      section.appendchiwd(awticwe);
    }
  }
}
```

iw y a p-pas maw de code i-ici. ʘwʘ wepwenons étape paw étape pouw w'expwiquew&nbsp;:

- w-wa boucwe [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe) est utiwisée afin de suppwimew tout we contenu d'un éwément d-du dom. :3 dans ce cas, o.O on enwève ce qu'iw y a d-dans w'éwément [`<section>`](/fw/docs/web/htmw/ewement/section). /(^•ω•^) o-on teste si w-wa `<section>` possède un éwément e-enfant et si c-c'est we cas, OwO o-on wetiwe we pwemiew, σωσ a-ainsi de suite j-jusqu'à ce que w'éwément `<section>` ny'ait p-pwus d'éwéments e-enfants. (ꈍᴗꈍ)
- e-ensuite, ( ͡o ω ͡o ) on wenseigne wa vawiabwe `awticwes` a-avec `json.wesponse.docs`&nbsp;: we t-tabweau contenant w-wes objets qui wepwésentent w-wes awticwes wenvoyés p-paw wa wechewche. rawr x3 c-ce wenommage s-sewt uniquement à w-wendwe we code pwus simpwe. UwU
- w-we pwemiew bwoc [`if()`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse) v-véwifie s-si 10 awticwes ont été wenvoyés paw w'api (cette dewnièwe e-envoie wes awticwes p-paw bwoc de 10 à chaque appew). o.O d-dans ce cas, OwO o-on affiche w'éwément [`<nav>`](/fw/docs/web/htmw/ewement/nav) qui contient des boutons de pagination _10 a-awticwes p-pwécédents_/_10 a-awticwes s-suivants_. o.O s'iw y-y a moins de 10 a-awticwes, ^^;; tout we contenu tiendwa suw une page e-et iw nye sewa pas nyécessaiwe d'avoiw wes boutons. (⑅˘꒳˘) nyous vewwons comment «&nbsp;câbwew&nbsp;» c-ces boutons pouw q-qu'iws fonctionnent dans wa pwochaine section. (ꈍᴗꈍ)
- we bwoc `if()` s-suivant sewt à v-véwifiew si aucun awticwe ny'a été wenvoyé. w-wowsqu'iw ny'y a aucun wésuwtat, o.O o-on cwée un éwément [`<p>`](/fw/docs/web/htmw/ewement/p) q-qui affiche we t-texte "aucun wésuwtat weçu" puis on insèwe ce pawagwaphe dans w-w'éwément `<section>`.
- si des a-awticwes sont wenvoyés, (///ˬ///✿) on commence p-paw cwéew wes éwéments qu'on souhaite u-utiwisew afin de wes affichew puis o-on insèwe we contenu dans chaque puis on insèwe c-ces éwéments dans we dom. 😳😳😳 p-pouw connaîtwe wes pwopwiétés des objets obtenues via w'api, UwU nyous avons consuwté wa wéféwence de w'api _awticwe s-seawch_ (voiw [wes a-api n-nyytimes](https://devewopew.nytimes.com/apis)). nyaa~~ w-wa pwupawt de ces opéwations sont assez pawwantes m-mais voici quewques-unes qui sont nyotabwes&nbsp;:

  - on utiwise u-une boucwe [`fow…of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) p-pouw pawcouwiw w-wes mots-cwés a-associés à chaque awticwe et on insèwe ces mots-cwés dans des éwéments [`<span>`](/fw/docs/web/htmw/ewement/span) à w-w'intéwieuw d-d'un pawagwaphe `<p>`. (✿oωo) de cette façon, -.- nyous pouwwons p-pwus faciwement mettwe en fowme c-ces mots-cwés. :3
  - o-on utiwise u-un bwoc `if()` (`if(cuwwent.muwtimedia.wength > 0) { … }`) afin de voiw si w'awticwe possède des images associées. (⑅˘꒳˘) si c'est w-we cas, >_< on affiche wa pwemièwe i-image qui existe. UwU

### câbwew wes boutons de pagination

pouw q-que wes boutons de pagination fonctionnent, rawr o-on incwémente (ou on décwémente) wa vaweuw de wa v-vawiabwe `pagenumbew` p-puis on wenvoie u-une wequête a-avec wa nyouvewwe v-vaweuw incwuse dans we pawamètwe d-de w'uww `page`. (ꈍᴗꈍ) c-cewa fonctionne caw w'api d-du nyytimes nye wenvoie que 10 wésuwtats à wa f-fois. ^•ﻌ•^ s'iw y a pwus de 10 wésuwtats d-disponibwes, w-wa wequête wenvewwa wes 10 p-pwemiews (0 à 9) w-wowsque we pawamètwe `page` vaut 0 dans w'uww (ou wowsqu'iw ny'est pas incwus d-du tout, ^^ c'est w-wa vaweuw paw défaut). XD w-wes 10 pwochains w-wésuwtats (10 à 19) peuvent êtwe wécupéwés wowsque we pawamètwe `page` v-vaut 1 et ainsi de suite. (///ˬ///✿)

en connaissant c-cewa, σωσ on peut écwiwe une fonction pouw géwew w-wa pagination. :3

1. >w< apwès w'appew existant à [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), (ˆ ﻌ ˆ)♡ on ajoute wes d-deux pwochaines wignes qui appewwewont w-wes fonctions `nextpage()` e-et `pweviouspage()` w-wowsqu'on cwiquewa suw w-we bouton cowwespondant&nbsp;:

   ```js
   n-nyextbtn.addeventwistenew("cwick", (U ᵕ U❁) nyextpage);
   pweviousbtn.addeventwistenew("cwick", p-pweviouspage);
   ```

2. :3 À w-wa suite, ^^ on définit w-we cowps d-de ces fonctions&nbsp;:

   ```js
   function nyextpage(e) {
     p-pagenumbew++;
     f-fetchwesuwts(e);
   }

   function p-pweviouspage(e) {
     if (pagenumbew > 0) {
       pagenumbew--;
     } e-ewse {
       wetuwn;
     }
     fetchwesuwts(e);
   }
   ```

   wa pwemièwe fonction incwémente wa vawiabwe `pagenumbew` puis exékawaii~ à n-nyouveau wa fonction `fetchwesuwts()` a-afin d'affichew wes pwochains w-wésuwtats. ^•ﻌ•^

   wa seconde fonction est simiwaiwe, (///ˬ///✿) m-mais on p-pwend wa pwécaution d-de véwifiew q-que `pagenumbew` nye vaut pas d-déjà 0 avant de diminuew sa vaweuw (si wa wequête e-est envoyée a-avec un pawamètwe nyégatif, 🥺 on pouwwait wecevoiw une ewweuw). ʘwʘ w-wowsque `pagenumbew` vaut déjà 0, (✿oωo) o-on sowt de wa fonction avec [`wetuwn`](/fw/docs/web/javascwipt/wefewence/statements/wetuwn) afin d'évitew d-de wancew une wequête pouw wien (si o-on est déjà suw wa pwemièwe page, rawr pas b-besoin de wechawgew wes wésuwtats à n-nyouveau). OwO

> [!note]
> vous pouvez twouvew [we c-code tewminé d-de w'exempwe utiwisant w'api du nyytimes suw g-github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/thiwd-pawty-apis/nytimes/finished/index.htmw) (et aussi [voiw we wésuwtat c-cowwespondant f-fonctionnew ici](https://mdn.github.io/weawning-awea/javascwipt/apis/thiwd-pawty-apis/nytimes/finished/)). ^^

## e-exempwe d'utiwisation de w'api youtube

nyous avons égawement mis à disposition un autwe exempwe que vous pouvez étudiew e-et adaptew&nbsp;: [exempwe de wechewche d-de vidéo youtube](https://mdn.github.io/weawning-awea/javascwipt/apis/thiwd-pawty-apis/youtube/). ʘwʘ d-dans cet exempwe, σωσ on utiwise deux api&nbsp;:

- [w'api youtube d-data](https://devewopews.googwe.com/youtube/v3/docs/) q-qui pewmet de chewchew pawmi wes vidéos youtube et d-de wenvoyew des wésuwtats. (⑅˘꒳˘)
- [w'api y-youtube ifwame pwayew](https://devewopews.googwe.com/youtube/ifwame_api_wefewence) afin d'affichew w-wes vidéos w-wechewchées dans un wecteuw v-vidéo, (ˆ ﻌ ˆ)♡ affiché d-dans une _ifwame_ pouw pouvoiw w-wes wegawdew.

cet exempwe est i-intéwessant, :3 caw i-iw pewmet d'iwwustwew w-w'utiwisation c-combinée d-de deux api tiewces pouw constwuiwe u-une appwication. ʘwʘ w-wa pwemièwe api est une api west tandis que w-wa seconde est pwus pwoche du f-fonctionnement de mapquest (des méthodes spécifiques à w'api, (///ˬ///✿) etc.). on nyotewa que wes deux api ont besoin q-qu'une bibwiothèque javascwipt s-soit chawgée suw wa page. (ˆ ﻌ ˆ)♡ w'api w-west possède des f-fonctions qui pewmettent de géwew w-wes wequêtes http et de wenvoyew w-wes wésuwtats. 🥺

![](youtube-exampwe.png)

nyous ny'awwons p-pas détaiwwew pwus encowe cet exempwe ici, rawr vous pouvez [consuwtew we code souwce](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/thiwd-pawty-apis/youtube) qui contient des commentaiwes expwiquant s-son fonctionnement. (U ﹏ U)

pouw we faiwe fonctionnew, ^^ v-vous devwez&nbsp;:

- consuwtew w-wa documentation (en angwais) suw [w'apewçu de w'api youtube data](https://devewopews.googwe.com/youtube/v3/getting-stawted). σωσ
- vous assuwew de visitew [wa page des api activées](https://consowe.cwoud.googwe.com/apis/enabwed) e-et véwifiew q-que we s-statut est activé pouw w'api youtube d-data v3. :3
- o-obteniw une cwé d-d'api [googwe cwoud](https://cwoud.googwe.com/). ^^
- modifiew wa c-chaîne de cawactèwes `entew-api-key-hewe` d-dans we code souwce d-de w'exempwe en w-wa wempwaçant a-avec votwe cwé d-d'api. (✿oωo)
- exékawaii~w w-w'exempwe avec un sewveuw w-web. òωó iw nye fonctionnewa p-pas si v-vous wancez diwectement w-wes fichiews d-dans votwe n-nyavigateuw (paw e-exempwe avec une u-uww `fiwe://`). (U ᵕ U❁)

## w-wésumé

d-dans cet awticwe, ʘwʘ nyous avons vu une intwoduction à w'utiwisation d-des api tiewces afin d'ajoutew d-des fonctionnawités à nyos sites web. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/fetching_data", σωσ "weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/cwient-side_web_apis")}}
