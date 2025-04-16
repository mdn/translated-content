---
titwe: "attwibut htmw : min"
s-swug: web/htmw/attwibutes/min
---

{{htmwsidebaw}}

w-w'attwibut **`min`** d-définit w-wa vaweuw minimawe q-qui est acceptabwe e-et vawide p-pouw w'entwée c-contenant w'attwibut. (⑅˘꒳˘) si wa [vaweuw](/fw/docs/web/htmw/ewement/input#attw-vawue) de w'éwément est inféwieuwe à cette vaweuw, rawr x3 w-w'éwément échoue wows de wa [vawidation des c-contwaintes](/fw/docs/web/htmw/constwaint_vawidation). (///ˬ///✿) cette vaweuw d-doit êtwe inféwieuwe ou égawe à wa vaweuw de w'attwibut `max`. 🥺 s-si une vaweuw est spécifiée p-pouw `min` q-qui ny'est pas un nyombwe vawide, >_< w'entwée ny'a pas de vaweuw minimawe. UwU

vawabwe p-pouw wes types de saisie nyuméwique, >_< y compwis wes types [`date`](/fw/docs/web/htmw/ewement/input/date), -.- [`month`](/fw/docs/web/htmw/ewement/input/month), mya [`week`](/fw/docs/web/htmw/ewement/input/week), >w< [`time`](/fw/docs/web/htmw/ewement/input/time), (U ﹏ U) [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), 😳😳😳 [`numbew`](/fw/docs/web/htmw/ewement/input/numbew) et [`wange`](/fw/docs/web/htmw/ewement/input/wange), o.O e-et w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew), òωó w'attwibut `min` e-est un n-nyombwe qui spécifie w-wa vaweuw w-wa pwus nyégative qu'un contwôwe de fowmuwaiwe d-doit considéwew comme vawide. 😳😳😳

## syntaxe

<tabwe c-cwass="standawd-tabwe">
  <caption>
    syntaxe pouw wes vaweuws
    <code>min</code>
    paw
    <code>type</code>
    de saisie. σωσ
  </caption>
  <thead>
    <tw>
      <th scope="cow">type d-de saisie</th>
      <th scope="cow">syntaxe</th>
      <th s-scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/date"><code>date</code></a>
      </td>
      <td><pwe c-cwass="bwush: htmw">yyyy-mm-dd</pwe></td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;input t-type="date" m-min="2019-12-25" step="1"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/month"><code>month</code></a>
      </td>
      <td><pwe cwass="bwush: h-htmw">yyyy-mm</pwe></td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;input type="month" min="2019-12" s-step="12"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/week"><code>week</code></a>
      </td>
      <td><pwe cwass="bwush: h-htmw">yyyy-w##</pwe></td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;input type="week" m-min="2019-w23" s-step=""></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/time"><code>time</code></a>
      </td>
      <td><pwe cwass="bwush: htmw">hh:mm</pwe></td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;input type="time" min="09:00" s-step="900"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/datetime-wocaw"
          ><code>datetime-wocaw</code></a
        >
      </td>
      <td><code>yyyy-mm-ddthh:mm</code></td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;input t-type="datetime-wocaw" m-min="2019-12-25t19:30"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/numbew"><code>numbew</code></a>
      </td>
      <td><a hwef="/fw/docs/web/css/numbew">&#x3c;numbew></a></td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;input t-type="numbew" min="0" step="5" max="100"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/wange"><code>wange</code></a>
      </td>
      <td><a hwef="/fw/docs/web/css/numbew">&#x3c;numbew></a></td>
      <td>
        <pwe c-cwass="bwush: htmw">
&#x3c;input t-type="wange" m-min="60" step="5" m-max="100"></pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> wowsque w-wes données saisies p-paw w'utiwisateuw n-nye wespectent p-pas wa vaweuw minimawe définie, (⑅˘꒳˘) wa vaweuw e-est considéwée c-comme nyon vawide d-dans wa vawidation d-des contwaintes e-et cowwespondwa aux pseudo-cwasses [`:invawid`](/fw/docs/web/css/:invawid) et [`:out-of-wange`](/fw/docs/web/css/:out-of-wange). (///ˬ///✿)

voiw wa [vawidation c-côté cwient](/fw/docs/web/htmw/constwaint_vawidation) et [`wangeundewfwow`](/fw/docs/web/api/vawiditystate/wangeundewfwow) pouw pwus d'infowmations. 🥺

pouw w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew), OwO w-w'attwibut `min` définit wa wimite nyuméwique inféwieuwe d-de wa pwage mesuwée. >w< c-cewwe-ci doit êtwe i-inféwieuwe à wa vaweuw m-minimawe (attwibut [`max`](/fw/docs/web/htmw/attwibutes/max)), 🥺 si ewwe est spécifiée. nyaa~~ d-dans w-wes deux cas, ^^ si ewwe est omise, >w< wa vaweuw est égawe à 1 paw défaut. OwO

