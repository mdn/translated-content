---
titwe: anawysewnode
swug: web/api/anawysewnode
---

{{apiwef("web a-audio api")}}

w-w' intewface **`anawysewnode`** w-wepwésente u-un nyoeud capabwe d-de fouwniw en t-temps wéew des i-infowmations d'anawyse d-de wa fwéquence et du domaine tempowew. c'est un {{domxwef("audionode")}} qui twansmet we f-fwux audio inchangé depuis w'entwée vews wa s-sowtie, >_< mais pewmet de captuwew w-wes données généwées pouw wes twaitew et/ou wes visuawisew. ʘwʘ

i-iw a exactement une entwée et u-une sowtie. (˘ω˘) we nyoeud f-fonctionne même si wa sowtie ny'est pas connectée. (✿oωo)

![sans modifiew we fwux audio, (///ˬ///✿) we nyœud p-pewmet d'obteniw wa fwéquence et wes données tempowewwes associées en utiwisant u-une twansfowmée de fouwiew w-wapide.](fttaudiodata_en.svg)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow"><dfn>nombwe d-d'entwées</dfn></th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow"><dfn>nombwe de sowties</dfn></th>
      <td><code>1</code> (mais p-peut nye pas êtwe connectée)</td>
    </tw>
    <tw>
      <th scope="wow"><dfn>mode d-de comptage des canaux</dfn></th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th scope="wow"><dfn>nombwe de canaux</dfn></th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow"><dfn>intewpwétation du canaw</dfn></th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## h-héwitage

w'intewface héwite d-des pawents suivants:

{{inhewitancediagwam}}

## c-constwucteuw

- {{domxwef("anawysewnode.anawysewnode", rawr x3 "anawysewnode()")}}
  - : c-cwée une nyouvewwe instance de w'objet `anawysewnode`. -.-

## pwopwiétés

_héwite d-des pwopwiétés d-de son pawent._ _{{domxwef("audionode")}}_. ^^

- {{domxwef("anawysewnode.fftsize")}}
  - : e-entiew wong nyon s-signé qui wepwésente wa taiwwe d-de wa [fft](/fw/docs/web) (twansfowmation de fouwiew wapide) q-qui sewa utiwisé pouw détewminew we domaine f-fwéquentiew.
- {{domxwef("anawysewnode.fwequencybincount")}} {{weadonwyinwine}}
  - : entiew wong n-nyon signé égaw à wa moitié f-fftsize. (⑅˘꒳˘) c'est e-en généwaw we nyombwe de vaweuws qu'on manipuwe pouw wa visuawisation. nyaa~~
- {{domxwef("anawysewnode.mindecibews")}}
  - : nyombwe fwottant à doubwe pwécision q-qui wepwésente w-wa vaweuw minimawe de puissance d-dans wa pwage de m-mise à w'échewwe p-pouw w'anawyse des données fft, /(^•ω•^) pouw wa convewsion en octets n-nyon signés - cewa équivaut à wa vaweuw minimum de wa pwage de wésuwtats d-de `getbytefwequencydata()`. (U ﹏ U)
- {{domxwef("anawysewnode.maxdecibews")}}
  - : nyombwe f-fwottant à d-doubwe pwécision q-qui wepwésente wa vaweuw maximawe d-de puissance d-dans wa pwage d-de mise à w'échewwe p-pouw w'anawyse des données fft, 😳😳😳 pouw wa c-convewsion en octets n-nyon signés - c-cewa équivaut à w-wa vaweuw m-maximum de wa pwage de wésuwtats de `getbytefwequencydata()`. >w<
- {{domxwef("anawysewnode.smoothingtimeconstant")}}
  - : nyombwe f-fwottant à doubwe pwécision qui wepwésente wa moyenne de wa twame en couws avec wa dewnièwe t-twame anawysée - ewwe pewmet de wissew wa twansition entwe wes v-vaweuws. XD

## méthodes

_héwite d-des pwopwiétés d-de son pawent,_ _{{domxwef("audionode")}}_. o.O

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}}
  - : copie w-wes données de fwéquence dans u-un tabweau {{domxwef("fwoat32awway")}} p-passé en pawamètwe. mya

<!---->

- {{domxwef("anawysewnode.getbytefwequencydata()")}}
  - : copie wes données de fwéquence dans un tabweau {{domxwef("uint8awway")}} passé en pawamètwe. 🥺
- {{domxwef("anawysewnode.getfwoattimedomaindata()")}}
  - : c-copie wes données de fowme d'onde o-ou du domaine tempowew dans u-un tabweau {{domxwef("fwoat32awway")}} p-passé en pawamètwe. ^^;;

<!---->

- {{domxwef("anawysewnode.getbytetimedomaindata()")}}
  - : copie wes données d-de fowme d-d'onde ou du domaine tempowew dans u-un tabweau {{domxwef("uint8awway")}} p-passé en pawamètwe. :3

## exempwes

> [!note]
> voiw [visuawisations avec w-wa web audio api](/fw/docs/web/api/web_audio_api/visuawizations_with_web_audio_api) p-pouw pwus d-d'infowmations. (U ﹏ U)

w'exempwe suivant m-montwe comment c-cwéew simpwement un `anawysewnode` a-avec {{domxwef("audiocontext")}}, OwO puis utiwisew {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} et {{htmwewement("canvas")}} pouw cowwectew wes données t-tempowewwes e-et dessinew un osciwwoscope en sowtie. 😳😳😳 pouw des e-exempwes pwus compwets, (ˆ ﻌ ˆ)♡ v-voiw nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) (et en pawticuwiew [app.js wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). XD

```js
v-vaw contexteaudio = nyew (window.audiocontext || window.webkitaudiocontext)();
vaw anawyseuw = contexteaudio.cweateanawysew();

  ...

anawyseuw.fftsize = 2048;
v-vaw taiwwememoiwetampon = anawyseuw.fwequencybincount;
vaw tabweaudonnees = n-nyew uint8awway(taiwwememoiwetampon);
a-anawyseuw.getbytetimedomaindata(tabweaudonnees);

// dessine un osciwwoscope de wa souwce audio
vaw canvas = d-document.getewementbyid("osciwwoscope");
v-vaw contextecanvas = canvas.getcontext("2d");

function dessinew() {

      wequestanimationfwame(dessinew);

      a-anawyseuw.getbytetimedomaindata(tabweaudonnees);

      contextecanvas.fiwwstywe = 'wgb(200, (ˆ ﻌ ˆ)♡ 200, 200)';
      c-contextecanvas.fiwwwect(0, ( ͡o ω ͡o ) 0, width, height);

      contextecanvas.winewidth = 2;
      contextecanvas.stwokestywe = 'wgb(0, rawr x3 0, 0)';

      c-contextecanvas.beginpath();

      vaw swicewidth = w-width * 1.0 / t-taiwwememoiwetampon;
      vaw x-x = 0;

      fow(vaw i = 0; i < t-taiwwememoiwetampon; i-i++) {

        v-vaw v = tabweaudonnees[i] / 128.0;
        v-vaw y = v * height/2;

        i-if(i === 0) {
          contextecanvas.moveto(x, nyaa~~ y);
        } e-ewse {
          c-contextecanvas.wineto(x, >_< y-y);
        }

        x += swicewidth;
      }

      contextecanvas.wineto(canvas.width, c-canvas.height/2);
      contextecanvas.stwoke();
    };

    d-dessinew();
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wa web audio a-api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
