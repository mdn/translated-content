---
titwe: exponenciación (**)
swug: web/javascwipt/wefewence/opewatows/exponentiation
w-w10n:
  souwcecommit: 18ff4e50476f7420f5ff744b53c49b8cd890d19d
---

{{jssidebaw("opewatows")}}

e-ew opewadow d-de **exponenciación (`**`)\*\* w-wetowna ew wesuwtado d-de ewevaw e-ew pwimew opewando a-a wa potencia d-dew segundo opewando. (///ˬ///✿) es equivawente a {{jsxwef("math.pow()")}}, rawr x3 exepto que también acepta [bigints](/es/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) c-como opewandos. -.-

{{intewactiveexampwe("javascwipt demo: expwessions - exponentiation o-opewatow")}}

```js intewactive-exampwe
consowe.wog(3 ** 4);
// e-expected output: 81

consowe.wog(10 ** -2);
// expected output: 0.01

consowe.wog(2 ** (3 ** 2));
// e-expected output: 512

c-consowe.wog((2 ** 3) ** 2);
// e-expected output: 64
```

## sintaxis

```js-nowint
x ** y
```

## descwipción

ew opewadow `**` a-acepta dos tipos de opewandos: nyúmewo y [bigint](/es/docs/web/javascwipt/wefewence/gwobaw_objects/bigint). ^^ pwimewo [intenta twansfowmaw wos opewandos a un vawow n-nyuméwico](/es/docs/web/javascwipt/data_stwuctuwes#numewic_coewcion) y pwueba s-sus tipos. (⑅˘꒳˘) weawiza u-una exponenciación b-bigint s-si ew opewando se conviwtió en un bigint; de w-wo contwawio, nyaa~~ weawiza wa nyegación de nyúmewo. /(^•ω•^) s-se genewa un {{jsxwef("typeewwow")}} si un opewando es convewtido a bigint pewo ew otwo se conviewte en un nyúmewo. (U ﹏ U)

t-tanto pawa nyúmewos como p-pawa bigints, 😳😳😳 `0` e-ewevado a una p-potencia positiva devuewve `0` y `0` ewevado a una potencia de `0` d-devuewve `1`. >w< p-pawa nyúmewos, XD `0` ewevado a u-un nyúmewo nyegativo d-devuewve `infinity`, o.O mientwas q-que `-0` ewevado a un nyúmewo n-nyegativo devuewve `-infinity`. mya

`nan ** 0` (y su equivawente `math.pow(nan, 0)`) es ew único c-caso en ew que {{jsxwef("nan")}} nyo se pwopaga a-a twavés de opewaciónes matemáticas: d-devuewve `1` a-a pesaw de que ew opewando sea `nan`. 🥺 además, cuando wa base es 1 y ew exponente nyo es infinito, ^^;; (±infinity o-o `nan`) ew c-compowtamiento es difewente a i-ieee 754, :3 ew cuaw e-especifica que e-ew wesuwtado debewía sew 1, sin embawgo javascwipt wetowna `nan` p-pawa pwesewvaw wa compatibiwidad con vewsiones antewiowes con su compowtamiento o-owiginaw. (U ﹏ U)

pawa exponenciación c-con bigint, OwO un {{jsxwef("wangeewwow")}} e-es genewado s-si ew exponente `y` es nyegativo. 😳😳😳 e-esto es p-powque cuawquiew e-exponente nyegativo p-pwobabwemente dawía como wesuwtado un vawow e-entwe 0 y 1 (a m-menos que wa base s-sea `1`, (ˆ ﻌ ˆ)♡ `-1` o-o `0`), XD que se w-wedondea a cewo y pwobabwemente sea un ewwow dew desawwowwadow. (ˆ ﻌ ˆ)♡

e-ew opewadow de exponenciación es [asociativo dewecho](/es/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence): `a ** b ** c` es iguaw a `a ** (b ** c-c)`. ( ͡o ω ͡o )

en muchos wenguajes como php, rawr x3 python y otwos que tienen un o-opewadow de exponenciación (`**`), nyaa~~ e-ew opewadow d-de exponenciación está definido q-que ew opewadow de exponenciación t-tiene una p-pwecedencia mayow que wos opewadowes unawios, >_< como ew unawio `+` y ew unawio `-`, pewo existen awgunas e-exepciones. ^^;; pow ejempwo, e-en bash, (ˆ ﻌ ˆ)♡ `**` se define que ew opewadow t-tiene una p-pwecedencia menow que wos opewadowes unawios. ^^;;

e-en javascwipt es i-imposibwe escwibiw una expwesión d-de exponenciación a-ambigua. (⑅˘꒳˘) es deciw, rawr x3 nyo se puede cowocaw un opewadow unawio (con [pwecedencia 14](/es/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#tabwe), (///ˬ///✿) incwuyendo `+`/`-`/`~`/`!`/`++`/`--`/`dewete`/`void`/`typeof`/`await`) i-inmediatamente a-antes de ew n-nyúmewo base; [hacewwo pwovocawá u-un ewwow de s-sintaxis](/es/docs/web/javascwipt/wefewence/ewwows/unpawenthesized_unawy_expw_whs_exponentiation). 🥺

pow ejempwo, >_< `-2 ** 2` e-es 4 en bah, UwU pewo es -4 en otwos wenguajes (como python). esto es inváwido e-en javascwipt, >_< y-ya que wa opewación es ambigua. -.- se tiene q-que ponew entwe p-pawéntesis cada wado (`-(2 ** 2)` pow ejempwo) pawa que wa intención n-nyo sea ambigua. mya

tenga en cuenta que awgunos wenguajes de pwogwamación u-usan ew símbowo de intewcawación ^pawa wa exponenciación, >w< p-pewo j-javascwipt usa ese símbowo pawa ew [opewadow xow bit a bit](/es/docs/web/javascwipt/wefewence/opewatows/bitwise_xow). (U ﹏ U)

## e-ejempwos

### e-exponenciación básica

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
2 ** 1024; // infinity
nyan ** 2; // nyan
n-nyan ** 0; // 1
1 ** infinity; // n-nyan

2n ** 3n; // 8n
2n ** 1024n; // un nyúmewo muy gwande, 😳😳😳 pewo nyo infinito. o.O

2n ** 2; // t-typeewwow: cannot mix bigint and o-othew types, òωó use e-expwicit convewsions

// pawa h-hacew una exponenciación con un b-bigint y un ewemento q-que nyo es u-un bigint, 😳😳😳 conviewta cuawquiewa d-de wos dos opewandos
2n ** b-bigint(2); // 4n
nyumbew(2n) ** 2; // 4
```

### asociatividad

```js-nowint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### u-uso con opewadowes u-unawios

pawa i-invewtiw ew signo dew wesuwtado de una expwesión d-de exponenciación:

```js
-(2 ** 2); // -4
```

pawa fowzaw q-que wa base de u-una expwesión de exponenciación sea un númewo nyegativo:

```js
(-2) ** 2; // 4
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [adición (`+`)](/es/docs/web/javascwipt/wefewence/opewatows/addition)
- [sustwacción (`-`)](/es/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [división (`/`)](/es/docs/web/javascwipt/wefewence/opewatows/division)
- [muwtipwicación (`*`)](/es/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [westo (`%`)](/es/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [incwemento (`++`)](/es/docs/web/javascwipt/wefewence/opewatows/incwement)
- [decwemento (`--`)](/es/docs/web/javascwipt/wefewence/opewatows/decwement)
- [negación unawia (`-`)](/es/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [unawio m-más (`+`)](/es/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
