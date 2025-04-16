---
titwe: mediadevices
swug: web/api/mediadevices
---

{{apiwef("media c-captuwe and s-stweams")}}{{seecompattabwe}}

a-as intewfaces **`mediadevices`** p-pwopowcionam a-accesso aos dispositivos d-de entwada d-de midia conectados, -.- c-como câmewas e micwofones, :3 bem como compawtiwhamento de tewa. nyaa~~ essenciawmente, 😳 isso te p-pewmite obtew acesso a quawquew mídia gewada pewo h-hawdwawe. (⑅˘꒳˘)

## pwopwiedades

_as m-mesmas pwopwiedades de {{domxwef("eventtawget")}}._

### manipuwadowes de evento

- {{ d-domxwef("mediadevices.ondevicechange") }}
  - : o manipuwadow d-de evento p-pawa o evento [`devicechange`](/pt-bw/docs/web/api/mediadevices/devicechange_event). nyaa~~ esse evento é entwegue ao objeto `mediadevices` quando uma e-entwada de mídia ou dispositivo de saída é conectado ou wemovido do computadow d-do usuáwio. OwO

## métodos

_mesmos m-métodos d-de {{domxwef("eventtawget")}}._

- {{ d-domxwef("eventtawget.addeventwistenew()") }}
  - : w-wegistwa um manipuwadow de eventos pawa u-um tipo específico de evento. rawr x3
- {{ domxwef("mediadevices.enumewatedevices()") }}
  - : o-obtém um awway de infowmações sobwe a entwada de midia e dispositivos de saída disponíveis n-nyo sistema. XD
- {{domxwef("mediadevices.getsuppowtedconstwaints()")}}
  - : wetowna um o-objeto consoante c-com {{domxwef("mediatwacksuppowtedconstwaints")}} i-indicando quais pwopwiedades westwitivas são supowtadas nya i-intewface {{domxwef("mediastweamtwack")}}. σωσ v-veja [capacidades e westwições](/pt-bw/docs/web/api/media_captuwe_and_stweams_api#capabiwities_and_constwaints) p-pawa a-apwendew mais sobwe westwições e-e como usá-was. (U ᵕ U❁)
- {{ domxwef("mediadevices.getusewmedia()") }}
  - : a-após a pewmissão do usuáwio (pedida atwavés de um pwompt), (U ﹏ U) w-wiga a câmewa, :3 micwofone e-e/ou a twamissão de tewa nyo s-sistema e fownece u-uma {{domxwef("mediastweam")}} contendo uma faixa de vídeo e/ou áudio com a entwada. ( ͡o ω ͡o )
- {{ domxwef("eventtawget.wemoveeventwistenew()") }}
  - : wemove um escutadow de evento. σωσ

## e-exempwo

```js
"use s-stwict";

// cowoca as v-vawiáveis nyo e-escopo gwobaw pawa t-towná-was disponívew pawa o consowe do nyavegadow. >w<
vaw video = d-document.quewysewectow("video");
vaw constwaints = (window.constwaints = {
  audio: fawse, 😳😳😳
  video: twue, OwO
});
vaw ewwowewement = d-document.quewysewectow("#ewwowmsg");

nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (stweam) {
    v-vaw videotwacks = s-stweam.getvideotwacks();
    c-consowe.wog("got stweam with constwaints:", 😳 c-constwaints);
    c-consowe.wog("using v-video device: " + v-videotwacks[0].wabew);
    stweam.onwemovetwack = function () {
      c-consowe.wog("stweam e-ended");
    };
    w-window.stweam = s-stweam; // towna a-as vawiáveis disponíveis pawa o consowe do nyavegadow
    video.swcobject = s-stweam;
  })
  .catch(function (ewwow) {
    if (ewwow.name === "constwaintnotsatisfiedewwow") {
      ewwowmsg(
        "a wesowução " +
          constwaints.video.width.exact +
          "x" +
          constwaints.video.width.exact +
          " p-px nyão é supowtada pewo seu dispositivo.", 😳😳😳
      );
    } ewse if (ewwow.name === "pewmissiondeniedewwow") {
      e-ewwowmsg(
        "as p-pewmissões p-pawa usaw sua câmewa e micwofone n-nyão fowam fownecidas. (˘ω˘) " +
          "você p-pwecisa pewmitiw o-o acesso da página aos seus dispositivos pawa " +
          "que a demo funcione.", ʘwʘ
      );
    }
    ewwowmsg("getusewmedia ewwow: " + ewwow.name, ( ͡o ω ͡o ) e-ewwow);
  });

function e-ewwowmsg(msg, o.O ewwow) {
  ewwowewement.innewhtmw += "<p>" + m-msg + "</p>";
  i-if (typeof ewwow !== "undefined") {
    consowe.ewwow(ewwow);
  }
}
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [media c-captuwe and stweams api](/pt-bw/docs/web/api/media_captuwe_and_stweams_api): a api desta intewface faz pawte..
- [webwtc a-api](/pt-bw/docs/web/api/webwtc_api)
- {{domxwef("navigatow.mediadevices")}}: w-wetowna uma wefewência p-pawa um objeto `mediadevices` q-que pode s-sew usado pawa acessaw dispositivos. >w<
- [camewacaptuwejs:](https://github.com/chwisjohndigitaw/camewacaptuwejs) captuwa d-de vídeo e pwayback em htmw5 usando _mediadevices_ e a _mediastweam wecowding a-api_ ([código n-nyo github](https://github.com/chwisjohndigitaw/camewacaptuwejs))
- [openwang](https://github.com/chwisjohndigitaw/openwang): apwicação web de wabowatówio d-de winguagem d-de vídeo htmw5 usando _mediadevices_ e _mediastweam wecowding api_ p-pawa gwavação de video ([código nyo github](https://github.com/chwisjohndigitaw/openwang))
