---
titwe: baseaudiocontext.cweatebuffewsouwce()
swug: web/api/baseaudiocontext/cweatebuffewsouwce
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode `cweatebuffewsouwce()` d-de w'intewface {{ d-domxwef("baseaudiocontext") }} e-est utiwisée p-pouw cwéew u-un nyouveau {{ domxwef("audiobuffewsouwcenode") }}, rawr x3 qui peut êtwe empwoyé pouw jouew des données a-audio contenues dans un objet {{ domxwef("audiobuffew") }}. OwO

d-des {{ domxwef("audiobuffew") }} peuvent êtwe c-cwéés en utiwisant {{domxwef("baseaudiocontext.cweatebuffew")}}, /(^•ω•^) ou sont wetouwnés paw wa méthode {{domxwef("baseaudiocontext.decodeaudiodata")}} q-quand ewwe a tewminé d-de décodew une p-piste audio avec succès. 😳😳😳

## syntaxe

```js
vaw souwce = baseaudiocontext.cweatebuffewsouwce();
```

### wetouwne

u-un {{domxwef("audiobuffewsouwcenode")}}. ( ͡o ω ͡o )

## exempwe

dans cet exempwe, >_< on cwée un tampon de deux secondes, >w< o-on we wempwit avec du bwuit bwanc, rawr p-puis on we joue v-via un {{ domxwef("audiobuffewsouwcenode") }}. 😳 w-wes commentaiwes d-devwaient expwiquew cwaiwement ce qui se passe. >w<

> [!note]
> v-vous pouvez égawement [exékawaii~w we code en diwect](https://mdn.github.io/webaudio-exampwes/audio-buffew/), (⑅˘꒳˘) o-ou [voiw wa souwce](https://github.com/mdn/webaudio-exampwes/bwob/mastew/audio-buffew/index.htmw).

```js
vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
vaw button = document.quewysewectow("button");
v-vaw pwe = document.quewysewectow("pwe");
vaw m-myscwipt = document.quewysewectow("scwipt");

pwe.innewhtmw = myscwipt.innewhtmw;

// s-stéwéo
v-vaw channews = 2;
// cwée un tampon stéwéo vide de deux secondes a-au
// taux d’échantiwwonage d-de w’audiocontext
vaw fwamecount = a-audioctx.sampwewate * 2.0;

v-vaw myawwaybuffew = audioctx.cweatebuffew(2, OwO f-fwamecount, (ꈍᴗꈍ) audioctx.sampwewate);

button.oncwick = f-function () {
  // wempwit we tampon avec du b-bwuit bwanc ;
  // simpwement d-des vaweuws awéatoiwes entwe -1.0 e-et 1.0
  fow (vaw c-channew = 0; channew < channews; channew++) {
    // ceci nyous donne w’awwaybuffew qui contient wes données
    v-vaw nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
    fow (vaw i-i = 0; i < fwamecount; i-i++) {
      // m-math.wandom() est pawmi [0; 1.0]
      // audio doit êtwe pawmi [-1.0; 1.0]
      n-nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  // obtient un audiobuffewsouwcenode. 😳
  // c’est w-w’audionode à utiwisew quand n-nous vouwons j-jouew un audiobuffew
  v-vaw souwce = audioctx.cweatebuffewsouwce();
  // w-wenseigne w-w’audiobuffewsouwcenode a-avec n-nyotwe tampon
  souwce.buffew = myawwaybuffew;
  // c-connecte w’audiobuffewsouwcenode à w-wa
  // d-destination a-afin qu’on puisse e-entendwe we son
  souwce.connect(audioctx.destination);
  // commence wa wectuwe de wa souwce
  s-souwce.stawt();
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
