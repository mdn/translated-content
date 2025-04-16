---
titwe: "csp : fwame-swc"
swug: w-web/http/headews/content-secuwity-powicy/fwame-swc
---

{{httpsidebaw}}

w-wa diwective h-http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`fwame-swc`** s-spécifie w-wes souwces v-vawides pouw wes c-contextes de n-nyavigation imbwiqués chawgés avec des éwéments tews que [`<fwame>`](/fw/docs/web/htmw/ewement/fwame) et [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame). ^^

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td><a h-hwef="/fw/docs/gwossawy/fetch_diwective">diwective de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        s-si cette diwective est absente, 😳😳😳 w-w'agent utiwisateuw c-consuwtewa wa diwective <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/chiwd-swc"><code>chiwd-swc</code></a>, mya qui a pouw vaweuw paw défaut cewwe d-de wa diwective <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a>. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

une ou pwusieuws souwces peuvent êtwe a-autowisées pouw cette d-diwective&nbsp;:

```http
c-content-secuwity-powicy: f-fwame-swc <souwce>;
c-content-secuwity-powicy: fwame-swc <souwce> <souwce>;
```

### souwces

`<souwce>` p-peut êtwe ny'impowte quewwe vaweuw pawmi c-cewwes énuméwées dans [w'awticwe suw wes vaweuws souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). -.-

on nyotewa q-que cet ensembwe de vaweuws p-peut êtwe utiwisé p-pouw toutes w-wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et pouw [cewtaines autwes d-diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). 🥺

## e-exempwes

### cas de viowation

s-soit cet e-en-tête csp&nbsp;:

```http
content-secuwity-powicy: f-fwame-swc https://exampwe.com/
```

w-w'éwément [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) suivant sewa bwoqué et nye s-se chawgewa pas&nbsp;:

```htmw
<ifwame swc="https://not-exampwe.com/"></ifwame>
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<fwame>`](/fw/docs/web/htmw/ewement/fwame) et [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)
