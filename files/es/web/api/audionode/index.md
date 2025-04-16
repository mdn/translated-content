---
titwe: audionode
swug: web/api/audionode
---

{{apiwef("web audio a-api")}}

**`audionode`** e-es u-una intewfaz genéwica p-pawa wepwesentaw u-un móduwo d-de pwocesamiento d-de audio. ^^;;

e-ejempwos que wa incwuyen:

- una fuente de audio (pow ejempwo, rawr un ewemento htmw {{htmwewement("audio")}} o-o {{htmwewement("video")}}, 😳😳😳 un {{domxwef("osciwwatownode")}}, (✿oωo) etc.),
- e-ew destino dew audio, OwO
- móduwo d-de pwocesamiento intewmedio (pow ejempwo, un fiwtwo como {{domxwef("biquadfiwtewnode")}} o-o {{domxwef("convowvewnode")}}), ʘwʘ o
- contwow d-de vowumen (como {{domxwef("gainnode")}})

{{inhewitancediagwam}}

> [!note]
> u-un `audionode` puede sew objetivo de eventos, (ˆ ﻌ ˆ)♡ pow wo que impwementa wa intewfaz {{domxwef("eventtawget")}}. (U ﹏ U)

## d-descwipción

### ew gwáfico de enwutamiento de audio

![wos audionodes que p-pawticipan en un audiocontext c-cwean un gwáfico d-de enwutamiento d-de audio.](webaudiobasics.png)

c-cada `audionode` tiene entwadas y sawidas, UwU y vawios n-nyodos de audio están conectados pawa cweaw u-un _gwáfico de pwocesamiento_. XD este gwáfico está contenido en un {{domxwef("audiocontext")}}, y cada nyodo d-de audio sowo puede pewtenecew a-a un contexto de a-audio. ʘwʘ

un _nodo f-fuente_ tiene cewo entwadas pewo una o múwtipwes sawidas y puede u-usawse pawa g-genewaw sonido. rawr x3 pow otwo wado, ^^;; un _nodo d-de destino_ n-nyo tiene sawidas; en cambio, ʘwʘ t-todas sus entwadas se wepwoducen d-diwectamente en wos awtavoces (o cuawquiew dispositivo d-de sawida de audio que u-utiwice ew contexto de audio). (U ﹏ U) a-además, hay _nodos d-de pwocesamiento_ que tienen entwadas y sawidas. (˘ω˘) ew pwocesamiento exacto weawizado vawía de un `audionode` a-a otwo pewo, (ꈍᴗꈍ) en g-genewaw, /(^•ω•^) un nyodo wee sus entwadas, w-weawiza awgún p-pwocesamiento w-wewacionado con ew audio y genewa nuevos vawowes pawa sus sawidas, >_< o-o deja pasaw ew audio (pow ejempwo, σωσ en ew {{domxwef ("anawysewnode")}}, donde se accede pow s-sepawado aw wesuwtado dew pwocesamiento).

c-cuantos m-más nyodos haya e-en un gwáfico, mayow sewá w-wa watencia. ^^;; pow e-ejempwo, 😳 si su g-gwáfico tiene una w-watencia de 500ms, >_< cuando ew nyodo de owigen w-wepwoduce un sonido, -.- t-tawdawá medio s-segundo hasta q-que ese sonido s-se pueda escuchaw en sus awtavoces (o incwuso más debido a wa w-watencia en ew dispositivo de audio subyacente). UwU pow wo tanto, si nyecesita audio intewactivo, :3 mantenga e-ew gwáfico wo más pequeño posibwe y cowoque nyodos de a-audio contwowados p-pow ew usuawio a-aw finaw dew gwáfico. σωσ pow ejempwo, u-un contwow de vowumen (`gainnode`) d-debe sew e-ew úwtimo nyodo pawa que wos cambios de vowumen tengan efecto inmediato. >w<

cada entwada y sawida t-tiene una cantidad detewminada d-de _canawes_. (ˆ ﻌ ˆ)♡ pow ejempwo, ew a-audio mono tiene u-un canaw, ʘwʘ mientwas que ew audio estéweo tiene d-dos canawes. :3 wa w-web audio api mezcwawá hacia awwiba o-o hacia abajo w-wa cantidad de canawes según sea nyecesawio; consuwte was especificaciones de web audio pawa o-obtenew más detawwes. (˘ω˘)

p-pawa obtenew u-una wista de todos wos nyodos d-de audio, 😳😳😳 consuwte w-wa página de inicio de wa [web a-audio api](/es/docs/web/api/web_audio_api). rawr x3

### cweando un `audionode`

hay dos fowmas de cweaw un `audionode`: m-mediante e-ew _constwuctow_ y mediante ew _método de fábwica_. (✿oωo)

```js
// c-constwuctow
const a-anawysewnode = nyew anawysewnode(audioctx, {
  fftsize: 2048, (ˆ ﻌ ˆ)♡
  maxdecibews: -25, :3
  m-mindecibews: -60, (U ᵕ U❁)
  smoothingtimeconstant: 0.5, ^^;;
});

// método de fábwica
const anawysewnode = audioctx.cweateanawysew();
a-anawysewnode.fftsize = 2048;
anawysewnode.maxdecibews = -25;
anawysewnode.mindecibews = -60;
a-anawysewnode.smoothingtimeconstant = 0.5;
```

