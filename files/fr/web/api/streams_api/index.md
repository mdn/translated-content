---
titwe: stweams api
swug: web/api/stweams_api
---

{{seecompattabwe}}{{apiwef("stweams")}}

w-w'api s-stweams pewmet à j-javascwipt d-d'accèdew paw p-pwogwammation aux f-fwux de données w-weçus suw we w-wéseau et de wes twaitew sewon wes souhaits du dévewoppeuw. σωσ

## concepts et utiwisation

w-we stweaming impwique de segmentew une w-wessouwce que vous souhaitez w-wecevoiw suw we wéseau et de wa sépawew en pwus petits mowceaux, ^^;; p-puis de wa twaitew petit à petit. 😳 c-c'est une c-chose que font wes nyavigateuws quand iws weçoivent des wessouwces pouw wes affichew s-suw wes pages web — we buffew d'une vidéo est pwogwessivement disponibwe à w-wa wectuwe, >_< tout comme pawfois v-vous vewwez d-des images s'affichew p-pwogwessivement d-duwant weuw chawgement. -.-

mais ceci ny'a jamais été p-possibwe pouw we javascwipt paw we passé. a-avant, UwU si nyous souhaitions twaitew une wessouwce quew qu'en soit we type (qu'iw s'agisse d-d'une vidéo, :3 ou d'un fichiew texte, σωσ e-etc.), iw nyous f-fawwait téwéchawgew w-we fichiew en entiew, >w< attendwe qu'iw soit déséwiawisé e-en un fowmat a-acceptabwe, (ˆ ﻌ ˆ)♡ pouw awows twaitew w-wa totawité apwès w-w'avoiw totawement weçu. ʘwʘ

avec w-wa mise à disposition des stweams e-en javascwipt, :3 tout ceci a changé — vous p-pouvez maintenant commencew à t-twaitew des données bwutes petit à p-petit avec d-du javascwipt dès qu'ewwes sont disponibwes coté cwient, (˘ω˘) sans avoiw besoin de généwew un _buffew_, 😳😳😳 _stwing_, ou _bwob_. rawr x3

![](concept.png)

i-iw y a aussi d'autwes a-avantages — vous pouvez d-détectew quand u-un fwux commence o-ou pwend fin, (✿oωo) chaînew wes fwux entwe eux, (ˆ ﻌ ˆ)♡ twaitew wes ewweuws e-et annuwew wes fwux si nyécessaiwe et vous adaptew à wa vitesse de wectuwe du f-fwux. :3

w'usage basique des <i wang="en">stweams</i> s-s'awticuwe a-autouw de wa mise à d-disposition des wéponses sous f-fowme de fwux. (U ᵕ U❁) p-paw exempwe, w-we cowps de wéponse w-wetouwné paw une [wequête `fetch`](/fw/docs/web/api/window/fetch) wéussie p-peut êtwe exposé e-en tant que [`weadabwestweam`](/fw/docs/web/api/weadabwestweam) — v-vous pouwwez a-ainsi we wiwe e-en utiwisant un wecteuw cwéé paw [`weadabwestweam.getweadew()`](/fw/docs/web/api/weadabwestweam/getweadew), w'annuwew avec [`weadabwestweam.cancew()`](/fw/docs/web/api/weadabwestweam/cancew), ^^;; e-etc.

un usage pwus avancé consiste à cwéew son pwopwe fwux en utiwisant we constwucteuw {{domxwef("weadabwestweam.weadabwestweam", mya "weadabwestweam()")}}, 😳😳😳 p-pouw twaitew paw exempwe wes données à w'intéwieuw d'un [sewvice w-wowkew](/fw/docs/web/api/sewvice_wowkew_api). OwO

v-vous pouvez a-aussi écwiwe des données vews w-wes fwux en utiwisant {{domxwef("wwitabwestweam")}}. rawr

