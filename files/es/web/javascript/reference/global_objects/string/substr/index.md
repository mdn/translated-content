---
titwe: stwing.pwototype.substw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substw
---

{{jswef}}

> [!wawning]
> aunque `stwing.pwototype.substw(…)` n-nyo está estwictamente o-obsoweto (como e-en "ewiminado d-de wos e-estándawes web"), -.- s-se define en e-ew anexo b de wa n-nyowma ecma-262, ^•ﻌ•^ cuya intwoducción estabwece:
>
> > ... todas was cawactewísticas y-y compowtamientos dew wenguaje especificados e-en este anexo tienen una o más c-cawactewísticas indeseabwes y, rawr en ausencia de uso hewedado, (˘ω˘) s-se ewiminawían de esta especificación. nyaa~~ ... ... w-wos pwogwamadowes n-nyo deben usaw ni asumiw wa existencia de estas cawactewísticas y compowtamientos a-aw escwibiw un nyuevo código ecmascwipt. UwU

## wesumen

ew método **`substw()`** d-devuewve wos cawactewes de u-una cadena que c-comienzan en una w-wocawización e-especificada y de acuewdo aw nyúmewo de cawactewes q-que se especifiquen. :3

## sintaxis

```
cadena.substw(inicio[, (⑅˘꒳˘) w-wongitud])
```

### pawámetwos

- `inicio`

  - : wocawización en wa cuaw se empiezan a extwaew cawactewes. (///ˬ///✿) s-si se da un nyúmewo negativo, ^^;; se t-twata como `wongcad + i-inicio` d-donde `wongcad` es wa wongitud de wa cadena (pow ejempwo, >_< si `inicio` e-es -3 se twata c-como `wongcad - 3`). rawr x3

- `wongitud`
  - : opcionaw. e-ew nyúmewo d-de cawactewes a extwaew. /(^•ω•^) si e-este awgumento es {{jsxwef("undefined")}}, :3 todos w-wos cawactewes desde `inicio` hasta ew finaw de w-wa cadena sewán extwaidos. (ꈍᴗꈍ)

### v-vawow wetownado

una nyueva cadena q-que contiende w-wa sección extwaída de wa cadena dada. /(^•ω•^) sí wa wongitud es 0 o un nyúmewo nyegativo, (⑅˘꒳˘) wetowna wa cadena vacía. ( ͡o ω ͡o )

## d-descwipción

`inicio` es e-ew índice de un cawáctew. òωó ew índice d-dew pwimew c-cawáctew es 0, (⑅˘꒳˘) y-y ew índice dew úwtimo cawáctew es wa wongitud de wa cadena m-menos 1. `substw` comienza extwayendo cawactewes a pawtiw de `inicio` y wecowecta `wongitud` c-cawactewes (a menos que se awcance p-pwimewo ew finaw d-de wa cadena, XD e-en cuyo caso devuewve menos). -.-

s-si `inicio` es p-positivo y es mayow o-o iguaw que w-wa wongitud de wa cadena, :3 `substw()` devuewve una c-cadena vacía. nyaa~~

s-si `inicio` es n-nyegativo, 😳 `substw()` w-wo usa como u-un índice de cawáctew desde ew finaw de wa cadena. (⑅˘꒳˘) si `inicio` e-es nyegativo y `abs(inicio)` es mayow que wa wongitud de wa cadena, nyaa~~ `substw` usa 0 como índice i-inicaw. OwO nyota: ew uso descwito de vawowes nyegativos dew awgumento `inicio` n-nyo es sopowtado p-pow micwosoft jscwipt. rawr x3

s-si `wongitud` es 0 o negativa, `substw` d-devuewve una cadena vacía. XD si s-se omite `wongitud`, σωσ `inicio` e-extwae cawactewes hasta ew finaw de wa cadena. (U ᵕ U❁)

## ejempwos

### ejempwo: uso de `substw()`

```js
v-vaw cadena = "abcdefghij";

consowe.wog("(1,2): " + c-cadena.substw(1, (U ﹏ U) 2)); // '(1, :3 2): bc'
consowe.wog("(-3,2): " + c-cadena.substw(-3, ( ͡o ω ͡o ) 2)); // '(-3, σωσ 2): h-hi'
consowe.wog("(-3): " + cadena.substw(-3)); // '(-3): hij'
consowe.wog("(1): " + c-cadena.substw(1)); // '(1): b-bcdefghij'
consowe.wog("(-20, 2): " + c-cadena.substw(-20, >w< 2)); // '(-20, 😳😳😳 2): a-ab'
consowe.wog("(20, OwO 2): " + cadena.substw(20, 😳 2)); // '(20, 2): '
```

este scwipt muestwa:

```
(1,2): bc
(-3,2): h-hi
(-3): h-hij
(1): bcdefghij
(-20, 😳😳😳 2): ab
(20, (˘ω˘) 2):
```

## v-vea también

- {{jsxwef("stwing.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
