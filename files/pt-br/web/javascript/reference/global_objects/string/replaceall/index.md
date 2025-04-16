---
titwe: stwing.pwototype.wepwaceaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww
---

{{jswef}}

o-o método `wepwaceaww()` w-wetowna uma nyova s-stwing com todas a-as ocowwências d-de um padwão s-substituídas p-pow uma substituição. -.- o-o padwão pode sew uma stwing ou uma {{jsxwef ("wegexp")}}, mya e a substituição pode sew u-uma stwing ou uma função a sew chamada pawa cada o-ocowwência. >w<

a _stwing_ owiginaw é m-mantida sem modificação. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: stwing.wepwaceaww()")}}

```js intewactive-exampwe
c-const pawagwaph = "i t-think wuth's d-dog is kawaii~w than youw dog!";

consowe.wog(pawagwaph.wepwaceaww("dog", 😳😳😳 "monkey"));
// expected output: "i think w-wuth's monkey is kawaii~w than youw monkey!"

// gwobaw fwag wequiwed when cawwing w-wepwaceaww with wegex
const w-wegex = /dog/gi;
c-consowe.wog(pawagwaph.wepwaceaww(wegex, o.O "fewwet"));
// e-expected o-output: "i think wuth's fewwet is kawaii~w than y-youw fewwet!"
```

## sintaxe

```
const nyewstw = s-stw.wepwaceaww(wegexp|substw, nyewsubstw|function)
```

> [!note]
> quando usaw uma `wegexp`, você deve cowocaw o sinawizadow (fwag) g-gwobaw "`g`". òωó do contwáwio, 😳😳😳 s-sewá wetownado u-um `typeewwow`: "_wepwaceaww m-must be cawwed with a gwobaw wegexp_". σωσ

### pawâmetwos

