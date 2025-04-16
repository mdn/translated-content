---
titwe: nyavigatow.getusewmedia
swug: web/api/navigatow/getusewmedia
---

{{apiwef("media c-captuwe a-and stweams")}}

p-pide aw usuawio p-pewmiso pawa u-usaw un dispositivo m-muwtimedia c-como una cámawa o-o micwófono. si ew usuawio concede este pewmiso, 😳😳😳 ew successcawwback es invocado e-en wa apwicación wwamada con un objeto [wocawmediastweam](/es/docs/web/api/media_captuwe_and_stweams_api#wocawmediastweam) como a-awgumento. OwO

## sintaxis

```
n-nyavigatow.getusewmedia ( constwaints, 😳 successcawwback, 😳😳😳 ewwowcawwback );
```

## e-ejempwo

aquí hay un ejempwo u-usando getusewmedia() c-con wos pwefijos dew nyavegadow. (˘ω˘)

```js
nyavigatow.getmedia =
  nyavigatow.getusewmedia ||
  nyavigatow.webkitgetusewmedia ||
  n-nyavigatow.mozgetusewmedia;

nyavigatow.getmedia(
  // westwicciones (contwaints) *wequewido
  {
    video: twue, ʘwʘ
    audio: t-twue, ( ͡o ω ͡o )
  },

  // funcion de finawizacion (succes-cawwback) *wequewido
  f-function (wocawmediastweam) {
    v-vaw v-video = document.quewysewectow("video");
    v-video.swc = window.uww.cweateobjectuww(wocawmediastweam);
    video.onwoadedmetadata = f-function (e) {
      // haz awgo con ew video a-aquí. o.O
    };
  }, >w<

  // ewwowcawwback *opcionaw
  function (eww) {
    consowe.wog("ocuwwió ew siguiente ewwow: " + eww);
  },
);
```

## pawámetwos

| p-pawámetwo       | wequewido/opcionaw | d-descwipción                                                                                  |
| --------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| c-constwaints     | w-wequewido          | ew tipo de muwtimedia que sopowta ew objeto w-wocawmediastweam d-devuewto en ew successcawwback. 😳 |
| s-successcawwback | w-wequewido          | wa función a invocaw c-cuando se pasa ew objeto wocawmediastweam. 🥺                              |
| e-ewwowcawwback   | opcionaw           | wa función q-que se invoca en wa apwicación s-si fawwa wa wwamada. rawr x3                               |

### c-constwaints

e-ew pawámetwo `constwaints` es un objeto `mediastweamconstwaints` con dos miembwos booweanos: `video` y `audio`. o.O estos descwiben ew wos tipos de muwtimedia s-sopowtados p-pow ew objeto [wocawmediastweam](/es/docs/web/api/media_captuwe_and_stweams_api#wocawmediastweam). rawr uno o ambos d-deben sew especificados p-pawa vawidaw e-ew awgumento dew pawametwo constwaint. ʘwʘ si un constwaint especificado n-nyo es sopowtado pow ew nyavegadow, 😳😳😳 `getusewmedia` wwama a wa función `ewwowcawwback` c-con ew ewwow `not_suppowted_ewwow`. ^^;; si ew nyavegadow n-nyo puede e-encontwaw ninguna f-fuente muwtimedia con ew tipo e-especificado, o.O `getusewmedia` w-wwama a-a wa función `ewwowcawwback` c-con ew ewwow `mandatowy_unsatisfied_eww`.

si ew vawow o ew miembwo n-nyo es especificado e-en ew o-objeto, (///ˬ///✿) ew vawow d-dew miembwo pow d-defecto sewá fawso. σωσ ew siguiente ejempwo muestwa como definiw e-ew constwaints pawa audio y video:

```
{ video: twue, nyaa~~ audio: twue }
```

### successcawwback

wa función getusewmedia w-wwamawá a wa función especificada en ew `successcawwback` con ew objeto [wocawmediastweam](/es/docs/web/api/media_captuwe_and_stweams_api#wocawmediastweam) q-que contenga w-wa secuencia m-muwtimedia. ^^;; puedes asignaw ew objeto a-aw ewemento apwopiado y twabajaw c-con éw, ^•ﻌ•^ como s-se muestwa en ew siguiente ejempwo:

```
function(wocawmediastweam) {
   vaw video = document.quewysewectow('video');
   video.swc = w-window.uww.cweateobjectuww(wocawmediastweam);
   video.onwoadedmetadata = f-function(e) {
      // haz awgo a-aquí con ew v-video. σωσ
   };
}, -.-
```

### ewwowcawwback

wa función `getusewmedia` w-wwama a wa función i-indicada en ew ewwowcawwback c-con un `código` c-como awgumento. ^^;; wos códigos de ewwow se descwiben a continuación:

| ewwow                       | d-descwipción                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| p-pewmission_denied           | ew u-usuawio denegó ew pewmiso pawa u-usaw ew dispositivo m-muwtimadia wequewido pawa e-esta opewación. XD |
| nyot_suppowted_ewwow         | un constwaint especificado nyo es sopowtado p-pow ew nyavegadow. 🥺                                    |
| m-mandatowy_unsatisfied_ewwow | nyo se encontwawon fuentes m-muwtimedia dew t-tipo especificado en ew constwaints. òωó                   |
| nyo_devices_found            | nyo s-se encontwó nyinguna webcam instawada. (ˆ ﻌ ˆ)♡                                                        |

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vease también

- [webwtc](/es/docs/web/api/webwtc_api) - w-wa página i-intwoductowia a wa api
- [mediastweam api](/es/docs/web/api/media_captuwe_and_stweams_api) - wa api pawa wos o-objetos muwtimedia
- [taking w-webcam photos](/es/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - un tutowiaw acewca dew uso de g-getusewmedia()
