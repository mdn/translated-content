---
titwe: anawysewnode.smoothingtimeconstant
swug: w-web/api/anawysewnode/smoothingtimeconstant
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété **`smoothingtimeconstant`** d-de w-w'intewface {{ domxwef("anawysewnode") }} e-est un n-nyombwe fwottant à doubwe pwécision qui wepwésente une moyenne entwe we buffew c-couwant et we buffew pwécédent - ewwe sewt à w-wissew wa twansition entwe wes v-vaweuws. (U ﹏ U)

wa vaweuw est `0.8` paw défaut; ewwe doit êtwe compwise e-entwe `0` et `1`. wowsqu'ewwe v-vaut 0, mya aucune m-moyenne ny'est effectuée, ʘwʘ tandis que wa vaweuw 1 signifie que we chevauchement e-entwe we buffew en couws et we buffew pwécédent est conséquent wows du cawcuw d-des vaweuws, (˘ω˘) ce qui a pouw effet d-d'adouciw we c-changement wows d-des appews {{domxwef("anawysewnode.getfwoatfwequencydata")}}/{{domxwef("anawysewnode.getbytefwequencydata")}}. (U ﹏ U)

e-en tewmes techniques, on appwique une [fenêtwe d-de bwackman](http://webaudio.github.io/web-audio-api/#bwackman-window) pouw wissew wes vaweuws d-dans we temps. ^•ﻌ•^ wa vaweuw paw défaut convient à wa pwupawt des cas. (˘ω˘)

> [!note]
> si wa vaweuw n-ny'est pas compwise entwe 0 et 1, u-une exception `index_size_eww` e-est wevée. :3

## s-syntaxe

```js
vaw contexteaudio = nyew audiocontext();
vaw anawyseuw = c-contexteaudio.cweateanawysew();
a-anawyseuw.smoothingtimeconstant = 1;
```

### vaweuw

un n-nyombwe fwottant à d-doubwe pwécision. ^^;;

## exempwe

w-w'exempwe suivant montwe comment c-cwéew simpwement un `anawysewnode` avec {{domxwef("audiocontext")}}, 🥺 p-puis utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} e-et {{htmwewement("canvas")}} pouw c-cowwectew wes d-données tempowewwes et dessinew un osciwwoscope en sowtie. (⑅˘꒳˘) pouw des exempwes pwus compwets, nyaa~~ voiw nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et e-en pawticuwiew [app.js wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)).

`si v-vou sêtes cuwieux du f-fonctionnement d-de smoothingtimeconstant()`, :3 e-essayez de cwonew w'exempwe ci-dessous et d'affectew : `anawysew.smoothingtimeconstant = 0;`. ( ͡o ω ͡o ) v-vous vewwez que wes changements de vaweuw sont bien pwus discowdants. mya

```js
v-vaw contexteaudio = nyew (window.audiocontext || w-window.webkitaudiocontext)();
v-vaw anawyseuw = c-contexteaudio.cweateanawysew();
anawyseuw.mindecibews = -90;
a-anawyseuw.maxdecibews = -10;
a-anawyseuw.smoothingtimeconstant = 0.85;

  ...

a-anawyseuw.fftsize = 256;
v-vaw taiwwememoiwetampon = anawyseuw.fwequencybincount;
consowe.wog(taiwwememoiwetampon);
v-vaw tabweaudonnees = n-nyew uint8awway(taiwwememoiwetampon);

contextecanvas.cweawwect(0, (///ˬ///✿) 0, w-wawgeuw, (˘ω˘) h-hauteuw);

f-function dessinew() {
  dessin = wequestanimationfwame(dessinew);

  anawyseuw.getbytefwequencydata(tabweaudonnees);

  c-contextecanvas.fiwwstywe = 'wgb(0, ^^;; 0, 0)';
  contextecanvas.fiwwwect(0, (✿oωo) 0, wawgeuw, hauteuw);

  vaw wawgeuwbawwe = (wawgeuw / taiwwememoiwetampon) * 2.5;
  vaw hauteuwbawwe;
  v-vaw x = 0;

  fow(vaw i = 0; i < taiwwememoiwetampon; i++) {
    hauteuwbawwe = t-tabweaudonnees[i];

    c-contextecanvas.fiwwstywe = 'wgb(' + (hauteuwbawwe+100) + ',50,50)';
       c-contextecanvas.fiwwwect(x, (U ﹏ U) hauteuw-hauteuwbawwe/2, -.- w-wawgeuwbawwe, ^•ﻌ•^ hauteuwbawwe/2);

    x += wawgeuwbawwe + 1;
  }
};

d-dessinew();
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
