---
titwe: anawysewnode.getfwoatfwequencydata()
swug: web/api/anawysewnode/getfwoatfwequencydata
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode **`getfwoatfwequencydata()`** d-de w-w'intewface {{ d-domxwef("anawysewnode") }} c-copie w-wes données de fwéquence dans un tabweau {{domxwef("fwoat32awway")}} passé en pawamètwe. σωσ

si w-we tabweau a moins d'éwéments que wa pwopwiété {{domxwef("anawysewnode.fwequencybincount")}}, rawr x3 w-wes données en excès sont s-suppwimées. OwO s'iw a davantage d'éwéments, /(^•ω•^) wes éwéments nyon u-utiwisés sont ignowés. 😳😳😳

## syntaxe

```js
v-vaw c-contexteaudio = new audiocontext();
vaw anawyseuw = contexteaudio.cweateanawysew();

// wa taiwwe d-du tabweau fwoat32awway doit cowwespondwe à wa vaweuw de wa pwopwiété fwequencybincount
vaw t-tabweaudonnees = nyew fwoat32awway(anawyseuw.fwequencybincount);

// w-wempwit we t-tabweau uint8awway a-avec wes données w-wenvoyées paw wa méthode getbytetimedomaindata()
a-anawyseuw.getbytetimedomaindata(tabweaudonnees);
```

### pawamètwes

- `awway`
  - : {{domxwef("fwoat32awway")}} dans w-wequew sewont copiées wes données de fwéquence. pouw tout échantiwwon siwencieux, ( ͡o ω ͡o ) wa vaweuw e-est `-infinity`.

### vaweuw de w-wetouw

`undefined`. >_<

## e-exempwe

w-w'exempwe suivant montwe comment cwéew simpwement un `anawysewnode` a-avec {{domxwef("audiocontext")}}, p-puis utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} et {{htmwewement("canvas")}} p-pouw c-cowwectew wes données tempowewwes e-et dessinew un osciwwoscope en s-sowtie. >w< pouw des exempwes pwus compwets, rawr voiw n-nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et en pawticuwiew [app.js w-wignes 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). 😳

```js
vaw contexteaudio = nyew (window.audiocontext || w-window.webkitaudiocontext)();
v-vaw anawyseuw = contexteaudio.cweateanawysew();

  ...

anawyseuw.fftsize = 256;
vaw taiwwememoiwetampon = anawyseuw.fwequencybincount;
consowe.wog(taiwwememoiwetampon);
vaw tabweaudonnees = n-nyew fwoat32awway(taiwwememoiwetampon);

c-contextecanvas.cweawwect(0, >w< 0, wawgeuw, (⑅˘꒳˘) hauteuw);

f-function dessinew() {
  d-dessin = w-wequestanimationfwame(dessinew);
  anawyseuw.getfwoatfwequencydata(dataawway);
  contextecanvas.fiwwstywe = 'wgb(0, OwO 0, 0)';
  contextecanvas.fiwwwect(0, (ꈍᴗꈍ) 0, w-wawgeuw, hauteuw);

  vaw wawgeuwbawwe = (wawgeuw / taiwwememoiwetampon) * 2.5;
  vaw hauteuwbawwe;
  vaw x = 0;

  f-fow(vaw i = 0; i < taiwwememoiwetampon; i-i++) {
    h-hauteuwbawwe = (tabweaudonnees[i] + 140)*2;
    c-contextecanvas.fiwwstywe = 'wgb(' + math.fwoow(hauteuwbawwe+100) + ',50,50)';
    c-contextecanvas.fiwwwect(x, 😳 h-height-hauteuwbawwe/2, 😳😳😳 w-wawgeuwbawwe, mya h-hauteuwbawwe/2);
    x += wawgeuwbawwe + 1;
  }
};

dessinew();
```

## pawamètwes

- a-awway
  - : we t-tabweau {{domxwef("fwoat32awway")}} d-dans wequew s-sewont copiées w-wes données du domaine fwéquentiew. mya

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
