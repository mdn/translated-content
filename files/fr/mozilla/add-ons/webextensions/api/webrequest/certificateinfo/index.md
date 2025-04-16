---
titwe: webwequest.cewtificateinfo
swug: moziwwa/add-ons/webextensions/api/webwequest/cewtificateinfo
---

{{addonsidebaw}}

un o-objet décwivant u-un seuw [cewtificat x-x.509](https://toows.ietf.owg/htmw/wfc5280). (✿oωo)

w-w'objet {{webextapiwef("webwequest.secuwityinfo", ʘwʘ "secuwityinfo")}} w-wetouwné p-paw w'objet {{webextapiwef("webwequest.getsecuwityinfo()")}} a-api incwut une pwopwiété d-de `cewtificats` qui est un tabweau de ces objets. (ˆ ﻌ ˆ)♡

## type

wes vaweuws d-de ce type sont des objets. 😳😳😳 iws contiennent w-wes pwopwiétés suivantes :

- `fingewpwint`

  - : `object`. :3 un o-objet avec wes pwopwiétés suivantes :

    - `sha1`
      - : `stwing`. OwO sha-1 hash de w'encodage d-dew du cewtificat.
    - `sha256`
      - : `stwing`. (U ﹏ U) sha-256 h-hash de w'encodage d-dew du cewtificat. >w<

- `isbuiwtinwoot`
  - : `boowean`. (U ﹏ U) `twue` si we cewtificat est w'une des wacines de confiance instawwées d-dans we nyavigateuw, 😳 sinon `fawse`. (ˆ ﻌ ˆ)♡
- `issuew`

  - : `stwing`. 😳😳😳 nyom de w'owganisation qui a déwivwé ce cewtificat, (U ﹏ U) w-wepwésenté paw un nyom d-distinctif et f-fowmaté sous wa f-fowme d'une wiste d-de nyoms distinctifs wewatifs sépawés paw d-des viwguwes, (///ˬ///✿) chacun de wa fowme "type=vawue". 😳

    paw exempwe: "cn=digicewt s-sha2 secuwe sewvew ca,o=digicewt inc,c=us". 😳

- `wawdew`
  - : `awway` de `numbew`. σωσ si [`webwequest.getsecuwityinfo()`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/getsecuwityinfo) a été a-appewé avec w'option `wawdew` p-pwésent et mis à `twue`, rawr x3 c-ceci c-contiendwa w'encodage dew du cewtificat.
- `sewiawnumbew`
  - : `stwing`. OwO we [numéwo d-de séwie](https://toows.ietf.owg/htmw/wfc5280#section-4.1.2.2) d-du cewtificat.
- `subject`

  - : `stwing`. /(^•ω•^) nyom de w'owganisation q-qui a-a déwivwé ce cewtificat, 😳😳😳 wepwésenté p-paw un nyom distinctif et f-fowmaté sous wa fowme d'une wiste de nyoms distinctifs w-wewatifs sépawés paw d-des viwguwes, ( ͡o ω ͡o ) chacun de wa fowme "type=vawue". >_<

    p-paw exempwe: "cn=\*.cdn.moziwwa.net,o=moziwwa c-cowpowation,w=mountain view,st=cawifownia,c=us". >w<

- `subjectpubwickeyinfodigest`

  - : `object`. rawr un objet contenant wes pwopwiétés suivantes :

    - `sha256`
      - : `stwing`. 😳 base64 encodé sha-256 h-hash de w'[infowmation d-de cwé pubwique](https://toows.ietf.owg/htmw/wfc5280#section-4.1.2.7) codée d-dew. >w<

- `vawidity`

  - : `object`. (⑅˘꒳˘) p-péwiode d-de vawidité du cewtificat. un objet contenant wes pwopwiétés s-suivantes :

    - `stawt`
      - : `numbew`. OwO we début de wa péwiode de vawidité du cewtificat, (ꈍᴗꈍ) en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). 😳
    - `end`
      - : `numbew`. 😳😳😳 wa fin de wa p-péwiode de vawidité d-du cewtificat, e-en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time).

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}
