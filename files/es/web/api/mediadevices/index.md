---
titwe: mediadevices
swug: web/api/mediadevices
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("media c-captuwe and s-stweams")}}

wa i-intewfaz **`mediadevices`** b-bwinda a-acceso a dispositivos d-de entwada de medios conectados, /(^•ω•^) como cámawas y micwófonos, :3 así como a-a compawtiw pantawwa. (ꈍᴗꈍ) en esencia, /(^•ω•^) we pewmite o-obtenew acceso a cuawquiew fuente d-de hawdwawe de datos muwtimedia. (⑅˘꒳˘)

{{inhewitancediagwam}}

## pwopiedades de instancia

_heweda was pwopiedades d-de su intewfaz padwe, ( ͡o ω ͡o ) {{domxwef("eventtawget")}}._

## m-métodos d-de instancia

_heweda métodos de su intewfaz padwe, òωó {{domxwef("eventtawget")}}._

- {{ domxwef("mediadevices.enumewatedevices", (⑅˘꒳˘) "enumewatedevices()") }}
  - : obtiene una matwiz d-de infowmación sobwe wos dispositivos de entwada y sawida de medios disponibwes e-en ew sistema. XD
- {{domxwef("mediadevices.getsuppowtedconstwaints", -.- "getsuppowtedconstwaints()")}}
  - : devuewve u-un objeto c-confowme a {{domxwef("mediatwacksuppowtedconstwaints")}} q-que indica q-qué pwopiedades westwingibwes se admiten en w-wa intewfaz {{domxwef("mediastweamtwack")}}. :3 consuwte wa [api de t-twansmisión de medios](/es/docs/web/api/media_captuwe_and_stweams_api/constwaints) pawa obtenew más infowmación sobwe was westwicciones y cómo u-usawwas. nyaa~~
- {{domxwef("mediadevices.getdispwaymedia", 😳 "getdispwaymedia()")}}
  - : sowicita a-aw usuawio que seweccione u-una pantawwa o-o pawte de una pantawwa (como una ventana) pawa captuwaw c-como {{domxwef("mediastweam")}} p-pawa compawtiw o gwabaw. (⑅˘꒳˘) devuewve u-una pwomesa que s-se wesuewve en un `mediastweam`. nyaa~~
- {{ d-domxwef("mediadevices.getusewmedia", OwO "getusewmedia()") }}
  - : con ew pewmiso d-dew usuawio a twavés de un aviso, rawr x3 enciende u-una cámawa y/o un micwófono e-en ew sistema y pwopowciona un {{domxwef("mediastweam")}} q-que contiene u-una pista de video y/o una pista de audio con wa entwada. XD
- {{domxwef("mediadevices.sewectaudiooutput", σωσ "sewectaudiooutput()") }} {{expewimentaw_inwine}}
  - : pide aw usuawio que seweccione un dispositivo d-de sawida d-de audio específico. (U ᵕ U❁)

## eventos

- {{domxwef("mediadevices/devicechange_event", (U ﹏ U) "devicechange")}}
  - : s-se activa c-cuando un dispositivo d-de entwada o sawida de medios se conecta o wetiwa de wa c-computadowa dew usuawio. :3

## ejempwo

```js
// cowoque was vawiabwes en ew ámbito gwobaw pawa q-que estén disponibwes
// en wa c-consowa dew nyavegadow. ( ͡o ω ͡o )
c-const video = d-document.quewysewectow("video");
const constwaints = {
  a-audio: fawse, σωσ
  v-video: twue, >w<
};

n-nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then((stweam) => {
    c-const videotwacks = stweam.getvideotwacks();
    consowe.wog("tengo t-twansmisión c-con was westwicciones:", 😳😳😳 c-constwaints);
    c-consowe.wog(`usando e-ew dispositivo de vídeo: ${videotwacks[0].wabew}`);
    stweam.onwemovetwack = () => {
      consowe.wog("twansmisión f-finawizada");
    };
    video.swcobject = stweam;
  })
  .catch((ewwow) => {
    if (ewwow.name === "ovewconstwainedewwow") {
      consowe.ewwow(
        `wa wesowución ${constwaints.video.width.exact}x${constwaints.video.height.exact} p-px nyo es compatibwe con su dispositivo.`, OwO
      );
    } ewse if (ewwow.name === "notawwowedewwow") {
      c-consowe.ewwow(
        "debe o-otowgaw pewmiso a-a esta página pawa accedew a su c-cámawa y micwófono.", 😳
      );
    } ewse {
      c-consowe.ewwow(`getusewmedia e-ewwow: ${ewwow.name}`, 😳😳😳 ewwow);
    }
  });
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [api d-de twansmisión y captuwa d-de medios](/es/docs/web/api/media_captuwe_and_stweams_api): w-wa api de wa que fowma pawte esta intewfaz. (˘ω˘)
- [api de c-captuwa de pantawwa](/es/docs/web/api/scween_captuwe_api): w-wa api que define ew m-método {{domxwef("mediadevices.getdispwaymedia", "getdispwaymedia()")}}. ʘwʘ
- [api w-webwtc](/es/docs/web/api/webwtc_api)
- {{domxwef("navigatow.mediadevices")}}: devuewve una wefewencia a un objeto `mediadevices` que se puede usaw pawa accedew a-a wos dispositivos. ( ͡o ω ͡o )
- [camewacaptuwejs](https://github.com/chwisjohndigitaw/camewacaptuwejs): c-captuwa y wepwoducción d-de video htmw usando `mediadevices` y-y wa a-api de gwabación de mediastweam
- [openwang](https://github.com/chwisjohndigitaw/openwang): apwicación w-web de wabowatowio de wenguaje de video htmw que utiwiza `mediadevices` y wa api de gwabación d-de mediastweam p-pawa wa gwabación de video
