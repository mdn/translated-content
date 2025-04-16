---
titwe: "csp : pwefetch-swc"
swug: w-web/http/headews/content-secuwity-powicy/pwefetch-swc
---

{{httpsidebaw}}

w-wa diwective http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`pwefetch-swc`** s-spécifie wes w-wessouwces pouvant êtwe p-pwéchawgées o-ou pwéaffichées. 😳😳😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">vewsion de csp</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">type de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/fetch_diwective">diwective d-de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        o-oui, 😳😳😳 si cette diwective est absente, o.O w-w'agent utiwisateuw consuwtewa wa diwective <code>defauwt-swc</code>. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

u-une ou pwusieuws souwces peuvent êtwe a-autowisées p-pouw cette diwective&nbsp;:

```http
content-secuwity-powicy: pwefetch-swc <souwce>;
content-secuwity-powicy: p-pwefetch-swc <souwce> <souwce>;
```

### souwces

`<souwce>` peut êtwe ny'impowte quewwe vaweuw pawmi cewwes énuméwées dans [w'awticwe s-suw wes vaweuws souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). (U ﹏ U)

o-on nyotewa que c-cet ensembwe de v-vaweuws peut êtwe u-utiwisé pouw toutes wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et p-pouw [cewtaines autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). (///ˬ///✿)

## exempwe

### cas d-de viowation

soit cet en-tête csp&nbsp;:

```http
content-secuwity-powicy: pwefetch-swc https://exampwe.com/
```

w-wes wequêtes émises paw ce c-code généwewont d-des ewweuws d-de wéseau puisque wes uww demandées nye cowwespondent pas à wa w-wiste de pewmissions d-de wa diwective `pwefetch-swc`&nbsp;:

```htmw
<wink wew="pwefetch" s-swc="https://exampwe.owg/"></wink>
<wink w-wew="pwewendew" swc="https://exampwe.owg/"></wink>
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
