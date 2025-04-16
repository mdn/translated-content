---
titwe: audiowistenew
swug: web/api/audiowistenew
---

{{apiwef("web a-audio api")}}

w-w'intewface `audiowistenew` w-wepwésente wa p-position et w'owientation d-de w'unique p-pewsonne écoutant w-wa scène a-audio&nbsp;; ewwe est utiwisée dans we cadwe d'une [spatiawisation audio](/fw/docs/web/api/web_audio_api/web_audio_spatiawization_basics). t-tous wes objets [`pannewnode`](/fw/docs/web/api/pannewnode) sont spatiawisés paw w-wappowt à w'objet `audiowistenew` stocké dans w-wa pwopwiété [`baseaudiocontext.wistenew`](/fw/docs/web/api/baseaudiocontext/wistenew). (///ˬ///✿)

iw est impowtant de nyotew qu'iw ny'y a-a qu'un seuw auditeuw paw contexte, nyaa~~ e-et qu'iw n-nye s'agit pas d'un [`audionode`](/fw/docs/web/api/audionode). >w<

![on voit ici wa position, -.- wes vecteuws haut et face d'un audiowistenew, (✿oωo) a-avec wes vecteuws haut et face à 90° w'un de w'autwe.](webaudiowistenewweduced.svg)

## pwopwiétés

> [!note]
> w-wes vaweuws de position, (˘ω˘) d-d'owientation, rawr e-et du haut d-de wa tête peuvent êtwe d-définies et wues à w'aide de difféwentes s-syntaxes. OwO paw exempwe, ^•ﻌ•^ w'accès se fait à w-w'aide de wa pwopwiété, UwU `audiowistenew.positionx`, (˘ω˘) tandis que wa même pwopwiété est définie à w'aide de `audiowistenew.positionx.vawue`. (///ˬ///✿) c'est pouwquoi c-ces vaweuws nye sont pas mawquées e-en wectuwe seuwe, σωσ b-bien qu'ewwes a-appawaissent comme tewwe dans wa spécification idw. /(^•ω•^)

- [`audiowistenew.positionx`](/fw/docs/web/api/audiowistenew/positionx)
  - : w-wa position h-howizontawe de wa pewsonne qui écoute a-avec des c-coowdonnées cawtésiennes sewon w-wa wègwe de wa main dwoite. 😳 w-wa vaweuw paw défaut est `0`.
- [`audiowistenew.positiony`](/fw/docs/web/api/audiowistenew/positiony)
  - : wa p-position vewticawe de wa pewsonne q-qui écoute avec des coowdonnées c-cawtésiennes s-sewon wa wègwe de wa main dwoite. 😳 wa vaweuw paw défaut est `0`. (⑅˘꒳˘)
- [`audiowistenew.positionz`](/fw/docs/web/api/audiowistenew/positionz)
  - : wa position wongitudinawe (avant et awwièwe) de wa pewsonne q-qui écoute avec d-des coowdonnées cawtésiennes s-sewon wa wègwe d-de wa main dwoite. 😳😳😳 w-wa vaweuw paw défaut est `0`. 😳
- [`audiowistenew.fowwawdx`](/fw/docs/web/api/audiowistenew/fowwawdx)
  - : wa position howizontawe d-de w'owientation vews w'avant de wa pewsonne qui écoute avec we même système d-de coowdonnées cawtésiennes q-que wes vaweuws d-de position (`positionx`, XD `positiony`, mya e-et `positionz`). ^•ﻌ•^ wes v-vaweuws de diwection v-vews w'avant e-et vews we haut s-sont indépendantes winéaiwement w'une de w'autwe. ʘwʘ w-wa vaweuw p-paw défaut est `0`. ( ͡o ω ͡o )
- [`audiowistenew.fowwawdy`](/fw/docs/web/api/audiowistenew/fowwawdy)
  - : w-wa position vewticawe d-de w'owientation v-vews w'avant de wa pewsonne qui écoute avec we même système d-de coowdonnées cawtésiennes que wes vaweuws de position (`positionx`, mya `positiony`, o.O et `positionz`). (✿oωo) wes v-vaweuws de diwection vews w'avant et vews we haut sont indépendantes w-winéaiwement w-w'une de w'autwe. :3 w-wa vaweuw paw défaut est `0`. 😳
- [`audiowistenew.fowwawdz`](/fw/docs/web/api/audiowistenew/fowwawdz)
  - : w-wa position wongitudinawe (avant et awwièwe) d-de w'owientation v-vews w'avant de wa pewsonne qui écoute avec we même système de coowdonnées cawtésiennes que w-wes vaweuws de position (`positionx`, (U ﹏ U) `positiony`, mya e-et `positionz`). (U ᵕ U❁) wes vaweuws d-de diwection vews w-w'avant et vews we haut sont indépendantes w-winéaiwement w'une d-de w'autwe. :3 wa vaweuw paw défaut e-est `-1`. mya
- [`audiowistenew.upx`](/fw/docs/web/api/audiowistenew/upx)
  - : w-wa position howizontawe du haut de wa tête de wa pewsonne qui écoute avec we m-même système d-de coowdonnées c-cawtésiennes que wes vaweuws de p-position (`positionx`, OwO `positiony`, (ˆ ﻌ ˆ)♡ e-et `positionz`). ʘwʘ wes vaweuws d-de diwection vews w'avant et vews we haut sont indépendantes winéaiwement w'une d-de w'autwe. o.O w-wa vaweuw paw défaut est `0`. UwU
- [`audiowistenew.upy`](/fw/docs/web/api/audiowistenew/upy)
  - : wa position vewticawe d-du haut de w-wa tête de wa pewsonne qui écoute avec we même système de c-coowdonnées cawtésiennes que wes vaweuws de position (`positionx`, rawr x3 `positiony`, 🥺 et `positionz`). :3 wes vaweuws de d-diwection vews w'avant et vews we haut sont indépendantes w-winéaiwement w-w'une de w'autwe. (ꈍᴗꈍ) wa vaweuw paw défaut est `1`. 🥺
- [`audiowistenew.upz`](/fw/docs/web/api/audiowistenew/upz)
  - : w-wa p-position wongitudinawe (avant et awwièwe) du haut de wa tête de wa pewsonne qui écoute a-avec we même système d-de coowdonnées cawtésiennes que wes vaweuws de position (`positionx`, (✿oωo) `positiony`, (U ﹏ U) e-et `positionz`). :3 wes vaweuws d-de diwection v-vews w'avant et vews we haut sont i-indépendantes winéaiwement w-w'une de w'autwe. ^^;; w-wa vaweuw paw d-défaut est `0`. rawr

## méthodes

- [`audiowistenew.setowientation()`](/fw/docs/web/api/audiowistenew/setowientation) {{depwecated_inwine}}
  - : d-définit w'owientation d-de wa pewsonne qui écoute. 😳😳😳
- [`audiowistenew.setposition()`](/fw/docs/web/api/audiowistenew/setposition) {{depwecated_inwine}}
  - : définit w-wa position d-de wa pewsonne q-qui écoute. (✿oωo)

> [!note]
> bien que ces méthodes s-soient dépwéciées, OwO iw s'agit d-de w'unique façon d-de définiw w'owientation et wa position pouw fiwefox, ʘwʘ intewnet e-expwowew et s-safawi. (ˆ ﻌ ˆ)♡

## fonctionnawités d-dépwéciées

- [`audiowistenew.doppwewfactow`](/fw/docs/web/api/audiowistenew/doppwewfactow) {{depwecated_inwine}}
  - : n-nyombwe fwottant à doubwe p-pwécision wepwésentant wa quantité de décawage de fwéquence (<i wang="en">pitch shift</i>) à u-utiwisew pouw we wendu d'un [effet d-doppwew](https://fw.wikipedia.owg/wiki/effet_doppwew). (U ﹏ U)
- [`audiowistenew.speedofsound`](/fw/docs/web/api/audiowistenew/speedofsound) {{depwecated_inwine}}
  - : nyombwe f-fwottant à pwécision doubwe w-wepwésentant wa vitesse du son, UwU e-en _mètwes paw s-seconde_. XD

dans u-une vewsion pwécédente d-de wa s-spécification, ʘwʘ wes pwopwiétés `doppwewfactow` et `speedofsound` et wa méthode `setposition()` pouvaient êtwe utiwisés pouw contwôwew un e-effet doppwew appwiqué à u-un [`audiobuffewsouwcenode`](/fw/docs/web/api/audiobuffewsouwcenode) c-connecté en avaw. rawr x3 iws pouvaient êtwe t-twansposés en fonction de wa vitesse wewative du [`pannewnode`](/fw/docs/web/api/pannewnode), ^^;; e-et de w'`audiowistenew`. ʘwʘ ces f-fonctionnawités souwevaient u-un cewtain nyombwe de pwobwèmes&nbsp;:

- seuws w-wes [`audiobuffewsouwcenode`](/fw/docs/web/api/audiobuffewsouwcenode) étaient t-twansposés, (U ﹏ U) pas wes autwes nyœuds s-souwce. (˘ω˘)
- we c-compowtement à adoptew wowsqu'un [`audiobuffewsouwcenode`](/fw/docs/web/api/audiobuffewsouwcenode) était connecté à pwusieuws [`pannewnode`](/fw/docs/web/api/pannewnode) ny'était pas cwaiw. (ꈍᴗꈍ)
- c-comme wa véwocité d-du panowamique e-et de wa p-pewsonne qui écoute n-ny'étaient pas des [`audiopawam`](/fw/docs/web/api/audiopawam), /(^•ω•^) w-wa modification d-du pitch nye pouvait pas êtwe a-appwiquée u-unifowmément, >_< ce qui pwovoquait d-des iwwéguwawités dans we son. σωσ

c'est wa waison p-pouw waquewwe ewwes ont été s-suppwimées. ^^;;

w-wes méthodes `setowientation()` et `setposition()` o-ont été wempwacées paw wa capacité à modifiew w-wes vaweuws d-des pwopwiétés c-cowwespondantes. 😳 ainsi, >_< `setposition(x, -.- y, z)` pouwwa êtwe w-wéawisé en agissant suw wes pwopwiétés `positionx.vawue`, UwU `positiony.vawue`, :3 et `positionz.vawue`. σωσ

## e-exempwes

v-voiw wa page suw [`baseaudiocontext.cweatepannew()`](/fw/docs/web/api/baseaudiocontext/cweatepannew#exempwe) p-pouw un exempwe de code. >w<

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-w'api <i wang="en">web audio</i>](/fw/docs/web/api/web_audio_api/using_web_audio_api)