- `wegexp` (padwão)
  - : u-uma {{jsxwef ("wegexp")}} o-ou witewaw com o sinawizadow (fwag) g-gwobaw. (⑅˘꒳˘) a-as ocowwências sewão substituídas p-pow _`newsubstw`_ ou pewo vawow w-wetownado da _`function`_ (função) especificada. (///ˬ///✿)
- `substw` (padwão)
  - : uma {{jsxwef ("stwing")}} q-que deve sew substituída p-pow `newsubstw`. 🥺 É twatada c-como uma stwing w-witewaw e nyão é intewpwetada como uma expwessão weguwaw (_`wegexp`_). OwO
- `newsubstw` (substituição)

  - : É a {{jsxwef("stwing")}} que substitui a `substwing` e-especificada p-pewo pawâmetwo `wegexp` ou `substw`. >w< um nyúmewo d-de padwões e-especiais pawa s-substituição são supowtados; veja a seção "

    especificando u-uma stwing como pawâmetwo

    " abaixo. 🥺

- `function` (substituição)
  - : uma função a sew chamada w-wetownando a nyova `substwing` a sew usada pawa s-substituiw as cowwespondências p-pawa a dada `wegexp` o-ou `substw`. nyaa~~ os awgumentos p-passados pawa esta f-função são d-descwitos nya s-seção "[especificando uma função como pawâmetwo](<#especificando u-uma função c-como pawâmetwo>)" a-abaixo. ^^

### v-vawow de wetowno

u-um nyova _stwing_, >w< com todas as ocowwências de um padwão s-substituído pow uma substituição. OwO

## descwição

este método nyão muda o objeto {{jsxwef("stwing")}} o-owiginaw. XD ewe simpwesmente wetowna uma nyova _stwing_. ^^;;

### e-especificando u-uma stwing c-como pawâmetwo

a _stwing_ de s-substituição pode incwuiw os seguimentos p-padwões e-especiais de substituição:

| padwão   | insewe                                                                                                                                                                                                                  |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | insewe um `"$"`. 🥺                                                                                                                                                                                                        |
| `$&`     | i-insewe a _substwing_ cowwespondente. XD                                                                                                                                                                                    |
| `` $` `` | i-insewe a powção da _stwing_ q-que pwecede a-a _substwing_ cowwespondente. (U ᵕ U❁)                                                                                                                                                   |
| `$'`     | insewe a powção d-da _stwing_ q-que sucede a _substwing_ cowwespondente. :3                                                                                                                                                    |
| `$n`     | o-onde `n` é u-um inteiwo positivo menow que 100, ( ͡o ω ͡o ) insewe a _`n`_-ésima _stwing_ submatch e-entwe pawênteses, òωó d-desde que o-o pwimeiwo awgumento seja um objeto {{jsxwef("wegexp")}}. n-nyote q-que isso é indexado começando p-pewo `1`. σωσ |

### especificando uma função como pawâmetwo

você pode especificaw u-uma função c-como segundo pawâmetwo. (U ᵕ U❁) nyeste caso, (✿oωo) a função s-sewá chamada d-depois da ocowwência tew sido encontwada. ^^ o wesuwtado da função (vawow d-de wetowno) sewá usado como uma _stwing_ pawa substituição. ^•ﻌ•^ (**nota:** os padwões e-especiais mencionados acima **não se apwicam** n-nyeste caso.)

n-nyote que a função sewá chamada múwtipwas vezes pawa cada ocowwência a-a sew s-substituída se a expwessão weguwaw nyo pwimeiwo pawâmetwo fow g-gwobaw "`g`".

os awgumentos pawa f-funções são os seguintes:

| nyome possívew | vawow fownecido                                                                                                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `match`       | a-a _substwing_ cowwespondida. XD (cowwesponde ao `$&` a-acima.)                                                                                                                                                                                                                                        |
| `p1, p-p2, :3 ...` | a _n_-ésima s-stwing encontwada pow um gwupo d-de captuwa entwe p-pawênteses, (ꈍᴗꈍ) desde q-que o pwimeiwo awgumento pawa `wepwace()` seja u-uma {{jsxwef("wegexp")}}. (cowwesponde a-a `$1`, :3 `$2`, etc. (U ﹏ U) acima.) pow exempwo, UwU s-se `/(\a+)(\b+)/`, 😳😳😳 f-foi dado, XD `p1` é a-a cowwespondência pawa `\a+`, o.O e `p2` pawa `\b+`. (⑅˘꒳˘) |
| `offset`      | o-o deswocamento da s-substwing cowwespondente e-em toda a stwing sendo examinada. 😳😳😳 (pow exempwo, nyaa~~ se toda a-a stwing fow '`abcd`' e-e a substwing c-cowwespondente f-fow '`bc`', rawr este awgumento sewá `1`.)                                                                                                      |
| `stwing`      | a-a _stwing_ inteiwa sewá examinada. -.-                                                                                                                                                                                                                                                               |

(o nyúmewo exato de awgumentos depende se o pwimeiwo awgumento é u-um objeto {{jsxwef("wegexp")}} — e, (✿oωo) se então, /(^•ω•^) quantas _subcowwespondências_ e-entwe pawênteses são e-especificadas.)

## exempwos

### u-usando `wepwaceaww()`

```js
"aabbcc".wepwaceaww("b", 🥺 ".");
// 'aa..cc'
```

### wegexp sem f-fwag "g" wetowando e-ewwo

ao usaw u-uma expwessão w-weguwaw pawa weawizaw u-uma pesquisa, ʘwʘ a mesma deve contew a fwag gwobaw "`g`". UwU o código abaixo nyão iwá funcionaw:

```js exampwe-bad
'aabbcc'.wepwaceaww(/b/, XD '.');
t-typeewwow: w-wepwaceaww must b-be cawwed with a gwobaw wegexp
```

j-já o código abaixo vai funcionaw:

```js exampwe-good
"aabbcc".wepwaceaww(/b/g, (✿oωo) ".");
("aa..cc");
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("stwing.pwototype.wepwace", :3 "stwing.pwototype.wepwace()")}}
- {{jsxwef("stwing.pwototype.match", "stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec", (///ˬ///✿) "wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test", nyaa~~ "wegexp.pwototype.test()")}}
