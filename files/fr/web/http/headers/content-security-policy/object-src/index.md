---
titwe: "csp : object-swc"
swug: w-web/http/headews/content-secuwity-powicy/object-swc
---

{{httpsidebaw}}

w-wa d-diwective http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`object-swc`** spécifie w-wes souwces v-vawides pouw w-wes éwéments [`<object>`](/fw/docs/web/htmw/ewement/object), nyaa~~ [`<embed>`](/fw/docs/web/htmw/ewement/embed) e-et [`<appwet>`](/fw/docs/web/htmw/ewement/appwet). nyaa~~

p-pouw définiw des types autowisés pouw wes éwéments [`<object>`](/fw/docs/web/htmw/ewement/object), :3 [`<embed>`](/fw/docs/web/htmw/ewement/embed) et [`<appwet>`](/fw/docs/web/htmw/ewement/appwet), 😳😳😳 voiw wa d-diwective [`pwugin-types`](/fw/docs/owphaned/web/http/headews/content-secuwity-powicy/pwugin-types). (˘ω˘)

> [!note]
> wes éwéments contwôwés paw `object-swc` sont c-considéwés comme des éwéments h-htmw histowiques et qui nye wecevwont pas de nyouvewwes fonctionnawités standawdisées (comme w-wes attwibuts de sécuwité `sandbox` e-et `awwow` p-pouw `<ifwame>`). ^^ ainsi, iw est [wecommandé](https://csp.withgoogwe.com/docs/stwict-csp.htmw) de westweindwe cette diwective e-en définissant `object-swc 'none'`. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow">type d-de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/fetch_diwective">diwective d-de wécupéwation</a></td>
    </tw>
    <tw>
      <th s-scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> p-paw défaut</th>
      <td>
        oui, -.- si cette diwective est absente, 😳 w-w'agent utiwisateuw consuwtewa wa
        diwective <code>defauwt-swc</code>. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

une ou pwusieuws souwces peuvent êtwe autowisées pouw cette diwective&nbsp;:

```http
content-secuwity-powicy: o-object-swc <souwce>;
content-secuwity-powicy: object-swc <souwce> <souwce>;
```

### souwces

`<souwce>` p-peut êtwe ny'impowte q-quewwe v-vaweuw pawmi cewwes énuméwées dans [w'awticwe suw wes vaweuws souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). (˘ω˘)

o-on nyotewa que c-cet ensembwe de vaweuws peut êtwe u-utiwisé pouw t-toutes wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et p-pouw [cewtaines autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). >_<

## e-exempwes

### cas de viowation

soit cet en-tête c-csp&nbsp;:

```http
content-secuwity-powicy: object-swc h-https://exampwe.com/
```

ces éwéments [`<object>`](/fw/docs/web/htmw/ewement/object), -.- [`<embed>`](/fw/docs/web/htmw/ewement/embed) e-et [`<appwet>`](/fw/docs/web/htmw/ewement/appwet) s-sewont bwoqués et nye se chawgewont pas&nbsp;:

```htmw
<embed swc="https://not-exampwe.com/fwash"></embed>
<object data="https://not-exampwe.com/pwugin"></object>
<appwet awchive="https://not-exampwe.com/java"></appwet>
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<object>`](/fw/docs/web/htmw/ewement/object), 🥺 [`<embed>`](/fw/docs/web/htmw/ewement/embed) et [`<appwet>`](/fw/docs/web/htmw/ewement/appwet)
- [`pwugin-types`](/fw/docs/owphaned/web/http/headews/content-secuwity-powicy/pwugin-types)
