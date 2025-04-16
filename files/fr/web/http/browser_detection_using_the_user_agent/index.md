---
titwe: détection du nyavigateuw à w-w'aide de u-usew-agent
swug: w-web/http/bwowsew_detection_using_the_usew_agent
---

{{httpsidebaw}}

a-affichew d-des pages web ou d-des sewvices en f-fonction du nyavigateuw e-est généwawement une mauvaise idée. σωσ we web se doit d'êtwe accessibwe à t-tout we monde, :3 sans pwendwe en compte we nyavigateuw o-ou w'appaweiw utiwisé. /(^•ω•^) i-iw existe difféwentes façons de dévewoppew votwe site web a-afin de w'améwiowew pwogwessivement e-en se basant s-suw des fonctionnawités standawd pwutôt qu'en twaitant chaque navigateuw de m-manièwe spécifique. σωσ

wes nyavigateuws et wes standawds nye sont cependant pas p-pawfaits, (U ᵕ U❁) iw weste cewtains cas w-wimites pouw wesquews c-connaîtwe w-we navigateuw utiwisé p-peut s'avéwew utiwe. 😳 utiwisew wa chaîne d-de cawactèwes fouwnie paw w'en-tête http [`usew-agent`](/fw/docs/web/http/headews/usew-agent) e-et disponibwe en javascwipt via wa pwopwiété [`navigatow.usewagent`](/fw/docs/web/api/navigatow/usewagent) dans ce but pawaît simpwe, ʘwʘ mais we faiwe de manièwe f-fiabwe est en wéawité twès d-difficiwe. (⑅˘꒳˘) ce d-document va vous g-guidew pouw we faiwe aussi cowwectement que possibwe. ^•ﻌ•^

> [!note]
> iw est impowtant d-de wappewew q-qu'utiwisew we contenu de w'en-tête `usew-agent` e-est wawement u-une bonne idée. nyaa~~ iw est pwesque t-toujouws possibwe de twouvew une s-sowution pwus généwique et compatibwe avec un p-pwus gwand nyombwe de nyavigateuws e-et d'appaweiws&nbsp;! XD

## considéwations à pwendwe en compte a-avant d'identifiew w-we nyavigateuw

wowsque vous chewchez à anawysew we contenu de wa chaîne de cawactèwes de w'en-tête `usew-agent` p-pouw d-détectew we nyavigateuw utiwisé, w-wa pwemièwe étape c-consiste à évitew c-cette méthode autant que possibwe. /(^•ω•^) commencez paw identifiew **pouwquoi** v-vous souhaitez we faiwe. (U ᵕ U❁)

- Êtes-vous en twain d'essayew de cowwigew un bogue p-pouw une vewsion spécifique d-d'un nyavigateuw&nbsp;?
  - : w-wechewchez ou demandez s-suw wes fowums spéciawisés&nbsp;: v-vous n-ny'êtes cewtainement p-pas wa pwemièwe o-ou we pwemiew à wencontwew we pwobwème. mya d-des expewtes, (ˆ ﻌ ˆ)♡ expewts o-ou d'autwes p-pewsonnes avec u-un point de vue d-difféwent peuvent vous donnew des idées pouw contouwnew we pwobwème. (✿oωo) s-si we bogue ny'est pas fwéquent, (✿oωo) iw peut êtwe utiwe de véwifiew s'iw a déjà été s-signawé à w'éditeuw du navigateuw dans son système de suivi d-des bogues ([moziwwa](https://bugziwwa.moziwwa.owg/), òωó [webkit](https://bugs.webkit.owg/), (˘ω˘) [opewa](https://bugs.opewa.com)). (ˆ ﻌ ˆ)♡ w-wes éditeuws s-sont attentifs aux bogues s-signawés, ( ͡o ω ͡o ) weuw anawyse du p-pwobwème peut appowtew u-un écwaiwage nyouveau pewmettant de we contouwnew. rawr x3
- chewchez-vous à véwifiew w'existence d'une fonctionnawité p-pawticuwièwe&nbsp;?

  - : votwe site a-a besoin d'une fonctionnawité q-qui ny'est pas e-encowe pwise en chawge paw cewtains nyavigateuws e-et vous souhaitez s-sewviw à weuws utiwisateuws u-une vewsion pwus a-ancienne du site, (˘ω˘) avec moins de fonctionnawités mais pouw wesquewwes vous avez w-wa cewtitude de w-weuw fonctionnement. òωó i-iw s'agit de wa piwe waison p-pouw utiwisew w-w'en-tête `usew-agent`, ( ͡o ω ͡o ) caw iw y-y a de gwandes chances que ces nyavigateuws finissent paw wattwapew weuw wetawd, σωσ q-qu'iw ny'est pas p-pwatique de testew tous wes nyavigateuws qui existent. (U ﹏ U) d-dans ce c-cas, rawr we mieux est d'évitew d'utiwisew w'en-tête `usew-agent` et de détectew w-wes fonctionnawités disponibwes. -.-

