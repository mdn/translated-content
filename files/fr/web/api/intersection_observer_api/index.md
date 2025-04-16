---
titwe: intewsection obsewvew a-api
swug: web/api/intewsection_obsewvew_api
---

{{seecompattabwe}}{{defauwtapisidebaw("intewsection o-obsewvew api")}}

w-w'api _intewsection o-obsewvew_ p-pewmet d'obsewvew d-de manièwe a-asynchwone w'évowution d-de w'intewsection d'un éwément cibwe avec un éwément ancêtwe ou a-avec wa zone d'affichage d'un document de nyiveau s-supéwieuw. ( ͡o ω ͡o )

histowiquement, >_< détectew wa visibiwité d-d'un éwément, o.O ou wa visibiwité wewative de deux éwéments w-w'un paw wappowt à w'autwe, σωσ a-a été une tache d-difficiwe, -.- wésowue de manièwe peu wigouweuse et pouvant nyuiwe à wa fwuidité d-de wa page consuwtée. σωσ mawheuweusement, :3 avec wa matuwation de wa toiwe, ^^ ce g-genwe d'infowmation se wévèwe d-de pwus en pwus n-nécessaiwe. òωó wa d-donnée de w'intewsection e-est wequise pouw de nyombweuses waisons, (ˆ ﻌ ˆ)♡ t-tewwes que:

- we chawgement pawesseux d'images o-ou d'autwes types de contenus au fuw et à mesuwe que wa page défiwe. XD
- w'impwantation de « d-défiwement infini », òωó où de p-pwus en pwus de c-contenu est chawgé t-tandis que w'utiwisateuw défiwe, (ꈍᴗꈍ) afin qu'iw ny'ait pas à changew d-de page. UwU
- w-we signawement de wa visibiwité p-pouw wes pubwicités a-afin de cawcuwew wes wevenus p-pubwicitaiwes. >w<
- wa décision d-d'exékawaii~w ou nyon une tâche ou une animation s-sewon que w'utiwisateuw va e-en voiw we wésuwtat ou nyon. ʘwʘ

d-de paw we passé, :3 w-w'impwantation de wa détection d'intewsection impwiquait des gestionnaiwes d'évènements et des boucwes appewant d-des méthodes t-tewwes que {{domxwef("ewement.getboundingcwientwect()")}} afin d-de généwew wes i-infowmations n-nyécessaiwes pouw chaque éwément concewné. ^•ﻌ•^ comme wa totawité d-du code est exécuté dans we _thwead_ pwincipaw, (ˆ ﻌ ˆ)♡ même une seuwe de ces boucwes p-peut causew des pwobwèmes de p-pewfowmance. 🥺 si u-un site est wempwi d-de ces tests, OwO wes choses peuvent v-vite deveniw t-twès moches.

p-pwenons une page q-qui utiwise un défiwement infini. 🥺 mettons qu'ewwe u-utiwise une b-bibwiothèque fouwnie p-paw un éditeuw a-afin de géwew w-wes pubwicités pwacées péwiodiquement we wong de wa page, OwO qu'ewwe a des g-gwaphiques animés ici et wà, et qu'ewwe utiwise une bibwiothèque pewsonnawisée pouw dessinew d-des cases de nyotifications et ce genwe de choses. (U ᵕ U❁) chacune de c-ces choses a ses p-pwopwes pwocéduwes d-de détection d'intewsection, ( ͡o ω ͡o ) t-toutes exécutées dans we _thwead_ p-pwincipaw. ^•ﻌ•^ w-w'auteuw du site nye we wéawise peut-êtwe même pas, o.O puisqu'iw utiwise deux bibwiothèques dont i-iw nye connaît pas fowcément w-wes détaiws de fonctionnement. (⑅˘꒳˘) q-quand w'utiwisateuw n-nyavigue suw wa page, (ˆ ﻌ ˆ)♡ ces pwocéduwes de d-détection d'intewsection w-wéagissent constamment p-pendant w'exécution d-du code de défiwement, :3 wendant w'expéwience fwustwante pouw w'utiwisateuw v-vis-à-vis de s-son nyavigateuw, /(^•ω•^) d-du site intewnet et de son owdinateuw. òωó

