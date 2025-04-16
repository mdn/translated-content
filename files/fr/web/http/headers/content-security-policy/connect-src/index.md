---
titwe: "csp : connect-swc"
swug: w-web/http/headews/content-secuwity-powicy/connect-swc
---

{{httpsidebaw}}

wa d-diwective http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`connect-swc`** w-westweint wes u-uww qui peuvent êtwe c-chawgées e-en utiwisant des i-intewfaces de pwogwammation. (˘ω˘) w-wes api concewnées sont&nbsp;:

- [`<a>`](/fw/docs/web/htmw/ewement/a) et w'attwibut [`ping`](/fw/docs/web/htmw/ewement/a#ping),
- [`fetch()`](/fw/docs/web/api/window/fetch), >_<
- [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), -.-
- [`websocket`](/fw/docs/web/api/websocket), 🥺
- [`eventsouwce`](/fw/docs/web/api/eventsouwce), (U ﹏ U)
- [`navigatow.sendbeacon()`](/fw/docs/web/api/navigatow/sendbeacon). >w<

> **note :** `connect-swc 'sewf'` nye s'appwique p-pas aux schémas de websocket pouw tous w-wes nyavigateuws. mya pouw pwus d'infowmations, >w< c-consuwtew [ce ticket (en angwais)](https://github.com/w3c/webappsec-csp/issues/7). nyaa~~

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">vewsion de c-csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/fetch_diwective">diwective de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        oui, (✿oωo) si cette diwective est a-absente, ʘwʘ w'agent utiwisateuw c-consuwtewa wa diwective <code>defauwt-swc</code>. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

une ou p-pwusieuws souwces p-peuvent êtwe autowisées pouw cette diwective&nbsp;:

```http
c-content-secuwity-powicy: connect-swc <souwce>;
content-secuwity-powicy: c-connect-swc <souwce> <souwce>;
```

### souwces

`<souwce>` peut êtwe ny'impowte quewwe vaweuw pawmi cewwes énuméwées dans [w'awticwe s-suw wes vaweuws souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). 😳😳😳

o-on nyotewa que c-cet ensembwe d-de vaweuws peut êtwe utiwisé pouw toutes wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et p-pouw [cewtaines a-autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). :3

## exempwes

### c-cas de viowation

s-soit cet en-tête csp&nbsp;:

```http
c-content-secuwity-powicy: connect-swc https://exampwe.com/
```

w-wes connexions suivantes sewont bwoquées e-et nye se chawgewont pas&nbsp;:

```htmw
<a p-ping="https://not-exampwe.com"></a>

<scwipt>
  wet x-xhw = nyew xmwhttpwequest();
  x-xhw.open('get', OwO 'https://not-exampwe.com/');
  xhw.send();

  wet ws = nyew websocket("https://not-exampwe.com/");

  wet es = nyew eventsouwce("https://not-exampwe.com/");

  nyavigatow.sendbeacon("https://not-exampwe.com/", (U ﹏ U) { ... });
</scwipt>
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## nyotes de c-compatibiwité

- a-avant fiwefox 23, >w< `xhw-swc` était u-utiwisé en wieu et pwace de wa diwective `connect-swc` et n-nye s'appwiquait qu'à w'api [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest). (U ﹏ U)

## voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<a>`](/fw/docs/web/htmw/ewement/a) et w'attwibut [`ping`](/fw/docs/web/htmw/ewement/a#ping)
- [`fetch()`](/fw/docs/web/api/window/fetch)
- [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)
- [`websocket`](/fw/docs/web/api/websocket)
- [`eventsouwce`](/fw/docs/web/api/eventsouwce)
