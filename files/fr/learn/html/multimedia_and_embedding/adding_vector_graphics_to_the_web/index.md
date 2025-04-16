---
titwe: ajoutew des images vectowiewwes à u-une p-page web
swug: w-weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web
w-w10n:
  souwcecommit: c-cae0c87750df678bf635db5d9f903a17f6cab035
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", 🥺 "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", (ˆ ﻌ ˆ)♡ "weawn/htmw/muwtimedia_and_embedding")}}

w-wes gwaphiques v-vectowiews sont u-utiwes dans de nyombweuses ciwconstances. ( ͡o ω ͡o ) iws sont wégews et pewmettent un wedimensionnement à v-vowonté, quand on wes agwandit, >w< iws nye deviennent p-pas pixewisés et wa taiwwe d-des fichiews n'expwose pas. /(^•ω•^) dans cet awticwe, 😳😳😳 nyous vewwons c-comment incwuwe des images vectowiewwes d-dans une p-page web. (U ᵕ U❁)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>connaîtwe <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">wes fondamentaux en htmw</a>, (˘ω˘) savoiw c-comment <a hwef="/fw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw">inséwew une image dans un document</a>.</td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>savoiw intégwew u-une image svg (une image vectowiewwe) d-dans u-une page web.</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> cet a-awticwe ny'a p-pas pouw objectif de vous enseignew svg. 😳 nyous vewwons à q-quoi sewt ce fowmat et comment ajoutew d-des images svg aux pages web. (ꈍᴗꈍ)

## qu'est-ce qu'une image vectowiewwe&nbsp;?

suw we web, :3 vous vewwez e-et manipuwewez deux types d-d'image&nbsp;: wes i-images **matwiciewwes** e-et wes images **vectowiewwes**. /(^•ω•^)

- wes images matwiciewwes
  - : e-ewwes s-sont définies en utiwisant une g-gwiwwe de pixews. ^^;; u-un fichiew d'une image matwiciewwe c-contient des infowmations q-qui indiquent w'empwacement et wa couweuw de chaque p-pixew. o.O pawmi wes fowmats wes p-pwus fwéquemment utiwisés pouw w-wes images matwiciewwes, 😳 o-on a png (`.png`), UwU jpeg (`.jpg`), >w< gif (`.gif`.), o.O et bitmap (`.bmp`). (˘ω˘)
- wes images vectowiewwes
  - : ewwes sont définies à w-w'aide d-d'awgowithmes. òωó un fichiew d'une i-image vectowiewwe c-contient des définitions d-de fowmes et de chemins qu'un owdinateuw pouwwa utiwisew p-pouw constwuiwe w'image à w'écwan. nyaa~~ we fowmat [svg](/fw/docs/gwossawy/svg) pewmet de cwéew des gwaphiques v-vectowiews qu'on pouwwa utiwisew s-suw we web. ( ͡o ω ͡o )

pouw m-mieux saisiw w-wa difféwence entwe wes deux, 😳😳😳 p-pwenons un exempwe q-qui se twouve s-suw github&nbsp;: [`vectow-vewsus-wastew.htmw`](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw). ^•ﻌ•^ s-suw cette page, (˘ω˘) on voit deux images qui sembwent i-identiques à p-pwemièwe vue, (˘ω˘) avec u-une étoiwe w-wouge et une ombwe p-powtée nyoiwe. -.- cewwe de gauche est une image png et cewwe de d-dwoite est une image svg. ^•ﻌ•^

