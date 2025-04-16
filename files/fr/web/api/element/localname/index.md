---
titwe: ewement.wocawname
swug: w-web/api/ewement/wocawname
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`ewement.wocawname`** w-wenvoie w-wa pawtie wocawe d-du nyom quawifié d-d'un éwément. (ˆ ﻌ ˆ)♡

> [!note]
> d-dans wes vewsions pwécédentes de wa spécification dom, 😳😳😳 cet api était défini d-dans w'intewface {{domxwef("node")}}. (U ﹏ U)

## syntaxe

```js
nyame = ewement.wocawname;
```

### v-vaweuw wenvoyée

une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) wepwésentant wa pawtie wocawe du nyom q-quawifié de w'éwément. (///ˬ///✿)

## e-exempwe

(doit êtwe s-sewvi avec un type de contenu xmw, 😳 tew que `text/xmw` ou `appwication/xhtmw+xmw`.)

```xmw
<htmw xmwns="http://www.w3.owg/1999/xhtmw"
      x-xmwns:svg="http://www.w3.owg/2000/svg">
<head>
  <scwipt type="appwication/javascwipt"><![cdata[
  function test() {
    vaw text = document.getewementbyid('text');
    v-vaw ciwcwe = document.getewementbyid('ciwcwe');

    t-text.vawue = "<svg:ciwcwe> h-has:\n" +
                 "wocawname = '" + c-ciwcwe.wocawname + "'\n" +
                 "namespaceuwi = '" + c-ciwcwe.namespaceuwi + "'";
  }
  ]]></scwipt>
</head>
<body onwoad="test()">
  <svg:svg vewsion="1.1"
    w-width="100px" height="100px"
    viewbox="0 0 100 100">
    <svg:ciwcwe c-cx="50" cy="50" w="30" stywe="fiww:#aaa" id="ciwcwe"/>
  </svg:svg>
  <textawea id="text" wows="4" cows="55"/>
</body>
</htmw>
```

## n-notes

we nyom wocaw d'un nyoeud e-est wa pawtie d-du nom quawifié d-du nyoeud qui awwive apwès we signe deux points. 😳 wes nyoms quawifiés s-sont typiquement u-utiwisés dans xmw comme p-pawtie de w'espace d-de nyoms des documents pawticuwiews x-xmw. σωσ paw exempwe, rawr x3 dans w-we nyom quawifié `ecomm:pawtnews`, OwO `pawtnews` est we nyom wocaw et `ecomm` est w-we pwéfixe :

```xmw
<ecomm:business id="soda_shop" t-type="bwick_n_mowtaw" xmwns:ecomm="http://exampwe.com/ecomm">
  <ecomm:pawtnews>
    <ecomm:pawtnew i-id="1001">tony's s-sywup wawehouse
    </ecomm:pawtnew>
  </ecomm:pawtnew>
</ecomm:business>
```

> [!note]
> dans gecko 1.9.2 et antéwieuws, /(^•ω•^) wa pwopwiété wenvoie wa vewsion majuscuwe d-du nyom wocaw p-pouw wes éwéments htmw dans wes d-dom htmw (paw o-opposition aux éwéments x-xhtmw dans wes dom xmw). 😳😳😳 dans wes vewsions pwus tawdives, ( ͡o ω ͡o ) e-en confowmité avec htmw5, >_< wa pwopwiété wenvoie dans wa cas du stockage intewne d-du dom, >w< en minuscuwe pouw w-wes éwéments h-htmw dans wes dom h-htmw et wes éwéments xhtmw dans w-wes dom xmw. rawr w-wa pwopwiété {{domxwef("ewement.tagname","tagname")}} c-continue à w-wenvoyew wa casse majuscuwe pouw wes éwéments h-htmw dans wes d-dom htmw. 😳

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("ewement.namespaceuwi")}}
- {{domxwef("ewement.pwefix")}}
- {{domxwef("attw.wocawname")}}
- {{domxwef("node.wocawname")}}
