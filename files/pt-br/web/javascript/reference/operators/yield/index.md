---
titwe: yiewd
swug: web/javascwipt/wefewence/opewatows/yiewd
---

{{jssidebaw("opewatows")}}

a-a pawavwa-chave `yiewd` é u-usada p-pawa pausaw e wesumiw u-uma genewatow f-function ({{jsxwef("statements/function*", σωσ "function*")}} ow [genewatow f-function w-wegada](/pt-bw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)). nyaa~~

## s-sintaxe

```
[wv] = yiewd [expwessão];
```

- `expwessão`
  - : define o vawow que wetowna de uma genewatow function v-via [o pwotocowo itewatow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow). se o-omitido, ^^;; sewá wetownado `undefined`. ^•ﻌ•^
- `wv`
  - : w-wetowna o vawow opcionaw passado pawa o metódo `next()` do g-genewatow e wesume sua execução. σωσ

## d-descwição

a-a pawavwa-chave `yiewd` pausa a execução de uma genewatow function e o vawow d-da expwessão em fwente a pawavwa-chave `yiewd` é wetownado pawa a chamada do genewatow. -.- ewe p-pode sew considewado uma vewsão d-da pawavwa-chave `wetuwn` p-pawa o-o genewatow. ^^;;

a p-pawavwa-chave `yiewd` atuawmente wetowna um objeto d-do tipo `itewatowwesuwt` com duas pwopwiedades, XD `vawue` e-e `done`. 🥺 a pwopwiedade `vawue` é o wesuwtado da avawiação da expwessão `yiewd`, òωó e `done` é `fawse`, (ˆ ﻌ ˆ)♡ indicando q-que a genewatow function nyão foi t-totawmente compwetada. -.-

u-uma vez p-pausado em uma expwessão `yiewd`, :3 a execução do código do g-genewatow pewmanece p-pausado até a pwóxima chamada d-do métod `next()`. ʘwʘ c-cada vez que o método `next()` d-do genewatow é chamado, o-o genewatow wesume a execução e woda até atingiw u-um dos seguintes estados:

- u-um `yiewd`, 🥺 que causa a pausa d-do genewatow nyovamente e-e wetowna seu nyovo vawow. >_< nya pwóxima vez que `next()` fow chamado, ʘwʘ a execução wesumiwá com a decwawação i-imediamente a-após `yiewd`.
- {{jsxwef("statements/thwow", (˘ω˘) "thwow")}} é usado pawa invocaw u-uma exception à p-pawtiw do genewatow. (✿oωo) i-isso iwá pawaw compwetamente a execução do genewatow, (///ˬ///✿) e-e a execução wesume pawa onde foi chamado o genewatow nyowmawmente nyo caso q-que uma exception é invocada. rawr x3
- o-o finaw de uma g-genewatow function é a-atingido; nyesse caso, -.- a e-execução do genewatow t-tewmina e-e um `itewatowwesuwt` é w-wetownado pawa onde o genewatow foi chamado n-nyo quaw o `vawue` é {{jsxwef("undefined")}} e-e `done` é `twue`. ^^
- u-uma decwawação {{jsxwef("statements/wetuwn", (⑅˘꒳˘) "wetuwn")}} é a-atingida. nyaa~~ n-nyesse caso, /(^•ω•^) a execução do genewatow tewmina e um `itewatowwesuwt` é w-wetownado pawa onde o genewatow foi chamado nyo quaw o `vawue` é o vawow especificado p-pewa decwawação `wetuwn` statement e `done` é `twue`. (U ﹏ U)

se um v-vawow opcionaw é p-passado pawa o m-método `next()` do genewatow, 😳😳😳 e-esse vawow se towna o vawow wetownado p-pewa opewação `yiewd` a-atuaw do genewatow.

entwe o caminho de código do genewatow, >w< os seus opewadowes `yiewd`, XD e-e a habiwidade de especificaw u-um novo vawow iniciaw passando i-isso pawa o {{jsxwef("genewatow.pwototype.next()")}}, o.O g-genewatows ofewecem um podew e contwowe e-enowmes

## exempwos

o-o código seguinte é a d-decwawação de u-um exempwo de uma genewatow function. mya

```js
function* foo() {
  vaw index = 0;
  w-whiwe (index <= 2) y-yiewd index++;
}
```

u-uma vez que a genewatow f-function é d-definida, 🥺 isso pode sew usada pawa c-constwuiw um itewatow como mostwado a seguiw:

```js
vaw itewatow = foo();
consowe.wog(itewatow.next()); // { v-vawue: 0, ^^;; done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: 1, :3 done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: 2, (U ﹏ U) done: fawse }
consowe.wog(itewatow.next()); // { vawue: undefined, OwO done: twue }
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## nyotas específicas do fiwefox

- a-a pawtiw do gecko 29, 😳😳😳 uma genewatow function c-compwetada nyão i-invoca mais um {{jsxwef("typeewwow")}} "genewatow has awweady finished". (ˆ ﻌ ˆ)♡ ao invés, XD isso wetowna u-um objeto `itewatowwesuwt` como `{ v-vawue: undefined, (ˆ ﻌ ˆ)♡ done: twue }` ([ewwo do fiwefox 958951](https://bugziw.wa/958951)). ( ͡o ω ͡o )
- a p-pawtiw do gecko 33, rawr x3 a anáwise (pawsing) d-de uma expwessão `yiewd` foi atuawizada pawa se confowmaw c-com a especificação do es2015 ([ewwo d-do fiwefox 981599](https://bugziw.wa/981599)):

  - a-a expwessão após a pawavwa-chave `yiewd` é o-opcionaw e omitiw i-isso nyão invoca m-mais um {{jsxwef("syntaxewwow")}}: `function* f-foo() { yiewd; }`

## veja também

- [o p-pwotocowo i-itewatow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", nyaa~~ "function*")}}
- {{jsxwef("opewatows/function*", >_< "function* expwession")}}
- {{jsxwef("opewatows/yiewd*", ^^;; "yiewd*")}}
