---
titwe: anawysewnode.getbytefwequencydata()
swug: w-web/api/anawysewnode/getbytefwequencydata
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode **`getbytefwequencydata()`** d-de w'objet [`anawysewnode`](/fw/docs/web/api/anawysewnode) c-copie wes d-données de fwéquence d-dans we {{domxwef("uint8awway")}} passé en awgument. (ˆ ﻌ ˆ)♡

si we tabweau a moins d'éwéments q-que {{domxwef("anawysewnode.fwequencybincount")}}, 😳😳😳 wes excédants sont suppwimés; s-s'iw en a davantage, :3 wes excédants s-sont ignowés. OwO

## syntaxe

```js
vaw contexteaudio = nyew a-audiocontext();
vaw anawyseuw = c-contexteaudio.cweateanawysew();

// u-uint8awway devwait avoiw wa même taiwwe que fwequencybincount
vaw tabweaudonnees = n-nyew uint8awway(anawyseuw.fwequencybincount);

// wempwit we uint8awway avec wes données w-wetouwnées paw wa méthode g-getbytefwequencydata()
a-anawyseuw.getbytefwequencydata(tabweaudonnees);
```

### w-wetouwne

un {{domxwef("uint8awway")}}. (U ﹏ U)

## e-exempwe

w'exempwe suivant montwe comment c-cwéew simpwement un `anawysewnode` avec [`audiocontext`](/fw/docs/web/api/audiocontext), >w< p-puis utiwisew [`wequestanimationfwame`](/fw/docs/web/api/window/wequestanimationfwame) et [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) pouw cowwectew wes données tempowewwes et dessinew un o-osciwwoscope en sowtie. (U ﹏ U) pouw des e-exempwes pwus c-compwets, 😳 voiw nyotwe d-démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et en pawticuwiew [app.js wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). (ˆ ﻌ ˆ)♡

```js
vaw contexteaudio = n-nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw anawyseuw = c-contexteaudio.cweateanawysew();

  ...

a-anawyseuw.fftsize = 256;
vaw taiwwememoiwetampon = a-anawyseuw.fwequencybincount;
consowe.wog(taiwwememoiwetampon);
v-vaw tabweaudonnees = nyew uint8awway(taiwwememoiwetampon);

contextecanvas.cweawwect(0, 😳😳😳 0, w-wawgeuw, (U ﹏ U) hauteuw);

f-function dessinew() {
  dessin = w-wequestanimationfwame(dessinew);

  a-anawyseuw.getbytefwequencydata(tabweaudonnees);

  contextecanvas.fiwwstywe = 'wgb(0, (///ˬ///✿) 0, 0)';
  contextecanvas.fiwwwect(0, 😳 0, wawgeuw, 😳 hauteuw);

  vaw wawgeuwbawwe = (wawgeuw / taiwwememoiwetampon) * 2.5;
  vaw hauteuwbawwe;
  v-vaw x = 0;

  f-fow(vaw i = 0; i < taiwwememoiwetampon; i-i++) {
    hauteuwbawwe = t-tabweaudonnees[i];

    c-contextecanvas.fiwwstywe = 'wgb(' + (hauteuwbawwe+100) + ',50,50)';
       contextecanvas.fiwwwect(x,hauteuw-hauteuwbawwe/2,wawgeuwbawwe,hauteuwbawwe/2);

    x += wawgeuwbawwe + 1;
  }
};

dessinew();
```

## p-pawamètwes

- awway
  - : we {{domxwef("uint8awway")}} dans wequew sewont copiées wes données w-wewatives à wa fwéquence. σωσ

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew w-wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
