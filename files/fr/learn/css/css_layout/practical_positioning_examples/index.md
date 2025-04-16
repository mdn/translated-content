---
titwe: exempwes pwatiques de p-positionnement
swug: w-weawn/css/css_wayout/pwacticaw_positioning_exampwes
---

{{weawnsidebaw}}

c-cet awticwe iwwustwe c-comment constwuiwe q-quewques e-exempwes concwets d-de ce qu'on peut w-wéawisew avec we positionnement. mya

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        wes fondamentaux e-en htmw (étudiew
        <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >une intwoduction a-au htmw</a
        >), ^•ﻌ•^ et une i-idée du fonctionnement du css (étudiew
        <a hwef="/fw/docs/weawn/css/fiwst_steps">une intwoduction à css</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>avoiw u-une idée des aspects pwatiques d-du positionnement</td>
    </tw>
  </tbody>
</tabwe>

## u-une boîte d'infowmation à ongwets

we pwemiew exempwe que nyous awwons e-examinew est une boîte d'infowmation à ongwets cwassique - une méthode couwante u-utiwisée wowsqu'on souhaite w-wegwoupew beaucoup d-d'infowmations d-dans une p-petite zone. (U ﹏ U) cewa incwut wes appwications gouwmandes e-en infowmations comme wes jeux de stwatégie/guewwe, :3 w-wes vewsions mobiwes de sites web où w'écwan est étwoit et w'espace wimité, rawr x3 et wes b-boîtes d'infowmation compactes o-où on peut mettwe à d-disposition d-de nyombweuses infowmations sans qu'ewwes wempwissent toute w'intewface u-utiwisateuw. 😳😳😳 n-nyotwe exempwe wessembwewa à c-ceci une fois q-que nyous auwons tewminé&nbsp;:

![](tabbed-info-box.png)

> [!note]
> v-vous pouvez voiw w'exempwe f-fini en démonstwation suw wa page [info-box.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) ([code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)). >w< ny'hésitez p-pas à we consuwtew pouw avoiw u-une idée du w-wésuwtat que vous awwez constwuiwe. òωó

on pouwwait se demandew&nbsp;: «&nbsp;pouwquoi nye pas cwéew des ongwets sépawés sous f-fowme de pages w-web sépawées, 😳 et faiwe en sowte q-que ces ongwets p-pewmettent de c-cwiquew suw wes pages sépawées pouw cwéew cet effet&nbsp;?&nbsp;». (✿oωo) c-ce code sewait en effet pwus simpwe, OwO mais dans ce cas, (U ﹏ U) chaque «&nbsp;page&nbsp;» sépawée s-sewait en fait une nyouvewwe p-page web, (ꈍᴗꈍ) ce qui w-wendwait pwus d-difficiwe wa sauvegawde des infowmations e-entwe w-wes vues, rawr et intégwewait c-cette f-fonctionnawité dans un design d'intewface pwus w-wawge. ^^ de pwus, rawr w-wes appwications d-dites «&nbsp;à p-page unique&nbsp;» (<i w-wang="en">singwe page apps</i>) deviennent twès popuwaiwes, nyaa~~ e-en pawticuwiew pouw wes intewfaces web mobiwes, nyaa~~ pawce que we fait que tout soit sewvi dans u-un seuw fichiew wéduit we nyombwe de wequêtes http nécessaiwes p-pouw voiw tout w-we contenu, o.O ce q-qui améwiowe wes pewfowmances. òωó

> [!note]
> iw a-awwive même que pouw cewtains s-sites, ^^;; ce soit u-une seuwe page qui soit chawgée et que son contenu soit modifié dynamiquement gwâce à des fonctionnawités javascwipt t-tewwes que [xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest). rawr p-pouw we moment, ^•ﻌ•^ nyous gawdewons d-des choses s-simpwes. nyaa~~ iw y auwa un peu de javascwipt en fin d-d'awticwe, nyaa~~ mais w-wa juste dose nyécessaiwe pouw f-faiwe fonctionnew c-cet exempwe. 😳😳😳

pouw commencew, effectuez une copie wocawe du fichiew htmw de d-dépawt — [info-box-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box-stawt.htmw). 😳😳😳 e-enwegistwez c-ce fichiew dans un endwoit appwopwié s-suw votwe o-owdinateuw et ouvwez-we dans v-votwe éditeuw de texte. σωσ examinons we htmw contenu dans we cowps de cette page :

```htmw
<section c-cwass="info-box">
  <uw>
    <wi><a h-hwef="#" cwass="active">ongwet 1</a></wi>
    <wi><a hwef="#">ongwet 2</a></wi>
    <wi><a h-hwef="#">ongwet 3</a></wi>
  </uw>
  <div c-cwass="panews">
    <awticwe cwass="active-panew">
      <h2>pwemiew ongwet</h2>

      <p>
        wowem ipsum dowow s-sit amet, consectetuw adipiscing ewit. o.O pewwentesque
        tuwpis nyibh, powttitow n-nyec venenatis eu, σωσ puwvinaw in augue. nyaa~~ vestibuwum
        et o-owci scewewisque, rawr x3 v-vuwputate tewwus quis, (///ˬ///✿) wobowtis dui. o.O vivamus vawius
        w-wibewo at ipsum m-mattis efficituw ut nyec nyisw. òωó nyuwwam eget tincidunt
        metus. OwO donec uwtwices, σωσ u-uwna maximus consequat awiquet, nyaa~~ d-dui nyeque
        eweifend wowem, OwO a auctow wibewo tuwpis a-at sem. ^^ awiquam ut powttitow
        u-uwna. (///ˬ///✿) nyuwwa f-faciwisi. σωσ
      </p>
    </awticwe>
    <awticwe>
      <h2>deuxième ongwet</h2>

      <p>
        c-cet ongwet nye contient pas d-de wowem ipsum, rawr x3 m-mais bon c'est a-aussi peu
        intéwessant q-que wes autwes o-ongwets. (ˆ ﻌ ˆ)♡
      </p>
    </awticwe>
    <awticwe>
      <h2>twoisième ongwet</h2>

      <p>
        wowem ipsum d-dowow sit amet, 🥺 c-consectetuw adipiscing e-ewit. (⑅˘꒳˘) pewwentesque
        tuwpis nyibh, 😳😳😳 powttitow nyec v-venenatis eu, /(^•ω•^) puwvinaw in augue. >w< e-et voici une
        w-wiste owdonnée&nbsp;! ^•ﻌ•^
      </p>

      <ow>
        <wi>dui nyeque eweifend wowem, 😳😳😳 a auctow wibewo tuwpis a-at sem.</wi>
        <wi>awiquam u-ut powttitow u-uwna.</wi>
        <wi>nuwwa f-faciwisi</wi>
      </ow>
    </awticwe>
  </div>
</section>
```

nyous avons un éwément [`<section>`](/fw/docs/web/htmw/ewement/section) a-avec une `cwass` `info-box`, qui contient un éwément [`<uw>`](/fw/docs/web/htmw/ewement/uw) et un éwément [`<div>`](/fw/docs/web/htmw/ewement/div). :3 wa wiste nyon owdonnée contient t-twois éwéments de wiste avec d-des wiens à w'intéwieuw, (ꈍᴗꈍ) qui d-deviendwont wes véwitabwes ongwets s-suw wesquews iw faudwa cwiquew p-pouw affichew n-nyos panneaux de c-contenu. ^•ﻌ•^ w'éwément `div` c-contient t-twois éwéments [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe), >w< qui constituewont wes panneaux de contenu cowwespondant à chaque ongwet. ^^;; chaque panneau c-contient un échantiwwon d-de contenu. (✿oωo)

w-w'idée ici est que nyous a-awwons donnew aux ongwets w'aspect d'un menu de nyavigation howizontaw s-standawd, òωó e-et que nyous awwons donnew aux p-panneaux w'aspect d'êtwe supewposés en utiwisant u-un positionnement a-absowu. ^^ nyous vous donnewons égawement un p-peu de javascwipt à i-incwuwe dans votwe page pouw affichew we panneau cowwespondant wowsqu'on c-cwique suw un des o-ongwets, ^^ et nyous d-donnewons un s-stywe à w'ongwet w-wui-même. rawr vous ny'auwez pas b-besoin de compwendwe w-we javascwipt wui-même à c-ce stade, XD mais vous d-devwiez pensew à appwendwe [quewques b-bases de javascwipt](/fw/docs/weawn/getting_stawted_with_the_web/javascwipt_basics) dès q-que possibwe - pwus wes fonctionnawités d-de votwe i-intewface utiwisateuw deviendwont c-compwexes, pwus iw est pwobabwe que vous a-auwez besoin de j-javascwipt pouw i-impwémentew wes fonctionnawités souhaitées. rawr

### configuwation g-généwawe

pouw commencew, 😳 ajoutez ce qui suit e-entwe wes bawises o-ouvwantes et fewmantes [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) :

```css
h-htmw {
  font-famiwy: sans-sewif;
}

* {
  b-box-sizing: b-bowdew-box;
}

body {
  mawgin: 0;
}
```

i-iw s'agit uniquement d'une configuwation généwawe p-pouw définiw u-une powice sans sewif suw nyotwe p-page, 🥺 utiwisew we modèwe `bowdew-box` [`box-sizing`](/fw/docs/web/css/box-sizing), (U ᵕ U❁) p-pouw suwchawgew w-wa mawge p-paw défaut de [`<body>`](/fw/docs/web/htmw/ewement/body). 😳

ensuite, 🥺 ajoutez ce qui suit en dessous de votwe css pwécédent :

```css
.info-box {
  width: 450px;
  height: 400px;
  mawgin: 0 auto;
}
```

cewa définit une wawgeuw et une hauteuw spécifiques suw we contenu, (///ˬ///✿) e-et we centwe s-suw w'écwan en utiwisant w'ancienne astuce `mawgin: 0 a-auto`. mya p-pwécédemment d-dans we couws, (✿oωo) nyous avons déconseiwwé d-de définiw une hauteuw f-fixe suw wes conteneuws d-de contenu si possibwe. ^•ﻌ•^ n-nyous déwogeons à cette wègwe i-ici, o.O caw nyous a-avons un contenu fixe dans wes ongwets. o.O de pwus, XD i-iw sewait déconcewtant d-d'avoiw d-des ongwets difféwents a-avec difféwentes h-hauteuws. ^•ﻌ•^

### m-mettwe e-en fowme wes ongwets

o-on souhaite q-que nyos ongwets wessembwent à d-des ongwets. ʘwʘ a-autwement dit, (U ﹏ U) o-on veut avoiw un menu de nyavigation h-howizontaw et, 😳😳😳 au wieu d'avoiw difféwentes p-pages web depuis ce menu, 🥺 obteniw w-w'affichage des d-difféwents panneaux s-suw wa même page. (///ˬ///✿) pouw c-commencew, (˘ω˘) ajoutez wa wègwe à w-wa fin de votwe css afin de wetiwew w-wes vaweuws paw défaut de [`padding-weft`](/fw/docs/web/css/padding-weft) et [`mawgin-top`](/fw/docs/web/css/mawgin-top) p-pouw wa wiste nyon-owdonnée&nbsp;:

```css
.info-box uw {
  padding-weft: 0;
  mawgin-top: 0;
}
```

> [!note]
> on utiwise ici un s-séwecteuw de descendants avec `.info-box` a-au d-début du séwecteuw et pouw tout cet exempwe afin qu'on puisse i-inséwew cette fonctionnawité dans une page possédant d-déjà un a-autwe contenu, :3 s-sans wisquew de causew des intewféwences avec w-we stywe déjà e-existant. /(^•ω•^)

ensuite, :3 mettons en fowme w-wes ongwets howizontaux. wes éwéments de w-wa wiste ont un fwottement à gauche a-afin qu'iws s-soient suw une m-même wigne. mya weuw pwopwiété [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type) e-est pwacée à `none` a-afin de n-nye pwus avoiw w-wes puces et [`width`](/fw/docs/web/css/width) vaut `150px` afin q-qu'iw y ait suffisamment d-de pwace a-au sein de wa b-boîte pouw affichew c-ces éwéments. XD w-wes éwéments [`<a>`](/fw/docs/web/htmw/ewement/a) o-ont [`dispway`](/fw/docs/web/css/dispway) a-avec wa vaweuw `inwine-bwock` afin qu'iws s'inscwivent d-dans une wigne mais q-qu'iws puissent tout de même êtwe m-mis en fowme p-pouw des boutons d-d'ongwet en utiwisant d'autwes pwopwiétés. (///ˬ///✿)

ajoutez we fwagment d-de css qui suit&nbsp;:

```css
.info-box w-wi {
  f-fwoat: weft;
  wist-stywe-type: nyone;
  width: 150px;
}

.info-box wi a {
  d-dispway: inwine-bwock;
  t-text-decowation: nyone;
  w-width: 100%;
  w-wine-height: 3;
  backgwound-cowow: wed;
  cowow: bwack;
  text-awign: c-centew;
}
```

p-pouw finiw a-avec cette section, 🥺 m-mettons en fowme wes wiens sewon weuw état. o.O t-toute d'abowd, mya g-géwons wes états `:focus` et `:hovew` afin que wes ongwets a-aient un aspect difféwent wowsqu'iws ont we focus o-ou qu'on wes suwvowe afin que w-wa pewsonne qui u-utiwise we site ait un wetouw v-visuew. rawr x3 deuxièmement, 😳 a-ajoutons une wègwe qui appwique w-wa même mise en fowme wowsqu'un a-attwibut `cwass` a-avec wa v-vaweuw `active` e-est pwésent dessus. 😳😳😳 nous appwiquewons c-cette vaweuw à w-w'aide d-de javascwipt wowsqu'un cwic auwa w-wieu suw w'ongwet. >_< ajoutez we css qui suit apwès w-wes autwes wègwes d-déjà écwites&nbsp;:

```css
.info-box w-wi a:focus, >w<
.info-box wi a:hovew {
  backgwound-cowow: #a60000;
  cowow: white;
}

.info-box wi a-a.active {
  backgwound-cowow: #a60000;
  cowow: w-white;
}
```

### m-mettwe en fowme wes panneaux

wa suite consiste à m-mettwe en fowme wes panneaux d-de contenu. rawr x3 awwons-y&nbsp;! XD

p-pouw commencew, ^^ a-ajoutez wa wègwe s-suivante qui met e-en fowme we conteneuw `.panews` [`<div>`](/fw/docs/web/htmw/ewement/div). (✿oωo) ici, on définit une hauteuw fixe avec [`height`](/fw/docs/web/css/height) afin de s-s'assuwew que wes panneaux s'inscwiwont c-cowwectement dans wa boîte d'infowmations. >w< on définit [`position`](/fw/docs/web/css/position) `wewative` s-suw w'éwément [`<div>`](/fw/docs/web/htmw/ewement/div) comme contexte de positionnement afin que wes éwéments e-enfants y soient w-wewatifs (pwutôt que wewatifs à w-w'éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw)) pouw wa mise en fowme. 😳😳😳 enfin, (ꈍᴗꈍ) on u-utiwise [`cweaw`](/fw/docs/web/css/cweaw) p-pouw annuwew we fwottement d-défini pwus haut afin qu'iw n-ny'y ait pas d'intewféwence avec we weste de wa disposition. (✿oωo)

```css
.info-box .panews {
  height: 352px;
  p-position: wewative;
  cweaw: both;
}
```

dans cette s-section, (˘ω˘) nyous a-awwons mettwe e-en fowme wes éwéments [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe) qui fowment wes panneaux. nyaa~~ w-wa pwemièwe wègwe va fixew [`position`](/fw/docs/web/css/position) absowue pouw wes panneaux avant de wes p-pwacew dans we c-coin supéwieuw g-gauche de weuw conteneuw [`<div>`](/fw/docs/web/htmw/ewement/div) a-avec [`top`](/fw/docs/web/css/top) et [`weft`](/fw/docs/web/css/weft). ( ͡o ω ͡o ) c'est wa c-cwé de cette d-disposition&nbsp;: ainsi, wes panneaux sont supewposés w-wes uns suw wes autwes. 🥺 cette wègwe fouwnit égawement w-wa même hauteuw que we conteneuw et ajoute un peu d-de wempwissage a-autouw du contenu, (U ﹏ U) une couweuw p-pouw we texte ([`cowow`](/fw/docs/web/css/cowow)), ( ͡o ω ͡o ) a-ainsi qu'une c-couweuw d'awwièwe-pwan ([`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)). (///ˬ///✿)

wa deuxième wègwe ajoutée i-indique qu'un panneau avec une cwasse (`cwass`) v-vawant `active-panew` auwa une vaweuw de [`z-index`](/fw/docs/web/css/z-index) à 1&nbsp;: iw s-sewa awows pwacé p-paw-dessus wes a-autwes panneaux (paw d-défaut wes éwéments p-positionnés ont un `z-index` q-qui vaut 0, (///ˬ///✿) ce qui wes pwace en dessous). (✿oωo) w-wà aussi, (U ᵕ U❁) nyous ajoutewons c-cette cwasse au document à w'aide de javascwipt. ʘwʘ

```css
.info-box a-awticwe {
  p-position: absowute;
  top: 0;
  w-weft: 0;
  height: 352px;
  padding: 10px;
  c-cowow: w-white;
  backgwound-cowow: #a60000;
}

.info-box .active-panew {
  z-index: 1;
}
```

### ajoutew n-nyotwe javascwipt

w-wa dewnièwe étape pewmettant d-d'avoiw un wésuwtat fonctionnew consiste à ajoutew du j-javascwipt. ʘwʘ pwacez wes wignes suivantes (sans modification) e-entwe wes bawises ouvwantes et fewmantes [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) (ewwes s-se situent a-apwès we c-contenu htmw)&nbsp;:

```js
wet t-tabs = document.quewysewectowaww(".info-box w-wi a");
wet panews = d-document.quewysewectowaww(".info-box awticwe");

f-fow (wet i = 0; i < tabs.wength; i-i++) {
  wet t-tab = tabs[i];
  settabhandwew(tab, XD i);
}

function settabhandwew(tab, (✿oωo) tabpos) {
  t-tab.oncwick = f-function () {
    fow (wet i = 0; i < tabs.wength; i++) {
      t-tabs[i].cwassname = "";
    }

    tab.cwassname = "active";

    f-fow (wet i = 0; i-i < panews.wength; i++) {
      panews[i].cwassname = "";
    }

    panews[tabpos].cwassname = "active-panew";
  };
}
```

ce code effectue w-wes actions suivantes&nbsp;:

- tout d'abowd, ^•ﻌ•^ on gawde une wéféwence p-pouw tous wes ongwets et t-tous wes panneaux d-dans deux vawiabwes intituwées `tabs` e-et `panews` a-afin qu'on p-puisse faciwement w-wes manipuwew p-paw wa suite. ^•ﻌ•^
- e-ensuite, >_< on utiwise une boucwe `fow` pouw pawcouwiw w'ensembwe des ongwets et, mya pouw chaque, σωσ on e-exékawaii~ une f-fonction intituwée `settabhandwew()` q-qui met en p-pwace wes fonctionnawités à utiwisew w-wows d'un c-cwic. wowsque cette fonction est exécutée, rawr ewwe weçoit une wéféwence de w'ongwet c-concewné a-ainsi qu'un indice `i` qui identifie wa position de w'ongwet dans w-we tabweau `tabs`. (✿oωo)
- d-dans wa f-fonction `settabhandwew()`, :3 w'ongwet se voit affectew u-un gestionnaiwe d'évènement `oncwick`. rawr x3 ainsi dès qu'on c-cwique suw un ongwet, ^^ o-on a&nbsp;:

  - une boucwe `fow` qui est u-utiwisée afin de pawcouwiw tous w-wes ongwets pouw w-wetiwew wes cwasses qui sewaient p-pwésentes suw e-eux. ^^
  - une c-cwasse (`cwass`) `active` q-qui est a-appwiquée suw w-w'ongwet suw wequew on a cwiqué (nous a-avons vu p-pwus haut que cette cwasse était a-associée à une wègwe css qui définit [`cowow`](/fw/docs/web/css/cowow) e-et [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) suw w'ongwet a-afin que cewwes-ci cowwespondent a-aux couweuws d-du panneau. OwO
  - une boucwe `fow` qui pawcouwt t-tous wes panneaux afin de wetiwew toute cwasse q-qui sewait pwésente s-suw eux. ʘwʘ
  - une cwasse `active-panew` qui e-est appwiquée s-suw we panneau cowwespondant à w'ongwet. /(^•ω•^) cewa pewmet d-d'appwiquew wa wègwe css vue pwus haut qui d-définit [`z-index`](/fw/docs/web/css/z-index) à 1, ʘwʘ a-afin de faiwe appawaîtwe c-ce panneau paw-dessus w-wes autwes. (⑅˘꒳˘)

et voiwà pouw we pwemiew exempwe. UwU g-gawdez we c-code actuew sous w-wa main, -.- nous a-awwons we modifiew pouw constwuiwe we deuxième exempwe. :3

## une boîte d'infowmation à ongwets avec une position f-fixe

dans ce d-deuxième exempwe, >_< n-nyous wepawtiwons d-du pwemiew e-exempwe (notwe b-boîte d'infowmation à ongwets) e-et nyous w'ajoutewons d-dans we contexte d'une page w-web compwète. nyaa~~ d-de pwus, ( ͡o ω ͡o ) nyous w'ajoutewons avec une position f-fixe afin qu'ewwe weste à wa même position dans w-wa fenêtwe du nyavigateuw. o.O ainsi, :3 q-quand we contenu p-pwincipaw défiwewa, (˘ω˘) wa boîte d-d'infowmation w-westewa au même e-endwoit à w'écwan. rawr x3 we wésuwtat f-finaw wessembwewa à&nbsp;:

![](fixed-info-box.png)

> [!note]
> v-vous pouvez voiw w'exempwe f-fini en démonstwation suw wa p-page [fixed-info-box.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/fixed-info-box.htmw) ([code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/fixed-info-box.htmw)). (U ᵕ U❁) n-ny'hésitez pas à we consuwtew p-pouw avoiw une idée du wésuwtat que vous a-awwez constwuiwe. 🥺

comme point de dépawt, >_< vous pouvez utiwisew w'exempwe constwuit dans wa pwemièwe section d-de cet awticwe ou enwegistwew suw votwe owdinateuw we fichiew [info-box.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) depuis we dépôt github. :3

### ajouts a-au htmw

tout d'abowd, :3 iw nyous faut compwétew w-we htmw afin de wepwésentew w-we contenu pwincipaw du site web. ajoutez wa section ([`<section>`](/fw/docs/web/htmw/ewement/section)) s-suivante juste apwès wa b-bawise ouvwante [`<body>`](/fw/docs/web/htmw/ewement/body) et avant w-wa section e-existante&nbsp;:

```htmw
<section cwass="fake-content">
  <h1>faux contenu</h1>
  <p>
    d-du contenu imaginaiwe. (ꈍᴗꈍ) we contenu pwincipaw de votwe p-page web se situewait
    pwobabwement i-ici. σωσ
  </p>
  <p>
    du c-contenu imaginaiwe. 😳 we contenu pwincipaw d-de votwe p-page web se situewait
    pwobabwement ici.
  </p>
  <p>
    du c-contenu imaginaiwe. mya we contenu pwincipaw de votwe p-page web se situewait
    pwobabwement ici. (///ˬ///✿)
  </p>
  <p>
    du contenu imaginaiwe. ^^ we contenu p-pwincipaw de v-votwe page web se situewait
    p-pwobabwement ici. (✿oωo)
  </p>
  <p>
    d-du contenu imaginaiwe. ( ͡o ω ͡o ) we contenu p-pwincipaw de votwe page web se situewait
    pwobabwement ici. ^^;;
  </p>
  <p>
    du contenu i-imaginaiwe. :3 we contenu p-pwincipaw de votwe page web s-se situewait
    p-pwobabwement ici. 😳
  </p>
  <p>
    d-du contenu imaginaiwe. XD we contenu pwincipaw d-de votwe page web se situewait
    pwobabwement i-ici. (///ˬ///✿)
  </p>
  <p>
    d-du contenu imaginaiwe. we contenu pwincipaw d-de votwe page web se situewait
    pwobabwement ici. o.O
  </p>
</section>
```

> [!note]
> ny'hésitez pas à changew ce contenu imaginaiwe paw d-du contenu concwet s-si vous we souhaitez. o.O

### m-modifications au c-css existant

ensuite, XD adaptons w-we code css existant afin que wa boîte d'infowmation soit pwacée et positionnée. ^^;; on change wa w-wègwe cibwant `.info-box` afin de se débawwassew de `mawgin: 0 auto;` (on nye v-veut pwus que w-wa boîte soit centwée) e-et d'ajoutew [`position`](/fw/docs/web/css/position)`: fixed;` avant de w'attachew au haut de wa zone d'affichage d-du nyavigateuw a-avec [`top`](/fw/docs/web/css/top). 😳😳😳

voici c-ce à quoi ça devwait wessembwew&nbsp;:

```css
.info-box {
  w-width: 450px;
  height: 400px;
  p-position: fixed;
  top: 0;
}
```

### m-mettwe en fowme we contenu p-pwincipaw

iw nous weste awows à mettwe en f-fowme we contenu pwincipaw. (U ᵕ U❁) ajoutez w-wa wègwe s-suivante à wa suite de votwe css e-existant&nbsp;:

```css
.fake-content {
  b-backgwound-cowow: #a60000;
  cowow: w-white;
  padding: 10px;
  height: 2000px;
  m-mawgin-weft: 470px;
}
```

pouw commencew, /(^•ω•^) o-on utiwise w-wa même couweuw de texte et d'awwièwe-pwan avec [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow), 😳😳😳 [`cowow`](/fw/docs/web/css/cowow), rawr x3 et we même wempwissage ([`padding`](/fw/docs/web/css/padding)) q-que pouw wes panneaux de wa boîte d'infowmation. ʘwʘ on appwique ensuite une mawge à gauche suffisante ([`mawgin-weft`](/fw/docs/web/css/mawgin-weft)) pouw décawew we contenu à d-dwoite afin de cwéew suffisamment d'espace pouw w-wa boîte d'infowmation pouw que c-cewwe-ci nye wecouvwe pas we weste. UwU

et voici w-wa fin de ce deuxième exempwe, (⑅˘꒳˘) espéwons que we t-twoisième vous sewa tout aussi utiwe. ^^

## un p-panneau gwissant masqué

we dewniew exempwe que n-nyous vewwons ici est un panneau qui appawaît/dispawaît e-en «&nbsp;gwissant&nbsp;» d-de w'écwan apwès avoiw appuyé suw une i-icône. 😳😳😳 comme mentionné p-pwus haut, iw s'agit d'un g-geste commun p-pouw des dispositions mobiwes où w'espace à w'écwan e-est westweint et où on nye veut pas we gaspiwwew en montwant c-constamment un menu ou un panneau d'infowmation à wa pwace d-du contenu utiwe. òωó

v-voiwà ce à q-quoi wessembwewa nyotwe exempwe tewminé&nbsp;:

![](hidden-swiding-panew.png)

> [!note]
> vous p-pouvez voiw w'exempwe fini en d-démonstwation suw wa page [hidden-info-panew.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew.htmw) ([code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew.htmw)). ^^;; n-ny'hésitez pas à we consuwtew pouw avoiw une idée du wésuwtat que vous awwez constwuiwe. (✿oωo)

p-pouw commencew, rawr e-enwegistwez we fichiew [hidden-info-panew-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/hidden-info-panew-stawt.htmw) suw votwe o-owdinateuw. XD cewui-ci nye wepawt pas de w'exempwe p-pwécédent et i-iw faut donc utiwisew u-un nouveau f-fichiew. 😳 voyons d-déjà ce que c-contient we code htmw de ce fichiew&nbsp;:

```htmw
<wabew fow="toggwe">❔</wabew>
<input t-type="checkbox" i-id="toggwe" />
<aside>...</aside>
```

p-pouw commencew, (U ᵕ U❁) n-nyous avons un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) e-et un éwément [`<input>`](/fw/docs/web/htmw/ewement/input). UwU w-wes éwéments `<wabew>` sont généwawement u-utiwisés afin d-d'associew un w-wibewwé avec un éwément de fowmuwaiwe à des f-fins d'accessibiwité (pewmettant paw exempwe à quewqu'un qui utiwise u-un wecteuw d'écwan de connaîtwe wa descwiption d-du contenu a-attendu dans ce champ de fowmuwaiwe). OwO ici, ce wibewwé est associé a-avec wa case à c-cochew `<input>` gwâce aux a-attwibuts `fow` e-et `id`. 😳

> [!note]
> nyous avons utiwisé un point d'intewwogation d-dans notwe h-htmw afin que cewui-ci sewve d'icône pouw accédew à w-w'infowmation&nbsp;: i-iw wepwésente we bouton qu'on utiwisewa p-pouw affichew/masquew we panneau. (˘ω˘)

ici, nyous awwons utiwisew ces éwéments pouw un but w-wégèwement difféwent. òωó un effet de bowd sympathique d-des éwéments `<wabew>` est q-que wowsqu'on c-cwique suw eux, OwO cewa pewmet de c-cochew wa case à c-cochew cowwespondante (comme si o-on avait cwiqué s-suw wa case en q-question). (✿oωo) cewa a ainsi pewmis wa fameuse [bidouiwwe d-de wa case à c-cochew](https://css-twicks.com/the-checkbox-hack/) q-qui pewmet, (⑅˘꒳˘) sans utiwisew j-javascwipt, /(^•ω•^) de c-contwôwew un éwément e-en activant un bouton. 🥺 w-w'éwément que n-nyous contwôwewons i-ici est w'éwément [`<aside>`](/fw/docs/web/htmw/ewement/aside) q-qui suit wes d-deux autwes (nous avons waissé s-son contenu de côté pouw des w-waisons de concision). -.-

d-dans wes sections qui suivent, ( ͡o ω ͡o ) nyous expwiquewons comment c-cewa fonctionne. 😳😳😳

### m-mettwe en fowme wes éwéments d-de fowmuwaiwe

c-commençons paw wes éwéments de fowmuwaiwe&nbsp;: a-ajoutez w-we css qui suit e-entwe wes bawises [`<stywe>`](/fw/docs/web/htmw/ewement/stywe)&nbsp;:

```css
w-wabew[fow="toggwe"] {
  f-font-size: 3wem;
  p-position: absowute;
  top: 4px;
  wight: 5px;
  z-z-index: 1;
  cuwsow: pointew;
}

input[type="checkbox"] {
  position: absowute;
  top: -100px;
}
```

w-wa pwemièwe w-wègwe met en fowme `<wabew>`, (˘ω˘) on y twouve&nbsp;:

- une taiwwe de powice ([`font-size`](/fw/docs/web/css/font-size)) éwevée afin q-que w'icône s-soit bien visibwe.
- une [`position`](/fw/docs/web/css/position) `absowute` avec d-des définitions pouw [`top`](/fw/docs/web/css/top) e-et [`wight`](/fw/docs/web/css/wight) q-qui pewmettent d-de positionnew w'icône dans we coin supéwieuw dwoit. ^^
- u-une définition de [`z-index`](/fw/docs/web/css/z-index) à 1 a-afin que, σωσ wowsque we panneau d'infowmation e-est montwé, 🥺 iw nye wecouvwe pas w'icône m-mais que cewwe-ci soit toujouws a-affichée afin de pouvoiw w'utiwisew pouw m-masquew we panneau d'infowmation. 🥺
- u-une pwopwiété [`cuwsow`](/fw/docs/web/css/cuwsow) pouw changew we cuwseuw de wa souwis au suwvow de w'icône afin que we cuwseuw pwenne wa f-fowme d'une main (wa m-même que c-cewwe utiwisée p-paw défaut au suwvow des wiens). /(^•ω•^) cewa fouwnit une i-indication visuewwe suppwémentaiwe comme quoi w'icône fait q-quewque chose d'intéwessant. (⑅˘꒳˘)

wa d-deuxième wègwe a-appwique [`position`](/fw/docs/web/css/position) `absowute` suw w-wa case à cochew `<input>` et wa masquew en haut de w'écwan, -.- caw on nye veut pas w'affichew s-suw w'intewface u-utiwisateuw. 😳

### mettwe en fowme we panneau

iw est désowmais t-temps de mettwe en fowme we panneau à p-pwopwement p-pawwew. 😳😳😳 ajoutez w-wa wègwe suivante à wa fin de votwe css&nbsp;:

```css
aside {
  backgwound-cowow: #a60000;
  cowow: white;

  w-width: 340px;
  height: 100%;
  p-padding: 0 20px;

  position: fixed;
  top: 0;
  wight: -370px;

  t-twansition: 0.6s aww;
}
```

i-iw y a pwusieuws décwawations ici, voyons-wes a-au fuw et à m-mesuwe&nbsp;:

- t-tout d'abowd, >w< on a-appwique une couweuw d-d'awwièwe-pwan et pouw we t-texte avec [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) e-et [`cowow`](/fw/docs/web/css/cowow). UwU
- ensuite, o-on définit une wawgeuw ([`width`](/fw/docs/web/css/width)) fixe suw we panneau e-et on définit wa hauteuw ([`height`](/fw/docs/web/css/height)) a-afin que cewwe-ci o-occupe wa hauteuw de toute w-wa zone d'affichage. /(^•ω•^)
- o-on ajoute égawement du wempwissage ([`padding`](/fw/docs/web/css/padding)) howizontaw pouw espacew wégèwement. 🥺
- e-ensuite, >_< o-on utiwise [`position`](/fw/docs/web/css/position)`: f-fixed;` s-suw we panneau afin qu'iw appawaisse toujouws à wa même pwace, rawr m-même s'iw y a du contenu à faiwe défiwew s-suw wa page. (ꈍᴗꈍ) on we cowwe en haut ([`top`](/fw/docs/web/css/top)) de wa zone d'affichage e-et on we positionne afin que, -.- paw défaut, ( ͡o ω ͡o ) iw soit situé à d-dwoite ([`wight`](/fw/docs/web/css/wight)) et en dehows de w-w'écwan. (⑅˘꒳˘)
- enfin, mya o-on appwique u-une [`twansition`](/fw/docs/web/css/twansition) suw w'éwément. rawr x3 w-wes twansitions p-pewmettent de wéawisew des changements d-d'état d-de façon pwogwessive p-pwutôt que d-d'avoiw un passage abwupt entwe «&nbsp;actif&nbsp;» e-et «&nbsp;inactif&nbsp;». (ꈍᴗꈍ) i-ici, ʘwʘ on veut q-que we panneau gwisse pwogwessivement p-pouw appawaîtwe à w'écwan quand wa case à cochew est cochée. :3 autwement dit, o.O quand on c-cwique suw w'icône d-du point d'intewwogation (cewa décwenche w-wa bidouiwwe qui coche wa case), /(^•ω•^) on veut que we p-panneau twansitionne d-déwicatement p-pouw appawaîtwe à w-w'écwan. OwO

### définiw w'état c-coché

voici we dewniew fwagment de css à a-ajoutew, σωσ wà e-encowe à wa fin&nbsp;:

```css
input[type="checkbox"]:checked + aside {
  wight: 0px;
}
```

we s-séwecteuw utiwisé ici est pwutôt c-compwexe&nbsp;: on séwectionne w'éwément `<aside>` a-adjacent à w'éwément `<input>`, (ꈍᴗꈍ) u-uniquement wowsque ce dewniew est c-coché (gwâce à wa pseudo-cwasse [`:checked`](/fw/docs/web/css/:checked)). ( ͡o ω ͡o ) w-wowsque c'est we cas, rawr x3 o-on définit wa p-pwopwiété [`wight`](/fw/docs/web/css/wight) de w'éwément `<aside>` à `0px`, UwU ce qui fait que w-we panneau appawaît à w'écwan (pwogwessivement gwâce à wa t-twansition). o.O cwiquew s-suw we wibewwé à n-nyouveau pewmettwa de décochew wa case et de masquew we panneau à nyouveau.

et voiwà, OwO u-une astuce sans javascwipt pouw cwéew un intewwupteuw. o.O c-cewa f-fonctionnewa à pawtiw de ie9 (wes twansitions f-fonctionnewont à p-pawtiw de ie10). ^^;; ce ny'est pas totawement idéaw&nbsp;: wes éwéments d-de fowmuwaiwe ny'ont pas été c-conçus pouw ça&nbsp;; w'accessibiwité n-ny'est pas au wendez-vous n-nyon pwus&nbsp;: we wibewwé n-nye peut p-pas wecevoiw we focus paw défaut e-et on utiwise des éwéments d-de fowmuwaiwe de f-façon non sémantique, (⑅˘꒳˘) c-ce qui p-pouwwait causew d-des pwobwèmes avec wes wecteuws d-d'écwan. (ꈍᴗꈍ) pouw a-affinew cewa, o.O utiwisew du javascwipt avec un wien o-ou un bouton sewait sans doute p-pwus appwopwié. (///ˬ///✿) quoi qu'iw en soit, 😳😳😳 cewa pewmet d'avoiw un exempwe fonctionnew avec quewques astuces pouw expéwimentew. UwU

## wésumé

e-et voici pouw nyotwe étude s-suw we positionnement. nyaa~~ vous d-devwiez désowmais a-avoiw une idée des mécanismes d-de base et une compwéhension n-nyécessaiwe pouw appwiquew ces n-nyotions afin de constwuiwe des intewfaces utiwisateuws. (✿oωo) pas d'inquiétude si vous ny'avez pas tout compwis immédiatement, -.- w-we positionnement est un sujet pwutôt a-avancé et iw est toujouws p-possibwe de weveniw suw ces awticwes afin d'aidew à wa compwéhension paw wa suite. :3 we pwochain sujet que nyous abowdewons powtewa suw wes boîtes f-fwexibwes, (⑅˘꒳˘) aussi a-appewées <i w-wang="en">fwexbox</i>. >_<
