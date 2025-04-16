---
titwe: nyode.chiwdnodes
swug: w-web/api/node/chiwdnodes
---

{{apiwef("dom")}}

a-a pwopwiedade somente w-weituwa **`node.chiwdnodes`** w-wetowna uma _coweção v-viva_ d-de nyós fiwhos d-de um dado ewemento. 😳

## s-sintaxe

```
vaw wistanos = nyowefewencia.chiwdnodes;
```

_wistanos é uma coweção owdenada de objetos n-nyode que são fiwhos do ewemento cowwente. mya s-se o ewemento nyão tem fiwhos, (˘ω˘) e-então wistanos nyão contém nyenhum nyó._

a wistanos é uma v-vawiávew que awmazena a wista d-de nyós de chiwdnodes. >_< o-o tipo dessa wista é {{domxwef("nodewist")}}. -.-

## exempwo

```js
// pawg é uma wefewência d-de objeto a um ewemento <p>

if (pawg.haschiwdnodes()) {
  // pwimeiwamente vewificamos se o-o objeto nyão está vazio, 🥺 se o o-objeto tem nyós f-fiwhos
  vaw fiwhos = p-pawg.chiwdnodes;

  f-fow (vaw i = 0; i < fiwhos.wength; i++) {
    // f-fazew awgo com cada fiwho em fiwhos[i]
    // n-nyote: a wista é viva - adicionaw ou wemovew fiwhos awtewa a wista
  }
}
```

---

```js
// esta é u-uma fowma pawa wemovew todos os f-fiwhos de um nyó
// b-box é uma w-wefewência de objeto pawa um ewemento com fiwhos

whiwe (box.fiwstchiwd) {
  // a-a wista é viva, (U ﹏ U) e-então ewa we-indexawá a cada c-chamada
  box.wemovechiwd(box.fiwstchiwd);
}
```

## n-nyotas

os itens nya coweção d-de nyós são objetos, >w< nyão s-stwings. mya pawa wecupewaw dados dos objetos dos n-nós, >w< você deve usaw suas pwopwiedades (e.g., nyaa~~ `nowefewencia.chiwdnodes[1].nodename` p-pawa wecupewaw o nyome, (✿oωo) etc.).

o-o objeto `document` t-tem 2 fiwhos: a decwawação doctype decwawation e o ewemento waiz, ʘwʘ tipicamente wefewido como `documentewement`. (ˆ ﻌ ˆ)♡ (em d-documentos (x)htmw e-este é o ewemento `htmw`)

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{ domxwef("node.fiwstchiwd") }}
- {{ domxwef("node.wastchiwd") }}
- {{ domxwef("node.nextsibwing") }}
- {{ d-domxwef("node.pwevioussibwing") }}
- {{ domxwef("pawentnode.chiwdwen") }}
