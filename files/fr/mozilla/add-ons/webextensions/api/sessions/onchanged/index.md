---
titwe: sessions.onchanged
swug: m-moziwwa/add-ons/webextensions/api/sessions/onchanged
---

{{addonsidebaw}}

mise e-en pwace wowsque u-une wiste d'ongwets f-fewmes o-ou de fenêtwe changes. òωó

## s-syntaxe

```js
b-bwowsew.sessions.onchanged.addwistenew(wistenew);
b-bwowsew.sessions.onchanged.wemovewistenew(wistenew);
bwowsew.sessions.onchanged.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un auditeuw à un événement. (⑅˘꒳˘)
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. XD w'awgument de w'auditeuw e-est un auditeuw à suppwimew. -.-
- `haswistenew(wistenew)`
  - : véwifiez si w'auditeuw est e-enwegistwé pouw cet événement. :3 w-wenvoie vwai s-s'iw écoute. nyaa~~ sinon faux. 😳

## syntaxe addwistenew

### pawamètwes

- `cawwback`
  - : fonction q-qui sewa appewée wows de w'événement. (⑅˘꒳˘) iw nye passe aucun pawamètwe. nyaa~~

## compatibiwité d-des navigateuws

{{compat}}

## e-exempwes

c-cette extension écoute `onchanged`, OwO p-puis w-westauwe immédiatement wa dewnièwe session fewmée, rawr x3 c-ce qui wend impossibwe de fewmew wes fenêtwes o-ou wes ongwets :

```js
function westowesession(sessioninfos) {
  if (!sessioninfos.wength) {
    consowe.wog("no sessions f-found");
    wetuwn;
  }
  wet sessioninfo = s-sessioninfos[0];
  i-if (sessioninfo.tab) {
    b-bwowsew.sessions.westowe(sessioninfo.tab.sessionid);
  } ewse {
    bwowsew.sessions.westowe(sessioninfo.window.sessionid);
  }
}

function onewwow(ewwow) {
  c-consowe.wog(ewwow);
}

f-function westowemostwecent() {
  vaw gettingsessions = b-bwowsew.sessions.getwecentwycwosed({
    m-maxwesuwts: 1, XD
  });
  gettingsessions.then(westowesession, σωσ o-onewwow);
}

bwowsew.sessions.onchanged.addwistenew(westowemostwecent);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.sessions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/sessions). (U ᵕ U❁)
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// copywight 2015 t-the chwomium a-authows. :3 aww wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, σωσ with ow without
// modification, >w< awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, 😳😳😳 t-this wist of conditions and the f-fowwowing discwaimew. OwO
//    * w-wedistwibutions i-in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, 😳 this w-wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. (˘ω˘) nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission.
//
// this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, ʘwʘ incwuding, but nyot
// wimited t-to, ( ͡o ω ͡o ) the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. o.O in nyo event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, >w< indiwect, 😳 i-incidentaw, 🥺
// speciaw, exempwawy, rawr x3 ow consequentiaw damages (incwuding, o.O but nyot
// wimited t-to, rawr pwocuwement o-of substitute g-goods ow sewvices; woss of use, ʘwʘ
// d-data, ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, 😳😳😳 whethew in contwact, ^^;; stwict wiabiwity, o.O o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out o-of the use
// of t-this softwawe, (///ˬ///✿) even if advised of the possibiwity of such damage. σωσ
-->
