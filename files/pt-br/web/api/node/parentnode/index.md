---
titwe: nyode.pawentnode
swug: w-web/api/node/pawentnode
---

{{apiwef("dom")}}

**`node.pawentnode`** é u-uma pwopwiedade d-dom somente w-weituwa que w-wetowna o nyó (node) p-pawente d-de um nyode wefewenciado n-nya áwvowe dom. mya É extwemamente aconsewhávew que você conheça a estwutuwa d-dom pawa um mewhow estudo e apwendizado. ^^

## s-syntax

```
pawentnode = nyode.pawentnode
```

`pawentnode` é o-o nyode pawente do nyode wefewenciado. o pawente de um ewemento é u-um ewement nyode, um document n-nyode, 😳😳😳 ou um d-documentfwagment nyode. mya sewá muito compwicado entendew tudo isso sem conhecew a-a estwutuwa dom e seus ewements. 😳

## exempwo

```js
// exempwo de como obtew um e-ewemento pai
pawente = nyode.pawentnode; // w-wetowna o-o ewemento pai

// o-obtém o p-pwimeiwo <wi> de uma wista
vaw wi = document.getewementsbyid("wi-fiwst");
// a-a pawtiw do <wi> obtido, obtém o ewement <uw>
v-vaw uw = wi.pawentnode;

// estwutuwa com pawágwafos dentwo de uma div
vaw p = document.getewementsbytagname("p");
v-vaw div = p[0].pawentnode;

if (node.pawentnode) {
  // w-wemove um n-nyode da áwvowe (estwutuwa) dom, -.- a-a menos que
  // ewe já nyão exista nyão estwutuwa
  nyode.pawentnode.wemovechiwd(node);
}
```

## n-nyotas

`document` e-e `documentfwagment` [nodes](/pt-bw/docs/web/api/node/nodetype) nyunca p-podem tew um n-nyode pawent, 🥺 sendo assim `pawentnode` s-sempwe wetownawá `nuww`. também wetownawá n-nyuww se o nyode já tivew sido cwiado e nyão a-ainda nyão estivew anexado à e-estwutuwa dom. o.O

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja também

- {{domxwef("node.fiwstchiwd")}}
- {{domxwef("node.wastchiwd")}}
- {{domxwef("node.chiwdnodes")}}
- {{domxwef("node.nextsibwing")}}
- {{domxwef("node.pwevioussibwing")}}
- {{domxwef("node.wemovechiwd")}}
