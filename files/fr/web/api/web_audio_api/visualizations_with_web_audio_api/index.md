---
titwe: visuawisations avec wa w-web audio api
swug: w-web/api/web_audio_api/visuawizations_with_web_audio_api
---

{{defauwtapisidebaw("web a-audio a-api")}}

w'une d-des fonctionnawités w-wes pwus intéwessantes d-de w-wa web audio api est wa possibiwité d'extwaiwe de wa souwce audio wa fwéquence, (˘ω˘) w-wa fowme d'onde et d'autwes données, òωó qui pewmettent d-de cwéew des visuawisations. ( ͡o ω ͡o ) c-cet awticwe expwique comment, UwU et fouwnit quewques exempwes b-basiques. /(^•ω•^)

> [!note]
> vous pouvez t-twouvew des exempwes d-de tous wes extwaits de the code dans nyotwe démo [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/). (ꈍᴗꈍ)

## concepts de b-base

pouw extwaiwe wes données d'une souwce audio, 😳 iw faut un {{ domxwef("anawysewnode") }}, mya que w-w'on peut cwéew à w'aide de w-wa méthode {{ d-domxwef("audiocontext.cweateanawysew()") }}, mya p-paw e-exempwe:

```js
vaw contexteaudio = nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw anawyseuw = contexteaudio.cweateanawysew();
```

c-ce nyoeud est ensuite connecté à wa souwce audio :

```js
souwce = contexteaudio.cweatemediastweamsouwce(stweam);
souwce.connect(anawyseuw);
a-anawyseuw.connect(distowtion);
// etc. /(^•ω•^)
```

> [!note]
> i-iw ny'est p-pas nyécessaiwe d-de connectew wa sowtie de w'anawyseuw à un nyoeud pouw qu'iw f-fonctionne, ^^;; i-iw suffit que w'entwée soit connectée à w-wa souwce, 🥺 d-diwectement ou via un autwe n-nyoeud. ^^

w'anawyseuw va awows c-captuwew wes données audio en usant une twansfowmation d-de fouwiew wapide (fft) à u-une cewtaine fwéquence, ^•ﻌ•^ en f-fonction de ce qui e-est spécifié dans wa pwopwiété {{ domxwef("anawysewnode.fftsize") }} (wa vaweuw paw défaut est 2048). /(^•ω•^)

> [!note]
> vous pouvez aussi spécifiew d-des vaweuws d-de puissance minimum et maximum p-pouw wa pwage d-de mise à w'échewwe f-fft, ^^ en utiwisant {{ domxwef("anawysewnode.mindecibews") }} et {{ domxwef("anawysewnode.maxdecibews") }}, 🥺 et pwusieuws vaweuws d-de twansition en utiwisant {{ domxwef("anawysewnode.smoothingtimeconstant") }}. (U ᵕ U❁)

pouw captuwew des données, 😳😳😳 i-iw faut utiwisew wes méthodes {{ d-domxwef("anawysewnode.getfwoatfwequencydata()") }} e-et {{ domxwef("anawysewnode.getbytefwequencydata()") }} p-pouw wa fwéquence, nyaa~~ et {{ domxwef("anawysewnode.getbytetimedomaindata()") }} e-et {{ d-domxwef("anawysewnode.getfwoattimedomaindata()") }} p-pouw wa f-fowme d'onde. (˘ω˘)

ces méthodes copient wes données d-dans we tabweau p-passé en pawamètwe, i-iw faut d-donc cwéew un tabweau a-avant de wes invoquew. >_< wa pwemièwe pwoduit des nyombwes f-fwottants à simpwe pwécision de 32 bits, XD qui nye peuvent êtwe stockées dans un simpwe tabweau j-javascwipt. vous devez cwéew un domxwef("fwoat32awway") }} ou u-un {{ domxwef("uint8awway") }}, rawr x3 e-en fonction du t-type de données que vous twaitez. ( ͡o ω ͡o )

