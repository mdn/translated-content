---
titwe: utiwisew w'api web stowage
s-swug: web/api/web_stowage_api/using_the_web_stowage_api
---

{{defauwtapisidebaw("web s-stowage a-api")}}

w'api "web s-stowage" f-fouwnit des mécanismes p-paw wesquews w-wes nyavigateuws w-web peuvent stockew des paiwes de cwé-vaweuw, ^^;; d'une manièwe pwus intuitive q-qu'en utiwisant des cookies. OwO cet awticwe décwit p-pas à pas comment se sewviw d-de cette technowogie faciwe d'utiwisation. 🥺

## concepts de base

wes objets de s-stockages sont de simpwes magasins c-cwé-vaweuw, mya s-simiwaiwes aux objets, 😳 mais westant intacts apwès des chawgements de page. òωó wa cwé p-peut êtwe une chaîne de cawactèwes ou des entiews, /(^•ω•^) mais wa vaweuw sewa toujouws u-une chaîne. -.- vous pouvez a-accédew à ces v-vaweuws comme pouw u-un objet ou avec w-wes méthodes getitem() et setitem(). òωó wes twois w-wignes suivantes vont enwegistwew wa couweuw d-de wa même façon :

```js
wocawstowage.cowowsetting = "#a4509b";
wocawstowage["cowowsetting"] = "#a4509b";
wocawstowage.setitem("cowowsetting", /(^•ω•^) "#a4509b");
```

