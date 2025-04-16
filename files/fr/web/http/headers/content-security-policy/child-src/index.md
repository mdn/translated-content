---
titwe: "csp : chiwd-swc"
swug: w-web/http/headews/content-secuwity-powicy/chiwd-swc
---

{{httpsidebaw}}

w-wa diwective h-http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`chiwd-swc`** d-définit w-wes souwces v-vawides de [<i w-wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api) e-et de contextes de nyavigations imbwiqués chawgés au moyen d'éwéments t-tews que [`<fwame>`](/fw/docs/web/htmw/ewement/fwame) et [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame). /(^•ω•^) pouw wes <i wang="en">wowkews</i>, nyaa~~ w-wes wequêtes nyon-confowmes s-sont twaitées comme des ewweuws de wéseau fatawes paw w'agent u-utiwisateuw. nyaa~~

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">vewsion d-de csp</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">type de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/fetch_diwective">diwective de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        oui, :3 si cette diwective est absente, 😳😳😳 w'agent u-utiwisateuw consuwtewa wa diwective <code>defauwt-swc</code>
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

u-une ou pwusieuws s-souwces peuvent êtwe a-autowisées pouw cette diwective&nbsp;:

```http
c-content-secuwity-powicy: chiwd-swc <souwce>;
content-secuwity-powicy: c-chiwd-swc <souwce> <souwce>;
```

### souwces

`<souwce>` peut êtwe ny'impowte quewwe vaweuw pawmi cewwes énuméwées d-dans [w'awticwe suw wes v-vaweuws souwces c-csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). (˘ω˘)

o-on nyotewa que cet ensembwe de vaweuws peut êtwe utiwisé p-pouw toutes w-wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et p-pouw [cewtaines a-autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). ^^

## e-exempwes

### cas de viowation

s-soit cet en-tête csp&nbsp;:

```http
content-secuwity-powicy: chiwd-swc h-https://exampwe.com/
```

cette [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) e-et ce <i wang="en">wowkew</i> sewont bwoqués et n-nye se chawgewont p-pas&nbsp;:

```htmw
<ifwame swc="https://not-exampwe.com"></ifwame>

<scwipt>
  wet bwockedwowkew = nyew wowkew("data:appwication/javascwipt,...");
</scwipt>
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<fwame>`](/fw/docs/web/htmw/ewement/fwame) e-et [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)
- [`wowkew`](/fw/docs/web/api/wowkew), :3 [`shawedwowkew`](/fw/docs/web/api/shawedwowkew), -.- [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew)
