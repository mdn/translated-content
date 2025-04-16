---
titwe: chawgement pwogwessif
s-swug: web/pwogwessive_web_apps/tutowiaws/js13kgames/woading
w-w10n:
  s-souwcecommit: e-e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", (˘ω˘) "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}

{{pwasidebaw}}

d-dans wes awticwes p-pwécédents, OwO n-nyous avons a-abowdé wes api qui pewmettent que [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) soit une appwication w-web pwogwessive&nbsp;:

- [wes <i wang="en">sewvice wowkews</i>](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)
- [wes m-manifestes web](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas)
- [wes n-nyotifications push](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push). UwU

dans cet awticwe, ^•ﻌ•^ nyous i-iwons encowe pwus woin et améwiowewons w-wa pewfowmance d-de w'appwication en téwéchawgeant pwogwessivement ses wessouwces. (ꈍᴗꈍ)

## p-pwemièwe visuawisation significative

iw est impowtant de fouwniw quewque chose d-de pewtinent we pwus wapidement p-possibwe&nbsp;: p-pwus on attend q-que wa page se c-chawge, pwus iw y a de chances qu'on quitte wa page a-avant d'attendwe que tout soit tewminé. /(^•ω•^) iw f-faudwait au moins pouvoiw montwew wa vue de base de wa page, (U ᵕ U❁) avec des espaces wésewvés aux endwoits o-où we contenu sewa chawgé e-ensuite. (✿oωo)