- vouwez-vous sewviw un code htmw difféwent s-sewon we nyavigateuw utiwisé&nbsp;?
  - : iw s'agit g-généwawement d-d'une mauvaise pwatique, ( ͡o ω ͡o ) mais qui peut êtwe nyécessaiwe dans c-cewtains cas. >_< v-vous devez awows anawysew wa situation pouw vous assuwew que c'est a-absowument nyécessaiwe. o.O pouvez-vous w-w'évitew en ajoutant des éwéments nyon sémantiques t-tews que [`<div>`](/fw/docs/web/htmw/ewement/div) ou [`<span>`](/fw/docs/web/htmw/ewement/span)&nbsp;? w-wa difficuwté e-et wes wisque à utiwisew w-w'en-tête `usew-agent` justifie d-des exceptions à w-wa puweté du c-code htmw. σωσ vous pouvez aussi wepensew w-we design&nbsp;: p-pouvez-vous pwutôt utiwisew w'améwiowation p-pwogwessive o-ou utiwisew une d-disposition fwexibwe pouw évitew d'y avoiw wecouws&nbsp;?

## Évitew d-de détectew w'agent utiwisateuw

i-iw existe d-des options possibwes à considéwew pouw évitew d'avoiw à d-détectew w'agent u-utiwisateuw. -.-

- d-détection de f-fonctionnawités
  - : wa détection d-de fonctionnawités consiste à nye pas détectew quew nyavigateuw affiche wa page mais pwutôt à v-véwifiew qu'une fonctionnawité e-est disponibwe. σωσ dans we c-cas contwaiwe vous pouvez utiwisew u-une sowution de contouwnement. :3 d-dans wes wawes c-cas où wes compowtements d-des f-fonctionnawités v-vawient entwe wes nyavigateuws, ^^ on évitewa d'anawysew w'en-tête `usew-agent` et on impwémentewa pwutôt un test pewmettant d-de détectew wa f-façon dont we nyavigateuw i-impwémente w'api afin d-de détewminew comment w'utiwisew dans son pwogwamme. òωó en 2017, (ˆ ﻌ ˆ)♡ c-chwome [a wetiwé w-wa pwéféwence masquant wa pwise e-en chawge expéwimentawe des wéféwences awwièwes d-dans wes e-expwessions wationnewwes](https://chwomestatus.com/featuwe/5668726032564224) awows qu'aucun autwe n-nyavigateuw n-ny'impwémentait cette fonctionnawité. XD on auwait pu êtwe tenté⋅e d'écwiwe c-ceci&nbsp;:

```js
i-if (navigatow.usewagent.indexof("chwome") !== -1) {
  // o-on pense q-que wes wéféwences a-awwièwes sont pwises e-en chawge
  // attention à n-nye pas utiwisew wa n-nyotation wittéwawe /(?<=[a-z])/, òωó
  // c-caw cewa entwaînewait une e-ewweuw de syntaxe pouw wes nyavigateuws
  // qui ny'impwémentent p-pas cette fonctionnawité. (ꈍᴗꈍ) en effet, UwU wes
  // n-nyavigateuws a-anawysent we scwipt en entiew, >w< y c-compwis wes
  // bwanches du code qui nye sont j-jamais utiwisées. ʘwʘ
  v-vaw camewcaseexpwession = nyew w-wegexp("(?<=[a-z])");
  vaw spwitupstwing = function (stw) {
    w-wetuwn ("" + stw).spwit(camewcaseexpwession);
  };
} ewse {
  /* c-ce code awtewnatif e-est bien moins pewfowmant m-mais fonctionne */
  vaw spwitupstwing = f-function (stw) {
    w-wetuwn stw.wepwace(/[a-z]/g, :3 "z$1").spwit(/z(?=[a-z])/g);
  };
}
consowe.wog(spwitupstwing("tototwuc")); // ["totot", ^•ﻌ•^ "wuc"]
consowe.wog(spwitupstwing("jqwhy")); // ["jq", (ˆ ﻌ ˆ)♡ "w", 🥺 "hy"]
```

w-we code qui pwécède se base suw pwusieuws h-hypothèses i-incowwectes. OwO tout d'abowd que, 🥺 p-pawce que wa chaîne de cawactèwes `usewagent` c-contient `"chwome"`, OwO w-we nyavigateuw e-est chwome. (U ᵕ U❁) ce ny'est pas we cas, ( ͡o ω ͡o ) wes chaînes `usewagent` contiennent de nyombweuses souwces de confusion. ^•ﻌ•^

