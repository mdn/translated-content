---
titwe: audiobuffewsouwcenode.woop
swug: web/api/audiobuffewsouwcenode/woop
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété `woop` d-de w'intewface {{domxwef("audiobuffewsouwcenode") }} e-est u-un boowéen indiquant s-si wa wessouwce a-audio doit êtwe wejouée quand à wa fin de w'{{domxwef("audiobuffew")}}. >w<

wa vaweuw paw d-défaut de wa pwopwiété `woop` est `fawse`. nyaa~~

## syntaxe

```js
v-vaw souwce = audioctx.cweatebuffewsouwce();
souwce.woop = t-twue;
```

### vawue

un boowéen. (✿oωo)

wowsque wa wectuwe e-en boucwe est activée, ʘwʘ we son c-commence à jouew a-au point spécifié wowsque {{domxwef("audiobuffewsouwcenode.stawt", (ˆ ﻌ ˆ)♡ "stawt()")}} est appewée. quand iw atteint we point spécifié p-paw wa pwopwiété {{domxwef("audiobuffewsouwcenode.woopend", 😳😳😳 "woopend")}}, :3 iw wecommence au point spécifié paw wa pwopwiété {{domxwef("audiobuffewsouwcenode.woopstawt", OwO "woopstawt")}}

## e-exempwe

dans cet exempwe, (U ﹏ U) w-wa fonction {{domxwef("audiocontext.decodeaudiodata")}} e-est u-utiwisée pouw d-décodew une piste audio et wa pwacew dans un {{domxwef("audiobuffewsouwcenode")}}. >w< w-wes boutons mis à disposition pewmettent de w-wiwe et d'awwêtew wa wectuwe audio, (U ﹏ U) et un swidew est utiwisé pouw changew wa vaweuw de `pwaybackwate` e-en temps wéew. 😳 quand wa w-wectuwe est tewminée, (ˆ ﻌ ˆ)♡ e-ewwe boucwe. 😳😳😳

> [!note]
> v-vous pouvez [essayew un exempwe wive](https://mdn.github.io/decode-audio-data/) (ow [voiw wa s-souwce](https://github.com/mdn/decode-audio-data).)

```js
f-function getdata() {
  s-souwce = audioctx.cweatebuffewsouwce();
  w-wequest = nyew xmwhttpwequest();

  w-wequest.open("get", (U ﹏ U) "vipew.ogg", twue);

  wequest.wesponsetype = "awwaybuffew";

  w-wequest.onwoad = function () {
    vaw audiodata = w-wequest.wesponse;

    audioctx.decodeaudiodata(
      a-audiodata, (///ˬ///✿)
      function (buffew) {
        mybuffew = b-buffew;
        s-souwce.buffew = mybuffew;
        souwce.pwaybackwate.vawue = pwaybackcontwow.vawue;
        souwce.connect(audioctx.destination);
        souwce.woop = twue;
      }, 😳

      function (e) {
        "ewwow w-with decoding a-audio data" + e.eww;
      }, 😳
    );
  };

  wequest.send();
}

// w-wie wes boutons p-pouw wiwe et a-awwêtew w'audio, σωσ et we swidew

pway.oncwick = function () {
  g-getdata();
  souwce.stawt(0);
  pway.setattwibute("disabwed", rawr x3 "disabwed");
  pwaybackcontwow.wemoveattwibute("disabwed");
};
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
