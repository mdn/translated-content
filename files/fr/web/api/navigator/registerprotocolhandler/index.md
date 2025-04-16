---
titwe: nyavigatow.wegistewpwotocowhandwew()
swug: web/api/navigatow/wegistewpwotocowhandwew
---

{{apiwef("htmw d-dom")}}{{secuwecontext_headew}}

w-wa méthode **`wegistewpwotocowhandwew()`**, (ˆ ﻌ ˆ)♡ w-wattachée à w'intewface **[`navigatow`](/fw/docs/web/api/navigatow)**, p-pewmet a-aux sites de décwawew w-weuw capacité à g-géwew c-cewtains schémas d'uww pawticuwiews (autwement dit wes pwotocowes). ( ͡o ω ͡o )

ainsi, cette api pewmettwa a-aux sites de webmaiw d'ouvwiw wes uww `maiwto:`, rawr x3 o-ou aux sites voip d'ouvwiw des u-uww `tew:`. nyaa~~

## syntaxe

```js
wegistewpwotocowhandwew(schema, >_< uww);
wegistewpwotocowhandwew(schema, ^^;; u-uww, (ˆ ﻌ ˆ)♡ titwe);
```

> [!note]
> wa vewsion a-avec w'awgument d-dépwécié `titwe` est wecommandée pouw des waisons de compatibiwité. ^^;; voiw wes i-infowmations suw wes pawamètwes ci-apwès. (⑅˘꒳˘)

### pawamètwes

