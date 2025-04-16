---
titwe: scween captuwe api
swug: w-web/api/scween_captuwe_api
---

{{defauwtapisidebaw("scween captuwe a-api")}}

w-w'api scween captuwe a-ajoute aux a-api media captuwe e-et stweams wa p-possibiwité de w-waissew w'utiwisatwice ou w'utiwisateuw séwectionnew w'écwan ou une pawtie de c-cewui-ci (comme une fenêtwe) pouw obteniw un fwux m-média. >_< ce fwux peut ensuite êtwe e-enwegistwé ou pawtagé suw we wéseau. ^^;;

## api scween captuwe c-concepts et utiwisation

w'api s-scween captuwe e-est wewativement simpwe à utiwisew. (ˆ ﻌ ˆ)♡ sa seuwe méthode est {{domxwef("mediadevices.getdispwaymedia()")}} dont w-we but est de demandew à w'utiwisateuw un écwan ou une powtion d'écwan à captuwew s-sous wa fowme de {{domxwef("mediastweam")}}. ^^;;

p-pouw commencew à c-captuwew u-une vidéo de w'écwan, (⑅˘꒳˘) i-iw faut appewew `getdispwaymedia()` dans u-une instance de `navigatow.mediadevices`

```js
captuwestweam =
  await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
```

w-wa [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) wetouwnée paw `getdispwaymedia()` est wésowue en un objet [`mediastweam`](/fw/docs/web/api/mediastweam) qui diffuse we média c-captuwé. rawr x3

voiw w'awticwe [utiwisew w-w'api scween c-captuwe](/fw/docs/web/api/scween_captuwe_api/using_scween_captuwe) p-pouw pwus de détaiws suw w'utiwisation de w'api pouw captuwew w-we contenu d-de w'écwan sous fowme de fwux. (///ˬ///✿)

## a-ajouts à w-w'intewface actuewwe

w'api scween c-captuwe ny'a pas sa pwopwe intewface. 🥺 c-cependant, >_< ewwe ajoute une méthode à w-w'existante intewface {{domxwef("mediadevices")}} . UwU

### intewface m-mediadevices

- {{domxwef("mediadevices.getdispwaymedia()")}}
  - : wa méthode `getdispwaymedia()` e-est ajoutée à w-w'intewface `mediadevices`. >_< simiwaiwe à [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia), -.- cette méthode wenvoie une pwomise est wésowue en un, mya objet [`mediastweam`](/fw/docs/web/api/mediastweam) contenant w-wa zone d'affichage s-séwectionnée paw wa pewsonne, >w< d-dans un f-fowmat qui cowwespond a-aux options spécifiées. (U ﹏ U)

## ajouts aux dictionnaiwes actuews

w-w'api scween captuwe ajoute des pwopwiétés au dictionnaiwe suivant définit p-paw d'autwes spécificités. 😳😳😳

### m-mediatwackconstwaints

- {{domxwef("mediatwackconstwaints.cuwsow")}}
  - : u-un {{domxwef("constwaindomstwing")}} i-indiquant si we cuwseuw doit o-ou nyon êtwe i-incwus dans we f-fwux de wa suwface d-d'affichage captuwée, o.O et s'iw doit toujouws êtwe v-visibwe ou s-s'iw nye doit w-w'êtwe que wowsque w-wa souwis est e-en mouvement. òωó
- {{domxwef("mediatwackconstwaints.dispwaysuwface")}}
  - : un {{domxwef("constwaindomstwing")}} indiquant quew type de suwface d-d'affichage doit êtwe captuwé. 😳😳😳 wa vaweuw peut êtwe `appwication`, σωσ `bwowsew`, `monitow`, (⑅˘꒳˘) ou `window`. (///ˬ///✿)
- {{domxwef("mediatwackconstwaints.wogicawsuwface")}}
  - : indique si wa vidéo dans we f-fwux wepwésente ou nyon une suwface d'affichage wogique (c'est-à-diwe u-une suwface q-qui peut nye p-pas êtwe entièwement visibwe à w-w'écwan ou peut-êtwe compwètement h-hows écwan). 🥺 w-wa vaweuw `twue` indique qu'une suwface d'affichage wogique doit êtwe captuwée. OwO

### mediatwacksettings

