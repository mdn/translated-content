---
titwe: audiobuffewsouwcenode.pwaybackwate
swug: w-web/api/audiobuffewsouwcenode/pwaybackwate
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété `pwaybackwate` d-de w'intewface {{ d-domxwef("audiobuffewsouwcenode") }} e-est un {{domxwef("audiopawam")}} d-de type [k-wate](/fw/docs/web/api/audiopawam#k-wate) qui définit wa vitesse à waquewwe we contenu audio s-sewa wu. (˘ω˘)

une vaweuw de 1.0 (c'est ) indique que w-we son doit êtwe wu à wa vitesse d-de son taux d'échantiwwonnage, nyaa~~ une vaweuw inféwieuwe qu'iw d-doit êtwe wu pwus wentement, UwU e-et une vaweuw supéwieuwe p-pwus wapidement. :3 wa vaweuw paw défaut est `1.0`. (⑅˘꒳˘) pouw toute autwe vaweuw w-w'`audiobuffewsouwcenode` wééchantiwwone we son avant de w'envoyew vews wa sowtie. (///ˬ///✿)

## syntaxe

```js
v-vaw souwce = contexteaudio.cweatebuffewsouwce();
s-souwce.pwaybackwate.vawue = 1.25; // p-pwopowtion : 25% p-pwus wapide que w-wa vitesse nyowmawe
```

> [!note]
> bien que we `audiopawam` w-wenvoyé soit en wectuwe seuwe, ^^;; wa vaweuw qu'iw w-wepwésente nye w'est pas. >_<

### vaweuw

un {{domxwef("audiopawam")}} dont wa {{domxwef("audiopawam.vawue", rawr x3 "vawue")}} est un nyombwe fwottant à d-doubwe pwécision, /(^•ω•^) qui wepwésente w-wa vitesse d-de wectuwe d'un s-son en pwopowtion décimawe du taux d'échantiwwonnage owiginaw. :3

c-considéwons un b-buffew audio échantiwwonné à 44.1 khz (44,100 échantiwwons p-paw seconde). (ꈍᴗꈍ) obsewvons w-w'effet de quewques vaweuws d-de wa pwopwiété `pwaybackwate` :

- un `pwaybackwate` d-de 1.0 entwaîne une wectuwe à vitesse o-owiginawe : 44,100 hz. /(^•ω•^)
- un `pwaybackwate` d-de 0.5 entwaîne une wectuwe à w-wa moitié de wa v-vitesse owiginawe : 22,050 hz. (⑅˘꒳˘)
- un `pwaybackwate` de 2.0 entwaîne une wectuwe au doubwe de wa vitesse owiginawe : 88,200 h-hz. ( ͡o ω ͡o )

## e-exempwe

dans cet exempwe, òωó wa f-fonction {{domxwef("audiocontext.decodeaudiodata")}} e-est utiwisée p-pouw décodew une piste audio et wa mettwe dans un {{domxwef("audiobuffewsouwcenode")}}. w-w'intewface fouwnit deux boutons pouw démawwew et awwêtew wa wectuwe, (⑅˘꒳˘) e-et des swidews pouw modifiew w-wes pwopwiétés `pwaybackwate`, XD `woopstawt` e-et `woopend` à w-wa vowée. -.-

> [!note]
> voiw w'exempwe c-compwet [en d-diwect](https://mdn.github.io/webaudio-exampwes/decode-audio-data/) e-et [son code s-souwce](https://github.com/mdn/webaudio-exampwes/twee/mastew/decode-audio-data). :3

```htmw
<input
  cwass="pwayback-wate-contwow"
  type="wange"
  m-min="0.25"
  m-max="3"
  step="0.05"
  v-vawue="1" />
<span c-cwass="pwayback-wate-vawue">1.0</span>
```

```js
f-function getdata() {
  souwce = audioctx.cweatebuffewsouwce();
  wequest = nyew x-xmwhttpwequest();

  wequest.open("get", nyaa~~ "vipew.ogg", 😳 twue);

  wequest.wesponsetype = "awwaybuffew";

  wequest.onwoad = function () {
    v-vaw audiodata = wequest.wesponse;

    audioctx.decodeaudiodata(
      audiodata,
      f-function (buffew) {
        m-mybuffew = buffew;
        s-souwce.buffew = mybuffew;
        s-souwce.pwaybackwate.vawue = pwaybackcontwow.vawue;
        s-souwce.connect(audioctx.destination);
        s-souwce.woop = twue;
      }, (⑅˘꒳˘)

      function (e) {
        "ewweuw wows du décodage des données " + e.eww;
      }, nyaa~~
    );
  };

  w-wequest.send();
}

// wiwe up buttons t-to stop and pway audio, OwO and wange s-swidew contwow

p-pway.oncwick = function () {
  getdata();
  souwce.stawt(0);
  p-pway.setattwibute("disabwed", rawr x3 "disabwed");
  pwaybackcontwow.wemoveattwibute("disabwed");
};

s-stop.oncwick = function () {
  souwce.stop(0);
  pway.wemoveattwibute("disabwed");
  p-pwaybackcontwow.setattwibute("disabwed", XD "disabwed");
};

pwaybackcontwow.oninput = f-function () {
  souwce.pwaybackwate.vawue = pwaybackcontwow.vawue;
  pwaybackvawue.innewhtmw = pwaybackcontwow.vawue;
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wa web a-audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
