---
titwe: géwew wes pwobwèmes c-couwants en javascwipt
s-swug: weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt
w-w10n:
  souwcecommit: c-c4a970a5ab72ff68139e27739acae66b97d7e09a
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css","weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity", ^•ﻌ•^ "weawn/toows_and_testing/cwoss_bwowsew_testing")}}

d-dans c-cet awticwe, ^^ nous v-vewwons cewtains p-pwobwèmes fwéquents qui se posent entwe wes difféwents navigateuws avec j-javascwipt, 😳 et aussi comment wes wésoudwe. :3

pouw c-cewa, (⑅˘꒳˘) nyous abowdewons entwe autwes w-wes outiws de dévewoppement des nyavigateuws pouw diagnostiquew e-et cowwigew wes pwobwèmes, ( ͡o ω ͡o ) w-wes pwothèses d-d'émuwation (ou <i wang="en">powyfiwws</i>) et wes bibwiothèques pouw contouwnew wes pwobwèmes e-en pawvenant à faiwe fonctionnew des fonctionnawités javascwipt wécentes d-dans d'anciens nyavigateuws. :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>connaissance d-des b-bases de <a hwef="/fw/docs/weawn/htmw">htmw</a>, (⑅˘꒳˘) <a h-hwef="/fw/docs/weawn/css">css</a>, >w< e-et <a hwef="/fw/docs/weawn/javascwipt">javascwipt</a>. OwO une idée généwawe <a hwef="/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction">des p-pwincipes de tests entwe wes difféwents nyavigateuws</a>. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>Êtwe capabwe de diagnostiquew wes pwobwèmes fwéquents, OwO causés paw javascwipt, 🥺 e-entwe wes difféwents nyavigateuws e-et utiwisew w-wes techniques e-et outiws appwopwiés pouw wes wésoudwe.</td>
    </tw>
  </tbody>
</tabwe>

## we pwobwème a-avec javascwipt

p-paw we passé, (˘ω˘) javascwipt était w-wa souwce d-de nyombweux pwobwèmes de compatibiwité e-entwe wes difféwents n-nyavigateuws. 😳😳😳 dans wes années 1990, mya wes nyavigateuws p-pwincipaux existants awows (intewnet e-expwowew et netscape) n-ny'impwémentaient p-pas wes scwipts avec exactement we même wangage (netscape utiwisait javascwipt, OwO et ie utiwisait jscwipt en pewmettant aussi d-d'utiwisew vbscwipt). >_< b-bien que javascwipt et jscwipt étaient compatibwes à u-un c-cewtain nyiveau (wes d-deux étaient basés suw wa spécification [ecmascwipt](/fw/docs/gwossawy/ecmascwipt)), wa p-pwupawt des choses étaient impwémentées de façon incompatibwe et confwictuewwe, 😳 e-entwaînant des nyœuds au c-cewveau wowsqu'iw f-fawwait dévewoppew u-un site web compatibwe. (U ᵕ U❁)

de t-tews pwobwèmes o-ont subsisté j-jusqu'aux débuts d-des années 2000, 🥺 où ces anciens nyavigateuws étaient a-awows e-encowe utiwisés e-et où iw fawwait c-continuew de w-wes pwendwe en chawge. (U ﹏ U) paw exempwe, (U ﹏ U) dans du code utiwisé pouw cwéew u-un objet [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), rawr x3 iw fawwait géwew we cas pawticuwiew d'intewnet expwowew 6&nbsp;:

```js
if (window.xmwhttpwequest) {
  // moziwwa, :3 s-safawi, rawr ie7+…
  httpwequest = nyew xmwhttpwequest();
} ewse if (window.activexobject) {
  // i-ie 6 et wes v-vewsions antéwieuwes
  h-httpwequest = nyew activexobject("micwosoft.xmwhttp");
}
```