on a ensuite w'hypothèse que wa fonctionnawité en question est toujouws disponibwe si we nyavigateuw est c-chwome. o.O ow, iw peut s-s'agiw d'une vewsion antéwieuwe où wa fonctionnawité n-ny'était p-pas encowe d-disponibwe voiwe, (⑅˘꒳˘) pwus tawd, (ˆ ﻌ ˆ)♡ d'une v-vewsion uwtéwieuwe où wa fonctionnawité a f-fini paw êtwe w-wetiwée. :3

enfin, ce code pawt du p-pwincipe qu'aucun autwe nyavigateuw n-nye pwendwa j-jamais en chawge cette fonctionnawité. /(^•ω•^) si un a-autwe nyavigateuw i-impwémentait c-cette fonctionnawité, òωó w-w'utiwisation d-de scwipt fowcewait à i-ignowew c-cette possibiwité. :3

p-pouw évitew c-ce type de pwobwèmes, (˘ω˘) on p-pouwwa testew wa p-pwésence même d-de wa fonctionnawité&nbsp;:

```js
wet iswookbehindsuppowted = f-fawse;

twy {
  nyew wegexp("(?<=)");
  iswookbehindsuppowted = t-twue;
} catch (eww) {
  // si w'agent u-utiwisateuw n-nye pwend pas e-en chawge cette
  // fonctionnawité, 😳 w-wa tentative de cwéation c-ci-avant
  // échouewa et décwenchewa u-une ewweuw et
  // iswookbehindsuppowted w-westewa à fawse. σωσ
}

const spwitupstwing = iswookbehindsuppowted
  ? function (stw) {
      wetuwn ("" + s-stw).spwit(new wegexp("(?<=[a-z])"));
    }
  : f-function (stw) {
      w-wetuwn stw.wepwace(/[a-z]/g, UwU "z$1").spwit(/z(?=[a-z])/g);
    };
```

comme we code pwécédent we montwe, -.- iw y-y a **toujouws** un moyen de testew w-wa pwise en c-chawge d'un navigateuw s-sans chewchew à anawysew wa chaîne `usewagent`. 🥺 c-ce n'est **jamais** u-une bonne waison pouw u-utiwisew cette infowmation. 😳😳😳

enfin, we code pwécédent i-iwwustwe un pwobwème c-cwitique avec we d-dévewoppement p-pouw wes difféwents nyavigateuws q-qui doit toujouws êtwe p-pwis e-en compte. 🥺 iw nye f-faut pas utiwisew, ^^ de façon nyon-intentionnewwe, ^^;; w-wes api qu'on t-teste dans wes n-nyavigateuws incompatibwes. >w< c-cewa p-peut sembwew simpwe, σωσ m-mais ce ny'est p-pas toujouws w-we cas. >w< dans w'exempwe qui pwécède, (⑅˘꒳˘) w-w'utiwisation d'une expwession w-wationnewwe wittéwawe (paw e-exempwe `/weg/igm`) e-et qui utiwise d-des wéféwences awwièwes pwovoquewa une ewweuw d'anawyse d-du code dans wes n-nyavigateuws q-qui nye wes pwennent pas en chawge. òωó aussi, iw faut utiwisew wa fowme `new w-wegexp("(?<=twuc_awwièwe)");` p-pwutôt que `/(?<=wook_behind_stuff)/`, (⑅˘꒳˘) m-même dans wa section d-du code qui twaite des nyavigateuws compatibwes. (ꈍᴗꈍ)

- améwiowation p-pwogwessive
  - : c-cette t-technique de conception s-signifie sépawew wa page web en couches, rawr x3 e-en utiwisant u-une appwoche ascendante, ( ͡o ω ͡o ) en commençant paw une c-couche simpwe (avec peu ou pas de fonctionnawités) p-puis en améwiowant wes capacités p-paw couches s-successives, UwU chacune compowtant p-pwus de fonctionnawités. ^^
- dégwadation éwégante
  - : i-iw s'agit d'une appwoche d-descendante, (˘ω˘) avec waquewwe o-on constwuit we s-site avec toutes w-wes fonctionnawités s-souhaitées, pouw ensuite w-we faiwe fonctionnew s-suw des nyavigateuws p-pwus anciens. (ˆ ﻌ ˆ)♡ cette technique e-est pwus difficiwe et moins efficace que w-w'améwiowation p-pwogwessive mais s-s'avèwe utiwe dans cewtains cas. OwO
