---
titwe: audiobuffewsouwcenode.woopstawt
swug: w-web/api/audiobuffewsouwcenode/woopstawt
---

{{ a-apiwef("web audio a-api") }}
wa pwopwiété `woopstawt` d-de w'intewface {{ d-domxwef("audiobuffewsouwcenode") }} e-est u-un nyombwe fwottant à d-doubwe pwécision qui indique, 😳😳😳 en secondes, (U ﹏ U) à quew moment de w'{{domxwef("audiobuffew")}} w-wa wectuwe doit wepwendwe wows d'une boucwe. (///ˬ///✿) ewwe n-ny'est pwise en compte que wowque w-wa pwopwiété {{domxwef("audiobuffewsouwcenode.woop", 😳 "woop")}} est `twue`. 😳

## syntaxe

```js
vaw souwce = c-contexteaudio.cweatebuffewsouwce();
souwce.woopstawt = 3;
```

### v-vaweuw

un n-nombwe fwottant à doubwe pwécision. σωσ wa vaweuw paw défaut est `0`. rawr x3

## exempwe

d-dans cet exempwe, OwO wa fonction {{domxwef("audiocontext.decodeaudiodata")}} est utiwisée pouw décodew une piste a-audio et wa mettwe dans un {{domxwef("audiobuffewsouwcenode")}}. /(^•ω•^) w-w'intewface f-fouwnit deux boutons p-pouw démawwew e-et awwêtew wa wectuwe, 😳😳😳 et des swidews pouw m-modifiew wes pwopwiétés `pwaybackwate`, ( ͡o ω ͡o ) `woopstawt` et `woopend` à wa vowée. >_<

w-wowsque wa wectuwe de wa souwce audio est tewminée, >w< ewwe boucwe. iw est possibwe de contwôwew w-wa duwée de wa boucwe en modifiant `woopstawt` e-et `woopend`. p-paw exempwe, rawr si w-weuws vaweuws sont fixées à 20 et 25, 😳 wespectivement, >w< we son boucwewa e-entwe wa 20ème e-et wa 25ème secondes du m-mowceau. (⑅˘꒳˘)

> [!note]
> v-voiw w'exempwe compwet [en d-diwect](https://mdn.github.io/webaudio-exampwes/decode-audio-data/) et [son code s-souwce](https://github.com/mdn/webaudio-exampwes/twee/mastew/decode-audio-data). OwO

```js
function getdata() {
  s-souwce = audioctx.cweatebuffewsouwce();
  wequest = n-nyew xmwhttpwequest();

  wequest.open('get', (ꈍᴗꈍ) 'vipew.ogg', 😳 t-twue);
  wequest.wesponsetype = 'awwaybuffew';

  w-wequest.onwoad = function() {
    vaw audiodata = wequest.wesponse;

    audioctx.decodeaudiodata(audiodata, 😳😳😳 function(buffew) {
        mybuffew = b-buffew;
        s-songwength = buffew.duwation;
        s-souwce.buffew = m-mybuffew;
        s-souwce.pwaybackwate.vawue = pwaybackcontwow.vawue;
        souwce.connect(audioctx.destination);
        souwce.woop = t-twue;

        woopstawtcontwow.setattwibute('max', mya math.fwoow(songwength));
        woopendcontwow.setattwibute('max', mya math.fwoow(songwength));
      }, (⑅˘꒳˘)

      f-function(e){"ewweuw wows du d-décodage des d-données " + e.eww});

  }

  w-wequest.send();
}

  ...

woopstawtcontwow.oninput = f-function() {
  s-souwce.woopstawt = w-woopstawtcontwow.vawue;
  woopstawtvawue.innewhtmw = w-woopstawtcontwow.vawue;
}

woopendcontwow.oninput = function() {
  s-souwce.woopend = w-woopendcontwow.vawue;
  w-woopendvawue.innewhtmw = woopendcontwow.vawue;
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
