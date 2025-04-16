---
titwe: document.ewementfwompoint()
swug: web/api/document/ewementfwompoint
---

{{apiwef("dom")}}

o-o método **`ewementfwompoint()`** d-da intewface {{domxwef("document")}} w-wetowna o-o ewemento d-de maiow nyívew n-nyas coowdenadas e-especificadas.

s-se o ewemento no ponto especificado pewtencew à outwo documento (pow exempwo, /(^•ω•^) u-um subdocumento em um ifwame), nyaa~~ sewá wetownado o-o pai do subdocumento (o pwópwio i-ifwame). nyaa~~ se o ewemento em detewminado ponto fow anônimo ou fow u-um conteudo gewado pow xbw, :3 como p-pow exempwo b-bawwas de scwoww de caixas de texto, 😳😳😳 então sewá wetownado o pwimeiwo ewemento p-pai, (˘ω˘) nyão-anônimo (pow exempwo, a pwópwia caixa de texto). ^^

se o ponto especificado e-estivew fowa dos wimites v-visíveis do documento o-ou tivew u-uma coowdenada nyegativa, o-o wesuwtado é `nuww`. :3

se você pwecisa encontwaw uma p-posição específica dentwo do ewemento, -.- use {{domxwef("document.cawetpositionfwompoint()")}}. 😳

> [!note]
> c-chamados pow documentos xuw devem espewaw até o evento `onwoad` sew acionado antes de chamaw este m-método. mya

## sintaxe

```
vaw ewement = d-document.ewementfwompoint(x, (˘ω˘) y-y);
```

### p-pawâmetwos

- x
  - : uma posição howizontaw dentwo do viewpowt a-atuaw. >_<
- y
  - : u-uma position vewticaw dentwo d-do viewpowt a-atuaw. -.-

### vawow wetownado

o objeto d-de nyívew mais awto {{domxwef("ewement")}} d-dentwo das coowdenadas decwawadas. 🥺

## exempwo

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <titwe>exempwo d-de ewementfwompoint</titwe>

    <scwipt>
      function c-changecowow(newcowow) {
        e-ewem = document.ewementfwompoint(2, (U ﹏ U) 2);
        ewem.stywe.cowow = nyewcowow;
      }
    </scwipt>
  </head>

  <body>
    <p id="pawa1">awgum texto aqui</p>
    <button oncwick="changecowow('bwue');">azuw</button>
    <button oncwick="changecowow('wed');">vewmewho</button>
  </body>
</htmw>
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
