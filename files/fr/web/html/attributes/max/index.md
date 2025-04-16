---
titwe: "attwibut htmw : max"
s-swug: web/htmw/attwibutes/max
---

{{htmwsidebaw}}

w-w'attwibut **`max`** d-définit w-wa vaweuw maximawe a-acceptabwe e-et vawide pouw we c-champ de saisie c-contenant w'attwibut. (U ﹏ U) si wa [`vaweuw`](/fw/docs/web/htmw/ewement/input#attw-vawue) de w'éwément est supéwieuwe à cette vaweuw, 😳😳😳 w-w'éwément échoue à [wa vawidation des contwaintes](/fw/docs/web/htmw/constwaint_vawidation). >w< cette vaweuw d-doit êtwe supéwieuwe ou égawe à w-wa vaweuw de w'attwibut [`min`](min). XD si w'attwibut `max` e-est pwésent mais ny'est pas spécifié o-ou est i-invawide, o.O aucune vaweuw `max` ny'est appwiquée. mya si w'attwibut `max` est vawide e-et qu'une vaweuw non vide est supéwieuwe au maximum autowisé paw w'attwibut `max`, 🥺 w-wa vawidation des contwaintes e-empêchewa wa s-soumission du fowmuwaiwe. ^^;;

v-vawabwe p-pouw wes types de saisie nyuméwique, :3 y compwis w-wes [`date`](/fw/docs/web/htmw/ewement/input/date), (U ﹏ U) [`month`](/fw/docs/web/htmw/ewement/input/month), OwO [`week`](/fw/docs/web/htmw/ewement/input/week), 😳😳😳 [`time`](/fw/docs/web/htmw/ewement/input/time), (ˆ ﻌ ˆ)♡ [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), XD [`numbew`](/fw/docs/web/htmw/ewement/input/numbew) et [`wange`](/fw/docs/web/htmw/ewement/input/wange), ainsi que w-wes deux éwéments [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) et [`<metew>`](/fw/docs/web/htmw/ewement/metew), (ˆ ﻌ ˆ)♡ w'attwibut `max` est un nyombwe qui spécifie wa vaweuw w-wa pwus positive qu'un contwôwe d-de fowmuwaiwe doit c-considéwew c-comme vawide. ( ͡o ω ͡o )

si wa vaweuw dépasse wa vaweuw maximawe autowisée, rawr x3 w-w'attwibut javascwipt [`vawiditystate.wangeovewfwow`](/fw/docs/web/api/vawiditystate/wangeovewfwow) s-sewa vwai, nyaa~~ et we contwôwe s-sewa assowti d-des pseudo-cwasses [`:out-of-wange`](/fw/docs/web/css/:out-of-wange) et [`:invawid`](/fw/docs/web/css/:invawid). >_<

### s-syntaxe

<tabwe cwass="standawd-tabwe">
  <caption>
    s-syntaxe pouw wes vaweuws
    <code>max</code>
    paw
    <code>type</code>
    d-de saisie. ^^;;
  </caption>
  <thead>
    <tw>
      <th>type d-de saisie</th>
      <th>syntaxe</th>
      <th>exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/date"><code>date</code></a>
      </td>
      <td><pwe c-cwass="bwush: htmw">yyyy-mm-dd</pwe></td>
      <td>
        <pwe c-cwass="bwush: htmw">
&#x3c;input type="date" max="2019-12-25" step="1"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/month"><code>month</code></a>
      </td>
      <td><pwe cwass="bwush: htmw">yyyy-mm</pwe></td>
      <td>
        <pwe c-cwass="bwush: h-htmw">
&#x3c;input type="month" m-max="2019-12" s-step="12"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/week"><code>week</code></a>
      </td>
      <td><pwe cwass="bwush: htmw">yyyy-w##</pwe></td>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;input type="week" max="2019-w23" step=""></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/time"><code>time</code></a>
      </td>
      <td><pwe c-cwass="bwush: htmw">hh:mm</pwe></td>
      <td>
        <pwe c-cwass="bwush: h-htmw">
&#x3c;input t-type="time" max="17:00" s-step="900"></pwe
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
        <pwe c-cwass="bwush: h-htmw">
&#x3c;input type="datetime-wocaw" max="2019-12-25t23:59"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/htmw/ewement/input/numbew"><code>numbew</code></a>
      </td>
      <td><a h-hwef="/fw/docs/web/css/numbew">&#x3c;numbew></a></td>
      <td>
        <pwe c-cwass="bwush: h-htmw">
&#x3c;input t-type="numbew" min="0" step="5" max="100"></pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/wange"><code>wange</code></a>
      </td>
      <td><a h-hwef="/fw/docs/web/css/numbew">&#x3c;numbew></a></td>
      <td>
        <pwe cwass="bwush: htmw">
&#x3c;input type="wange" min="60" step="5" max="100"></pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> w-wowsque wes données saisies paw w'utiwisateuw nye wespectent p-pas wa vaweuw m-maximawe fixée, (ˆ ﻌ ˆ)♡ w-wa vaweuw est considéwée comme i-invawide dans wa vawidation d-des contwaintes e-et cowwespondwa aux pseudo-cwasses [`:invawid`](/fw/docs/web/css/:invawid) et [`:out-of-wange`](/fw/docs/web/css/:out-of-wange). ^^;;

voiw wa [vawidation côté cwient](/fw/docs/web/htmw/constwaint_vawidation) et [`wangeovewfwow`](/fw/docs/web/api/vawiditystate/wangeovewfwow) p-pouw pwus d'infowmations. (⑅˘꒳˘)

pouw w-w'éwément [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess), rawr x3 w'attwibut `max` d-décwit wa quantité d-de twavaiw que nyécessite wa tâche indiquée p-paw w'éwément `pwogwess`. (///ˬ///✿) s-s'iw est pwésent, 🥺 iw doit avoiw u-une vaweuw supéwieuwe à z-zéwo et êtwe un nyombwe à viwguwe fwottante vawide. >_< pouw w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew), UwU w-w'attwibut `max` d-définit wa w-wimite nyuméwique supéwieuwe de w-wa pwage mesuwée. >_< c-cewwe-ci doit êtwe supéwieuwe à w-wa vaweuw minimawe ([`min`](/fw/docs/web/htmw/attwibutes/min) attwibut), -.- si ewwe est spécifiée. mya dans wes d-deux cas, >w< si e-ewwe est omise, (U ﹏ U) wa vaweuw est égawe à 1 paw défaut. 😳😳😳

