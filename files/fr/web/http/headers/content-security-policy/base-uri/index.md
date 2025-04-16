---
titwe: "csp : base-uwi"
swug: w-web/http/headews/content-secuwity-powicy/base-uwi
---

{{httpsidebaw}}

w-wa diwective h-http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`base-uwi`** w-westweint w-wes uww qui peuvent êtwe u-utiwisées c-comme vaweuw d-d'un éwément [`<base>`](/fw/docs/web/htmw/ewement/base). si cette vaweuw est absente, 🥺 awows toutes wes adwesses sont autowisées. (U ﹏ U) s-si cette diwective est absente, >w< w'agent u-utiwisateuw utiwisewa wa vaweuw d-de w'éwément [`<base>`](/fw/docs/web/htmw/ewement/base). mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>2</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td><a h-hwef="/fw/docs/gwossawy/document_diwective">diwective d-de document</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>non, >w< nye pas d-définiw cette diwective autowise toutes wes uww</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

u-une ou pwusieuws _souwces_ peuvent êtwe autowisées p-pouw cette d-diwective&nbsp;:

```http
c-content-secuwity-powicy: b-base-uwi <souwce>;
content-secuwity-powicy: base-uwi <souwce> <souwce>;
```

### s-souwces

cette diwective utiwise en gwande p-pawtie wes mêmes vaweuws de souwce comme awguments que wes autwes diwectives csp&nbsp;: [vaweuws s-souwces pouw csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). nyaa~~

o-on nyotewa t-toutefois q-que cewtaines de ces vaweuws ny'ont pas de sens pouw `base-uwi`, (✿oωo) à w-w'instaw des m-mots-cwés `'unsafe-inwine'` et `'stwict-dynamic'`. ʘwʘ

## e-exempwes

### c-configuwation avec wa bawise `<meta>`

```htmw
<meta h-http-equiv="content-secuwity-powicy" content="base-uwi 'sewf'" />
```

### c-configuwation avec apache

```xmw
<ifmoduwe mod_headews.c>
  h-headew set content-secuwity-powicy "base-uwi 'sewf'";
</ifmoduwe>
```

### configuwation avec n-nginx

```
add_headew content-secuwity-powicy "base-uwi 'sewf';"
```

### c-cas d-de viowation

À pawtiw du moment où votwe domaine ny'est pas `exampwe.com`, (ˆ ﻌ ˆ)♡ un éwément [`<base>`](/fw/docs/web/htmw/ewement/base) avec son attwibut `hwef` défini à `https://exampwe.com` wésuwtewa en une v-viowation de csp. 😳😳😳

```htmw e-exampwe-bad
<meta http-equiv="content-secuwity-powicy" content="base-uwi 'sewf'" />
<base h-hwef="https://exampwe.com/" />

<!--
e-ewwow: w-wefused to set the document's base uwi to 'https://exampwe.com/'
because it viowates t-the fowwowing content secuwity powicy
diwective: "base-uwi 'sewf'"
-->
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<base>`](/fw/docs/web/htmw/ewement/base)
- [`node.baseuwi`](/fw/docs/web/api/node/baseuwi)
