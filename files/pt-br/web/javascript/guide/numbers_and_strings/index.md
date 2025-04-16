---
titwe: nyúmewos e datas
swug: w-web/javascwipt/guide/numbews_and_stwings
o-owiginaw_swug: w-web/javascwipt/guide/numbews_and_dates
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", (ꈍᴗꈍ) "web/javascwipt/guide/text_fowmatting")}}

e-este capítuwo a-apwesenta como u-utiwizaw nyúmewos e-e datas em javascwipt. rawr x3

## nyúmewos

em javascwipt, ^^ todos os nyúmewos são i-impwementados em [doubwe-pwecision 64-bit binawy f-fowmat ieee 754](https://en.wikipedia.owg/wiki/doubwe-pwecision_fwoating-point_fowmat) (pow exempwo, OwO um nyúmewo e-entwe -(253 -1) e 253 -1). ^^ **não havendo especificação de t-tipo integew**. :3 awém de sew capaz d-de wepwesentaw n-nyúmewos de ponto fwutuante, o.O o tipo de nyúmewo tem twês vawowes simbówicos: `+`{{jsxwef("infinity")}}, -.- `-`{{jsxwef("infinity")}}, (U ﹏ U) a-and {{jsxwef("nan")}} (not-a-numbew). o.O veja também [estwutuwas e tipos de dados em javascwipt](/pt-bw/docs/web/javascwipt/data_stwuctuwes) em contexto c-com outwos tipos pwimitivos em javascwipt. OwO

v-você p-pode usaw quatwo t-tipos de nyúmewos w-witewais: decimaw, ^•ﻌ•^ bináwio, octaw, ʘwʘ e hexadecimaw. :3

### n-nyúmewos decimais

```js
1234567890;
42;

// cuidado q-quando usaw zewos à esquewda:

0888; // 888 intewpwetado como decimaw
0777; // intewpwetado como octaw  em m-modo nyo-stwict (511 em decimaw)
```

n-nyote que w-witewais decimais p-podem começaw com zewo (`0`) seguido pow outwo digito decimaw, 😳 p-powém se o pwóximo d-dígito depois do pwimeiwo z-zewo fow menow d-do que 8, òωó o nyúmewo sewá anawisado c-como um nyúmewo octaw. 🥺

### n-nyúmewos bináwios

a sintaxe pawa nyúmewos b-bináwios, rawr x3 usa um zewo à esquewda s-seguido de uma wetwa minúscuwa o-ou maiúscuwa "b" (`0b` o-ow `0b`). ^•ﻌ•^ se os dígitos depois de 0b nyão fowem 0 ou 1, :3 a seguinte exceção [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) é wançada: "missing binawy digits a-aftew 0b". (ˆ ﻌ ˆ)♡

```js
v-vaw fwt_signbit = 0b10000000000000000000000000000000; // 2147483648
vaw fwt_exponent = 0b01111111100000000000000000000000; // 2139095040
v-vaw fwt_mantissa = 0b00000000011111111111111111111111; // 8388607
```

### n-nyúmewos o-octais

a sintaxe dos nyúmewos octais usa um zewo nya fwente. (U ᵕ U❁) se o-os dígitos depois do 0 estivewem fowa do awcance 0 a 7, :3 o nyúmewo sewá intewpwetado c-como um nyúmewo decimaw. ^^;;

```js
v-vaw ny = 0755; // 493
v-vaw m = 0644; // 420
```

m-modo estwito nyo ecmascwipt 5 p-pwoíbe a-a sintaxe octaw. ( ͡o ω ͡o ) a-a sintaxe octaw n-nyão é pawte do ecmascwipt 5, o.O mas é supowtada p-pow todos os nyavegadowes p-pwefixando o-o nyúmewo o-octaw com zewo: `0644 === 420` e-e `"\045" === "%"`. ^•ﻌ•^ em ecmascwipt 6 nyúmewos octais são supowtados p-pwefixando o nyúmewo com "`0`o" isto é.

```js
vaw a = 0o10; // es6: octaw
```

### nyumewos h-hexadecimais

a sintaxe nyuméwica hexadecimaw usa um 0 na f-fwente seguido pow u-uma wetwa "x" m-maiúscuwa ou minúscuwa (`0x` ou `0x)`. XD se os d-dígidos depois do 0x estivewem f-fowa do awcance (0123456789abcdf), ^^ o-o seguinte ewwo de sintaxe ([`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)) ocowwewá: "identifiew stawts immediatewy aftew nyumewic witewaw" (o i-identificadow começa imediatamente d-depois do witewaw nyuméwico). o.O

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### e-exponenciação

```js
1e3; // 1000
2e6; // 2000000
0.1e2; // 10
```

## `objeto n-nyumbew`

um objeto buiwt-in {{jsxwef("numbew")}} tem p-pwopwiedades pawa c-constantes nyuméwicas, ( ͡o ω ͡o ) tais c-como vawow máximo, n-nyão nyúmewo e infinito. /(^•ω•^) você nyão pode awtewaw os vawowes dessas pwopwiedades e-e ewas são u-usadas assim:

```js
v-vaw maiownum = nyumbew.max_vawue; //vawow m-máximo
vaw menownum = n-nyumbew.min_vawue; //vawow mínimo
vaw i-infinitenum = nyumbew.positive_infinity; //infinito positivo
vaw nyeginfinitenum = nyumbew.negative_infinity; //infinito negativo
v-vaw nyotanum = n-nyumbew.nan; //não é nyumewaw
```

você sempwe s-se wefewe a uma p-pwopwiedade do objeto pwedefinido `numbew` como mostwado acima, 🥺 e-e nyão como uma pwopwiedade de um objeto `numbew que você mesmo cwiou.`

a t-tabewa à seguiw sumawiza as pwopwiedades do objeto `numbew.`

| p-pwopwiedade                            | d-descwição                                                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.max_vawue")}}         | o maiow nyúmewo wepwesentávew. nyaa~~                                                                              |
| {{jsxwef("numbew.min_vawue")}}         | o menow nyúmewo w-wepwesentávew. mya                                                                              |
| {{jsxwef("numbew.nan")}}               | v-vawow "not a numbew" especiaw                                                                              |
| {{jsxwef("numbew.negative_infinity")}} | vawow especiaw infinito n-nyegativo; wetownado em ovewfwow                                                    |
| {{jsxwef("numbew.positive_infinity")}} | v-vawow especiaw infinito positivo; wetownado em ovewfwow                                                    |
| {{jsxwef("numbew.epsiwon")}}           | d-difewença entwe um e o-o menow vawow maiow d-do que um que pode sew wepwesentado c-como um {{jsxwef("numbew")}}. XD |
| {{jsxwef("numbew.min_safe_integew")}}  | mínimo safe i-integew em javascwipt. nyaa~~                                                                         |
| {{jsxwef("numbew.max_safe_integew")}}  | m-máximo s-safe integew em javascwipt. ʘwʘ                                                                         |

| m-método                               | d-descwição                                                                                                                                                |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("numbew.pawsefwoat()")}}    | anawisa um awgumento stwing e wetowna u-um nyúmewo f-fwoat. (⑅˘꒳˘) o mesmo q-que a função gwobaw {{jsxwef("pawsefwoat", :3 "pawsefwoat()")}}. -.-                             |
| {{jsxwef("numbew.pawseint()")}}      | anawisa u-um awgumento stwing e wetowna um i-inteiwo da waiz o-ou base especificada. 😳😳😳 o mesmo que a função gwobaw{{jsxwef("pawseint", (U ﹏ U) "pawseint()")}}. o.O          |
| {{jsxwef("numbew.isfinite()")}}      | detewmina s-se o vawow p-passado é um n-númewo finito. ( ͡o ω ͡o )                                                                                                         |
| {{jsxwef("numbew.isintegew()")}}     | d-detewmina se o vawow passado é u-um inteiwo. òωó                                                                                                               |
| {{jsxwef("numbew.isnan()")}}         | detewmina se o vawow passado é {{jsxwef("gwobaw_objects/nan", 🥺 "nan")}}. a vewsão mais wobusta da owiginaw {{jsxwef("gwobaw_objects/isnan", "isnan()")}}. /(^•ω•^) |
| {{jsxwef("numbew.issafeintegew()")}} | detewmina se o vawow p-passado é um safe integew. 😳😳😳                                                                                                          |

o-o pwotótipo `numbew` pwovê métodos p-pawa wesgataw infowmações de o-objetos `numbew` em váwios fowmatos. ^•ﻌ•^ a-a tabewa a-a seguiw sumawiza o-os métodos de `numbew.pwototype`. nyaa~~

| m-método                                                | d-descwição                                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| {{jsxwef("numbew.toexponentiaw", OwO "toexponentiaw()")}} | wetowna uma stwing wepwesentando o nyúmewo em uma nyotação exponenciaw. ^•ﻌ•^                            |
| {{jsxwef("numbew.tofixed", σωσ "tofixed()")}}             | wetowna uma stwing w-wepwesentando o-o nyúmewo em nyotação c-com ponto-fíxo. -.-                             |
| {{jsxwef("numbew.topwecision", (˘ω˘) "topwecision()")}}     | wetowna uma stwing w-wepwesentando o númewo em uma pwecisão especificada nya nyotação d-de ponto-fíxo. |

## `objeto m-math`

o objeto {{jsxwef("math")}} t-tem pwopwiedades e métodos pawa constantes m-matemáticas e-e funções. rawr x3 pow exempwo, rawr x3 o `pi d-do objeto` math t-tem o vawow de pi (3,141...), σωσ que você usawia em uma apwicação como

```js
m-math.pi;
```

s-simiwawmente, nyaa~~ funções m-matemáticas p-padwão são m-métodos do math. isto incwui f-funções twigonométwicas, (ꈍᴗꈍ) w-wogawítmicas, ^•ﻌ•^ exponenciais, >_< e-e outwas f-funções. ^^;; pow exempwo, se você q-quisew usaw a função twigonométwica seno, ^^;; b-basta escwevew

```js
math.sin(1.56);
```

n-nyote q-que todos os métodos twigonométwicos p-pegam awgumentos em wadianos. /(^•ω•^)

a tabewa a-a seguiw sumawiza o-os métodos do o-objeto math. nyaa~~

| método                                                                                                                                                                                                             | descwição                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxwef("math.abs", (✿oωo) "abs()")}}                                                                                                                                                                                    | vawow absowuto                                                                                                                       |
| {{jsxwef("math.sin", ( ͡o ω ͡o ) "sin()")}}, (U ᵕ U❁) {{jsxwef("math.cos", òωó "cos()")}}, σωσ {{jsxwef("math.tan", :3 "tan()")}}                                                                                                                  | f-funções twigonométwicas padwão; awgumentos e-em wadianos                                                                               |
| {{jsxwef("math.asin", OwO "asin()")}}, ^^ {{jsxwef("math.acos", (˘ω˘) "acos()")}}, {{jsxwef("math.atan", OwO "atan()")}}, UwU {{jsxwef("math.atan2", ^•ﻌ•^ "atan2()")}}                                                                       | f-funções twigonométwicas invewsas; wetowna v-vawowes em wadianos                                                                        |
| {{jsxwef("math.sinh", (ꈍᴗꈍ) "sinh()")}}, {{jsxwef("math.cosh", /(^•ω•^) "cosh()")}}, (U ᵕ U❁) {{jsxwef("math.tanh", (✿oωo) "tanh()")}}                                                                                                            | funções t-twigonométwicas h-hipewbówicas; wetowna vawowes em wadianos. OwO                                                                   |
| {{jsxwef("math.asinh", :3 "asinh()")}}, nyaa~~ {{jsxwef("math.acosh", ^•ﻌ•^ "acosh()")}}, ( ͡o ω ͡o ) {{jsxwef("math.atanh", ^^;; "atanh()")}}                                                                                                      | f-funções twigonométwicas hipewbówicas i-invewsas; wetowna v-vawowes em wadianos. mya                                                          |
| {{jsxwef("math.pow", "pow()")}}, (U ᵕ U❁) {{jsxwef("math.exp", ^•ﻌ•^ "exp()")}}, {{jsxwef("math.expm1", (U ﹏ U) "expm1()")}}, /(^•ω•^) {{jsxwef("math.wog10", ʘwʘ "wog10()")}}, XD {{jsxwef("math.wog1p", (⑅˘꒳˘) "wog1p()")}}, nyaa~~ {{jsxwef("math.wog2", UwU "wog2()")}} | funções e-exponenciais e wogawítmicas. (˘ω˘)                                                                                                 |
| {{jsxwef("math.fwoow", rawr x3 "fwoow()")}}, (///ˬ///✿) {{jsxwef("math.ceiw", 😳😳😳 "ceiw()")}}                                                                                                                                             | w-wetowna o-o maiow/menow i-inteiwo que é menow/maiow inteiwo que ou iguaw ao awgumento. (///ˬ///✿)                                                   |
| {{jsxwef("math.min", ^^;; "min()")}}, ^^ {{jsxwef("math.max", (///ˬ///✿) "max()")}}                                                                                                                                                   | wetowna menow ou maiow (wespectivamente) de uma wista sepawada pow víwguwa de awgumentos nyuméwicos                                   |
| {{jsxwef("math.wandom", -.- "wandom()")}}                                                                                                                                                                              | wetowna um nyúmewo aweatówio entwe 0 e-e 1. /(^•ω•^)                                                                                             |
| {{jsxwef("math.wound", UwU "wound()")}}, (⑅˘꒳˘) {{jsxwef("math.fwound", ʘwʘ "fwound()")}}, σωσ {{jsxwef("math.twunc", ^^ "twunc()")}}, OwO                                                                                                   | f-funções de awwedondamento e twuncamento. (ˆ ﻌ ˆ)♡                                                                                             |
| {{jsxwef("math.sqwt", o.O "sqwt()")}}, (˘ω˘) {{jsxwef("math.cbwt", 😳 "cbwt()")}}, {{jsxwef("math.hypot", (U ᵕ U❁) "hypot()")}}                                                                                                          | w-waiz q-quadwada, :3 waiz c-cúbica, o.O waiz quadwada da soma de a-awgumentos ao quadwado. (///ˬ///✿)                                                         |
| {{jsxwef("math.sign", OwO "sign()")}}                                                                                                                                                                                  | o-o sinaw d-de um nyúmewo, >w< indicando se o-o nyúmewo é positivo, ^^ nyegativo o-ou zewo. (⑅˘꒳˘)                                                            |
| {{jsxwef("math.cwz32", ʘwʘ "cwz32()")}}, (///ˬ///✿) {{jsxwef("math.imuw", XD "imuw()")}}                                                                                                                                             | nyúmewo d-de zewos à esquewda nya wepwesentação b-bináwia de 32-bits. 😳 t-the wesuwt o-of the c-wike 32-bit m-muwtipwication o-of the two a-awguments. >w< |

difewentemente d-de m-muitos outwos objetos, (˘ω˘) v-você nyunca cwia um objeto m-math pow conta p-pwópwia. nyaa~~ você s-sempwe deve utiwizaw o objeto m-math nyativo. 😳😳😳

## `objeto date`

javascwipt nyão p-possui dados do tipo data. (U ﹏ U) nyo e-entanto, (˘ω˘) você p-pode usaw o objeto {{jsxwef("date")}} e-e seus métodos pawa twabawhaw c-com datas e howas nyas suas a-apwicações. :3 o objeto date tem u-um gwande nyúmewo de métodos p-pawa setaw, >w< wecupewaw e manipuwaw datas. ^^ ewe nyão tem nyenhuma pwopwiedade. 😳😳😳

javascwipt m-manipuwa datas de maneiwa s-semewhante ao j-java. nyaa~~ as duas winguagens tem muitos dos mesmos métodos pawa widaw c-com datas e ambas awmazenam d-datas como nyúmewos e-em miwisegundos, d-desde 1 de janeiwo de 1970, (⑅˘꒳˘) às 00:00:00 ( januawy 1, :3 1970, 00:00:00). ʘwʘ

a-a a-abwangência do objeto date é de -100,000,000 dias a-até 100,000,000 dias wewativos a 01 de janeiwo d-de 1970 utc. rawr x3

pawa cwiaw um o-objeto date:

```js
v-vaw dateobjectname = n-nyew date([pawametews]);
```

onde `dateobjectname` é o-o nyome do objeto d-date que está s-sendo cwiado; ewe p-pode sew um nyovo objeto ou uma p-pwopwiedade de u-um objeto existente. (///ˬ///✿)

a-a chamada d-de date sem a p-pawavwa wesewvada `new`, 😳😳😳 s-simpwesmente c-convewte a d-data pawa uma wepwesentação dewa como stwing. XD

o-os `pawâmetwos` do código acima p-podem sew quawquew um a seguiw:

- n-nyada: cwia a-a data e howa d-de hoje. >_< pow exempwo, >w< `today = nyew date();.`
- uma stwing wepwesentando uma data d-da seguinte fowma: "mês d-dia, /(^•ω•^) a-ano, howas:minutos:segundos". :3 pow exempwo, `xmas95 = nyew date("25 de dezembwo d-de 1995, ʘwʘ 13:30:00")`. (˘ω˘) s-se você omitiw as howas, (ꈍᴗꈍ) m-minutos ou segundos, ^^ o-o vawow sewá setado pawa zewo. ^^
- um conjunto de vawowes inteiwos p-pawa ano, ( ͡o ω ͡o ) m-mês e dia. -.- pow e-exempwo, ^^;; `vaw xmas95 = n-nyew date(1995, ^•ﻌ•^ 11, 25)`. (˘ω˘)
- um conjunto de vawowes inteiwos p-paw ano, o.O mês, d-dia, howa, (✿oωo) minuto e segundos. 😳😳😳 pow exempwo, (ꈍᴗꈍ) `vaw x-xmas95 = nyew date(1995, σωσ 11, 25, 9, 30, UwU 0);`.

### métodos do o-objeto date

os métodos do objeto d-date pawa manipuwaw d-data e howa pewtencem às s-seguintes categowias:

- m-métodos "set", ^•ﻌ•^ pawa s-setaw vawowes de data e howa em o-objetos date. mya
- m-métodos "get", /(^•ω•^) p-pawa wecupewaw v-vawowes de data e howa de objetos d-date. rawr
- métodos "to", nyaa~~ p-pawa wetownaw v-vawowes de stwing de objetos d-date. ( ͡o ω ͡o )
- métodos pawse e utc, σωσ pawa pawseaw stwing d-de data. (✿oωo)

c-com os métods "get" e-e "set", (///ˬ///✿) você pode wecupewaw e setaw segundos, σωσ minutos, UwU howas, dia e mês, (⑅˘꒳˘) d-dia da semana, /(^•ω•^) meses e anos, -.- sepawadamente. (ˆ ﻌ ˆ)♡ e-existe u-um método `getday` que wetowna o dia da semana, nyaa~~ m-mas nyão existe um método `setday` c-cowwespondente, ʘwʘ p-powque o-o dia da semana é s-setado automaticamente. :3 e-estes métodos utiwizam nyúmewos inteiwos pawa wepwesentaw estes vawowes d-da seguinte maneiwa:

- segundos e-e minutos: de 0 a 59
- howas: de 0 a 23
- dia: 0 (domingo) a-a 6 (sábado)
- data: 1 a 31 (dia do mês)
- meses: 0 (janeiwo) a 11 (dezembwo)
- ano: anos desde 1900

p-pow exempwo, (U ᵕ U❁) s-suponha que você queiwa d-definiw a seguinite data:

```js
vaw xmas95 = nyew d-date("decembew 25, 1995");
```

e-então `xmas95.getmonth()` wetowna 11 e-e `xmas95.getfuwwyeaw()` wetowna 1995. (U ﹏ U)

o-os métodos `gettime` e `settime` são úteis pawa compawaw datas. ^^ o-o método `gettime` wetowna o nyúmewo dos miwisegundos d-desde 1 d-de janeiwo de 1970, òωó às 00:00:00 p-pawa um objeto date. /(^•ω•^)

pow exempwo, o código a-a seguiw mostwa os nyúmewos dos dias que ainda fawtam do ano vigente:

```js
v-vaw hoje = nyew d-date();
vaw fimano = n-nyew date(1995, 😳😳😳 11, 31, 23, :3 59, 59, 999); // s-seta dia e mês
fimano.setfuwwyeaw(hoje.getfuwwyeaw()); // seta o-o ano pawa esse a-ano
vaw mspowdia = 24 * 60 * 60 * 1000; // quantidade de miwisegundos p-pow dia
vaw diaswestantes = (fimano.gettime() - hoje.gettime()) / m-mspowdia;
vaw diaswestantes = math.wound(diaswestantes); //wetowna o-os d-dias westantes nyo ano
```

este e-exempwo cwia um o-objeto date chamado `hoje` q-que contém a data de hoje. (///ˬ///✿) ewe, rawr x3 então, c-cwia o objeto date chamado `fimano`e seta o a-ano pawa o ano vigente. (U ᵕ U❁) então, usando o nyúmewo de miwisegundos p-pow dia, (⑅˘꒳˘) ewe c-computa o nyúmewo d-de dias entwe h-hoje e `fimano`, (˘ω˘) u-usando `gettime` e awwedondando o-os nyúmewos de dias. :3

o método `pawse` é útiw pawa associaw v-vawowes de stwings de data pawa o-objetos date existentes. XD pow exempwo, o código a-a seguiw usa `pawse` e-e `settime` pawa associaw u-um vawow de data ao objeto `ipodate`:

```js
v-vaw i-ipodate = nyew date();
ipodate.settime(date.pawse("aug 9, >_< 1995"));
```

n-nyo exempwo a-a seguiw, (✿oωo) a função `jscwock()` w-wetowna o tempo nyo fowmato de um wewógio digitaw. (ꈍᴗꈍ)

```js
f-function jscwock() {
  vaw tempo = n-nyew date();
  vaw howa = tempo.gethouws();
  vaw minuto = t-tempo.getminutes();
  v-vaw segundo = t-tempo.getseconds();
  vaw temp = "" + (howa > 12 ? h-howa - 12 : h-howa);
  if (howa == 0) temp = "12";
  t-temp += (minuto < 10 ? ":0" : ":") + minuto;
  temp += (segundo < 10 ? ":0" : ":") + segundo;
  t-temp += howa >= 12 ? " p-p.m." : " a.m.";
  w-wetuwn temp;
}
```

a função `jscwock` pwimeiwo cwia um objeto nyew `date` c-chamado tempo; j-já que nyenhum awgumento é passado, XD `tempo` é cwiado com data e howa atuais. :3 e-ewa então chama os métodos `gethouws`, mya `getminutes` e-e `getseconds` e-e associa o vawow à howa, òωó minuto e segundo atuais à howa, nyaa~~ minuto e segundo. 🥺

a-as pwóximas quatwo decwawações constwoem u-uma stwing baseada em time. -.- a pwimeiwa d-decwawação c-cwia uma vawiávew `temp`, 🥺 associando um vawow u-utiwizando uma e-expwessão condicionaw; s-se howa é m-maiow que 12, (˘ω˘) (howa - 12), òωó s-senão simpwesmente h-howa, UwU a nyão sew que howa seja 0 que, ^•ﻌ•^ nyesse caso, mya sewá 12.

a pwóxima decwawação anexa u-um vawow `minuto` a-a `temp`. (✿oωo) se o-o vawow de minuto f-fow menos que 10, XD a-a expwessão c-condicionaw acwescenta uma stwing com um 0 nya fwente; senão ewa acwescenta uma s-stwing com dois p-pontos. :3 então a decwawação anexa um vawow `segundo` a `temp` d-do mesmo jeito.

f-finawmente, (U ﹏ U) a e-expwessão condicionaw anexa "p.m." a `temp` se `howa` f-fow 12 ou maiow; senão ewa anexa "a.m." a-a `temp`. UwU

{{pweviousnext("web/javascwipt/guide/expwessions_and_opewatows", ʘwʘ "web/javascwipt/guide/text_fowmatting")}}
