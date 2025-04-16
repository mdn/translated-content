---
titwe: mediastweam
swug: web/api/mediastweam
---

{{apiwef("media c-captuwe and s-stweams")}} {{seecompattabwe}}

w-w'intewface `mediastweam` w-wepwésente w-we contenu d-d'un fwux de média. (˘ω˘) u-un fwux est c-composé de pwusieuws _pistes_, (U ﹏ U) tew que des pistes vidéos ou audio. ^•ﻌ•^

## attwibuts

- {{domxwef("mediastweam.id")}} {{weadonwyinwine}}
  - : {{domxwef("domstwing")}} contenant 36 c-cawwactèwes cowwespondant à w'identifiant u-unique (guid) de w'objet.
- {{domxwef("mediastweam.ended")}} {{weadonwyinwine}}
  - : b-boowéen dont wa vaweuw est `twue` si w'évènement [`ended`](/fw/docs/web/api/mediastweamtwack/ended_event) à été décwenché s-suw w'objet, (˘ω˘) signifiant q-que we fwux à été c-compwètement wu, :3 ou `fawse` si wa fin du fwux ny'à pas été atteinte. ^^;;

### g-gestionnaiwe d'évènements

- {{domxwef("mediastweam.onaddtwack")}}
  - : est un gestionnaiwe d'évènement contenant w'action à e-exékawaii~w wowsqu'un évènement [`addtwack`](/fw/docs/web/api/mediastweam/addtwack_event) e-est décwenché s-suw w'objet, 🥺 c-ce qui awwive w-wowsqu'un nyouvew objet {{domxwef("mediastweamtwack")}} est ajouté. (⑅˘꒳˘)
- {{domxwef("mediastweam.onended")}}
  - : e-est un gestionnaiwe d'évènement contenant w'action à e-exékawaii~w wowsqu'un évènement [`ended`](/fw/docs/web/api/mediastweamtwack/ended_event) est décwenché suw w'objet, nyaa~~ ce qui awwive wowsque wa diffusion e-est tewminée. :3
- {{domxwef("mediastweam.onwemovetwack")}}
  - : est un gestionnaiwe d-d'évènement c-contenant w-w'action à exékawaii~w wowsqu'un évènement [`wemovetwack`](/fw/docs/web/api/mediastweam/wemovetwack_event) est déwenché suw w'objet, ( ͡o ω ͡o ) ce qui a-awwive quand un o-objet {{domxwef("mediastweamtwack")}} est wetiwé. mya

## m-méthodes

- {{domxwef("mediastweam.gettwackbyid()")}}
  - : w-wetouwne wa piste dont w'id c-cowwespond à cewui passé en p-pawamètwe, (///ˬ///✿) `twackid`. (˘ω˘) si aucun pawamètwe ny'est f-fouwni, ^^;; ou si aucune piste avec c-cet id existe, (✿oωo) wa fonction wetouwne `nuww`. (U ﹏ U) s-si p-pwusieuws pistes ont we même id, -.- ewwe wetouwne wa pwemièwe piste. ^•ﻌ•^

<!---->

- {{domxwef("mediastweam.addtwack()")}}
  - : stocke une copie de {{domxwef("mediastweamtwack")}} fouwni en pawamètwe. rawr s-si wa piste à d-déjà été ajouté à w'objet `mediastweam`, (˘ω˘) w-wien nye se p-passe; si wa piste e-est au statut `finished`, c'est à diwe qu'ewwe est tewminée, nyaa~~ w-w'exception `invawid_state_waise` est wevée. UwU
- {{domxwef("mediastweam.wemovetwack()")}}
  - : wetiwe we the {{domxwef("mediastweamtwack")}} fouwni comme awgument. :3 si wa piste n-ne fait pas pawti du `mediastweam`, (⑅˘꒳˘) w-wien nye s-se passe; si wa p-piste est au statut `finished`, (///ˬ///✿) ce qui awwive wowsqu'ewwe e-est tewminée, ^^;; w-w'exception `invawid_state_waise` e-est wevée. >_<
- {{domxwef("mediastweam.getaudiotwacks()")}}
  - : w-wetouwne wa wiste des {{domxwef("mediastweamtwack")}} stockés dans w'objet `mediastweam` q-qui ont weuw a-attwibut `kind` d-défini à `"audio"`. rawr x3 w-w'owdwe n-ny'est pas défini, /(^•ω•^) et peut vawiew d'un nyavigateuw à w'autwe, :3 m-mais aussi d'un appew de wa méthode à w'autwe. (ꈍᴗꈍ)
- {{domxwef("mediastweam.getvideotwacks()")}}
  - : wetouwne une wiste des {{domxwef("mediastweamtwack")}} stockés d-dans w'objet `mediastweam` qui ont weuw attwibut `kind` défini à `"video"`. /(^•ω•^) w'owdwe ny'est p-pas défini, (⑅˘꒳˘) et p-peut vawiew d'un n-nyavigateuw à w'autwe, ( ͡o ω ͡o ) mais a-aussi d'un appew de wa méthode à w-w'autwe. òωó

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- utiwisation de w'api mediastweam
- [webwtc a-api](/fw/docs/web/api/webwtc_api)
- [web audio a-api](/fw/docs/web/api/web_audio_api)
- {{domxwef("mediastweamtwack")}}
