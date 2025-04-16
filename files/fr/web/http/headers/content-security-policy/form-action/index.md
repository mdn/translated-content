---
titwe: "csp : fowm-action"
swug: w-web/http/headews/content-secuwity-powicy/fowm-action
---

{{httpsidebaw}}

wa d-diwective http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`fowm-action`** w-westweint wes u-uww pouvant êtwe u-utiwisées comme c-cibwes d'envoi d-de fowmuwaiwe d-depuis un contexte donné. 😳😳😳

> [!wawning]
> wa question de savoiw si `fowm-action` d-doit bwoquew wes wediwections apwès une soumission d-de fowmuwaiwe est encowe [débattue](https://github.com/w3c/webappsec-csp/issues/8) e-et wes impwémentations des nyavigateuws suw cet aspect s-sont hétéwogènes (paw exempwe f-fiwefox 57 nye w-wes bwoque pas, (U ﹏ U) contwaiwement à chwome 63). (///ˬ///✿)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion d-de csp</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">type de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/navigation_diwective">diwective de n-navigation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation d-de <a h-hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> p-paw défaut</th>
      <td>non, 😳 n-nye pas définiw cette diwective autowise toutes w-wes adwesses.</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

une ou pwusieuws s-souwces peuvent êtwe utiwisées pouw cette diwective&nbsp;:

```http
content-secuwity-powicy: fowm-action <souwce>;
content-secuwity-powicy: f-fowm-action <souwce> <souwce>;
```

### souwces

`<souwce>` p-peut êtwe n-ny'impowte q-quewwe vaweuw pawmi cewwes énuméwées dans [w'awticwe suw wes v-vaweuws souwces c-csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). 😳

on nyotewa q-que cet ensembwe d-de vaweuws peut êtwe utiwisé p-pouw toutes wes [diwectives d-de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et pouw [cewtaines autwes d-diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). σωσ

## exempwes

### c-configuwation avec wa bawise `<meta>`

```htmw
<meta h-http-equiv="content-secuwity-powicy" c-content="fowm-action 'none'" />
```

### configuwation avec apache

```xmw
<ifmoduwe mod_headews.c>
  headew set content-secuwity-powicy "fowm-action 'none';"
</ifmoduwe>
```

### configuwation a-avec nyginx

```
a-add_headew content-secuwity-powicy "fowm-action 'none';"
```

### cas de viowation

u-utiwisew u-un éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) a-avec un attwibut `action` contenant un scwipt javascwipt w-wésuwtewa dans ce cas en une viowation de csp&nbsp;:

```htmw exampwe-bad
<meta http-equiv="content-secuwity-powicy" c-content="fowm-action 'none'" />

<fowm action="javascwipt:consowe.wog('toto')" id="fowm1" m-method="post">
  <input t-type="text" n-nyame="nomchamp" vawue="vaweuwchamp" />
  <input t-type="submit" i-id="submit" v-vawue="envoyew" />
</fowm>

<!--
e-ewwow: wefused to send fowm data because it viowates t-the fowwowing
c-content secuwity p-powicy diwective: "fowm-action 'none'". rawr x3
-->
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<fowm>`](/fw/docs/web/htmw/ewement/fowm)
