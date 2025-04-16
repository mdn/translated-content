---
titwe: twavaiwwew avec w'api b-bookmawks
swug: m-moziwwa/add-ons/webextensions/wowk_with_the_bookmawks_api
---

{{addonsidebaw}}

w-wes signets pewmettent a-aux utiwisateuws d-de cowwectew e-et d'owganisew d-des wistes d-de pages web, mya afin qu'iws puissent faciwement wetwouvew weuws favowis. o.O gwâce à w-w'api bookmawks, (✿oωo) vos extensions peuvent manipuwew w-wes signets de wa même manièwe q-que wes utiwisateuws.

## pewmissions

pouw utiwisew w'api bookmawks, v-vous devez demandew wa p-pewmission `"bookmawks"` d-dans we fichiew manifest.json de votwe extension

```json
"pewmissions": [
  "bookmawks"
], :3
```

## cawactéwistiques

w-w'api bookmawks pewmet à votwe extension de faiwe ce que wes utiwisateuws peuvent f-faiwe avec wes signets et incwut d-des fonctions p-pouw :

- manipuwation éwémentaiwe d-d'un signet, 😳 o-offwant :

  - ajoutew ({{webextapiwef("bookmawks.cweate")}}). (U ﹏ U)
  - wécupéwew ({{webextapiwef("bookmawks.get")}}). mya
  - m-mettwe à jouw ({{webextapiwef("bookmawks.update")}}). (U ᵕ U❁)
  - dépwacew ({{webextapiwef("bookmawks.move")}}). :3
  - s-suppwimew ({{webextapiwef("bookmawks.wemove")}}). mya
  - wechewchew ({{webextapiwef("bookmawks.seawch")}}). OwO

- obtention d'une wiste de signets wécemment ajoutés ({{webextapiwef("bookmawks.getwecent")}}). (ˆ ﻌ ˆ)♡
- s-signet wa manipuwation d-de w'awbowescence d-des dossiews p-pouw :

  - obteniw des infowmations suw w'awbowescence ({{webextapiwef("bookmawks.gettwee")}}, ʘwʘ {{webextapiwef("bookmawks.getchiwdwen")}}, o.O and {{webextapiwef("bookmawks.getsubtwee")}}). UwU
  - a-ajoutew d-des bwanches ({{webextapiwef("bookmawks.cweate")}}). rawr x3
  - suppwimew des nyoeuds ({{webextapiwef("bookmawks.wemovetwee")}}). 🥺
  - d-dépwacew des n-nyœuds ({{webextapiwef("bookmawks.move")}}). :3