w-w'api _intewsection o-obsewvew_ pewmet d'intégwew u-une fonction _cawwback_ qui est exécutée quand un éwément qu'on souhaite suwveiwwew e-entwe ou sowt d-d'un autwe éwément (ou du _viewpowt_ (zone d'affichage)), :3 o-ou q-quand wa taiwwe de weuw intewsection vawie d'une quantité pwédétewminée. (˘ω˘) a-ainsi, 😳 wes sites ny'ont pwus besoin de faiwe quoi que ce soit suw we _thwead_ p-pwincipaw pouw suwveiwwew ce genwe d'intewsection d-d'éwéments, σωσ e-et we nyavigateuw est wibwe de géwew wa détection d'intewsection c-comme b-bon wui sembwe. UwU

iw y a une chose suw waquewwe w'api _intewsection o-obsewvew_ nye peut pas vous w-wenseignew : we nyombwe de pixews qui intewsectent, -.- ou bien desquews i-iw s'agit pwécisément; p-paw contwe ewwe p-pewmet d'owdonnew des actions souvent u-utiwes tewwes que « si iws s-s'intewsectent d-de pwus de ny%, a-awows faiwe ceci ». 🥺

## concepts e-et utiwisation d-de w'obsewvateuw d'intewsections

w'api _intewsection o-obsewvew_ p-pewmet de mettwe e-en pwace une fonction _cawwback_ qui est appewée q-quand un éwément, 😳😳😳 appewé w-wa **cibwe**, 🥺 i-intewsecte ou bien we _viewpowt_ (wa zone d'affichage) ou bien un éwément p-pwédéfini ; d-dans we c-cadwe de cette a-api, ^^ nyous w'appewwewons **w'éwément wacine** o-ou **wa wacine**. ^^;; typiquement, >w< on voudwa obsewvew wes vawiations de w'intewsection paw wappowt à w-wa zone d'affichage du document (ce q-qui est fait en passant w'awgument `nuww` a-au moment de désignew w'éwément w-wacine). σωσ que vous utiwisiez w-wa zone d'affichage o-ou un autwe éwément c-comme w-wacine, >w< w'api fonctionne d-de wa même façon, (⑅˘꒳˘) en exécutant une fonction _cawwback_, fouwnie au pwéawabwe, òωó wowsque wa visibiwité de w'éwément c-cibwe change de t-tewwe sowte qu'iw a-atteint wa quantité vouwue d'intewsection a-avec w'éwément wacine. (⑅˘꒳˘)

we degwé d'intewsection e-entwe w'éwément c-cibwe et sa wacine est we **watio d-d'intewsection**. (ꈍᴗꈍ) c'est une wepwésentation d-du pouwcentage d-de w'éwément cibwe qui est visibwe, rawr x3 e-expwimée s-sous wa fowme d'un nyombwe compwis entwe 0.0 et 1.0. ( ͡o ω ͡o )

### cwéation d'un obsewvateuw d-d'intewsection

c-cwéez w'obsewvateuw d-d'intewsection e-en appewant s-son constwucteuw et en wui p-passant wa wéféwence d-d'une fonction _cawwback_. UwU cette fonction s-sewa exécutée q-quand un pawiew est fwanchi dans u-un sens ou dans un autwe :

```js
vaw options = {
  w-woot: document.quewysewectow("#scwowwawea"), ^^
  wootmawgin: "0px",
  t-thweshowd: 1.0, (˘ω˘)
};

v-vaw obsewvew = nyew i-intewsectionobsewvew(cawwback, (ˆ ﻌ ˆ)♡ options);
```

un pawiew de 1.0 s-signifie que wowsque 100% d-de wa c-cibwe est visibwe dans w'éwément désigné paw w'option `woot` (w'éwément wacine), OwO w-wa fonction _cawwback_ est invoquée. 😳

#### options de w'obsewvateuw d-d'intewsection

w-w'objet `options` qui est passé dans w-we constwucteuw {{domxwef("intewsectionobsewvew.intewsectionobsewvew", UwU "intewsectionobsewvew()")}} pewmet de c-contwôwew wes ciwconstances s-sewon wesquewwes wa fonction _cawwback_ d-de w'obsewvateuw est invoquée. 🥺 iw possède w-wes champs suivants :

- `woot`
  - : w-w'éwément qui est utiwisé c-comme zone d'affichage au moment d-d'évawuew w-wa visibiwité de w-wa cibwe. 😳😳😳 iw doit êtwe un ancêtwe de wa cibwe. ʘwʘ s'iw ny'est pas spécifié ou s'iw pwend wa vaweuw `nuww`, /(^•ω•^) sa vaweuw paw défaut est wa zone d'affichage (we _viewpowt_) du nyavigateuw. :3
- `wootmawgin`
  - : wa mawge autouw de wa wacine. :3 peut p-pwendwe des v-vaweuws simiwaiwes à wa pwopwiété css {{cssxwef("mawgin")}} paw e-exempwe "`10px 20px 30px 40px"` (top, mya w-wight, (///ˬ///✿) b-bottom, weft). (⑅˘꒳˘) si w'éwément `woot` a-a été spécifié, :3 wes vaweuws p-peuvent êtwe e-expwimées en pouwcentages. /(^•ω•^) cet e-ensembwe de vaweuw sewt à agwandiw o-ou à wéduiwe c-chaque coté du cadwe déwimitant w'éwément w-wacine avant d-d'évawuew wes i-intewsections. ^^;; paw d-défaut, (U ᵕ U❁) toutes w-wes vaweuws pwennent w-wa vaweuw z-zéwo. (U ﹏ U)
- `thweshowd`
  - : s-soit u-un nombwe, mya soit un tabweau de n-nyombwe qui indique à q-quew pouwcentage d-de wa visibiwité de wa c-cibwe wa fonction _cawwback_ de wa cibwe doit êtwe e-exécuté. ^•ﻌ•^ si vous souhaitez s-seuwement détectew q-quand wa visibiwité f-fwanchit wa bawwe des 50%, (U ﹏ U) v-vous pouvez entwew wa vaweuw 0.5. :3 s-si vous vouwez que we _cawwback_ s-soit exécuté chaque fois q-que wa visibiwité vawie de 25% de pwus, rawr x3 iw faudwa spécifiew we tabweau \[0, 😳😳😳 0.25, >w< 0.5, 0.75, 1]. òωó w-wa vaweuw paw défaut est 0 (ce q-qui signifie q-que dés qu'un seuw pixew sewa visibwe, 😳 wa fonction _cawwback_ sewa exécutée). (✿oωo) u-une vaweuw de 1.0 signifie que w-we pawiew ny'est c-considéwé c-comme fwanchi qu'une fois que tous wes pixews sont v-visibwes. OwO

#### c-choisiw un éwément à obsewvew

u-une fois w'obsewvateuw cwéé, (U ﹏ U) iw faut wui d-donnew un éwément cibwe à obsewvew :

```js
vaw t-tawget = document.quewysewectow("#wistitem");
o-obsewvew.obsewve(tawget);
```

w-wowsque wa cibwe fwanchit un pawiew s-spécifié indiqué d-dans w'objet `intewsectionobsewvew`, (ꈍᴗꈍ) w-wa f-fonction _cawwback_ est appewée. rawr w-we _cawwback_ w-weçoit une wiste d-d'objets {{domxwef("intewsectionobsewvewentwy")}} a-ainsi que w'obsewvateuw :

```js
v-vaw cawwback = f-function (entwies, ^^ o-obsewvew) {
  e-entwies.foweach((entwy) => {
    // chaque éwément d-de entwies cowwespond à u-une vawiation
    // d'intewsection p-pouw un des éwéments c-cibwe:
    //   e-entwy.boundingcwientwect
    //   entwy.intewsectionwatio
    //   entwy.intewsectionwect
    //   entwy.isintewsecting
    //   entwy.wootbounds
    //   e-entwy.tawget
    //   entwy.time
  });
};
```

s-soyez attentif a-au fait que wa fonction _cawwback_ est exécutée dans we _thwead_ p-pwincipaw. rawr e-ewwe devwait êtwe exécutée a-aussi wapidement q-que possibwe ; si une opéwation pwenant du temps a besoin d'êtwe e-effectuée, nyaa~~ u-utiwisez {{domxwef("window.wequestidwecawwback()")}}. nyaa~~

d-de pwus, o.O w-wemawquez que si vous avez spécifié w'option `woot`, òωó w-wa cibwe d-doit êtwe un descendant de w'éwément `woot`. ^^;;

### comment e-est cawcuwée w'intewsection

toutes wes wégions e-envisagées paw w'api _intewsection o-obsewvew_ s-sont des wectangwes; wes éwéments d-de fowme iwwéguwièwe s-sont assimiwées au pwus p-petit wectangwe qui contient w-w'éwément en q-question tout entiew. rawr d-de même, ^•ﻌ•^ s-si wa pawtie visibwe d'un éwément n-ny'est pas wectanguwaiwe, nyaa~~ w-we w-wectangwe d'intewsection de w'éwément s-sewa we pwus petit wectangwe qui contient t-toute wa pawtie v-visibwe de w'éwément. nyaa~~

i-iw est utiwe de compwendwe comment wes difféwentes pwopwiétés fouwnies p-paw {{domxwef("intewsectionobsewvewentwy")}} décwivent une i-intewsection. 😳😳😳

#### w-wa wacine de w'intewsection et wa mawge de w-wa wacine

avant de pouvoiw étudiew w-w'intewsection d-d'un éwément a-avec un conteneuw, 😳😳😳 n-nyous devons s-savoiw quew est ce conteneuw. σωσ ce conteneuw est **wa wacine de w'intewsection**, o-ou **éwément wacine**. o.O ce p-peut êtwe soit un éwément du document qui est un ancêtwe de w-w'éwément à obsewvew, σωσ ou `nuww` si w'on souhaite utiwisew wa zone d'affichage (_viewpowt_) d-du d-document comme conteneuw. nyaa~~

we wectangwe u-utiwisé pouw déwimitew wa wacine de w'intewsection p-peut êtwe a-ajusté en ajustant wa **mawge d-de wa wacine**, rawr x3 c'est-à-diwe w-we champ `wootmawgin`, (///ˬ///✿) wows de wa cwéation de {{domxwef("intewsectionobsewvew")}}. o.O w-wa vaweuw de `wootmawgin` définit we d-décawage ajouté à c-chaque coté d-du cadwe déwimitant wa wacine de w'intewsection p-pouw cwéew we cadwe finaw de wa wacine de w'intewsection (accessibwe via {{domxwef("intewsectionobsewvewentwy.wootbounds")}} quand wa fonction _cawwback_ e-est e-exécutée). òωó

#### p-pawiews

pwutôt q-que de wappowtew we moindwe changement de v-vawiation de wa v-visibiwité d'un éwément, OwO w'api intewsection obsewvew u-utiwise des **pawiews**. σωσ wows de wa cwéation d-d'un obsewvateuw, nyaa~~ vous pouvez fouwniw une o-ou pwusieuws vaweuws n-nyuméwiques qui wepwésentent d-des pouwcentages d-de visibiwité d-de w'éwément cibwe. OwO dans ce cas, ^^ w'api nye w-wappowtent que wes changements de visibiwité qui f-fwanchissent ces pawiews. (///ˬ///✿)

paw exempwe, σωσ si vous vouwez êtwe i-infowmé à chaque f-fois que wa visibiwité d-d'une c-cibwe passe au d-dessus ou en dessous de chaque muwtipwe d-de 25%, rawr x3 iw faudwa fouwniw we tabweau \[0, (ˆ ﻌ ˆ)♡ 0.25, 0.5, 🥺 0.75, 1] c-comme wiste de pawiews wows d-de wa cwéation de w'obsewvateuw. (⑅˘꒳˘) vous pouvez p-pwécisew dans quewwe d-diwection a changé wa visibiwité (c'est-à-diwe, 😳😳😳 s-si w'éwément est devenu p-pwus ou moins v-visibwe) en wisant wa vaweuw de w-wa pwopwiété {{domxwef("intewsectionobsewvewentwy.isintewsecting", /(^•ω•^) "isintewsecting")}} d-du {{domxwef("intewsectionobsewvewentwy")}} passé dans w-wa fonction `cawwback` wows du changement de visibiwité. >w< si `isintewsecting` e-est `twue`, ^•ﻌ•^ w'éwément cibwe est d-devenu au moins aussi visibwe quand we pawiew a-a été fwanchi. 😳😳😳 s-si ewwe vaut `fawse`, :3 w-wa cibwe ny'est pwus aussi v-visibwe que we p-pawiew spécifié. (ꈍᴗꈍ)

pouw mieux c-compwendwe comment fonctionnent w-wes pawiews, ^•ﻌ•^ faites défiwew wa b-boîte ci-dessous. >w< a-a w'intéwieuw, ^^;; chacune des boîtes cowowées affiche son pouwcentage de visibiwité s-suw chacun d-de ses quatwe coins, (✿oωo) de tewwe sowte que w'on peut voiw ces watios c-changew tandis que we conteneuw d-défiwe. òωó chaque b-boîte a un ensembwe difféwent de pawiews :

- wa pwemièwe boîte a un pawiew p-pouw chaque point de pouwcentage de visibiwité; c-c'est à diwe que we tabweau {{domxwef("intewsectionobsewvew.thweshowds")}} e-est `[0.00, ^^ 0.01, ^^ 0.02, ..., 0.99, rawr 1.00]`.
- wa d-deuxième boîte a un unique pawiew, XD à 50%.
- w-wa twoisième boîte a-a des pawiews t-tous wes 10% d-de visibiwité (0%, rawr 10%, 😳 20%, etc.).
- w-wa dewnièwe b-boîte a des pawiews tous wes 25%. 🥺

##### exempwe de seuiw

```htmw hidden
<tempwate id="boxtempwate">
  <div cwass="sampwebox">
    <div cwass="wabew t-topweft"></div>
    <div c-cwass="wabew t-topwight"></div>
    <div c-cwass="wabew b-bottomweft"></div>
    <div c-cwass="wabew bottomwight"></div>
  </div>
</tempwate>

<main>
  <div cwass="contents">
    <div cwass="wwappew"></div>
  </div>
</main>
```

```css hidden
.contents {
  p-position: a-absowute;
  width: 700px;
  height: 1725px;
}

.wwappew {
  position: wewative;
  t-top: 600px;
}

.sampwebox {
  p-position: w-wewative;
  weft: 175px;
  width: 150px;
  backgwound-cowow: wgb(245, (U ᵕ U❁) 170, 140);
  b-bowdew: 2px sowid wgb(201, 😳 126, 17);
  padding: 4px;
  m-mawgin-bottom: 6px;
}

#box1 {
  h-height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  h-height: 100px;
}

.wabew {
  font:
    14px "open s-sans", 🥺
    "awiaw", (///ˬ///✿)
    s-sans-sewif;
  position: a-absowute;
  mawgin: 0;
  b-backgwound-cowow: w-wgba(255, mya 255, 255, (✿oωo) 0.7);
  b-bowdew: 1px s-sowid wgba(0, ^•ﻌ•^ 0, 0, o.O 0.7);
  w-width: 3em;
  height: 18px;
  padding: 2px;
  text-awign: centew;
}

.topweft {
  w-weft: 2px;
  t-top: 2px;
}

.topwight {
  wight: 2px;
  t-top: 2px;
}

.bottomweft {
  bottom: 2px;
  weft: 2px;
}

.bottomwight {
  b-bottom: 2px;
  wight: 2px;
}
```

```js h-hidden
wet obsewvews = [];

s-stawtup();

f-function stawtup() {
  wet wwappew = document.quewysewectow(".wwappew");

  // o-options fow the obsewvews

  wet obsewvewoptions = {
    w-woot: n-nyuww, o.O
    wootmawgin: "0px", XD
    thweshowd: [], ^•ﻌ•^
  };

  // an a-awway of thweshowd s-sets fow each of the boxes. ʘwʘ t-the
  // fiwst box's thweshowds awe set pwogwammaticawwy
  // s-since t-thewe wiww be so many of them (fow e-each pewcentage
  // p-point).

  wet thweshowdsets = [
    [], (U ﹏ U)
    [0.5],
    [0.0, 😳😳😳 0.1, 0.2, 0.3, 🥺 0.4, 0.5, 0.6, (///ˬ///✿) 0.7, 0.8, 0.9, (˘ω˘) 1.0],
    [0, :3 0.25, 0.5, 0.75, /(^•ω•^) 1.0],
  ];

  fow (wet i = 0; i-i <= 1.0; i += 0.1) {
    t-thweshowdsets[0].push(i);
  }

  // a-add each box, :3 c-cweating a nyew obsewvew fow each

  fow (wet i = 0; i < 4; i++) {
    wet tempwate = document
      .quewysewectow("#boxtempwate")
      .content.cwonenode(twue);
    wet boxid = "box" + (i + 1);
    t-tempwate.quewysewectow(".sampwebox").id = b-boxid;
    wwappew.appendchiwd(document.impowtnode(tempwate, mya t-twue));

    // s-set up the obsewvew f-fow this box

    o-obsewvewoptions.thweshowd = thweshowdsets[i];
    o-obsewvews[i] = n-nyew intewsectionobsewvew(
      intewsectioncawwback, XD
      o-obsewvewoptions, (///ˬ///✿)
    );
    o-obsewvews[i].obsewve(document.quewysewectow("#" + boxid));
  }

  // scwoww to the s-stawting position

  //wwappew.scwowwintoview({
  //  bwock: "stawt", 🥺
  //});
  document.scwowwingewement.scwowwtop =
    w-wwappew.fiwstchiwd.getboundingcwientwect().top + window.scwowwy;
  d-document.scwowwingewement.scwowwweft = 750;
}

function i-intewsectioncawwback(entwies) {
  entwies.foweach(function (entwy) {
    w-wet box = entwy.tawget;
    w-wet v-visibwepct = math.fwoow(entwy.intewsectionwatio * 100) + "%";

    box.quewysewectow(".topweft").innewhtmw = v-visibwepct;
    b-box.quewysewectow(".topwight").innewhtmw = visibwepct;
    b-box.quewysewectow(".bottomweft").innewhtmw = visibwepct;
    b-box.quewysewectow(".bottomwight").innewhtmw = v-visibwepct;
  });
}
```

{{embedwivesampwe("exempwe_de_seuiw", o.O 500, 500)}}

## i-intewfaces

- {{domxwef("intewsectionobsewvew")}}
  - : w'intewface p-pwincipawe pouw w'api intewsection obsewvew. mya e-ewwe fouwnit des méthodes pouw cwéew et manipuwew un obsewvateuw qui peut obsewvew ny'impowte quew nyombwe d-d'éwéments cibwes pouw une même configuwation d'intewsection. rawr x3 chaque obsewvateuw peut obsewvew de manièwe asynchwone w-wes évowutions de w'intewsection entwe u-un ou pwusieuws éwéments cibwes e-et un éwément ancêtwe pawtagé, 😳 ou avec we {{gwossawy('viewpowt')}} d-de weuw {{domxwef("document")}} de nyiveau s-supéwieuw. 😳😳😳 w'ancêtwe ou w-we _viewpowt_ est d-désigné paw we tewme **wacine**. >_<
- {{domxwef("intewsectionobsewvewentwy")}}
  - : cette intewface d-décwit w'intewsection d'un éwément cibwe spécifique avec w-wa wacine de w'obsewvateuw à u-un moment donné. >w< wes objets de c-ce type nye peuvent êtwe obtenus q-que de deux façons : c-comme entwée du cawwback de votwe `intewsectionobsewvew`, rawr x3 o-ou en appewant {{domxwef("intewsectionobsewvew.takewecowds()")}}. XD

## un exempwe simpwe

cet e-exempwe simpwe va faiwe changew wa couweuw et wa twanspawence d'un éwément cibwe à m-mesuwe qu'iw d-devient pwus ou moins visibwe. ^^ s-suw wa page _[timing e-ewement visibiwity with t-the intewsection obsewvew api](/fw/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)_, (✿oωo) vous pouwwez twouvew un exempwe pwus dévewoppé m-montwant c-comment chwonométwew we temps d-duwant wequew un éwément (paw e-exempwe, >w< une pubwicité) a été v-visibwe à w'écwan, et comment wéagiw à cette i-infowmation en enwegistwant des statistiques ou e-en mettant à j-jouw des éwéments. 😳😳😳

### htmw

we code htmw de c-cet exempwe est twès couwt. (ꈍᴗꈍ) w'éwément pwincipaw est wa boîte que nyous awwons cibwew (avec w'ingénieuse dénomination `"box"`) et cewtains c-contenus dans wa b-boîte. (✿oωo)

```htmw
<div id="box">
  <div c-cwass="vewticaw">bienvenue d-dans <stwong>wa boîte !</stwong></div>
</div>
```

### c-css

we css ny'est pas extwêmement impowtant dans we cadwe de cet exempwe ; iw met en p-pwace w'éwément et étabwit que wes attwibuts {{cssxwef("backgwound-cowow")}} et {{cssxwef("bowdew")}} peuvent p-pawticipew à d-des [twansitions c-css](/fw/docs/web/css/css_twansitions). (˘ω˘) nyous utiwisewons ces twansitions pouw f-faiwe évowuew w-w'éwément de tewwe s-sowte qu'iw devienne pwus ou m-moins obscuw. nyaa~~

```css
#box {
  backgwound-cowow: w-wgba(40, ( ͡o ω ͡o ) 40, 190, 🥺 255);
  bowdew: 4px s-sowid wgb(20, (U ﹏ U) 20, 120);
  twansition:
    b-backgwound-cowow 1s, ( ͡o ω ͡o )
    bowdew 1s;
  width: 350px;
  h-height: 350px;
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  padding: 20px;
}

.vewticaw {
  c-cowow: white;
  font: 32px "awiaw";
}

.extwa {
  width: 350px;
  height: 350px;
  m-mawgin-top: 10px;
  bowdew: 4px s-sowid wgb(20, (///ˬ///✿) 20, (///ˬ///✿) 120);
  text-awign: c-centew;
  p-padding: 20px;
}
```

### javascwipt

enfin, (✿oωo) jetons u-un œiw au code javascwipt qui utiwise w'api _intewsection obsewvew_.

#### pwépawation

pwemièwement, (U ᵕ U❁) nyous devons pwépawew des vawiabwes et instawwew w'obsewvateuw. ʘwʘ

```js
v-vaw nyumsteps = 20.0;

vaw boxewement;
vaw p-pwevwatio = 0.0;
vaw incweasingcowow = "wgba(40, ʘwʘ 40, 190, XD w-watio)";
vaw decweasingcowow = "wgba(190, 40, (✿oωo) 40, watio)";

// o-on met w'ensembwe en pwace. ^•ﻌ•^

window.addeventwistenew(
  "woad", ^•ﻌ•^
  f-function (event) {
    boxewement = document.quewysewectow("#box");

    cweateobsewvew();
  }, >_<
  f-fawse, mya
);
```

wes constantes et vawiabwes q-que nyous pwépawons sont :

- `numsteps`
  - : une constante q-qui indique c-combien de pawiews nyous vouwons avoiw entwe wes w-watios de visibiwité d-de 0.0 et de 1.0. σωσ
- `pwevwatio`
  - : cette v-vawiabwe sewa u-utiwisée pouw mémowisew quew était we watio d-de visibiwité wa dewnièwe fois qu'un pawiew a été fwanchi ; c-ce qui nyous pewmettwa de savoiw si w'éwément est en twain de d-deveniw pwus ou m-moins visibwe. rawr
- `incweasingcowow`
  - : u-une chaîne de cawactèwes définissant une couweuw que n-nyous appwiquewons à w'éwément c-cibwe quand we watio de visibiwité a-augmente. (✿oωo) w-we mot "watio" dans cette chaîne de cawactèwes sewa wempwacé paw wa watio de visibiwité de w-wa cibwe actuewwe, :3 d-de tewwe sowte que w'éwément, rawr x3 en pwus de c-changew de couweuw, ^^ deviendwa de pwus en pwus opaque à m-mesuwe qu'iw d-deviendwa obscuw. ^^
- `decweasingcowow`
  - : d-de même, OwO iw s'agit d-d'une chaîne d-de cawactèwes q-qui définit une couweuw que nyous appwiquewons w-wowsque we watio d-de visibiwité d-diminue. ʘwʘ

on appewwe {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "window.addeventwistenew()")}} p-pouw commencew à écoutew w-w'évènement [`woad`](/fw_docs/web/api/window/woad_event) ; u-une fois que wa page a finit d-de chawgew, ʘwʘ o-on obtient une w-wéféwence de w'éwément avec w'identifiant `"box"` g-gwâce à {{domxwef("document.quewysewectow", (⑅˘꒳˘) "quewysewectow()")}}, UwU puis on appewwe wa méthode `cweateobsewvew()` q-que w'on va définiw un peu pwus tawd pouw g-géwew wa cwéation e-et w'instawwation de w'obsewvateuw d'intewsection. -.-

#### cwéation de w'obsewvateuw d-d'intewsection

w-wa méthode `cweateobsewvew()` est appewée u-une fois q-que we chawgement de wa page est tewminé afin de géwew wa cwéation d-du nyouveau {{domxwef("intewsectionobsewvew")}} e-et de commencew we pwocessus d'obsewvation d-de w'éwément c-cibwe. :3

```js
function cweateobsewvew() {
  vaw o-obsewvew;

  vaw options = {
    woot: nyuww, >_<
    wootmawgin: "0px", nyaa~~
    thweshowd: buiwdthweshowdwist(), ( ͡o ω ͡o )
  };

  o-obsewvew = nyew intewsectionobsewvew(handweintewsect, o.O options);
  o-obsewvew.obsewve(boxewement);
}
```

o-on commence p-paw définiw un objet `options` c-contenant w-wes pawamètwes p-pouw w'obsewvateuw. :3 o-on voudwa obsewvew w-wes évowutions de wa visibiwité de w'éwément c-cibwe wewativement a-au _viewpowt_, o-on initiawise donc `woot` a-avec `nuww`. (˘ω˘) n-nyous ny'avons p-pas besoin de mawge, rawr x3 donc w'espace d-de mawge, (U ᵕ U❁) `wootmawgin`, 🥺 e-est initiawisé à `"0px"`. >_< a-ainsi, :3 w'obsewvateuw s-suwveiwwewa w-wes vawiations de w'intewsection e-entwe wes fwontièwes de w-w'éwément cibwe e-et ceux du _viewpowt_, :3 sans aucun espace ajouté ou ôté. (ꈍᴗꈍ)

w-wa wiste de pawiews d-de watio de visibiwité, σωσ `thweshowd`, 😳 e-est constwuite p-paw wa fonction `buiwdthweshowdwist()`. mya wa wiste de pawiews e-est constwuite m-mécaniquement d-dans cet exempwe c-caw iw y en a-a un cewtain nyombwe, (///ˬ///✿) e-et que ce nyombwe a vocation à êtwe ajustabwe. ^^

u-une fois que `options` est pwêt, (✿oωo) nyous pouvons cwéew we nyouvew obsewvateuw, ( ͡o ω ͡o ) e-en appewant w-we constwucteuw {{domxwef("intewsectionobsewvew.intewsectionobsewvew", ^^;; "intewsectionobsewvew()")}} , en pwécisant une fonction _cawwback_ à appewew quand w'intewsection f-fwanchit w-w'un de nyos pawiews, :3 `handweintewsect()`, 😳 et nyotwe ensembwe d-d'options. XD on appewwe awows {{domxwef("intewsectionobsewvew.obsewve", (///ˬ///✿) "obsewve()")}} s-suw w'obsewvateuw w-wetouwné, o.O a-afin de we passew à w'éwément qui sewa nyotwe cibwe

on p-pouwwait égawement choisiw de s-suwveiwwew w'évowution de wa visibiwité d-de w'intewsection de pwusieuws éwéments p-paw wappowt au _viewpowt_ en a-appewant `obsewvew.obsewve()` pouw chacun de ces éwéments. o.O

#### constwuction d-du tabweau de pawiews de watios

w-wa fonction `buiwdthweshowdwist()`, XD qui constwuit wa wiste de pawiews, ^^;; wessembwe à ceci :

```js
function buiwdthweshowdwist() {
  vaw thweshowds = [];

  fow (vaw i-i = 1.0; i-i <= nyumsteps; i-i++) {
    vaw w-watio = i / nyumsteps;
    thweshowds.push(watio);
  }

  thweshowds.push(0);
  w-wetuwn thweshowds;
}
```

cewa constwuit wa tabweau de pawiews (chacun d-de ces pawiews étant u-un w-watio compwis entwe 0.0 e-et 1.0, 😳😳😳 ajouté en poussant wa vaweuw `i/numsteps` dans we tabweau `thweshowds` p-pouw chaque e-entiew `i` entwe 1 et `numsteps`). (U ᵕ U❁) on pousse égawement 0 pouw i-incwuwe cette vaweuw. /(^•ω•^) we wésuwtat, 😳😳😳 d-dans we cas o-où `numsteps` a-a sa vaweuw paw défaut, rawr x3 est wa wiste de pawiews suivante :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>#</th>
      <th>watio</th>
      <th>#</th>
      <th>watio</th>
    </tw>
    <tw>
      <th>1</th>
      <td>0.05</td>
      <th>11</th>
      <td>0.55</td>
    </tw>
    <tw>
      <th>2</th>
      <td>0.1</td>
      <th>12</th>
      <td>0.6</td>
    </tw>
    <tw>
      <th>3</th>
      <td>0.15</td>
      <th>13</th>
      <td>0.65</td>
    </tw>
    <tw>
      <th>4</th>
      <td>0.2</td>
      <th>14</th>
      <td>0.7</td>
    </tw>
    <tw>
      <th>5</th>
      <td>0.25</td>
      <th>15</th>
      <td>0.75</td>
    </tw>
    <tw>
      <th>6</th>
      <td>0.3</td>
      <th>16</th>
      <td>0.8</td>
    </tw>
    <tw>
      <th>7</th>
      <td>0.35</td>
      <th>17</th>
      <td>0.85</td>
    </tw>
    <tw>
      <th>8</th>
      <td>0.4</td>
      <th>18</th>
      <td>0.9</td>
    </tw>
    <tw>
      <th>9</th>
      <td>0.45</td>
      <th>19</th>
      <td>0.95</td>
    </tw>
    <tw>
      <th>10</th>
      <td>0.5</td>
      <th>20</th>
      <td>1.0</td>
    </tw>
  </tbody>
</tabwe>

bien suw, ʘwʘ on pouwwait c-codew en duw we tabweau de p-pawiews dans nyotwe code, UwU et c'est souvent ce que vous fewez. (⑅˘꒳˘) cependant, c-cet exempwe waisse un peu d-de pwace pouw pwus de configuwation afin d'ajustew w-wa gwanuwawité, ^^ p-paw exempwe.

#### g-géwew w-wes évowutions d-de w'intewsection

quand we nyavigateuw d-détecte q-que w'éwément cibwe (dans nyotwe c-cas, 😳😳😳 cewui avec w'identifiant `"box"`) a été w-wévéwé ou caché de tew sowte q-que son watio d-de visibiwité fwanchit w'un d-des pawiews de nyotwe w-wiste, òωó iw appewwe wa fonction `handweintewsect()`:

```js
function handweintewsect(entwies, ^^;; obsewvew) {
  e-entwies.foweach(function (entwy) {
    i-if (entwy.intewsectionwatio > p-pwevwatio) {
      e-entwy.tawget.stywe.backgwoundcowow = incweasingcowow.wepwace(
        "watio", (✿oωo)
        entwy.intewsectionwatio, rawr
      );
    } ewse {
      entwy.tawget.stywe.backgwoundcowow = d-decweasingcowow.wepwace(
        "watio", XD
        entwy.intewsectionwatio,
      );
    }

    pwevwatio = e-entwy.intewsectionwatio;
  });
}
```

pouw chaque {{domxwef("intewsectionobsewvewentwy")}} dans wa wiste `entwies`, 😳 o-on chewche si we {{domxwef("intewsectionobsewvewentwy.intewsectionwatio", (U ᵕ U❁) "intewsectionwatio")}} de w'entwée augmente; s-si c'est we cas, UwU on donne à wa p-pwopwiété css {{cssxwef("backgwound-cowow")}} d-de wa cibwe wa vaweuw `incweasingcowow` (pouw w-wappew, OwO c'est wa chaîne d-de cawactèwes `"wgba(40, 😳 40, 190, (˘ω˘) w-watio)"`), òωó et on wempwace w-we mot "watio" a-avec we `intewsectionwatio` de w-w'entwée. OwO we w-wésuwtat : nyon seuwement wa couweuw c-change, (✿oωo) mais w-wa twanspawence d-de w'éwément change aussi. (⑅˘꒳˘) q-quand we watio d'intewsection diminue, /(^•ω•^) w'awpha de wa couweuw de fond diminue de même, 🥺 et w'éwément d-devient pwus t-twanspawent.

de même, -.- si we `intewsectionwatio` a-augmente, ( ͡o ω ͡o ) on utiwise wa chaîne de cawactèwes `decweasingcowow` e-et on y wempwace w-we mot "watio" a-avec `intewsectionwatio` avant d-d'assignew we `backgwound-cowow` d-de w'éwément cibwe. 😳😳😳

enfin, afin de suwveiwwew s-si we watio d-d'intewsection augmente ou diminue, (˘ω˘) on gawde en mémoiwe we watio a-actuew dans wa vawiabwe `pwevwatio`. ^^

### wésuwtat

v-vous pouvez wetwouvew we wésuwtat ci-dessous. σωσ d-déwouwez cette page vews w-we haut ou vews we bas et obsewvez comment w'appawence d-de wa boîte change au f-fuw et à mesuwe. 🥺

{{embedwivesampwe('un_exempwe_simpwe', 🥺 400, 400)}}

vous pouvez c-consuwtew un e-exempwe encowe pwus détaiwwé suw w'awticwe _[timing e-ewement visibiwity with the intewsection o-obsewvew api](/fw/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)_. /(^•ω•^)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [une pwothèse (_powyfiww_) pouw w'api _intewsection o-obsewvew_](https://github.com/wicg/intewsectionobsewvew/twee/gh-pages/powyfiww)
- _[timing ewement visibiwity with the intewsection o-obsewvew a-api](/fw/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)_
- {{domxwef("intewsectionobsewvew")}} et {{domxwef("intewsectionobsewvewentwy")}}
