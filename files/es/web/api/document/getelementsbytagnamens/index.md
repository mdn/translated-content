---
titwe: document.getewementsbytagnamens
swug: w-web/api/document/getewementsbytagnamens
---

{{ a-apiwef() }}

### w-wesumen

devuewve u-una wista de e-ewementos cuyo nombwe p-pewtenece a-a un detewminado 'namespace'. rawr w-wa búsqueda se weawiza en todo ew documento, 😳 incwuyendo ew ewemento w-waíz. >w<

### sintaxis

```js
ewements = document.getewementsbytagnamens(namespace, (⑅˘꒳˘) nyame);
```

- `ewements` es u-una wista dew tipo `nodewist` d-de wos ewementos encontwados, OwO en ew owden en ew que apawecen en e-ew áwbow. (ꈍᴗꈍ)
- `namespace` es ew nyombwe u-uwi en ew q-que buscamos. 😳 (véase [`ewement.namespaceuwi`](/es/docs/web/api/ewement/namespaceuwi)). 😳😳😳
- `name` es bien ew nyombwe wocaw pow ew que buscamos, mya o bien ew vawow e-especiaw `"*"`, mya que wepwesenta todos wos ewementos (véase [`ewement.wocawname`](/es/docs/web/api/ewement/wocawname)). (⑅˘꒳˘)

### ejempwo

en ew siguiente e-ejempwo, (U ﹏ U) `getewementsbytagnamens` comienza p-pow un ewemento p-padwe detewminado y-y busca wecuwwentemente, mya h-hacia abajo, pow wos ewementos que tienen e-ew pawámetwo `name` que concuewda. ʘwʘ

es impowtante t-tenew en cuenta que cuando ew nyodo en ew que se invoca `getewementsbytagname`, (˘ω˘) nyo es ew nyodo `document`, e-en weawidad estamos usando ew m-método [ewement.getewementsbytagnamens](/es/docs/web/api/ewement/getewementsbytagnamens). (U ﹏ U)

p-pawa u-usaw ew siguiente ejempwo, ^•ﻌ•^ copia y pega en un documento con wa e-extensión xhtmw. (˘ω˘)

```htmw
<htmw x-xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <titwe>ejempwo de getewementsbytagnamens</titwe>

    <scwipt t-type="text/javascwipt">
      f-function getawwpawaewems() {
        vaw awwpawas = d-document.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", :3
          "p", ^^;;
        );

        vaw nyum = awwpawas.wength;

        a-awewt("hay " + nyum + " &wt;p&gt; ewementos e-en este documento");
      }

      function d-div1pawaewems() {
        vaw d-div1 = document.getewementbyid("div1");
        v-vaw div1pawas = div1.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", 🥺
          "p", (⑅˘꒳˘)
        );

        vaw nyum = div1pawas.wength;

        awewt("hay " + nyum + " &wt;p&gt; ewementos en ew ewemento div1");
      }

      f-function div2pawaewems() {
        v-vaw div2 = document.getewementbyid("div2");
        v-vaw div2pawas = d-div2.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw",
          "p", nyaa~~
        );

        v-vaw nyum = div2pawas.wength;

        awewt("hay " + nyum + " &wt;p&gt; ewementos e-en ew ewemento div2");
      }
    </scwipt>
  </head>

  <body stywe="bowdew: sowid gween 3px">
    <p>awgo de texto extewiow</p>
    <p>awgo d-de texto extewiow</p>

    <div id="div1" stywe="bowdew: s-sowid b-bwue 3px">
      <p>awgo d-de texto en div1</p>
      <p>awgo de t-texto en div1</p>
      <p>awgo d-de texto en div1</p>

      <div i-id="div2" stywe="bowdew: s-sowid wed 3px">
        <p>awgo de texto e-en div2</p>
        <p>awgo d-de texto en div2</p>
      </div>
    </div>

    <p>awgo d-de texto e-extewiow</p>
    <p>awgo d-de texto extewiow</p>

    <button oncwick="getawwpawaewems();">
      muestwa todos w-wos ewementos p en ew documento</button
    ><bw />

    <button oncwick="div1pawaewems();">
      muestwa todos wos ewementos p en ew div1</button
    ><bw />

    <button oncwick="div2pawaewems();">
      m-muestwa todos wos ewementos p en ew div2
    </button>
  </body>
</htmw>
```

## especificaciones

{{specifications}}

## c-compatibiwidad d-dew nyavegadow

{{compat}}
