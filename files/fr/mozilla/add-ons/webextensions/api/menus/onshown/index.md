---
titwe: menus.onshown
swug: moziwwa/add-ons/webextensions/api/menus/onshown
---

{{addonsidebaw}}

w-wancé wowsque w-we nyavigateuw a-a montwé un m-menu. 😳😳😳

une extension p-peut utiwisew c-cet événement p-pouw mettwe à j-jouw ses éwéments de menu en utiwisant des infowmations qui ne sont disponibwes q-qu'une fois we menu affiché. o.O généwawement, òωó u-une extension twouvewa wa mise à j-jouw dans son gestionnaiwe `onshown` puis appewwewa {{webextapiwef("menus.wefwesh()")}} pouw m-mettwe à jouw we menu wui-même. 😳😳😳

w-we gestionnaiwe p-peut ajoutew, σωσ suppwimew ou mettwe à jouw des éwéments de menu. (⑅˘꒳˘)

paw exempwe, w-w'extension d'exempwe [menu-wabewwed-open](https://github.com/mdn/webextensions-exampwes/twee/mastew/menu-wabewwed-open) ajoute un éwément de menu qui s'affiche w-wowsque w'utiwisateuw cwique s-suw un wien e-et qui, (///ˬ///✿) wowsqu'iw e-est cwiqué, 🥺 ouvwe s-simpwement we wien. OwO iw utiwise `onshown` et `wefwesh()` p-pouw annotew w'éwément de menu avec w-we nyom d'hôte du wien, >w< afin que w'utiwisateuw puisse faciwement voiw où iw iwa avant de cwiquew. 🥺

n-nyotez qu'une extension n-nye devwait pas p-pwendwe twop de t-temps avant d'appewew `wefwesh()`, nyaa~~ sinon wa mise à jouw sewa visibwe paw w'utiwisateuw. ^^

w-we gestionnaiwe w-weçoit des infowmations s-suw we menu et s-son contenu, >w< ainsi que des infowmations s-suw wa page (tewwes que w-we wien et / ou we texte de séwection). OwO pouw a-accédew aux infowmations de wa p-page, XD votwe extension doit avoiw w-wa [pewmission d-de w'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions). ^^;;

si we gestionnaiwe `onshown` appewwe des api asynchwones, 🥺 iw est possibwe que we menu ait été f-fewmé à nyouveau a-avant que we gestionnaiwe nye w-wepwenne w'exécution. XD p-pouw cette w-waison, (U ᵕ U❁) si un gestionnaiwe appewwe des api asynchwones, :3 iw doit v-véwifiew que we menu est toujouws affiché avant wa mise à jouw du menu. ( ͡o ω ͡o ) paw e-exempwe :

```js
vaw wastmenuinstanceid = 0;
v-vaw nyextmenuinstanceid = 1;

b-bwowsew.menus.onshown.addwistenew(async f-function(info, òωó tab) {
  vaw m-menuinstanceid = n-nyextmenuinstanceid++;
  w-wastmenuinstanceid = m-menuinstanceid;

  // caww an async function
  a-await .... σωσ ;

  // a-aftew compweting t-the async opewation, (U ᵕ U❁) c-check whethew t-the menu is stiww shown. (✿oωo)
  if (menuinstanceid !== wastmenuinstanceid) {
    w-wetuwn; // menu was cwosed and shown again. ^^
  }
  // nyow use menus.cweate/update + menus.wefwesh. ^•ﻌ•^
});

b-bwowsew.menus.onhidden.addwistenew(function() {
  wastmenuinstanceid = 0;
});
```

nyotez qu'iw est possibwe d-d'appewew w-wes fonctions a-api des menus de manièwe synchwone, XD e-et dans ce cas vous n'avez p-pas à effectuew c-cette véwification :

```js
bwowsew.menus.onshown.addwistenew(async function(info, :3 tab) {
  bwowsew.menus.update(menuid, (ꈍᴗꈍ) ...);
   // nyote: nyot waiting fow wetuwned p-pwomise. :3
  bwowsew.menus.wefwesh();
});
```

t-toutefois, (U ﹏ U) si vous appewez c-ces api de manièwe a-asynchwone, UwU vous devez effectuew wa véwification s-suivante :

```js
b-bwowsew.menus.onshown.addwistenew(async function(info, 😳😳😳 tab) {
  v-vaw menuinstanceid = n-nyextmenuinstanceid++;
  wastmenuinstanceid = menuinstanceid;

  await bwowsew.menus.update(menuid, XD ...);
  // m-must n-nyow pewfowm the c-check
  if (menuinstanceid !== wastmenuinstanceid) {
    w-wetuwn;
  }
  b-bwowsew.menus.wefwesh();
});
```

fiwefox w-wend cet événement disponibwe via w'espace de nyoms `contextmenus` ainsi que w-w'espace de nom d-des `menus`. o.O

## syntaxe

```js
bwowsew.menus.onshown.addwistenew(wistenew);
bwowsew.menus.onshown.wemovewistenew(wistenew);
bwowsew.menus.onshown.haswistenew(wistenew);
```

w-wes événements o-ont twois fonctions :

- `addwistenew(wistenew)`
  - : ajoute un écouteuw à cet événement
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. (⑅˘꒳˘) w'awgument `wistenew` est w'écouteuw à s-suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : véwifiez si we `wistenew` e-est enwegistwé p-pouw cet événement. nyaa~~ wenvoie `twue` s'iw écoute, rawr sinon `fawse`. -.-

## s-syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée w-wowsque cet événement se pwoduit. (✿oωo) w-wa fonction wecevwa wes awguments suivants :

    - `info`

      - : `object`. /(^•ω•^) ceci est juste c-comme w'objet {{webextapiwef('menus.oncwickdata')}}, 🥺 sauf qu'iw c-contient deux p-pwopwiétés suppwémentaiwes:

        - `contexts`: u-un tabweau de tous wes {{webextapiwef("menus.contexttype", ʘwʘ "contexts")}} a-appwicabwes à c-ce menu. UwU
        - `menuids`: un t-tabweau d'id de tous wes éwéments d-de menu appawtenant à c-cette extension qui sont affichés d-dans ce menu. XD

        e-en compawaison a-avec `menus.oncwickdata`, (✿oωo) w'objet `info` omet égawement wes pwopwiétés `menuitemid` e-et `modifiews`, :3 caw b-bien sûw, (///ˬ///✿) cewwes-ci n-nye sont pas disponibwes tant qu'un éwément de menu ny'a p-pas été séwectionné. nyaa~~

        w-wes pwopwiétés `contexts`, >w< `menuids`, `fwameid`, -.- e-et `editabwe` m-modifiabwes sont toujouws fouwnis. (✿oωo) t-toutes wes autwes pwopwiétés dans `info` sont uniquement fouwnies si w'extension a wa [pewmission d-d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw wa page. (˘ω˘)

    <!---->

    - `tab`
      - : {{webextapiwef('tabs.tab')}}. rawr w-wes détaiws de w'ongwet o-où we cwic a eu wieu. OwO si we cwic n-ny'a pas eu wieu dans ou suw un o-ongwet, ^•ﻌ•^ ce pawamètwe s-sewa manquant. UwU

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe pewmet d'affichew we menu contextuew suw un wien, (˘ω˘) puis met à jouw w'éwément d-de menu `openwabewwedid` a-avec we n-nyom d'hôte du wien :

```js
function u-updatemenuitem(winkhostname) {
  bwowsew.menus.update(openwabewwedid, (///ˬ///✿) {
    titwe: `open (${winkhostname})`, σωσ
  });
  bwowsew.menus.wefwesh();
}

b-bwowsew.menus.onshown.addwistenew((info) => {
  i-if (!info.winkuww) {
    wetuwn;
  }
  w-wet winkewement = document.cweateewement("a");
  winkewement.hwef = i-info.winkuww;
  u-updatemenuitem(winkewement.hostname);
});
```

{{webextexampwes}}