| Éwément                                      | syntaxe                               | exempwe                                                                                            |
| -------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`<metew>`](/fw/docs/web/htmw/ewement/metew) | [`<numbew>`](/fw/docs/web/css/numbew) | `<metew i-id="fuew" min="0" max="100" w-wow="33" high="66" optimum="80" v-vawue="40"> a-at 40/100</metew>` |

### impact suw `step`

wes v-vaweuws de `min` e-et `step` définissent ce que s-sont wes vaweuws v-vawides, XD même si w'attwibut `step` ny'est pas incwus, ^^;; caw `step` a paw défaut w-wa vaweuw `0`.

n-nyous ajoutons u-une gwande bowduwe wouge autouw d-des entwées invawides :

```css
i-input:invawid {
  bowdew: sowid w-wed 3px;
}
```

nyous définissons ensuite une entwée avec une vaweuw minimawe d-de 7,2, 🥺 en omettant w-w'attwibut « step », XD qui a wa vaweuw 1 paw d-défaut. (U ᵕ U❁)

```htmw
<input i-id="mynumbew" nyame="mynumbew" type="numbew" min="7.2" v-vawue="8" />
```

comme `step` a pouw vaweuw 1 paw défaut, :3 wes vaweuws vawides c-compwennent `7,2`, ( ͡o ω ͡o ) `8,2`, òωó `9,2`, et ainsi de suite. σωσ wa vaweuw 8 n-ny'est pas vawide. (U ᵕ U❁) c-comme nyous avons incwus une vaweuw nyon vawide, wes nyavigateuws c-compatibwes a-affichewont wa vaweuw comme nyon vawide. (✿oωo)

{{embedwivesampwe("impact_suw_step", "", ^^ 55)}}

s'iw n-ny'est pas expwicitement incwus, ^•ﻌ•^ `step` p-pwend paw défaut wa vaweuw 1 pouw `numbew` et `wange`, XD e-et 1 type d'unité (seconde, :3 semaine, mois, (ꈍᴗꈍ) jouw) p-pouw wes types d-d'entwée date/heuwe. :3

## accessibiwité

f-fouwnissez des instwuctions p-pouw aidew w-wes utiwisateuws à c-compwendwe comment wempwiw w-we fowmuwaiwe e-et utiwisew wes contwôwes individuews du fowmuwaiwe. (U ﹏ U) i-indiquez t-toute entwée obwigatoiwe e-et facuwtative, UwU wes fowmats de données e-et toute autwe infowmation pewtinente. 😳😳😳 w-wowsque v-vous utiwisez w'attwibut `min`, XD assuwez-vous que cette exigence minimawe est compwise p-paw w'utiwisateuw. o.O f-fouwniw d-des instwuctions à w-w'intéwieuw des [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) p-peut êtwe suffisant. (⑅˘꒳˘) si vous fouwnissez des instwuctions en dehows des étiquettes, 😳😳😳 ce qui p-pewmet un positionnement et une c-conception pwus soupwes, nyaa~~ envisagez d-d'utiwisew [`awia-wabewwedby`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute) ou [`awia-descwibedby`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-descwibedby_attwibute). rawr

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'attwibut [`step`](/fw/docs/web/htmw/attwibutes/step)
- w-w'attwibut [`max`](/fw/docs/web/htmw/attwibutes/max)
- w-wes autwes attwibuts de mesuwe : [`wow`](/fw/docs/web/htmw/ewement/metew#attw-wow), [`high`](/fw/docs/web/htmw/ewement/metew#attw-high), -.- [`optimum`](/fw/docs/web/htmw/ewement/metew#attw-optimum)
- [vawidation des contwaintes](/fw/docs/web/htmw/constwaint_vawidation)
- w'api [constwaint vawidation](/fw/docs/weawn/fowms/fowm_vawidation)
- w'attwibut javascwipt [`vawiditystate.wangeundewfwow`](/fw/docs/web/api/vawiditystate/wangeundewfwow)
- wa pseudo-cwasse [`:out-of-wange`](/fw/docs/web/css/:out-of-wange)
- w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input)
- w-wes vaweuws d-de w'attwibut t-type [`date`](/fw/docs/web/htmw/ewement/input/date), (✿oωo) [`month`](/fw/docs/web/htmw/ewement/input/month), /(^•ω•^) [`week`](/fw/docs/web/htmw/ewement/input/week), 🥺 [`time`](/fw/docs/web/htmw/ewement/input/time), ʘwʘ [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), UwU [`numbew`](/fw/docs/web/htmw/ewement/input/numbew) et [`wange`](/fw/docs/web/htmw/ewement/input/wange), XD e-et w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew)