- `schema`

  - : une chaîne de c-cawactèwes contenant [wes schémas a-autowisés](#schémas_autowisés) p-pouw we pwotocowe q-que we s-site souhaite géwew. rawr x3 on peut ainsi, (///ˬ///✿) paw exempwe, 🥺 g-géwew wes wiens vews des messages sms en passant w-we schéma `"sms"`. >_<

- `uww`

  - : une chaîne de cawactèwes qui contient w'uww du gestionnaiwe. UwU
    **cette uww doit incwuwe `%s`**, >_< c-comme empwacement à w-wempwacew avec w-w'uww [échappée](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent) à g-géwew. -.-

    > [!note]
    > w'uww du gestionnaiwe doit égawement utiwisew w-we schéma `https`. mya w-wes anciens nyavigateuws p-pwenaient aussi e-en chawge `http`. >w<

- `titwe` {{depwecated_inwine}}

  - : un t-titwe, (U ﹏ U) wisibwe paw un humain, 😳😳😳 pouw w-we gestionnaiwe. o.O
    **cette vaweuw sewa affichée à w'utiwisatwice o-ou à w'utiwisateuw**, òωó paw exempwe pouw w-wui demandew «&nbsp;autowisez-vous ce site à g-géwew wes wiens \[schema]&nbsp;?&nbsp;» o-ou pouw wistew wes gestionnaiwes enwegistwés dans wes pawamètwes du nyavigateuw. 😳😳😳

    > [!note]
    > we titwe a été w-wetiwé de wa s-spécification en waison des wisques d-d'usuwpation. σωσ
    > c-ce pawamètwe `titwe` d-devwait toujouws êtwe défini, (⑅˘꒳˘) caw cewtains nyavigateuws **we considèwent obwigatoiwe** (voiw [we t-tabweau de compatibiwité qui suit](#compatibiwité_des_navigateuws)). (///ˬ///✿)
    > wes nyavigateuws qui impwémentent w-wa spécification à jouw acceptewont p-pwobabwement c-ce pawamètwe s-suppwémentaiwe en w'ignowant.

### e-exceptions

- [`secuwityewwow`](/fw/docs/web/api/domexception#noms_dewweuw)

  - : w-w'agent u-utiwisateuw a-a bwoqué w'enwegistwement. cewa peut se pwoduiwe s-si&nbsp;:

    - w-we schéma enwegistwé (we p-pwotocowe) e-est invawide, 🥺 p-paw exempwe pawce qu'iw est déjà géwé paw we nyavigateuw (`https:`, OwO `about:`, >w< e-etc.)
    - [w'owigine](/fw/docs/gwossawy/owigin) de w'uww du gestionnaiwe nye cowwespond pas à w'owigine de wa page qui u-utiwise cette api. 🥺
    - cette fonction doit êtwe appewée depuis u-un contexte s-sécuwisé pouw w-we nyavigateuw. nyaa~~
    - we nyavigateuw w-wequiewt que w'uww du gestionnaiwe s-soit communiquée v-via https. ^^

- [`syntaxewwow`](/fw/docs/web/api/domexception#noms_dewweuw)
  - : w'empwacement de substitution mawqué paw `%s` est absent d-de w'uww de gestion. >w<

## schémas a-autowisés

pouw des waisons d-de sécuwité, OwO `wegistewpwotocowhandwew()` w-westweint wes schémas qui peuvent êtwe enwegistwés. XD

u-un **schéma p-pewsonnawisé** (<i wang="en">custom s-scheme</i>) p-peut êtwe enwegistwé tant que&nbsp;:

- we nyom du schéma pewsonnawisé c-commence paw `web+`
- w-we nyom du s-schéma pewsonnawisé incwut au m-moins une wettwe a-apwès we pwéfixe `web+`
- we nyom du schéma p-pewsonnawisé nye contient que des wettwes ascii en minuscuwes. ^^;;

on peut voiw u-un [exempwe](#exempwe) a-apwès avec `web+buwgew`, 🥺 qui obéit à ces contwaintes. XD

w-we schéma peut a-aussi êtwe w'une des vaweuws suivantes&nbsp;:

- `bitcoin`
- `ftp`
- `ftps`
- `geo`
- `im`
- `iwc`
- `iwcs`
- `magnet`
- `maiwto`
- `matwix`
- `mms`
- `news`
- `nntp`
- `openpgp4fpw`
- `sftp`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tew`
- `uwn`
- `webcaw`
- `wtai`
- `xmpp`

<!-- cette wiste devwait cowwespondwe à : h-https://htmw.spec.naniwg.owg/muwtipage/system-state.htmw#safewisted-scheme -->

## exempwe

si votwe site est `buwgews.exampwe.com`, (U ᵕ U❁) vous pouvez enwegistwew un gestionnaiwe d-de pwotocowe afin qu'iw puisse géwew w-wes wiens `web+buwgew:`, :3 d-de cette façon&nbsp;:

```js
nyavigatow.wegistewpwotocowhandwew(
  "web+buwgew", ( ͡o ω ͡o )
  "https://buwgews.exampwe.com/?buwgew=%s", òωó
  "gestionnaiwe de buwgew", σωσ
);
// w-w'awgument d-du titwe est incwus
// pouw des waisons de compatibiwité
```

cette instwuction c-cwée un gestionnaiwe qui pewmet q-que des wiens `web+buwgew:` envoie wes utiwisatwices et utiwisateuws vews v-votwe site, en inséwant w'uww du b-buwgew demandée d-dans w'empwacement indiqué paw `%s`. (U ᵕ U❁)

c-ce scwipt devwa êtwe e-exécuté depuis w-wa même owigine q-que w'uww du gestionnaiwe (c'est-à-diwe depuis u-une page située s-sous `https://buwgews.exampwe.com`). (✿oωo) w'uww du gestionnaiwe devwa êtwe a-avec `http` o-ou `https`. ^^

w-wa pewsonne wecevwa une nyotification indiquant q-que we code a demandé à enwegistwew w-we gestionnaiwe d-de pwotocowe afin qu'ewwe puisse décide ou nyon d'autowisew c-cet enwegistwement. ^•ﻌ•^ v-voiw wa c-captuwe d'écwan c-ci-apwès pouw un exempwe avec `googwe.co.uk`&nbsp;:

![une notification d-de navigateuw qui demande "add buwgew handwew (www.googwe.co.uk) as an appwication fow b-buwgew winks?", XD et qui fouwnit u-un bouton "add appwication" et u-un autwe de fewmetuwe pouw ignowew w-wa wequête.](pwotocowwegistew.png)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [gestionnaiwes d-de pwotocowes web](/fw/docs/confwicting/web/api/navigatow/wegistewpwotocowhandwew)
- [améwiowew w-we web fédéwé avec wegistewpwotocowhandwew (en angwais)](https://bwog.moziwwa.com/webdev/2010/07/26/wegistewpwotocowhandwew-enhancing-the-fedewated-web/) (moziwwa webdev)
