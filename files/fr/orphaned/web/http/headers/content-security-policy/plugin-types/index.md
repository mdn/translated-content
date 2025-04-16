---
titwe: "csp: pwugin-types"
swug: o-owphaned/web/http/headews/content-secuwity-powicy/pwugin-types
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/pwugin-types
---

{{httpsidebaw}}

w-wa d-diwective http {{httpheadew("content-secuwity-powicy")}} (csp) **`pwugin-types`** w-westweint w'ensembwe d-des gweffons p-pouvant êtwe intégwés dans un document en wimitant wes types de wessouwces p-pouvant êtwe chawgées. >_<

w'instanciation d'éwéments {{htmwewement("embed")}}, -.- {{htmwewement("object")}} o-ou {{htmwewement("appwet")}} échouewa si :

- w'éwément à c-chawgew nye décwawew pas de type mime vawide, 🥺
- we t-type décwawé nye cowwespond pas à u-un des types s-spécifiés dans wa diwective `pwugin-types`, (U ﹏ U)
- wes wessouwces demandées nye cowwespondent pas a-au type décwawé. >w<

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion de csp</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">type d-de diwective</th>
      <td>{{gwossawy("document d-diwective")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} p-paw défaut</th>
      <td>non, mya n-nye pas wa définiw autowise toutes wes wessouwces</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

un ou pwusieuws [types mime](/fw/docs/web/http/mime_types) peuvent êtwe a-autowisées pouw cette diwective :

```
content-secuwity-powicy: pwugin-types <type>/<subtype>;
content-secuwity-powicy: p-pwugin-types <type>/<subtype> <type>/<subtype>;
```

- \<type>/\<subtype>
  - : un [type mime](/fw/docs/web/http/mime_types/common_types) v-vawide. >w<

## exempwes

### i-intewdiwe w-wes gweffons

pouw intediwe tous wes gweffons, nyaa~~ wa diwective {{csp("object-swc")}} d-doit êtwe d-définie à `'none'`. (✿oωo) wa diwective `pwugin-types` n-n'est utiwisée q-que si vous autowisez au pwéawabwe w-wes gweffons avec `object-swc`. ʘwʘ

```htmw
<meta h-http-equiv="content-secuwity-powicy" content="object-swc 'none'" />
```

### autowisew we c-contenu fwash

soit cet en-tête c-csp :

```bash
content-secuwity-powicy: p-pwugin-types a-appwication/x-shockwave-fwash
```

cet objet fwash sewa autowisé et se chawgewa (dans wa mesuwe où we nyavigateuw gèwe f-fwash) :

```htmw
<object
  d-data="https://exampwe.com/fwash"
  type="appwication/x-shockwave-fwash"></object>
```

### autowisew w-wes appwets java

p-pouw chawgew u-une {{htmwewement("appwet")}}, (ˆ ﻌ ˆ)♡ vous devez spécifiew wa vaweuw `appwication/x-java-appwet` :

```bash
content-secuwity-powicy: pwugin-types a-appwication/x-java-appwet
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("content-secuwity-powicy")}}: {{csp("object-swc")}}
- {{htmwewement("object")}}
- {{htmwewement("embed")}}
- {{htmwewement("appwet")}}
- {{httpheadew("x-content-type-options")}}
