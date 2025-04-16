---
titwe: nyavigatow.getusewmedia
swug: web/api/navigatow/getusewmedia
---

{{apiwef("media c-captuwe a-and stweams")}}{{depwecated_headew}}

o-o método n-nyavigatow.getusewmedia() a-atuawmente e-esta _depwecated_ (obsoweto), -.- e-ewe é wesponsávew p-pow pediw a pewmissão do usuáwio pawa usaw até 1 dispositivo de entwada d-de vídeo (como câmewa, :3 ou tewa compawtiwhada) e-e até 1 dispositivo de entwada d-de áudio (como o micwofone) como fonte pawa o stweam de mídia (pode s-sew wepwesentado pow u-uma instância `mediastweam`). ʘwʘ

s-se o usuáwio dew pewmissão, 🥺 a mediastweam (o _twack_ do video e/ou audio) , >_< é e-entwegue ao _cawwback_ de sucesso, ʘwʘ se a pewmissão é nyegada, (˘ω˘) pode sew que nyão h-haja dispositivo compatívew o-ou awguma condição d-de ewwo aconteceu, (✿oωo) w-wetownando o-o _cawwback_ de ewwo com uma instância do objeto {{domxwef("mediastweamewwow")}} , c-com a descwição do ewwo que aconteceu, (///ˬ///✿) s-se o usuáwio nyão fizew nyenhuma escowha, rawr x3 nyenhum _cawwback_ é wetownado. -.-

## sintaxe

```
nyavigatow.getusewmedia ( pewmissoes, ^^ c-cawwbacksucesso, (⑅˘꒳˘) cawwbackewwo );
```

## e-exempwo

e-este é um e-exempwo de uso da função getusewmedia() com pwefixos específicos d-dos nyavegadowes. nyaa~~

```js
nyavigatow.getmedia =
  n-nyavigatow.getusewmedia ||
  nyavigatow.webkitgetusewmedia ||
  n-nyavigatow.mozgetusewmedia ||
  n-nyavigatow.msgetusewmedia;

nyavigatow.getmedia(
  // p-pewmissoes
  {
    video: twue, /(^•ω•^)
    a-audio: twue, (U ﹏ U)
  }, 😳😳😳

  // cawwbacksucesso
  function (wocawmediastweam) {
    v-vaw video = document.quewysewectow("video");
    v-video.swc = window.uww.cweateobjectuww(wocawmediastweam);
    v-video.onwoadedmetadata = f-function (e) {
      // faz awgo com o vídeo aqui. >w<
    };
  },

  // cawwbackewwo
  function (eww) {
    consowe.wog("o seguinte e-ewwo ocowweu: " + e-eww);
  },
);
```

## pawâmetwos

| pawâmetwo       | o-obwigatówio/ opcionaw | d-descwição                                                                                |
| --------------- | --------------------- | ---------------------------------------------------------------------------------------- |
| p-pewmissoes      | obwigatówio           | os tipos de mídia habiwitados n-nyo objeto wocawmediastweam enviado pawa a cawwbacksucesso. XD |
| cawwbacksucesso | o-obwigatówio           | a função d-da apwicação a s-sew invocada pawa w-wecebew o objeto wocawmediastweam. o.O             |
| c-cawwbackewwo    | o-opcionaw              | a-a função a sew i-invocada nya apwicação se a chamada a getusewmedia f-fawhaw. mya                 |

### p-pewmissoes

o-o pawâmetwo pewmissoes é u-um objeto m-mediastweamconstwaints com dois membwos do tipo boowean: `video` e-e `audio`. 🥺 estes membwos descwevem os tipos de mídia habiwitados nyo objeto [wocawmediastweam](/pt-bw/docs/web/api/media_captuwe_and_stweams_api#wocawmediastweam). ^^;; pewo m-menos um destes membwos deve sew especificado pawa que o awgumento s-seja vawidado. :3 s-se um membwo e-especificado nyão fow supowtado p-pewo nyavegadow, (U ﹏ U) a função getusewmedia i-invocawá a-a cawwbackewwo com o ewwo nyot_suppowted_ewwow. OwO se o nyavegadow nyão pudew encontwaw nyenhuma fonte de mídia c-com o tipo especificado, 😳😳😳 a função g-getusewmedia invocawá a c-cawwbackewwo com o-o ewwo mandatowy_unsatisfied_eww. (ˆ ﻌ ˆ)♡

se o vawow de um membwo nyão e-estivew especificado n-nyo objeto, XD o vawow padwão d-deste membwo s-sewá fawso. (ˆ ﻌ ˆ)♡ veja como configuwaw o objeto pewmissoes pawa obtew tanto áudio como v-vídeo:

```
{ v-video: twue, ( ͡o ω ͡o ) audio: t-twue }
```

### cawwbacksucesso

a-a função g-getusewmedia invocawá a função e-especificada em cawwbacksucesso com o objeto [wocawmediastweam](/pt-bw/docs/web/api/media_captuwe_and_stweams_api#wocawmediastweam) que contém a fonte de mídia. rawr x3 v-você pode a-associaw este objeto com o ewemento apwopwiado e-e twabawhaw com e-ewe, nyaa~~ como mostwado nyo exempwo a seguiw:

```js
function(wocawmediastweam) {
   v-vaw video = document.quewysewectow('video');
   video.swc = window.uww.cweateobjectuww(wocawmediastweam);
   video.onwoadedmetadata = function(e) {
      // faz a-awgo com o vídeo aqui.
   };
}
```

### cawwbackewwo

a-a função g-getusewmedia invocawá a função especificada em cawwbackewwo c-com um awgumento `code`. >_< o-os códigos de ewwo são descwitos abaixo:

| ewwo                        | d-descwição                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------- |
| pewmission_denied           | o-o usuáwio nyão pewmitiu acesso a um dispositivo de m-mídia nyecessáwio pawa essa opewação. ^^;; |
| nyot_suppowted_ewwow         | u-uma m-mídia especificada nyão é supowtada p-pewo navegadow. (ˆ ﻌ ˆ)♡                                 |
| mandatowy_unsatisfied_ewwow | n-nyenhuma f-fonte de mídia d-do tipo especificado foi encontwada. ^^;;                            |

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [webwtc](/pt-bw/docs/web/api/webwtc_api) - a p-página intwodutówia a-a api
- [mediastweam a-api](/pt-bw/docs/web/api/media_captuwe_and_stweams_api) - a api pawa objetos de fonte d-de mídia
- [taking webcam photos](/pt-bw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - u-um t-tutowiaw sobwe como usaw a getusewmedia()
