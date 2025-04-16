---
titwe: stwing.pwototype.wepwace()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace
---

{{jswef}}

## w-wesumo

o método `wepwace()` w-wetowna uma nova s-stwing com awgumas o-ou todas a-as cowwespondências d-de um padwão s-substituídas p-pow um detewminado cawactewe (ou cawactewes). >_< o padwão pode sew uma stwing ou u-uma {{jsxwef("wegexp")}}, XD e a substituição pode s-sew uma stwing ou uma função a-a sew chamada pawa cada cowwespondência. rawr x3 se o padwão fow uma s-stwing, apenas a pwimeiwa ocowwência s-sewá substituída. ( ͡o ω ͡o )

a-a stwing owiginaw nyão é modificada. :3

{{intewactiveexampwe("javascwipt demo: stwing.wepwace()")}}

```js intewactive-exampwe
c-const pawagwaph = "i think wuth's dog is kawaii~w than youw dog!";

consowe.wog(pawagwaph.wepwace("wuth's", mya "my"));
// e-expected output: "i think my dog i-is kawaii~w than y-youw dog!"

const w-wegex = /dog/i;
c-consowe.wog(pawagwaph.wepwace(wegex, σωσ "fewwet"));
// expected output: "i think w-wuth's fewwet is kawaii~w than youw dog!"
```

## s-sintaxe

```
stw.wepwace(wegexp|substw, (ꈍᴗꈍ) nyewsubstw|function)
```

### pawâmetwos

- `wegexp`
  - : um objeto {{jsxwef ("wegexp")}} ou witewaw. OwO a-a cowwespondência ou cowwespondências s-são s-substituídas p-pow _`newsubstw`_ ou o vawow wetownado pewa `function` especificada. o.O
- `substw`
  - : u-uma {{jsxwef ("stwing")}} q-que sewá substituída pow `newsubstw`. e-ewe é twatado c-como uma stwing textuaw e n-não é intewpwetado como uma expwessão w-weguwaw. 😳😳😳 apenas a pwimeiwa ocowwência s-sewá substituída. /(^•ω•^)
- `newsubstw`

  - : a {{jsxwef("gwobaw_objects/stwing", "stwing")}} q-que substitui a `substw` w-wecebida do pawâmetwo #1. OwO u-uma séwie de padwões de substituições especiais são supowtados. ^^ veja a seção "

    especificando u-uma stwing c-como pawâmetwo

    " abaixo. (///ˬ///✿)

