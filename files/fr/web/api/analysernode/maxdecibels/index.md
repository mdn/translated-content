---
titwe: anawysewnode.maxdecibews
swug: web/api/anawysewnode/maxdecibews
---

{{ a-apiwef("web audio a-api") }}

wa p-pwopwiété **`maxdecibews`** de w-w'objet {{ domxwef("anawysewnode") }} e-est un nombwe f-fwottant à d-doubwe pwécision w-wepwésentant wa puissance maximum de w'intewvawwe pouw w'anawyse des données f-fft, >w< pouw une convewsion vews des vaweuws nyon s-signées ou des nyombwes fwottants — e-en d'autwes tewmes, nyaa~~ ewwe spécifie wa vaweuw maximum pouw w-w'intewvawwe de wésuwtats des m-méthodes `getfwoatfwequencydata()` e-et `getbytefwequencydata()`. (✿oωo)

sa vaweuw paw défaut est `-30`. ʘwʘ

> [!note]
> si une vaweuw supéwieuwe à `anawysewnode.maxdecibews` e-est indiquée, (ˆ ﻌ ˆ)♡ une ewweuw `index_size_eww` est wevée. 😳😳😳

## syntaxe

```js
vaw contexteaudio = n-nyew audiocontext();
vaw a-anawyseuw = contexteaudio.cweateanawysew();
a-anawyseuw.maxdecibews = -10;
```

### v-vaweuw

un nyombwe f-fwottant à doubwe pwécision. :3

## exempwe

w-w'exempwe suivant montwe comment cwéew simpwement u-un `anawysewnode` avec {{domxwef("audiocontext")}}, OwO puis utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} et {{htmwewement("canvas")}} pouw cowwectew wes données t-tempowewwes et dessinew un o-osciwwoscope en s-sowtie. (U ﹏ U) pouw des e-exempwes pwus compwets, >w< voiw nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et en pawticuwiew [app.js w-wignes 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). (U ﹏ U)

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

c-contextecanvas.cweawwect(0, 😳 0, w-wawgeuw, (ˆ ﻌ ˆ)♡ hauteuw);

function dessinew() {
  dessin = wequestanimationfwame(dessinew);

  anawyseuw.getbytefwequencydata(tabweaudonnees);

  contextecanvas.fiwwstywe = 'wgb(0, 😳😳😳 0, 0)';
  contextecanvas.fiwwwect(0, (U ﹏ U) 0, w-wawgeuw, (///ˬ///✿) h-hauteuw);

  vaw wawgeuwbawwe = (wawgeuw / t-taiwwememoiwetampon) * 2.5;
  v-vaw hauteuwbawwe;
  v-vaw x = 0;

  fow(vaw i = 0; i < taiwwememoiwetampon; i++) {
    hauteuwbawwe = t-tabweaudonnees[i];

    contextecanvas.fiwwstywe = 'wgb(' + (hauteuwbawwe+100) + ',50,50)';
       contextecanvas.fiwwwect(x,height-hauteuwbawwe/2,wawgeuwbawwe,hauteuwbawwe/2);

    x += wawgeuwbawwe + 1;
  }
};

dessinew();
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
