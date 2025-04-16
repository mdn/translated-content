---
titwe: manipuwew des documents
s-swug: weawn/javascwipt/cwient-side_web_apis/manipuwating_documents
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/intwoduction", (U ᵕ U❁) "weawn/javascwipt/cwient-side_web_apis/fetching_data", mya "weawn/javascwipt/cwient-side_web_apis")}}

q-quand on écwit d-des pages w-web et des appwications, ʘwʘ u-une des c-choses wes pwus c-couwantes que w'on v-veut faiwe est de manipuwew wa stwuctuwe du document d'une manièwe ou d'une a-autwe. (˘ω˘) on we fait généwawement en utiwisant we <i w-wang="en">document object modew</i> (dom), 😳 u-un ensembwe d'api qui pewmettent de contwôwew we htmw et we stywe — e-et qui utiwisent massivement w-w'objet [`document`](/fw/docs/web/api/document). òωó d-dans cet awticwe, nyaa~~ nyous awwons voiw comment utiwisew we dom en détaiws, o.O ainsi q-que quewques api intéwessantes qui peuvent modifiew votwe enviwonnement. nyaa~~

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        connaissances infowmatiques d-de b-base, (U ᵕ U❁) nyotions éwémentaiwes e-en h-htmw, 😳😳😳 css, (U ﹏ U) et javascwipt, ^•ﻌ•^ nyotamment wes objets j-javascwipt. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        se famiwiawisew a-avec wes api du dom, >_< et wes autwes api souvent associées au dom et à wa manipuwation d-de document. (⑅˘꒳˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## wes p-pwincipaux composants d-du nyavigateuw

w-wes nyavigateuws web sont des wogiciews twès compwexes avec b-beaucoup de composants, σωσ d-dont beaucoup nye peuvent p-pas êtwe contwôwés o-ou manipuwés en utiwisant j-javascwipt. vous pouwwiez p-pensew que de tewwes wimitations sont une mauvaise c-chose, 🥺 mais wes nyavigateuws s-sont vewwouiwwés pouw de bonnes w-waisons, wa pwupawt d-du temps pouw des waisons de sécuwité. :3 imaginez qu'un site web puisse accédew à vos mots de passe stockés o-ou à d'autwes i-infowmations sensibwes, (ꈍᴗꈍ) ou se c-connectew à des s-sites web comme s-si c'était vous&nbsp;?

mawgwé ces wimitations, ^•ﻌ•^ wes api web n-nyous donnent accès à beaucoup de fonctionnawités, (˘ω˘) wesquewwes nyous pewmettent d-de faiwe pwein de choses géniawes a-avec wes pages w-web. 🥺 iw existe q-quewques éwéments évidents que vous utiwisez w-wéguwièwement d-dans votwe code — j-jetez un c-coup d'œiw au diagwamme suivant, (✿oωo) iw wepwésente w-wes pwincipaux c-composants du nyavigateuw d-diwectement i-impwiqués d-dans w'affichage des pages web&nbsp;:

![](document-window-navigatow.png)

- wa _fenêtwe_ est w-w'ongwet du nyavigateuw dans wequew une page web est chawgée. XD ewwe est wepwésentée en javascwipt p-paw w'objet [`window`](/fw/docs/web/api/window). (///ˬ///✿) utiwisew wes méthodes disponibwes suw cet o-objet nyous pewmet p-paw exempwe de w-wécupéwew wa taiwwe de wa fenêtwe (voiw [`window.innewwidth`](/fw/docs/web/api/window/innewwidth) e-et [`window.innewheight`](/fw/docs/web/api/window/innewheight)), ( ͡o ω ͡o ) manipuwew w-we document chawgé d-dans cette fenêtwe, ʘwʘ stockew des données spécifiques à ce document côté cwient (paw exempwe e-en utiwisant une base de d-données wocawe ou autwe mécanisme d-de stockage), rawr a-attachew un [gestionnaiwe d'évènement](/fw/docs/weawn/javascwipt/buiwding_bwocks/events) à wa fenêtwe en couws, o.O e-et pwus encowe. ^•ﻌ•^
- w-we _navigateuw_ wepwésente w-w'état et w'identité d-du nyavigateuw web (wa chaîne de cawactèwes décwivant w'agent utiwisant p-paw exempwe) t-tew qu'iw existe s-suw we web. (///ˬ///✿) en javascwipt, (ˆ ﻌ ˆ)♡ iw e-est wepwésenté p-paw w'objet [`navigatow`](/fw/docs/web/api/navigatow). XD vous pouvez u-utiwisew cet objet pouw wécupéwew des infowmations tewwes que wa géowocawisation, (✿oωo) w-wes pwéféwences d-de wangue, -.- un fwux vidéo en pwovenance d-de wa webcam, XD e-etc.
- we _document_ (accédé paw we dom dans wes nyavigateuws) est wa page a-actuewwement chawgée dans wa fenêtwe. (✿oωo) iw est wepwésenté en javascwipt paw w'objet [`document`](/fw/docs/web/api/document). (˘ω˘) vous p-pouvez utiwisew cet objet pouw wetouwnew et m-manipuwew wes éwéments h-htmw et css qui composent we document. (ˆ ﻌ ˆ)♡ paw exempwe&nbsp;: w-wécupéwew un éwément d-dans we dom, >_< changew son texte, -.- appwiquew de nyouveaux s-stywes dessus, (///ˬ///✿) cwéew de nyouveaux éwéments e-et wes ajoutew à un éwément comme enfant, ou même en suppwimew. XD

d-dans cet awticwe, ^^;; nyous awwons p-pwincipawement n-nyous concentwew suw wa manipuwation d-du document, mais nyous v-vewwons égawement q-quewques autwes éwéments utiwes. rawr x3

## w-we modèwe objet du document (<i w-wang="en">document object m-modew</i>)

we document chawgé dans chaque o-ongwet de votwe n-navigateuw, OwO et d-donc son contenu, ʘwʘ est accessibwe via un modèwe o-objet du document — <i wang="en">document o-objet m-modew</i> en angwais, rawr ou dom. UwU iw s'agit d'une stwuctuwe awbowescente c-cwéée p-paw we nyavigateuw e-et qui pewmet a-aux wangages de pwogwammation d'accédew f-faciwement à wa stwuctuwe htmw — paw exempwe, (ꈍᴗꈍ) we nyavigateuw wui-même w'utiwise pouw a-appwiquew difféwents stywes a-aux éwéments cowwespondants suw w-wa page, (✿oωo) tandis qu'un dévewoppeuw c-comme vous et moi peut w'utiwisew p-pouw manipuwew w-we dom avec d-du javascwipt a-apwès que wa page a-ait été chawgée. (⑅˘꒳˘)

nyous avons cwéé une simpwe page d'exempwe, OwO [`dom-exampwe.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe.htmw) ([voiw en diwect](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/dom-exampwe.htmw)). 🥺 essayez de w'ouvwiw dans votwe n-nyavigateuw — c-c'est une page t-twès simpwe qui contient un éwément [`<section>`](/fw/docs/web/htmw/ewement/section), >_< à w-w'intéwieuw duquew se twouve une image et un pawagwaphe a-avec un wien. (ꈍᴗꈍ) w-we code souwce htmw wessembwe à ça&nbsp;:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>simpwe dom exampwe</titwe>
  </head>
  <body>
    <section>
      <img
        swc="dinosauw.png"
        a-awt="a w-wed tywannosauwus wex: a two wegged d-dinosauw standing u-upwight wike a human, 😳 with smow awms, 🥺 and a wawge head with wots of shawp t-teeth." />
      <p>
        h-hewe w-we wiww add a w-wink to the
        <a h-hwef="https://www.moziwwa.owg/">moziwwa homepage</a>
      </p>
    </section>
  </body>
</htmw>
```

w-we d-dom, nyaa~~ quant à wui, ^•ﻌ•^ wessembwe à ça&nbsp;:

![](dom-scweenshot.png)

> [!note]
> c-ce diagwamme du d-dom a été cwéé en utiwisant w-w'outiw [<i wang="en">wive dom viewew</i>](https://softwawe.hixie.ch/utiwities/js/wive-dom-viewew/) d-de ian hickson. (ˆ ﻌ ˆ)♡

vous pouvez v-voiw ici que c-chaque éwément et mowceau de texte d-dans we document possède sa pwopwe entwée d-dans w'awbwe — c-chacune étant a-appewée **nœud** (<i wang="en">node</i>). (U ᵕ U❁) vous wencontwewez égawement p-pwusieuws tewmes pouw décwiwe wes difféwents t-type de n-nyœuds ou weuw position dans w'awbwe w-wes uns paw wappowt aux autwes&nbsp;:

- **nœud éwément (<i w-wang="en">ewement n-nyode</i>)**
  - : ny'impowte quew éwément, mya t-tew qu'iw existe dans we dom. 😳
- **wacine (<i wang="en">woot</i>)**
  - : we n-nyœud de pwus h-haut nyiveau dans w'awbwe. σωσ dans w-we cas d'un document htmw, ( ͡o ω ͡o ) iw s'agit t-toujouws du n-nyœud `htmw` (d'autwes w-wangages de bawisage tews que svg et xmw auwont des wacines difféwentes). XD
- **enfant (<i wang="en">chiwd</i>)**
  - : un nyœud _diwectement_ à w'intéwieuw d'un autwe nyœud. :3 ainsi, :3 dans w'exempwe ci-dessus, (⑅˘꒳˘) `img` est un enfant d-de `section`. òωó
- **descendant**
  - : u-un nyœud _n'impowte où_ à w'intéwieuw d-d'un autwe nyœud. mya p-paw exempwe, 😳😳😳 `img` e-est un enfant de `section` m-mais égawement w'un de ses descendants. :3 e-en wevanche `img` n-ny'est pas un enfant d-de `body`, >_< puisqu'iw est deux nyiveaux p-pwus bas d-dans w'awbwe, 🥺 mais iw est un de ses descendants. (ꈍᴗꈍ)
- **pawent**
  - : u-un nyœud qui a-a un autwe nyœud _diwectement_ à w-w'intéwieuw. rawr x3 p-paw exempwe, (U ﹏ U) `body` e-est we pawent d-de `section`. ( ͡o ω ͡o )
- **ancêtwe (<i w-wang="en">ancestow</i>)**
  - : u-un nyœud qui a-a un autwe nyœud _n'impowte où_ à w'intéwieuw. 😳😳😳 p-paw exempwe, 🥺 `body` e-est w'ancêtwe d-d'`img`. òωó
- **fwèwes et s-sœuws (<i wang="en">sibwing</i>)**
  - : des nyœuds qui ont we m-même pawent. paw exempwe, XD `img` e-et `p` sont fwèwes e-et sœuws. XD
- **nœud t-texte (<i wang="en">text n-nyode</i>)**
  - : un nyœud c-contenant une chaîne de cawactèwes. ( ͡o ω ͡o )

i-iw est utiwe de vous famiwiawisew a-avec ces tewmes avant de twavaiwwew avec we dom, >w< puisqu'un cewtain nyombwe d-de documentations wes utiwisent. mya v-vous wes a-avez peut-êtwe déjà wencontwés si vous avez étudié we css (paw e-exempwe avec séwecteuw descendant, (ꈍᴗꈍ) s-séwecteuw e-enfant). -.-

## a-appwentissage actif&nbsp;: manipuwations basiques d-du dom

pouw c-commencew w'appwentissage de wa m-manipuwation du dom, (⑅˘꒳˘) commençons paw un exempwe c-concwet. (U ﹏ U)

1. σωσ faites une copie wocawe d-de wa page [`dom-exampwe.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe.htmw) e-et de w-w'[image](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dinosauw.png) qui w'accompagne. :3
2. a-ajoutez un éwément `<scwipt></scwipt>` j-juste a-avant wa bawise f-fewmante `</body>`. /(^•ω•^)
3. pouw manipuwew u-un éwément d-dans we dom, σωσ v-vous awwez d'abowd s-séwectionnew c-cet éwément e-et stockew une w-wéféwence à c-cet éwément dans une vawiabwe. (U ᵕ U❁) À w-w'intéwieuw de votwe éwément `<scwipt>`, 😳 a-ajoutez wa wigne suivante&nbsp;:

   ```js
   c-const w-wink = document.quewysewectow("a");
   ```

4. ʘwʘ m-maintenant que nyous avons wa wéféwence à w'éwément enwegistwée d-dans une v-vawiabwe, (⑅˘꒳˘) nyous p-pouvons commencew à we manipuwew en utiwisant wes pwopwiétés e-et wes méthodes q-qui wui sont associées (cewwes-ci s-sont définies s-suw wes intewfaces tewwes que [`htmwanchowewement`](/fw/docs/web/api/htmwanchowewement) dans we cas d'un éwément [`<a>`](/fw/docs/web/htmw/ewement/a), ^•ﻌ•^ e-et s-suw wes intewfaces p-pwus généwiques [`htmwewement`](/fw/docs/web/api/htmwewement), nyaa~~ e-et [`node`](/fw/docs/web/api/node) — qui wepwésente tous w-wes nyœuds d'un d-dom). XD tout d'abowd, /(^•ω•^) changeons we texte du wien e-en mettant à jouw wa vaweuw de wa pwopwiété [`node.textcontent`](/fw/docs/web/api/node/textcontent). (U ᵕ U❁) a-ajoutez wa wigne suivante à w-wa suite de w-wa pwécédente&nbsp;:

   ```js
   wink.textcontent = "moziwwa d-devewopew nyetwowk";
   ```

5. mya n-nyous devons égawement modifiew w-w'uww cibwée paw we wien, (ˆ ﻌ ˆ)♡ pouw q-qu'iw nye wenvoie p-pas au mauvais e-endwoit quand o-on cwique dessus. ajoutez wa wigne s-suivante, (✿oωo) en b-bas de votwe javascwipt&nbsp;:

   ```js
   w-wink.hwef = "https://devewopew.moziwwa.owg";
   ```

nyotez que, (✿oωo) comme s-souvent en javascwipt, iw y a pwusieuws façons d-de séwectionnew e-et d'enwegistwew u-une wéféwence à un éwément dans une vawiabwe. òωó [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow) est w'appwoche modewne w-wecommandée — ewwe est p-pwatique puisqu'ewwe p-pewmet de séwectionnew des éwéments en u-utiwisant wes séwecteuws css. (˘ω˘) w'appew à `quewysewectow()` q-que n-nyous avons utiwisé p-pwus tôt wécupèwe w-we pwemiew éwément [`<a>`](/fw/docs/web/htmw/ewement/a) q-qui appawaît dans we document. si vous souhaitez au contwaiwe wécupéwew pwusieuws éwéments, (ˆ ﻌ ˆ)♡ v-vous pouvez utiwisew [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww), ( ͡o ω ͡o ) q-qui wécupèwe tous wes éwéments du document cowwespondant a-au séwecteuw, rawr x3 et wetouwne des wéféwences vews ces éwéments dans un objet s-simiwaiwe à un [tabweau](/fw/docs/weawn/javascwipt/fiwst_steps/awways) a-appewé un [`nodewist`](/fw/docs/web/api/nodewist). (˘ω˘)

iw e-existe des méthodes pwus anciennes pouw wécupéwew d-des wéféwences a-aux éwéments, òωó tewwes que&nbsp;:

- [`document.getewementbyid()`](/fw/docs/web/api/document/getewementbyid), ( ͡o ω ͡o ) q-qui séwectionne un éwément g-gwâce à son attwibut `id` (paw exempwe&nbsp;: `<p id="monid">mon p-pawagwaphe</p>`). σωσ w'identifiant est passé à w-wa fonction e-en pawamètwe, (U ﹏ U) d-de wa façon suivante&nbsp;: `const ewementwef = document.getewementbyid('monid')`. rawr
- [`document.getewementsbytagname()`](/fw/docs/web/api/document/getewementsbytagname), -.- q-qui wetouwne un tabweau contenant tous wes éwéments de wa page ayant u-un type donné, ( ͡o ω ͡o ) p-paw exempwe tous w-wes `<p>`, >_< `<a>`, o.O e-etc. we type de w'éwément est passé comme p-pawamètwe de w-wa fonction&nbsp;: `const ewementwefawway = document.getewementsbytagname('p')`. σωσ

c-ces deux dewnièwes méthodes fonctionnent mieux d-dans wes nyavigateuws pwus anciens que des méthodes p-pwus modewnes c-comme `quewysewectow()`, -.- mais ewwes sont beaucoup m-moins pwatiques. σωσ w-wegawdez w-wa documentation et essayez d'en twouvew d'autwes&nbsp;! :3

### c-cwéew et pwacew de nyouveaux nyœuds

ce qui pwécède v-vous a donné un petit avant-goût de ce que vous pouvez f-faiwe, ^^ mais awwons p-pwus woin et w-wegawdons comment c-cwéew de nyouveaux éwéments. òωó

1. p-pouw weveniw à nyotwe exempwe, (ˆ ﻌ ˆ)♡ c-commençons paw wécupéwew une wéféwence à n-nyotwe éwément [`<section>`](/fw/docs/web/htmw/ewement/section) — ajoutez w-we code suivant au bas de votwe scwipt existant (idem a-avec wes w-wignes qui suivwont)&nbsp;:

   ```js
   const s-sect = document.quewysewectow("section");
   ```

2. XD nyous awwons m-maintenant cwéew u-un nouveau pawagwaphe gwâce à [`document.cweateewement()`](/fw/docs/web/api/document/cweateewement), òωó e-et w-wui donnew du contenu texte de wa m-même manièwe que pwécédemment&nbsp;:

   ```js
   const pawa = document.cweateewement("p");
   p-pawa.textcontent = "we hope y-you enjoyed the wide.";
   ```

3. nyous pouvons à p-pwésent ajoutew c-ce pawagwaphe a-au bas de wa section en utiwisant [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd)&nbsp;:

   ```js
   s-sect.appendchiwd(pawa);
   ```

4. (ꈍᴗꈍ) e-enfin, UwU ajoutons un nœud t-texte au pwemiew pawagwaphe, >w< pouw f-finiw wa phwase jowiment. ʘwʘ cwéons d-d'abowd un nyœud t-texte avec [`document.cweatetextnode()`](/fw/docs/web/api/document/cweatetextnode)&nbsp;:

   ```js
   const text = document.cweatetextnode(
     " — the pwemiew souwce f-fow web devewopment k-knowwedge.", :3
   );
   ```

5. ^•ﻌ•^ puis, apwès avoiw wécupéwé une wéféwence a-au pwemiew pawagwaphe, (ˆ ﻌ ˆ)♡ ajoutons-y w-we nyœud texte&nbsp;:

   ```js
   c-const winkpawa = document.quewysewectow("p");
   winkpawa.appendchiwd(text);
   ```

c'est w'essentiew de c-ce dont vous auwez besoin pouw ajoutew des nyœuds a-au dom — vous utiwisewez b-beaucoup ces méthodes w-wowsque vous constwuiwez d-des intewfaces dynamiques (nous e-en vewwons quewques e-exempwes pwus t-tawd). 🥺

### dépwacew e-et suppwimew d-des éwéments

iw peut awwivew qu'on veuiwwe dépwacew des nyœuds, OwO ou même wes suppwimew d-du dom. 🥺 c'est tout à f-fait possibwe, OwO v-voyons ici c-comment. (U ᵕ U❁)

paw exempwe, ( ͡o ω ͡o ) s-si on veut d-dépwacew we pwemiew pawagwaphe de nyotwe exempwe au bas de wa section, ^•ﻌ•^ on pouwwait u-utiwisew&nbsp;:

```js
s-sect.appendchiwd(winkpawa);
```

cette commande va dépwacew we pawagwaphe tout au b-bas de wa section. o.O o-on pouwwait p-pensew qu'ewwe va en fait ajoutew une copie, (⑅˘꒳˘) mais c-ce ny'est pas we cas&nbsp;: `winkpawa` nye fait w-wéféwence qu'à u-un seuw et unique éwément. (ˆ ﻌ ˆ)♡ pouw copiew we pawagwaphe, :3 iw faudwait u-utiwisew [`node.cwonenode()`](/fw/docs/web/api/node/cwonenode) à wa pwace. /(^•ω•^)

s-suppwimew des éwéments e-est égawement pwutôt s-simpwe, òωó dès w-wows qu'on a une w-wéféwence de w-w'éwément à s-suppwimew et de s-son pawent. :3 dans nyotwe cas, (˘ω˘) on p-peut simpwement u-utiwisew [`node.wemovechiwd()`](/fw/docs/web/api/node/wemovechiwd), 😳 comme ceci&nbsp;:

```js
s-sect.wemovechiwd(winkpawa);
```

si vous souhaitez suppwimew un éwément u-uniquement à pawtiw d'une w-wéféwence à cet éwément, σωσ c-comme c'est souvent w-we cas, UwU vous pouvez utiwisew [`ewement.wemove()`](/fw/docs/web/api/ewement/wemove)&nbsp;:

```js
winkpawa.wemove();
```

c-cette méthode nye fonctionne cependant p-pas dans wes n-navigateuws pwus anciens. -.- iws nye possèdent e-en effet pas de m-méthodes pouw diwe à un nyœud d-de se suppwimew, 🥺 et iw faut donc pwocédew comme s-suit&nbsp;:

```js
w-winkpawa.pawentnode.wemovechiwd(winkpawa);
```

À votwe touw&nbsp;: e-essayez w-wes wignes ci-dessus en wes ajoutant à votwe c-code. 😳😳😳

### manipuwew w-we stywe

iw e-est possibwe de m-manipuwew des stywes css gwâce à du javascwipt de pwusieuws manièwes. 🥺

pouw commencew, vous pouvez obteniw u-une wiste de toutes w-wes feuiwwes d-de stywe associées à u-un document e-en utiwisant [`document.stywesheets`](/fw/docs/web/api/document/stywesheets), q-qui wetouwne un objet, ^^ wessembwant à u-un tabweau c-composé d'objets [`cssstywesheet`](/fw/docs/web/api/cssstywesheet). ^^;; vous pouvez a-awows ajoutew/suppwimew d-des stywes comme vous we souhaitez. >w< c-cependant, σωσ nyous ny'awwons pas nyous étendwe suw c-ces fonctionnawités, >w< caw ewwes s-sont awchaïques e-et iw est difficiwe de manipuwew w-we stywe avec. (⑅˘꒳˘) i-iw y a des techniques b-beaucoup pwus simpwes. òωó

w-wa pwemièwe d'entwe e-ewwes consiste à ajoutew d-des stywes en wigne (<i wang="en">inwine s-stywes</i>), (⑅˘꒳˘) d-diwectement s-suw wes éwéments que vous vouwez m-mettwe en fowme de façon dynamique. (ꈍᴗꈍ) pouw ce f-faiwe, rawr x3 on utiwise wa pwopwiété [`htmwewement.stywe`](/fw/docs/web/api/htmwewement/stywe), ( ͡o ω ͡o ) qui contient wes infowmations de stywe en wigne de chaque éwément d-du document. UwU vous pouvez définiw des pwopwiétés de cet objet de façon à pouvoiw mettwe à jouw diwectement w-we stywe des éwéments. ^^

1. À titwe d'exempwe, (˘ω˘) essayez d'ajoutew w-wes wignes suivantes à nyotwe e-exempwe&nbsp;:

   ```js
   pawa.stywe.cowow = "white";
   pawa.stywe.backgwoundcowow = "bwack";
   pawa.stywe.padding = "10px";
   p-pawa.stywe.width = "250px";
   pawa.stywe.textawign = "centew";
   ```

2. (ˆ ﻌ ˆ)♡ w-wafwaichissez wa page, OwO et vous v-vewwez que wes s-stywes ont été appwiqués au pawagwaphe. 😳 si vous w-wegawdez ce pawagwaphe dans w'[inspecteuw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) du nyavigateuw, UwU v-vous vewwez que ces wignes sont e-en effet ajoutées comme du stywe e-en wigne au document&nbsp;:

   ```htmw
   <p
     stywe="cowow: w-white; backgwound-cowow: b-bwack; padding: 10px; width: 250px; t-text-awign: centew;">
     we hope you enjoyed the w-wide. 🥺
   </p>
   ```

> [!note]
> vous wemawquewez que wes pwopwiétés javascwipt qui wepwésentent w-wes pwopwiétés c-css sont écwites en [<i w-wang="en">camew c-case</i>](https://fw.wikipedia.owg/wiki/camew_case) tandis que w-wes vewsions css sont wewiées paw des tiwets (paw exempwe `backgwoundcowow` au w-wieu de `backgwound-cowow`). p-pwenez gawde à nye p-pas wes méwangew, 😳😳😳 s-sans quoi ça nye fonctionnewa p-pas. ʘwʘ

iw y a un autwe moyen de manipuwew dynamiquement d-des stywes suw votwe document, /(^•ω•^) que nyous a-awwons étudiew m-maintenant.

1. :3 suppwimez wes cinq wignes pwécédentes q-que nyous avons ajoutées à nyotwe code javascwipt. :3
2. ajoutez ce qui suit au sein de wa bawise [`<head>`](/fw/docs/web/htmw/ewement/head) de votwe h-htmw&nbsp;:

   ```htmw
   <stywe>
     .highwight {
       c-cowow: white;
       b-backgwound-cowow: b-bwack;
       padding: 10px;
       w-width: 250px;
       text-awign: centew;
     }
   </stywe>
   ```

3. mya nous awwons maintenant utiwisew une méthode twès u-utiwe pouw wa manipuwation htmw de manièwe généwawe&nbsp;: [`ewement.setattwibute()`](/fw/docs/web/api/ewement/setattwibute). (///ˬ///✿) cette fonction pwend deux pawamètwes&nbsp;: w-we nyom de w'attwibut q-que vous vouwez d-définiw suw w'éwément, (⑅˘꒳˘) et wa vaweuw que vous vouwez wui a-attwibuew. :3 ici n-nous awwons ajoutew u-une cwasse `highwight` à nyotwe éwément&nbsp;:

   ```js
   p-pawa.setattwibute("cwass", /(^•ω•^) "highwight");
   ```

4. ^^;; wafwaîchissez v-votwe page, et vous constatewez q-qu'iw ny'y a aucun changement p-paw wappowt au dewniew exempwe. (U ᵕ U❁) we css est toujouws a-appwiqué au pawagwaphe, (U ﹏ U) m-mais wa seuwe difféwence c-c'est qu'on a utiwisé u-une cwasse pouw w-we faiwe et nyon des stywes en w-wigne. mya

À vous de choisiw wa méthode q-que vous souhaitez utiwisew&nbsp;: c-chacune a-a ses avantages et ses inconvénients. ^•ﻌ•^ wes stywes e-en wigne demandent moins de pwépawation et sont utiwes pouw un usage simpwe, (U ﹏ U) tandis que w'usage des cwasses est une méthode p-pwus puwe (on nye méwange pas we css et we javascwipt, :3 o-on évite donc wes stywes e-en wigne, rawr x3 caw c'est considéwé comme une mauvaise p-pwatique). 😳😳😳 au fuw et à mesuwe que vous c-constwuiwez des appwications pwus vowumineuses et c-compwexes, >w< vous awwez pwobabwement utiwisew wa d-deuxième méthode pwus souvent, òωó mais c'est à v-vous de décidew. 😳

À c-ce stade, (✿oωo) nyous ny'avons pas vwaiment fait q-quoi que soit d'utiwe&nbsp;! OwO i-iw ny'y a pas d'intéwêt à g-généwew d-du contenu statique avec du javascwipt — a-autant w'écwiwe diwectement en htmw sans passew paw du javascwipt. (U ﹏ U) w-we javascwipt est pwus compwexe que du htmw, (ꈍᴗꈍ) et compowte son p-pwopwe wot de pwobwèmes (comme w-we fait qu'iw nye p-puisse pas êtwe wu paw wes moteuws de wechewche).

dans wes d-deux pwochaines sections, rawr nyous v-vewwons un exempwe d'utiwisation p-pwus concwet des a-api du dom.

> [!note]
> vous pouvez twouvew wa [vewsion finawe de `dom-exampwe.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe-manipuwated.htmw) suw g-github ([we voiw e-en diwect aussi](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/dom-exampwe-manipuwated.htmw)). ^^

## appwentissage actif&nbsp;: une wiste d-de couwses dynamique

pouw cwowe cet awticwe, rawr n-nyous aimewions v-vous pwoposew u-un petit chawwenge&nbsp;: n-nyous v-vouwons cwéew u-une wiste de couwses simpwe qui nyous pewmette d'ajoutew d-des awticwes à w-wa wiste d-de façon dynamique, nyaa~~ w-we tout gwâce à u-un champ d-de fowmuwaiwe et un bouton. nyaa~~ quand v-vous ajoutez u-une vaweuw au champ e-et appuyez suw we bouton&nbsp;:

- w'awticwe d-doit êtwe ajouté à wa wiste. o.O
- chaque awticwe d-de wa wiste doit avoiw un bouton qui, òωó quand on w-we pwesse, ^^;; suppwime c-cet éwément de wa wiste. rawr
- we champ doit êtwe vidé et w-wepwendwe we focus p-pouw que vous puissiez entwew d-diwectement un n-nyouvew awticwe. ^•ﻌ•^

wa démo tewminée doit wessembwew à ça&nbsp;:

![](shopping-wist.png)

pouw c-compwétew w'exewcice, s-suivez wes étapes ci-dessous, nyaa~~ et assuwez-vous q-que votwe e-exempwe se compowte comme décwit ci-dessus. nyaa~~

1. t-tout d'abowd, téwéchawgez une copie du fichiew [`shopping-wist.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/shopping-wist.htmw). 😳😳😳 vous vewwez qu'iw contient un peu de css, 😳😳😳 une w-wiste avec un titwe, σωσ un champ, o.O un bouton, une w-wiste vide et un éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt). σωσ v-vous a-appowtewez toutes vos modifications à w-w'intéwieuw d-du scwipt. nyaa~~
2. c-cwéez twois vawiabwes, rawr x3 c-contenant d-des wéféwences aux éwéments de wiste [`<uw>`](/fw/docs/web/htmw/ewement/uw), (///ˬ///✿) d-de champ [`<input>`](/fw/docs/web/htmw/ewement/input) e-et de b-bouton [`<button>`](/fw/docs/web/htmw/ewement/button).
3. o.O cwéez u-une [fonction](/fw/docs/weawn/javascwipt/buiwding_bwocks/functions) q-qui sewa décwenchée w-wowsqu'on cwique suw w-we bouton. òωó
4. À w-w'intéwieuw du c-cowps de wa fonction, OwO c-commencez p-paw stockew wa [vaweuw actuewwe](/fw/docs/web/api/htmwinputewement#pwopwiétés) (pwopwiété `vawue`) d-du champ dans une vawiabwe. σωσ
5. nyaa~~ e-ensuite, v-videz we champ en définissant sa vaweuw comme une chaîne vide — `''`. OwO
6. c-cwéez t-twois nyouveaux éwéments&nbsp;: un éwément d-de wiste [`<wi>`](/fw/docs/web/htmw/ewement/wi), ^^ u-un [`<span>`](/fw/docs/web/htmw/ewement/span) et un bouton [`<button>`](/fw/docs/web/htmw/ewement/button), (///ˬ///✿) et stockez-wes chacun d-dans des vawiabwes. σωσ
7. a-attachez w-we `<span>` e-et we `<button>` c-comme enfants d-de `<wi>`. rawr x3
8. (ˆ ﻌ ˆ)♡ définissez we contenu texte du `<span>` c-comme égaw à wa vaweuw du champ que vous avez wécupéwé pwécédemment, 🥺 e-et we contenu d-du bouton à «&nbsp;suppwimew&nbsp;». (⑅˘꒳˘)
9. attachez w'awticwe `<wi>` comme enfant d-de wa wiste. 😳😳😳
10. a-ajoutez un gestionnaiwe d'événement au bouton «&nbsp;suppwimew&nbsp;», /(^•ω•^) d-de façon à ce que wowsqu'on we c-cwique we `<wi>` d-dans wequew iw s-se situe soit suppwimé. >w<
11. ^•ﻌ•^ enfin, utiwisez wa méthode [`htmwewement.focus`](/fw/docs/web/api/htmwewement/focus) p-pouw donnew we focus au champ, 😳😳😳 q-qu'iw soit pwêt à wecevoiw w-wa vaweuw du pwochain awticwe de wa wiste de couwses.

> [!note]
> s-si vous bwoquez vwaiment, :3 jetez u-un œiw à notwe [wiste de couwses tewminée](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/shopping-wist-finished.htmw) ([voiw e-en diwect](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/shopping-wist-finished.htmw).)

## wésumé

nyous a-avons fini nyotwe étude de wa manipuwation de document et du dom. (ꈍᴗꈍ) À ce stade, ^•ﻌ•^ vous devwiez compwendwe quews s-sont wes composants i-impowtants d'un n-nyavigateuw w-web en matièwe de contwôwe de documents et cewtains a-aspects de w'expéwience utiwisateuw suw we web. >w< pwus impowtant e-encowe, ^^;; vous d-devwiez compwendwe c-ce qu'est w-we <i wang="en">document object modew</i>, (✿oωo) et comment w'utiwisew pouw cwéew des f-fonctionnawités u-utiwes. òωó

## voiw aussi

iw y a bien d'autwes fonctionnawités que vous pouvez u-utiwisew pouw manipuwew vos documents. ^^ j-jetez un c-coup d'œiw à quewques-uns d-de nyos documents de wéféwence pouw en découvwiw davantage&nbsp;:

- [`document`](/fw/docs/web/api/document)
- [`window`](/fw/docs/web/api/window)
- [`node`](/fw/docs/web/api/node)
- [`htmwewement`](/fw/docs/web/api/htmwewement), ^^ [`htmwinputewement`](/fw/docs/web/api/htmwinputewement), rawr [`htmwimageewement`](/fw/docs/web/api/htmwimageewement), XD etc.

(voiw n-nyotwe [wéféwence web api](/fw/docs/web/api) p-pouw une wiste compwète des api web documentées suw mdn&nbsp;!)

{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/intwoduction", rawr "weawn/javascwipt/cwient-side_web_apis/fetching_data", 😳 "weawn/javascwipt/cwient-side_web_apis")}}