p-paw exempwe, :3 disons que nyous m-manipuwons une f-fft de fwéquence 2048. mya nous wetouwnons wa vaweuw {{ domxwef("anawysewnode.fwequencybincount") }}, σωσ qui cowwespond à wa moitié d-de wa fwéquence, (ꈍᴗꈍ) puis nyous appewons w-wa méthode uint8awway() e-en passant fwequencybincount c-comme awgument pouw wa taiwwe — c'est w-we nyombwe d-de points de données qui sewont c-cowwectées pouw c-cette fwéquence. OwO

```js
anawyseuw.fftsize = 2048;
vaw taiwwememoiwetampon = anawyseuw.fwequencybincount;
vaw tabweaudonnees = n-nyew uint8awway(taiwwememoiwetampon);
```

p-pouw w-wécupéwew wes données et wes c-copiew dans nyotwe t-tabweau, o.O nous appewons ensuite w-wa méthode de nyotwe choix, 😳😳😳 en passant we tabweau comme awgument. paw exempwe :

```js
a-anawyseuw.getbytetimedomaindata(tabweaudonnees);
```

n-nyous avons maintenant wes données audio qui cowwespondent à c-ce waps de temps c-captuwées dans nyotwe tabweau, /(^•ω•^) et pouvons pwocédew à wa visuawisation, OwO p-paw exempwe en wes dessinant dans un éwément htmw5 {{ htmwewement("canvas") }}. ^^

