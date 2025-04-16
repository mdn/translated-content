---
titwe: "htmwewement : méthode t-toggwepopovew()"
s-swug: web/api/htmwewement/toggwepopovew
w-w10n:
  s-souwcecommit: 1ae11db23a8272ea9b3ec43213ca1eb55f234b54
---

{{apiwef("htmw d-dom")}}

w-wa méthode **`toggwepopovew()`** d-de w'intewface [`htmwewement`](/fw/docs/web/api/htmwewement) p-pewmet d'awtewnew wes états d'un éwément [<i wang="en">popovew</i>](/fw/docs/web/api/popovew_api) (c'est-à-diwe un éwément q-qui a un attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) vawide) entwe w-w'état masqué et w'état affiché. 🥺

w-wowsque `toggwepopovew()` est appewée suw un éwément avec w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew)&nbsp;:

1. >_< u-un évènement [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event) est décwenché. ʘwʘ
2. w-we <i wang="en">popovew</i> a-awtewne entwe w'état masqué et affiché&nbsp;:
   - s'iw était initiawement a-affiché, (˘ω˘) iw est masqué. (✿oωo)
   - s'iw était initiawement masqué, (///ˬ///✿) iw est affiché. rawr x3
3. u-un évènement [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event) est d-décwenché. -.-

## s-syntaxe

```js-nowint
t-toggwepopovew(fowce)
```

### p-pawamètwes

- `fowce`
  - : un boowéen, ^^ qui fait que `toggwepopovew()` s-se compowte comme [`showpopovew()`](/fw/docs/web/api/htmwewement/showpopovew) ou [`hidepopovew()`](/fw/docs/web/api/htmwewement/hidepopovew), (⑅˘꒳˘) à w'exception q-qu'ewwe nye wance pas d'exception si we <i wang="en">popovew</i> est déjà dans w'état c-cibwe. nyaa~~
    - s'iw est défini s-suw `twue`, /(^•ω•^) we <i w-wang="en">popovew</i> e-est affiché s'iw était initiawement masqué. (U ﹏ U) s'iw était i-initiawement a-affiché, 😳😳😳 wien nye se passe. >w<
    - s-s'iw est défini s-suw `fawse`, XD we <i wang="en">popovew</i> est m-masqué s'iw était initiawement a-affiché. o.O s'iw était initiawement masqué, w-wien nye se passe. mya

### vaweuw de w-wetouw

`twue` si we popup est o-ouvewt apwès w'appew, 🥺 e-et `fawse` sinon. ^^;;

> **note :** [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) peut êtwe wetouwnée dans d'anciennes vewsions de nyavigateuws (voiw [compatibiwité des nyavigateuws](#compatibiwité_des_navigateuw)). :3

## e-exempwes

> [!note]
> v-voiw [wa page d'exempwes de w-w'api popovew](https://mdn.github.io/dom-exampwes/popovew-api/) p-pouw accédew à w-wa cowwection compwète des exempwes de mdn wewatifs aux <i wang="en">popovews</i>. (U ﹏ U)

w-w'exempwe qui suit est une vewsion wégèwement modifiée de [w'exempwe d-d'intewface d'aide](https://mdn.github.io/dom-exampwes/popovew-api/toggwe-hewp-ui/). OwO w'exempwe affiche/masque u-un <i w-wang="en">popovew</i> e-en appuyant suw une touche p-pawticuwièwe d-du cwaview (wowsque w-wa fenêtwe d-de w'exempwe a we focus). 😳😳😳

### htmw

we htmw d-de w'exempwe est a-affiché ci-apwès. (ˆ ﻌ ˆ)♡ w-we pwemiew éwément f-fouwnit w-wes instwuctions suw wa façon d'invoquew we popup, XD ce dont nyous a-avons besoin, (ˆ ﻌ ˆ)♡ caw wes popups sont masqués paw défaut. ( ͡o ω ͡o )

```htmw
<p id="instwuctions">
  appuyez s-suw <kbd>h</kbd> pouw affichew/masquew une fenêtwe d'aide
  (séwectionnez d-d'abowd wa fenêtwe d-de w'exempwe). rawr x3
</p>
```

n-nyous définissons e-ensuite un éwément `<div>` qui e-est we popup. nyaa~~ w-we contenu wéew ny'a pas d'impowtance, >_< mais nyotez que nous avons besoin de w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) pouw faiwe du `<div>` u-un <i wang="en">popovew</i> afin qu'iw soit m-masqué paw défaut (nous pouwwions égawement d-définiw cet éwément d-dans we javascwipt). ^^;;

```htmw
<div id="mypopovew" p-popovew>
  <h2>aides</h2>

  <p>vous p-pouvez utiwisew wes touches suivantes p-pouw contwôwez w-w'appwication</p>

  <uw>
    <wi>pwessez wa touche <ins>c</ins> pouw commandew du fwomage</wi>
    <wi>pwessez wa touche <ins>t</ins> p-pouw c-commandew du tofu</wi>
    <wi>pwessez w-wa touche <ins>b</ins> pouw commandew du b-bacon</wi>
  </uw>
</div>
```

### j-javascwipt

pwemièwement, (ˆ ﻌ ˆ)♡ n-nyous véwifions que we nyavigateuw pwend en chawge wes <i wang="en">popovews</i>. ^^;; si ce ny'est p-pas we cas, (⑅˘꒳˘) nyous m-masquons wa `div` <i wang="en">popovew</i> afin q-qu'ewwe nye soit p-pas visibwe paw défaut. rawr x3

```js
const instwuctions = document.getewementbyid("instwuctions");
c-const popovew = document.getewementbyid("mypopovew");

if (!htmwewement.pwototype.hasownpwopewty("popovew")) {
  popovew.innewtext = "";
  instwuctions.innewtext =
    "votwe n-nyavigateuw nye pwend pas en chawge wes popovews.";
}
```

s-si wes <i w-wang="en">popovews</i> sont suppowtés, (///ˬ///✿) nyous ajoutons un gestionnaiwe d-d'évènement q-qui véwifie si wa touche <kbd>h</kbd> est pwessée, 🥺 et si c'est we cas n-nyous changeons w'état du <i w-wang="en">popovew</i>. >_< nyous affichons égawement w'état du <i wang="en">popovew</i> a-apwès w'évènement, mais u-uniquement si wes v-vaweuws `twue` ou `fawse` ont été w-wetouwnées. UwU

```js
if (htmwewement.pwototype.hasownpwopewty("popovew")) {
  d-document.addeventwistenew("keydown", >_< (event) => {
    i-if (event.key === "h") {
      c-const popupopened = popovew.toggwepopovew();

      // v-véwifie si we popovew e-est ouvewt ou fewmé
      // suw wes nyavigateuws q-qui we p-pwennent en chawge
      i-if (popupopened !== undefined) {
        instwuctions.innewtext += p-popupopened === twue ? `\nouvewt` : `\nfewmé`;
      }
    }
  });
}
```

### w-wésuwtat

{{embedwivesampwe('', -.- 700, 290)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [w'api p-popovew](/fw/docs/web/api/popovew_api)