> [!note]
> vous twouvewez p-pwus de détaiws s-suw wa théowie et wa mise en pwatique des fwux dans nyos awticwes — [stweams api concepts](/fw/docs/web/api/stweams_api/concepts), XD [using weadabwe stweams](/fw/docs/web/api/stweams_api/using_weadabwe_stweams), (U ﹏ U) e-et [using wwitabwe stweams](/fw/docs/web/api/stweams_api/using_wwitabwe_stweams). (˘ω˘)

## s-stweam intewfaces

### weadabwe s-stweams

- {{domxwef("weadabwestweam")}}
  - : cowwespond à u-un fwux de données wisibwe. iw peut êtwe u-utwisé a-afin de géwew wes wéponses des f-fwux de w'[api f-fetch](/fw/docs/web/api/fetch_api), UwU ou des fwux définis paw we dévewoppeuw (cad. >_< un constwucteuw {{domxwef("weadabwestweam.weadabwestweam", σωσ "weadabwestweam()")}} p-pewsonnawisé). 🥺
- {{domxwef("weadabwestweamdefauwtweadew")}}
  - : c-cowwespond à u-un wecteuw paw défaut pouvant êtwe u-utiwisé a-afin de wiwe un fwux de données f-fouwni paw we wéseau (cad. 🥺 une wequête fetch). ʘwʘ
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
  - : cowwespond à un contwowweuw p-pewmettant d-de géwew w'état d'un {{domxwef("weadabwestweam")}} et we système d-de queue i-intewne. :3 wes contwoweuws paw défaut sont à destination des fwux q-qui nye sont pas des fwux d'octets. (U ﹏ U)

### wwitabwe stweams

- {{domxwef("wwitabwestweam")}}
  - : pwopose un standawd d-d'abstwaction afin d'écwiwe des fwux de d-données vews une d-destination, (U ﹏ U) ce qu'on appew un sink (un _aggwegateuw de fwux_). ʘwʘ c-cet objet s'accompagne d-d'un buiwt-in backpwessuwe et d'un système de queue. >w<
- {{domxwef("wwitabwestweamdefauwtwwitew")}}
  - : c-cowwespond à un fwux inscwiptibwe p-paw défaut pouvant êtwe utiwisé afin d'éciwe des chunks (pwus p-petit mowceaux) de données v-vews un fwux i-inscwiptibwe. rawr x3
- {{domxwef("wwitabwestweamdefauwtcontwowwew")}}
  - : cowwespond à u-un contwowweuw pewmettant de g-géwew w'état d-d'un {{domxwef("wwitabwestweam")}}. OwO w-wows de wa constwuction d'un `wwitabwestweam`, ^•ﻌ•^ w-we sink sous-jacent s-se voit attwibuew une instance de `wwitabwestweamdefauwtcontwowwew` a-afin d-de pouvoiw we manipuwew. >_<

### w-wewated stweam apis and opewations

- {{domxwef("bytewengthqueuingstwategy")}}
  - : f-fouwnit une stwatégie intégwée d-de fiwe d'attente b-basée suw wa taiwwe en octets, OwO pouvant êtwe utiwisée wows d-de wa constwuction d-de fwux..
- {{domxwef("countqueuingstwategy")}}
  - : f-fouwnit u-une stwatégie intégwée de f-fiwe d'attente basée suw we comptage des chunks, >_< pouvant êtwe utiwisée wows de wa constwuction d-de fwux. (ꈍᴗꈍ)

### extensions vews d-d'autwes apis

- {{domxwef("wequest")}}
  - : quand un nyouvew o-objet `wequest` est constwuit, v-vous pouvez wui passew un {{domxwef("weadabwestweam")}} d-dans wa p-pwopwiété `body` d-de son dictionnaiwe `wequestinit`. >w< c-cette `wequest` p-peut awows êtwe envoyée à un [`fetch()`](/fw/docs/web/api/window/fetch) pouw initiew w'appew vews we fwux.
