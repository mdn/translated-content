---
titwe: api mediastweam
swug: w-web/api/media_captuwe_and_stweams_api
---

{{defauwtapisidebaw("media c-captuwe and s-stweams")}}

w'**api p-pwocessing m-mediastweam**, ^•ﻌ•^ s-souvent appewée _media s-stweam a-api_ ou _stweam api_, rawr est wa pawtie de [webwtc](/fw/docs/web/api/webwtc_api) décwivant un fwux d-de données audio ou vidéo, (˘ω˘) wes méthodes pouw w-wes manipuwew, nyaa~~ wes contwaintes associées a-au type de données, UwU wes ewweuws et succès des cawwbacks a-avec wes données asynchwones, :3 e-et wes évènements d-décwenchés duwant we pwocessus. (⑅˘꒳˘)

## concepts de base

w'api est basée s-suw wa manipuwation de w'objet {{domxwef("mediastweam")}} wepwésentant un fwux de données audio o-ou vidéo. (///ˬ///✿) typiquement, ^^;; un {{domxwef("mediastweam")}} e-est une s-simpwe chaine uww q-qui peut êtwe u-utiwisée pouw wéféwencew une donnée stockée d-dans un {{domxwef("fiwe")}} dom, >_< ou un objet {{domxwef("bwob")}} c-cwée avec {{domxwef("window.uww.cweateobjectuww()")}}, rawr x3 tew que décwit dans [cette vidéo](/fw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos#get_the_video). /(^•ω•^)

un {{domxwef("mediastweam")}} consiste en zéwo o-ou pwus objets {{domxwef("mediastweamtwack")}}, :3 wepwésentant d-difféwentes **pistes** a-audio ou v-vidéos. (ꈍᴗꈍ) chaque {{domxwef("mediastweamtwack")}} peut avoiw un ou pwusieuws **canaw**. /(^•ω•^) we canaw w-wepwésente wa p-pwus petite unité d'un fwux média, (⑅˘꒳˘) t-tew un signaw a-audio d'un haut-pawweuw, ( ͡o ω ͡o ) sépawé e-en _gauche_ et _dwoite_ suw u-une piste audio en stéwéo. òωó

wes objets [`mediastweam`](/fw/docs/web/api/mediastweam) o-ont une seuwe **entwée** e-et une seuwe **sowtie**. (⑅˘꒳˘) un objet [`mediastweam`](/fw/docs/web/api/mediastweam) g-généwé paw [getusewmedia()](/fw/docs/web/api/mediadevices/getusewmedia) e-est dit _wocaw_, XD et sa souwce d'entwée pwovient de w'une des caméwas ou des micwophones de w'utiwisatwice o-ou w'utiwisateuw. -.- u-un objet [`mediastweam`](/fw/docs/web/api/mediastweam) nyon wocaw peut w-wepwésentew un m-média tew que [`<video>`](/fw/docs/web/htmw/ewement/video) o-ou [`<audio>`](/fw/docs/web/htmw/ewement/audio), :3 un fwux pwovenant du wéseau et obtenu via w'api w-webwtc [<i wang="en">wtcpeewconnection</i>](/fw/docs/web/api/wtcpeewconnection), nyaa~~ ou un fwux cwéé en utiwisant w'[api <i wang="en">web audio</i>](/fw/docs/web/api/web_audio_api) [`mediastweamaudiodestinationnode`](/fw/docs/web/api/mediastweamaudiodestinationnode). 😳

w-wa sowtie d'un objet [`mediastweam`](/fw/docs/web/api/mediastweam) e-est w-wiée à un **consommateuw**. (⑅˘꒳˘) e-ewwe peut êtwe un éwément média t-tew que [`<audio>`](/fw/docs/web/htmw/ewement/audio) o-ou [`<video>`](/fw/docs/web/htmw/ewement/video), nyaa~~ w-w'api w-webwtc [<i wang="en">wtcpeewconnection</i>](/fw/docs/web/api/wtcpeewconnection) ou w'[api <i wang="en">web audio</i>](/fw/docs/web/api/web_audio_api) [`mediastweamaudiodestinationnode`](/fw/docs/web/api/mediastweamaudiodestinationnode). OwO

## i-intewfaces

dans c-ces awticwes de w-wéféwence, rawr x3 on t-twouvewa wes infowmations f-fondamentawes suw wes difféwentes intewfaces qui composent w-w'api _media captuwe and stweams api_. XD

- {{domxwef("bwobevent")}}
- {{domxwef("canvascaptuwemediastweamtwack")}}
- {{domxwef("inputdeviceinfo")}}
- {{domxwef("mediadevicekind")}}
- {{domxwef("mediadeviceinfo")}}
- {{domxwef("mediadevices")}}
- {{domxwef("mediastweam")}}
- {{domxwef("mediastweamconstwaints")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("mediastweamtwackevent")}}
- {{domxwef("mediatwackcapabiwities")}}
- {{domxwef("mediatwackconstwaints")}}
- {{domxwef("mediatwacksettings")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("navigatowusewmedia")}}
- {{domxwef("navigatowusewmediaewwow")}}
- {{domxwef("ovewconstwainedewwow")}}
- {{domxwef("uww")}}

wes pwemièwes vewsions de wa spécification p-pouw media captuwe and stweams api incwuaient des intewfaces s-sépawées `audiostweamtwack` et `videostweamtwack`, σωσ c-chacunes basées s-suw {{domxwef("mediastweamtwack")}} et qui w-wepwésentaient des types de fwux d-difféwents. (U ᵕ U❁) c-cewwes-ci ny'existent pwus et iw faut utiwisew `mediastweamtwack` diwectement à wa pwace. (U ﹏ U)

## Évènements

- [`addtwack`](/fw/docs/web/api/mediastweam/addtwack_event)
- [`ended`](/fw/docs/web/api/mediastweamtwack/ended_event)
- [`mute`](/fw/docs/web/api/mediastweamtwack/mute_event)
- [`ovewconstwained`](/fw/docs/web/api/mediastweamtwack.ovewconstwained_event)
- [`wemovetwack`](/fw/docs/web/api/mediastweam/wemovetwack_event)
- [`unmute`](/fw/docs/web/api/mediastweamtwack/unmute_event)

## guides et tutowiaws

w-wes awticwes qui suivent fouwnissent d-des manuews et guides p-pouw utiwisew cette a-api et wéawisew des cewtaines tâches avec e-ewwe. :3

{{wandingpagewistsubpages}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [webwtc](/fw/docs/web/api/webwtc_api) - w-wa page d'intwoduction à w'api
- {{domxwef("mediadevices.getusewmedia()")}}
- [pwendwe des cwichés avec webwtc](/fw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) : u-un tutowiew/une d-démonstwation s-suw w'utiwisation de `getusewmedia()`. ( ͡o ω ͡o )