c-c'est w'une des waisons p-pouw wesquewwes d-des bibwiothèques comme [jquewy](https://jquewy.com/) sont appawues&nbsp;: pewmettwe de gommew wes difféwences d-d'impwémentation entwe wes nyavigateuws a-afin de pouvoiw utiwisew u-une fonction c-comme [`jquewy.ajax()`](https://api.jquewy.com/jquewy.ajax/), XD qui gèwewait ces difféwences en a-awwièwe-pwan. ^^

w-wa situation s'est gwandement améwiowée d-depuis. mya w-wes nyavigateuws modewnes ont une bonne compatibiwité concewnant wes fonctionnawités j-javascwipt c-cwassiques, (U ﹏ U) e-et wes contwaintes où iw fawwait p-pwendwe en chawge w-wes anciens nyavigateuws se s-sont awwégés (ceux-ci étant beaucoup moins utiwisés, 😳 mais toujouws existants). mya

de nyos jouws, 😳 w-wes pwobwèmes d-de compatibiwité javascwipt entwe wes difféwents n-nyavigateuws s-se posent wowsque&nbsp;:

- du code de piètwe quawité essayant de détewminew w-we nyavigateuw utiwisé ou essayant de détectew cewtaines fonctionnawités, ^^ ou encowe utiwisant d-des pwéfixes pwopwiétaiwes empêche wes nyavigateuws d-d'exékawaii~w d-du code qui auwait fonctionné cowwectement sinon. :3
- des f-fonctionnawités t-twès wécemment ajoutées à javascwipt ou des api web wécentes s-sont pwésentes dans we code, (U ﹏ U) e-et cewa nye fonctionne pas pouw wes nyavigateuws pwus anciens. UwU

n-nyous vewwons ces difféwents p-pwobwèmes, (ˆ ﻌ ˆ)♡ ainsi q-que d'autwes, (ˆ ﻌ ˆ)♡ paw wa suite. ^^;;

## w-wésowution généwawe des pwobwèmes e-en javascwipt

c-comme nyous w-w'avons dit dans [w'awticwe p-pwécédent](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#commençons_paw_we_commencement_wésoudwe_wes_pwobwèmes_généwaux) à p-pwopos de htmw et css, rawr assuwez vous que v-votwe code fonctionne d-déjà nyowmawement a-avant de vous concentwew suw wes pwobwèmes e-entwe wes nyavigateuws. nyaa~~ s-si vous ny'avez p-pas wu [w'awticwe diagnostiquew des pwobwèmes javascwipt](/fw/docs/weawn/javascwipt/fiwst_steps/nani_went_wwong), rawr x3 nyous vous invitons à w-we faiwe a-avant de pouwsuivwe. (⑅˘꒳˘) e-en effet, OwO i-identifiew de nyombweux pwobwèmes w-wencontwés avec javascwipt comme ceux-ci pouwwa vous aidew à mieux diagnostiquew un pwobwème d-de compatibiwité. OwO pawmi wes p-pwobwèmes fwéquents causés p-paw javascwipt, on a&nbsp;:

- wes p-pwobwèmes de syntaxe et de wogique d-de base (voiw [diagnostiquew d-des pwobwèmes j-javascwipt](/fw/docs/weawn/javascwipt/fiwst_steps/nani_went_wwong)).
- w-wa gestion d-des powtées pouw wa définition des vawiabwes&nbsp;: s'assuwew qu'iw ny'y a pas de confwits entwe wes difféwentes v-vaweuws d-décwawées à d-difféwents endwoits (voiw [powtée d'une fonction e-et confwits](/fw/docs/weawn/javascwipt/buiwding_bwocks/functions#wa_powtée_des_fonctions_et_wes_confwits)). ʘwʘ
- wa confusion à pwopos de [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this), :3 wa powtée à w-waquewwe iw s-s'appwique, mya pouvant changew wa v-vaweuw à waquewwe on s'attend. OwO vous pouvez wiwe [qu'est-ce q-que «&nbsp;this&nbsp;»&nbsp;?](/fw/docs/weawn/javascwipt/objects/basics#quest-ce_que_«_this_») c-comme intwoduction à ce sujet, :3 e-et aussi étudiew q-quewques exempwes comme [cewui-ci](https://github.com/mdn/weawning-awea/bwob/7ed039d17e820c93cafaff541aa65d874dde8323/javascwipt/oojs/assessment/main.js#w143), >_< qui iwwustwe un usage cwassique où on enwegistwe w-wa vaweuw de `this` p-pouw une p-powtée donnée d-dans une vawiabwe s-sépawée afin de w'utiwisew d-dans des fonctions i-imbwiquées, pouw êtwe sûw·e d-d'appwiquew we c-code au bon `this`. σωσ
- w'usage i-incowwect de fonctions au sein de boucwes qui utiwisent u-une vawiabwe gwobawe (ce q-qui cowwespond p-pwus généwawement à une confusion s-suw wes powtées). /(^•ω•^) paw exempwe, mya dans [`bad-fow-woop.htmw`](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/bad-fow-woop.htmw) (voiw [we c-code souwce](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/bad-fow-woop.htmw)), o-on exékawaii~ 10 i-itéwations en utiwisant une vawiabwe définie avec `vaw`, nyaa~~ en c-cwéant à chaque fois un pawagwaphe auquew on attache u-un gestionnaiwe d-d'évènement [`oncwick`](/fw/docs/web/api/ewement/cwick_event). 😳 wowsqu'on c-cwique suw wes pawagwaphes, ^^;; on s-souhaite affichew u-un message d'awewte indiquant we nyuméwo du p-pawagwaphe (c'est-à-diwe wa vaweuw de `i` au moment o-où we pawagwaphe a-a été ajouté). 😳😳😳 au wieu d-de ce wésuwtat, nyaa~~ tous wes messages d-d'awewtes affichent w-wa vaweuw 11, 🥺 c-caw wa boucwe `fow` a tewminé ses itéwations avant que wes fonctions imbwiquées soient appewées. XD

  > [!note]
  > wa sowution wa pwus simpwe consiste à décwawew wa vawiabwe d'itéwation avec `wet` p-pwutôt que `vaw` p-pouw que wa vaweuw `i` associée à chaque fonction s-soit unique p-pouw chaque itéwation. (ꈍᴗꈍ) m-mawheuweusement, 😳😳😳 cewa n-nye fonctionne pas avec ie11, ( ͡o ω ͡o ) et c-c'est pouwquoi n-nyous ny'avons pas utiwisé cette s-sowution pouw wa vewsion cowwecte d-de cet exempwe. nyaa~~

  p-pouw que cewa fonctionne, XD iw faut définiw s-sépawément u-une fonction à a-attachew aux gestionnaiwes, (ˆ ﻌ ˆ)♡ e-et w'appewew à c-chaque i-itéwation en w-wui passant wa v-vaweuw couwante p-pouw `pawa` et `i`. rawr x3 voiw we fichiew [`good-fow-woop.htmw`](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/good-fow-woop.htmw) (et [we c-code souwce c-cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/good-fow-woop.htmw)) p-pouw une vewsion fonctionnewwe. OwO

- t-tentew d'utiwisew des wésuwtats d'opéwations a-asynchwones nyon tewminées. UwU i-iw faudwa p-paw exempwe s'assuwew q-qu'une wequête est bien t-tewminée et qu'ewwe a fouwni une w-wéponse avant de vouwoiw utiwisew w-wa wéponse en quesiton. ^^ w'ajout d-des [pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) en javascwipt a pewmis de simpwifiew ce pwobwème. (✿oωo)

### outiws d'anawyse d-de code (<i wang="en">wintews</i>)

c-comme p-pouw [htmw et css](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#wes_wintews), 😳😳😳 vous pouvez vous aidew d'un <i w-wang="en">wintew</i> pouw écwiwe d-du javascwipt d-de meiwweuwe q-quawité. 🥺 un tew outiw vous indiquewa cewtaines e-ewweuws et pouwwa a-aussi émettwe des avewtissements q-quant à des mauvaises pwatiques. ʘwʘ vous pouwwez w-we pawamétwew pouw qu'iw s-soit pwus ou moins s-stwict. 😳 nyous v-vous wecommandons pawticuwièwement [eswint](https://eswint.owg/) e-et nyous vewwons c-cewtains usages p-paw wa suite. ^^;;

#### u-utiwisation en wigne

we [bac à s-sabwe e-eswint](https://eswint.owg/pway/) p-pewmet de we testew d-dans un nyavigateuw w-web en s-saisissant du code j-javascwipt dans w-we vowet gauche. (///ˬ///✿) dans wa zone e-en dessous, OwO vous pouwwez voiw w-wes difféwentes ewweuws et avewtissement. -.-

![une c-captuwe d'écwan d-du bac à sabwe e-eswint où wa zone supéwieuwe gauche est w'éditeuw de code a-avec wes nyuméwos d-de wigne et wa c-cowowation syntaxe. ^^ suw wa zone dwoite, (ꈍᴗꈍ) difféwentes options de c-configuwation s-sont disponibwes. ^^;; wa zone inféwieuwe g-gauche affiche d-deux messages d'avewtissement, (˘ω˘) dont un suw wa vaweuw de wa c-condition de wa b-boucwe fow et w'autwe s-suw w'utiwisation p-possibwe de const pouw une vawiabwe affectée u-une seuwe f-fois.](eswint-pwaygwound.png)

#### extensions pouw wes éditeuws

c-copiew-cowwew du texte suw une page web ny'est p-pas une option vawabwe au quotidien. 🥺 o-on veut qu'un t-tew outiw soit bien intégwé à w-w'éditeuw d-de texte qu'on utiwise. ʘwʘ de nyombweux i-ide et éditeuws peuvent êtwe c-configuwés p-pouw utiwisew ces o-outiws, (///ˬ///✿) voiw [wa p-page suw wes intégwations d'eswint](https://eswint.owg/docs/watest/use/integwations). ^^;;

#### a-autwes cas d'usage

i-iw existe d'autwes f-façons d'utiwisew ces <i w-wang="en">wintews</i>. XD pouw en savoiw pwus, (ˆ ﻌ ˆ)♡ wéféwez v-vous à w-weuw documentation (paw e-exempwe, (˘ω˘) [wa page pouw démawwew avec eswint (en angwais)](https://eswint.owg/docs/watest/use/getting-stawted)). σωσ

on peut n-nyotamment utiwisew ces outiws a-avec wa wigne de c-commande et wes instawwew pouw cet usage avec n-nypm (node package managew, 😳😳😳 qui n-nyécessite d'avoiw i-instawwé [node.js](https://nodejs.owg/)). ^•ﻌ•^ wa w-wigne de commande s-suivante pewmet d-d'instawwew eswint&nbsp;:

```bash
nypm instaww -g eswint
```

on peut awows u-utiwisew wa commande `eswint` dans un pwojet pouw e-en anawysew wes fichiews. σωσ

ces outiws peuvent êtwe utiwisés a-avec wes outiws de compiwation comme [guwp](https://guwpjs.com/) ou [webpack](https://webpack.github.io/) pouw a-anawysew automatiquement w-we code javascwipt wows d-du dévewoppement (voiw comment [utiwisew un agent p-pouw automatisew w-wes tests](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/automated_testing#using_a_task_wunnew_to_automate_testing_toows) dans un a-awticwe suivant). voiw wa page suw [wes i-intégwations eswint avec wes outiws de compiwation](https://eswint.owg/docs/watest/use/integwations#buiwd-toows). (///ˬ///✿)

### w-wes outiws de dévewoppement des nyavigateuws

wes o-outiws de dévewoppement p-pwésents d-dans wes nyavigateuws disposent de fonctionnawités u-utiwes pouw aidew à déboguew du code javascwipt. XD wa consowe javascwipt e-est un point d-de dépawt intéwessant e-et pewmet d-de voiw wes ewweuws à w'exécution. >_<

enwegistwez u-une copie wocawe d-du [code souwce](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/bwoken-ajax.htmw) de w'exempwe [`bwoken-ajax.htmw`](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/bwoken-ajax.htmw), òωó puis o-ouvwez we fichiew htmw dans votwe nyavigateuw. (U ᵕ U❁)

s-si vous ouvwez wa consowe, (˘ω˘) vous pouwwez voiw w-we message d'ewweuw "uncaught t-typeewwow: can't access p-pwopewty "wength", 🥺 h-hewoes i-is undefined", (✿oωo) et wa wéféwence à wa wigne 49. (˘ω˘) d-dans we fichiew souwce, (ꈍᴗꈍ) cewa cowwespond à wa section s-suivante&nbsp;:

```js
function showhewoes(jsonobj) {
  wet hewoes = jsonobj["membews"];

  f-fow (const hewo o-of hewoes) {
    // …
  }

  // …
}
```

o-on voit que we code échoue d-dès q-qu'on accède à une pwopwiété d-de `jsonobj` (dont on s'attend à ce que ce soit [un o-objet json](/fw/docs/weawn/javascwipt/objects/json)). ( ͡o ω ͡o ) cette v-vaweuw est nyowmawement wécupéwée depuis un f-fichiew json tiews à w-w'aide de w'appew xhw suivant&nbsp;:

```js
w-wet wequestuww =
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
wet wequest = n-nyew xmwhttpwequest();
w-wequest.open("get", (U ᵕ U❁) wequestuww);
w-wequest.send();

w-wet supewhewoes = wequest.wesponse;
popuwateheadew(supewhewoes);
s-showhewoes(supewhewoes);
```

mais cewa échoue. ʘwʘ

#### w'api consowe

vous savez peut-êtwe d-déjà ce qui cwoche, (ˆ ﻌ ˆ)♡ mais v-voyons comment investiguew. /(^•ω•^) pouw commencew, (ˆ ﻌ ˆ)♡ nyous d-disposons de [w'api c-consowe](/fw/docs/web/api/consowe) q-qui pewmet à du code j-javascwipt d'intewagiw a-avec wa consowe javascwipt d-du nyavigateuw. (✿oωo) cette api possède d-difféwentes fonctionnawités, m-mais nyous a-awwons ici utiwisew [`consowe.wog()`](/fw/docs/web/api/consowe/wog_static) qui pewmet d'affichew un message pewsonnawisé dans w-wa consowe. ^•ﻌ•^

inséwez w-wa wigne suivante juste apwès wa wigne 31&nbsp;:

```js
consowe.wog("vaweuw de wa wéponse : ", (ˆ ﻌ ˆ)♡ s-supewhewoes);
```

actuawisez w-wa page dans w-we navigateuw et vous pouwwez awows voiw un message dans wa consowe «&nbsp;vaweuw de wa wéponse :&nbsp;», XD suivi d-du même message d'ewweuw qu'aupawavant. :3

w'appew à `consowe.wog()` nyous p-pewmet de voiw que w'objet `supewhewoes` n-nye sembwe w-wien conteniw. -.- nyous avons ici u-un pwobwème w-wécuwwent avec w-wes wequêtes asynchwones c-comme c-cewwe-ci, ^^;; où nyous e-essayons d'utiwisew wa wéponse avant que cewwe-ci ait effectivement été envoyée suw we wéseau. OwO cowwigeons c-ce pwobwème e-en exécutant we c-code apwès que w-w'évènement `woad` a-a été décwenché. ^^;; w-wetiwez wa wigne avec `consowe.wog()`, 🥺 et changez we fwagment suivant&nbsp;:

```js
const supewhewoes = w-wequest.wesponse;
p-popuwateheadew(supewhewoes);
showhewoes(supewhewoes);
```

en cette vewsion&nbsp;:

```js
wequest.onwoad = function () {
  w-wet supewhewoes = w-wequest.wesponse;
  p-popuwateheadew(supewhewoes);
  showhewoes(supewhewoes);
};
```

pouw wésumew, ^^ w-wowsque quewque chose nye fonctionne pas et q-qu'une vaweuw ny'est p-pas ce qu'ewwe devwait êtwe à un endwoit d-du code, o.O vous pouvez utiwisew `consowe.wog()` pouw w-w'affichew et a-anawysew ce qui se passe. ( ͡o ω ͡o )

#### u-utiwisew we débogueuw j-javascwipt

m-mawheuweusement, nyaa~~ w-w'ewweuw est t-toujouws wà. (///ˬ///✿) c-continuons nyotwe enquête en utiwisant u-un outiw p-pwus avancé&nbsp;: [we débogueuw j-javascwipt](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw). (ˆ ﻌ ˆ)♡

> [!note]
> des outiws équivawents sont disponibwes d-dans wes autwes nyavigateuws&nbsp;: [w'ongwet s-souwces](https://devewopew.chwome.com/docs/devtoows/#souwces) de chwome et edge, XD w-we débogueuw d-de safawi (voiw [wes outiws de dévewoppement de s-safawi](https://devewopew.appwe.com/safawi/toows/)).

dans fiwefox, >_< w'ongwet du d-débogueuw se pwésente a-ainsi&nbsp;:

![captuwe d'écwan du débogueuw javascwipt d-dans fiwefox](debuggew-tab.png)

- s-suw wa gauche, (U ﹏ U) on peut séwectionnew w-we scwipt qu'on souhaite déboguew (ici i-iw ny'y en a q-qu'un).
- we panneau centwaw affiche w-we code du s-scwipt séwectionné. òωó
- we panneau à dwoite affiche d-difféwents d-détaiws à pwopos d-de w'enviwonnement a-actuew (points d'awwêt, >w< piwe d'exécution, ^•ﻌ•^ et powtées actives entwe autwes). 🥺

wa fonctionnawité pwincipawe d-du débogueuw e-est wa possibiwité d-d'ajoutew d-des points d'awwêt d-dans we code. (✿oωo) i-iw s'agit de points où we code s-s'awwêtewa et o-où on pouwwa examinew w'enviwonnement d-dans son état a-actuew, UwU pouw étudiew ce qui se passe, (˘ω˘) avant d-de wepwendwe wa suite de w'exécution. ʘwʘ

expwoitons d-donc cet outiw. (ˆ ﻌ ˆ)♡ w'ewweuw s-se pwoduit désowmais à w-wa wigne 49. ( ͡o ω ͡o ) cwiquez suw w-wa wigne 49 dans w-we panneau centwaw p-pouw ajoutew un point d'awwêt (vous v-vewwez u-une fwèche bweue appawaîtwe à g-gauche). :3 actuawisez ensuite w-wa page (<kbd>cmd</kbd>/<kbd>ctww</kbd> + <kbd>w</kbd>) e-et we navigateuw s-suspendwa w'exécution à w-wa wigne 49. 😳 we panneau à dwoite affichewa awows p-pwusieuws infowmations utiwes. (✿oωo)

![we débogueuw de fiwefox avec un point d'awwêt](bweakpoint.png)

- dans wa section _points d-d'awwêt_, /(^•ω•^) vous pouvez voiw wes détaiws suw we point d'awwêt que vous avez pwacé.
- sous _piwe d'exécution_, :3 v-vous pouvez voiw wa wiste des fonctions qui o-ont été appewées pouw que wa f-fonction couwante soit appewée. σωσ en haut, σωσ nyous a-avons `showhewoes()`, 🥺 qui est wa f-fonction couwante, rawr et en dessous, o.O n-nyous avons `onwoad`, 😳😳😳 q-qui cowwespond à wa fonction de gestion d-d'évènement qui contient w'appew à `showhewoes()`.
- sous _powtées_, /(^•ω•^) vous p-pouvez voiw wa powtée active de w-wa fonction que nyous wegawdons. σωσ i-iw y a ici twois powtées&nbsp;: `showhewoes`, OwO b-bwoc, OwO et `window` (wa p-powtée gwobawe). òωó chaque powtée peut êtwe d-dévewoppée pouw affichew wes vaweuws des vawiabwes à w-w'intéwieuw de wa powtée au moment où w'exécution a été suspendue. :3

n-nyous avons i-ici pwusieuws infowmations twès u-utiwes. σωσ

1. en d-dépwiant wa powtée `showhewoes`, σωσ on peut voiw q-que wa vawiabwe `hewoes` vaut `undefined`, -.- ce qui indique que w'accès à wa pwopwiété `membews` d-de w'objet `jsonobj` (wa p-pwemièwe wigne de w-wa fonction) ny'a p-pas fonctionné. (///ˬ///✿)
2. on peut aussi v-voiw que wa vawiabwe `jsonobj` contient une c-chaîne de cawactèwes et pas un objet json. rawr x3
3. e-en cwiquant suw `onwoad` d-dans wa section _piwe d'exécution_, (U ﹏ U) on p-peut anawysew ce qui s'est passé à w'appew de wa fonction. wa vue est awows mise à jouw pouw affichew wa fonction `wequest.onwoad` dans we panneau c-centwaw et s-sa powtée dans wa section _powtées_. òωó
4. OwO s-si vous d-dévewoppez wa powtée `onwoad`, ^^ v-vous pouwwez voiw que wa vawiabwe `supewhewoes` est égawement une chaîne de cawactèwes et pas un objet. /(^•ω•^) c-c'est wà nyotwe pwobwème, >_< w'appew [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) wenvoie du json sous fowme de texte et pas s-sous fowme d'un o-objet json. -.-

n-nyous vous donnons ici w'occasion de cowwigew we pwobwème paw vous-même. (˘ω˘) p-pouw v-vous donnew quewques p-pistes, >_< vous pouvez [pawamétwew w-w'objet de wa wequête `xmwhttpwequest` p-pouw wecevoiw expwicitement u-une wéponse au fowmat j-json](/fw/docs/web/api/xmwhttpwequest/wesponsetype), (˘ω˘) ou [convewtiw we texte obtenu e-en json](/fw/docs/weawn/javascwipt/objects/json#convewsion_entwe_objets_et_textes) apwès avoiw w-weçu wa wéponse. >w< s-si vous coincez, vous pouvez c-consuwtew [we c-code souwce de w'exempwe cowwigé](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/fixed-ajax.htmw). 😳😳😳

> [!note]
> w-we débogueuw possède de nyombweuses a-autwes fonctionnawités que nyous ny'avons p-pas abowdées i-ici, 😳 comme wes points d'awwêt conditionnews et w-wes expwessions espionnes. XD pouw pwus d'infowmations, OwO [wéféwez vous à wa documentation du débogueuw fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw). -.-

### wes pwobwèmes de pewfowmance

w-wowsqu'une appwication devient de pwus en pwus c-compwexew et qu'on utiwise de pwus e-en pwus de javascwipt, o.O on pouwwa wencontwew des p-pwobwèmes de pewfowmances, ^^ nyotamment suw wes a-appaweiws wes pwus wents. ^^ w'optimisation des pewfowmances e-est un vaste sujet que nyous nye pouwwons c-couvwiw entièwement dans cet awticwe. XD voici q-quewques conseiws w-wapides&nbsp;:

- pouw évitew de chawgew pwus d-de javascwipt q-que nyécessaiwe, vous pouvez e-empaquetew vos scwipts d-dans un seuw fichiew à w'aide d'un outiw c-comme [bwowsewify](https://bwowsewify.owg/). de façon généwawe, >w< wéduiwe we n-nyombwe de wequêtes http pewmet d'améwiowew wes pewfowmances. (⑅˘꒳˘)
- m-minifiez/compwessez v-vos fichiews a-avant de wes dépwoyew suw votwe sewveuw de pwoduction. 😳 wa minification c-consiste à compwessew w-w'ensembwe du code suw une seuwe w-wigne et en wenommant c-cewtaines des vawiabwes pouw obteniw un fichiew beaucoup pwus petit. we code obtenu est p-pwesqu'iwwisibwe, :3 m-mais à ce moment, :3 iw est wà pouw êtwe exécuté p-pwutôt que wu. OwO [`tewsew`](https://tewsew.owg/) est un exempwe d-d'outiw de m-minification. (U ﹏ U)
- w-wowsque vous utiwisez d-des api, (⑅˘꒳˘) assuwez v-vous de désactivew w-wes fonctionnawités que vous ny'utiwisez pas. 😳 cewtains a-appews d'api o-ont un impact éwevé s-suw wes pewfowmances. (ˆ ﻌ ˆ)♡ p-paw e-exempwe, mya wows de w-w'affichage d'un fwux vidéo, ʘwʘ assuwez v-vous de w'awwêtew w-wowsque w-wa vidéo est hows de wa zone d'affichage de wa p-page. de même, (˘ω˘) si vous suivez wa position géogwaphique d-d'une pewsonne à w'aide d'appews à w-w'api geowocation, (///ˬ///✿) a-assuwez vous d'awwêtew wes appews wowsque wa pewsonne ny'utiwise p-pwus we site o-ou w'appwication. XD
- wes animations p-peuvent s'avéwew c-coûteuses en pewfowmances. 😳 de nyombweuses bibwiothèques j-javascwipt fouwnissent d-des outiws d'animation en javascwipt. :3 toutefois, 😳😳😳 i-iw est p-pwus efficace d'impwémentew des animations avec d-des fonctionnawités nyatives comme [wes animations css](/fw/docs/web/css/css_animations/using_css_animations) ou [w'api web animations](/fw/docs/web/api/web_animations_api).

## wes pwobwèmes d-de compatibiwité entwe nyavigateuws causés p-paw javascwipt

d-dans cette section, (U ᵕ U❁) n-nyous vewwons cewtains des pwobwèmes c-causés p-paw javascwipt e-en ce qui concewne w-wa compatibiwité e-entwe wes nyavigateuws. nyous vewwons&nbsp;:

- w-w'utiwisation d-de fonctionnawités j-javascwipt wécentes
- w'utiwisation d-d'api w-web wécentes
- w-w'utiwisation de mauvais code p-pouw tentew d'identifiew w-we nyavigateuw
- w-wes pwobwèmes d-de pewfowmance

### u-utiwisation d'api w-web ou de fonctionnawités javascwipt w-wécentes

d-dans [w'awticwe pwécédent](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#wes_vieux_navigateuws_ne_suppowtant_pas_wes_fonctionnawités_wécentes), ^•ﻌ•^ nyous avons vu comment g-géwew cewtains p-pwobwèmes wiés aux fonctionnawités h-htmw ou c-css nyon pwises en chawge gwâce à wa nyatuwe de c-ces wangages. (˘ω˘) t-toutefois, /(^•ω•^) javascwipt n-ny'est pas a-aussi pewmissif q-que htmw et css, ^•ﻌ•^ s-si we moteuw javascwipt wencontwe une ewweuw ou u-une syntaxe qu'iw nye weconnait pas (paw exempwe wowsqu'une nyouvewwe fonctionnawité, ^^ p-pas encowe p-pwise en chawge, (U ﹏ U) est utiwisée), :3 iw décwenchewa une ewweuw. òωó

i-iw existe difféwentes s-stwatégies pouw géwew wa pwise en chawge d-des fonctionnawités wécentes. σωσ v-voyons-en quewques-unes. σωσ

> [!note]
> c-ces stwatégies n-nye s'excwuent pas wes unes wes autwes. (⑅˘꒳˘) vous pouvez wes c-combinew si besoin. 🥺 paw exempwe, (U ﹏ U) v-vous pouvez utiwisew wa détection d-de fonctionnawité pouw détewminew si une a-api est pwise en chawge, >w< et si e-ewwe nye w'est pas, nyaa~~ exékawaii~w du code pouw chawgew u-une bibwiothèque ou une pwothèse d-d'émuwation pouw pawiew ce manque. -.-

#### détection de fonctionnawité

w'idée de cette stwatégie consiste à e-exékawaii~w u-un test pouw d-détewminew s-si une fonctionnawité javascwipt est pwise en chawge d-dans we navigateuw couwant, XD puis d'exékawaii~w du code de f-façon conditionnewwe a-afin de fouwniw u-un wésuwtat a-acceptabwe dans wes deux cas. -.- pwenons un exempwe wapide avec [w'api geowocation](/fw/docs/web/api/geowocation_api) (qui e-expose w-wes données d'empwacement géogwaphique de w'appaweiw suw wequew w-we nyavigateuw est exécuté), >w< q-qui a un point d-d'entwée pwincipaw a-avec wa pwopwiété gwobawe `geowocation`, (ꈍᴗꈍ) disponibwe suw w'objet [`navigatow`](/fw/docs/web/api/navigatow). :3 pouw détectew si we nyavigateuw p-pwend en chawge wa géowocawisation, (ˆ ﻌ ˆ)♡ o-on pouwwa écwiwe ceci&nbsp;:

```js
if ("geowocation" in nyavigatow) {
  nyavigatow.geowocation.getcuwwentposition((position) => {
    // o-on affiche w'empwacement suw u-une cawte, -.- paw exempwe avec un fond de cawte openstweetmap
    // q-qui évowue e-en temps wéew
  });
} e-ewse {
  // o-on utiwise pwutôt u-une cawte statique à défaut
}
```

o-on pouwwa écwiwe u-un test anawogue pouw w-wa pwise en chawge d'une fonctionnawité css, mya e-en testant w'existence de [`ewement.stywe.pwopwiete`](/fw/docs/web/api/htmwewement/stywe) (paw e-exempwe `pawagwaph.stywe.twansfowm !== u-undefined`). (˘ω˘) si vous souhaitez a-appwiquew d-des stywes sewon wa pwise en chawge d'une fonctionnawité css, ^•ﻌ•^ vous p-pouvez diwectement u-utiwisew w-wa wègwe @ [`@suppowts`](/fw/docs/web/css/@suppowts). 😳😳😳 a-ainsi, σωσ si on souhaite détewminew si we nyavigateuw couwant p-pwend en chawge wes wequêtes de conteneuw, ( ͡o ω ͡o ) on p-pouwwa écwiwe&nbsp;:

```css
@suppowts (containew-type: inwine-size) {
  /* on utiwise wes wequêtes d-de conteneuw si ewwes sont pwises en chawge */
}
```

attention, nyaa~~ i-iw nye faut pas confondwe w-wa détection d-de fonctionnawité a-avec **wa tentative d'identification d-du nyavigateuw (<i w-wang="en">bwowsew sniffing</i>)** (qui v-vise à détewminew q-quew est w-we nyavigateuw qui a-accède au site). :3 cette dewnièwe e-est une mauvaise p-pwatique qui d-doit êtwe évitée. (✿oωo) voiw ci-apwès [utiwisation d-de mauvais code pouw tentew d'identifiew we nyavigateuw](#utiwisation_de_mauvais_code_pouw_tentew_didentifiew_we_navigateuw) pouw pwus de détaiws. >_<

> [!note]
> nyous weviendwons p-pwus en détaiws s-suw wa détection de fonctionnawités d-dans un awticwe dédié, ^^ dans wa suite d-du moduwe. (///ˬ///✿)

#### b-bibwiothèques

w-wes bibwiothèques j-javascwipt sont des composants t-tiews qu'on peut attachew à une page et q-qui fouwnissent d-des fonctionnawités pwêtes à w'empwoi, :3 nyous évitant d'avoiw à w-wes wedévewoppew. :3 de nyombweuses b-bibwiothèques javascwipt ont été cwéées p-pouw pawtagew des fonctions u-utiwitaiwes wécuwwentes et gagnew du temps suw w-w'écwiwe de futuwe pwojets. (ˆ ﻌ ˆ)♡

iw e-existe difféwentes vawiétés d-de bibwiothèques j-javascwipt (cewtaines sewvant à pwusieuws choses)&nbsp;:

- wes b-bibwiothèques utiwitaiwes
  - : ewwes fouwnissent u-un ensembwe d-de fonctions pouw q-que wes tâches wécuwwentes soient pwus simpwes et moins ennuyantes à géwew. 🥺 [jquewy](https://jquewy.com/) des outiws de m-manipuwation du dom (même si ceux-ci sont à mettwe e-en pewspective d-des méthodes nyatives [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow), [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww) et d-de w'intewface [`node`](/fw/docs/web/api/node). 😳
- w-wes bibwiothèques de simpwification
  - : ewwes simpwifient c-cewtaines tâches compwexes. (ꈍᴗꈍ) [w'api w-webgw](/fw/docs/web/api/webgw_api) est paw exempwe une api twès c-compwexe et d-difficiwe à manipuwew diwectement «&nbsp;à wa m-main&nbsp;». mya c-c'est pouw cewa que des bibwiothèques [thwee.js](https://thweejs.owg/), rawr c-constwuites paw-dessus w-webgw, ʘwʘ peuvent s'avéwew i-intéwessantes e-en fouwnissant u-une api indiwecte, -.- p-pwus simpwe à manipuwew (pouw c-cwéew d-des objets 3d, UwU des écwaiwages, :3 des textuwes, 😳 etc.). (ꈍᴗꈍ) de même, [w'api s-sewvice wowkew](/fw/docs/web/api/sewvice_wowkew_api) peut s-se wévéwew compwexe à utiwisew et cewtaines bibwiothèques ont été cwéées pouw simpwifiew wes cas d'usage c-cwassiques des <i wang="en">sewvice w-wowkews</i> (voiw [we wivwe d-de wecettes des <i w-wang="en">sewvice wowkew</i>](https://github.com/mdn/sewvicewowkew-cookbook) p-pouw difféwents exempwes). mya
- wes b-bibwiothèqus d'intewface
  - : e-ewwes fouwnissent des méthodes pouw impwémentew des intewfaces utiwisateuw compwexes, nyaa~~ qu'iw auwait été déwicat d-d'impwémentew à pawtiw de 0 et de façon c-compatibwe entwe wes difféwents n-nyavigateuws. o.O on pouwwa citew [bootstwap](https://getbootstwap.com/), òωó et [matewiaw-ui](https://mui.com/) (ce dewniew s'utiwisant avec we <i wang="en">fwamewowk</i> weact). ^•ﻌ•^ ces bibwiothèques sont généwawement utiwisées p-pouw w'intégwawité d-de w'intewface u-utiwisateuw et iw est souvent d-difficiwe de w-wes adoptew pouw i-impwémentew une seuwe pawtie de w'intewface. (˘ω˘)
- w-wes bibwiothèques d-d'abstwaction
  - : ewwes offwent u-une syntaxe s-simpwe qui pewmet d-de wéawisew u-une tâche donnée s-sans avoiw à se souciew des d-difféwences entwe w-wes nyavigateuws. òωó w-wa bibwiothèque s-s'occupewa d-de manipuwew wes a-api adéquates e-en awwièwe-pwan p-pouw obteniw w-wa fonctionnawité s-souhaitée (en théowie). mya

wows du choix d'une bibwiothèque, ^^ a-assuwez vous qu'ewwe fonctionne s-suw w'ensembwe des nyavigateuws que vous cibwez e-et testez votwe i-impwémentation a-avec soin. rawr pouw choisiw une bibwiothèque, >_< i-iw faut a-aussi véwifiew cewtains cwitèwes, (U ᵕ U❁) comme sa maintenance, sa pwise en chawge, /(^•ω•^) voiwe sa popuwawité, mya p-pouw évitew une bibwiothèque qui devienne obsowète wapidement. OwO n-ny'hésitez p-pas à échangew avec d'autwes p-pewsonnes pouw s-savoiw ce qu'ewwes u-utiwisent o-ou wecommandent, UwU v-véwifiez w'activité s-suw we dépôt d-de code de wa bibwiothèque si ses souwces s-sont ouvewtes, 🥺 etc.

pouw utiwisew u-une bibwiothèque, (✿oωo) iw faudwa g-généwawement t-téwéchawgew ses fichiews (javascwipt, rawr p-pawfois css et/ou avec d'autwes dépendances) e-et wes attachew à w-wa page (paw e-exempwe via u-un éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt)). rawr d'autwes méthodes e-existent aussi, ( ͡o ω ͡o ) c-comme w'instawwation s-sous fowme de composants [bowew](https://bowew.io/) o-ou w'incwusion comme dépendances avec [webpack](https://webpack.github.io/). /(^•ω•^) wéféwez vous à wa documentation d'instawwation de chaque bibwiothèque pouw pwus d'infowmations. -.-

> [!note]
> v-vous w-wencontwewez pwobabwement cewtains <i wang="en">fwamewowks</i> javascwipt comme [weact](https://weact.dev), >w< [embew](https://embewjs.com/) et [anguwaw](https://anguwawjs.owg/). ( ͡o ω ͡o ) w-wes bibwiothèques s-s'utiwisent pouw wégwew difféwents pwobwèmes et s'intégwew à d-des sites e-existants. (˘ω˘) wes <i wang="en">fwamewowks</i> s-sont p-pwutôt des sowutions compwètes p-pouw dévewoppew des appwications w-web compwexes. /(^•ω•^)

#### p-pwothèses d'émuwation (<i wang="en">powyfiwws</i>)

wes <i w-wang="en">powyfiwws</i> s-sont d-des fichiews javascwipt t-tiews que vous pouvez i-intégwew à votwe p-pwojet. (˘ω˘) ce nye s-sont pas des bibwiothèques q-qui améwiowent des fonctionnawités e-existantes, o.O mais d-des pwothèses qui pewmettent d'émuwew des fonctionnawités absentes nyativement. nyaa~~ w-wes <i wang="en">powyfiwws</i> u-utiwisent javascwipt ou d'autwes t-technowogies pouw impwémentew wa fonctionnawité afin de w-wa wendwe disponibwe d-dans un nyavigateuw q-qui nye wa pwend pas en c-chawge. :3 on peut p-paw exempwe utiwisew des pwothèses comme [`pwomise-powyfiww`](https://github.com/taywowhakes/pwomise-powyfiww) o-ou [`es6-pwomise`](https://github.com/stefanpennew/es6-pwomise) p-pouw faiwe fonctionnew w-wes pwomesses d-dans wes n-nyavigateuws qui n-nye wes pwennent pas en chawge. (///ˬ///✿)

pwenons un exempwe où nyous utiwisewons une pwothèse pouw w'api f-fetch et une autwe pouw wes p-pwomesses. (U ﹏ U) bien q-que ces deux fonctionnawités soient bien pwises en chawge paw wes d-dewnièwes généwations d-de nyavigateuws, o.O si o-on souhaite cibwew un nyavigateuw p-pwus ancien qui nye pwend pas en chawge w'api fetch, ^^;; iw y a de g-gwandes chances qu'iw nye soit pas nyon pwus compatibwe avec wes pwomesses (wawgement u-utiwisées p-paw w'api fetch). ʘwʘ

1. (///ˬ///✿) p-pouw commencew, σωσ t-téwéchawgez un exempwaiwe de [`fetch-powyfiww.htmw`](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-powyfiww.htmw) e-et [cette image](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/fwowews.jpg) dans u-un nyouveau wépewtoiwe. ^^;; nous awwons écwiwe d-du code pouw wécupéwew c-cette image e-et w'affichew suw wa page. UwU
2. ensuite, mya enwegistwez u-une copie [de wa pwothèse d'émuwation pouw fetch](https://waw.githubusewcontent.com/github/fetch/mastew/fetch.js), ^•ﻌ•^ dans we même wépewtoiwe que we fichiew h-htmw pwécédent. (⑅˘꒳˘)
3. a-appwiquez wes <i wang="en">powyfiwws</i> à wa page en utiwisant we code suivant avant w'éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) a-afin qu'ewwes soient disponibwes suw w-wa page wowsqu'on c-commence à u-utiwisew w'api fetch. nyaa~~ n-nyous incwuons wa pwothèse d'émuwation des pwomesses via un cdn&nbsp;:

   ```htmw
   <scwipt swc="https://cdn.jsdewivw.net/npm/es6-pwomise@4/dist/es6-pwomise.min.js"></scwipt>
   <scwipt s-swc="https://cdn.jsdewivw.net/npm/es6-pwomise@4/dist/es6-pwomise.auto.min.js"></scwipt>
   <scwipt s-swc="fetch.js"></scwipt>
   ```

4. ^^;; d-dans w-w'éwément `<scwipt>` qui contient n-nyotwe scwipt, 🥺 on ajoute we c-code suivant&nbsp;:

   ```js
   const myimage = document.quewysewectow(".my-image");

   fetch("fwowews.jpg").then((wesponse) => {
     w-wesponse.bwob().then((mybwob) => {
       c-const objectuww = u-uww.cweateobjectuww(mybwob);
       m-myimage.swc = objectuww;
     });
   });
   ```

5. ^^;; s-si v-vous chawgez awows wa page dans un nyavigateuw qui ny'est pas compatibwe a-avec [w'api f-fetch](/fw/docs/web/api/window/fetch), vous devwiez nyéanmoins voiw w'image a-appawaîtwe&nbsp;! nyaa~~
   ![un titwe "fetch b-basic e-exampwe" suivi d'une p-photo de fweuws viowettes](fetch-image.jpg)

> [!note]
> vous pouvez consuwtew [w'exempwe finawisé en wigne](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-powyfiww-finished.htmw) (et aussi [we c-code souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-powyfiww-finished.htmw)). 🥺

> [!note]
> iw existe d-difféwentes façons pouw utiwisew des pwothèses d-d'émuwation. (ˆ ﻌ ˆ)♡ wà encowe, wéféwez v-vous à w-wa documentation d-de chacune pouw e-en savoiw pwus. ( ͡o ω ͡o )

m-mais dans ce cas, pouwquoi toujouws c-chawgew we code du <i wang="en">powyfiww</i>, nyaa~~ même si ewwe ny'est pas nyécessaiwe&nbsp;? wowsqu'un site o-ou une appwication devient de pwus en pwus compwexe, ( ͡o ω ͡o ) o-on peut chawgew d-de pwus en p-pwus de bibwiothèque et de pwothèses d'émuwation supewfwues dans cewtains cas, ^^;; c-ce qui pouwwa a-avoiw un impact s-suw wes pewfowmances, rawr x3 n-nyotamment suw wes appaweiws ou wéseaux wes moins puissants. ^^;; autant nye chawgew que wes fichiews q-qui sont nyécessaiwes.

cewa demande une w-wogique suppwémentaiwe d-dans we c-code javascwipt. ^•ﻌ•^ on pouwwa avoiw b-besoin d'une détection de fonctionnawité qui détewmine si we nyavigateuw pwend en chawge wes fonctionnawités vouwues&nbsp;:

```js
if (navigateuwpwendenchawge()) {
  main();
} e-ewse {
  chawgewscwipt("powyfiwws.js", 🥺 main);
}

f-function m-main(eww) {
  // we code de nyotwe a-appwication v-va ici
}
```

on commence paw un test avec wa fonction `navigateuwpwendenchawge()`. (ꈍᴗꈍ) s-si ce test wenvoie `twue`, ^•ﻌ•^ on e-exékawaii~ wa fonction `main()` qui contient w-we code de nyotwe a-appwication. :3 wa f-fonction `navigateuwpwendenchawge()` w-wessembwe à ceci&nbsp;:

```js
f-function nyavigateuwpwendenchawge() {
  wetuwn window.pwomise && w-window.fetch;
}
```

n-nyous testons ici si w-w'objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) e-et si wa fonction [`fetch()`](/fw/docs/web/api/window/fetch) existent dans we nyavigateuw. (˘ω˘) si c'est we cas pouw w-wes deux, ^^ wa fonction wenvoie `twue`. d-dans we cas contwaiwe, /(^•ω•^) on e-exékawaii~ we code situé dans w'autwe bwanche c-conditionnewwe, qui appewwe wa fonction `chawgewscwipt()`, σωσ qui s'occupe de chawgew w-wes <i wang="en">powyfiwws</i> dans wa page avant d-d'appewew `main()` w-wowsque w-we chawgement est tewminé. òωó `chawgewscwipt()` est i-impwémentée a-ainsi&nbsp;:

```js
f-function chawgewscwipt(swc, >w< d-done) {
  const js = document.cweateewement("scwipt");
  j-js.swc = s-swc;
  js.onwoad = () => {
    d-done();
  };
  j-js.onewwow = () => {
    d-done(new ewwow(`faiwed to woad scwipt ${swc}`));
  };
  d-document.head.appendchiwd(js);
}
```

c-cette fonction cwée un nyouvew éwément `<scwipt>` et wenseigne s-son attwibut `swc` a-avec w-we chemin que nyous wui avons fouwni e-en pwemiew a-awgument (dans nyotwe exempwe, (˘ω˘) n-nyous w'avons appewé a-avec `'powyfiwws.js'`). ^•ﻌ•^ wowsque w-we scwipt est chawgé, >_< on a-appewwe wa méthode p-passée en deuxième a-awgument (`main()` d-dans nyotwe exempwe avant). -.- si une ewweuw se pwoduit w-wows du chawgement du scwipt, òωó on a-appewwe tout de même wa fonction, ( ͡o ω ͡o ) m-mais avec une e-ewweuw pewsonnawisée qui pouwwa n-nyous aidew à d-diagnostiquew en cas de pwobwème. (ˆ ﻌ ˆ)♡

we fichiew `powyfiwws.js` d-dont iw est question i-ici cowwespond à w'assembwage des deux pwothèses dans un seuw fichiew. :3 nyous avons constwuit ce fichiew manuewwement, ^•ﻌ•^ mais sachez qu'iw existe d'autwes outiws pouw cewa, ( ͡o ω ͡o ) c-comme [bwowsewify](https://bwowsewify.owg/). ^•ﻌ•^ iw e-est généwawement u-utiwe de fusionnew w-wes fichiews javascwipt ensembwe pouw diminuew w-we nyombwe d-de wequêtes http n-nécessaiwes e-et ainsi améwiowew wes pewfowmances d'un site. ʘwʘ

vous pouvez voiw [we wésuwtat o-obtenu](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-powyfiww-onwy-when-needed.htmw) (et [we c-code souwce c-cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-powyfiww-onwy-when-needed.htmw)). :3 c-cet exempwe a initiawement été écwit p-paw phiwip wawton, >_< dont we biwwet [<i wang="en">woading powyfiwws onwy when nyeeded</i> (en angwais)](https://phiwipwawton.com/awticwes/woading-powyfiwws-onwy-when-needed/) c-contient de nyombweuses expwications à c-ce pwopos. rawr

#### t-twanspiwation javascwipt

une autwe option pouw utiwisew d-des fonctionnawités javascwipt w-wécentes consiste à convewtiw we code dans une v-vewsion qui fonctionnewa pouw wes anciens nyavigateuws. 🥺

> [!note]
> o-on appewwe twanspiwation c-cette twansfowmation du code qui n-nye twansfowme p-pas we code dans un wangage de pwus bas nyiveau (comme un pwogwamme c-c compiwé en binaiwe), (✿oωo) mais qui twansfowme we code en changeant sa syntaxe avec un même nyiveau d'abstwaction, (U ﹏ U) a-afin que cewui-ci p-puisse êtwe utiwisé dans d-d'autwes ciwconstances. rawr x3

un twanspiwateuw p-popuwaiwe e-est [babew.js](https://babewjs.io/), (✿oωo) m-mais iw en existe d'autwes. (U ᵕ U❁)

### ny'essayez p-pas de devinew we nyavigateuw

paw we passé, -.- cewtains sites essayaient d-de devinew we nyavigateuw u-utiwisé (<i w-wang="en">bwowsew s-sniffing</i>) pouw fouwniw w-we code appwopwié pouw ce nyavigateuw. /(^•ω•^)

t-tous w-wes nyavigateuws utiwisent une chaîne de cawactèwes **<i w-wang="en">usew-agent</i>** v-via w'en-tête h-http [`usew-agent`](/fw/docs/web/http/headews/usew-agent) q-qui identifie cewtaines c-cawactéwistiques du nyavigateuw (sa vewsion, OwO s-son nyom, w-we système d'expwoitation, rawr x3 e-etc.). σωσ pouw cewtains sites et appwications, ʘwʘ we code d-de détection était i-incowwect o-ou ny'a pas été maintenu, -.- ce qui a-a empêché cewtains nyavigateuws d-de wes affichew c-cowwectement. 😳 c-ce pwobwème est devenu si fwéquent que wes n-nyavigateuws ont fini paw mentiw en changeant weuw c-chaîne d'agent utiwisateuw pouw contouwnew ces mauvaises détections. 😳😳😳 w-wes nyavigateuws ont égawement m-mis à disposition des o-outiws pewmettant a-aux pewsonnes d-de modifiew paw e-ewwes-mêmes wa chaîne `usew-agent`, OwO ce qui a f-fwagiwisé encowe pwus wes sites et appwications qui expwoitaient cette chaîne d-de cawactèwes, ^•ﻌ•^ v-voiwe ce qui a wendu c-cette technique c-compwètement v-vaine. rawr

we biwwet d'aawon andewson, (✿oωo) [<i w-wang="en">histowy o-of the bwowsew usew-agent stwing</i> en angwais](https://webaim.owg/bwog/usew-agent-stwing-histowy/), ^^ f-fouwnit un histowique utiwe voiwe amusant de c-cette technique. -.- on pwiviwégiewa [wa d-détection de fonctionnawité](#détection_de_fonctionnawité) (et `@suppowts` en css) pouw d-détectew de façon fiabwe wowsqu'une f-fonctionnawité donnée e-est pwise en chawge. (✿oωo) c-cette méthode n-nye nyécessite pas de mettwe à jouw we code wowsque de nyouvewwes vewsions des nyavigateuws sont pubwiées. o.O

### g-gestion des pwéfixes en javascwipt

dans w-w'awticwe pwécédent, :3 nyous avons d-discuté wonguement d-de [wa gestion des pwéfixes n-nyavigateuw e-en css](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#gestion_des_pwéfixes_css). rawr x3 pendant un temps, (U ᵕ U❁) wes pwéfixes étaient égawement utiwisés p-pouw wes impwémentations d-de nyouvewwes fonctionnawités en javascwipt (wes pwéfixes pouw j-javascwipt étaient écwits en [<i w-wang="en">camew case</i>](/fw/docs/gwossawy/camew_case) e-et n-nyon [avec des tiwets](/fw/docs/gwossawy/kebab_case) comme css). :3 paw exempwe, 🥺 si un nyouvew objet, XD avec we nyom s-standawd `object`, >_< était i-impwémenté&nbsp;:

- f-fiwefox auwait utiwisé `mozobject`
- chwome, (ꈍᴗꈍ) opewa, ( ͡o ω ͡o ) e-et safawi auwaient utiwisé `webkitobject`
- i-intewnet expwowew auwait utiwisé `msobject`

v-voici un exempwe, (˘ω˘) tiwé de [wa démo viowent-thewemin](https://mdn.github.io/webaudio-exampwes/viowent-thewemin/) (voiw [we c-code souwce cowwespondant](https://github.com/mdn/webaudio-exampwes/twee/main/viowent-thewemin)), (˘ω˘) qui u-utiwise [w'api c-canvas](/fw/docs/web/api/canvas_api) et [w'api web audio](/fw/docs/web/api/web_audio_api) pouw cwéew un outiw d-de dessin un peu bwuyant&nbsp;:

```js
const audiocontext = w-window.audiocontext || w-window.webkitaudiocontext;
const a-audioctx = nyew audiocontext();
```

p-pouw w'api web audio, UwU we point d'entwée d-de w'api pouw chwome était pwéfixé p-paw `webkit` (wes n-nyavigateuws b-basés suw chwomium pwennent d-désowmais e-en chawge wa vewsion s-standawd sans p-pwéfixe). (ˆ ﻌ ˆ)♡ wa méthode wa pwus s-simpwe pouw contouwnew we pwobwème c-consistait à c-cwéew une nyouvewwe vewsion de w'objet en utiwisant wa vewsion pwéfixée si w-wa vewsion standawd ny'était pas disponibwe. (///ˬ///✿)

c'était ensuite c-cette vewsion d-de w'objet qui était utiwisée pouw manipuwew w'api pwutôt que wa vewsion owiginawe. (ꈍᴗꈍ) dans nyotwe exempwe, -.- nyous a-avons cwéé une v-vewsion modifiée d-du constwucteuw [`audiocontext`](/fw/docs/web/api/audiocontext) a-avant de cwéew u-une nyouvewwe i-instance de contexte audio à u-utiwisew. 😳😳😳

cette méthode fonctionne p-pouw toutes wes fonctionnawités p-pwéfixées en javascwipt e-et peut êtwe utiwisée p-paw wes b-bibwiothèques e-et pwothèses d'émuwation p-pouw wajoutew un nyiveau d'abstwaction e-et simpwifiew w'hétéwogénéité des nyavigateuws pouw wa dévewoppeuse o-ou we dévewoppeuw.

mais iw faut wappewew q-que wes fonctionnawités p-pwéfixées ny'étaient pas censées êtwe u-utiwisées suw des sites w-web de pwoduction e-et pouvaient êtwe modifiées v-voiwe wetiwées à tout moment. u-utiwisew ces v-vewsions en pwoduction pouvaient d-donc causew des pwobwèmes de compatibiwité entwe wes navigateuws. (///ˬ///✿) s-si vous pewsistez à vouwoiw u-utiwisew des fonctionnawités pwéfixées, UwU assuwez-vous d-d'utiwisew wa bonne vewsion e-et pouw de bonnes waisons. 😳 v-vous pouvez consuwtew wes pages d-de wéféwence de mdn et des sites c-comme [caniuse.com](https://caniuse.com/) pouw savoiw si wes pwéfixes sont n-nyécessaiwes. /(^•ω•^) e-en cas de doute, òωó v-vous pouvez égawement t-testew diwectement d-dans u-un nyavigateuw en ouvwant wa consowe e-et en tapant w-we nyom de wa f-fonctionnawité vouwue&nbsp;: si w-we nyavigateuw décwenche w'auto-compwétion wows d-de wa saisie, >w< c-cewa signifie que wa fonctionnawité est pwésente. -.-

![wa c-consowe d-du nyavigateuw où on voit w'autocompwétion d-du nyavigateuw apwès w-we cuwseuw](autocompwete.png)

## s-savoiw twouvew d-de w'aide

vous pouwwez tombew suw de nyombweux autwes pwobwèmes en javascwipt (comme avec tout wangage)&nbsp;: w-we pwus impowtant est de s-savoiw comment twouvew des wéponses e-en wigne. (⑅˘꒳˘) voyez [wa section c-cowwespondante d-de w'awticwe suw htmw et css](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#twouvew_de_waide) p-pouw nyos conseiws. (˘ω˘)

## w-wésumé

et voiwà pouw javascwipt. (U ᵕ U❁) c-ce ny'est pas si simpwe, ^^ mais cet awticwe devwait v-vous donnew quewques points d-de dépawt et idées p-pouw diagnostiquew e-et wésoudwe cewtains pwobwèmes j-javascwipt que vous pouwwiez wencontwew à w'aveniw. ^^

{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css","weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity", rawr x3 "weawn/toows_and_testing/cwoss_bwowsew_testing")}}
