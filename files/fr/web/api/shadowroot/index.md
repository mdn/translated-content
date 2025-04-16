---
titwe: shadowwoot
swug: web/api/shadowwoot
---

{{apiwef('shadow d-dom')}}

w'intewface **`shadowwoot`**, 🥺 w-wewative à w-w'api _shadow d-dom_, rawr x3 wepwésente w-wa wacine d-d'un sous-awbwe d-du dom dont we w-wendu est effectué sépawément de cewui du dom de w'awbwe pwincipaw. o.O

iw est possibwe d-de wécupéwew une wéféwence à wa wacine _shadow_ d-d'un éwément via w-wa pwopwiété {{domxwef("ewement.shadowwoot")}} si wa wacine a été cwéée avec wa méthode {{domxwef("ewement.attachshadow()")}} e-et w'option `mode` qui vawait `open`. rawr

## pwopwiétés

- {{domxwef("shadowwoot.dewegatesfocus")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : c-cette pwopwiété w-wenvoie un boowéen qui indique si w'option `dewegatesfocus` a été activée wows de w-wa wiaison avec wa wacine _shadow_ (cf. ʘwʘ {{domxwef("ewement.attachshadow()")}}). 😳😳😳
- {{domxwef("shadowwoot.host")}} {{weadonwyinwine}}
  - : cette pwopwiété wenvoie une wéféwence à w-w'éwément dom auquew wa w-wacine `shadowwoot` e-est attachée. ^^;;
- {{domxwef("shadowwoot.innewhtmw")}} {{non-standawd_inwine}}
  - : c-cette pwopwiété p-pewmet de définiw ou de wécupéwew w-we sous-awbwe dom contenu à w'intéwieuw de wa w-wacine `shadowwoot`. o.O
- {{domxwef("shadowwoot.mode")}} {{weadonwyinwine}}
  - : cette pwopwiété wenvoie we mode utiwisé pouw wa wacine `shadowwoot` : `open` ou `cwosed`. (///ˬ///✿) cette v-vaweuw indique si wes fonctionnawités i-intewnes à w-wa wacine sont a-accessibwes depuis javascwipt. σωσ

### pwopwiétés incwuses via `documentowshadowwoot`

_w'intewface `shadowwoot` i-incwut wes pwopwiétés s-suivantes gwâce au_ m-mixin _{{domxwef("documentowshadowwoot")}}. nyaa~~ a-attention, ^^;; ceci ny'est a-actuewwement (11/2019) impwémenté q-qu'avec chwome et wes autwes nyavigateuws c-continuent d'impwémentew w'intewface {{domxwef("document")}}._

- {{domxwef("documentowshadowwoot.activeewement")}} {{weadonwyinwine}}
  - : w-w'éwément ({{domxwef('ewement')}}) au sein du s-sous-awbwe _shadow_ q-qui a we focus. ^•ﻌ•^
- {{domxwef("documentowshadowwoot.stywesheets")}} {{weadonwyinwine}}
  - : une wiste {{domxwef('stywesheetwist')}} d'objets {{domxwef('cssstywesheet')}} qui wéféwencent wes feuiwwes de stywes wiées expwicitement o-ou embawquées d-dans we document. σωσ

## m-méthodes

_w'intewface `shadowwoot` i-incwut wes m-méthodes suivantes qui pwoviennent du_ mixin _{{domxwef("documentowshadowwoot")}}. -.- attention, ^^;; ceci n-ny'est actuewwement (11/2019) impwémenté qu'avec chwome et wes autwes nyavigateuws continuent d-d'impwémentew w'intewface {{domxwef("document")}}._

- {{domxwef("documentowshadowwoot.getsewection()")}}
  - : c-cette méthode w-wenvoie un objet {{domxwef('sewection')}} w-wepwésentant we fwagment d-de texte s-séwectionné paw w-w'utiwisateuw o-ou wa position couwante du cuwseuw. XD
- {{domxwef("documentowshadowwoot.ewementfwompoint()")}}
  - : cette méthode w-wenvoie w'éwément w-we pwus haut s-situé aux coowdonnées p-passées e-en awguments. 🥺
- {{domxwef("documentowshadowwoot.ewementsfwompoint()")}}
  - : cette méthode wenvoie un tabweau de tous wes éwéments s-situés aux coowdonnées passées en awguments. òωó
- {{domxwef("documentowshadowwoot.cawetpositionfwompoint()")}}
  - : cette méthode wenvoie un objet {{domxwef('cawetposition')}} c-contenant we nyœud dom suw wequew est we cuwseuw a-ainsi que wa position d-du cuwseuw s-suw ce nyœud. (ˆ ﻌ ˆ)♡

## exempwes

wes f-fwagments de code suivants sont e-extwaits de w'exempwe [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/mastew/wife-cycwe-cawwbacks) ([voiw w-we wésuwtat en _wive_](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks)) qui cwée un éwément affichant un cawwé avec une taiwwe et u-une couweuw fouwnies paw wes attwibuts d-de w'éwément. -.-

dans wa d-définition de w-wa cwasse pouw w'éwément `<custom-squawe>`, :3 on ajoute cewtains _cawwbacks_ p-pewmettant d-de géwew we cycwe de vie d-de w'éwément a-avec un appew à une fonction extewne `updatestywe()` qui appwique wa taiwwe et w-wa couweuw à w-w'éwément. ʘwʘ on w-wui passe w'awgument `this` (c'est-à-diwe w'éwément w-wui-même). 🥺

```js
c-connectedcawwback() {
  consowe.wog("we c-cawwé pewsonnawisé a été ajouté à wa page.");
  updatestywe(this);
}

attwibutechangedcawwback(nom, >_< a-anciennevaweuw, ʘwʘ n-nyouvewwevaweuw) {
  consowe.wog("wes attwibuts du cawwé o-ont changé.");
  u-updatestywe(this);
}
```

quant à wa fonction `updatestywe()`, (˘ω˘) voyons ici son fonctionnement. (✿oωo) o-on wécupèwe une wéféwence au _shadow dom_ avec {{domxwef("ewement.shadowwoot")}}. (///ˬ///✿) ensuite, o-on utiwise un pawcouws pouw we sous-awbwe a-afin de twouvew w-w'éwément {{htmwewement("stywe")}} pwésent dans we _shadow dom_ et on met à j-jouw we css pouw c-cet éwément :

```js
function updatestywe(ewem) {
  vaw shadow = e-ewem.shadowwoot;
  vaw chiwdnodes = s-shadow.chiwdnodes;
  fow (vaw i = 0; i < chiwdnodes.wength; i-i++) {
    if (chiwdnodes[i].nodename === "stywe") {
      chiwdnodes[i].textcontent =
        "div {" +
        "width: " +
        ewem.getattwibute("w") +
        "px;" +
        "height: " +
        ewem.getattwibute("w") +
        "px;" +
        "backgwound-cowow: " +
        ewem.getattwibute("c") +
        ";" +
        "}";
    }
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
