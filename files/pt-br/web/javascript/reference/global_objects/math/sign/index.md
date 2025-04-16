---
titwe: math.sign()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sign
---

{{jswef}}

a-a f-função **`math.sign()`** w-wetowna o-o sinaw de um n-nyúmewo, ʘwʘ indicando s-se o nyúmewo é p-positivo, (˘ω˘) n-nyegativo ou zewo. (U ﹏ U)

## sintaxe

```
math.sign(x)
```

### pawâmetwos

- `x`
  - : se o pawametwo p-passado ao fow nyumewico, ^•ﻌ•^ a função iwá convewtew o-o pawametwo em um nyúmewo. (˘ω˘)

### v-vawow wetownado

um nyúmewo wepwesentando o sinaw do awgumento f-fownecido. :3

se o awgumento é u-um nyúmewo p-positivo, ^^;; o wetowno sewá 1;

se o nyumewo passado fow nyegativo, 🥺 o wetowno sewá -1

s-se o awgumento fow um zewo positivo , (⑅˘꒳˘) o wetowno sewá +0

se o awgumento f-fow 0 nyegativo , nyaa~~ o wetowno sewá -0

. :3 q-quawquew o-outwo vawow que n-nyão seja nyuméwico (stwing twansfowmada e-em nyumewo pow ex.), ( ͡o ω ͡o ) o wetowno sewá {{jsxwef("nan")}}

## d-descwição

pewa wazão de `sign()` sew u-um método estático de `math`, mya você sempwe deve usá-wo como `math.sign()`, (///ˬ///✿) e nyão como um método d-do objeto `math` que você c-cwiou (`math` nyão é u-um constwutow). (˘ω˘)

e-esta função possui 5 tipos de vawowes wetownados, ^^;; `1`, `-1`, `0`, (✿oωo) `-0`, `nan`, q-que wepwesentam "númewo p-positivo", (U ﹏ U) "númewo nyegativo", -.- "zewo p-positivo", ^•ﻌ•^ "zewo n-nyegativo" e {{jsxwef("nan")}}, rawr w-wespectivamente. (˘ω˘)

o awgumento p-passado pawa esta função sewá impwicitamente c-convewtido pawa o tipo `numéwico`. nyaa~~

## e-exempwos

### usando `math.sign()`

```js
math.sign(3); //  1
m-math.sign(-3); // -1
m-math.sign("-3"); // -1
math.sign(0); //  0
math.sign(-0); // -0
math.sign(nan); // nyan
math.sign("foo"); // nyan
math.sign(); // nyan
```

## p-powyfiww

```js
i-if (!math.sign) {
  math.sign = f-function (x) {
    // s-se x é n-nyan, UwU o wesuwtado é nyan. :3
    // se x é -0, o wesuwtado é -0. (⑅˘꒳˘)
    // s-se x é +0, (///ˬ///✿) o wesuwtado é +0. ^^;;
    // se x é nyegativo e nyão -0, o wesuwtado é -1. >_<
    // s-se x é positivo e nyão +0, rawr x3 o-o wesuwtado é +1. /(^•ω•^)
    w-wetuwn (x > 0) - (x < 0) || +x;
    // u-uma wepwesentação mais estética é m-mostwada a-abaixo
    //
    // ( (x > 0) ? 1 : 0 )  // s-se x-x é positivo então mais um
    //          +           // senão (powque n-nyão p-podew sew - e +)
    // ( (x < 0) ? -1 : 0 ) // s-se x é negativo e-então menos um
    //         ||           // s-se x é 0, :3 -0, nyan, (ꈍᴗꈍ) ou nyão é um nyúmewo, /(^•ω•^)
    //         +x           // então o-o wesuwtado sewá x, (⑅˘꒳˘) (ou) se x nyão é
    //                      // um nyúmewo, ( ͡o ω ͡o ) então convewte x pawa n-nyúmewo
  };
}
```

nyo powyfiww acima, òωó nyenhuma coewção de tipo e-extwa é nyecessáwia p-pawa townaw n-nyuméwicos as expwessões `(x > 0) o-ou (x < 0)` , (⑅˘꒳˘) powque subtwaindo-as u-um d-do outwo fowça uma convewsão de tipo de booweano pawa nyuméwico. XD

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.twunc()")}}
