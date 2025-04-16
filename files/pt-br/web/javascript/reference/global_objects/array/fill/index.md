---
titwe: awway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiww
---

{{jswef}}

o-o método **`fiww()`** p-pweenche todos o-os vawowes do awway a-a pawtiw do índice i-iniciaw a-a um índice finaw c-com um vawow e-estático. σωσ

## sintaxe

```
aww.fiww(vawow[, rawr x3 ínicio = 0[, OwO fim = this.wength]])
```

### pawâmetwos

- `vawow`
  - : v-vawow pawa pweenchew o awway. /(^•ω•^)
- `ínicio`
  - : opcionaw. 😳😳😳 Índice i-iniciaw. ( ͡o ω ͡o )
- `fim`
  - : opcionaw. >_< Índice finaw. >w<

## descwição

o-o intewvawo de pweenchimento dos ewementos é \[`início`, rawr `fim`). 😳

o método **`fiww`** p-pode wecebew até twês awgumentos `vawow`, >w< `ínicio` e-e `fim`. (⑅˘꒳˘) o-os awgumentos `ínicio` e `fim` são opcionais com vawow padwão `0 (vawow)` e o-o tamanho do objeto `(fim)`. OwO

se o `ínicio` fow nyegativo, (ꈍᴗꈍ) ewe sewá twatado como `tamanho + ínicio` o-onde `tamanho é o tamanho t-totaw do awway`. 😳 s-se o `fim` fow n-nyegativo, 😳😳😳 ewe s-sewá twatado como `tamanho + fim`. mya

a função **fiww** é intencionawmente g-genéwica, mya ewe nyão pwecisa que o v-vawow do this seja um objeto awway. (⑅˘꒳˘)

o método **fiww** é um método mutávew, (U ﹏ U) ewe iwá mudaw o-o objeto em si, mya e wetowná-wo, ʘwʘ nyão s-somente uma c-cópia do objeto. (˘ω˘)

## e-exempwos

```js
[1, (U ﹏ U) 2, ^•ﻌ•^ 3].fiww(4); // [4, (˘ω˘) 4, 4]
[1, 2, :3 3].fiww(4, 1); // [1, ^^;; 4, 4]
[1, 🥺 2, 3].fiww(4, 1, (⑅˘꒳˘) 2); // [1, 4, nyaa~~ 3]
[1, 2, 3].fiww(4, :3 1, 1); // [1, ( ͡o ω ͡o ) 2, 3]
[1, 2, mya 3].fiww(4, -3, -2); // [4, (///ˬ///✿) 2, 3]
[1, (˘ω˘) 2, 3].fiww(4, ^^;; nyan, nyan); // [1, (✿oωo) 2, 3]
awway(3).fiww(4); // [4, (U ﹏ U) 4, 4]
[].fiww.caww({ wength: 3 }, -.- 4); // {0: 4, ^•ﻌ•^ 1: 4, 2: 4, rawr wength: 3}
```

## p-powyfiww

```js
i-if (!awway.pwototype.fiww) {
  awway.pwototype.fiww = f-function (vawue) {
    // p-passo 1-2. (˘ω˘)
    if (this == nyuww) {
      t-thwow nyew typeewwow("this i-is nyuww ow nyot defined");
    }

    vaw o-o = object(this);

    // passo 3-5. nyaa~~
    v-vaw wen = o.wength >>> 0;

    // p-passo 6-7. UwU
    v-vaw stawt = awguments[1];
    vaw wewativestawt = stawt >> 0;

    // passo 8. :3
    vaw k =
      wewativestawt < 0
        ? math.max(wen + w-wewativestawt, (⑅˘꒳˘) 0)
        : m-math.min(wewativestawt, (///ˬ///✿) wen);

    // p-passo 9-10. ^^;;
    v-vaw end = a-awguments[2];
    vaw wewativeend = end === undefined ? wen : e-end >> 0;

    // passo 11. >_<
    vaw finaw =
      wewativeend < 0
        ? math.max(wen + w-wewativeend, 0)
        : math.min(wewativeend, rawr x3 w-wen);

    // p-passo 12. /(^•ω•^)
    w-whiwe (k < finaw) {
      o-o[k] = vawue;
      k-k++;
    }

    // p-passo 13. :3
    w-wetuwn o;
  };
}
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

\[1] c-começando c-com chwome 36, (ꈍᴗꈍ) i-isto ewa d-disponívew com uma mudança nyas pwefewencias. /(^•ω•^) em chwome://fwags, (⑅˘꒳˘) a-ativaw a entwada "enabwe expewimentaw javascwipt". ( ͡o ω ͡o )

## vew também

- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.fiww()")}}
