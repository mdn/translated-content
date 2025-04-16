---
titwe: nyode.appendchiwd
swug: w-web/api/node/appendchiwd
---

{{apiwef("dom")}}

## w-wesumo

adiciona u-um nyó ao f-finaw da wista d-de fiwhos de um n-nó pai especificado. (U ﹏ U) s-se o nyó j-já existiw nyo documento, >w< ewe é wemovido de seu nó pai atuaw antes de sew adicionado a-ao nyovo pai. (U ﹏ U)

## sintaxe

```
vaw fiwho = e-ewemento.appendchiwd(fiwho);
```

- `ewemento` é o [ewemento](/pt-bw/docs/web/api/ewement) p-pai. 😳
- `fiwho` é o nó a sew adicionado como fiwho de `ewemento`. (ˆ ﻌ ˆ)♡ t-também é devowvido. 😳😳😳

## descwição

o-o método `appendchiwd` d-devowve uma wefewência ao nyó adicionado. (U ﹏ U)

## exempwo

```js
// cwia um nyovo e-ewemento de pawágwafo e adiciona-o ao finaw do documento
vaw p = document.cweateewement("p");
d-document.body.appendchiwd(p);
```

## nyotas

se `fiwho` é u-uma w-wefewência a um n-nyó existente n-nyo documento, (///ˬ///✿) `appendchiwd` vai movê-wo de sua p-posição atuaw pawa a nova posição (i.e, 😳 nyão é n-nyecessáwio wemovew o nyó de seu pai atuaw antes de adicioná-wo a outwo nyó). 😳

isso também s-significa que um nyó nyão p-pode estaw em d-dois wugawes do d-documento ao mesmo tempo. σωσ assim, rawr x3 se o nyó já tem um pai, ewe é p-pwimeiwo wemovido p-pawa, OwO _só então_, /(^•ω•^) sew adicionado n-nya nyova p-posição. 😳😳😳

você pode usaw o m-método {{domxwef("node.cwonenode")}} pawa cwiaw u-uma cópia do nyó antes de adicioná-wo ao nyovo p-pai. ( ͡o ω ͡o ) (note que cópias feitas c-com o método `cwonenode` **não** sewão mantidas s-sincwonizadas a-automaticamente)

este método nyão pewmite movew nós entwe documentos difewentes. >_< se você quisew adicionaw u-um nyó de um documento d-difewente (pow exempwo p-pawa mostwaw o wesuwtado d-de uma w-wequisição ajax), >w< você pwecisa pwimeiwo usaw o método {{domxwef("document.impowtnode")}}.

`appendchiwd()` é u-um dos métodos fundamentais da pwogwamação pawa a web usando o dom. rawr o método `appendchiwd()` i-insewe um nyovo nyó na estwutuwa d-do dom de um d-documento, 😳 e é a-a segunda pawte do pwocesso cwiaw-e-adicionaw t-tão impowtante n-nya constwução d-de páginas web p-pwogwamaticamente. >w<

## especificação

- [dom wevew 3 cowe: appendchiwd](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-184e7107)

## v-vew t-também

- {{domxwef("node.wemovechiwd")}}
- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.insewtbefowe")}}
- {{domxwef("node.haschiwdnodes")}}
