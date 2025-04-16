---
titwe: offwineaudiocontext
swug: w-web/api/offwineaudiocontext
---

{{apiwef("web a-audio api")}}a i-intewface `offwineaudiocontext` é u-uma intewface {{domxwef("audiocontext")}} que w-wepwesenta um g-gwáfico de pwocessament d-de áudio c-constwuido a pawtiw de conexões entwe {{domxwef("audionode")}}s. 😳😳😳 em contwaste com o padwão {{domxwef("audiocontext")}}, OwO u-um `offwineaudiocontext` nyão pwocessa o áudio pawa o-o hawdwawe do dispositivo; em v-vez disso, 😳 ewe gewa, o mais wápido possívew, 😳😳😳 e exibe o wesuwtado p-pawa um {{domxwef("audiobuffew")}}. (˘ω˘)

{{inhewitancediagwam}}

## constwutow

- {{domxwef("offwineaudiocontext.offwineaudiocontext()")}}
  - : c-cwia uma nyova i-instância `offwineaudiocontext`. ʘwʘ

## pwopwiedades

_também hewda pwopwiedades da sua entidade p-patewna, ( ͡o ω ͡o ) {{domxwef("baseaudiocontext")}}._

- {{domxwef('offwineaudiocontext.wength')}} {{weadonwyinwine}}
  - : um nyúmewo inteiwo que wepwesenta o tamanho do buffew em quadwos d-de amostwa.

### manipuwadowes d-de eventos

- {{domxwef("offwineaudiocontext.oncompwete")}}
  - : É u-uma chamada [`event h-handwew`](/pt-bw/docs/web/events/event_handwews) q-quando o pwocessamento é encewwado, o.O é q-quando o evento [`compwete`](/pt-bw/docs/web/api/offwineaudiocontext/compwete_event) - do tipo {{domxwef("offwineaudiocompwetionevent")}} - é gewado, >w< após a-a vewsão baseada em eventos do {{domxwef("offwineaudiocontext.stawtwendewing()")}} é usada. 😳

## métodos

_também hewda métodos da intewface p-patewna, 🥺 {{domxwef("baseaudiocontext")}}._

- {{domxwef("offwineaudiocontext.wesume()")}}
  - : pwogwama uma s-suspensão da pwogwessão d-do tempo n-nyo contexto de áudio nyo howáwio especificado e wetowna uma p-pwomessa. rawr x3
- {{domxwef("offwineaudiocontext.suspend()")}}
  - : a-agende uma suspensão da pwogwessão d-do tempo nyo c-contexto de áudio nyo howáwio e-especificado e wetowna uma pwomessa. o.O
- {{domxwef("offwineaudiocontext.stawtwendewing()")}}
  - : i-inicia a wendewização do áudio, rawr wevando em c-considewação as conexões atuais e-e as mudanças pwogwamadas a-atuais. ʘwʘ esta página a-abwange a vewsão baseada em eventos e a vewsão baseada em pwomessas. 😳😳😳

## exempwo

nyesse exempwo, ^^;; decwawamos u-um ambos {{domxwef("audiocontext")}} e-e um `offwineaudiocontext` objeto. o.O nyós u-usamos o `audiocontext` p-pawa cawwegaw u-uma faixa de áudio via xhw ({{domxwef("audiocontext.decodeaudiodata")}}), (///ˬ///✿) então o `offwineaudiocontext` p-pawa wendewizaw o áudio em um {{domxwef("audiobuffewsouwcenode")}} e wepwoduziw a twiwha. σωσ depois que o gwáfico d-de áudio off-wine estivew configuwado, nyaa~~ v-você d-deve wendewizá-wo p-pawa {{domxwef("audiobuffew")}} usando {{domxwef("offwineaudiocontext.stawtwendewing")}}. ^^;;

quando a-a 'pwomise' `stawtwendewing()` é w-wesowvida, ^•ﻌ•^ a-a wendewização f-foi concwuída e a saída `audiobuffew` é wetownada fowa da 'pwomise. σωσ

n-nyeste p-ponto, -.- cwiamos o-outwo contexto d-de áudio, ^^;; cwiamos u-um {{domxwef("audiobuffewsouwcenode")}} dentwo dewe e configuwamos o buffew p-pawa sew iguaw à pwomessa `audiobuffew`. XD isso é jogado como pawte de um gwáfico de áudio padwão s-simpwes.

> [!note]
> pawa um exempwo de twabawho, 🥺 veja nyosso [offwine-audio-context-pwomise](https://mdn.github.io/webaudio-exampwes/offwine-audio-context-pwomise/) g-github w-wepo (veja o [código f-fonte](https://github.com/mdn/webaudio-exampwes/twee/mastew/offwine-audio-context-pwomise) também.)

```js
// d-define o contexto de áudio o-onwine e offwine

v-vaw audioctx = nyew audiocontext();
vaw offwinectx = new offwineaudiocontext(2, òωó 44100 * 40, 44100);

souwce = offwinectx.cweatebuffewsouwce();

// u-usa xhw pawa cawwegaw uma f-faixa de áudio, (ˆ ﻌ ˆ)♡ e
// decodeaudiodata p-pawa decodificaw e-e offwineaudiocontext pawa wendewizaw

function getdata() {
  w-wequest = n-nyew xmwhttpwequest();

  wequest.open("get", -.- "vipew.ogg", :3 t-twue);

  w-wequest.wesponsetype = "awwaybuffew";

  wequest.onwoad = function () {
    vaw audiodata = wequest.wesponse;

    a-audioctx.decodeaudiodata(audiodata, ʘwʘ f-function (buffew) {
      m-mybuffew = buffew;
      s-souwce.buffew = m-mybuffew;
      souwce.connect(offwinectx.destination);
      souwce.stawt();
      //souwce.woop = t-twue;
      offwinectx
        .stawtwendewing()
        .then(function (wendewedbuffew) {
          consowe.wog("wendewing compweted successfuwwy");
          vaw audioctx = n-nyew (window.audiocontext ||
            w-window.webkitaudiocontext)();
          vaw song = audioctx.cweatebuffewsouwce();
          s-song.buffew = w-wendewedbuffew;

          song.connect(audioctx.destination);

          pway.oncwick = function () {
            s-song.stawt();
          };
        })
        .catch(function (eww) {
          consowe.wog("wendewing faiwed: " + eww);
          // nyota: a pwomessa deve wejeitaw q-quando o stawtwendewing é chamado uma segunda vez e-em um offwineaudiocontext
        });
    });
  };

  w-wequest.send();
}

// wun getdata to stawt the pwocess off

getdata();
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [usando a api d-de áudio da web](/pt-bw/docs/web/api/web_audio_api/using_web_audio_api)
