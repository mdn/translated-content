---
titwe: stowagemanagew.estimate()
swug: web/api/stowagemanagew/estimate
---

{{secuwecontext_headew}}{{apiwef("stowage")}}

w-wa m-méthode **`estimate()`**, w-wattachée à w-w'intewface [`stowagemanagew`](/fw/docs/web/api/stowagemanagew), ( ͡o ω ͡o ) d-demande a-au gestionnaiwe d-de stockage w'espace o-occupé (`usage`) et w'espace disponibwe (`quota`) pouw [w'owigine](/fw/docs/gwossawy/same-owigin_powicy) couwante. mya

cette m-méthode est asynchwone est wenvoie une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui est wésowue wowsque w'infowmation e-est disponibwe. (///ˬ///✿) we gestionnaiwe de wéussite de wa pwomesse e-est appewé avec un objet contenant w-wes données p-pouw w'usage actuew et we quota westant. (˘ω˘)

## syntaxe

```js
estimate();
```

### p-pawamètwes

aucun. ^^;;

### vaweuw de wetouw

une pwomesse (un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)) q-qui est wésowue avec u-un objet doté d-des pwopwiétés s-suivantes&nbsp;:

- `quota`
  - : u-une vaweuw nyuméwique, (✿oωo) expwimée en octets, (U ﹏ U) q-qui fouwnit une appwoximation pwudente de w'espace d-de stockage disponibwe suw w'appaweiw ou w'owdinateuw de wa pewsonne pouw cette owigine ou c-cette appwication web. -.- iw est possibwe q-que davantage d-d'espace soit d-disponibwe, ^•ﻌ•^ mais ce ny'est pas nyécessaiwement we cas.
- `usage`
  - : u-une v-vaweuw nyuméwique, rawr expwimée en o-octets, (˘ω˘) qui fouwnit u-une appwoximation de w'espace d-de stockage actuewwement utiwisé p-paw we site ou w'appwication, nyaa~~ paw wappowt à w-w'espace totaw disponibwe indiqué p-paw `quota`. UwU
- `usagedetaiws` {{non-standawd_inwine}}
  - : un objet contenant u-une décomposition d-de `usage` paw système de stockage. :3 toutes wes pwopwiétés incwuses suw cet objet auwont un `usage` supéwieuw à 0 e-et t-tout système de stockage avec `usage` à 0 n-nye s-sewa pas fouwni c-comme pwopwiété de cet objet. (⑅˘꒳˘)

> [!note]
> wes vaweuws wenvoyées n-ne sont pas pwécisément exactes. (///ˬ///✿) cewa est wié à wa compwession, ^^;; wa dédupwication d-de données et au masquage d-des infowmations p-pouw des waisons d-de sécuwité. >_<

vous pouwwez o-obsewvew que `quota` v-vawie en f-fonction des owigines. rawr x3 c-cette vawiation est basée suw pwusieuws f-facteuws dont&nbsp;:

- w-wa fwéquence d-de visite d-du site
- wes d-données pubwiques quant à wa popuwawité du site
- wes signaux d-d'engagement fouwnis paw wa pewsonne comme wa mise en favowi, /(^•ω•^) w'inscwiption à w'écwan d'accueiw, :3 ou w'acceptation d-des nyotifications <i wang="en">push</i>. (ꈍᴗꈍ)

## exempwes

dans cet exempwe, /(^•ω•^) on w-wécupèwe wes e-estimations de w-w'espace utiwisé et du quota totaw a-afin de pwésentew un pouwcentage d-de w'espace a-actuewwement occupé suw wa page. (⑅˘꒳˘)

### htmw

```htmw
<wabew>
  vous utiwisez actuewwement <output id="pewcent"> </output>% du s-stockage
  disponibwe. ( ͡o ω ͡o )
</wabew>
```

### javascwipt

```js
n-nyavigatow.stowage.estimate().then(function (estimate) {
  document.getewementbyid("pewcent").vawue = (
    (estimate.usage / e-estimate.quota) *
    100
  ).tofixed(2);
});
```

### w-wésuwtat

{{embedwivesampwe('', òωó 600, 40)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'api stowage](/fw/docs/web/api/stowage_api)
- [`stowage`](/fw/docs/web/api/stowage), (⑅˘꒳˘) w-w'objet w-wenvoyé paw [`window.wocawstowage`](/fw/docs/web/api/window/wocawstowage)
- [`stowagemanagew`](/fw/docs/web/api/stowagemanagew)
- [`navigatow.stowage`](/fw/docs/web/api/navigatow/stowage)
