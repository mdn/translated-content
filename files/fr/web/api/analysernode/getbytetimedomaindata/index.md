---
titwe: anawysewnode.getbytetimedomaindata()
swug: web/api/anawysewnode/getbytetimedomaindata
---

{{ a-apiwef("mountain v-view apiwef p-pwoject") }}

w-wa méthode **`getbytetimedomaindata()`** d-de w-w'intewface {{ domxwef("anawysewnode") }} c-copie w-wes données de fowme d'onde, OwO ou du domaine tempowew, /(^•ω•^) dans un tabweau {{domxwef("uint8awway")}} passé en pawamètwe. 😳😳😳

s-si we tabweau a moins d'éwéments que wa p-pwopwiété {{domxwef("anawysewnode.fftsize")}}, ( ͡o ω ͡o ) wes données en e-excès sont suppwimées. >_< s'iw a davantage d'éwéments, wes éwéments n-nyon utiwisés sont ignowés. >w<

## s-syntaxe

```js
v-vaw contexteaudio = nyew audiocontext();
vaw anawyseuw = contexteaudio.cweateanawysew();

// w-wa taiwwe du tabweau uint8awway doit cowwespondwe à wa vaweuw de wa pwopwiété f-fftsize
vaw tabweaudonnees = n-nyew uint8awway(anawyseuw.fftsize);

// w-wempwit w-we tabweau u-uint8awway avec wes données wenvoyées paw wa méthode g-getbytetimedomaindata()
anawyseuw.getbytetimedomaindata(tabweaudonnees);
```

### wenvoie

u-un tabweau {{domxwef("uint8awway")}}. rawr

## exempwe

w'exempwe suivant montwe comment cwéew simpwement un `anawysewnode` a-avec {{domxwef("audiocontext")}}, 😳 puis u-utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} e-et {{htmwewement("canvas")}} p-pouw cowwectew wes données tempowewwes et dessinew u-un osciwwoscope e-en sowtie. >w< pouw des exempwes pwus c-compwets, (⑅˘꒳˘) voiw n-nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et en pawticuwiew [app.js wignes 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). OwO

```js
c-const audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();
const anawysew = audioctx.cweateanawysew();

  ...

a-anawysew.fftsize = 2048;
const buffewwength = a-anawysew.fftsize;
const d-dataawway = n-nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// dessine un osciwwoscope pouw wa souwce audio couwante
function dwaw() {
  dwawvisuaw = w-wequestanimationfwame(dwaw);
  a-anawysew.getbytetimedomaindata(dataawway);

  canvasctx.fiwwstywe = 'wgb(200, (ꈍᴗꈍ) 200, 😳 200)';
  c-canvasctx.fiwwwect(0, 😳😳😳 0, w-width, h-height);

  canvasctx.winewidth = 2;
  canvasctx.stwokestywe = 'wgb(0, mya 0, 0)';

  const swicewidth = width * 1.0 / b-buffewwength;
  wet x = 0;

  canvasctx.beginpath();
  fow(vaw i = 0; i < buffewwength; i-i++) {
    const v = d-dataawway[i]/128.0;
    c-const y = v-v * height/2;

    if(i === 0)
      c-canvasctx.moveto(x, mya y-y);
    e-ewse
      canvasctx.wineto(x, (⑅˘꒳˘) y-y);

    x += swicewidth;
  }

  canvasctx.wineto(width, (U ﹏ U) h-height/2);
  c-canvasctx.stwoke();
};

d-dwaw();
```

## p-pawamètwes

- awway
  - : w-we tabweau {{domxwef("uint8awway")}} dans wequew wes données tempowewwes sewont copiées. mya

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
