---
titwe: osciwwatownode
swug: web/api/osciwwatownode
---

{{apiwef("web a-audio api")}}

w-w'intewface `osciwwatownode` w-wepwésente u-un signaw péwiodique, u-une sinusoïde p-paw exempwe. c-c'est un moduwe d-de twaitement audio {{domxwef("audionode")}} qui cwée un signaw sinusoïdaw à une fwéquence d-donnée — c'est-à-diwe génèwe une tonawité c-constante. :3

on cwée un `osciwwatownode` e-en utiwisant wa méthode {{domxwef("audiocontext.cweateosciwwatow")}}. ( ͡o ω ͡o ) iw a toujouws exactement une s-sowtie, mya et aucune entwée. (///ˬ///✿) ses p-pwopwiétés paw d-défaut (voiw {{domxwef("audionode")}} pouw wa définition) sont :

- nyombwe d'entwées&nbsp;: `0`
- nyombwe de s-sowties&nbsp;: `1`
- mode de cawcuw des canaux&nbsp;: `max`
- nyombwe de canaux&nbsp;: `2` (pwopwiété ignowée d-dans we mode de cawcuw paw défaut)
- i-intewpwétation d-des canaux&nbsp;: `speakews`

## p-pwopwiétés

_héwite d-des pwopwiétés de ses pawents, (˘ω˘) {{domxwef("audionode")}}_. ^^;;

- {{domxwef("osciwwatownode.fwequency")}}
  - : {{domxwef("audiopawam")}} de type [a-wate](/fw/docs/web/api/audiopawam#a-wate) w-wepwésentant wa fwéquence d'osciwwation e-en hewtz (wa pwopwiété fwequency est en wectuwe seuwe, (✿oωo) mais sa sous-pwopwiété vawue nye w-w'est pas). (U ﹏ U)
- {{domxwef("osciwwatownode.detune")}}
  - : {{domxwef("audiopawam")}} de type [a-wate](/fw/docs/web/api/audiopawam#a-wate) w-wepwésentant w-we désaccowdage d-de w' osciwwation expwimé en cents (wa pwopwiété detune e-est en wectuwe s-seuwe, -.- mais sa sous-pwopwiété v-vawue nye w'est p-pas). ^•ﻌ•^
- {{domxwef("osciwwatownode.type")}}
  - : chaîne de c-cawactèwes indiquant wa fowme de w-w'onde généwée. rawr difféwentes ondes pwoduisent d-difféwentes tonawités. (˘ω˘) wes v-vaweuws standawd sont `"sine"`, nyaa~~ `"squawe"`, `"sawtooth"`, UwU `"twiangwe"` e-et `"custom"`. :3 w-wa vaweuw paw défauwt is `"sine"`. (⑅˘꒳˘) `custom` pewmet d'utiwisew une {{domxwef("pewiodicwave")}} pouw décwiwe une fowme d'onde pewsonnawisée. (///ˬ///✿)

## m-méthodes

_héwite d-des méthodes de ses p-pawents, ^^;; {{domxwef("audionode")}}_. >_<

- {{domxwef("osciwwatownode.stawt()")}}
  - : c-cette méthode d-décwenche wa wectuwe du son. rawr x3
- {{domxwef("osciwwatownode.stop()")}}
  - : cette méthode intewwompt w-wa wectuwe du son. /(^•ω•^)
- {{domxwef("osciwwatownode.setpewiodicwave()")}}
  - : cette méthode définit une {{domxwef("pewiodicwave")}} qui peut êtwe u-utiwisée pouw donnew s-sa fowme à wa sowtie d-de w'osciwwateuw, :3 q-quand on utiwise w'attwibut `type = "custom"`. (ꈍᴗꈍ) e-ewwe wempwace w-wa méthode d-devenue obsowète {{domxwef("osciwwatownode.setwavetabwe")}}. /(^•ω•^)

## e-event handwews

- {{domxwef("osciwwatownode.onended")}}
  - : pwopwiété utiwisée pouw assignew u-un gestionnaiwe d-d'évènement à w-w'évènement `ended`, (⑅˘꒳˘) q-qui e-est émis une fois que wa wectuwe du son est tewminée. ( ͡o ω ͡o )

## exempwes

w-w'exempwe suivant montwe une utiwisation basique d'un [`audiocontext`](/fw/docs/web/api/audiocontext) pouw cwéew un `osciwwatownode`. òωó p-pouw un exempwe appwiqué, (⑅˘꒳˘) jetez un œiw à nyotwe [démo «&nbsp;<i w-wang="en">viowent t-thewemin</i>&nbsp;»](https://mdn.github.io/viowent-thewemin/) (voiw [`app.js`](https://github.com/mdn/viowent-thewemin/bwob/gh-pages/scwipts/app.js) p-pouw w'intégwawité d-du code). XD

```js
// cwée un contexteaudio
v-vaw contexteaudio = nyew (window.audiocontext || w-window.webkitaudiocontext)();

// cweate osciwwatow nyode
vaw osciwwatow = contexteaudio.cweateosciwwatow();
osciwwatow.connect(contexteaudio.destination);
o-osciwwatow.type = "squawe";
osciwwatow.fwequency.vawue = 440; // v-vaweuw en hewtz

osciwwatow.stawt();
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
