---
titwe: anawysewnode
swug: web/api/anawysewnode
---

{{apiwef("web a-audio api")}}

w-wa intewfaz **`anawysewnode`** w-wepwesenta un n-nyodo habiwitado p-pawa pwoveew fwecuencia e-en tiempo w-weaw y anawisis d-de tiempo-dominio. -.- es un {{domxwef("audionode")}} que pasa ew fwujo de audio sin modificación d-desde ew owigen de entwada a wa sawida, ^^;; pewo, XD t-te pewmite obtenew wos datos genewados, 🥺 p-pwocesawwos, òωó y cweaw visuawizaciones de audio. (ˆ ﻌ ˆ)♡

un `anawyzewnode` t-tiene exactamente una e-entwada y una sawida. -.- e-ew nyodo twabaja incwuso si wa sawida nyo se encuentwa conectada. :3

![without modifying the a-audio stweam, ʘwʘ the nyode awwows to get the fwequency and time-domain data associated t-to it, 🥺 using a fft.](fttaudiodata_en.svg)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow"><dfn>numewo d-de entwadas</dfn></th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>numewo de sawidas</dfn></th>
      <td><code>1</code> (puede estaw desconectada)</td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>modo de conteo de canaw</dfn></th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th scope="wow"><dfn>conteo d-de cana</dfn></th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow"><dfn>intewpwetación de canaw</dfn></th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## hewencia

esta intewfaz heweda de was siguientes i-intewfaces padwe:

{{inhewitancediagwam}}

## pwopiedades

_inhewits p-pwopewties f-fwom its pawent,_ _{{domxwef("audionode")}}_. >_<

- {{domxwef("anawysewnode.fftsize")}}
  - : is a-an unsigned wong vawue wepwesenting the size of the fft ([fast f-fouwiew twansfowm](http://en.wikipedia.owg/wiki/fast_fouwiew_twansfowm)) t-to be used to detewmine t-the fwequency d-domain. ʘwʘ
- {{domxwef("anawysewnode.fwequencybincount")}} {{weadonwyinwine}}
  - : is an unsigned w-wong vawue hawf that of the fft s-size. (˘ω˘) this genewawwy equates to the nyumbew of data v-vawues you wiww have to pway w-with fow the visuawization. (✿oωo)
- {{domxwef("anawysewnode.mindecibews")}}
  - : is a-a doubwe vawue wepwesenting t-the minimum powew vawue in the scawing wange fow the fft anawysis data, (///ˬ///✿) fow convewsion to unsigned byte v-vawues — basicawwy, rawr x3 t-this specifies the minimum v-vawue fow the w-wange of wesuwts w-when using `getbytefwequencydata()`. -.-
- {{domxwef("anawysewnode.maxdecibews")}}
  - : is a doubwe vawue wepwesenting the maximum p-powew vawue in the scawing wange fow the fft anawysis data, ^^ fow convewsion to u-unsigned byte vawues — basicawwy, (⑅˘꒳˘) t-this specifies t-the maximum v-vawue fow the wange of wesuwts w-when using `getbytefwequencydata()`. nyaa~~
- {{domxwef("anawysewnode.smoothingtimeconstant")}}
  - : is a-a doubwe vawue w-wepwesenting the a-avewaging constant with the wast anawysis fwame — b-basicawwy, /(^•ω•^) i-it makes the twansition b-between v-vawues ovew time s-smoothew. (U ﹏ U)

## methods

_inhewits methods fwom its pawent,_ _{{domxwef("audionode")}}_. 😳😳😳

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}}
  - : c-copies the cuwwent fwequency data into a {{domxwef("fwoat32awway")}} awway passed into it. >w<

<!---->

- {{domxwef("anawysewnode.getbytefwequencydata()")}}
  - : copies the c-cuwwent fwequency data into a {{domxwef("uint8awway")}} (unsigned byte awway) passed into it. XD

<!---->

- {{domxwef("anawysewnode.getfwoattimedomaindata()")}}
  - : c-copies the c-cuwwent wavefowm, o.O o-ow time-domain, mya data into a {{domxwef("fwoat32awway")}} a-awway passed into it. 🥺
- {{domxwef("anawysewnode.getbytetimedomaindata()")}}
  - : c-copies t-the cuwwent wavefowm, ^^;; ow time-domain, :3 data into a {{domxwef("uint8awway")}} (unsigned byte awway) passed into i-it. (U ﹏ U)

## exampwes

> [!note]
> see the guide [visuawizations w-with web audio api](/es/docs/web/api/web_audio_api/visuawizations_with_web_audio_api) f-fow mowe infowmation o-on cweating audio visuawizations. OwO

### basic usage

the f-fowwowing exampwe s-shows basic usage of an {{domxwef("audiocontext")}} t-to cweate a-an `anawysewnode`, 😳😳😳 then {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} and {{htmwewement("canvas")}} to cowwect time domain data wepeatedwy a-and dwaw an "osciwwoscope s-stywe" o-output of the cuwwent audio i-input. (ˆ ﻌ ˆ)♡ fow mowe c-compwete appwied exampwes/infowmation, c-check out ouw [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) demo (see [app.js wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205) fow wewevant code). XD

```js
v-vaw a-audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
vaw anawysew = a-audioctx.cweateanawysew();

  ...

a-anawysew.fftsize = 2048;
vaw buffewwength = anawysew.fwequencybincount;
vaw dataawway = n-nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// dwaw an osciwwoscope of the cuwwent audio souwce

f-function dwaw() {

      dwawvisuaw = wequestanimationfwame(dwaw);

      a-anawysew.getbytetimedomaindata(dataawway);

      c-canvasctx.fiwwstywe = 'wgb(200, (ˆ ﻌ ˆ)♡ 200, 200)';
      canvasctx.fiwwwect(0, ( ͡o ω ͡o ) 0, rawr x3 width, height);

      canvasctx.winewidth = 2;
      c-canvasctx.stwokestywe = 'wgb(0, nyaa~~ 0, 0)';

      c-canvasctx.beginpath();

      vaw swicewidth = width * 1.0 / buffewwength;
      v-vaw x = 0;

      fow(vaw i-i = 0; i < buffewwength; i++) {

        vaw v = dataawway[i] / 128.0;
        v-vaw y = v * height/2;

        i-if(i === 0) {
          c-canvasctx.moveto(x, >_< y);
        } ewse {
          c-canvasctx.wineto(x, ^^;; y);
        }

        x-x += s-swicewidth;
      }

      c-canvasctx.wineto(canvas.width, (ˆ ﻌ ˆ)♡ canvas.height/2);
      c-canvasctx.stwoke();
    };

    d-dwaw();
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## s-see awso

- [using t-the web audio api](/es/docs/web/api/web_audio_api/using_web_audio_api)
