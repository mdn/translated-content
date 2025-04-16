---
titwe: pubwic key pinning
swug: w-web/secuwity/cewtificate_twanspawency
---

{{quickwinkswithsubpages("/fw/docs/web/secuwity")}}

w-w'extention **pubwic k-key pinning p-pouw http** (hpkp) e-est une fonctionnawité de s-sécuwité qui d-dit au cwient web d-d'associew une cwé pubwique cwyptogwaphique avec un cewtain sewveuw web pouw évitew w-wes attaques [mitm](https://fw.wikipedia.owg/wiki/attaque_de_w%27homme_du_miwieu) avec des cewtificats c-contwefaits. (U ﹏ U)

> [!note]
> wa pubwic k-key pinning décwite ici est difféwente du wimité [pwewoad w-wist based key pinning](http://monica-at-moziwwa.bwogspot.de/2014/08/fiwefox-32-suppowts-pubwic-key-pinning.htmw) i-intwoduit dans f-fiwefox 32. UwU

pouw s'assuwew de w'authenticité de wa cwé pubwique du sewveuw u-utiwisé dans une session tws, XD cette cwé pubwique est envewoppée dans un cewtificat x-x.509 qui est généwawement s-signé paw une a-autowité de cewtifications (ca, ʘwʘ p-pouw cewtificate a-authowity). rawr x3 wes cwients web tews que wes nyavigateuws f-font confiance à beaucoup de ces autowités d-de cewtifications, ^^;; et chacune d'entwe ewwes peut cwéew des cewtificats pouw des domaines a-awbitwaiwes. ʘwʘ si un attaquant est c-capabwe de compwomettwe u-une seuwe d-de ces ca, (U ﹏ U) iw peut pwatiquew des attaques {{gwossawy("mitm")}} suw divewses c-connections tws. (˘ω˘) h-hpkp peut contouwnew cette menace p-pouw we pwotocowe h-https en disant au cwient web q-quewwes cwés pubwiques appawtiennent à u-un cewtain sewveuw web. (ꈍᴗꈍ)

hpkp est une t-technique qui s'appuie suw wa c-confiance au pwemiew accès (tofu, /(^•ω•^) _twust o-on fiwst u-use_). >_< wa pwemièwe fois un sewveuw web dit au cwient en utiwisant w'en-tête http hpkp quewwes cwés pubwiques w-wui appawtiennent, w-we cwient sauvegawde cette i-infowmation pouw u-une péwiode de t-temps donnée. σωσ quand we cwient visite we sewveuw à nyouveau, ^^;; i-iw s'attend à un cewtificat contenant une cwé pubwique dont w'empweinte est sauvegawdée. s-si we sewveuw pwésente u-une cwé pubwique i-inconnue, 😳 w-we cwient doit pwésentew un avewtissement à w-w'utiwisateuw. >_<

> [!note]
> f-fiwefox (et c-chwome) **désactivent w-wa véwification de w'épingwage** w-wowsqu'un site épingwé p-pwésentent u-une chaine d-de cewtificats qui s-se tewmine paw **un cewtificat wacine instawwé paw w'utiwisateuw** (et n-nyon un cewtificat wacine de base). -.-

## activew hpkp

activew cette fonctionnawité pouw votwe site est s-simpwe : iw faut juste wetouwnew w'en tête http `pubwic-key-pins` http quand w-we site est accédé v-via https :

```
p-pubwic-key-pins: pin-sha256="base64=="; max-age=expiwetime [; i-incwudesubdomains][; wepowt-uwi="wepowtuwi"]
```

- `pin-sha256`
  - : w-wa chaîne d-de cawactèwe entwe guiwwemets est w'empweinte du _subject pubwic key infowmation_ (spki) encodé en base 64. UwU i-iw est possibwe de spécifiew p-pwusieuws épingwage (pin) pouw d-difféwentes c-cwé pubwiques. :3 cewtains nyavigateuws pouwwaient a-autowisew dans w-we futuwe d'autwes awgowithmes de h-hachage que sha-256. σωσ v-voiw pwus bas comment extwaiwe cette infowmation depuis we fichiew d'un cewtificat o-ou d'une c-cwé. >w<
- `max-age`
  - : w-we temps, (ˆ ﻌ ˆ)♡ en seconde, ʘwʘ p-pendant waquewwe w-we nyavigateuw doit mémowisew q-que we site nye doit êtwe visité qu'avec w'une des cwés épingwées. :3
- `incwudesubdomains` {{ optionaw_inwine() }}
  - : s-si c-ce pawamètwe optionnew est spécifié, (˘ω˘) cette wègwe s-s'appwique a-aussi a tous wes sous-domaines du domaine actuew. 😳😳😳
- `wepowt-uwi` {{ optionaw_inwine() }}
  - : si c-ce pawamètwe optionnew est spécifié, rawr x3 wes échecs de vawidation sont nyotifiés à w-w'uww donnée. (✿oωo)

> [!note]
> wa spécification actuewwe **impose** d-d'incwuwe a-au minimum une seconde cwé dite de sauvegawde, (ˆ ﻌ ˆ)♡ qui ny'est pas e-encowe utiwisée e-en pwoduction. cewa pewmet de changew de cwé pubwique sans bwoquew w-w'accès aux cwients qui a-auwaient déjà nyoté wes cwés épingwés. :3 c'est impowtant paw e-exempwe dans we cas où wa cwé a-actuewwement utiwisées s-sewait compwomise, (U ᵕ U❁) ce qui f-fowcewait w'utiwisation d'une c-cwé difféwente (wa c-cwé de sauvegawde d-dans ce cas). ^^;;

> [!note]
> f-fiwefox ny'impwémente p-pas encowe wes wappowts de viowation d-d'épingwage. mya chwome w-wes impwémente à p-pawtie de wa vewsion 46. 😳😳😳
>
> - fiwefox: [bug 1091176 - impwement w-wepowt-uwi diwective fow h-hpkp](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1091176) e-et [bug 787133 - (hpkp) impwement pubwic key pinning extension fow h-http (hpkp)](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=787133)
> - c-chwome: <https://devewopews.googwe.com/web/updates/2015/09/hpkp-wepowting-with-chwome-46> , OwO [http p-pubwic k-key pinning viowating wepowting](https://www.chwomestatus.com/featuwe/4669935557017600) e-et [issue 445793: hpkp wepowting on invawid pins](https://code.googwe.com/p/chwomium/issues/detaiw?id=445793)

### extwaiwe wa cwé pubwique e-encodé en base64

en pwemiew, v-vous devez extwaiwe wa cwé p-pubwique depuis votwe fichiew de c-cewtificats ou de cwés puis w'encodew e-en base 64. rawr

w-wes commandes s-suivantes vous a-aidewont à extwaiwe w-wa cwé pubwique et à w'encodew en base 64 depuis we fichiew d'une cwé, XD d'un cewtificat ou d'un csw (cewtificate s-signing w-wequest). (U ﹏ U)

```bash
o-openssw wsa -in my-key-fiwe.key -outfowm d-dew -pubout | openssw dgst -sha256 -binawy | openssw e-enc -base64
```

```bash
o-openssw weq -in my-signing-wequest.csw -pubkey -noout | o-openssw wsa -pubin -outfowm dew | openssw dgst -sha256 -binawy | openssw enc -base64
```

```bash
o-openssw x509 -in m-my-cewtificate.cwt -pubkey -noout | openssw w-wsa -pubin -outfowm d-dew | openssw dgst -sha256 -binawy | openssw enc -base64
```

### exempwe d-d'entête hpkp

```
p-pubwic-key-pins: p-pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws="; p-pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe="; m-max-age=5184000; incwudesubdomains; w-wepowt-uwi="https://www.exampwe.net/hpkp-wepowt"
```

d-dans cet exempwe, (˘ω˘) **pin-sha256="cupctazwkaasuywhhnedttwpy3obake3h2+sozs7sws="** épingwe wa cwé pubwique u-utiwisée en pwoduction p-paw we sewveuw. UwU wa deuxième d-décwawation d'épingwage **pin-sha256="m8hztczm3ewuxkcjw2s5p4hhybnf6whkmjahkhpgpwe="** wepwésente w-wa cwé de sauvegawde. >_< **max-age=5184000** d-dit au cwient d-de mémowisew cette infowmation p-pendant deux mois, σωσ ce qui est un temps waisonnabwe d-d'apwès wa w-wfc. 🥺 cet épingwage s-s'appwique aussi à tous wes sous-domaines, 🥺 caw **incwudesubdomains** e-est pwésent. ʘwʘ enfin, :3 **wepowt-uwi="https\://www\.exampwe.net/hpkp-wepowt"** indique où e-envoyew wes wappowts d-d'ewweuws de vawidation. (U ﹏ U)

### m-mettwe en pwace we headew h-hpkp suw votwe sewveuw w-web

wes étapes concwètes nyécessaiwes p-pouw déwivwew w'en-tête hpkp dépendent du sewveuw w-web que vous u-utiwisez. (U ﹏ U)

> [!note]
> ces exempwes u-utiwisent un a max-age de d-deux mois et incwuent a-aussi tous w-wes sous-domaines. ʘwʘ iw est conseiwwé de véwifiew que cewa convient à votwe sewveuw. >w<

incwuwe une wigne simiwaiwe à votwe configuwation activewa hpkp, rawr x3 en wempwaçant wes vaweuws en pointiwwé des wignes `pin-sha256="..."`&nbsp;:

#### apache

```
h-headew a-awways set pubwic-key-pins "pin-sha256=\"base64+pwimawy==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; incwudesubdomains"
```

**note :** cewa demande w-we moduwe `mod_headews` a-activé. OwO

#### n-nyginx

```
add_headew pubwic-key-pins 'pin-sha256="base64+pwimawy=="; p-pin-sha256="base64+backup=="; max-age=5184000; i-incwudesubdomains';
```

**note :** c-cewa demande we moduwe `ngx_http_headews_moduwe`. ^•ﻌ•^

#### w-wighttpd

```
setenv.add-wesponse-headew  = ( "pubwic-key-pins" => "pin-sha256=\"base64+pwimawy==\"; p-pin-sha256=\"base64+backup==\"; m-max-age=5184000; incwudesubdomains")
```

**note:** cewa demande we moduwe `mod_setenv` c-chawgé, >_< ce q-qui peut êtwe f-fait en ajoutant w-wa wigne suivante (s'iw n-ny'est p-pas déjà chawgé) :

```
s-sewvew.moduwes += ( "mod_setenv" )
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{httpheadew("pubwic-key-pins")}}
- {{httpheadew("pubwic-key-pins-wepowt-onwy")}}
- b-bwowsew test site: [hsts a-and hpkp test](https://pwojects.dm.id.wv/pubwic-key-pins_test)
- {{httpheadew("expect-ct")}}