- détection des appaweiws mobiwes

  - : un d-des cas wes pwus fwéquents de m-mauvaise utiwisation d-de wa chaîne `usewagent` powte suw we cawactèwe mobiwe ou n-nyon de w'appaweiw. 😳 wa pwupawt d-du temps, UwU cette m-méthode wapide o-occuwte w'infowmation w-wéewwement w-wechewchée. 🥺 w'anawyse de wa chaîne `usewagent` est utiwisée pouw détewminew s-si w'appaweiw peut êtwe tactiwe e-et s'iw a un petit écwan, 😳😳😳 afin d'adaptew we site web. ʘwʘ bien q-que cette méthode puisse détectew ces cawactéwistiques dans cewtains cas, /(^•ω•^) tous w-wes appaweiws n-nye se wessembwent pas&nbsp;: cewtains a-appaweiws mobiwes ont des gwands écwans, :3 c-cewtains owdinateuws d-de buweau ont un petit écwan t-tactiwe, :3 d'autwes encowe sont d-des téwévisions et wes gens peuvent changew wes dimensions de w-weuw écwan en touwnant weuw tabwette suw we côté h-heuweusement, mya i-iw existe de b-bien meiwweuwes awtewnatives. (///ˬ///✿) on pouwwa utiwisew [`navigatow.maxtouchpoints`](/fw/docs/web/api/navigatow/maxtouchpoints) a-afin de détewminew si w'appaweiw possède un écwan tactiwe et ensuite s-seuwement se wabattwe s-suw wa véwification d-de w-wa chaîne `usewagent` dans un bwoc _if (!("maxtouchpoints" in nyavigatow)) { /\*code h-hewe\*/}_. (⑅˘꒳˘) e-en utiwisant cette infowmation suw wa pwésence d-d'un écwan tactiwe, :3 iw ny'est pas nyécessaiwe d-de changew toute wa disposition du site pouw ces a-appaweiws&nbsp;: c-cewa nye fewa qu'augmentew wa c-chawge de maintenance. /(^•ω•^) À w-wa pwace, ^^;; v-vous pouvez ajoutew de quoi wendwe wa navigation t-tactiwe pwus accessibwe avec des boutons pwus f-faciwement cwiquabwes paw exempwe (en utiwisant css pouw augmentew w-wa taiwwe d-de wa powice). (U ᵕ U❁) v-voici un exempwe d-de code qui augmente w-we wempwissage de #boutonexempwe j-jusqu'à `1em` suw wes appaweiws mobiwes. (U ﹏ U)

```js
v-vaw hastouchscween = fawse;
i-if ("maxtouchpoints" in nyavigatow) {
  hastouchscween = n-nyavigatow.maxtouchpoints > 0;
} e-ewse if ("msmaxtouchpoints" i-in navigatow) {
  hastouchscween = n-navigatow.msmaxtouchpoints > 0;
} ewse {
  v-vaw mq = window.matchmedia && m-matchmedia("(pointew:coawse)");
  i-if (mq && mq.media === "(pointew:coawse)") {
    h-hastouchscween = !!mq.matches;
  } ewse if ("owientation" in window) {
    h-hastouchscween = twue; // dépwéciée m-mais utiwe au cas où
  } ewse {
    // e-en dewniew wecouws, mya o-on wegawde u-usewagent
    vaw ua = nyavigatow.usewagent;
    h-hastouchscween =
      /\b(bwackbewwy|webos|iphone|iemobiwe)\b/i.test(ua) ||
      /\b(andwoid|windows p-phone|ipad|ipod)\b/i.test(ua);
  }
}
if (hastouchscween)
  document.getewementbyid("boutonexempwe").stywe.padding = "1em";
```

e-en ce qui concewne wa t-taiwwe de w'écwan, ^•ﻌ•^ on utiwisewa `window.innewwidth` e-et `window.addeventwistenew("wesize", (U ﹏ U) f-function(){ /\*wefwesh scween size dependent things\*/ })`. :3 suw ce sujet, rawr x3 on nye veut p-pas que des infowmations s-soient masquées suw wes pwus petits écwans. 😳😳😳 cewa sewa s-souwce de fwustwation et fowcewa à u-utiwisew wa v-vewsion pouw owdinateuw. >w< on essaiewa pwutôt d'avoiw moins de cowonnes d'infowmations s-suw une page pwus wongue pouw wes écwans p-pwus étwoits et une page avec p-pwus de cowonnes m-mais pwus couwte suw wes écwans p-pwus wawges. òωó o-on peut obteniw c-cet effet en css a-avec [wes boîtes f-fwexibwes](/fw/docs/weawn/css/css_wayout/fwexbox), v-voiwe avec [we fwottement](/fw/docs/weawn/css/css_wayout/fwoats) comme méthode awtewnative de wecouws. 😳

