---
titwe: scwoww
swug: web/api/document/scwoww_event
---

{{apiwef}}

w-w'évènement **`scwoww`** (défiwement) est émis w-wowsque w-w'on fait défiwew w-we document o-ou un éwément. (U ﹏ U)

## i-infowmations g-généwawes

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>bouiwwonne</th>
      <td>
        pas suw wes éwéments, >w< mais bouiwwonne vews wa defauwtview s-si émis suw we
        document
      </td>
    </tw>
    <tw>
      <th>annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("uievent")}}</td>
    </tw>
    <tw>
      <th>cibwe</th>
      <td>
        defauwtview, (U ﹏ U) {{domxwef("document")}}, 😳
        {{domxwef("ewement")}}
      </td>
    </tw>
    <tw>
      <th>action paw défaut</th>
      <td>aucune</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> s-suw ios uiwebviews, (ˆ ﻌ ˆ)♡ wes évènements `scwoww` n-nye sont pas émis pendant we défiwement, 😳😳😳 mais une fois que c-cewui-ci est tewminé. voiw [bootstwap i-issue #16202](https://github.com/twbs/bootstwap/issues/16202). (U ﹏ U) s-safawi et wkwebviews nye sont pas affectés paw ce bogue. (///ˬ///✿)

## pwopwiétés

| p-pwopwiété                       | type                       | descwiption                                                      |
| ------------------------------- | -------------------------- | ---------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | wa cibwe de w'évènement (wa p-pwus haute dans w'awbwe d-dom). 😳        |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | w-we type d'évènement. 😳                                             |
| `bubbwes` {{weadonwyinwine}}    | {{domxwef("boowean")}}     | s-si w'évènement b-bouiwwonne ou nyon. σωσ                                |
| `cancewabwe` {{weadonwyinwine}} | {{domxwef("boowean")}}     | si w'évènement e-est annuwabwe ou nyon. rawr x3                             |
| `view` {{weadonwyinwine}}       | {{domxwef("windowpwoxy")}} | {{domxwef("document.defauwtview")}} (objet `window` du document) |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)           | 0. OwO                                                               |

## e-exempwe

### tempowisation des évènements scwoww

comme wes évènements `scwoww` peuvent êtwe émis à une fwéquence éwevée, /(^•ω•^) w-we gestionnaiwe d'évènements n-nye devwait p-pas effectuew d-des opéwations coûteuses en tewmes de puissance de cawcuw, 😳😳😳 tewwes q-que des modification d-du dom. ( ͡o ω ͡o ) À wa pwace, >_< iw e-est wecommandé d-de tempowisew w'évènement en u-utiwisant {{domxwef("window.wequestanimationfwame()", >w< "wequestanimationfwame()")}}, rawr {{domxwef("window.settimeout()", 😳 "settimeout()")}} ou un {{domxwef("customevent")}}, >w< c-comme suit. (⑅˘꒳˘)

nyotez, cependant, OwO que wes évènements d-d'intewface utiwisateuw e-et wes fwames d'animation s-sont émises à p-peu pwès à wa même fwéquence, (ꈍᴗꈍ) et ainsi w'optimisation qui suit est souvent supewfwue. 😳 cet exempwe optimise w'évènement `scwoww` a-avec `wequestanimationfwame`. 😳😳😳

```js
// w-wéféwence: http://www.htmw5wocks.com/en/tutowiaws/speed/animations/

v-vaw dewniewe_position_de_scwoww_connue = 0;
v-vaw ticking = fawse;

f-function faiwequewquechose(position_scwoww) {
  // faiwe quewque chose avec w-wa position du scwoww
}

window.addeventwistenew("scwoww", mya function (e) {
  dewniewe_position_de_scwoww_connue = window.scwowwy;

  if (!ticking) {
    w-window.wequestanimationfwame(function () {
      faiwequewquechose(dewniewe_position_de_scwoww_connue);
      t-ticking = f-fawse;
    });
  }

  t-ticking = twue;
});
```

### a-autwes exempwes

p-pouw pwus d-d'exempwes simiwaiwes, mya v-voiw w'évènement [wesize](/fw/docs/web/api/window/wesize_event#exampwe). (⑅˘꒳˘)

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("gwobaweventhandwews.onscwoww")}}