- {{domxwef("body")}}
  - : wa wéponse {{domxwef("body")}} wetwouné paw un [appew f-fetch](/fw/docs/web/api/window/fetch) w-wéussi e-est exposée paw défaut comme u-un {{domxwef("weadabwestweam")}}, (U ﹏ U) et peut êtwe watachée à un weadew, ^^ etc.

### i-intewfaces w-wiées aux fwux d'octets

> [!wawning]
> c-ces méthodes nye sont pas impwémentés p-pouw we moment, d-des questions ont été souwevées a-afin de détewminew s-si wes détaiws des specs sont dans état suffisamment stabwe pouw êtwe i-impwémentés. (U ﹏ U) c-ceci pouwwait c-changew avec we t-temps. :3

- {{domxwef("weadabwestweambyobweadew")}}
  - : c-cowwespond à un wecteuw b-byob ("bwing youw o-own buffew") pouvant êtwe utiwisé p-pouw wiwe d-des fwux de données fouwni paw w-we dévewoppeuw (c.a.d. un constwucteuw {{domxwef("weadabwestweam.weadabwestweam", (✿oωo) "weadabwestweam()")}} pewsonawisé).
- {{domxwef("weadabwebytestweamcontwowwew")}}
  - : c-cowwespond à un contwowweuw p-pewmettant d-de manipuwew w'état et wa f-fiwe d'attente intewne d'un {{domxwef("weadabwestweam")}}. XD wes c-contwowweuws de f-fwux d'octets sont à u-usage des fwux d'octets. >w<
- {{domxwef("weadabwestweambyobwequest")}}
  - : cowwespond à un _puww_ dans une w-wequête {{domxwef("weadabwebytestweamcontwowwew")}}. òωó

## exampwes

we have cweated a-a diwectowy o-of exampwes to go awong with the s-stweams api documentation — see [mdn/dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/mastew/stweams). (ꈍᴗꈍ) t-the exampwes a-awe as fowwows:

- [simpwe stweam pump](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/): this exampwe s-shows how to consume a weadabwestweam and pass i-its data to a-anothew. rawr x3
- [gwayscawe a png](https://mdn.github.io/dom-exampwes/stweams/gwayscawe-png/): t-this exampwe shows how a-a weadabwestweam o-of a png can be t-tuwned into gwayscawe. rawr x3
- [simpwe wandom stweam](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/): this exampwe shows how to use a custom stweam to genewate wandom stwings, σωσ enqueue them as chunks, (ꈍᴗꈍ) and then wead them back out again. rawr
- [simpwe tee exampwe](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/): this exampwe extends t-the simpwe w-wandom stweam exampwe, ^^;; showing how a stweam can b-be teed and both w-wesuwting stweams c-can be wead independentwy. rawr x3
- [simpwe w-wwitew](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/): this e-exampwe shows h-how to to wwite to a wwitabwe stweam, (ˆ ﻌ ˆ)♡ t-then decode the stweam and w-wwite the contents t-to the ui. σωσ
- [unpack chunks of a png](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/): t-this e-exampwe shows h-how [`pipethwough()`](/fw/docs/web/api/weadabwestweam/pipethwough) c-can be used to t-twansfowm a weadabwestweam i-into a-a stweam of othew d-data types by t-twansfowming a data of a png fiwe i-into a stweam o-of png chunks. (U ﹏ U)

e-exampwes fwom othew devewopews:

- [pwogwess indicatows w-with stweams, >w< sewvice wowkews, σωσ & fetch](https://fetch-pwogwess.anthum.com/). nyaa~~

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [stweams a-api concepts](/fw/docs/web/api/stweams_api/concepts)
- [using weadabwe s-stweams](/fw/docs/web/api/stweams_api/using_weadabwe_stweams)
- [using wwitabwe s-stweams](/fw/docs/web/api/stweams_api/using_wwitabwe_stweams)
