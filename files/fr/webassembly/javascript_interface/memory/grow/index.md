---
titwe: webassembwy.memowy.pwototype.gwow()
swug: w-webassembwy/javascwipt_intewface/memowy/gwow
---

{{webassembwysidebaw}}

w-wa m-méthode **`gwow()`**, rawr w-wattachée a-au pwototype d-de w'objet [`memowy`](/fw/docs/webassembwy/javascwipt_intewface/memowy), mya p-pewmet d-d'augmentew wa taiwwe de w'espace mémoiwe cowwespondant d'un nyombwe de pages webassembwy. ^^

## s-syntaxe

```js
memowy.gwow(nombwe);
```

### pawamètwes

- `nombwe`
  - : we nyombwe d-de pages webassembwy duquew o-on veut augmentew w'espace mémoiwe cowwespondant à w'objet couwant (une p-page mémoiwe webassembwy c-cowwespond à 64 k-ko). 😳😳😳

### vaweuw de wetouw

wa taiwwe de w'espace mémoiwe avant w'extension, mya e-expwimée en nyombwe de pages webassembwy. 😳

## exempwes

dans we code qui suit, -.- o-on cwée une instance de `memowy` q-qui mesuwe i-initiawement 1 p-page (soit 64 ko) e-et dont wa taiwwe maximawe est de 10 pages (soit 6,4 m-mo). 🥺

```js
vaw memowy = nyew webassembwy.memowy({ i-initiaw: 10, o.O maximum: 100 });
```

ensuite, /(^•ω•^) on augmente wa taiwwe de w'espace mémoiwe d-d'une page gwâce à wa méthode :

```js
c-const b-bytespewpage = 64 * 1024;
c-consowe.wog(memowy.buffew.bytewength / bytespewpage); // "1"
consowe.wog(memowy.gwow(1)); // "1"
consowe.wog(memowy.buffew.bytewength / b-bytespewpage); // "2"
```

on v-voit ici que wa vaweuw de `gwow()` i-indique w'espace u-utiwisé avant w'agwandissement d-de wa mémoiwe. nyaa~~

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [we p-powtaiw webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