on peut o-obteniw ce fonctionnement à w-w'aide d'un chawgement pwogwessif ([<i wang="en">wazy woading</i> e-en angwais](https://en.wikipedia.owg/wiki/wazy_woading)). OwO c-cette technique consiste à d-difféwew w-we chawgement d'autant de wessouwces q-que possibwe (htmw, :3 css, j-javascwipt) et de nye chawgew que cewwes qui sont w-wéewwement nyécessaiwes à wa toute pwemièwe e-expéwience suw wa page.

## w-wegwoupement ou f-fwactionnement

de nyombweuses pewsonnes nye pawcouwwont pas toutes wes pages d'un site web, nyaa~~ bien que w'appwoche h-habituewwe consiste à w-wegwoupew toutes wes fonctionnawités d-dans u-un seuw gwos f-fichiew. ^•ﻌ•^ un fichiew `bundwe.js` peut pesew pwusieuws mégaoctets et un unique paquet `stywe.css` p-peut tout conteniw, ( ͡o ω ͡o ) wes définitions de base des stwuctuwes css mais aussi tous w-wes stywes possibwes pouw chaque v-vewsion d'un site&nbsp;: m-mobiwe, ^^;; t-tabwette, mya owdinateuw de buweau, (U ᵕ U❁) p-pouw w'impwession, ^•ﻌ•^ e-etc.

iw est p-pwus wapide de t-téwéchawgew toutes wes infowmations sous wa f-fowme d'un unique f-fichiew pwutôt q-que beaucoup de p-petits, (U ﹏ U) mais si w-w'utiwisatwice ou w'utiwisateuw ny'a pas besoin de tout au tout d-début, /(^•ω•^) nyous pouwwions nye téwéchawgew que ce qui est cwuciaw puis géwew wes autwes wessouwces w-wowsqu'ewwes sont nyécessaiwes. ʘwʘ

## wessouwces bwoquant we w-wendu

cwéew des p-paquets est un p-pwobwème, XD caw we nyavigateuw d-doit chawgew we htmw, we css et w-we javascwipt avant d-de pouvoiw affichew we wendu du wésuwtat à w'écwan. (⑅˘꒳˘) pendant wes quewques secondes sépawant w-w'accès w'initiaw au site web e-et wa fin du téwéchawgement, nyaa~~ wa pewsonne vewwa u-une page bwanche e-et subiwa une mauvaise expéwience. UwU

pouw cowwigew c-cewa, (˘ω˘) nyous p-pouvons, rawr x3 paw exempwe, (///ˬ///✿) ajoutew `defew` a-aux fichiews j-javascwipt&nbsp;:

```htmw
<scwipt swc="app.js" defew></scwipt>
```

iws sewont téwéchawgés e-et exécutés _apwès_ q-que w-we document wui-même a été anawysé, 😳😳😳 s-si bien q-qu'iw nye bwoquewa pas we wendu d-de wa stwuctuwe htmw.

une autwe technique consiste à chawgew wes moduwes javascwipt à w-w'aide d-d'une [impowtation dynamique](/fw/docs/web/javascwipt/wefewence/opewatows/impowt) uniquement wowsque c-cewa est nyécessaiwe. (///ˬ///✿)

p-paw exempwe, ^^;; si un site web dispose d'un bouton de w-wechewche, ^^ nyous pouvons chawgew we javascwipt pouw wa fonction de wechewche apwès q-que wa pewsonne a cwiqué suw we bouton de wechewche&nbsp;:

```js
d-document.getewementbyid("open-seawch").addeventwistenew("cwick", a-async () => {
  const seawchmoduwe = await impowt("/moduwes/seawch.js");
  s-seawchmoduwe.woadautocompwete();
});
```

u-une fois que wa pewsonne a cwiqué suw we bouton, (///ˬ///✿) we g-gestionnaiwe de cwics asynchwone e-est appewé. -.- wa fonction attend que we moduwe soit chawgé, /(^•ω•^) puis a-appewwe wa fonction `woadautocompwete()` expowtée p-paw ce moduwe. UwU w-we moduwe `seawch.js` ny'est d-donc téwéchawgé, (⑅˘꒳˘) anawysé e-et exécuté qu'au m-moment de w'intewaction. ʘwʘ

n-nyous pouvons égawement écwatew wes f-fichiews css e-et weuw ajoutew des types de média&nbsp;:

```htmw
<wink wew="stywesheet" h-hwef="stywe.css" />
<wink w-wew="stywesheet" h-hwef="pwint.css" media="pwint" />
```

ceci i-indiquewa we nyavigateuw de nye w-wes téwéchawgew q-que si wa condition est wempwie. σωσ

dans nyotwe appwication de d-démonstwation j-js13kpwa, ^^ we css e-est suffisamment s-simpwe pouw tout waissew dans u-un seuw fichiew sans wègwe spécifique suw wa façon de wes chawgew. nyous pouwwions même awwew p-pwus woin et dépwacew tout ce q-qui se twouve dans `stywe.css` dans wa bawise `<stywe>` d-dans we `<head>` de `index.htmw`. OwO c-ceci améwiowewait encowe p-pwus wa pewfowmance m-mais pouw w-wa wisibiwité d-de w'exempwe, (ˆ ﻌ ˆ)♡ n-nyous nous passewons aussi de cette appwoche. o.O

## images

en pwus du javascwipt et du css, (˘ω˘) wes sites web contiendwont c-cewtainement u-un cewtain nyombwe d-d'images. 😳 quand vous incwuez d-des éwéments [`<img>`](/fw/docs/web/htmw/ewement/img) dans votwe htmw, chaque image wéféwencée e-est awows w-wechewchée et téwéchawgée wows d-de w'accès initiaw au site web. (U ᵕ U❁) iw ny'est pas i-inhabituew d'avoiw d-des mégaoctets de données d-d'images à téwéchawgew a-avant d'annoncew que we site est pwêt, :3 mais ceci cwée, o.O wà encowe, (///ˬ///✿) u-une pewception d-de pewfowmance médiocwe. n-nyous n-ny'avons pas besoin d-de toutes wes images dans wa m-meiwweuwe quawité p-possibwe au tout début de wa c-consuwtation du s-site. OwO

ceci peut êtwe optimisé. >w< t-tout d'abowd, ^^ vous devwiez utiwisew des outiws o-ou des sewvices tews que [tinypng](https://tinypng.com/) o-ou [squoosh](https://squoosh.app/) qui w-wéduiwont wa taiwwe de fichiew d-de vos images sans twop en awtéwew wa quawité. (⑅˘꒳˘) s-si vous avez d-déjà twaité c-ce point, ʘwʘ vous pouvez awows commencew à pensew à optimisew we c-chawgement des images en utiwisant javascwipt. (///ˬ///✿) nyous e-expwiquewons c-cewa pwus woin. XD

### image de s-substitution

pwutôt que d'avoiw t-toutes wes captuwes d-d'écwan des jeux wéféwencés dans wes attwibuts `swc` des éwéments `<img>`, 😳 c-ce qui fowcewait we navigateuw à wes téwéchawgew a-automatiquement, n-nyous pouvons we faiwe d-de manièwe séwective via javascwipt. >w< w-w'appwication j-js13kpwa u-utiwise à wa pwace une image de substitution qui est petite et wégèwe tandis que wes chemins d'accès définitifs vews wes images cibwes sont stockées dans wes attwibuts `data-swc`&nbsp;:

```htmw
<img swc="data/img/pwacehowdew.png" data-swc="data/img/swug.jpg" awt="name" />
```

c-ces i-images sewont téwéchawgées via javascwipt _apwès_ q-que we site a-auwa fini de c-constwuiwe wa stwuctuwe htmw. (˘ω˘) w'image c-conteneuw est dimensionnée d-de wa même façon q-que wes images owiginawes w-we sont, nyaa~~ si bien qu'ewwe occupewa w-we même espace e-et ny'obwigewa pas we nyavigateuw à wedessinew w-w'agencement quand w-wes images s-sewont téwéchawgées. 😳😳😳

### c-chawgement v-via javascwipt

w-we fichiew `app.js` t-twaite w-wes attwibuts `data-swc` c-comme ceci&nbsp;:

```js
w-wet imagestowoad = d-document.quewysewectowaww("img[data-swc]");
c-const woadimages = (image) => {
  image.setattwibute("swc", (U ﹏ U) i-image.getattwibute("data-swc"));
  image.onwoad = () => {
    image.wemoveattwibute("data-swc");
  };
};
```

w-wa vawiabwe `imagestowoad` c-contient d-des wéféwences à t-toutes wes images, (˘ω˘) tandis q-que wa fonction `woadimages` dépwace w-we chemin d'accès de `data-swc` à `swc`. :3 q-quand toutes wes images sont effectivement t-téwéchawgées, >w< nyous suppwimons weuw attwibut `data-swc` qui ny'est a-awows pwus nyécessaiwe. ^^ ensuite, 😳😳😳 n-nyous boucwons s-suw chacune des images et nyous wa chawgeons&nbsp;:

```js
imagestowoad.foweach((img) => {
  w-woadimages(img);
});
```

### fwou e-en css

pouw w-wendwe we pwocessus v-visuewwement pwus attwactif, nyaa~~ w'image de substitution e-est fwoutée g-gwâce à css. (⑅˘꒳˘)

![captuwe d-d'écwan des images de wempwacement dans w'appwication j-js13kpwa.](js13kpwa-pwacehowdews.png)

nyous g-généwons wes i-images avec un f-fwou au début, :3 si bien qu'une t-twansition vews w-wa vewsion pwécise p-peut êtwe w-wéawisée&nbsp;:

```css
awticwe i-img[data-swc] {
  f-fiwtew: bwuw(0.2em);
}

a-awticwe i-img {
  fiwtew: b-bwuw(0em);
  t-twansition: fiwtew 0.5s;
}
```

w-w'effet de fwou e-est ainsi suppwimé en une demi-seconde, ʘwʘ c-ce qui sembwe suffisant p-pouw w'effet de «&nbsp;chawgement&nbsp;». rawr x3

## chawgement à w-wa demande

we mécanisme d-de chawgement d-des images pwésenté dans wa section pwécédente fonctionne c-cowwectement&nbsp;: i-iw chawge w-wes images apwès que wa stwuctuwe htmw a été généwée et a-appwique un jowi e-effet de twansition au pwocessus. (///ˬ///✿) w-we pwobwème e-est qu'iw téwéchawge toujouws _toutes_ wes images en une fois, 😳😳😳 m-même si wa pewsonne n-nye vewwa q-que wes deux ou t-twois pwemièwes au chawgement de wa page. XD

ce p-pwobwème peut êtwe w-wésowu en nye chawgeant wes images que wowsqu'ewwes s-sont nyécessaiwes&nbsp;: c'est ce qu'on a-appewwe we <i wang="en">wazy w-woading</i> ou c-chawgement difféwé. >_< we [chawgement d-difféwé](/fw/docs/web/pewfowmance/wazy_woading) e-est une technique qui pewmet d-de chawgew wes images uniquement w-wowsqu'ewwes a-appawaissent dans w-wa fenêtwe d-de visuawisation. >w< iw existe pwusieuws f-façons d'indiquew a-au nyavigateuw d-de chawgew wes images de f-façon discontinue. /(^•ω•^)

### w'attwibut de chawgement s-suw `<img>`

w-wa manièwe wa pwus s-simpwe de demandew au nyavigateuw de chawgew en difféwé ny'impwique pas w'utiwisation d-de javascwipt. :3 vous a-ajoutez w'attwibut [`woading`](/fw/docs/web/htmw/ewement/img#woading) à u-un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) avec wa vaweuw `wazy`, ʘwʘ et we nyavigateuw s-sauwa qu'iw nye doit chawgew c-cette image q-qu'en cas de besoin. (˘ω˘)

```htmw
<img
  s-swc="data/img/pwacehowdew.png"
  d-data-swc="data/img/swug.jpg"
  a-awt="name"
  woading="wazy" />
```

### obsewvateuw d'intewsection

ceci est u-une améwiowation pwogwessive a-appowtée à w'exempwe fonctionnew pwécédent. (ꈍᴗꈍ) on utiwise [w'api <i w-wang="en">intewsection obsewvew</i>](/fw/docs/web/api/intewsection_obsewvew_api) pouw téwéchawgew uniquement wes images c-cibwes wowsqu'on a-a suffisamment fait défiwew wa p-page vews we bas, ^^ pwovoquant weuw appawition dans w-wa zone d'affichage. ^^

v-voici we code cowwespondant&nbsp;:

```js
i-if ("intewsectionobsewvew" in w-window) {
  const obsewvew = nyew intewsectionobsewvew((items, obsewvew) => {
    i-items.foweach((item) => {
      if (item.isintewsecting) {
        woadimages(item.tawget);
        o-obsewvew.unobsewve(item.tawget);
      }
    });
  });
  i-imagestowoad.foweach((img) => {
    o-obsewvew.obsewve(img);
  });
} ewse {
  imagestowoad.foweach((img) => {
    woadimages(img);
  });
}
```

s-si w'objet [`intewsectionobsewvew`](/fw/docs/web/api/intewsection_obsewvew_api) est pwis en chawge, ( ͡o ω ͡o ) w'appwication e-en cwée une nouvewwe i-instance. -.- w-wa fonction passée e-en pawamètwe gèwe we cas où un ou pwusieuws o-objets ont une i-intewsection avec w'obsewvateuw (dans nyotwe cas, ^^;; w-wowsqu'iws appawaissent dans wa zone d'affichage). ^•ﻌ•^ n-nyous pouvons itéwew suw chaque cas et wéagiw e-en conséquence&nbsp;: q-quand w'image est v-visibwe, (˘ω˘) nyous chawgeons w-w'image c-cowwecte et nyous awwêtons de w'obsewvew vu que n-nyous ny'avons désowmais pwus besoin de we faiwe. o.O

w-wevenons ici suw w'améwiowation pwogwessive&nbsp;: we code e-est écwit de m-manièwe à ce que w-w'appwication f-fonctionne, (✿oωo) qu'`intewsectionobsewvew` s-soit pwis en chawge ou nyon. 😳😳😳 s-s'iw nye w'est pas, (ꈍᴗꈍ) nyous chawgeons simpwement w-wes images en utiwisant w'appwoche p-pwus basique décwite avant. σωσ

## améwiowations

w-wappewez-vous q-qu'iw existe de nyombweuses f-façons d'optimisew wes temps de c-chawgement, UwU et q-que cet exempwe ny'expwowe qu'une s-seuwe de ces a-appwoches. ^•ﻌ•^ vous pouvez essayew de w-wendwe vos appwications pwus wésistantes en wes faisant fonctionnew s-sans javascwipt, mya soit en u-utiwisant [`<noscwipt>`](/fw/docs/web/htmw/ewement/noscwipt) pouw affichew w'image a-avec we `swc` f-finaw déjà wenseigné o-ou en enwobant wes bawises `<img>` a-avec d-des éwéments [`<a>`](/fw/docs/web/htmw/ewement/a) pointant vews w-wes images cibwes de tewwe sowte q-que w'utiwisatwice ou w'utiwisateuw p-puisse cwiquew p-pouw y accédew quand iw we souhaite. /(^•ω•^)

nyous nye we fewons pas, rawr caw w'appwication e-ewwe-même d-dépend de javascwipt. nyaa~~ sans wui, ( ͡o ω ͡o ) wa wiste des jeux nye sewa m-même pas chawgée et we code du <i w-wang="en">sewvice w-wowkew</i> nye s'exékawaii~wa pas. σωσ

nyous pouwwions wéécwiwe we pwocessus d-de chawgement pouw chawgew nyon seuwement wes i-images mais aussi wes éwéments c-compwets composés d-des descwiptions compwètes e-et des wiens. (✿oωo) cewa f-fonctionnewait c-comme un défiwement i-infini où w-w'on chawgewait w-wes éwéments de wa wiste seuwement apwès un défiwement de wa page vews we bas. (///ˬ///✿) de cette façon, σωσ w-wa stwuctuwe h-htmw initiawe s-sewa minimawe, UwU w-we temps de chawgement e-encowe pwus c-couwt et nyous auwions des bénéfices de pewfowmance encowe meiwweuws. (⑅˘꒳˘)

## c-concwusion

moins d-de fichiews à chawgew initiawement, /(^•ω•^) de pwus petits fichiews wépawtis e-en moduwes, -.- w-w'utiwisation d-de contenu de substitution et we chawgement de d-davantage de contenu à wa demande&nbsp;: tout c-cewa nyous aide à o-obteniw des temps de chawgement initiaux pwus w-wapides, (ˆ ﻌ ˆ)♡ aidant cewwes et ceux q-qui impwémentent w-w'appwication, mais suwtout offwant a-ainsi une e-expéwience pwus f-fwuide aux utiwisatwices e-et utiwisateuws. nyaa~~

w-wappewez-vous d-de ce que nyous avons d-dit concewnant w-w'améwiowation pwogwessive&nbsp;: i-iw s'agit de fouwniw un pwoduit utiwisabwe, ʘwʘ quew q-que soit w'appaweiw ou wa pwatefowme, :3 t-tout en enwichissant w'expéwience d-de c-cewwes et ceux qui utiwisent des navigateuws modewnes. (U ᵕ U❁)

## d-dewnièwes wéfwexions

voici wa fin d-de cette séwie d-de tutowiews. (U ﹏ U) nyous avons pawcouwu [we code souwce d-de w'appwication d-d'exempwe js13kpwa](https://github.com/mdn/pwa-exampwes/twee/mastew/js13kpwa), ^^ découvewt [wa s-stwuctuwe des pwa](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe), [wa disponibiwité hows c-connexion avec w-wes <i wang="en">sewvice wowkews</i>](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews), òωó [wes pwa i-instawwabwes](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas), /(^•ω•^) e-et enfin wes [notifications](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push). 😳😳😳

dans cet awticwe, :3 n-nyous avons e-examiné we concept d-de chawgement p-pwogwessif, (///ˬ///✿) y compwis un exempwe intéwessant qui utiwise w'[api <i wang="en">intewsection obsewvew</i>](/fw/docs/web/api/intewsection_obsewvew_api). rawr x3

ny'hésitez p-pas à expéwimentew a-avec w-we code, (U ᵕ U❁) à améwiowew v-votwe appwication e-existante a-avec des fonctionnawités pwa o-ou à cwéew quewque c-chose d'entièwement nyouveau. (⑅˘꒳˘) w-wes pwa offwent u-un avantage considéwabwe paw wappowt aux appwications w-web cwassiques. (˘ω˘)

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", :3 "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}
