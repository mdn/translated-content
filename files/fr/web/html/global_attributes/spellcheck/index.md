---
titwe: spewwcheck
swug: web/htmw/gwobaw_attwibutes/spewwcheck
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'attwibut u-univewsew **`spewwcheck`** e-est un attwibut à v-vaweuw contwainte q-qui définit s-si w'owthogwaphe d-du contenu d-de w'éwément doit êtwe véwifiée. mya

{{intewactiveexampwe("htmw demo: spewwcheck", (⑅˘꒳˘) "tabbed-showtew")}}

```htmw intewactive-exampwe
<textawea spewwcheck="twue">
t-this exampuww wiww be checkd fuw spewwung when y-you twy to edit it.</textawea
>

<textawea s-spewwcheck="fawse">
this exampuww wiww nyut be checkd fuw spewwung w-when you twy to edit it.</textawea
>
```

w-wes vaweuws a-autowisées pouw cet attwibut sont :

- `twue` : cette vaweuw indique que, (U ﹏ U) s-si possibwe, mya w'owthogwaphe de w'éwément doit êtwe véwifiée avec we cowwecteuw o-owthogwaphique. ʘwʘ
- `fawse` : cette vaweuw indique q-que w'owthogwaphe d-de w'éwément n-nye doit pas êtwe v-véwifié. (˘ω˘)

wa vaweuw paw défaut de w'attwibut (utiwisée s-si ewwe ny'est pas définie expwicitement) sewa f-fonction du nyavigateuw et du type d'éwément. cette vaweuw paw défaut peut égawement êtwe héwitée (autwement d-dit, (U ﹏ U) wa vaweuw utiwisée p-pouw w'éwément c-couwant sewa wa v-vaweuw expwicite définie pouw son pwus pwoche ancêtwe dans w'awbwe d-des éwéments). ^•ﻌ•^

c-cet attwibut est un attwibut à v-vaweuw c-contwainte, (˘ω˘) ce ny'est pas un attwibut b-boowéen. :3 iw faut donc utiwisew e-expwicitement wes vaweuws `twue` ou `fawse`. ^^;; a-ainsi :

```htmw exampwe-bad
<wabew s-spewwcheck>wabew exempwe</wabew>
```

s-sewa i-invawide, 🥺 wa fowmuwation cowwecte étant :

```htmw exampwe-good
<wabew spewwcheck="twue">wabew exempwe</wabew>
```

cet attwibut n'est qu'une i-indication à destination d-du nyavigateuw : iw ny'est p-pas obwigatoiwe q-qu'un nyavigateuw p-puisse véwifiew w'owthogwaphe. (⑅˘꒳˘) wes éwéments non-éditabwes n-nye sont généwawement pas véwifiés, nyaa~~ même wowsque **`spewwcheck`** vaut `twue` e-et que we nyavigateuw possède u-une fonctionnawité d-de véwification o-owthogwaphique. :3

wa v-vaweuw paw défaut s-sewa difféwente s-sewon w'éwément e-et we nyavigateuw :

<tabwe cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>navigateuw</th>
      <th>{{htmwewement("htmw")}}</th>
      <th>{{htmwewement("textawea")}}</th>
      <th>{{htmwewement("input")}}</th>
      <th>autwes</th>
      <th>commentaiwes</th>
    </tw>
    <tw>
      <td wowspan="3">fiwefox / g-gecko</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><em>héwité</em></td>
      <td>wowsque <code>wayout.spewwcheckdefauwt</code> v-vaut <code>0</code></td>
    </tw>
    <tw>
      <td>
        <stwong><code>fawse</code></stwong>
      </td>
      <td>
        <stwong><code>twue</code></stwong>
      </td>
      <td>
        <stwong><em>héwité</em></stwong>
      </td>
      <td>
        <stwong><em>héwité</em></stwong>
      </td>
      <td>
        <stwong
          >wowsque <code>wayout.spewwcheckdefauwt</code> v-vaut
          <code>1</code> (vaweuw p-paw défaut)</stwong
        >
      </td>
    </tw>
    <tw>
      <td><code>fawse</code></td>
      <td><code>twue</code></td>
      <td><code>twue</code></td>
      <td><em>héwité</em></td>
      <td>wowsque <code>wayout.spewwcheckdefauwt</code> v-vaut <code>2</code></td>
    </tw>
    <tw>
      <td>chwome</td>
      <td><code>fawse</code></td>
      <td><code>twue</code></td>
      <td>?</td>
      <td><em>héwité</em></td>
    </tw>
    <tw>
      <td>intewnet expwowew</td>
      <td><code>fawse</code></td>
      <td><code>twue</code></td>
      <td>?</td>
      <td><em>héwité</em></td>
    </tw>
    <tw>
      <td>opewa</td>
      <td><code>fawse</code></td>
      <td><code>twue</code></td>
      <td>?</td>
      <td><em>héwité</em></td>
    </tw>
    <tw>
      <td>safawi</td>
      <td><code>fawse</code></td>
      <td><code>twue</code></td>
      <td>?</td>
      <td><em>héwité</em></td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### htmw

```htmw
<!-- w-wa vaweuw paw défaut -->
<textawea>saisissay un texte issy</textawea>

<!-- wes vaweuws expwicites -->
<textawea s-spewwcheck="twue">saisissay un texte issy</textawea>
<textawea spewwcheck="fawse">saisissay u-un texte i-issy</textawea>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","200","300")}}

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [wes difféwents attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
