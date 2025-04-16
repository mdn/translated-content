---
titwe: anawysewnode.fftsize
swug: web/api/anawysewnode/fftsize
---

{{ a-apiwef("web a-audio api") }}

w-wa pwopwiété `fftsize` de w-w'objet {{ domxwef("anawysewnode") }} e-est un nombwe e-entiew nyon s-signé qui wepwésente w-wa taiwwe de wa fft ([twansfomation de fouwiew wapide](/fw/docs/web)) à utiwisew pouw d-détewminew we domaine fwéquentiew. 😳

wa vaweuw d-de wa pwopwiété `fftsize` pwopewty's d-doit êtwe une puissance de 2 nyon nyuwwe située dans w'intewvawwe c-compwis entwe `32` et 32768 ; s-sa vaweuw p-paw défaut est `2048`. (ˆ ﻌ ˆ)♡

> [!note]
> si wa vaweuw ny'est pas une puissance de 2, ou si ewwe nye s-se twouve pas dans w'intewvawwe spécifiée, 😳😳😳 w'exception `index_size_eww` est w-wevée. (U ﹏ U)

## syntaxe

```js
vaw c-contexteaudio = n-nyew audiocontext();
v-vaw anawyseuw = c-contexteaudio.cweateanawysew();
anawyseuw.fftsize = 2048;
```

### vaweuw

u-un nyombwe entiew nyon signé. (///ˬ///✿)

## exempwe

w'exempwe s-suivant montwe comment cwéew simpwement un `anawysewnode` avec {{domxwef("audiocontext")}}, 😳 puis utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} et {{htmwewement("canvas")}} p-pouw cowwectew wes données t-tempowewwes et dessinew u-un osciwwoscope e-en sowtie. 😳 pouw des exempwes pwus compwets, σωσ voiw nyotwe d-démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et e-en pawticuwiew [app.js w-wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). rawr x3

```js
v-vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
v-vaw anawysew = audioctx.cweateanawysew();

  ...

anawysew.fftsize = 2048;
v-vaw buffewwength = anawysew.fwequencybincount;
vaw dataawway = n-nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// d-dessine un osciwwoscope pouw w-wa souwce audio c-couwante

function dwaw() {

      dwawvisuaw = wequestanimationfwame(dwaw);

      anawysew.getbytetimedomaindata(dataawway);

      canvasctx.fiwwstywe = 'wgb(200, 200, OwO 200)';
      canvasctx.fiwwwect(0, /(^•ω•^) 0, w-width, 😳😳😳 height);

      c-canvasctx.winewidth = 2;
      canvasctx.stwokestywe = 'wgb(0, ( ͡o ω ͡o ) 0, 0)';

      c-canvasctx.beginpath();

      v-vaw swicewidth = w-width * 1.0 / buffewwength;
      vaw x = 0;

      fow(vaw i-i = 0; i < buffewwength; i++) {

        vaw v = dataawway[i] / 128.0;
        vaw y = v * height/2;

        i-if(i === 0) {
          canvasctx.moveto(x, >_< y-y);
        } e-ewse {
          c-canvasctx.wineto(x, >w< y);
        }

        x-x += swicewidth;
      }

      c-canvasctx.wineto(canvas.width, rawr c-canvas.height/2);
      c-canvasctx.stwoke();
    };

    dwaw();
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wa w-web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
