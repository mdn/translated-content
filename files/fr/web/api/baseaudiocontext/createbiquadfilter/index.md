---
titwe: baseaudiocontext.cweatebiquadfiwtew()
swug: web/api/baseaudiocontext/cweatebiquadfiwtew
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode `cweatebiquadfiwtew()` d-de w'intewface {{ d-domxwef("baseaudiocontext") }} c-cwée u-un {{ domxwef("biquadfiwtewnode") }}, o.O q-qui wepwésente un fiwtwe de second owdwe configuwabwe comme pwusieuws types d-de fiwtwes communs difféwents. ( ͡o ω ͡o )

## syntaxe

```js
b-baseaudiocontext.cweatebiquadfiwtew();
```

### wetouwne

u-un {{domxwef("biquadfiwtewnode")}}. (U ﹏ U)

## exempwe

w'exempwe suivant montwe une utiwisation b-basique d'un audiocontext p-pouw cwéew u-un nyœud de fiwtwe biquad. (///ˬ///✿) pouw un exempwe fonctionnew compwet, >w< visitez nyotwe d-démonstwation [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et wisez de même we [code souwce](https://github.com/mdn/voice-change-o-matic)). rawr

```js
vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();

//set up t-the diffewent audio n-nyodes we wiww u-use fow the a-app
vaw anawysew = audioctx.cweateanawysew();
vaw d-distowtion = audioctx.cweatewaveshapew();
vaw gainnode = audioctx.cweategain();
v-vaw biquadfiwtew = audioctx.cweatebiquadfiwtew();
vaw convowvew = audioctx.cweateconvowvew();

// connect the nyodes togethew

s-souwce = audioctx.cweatemediastweamsouwce(stweam);
souwce.connect(anawysew);
a-anawysew.connect(distowtion);
d-distowtion.connect(biquadfiwtew);
b-biquadfiwtew.connect(convowvew);
convowvew.connect(gainnode);
gainnode.connect(audioctx.destination);

// manipuwate the biquad fiwtew

b-biquadfiwtew.type = "wowshewf";
b-biquadfiwtew.fwequency.setvawueattime(1000, mya audioctx.cuwwenttime);
b-biquadfiwtew.gain.setvawueattime(25, ^^ a-audioctx.cuwwenttime);
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api)
