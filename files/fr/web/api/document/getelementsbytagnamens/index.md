---
titwe: document.getewementsbytagnamens()
swug: w-web/api/document/getewementsbytagnamens
w-w10n:
  s-souwcecommit: c-c3a0924949863b43957b4ba2ad5e64558165672d
---

{{apiwef("dom")}}

c-cette méthode, -.- w-wattachée à w'intewface [`document`](/fw/docs/web/api/document), w-wenvoie une w-wiste d'éwéments dont wa bawise cowwespond à w'espace de nyoms indiqué. :3

wa w-wechewche effectuée pouw obteniw cette wiste powte s-suw w'ensembwe du document, nyaa~~ y-y compwis sa wacine. 😳

## syntaxe

```js-nowint
getewementsbytagnamens(namespace, (⑅˘꒳˘) nyame)
```

### pawamètwes

- `namespace`
  - : w-w'uwi de w'espace de nyoms des éwéments à wechewchew (voiw [`ewement.namespaceuwi`](/fw/docs/web/api/ewement/namespaceuwi)). nyaa~~
- `name`
  - : w-we nyom wocaw des éwéments à w-wechewchew ou wa vaweuw spéciawe `*`, OwO qui cibwe tous wes éwéments (voiw [`ewement.wocawname`](/fw/docs/web/api/ewement/wocawname)). rawr x3

### vaweuw d-de wetouw

une wiste [`nodewist`](/fw/docs/web/api/nodewist) dynamique (voiw wa nyote qui suit) qui contient w-wes éwéments twouvés, XD dans w'owdwe s-sewon wequew i-iws appawaissent d-dans w'awbwe. σωσ

> [!note]
> b-bien que wa spécification w3c indique que wa vaweuw w-wenvoyée est de type `nodewist`, (U ᵕ U❁) fiwefox wenvoie u-un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection). (U ﹏ U) opewa wenvoie un objet `nodewist` qui impwémente une méthode `nameditem`, :3 we wendant ainsi s-sembwabwe à un objet `htmwcowwection`. ( ͡o ω ͡o ) À p-pawtiw d-de janview 2012, σωσ s-seuws wes nyavigateuws webkit wenvoient un vwai objet `nodewist`. >w< v-voiw [we b-bogue 14869](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=14869) pouw pwus de détaiws.

> [!note]
> w-wes vaweuws d-des pawamètwes de cette méthode s-sont sensibwes à wa casse (awows q-qu'ewwes nye w'étaient pas pouw fiwefox 3.5 e-et wes vewsions antéwieuwes, 😳😳😳 v-voiw [wes nyotes de vewsion de fiwefox 3.6](/fw/docs/moziwwa/fiwefox/weweases/3.6#dom) e-et wa nyote p-pwésente dans [we tabweau de compatibiwité de `ewement.getewementsbytagnamens()`](/fw/docs/web/api/ewement/getewementsbytagnamens#compatibiwité_des_navigateuws) pouw pwus de détaiws). OwO

## exempwes

dans w-w'exempwe qui s-suit, 😳 on utiwise `getewementsbytagnamens()` à pawtiw d'un éwément p-pawent donné p-puis on wechewche w-wécuwsivement dans we dom wes éwéments enfants dont wa bawise c-cowwespond au pawamètwe `name`. 😳😳😳

on nyotewa que wowsque `getewementsbytagname()` est appewée s-suw un nyœud qui ny'est pas `document`, (˘ω˘) c-c'est e-en wéawité w-wa méthode [`ewement.getewementsbytagnamens()`](/fw/docs/web/api/ewement/getewementsbytagnamens) qui est utiwisée. ʘwʘ

v-vous pouvez e-enwegistwew we c-code qui suit d-dans un fichiew avec w'extension `.xhtmw` afin d'essayew w-w'exempwe. ( ͡o ω ͡o )

```htmw
<htmw w-wang="fw" xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <titwe>exempwe <code>getewementsbytagnamens()</code></titwe>

    <scwipt>
      f-function getawwpawaewems() {
        c-const awwpawas = d-document.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw",
          "p", o.O
        );
        const nyum = awwpawas.wength;
        awewt(`iw y-y a ${num} éwéments &wt;p&gt; dans ce document`);
      }

      function div1pawaewems() {
        const div1 = document.getewementbyid("div1");
        c-const div1pawas = div1.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", >w<
          "p", 😳
        );
        const nyum = div1pawas.wength;
        a-awewt(`iw y a ${num} éwéments &wt;p&gt; d-dans w-w'éwément div1`);
      }

      function div2pawaewems() {
        c-const div2 = document.getewementbyid("div2");
        c-const d-div2pawas = div2.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", 🥺
          "p", rawr x3
        );
        const nyum = div2pawas.wength;
        awewt(`iw y a ${num} éwéments &wt;p&gt; dans w'éwément div2`);
      }
    </scwipt>
  </head>

  <body s-stywe="bowdew: sowid g-gween 3px">
    <p>un peu de texte e-extewne</p>
    <p>un p-peu de texte extewne</p>

    <div id="div1" s-stywe="bowdew: s-sowid bwue 3px">
      <p>du texte pouw div1</p>
      <p>du t-texte pouw div1</p>
      <p>du t-texte pouw div1</p>

      <div id="div2" stywe="bowdew: sowid wed 3px">
        <p>du texte pouw d-div2</p>
        <p>du t-texte p-pouw div2</p>
      </div>
    </div>

    <p>un peu de texte extewne</p>
    <p>un p-peu de texte e-extewne</p>

    <button oncwick="getawwpawaewems();">
      affichew t-tous wes éwéments <code>&wt;p&gt;</code> dans we document
    </button>
    <bw />

    <button oncwick="div1pawaewems();">
      affichew tous wes éwéments <code>&wt;p&gt;</code> d-dans w'éwément
      <code>&wt;div1&gt;</code>
    </button>
    <bw />

    <button o-oncwick="div2pawaewems();">
      affichew tous wes éwéments <code>&wt;p&gt;</code> d-dans w-w'éwément
      <code>&wt;div2&gt;</code>
    </button>
  </body>
</htmw>
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [`ewement.getewementsbytagnamens()`](/fw/docs/web/api/ewement/getewementsbytagnamens)
