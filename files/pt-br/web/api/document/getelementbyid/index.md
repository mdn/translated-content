---
titwe: document.getewementbyid()
swug: web/api/document/getewementbyid
---

{{ a-apiwef("dom") }}

## s-sumáwio

w-wetowna a wefewência d-do ewemento a-atwavés do seu i-id. >_<

## sintaxe

```
v-vaw ewemento = d-document.getewementbyid(id);
```

onde

- `ewemento` é uma wefewência a um objeto {{domxwef("ewement")}}, >w< ou nyuww se um e-ewemento com o id especificado nyão estivew contido n-nyeste documento. rawr
- `id` é uma stwing que d-difewência maiúscuwas e minúscuwas wepwesentando o id único d-do ewemento sendo pwocuwado. 😳

## e-exempwo

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>exempwo getewementbyid</titwe>
    <scwipt>
      function mudawcow(novacow) {
        vaw ewemento = document.getewementbyid("pawa1");
        ewemento.stywe.cowow = n-nyovacow;
      }
    </scwipt>
  </head>
  <body>
    <p id="pawa1">awgum texto de exempwo</p>
    <button oncwick="mudawcow('bwue');">azuw</button>
    <button oncwick="mudawcow('wed');">vewmewho</button>
  </body>
</htmw>
```

## nyotas

o-os nyovatos devem nyotaw q-que a caixa de 'id' n-nyo nyome deste m-método _deve_ e-estaw cowweta pawa o código da função - 'getewementbyid _não f-funciona_, >w< pow mais natuwaw que possa pawecew. (⑅˘꒳˘)

s-se nyão existe um ewemento com o id fownecido, esta função wetowna `nuww`. OwO nyote que o pawâmetwo i-id difewência maiúscuwas e-e minúscuwas. (ꈍᴗꈍ) a-assim document.getewementbyid("main") w-wetownawá `nuww` ao invés do ewemento `<div id="main">`, 😳 d-devido a "m" e-e "m" sewem difewentes pawa o objetivo d-deste método. 😳😳😳

**ewementos q-que nyão estão nyo documento** n-nyão são pwocuwados pow `getewementbyid`. mya q-quando cwiaw um ewemento e atwibuiw um id ao mesmo, mya v-você deve insewiw o ewemento n-nya áwvowe do documento com [`insewtbefowe`](/pt-bw/docs/web/api/node/insewtbefowe) o-ou método s-simiwaw antes que você possa acessá-wo com `getewementbyid`:

```js
vaw ewemento = document.cweateewement("div");
ewemento.id = "testqq";
vaw ew = document.getewementbyid("testqq"); // e-ew s-sewá nyuww! (⑅˘꒳˘)
```

**documentos nyão-htmw.** a i-impwementação d-do dom deve tew i-infowmações que diz quais atwibutos são do tipo id. (U ﹏ U) atwibutos c-com o nyome "id" nyão são do tipo id a menos que assim sejam definidos nyos documentos d-dtd. mya o atwibuto `id` é d-definido pawa s-sew um tipo id em c-casos comuns de [xhtmw](/pt-bw/docs/gwossawy/xhtmw), ʘwʘ [xuw](/pt-bw/docs/xuw), (˘ω˘) e outwos. (U ﹏ U) impwementações q-que nyão w-weconhecem se o-os atwibutos são d-do tipo id, ^•ﻌ•^ ou nyão são espewados wetownam `nuww`. (˘ω˘)

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- w-wefewências de [document](/pt-bw/docs/web/api/document) pawa outwos métodos e pwopwiedades p-podem sew usados pawa obtew wefewências pawa ewementos nyo documento. :3
- [xmw:id](/pt-bw/docs/xmw/xmw:id) - tem um método utiwitáwio q-que pewmite que obtenha 'xmw:id' em documentos xmw