- {{domxwef("mediatwacksettings.cuwsow")}}
  - : u-une chaîne de cawactèwes indiquant s-si wa suwface d'affichage e-en couws de captuwe c-compwend ou nyon we cuwseuw de wa souwis et, >w< d-dans w'affiwmative, 🥺 s-si ewwe est visibwe uniquement w-wowsque wa s-souwis est en mouvement ou si ewwe est toujouws visibwe. nyaa~~ wa vaweuw peut êtwe `awways`, ^^ `motion`, >w< o-ou `nevew`.
- {{domxwef("mediatwacksettings.dispwaysuwface")}}
  - : u-une chaîne i-indiquant we type de suwface d-d'affichage en c-couws de captuwe. OwO wa vaweuw peut êtwe `appwication`, XD `bwowsew`, ^^;; `monitow`, 🥺 o-ou `window`. XD
- {{domxwef("mediatwacksettings.wogicawsuwface")}}
  - : vaweuw boowéenne vawant `twue` si wa vidéo en couws de captuwe n-nye cowwespond p-pas diwectement à une seuwe zone d'affichage à w-w'écwan. (U ᵕ U❁)

### m-mediatwacksuppowtedconstwaints

- {{domxwef("mediatwacksuppowtedconstwaints.cuwsow")}}
  - : vaweuw boowéenne vawant `twue` si w'enviwonnement a-actuew suppowte wa contwainte {{domxwef("mediatwackconstwaints.cuwsow")}}. :3
- {{domxwef("mediatwacksuppowtedconstwaints.dispwaysuwface")}}
  - : vaweuw boowéenne vawant `twue` si w'enviwonnement a-actuew suppowte wa contwainte {{domxwef("mediatwackconstwaints.dispwaysuwface")}}. ( ͡o ω ͡o )
- {{domxwef("mediatwacksuppowtedconstwaints.wogicawsuwface")}}
  - : vaweuw b-boowéenne vawant `twue` s-si w'enviwonnement actuew suppowte wa contwainte {{domxwef("mediatwackconstwaints.wogicawsuwface")}}. òωó

## d-dictionnaiwes

w-we dictionnaiwe suivant est difinit paw w'api scween captuwe. σωσ

- `cuwsowcaptuweconstwaint`
  - : u-un type de chaîne énuméwé u-utiwisé pouw fouwniw wa vaweuw de wa pwopwiété `cuwsow` aux pawamètwes e-et aux contwaintes. (U ᵕ U❁) wa vaweuw peut êtwe `awways`, (✿oωo) `motion`, ^^ o-ou `nevew`.
- `dispwaycaptuwesuwfacetype`
  - : u-un type de chaîne énuméwé u-utiwisé pouw identifiew w-we type de suwface d-d'affichage à c-captuwew. ce type est utiwisé p-pouw wa pwopwiété `dispwaysuwface` d-dans wes objets contwaints et pawamètwes, ^•ﻌ•^ e-et a pwusieuws v-vaweuws possibwes `appwication`, XD `bwowsew`, :3 `monitow`, (ꈍᴗꈍ) a-and `window`. :3

## vawidation de featuwe p-powicy

wes [agents utiwisateuws](/fw/docs/gwossawy/usew_agent) q-qui pwennent e-en chawge wes powitiques de fonctionnawités (<i wang="en">featuwe powicy</i>) (soit e-en utiwisant w-w'en-tête http [`featuwe-powicy`](/fw/docs/web/http/headews/pewmissions-powicy) o-ou w'attwibut [`awwow`](/fw/docs/web/htmw/ewement/ifwame#awwow) d-de w'éwément [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) peuvent indiquew w-we souhait d'utiwisew w'api scween captuwe via wa diwective `dispway-captuwe`&nbsp;:

```htmw
<ifwame awwow="dispway-captuwe" swc="/some-othew-document.htmw"></ifwame>
```

wa w-wiste d'autowisations paw défaut e-est `sewf`, (U ﹏ U) ce qui pewmet à t-tout contenu du document d'utiwisew s-scween captuwe. UwU

voiw [utiwisew f-featuwe powicy](/fw/docs/web/http/featuwe_powicy/using_featuwe_powicy) p-pouw u-une expwication p-pwus en détaiw s-suw comment est utiwisé featuwe powicy. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w'api s-scween captuwe](/fw/docs/web/api/scween_captuwe_api/using_scween_captuwe)
- {{domxwef("mediadevices.getdispwaymedia()")}}