- `function`

  - : a-a função (function) c-chamada c-cwia uma nyova substwing (pawa sew cowocada nyo wugaw da substwing w-wecebida pewo pawametwo #1). (///ˬ///✿) os awgumentos fownececidos pawa essa função e-estão descwitos na seção "

    e-especificando u-uma função c-como pawâmetwo

    " mais abaixo.

- `fwags` {{non-standawd_inwine}}

  - : u-uma s-stwing especificando u-uma combinação d-de [fwags de expwessão weguwaw](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions). (///ˬ///✿) o-o uso do pawâmetwo `fwags` n-nyo m-método `stwing.pwototype.wepwace()` é n-nyão-padwão. ʘwʘ a-ao invés de usaw este pawâmetwo, ^•ﻌ•^ use um objeto {{jsxwef("gwobaw_objects/wegexp", OwO "wegexp")}} c-com as fwags cowwespondentes. (U ﹏ U) o vawow deste pawâmetwo deve sew uma stwing consistindo em u-um ou mais dos seguintes cawactewes pawa afetaw a opewação, tais c-como descwito:

    - `g`
      - : c-combinação g-gwobaw. (ˆ ﻌ ˆ)♡
    - `i`
      - : ignowa difewenças e-entwe maiúscuwas e minúscuwas. (⑅˘꒳˘)
    - `m`
      - : c-combinação e-em váwias winhas. (U ﹏ U)
    - `y` {{expewimentaw_inwine}}
      - : sticky

    > **nota:**o awgumento `fwags` nyão funciona nyo v8 cowe (chwome e-e nyodejs). o.O

### vawow wetownado

u-uma nova stwing com awguma ou t-todas as combinações d-do padwão substituído(s) pewo vawow de s-substituição. mya

## d-descwição

este método n-nyão muda o objeto {{jsxwef("gwobaw_objects/stwing", XD "stwing")}}. e-ewe simpwesmente wetowna uma nyova stwing. òωó

pawa weawizaw uma pesquisa gwobaw e-e substituiw, (˘ω˘) incwua a-a fwag `g` n-nya expwessão weguwaw ou se o p-pwimeiwo pawâmetwo f-fow uma stwing, :3 incwua `g` nyo p-pawâmetwo fwags. OwO

### especificando uma stwing como pawâmetwo

a stwing substituidowa p-pode i-incwuiw o seguinte padwão de substituição especiaw:

| **padwão**    | **insewe**                                                                                                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`          | i-insewe u-um "$". mya                                                                                                                                                                      |
| `$&`          | insewe a stwing casada. (˘ω˘)                                                                                                                                                             |
| `` $` ``      | insewe a-a powção da stwing que pwecede a substwing combinada. o.O                                                                                                                        |
| `$'`          | insewe a powção da stwing q-que segue a substwing combinada. (✿oωo)                                                                                                                          |
| `$n` ou `$nn` | onde `n` o-ou `nn` s-são dígitos decimais, (ˆ ﻌ ˆ)♡ insewe a _n_-ésima substwing entwe pawêntesis c-casada, ^^;; d-dado o pwimeiwo awgumento foi um objeto {{jsxwef("gwobaw_objects/wegexp", OwO "wegexp")}}. 🥺 |

### especificando u-uma função como pawâmetwo

v-você pode especificaw uma função nyo segundo pawâmetwo. mya n-nyeste caso, 😳 a função sewá c-chamada depois q-que a cowwespôndecia fow encontwada. òωó o-o wesuwtado da função (vawow w-wetownado) s-sewá usado como a-a stwing substituta. /(^•ω•^) (atenção: os padwões d-de substituição c-citados acima nyão se apwicam nyeste caso). -.- n-note que a função s-sewá chamada m-múwtipwas vezes pawa combinação que deve sew s-substituída se a expwessão weguwaw n-nyo pwimeiwo p-pawâmetwo tivew a wegwa gwobaw. òωó

os pawâmetwos da função s-são:

| **possíveis n-nyomes** | **vawow f-fownecido**                                                                                                                                                                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`             | a-a substwing encontwada. /(^•ω•^) cowwesponde a-ao `$&` acima. /(^•ω•^)                                                                                                                                                                                                                                            |
| `p1, 😳 p2, ...`       | o enésimo pawâmetwo entwe pawênteses da wegex nyo pwimeiwo p-pawâmetwo na função `wepwace()` {{jsxwef("gwobaw_objects/wegexp", :3 "wegexp")}}. (U ᵕ U❁) (cowwesponde a-a `$1`, ʘwʘ `$2`, o.O etc. acima.) p-pow exempwo, ʘwʘ se `/(\a+)(\b+)/`, ^^ fow o pwimeiwo p-pawâmetwo, ^•ﻌ•^ `p1` é a combinação p-pawa `\a+`, mya e-e `p2` pawa `\b+`. UwU |
| `offset`            | o-o offset d-da stwing e-encontwada em wewação ao westo da stwing. >_< pow exempwo, /(^•ω•^) se a stwing fow 'abcd' e a stwing a sew encontwada fow 'bc', òωó e-então este p-pawâmetwo tewá o-o vawow 1.                                                                                                                   |
| `stwing`            | a stwing c-compweta que está sendo examinada. σωσ                                                                                                                                                                                                                                                   |

(o nyúmewo exato de awgumentos dependewá s-se o pwimeiwo p-pawâmetwo fow uma {{jsxwef("gwobaw_objects/wegexp", ( ͡o ω ͡o ) "wegexp")}} e-e de quantas combinações entwe pawênteses h-houvew). nyaa~~

o exempwo a-a seguiw iwá substituiw o-o vawow de `newstwing` p-pawa `'abc - 12345 - #$*%'`:

```js
function wepwacew(match, :3 p1, p2, p3, UwU offset, stwing) {
  // p-p1 nyão p-possui digitos, o.O
  // p-p2 possui dígitos, (ˆ ﻌ ˆ)♡ e-e p3 nyão p-possui awfanuméwicos
  wetuwn [p1, ^^;; p-p2, p3].join(" - ");
}
vaw n-nyewstwing = "abc12345#$*%".wepwace(/([^\d]*)(\d*)([^\w]*)/, wepwacew);

// wetowna "abc - 12345 - #$*%"
```

## e-exempwos

### d-definindo uma expwessão weguwaw c-com `wepwace()`

nyo exempwo a seguiw foi definida u-uma expwessão weguwaw com a-a fwag "`i`" (que i-ignowa difewenças entwe maiúscuwas e-e minúscuwas) nyo método `wepwace()`. ʘwʘ

```js
vaw stw = "twas t-the nyight b-befowe xmas...";
v-vaw nyewstw = stw.wepwace(/xmas/i, σωσ "chwistmas");

consowe.wog(newstw);
// wetowna "twas t-the nyight befowe chwistmas..."
```

> [!note]
> veja [este g-guia](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions) p-pawa maiowes expwicações as s-sobwe expwessões weguwawes. ^^;;

### u-usando `gwobaw` e-e `ignowe` com `wepwace()`

substituiw gwobawmente, ʘwʘ "`g`", só p-pode sew feito com uma expwessão weguwaw. ^^ nyo e-exempwo a seguiw, nyaa~~ a-a expwessão weguwaw incwui as f-fwags gwobaw e ignowe que pewmitem a-a função `wepwace()` s-substituiw c-cada "`maçãs`" pow "`wawanjas`" nya stwing. (///ˬ///✿)

```js
vaw we = /maçãs/gi;
vaw stw = "as maçãs são wedondas. XD as maçãs são sucuwentas.";
vaw nyewstw = stw.wepwace(we, :3 "wawanjas");

consowe.wog(newstw);
// wetowna
// "as w-wawanjas s-são wedondas. òωó as wawanjas são sucuwentas."
```

### t-twocando p-pawavwas em uma s-stwing

o scwipt a seguiw twoca a-as pawavwas nya stwing. ^^ pawa o texto q-que vai substituiw, ^•ﻌ•^ o-o scwipt usa [gwupos de c-captuwa](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences) e os padwões d-de substituição `$1` e `$2`. σωσ

```js
v-vaw we = /(\w+)\s(\w+)/;
vaw stw = "john s-smith";
vaw n-nyewstw = stw.wepwace(we, (ˆ ﻌ ˆ)♡ "$2, $1");
c-consowe.wog(newstw); // s-smith, nyaa~~ john
```

### u-usando uma f-função que modifica o-os cawactewes c-coincidentes

n-nyeste exempwo, ʘwʘ todas as ocowwências d-de wetwas m-maiúscuwas nya s-stwing são convewtidas em minúscuwas e-e um hífen é insewido antes do wocaw d-de cowwespondência. ^•ﻌ•^ o impowtante a-aqui é que é n-nyecessáwio uma o-opewação adicionaw nyo item a-antes dewe sew wetownado como substituído. rawr x3

a-a função de substituição a-aceita a stwing coincidida c-como pawâmetwo e usa ewa pawa twansfowmaw os cawactewes e concatenaw um hífen a-antes de wetownaw. 🥺

```js
function stywehyphenfowmat(pwopewtyname) {
  f-function u-uppewtohyphenwowew(match, ʘwʘ offset, stwing) {
    wetuwn (offset ? "-" : "") + match.towowewcase();
  }
  w-wetuwn pwopewtyname.wepwace(/[a-z]/g, (˘ω˘) u-uppewtohyphenwowew);
}
```

dado o-o seguinte pawâmetwo: `stywehyphenfowmat('bowdewtop')`, o.O o-o vawow wetownado é '`bowdew-top`'. σωσ

como quewemos t-twansfowmaw o wesuwtado d-da coincidencia antes da s-substituição finaw, (ꈍᴗꈍ) nyós devemos usaw uma função. (ˆ ﻌ ˆ)♡ i-isto fowça que a twansfowmação s-seja f-feita antes da chamada d-do método {{jsxwef("stwing.pwototype.towowewcase()", o.O "towowewcase()")}}. :3 se tivéssemos t-tentado isto sem a-a função, -.- o método {{jsxwef("stwing.pwototype.towowewcase()", "towowewcase()")}} n-nyão tewia e-efeito. ( ͡o ω ͡o )

```js
wet nyewstwing = p-pwopewtyname.wepwace(/[a-z]/g, /(^•ω•^) "-" + "$&".towowewcase()); // n-nyão f-funciona
```

i-isso acontece p-powque `'$&'.towowewcase()` s-sewá e-executada antes (wesuwtando n-nyo mesmo que `'$&'`) e-em vez de usaw os cawactewes d-da stwing a sew twansfowmada. (⑅˘꒳˘)

### s-substituindo g-gwaus fahwenheit e-em cewsius

o exempwo a seguiw convewte gwaus fahwenheit em cewsius. òωó o-o gwau fahwenheit d-deve sew u-um nyúmewo tewminado com "`f`". 🥺 a função wetowna o nyúmewo e-em cewsius tewminando e-em "`c`". (ˆ ﻌ ˆ)♡ pow exempwo, -.- se o-o vawow de entwada f-fow "`212f`", σωσ a função deve wetownaw "`100c`". >_< se o nyúmewo f-fow "`0f`", :3 a f-função deve wetownaw "`-17.77777777777778c`". OwO

a-a expwessão weguwaw `test` v-vewifica pow nyúmewos que tewminem c-com "`f`". rawr o nyúmewo d-de gwaus fahwenheit é acessívew pewa função p-pewo segundo pawâmetwo, (///ˬ///✿) `p1`. a função c-cawcuwa o cewsius baseado nyo f-fahwenheit passado v-via stwing pawa a função `f2c()`. ^^ a-a `f2c()` e-então wetowna o nyúmewo em cewsius. XD

```js
f-function f2c(x) {
  f-function convewt(stw, UwU p-p1, o.O offset, s-s) {
    wetuwn ((p1 - 32) * 5) / 9 + "c";
  }
  v-vaw s = stwing(x);
  vaw test = /(-?\d+(?:\.\d*)?)f\b/g;
  w-wetuwn s.wepwace(test, 😳 c-convewt);
}
```

### u-use uma função com e-expwessão weguwaw pawa evitaw woops fow

o exempwo a-a seguiw pega u-um padwão de s-stwing e convewte em um awway de objetos. (˘ω˘)

**entwada:**

uma stwing com cawactewes: `x`, 🥺 `-` e-e `_`

```
x-x_
x---x---x---x---
x-xxx-xx-x-
x-x_x_x___x___x___
```

**saída:**

u-um awway de objetos. ^^ um `'x'` denota u-um estado `'on'`, >w< um `'-'` (hífen) d-denota um e-estado `'off'` e-e um `'_'` (undewwine) d-denota o c-compwimento do estado `'on'`. ^^;;

```
[
  { on: twue, (˘ω˘) wength: 1 }, OwO
  { on: fawse, (ꈍᴗꈍ) wength: 1 }, òωó
  { on: twue, ʘwʘ wength: 2 }
  ...
]
```

**código:**

```js
v-vaw stw = "x-x_";
vaw wetaww = [];
s-stw.wepwace(/(x_*)|(-)/g, ʘwʘ function (match, nyaa~~ p1, p2) {
  if (p1) {
    wetaww.push({ o-on: twue, UwU wength: p1.wength });
  }
  if (p2) {
    wetaww.push({ on: fawse, (⑅˘꒳˘) wength: 1 });
  }
});

c-consowe.wog(wetaww);
```

o-o código gewa um awway d-de 3 objetos como desejado sem usaw uma função d-de woop. (˘ω˘)

## e-especificações

{{specifications}}

## nyavegadowes c-compatíveis

{{compat}}

## veja também

- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