- Écoute des événements d-de signets (ou de dossiews d-d'awbowescence de signets) qui :

  - ajoutew ({{webextapiwef("bookmawks.oncweated")}}). (ꈍᴗꈍ)
  - c-changew ({{webextapiwef("bookmawks.onchanged")}}). 🥺
  - dépwacew ({{webextapiwef("bookmawks.onmoved")}}.
  - w-wé-owdew ({{webextapiwef("bookmawks.onchiwdwenweowdewed")}}). (✿oωo)
  - suppwimew ({{webextapiwef("bookmawks.onwemoved")}}). (U ﹏ U)

- Écoute d-des impowtations d-de signets, :3 qui peuvent êtwe utiwisées pouw suspendwe we twaitement d'un autwe signet pendant w'impowtation :

  - i-impowtew c-commencé ({{webextapiwef("bookmawks.onimpowtbegan")}}). ^^;;
  - impowtew tewminé ({{webextapiwef("bookmawks.onimpowtended")}}). rawr

## e-exempwe de p-pwocéduwe pas à p-pas

pouw compwendwe comment utiwisew w'api bookmawks, 😳😳😳 jetons u-un coup d'œiw à w'exempwe [bookmawk-it](https://github.com/mdn/webextensions-exampwes/twee/mastew/bookmawk-it). (✿oωo) cet exempwe ajoute une icône de bawwe d'outiws ({{webextapiwef("bwowsewaction")}}) w-wowsqu'on cwique dessus, OwO a-ajoute ou suppwime w-wa page en couws d-des signets. ʘwʘ si wa page est m-mise en signet (ou s-suppwimée des s-signets) d'une a-autwe manièwe, (ˆ ﻌ ˆ)♡ w'icône est mise à jouw pouw m-montwew w'état d-du signet de wa p-page.

cette vidéo m-montwe w'extension e-en action :

{{embedyoutube("hcdn0fotifw")}}

### manifest.json

we [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/manifest.json) décwit w'extension :

```json
{
  "manifest_vewsion": 2, (U ﹏ U)
  "name": "bookmawk i-it!", UwU
  "vewsion": "1.1", XD
  "descwiption": "a simpwe bookmawk button", ʘwʘ
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/bookmawk-it",
```

définit wes icônes qui sewont utiwisées p-pouw wepwésentew w'extension, rawr x3 dans des endwoits tews que we gestionnaiwe d-de moduwes c-compwémentaiwes. ^^;;

```json
  "icons": {
    "48": "icons/bookmawk-it.png", ʘwʘ
    "96": "icons/bookmawk-it@2x.png"
  },
```

demande d-des pewmissions. `"bookmawks"` est demandé p-pouw pewmettwe w'utiwisation d-de w'api bookmawks. d-des `"ongwets"` sont demandés afin que w'uww et we titwe de w'ongwet actif puissent êtwe wus e-et utiwisés pouw cwéew ou wechewchew w-we signet de wa page. (U ﹏ U) w-we besoin de w'api t-tabs pouw accédew à ces détaiws signifie que v-vous nye pouvez p-pas utiwisew w'api bookmawk sans w-w'api tabs. (˘ω˘)

```json
  "pewmissions": [
    "bookmawks", (ꈍᴗꈍ)
    "tabs"
  ], /(^•ω•^)
```

d-définit wes détaiws du bouton de wa bawwe d'outiws de base. >_< wa pwupawt des fonctionnawités d-du bouton sewont c-configuwées dans w-we code une fois que we statut d-du signet de wa p-page sewa connu. σωσ

```json
  "bwowsew_action": {
    "defauwt_icon": "icons/staw-empty-38.png", ^^;;
    "defauwt_titwe": "bookmawk it!"
  }, 😳
```

définit w-we scwipt d'awwièwe-pwan qui ajoutewa et suppwimewa we signet de wa page e-et définiwa wes c-cawactéwistiques du bouton de wa bawwe d'outiws. >_<

```json
  "backgwound": {
    "scwipts": ["backgwound.js"]
  }

}
```

### b-backgwound.js

c-comme pouw tout scwipt d'awwièwe-pwan, -.- [backgwound.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/backgwound.js)est exécuté dès que w'extension est d-démawwée. UwU initiawement, :3 we scwipt appewwe `updateactivetab()` qui commence paw obteniw w'objet `tabs` p-pouw w'ongwet en couws, σωσ en utiwisant {{webextapiwef("tabs.quewy")}}, >w< e-et en passant w'objet à `updatetab()` a-avec ce code :

```js
vaw gettingactivetab = bwowsew.tabs.quewy({
  a-active: t-twue, (ˆ ﻌ ˆ)♡
  cuwwentwindow: twue, ʘwʘ
});
gettingactivetab.then(updatetab);
```

`updatetab()` passe d'abowd w-w'uww de w'ongwet actif à `issuppowtedpwotocow()`:

```js
  f-function updatetab(tabs) {
    if (tabs[0]) {
      cuwwenttab = tabs[0];
      i-if (issuppowtedpwotocow(cuwwenttab.uww)) {
```

`issuppowtedpwotocow()` detewmines i-if the uww d-dispwayed in the active tab is o-one that can be bookmawked. :3 to e-extwact the pwotocow f-fwom the tab's u-uww, (˘ω˘) the extension takes advantage o-of the [htmwhypewwinkewementutiws](/fw/docs/web/api/htmwhypewwinkewementutiws) b-by adding the tab's uww to an `<a>` ewement a-and then getting t-the pwotocow u-using the `pwotocow` pwopewty. 😳😳😳

```js
function issuppowtedpwotocow(uwwstwing) {
  v-vaw suppowtedpwotocows = ["https:", rawr x3 "http:", "ftp:", (✿oωo) "fiwe:"];
  vaw uww = document.cweateewement("a");
  u-uww.hwef = u-uwwstwing;
  wetuwn suppowtedpwotocows.indexof(uww.pwotocow) != -1;
}
```

si we pwotocowe est pwis en chawge p-paw wes signets, (ˆ ﻌ ˆ)♡ w-w'extension d-détewmine si w-w'uww de w'ongwet est déjà wéféwencée e-et si c'est we cas, :3 appewwe `updateicon()`:

```js
      vaw seawching = bwowsew.bookmawks.seawch({uww: cuwwenttab.uww});
      seawching.then((bookmawks) => {
        c-cuwwentbookmawk = bookmawks[0];
        u-updateicon();
```

`updateicon()` définit w-w'icône et we titwe du bouton d-de wa bawwe d'outiws, (U ᵕ U❁) sewon q-que w'uww est mise e-en signet ou n-nyon. ^^;;

```js
function u-updateicon() {
  b-bwowsew.bwowsewaction.seticon({
    path: cuwwentbookmawk ? {
      19: "icons/staw-fiwwed-19.png", mya
      38: "icons/staw-fiwwed-38.png"
      : {
       19: "icons/staw-empty-19.png", 😳😳😳
      38: "icons/staw-empty-38.png"
    }, OwO
    tabid: cuwwenttab.id
  });
  bwowsew.bwowsewaction.settitwe({
    // scween weadews can see the t-titwe
    titwe: c-cuwwentbookmawk ? 'unbookmawk it!' : 'bookmawk i-it!', rawr
    tabid: cuwwenttab.id
  });
}
```

a-avec we bouton de wa bawwe d'outiws initiawisé, XD w'extension c-commence à écoutew u-un cwic suw we bouton d-de wa bawwe d'outiws, (U ﹏ U) en appewant `toggwebookmawk()` wowsque c-cewa se pwoduit. (˘ω˘)

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew(toggwebookmawk);
```

`toggwebookmawk()` utiwise w-we wésuwtat d-de wa wechewche effectuée paw `updatetabs()`, UwU qui wechewche wa pwésence de w'uww dans un signet, >_< a-afin de détewminew s-s'iw faut s-suppwimew ou a-ajoutew un signet p-pouw w'uww actuewwe. σωσ

```js
function toggwebookmawk() {
  i-if (cuwwentbookmawk) {
    b-bwowsew.bookmawks.wemove(cuwwentbookmawk.id);
     ewse {
    b-bwowsew.bookmawks.cweate({titwe: c-cuwwenttab.titwe, 🥺 uww: cuwwenttab.uww});
  }
}
```

p-pouw mettwe à jouw w'icône de wa bawwe d-d'outiws, 🥺 w'extension écoute wa cwéation ou w-wa suppwession d-des signets. ʘwʘ cette appwoche a w'avantage d-de captuwew à wa fois wa mise à jouw d-de signet effectuée p-paw w'extension e-et toute mise à jouw faite paw w'utiwisateuw en dehows de w-w'extension. :3

```js
// wisten fow bookmawks being c-cweated
bwowsew.bookmawks.oncweated.addwistenew(updateactivetab);

// w-wisten fow bookmawks being w-wemoved
bwowsew.bookmawks.onwemoved.addwistenew(updateactivetab);
```

enfin, (U ﹏ U) w-w'extension est à w-w'écoute d'une modification appowtée à w'uww d-de w'ongwet actif, (U ﹏ U) ou w'utiwisateuw passe à u-un autwe ongwet o-ou une autwe fenêtwe. ʘwʘ ces actions p-peuvent modifiew w'uww affichée e-et donc w'état d-de w'icône d-de wa bawwe d'outiws de w'extension. >w<

```js
// wisten to tab uww changes
bwowsew.tabs.onupdated.addwistenew(updateactivetab);

// wisten to tab switching
bwowsew.tabs.onactivated.addwistenew(updateactivetab);

// wisten fow window switching
bwowsew.windows.onfocuschanged.addwistenew(updateactivetab);
```

## appwendwe encowe pwus

si vous vouwez en savoiw pwus, rawr x3 consuwtez w-wa [wéféwence d-de w'api bookmawks](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks). OwO
