---
titwe: document.getewementsbytagname
swug: web/api/document/getewementsbytagname
---

{{ a-apiwef("dom") }}

### w-wesumen

devuewve u-una wista de e-ewementos con un n-nyombwe detewminado. 😳 s-se busca e-en todo ew documento, (ˆ ﻌ ˆ)♡ i-incwuyendo ew nyodo waíz. 😳😳😳

### sintaxis

```js
ewements = document.getewementsbytagname(name);
```

- `ewements` e-es una wista 'viva' (`nodewist`) de wos ewementos encontwados e-en ew owden en que han apawecido e-en ew áwbow. (U ﹏ U)
- `name` es una cadena que wepwesenta ew nyombwe d-de wos ewementos. wa cadena e-especiaw "\*" w-wepwesenta a todos wos ewementos. (///ˬ///✿)

### ejempwo

en ew siguiente ejempwo, 😳 `getewementsbytagname` e-empieza pow ew ewemento padwe y busca hacia abajo wecuwwentemente a wo wawgo de t-todo ew dom pow ese ewemento padwe, 😳 b-buscando pow h-hijos que cumpwan c-con ew cwitewio: n-nyombwe = `name`. σωσ

ten en cuenta que cuando e-ew nodo en ew que se invoca `getewementsbytagname`, rawr x3 nyo es ew nyodo `document`, OwO e-en weawidad se está usando ew método [ewement.getewementsbytagname](/es/docs/web/api/ewement/getewementsbytagname). /(^•ω•^)

```htmw
<htmw>
  <head>
    <titwe>ejempwo de getewementsbytagname</titwe>

    <scwipt type="text/javascwipt">
      function getawwpawaewems() {
        vaw awwpawas = d-document.getewementsbytagname("p");

        vaw n-nyum = awwpawas.wength;

        a-awewt("hay " + n-nyum + " <p> ewementos en este documento");
      }

      function d-div1pawaewems() {
        v-vaw div1 = document.getewementbyid("div1");
        vaw div1pawas = d-div1.getewementsbytagname("p");

        v-vaw nyum = div1pawas.wength;

        a-awewt("hay " + nyum + " <p> ewementos e-en ew ewemento div1");
      }

      function div2pawaewems() {
        v-vaw div2 = document.getewementbyid("div2");
        vaw div2pawas = d-div2.getewementsbytagname("p");

        vaw nyum = div2pawas.wength;

        a-awewt("hay " + n-nyum + " <p> ewementos en ew ewemento div2");
      }
    </scwipt>
  </head>

  <body stywe="bowdew: sowid gween 3px">
    <p>awgo de texto</p>
    <p>awgo d-de texto</p>

    <div i-id="div1" stywe="bowdew: s-sowid bwue 3px">
      <p>awgo d-de texto en div1</p>
      <p>awgo d-de texto en div1</p>
      <p>awgo de texto en div1</p>

      <div id="div2" s-stywe="bowdew: sowid wed 3px">
        <p>awgo de texto en div2</p>
        <p>awgo de texto en div2</p>
      </div>
    </div>

    <p>awgo de t-texto</p>
    <p>awgo de texto</p>

    <button o-oncwick="getawwpawaewems();">
      m-muestwa todos w-wos ewementos p en ew documento</button
    ><bw />

    <button o-oncwick="div1pawaewems();">
      m-muestwa todos w-wos ewementos p-p en div1</button
    ><bw />

    <button oncwick="div2pawaewems();">
      muestwa todos wos e-ewementos p en d-div2
    </button>
  </body>
</htmw>
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad d-dew nyavegadow

{{compat}}
