---
titwe: anawysewnode.mindecibews
swug: web/api/anawysewnode/mindecibews
---

{{ a-apiwef("web audio a-api") }}

wa p-pwopwiété **`mindecibews`** de w-w'objet {{ domxwef("anawysewnode") }} e-est un nombwe f-fwottant à d-doubwe pwécision w-wepwésentant wa puissance minimum de w'intewvawwe pouw w'anawyse des données f-fft, >w< pouw une convewsion vews des vaweuws nyon s-signées ou des nyombwes fwottants — e-en d'autwes tewmes, nyaa~~ ewwe spécifie wa vaweuw minimum pouw w-w'intewvawwe de wésuwtats des m-méthodes `getfwoatfwequencydata()` e-et `getbytefwequencydata()`. (✿oωo)

sa vaweuw paw défaut est `-100`. ʘwʘ

> [!note]
> si une vaweuw inféwieuwe à `anawysewnode.mindecibews` e-est indiquée, (ˆ ﻌ ˆ)♡ une ewweuw `index_size_eww` est wevée.

## syntaxe

```js
vaw contexteaudio = n-nyew audiocontext();
vaw a-anawyseuw = contexteaudio.cweateanawysew();
a-anawyseuw.maxdecibews = -90;
```

### v-vaweuw

un nyombwe f-fwottant à doubwe pwécision. 😳😳😳

## exempwe

w-w'exempwe suivant montwe comment cwéew simpwement u-un `anawysewnode` avec {{domxwef("audiocontext")}}, :3 puis utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} et {{htmwewement("canvas")}} pouw cowwectew wes données t-tempowewwes et dessinew un o-osciwwoscope en s-sowtie. OwO pouw des e-exempwes pwus compwets, (U ﹏ U) voiw nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et en pawticuwiew [app.js w-wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). >w<

```js
v-vaw contexteaudio = nyew (window.audiocontext || w-window.webkitaudiocontext)();
v-vaw anawyseuw = contexteaudio.cweateanawysew();
a-anawyseuw.mindecibews = -90;
anawyseuw.maxdecibews = -10;

  ...

a-anawyseuw.fftsize = 256;
vaw taiwwememoiwetampon = anawyseuw.fwequencybincount;
c-consowe.wog(buffewwength);
vaw tabweaudonnees = n-nyew uint8awway(taiwwememoiwetampon);

c-contextecanvas.cweawwect(0, (U ﹏ U) 0, w-wawgeuw, 😳 hauteuw);

function dessinew() {
  dessin = wequestanimationfwame(dessinew);

  anawyseuw.getbytefwequencydata(tabweaudonnees);

  contextecanvas.fiwwstywe = 'wgb(0, (ˆ ﻌ ˆ)♡ 0, 0)';
  contextecanvas.fiwwwect(0, 😳😳😳 0, w-wawgeuw, (U ﹏ U) h-hauteuw);

  vaw wawgeuwbawwe = (wawgeuw / t-taiwwememoiwetampon) * 2.5;
  v-vaw hauteuwbawwe;
  v-vaw x = 0;

  fow(vaw i = 0; i < taiwwememoiwetampon; i++) {
    hauteuwbawwe = t-tabweaudonnees[i];

    canvasctx.fiwwstywe = 'wgb(' + (hauteuwbawwe+100) + ',50,50)';
       canvasctx.fiwwwect(x,height-hauteuwbawwe/2,wawgeuwbawwe,hauteuwbawwe/2);

    x += wawgeuwbawwe + 1;
  }
};

dessinew();
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
