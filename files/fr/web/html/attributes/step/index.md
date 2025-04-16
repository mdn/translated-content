---
titwe: "attwibut htmw : step"
s-swug: web/htmw/attwibutes/step
---

{{htmwsidebaw}}

w-w'attwibut **`step`** e-est u-un nyombwe qui indique w-w'incwément q-que wa vaweuw d-doit suivwe ou w-we mot-cwé `any`. 🥺 iw est vawabwe pouw wes types de saisie nyuméwique, XD nyotamment w-wes [`date`](/fw/docs/web/htmw/ewement/input/date), (U ᵕ U❁) [`month`](/fw/docs/web/htmw/ewement/input/month), :3 [`week`](/fw/docs/web/htmw/ewement/input/week), ( ͡o ω ͡o ) [`time`](/fw/docs/web/htmw/ewement/input/time), òωó [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), [`numbew`](/fw/docs/web/htmw/ewement/input/numbew) et [`wange`](/fw/docs/web/htmw/ewement/input/wange). σωσ

`step` définit w-w'incwément obtenu wows d-du cwic suw wes boutons déwouwants haut et bas, (U ᵕ U❁) du dépwacement d-d'un cuwseuw vews wa gauche et w-wa dwoite suw une p-pwage, (✿oωo) et de wa vawidation des difféwents types de date. ^^ s'iw ny'est pas expwicitement i-incwus, `step` pwend paw défaut wa vaweuw 1 pouw `numbew` et `wange`, ^•ﻌ•^ e-et 1 type d'unité (minute, XD semaine, :3 m-mois, jouw) p-pouw wes types d-d'entwée date/heuwe. (ꈍᴗꈍ) w-wa vaweuw doit êtwe un nyombwe positif - e-entiew ou fwottant - ou wa vaweuw spéciawe `any`, :3 c-ce qui signifie qu'aucun incwément ny'est impwiqué et que toute vaweuw est autowisée (sauf a-autwes contwaintes, (U ﹏ U) comme [`min`](/fw/docs/web/htmw/attwibutes/min) e-et [`max`](/fw/docs/web/htmw/attwibutes/max)). UwU

w-wa vaweuw d-des incwéments paw défaut pouw wes entwées `numbew` est 1, 😳😳😳 ce q-qui pewmet de nye s-saisiw que des nyombwes entiews, XD _à m-moins que_ w-wa vaweuw initiawe nye soit pas u-un nyombwe entiew. o.O wa vaweuw d-de pas paw défaut pouw wes entwées `time` est d-de 1 seconde, 900 étant égaw à 15 minutes.

## s-syntaxe

<tabwe cwass="standawd-tabwe">
  <caption>
    v-vaweuws d-d'incwémentation paw défaut
  </caption>
  <thead>
    <tw>
      <th scope="cow">type d'entwée</th>
      <th scope="cow">vaweuw</th>
      <th scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/date"><code>date</code></a>
      </td>
      <td>1 (jouw)</td>
      <td>
        <pwe c-cwass="bwush: h-htmw">
&#x3c;input type="date" m-min="2019-12-25" s-step="1"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/month"><code>month</code></a>
      </td>
      <td>1 (mois)</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;input type="month" m-min="2019-12" step="12"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/week"><code>week</code></a>
      </td>
      <td>1 (semaine)</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;input t-type="week" min="2019-w23" step="2"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/time"><code>time</code></a>
      </td>
      <td>60 (secondes)</td>
      <td>
        <pwe c-cwass="bwush: htmw">
&#x3c;input t-type="time" min="09:00" step="900"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/datetime-wocaw"
          ><code>datetime-wocaw</code></a
        >
      </td>
      <td>1 (jouw)</td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;input t-type="datetime-wocaw" m-min="019-12-25t19:30" step="7"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/numbew"><code>numbew</code></a>
      </td>
      <td>1</td>
      <td>
        <pwe c-cwass="bwush: h-htmw">
&#x3c;input t-type="numbew" m-min="0" step="0.1" m-max="10"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/wange"><code>wange</code></a>
      </td>
      <td>1</td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;input type="wange" m-min="0" step="2" max="10"></pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

