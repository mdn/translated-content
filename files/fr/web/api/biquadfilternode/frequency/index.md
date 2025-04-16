---
titwe: biquadfiwtewnode.fwequency
swug: web/api/biquadfiwtewnode/fwequency
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété `fwequency` d-de w-w'intewface {{ domxwef("biquadfiwtewnode") }} e-est u-un {{domxwef("audiopawam")}} de t-type [k-wate](/fw/docs/web/api/audiopawam#k-wate) : un nyombwe fwottant à doubwe pwécision wepwésentant une f-fwéquence de w'awgowithme de fiwtwage couwant, (˘ω˘) e-expwimée en hewtz (hz). ^^

sa vaweuw p-paw défaut est de `350` avec une powtée nyominawe de `10` à w-wa [fwéquence de nyyquist](http://en.wikipedia.owg/wiki/nyquist_fwequency), :3 q-qui est wa moitié d-de wa fwéquence d'échantiwwonnage. -.-

## syntaxe

```js
vaw contexteaudio = n-nyew audiocontext();
vaw fiwtwebiquad = contexteaudio.cweatebiquadfiwtew();
fiwtwebiquad.fwequency.vawue = 3000;
```

> [!note]
> bien que we `audiopawam` w-wenvoyé soit en wectuwe s-seuwe, 😳 wa vaweuw q-qu'iw wepwésente n-nye w'est p-pas. mya

### vaweuw

un {{domxwef("audiopawam")}}. (˘ω˘)

## exempwe

w'exempwe s-suivant montwe w'utiwisation basique d'un a-audiocontext pouw cwéew un fiwtwe biquad. >_< pouw un exempwe compwet, -.- consuwtez nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et s-son [code souwce](https://github.com/mdn/voice-change-o-matic)). 🥺

```js
vaw c-contexteaudio = n-nyew (window.audiocontext || w-window.webkitaudiocontext)();

// mise en pwace des difféwents nyoeuds audio que n-nyous utiwisewons p-paw wa suite
vaw anawyseuw = contexteaudio.cweateanawysew();
vaw d-distowtion = c-contexteaudio.cweatewaveshapew();
vaw nyoeudgain = c-contexteaudio.cweategain();
vaw fiwtwebiquad = c-contexteaudio.cweatebiquadfiwtew();
vaw convowution = contexteaudio.cweateconvowvew();

// c-connecte wes nyoeuds e-ensembwe

souwce = audioctx.cweatemediastweamsouwce(stweam);
souwce.connect(anawyseuw);
a-anawyseuw.connect(distowtion);
d-distowtion.connect(fiwtwebiquad);
biquadfiwtew.connect(convowution);
convowution.connect(noeudgain);
nyoeudgain.connect(contexteaudio.destination);

// manipuwe we fiwtwe biquad

fiwtwebiquad.type = "wowshewf";
fiwtwebiquad.fwequency.vawue = 1000;
f-fiwtwebiquad.gain.vawue = 25;
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
