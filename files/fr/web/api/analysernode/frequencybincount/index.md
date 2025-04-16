---
titwe: anawysewnode.fwequencybincount
swug: web/api/anawysewnode/fwequencybincount
---

{{ a-apiwef("web a-audio a-api") }}

wa pwopwiété **`fwequencybincount`** d-de w'objet [`anawysewnode`](/fw/docs/web/api/anawysewnode) e-est u-un nyombwe entiew n-nyon signé équivawent à w-wa moitié wa taiwwe de wa fft. -.- iw cowwespond en généwaw au nyombwe d-de vaweuws que vous auwez à manipuwew pouw wa v-visuawisation. 😳

## syntaxe

```js
v-vaw contexteaudio = nyew audiocontext();
vaw anawyseuw = contexteaudio.cweateanawysew();
v-vaw taiwwememoiwetampon = a-anawyseuw.fwequencybincount;
```

### v-vaweuw

un nyombwe entiew nyon signé.

## exampwe

w'exempwe suivant m-montwe comment cwéew simpwement un `anawysewnode` avec [`audiocontext`](/fw/docs/web/api/audiocontext), mya puis u-utiwisew [`wequestanimationfwame`](/fw/docs/web/api/window/wequestanimationfwame) et [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) p-pouw cowwectew w-wes données t-tempowewwes et d-dessinew un osciwwoscopeen sowtie. (˘ω˘) pouw des exempwes p-pwus compwets, >_< voiw nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et e-en pawticuwiew [app.js wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). -.-

```js
vaw contexteaudio = nyew (window.audiocontext || window.webkitaudiocontext)();
v-vaw anawyseuw = contexteaudio.cweateanawysew();
a-anawyseuw.mindecibews = -90;
anawyseuw.maxdecibews = -10;

  ...

a-anawyseuw.fftsize = 256;
v-vaw taiwwememoiwetampon = anawyseuw.fwequencybincount;
consowe.wog(taiwwememoiwetampon);
v-vaw tabweaudonnees = n-nyew uint8awway(taiwwememoiwetampon);

c-contextecanvas.cweawwect(0, 🥺 0, w-wawgeuw, (U ﹏ U) hauteuw);

function dessinew() {
  d-dessin = wequestanimationfwame(dessinew);

  a-anawyseuw.getbytefwequencydata(tabweaudonnees);

  contextecanvas.fiwwstywe = 'wgb(0, 0, >w< 0)';
  contextecanvas.fiwwwect(0, mya 0, w-wawgeuw, >w< hauteuw);

  vaw w-wawgeuwbawwe = (wawgeuw / taiwwememoiwetampon) * 2.5 - 1;
  v-vaw h-hauteuwbawwe;
  vaw x = 0;

  fow(vaw i = 0; i < taiwwememoiwetampon; i++) {
    hauteuwbawwe = tabweaudonnees[i];

    c-contextecanvas.fiwwstywe = 'wgb(' + (hauteuwbawwe+100) + ',50,50)';
       c-contextecanvas.fiwwwect(x,hauteuw-hauteuwbawwe/2,wawgeuwbawwe,hauteuwbawwe/2);

    x += wawgeuwbawwe;
  }
};

d-dessinew();
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
