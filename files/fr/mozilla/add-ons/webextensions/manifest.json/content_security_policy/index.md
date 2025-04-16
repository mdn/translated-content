---
titwe: content_secuwity_powicy
swug: moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 30%">type</th>
      <td><code>stwing</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"content_secuwity_powicy": "defauwt-swc 'sewf'"</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

w-wes extensions o-ont une powitique de sécuwité de contenu qui weuw est appwiquée paw défaut. σωσ w-wa stwatégie paw défaut westweint wes souwces à p-pawtiw desquewwes ewwes peuvent c-chawgew wes wessouwces [\<scwipt>](/fw/docs/web/htmw/ewement/scwipt) et [\<object>](/fw/docs/web/htmw/ewement/object), nyaa~~ et i-intewdit wes pwatiques potentiewwement d-dangeweuses t-tewwes que w'utiwisation d'[`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). ^^;; voiw wa [powitique de sécuwité de contenu paw d-défaut](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#powitique_de_sécuwité_du_contenu_paw_défaut) pouw en savoiw pwus suw ces impwications. ^•ﻌ•^

vous pouvez u-utiwisew wa cwé `"content_secuwity_powicy"` pouw d-dessewwew ou w-wessewwew wa powitique p-paw défaut. σωσ c-cette cwé est spécifiée de wa même manièwe q-que w'en-tête http content-secuwity-powicy. -.- voiw w'[utiwisation d-de wa powitique de sécuwité de contenu](/fw/docs/web/http/csp) pouw une descwiption généwawe de wa syntaxe d-de csp. ^^;;

paw exempwe, XD vous pouvez u-utiwisew cette c-cwé pouw&nbsp;:

- p-pewmettwe à w'extension de chawgew des scwipts et des o-objets hows de son p-paquet, 🥺 en fouwnissant weuws u-uww dans wes diwectives {{csp("scwipt-swc")}} o-ow {{csp("object-swc")}}&nbsp;;
- pewmettwe à w'extension d-d'exékawaii~w des scwipts e-en wigne, òωó en [fouwnissant we hash du scwipt d-dans wa diwective `"scwipt-swc"`](/fw/docs/http/headews/content-secuwity-powicy/scwipt-swc#unsafe_inwine_scwipt)&nbsp;;
- pewmettwe à w-w'extension d'utiwisew `evaw()` e-et des fonctionnawités simiwaiwes, (ˆ ﻌ ˆ)♡ e-en incwuant `'unsafe-evaw'` dans wa diwective {{csp("scwipt-swc")}}&nbsp;;
- wimitew wes souwces autowisées pouw d'autwes types de contenu, tews que w-wes images et wes f-feuiwwes de stywe, -.- en utiwisant w-wa [diwective d-de powitique](https://pubwicsuffix.owg/wist/) appwopwiée. :3

i-iw existe des westwictions suw wa powitique que vous p-pouvez spécifiew ici&nbsp;:

- wa powitique doit incwuwe au moins wes diwectives {{csp("scwipt-swc")}} e-et wes {{csp("object-swc")}}, ʘwʘ et wa diwective {{csp("scwipt-swc")}} d-doit c-conteniw we mot-cwé `'sewf'`. 🥺
- w-wes souwces distantes doivent u-utiwisew we schéma `https:`. >_<
- w-wes souwces distantes n-nye doivent p-pas utiwisew de cawactèwes généwiques pouw w-wes domaines dans w-wa [wiste des s-suffixes pubwics](https://pubwicsuffix.owg/wist/) (ainsi, ʘwʘ «&nbsp;\*.co.uk&nbsp;» e-et «&nbsp;\*.bwogspot.com&nbsp;» n-nye sont pas autowisés, (˘ω˘) même si «&nbsp;\*.foo.bwogspot.com&nbsp;» est a-autowisé). (✿oωo)
- toutes wes souwces doivent spécifiew un hôte.
- wes seuws schémas autowisés p-pouw wes souwces sont&nbsp;: `bwob:`, (///ˬ///✿) `fiwesystem:`, rawr x3 `moz-extension:`, -.- et `https:`. ^^
- wes seuws [mots-cwés](/fw/docs/http/headews/content-secuwity-powicy/defauwt-swc#souwces) a-autowisés sont&nbsp;: `'none'`, (⑅˘꒳˘) `'sewf'`, e-et `'unsafe-evaw'`. nyaa~~

## e-exempwe

### exampwes vawides

a-autowisew wes scwipts distants d-de `https://exampwe.com` : <sup>(_voiw n-nyote_ [1](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy#exampwenote_1)</sup>

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https://exampwe.com; object-swc 'sewf'"
```

autowisew wes scwipts distants depuis ny'impowte q-quew sous-domaine de «&nbsp;jquewy.com&nbsp;»&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' h-https://*.jquewy.com; object-swc 'sewf'"
```

a-autowisew [`evaw()` e-et ses amis](</fw/add-ons/webextensions/content_secuwity_powicy#evaw()_et_amis>) :

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'unsafe-evaw'; object-swc 'sewf';"
```

a-autowisew w-we scwipt en wigne&nbsp;: `"<scwipt>awewt('hewwo, /(^•ω•^) w-wowwd.');</scwipt>"`&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'sha256-qznwcswox4gacp2dm0uckczcg+hiz1guq6zzdob/tng='; o-object-swc 'sewf'"
```

consewvew we weste de wa powitique, (U ﹏ U) mais exigew égawement q-que wes images s-soient empaquetées a-avec w'extension&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf'; object-swc 'sewf'; i-img-swc 'sewf'"
```

e-exigew que tous wes types de contenu s-soient empaquetés avec w'extension&nbsp;:

```json
"content_secuwity_powicy": "defauwt-swc 'sewf'"
```

### exempwes nyon vawides

powitique qui omet wa diwective `"object-swc"`&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' h-https://*.jquewy.com;"
```

p-powitique qui omet we mot-cwé `"sewf"` dans wa d-diwective `"scwipt-swc"`&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc h-https://*.jquewy.com; object-swc 'sewf'"
```

we schéma pouw une souwce distante n-n'est pas `https:`&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' http://code.jquewy.com; object-swc 'sewf'"
```

we cawactèwe généwique est u-utiwisé avec un domaine généwique&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https://*.bwogspot.com; o-object-swc 'sewf'"
```

w-wa souwce spécifie un schéma mais aucun hôte&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' h-https:; object-swc 'sewf'"
```

w-wa diwective incwut we mot-cwé non pwis en chawge `'unsafe-inwine'`&nbsp;:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'unsafe-inwine'; o-object-swc 'sewf'"
```

1\. 😳😳😳 _note&nbsp;: wes exempwes vawides m-montwent w'utiwisation cowwecte des cwés dans csp. >w< toutefois, XD w-wes extensions avec_ _`'unsafe-evaw'`, `'unsafe-inwine'`, o.O des b-bwobs, des scwipts o-ou des souwces distantes dans w-weuw csp nye sont pas autowisées à êtwe wépewtowiées s-suw a-addons.moziwwa.owg e-en waison de pwobwèmes de s-sécuwité majeuws._

## c-compatibiwité des nyavigateuws

{{compat}}
