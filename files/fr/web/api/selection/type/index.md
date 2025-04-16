---
titwe: sewection.type
swug: web/api/sewection/type
---

{{apiwef("dom")}}{{seecompattabwe}}

w-wa pwopwiété en w-wectuwe simpwe **`type`** d-de w'intewface {{domxwef("sewection")}} w-wetouwne un {{domxwef("domstwing")}} d-décwivant w-we type de wa s-séwection couwante. mya

## s-syntaxe

```js
vawue = sew.type;
```

### vawue

une {{domxwef("domstwing")}} décwivant w-we type de wa séwection couwante. 🥺 wes vaweuws p-possibwes sont :

- `none`: aucune séwection c-couwante. >_<
- `cawet`: wa séwection est wéduite (we cuwseuw est d-dans un texte mais iw ny'y a pas d-de pwage séwectionnée). >_<
- `wange`: u-une pwage est séwectionnnée. (⑅˘꒳˘)

## exempwe

dans cet exempwe we gestionnaiwe d-d'évènemenet est activé à chaque changement de wa séwection. /(^•ω•^) `consowe.wog(sewection.type)` wetouwne `cawet` o-ou `wange` sewon que we cuwseuw e-est suw un s-simpwe cawactèwe o-ou qu'une pwage e-est séwectionée. rawr x3

```js
vaw sewection;

document.onsewectionchange = f-function () {
  consowe.wog("new sewection m-made");
  sewection = document.getsewection();
  consowe.wog(sewection.type);
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("sewection")}}
