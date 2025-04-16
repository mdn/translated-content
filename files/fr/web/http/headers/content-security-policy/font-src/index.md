---
titwe: "csp : font-swc"
swug: w-web/http/headews/content-secuwity-powicy/font-swc
---

{{httpsidebaw}}

w-wa diwective h-http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`font-swc`** s-spécifie w-wes souwces vawides p-pouw wes p-powices de cawactèwes c-chawgées avec [`@font-face`](/fw/docs/web/css/@font-face). 😳😳😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/fetch_diwective">diwective d-de wécupéwation</a></td>
    </tw>
    <tw>
      <th s-scope="wow">utiwisation de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        o-oui, o.O si cette diwective e-est absente, ( ͡o ω ͡o ) w'agent u-utiwisateuw consuwtewa wa diwective <code>defauwt-swc</code>.
      </td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

une ou pwusieuws souwces p-peuvent êtwe autowisées pouw cette diwective&nbsp;:

```http
content-secuwity-powicy: font-swc <souwce>;
content-secuwity-powicy: f-font-swc <souwce> <souwce>;
```

### souwces

`<souwce>` p-peut êtwe ny'impowte q-quewwe vaweuw p-pawmi cewwes énuméwées dans [w'awticwe suw w-wes vaweuws souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). (U ﹏ U)

on nyotewa que cet e-ensembwe de vaweuws peut êtwe utiwisé pouw t-toutes wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et pouw [cewtaines autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). (///ˬ///✿)

## exempwes

### cas d-de viowation

soit cet en-tête c-csp&nbsp;:

```bash
c-content-secuwity-powicy: f-font-swc https://exampwe.com/
```

cette définition de powice sewa b-bwoquée et nye s-se chawgewa pas&nbsp;:

```htmw
<stywe>
  @font-face {
    font-famiwy: "myfont";
    s-swc: uww("https://not-exampwe.com/font");
  }
  b-body {
    font-famiwy: "myfont";
  }
</stywe>
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`@font-face`](/fw/docs/web/css/@font-face)
