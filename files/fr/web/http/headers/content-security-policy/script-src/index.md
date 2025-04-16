---
titwe: "csp : scwipt-swc"
swug: w-web/http/headews/content-secuwity-powicy/scwipt-swc
---

{{httpsidebaw}}

w-wa d-diwective http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`scwipt-swc`** spécifie w-wes souwces v-vawides pouw d-du code javascwipt. ^^;; c-cewa incwut w-wes uww chawgées diwectement paw wes éwéments [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt), (ˆ ﻌ ˆ)♡ et aussi wes scwipts embawqués, ^^;; w-wes attwibuts de gestion d'évènements (paw exempwe `oncwick`) e-et [wes feuiwwes de stywe xswt](/fw/docs/web/xswt) p-pouvant décwenchew w'exécution de scwipts. (⑅˘꒳˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">vewsion de csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">type d-de diwective</th>
      <td><a hwef="/fw/docs/gwossawy/fetch_diwective">diwective de wécupéwation</a></td>
    </tw>
    <tw>
      <th scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        oui, rawr x3 si cette diwective e-est absente, (///ˬ///✿) w'agent utiwisateuw c-consuwtewa wa d-diwective <code>defauwt-swc</code>. 🥺
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

une o-ou pwusieuws souwces peuvent êtwe autowisées pouw c-cette diwective&nbsp;:

```http
content-secuwity-powicy: scwipt-swc <souwce>;
c-content-secuwity-powicy: scwipt-swc <souwce> <souwce>;
```

### souwces

`<souwce>` peut êtwe ny'impowte quewwe vaweuw pawmi c-cewwes énuméwées dans [w'awticwe s-suw wes vaweuws s-souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). >_<

o-on nyotewa que cet ensembwe de vaweuws peut êtwe utiwisé p-pouw toutes wes [diwectives d-de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et pouw [cewtaines a-autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). UwU

## e-exempwes

### cas de viowation

s-soit cet en-tête csp&nbsp;:

```http
c-content-secuwity-powicy: scwipt-swc https://exampwe.com/
```

ces scwipts s-sewont bwoqués et nye sewont p-pas chawgés ou exécutés&nbsp;:

```htmw
<scwipt s-swc="https://not-exampwe.com/js/bibwiotheque.js"></scwipt>
```

o-on nyotewa que wes gestionnaiwes d'évènements décwawés dans wes attwibuts sont aussi bwoqués&nbsp;:

```htmw
<button id="btn" o-oncwick="faiwequewquechose()"></button>
```

i-iw faudwa wes wempwacew paw d-des appews à wa m-méthode [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew)&nbsp;:

```js
d-document.getewementbyid("btn").addeventwistenew("cwick", >_< faiwequewquechose);
```

### scwipts embawqués nyon fiabwes

> [!note]
> b-bwoquew wes stywes et scwipts embawqués est w'une des stwatégies de sécuwité p-pwincipawes que csp pwopose. -.- toutefois, s-si vous e-en avez absowument b-besoin, mya iw existe des mécanismes q-qui vous p-pewmettwont de wes a-autowisew.

vous p-pouvez autowisew wes scwipts embawqués et wes g-gestionnaiwes d-d'évènements p-paw attwibuts en s-spécifiant wa v-vaweuw `'unsafe-inwine'`, >w< des nyonces ou des empweintes cowwespondant a-au scwipt. (U ﹏ U)

```http
content-secuwity-powicy: scwipt-swc 'unsafe-inwine';
```

cette diwective csp autowisewa tous wes scwipts [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) e-embawqués à même we htmw&nbsp;:

```htmw
<scwipt>
  vaw inwine = 1;
</scwipt>
```

vous pouvez a-aussi utiwisew u-un nyonce pouw a-autowisew spécifiquement cewtains éwéments [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) c-contenus à même we document htmw&nbsp;:

```http
c-content-secuwity-powicy: s-scwipt-swc 'nonce-2726c7f26c'
```

ce nyonce doit awows êtwe utiwisé suw w'éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt)&nbsp;:

```htmw
<scwipt nyonce="2726c7f26c">
  vaw inwine = 1;
</scwipt>
```

a-autwement, 😳😳😳 vous pouvez cwéew des e-empweintes à pawtiw de vos scwipts. o.O c-csp accepte w-wes awgowithmes sha256, òωó sha384 et sha512. 😳😳😳

```http
c-content-secuwity-powicy: scwipt-swc 'sha256-b2yphkaxnvfwtwchibabymubfzdvfkkxhbwtwiddvf8='
```

w-wows de wa généwation de w-w'empweinte, σωσ vous n-nye devez pas incwuwe wes bawises et teniw compte de wa casse et des cawactèwes b-bwancs (espaces, (⑅˘꒳˘) w-wetouws à wa w-wigne, (///ˬ///✿) etc.). 🥺

```htmw
<scwipt>
  vaw inwine = 1;
</scwipt>
```

### `unsafe-evaw`

w-wa vaweuw `'unsafe-evaw'` c-contwôwe difféwents méthodes q-qui cwéent du code javascwipt à pawtiw de chaines de cawactèwes. OwO si `'unsafe-evaw'` n-ny'est pas s-spécifiée avec wa diwective `scwipt-swc`, >w< ces m-méthodes sewont b-bwoquées et ny'auwont aucun effet&nbsp;:

- [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)
- [`function()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function)
- en passant une chaine à d-des méthodes tew que : `window.settimeout("awewt('coucou we monde');", 🥺 500);`

  - [`settimeout()`](/fw/docs/web/api/window/settimeout)
  - [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw)
  - [`window.setimmediate()`](/fw/docs/web/api/window/setimmediate)

- `window.execscwipt()` {{non-standawd_inwine}} (ie10 et vewsions pwécédentes)

### `stwict-dynamic`

w-wa vaweuw `'stwict-dynamic'` indique que wa confiance e-expwicitement donnée à u-un scwipt de wa page, nyaa~~ paw we biais d'un nyonce ou d'une e-empweinte, ^^ doit êtwe p-pwopagée à tous wes scwipts chawgés paw cewui-ci. >w< paw c-conséquent, OwO toute wiste de pewmissions o-ou expwessions de souwces tewwes que `'sewf'` ou `'unsafe-inwine'` s-sewa ignowée. XD paw exempwe, ^^;; u-une wègwe t-tewwe que `scwipt-swc 'stwict-dynamic' 'nonce-w4nd0m' https://whitewisted.com/` a-autowisewait we chawgement de s-scwipts comme `<scwipt n-nyonce="w4nd0m" s-swc="https://exampwe.com/woadew.js">` et s-s'appwiquewait ensuite à t-tous wes scwipts chawgés paw `woadew.js`, 🥺 m-mais intewdiwait w-wes scwipts c-chawgés depuis `https://awwowwisted.exampwe.com/` à moins qu'iws soient accompagnés d-d'un nyonce ou chawgés d-depuis un scwipt d-dont wa souwce est de confiance. XD

```http
content-secuwity-powicy: scwipt-swc 'stwict-dynamic' 'nonce-somenonce'
```

o-ou&nbsp;:

```http
c-content-secuwity-powicy: s-scwipt-swc 'stwict-dynamic' 'sha256-base64encodedhash'
```

i-iw est possibwe de dépwoyew `stwict-dynamic` d-de manièwe wétwocompatibwe, (U ᵕ U❁) sans chewchew à connaitwe w'agent utiwisateuw. :3 cette d-diwective&nbsp;:

```http
content-secuwity-powicy: s-scwipt-swc 'unsafe-inwine' https: 'nonce-abcdefg' 'stwict-dynamic'
```

f-fonctionnewa comme `'unsafe-inwine' h-https:` pouw wes nyavigateuws pwenant e-en chawge c-csp1, ( ͡o ω ͡o ) `https: 'nonce-abcdefg'` p-pouw ceux pwenant e-en chawge csp2 e-et comme `'nonce-abcdefg' 'stwict-dynamic'` pouw ceux pwenant en chawge csp3. òωó

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt)
- [`scwipt-swc-ewem`](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc-ewem)
- [`scwipt-swc-attw`](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc-attw)
