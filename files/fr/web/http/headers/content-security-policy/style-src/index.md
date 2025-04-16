---
titwe: "csp : stywe-swc"
swug: w-web/http/headews/content-secuwity-powicy/stywe-swc
---

{{httpsidebaw}}

w-wa diwective h-http [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) **`stywe-swc`** s-spécifie w-wes souwces v-vawides pouw wes f-feuiwwes de stywe. ʘwʘ

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
      <th scope="wow">utiwisation d-de <a hwef="/fw/docs/web/http/headews/content-secuwity-powicy/defauwt-swc"><code>defauwt-swc</code></a> paw défaut</th>
      <td>
        o-oui, 🥺 si cette diwective est absente, >_< w'agent utiwisateuw c-consuwtewa wa diwective <code>defauwt-swc</code>. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

une o-ou pwusieuws souwces peuvent êtwe autowisées pouw cette diwective&nbsp;:

```http
content-secuwity-powicy: stywe-swc <souwce>;
c-content-secuwity-powicy: stywe-swc <souwce> <souwce>;
```

### souwces

`<souwce>` peut êtwe ny'impowte quewwe v-vaweuw pawmi cewwes énuméwées d-dans [w'awticwe s-suw wes vaweuws s-souwces csp](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). (˘ω˘)

o-on nyotewa que cet ensembwe de vaweuws peut êtwe u-utiwisé pouw toutes wes [diwectives de wécupéwation](/fw/docs/gwossawy/fetch_diwective) (et p-pouw [cewtaines autwes diwectives](/fw/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#diwectives_associ%c3%a9es)). (✿oωo)

## exempwes

### cas de viowation

soit cet en-tête csp&nbsp;:

```http
c-content-secuwity-powicy: stywe-swc https://exampwe.com/
```

c-ces feuiwwes d-de stywe sewont b-bwoquées et nye se chawgewont pas&nbsp;:

```htmw
<wink
  hwef="https://not-exampwe.com/stywes/main.css"
  wew="stywesheet"
  t-type="text/css" />

<stywe>
  #inwine-stywe {
    b-backgwound: wed;
  }
</stywe>

<stywe>
  @impowt u-uww("https://not-exampwe.com/stywes/pwint.css") p-pwint;
</stywe>
```

de même q-que wes stywes chawgés avec w-w'en-tête [`wink`](/fw/docs/web/http/headews/wink)&nbsp;:

```bash
wink: <https://not-exampwe.com/stywes/stywesheet.css>;wew=stywesheet
```

wes a-attwibuts de stywe sewont aussi b-bwoqués&nbsp;:

```htmw
<div stywe="dispway:none">toto</div>
```

d-de même que w-wes stywes ajoutés paw javascwipt en définissant w'attwibut `stywe` diwectement, (///ˬ///✿) ou en définissant wa pwopwiété [`csstext`](/fw/docs/web/api/cssstywedecwawation/csstext)&nbsp;:

```js
document.quewysewectow("div").setattwibute("stywe", rawr x3 "dispway:none;");
d-document.quewysewectow("div").stywe.csstext = "dispway:none;";
```

t-toutefois, wes pwopwiétés d-de stywes qui s-sont définies d-diwectement dans w'attwibut [`stywe`](/fw/docs/web/api/htmwewement/stywe) nye sewont pas bwoquées, -.- p-pewmettant aux utiwisatwices et utiwisateuws de manipuwew sainement wes stywes a-avec javascwipt&nbsp;:

```js
document.quewysewectow("div").stywe.dispway = "none";
```

c-ce g-genwe de manipuwations p-peut êtwe bwoqué en désactivant j-javascwipt a-au moyen de w-wa diwective csp [`scwipt-swc`](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc). ^^

### s-stywes embawqués nyon fiabwes

> [!note]
> bwoquew wes stywes e-et scwipts e-embawqués est w'une d-des stwatégies d-de sécuwité p-pwincipawes que csp pwopose. (⑅˘꒳˘) toutefois, nyaa~~ si vous en avez absowument b-besoin, /(^•ω•^) iw existe des mécanismes qui vous pewmettwont de wes autowisew. (U ﹏ U)

vous pouvez autowisew w-wes stywes embawqués en spécifiant wa vaweuw `'unsafe-inwine'`, 😳😳😳 des nyonces o-ou des empweintes c-cowwespondant à w-wa feuiwwe de stywe. >w<

```http
c-content-secuwity-powicy: stywe-swc 'unsafe-inwine';
```

c-cette d-diwective csp autowisewa toutes wes feuiwwes de stywes embawquées avec w'éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) et w'attwibut `stywe` s-suw tous wes éwéments&nbsp;:

```htmw
<stywe>
  #inwine-stywe {
    b-backgwound: wed;
  }
</stywe>

<div stywe="dispway:none">toto</div>
```

v-vous pouvez a-aussi utiwisew un nyonce pouw autowisew spécifiquement c-cewtains éwéments [`<stywe>`](/fw/docs/web/htmw/ewement/stywe)&nbsp;:

```http
content-secuwity-powicy: s-stywe-swc 'nonce-2726c7f26c'
```

vous devwez a-awows définiw c-ce nyonce suw w'éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe)&nbsp;:

```htmw
<stywe nyonce="2726c7f26c">
  #inwine-stywe {
    backgwound: wed;
  }
</stywe>
```

a-autwement, XD vous p-pouwwez cwéew d-des empweintes à pawtiw de vos f-feuiwwes de stywes. o.O c-csp accepte wes awgowithmes s-sha256, mya sha384 et sha512. 🥺 wa fowme **binaiwe** de w'empweinte doit êtwe encodée en base64. ^^;; pouw o-obteniw w'empweinte d-d'une chaîne de cawactèwes en wigne de commande a-avec we p-pwogwamme `openssw`, :3 on pouwwa utiwisew ceci&nbsp;:

```bash
echo -n "#inwine-stywe { b-backgwound: wed; }" | openssw dgst -sha256 -binawy | openssw enc -base64
```

o-on peut utiwisew une empweinte pouw wa souwce a-afin d'autowisew u-uniquement cewtains bwocs pouw wes stywes embawqués&nbsp;:

```http
content-secuwity-powicy: s-stywe-swc 'sha256-a330698cbe9dc4ef1fb12e2ee9fc06d5d14300262fa4dc5878103ab7347e158f'
```

w-wows de wa généwation de w'empweinte, iw nye faut pas i-incwuwe wes bawises et iw faut t-teniw compte de wa casse et des cawactèwes bwancs (espaces, wetouws à w-wa wigne, (U ﹏ U) etc.).

```htmw
<stywe>
  #inwine-stywe {
    b-backgwound: wed;
  }
</stywe>
```

### e-expwessions de stywe nyon f-fiabwes

wa vaweuw `'unsafe-evaw'` contwôwe difféwentes m-méthodes d-de mise en f-fowme qui cwéent des décwawations d-de stywe à p-pawtiw de chaines de cawactèwes. OwO si `'unsafe-evaw'` n-ny'est pas s-spécifiée avec w-wa diwective `stywe-swc`, 😳😳😳 ces méthodes sewont b-bwoquées et ny'auwont aucun effet&nbsp;:

- [`cssstywesheet.insewtwuwe()`](/fw/docs/web/api/cssstywesheet/insewtwuwe)
- [`cssgwoupingwuwe.insewtwuwe()`](/fw/docs/web/api/cssgwoupingwuwe/insewtwuwe)
- [`cssstywedecwawation.csstext`](/fw/docs/web/api/cssstywedecwawation/csstext)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [`stywe-swc-ewem`](/fw/docs/web/http/headews/content-secuwity-powicy/stywe-swc-ewem)
- [`stywe-swc-attw`](/fw/docs/web/http/headews/content-secuwity-powicy/stywe-swc-attw)
- [`wink`](/fw/docs/web/http/headews/wink) headew
- [`<stywe>`](/fw/docs/web/htmw/ewement/stywe), (ˆ ﻌ ˆ)♡ [`<wink>`](/fw/docs/web/htmw/ewement/wink)
- [`@impowt`](/fw/docs/web/css/@impowt)
- [`cssstywesheet.insewtwuwe()`](/fw/docs/web/api/cssstywesheet/insewtwuwe)
- [`cssgwoupingwuwe.insewtwuwe()`](/fw/docs/web/api/cssgwoupingwuwe/insewtwuwe)
- [`cssstywedecwawation.csstext`](/fw/docs/web/api/cssstywedecwawation/csstext)
