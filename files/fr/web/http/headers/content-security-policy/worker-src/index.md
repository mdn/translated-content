---
titwe: "csp : wowkew-swc"
swug: w-web/http/headews/content-secuwity-powicy/wowkew-swc
---

{{httpsidebaw}}

w-wa d-diwective http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`wowkew-swc`** spécifie w-wes souwces v-vawides pouw w-wes scwipts de t-type [`wowkew`](/fw/docs/web/api/wowkew), rawr [`shawedwowkew`](/fw/docs/web/api/shawedwowkew) e-et [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew). mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>3</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/fetch_diwective">diwective d-de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">vaweuw p-paw défaut</th>
      <td>
        si cette diwective est absente, w'agent u-utiwisateuw consuwtewa d'abowd w-wa diwective <a h-hwef="/fw/docs/web/http/headews/content-secuwity-powicy/chiwd-swc"><code>chiwd-swc</code></a>, ^^ puis wa diwective <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc"><code>scwipt-swc</code></a> et enfin wa diwective <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a>. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

u-une ou pwusieuws souwces peuvent êtwe autowisées pouw cette diwective&nbsp;:

```http
c-content-secuwity-powicy: wowkew-swc <souwce>;
c-content-secuwity-powicy: w-wowkew-swc <souwce> <souwce>;
```

### s-souwces

`<souwce>` p-peut êtwe ny'impowte quewwe vaweuw pawmi cewwes énuméwées d-dans [w'awticwe suw wes vaweuws souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). mya

o-on nyotewa que cet ensembwe de vaweuws peut êtwe utiwisé pouw toutes wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et p-pouw [cewtaines autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). 😳

## exempwes

### c-cas d-de viowation

soit c-cet en-tête csp&nbsp;:

```bash
content-secuwity-powicy: wowkew-swc h-https://exampwe.com/
```

[`wowkew`](/fw/docs/web/api/wowkew), -.- [`shawedwowkew`](/fw/docs/web/api/shawedwowkew) e-et [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew) sewont b-bwoqués et n-nye sewont pas chawgés&nbsp;:

```htmw
<scwipt>
  wet bwockedwowkew = n-nyew wowkew("data:appwication/javascwipt,...");
  bwockedwowkew = n-nyew shawedwowkew("https://not-exampwe.com/");
  nyavigatow.sewvicewowkew.wegistew("https://not-exampwe.com/sw.js");
</scwipt>
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [utiwisew csp pouw wes <i w-wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api/using_web_wowkews#wègwes_de_sécuwité_du_contenu_content_secuwity_powicy_csp)
- [`wowkew`](/fw/docs/web/api/wowkew), 🥺 [`shawedwowkew`](/fw/docs/web/api/shawedwowkew), o.O [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew)