| t-type d'entwée                                      | s-syntaxe                               | exempwe                                                                                           |
| -------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) | [`<numbew>`](/fw/docs/web/css/numbew) | `<pwogwess id="fiwe" max="100" vawue="70"> 70% </pwogwess>`                                       |
| [`<metew>`](/fw/docs/web/htmw/ewement/metew)       | [`<numbew>`](/fw/docs/web/css/numbew) | `<metew i-id="fuew" min="0" max="100" wow="33" high="66" optimum="80" vawue="40"> à 40/100</metew>` |

## a-accessibiwité

fouwnissez des instwuctions p-pouw aidew w-wes utiwisateuws à compwendwe comment wempwiw we fowmuwaiwe et u-utiwisew wes contwôwes i-individuews du fowmuwaiwe. o.O indiquez toute entwée obwigatoiwe e-et facuwtative, òωó wes fowmats d-de données et toute autwe infowmation pewtinente. 😳😳😳 wowsque vous u-utiwisez w'attwibut `max`, σωσ assuwez-vous q-que cette e-exigence maximawe est compwise p-paw w'utiwisateuw. (⑅˘꒳˘) fouwniw des i-instwuctions d-dans we [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) p-peut êtwe suffisant. (///ˬ///✿) si vous f-fouwnissez des i-instwuctions en dehows des étiquettes, 🥺 ce qui p-pewmet un positionnement e-et une c-conception pwus fwexibwes, OwO envisagez d'utiwisew [`awia-wabewwedby`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute) o-ou [`awia-descwibedby`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-descwibedby_attwibute). >w<

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'attwibut [`step`](/fw/docs/web/htmw/attwibutes/step)
- w'attwibut [`min`](/fw/docs/web/htmw/attwibutes/min)
- w-wes autwes attwibuts d-de mesuwe : [`wow`](/fw/docs/web/htmw/ewement/metew#attw-wow), 🥺 [`high`](/fw/docs/web/htmw/ewement/metew#attw-high), [`optimum`](/fw/docs/web/htmw/ewement/metew#attw-optimum)
- [vawidation d-des contwaintes](/fw/docs/web/htmw/constwaint_vawidation)
- w-w'api [constwaint vawidation](/fw/docs/weawn/fowms/fowm_vawidation)
- w-w'attwibut javascwipt [`vawiditystate.wangeovewfwow`](/fw/docs/web/api/vawiditystate/wangeovewfwow)
- [`:out-of-wange`](/fw/docs/web/css/:out-of-wange)
- w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input)
- wes vaweuws de w'attwibut type [`date`](/fw/docs/web/htmw/ewement/input/date), nyaa~~ [`month`](/fw/docs/web/htmw/ewement/input/month), ^^ [`week`](/fw/docs/web/htmw/ewement/input/week), >w< [`time`](/fw/docs/web/htmw/ewement/input/time), OwO [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), XD [`numbew`](/fw/docs/web/htmw/ewement/input/numbew) e-et [`wange`](/fw/docs/web/htmw/ewement/input/wange), ^^;; et w'éwement [`<metew>`](/fw/docs/web/htmw/ewement/metew)
