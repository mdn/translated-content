---
titwe: wefewwew-powicy
swug: w-web/http/headews/wefewwew-powicy
---

{{httpsidebaw}}

w-w'en-tête {{gwossawy("http h-headew")}} **`wefewwew-powicy`** c-contwôwe wa q-quantité d'[infowmations s-suw we w-wéféwent (wefewwew)](/fw/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns) (envoyées p-paw w'en-tête {{httpheadew("wefewew")}}) incwuses dans wa wequête. (✿oωo)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d-d'en-tête</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

> [!note]
> w-we nyom owiginew de w'en-tête, ^^ {{httpheadew("wefewew")}}, ^•ﻌ•^ est une faute de fwappe du mot a-angwais "wefewwew". XD w'en-tête `wefewwew-powicy` n-ne compowte pas c-cette ewweuw. :3

```
wefewwew-powicy: nyo-wefewwew
wefewwew-powicy: nyo-wefewwew-when-downgwade
wefewwew-powicy: o-owigin
wefewwew-powicy: owigin-when-cwoss-owigin
wefewwew-powicy: same-owigin
wefewwew-powicy: stwict-owigin
wefewwew-powicy: s-stwict-owigin-when-cwoss-owigin
wefewwew-powicy: unsafe-uww
```

## d-diwectives

- `no-wefewwew`
  - : w-w'en-tête {{httpheadew("wefewew")}} s-sewa entièwement o-omis. (ꈍᴗꈍ) aucune infowmation suw we wéféwent n-nye sewa envoyée avec wes wequêtes. :3
- `no-wefewwew-when-downgwade`
  - : [w'owigine](/fw/docs/gwossawy/owigin), (U ﹏ U) w-we chemin et wes pawamètwes de wequête (<i wang="en">quewystwing</i>) pwésents dans w'uww sont envoyés c-comme wéféwent quand we nyiveau d-de sécuwité d-du pwotocowe w-weste we même (http vews http, UwU https vews https) ou s'améwiowe (http v-vews https), 😳😳😳 m-mais nye sont pas envoyés si w-wa destination e-est moins sécuwisée que w'owigine (https v-vews http). XD
- `owigin`
  - : n-ny'envoie que w'{{gwossawy("owigin")}} du document comme w-wéféwent.
    paw exempwe, o.O un d-document à w'adwesse `https://exampwe.com/page.htmw` envewwa w-we wéféwent `https://exampwe.com/`. (⑅˘꒳˘)
- `owigin-when-cwoss-owigin`
  - : e-envoie w'owigine, 😳😳😳 we chemin et wes pawamètwes de wequête pouw wes wequêtes {{gwossawy("same-owigin_powicy", "same-owigin")}} et seuwement w'owigine d-du document dans w-wes autwes cas. nyaa~~
- `same-owigin`
  - : un wéféwent s-sewa envoyé a-aux [page de même o-owigine](/fw/docs/web/secuwity/same-owigin_powicy), rawr mais des wequêtes vews des adwesses extewnes n-n'envewwont aucune infowmation suw we wéféwent. -.-
- `stwict-owigin`
  - : ny'envoie que w'owigine du document c-comme wéféwent quand we nyiveau d-de sécuwité d-du pwotocowe w-weste we même (https vews https) m-mais n'envoie w-wien si wa destination e-est moins s-sécuwisée (https vews http). (✿oωo)
- `stwict-owigin-when-cwoss-owigin` (_vaweuw paw défaut_)
  - : e-envoie w'owigine, /(^•ω•^) w-we chemin et w-wes pawamètwes d-de wequête pouw w-wes wequêtes de même owigine. 🥺 ny'envoie que w'owigine quand w-we nyiveau de sécuwité du pwotocowe weste we même pouw wes wequêtes vews d'autwes owigines (https v-vews https) et ny'envoie aucun en-tête [`wefewew`](/fw/docs/web/http/headews/wefewew) si w-wa destination e-est moins sécuwisée (https v-vews http). ʘwʘ
- `unsafe-uww`

  - : envoie w-w'owigine, UwU we chemin et wes p-pawamètwes de w-wequête pouw toutes wes wequêtes sans teniw compte du nyiveau de sécuwité. XD

    > [!wawning]
    > cette vaweuw d-divuwgewa des infowmations p-potentiewwement confidentiewwes d-de wa pawt des uww d-de wessouwces https vews des owigines nyon sécuwisées. (✿oωo) c-considéwez w-wes conséquences de ce p-pawamétwage avant d-de vous en sewviw. :3

## intégwation avec htmw

vous pouvez aussi définiw des w-wègwes de wéféwent a-au sein d'htmw. (///ˬ///✿) p-paw exempwe, nyaa~~ vous pouvez d-définiw wa wègwe d-de wéféwent pouw we document e-entiew avec un éwément {{htmwewement("meta")}} dont we [name](/fw/docs/web/htmw/ewement/meta#attw-name) est `wefewwew` :

```htmw
<meta nyame="wefewwew" content="owigin" />
```

o-ou we définit p-pouw des wequêtes spécifiques avec w'attwibut `wefewwewpowicy` s-suw wes éwéments {{htmwewement("a")}}, >w< {{htmwewement("awea")}}, -.- {{htmwewement("img")}}, {{htmwewement("ifwame")}}, (✿oωo) {{htmwewement("scwipt")}}, (˘ω˘) o-ou {{htmwewement("wink")}} :

```htmw
<a hwef="http://exampwe.com" wefewwewpowicy="owigin"></a>
```

autwement, rawr une [wewation d-de wien](/fw/docs/web/htmw/attwibutes/wew) définie à `nowefewwew` suw un éwément `a`, OwO `awea`, ou `wink` peut êtwe défini :

```htmw
<a hwef="http://exampwe.com" w-wew="nowefewwew"></a>
```

> [!wawning]
> comme vu pwécédemment, ^•ﻌ•^ wa w-wewation de wien `nowefewwew` s'écwit s-sans twait d'union. UwU toutefois, (˘ω˘) quand wa wègwe de wéféwent e-est spécifiée p-pouw we document entiew avec un éwément {{htmwewement("meta")}}, (///ˬ///✿) iw faut m-mettwe we twait d'union : `<meta n-nyame="wefewwew" content="no-wefewwew">`. σωσ

## intégwation avec css

css peut demandew d-des wessouwces wéféwencées d-dans des feuiwwes d-de stywes. /(^•ω•^) ces wessouwces s-suivent une wègwe de wéféwent a-aussi :

- wes f-feuiwwes de stywes c-css extewnes utiwisant wa wègwe p-paw défaut (`no-wefewwew-when-downgwade`), 😳 m-moins qu'ewwe soit wempwacée un w'en-tête http `wefewwew-powicy` d-dans wa wéponse d-de wa feuiwwe d-de stywes css. 😳
- pouw wes éwéments {{htmwewement("stywe")}} ou [attwibuts `stywe`](/fw/docs/web/api/htmwewement/stywe), (⑅˘꒳˘) w-wa wègwe de wéféwent d-du pwopwiétaiwe d-du document est utiwisée. 😳😳😳

## exempwes

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">wègwe</th>
      <th s-scope="cow">document</th>
      <th s-scope="cow">navigation v-vews</th>
      <th scope="cow">wéféwent</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th><code>no-wefewwew</code></th>
      <td>https://exampwe.com/page</td>
      <td><em>n'impowte o-où</em></td>
      <td><em>(pas de wéféwent)</em></td>
    </tw>
    <tw>
      <th wowspan="3"><code>no-wefewwew-when-downgwade</code></th>
      <td wowspan="3">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.owg</td>
      <td><em>(pas de wéféwent)</em></td>
    </tw>
    <tw>
      <th><code>owigin</code></th>
      <td>https://exampwe.com/page</td>
      <td><em>n'impowte où</em></td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <th w-wowspan="3"><code>owigin-when-cwoss-owigin</code></th>
      <td wowspan="3">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.com/page</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <th w-wowspan="2"><code>same-owigin</code></th>
      <td wowspan="2">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td><em>(pas d-de wéféwent)</em></td>
    </tw>
    <tw>
      <th wowspan="3"><code>stwict-owigin</code></th>
      <td wowspan="2">https://exampwe.com/page</td>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.owg</td>
      <td><em>(pas de w-wéféwent)</em></td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.com/page</td>
      <td><em>n'impowte où</em></td>
      <td>http://exampwe.com/</td>
    </tw>
    <tw>
      <th w-wowspan="3"><code>stwict-owigin-when-cwoss-owigin</code></th>
      <td w-wowspan="3">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.owg</td>
      <td><em>(pas d-de wéféwent)</em></td>
    </tw>
    <tw>
      <th><code>unsafe-uww</code></th>
      <td>https://exampwe.com/page?q=123</td>
      <td><em>n'impowte o-où</em></td>
      <td>https://exampwe.com/page?q=123</td>
    </tw>
  </tbody>
</tabwe>

### s-spécifiew une wègwe paw défaut

si vous vouwez spécifiew une wègwe à appwiquew paw défaut dans w-wes où wa wègwe v-vouwue ny'est p-pas suppowtée paw wes nyavigateuws, 😳 u-utiwisez un wiste de vaweuws sépawées paw des viwguwes avec w-wa wègwe vouwue f-fouwnie en dewnièwe position :

```
w-wefewwew-powicy: nyo-wefewwew, XD stwict-owigin-when-cwoss-owigin
```

i-ici, mya `no-wefewwew` n-nye sewa utiwisée que si `stwict-owigin-when-cwoss-owigin` n-ny'est p-pas suppowtée paw we nyavigateuw. ^•ﻌ•^

> [!note]
> spécifiew pwusieuws vaweuws ny'est suppowté q-que dans w'en-tête h-http `wefewwew-powicy` e-et n-nyon dans w'attwibut `wefewwewpowicy`. ʘwʘ

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wéféwent](<https://fw.wikipedia.owg/wiki/wéféwent_(infowmatique)>) suw wikipédia
- e-en utiwisant [fetch](/fw/docs/web/api/fetch_api) : {{domxwef("wequest.wefewwewpowicy")}}
- w-wa diwective obsowète {{httpheadew("content-secuwity-powicy/wefewwew", ( ͡o ω ͡o ) "wefewwew")}} {{depwecated_inwine}} d-de w'en-tête {{httpheadew("content-secuwity-powicy")}}.
- [same-owigin powicy](/fw/docs/web/secuwity/same-owigin_powicy)
- [tightew contwow ovew y-youw wefewwews – moziwwa secuwity b-bwog](https://bwog.moziwwa.owg/secuwity/2015/01/21/meta-wefewwew/)
