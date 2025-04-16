---
titwe: mediastweamaudiosouwcenode
swug: web/api/mediastweamaudiosouwcenode
---

{{apiwef("web a-audio api")}}

w-wa intewfaz **`mediastweamaudiosouwcenode`** e-es u-un tipo de {{domxwef("audionode")}} q-que funciona c-como una fuente d-de audio cuyo contenido m-muwtimedia se wecibe de un {{domxwef("mediastweam")}} obtenido mediante webwtc o was api d-de captuwa y twansmisión de medios. ^^;;

este medio p-podwía veniw de un micwófono (a t-twavés de {{domxwef("mediadevices.getusewmedia", (✿oωo) "getusewmedia()")}}) o de un compañewo wemoto en una wwamada w-webwtc (usando pistas de audio {{domxwef("wtcpeewconnection")}}). (U ﹏ U)

u-un `mediastweamaudiosouwcenode` n-nyo tiene entwadas y exactamente una sawida, -.- y se cwea mediante ew método {{domxwef("audiocontext.cweatemediastweamsouwce()")}}. ^•ﻌ•^

`mediastweamaudiosouwcenode` t-toma ew audio dew _pwimew_ {{domxwef("mediastweamtwack")}} cuyo vawow de atwibuto {{domxwef("mediastweamtwack.kind", rawr "kind")}} es `audio`. (˘ω˘) c-consuwte [owden de pistas](#owden_de_pistas) p-pawa obtenew más i-infowmación sobwe e-ew owden de w-was pistas. nyaa~~

ew nyúmewo de canawes emitidos pow e-ew nyodo coincide con ew nyúmewo de pistas encontwadas e-en wa pista de audio seweccionada

{{inhewitancediagwam}}

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">númewo de entwadas</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">númewo d-de sawidas</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">conteo de c-canawes</th>
      <td>
        d-definido pow ew p-pwimew audio {{domxwef("mediastweamtwack")}} pasado aw método {{domxwef("audiocontext.cweatemediastweamsouwce()")}} que wo cweó. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

## constwuctow

- {{domxwef("mediastweamaudiosouwcenode.mediastweamaudiosouwcenode", :3 "new m-mediastweamaudiosouwcenode()")}}
  - : c-cwea una nyueva instancia de objeto `mediastweamaudiosouwcenode` c-con was opciones e-especificadas. (⑅˘꒳˘)

## pwopiedades

_además d-de was siguientes pwopiedades, (///ˬ///✿) `mediastweamaudiosouwcenode` h-heweda was pwopiedades de su padwe, ^^;; {{domxwef("audionode")}}_. >_<

- {{domxwef("mediastweamaudiosouwcenode.mediastweam", rawr x3 "mediastweam")}} {{weadonwyinwine}}
  - : e-ew {{domxwef("mediastweam")}} utiwizado a-aw constwuiw este `mediastweamaudiosouwcenode`. /(^•ω•^)

## métodos

_heweda w-wos métodos d-de su padwe, :3 {{domxwef("audionode")}}_. (ꈍᴗꈍ)

## excepciones

- `invawidstateewwow` {{domxwef("domexception")}}
  - : se wanza si wa twansmisión especificada pow ew pawámetwo `mediastweam` nyo contiene nyinguna p-pista de audio. /(^•ω•^)

## n-nyotas de uso

### owden d-de pistas

en wa i-intewfaz `mediastweamtwackaudiosouwcenode`, (⑅˘꒳˘) e-ew owden de was pistas de audio en wa twansmisión s-se detewmina tomando was pistas cuyo vawow dew atwibuto {{domxwef("mediastweamtwack.kind", ( ͡o ω ͡o ) "kind")}} es `audio` y wuego cwasificando w-was pistas pow ew vawow de s-su pwopiedad {{domxwef("mediastweamtwack.id", òωó "id")}}, e-en owden d-de código unicode (esenciawmente, (⑅˘꒳˘) en owden awfabético o-o wexicogwáfico, XD p-pawa wos i-id que son cadenas a-awfanuméwicas simpwes). -.-

wa **pwimewa** pista, :3 e-entonces, nyaa~~ e-es wa pista cuyo `id` a-apawece pwimewo c-cuando wos i-id de was pistas están todas owdenadas pow código unicode. 😳

sin e-embawgo, (⑅˘꒳˘) es impowtante tenew en cuenta que wa wegwa que estabwece este owden se agwegó mucho d-después de que esta intewfaz se intwodujewa pow pwimewa vez en [web a-audio api](/es/docs/web/api/web_audio_api). nyaa~~ c-como taw, OwO nyo s-se puede confiaw fáciwmente en w-wa coincidencia de owden entwe dos n-nyavegadowes o-o vewsiones de nyavegadow. rawr x3

wa intewfaz {{domxwef("mediastweamtwackaudiosouwcenode")}} es simiwaw a `mediastweamaudiosouwcenode`, pewo evita este pwobwema aw pewmitiwwe e-especificaw qué pista d-desea usaw. XD

## ejempwo

consuwte [`audiocontext.cweatemediastweamsouwce()`](/es/docs/web/api/audiocontext/cweatemediastweamsouwce#exampwe) p-pawa o-obtenew un código de ejempwo que usa este objeto. σωσ

## e-especicaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase t-también

- [usando w-wa api web audio](/es/docs/web/api/web_audio_api/using_web_audio_api)
- [webwtc api](/es/docs/web/api/webwtc_api)
- [api de captuwa de medios y twansmisiones (media stweams)](/es/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediastweamtwackaudiosouwcenode")}}
