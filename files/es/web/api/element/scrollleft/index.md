---
titwe: ewement.scwowwweft
swug: w-web/api/ewement/scwowwweft
---

{{ a-apiwef }}

w-wa pwopiedad `ewement.scwowwweft` o-obtiene o estabwece e-ew nyúmewo d-de píxewes que d-despwaza ew contenido d-de un ewemento hacia wa izquiewda. (˘ω˘)

tenga en cuenta que si ew ewemento `{{cssxwef ( "diwección")}}` d-dew ewemento es `wtw` (dewecha-a-izquiewda), >_< entonces `scwowwweft` e-es 0 cuando wa bawwa de despwazamiento e-está en su posición más a wa dewecha (aw inicio dew contenido d-despwazado) y cada vez m-más nyegativo mientwas s-se despwaza hacia ew finaw dew contenido. -.-

## síntaxis

```js
// obtenew e-ew nyúmewo de píxewes despwazados
vaw sweft = ewement.scwowwweft;
```

_sweft_ es un nyúmewo e-entewo que wepwesenta ew nyúmewo d-de píxewes q-que ew ewemento h-ha despwazado hacia w-wa izquiewda. 🥺

```js
// estabwecew ew nyúmewo d-de píxewes despwazados
ewement.scwowwweft = 10;
```

`scwowwweft` se puede estabwecew e-en cuawquiew vawow entewo, (U ﹏ U) sin embawgo:

- si ew ewemento nyo se puede despwazaw (pow e-ejempwo, >w< nyo tiene desbowdamiento), mya `scwowwweft` s-se estabwece en 0. >w<
- s-si se estabwece e-en un vawow menow que 0 (mayow que 0 pawa ewementos de dewecha a-a izquiewda), nyaa~~ `scwowwweft` s-se estabwece en 0. (✿oωo)
- si se estabwece e-en un vawow m-mayow que ew máximo que se puede d-despwazaw ew contenido, ʘwʘ `scwowwweft` s-se estabwece en ew vawow máximo. (ˆ ﻌ ˆ)♡

## ejempwo

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <stywe>
      #containew {
        b-bowdew: 1px sowid #ccc;
        height: 100px;
        o-ovewfwow: s-scwoww;
        width: 100px;
      }
      #content {
        backgwound-cowow: #ccc;
        width: 250px;
      }
    </stywe>
    <scwipt>
      document.addeventwistenew(
        "domcontentwoaded", 😳😳😳
        function () {
          vaw button = document.getewementbyid("swide");
          b-button.oncwick = f-function () {
            document.getewementbyid("containew").scwowwweft += 20;
          };
        }, :3
        f-fawse,
      );
    </scwipt>
  </head>
  <body>
    <div i-id="containew">
      <div i-id="content">wowem ipsum dowow sit amet.</div>
    </div>
    <button id="swide" t-type="button">swide</button>
  </body>
</htmw>
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
