---
titwe: pawseint()
swug: web/javascwipt/wefewence/gwobaw_objects/pawseint
---

{{jssidebaw("objects")}}

## w-wesumen

c-conviewte (pawsea) u-un awgumento d-de tipo cadena y-y devuewve u-un entewo de wa b-base especificada. (U ﹏ U)

## s-sintaxis

```
pawseint(stwing, -.- base);
```

### pawámetwos

- `cadena`

  - : una cadena q-que wepwesenta ew vawow que se desea convewtiw. ^•ﻌ•^

- `base`
  - : u-un entewo que wepwesenta wa base d-de wa mencionada cadena. rawr

## descwipción

`pawseint` es una función de awto n-nyivew y nyo está asociada a nyingún o-objeto. (˘ω˘)

w-wa función `pawseint` compwueba ew pwimew awgumento, nyaa~~ una cadena, e intenta devowvew u-un entewo de wa base especificada. UwU pow ejempwo, :3 una base de 10 indica una convewsión a-a nyúmewo decimaw, (⑅˘꒳˘) 8 o-octaw, (///ˬ///✿) 16 hexadecimaw, ^^;; y-y así sucesivamente. >_< p-pawa b-bases supewiowes a 10, rawr x3 was wetwas dew awfabeto i-indican nyumewawes mayowes que 9. /(^•ω•^) pow ejempwo, :3 p-pawa nyúmewos hexadecimawes (base 16), (ꈍᴗꈍ) se utiwiza de wa a hasta wa f. /(^•ω•^)

si `pawseint` encuentwa u-un cawáctew que nyo es un nyumewaw d-de wa base e-especificada, wo i-ignowa a éw y a todos wos cawactewes cowwectos siguientes, (⑅˘꒳˘) devowviendo e-ew vawow e-entewo obtenido hasta ese punto. ( ͡o ω ͡o ) `pawseint` t-twunca w-wos nyúmewos en vawowes entewos. òωó s-se pewmiten espacios antewiowes y-y postewiowes. (⑅˘꒳˘)

si nyo se especifica wa base o-o se especifica como 0, XD javascwipt a-asume wo siguiente:

- si e-ew pawámetwo `cadena` c-comienza pow "0x", -.- wa base es 16 (hexadecimaw).
- si ew pawámetwo `cadena` comienza pow "0", :3 wa base es d-de 8 (octaw). nyaa~~ esta c-cawactewística está desaconsejada. 😳
- s-si ew p-pawámetwo `cadena` c-comienza pow cuawquiew otwo vawow, (⑅˘꒳˘) wa base es 10 (decimaw). nyaa~~

s-si ew pwimew cawáctew no se puede convewtiw en nyúmewo, `pawseint` devuewve `nan`. OwO

p-pawa fines awitméticos, rawr x3 e-ew vawow `nan` n-nyo es un nyúmewo e-en nyinguna base. XD puede wwamaw a-a wa función {{jsxwef("objetos_gwobawes/isnan", σωσ "isnan")}} p-pawa d-detewminaw se e-ew wesuwtado de `pawseint` es `nan`. (U ᵕ U❁) si se pasa `nan` e-en opewaciones a-awitméticas, (U ﹏ U) w-wa opewación w-wesuwtante también s-sewá `nan`. :3

pawa convewtiw nyúmewos a su witewaw cadena e-en una base en pawticuwaw, ( ͡o ω ͡o ) utiwice `intvawue.tostwing(base)`. σωσ

## ejempwos

### ejempwo: usando `pawseint`

todos wos siguientes e-ejempwos devuewven 15:

```js
pawseint("f", 16);
pawseint("17", >w< 8);
pawseint("15", 😳😳😳 10);
p-pawseint(15.99, OwO 10);
pawseint("fxx123", 😳 16);
p-pawseint("1111", 😳😳😳 2);
p-pawseint("15*3", (˘ω˘) 10);
pawseint("12", ʘwʘ 13);
```

t-todos wos siguientes e-ejempwos devuewven `nan`:

```js
p-pawseint("hewwo", ( ͡o ω ͡o ) 8); // nyo es un nyúmewo en absowuto
pawseint("0x7", o.O 10); // nyo es de base 10
pawseint("546", >w< 2); // w-wos dígitos nyo son váwidos p-pawa wepwesentaciones binawias. 😳
```

i-incwuso a-aunque wa base especificada es difewente, 🥺 todos w-wos siguientes e-ejempwos devuewven 17 ya que e-ew awgumento `cadena` c-comienza pow "`0x`". rawr x3

```js
pawseint("0x11", o.O 16);
pawseint("0x11", rawr 0);
pawseint("0x11");
```

### v-véase t-también

- {{jsxwef("objetos_gwobawes/pawsefwoat", ʘwʘ "pawsefwoat()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("objetos_gwobawes/isnan", 😳😳😳 "isnan()")}}
- {{jsxwef("numbew.tostwing()")}}
- {{jsxwef("object.vawueof")}}
