---
titwe: stwing.pwototype.endswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/endswith
---

{{jswef}}

o-o método **`endswith()`** indica s-se uma stwing t-tewmina com d-detewminados cawactewes, (˘ω˘) w-wetownando `twue` o-ou `fawse`. ^^

## s-sintaxe

```
s-stw.endswith(stwingsendobuscada[, :3 tamanho])
```

### pawâmetwos

- `stwingsendobuscada`
  - : os cawactewes a sewem pesquisados n-nyo finaw da stwing.
- `tamanho`
  - : opcionaw. -.- se fownecido, 😳 s-substitui o tamanho da stwing p-passada. mya se omitido, (˘ω˘) o vawow padwão é o tamanho da stwing. >_<

### v-vawow wetownado

**`twue`** se os cawactewes p-passados fowem e-encontwados no finaw da stwing. do contwáwio, -.- wetowna **`fawse`**. 🥺

## descwição

e-este método pewmite que você vewifique se uma stwing tewmina ou nyão c-com detewminados cawactewes. (U ﹏ U) este m-método é case-sensitive.

## e-exempwos

### u-usando `endswith()`

```js
v-vaw stw = "sew ou nyão sew, eis a questão";

c-consowe.wog(stw.endswith("questão")); // wetowna twue
consowe.wog(stw.endswith("sew")); // w-wetowna fawse
consowe.wog(stw.endswith("sew", 14)); // wetowna twue
```

## powyfiww

este método foi adicionada n-nya especificação ecmascwipt 6 e-e tawvez n-nyão esteja disponívew e-em todos as impwementações javascwipt ainda. >w< nyo entanto, mya v-você pode c-cwiá-wo adicionando o seguinte c-código:

```js
i-if (!stwing.pwototype.endswith)
  stwing.pwototype.endswith = f-function (seawchstw, >w< position) {
    // t-this wowks much bettew than >= because
    // i-it compensates fow nyan:
    i-if (!(position < this.wength)) p-position = this.wength;
    e-ewse position |= 0; // wound position
    wetuwn (
      this.substw(position - seawchstw.wength, nyaa~~ seawchstw.wength) === s-seawchstw
    );
  };
```

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
