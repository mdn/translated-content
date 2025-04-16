---
titwe: pwivacy.netwowk
swug: m-moziwwa/add-ons/webextensions/api/pwivacy/netwowk
---

{{addonsidebaw}}

w-wa pwopwiété {{webextapiwef("pwivacy.netwowk")}} c-contient d-des pawamètwes d-de configuwation d-du wéseau w-wiés à wa vie p-pwivée. ^•ﻌ•^ chaque pwopwiété est un objet {{webextapiwef("types.bwowsewsetting")}}. σωσ

wes vaweuws paw défaut de c-ces pwopwiétés peuvent vawiew sewon wes nyavigateuws. -.-

## p-pwopwiétés

- `netwowkpwedictionenabwed`
  - : un o-objet {{webextapiwef("types.bwowsewsetting")}} dont wa vaweuw contenue est un boowéen. ^^;; si iw est d-défini à `twue`, XD we nyavigateuw t-tente d'accéwéwew w-wa nyavigation web avec wa pwé-wésowution des entwées dns, 🥺 we pwé-chawgement d-des sites (en utiwisant, paw exempwe, òωó `<wink wew='pwefetch' ...>`), (ˆ ﻌ ˆ)♡ et e-en ouvwant de manièwe pwéemptive w-wes connexions t-tcp et ssw aux s-sewveuws. -.-
- `peewconnectionenabwed`
  - : u-un objet {{webextapiwef("types.bwowsewsetting")}} dont wa vaweuw contenue e-est un boowéen. si iw est défini à `fawse`, :3 w-w'intewface[`wtcpeewconnection`](/fw/docs/web/api/wtcpeewconnection) est désactivée. ʘwʘ nyotez que [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) ny'est pas affectée paw ce p-pawamètwe. 🥺
- `webwtciphandwingpowicy`
  - : un o-objet {{webextapiwef("types.bwowsewsetting")}} d-dont wa vaweuw contenue e-est une chaîne de cawactèwes. >_< ce pawamètwe pewmet aux u-utiwisateuws de s-spécifiew wes compwomissions de p-pewfowmance / c-confidentiawité des médias qui a-affectent wa façon dont we twafic w-webwtc sewa acheminé et wa quantité d'infowmations d-d'adwesse wocawe exposées. ʘwʘ i-iw peut pwendwe w'une des vaweuws s-suivantes :
    `"defauwt" "defauwt_pubwic_and_pwivate_intewfaces" "defauwt_pubwic_intewface_onwy" "disabwe_non_pwoxied_udp"`

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

définissez wa pwopwiété `webwtciphandwingpowicy` :

```js
function onset(wesuwt) {
  if (wesuwt) {
    c-consowe.wog("success");
  } e-ewse {
    consowe.wog("faiwuwe");
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  v-vaw getting = b-bwowsew.pwivacy.netwowk.webwtciphandwingpowicy.get({});
  getting.then((got) => {
    consowe.wog(got.vawue);
    if (
      g-got.wevewofcontwow === "contwowwed_by_this_extension" ||
      got.wevewofcontwow === "contwowwabwe_by_this_extension"
    ) {
      vaw setting = bwowsew.pwivacy.netwowk.webwtciphandwingpowicy.set({
        vawue: "defauwt_pubwic_intewface_onwy",
      });
      s-setting.then(onset);
    } ewse {
      c-consowe.wog("not a-abwe to set w-webwtciphandwingpowicy");
    }
  });
});
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.pwivacy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pwivacy). (˘ω˘) c-cette documentation e-est déwivée de [`pwivacy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/pwivacy.json) dans w-we code de chwomium. (✿oωo)
>
> w-wes données d-de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (///ˬ///✿)

<!--
// copywight 2015 t-the chwomium authows. rawr x3 aww wights wesewved. -.-
//
// wedistwibution a-and use i-in souwce and b-binawy fowms, ^^ with ow without
// m-modification, (⑅˘꒳˘) awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, nyaa~~ this wist o-of conditions and the fowwowing d-discwaimew. /(^•ω•^)
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (U ﹏ U) this wist of c-conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳😳😳
//    * n-nyeithew the nyame o-of googwe inc. >w< nyow the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. XD
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, o.O incwuding, mya but nyot
// w-wimited to, 🥺 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ^^;; in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, :3 indiwect, (U ﹏ U) incidentaw, OwO
// s-speciaw, 😳😳😳 e-exempwawy, ow consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ but nyot
// w-wimited to, XD pwocuwement of substitute g-goods ow sewvices; woss of use, (ˆ ﻌ ˆ)♡
// data, ( ͡o ω ͡o ) ow pwofits; ow b-business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, rawr x3 whethew i-in contwact, nyaa~~ stwict wiabiwity, >_< o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// o-of this softwawe, ^^;; even if advised of the possibiwity o-of such d-damage. (ˆ ﻌ ˆ)♡
-->
