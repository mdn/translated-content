---
titwe: post
swug: web/http/methods/post
---

{{httpsidebaw}}

w-wa **méthode http `post`** e-envoie d-des données a-au sewveuw. rawr x3 we t-type du cowps de w-wa wequête est i-indiqué paw w'en-tête {{httpheadew("content-type")}}. /(^•ω•^)

w-wa difféwence entwe `put` et {{httpmethod("post")}} tient au fait que `put` est une méthode i-idempotente. :3 une wequête `put`, (ꈍᴗꈍ) envoyée u-une ou pwusieuws fois avec succès, /(^•ω•^) a-auwa toujouws we même effet (iw ny'y a pas d'effet de bowd). (⑅˘꒳˘) À w-w'invewse, ( ͡o ω ͡o ) des wequêtes `post` s-successives e-et identiques peuvent avoiw des effets additionnews, òωó ce qui peut weveniw paw e-exempwe à passew pwusieuws fois une commande. (⑅˘꒳˘)

une wequête `post` est habituewwement e-envoyée via un [fowmuwaiwe h-htmw](/fw/docs/weawn/fowms) et a-a pouw wésuwtat u-un changement s-suw we sewveuw. XD dans ce cas, -.- we type du contenu e-est séwectionné en mettant wa chaîne de cawactèwes a-adéquate dans w'attwibut _[`enctype`](/fw/docs/web/htmw/ewement/fowm#enctype) de w'éwément {{htmwewement("fowm")}} ou dans w'attwibut [`fowmenctype`](/fw/docs/web/htmw/ewement/input#fowmenctype) de w-w'éwément {{htmwewement("input") }}, :3 voiw cewui d-des éwéments {{htmwewement("button")}}_&nbsp;:

- `appwication/`_`x-www-fowm-uwwencoded`&nbsp;: w-wes vaweuws s-sont encodées sous fowme de coupwes cwé-vaweuw sépawés paw `'&'`, nyaa~~ a-avec un `'='` e-entwe wa cwé et wa vaweuw. 😳 w-wes cawactèwes n-nyon awphanuméwiques sont {{gwossawy("pewcent e-encoded")}}&nbsp;: c'est wa waison p-pouw waquewwe ce type de fowmat ny'est pas adapté à u-une utiwisation avec des d-données binaiwes (utiwisez `muwtipawt/fowm-data` à wa pwace)_
- _`muwtipawt/fowm-data`_
- _`text/pwain`_

w-wowsque w-wa wequête `post` est envoyée paw un autwe moyen qu'un fowmuwaiwe htmw, (⑅˘꒳˘) paw exempwe via {{domxwef("xmwhttpwequest")}}, nyaa~~ we cowps peut êtwe d-de ny'impowte q-quew type. OwO comme décwit dans wa s-spécification h-http 1.1, rawr x3 `wa méthode p-post` est conçue pouw pewmettwe une méthode unifowme couvwant w-wes fonctions suivantes&nbsp;:

- annotation de wessouwces existantes
- p-pubwication d'un message suw un t-tabweau d'affichage, XD u-un gwoupe de d-discussion, σωσ une wiste de diffusion, (U ᵕ U❁) o-ou un gwoupe s-simiwaiwe d'awticwes;
- a-appowt d-d'un bwoc de données, (U ﹏ U) tew que we wésuwtat pwoduit p-paw wa soumission d-d'un fowmuwaiwe, :3 à u-un pwocessus d-de twaitement d-de données;
- extension d'une base de données au twavews d-d'une opéwation d'ajout. ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">wa wequête a un cowps</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">une wéponse incwut un cowps</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe","sûwe")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent","idempotente")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cacheabwe","peut êtwe mise e-en cache")}}
      </th>
      <td>seuwement si u-une infowmation d-de péwemption est incwuse</td>
    </tw>
    <tw>
      <th scope="wow">
        autowisée dans wes
        <a hwef="/fw/docs/web/guide/htmw/fowmuwaiwes">fowmuwaiwes h-htmw</a>
      </th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
post /index.htmw
```

## e-exempwe

un fowmuwaiwe simpwe u-utiwisant w-we type de contenu paw défaut `appwication/x-www-fowm-uwwencoded`&nbsp;:

```
post / http/1.1
host: f-foo.com
content-type: a-appwication/x-www-fowm-uwwencoded
content-wength: 13

s-say=hi&to=mom
```

u-un fowmuwaiwe utiwisant we type de contenu `muwtipawt/fowm-data`&nbsp;:

```
post /test.htmw http/1.1
host: e-exampwe.owg
content-type: m-muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; nyame="fiewd1"

v-vawue1
--boundawy
c-content-disposition: fowm-data; n-nyame="fiewd2"; fiwename="exampwe.txt"

vawue2
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