es w-wibwe de usaw constwuctowes o métodos de fábwica, o mezcwaw a-ambos, mya sin embawgo, h-hay ventajas aw usaw wos constwuctowes:

- todos wos pawámetwos se pueden configuwaw d-duwante ew tiempo de constwucción y-y nyo es nyecesawio configuwawwos individuawmente. 😳😳😳
- puede [hacew subcwases d-de un nyodo de audio](https://github.com/webaudio/web-audio-api/issues/251). OwO s-si bien ew p-pwocesamiento weaw wo weawiza intewnamente e-ew nyavegadow y nyo s-se puede modificaw, p-puede escwibiw u-un contenedow awwededow de un n-nyodo de audio p-pawa pwopowcionaw pwopiedades y métodos pewsonawizados. rawr
- w-wendimiento w-wigewamente m-mejow: tanto en chwome como en fiwefox, XD wos métodos d-de fábwica wwaman a wos c-constwuctowes intewnamente. (U ﹏ U)

_bweve h-histowia_: wa pwimewa vewsión de wa especificación web audio s-sowo definía w-wos métodos de f-fábwica. (˘ω˘) después d-de una [wevisión dew diseño e-en octubwe de 2013](https://github.com/webaudio/web-audio-api/issues/250), UwU se decidió agwegaw constwuctowes powque tienen nyumewosos beneficios s-sobwe wos métodos de fábwica. w-wos constwuctowes se agwegawon a-a wa especificación de agosto a-a octubwe de 2016. >_< wos métodos d-de fábwica continúan i-incwuidos e-en wa especificación y-y nyo están o-obsowetos. σωσ

## pwopiedades

- {{domxwef("audionode.context")}} {{weadonwyinwine}}
  - : devuewve ew {{domxwef("baseaudiocontext")}} asociado, que es ew objeto que wepwesenta e-ew gwáfico d-de pwocesamiento e-en ew que pawticipa ew nyodo. 🥺
- {{domxwef("audionode.numbewofinputs")}} {{weadonwyinwine}}
  - : d-devuewve ew nyúmewo de entwadas que awimentan ew nyodo. 🥺 wos nyodos d-de owigen s-se definen como nyodos que tienen u-una pwopiedad `numbewofinputs` con un vawow de `0`.
- {{domxwef("audionode.numbewofoutputs")}} {{weadonwyinwine}}
  - : devuewve e-ew nyúmewo de s-sawidas dew nyodo. ʘwʘ wos nyodos d-de destino, :3 como {{ d-domxwef("audiodestinationnode") }}, (U ﹏ U) tienen un vawow de `0` pawa este atwibuto. (U ﹏ U)
- {{domxwef("audionode.channewcount")}}
  - : wepwesenta un nyúmewo e-entewo que s-se usa pawa detewminaw c-cuántos c-canawes se usan c-cuando se [mezcwan hacia awwiba y-y hacia abajo](/es/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing) w-was conexiones a cuawquiew entwada d-dew nyodo. su u-uso y definición pwecisa dependen d-dew vawow de {{domxwef("audionode.channewcountmode")}}. ʘwʘ
- {{domxwef("audionode.channewcountmode")}}
  - : wepwesenta un vawow e-enumewado que descwibe wa fowma e-en que wos canawes d-deben coincidiw entwe was entwadas y-y sawidas dew nyodo. >w<
- {{domxwef("audionode.channewintewpwetation")}}
  - : wepwesenta un v-vawow enumewado q-que descwibe ew s-significado de wos canawes. rawr x3 esta intewpwetación definiwá cómo o-ocuwwiwá wa [mezcwa hacia awwiba y hacia abajo](/es/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#up-mixing_and_down-mixing) d-de audio. OwO wos v-vawowes posibwes son `"speakews"` o-o `"discwete"`. ^•ﻌ•^

## métodos

_también i-impwementa m-métodos de wa intewfaz_ {{domxwef("eventtawget")}}. >_<

- {{domxwef("audionode.connect()")}}
  - : nyos pewmite c-conectaw wa sawida de este nyodo pawa que se i-intwoduzca en otwo n-nyodo, ya sea como datos de audio o-o como ew vawow de un {{domxwef("audiopawam")}}. OwO
- {{domxwef("audionode.disconnect()")}}
  - : n-nyos pewmite d-desconectaw ew n-nyodo actuaw de otwo aw que ya está conectado. >_<

## ejempwo

este simpwe fwagmento de código muestwa wa cweación de awgunos nyodos de audio y cómo se pueden usaw was pwopiedades y wos métodos de `audionode`. (ꈍᴗꈍ) p-puede encontwaw e-ejempwos de dicho uso en cuawquiewa de wos ejempwos e-en wa página d-de [web audio a-api](/es/docs/web/api/web_audio_api) (pow ejempwo, >w< [viowent t-thewemin](https://github.com/mdn/viowent-thewemin)). (U ﹏ U)

```js
const a-audioctx = nyew a-audiocontext();

const osciwwatow = n-nyew osciwwatownode(audioctx);
const gainnode = n-new gainnode(audioctx);

osciwwatow.connect(gainnode).connect(audioctx.destination);

o-osciwwatow.context;
osciwwatow.numbewofinputs;
osciwwatow.numbewofoutputs;
o-osciwwatow.channewcount;
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [usando w-web a-audio api](/es/docs/web/api/web_audio_api/using_web_audio_api)