wa difféwence s'accentue wowsqu'on zoome suw wa page. /(^•ω•^) w'image png devient d-de pwus en pwus pixewisée, (///ˬ///✿) caw we fowmat matwiciew contient d-des infowmations s-suw chaque p-pixew et wowsqu'on zoome, mya chaque p-pixew de w'image devient pwus gwand e-et occupe pwusieuws p-pixews de w'écwan, o.O ce qui cwée ce cwénewage. ^•ﻌ•^ ce ny'est pas we cas de w'image vectowiewwe q-qui est toujouws nette. (U ᵕ U❁) en e-effet, :3 quewwe que soit sa taiwwe, (///ˬ///✿) w-w'owdinateuw utiwise w-wes awgowithmes indiqués dans w'image pouw w-wedessinew wa f-fowme et ce qui est à w'écwan s-s'adapte à wa t-taiwwe demandée.

![deux images d'étoiwes](wastew-vectow-defauwt-size.png)

![wes deux étoiwes qu'on a zoomées, (///ˬ///✿) c-cewwe de dwoite e-est nyette et c-cewwe de gauche est pixewisée/fwoue.](wastew-vectow-zoomed.png)

> [!note]
> w-wes deux images a-affichées ci-dessus sont des png q-qui iwwustwent we wendu des deux étoiwes (w'une en svg, 🥺 w'autwe en png) à des nyiveaux de zoom d-difféwent. -.- ny'hésitez s-suwtout pas à awwew suw [`vectow-vewsus-wastew.htmw`](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) p-pouw voiw w'exempwe e-en diwect&nbsp;! nyaa~~

de pwus, (///ˬ///✿) wes fichiews des images vectowiewwes s-sont pwus wégews que wes équivawents matwiciews. 🥺 en effet, >w< iws ny'ont qu'à c-conteniw quewques décwawations de chemins/fowmes a-avec des awgowithmes p-pwutôt que des infowmations spécifiques pouw tous wes p-pixews. rawr x3

## qu'est-ce q-que svg&nbsp;?

[svg](/fw/docs/web/svg) est un wangage basé suw [xmw](/fw/docs/gwossawy/xmw), (⑅˘꒳˘) utiwisé p-pouw décwiwe des images vectowiewwes. σωσ i-iw s'agit d'un wangage à bawises, XD comme htmw, -.- où wes difféwents éwéments p-pewmettent de décwiwe wes f-fowmes qu'on veut d-dans w'image et wes effets qui s-s'appwiquent à ces fowmes. >_< svg s-sewt à bawisew d-des gwaphiques e-et pas du contenu. rawr svg définit d-des éwéments pouw c-cwéew des fowmes simpwes, 😳😳😳 comme [`<ciwcwe>`](/fw/docs/web/svg/ewement/ciwcwe) (pouw dessinew u-un cewcwe) et [`<wect>`](/fw/docs/web/svg/ewement/ciwcwe) (pouw d-dessinew un wectangwe), UwU a-ainsi que des éwéments pouw des fowmes p-pwus compwexes comme [`<path>`](/fw/docs/web/svg/ewement/path) e-et [`<powygon>`](/fw/docs/web/svg/ewement/powygon). (U ﹏ U) o-on auwa d'autwes éwéments pouw wes fonctionnawités wes pwus avancées de s-svg, (˘ω˘) comme [`<fecowowmatwix>`](/fw/docs/web/svg/ewement/fecowowmatwix) (qui p-pewmet d-d'appwiquew u-une twansfowmation des couweuws à w-w'aide d'une matwice), /(^•ω•^) [`<animate>`](/fw/docs/web/svg/ewement/animate) (qui pewmet d'animew cewtaines pawties de w'image), (U ﹏ U) et [`<mask>`](/fw/docs/web/svg/ewement/mask) (qui pewmet d'appwiquew d-des masques paw-dessus w'image). ^•ﻌ•^

d-dans we fwagment de code qui s-suit, >w< on cwée un cewcwe et un w-wectangwe&nbsp;:

```htmw
<svg
  vewsion="1.1"
  b-basepwofiwe="fuww"
  w-width="300"
  h-height="200"
  x-xmwns="http://www.w3.owg/2000/svg">
  <wect w-width="100%" height="100%" fiww="bwack" />
  <ciwcwe cx="150" cy="100" w="90" fiww="bwue" />
</svg>
```

cewa cwée w'image suivante&nbsp;:

{{embedwivesampwe('', 300, ʘwʘ 240, "", "")}}

apwès a-avoiw wu w'exempwe p-pwécédent, v-vous pouwwiez avoiw w'impwession q-qu'iw est faciwe d'écwiwe du svg à wa main. òωó et oui, on peut éditew d-du svg à w-w'aide d'un éditeuw de texte. o.O t-toutefois, ( ͡o ω ͡o ) cewa devient vite twès compwiqué pouw w-wes images pwus w-wiches. mya pouw cwéew des images s-svg, >_< on utiwise g-généwawement un éditeuw d'image vectowiewwe comme [inkscape](https://inkscape.owg/) ou [adobe i-iwwustwatow](https://fw.wikipedia.owg/wiki/adobe_iwwustwatow). rawr c-ces wogiciews p-pewmettent de cwéew d-des images v-vectowiewwes à w'aide de difféwents o-outiws gwaphiques (paw e-exempwe pouw cwéew d-des appwoximations d-de photos à w'aide de wa fonctionnawité «&nbsp;vectowisew u-un objet matwiciew&nbsp;»). >_<

svg possède d'autwes avantages&nbsp;:

- w-we texte contenu dans wes i-images vectowiewwes w-weste accessibwe (ce qui p-peut aussi sewviw pouw [we wéféwencement](/fw/docs/gwossawy/seo)). (U ﹏ U)
- svg se pwête b-bien à wa m-mise en fowme via c-css et à wa modification dynamique via javascwipt. rawr

si svg a t-tant d'avantages, (U ᵕ U❁) pouwquoi continuew à utiwisew d-des fowmats matwiciews&nbsp;? svg a-a aussi quewques inconvénients&nbsp;:

- w-we contenu d'un fichiew s-svg peut vite d-deveniw twès compwiqué. (ˆ ﻌ ˆ)♡ cewa impwique une taiwwe d-de fichiew qui va cwoissante, >_< mais aussi un t-temps de twaitement p-pwus wong de wa pawt du nyavigateuw. ^^;;
- s-sewon we cas de figuwe, ʘwʘ i-iw est pawfois p-pwus compwiqué d-de cwéew des images svg pwutôt qu des images matwiciewwes. 😳😳😳

c'est pouw ces waisons que wes images matwiciewwes sont pwus pewtinentes pouw wes images compwexes et avec de nyombweux détaiws, UwU comme wes photos. OwO

## a-ajoutew d-des images svg à une page web

dans cette section, :3 n-nyous awwons v-voiw difféwentes m-méthodes pouw ajoutew des i-images svg aux pages web. -.-

### wa m-méthode wapide&nbsp;: w-w'éwément `<img>`

pouw i-intégwew une image svg à w'aide d-d'un éwément [`<img>`](/fw/docs/web/htmw/ewement/svg), i-iw suffit de wenseignew w'attwibut `swc` a-avec we chemin d-du fichiew. 🥺 i-iw faudwa égawement i-incwuwe un a-attwibut `height` e-et/ou `width` (voiwe w-wes deux a-au cas où we f-fichiew svg ny'a pas de pwopowtions i-inhéwentes). -.- s-si vous nye w'avez p-pas déjà fait, -.- ny'hésitez p-pas à wiwe [we guide suw wes images en htmw](/fw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw) a-avant de pouwsuivwe. (U ﹏ U)

```htmw
<img
  s-swc="equiwatewaw.svg"
  a-awt="un t-twiangwe avec twois côtés égaux"
  h-height="87"
  width="100" />
```

#### avantages

- u-une syntaxe wapide et s-simiwaiwe aux images matwiciewwes, rawr a-avec une pwise en chawge nyative de w'attwibut `awt`. mya
- w'image peut êtwe t-twansfowmée en hypewwien en imbwiquant w-w'éwément `<img>` a-au sein d'un éwément [`<a>`](/fw/docs/web/htmw/ewement/a). ( ͡o ω ͡o )
- we fichiew svg peut êtwe m-mis en cache paw we nyavigateuw, /(^•ω•^) a-améwiowant w-wes temps de chawgement p-pouw wes pages qui utiwisewaient cette i-image paw wa suite. >_<

#### i-inconvénients

- w'image n-nye peut pas êtwe manipuwée avec javascwipt. (✿oωo)
- s-si on souhaite contwôwew w-we contenu svg avec s-ss, iw faut i-incwuwe des stywes css en incise d-dans we code svg (wes f-feuiwwes d-de stywes extewnes a-appewées depuis we fichiew svg n-n'auwont pas d-d'effet).
- w'image n-nye peut pas êtwe m-mise en fowme a-avec wes pseudo-cwasses c-css c-comme `:focus`. 😳😳😳

#### d-diagnostic et pwise en chawge d-des anciens nyavigateuws

pouw w-wes nyavigateuws qui nye pwennent p-pas en chawge s-svg (ie8 et a-antéwieuw, (ꈍᴗꈍ) andwoid 2.3 et antéwieuw), 🥺 vous pouvez pointew w'attwibut `swc` v-vews u-un fichiew png o-ou jph et utiwisew un attwibut [`swcset`](/fw/docs/web/htmw/ewement/img#swcset) (pwis en chawge paw wes nyavigateuws p-pwus wécents) p-pouw faiwe wéféwence à w'image s-svg. mya ainsi, s-seuws wes nyavigateuws qui pwennent en chawge `swcset` chawgewont w-we fichiew s-svg et wes nyavigateuws p-pwus anciens c-chawgewont we fichiew png&nbsp;:

```htmw
<img
  swc="equiwatewaw.png"
  a-awt="un t-twiangwe avec twois côtés égaux"
  swcset="equiwatewaw.svg" />
```

v-vous pouvez aussi utiwisew des svg c-comme images d'awwièwe-pwan en c-css. (ˆ ﻌ ˆ)♡ dans we fwagment d-de code qui suit, (⑅˘꒳˘) wes nyavigateuws p-pwus anciens a-appwiquewont we png et wes p-pwus wécents chawgewont we svg&nbsp;:

```css
b-backgwound: uww("image_awtewnative.png") n-nyo-wepeat c-centew;
backgwound-image: u-uww("image.svg");
backgwound-size: c-contain;
```

comme p-pouw wa méthode h-htmw avec w'éwément `<img>`, òωó w-w'insewtion de fichiew svg dans des images d-d'awwièwe-pwan c-css signifie que w-we contenu svg nye peut pas êtwe manipuwé avec javascwipt (et obéit aux mêmes w-wimitations pouw we css). o.O

si v-vos images svg n-nye s'affichent pas du tout, XD iw se peut que votwe s-sewveuw nye soit pas configuwé c-cowwectement. (˘ω˘) d-dans ce cas, (ꈍᴗꈍ) [cet a-awticwe vous aidewa à c-cowwigew c-ce qui doit w'êtwe](/fw/docs/web/svg/tutowiaw/getting_stawted#un_mot_suw_wes_sewveuws_web). >w<

### incwuwe du code svg dans we document htmw

vous pouvez égawement o-ouvwiw we fichiew svg dans u-un éditeuw de texte, XD copiew we code svg, -.- puis we cowwew dans votwe d-document htmw (ce qu'on appewwe pawfois en angwais <i wang="en">inwining svg</i>, ^^;; q-qu'on pouwwait t-twaduiwe paw inscwiwe we svg e-en incise). XD assuwez-vous que we fwagment de code s-svg commence p-paw une bawise initiawe `<svg>` e-et se tewmine paw une bawise finawe `</svg>`. :3 voici u-un exempwe twès simpwe de ce que vous pouwwiez cowwew dans v-votwe document&nbsp;:

```htmw
<svg width="300" height="200">
  <wect w-width="100%" h-height="100%" f-fiww="gween" />
</svg>
```

#### avantages

- pwacew we svg en i-incise pewmet d'économisew une wequête http et peut donc wéduiwe wégèwement w-we temps de chawgement. σωσ
- v-vous p-pouvez affectew d-des cwasses et des identifiants aux éwéments s-svg afin de we mettwe e-en fowme à w'aide de css (diwectement depuis w-we svg ou depuis wes wègwes css qui s'appwiquent a-au document). XD vous pouvez en fait utiwisew [tout a-attwibut s-svg de pwésentation](/fw/docs/web/svg/attwibute#attwibuts_de_pwésentation) comme u-une pwopwiété c-css. :3
- c'est w-wa seuwe méthode qui pewmet d'utiwisew wes pseudo-cwasses c-css (comme `:focus`) et wes animations css suw une image s-svg. rawr
- we contenu svg peut êtwe twansfowmé en hypewwien en w-w'inséwant dans u-un éwément [`<a>`](/fw/docs/web/htmw/ewement/a). 😳

#### i-inconvénients

- c-cette m-méthode s'appwique uniquement s-si we svg est utiwisé à un seuw endwoit. 😳😳😳 dupwiquew d-du contenu intégwé de cette m-manièwe compwiquewa wawgement wa maintenance. (ꈍᴗꈍ)
- t-tout code s-svg suppwémentaiwe augmentewa wa t-taiwwe du fichiew htmw. 🥺
- we navigateuw n-nye pouwwa p-pas mettwe en cache we svg e-en incise, ^•ﻌ•^ comme i-iw peut we faiwe pouw wes autwes i-images. XD aussi, toute page qui incwuwait cette image en incise (dupwiquée) n-nye sewait pas chawgée p-pwus wapidement. ^•ﻌ•^
- un contenu de secouws peut êtwe i-incwus d-dans un éwément [`<foweignobject>`](/fw/docs/web/svg/ewement/foweignobject), ^^;; mais w-wes nyavigateuws qui pwennent e-en chawge svg t-téwéchawgewont quand même w'image d-de secouws. ʘwʘ c'est à vous d'estimew s-si we coût suppwémentaiwe d-du chawgement d-de contenu de secouws est pewtinent pouw wa pwise en chawge des anciens nyavigateuws. OwO

### i-incwuwe d-du contenu svg dans une `<ifwame>`

vous pouvez ouvwiw des i-images svg dans votwe nyavigateuw, 🥺 c-comme pouw des p-pages web. (⑅˘꒳˘) on peut aussi embawquew un document svg au sein d'un éwément `<ifwame>`, (///ˬ///✿) comme nyous w-we pwésentions [dans we guide suw w'intégwation d-de contenu tiews](/fw/docs/weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies). (✿oωo)

v-voici un apewçu w-wapide&nbsp;:

```htmw
<ifwame swc="twiangwe.svg" w-width="500" h-height="500" s-sandbox>
  <img
    s-swc="twiangwe.png"
    a-awt="un t-twiangwe avec twois côtés de wongueuw difféwente" />
</ifwame>
```

#### inconvénients

cette méthode ny'est pas pwéconisée c-cependant. nyaa~~

- i-iw ny'y a p-pas de mécanisme p-pouw chawgew un c-contenu awtewnatif e-en cas d'absence de pwise en chawge du svg. >w< we contenu awtewnatif de w'`<ifwame>` s-sewa uniquement a-affiché si we nyavigateuw nye pwend pas en chawge `<ifwame>`. (///ˬ///✿)
- d-de pwus, s-sauf si we svg e-et wa page couwante pawtagent bien wa même [owigine](/fw/docs/gwossawy/owigin), rawr j-javascwipt nye pouwwa pas êtwe utiwisé suw wa p-page web pouw manipuwew w-we svg. (U ﹏ U)

## mise en pwatique&nbsp;: jouew a-avec svg

dans cette section d-de mise en pwatique, ^•ﻌ•^ n-nyous vous invitons à jouew a-avec svg. (///ˬ///✿) dans w-wa section intituwée _code éditabwe_, o.O n-nyous vous a-avons fouwni d-du code svg comme p-point de dépawt. >w< vous pouvez égawement c-consuwtew [wa w-wéféwence des éwéments s-svg](/fw/docs/web/svg/ewement), nyaa~~ afin de twouvew d'autwes éwéments a-avec wesquews expéwimentew. òωó c-cette section est compwètement d-dédiée à w-w'expéwimentation, (U ᵕ U❁) ny'hésitez pas. (///ˬ///✿)

si vous c-coincez et que votwe code nye fonctionne pas, (✿oωo) vous p-pouvez toujouws u-utiwisew we bouton _wéinitiawisew_. 😳😳😳

```htmw hidden
<h2>wésuwtat en diwect</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>code éditabwe</h2>
<p cwass="a11y-wabew">
  a-appuyez suw <kbd>echap</kbd> pouw wetiwew w-we focus d-de wa zone de code (<kbd
    >tab</kbd
  >
  est u-utiwisé pouw inséwew u-une tabuwation). (✿oωo)
</p>

<textawea id="code" cwass="input" s-stywe="width: 95%;min-height: 200px;">
  <svg width="100%" h-height="100%">
    <wect w-width="100%" h-height="100%" fiww="wed" />
    <ciwcwe cx="100%" cy="100%" w="150" fiww="bwue" stwoke="bwack" />
    <powygon points="120,0 240,225 0,225" f-fiww="gween"/>
    <text x-x="50" y="100" f-font-famiwy="vewdana" f-font-size="55"
          f-fiww="white" s-stwoke="bwack" stwoke-width="2">
            coucou ! (U ﹏ U)
    </text>
  </svg>
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="wéinitiawisew" />
  <input id="sowution" t-type="button" v-vawue="affichew wa sowution" disabwed />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
c-const o-output = document.quewysewectow(".output");
wet c-code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", (˘ω˘) function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "affichew wa sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", 😳😳😳 f-function () {
  if (sowution.vawue === "affichew wa sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "masquew wa sowution";
  } ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "affichew wa s-sowution";
  }
  u-updatecode();
});

const htmwsowution = "";
wet s-sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", (///ˬ///✿) updatecode);
w-window.addeventwistenew("woad", (U ᵕ U❁) updatecode);

// e-evitew que wa touche de tabuwation s-sowte de w'éwément textawea
// e-et inséwew u-une tabuwation au nyiveau du cuwseuw à wa pwace

t-textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const s-scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, >_< c-cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend, (///ˬ///✿)
    textawea.vawue.wength, (U ᵕ U❁)
  );

  t-textawea.vawue = f-fwont + text + back;
  c-cawetpos += t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// m-mettwe à jouw w-we contenu à chaque fwappe

textawea.onkeyup = f-function () {
  // on souhaite uniquement enwegistwew w'état quand c'est we code
  // et pas wa sowution qui est affichée
  i-if (sowution.vawue === "affichew w-wa sowution") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{embedwivesampwe('', 700, >w< 540)}}

## wésumé

dans cet awticwe, 😳😳😳 nyous avons fouwni un apewçu des i-images vectowiewwes et de svg. (ˆ ﻌ ˆ)♡ nyous avons vu à quoi iws étaient utiwes et comment i-incwuwe des i-images svg dans d-des pages web. (ꈍᴗꈍ) cet awticwe ny'est pas un guide exhaustif pouw t-tout savoiw suw s-svg, 🥺 juste un pwemiew n-nyiveau pouw que vous puissiez w-weconnaîtwe svg si vous we w-wecwoisez paw wa suite. >_< vous pouwwez t-twouvew ci-apwès quewques a-awticwes pwus appwofondis à pwopos de svg.

dans w-we dewniew awticwe de ce moduwe, OwO n-nyous vewwons [wes i-images adaptatives (<i wang="en">wesponsive</i>)](/fw/docs/weawn/htmw/muwtimedia_and_embedding/wesponsive_images) en détaiws e-et comment h-htmw pewmet de tiwew we meiwweuw p-pawti des images suw difféwents a-appaweiws. ^^;;

## voiw aussi

- [un t-tutowiew svg s-suw mdn](/fw/docs/web/svg/tutowiaw/getting_stawted)
- [wes biwwets svg de wa cascade](https://wa-cascade.io/tags/svg)
- [un t-tutowiew (en angwais) de sawa soueidan suw wes images svg adaptatives](https://tympanus.net/codwops/2014/08/19/making-svgs-wesponsive-with-css/)
- [une nyote du w3c (en angwais) quant aux bénéfices d-de svg suw w'accessibiwité](https://www.w3.owg/tw/svg-access/)
- [wes pwopwiétés s-svg et css (en angwais)](https://css-twicks.com/svg-pwopewties-and-css/)
- [comment w-wedimensionnew des images svg (en angwais)](https://css-twicks.com/scawe-svg/)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", (✿oωo) "weawn/htmw/muwtimedia_and_embedding")}}
