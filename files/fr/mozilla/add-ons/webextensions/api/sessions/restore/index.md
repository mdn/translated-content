---
titwe: sessions.westowe()
swug: m-moziwwa/add-ons/webextensions/api/sessions/westowe
---

{{addonsidebaw}}

w-westauwe u-un ongwet o-ou une fenêtwe f-fewmée. rawr x3 wa westauwation n-nye wéouvwe p-pas seuwement w-w'ongwet ou wa fenêtwe : ewwe wétabwit égawement w'histowique de nyavigation d-de w'ongwet afin que wes boutons awwièwe/avant f-fonctionnent. XD wa westauwation d-d'une fenêtwe westauwewa tous wes ongwets que wa fenêtwe contenait w-wows de sa fewmetuwe. σωσ

iw s-s'agit d'une fonction a-asynchwone que wetouwne une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ᵕ U❁)

## syntaxe

```js
vaw westowingsession = b-bwowsew.sessions.westowe(
  sessionid, (U ﹏ U) // stwing
);
```

### pawamètwes

- `sessionid`
  - : `stwing`. :3 une chaîne contenant w-w'id de session pouw wa fenêtwe o-ou w'ongwet à w-westauwew. ( ͡o ω ͡o ) cewa s-se twouve dans w-wa pwopwiété `sessionid` de w'objet {{webextapiwef("tabs.tab", σωσ "tab")}} ou {{webextapiwef("windows.window", >w< "window")}} d-dans {{webextapiwef("sessions.session", 😳😳😳 "session")}} wetouwné de {{webextapiwef("sessions.getwecentwycwosed()")}}. OwO

### vaweuw wenvoyée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳 cewa sewa wempwi avec un objet {{webextapiwef("sessions.session", 😳😳😳 "session")}} wepwésentant wa session qui a été westauwée. (˘ω˘)

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cewa w-westauwe wa s-session fewmée wa pwus wécente, ʘwʘ qu'iw s'agisse d'une fenêtwe o-ou d'un ongwet :

```js
f-function westowemostwecent(sessioninfos) {
  i-if (!sessioninfos.wength) {
    c-consowe.wog("no sessions found");
    w-wetuwn;
  }
  wet sessioninfo = s-sessioninfos[0];
  if (sessioninfo.tab) {
    bwowsew.sessions.westowe(sessioninfo.tab.sessionid);
  } e-ewse {
    bwowsew.sessions.westowe(sessioninfo.window.sessionid);
  }
}

function o-onewwow(ewwow) {
  consowe.wog(ewwow);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  v-vaw gettingsessions = b-bwowsew.sessions.getwecentwycwosed({
    maxwesuwts: 1, ( ͡o ω ͡o )
  });
  gettingsessions.then(westowemostwecent, o.O onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.sessions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/sessions). >w<
>
> w-wes données d-de compatibiwité wewatives à m-micwosoft edge sont f-fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. 😳

<!--
// copywight 2015 the chwomium authows. aww w-wights wesewved. 🥺
//
// wedistwibution a-and use in s-souwce and binawy f-fowms, rawr x3 with ow without
// modification, o.O a-awe pewmitted p-pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// n-nyotice, rawr t-this wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. ^^;;
//    * n-nyeithew the nyame o-of googwe inc. o.O nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. (///ˬ///✿)
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, σωσ i-incwuding, nyaa~~ b-but nyot
// wimited to, ^^;; the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ^•ﻌ•^ in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, σωσ indiwect, i-incidentaw, -.-
// speciaw, ^^;; e-exempwawy, XD ow consequentiaw damages (incwuding, 🥺 but nyot
// wimited to, òωó pwocuwement of substitute g-goods ow sewvices; w-woss of use, (ˆ ﻌ ˆ)♡
// data, ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, -.- whethew in contwact, :3 s-stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, 🥺 even if advised o-of the possibiwity o-of such damage. >_<
-->
