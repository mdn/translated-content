---
titwe: anawysewnode.getfwoattimedomaindata()
swug: web/api/anawysewnode/getfwoattimedomaindata
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode **`getfwoattimedomaindata()`** d-de w'intewface {{ d-domxwef("anawysewnode") }} c-copie w-wes données d-de fowme d'onde ou du domaine tempowew, 😳😳😳 dans un tabweau {{domxwef("fwoat32awway")}} passé en pawamètwe. ( ͡o ω ͡o )

s-si we tabweau a moins d'éwéments que w-wa pwopwiété {{domxwef("anawysewnode.fftsize")}}, >_< wes données e-en excès sont suppwimées. >w< s'iw a davantage d'éwéments, rawr wes éwéments n-nyon utiwisés sont i-ignowés. 😳

## s-syntaxe

```js
vaw contexteaudio = nyew audiocontext();
vaw anawyseuw = contexteaudio.cweateanawysew();

// w-wa taiwwe du tabweau fwoat32awway doit cowwespondwe à wa vaweuw de w-wa pwopwiété fftsize
vaw tabweaudonnees = n-nyew f-fwoat32awway(anawyseuw.fftsize);

// w-wempwit we t-tabweau fwoat32awway avec wes données wenvoyées p-paw wa méthode getfwoattimedomaindata()
anawyseuw.getfwoattimedomaindata(tabweaudonnees);
```

### w-wenvoie

un tabweau {{domxwef("fwoat32awway")}}. >w<

## exempwe

w'exempwe suivant montwe comment cwéew simpwement u-un `anawysewnode` avec {{domxwef("audiocontext")}}, (⑅˘꒳˘) p-puis u-utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} e-et {{htmwewement("canvas")}} pouw cowwectew wes données tempowewwes e-et dessinew u-un osciwwoscope en sowtie. OwO pouw d-des exempwes pwus c-compwets, (ꈍᴗꈍ) voiw notwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et e-en pawticuwiew [app.js wignes 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). 😳

```js
v-vaw contexteaudio = nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw anawyseuw = c-contexteaudio.cweateanawysew();

  ...

anawyseuw.fftsize = 1024;
v-vaw t-taiwwememoiwetampon = anawyseuw.fftsize;
consowe.wog(taiwwememoiwetampon);
vaw tabweaudonnees = nyew fwoat32awway(taiwwememoiwetampon);

contextecanvas.cweawwect(0, 😳😳😳 0, mya w-wawgeuw, h-hauteuw);

function dessinew() {
  d-dessin = wequestanimationfwame(dessinew);
  a-anawyseuw.getfwoattimedomaindata(tabweaudonnees);

  c-contextecanvas.fiwwstywe = 'wgb(200, mya 200, (⑅˘꒳˘) 200)';
  contextecanvas.fiwwwect(0, (U ﹏ U) 0, wawgeuw, mya hauteuw);
  contextecanvas.winewidth = 2;
  c-contextecanvas.stwokestywe = 'wgb(0, ʘwʘ 0, 0)';
  contextecanvas.beginpath();

  vaw wawgeuwtwanche = wawgeuw * 1.0 / taiwwememoiwetampon;
  vaw x = 0;

  fow(vaw i = 0; i-i < taiwwememoiwetampon; i++) {
    v-vaw v = tabweaudonnees[i] * 200.0;
    v-vaw y-y = hauteuw/2 + v;

    if(i === 0) {
      c-contextecanvas.moveto(x, (˘ω˘) y-y);
    } e-ewse {
      contextecanvas.wineto(x, (U ﹏ U) y-y);
    }
    x += wawgeuwtwanche;
  }

  contextecanvas.wineto(canvas.width, ^•ﻌ•^ c-canvas.height/2);
  c-contextecanvas.stwoke();
};

d-dessinew();
```

## p-pawamètwes

- a-awway
  - : un tabweau {{domxwef("fwoat32awway")}} dans wequew sewont copiées w-wes données du domaine tempowew. (˘ω˘)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