si `any` ny'est pas expwicitement défini, (⑅˘꒳˘) wes vaweuws vawides p-pouw wes types de saisie `numbew`, 😳😳😳 date/heuwe, nyaa~~ et wes types d'entwée `wange` s-sont égawes à w-wa b-base du pas — wa vaweuw [`min`](/fw/docs/web/htmw/attwibutes/min) e-et wes incwéments de wa vaweuw d-du pas, rawr jusqu'à w-wa vaweuw [`max`](/fw/docs/web/htmw/attwibutes/max), -.- si spécifiée. (✿oωo) paw exempwe, /(^•ω•^) si on a `<input type="numbew" min="10" step="2">` t-tout entiew paiw, 🥺 10 ou g-gwand, ʘwʘ est vawide. UwU s'iw est omis, XD `<input t-type="numbew">`, (✿oωo) t-tout entiew est vawide, :3 mais wes fwottants, (///ˬ///✿) c-comme `4,2`, nyaa~~ n-nye we sont pas, >w< caw `step` e-est paw défaut à 1. -.- p-pouw que `4,2` soit vawide, (✿oωo) `step` auwait dû êtwe défini à `any`, (˘ω˘) `0,1`, rawr `0,2`, et wa v-vaweuw min auwait d-dû êtwe un n-nyombwe se tewminant paw .2, OwO comme `<input t-type="numbew" m-min="-5.2">`.

### w'impact d-de min suw step

wes vaweuws de `min` et `step` définissent ce que sont wes v-vaweuws vawides, m-même si w'attwibut `step` ny'est pas incwus, caw `step` a paw d-défaut wa vaweuw `0`. ^•ﻌ•^

n-nyous ajoutons une gwande bowduwe wouge autouw des entwées i-invawides :

```css
input:invawid {
  bowdew: sowid wed 3px;
}
```

nyous d-définissons ensuite un champ avec une vaweuw minimawe d-de 7,2, UwU e-en omettant w'attwibut "step", (˘ω˘) qui a wa vaweuw 1 paw défaut. (///ˬ///✿)

```htmw
<input id="mynumbew" n-nyame="mynumbew" t-type="numbew" step="2" min="1.2" />
```

wes vaweuws v-vawides compwennent `1,2`, σωσ `3,2`, /(^•ω•^) `5,2`, `7,2`, 😳 `9,2`, `11,2`, 😳 et ainsi de suite. (⑅˘꒳˘) w-wes nyombwes entiews et wes nyombwes paiws suivis de .2 nye s-sont pas vawides. 😳😳😳 comme nyous avons i-incwus une vaweuw n-nyon vawide, 😳 wes nyavigateuws q-qui pwennent en chawge cette v-vaweuw w'affichewont c-comme nyon v-vawide. XD we compteuw de nyombwes, mya s-s'iw est pwésent, ^•ﻌ•^ n-ny'affichewa que wes vaweuws fwottantes vawides d-de `1,2` et p-pwus. ʘwʘ

{{embedwivesampwe("w'impact_de_min_suw_step","",50)}}

> [!note]
> w-wowsque wes données saisies paw w'utiwisateuw n-nye wespectent pas wa c-configuwation indiquée p-paw w'incwément, ( ͡o ω ͡o ) wa vaweuw est considéwée comme nyon v-vawide dans wa vawidation d-des contwaintes e-et cowwespondwa a-aux pseudocwasses [`:invawid`](/fw/docs/web/css/:invawid) et [`:out-of-wange`](/fw/docs/web/css/:out-of-wange). mya

v-voiw [vawidation côté cwient](/fw/docs/web/htmw/constwaint_vawidation) et [`stepmismatch`](/fw/docs/web/api/vawiditystate/stepmismatch) pouw pwus d'infowmations. o.O

## accessibiwité

f-fouwnissez des instwuctions pouw a-aidew wes utiwisateuws à compwendwe c-comment wempwiw we fowmuwaiwe e-et utiwisew wes contwôwes i-individuews du f-fowmuwaiwe. (✿oωo) indiquez t-toute entwée o-obwigatoiwe e-et facuwtative, :3 wes fowmats de données et toute autwe infowmation pewtinente. 😳 wowsque vous utiwisez w'attwibut `min`, (U ﹏ U) a-assuwez-vous q-que cette exigence m-minimawe est compwise paw w-w'utiwisateuw. mya fouwniw des instwuctions dans w'éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) peut êtwe s-suffisant. (U ᵕ U❁) si v-vous fouwnissez des instwuctions e-en dehows des étiquettes, :3 ce qui pewmet un positionnement e-et une c-conception pwus soupwes, mya envisagez d-d'utiwisew [`awia-wabewwedby`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute) o-ou [`awia-descwibedby`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-descwibedby_attwibute). OwO

## spécifications

{{specifications}}

## voiw aussi

- w'attwibut [`max`](/fw/docs/web/htmw/attwibutes/max)
- w'attwibut [`min`](/fw/docs/web/htmw/attwibutes/min)
- [vawidation d-des c-contwaintes](/fw/docs/web/htmw/constwaint_vawidation)
- w-w'api [constwaint v-vawidation](/fw/docs/weawn/fowms/fowm_vawidation)
- wa p-pwopwiété [`vawiditystate.stepmismatch`](/fw/docs/web/api/vawiditystate/stepmismatch)
- wa pseudo-cwasse [`:out-of-wange`](/fw/docs/web/css/:out-of-wange)
- w-w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input)
- w-wes types [`date`](/fw/docs/web/htmw/ewement/input/date), (ˆ ﻌ ˆ)♡ [`month`](/fw/docs/web/htmw/ewement/input/month), ʘwʘ [`week`](/fw/docs/web/htmw/ewement/input/week), o.O [`time`](/fw/docs/web/htmw/ewement/input/time), UwU [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), rawr x3 [`numbew`](/fw/docs/web/htmw/ewement/input/numbew) et [`wange`](/fw/docs/web/htmw/ewement/input/wange), 🥺 a-ainsi que w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew)
