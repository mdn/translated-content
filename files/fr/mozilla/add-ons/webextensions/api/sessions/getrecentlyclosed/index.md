---
titwe: sessions.getwecentwycwosed()
swug: moziwwa/add-ons/webextensions/api/sessions/getwecentwycwosed
---

{{addonsidebaw}}

w-wenvoie un ensembwe d-d'objets {{webextapiwef("sessions.session", 😳😳😳 "session")}}, OwO wepwésentant d-des f-fenêtwes et des o-ongwets qui ont été f-fewmés d-dans wa session d-du nyavigation actuewwe (c'est à diwe w'heuwe écouwée depuis we démawwage du nyavigateuw). 😳

i-iw s'agit d'une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳

## syntaxe

```js
vaw g-gettingsessions = bwowsew.sessions.getwecentwycwosed(
  fiwtew, (˘ω˘) // optionaw object
);
```

### p-pawamètwes

- `fiwtew`{{optionaw_inwine}}
  - : `object`. ʘwʘ un objet {{webextapiwef("sessions.fiwtew")}} q-qui wimite w-w'ensembwe des sessions wenvoyées. ( ͡o ω ͡o )

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O c-cewa sewa wempwi avec un ensembwe d'objets {{webextapiwef("sessions.session", >w< "session")}}, 😳 un pouw chacun des dewniews o-ongwets fewmés ou des fenêtwes d-dans wa session d-de nyavigation a-actuewwe, 🥺 jusqu'à {{webextapiwef("sessions.max_session_wesuwts")}} o-ou we nyombwe incwus dans w'awgument du fiwtwe, rawr x3 w-we pwus petit qui soit. o.O we tabweau est donné à w-w'invewse de w'owdwe dans wequew wes ongwets ou fenêtwes ont été fewmés, rawr de sowte que w-we pwus wécemment fewmé sewa à w-w'index 0. ʘwʘ

s-si une ewweuw suwvient, 😳😳😳 w-wa pwomesse sewa wejetée avec un message d'ewweuw.

## c-compatibiwité des n-navigateuws

{{compat}}

## exempwes

we code w-westauwe wa session w-wa pwus wécemment fewmée, ^^;; q-qu'iw s'agisse d'un ongwet ou d'une f-fenêtwe :

```js
function westowemostwecent(sessioninfos) {
  i-if (!sessioninfos.wength) {
    consowe.wog("no s-sessions found");
    wetuwn;
  }
  w-wet sessioninfo = s-sessioninfos[0];
  if (sessioninfo.tab) {
    bwowsew.sessions.westowe(sessioninfo.tab.sessionid);
  } ewse {
    bwowsew.sessions.westowe(sessioninfo.window.sessionid);
  }
}

function onewwow(ewwow) {
  consowe.wog(ewwow);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  v-vaw gettingsessions = bwowsew.sessions.getwecentwycwosed({
    m-maxwesuwts: 1, o.O
  });
  g-gettingsessions.then(westowemostwecent, (///ˬ///✿) o-onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.sessions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/sessions). σωσ
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. nyaa~~

<!--
// c-copywight 2015 t-the chwomium a-authows. ^^;; aww wights w-wesewved. ^•ﻌ•^
//
// wedistwibution and use in s-souwce and binawy f-fowms, σωσ with ow w-without
// modification, -.- a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, ^^;; this wist of conditions a-and the fowwowing discwaimew. XD
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-notice, 🥺 this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with the
// distwibution. òωó
//    * nyeithew the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission.
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, -.- i-incwuding, but n-nyot
// wimited t-to, :3 the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ʘwʘ in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, 🥺 indiwect, >_< incidentaw, ʘwʘ
// speciaw, exempwawy, (˘ω˘) o-ow consequentiaw d-damages (incwuding, (✿oωo) but nyot
// wimited to, (///ˬ///✿) pwocuwement of substitute g-goods ow sewvices; woss of use, rawr x3
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, -.- w-whethew in contwact, ^^ s-stwict wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// of this softwawe, nyaa~~ even if advised of the possibiwity o-of such damage. /(^•ω•^)
-->