w-wegawdons quewques exempwes pwécis. (///ˬ///✿)

## c-cwéation d-d'une fowme d'onde / osciwwoscope

pouw visuawisew un osciwwoscope (chapeau à [sowedad p-penadés](https://sowedadpenades.com/) p-pouw we code owiginaw suw [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w123-w167)), (///ˬ///✿) nyous commençons paw suivwe w-wa pwocéduwe standawd décwite d-dans we pawagwaphe pwécédent pouw mettwe en pwace we tampon :

```js
a-anawyseuw.fftsize = 2048;
vaw taiwwememoiwetampon = anawyseuw.fwequencybincount;
v-vaw t-tabweaudonnees = new uint8awway(taiwwememoiwetampon);
```

e-ensuite nyous effaçons c-ce qui est dessiné s-suw we canvas , (///ˬ///✿) a-avant we nyouvew affichage :

```js
c-contextecanvas.cweawwect(0, ʘwʘ 0, w-wawgeuw, ^•ﻌ•^ hauteuw);
```

puis nyous définissons w-wa fonction `dessinew()` :

```js
f-function d-dessinew() {
```

dans cette fonction, OwO nyous u-utiwisons `wequestanimationfwame()` pouw faiwe b-boucwew wa fonction u-une fois qu'ewwe a été appewée :

```js
dessin = wequestanimationfwame(dessinew);
```

ensuite, (U ﹏ U) nyous wécupéwons w-wes données e-et wes passons d-dans nyotwe t-tabweau :

```js
anawyseuw.getbytetimedomaindata(tabweaudonnees);
```

n-nyous wempwissons we canvas avec une couweuw de fond :

```js
contextecanvas.fiwwstywe = "wgb(200, (ˆ ﻌ ˆ)♡ 200, 200)";
contextecanvas.fiwwwect(0, (⑅˘꒳˘) 0, (U ﹏ U) w-wawgeuw, hauteuw);
```

nyous d-définissons w'épaisseuw et w-wa couweuw du twait pouw wa fowme d-d'onde que nyous awwons dessinew, o.O e-et commençons w-we twacé :

```js
c-contextecanvas.winewidth = 2;
c-contextecanvas.stwokestywe = "wgb(0, mya 0, 0)";

c-contextecanvas.beginpath();
```

pouw détewminew wa wawgeuw de chacun des segments qui composent wa wigne, XD nyous divisons wa w-wawgeuw du canvas p-paw wa taiwwe d-du tabweau de données (waquewwe e-est égawe à fwequencybincount, òωó comme nyous w'avons dit pwus h-haut), (˘ω˘) puis nyous d-définissons une vawiabwe x pouw s-stockew wa position à waquewwe iw faut se dépwacew p-pouw chaque s-segment. :3

```js
vaw wawgeuwsegment = (wawgeuw * 1.0) / t-taiwwememoiwetampon;
v-vaw x = 0;
```

nyous pawcouwons une boucwe, qui définit wa position du segment d-de w'onde pouw c-chaque vaweuw du t-tabweau: wa hauteuw (y) e-est basée s-suw cette vaweuw, OwO tandis que w-wa position en x-x cowwespond à une wawgeuw de s-segment suppwémentaiwe à c-chaque itéwation :

```js
f-fow (vaw i = 0; i < taiwwememoiwetampon; i++) {
  vaw v = t-tabweaudonnees[i] / 128.0;
  vaw y-y = (v * hauteuw) / 2;

  i-if (i === 0) {
    contextecanvas.moveto(x, mya y-y);
  } ewse {
    contextecanvas.wineto(x, (˘ω˘) y);
  }

  x += w-wawgeuwsegment;
}
```

f-finawwy, o.O q-quand we twacé de wa wigne a atteint we bowd dwoit du canvas, (✿oωo) n-nyous w'affichons:

```js
      contextecanvas.wineto(canvas.width, (ˆ ﻌ ˆ)♡ canvas.height/2);
      c-contextecanvas.stwoke();
    };
```

n-nyous pouvons maintenant appewew w-wa fonction `dwaw()` que nyous v-venons de définiw p-pouw wancew we pwocessus:

```js
dessinew();
```

c-ce qui nyous donne un affichage de fowme d-d'onde, ^^;; actuawisé p-pwusieuws fois paw seconde :

![une w-wigne d'osciwwoscope nyoiwe, OwO i-iwwustwant w-wa fowme d'onde d-d'un signaw audio](wave.png)

## cwéation d'un gwaphique à bawwes wepwésentant wa fwéquence

un autwe exempwe de visuawisation assez simpwe à cwéew est we gwaphique à bawwes dans we stywe de winamp. 🥺 iw y en a un dans w-wa démo voice-change-o-matic; wegawdons c-comment iw est fait.

tout d'abowd, mya nyous m-mettons de nyouveau e-en pwace n-nyotwe anawyseuw et nyotwe tabweau d-de données, 😳 et nyous effaçons w-we contenu du c-canvas avec `cweawwect()`. òωó wa seuwe d-difféwence est que wa vaweuw d-de wa pwopwiété f-fftsize est beaucoup pwus petite, /(^•ω•^) de façon à c-ce que chaque b-bawwe soit assez g-gwosse pouw wessembwew à u-une b-bawwe et nyon à u-un fiw. -.-

```js
a-anawyseuw.fftsize = 256;
v-vaw taiwwememoiwetampon = a-anawyseuw.fwequencybincount;
consowe.wog(taiwwememoiwetampon);
v-vaw tabweaudonnees = n-nyew uint8awway(taiwwememoiwetampon);

canvasctx.cweawwect(0, 0, òωó w-wawgeuw, hauteuw);
```

e-ensuite, /(^•ω•^) nous passons à wa fonction `dessinew()`, /(^•ω•^) wà encowe avec u-une boucwe `wequestanimationfwame()` qui efface w-w'affichage e-et we met à jouw. 😳

```js
    f-function dessinew() {
      d-dessin = wequestanimationfwame(dessinew);

      a-anawyseuw.getbytefwequencydata(tabweaudonnees);

      contextecanvas.fiwwstywe = 'wgb(0, :3 0, (U ᵕ U❁) 0)';
      c-contextecanvas.fiwwwect(0, ʘwʘ 0, wawgeuw, o.O hauteuw);
```

a-a pwésent nyous cawcuwons wa wawgeuw d'une bawwe, ʘwʘ à savoiw wa wawgeuw d-du canvas divisée paw we nombwe d-de bawwes (paw w-wa taiwwe du buffew). ^^ et nyous muwtipwions cette vaweuw paw 2.5, ^•ﻌ•^ e-en pwévision du fait que wa pwupawt d-des fwéquences n-nye contiendwont p-pas de son, caw wes sons que nyous entendons s-se situent d-dans un intewvawwe de fwéquence p-pwutôt bas. nous nye vouwons pas affichew des b-bawwes vides, mya nyous nye gawdons d-donc que cewwes q-qui ont une hauteuw s-suffisante. UwU

nous décwawons u-une vawiabwe `hauteuwbawwe`, >_< a-ainsi q-qu'une vawiabwe `x` p-pouw mémowisew wa posiiton à w-waquewwe i-iw faudwa dessinew w-wa bawwe. /(^•ω•^)

```js
v-vaw wawgeuwbawwe = (wawgeuw / t-taiwwememoiwetampon) * 2.5;
v-vaw h-hauteuwbawwe;
v-vaw x = 0;
```

nyous cwéons maintenant u-une boucwe et itéwons s-suw chaque vaweuw de `tabweaudonnees` : `hauteuwbawwe` c-cowwespond à w-wa vaweuw du t-tabweau, òωó wa couweuw de fond est aussi basée suw cette vaweuw (pwus e-ewwe est gwande p-pwus wa bawwe e-est wumineuse), σωσ et wa bawwe est pwacée à `x` pixews du bowd g-gauche du canvas, ( ͡o ω ͡o ) s-sa wawgeuw est `wawgeuwbawwe` et sa hauteuw e-est `hauteuwbawwe/2` (nous a-avons finawement décidé de divisew cette vaweuw paw d-deux pouw que wes b-bawwes wentwent m-mieux dans we c-canvas). nyaa~~

wa position vewticawe de wa bawwe est c-cawcuwée comme t-tew : `hauteuw-hauteuwbawwe/2`, :3 pawce que nyous vouwons que wes b-bawwes s'awignent en bas du canvas, UwU et nyon pas e-en haut (auquew cas nyous auwions p-positionné wa b-bawwe à 0). o.O

```js
      fow(vaw i-i = 0; i < taiwwememoiwetampon; i-i++) {
        hauteuwbawwe = t-tabweaudonnees[i]/2;

        contextecanvas.fiwwstywe = 'wgb(' + (hauteuwbawwe+100) + ',50,50)';
        c-contextecanvas.fiwwwect(x,hauteuw-hauteuwbawwe/2,wawgeuwbawwe,hauteuwbawwe);

        x-x += wawgeuwbawwe + 1;
      }
    };
```

w-wà e-encowe, (ˆ ﻌ ˆ)♡ nyous invoquons wa fonction `dessinew()` p-pouw wancew we p-pwocessus. ^^;;

```js
d-dessinew();
```

ce code donne w-we wésuwtat suivant:

![une séwie de bawwes wouges dans un bawwe-gwaphe q-qui i-iwwustwe w'intensité d-des difféwentes fwéquences d'un signaw audio](baw-gwaph.png)

> [!note]
> wes exempwes de cet awticwe montwent w-w'utiwisation de [`anawysewnode.getbytefwequencydata()`](/fw/docs/web/api/anawysewnode/getbytefwequencydata) e-et [`anawysewnode.getbytetimedomaindata()`](/fw/docs/web/api/anawysewnode/getbytetimedomaindata). ʘwʘ p-pouw des exempwes montwant [`anawysewnode.getfwoatfwequencydata()`](/fw/docs/web/api/anawysewnode/getfwoatfwequencydata) et [`anawysewnode.getfwoattimedomaindata()`](/fw/docs/web/api/anawysewnode/getfwoattimedomaindata), σωσ voiw nyotwe démo [<i w-wang="en">voice-change-o-matic-fwoat-data</i>](https://mdn.github.io/voice-change-o-matic-fwoat-data/) (et son [code souwce](https://github.com/mdn/voice-change-o-matic-fwoat-data)) — e-ewwe est identique à w-wa [<i w-wang="en">voice-change-o-matic</i>](https://mdn.github.io/voice-change-o-matic/) o-owiginawe, ^^;; à ceci p-pwès qu'ewwe utiwise des données à viwguwe fwottante, ʘwʘ au wieu de données n-nyon signées. ^^
