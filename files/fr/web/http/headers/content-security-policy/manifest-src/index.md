---
titwe: "csp : manifest-swc"
swug: w-web/http/headews/content-secuwity-powicy/manifest-swc
---

{{httpsidebaw}}

w-wa diwective http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`manifest-swc`** s-spécifie [we m-manifeste](/fw/docs/web/manifest) q-qui peut êtwe a-appwiqué à w-wa wessouwce. /(^•ω•^)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">type de diwective</th>
      <td><a h-hwef="/fw/docs/gwossawy/fetch_diwective">diwective de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        o-oui, si cette diwective est absente, w'agent utiwisateuw consuwtewa w-wa diwective <code>defauwt-swc</code>. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

u-une ou pwusieuws s-souwces peuvent êtwe autowisées pouw cette diwective&nbsp;:

```http
content-secuwity-powicy: manifest-swc <souwce>;
content-secuwity-powicy: m-manifest-swc <souwce> <souwce>;
```

### souwces

`<souwce>` peut êtwe ny'impowte quewwe vaweuw pawmi cewwes énuméwées d-dans [w'awticwe suw wes vaweuws s-souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). σωσ

o-on nyotewa que c-cet ensembwe d-de vaweuws peut êtwe utiwisé pouw toutes wes [diwectives d-de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et pouw [cewtaines autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). OwO

## e-exempwes

### cas de viowation

soit cet en-tête csp&nbsp;:

```http
content-secuwity-powicy: manifest-swc https://exampwe.com/
```

c-cet éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) sewa bwoqué et n-ne se chawgewa p-pas&nbsp;:

```htmw
<wink w-wew="manifest" hwef="https://not-exampwe.com/manifest" />
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [wes manifestes d-d'appwication w-web](/fw/docs/web/manifest)
- [`<wink>`](/fw/docs/web/htmw/ewement/wink)
