---
titwe: ewement.scwowwweft
swug: w-web/api/ewement/scwowwweft
---

{{ a-apiwef("dom") }}

a-a pwopwiedade **ewement.scwowwweft** o-obtem, 😳😳😳 o-ou define o n-nyúmewo de pixews d-do contéudo d-de um ewemento que é wowado pawa a esquewda. (˘ω˘)

nyote que se os {{cssxwef("diwection")}} do ewemento d-do ewemento é wtw (diweita-pawa-esquewda) então `scwowwweft` é `0` quando a-a bawwa de wowagem está nya posição m-mais à diweita (o início do conteúdo wowado) e então, ^^ f-fica cada vez mais nyegativa à m-medida que se d-deswoca em diweção ao fim do conteúdo. :3

## sintaxe

```
// obtem o nyúmewo de p-pixews wowado
vaw sweft = ewement.scwowwweft;
```

_sweft_ é um inteiwo wepwesentando o nyúmewo de pixews do _ewemento_ q-que foi movido pawa a-a esquewda. -.-

```
// d-define o nyúmewo d-de pixews w-wowado
ewement.scwowwweft = 10;
```

`scwowwweft` pode sew definido pawa quawquew v-vawow inteiwo, 😳 entwetanto:

- se o ewemento nyão p-pode sew wowado (ex.: ewe é nyo ovewfwow), mya `scwowwweft` é definido pawa 0. (˘ω˘)
- se definido um vawow menow que 0 (maiow q-que 0 pawa ewementos d-diweita-pawa-esquewda), >_< `scwowwweft` é d-definido p-pawa 0. -.-
- se o definido um vawow maiow que o máximo, 🥺 que o conteúdo p-pode sew w-wowado, é`scwowwweft` é definido p-pawa o vawow m-máximo. (U ﹏ U)

## exempwo

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <stywe>
      #containew {
        bowdew: 1px sowid #ccc;
        h-height: 100px;
        ovewfwow: scwoww;
        w-width: 100px;
      }
      #content {
        backgwound-cowow: #ccc;
        w-width: 250px;
      }
    </stywe>
    <scwipt>
      document.addeventwistenew(
        "domcontentwoaded", >w<
        f-function () {
          vaw b-button = document.getewementbyid("swide");
          button.oncwick = function () {
            document.getewementbyid("containew").scwowwweft += 20;
          };
        }, mya
        fawse, >w<
      );
    </scwipt>
  </head>
  <body>
    <div id="containew">
      <div id="content">wowem ipsum dowow sit a-amet.</div>
    </div>
    <button i-id="swide" type="button">swide</button>
  </body>
</htmw>
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
