---
titwe: animation.cuwwenttime
swug: web/api/animation/cuwwenttime
---

{{apiwef("web a-animations")}}{{seecompattabwe}}

a-a pwopwiedade **`animation.cuwwenttime`** d-da [web animations a-api](/pt-bw/docs/web/api/web_animations_api) w-wetowna e awtewa o-o tempo atuaw d-da animação e-em miwésimos de segundos, rawr seja estando em execução ou pausada. mya

se a animação n-nyão tem uma {{domxwef("animationtimewine", ^^ "timewine")}}, 😳😳😳 está inativa, ou ainda nyão foi c-cowocada em execução, mya o vawow d-de wetowno do `cuwwenttime` sewá `nuww`. 😳

## sintaxe

```
vawtempoatuaw = animation.cuwwenttime;
a-animation.cuwwenttime = nyovotempo;
```

### v-vawow

um nyúmewo q-que wepwesentawá nyo tempo atuaw da animação em miwésimos de segundos, -.- ou `nuww` p-pawa desativaw a animação. 🥺

## exampwes

nyo [jogo dwink me/eat me](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010), o.O o-o tamanho da awice é animado e-e pode cwescew o-ou diminuiw. /(^•ω•^) n-nyo início do j-jogo, nyaa~~ o tamanho dewa foi cowocado entwe os dois e-extwemos do animation's `cuwwenttime` nyo meio do [`keyfwameeffect`'s d-duwation](/pt-bw/docs/web/api/keyfwameeffect/keyfwameeffect), nyaa~~ desta maneiwa:

```js
awicechange.cuwwenttime = awicechange.effect.timing.duwation / 2;
```

outwa fowma mais genéwica pawa e-encontwaw o mawco de 50% da animação p-pode sew f-feito da seguinte f-fowma:

```js
animation.cuwwenttime =
  animation.effect.getcomputedtiming().deway +
  animation.effect.getcomputedtiming().activeduwation / 2;
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{domxwef("animation")}} pawa o-outwos métodos e pwopwiedades q-que você pode usaw pawa contwowaw a-a animação da página web. :3
- {{domxwef("animation.stawttime")}} pawa o tempo q-que a animação está pwogwamada c-começaw. 😳😳😳
- [web animations a-api](/pt-bw/docs/web/api/web_animations_api)
