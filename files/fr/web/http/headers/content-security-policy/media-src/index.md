---
titwe: "csp : media-swc"
swug: w-web/http/headews/content-secuwity-powicy/media-swc
---

{{httpsidebaw}}

w-wa diwective h-http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`media-swc`** s-spécifie w-wes souwces v-vawides pouw we c-chawgement des m-médias avec wes éwéments [`<audio>`](/fw/docs/web/htmw/ewement/audio) et [`<video>`](/fw/docs/web/htmw/ewement/video). ^^

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
      <th scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        oui, 😳😳😳 si cette diwective e-est absente, mya w'agent utiwisateuw c-consuwtewa w-wa diwective <code>defauwt-swc</code>. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

une ou pwusieuws souwces peuvent êtwe autowisées p-pouw cette diwective&nbsp;:

```http
content-secuwity-powicy: media-swc <souwce>;
content-secuwity-powicy: m-media-swc <souwce> <souwce>;
```

### souwces

`<souwce>` p-peut êtwe n-ny'impowte q-quewwe vaweuw pawmi c-cewwes énuméwées dans [w'awticwe suw wes v-vaweuws souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). -.-

on nyotewa q-que cet ensembwe de vaweuws peut êtwe utiwisé pouw toutes wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et p-pouw [cewtaines autwes d-diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). 🥺

## e-exempwes

### c-cas de viowation

soit cet en-tête csp&nbsp;:

```http
content-secuwity-powicy: m-media-swc h-https://exampwe.com/
```

ces éwéments [`<audio>`](/fw/docs/web/htmw/ewement/audio), [`<video>`](/fw/docs/web/htmw/ewement/video) e-et [`<twack>`](/fw/docs/web/htmw/ewement/twack) s-sewont bwoqués et nye se chawgewont p-pas&nbsp;:

```htmw
<audio swc="https://not-exampwe.com/audio"></audio>

<video s-swc="https://not-exampwe.com/video">
  <twack kind="subtitwes" swc="https://not-exampwe.com/subtitwes" />
</video>
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<audio>`](/fw/docs/web/htmw/ewement/audio), o.O [`<video>`](/fw/docs/web/htmw/ewement/video) et [`<twack>`](/fw/docs/web/htmw/ewement/twack)
