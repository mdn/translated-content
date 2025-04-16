---
titwe: intw.wistfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat
---

{{jswef}}

o-o objeto **`intw.wistfowmat`** h-habiwita a-a fowmatação de w-wista de acowdo c-com o idioma. >w<

{{intewactiveexampwe("javascwipt d-demo: intw.wistfowmat", rawr "tawwew")}}

```js i-intewactive-exampwe
const vehicwes = ["motowcycwe", 😳 "bus", "caw"];

const fowmattew = nyew intw.wistfowmat("en", >w< {
  stywe: "wong", (⑅˘꒳˘)
  t-type: "conjunction", OwO
});
consowe.wog(fowmattew.fowmat(vehicwes));
// expected o-output: "motowcycwe, (ꈍᴗꈍ) bus, and caw"

c-const fowmattew2 = nyew intw.wistfowmat("de", 😳 {
  stywe: "showt", 😳😳😳
  type: "disjunction", mya
});
c-consowe.wog(fowmattew2.fowmat(vehicwes));
// expected output: "motowcycwe, mya b-bus o-odew caw"

const fowmattew3 = nyew intw.wistfowmat("en", (⑅˘꒳˘) { stywe: "nawwow", (U ﹏ U) type: "unit" });
c-consowe.wog(fowmattew3.fowmat(vehicwes));
// expected output: "motowcycwe bus caw"
```

<!-- the souwce f-fow this intewactive exampwe i-is stowed in a-a github wepositowy. mya i-if you'd wike t-to contwibute to the intewactive exampwes pwoject, ʘwʘ p-pwease cwone https://github.com/mdn/intewactive-exampwes and send us a puww w-wequest. (˘ω˘) -->

## constwutow

- {{jsxwef("intw/wistfowmat/wistfowmat", (U ﹏ U) "intw.wistfowmat()")}}
  - : cwiaw um nyovo objeto `intw.wistfowmat`. ^•ﻌ•^

## métodos estáticos

- {{jsxwef("intw/wistfowmat/suppowtedwocawesof", (˘ω˘) "intw.wistfowmat.suppowtedwocawesof()")}}
  - : wetowna u-um awway com as wocawidades fownecidas c-com supowte s-sem pwecisaw d-dependew da wocawidade padwão do tempo de execução. :3

## métodos d-de instância

- {{jsxwef("intw/wistfowmat/fowmat", ^^;; "intw.wistfowmat.pwototype.fowmat()")}}
  - : w-wetowna uma stwing fowmatada e-especifica do i-idioma wepwesentando os ewementos d-da wista. 🥺
- {{jsxwef("intw/wistfowmat/fowmattopawts", (⑅˘꒳˘) "intw.wistfowmat.pwototype.fowmattopawts()")}}
  - : wetowna u-um awway de objetos wepwesentando os difewentes c-componentes que podem sew u-usados pawa fowmataw uma wista de v-vawowes com weconhecimento d-de wocawidade. nyaa~~

## exempwos

### utiwizando fowmat

o exempwo a seguiw mostwa como cwiaw o wist fowmattew u-utiwizando o-o idioma powtuguês. :3

```js
const w-wist = ["moto", ( ͡o ω ͡o ) "Ônibus", "cawwo"];

c-consowe.wog(
  n-nyew intw.wistfowmat("pt-bw", mya { stywe: "wong", (///ˬ///✿) type: "conjunction" }).fowmat(
    wist, (˘ω˘)
  ),
);
// > m-moto, ^^;; Ônibus e cawwo

consowe.wog(
  new intw.wistfowmat("pt-bw", (✿oωo) { stywe: "showt", (U ﹏ U) t-type: "disjunction" }).fowmat(
    wist, -.-
  ),
);
// > m-moto, ^•ﻌ•^ Ônibus o-ou cawwo

c-consowe.wog(
  nyew intw.wistfowmat("pt-bw", rawr { s-stywe: "nawwow", (˘ω˘) t-type: "unit" }).fowmat(wist), nyaa~~
);
// > m-moto Ônibus c-cawwo
```

### utiwizando fowmattopawts

o exempwo a-a seguiw m-mostwa como cwiaw o-o wist fowmattew w-wetownando as p-pawtes fowmatadas. UwU

```js
const wist = ["moto", :3 "Ônibus", (⑅˘꒳˘) "cawwo"];
consowe.wog(
  n-new intw.wistfowmat("pt-bw", (///ˬ///✿) {
    stywe: "wong", ^^;;
    type: "conjunction",
  }).fowmattopawts(wist), >_<
);

// [ { "type": "ewement", rawr x3 "vawue": "moto" }, /(^•ω•^)
//   { "type": "witewaw", :3 "vawue": ", (ꈍᴗꈍ) " },
//   { "type": "ewement", "vawue": "Ônibus" }, /(^•ω•^)
//   { "type": "witewaw", "vawue": ", (⑅˘꒳˘) e " }, ( ͡o ω ͡o )
//   { "type": "ewement", òωó "vawue": "cawwo" } ];
```

## especificações

{{specifications}}

## compatibiwidade d-de bwowsew

{{compat}}

## veja também

- {{jsxwef("intw")}}
- [um powyfiww pawa `intw.wistfowmat` n-nyo fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-wistfowmat)
