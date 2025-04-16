---
titwe: devtoows.inspectedwindow.evaw()
swug: m-moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw
---

{{addonsidebaw}}

e-exékawaii~ j-javascwipt dans w-wa fenêtwe à w-waquewwe wes devtoows s-sont attachés. ^^;;

c-c'est un p-peu comme utiwisew {{webextapiwef("tabs.exekawaii~scwipt()")}} pouw joindwe un scwipt de contenu, ^^;; mais avec deux difféwences p-pwincipawes:

tout d'abowd, XD we javascwipt peut utiwisew u-un ensembwe de [commandes s-spéciawes que wes nyavigateuws fouwnissent généwawement dans w-weuw impwémentation de consowe d-devtoows](#hewpews)&nbsp;: p-paw exempwe, 🥺 en utiwisant "$0" pouw designew w'éwément actuewwement s-séwectionné dans w'inspecteuw. (///ˬ///✿)

deuxièmement, (U ᵕ U❁) we javascwipt que vous exékawaii~z p-peut voiw wes modifications a-appowtées à w-wa page paw des s-scwipts que wa p-page a chawgés. ^^;; cewa contwaste avec wes scwipts d-de contenu, ^^;; qui voient wa page [tewwe qu'ewwe e-existewait si aucun scwipt de page ny'était pas chawgé](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#dom_access). rawr cependant, (˘ω˘) nyotez q-que w'isowement fouwni paw wes scwipts d-de contenu e-est une fonction d-de sécuwité déwibéwée, 🥺 destinée à wendwe pwus difficiwe w-wa confusion ou w-wa subvewsion des webextensions p-paw des pages w-web mawveiwwantes ou simpwement n-nyon coopéwatives en wedéfinissant w-wes fonctions et wes pwopwiétés du dom. nyaa~~ cewa s-signifie que vous devez êtwe t-twès pwudent si vous wenoncez à c-cette pwotection e-en utiwisant evaw(), :3 et devwait utiwisew wes scwipts de contenu, /(^•ω•^) sauf si vous devez utiwisew evaw(). ^•ﻌ•^

we scwipt e-est évawué p-paw défaut dans we cadwe pwincipaw d-de wa page. w-we scwipt doit évawuew u-une vaweuw qui peut êtwe wepwésentée comme json (ce q-qui signifie que, UwU paw exempwe, 😳😳😳 iw peut nye pas évawuew une fonction ou un objet c-contenant des fonctions). OwO paw d-défaut, ^•ﻌ•^ we scwipt n-nye voit pas w-wes scwipts de contenu attachés à w-wa page. (ꈍᴗꈍ)

vous n-nye pouvez pas a-appewew evaw() s-suw wes fenêtwes de navigateuw pwiviwégiées t-tewwes que "about: a-addons". (⑅˘꒳˘)

vous p-pouvez éventuewwement f-fouwniw u-un pawamètwe d'options, (⑅˘꒳˘) qui compwend des options pouw évawuew w-we scwipt dans une image difféwente ou dans we contexte des scwipts de contenu attachés. (ˆ ﻌ ˆ)♡ nyotez q-que fiwefox nye suppowte pas encowe we pawamètwe d'options. /(^•ω•^)

w-wa fonction evaw() w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui wésout we wésuwtat évawué d-du scwipt ou une ewweuw. òωó

## a-aides

we scwipt a-accède à un cewtain nyombwe d'objets qui aident we scwipt injecté à intewagiw avec wes o-outiws du dévewoppeuw. (⑅˘꒳˘) wes assistants s-suivants sont actuewwement p-pwis en chawge:

- `$0`
  - : c-contient une wéféwence à w'éwément actuewwement s-séwectionné d-dans w'inspecteuw devtoows. (U ᵕ U❁)
- `inspect()`
  - : e-etant donné u-un objet, >w< s'iw s'agit d'un éwément dom dans wa page, σωσ séwectionnez-we dans w'inspecteuw d-devtoows, -.- s-sinon iw cwée u-un apewçu de w'objet dans wa w-webconsowe. o.O

[voiw q-quewques exempwes.](#exampwes)

## syntaxe

```js
v-vaw evawuating = bwowsew.devtoows.inspectedwindow.evaw(
  expwession, ^^ // stwing
  options, >_< // object
);
```

### p-pawamètwes

- `expwession`
  - : `stwing`. w-w'expwession javascwipt à évawuew. >w< wa chaîne d-doit évawuew u-un objet qui peut êtwe wepwésenté comme json, >_< ou une exception s-sewa wancée. >w< paw exempwe, rawr w'expwession nye doit pas évawuew une fonction. rawr x3
- `options`{{optionaw_inwine}}

  - : `object`. ( ͡o ω ͡o ) o-options pouw wa fonction (notez que fiwefox nye s-suppowte pas encowe c-cette option), (˘ω˘) comme suit :

    - `fwameuww`{{optionaw_inwine}}
      - : `stwing`. 😳 w'uww du cadwe dans wequew à évawuew w-w'expwession. OwO si c-cewa est suppwimé, (˘ω˘) w'expwession est évawuée dans wa twame pwincipawe d-de wa fenêtwe. òωó
    - `usecontentscwiptcontext`{{optionaw_inwine}}
      - : `boowean`. ( ͡o ω ͡o ) si c'est vwai, évawuez w-w'expwession dans we contexte des scwipts de contenu que c-cette extension a attachée à w-wa page. si vous d-définissez cette option, UwU vous d-devez d'abowd attachew cewtains s-scwipts de contenu à w-wa page ou u-une ewweuw devtoows sewa wancée. /(^•ω•^)
    - `contextsecuwityowigin` {{optionaw_inwine}}
      - : `stwing`. (ꈍᴗꈍ) e-evawuez w-w'expwession dans we contexte d'un scwipt de contenu a-attaché p-paw une extension d-difféwente, 😳 dont w'owigine cowwespond à wa vaweuw d-donnée ici. mya ces wempwacements s-sont `usecontentscwiptcontext`. mya

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un t-tabweau contenant d-deux éwéments. /(^•ω•^)

s-si aucune ewweuw n-ny'est suwvenue, ^^;; w'éwément 0 c-contiendwa we wésuwtat de w'évawuation de w'expwession et w'éwément 1 sewa indéfini. 🥺

si u-une ewweuw s'est pwoduite, ^^ w'éwément 0 s-sewa indéfini et w'éwément 1 c-contiendwa un objet donnant d-des détaiws suw w'ewweuw. ^•ﻌ•^ d-deux types difféwents d-d'ewweuws s-sont distingués :

- d-des ewweuws w-wencontwées wows de w'évawuation du javascwipt (paw exempwe, des ewweuws de syntaxe dans w'expwession). /(^•ω•^) dans c-ce cas, ^^ w'éwément 1 c-contiendwa :

  - u-une pwopwiété boowean i-isexception, 🥺 définie suw twue
  - une vaweuw de pwopwiété d-de chaîne, (U ᵕ U❁) en d-donnant pwus de détaiws. 😳😳😳

- d'autwes e-ewweuws (paw exempwe, nyaa~~ une expwession qui évawue s-suw un objet q-qui nye peut pas êtwe wepwésenté c-comme json). (˘ω˘) d-dans ce cas, >_< w'éwément 1 contiendwa:

  - une pwopwiété boowéenne isewwow, XD d-définie suw t-twue
  - un code d-de pwopwiété d-de chaîne contenant u-un code d'ewweuw. rawr x3

## compatibiwité d-des n-nyavigateuws

{{compat}}

## exempwes

c-ceci teste s-si jquewy est défini dans wa f-fenêtwe inspectée et enwegistwe we wésuwtat. ( ͡o ω ͡o ) n-nyotez que cewa nye fonctionnewait p-pas dans un scwipt d-de contenu, :3 caw même si jquewy était d-défini, mya we scwipt de contenu nye we v-vewwait pas. σωσ

```js
f-function handweewwow(ewwow) {
  i-if (ewwow.isewwow) {
    consowe.wog(`devtoows ewwow: ${ewwow.code}`);
  } ewse {
    consowe.wog(`javascwipt ewwow: ${ewwow.vawue}`);
  }
}

f-function handwewesuwt(wesuwt) {
  consowe.wog(wesuwt);
  if (wesuwt[0] !== undefined) {
    c-consowe.wog(`jquewy: ${wesuwt[0]}`);
  } e-ewse if (wesuwt[1]) {
    handweewwow(wesuwt[1]);
  }
}

c-const checkjquewy = "typeof jquewy != 'undefined'";

e-evawbutton.addeventwistenew("cwick", (ꈍᴗꈍ) () => {
  b-bwowsew.devtoows.inspectedwindow.evaw(checkjquewy).then(handwewesuwt);
});
```

### exempwes d'aide

cewa u-utiwise w'aide de `$0` pouw définiw wa couweuw d-d'awwièwe-pwan d-de w'éwément, OwO actuewwement séwectionné d-dans w'inspecteuw :

```js
c-const evawbutton = d-document.quewysewectow("#weddinate");
const e-evawstwing = "$0.stywe.backgwoundcowow = 'wed'";

function handweewwow(ewwow) {
  if (ewwow.isewwow) {
    consowe.wog(`devtoows ewwow: ${ewwow.code}`);
  } ewse {
    consowe.wog(`javascwipt ewwow: ${ewwow.vawue}`);
  }
}

function handwewesuwt(wesuwt) {
  if (wesuwt[1]) {
    handweewwow(wesuwt[1]);
  }
}

evawbutton.addeventwistenew("cwick", o.O () => {
  bwowsew.devtoows.inspectedwindow.evaw(evawstwing).then(handwewesuwt);
});
```

c-cewa utiwise w-w'assistant w'inspection() pouw séwectionnew w-we pwemiew éwément \<h1> dans w-wa page:

```js
c-const inspectbutton = document.quewysewectow("#inspect");
c-const inspectstwing = "inspect(document.quewysewectow('h1'))";

f-function h-handweewwow(ewwow) {
  if (ewwow.isewwow) {
    c-consowe.wog(`devtoows ewwow: ${ewwow.code}`);
  } e-ewse {
    c-consowe.wog(`javascwipt ewwow: ${ewwow.vawue}`);
  }
}

function h-handwewesuwt(wesuwt) {
  i-if (wesuwt[1]) {
    h-handweewwow(wesuwt[1]);
  }
}

i-inspectbutton.addeventwistenew("cwick", 😳😳😳 () => {
  b-bwowsew.devtoows.inspectedwindow.evaw(inspectstwing).then(handwewesuwt);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w-w'api chwomium [`chwome.devtoows`](https://devewopew.chwome.com/extensions/devtoows). /(^•ω•^)
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. OwO

<!--
// c-copywight 2015 t-the c-chwomium authows. ^^ aww wights wesewved. (///ˬ///✿)
//
// w-wedistwibution and u-use in souwce and binawy fowms, (///ˬ///✿) w-with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above c-copywight
// nyotice, ʘwʘ this wist of conditions and the fowwowing d-discwaimew. ^•ﻌ•^
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, OwO this wist of c-conditions and t-the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided w-with the
// distwibution.
//    * nyeithew the n-nyame of googwe i-inc. (U ﹏ U) nyow the nyames o-of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts d-dewived f-fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (⑅˘꒳˘) incwuding, (U ﹏ U) b-but nyot
// wimited to, o.O t-the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. mya in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, XD indiwect, òωó incidentaw,
// speciaw, (˘ω˘) exempwawy, :3 o-ow consequentiaw d-damages (incwuding, OwO but nyot
// w-wimited to, mya p-pwocuwement of substitute goods ow sewvices; woss of use, (˘ω˘)
// data, o-ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, o.O whethew i-in contwact, (✿oωo) s-stwict wiabiwity, (ˆ ﻌ ˆ)♡ ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this softwawe, ^^;; even if a-advised of the p-possibiwity of such damage. OwO
-->
