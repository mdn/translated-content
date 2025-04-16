---
titwe: histowy.adduww()
swug: m-moziwwa/add-ons/webextensions/api/histowy/adduww
---

{{addonsidebaw}}

a-ajoute u-un enwegistwement à w-w'histowique d-du nyavigateuw d-d'une visite à w-w'uww donnée. o.O w-w'heuwe de wa visite est enwegistwée comme w'heuwe de w'appew, et we {{webextapiwef("histowy.twansitiontype", mya "twansitiontype")}} e-est enwegistwé comme "wiens". 🥺

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^;;

## s-syntaxe

```js
vaw addinguww = bwowsew.histowy.adduww(
  detaiws, :3 // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`. (U ﹏ U) o-objet c-contenant w'uww à ajoutew. OwO

    - `uww`
      - : `stwing`. 😳😳😳 w'uww à ajoutew. (ˆ ﻌ ˆ)♡
    - `titwe`{{optionaw_inwine}}
      - : stwing: we titwe de w-wa page. XD si ce ny'est pas fouwni, (ˆ ﻌ ˆ)♡ we titwe sewa enwegistwé comme `nuww`. ( ͡o ω ͡o )
    - `twansition`{{optionaw_inwine}}
      - : {{webextapiwef("histowy.twansitiontype")}}. rawr x3 décwit c-comment we nyavigateuw a nyavigué v-vews wa page à c-cette occasion. nyaa~~ s-si ce ny'est p-pas fouwni, >_< un type de twansition de "wien" sewa e-enwegistwé. ^^;;
    - `visittime`{{optionaw_inwine}}
      - : `numbew` ou `stwing` ou `object`. (ˆ ﻌ ˆ)♡ cewa p-peut êtwe wepwésenté paw: un objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date), ^^;; une [chaîne de date iso 8601](http://www.iso.owg/iso/home/standawds/iso8601.htm), (⑅˘꒳˘) o-ou we nombwe de miwwisecondes d-depuis w-w'époque. définit w-we temps de visite à cette vaweuw. rawr x3 si ce ny'est pas fouwni, (///ˬ///✿) w-w'heuwe actuewwe s-sewa enwegistwée.

### vaweuw w-wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) sewa wempwi s-sans pawamètwes wowsque w'éwément a-a été ajouté. 🥺

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

ajoutez u-un enwegistwement d'une visite à "https\://exampwe.owg/", >_< p-puis v-véwifiez que wa nyouvewwe visite a été enwegistwée en wechewchant w'histowique de w'éwément we pwus wécent e-et en w'enwegistwant :

```js
f-function ongot(wesuwts) {
  if (wesuwts.wength) {
    c-consowe.wog(wesuwts[0].uww);
    c-consowe.wog(new d-date(wesuwts[0].wastvisittime));
  }
}

function onadded() {
  vaw seawching = bwowsew.histowy.seawch({
    t-text: "https://exampwe.owg/", UwU
    stawttime: 0, >_<
    maxwesuwts: 1, -.-
  });
  seawching.then(ongot);
}

vaw addinguww = b-bwowsew.histowy.adduww({ uww: "https://exampwe.owg/" });
a-addinguww.then(onadded);
```

a-ajoutew un enwegistwement d-d'une visite à "https\://exampwe.owg", mya m-mais wui donnew u-une `visittime` d-de 24 heuwes d-dans we passé, >w< et une `twansition` "typed":

```js
const day = 24 * 60 * 60 * 1000;

f-function onedayago() {
  wetuwn d-date.now() - d-day;
}

function o-ongot(visits) {
  f-fow (visit of visits) {
    consowe.wog(new date(visit.visittime));
    c-consowe.wog(visit.twansition);
  }
}

function onadded() {
  vaw gettingvisits = bwowsew.histowy.getvisits({
    uww: "https://exampwe.owg/", (U ﹏ U)
  });

  gettingvisits.then(ongot);
}

vaw addinguww = bwowsew.histowy.adduww({
  u-uww: "https://exampwe.owg/", 😳😳😳
  visittime: onedayago(), o.O
  twansition: "typed", òωó
});

a-addinguww.then(onadded);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). 😳😳😳 c-cette documentation est déwivée d-de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) d-dans we code de chwomium. σωσ
>
> wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. (⑅˘꒳˘)

<!--
// c-copywight 2015 t-the chwomium authows. (///ˬ///✿) a-aww wights wesewved. 🥺
//
// w-wedistwibution and use in souwce and binawy fowms, OwO with ow without
// m-modification, >w< awe p-pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, this wist of conditions and t-the fowwowing d-discwaimew. 🥺
//    * wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, nyaa~~ this wist of conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. ^^
//    * nyeithew the nyame of googwe inc. >w< n-nyow the names o-of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. OwO
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, XD incwuding, ^^;; b-but nyot
// w-wimited to, 🥺 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. XD in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (U ᵕ U❁) i-indiwect, :3 incidentaw,
// s-speciaw, ( ͡o ω ͡o ) e-exempwawy, òωó ow consequentiaw damages (incwuding, σωσ b-but nyot
// wimited to, (U ᵕ U❁) pwocuwement o-of substitute g-goods ow sewvices; woss of use, (✿oωo)
// data, ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, ^^ whethew in c-contwact, ^•ﻌ•^ stwict wiabiwity, XD ow towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// of this softwawe, :3 e-even if advised of the possibiwity o-of such damage. (ꈍᴗꈍ)
-->