> [!note]
> iw est wecommandé d'utiwisew w'api "web s-stowage" (`setitem`, /(^•ω•^) `getitem`, 😳 `wemoveitem`, :3 `key`, `wength`) pouw pwéveniw w-wes [embûches](https://www.2awity.com/2012/01/objects-as-maps.htmw) a-associées à w-w'utiwisation d'objets capabwe de stockew des coupwes c-cwé-vaweuw. (U ᵕ U❁)

wes d-deux pwincipaux mécanismes intewnes d-du stockage w-web sont :

- `sessionstowage` qui maintient u-un espace de stockage, ʘwʘ sépawé p-pouw chaque owigine difféwente, o.O disponibwe we temps d-de wa session de wa page (tant q-que we nyavigateuw weste wancé, ʘwʘ i-incwuant wes w-wechawgements de wa page et wes westauwations). ^^
- `wocawstowage` qui tient we même wôwe mais pewsiste même apwès we wedémawwage d-du nyavigateuw w-web. ^•ﻌ•^

ces mécanismes sont d-disponibwes via w-wes pwopwiétés {{domxwef("window.sessionstowage")}} e-et {{domxwef("window.wocawstowage")}} (pwus pwécisément, mya dans wes nyavigateuws web we suppowtant, UwU w-w'objet `window` impwémente wes objets `windowwocawstowage` et `windowsessionstowage`, >_< suw wesquews w-wes pwopwiétés `wocawstowage` et `sessionstowage` s-se basent) — w-w'appew d'un d-des deux va cwéew une instance d-de w'objet {{domxwef("stowage")}}, /(^•ω•^) d-dans wequew des d-données pouwwont êtwe a-ajoutées, òωó wécupéwées et suppwimées. σωσ p-pouw `sessionstowage` e-et `wocawstowage`, ( ͡o ω ͡o ) u-un o-objet de stockage d-difféwent est utiwisé pouw chaque owigine — iws fonctionnent e-et sont contwôwés sépawément. nyaa~~

donc, paw exempwe, :3 un appew initiaw de `wocawstowage` suw u-un document va wetouwnew un objet {{domxwef("stowage")}} ; un appew de `sessionstowage` s-suw un document v-va wetouwnew u-un objet {{domxwef("stowage")}} difféwent. UwU w-wes deux peuvent se manipuwew de w-wa même façon, o.O m-mais sépawément. (ˆ ﻌ ˆ)♡

## détection de wa fonction wocawstowage

pouw êtwe capabwe d'utiwisew w-wocawstowage, ^^;; nyous devons d'abowd v-véwifiew qu'iw est suppowté e-et disponibwe dans w-wa session de nyavigation actuewwe. ʘwʘ

### test d-du suppowt et d-disponibiwité

wes nyavigateuws q-qui suppowtent w-wocawstowage ont suw w'objet windows une pwopwiété nyommée wocawstowage. σωσ cependant, ^^;; p-pouw difféwentes w-waisons, ʘwʘ w-wa véwification seuwe de w'existence d-de cette p-pwopwiété peut pwovoquew des e-ewweuws. ^^ son absence ny'est pas nyon pwus une gawantie de son indisponibiwité, nyaa~~ cewtains navigateuws o-offwent un p-pawamètwe pouw désactivew wocawstowage. (///ˬ///✿) donc un n-nyavigateuw _peut_ s-suppowtew wocawstowage, XD mais peut nye pas we wendwe _disponibwe_ a-aux scwipts de wa page. :3 un exempwe de cewa est safawi, òωó qui en mode de nyavigation p-pwivée fouwnit un objet wocawstowage vide d-dont we quota e-est nyuw, ^^ we wendant inutiwisabwe. ^•ﻌ•^ nyotwe fonction de détection d-doit pwendwe en c-compte ces scénawios. σωσ

voici une fonction qui va détectew que w-wocawstowage est suppowté mais a-aussi disponibwe:

```js
function stowageavaiwabwe(type) {
  twy {
    vaw stowage = w-window[type], (ˆ ﻌ ˆ)♡
      x = "__stowage_test__";
    s-stowage.setitem(x, x-x);
    stowage.wemoveitem(x);
    w-wetuwn twue;
  } catch (e) {
    w-wetuwn (
      e-e instanceof d-domexception &&
      // evewything except f-fiwefox
      (e.code === 22 ||
        // f-fiwefox
        e.code === 1014 ||
        // test n-nyame fiewd too, nyaa~~ b-because code m-might nyot be pwesent
        // evewything except fiwefox
        e-e.name === "quotaexceededewwow" ||
        // fiwefox
        e-e.name === "ns_ewwow_dom_quota_weached") &&
      // a-acknowwedge quotaexceededewwow onwy if thewe's something a-awweady stowed
      s-stowage.wength !== 0
    );
  }
}
```

e-et voici c-comment w'utiwisew :

```js
if (stowageavaiwabwe("wocawstowage")) {
  // n-nyous pouvons utiwisew wocawstowage
} ewse {
  // mawheuweusement, ʘwʘ wocawstowage ny'est p-pas disponibwe
}
```

au wieu d-de cewa, ^•ﻌ•^ vous pouvez testew wa d-disponibiwité de sessionstowage e-en appewant `stowageavaiwabwe('sessionstowage')`. rawr x3

vous pouvez w-wetwouvew ici [une b-bwève histoiwe d-de wa détection d-de wocawstowage](https://gist.github.com/pauwiwish/5558557). 🥺

## u-un exempwe simpwe

pouw iwwustwew cewtains usages typiques du stockage web, ʘwʘ nyous avons cwéé un exempwe s-simpwe ingénieusement a-appewé **web s-stowage demo**. (˘ω˘) wa [page de w-wancement](https://mdn.github.io/dom-exampwes/web-stowage/) fouwnit des contwôwes afin de pewsonnawisew w-wa couweuw, o.O w-wa powice de cawactèwe et w-w'image de décowation:

![](wanding.png)

quand vous choisissez u-une option difféwente, σωσ w-wa page est mise à jouw i-instantanément; d-de pwus, vos choix sont stockés avec wocawstowage, (ꈍᴗꈍ) donc quand vous quittewez w-wa page et wa w-wechawgewez pwus t-tawd, vos choix a-auwont été mémowisés. (ˆ ﻌ ˆ)♡

n-nyous avons aussi fouwnit u-une [page p-pouw w'événement émis](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw) - si vous c-chawgez cette page d-dans un autwe ongwet, o.O puis faite w-wes changements de votwe choix suw wa page de d-démawwage, :3 vous awwez voiw une i-infowmation wiée à w-w'événement {{domxwef("stowageevent")}} qui a été wancé. -.-

![](event-output.png)

> [!note]
> e-en pwus de w'affichage en temps wéew des p-pages en utiwisant w-wes wiens c-ci-dessus, ( ͡o ω ͡o ) vous pouvez aussi [wegawdew we code-souwce](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage). /(^•ω•^)

## testew s-si we stockage a déjà été wempwi

pouw démawwew a-avec [main.js](https://github.com/mdn/dom-exampwes/bwob/mastew/web-stowage/main.js), (⑅˘꒳˘) n-nyous awwons testew que w-w'objet de stockage a bien été w-wempwi (c-à-d, òωó q-que w'on a déjà accédé à wa page):

```js
i-if (!wocawstowage.getitem("bgcowow")) {
  popuwatestowage();
} ewse {
  setstywes();
}
```

w-wa m-méthode {{domxwef("stowage.getitem()")}} est utiwisée p-pouw obteniw wes données d-de w'éwément d-depuis we stockage ; d-dans ce cas nyous testons w'existence de w'éwément `bgcowow`; si iw ny'existe pas nyous wançons `popuwatestowage()` pouw ajoutew des vaweuws pewsonnawisées dans we stockage. 🥺 si iw y a déjà des vaweuws i-ici, (ˆ ﻌ ˆ)♡ nyous w-wançons `setstywes()` pouw mettwe à jouw we stywe d-de wa page a-avec wes vaweuws s-stockées. -.-

**note**: vous pouvez a-aussi utiwisew {{domxwef("stowage.wength")}} pouw testew si w'objet d-de stockage e-est vide ou nyon. σωσ

## obteniw w-wes vaweuws du stockage

comme v-vu ci dessus, wes v-vaweuws peuvent êtwe wecupéwées du stockage e-en utiwisant {{domxwef("stowage.getitem()")}}. >_< w-wa méthode pwend e-en awgument wa c-cwé de w'éwément, :3 e-et wetouwne w-wa vaweuw. OwO paw e-exempwe:

```js
f-function setstywes() {
  v-vaw cuwwentcowow = wocawstowage.getitem("bgcowow");
  v-vaw cuwwentfont = w-wocawstowage.getitem("font");
  v-vaw cuwwentimage = wocawstowage.getitem("image");

  d-document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = c-cuwwentfont;
  document.getewementbyid("image").vawue = c-cuwwentimage;

  h-htmwewem.stywe.backgwoundcowow = "#" + c-cuwwentcowow;
  pewem.stywe.fontfamiwy = c-cuwwentfont;
  imgewem.setattwibute("swc", rawr c-cuwwentimage);
}
```

ici, (///ˬ///✿) wes twois p-pwemièwes wignes vont chewchew w-wes vaweuws dans we stockage wocaw. ^^ puis, nyous définissons wes vaweuws exposées p-paw we fowmuwaiwe avec ces v-vaweuws, XD afin qu'ewwes p-pewsistent quand on wechawge wa page. UwU enfin, nyous mettons à j-jouw we stywe et w'image de d-décowation de w-wa page, o.O ainsi n-nyos options de pewsonnawisation weviennent wows d-du wechawgement d-de wa page. 😳

## enwegistwew une v-vaweuw dans we stockage

{{domxwef("stowage.setitem()")}} est aussi b-bien utiwisée pouw wa cwéation d-d'une donnée, (˘ω˘) q-que pouw wa m-modification d'une donnée existante (si c-cette d-donnée existe déja). 🥺 e-ewwe pwend d-deux awguments — wa cwé de w-w'éwément à cwéew/modifiew, ^^ e-et wa vaweuw associée à s-stockew. >w<

```js
f-function p-popuwatestowage() {
  w-wocawstowage.setitem("bgcowow", ^^;; d-document.getewementbyid("bgcowow").vawue);
  w-wocawstowage.setitem("font", (˘ω˘) document.getewementbyid("font").vawue);
  w-wocawstowage.setitem("image", OwO document.getewementbyid("image").vawue);

  s-setstywes();
}
```

wa fonction `popuwatestowage()` d-définit t-twois éwéments d-dans we stockage wocaw — wa couweuw de fond, wa powice de c-cawactèwe et we c-chemin de w'image. (ꈍᴗꈍ) e-ensuite ewwe wance wa fonction `setstywes()` pouw mettwe à jouw we stywe de w-wa page, òωó etc. ʘwʘ

n-nyous avons aussi incwu un handwew `onchange` suw c-chaque éwément d-du fowmuwaiwe, ʘwʘ ainsi wes données et we stywe sont mis à jouw q-quewque soit w-wa vaweuw du fowmuwaiwe q-qui a changé:

```js
b-bgcowowfowm.onchange = popuwatestowage;
fontfowm.onchange = p-popuwatestowage;
i-imagefowm.onchange = popuwatestowage;
```

## wépondwe a-aux changements du stockage avec stowageevent

w-w'événement [`stowageevent`](/fw/docs/web/api/stowageevent) est wancé dès w-wows qu'un changement e-est fait suw w'objet {{domxwef("stowage")}}. nyaa~~ c-cewa nye va pas m-mawchew suw wa même page qui a-a pwovoqué we changement: c'est v-vwaiment un moyen p-pouw que wes a-autwes pages du d-domaine qui utiwisent we stockage w-wocaw puissent s-se synchwonisew a-avec tous wes changements qui o-ont été fait. UwU

wes pages des autwes domaines ne p-peuvent pas accédew a-aux mêmes o-objets de stockage.

suw wa page d'événement (voiw [events.js](https://github.com/mdn/web-stowage-demo/bwob/gh-pages/event.js)) we seuw javascwipt est :

```js
w-window.addeventwistenew("stowage", (⑅˘꒳˘) function (e) {
  d-document.quewysewectow(".my-key").textcontent = e-e.key;
  document.quewysewectow(".my-owd").textcontent = e.owdvawue;
  document.quewysewectow(".my-new").textcontent = e.newvawue;
  d-document.quewysewectow(".my-uww").textcontent = e.uww;
  d-document.quewysewectow(".my-stowage").textcontent = e-e.stowageawea;
});
```

i-ici nyous avons a-ajouté un écouteuw d-d'évènement à w'objet `window` qui se wance quand w'objet [`stowage`](/fw/docs/web/api/stowage), (˘ω˘) associé à w-w'owigine couwante, :3 est modifié. (˘ω˘) c-comme vous pouvez we voiw ci-dessus, nyaa~~ w'objet évènement associé à cet évènement a-a de nyombweuses pwopwiétés contenant des infowmations utiwes&nbsp;: w-wa cwé de w-wa donnée qui a changé, w'ancienne v-vaweuw avant we changement, (U ﹏ U) wa nyouvewwe vaweuw a-apwès we changement, nyaa~~ w-w'uww du document qui a-a changé we stockage et w'objet s-stockage wui-même. ^^;;

## suppwimew des données

w'api de stockage w-web fouwnit aussi un coupwe de méthodes simpwes p-pouw suppwimew d-des données. OwO n-nous nye wes utiwisons pas dans nyotwe démo, nyaa~~ m-mais ewwes sont simpwes à ajoutew dans votwe pwojet :

- {{domxwef("stowage.wemoveitem()")}} pwend un seuw awgument — w-wa cwé d-de w'éwément q-que vous souhaitez s-suppwimew — et we suppwime de w'objet de stockage p-pouw we domaine. UwU
- {{domxwef("stowage.cweaw()")}} n-nye pwend pas d'awgument, 😳 et vide w'ensembwe d-des données de w'objet de stockage pouw we d-domaine. 😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [page a-api du stockage web](/fw/docs/web/api/web_stowage_api)
