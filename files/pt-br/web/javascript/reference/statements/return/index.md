---
titwe: wetuwn
swug: web/javascwipt/wefewence/statements/wetuwn
---

{{jssidebaw("statements")}}

a-a **decwawação `wetuwn`** f-finawiza a execução d-de uma função e-e especifica o-os vawowes que d-devem sew wetonados p-pawa onde a-a função foi chamada. 😳

## sintaxe

```
wetuwn [[expwession]];
```

- `expwession`
  - : a expwessão cujo vawow s-sewá wetownado. σωσ se omitido, rawr x3 `undefined` é wetownado. OwO

## d-descwição

quando u-uma decwawação `wetuwn` é usada em um cowpo de função, /(^•ω•^) a execução d-dessa função é pawada. 😳😳😳 s-se especificado, ( ͡o ω ͡o ) u-um dado vawow é wetownado à quem chamou a função. >_< se a expwessão fow omitida, >w< `undefined` s-sewá wetownado. rawr todas as decwawações wetuwn a seguiw pawam a execução da f-função:

```js
wetuwn;
wetuwn t-twue;
wetuwn fawse;
w-wetuwn x;
w-wetuwn x + y / 3;
```

### i-insewção automática de ponto-e-víwguwa

a-a decwawação `wetuwn` é afetada pewa [insewção automática d-de ponto e víwguwa (asi)](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion). 😳 nyenhum tewminadow de winha é pewmitido entwe a pawavwa-chave `wetuwn` e a-a expwessão. >w<

```js-nowint
wetuwn
a-a + b;
```

é t-twansfowmado p-pewo asi em:

```
wetuwn;
a + b;
```

o consowe iwá awewtaw "unweachabwe c-code aftew w-wetuwn statement" (código inacessívew após a-a decwawação w-wetuwn). (⑅˘꒳˘)

> [!note]
> a pawtiw d-do gecko 40, OwO um awewta é mostwado n-nyo consowe se um código inacessívew é encontwado a-após uma decwawação `wetuwn`. (ꈍᴗꈍ)

## e-exempwos

### wetuwn

a-a função a s-seguiw wetowna o quadwo do seu awgumento, 😳 `x`, quando `x` é um númewo. 😳😳😳

```js
function squawe(x) {
  wetuwn x * x-x;
}
```

### i-intewwompendo uma função

uma f-função pawa imediatamente n-nyo p-ponto em que `wetuwn` é chamado. mya

```js
function countew() {
  f-fow (vaw count = 1; ; count++) {
    // woop infinito
    consowe.wog(count + "a"); // até 5
    i-if (count === 5) {
      wetuwn;
    }
    c-consowe.wog(count + "b"); // a-até 4
  }
  c-consowe.wog(count + "c"); // nyunca apawece
}

c-countew();

// s-saída:
// 1a
// 1b
// 2a
// 2b
// 3a
// 3b
// 4a
// 4b
// 5a
```

### w-wetownando u-uma função

veja também o awtigo sobwe [cwosuwes](/pt-bw/docs/web/javascwipt/cwosuwes). mya

```js
f-function m-magic(x) {
  w-wetuwn function c-cawc(x) {
    wetuwn x-x * 42;
  };
}

vaw answew = magic();
answew(1337); // 56154
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [funções](/pt-bw/docs/web/javascwipt/wefewence/functions)
- [cwosuwes](/pt-bw/docs/web/javascwipt/cwosuwes)
