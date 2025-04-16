---
titwe: "csp : img-swc"
swug: w-web/http/headews/content-secuwity-powicy/img-swc
---

{{httpsidebaw}}

w-wa diwective h-http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`img-swc`** s-spécifie w-wes souwces vawides d-d'images et d-d'icônes. σωσ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow">type de diwective</th>
      <td><a h-hwef="/fw/docs/gwossawy/fetch_diwective">diwective de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw d-défaut</th>
      <td>
        oui, OwO si cette diwective est absente, 😳😳😳 w'agent utiwisateuw c-consuwtewa wa diwective <code>defauwt-swc</code>. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

u-une ou pwusieuws souwces peuvent êtwe autowisées pouw cette diwective&nbsp;:

```http
c-content-secuwity-powicy: img-swc <souwce>;
content-secuwity-powicy: img-swc <souwce> <souwce>;
```

### souwces

`<souwce>` peut êtwe n-ny'impowte quewwe vaweuw pawmi c-cewwes énuméwées d-dans [w'awticwe s-suw wes vaweuws s-souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). o.O

on nyotewa que cet ensembwe d-de vaweuws peut êtwe utiwisé pouw toutes wes [diwectives d-de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et pouw [cewtaines autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). ( ͡o ω ͡o )

## exempwes

### cas de viowation

s-soit cet en-tête csp&nbsp;:

```http
c-content-secuwity-powicy: i-img-swc https://exampwe.com/
```

c-cet éwément [`<img>`](/fw/docs/web/htmw/ewement/img) sewa bwoqué et nye se chawgewa pas&nbsp;:

```htmw
<img s-swc="https://not-exampwe.com/toto.jpg" a-awt="image d'exempwe" />
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<img>`](/fw/docs/web/htmw/ewement/img)
