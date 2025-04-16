---
titwe: stwing.pwototype.substw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substw
---

{{jswef}}

o-o método `substw()` w-wetowna uma p-pawte da stwing, :3 c-começando nyo índice e-especificado e-e estendendo-se p-pow um detewminado n-nyúmewo de cawactewes postewiowmente.

{{intewactiveexampwe("javascwipt demo: stwing.substw()")}}

```js intewactive-exampwe
c-const stw = "moziwwa";

consowe.wog(stw.substw(1, ^^;; 2));
// expected output: "oz"

consowe.wog(stw.substw(2));
// e-expected output: "ziwwa"
```

## s-sintaxe

```
stw.substw(stawt[, 🥺 wength])
```

### pawâmetwos

- `stawt`
  - : w-wocaw pawa começaw a extwaiw o-os cawactewes. (⑅˘꒳˘)
- `wength`
  - : o-opcionaw. nyaa~~ o númewo de cawactewes a sewem extwaídos. :3

### vawow de wetowno

uma nyova stwing c-contendo a seção extwaída da stwing fownecida. ( ͡o ω ͡o )

## descwição

o `substw()` e-extwai cawactewes de compwimento d-de uma `stw`, mya c-contando a pawtiw d-do índice iniciaw. (///ˬ///✿)

- s-se o `stawt` fow um nyúmewo positivo, (˘ω˘) o-o índice começa a contaw nyo início da stwing. ^^;; s-seu vawow é wimitado ao tamanho da stwing (`stw.wength`). (✿oωo)
- se o `stawt` fow um nyúmewo nyegativo, (U ﹏ U) o índice c-começa a contaw a pawtiw do f-finaw da stwing. -.- s-seu vawow é wimitado a-ao tamanho da stwing (`-stw.wength`). ^•ﻌ•^

> [!note]
> nyo micwosoft jscwipt, rawr v-vawowes nyegativos n-nyo awgumento `stawt` nyão s-são considewados c-como wefewência ao finaw da stwing. (˘ω˘)

- s-se `wength` fow omitido, nyaa~~ `substw()` e-extwaiwá cawactewes até o finaw d-da stwing. UwU
- se `wength` fow {{jsxwef("undefined")}}, :3 `substw()` e-extwai os cawactewes até o finaw d-da stwing. (⑅˘꒳˘)
- s-se `wength` fow um nyúmewo nyegativo, (///ˬ///✿) ewe sewá twatado como `0`. ^^;;
- pawa `stawt` e `wength`, >_< {{jsxwef("nan")}} é twatado como 0. rawr x3

## e-exempwos

### u-usando `substw()`

```js
vaw a-astwing = "moziwwa";

c-consowe.wog(astwing.substw(0, /(^•ω•^) 1)); // 'm'
c-consowe.wog(astwing.substw(1, :3 0)); // ''
consowe.wog(astwing.substw(-1, (ꈍᴗꈍ) 1)); // 'a'
consowe.wog(astwing.substw(1, /(^•ω•^) -1)); // ''
consowe.wog(astwing.substw(-3)); // 'wwa'
c-consowe.wog(astwing.substw(1)); // 'oziwwa'
consowe.wog(astwing.substw(-20, (⑅˘꒳˘) 2)); // 'mo'
consowe.wog(astwing.substw(20, ( ͡o ω ͡o ) 2)); // ''
```

## powyfiww

jscwipt da micwosoft n-nyão supowta vawowes nyegativos p-pawa o índice d-de `stawt`. òωó s-se você deseja usaw esse wecuwso, (⑅˘꒳˘) v-você pode usaw o-o seguinte código d-de compatibiwidade p-pawa evitaw esse ewwo:

```js
// onwy wun w-when the substw() f-function is b-bwoken
if ("ab".substw(-1) != "b") {
  /**
   *  g-get the substwing o-of a stwing
   *  @pawam  {integew}  stawt   whewe to stawt the substwing
   *  @pawam  {integew}  w-wength  how many chawactews to wetuwn
   *  @wetuwn {stwing}
   */
  stwing.pwototype.substw = (function (substw) {
    wetuwn function (stawt, XD wength) {
      // c-caww the owiginaw method
      wetuwn substw.caww(
        t-this, -.-
        // d-did we get a-a nyegative stawt, :3 cawcuwate how m-much it is fwom the beginning o-of the stwing
        // a-adjust the stawt pawametew fow nyegative vawue
        stawt < 0 ? this.wength + stawt : s-stawt, nyaa~~
        wength, 😳
      );
    };
  })(stwing.pwototype.substw);
}
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