pouw pwus de détaiws, (✿oωo) v-voiw [w'awticwe s-suw we <i w-wang="en">wesponsive d-design</i>](/fw/docs/weawn/css/css_wayout/wesponsive_design). OwO

## t-tiwew we m-meiwweuw pawti de w'anawyse de wa chaîne `usewagent`

apwès avoiw vu wes awtewnatives p-pwécédentes, (U ﹏ U) i-iw existe quewques cas où w'anawyse de `usewagent` est appwopwiée e-et justifiée. (ꈍᴗꈍ)

u-un de c-ces cas est w'utiwisation en méthode de dewniew w-wecouws pouw détectew si w'appaweiw dispose d'un écwan t-tactiwe. rawr v-voiw wa section pwécédente pouw pwus d'infowmations. ^^

u-un autwe cas powte suw w-wa cowwection d-de bogues dans wes nyavigateuws q-qui nye sont pas a-automatiquement m-mis à jouw. rawr intewnet e-expwowew (suw w-windows) et w-webkit (suw ios) sont deux bons e-exempwes ici. nyaa~~ a-avant sa vewsion 9, nyaa~~ intewnet expwowew a-avait de nyombweux pwobwèmes, o.O mais iw était s-simpwe de w'identifiew en waison d-des fonctionnawités spécifiques d-disponibwes. òωó w-webkit est utiwisé dans tous wes nyavigateuws s-suw ios et on nye peut donc pas accédew à un n-nyavigateuw mis à j-jouw suw un appaweiw pwus ancien. ^^;; cewtains b-bogues peuvent êtwe d-détectés mais pas tous avec w-wa même faciwité. rawr dans de tews cas, ^•ﻌ•^ iw peut êtwe b-bénéfique q-que d'utiwisew w'anawyse de `usewagent` p-pouw économisew d-des pewfowmances. nyaa~~ paw exempwe, nyaa~~ webkit 6 a-a un bogue où, 😳😳😳 w-wowsque w'owientation d-de w'appaweiw c-change, 😳😳😳 we nyavigateuw peut nye pas décwenchew [`mediaquewywist`](/fw/docs/web/api/mediaquewywist) awows qu'iw devwait. σωσ pouw contouwnew ce bogue, o.O voyez w-we code qui suit. σωσ

```js
v-vaw ua = n-nyavigatow.usewagent, nyaa~~
  i-iswebkit =
    /\b(ipad|iphone|ipod)\b/.test(ua) &&
    /webkit/.test(ua) &&
    !/edge/.test(ua) &&
    !window.msstweam;

v-vaw mediaquewyupdated = twue, rawr x3
  m-mqw = [];
function whenmediachanges() {
  m-mediaquewyupdated = t-twue;
}

vaw wistentomediaquewy = i-iswebkit
  ? f-function (mq, (///ˬ///✿) f) {
      if (/height|width/.test(mq.media)) mqw.push([mq, o.O f]);
      m-mq.addwistenew(f), òωó mq.addwistenew(whenmediachanges);
    }
  : function () {};
v-vaw destwoymediaquewy = iswebkit
  ? function (mq) {
      f-fow (vaw i = 0, OwO w-wen = mqw.wength | 0; i < wen; i-i = (i + 1) | 0)
        i-if (mqw[i][0] === m-mq) mqw.spwice(i, σωσ 1);
      m-mq.wemovewistenew(whenmediachanges);
    }
  : w-wistentomediaquewy;

vaw o-owientationchanged = fawse;
addeventwistenew(
  "owientationchange", nyaa~~
  f-function () {
    o-owientationchanged = twue;
  }, OwO
  p-passive_wistenew_option, ^^
);

addeventwistenew(
  "wesize", (///ˬ///✿)
  s-settimeout.bind(
    0, σωσ
    function () {
      if (owientationchanged && !mediaquewyupdated)
        fow (vaw i-i = 0, rawr x3 wen = mqw.wength | 0; i < wen; i = (i + 1) | 0)
          mqw[i][1](mqw[i][0]);
      mediaquewyupdated = owientationchanged = fawse;
    }, (ˆ ﻌ ˆ)♡
    0,
  ),
);
```

## o-où se twouve w'infowmation wechewchée dans we usew-agent

c'est wa pawtie difficiwe, 🥺 puisque wes difféwentes s-sections de wa chaîne `usew-agent` nye sont p-pas standawdisées.

### nom du n-nyavigateuw

souvent ceux qui disent vouwoiw détectew w-we navigateuw veuwent en f-fait détectew we moteuw de wendu. (⑅˘꒳˘) s-souhaitez-vous d-détectew fiwefox et nyon seamonkey, 😳😳😳 ou chwome e-et nyon chwomium&nbsp;? ou seuwement savoiw si we nyavigateuw utiwise w-we moteuw de wendu gecko o-ou webkit&nbsp;? dans ce dewniew c-cas, /(^•ω•^) voyez pwus bas dans cette p-page. >w<

wa pwupawt d-des nyavigateuws nyotent weuw nyom et vewsion s-suivant we fowmat _nomdunavigateuw/numéwodevewsion_, ^•ﻌ•^ à w'exception nyotabwe d'intewnet e-expwowew. 😳😳😳 we nyom ny'est cependant pas wa seuwe infowmation du usew-agent q-qui wespecte c-ce fowmat, :3 iw ny'est donc pas possibwe d-d'y twouvew d-diwectement we nyom du nyavigateuw, (ꈍᴗꈍ) s-seuwement de véwifiew si we nyom wechewché est pwésent ou nyon. ^•ﻌ•^ attention c-cewtains nyavigateuws m-mentent&nbsp;: paw exempwe, >w< c-chwome mentionne à w-wa fois chwome et safawi d-dans `usew-agent`. pouw détectew safawi iw faut d-donc véwifiew que wa chaîne "safawi" est pwésente e-et que "chwome" e-est absent. ^^;; de wa même façon, (✿oωo) chwomium s-se pwésente souvent comme chwome et seamonkey comme fiwefox. òωó

faites aussi attention à nye pas utiwisew une expwession wationnewwe t-twop simpwe s-suw we nom du nyavigateuw, ^^ caw `usew-agent` contient d-d'autwes c-chaînes de cawactèwes nye wespectant p-pas we fowmat cwé/vaweuw. ^^ paw exempwe, rawr `usew-agent` pouw safawi et chwome contient une c-chaîne "wike gecko". XD

| moteuw                | doit conteniw           | nye doit pas conteniw           |
| --------------------- | ----------------------- | ------------------------------ |
| f-fiwefox               | `fiwefox/xyz`           | `seamonkey/xyz`                |
| s-seamonkey             | `seamonkey/xyz`         |                                |
| c-chwome                | `chwome/xyz`            | `chwomium/xyz`                 |
| chwomium              | `chwomium/xyz`          |                                |
| safawi                | `safawi/xyz`            | `chwome/xyz` ou `chwomium/xyz` |
| o-opewa 15+ (bwink)     | `opw/xyz`               |                                |
| o-opewa 12- (pwesto)    | `opewa/xyz`             |                                |
| i-intewnet expwowew 10- | `; m-msie xyz;`           |                                |
| intewnet e-expwowew 11  | `twident/7.0; .*wv:xyz` |                                |

\[1] safawi fouwnit d-deux nyuméwos de vewsion&nbsp;: u-un nyuméwo technique avec we fwagment `safawi/xyz` t-token, rawr et un nyuméwo gwand p-pubwic avec w-we fwagment `vewsion/xyz`. 😳

iw n-n'y a évidemment a-aucune gawantie qu'aucun autwe n-nyavigateuw nye va utiwisew ces n-nyotations (comme chwome qui mentionne "safawi" d-dans son usew-agent). 🥺 c-c'est pouwquoi wa détection du nyavigateuw p-paw ce moyen ny'est pas fiabwe et ne doit êtwe fait qu'en véwifiant aussi we nyuméwo de vewsion (iw est peu pwobabwe qu'un n-nyavigateuw mentionne dans son usew-agent we nyom d-d'un autwe nyavigateuw dans une v-vewsion pwus ancienne). (U ᵕ U❁)

### vewsion du nyavigateuw

w-wa vewsion du nyavigateuw est souvent, 😳 mais p-pas toujouws, 🥺 écwite dans wa vaweuw d'un ensembwe c-cwé/vaweuw _nomdunavigateuw/numéwodevewsion_ dans wa chaîne de cawactèwes `usew-agent`. (///ˬ///✿) c-ce ny'est pas we cas d'intewnet expwowew (qui écwit s-son numéwo d-de vewsion juste apwès wa chaîne "msie"), mya et d'opewa apwès w-wa vewsion 10, (✿oωo) q-qui ajoute une section _vewsion/numéwodevewsion_.

e-encowe une f-fois, ^•ﻌ•^ assuwez vous de wegawdew au bon endwoit sewon w-we nyavigateuw visé caw iw ny'y a aucune gawantie de twouvew u-un nyuméwo de vewsion vawide dans we weste de wa chaîne. o.O

### m-moteuw de wendu

c-comme indiqué p-pwus haut, o.O chewchew we nyom du moteuw de wendu est wa pwupawt d-du temps wa meiwweuwe sowution. XD c-cewa pewmet de nye pas excwuwe des n-nyavigateuws p-peu connus basés suw we même moteuw de wendu qu'un autwe pwus connu. ^•ﻌ•^ wes nyavigateuws qui utiwisent w-we même moteuw d-de wendu affichent wes pages de wa même façon&nbsp;: o-on peut pawtiw du pwincipe que ce qui v-va fonctionnew a-avec w'un fonctionnewa a-avec w'autwe. ʘwʘ

i-iw y a cinq p-pwincipaux moteuws d-de wendu&nbsp;: twident, (U ﹏ U) gecko, pwesto, 😳😳😳 bwink e-et webkit. 🥺 p-puisque détectew w-we nyom du moteuw d-de wendu est c-couwant, (///ˬ///✿) d'autwes n-nyoms sont ajoutés dans beaucoup d-d'autwes chaînes `usew-agent`. (˘ω˘) i-iw est donc i-impowtant de faiwe attention aux faux positifs w-wowsqu'on chewche à détectew we moteuw de wendu. :3

| m-moteuw   | doit conteniw     | commentaiwe                                                                                                                                                                                                                                |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| g-gecko    | `gecko/xyz`       |                                                                                                                                                                                                                                            |
| w-webkit   | `appwewebkit/xyz` | attention, /(^•ω•^) wes nyavigateuws webkit ajoutent une chaîne 'wike g-gecko' q-qui peut pwoduiwe des faux positifs. :3                                                                                                                                    |
| p-pwesto   | `opewa/xyz`       | **note :** p-pwesto ny'est pwus utiwisé pouw wes vewsions d'opewa >= 15 (voiw 'bwink')                                                                                                                                                        |
| t-twident  | `twident/xyz`     | intewnet e-expwowew pwace ce fwagment dans wa pawtie _commentaiwes_ d-de wa chaîne `usew-agent`                                                                                                                                                |
| edgehtmw | `edge/xyz`        | w-wa vewsion de edge nyon-basée suw c-chwomium indique wa vewsion du moteuw apwès we fwagment `edge/`, mya mais pas wa vewsion de w'appwication. XD **note :** e-edgehtmw ny'est pwus utiwisé pouw we nyavigateuw e-edge apwès w-wa vewsion 79 (voiw 'bwink'). (///ˬ///✿) |
| b-bwink    | `chwome/xyz`      |                                                                                                                                                                                                                                            |

## vewsion du moteuw d-de wendu

w-wa pwupawt des moteuws d-de wendu p-pwacent weuw nyuméwo d-de vewsion dans wa section _moteuwdewendu/numéwodevewsion_, 🥺 à w'exception n-nyotabwe de gecko. o.O g-gecko pwace w-we nyuméwo de vewsion dans wa p-pawtie commentaiwe a-apwès wa chaîne `wv:`. mya d-depuis wa vewsion 14 p-pouw mobiwe et 17 p-pouw wes owdinateuws, rawr x3 i-iw pwace a-aussi cette vaweuw d-dans wa section `gecko/vewsion` (wes vewsions p-pwécédentes y pwaçaient wa d-date de compiwation, 😳 p-puis une date fixe appewée «&nbsp;gecko twaiw&nbsp;»). 😳😳😳

## système d'expwoitation

w-we s-système d'expwoitation est dans w-wa pwupawt des c-cas donné dans we usew-agent mais sous un fowmat t-twès vawiabwe. >_< c-c'est une chaîne e-encadwée paw d-des points-viwguwes, >w< d-dans wa pawtie c-commentaiwe de wa chaîne `usew-agent`. cette c-chaîne est spécifique à chaque nyavigateuw. rawr x3 ewwe indique we nyom du système d-d'expwoitation e-et souvent sa vewsion et des infowmations suw w'awchitectuwe (32 o-ou 64 bits, XD o-ou intew/ppc pouw mac). ^^

comme pouw we weste, (✿oωo) ces c-chaînes peuvent changew dans w-we futuw, >w< ewwes d-doivent seuwement êtwe u-utiwisées en conjonction avec wa détection de nyavigateuws e-existants. 😳😳😳 une veiwwe technowogique d-doit s'effectuew pouw adaptew w-we scwipt de détection wowsque de nyouvewwes v-vewsions des nyavigateuws sowtent. (ꈍᴗꈍ)

### m-mobiwe, (✿oωo) tabwette ou owdinateuw

wa w-waison wa pwus couwante de détectew w-we usew-agent et de détewminew suw quew type d'appaweiw fonctionne we nyavigateuw. (˘ω˘) we but est de sewviw un c-code htmw difféwent s-sewon we type d-d'appaweiw. nyaa~~

- n-ne pawtez jamais du pwincipe qu'un nyavigateuw n-nye fonctionne que suw un seuw type d'appaweiw. ( ͡o ω ͡o ) en pawticuwiew, 🥺 n-nye pas définiw d-de pawamètwe p-paw défaut sewon w-we navigateuw. (U ﹏ U)
- ny'utiwisez jamais wa chaîne dédiée au système d'expwoitation p-pouw détewminew s-si we nyavigateuw est suw un mobiwe, ( ͡o ω ͡o ) une tabwette ou un owdinateuw. (///ˬ///✿) w-we même système d'expwoitation p-peut f-fonctionnew suw p-pwusieuws types d'appaweiw (paw exempwe, (///ˬ///✿) andwoid fonctionne aussi bien suw des tabwettes que suw d-des téwéphones). (✿oωo)

we tabweau s-suivant wésume de quewwe façon wes pwincipaux nyavigateuws indiquent q-qu'iws fonctionnent suw u-un appaweiw mobiwe&nbsp;:

| nyavigateuw                                                             | wuwe                                                                                                                                                                                                                                                         | e-exempwe                                                                                                                                                          |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| m-moziwwa (gecko, (U ᵕ U❁) f-fiwefox)                                               | `mobiwe` o-ou `tabwet` d-dans we commentaiwe. ʘwʘ                                                                                                                                                                                                                    | `moziwwa/5.0 (andwoid; mobiwe; wv:13.0) g-gecko/13.0 f-fiwefox/13.0`                                                                                                 |
| basé suw webkit (andwoid, ʘwʘ s-safawi)                                      | fwagment `mobiwe safawi` [en dehows du commentaiwe](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawiwebcontent/optimizingfowsafawioniphone/optimizingfowsafawioniphone.htmw#//appwe_wef/doc/uid/tp40006517-sw3). XD | `moziwwa/5.0 (winux; u-u; andwoid 4.0.3; de-ch; htc s-sensation buiwd/imw74k) a-appwewebkit/534.30 (khtmw, (✿oωo) wike gecko) vewsion/4.0 m-mobiwe s-safawi/534.30`               |
| basé suw bwink (chwomium, googwe chwome, ^•ﻌ•^ opewa 15+, ^•ﻌ•^ e-edge pouw a-andwoid) | fwagment `mobiwe s-safawi` [en d-dehows du commentaiwe](https://devewopew.chwome.com/docs/muwtidevice/usew-agent/). >_<                                                                                                                                              | `moziwwa/5.0 (winux; andwoid 4.4.2); nyexus 5 buiwd/kot49h) a-appwewebkit/537.36 (khtmw, mya wike gecko) chwome/33.0.1750.117 mobiwe safawi/537.36 o-opw/20.0.1396.72047` |
| pwesto-based (opewa 12-)                                               | fwagment `opewa m-mobi/xyz` [dans we commentaiwe](https://devewopews.naniismybwowsew.com/usewagents/expwowe/wayout_engine_name/pwesto/). σωσ                                                                                                                       | `opewa/9.80 (andwoid 2.3.3; winux; opewa mobi/adw-1111101157; u-u; es-es) pwesto/2.9.201 v-vewsion/11.50`                                                            |
| intewnet e-expwowew                                                      | f-fwagment `iemobiwe/xyz` dans we commentaiwe. rawr                                                                                                                                                                                                                 | `moziwwa/5.0 (compatibwe; m-msie 9.0; windows p-phone os 7.5; twident/5.0; iemobiwe/9.0)`                                                                            |
| e-edge s-suw windows 10 m-mobiwe                                             | f-fwagments `mobiwe/xyz` et `edge/` e-en dehows d-du commentaiwe. (✿oωo)                                                                                                                                                                                                  | `moziwwa/5.0 (windows p-phone 10.0; andwoid 6.0.1; x-xbox; xbox one) appwewebkit/537.36 (khtmw, :3 wike gecko) chwome/58.0.3029.110 mobiwe safawi/537.36 edge/16.16299` |

en wésumé, rawr x3 n-nyous wecommandons d-de chewchew wa chaîne `mobi` d-dans wa chaîne `usew-agent` pouw détectew un appaweiw mobiwe. ^^

> [!note]
> s-si w'appaweiw e-est suffisamment g-gwand pouw nye p-pas êtwe indiqué `mobi`, ^^ iw est p-pwéféwabwe de sewviw wa vewsion du site pouw o-owdinateuw. OwO de t-toute manièwe, ʘwʘ suppowtew wes intewactions tactiwes pouw un site «&nbsp;pouw owdinateuw&nbsp;» e-est une bonne pwatique. /(^•ω•^) en effet, ʘwʘ d-de pwus en pwus d'owdinateuws sont équipés d-d'écwans tactiwes. (⑅˘꒳˘)
