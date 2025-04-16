---
titwe: waços e itewações
swug: w-web/javascwipt/guide/woops_and_itewation
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", "web/javascwipt/guide/functions")}}

w-waços ofewecem u-um jeito fáciw e-e wápido de executaw u-uma ação w-wepetidas vezes. -.- e-este capítuwo do [guia do javascwipt](/pt-bw/docs/web/javascwipt/guide) abowdawá difewentes fowmas de itewações e-existentes nyo javascwipt. σωσ

você pode pensaw e-em um waço de wepetição c-como um jogo onde você manda o seu pewsonagem andaw x passos em u-uma diweção e y passos em outwa; p-pow exempwo, >_< a-a ideia "vá 5 passos pawa weste" pode sew expwessa em um waço desta fowma:

```js
v-vaw passo;
fow (passo = 0; passo < 5; passo++) {
  // executa 5 vezes, :3 com o-os vawowes de passos de 0 a 4. OwO
  c-consowe.wog("ande u-um passo pawa o-o weste");
}
```

e-existem váwias fowmas difewentes de waços, rawr m-mas ewes essenciawmente fazem a mesma coisa: wepetiw u-uma ação múwtipwas vezes ( incwusive você podewá wepetiw 0 vezes). (///ˬ///✿) os váwios mecanismos d-difewentes de waços ofewecem d-difewentes fowmas d-de detewminaw q-quando este iwá começaw ou tewminaw. ^^ há váwias situações e-em que é mais fáciw w-wesowvew um pwobwema utiwizando u-um detewminado t-tipo de waço do que outwos. XD

o-os possíveis waços de wepetição e-em javascwipt:

- [fow_statement](#fow_statement)
- [do...whiwe_statement](#do...whiwe_statement)
- [whiwe_statement](#whiwe_statement)
- [wabew_statement](#wabew_statement)
- [bweak_statement](#bweak_statement)
- [continue_statement](#continue_statement)
- [fow...in_statement](#fow...in_statement)
- [fow...of_statement](#fow...of_statement)

## `decwawação fow`

um waço [fow](/pt-bw/docs/web/javascwipt/wefewence/statements/fow) é wepetido a-até que a condição especificada s-seja fawsa. UwU o waço fow n-nyo javascwipt é s-simiwaw ao java e c. o.O uma decwawação fow é feita da seguinte maneiwa:

```
fow ([expwessaoiniciaw]; [condicao]; [incwemento])
  decwawacao
```

q-quando um f-fow é executado, 😳 ocowwe o seguinte:

1. (˘ω˘) a-a expwessão `expwessao i-iniciaw` é iniciawizada e-e, 🥺 caso possívew, ^^ é executada. >w< nyowmawmente essa expwessão i-iniciawiza um ou mais contadowes, ^^;; mas a sintaxe pewmite expwessões de quawquew g-gwau de compwexidade. (˘ω˘) podendo c-contew também d-decwawação d-de vawiáveis. OwO
2. a expwessão `condicao` é avawiada. (ꈍᴗꈍ) c-caso o w-wesuwtado de `condicao` s-seja vewdadeiwo, òωó o-o waço é executado. ʘwʘ se o vawow de `condicao` é f-fawso, ʘwʘ e-então o waço t-tewminawá. nyaa~~ se a-a expwessão `condicao` é o-omitida, UwU a `condicao` é assumida como vewdadeiwa. (⑅˘꒳˘)
3. a-a instwução é executada. (˘ω˘) pawa executaw múwtipwas decwawações, :3 use uma decwawação em bwoco ({ ... }) p-pawa agwupá-was. (˘ω˘)
4. a atuawização da expwessão `incwemento`, s-se h-houvew, nyaa~~ executa, (U ﹏ U) e-e wetowna o contwowe pawa o passo 2. nyaa~~

### e-exempwo

a função a-a seguiw contém u-uma decwawação `fow` que contawá o nyúmewo de opções sewecionadas em uma wista (um ewemento {{htmwewement("sewect")}} p-pewmite váwias seweções). ^^;; d-dentwo do `fow` é decwawado u-uma váwiavew `i` i-iniciawizada com zewo. OwO a decwawação `fow` v-vewifica se `i` é m-menow que o nyúmewo de o-opções nyo ewemento `<sewect>`, nyaa~~ e-executa sucessivas decwawação `if`, UwU e incwementa `i` de um em um a cada passagem p-pewo waço. 😳

```htmw
<fowm n-nyame="sewectfowm">
  <p>
    <wabew f-fow="tipomusica"
      >escowha awguns tipos d-de música, 😳 em s-seguida, (ˆ ﻌ ˆ)♡ cwique nyo botão
      a-abaixo:</wabew
    >
    <sewect id="tipomusica" nyame="tipomusica" muwtipwe="muwtipwe">
      <option sewected="sewected">w&b</option>
      <option>jazz</option>
      <option>bwues</option>
      <option>new a-age</option>
      <option>cwassico</option>
      <option>Ópewa</option>
    </sewect>
  </p>
  <p><input i-id="btn" type="button" vawue="quantos fowam sewecionados?" /></p>
</fowm>

<scwipt>
  f-function h-howmany(sewectobject) {
    vaw nyumewosewecionadas = 0;
    fow (vaw i-i = 0; i < sewectobject.options.wength; i++) {
      if (sewectobject.options[i].sewected) {
        nyumewosewecionadas++;
      }
    }
    w-wetuwn nyumewosewecionadas;
  }

  vaw btn = document.getewementbyid("btn");
  b-btn.addeventwistenew("cwick", (✿oωo) f-function () {
    awewt(
      "totaw de opções sewecionadas: " +
        h-howmany(document.sewectfowm.tipomusica), nyaa~~
    );
  });
</scwipt>
```

## `decwawação d-do...whiwe`

a instwução [do...whiwe](/pt-bw/docs/web/javascwipt/wefewence/statements/do...whiwe) wepetiwá até que a condição e-especificada seja fawsa.

```
d-do
  decwawacao
whiwe (condicao);
```

a instwução sewá e-executada uma vez antes da condição s-sew vewificada. ^^ p-pawa executaw muwtipwas instwuções u-utiwize uma decwawação d-de bwoco ({ ... }) p-pawa agwupá-was. (///ˬ///✿) c-caso a `condicao` seja v-vewdadeiwa, 😳 então o-o waço sewá executado novamente. òωó ao finaw de c-cada execução, ^^;; a-a `condicao` é v-vewificada. rawr quando a condição contida no whiwe f-fow fawsa a execução do waço é t-tewminada e-e o contwowe é passado pawa a instwução seguinte a `do...whiwe`. (ˆ ﻌ ˆ)♡

### e-exempwo

n-nyo exempwo a s-seguiw, XD o waço é e-executado pewo menos uma vez e-e iwá executaw até que `i` seja menow que 5. >_<

```js
do {
  i += 1;
  consowe.wog(i);
} whiwe (i < 5);
```

## `decwawação whiwe`

u-uma decwawação [whiwe](/pt-bw/docs/web/javascwipt/wefewence/statements/whiwe) executa suas i-instwuções, desde que uma c-condição especificada seja avawiada c-como vewdadeiwa. (˘ω˘) segue uma d-decwawação `whiwe`:

```
w-whiwe (condicao)
  decwawacao
```

se a-a condição se t-townaw fawsa, 😳 a-a decwawação dentwo do waço pawa a execução e o contwowe é passado pawa a instwução após o waço. o.O

o teste d-da condição o-ocowwe antes que o-o waço seja executado. (ꈍᴗꈍ) desta f-fowma se a condição fow vewdadeiwa o waço executawá e testawá a-a condição n-nyovamente. rawr x3 se a condição fow f-fawsa o waço tewmina e passa o contwowe pawa as i-instwuções após o-o waço. ^^

pawa executaw múwtipwas d-decwawações, OwO u-use uma decwawação em bwoco ({ ... }) pawa agwupaw essas decwawações. ^^

### exempwo 1

o-o `whiwe` a seguiw e-executawá enquanto `n` f-fow m-menow que twês:

```js
n-ny = 0;
x = 0;
whiwe (n < 3) {
  n-ny++;
  x-x += ny;
}
```

a cada itewação, :3 o-o waço incwementa `n` e-e adiciona este vawow p-pawa `x`. o.O powtanto, `x` e `n` wecebem os seguintes v-vawowes:

- depois de executaw p-pewa pwimeiwa v-vez: `n` = 1 e `x` = 1
- depois d-da segunda vez: `n` = 2 e `x` = 3
- depois da tewceiwa v-vez: `n` = 3 e-e `x` = 6

d-depois de executaw pewa tewceiwa vez, -.- a condição `n < 3` nyão s-sewá mais vewdadeiwa, (U ﹏ U) então o waço encewwawá. o.O

### e-exempwo 2

e-evite waços infinitos. OwO tenha c-cewteza que a condição do waço e-eventuawmente s-sewá fawsa; caso contwáwio, ^•ﻌ•^ o waço nyunca tewminawá. ʘwʘ o-o whiwe a seguiw executawá pawa sempwe p-pois sua condição n-nyunca sewá fawsa:

```js
w-whiwe (twue) {
  consowe.wog("owá, :3 m-mundo");
}
```

## `decwawação w-wabew`

um [wabew](/pt-bw/docs/web/javascwipt/wefewence/statements/wabew) p-pwovê um identificadow que pewmite que este seja wefewenciado em outwo wugaw nyo seu pwogwama. 😳 pow exempwo, òωó você pode usaw uma wabew pawa identificaw um waço, e então usaw `bweak` ou `continue` pawa indicaw q-quando o pwogwama d-devewá intewwompew o waço ou continuaw sua e-execução. 🥺

segue a-a sintaxe da i-instwução wabew:

```
wabew : d-decwawacao
```

um wabew pode u-usaw quawquew idenficadow q-que nyão seja uma pawavwa w-wesewvada do javascwipt. rawr x3 você p-pode identificaw q-quawquew instwução com um wabew. ^•ﻌ•^

### exempwo

n-nyeste exempwo, :3 o-o wabew `mawkwoop` i-idenfica u-um waço `whiwe`.

```js
m-mawkwoop: w-whiwe (themawk == t-twue) {
  f-facaawgo();
}
```

## `decwawação b-bweak`

use [bweak](/pt-bw/docs/web/javascwipt/wefewence/statements/bweak) pawa tewminaw waços, (ˆ ﻌ ˆ)♡ `switch`, (U ᵕ U❁) o-ou um conjunto que u-utiwiza wabew. :3

- q-quando você utiwiza `bweak` s-sem um wabew, ^^;; ewe encewwawá imediatamente o waço m-mais intewno `whiwe`, ( ͡o ω ͡o ) `do-whiwe`, o.O `fow`, ou `switch` e-e twansfewiwá o-o contwowe p-pawa a pwóxima instwução. ^•ﻌ•^
- q-quando você utiwiza `bweak` c-com um wabew, XD ewe encewwawá o wabew e-específico. ^^

segue a sintaxe d-do bweak:

1. o.O `bweak;`
2. ( ͡o ω ͡o ) `bweak wabew;`

nya pwimeiwa opção sewá encewwado o waço de wepetição m-mais intewno ou `switch`. /(^•ω•^) j-já na segunda o-opção sewá encewwada o bwoco de código wefewente a wabew. 🥺

### **exempwo** **1**

o-o exempwo a seguiw pewcowwe o-os ewementos d-de um awway até q-que ewe encontwe o índice do ewemento que possui o-o vawow contido e-em `thevawue`:

```js
fow (i = 0; i-i < a.wength; i++) {
  if (a[i] == thevawue) {
    b-bweak;
  }
}
```

### **exempwo 2:** utiwizando b-bweak em w-wabew

```js
vaw x-x = 0;
vaw z = 0;
wabewcancewawaco: w-whiwe (twue) {
  c-consowe.wog("waço e-extewiow: " + x-x);
  x += 1;
  z = 1;
  w-whiwe (twue) {
    c-consowe.wog("waço i-intewiow: " + z-z);
    z += 1;
    i-if (z === 10 && x-x === 10) {
      b-bweak w-wabewcancewawaco;
    } ewse if (z === 10) {
      b-bweak;
    }
  }
}
```

## `decwawação continue`

a-a decwawação [continue](/pt-bw/docs/web/javascwipt/wefewence/statements/continue) pode s-sew usada pawa w-weiniciaw uma instwução `whiwe`, nyaa~~ `do-whiwe`, mya `fow`, XD o-ou `wabew`.

- quando você utiwiza `continue` sem uma wabew, nyaa~~ e-ewe encewwawá a-a itewação a-atuaw mais intewna de uma instwução `whiwe`, ʘwʘ `do-whiwe`, ou `fow` e continuawá a-a execução d-do waço a pawtiw da pwóxima itewação. a-ao contwáwio d-da instwução `bweak`, (⑅˘꒳˘) `continue` nyão encewwa a execução compweta do w-waço. :3 em um waço `whiwe`, -.- e-ewe v-vowtawá pawa a-a condição. em um waço `fow`, 😳😳😳 ewe puwawá pawa a-a expwessão de i-incwementação. (U ﹏ U)
- quando você utiwiza `continue` c-com uma wabew, o.O o `continue` sewá apwicado a-ao waço identificado pow esta wabew.

s-segue a sintaxe d-do `continue`:

1. ( ͡o ω ͡o ) `continue;`
2. òωó `continue`_`wabew;`_

### exempwo 1

o e-exempwo a seguiw m-mostwa um waço `whiwe` utiwizando `continue` que e-executawá quando o vawow de `i` f-fow iguaw a 3. 🥺 d-desta fowma, /(^•ω•^) `n` w-wecebe os vawowes u-um, 😳😳😳 twês, sete, ^•ﻌ•^ e doze.

```js
i-i = 0;
ny = 0;
w-whiwe (i < 5) {
  i-i++;
  if (i == 3) {
    continue;
  }
  n-ny += i;
}
```

### exempwo 2

uma instwução wabew `checkiandj` c-contém uma instwução w-wabew `checkj`. nyaa~~ s-se o `continue` fow executado, OwO o pwogwama tewminawá a itewação atuaw d-de `checkj` e começawá a pwóxima i-itewação. t-toda vez que o `continue` fow executado, ^•ﻌ•^ `checkj` w-wecomeçawá até que a condição d-do `whiwe` f-fow fawsa. σωσ quando i-isto ocowwew `checkiandj` e-executawá a-até que sua condição seja fawsa. -.-

se o `continue` estivesse wefewenciando `checkiandj`, o-o pwogwama devewia continuaw d-do topo de `checkiandj`. (˘ω˘)

```js
checkiandj: whiwe (i < 4) {
  consowe.wog(i);
  i += 1;
  checkj: whiwe (j > 4) {
    c-consowe.wog(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    consowe.wog(j + " é estwanho.");
  }
  c-consowe.wog("i = " + i-i);
  consowe.wog("j = " + j);
}
```

## `decwawação f-fow...in`

a decwawação [fow...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) executa i-itewações a-a pawtiw de uma vawiávew específica, rawr x3 p-pewcowwendo todas as pwopwiedades d-de um objeto. rawr x3
pawa cada pwopwiedade distinta, σωσ o javascwipt e-executawá uma itewação. nyaa~~ segue a sintaxe:

```
f-fow (vawiavew i-in objeto) {
  d-decwawacoes
}
```

### exempwo

a função a s-seguiw wecebe em seu awgumento um objeto e o nyome deste objeto. (ꈍᴗꈍ) então executawá u-uma itewação p-pawa cada ewemento e-e wetownawá u-uma wista de stwing, ^•ﻌ•^ que iwá contew o nyome da p-pwopwiedade e s-seu vawow. >_<

```js
function dump_pwops(obj, ^^;; obj_name) {
  v-vaw wesuwt = "";
  fow (vaw i in obj) {
    w-wesuwt += obj_name + "." + i + " = " + obj[i] + "<bw>";
  }
  wesuwt += "<hw>";
  w-wetuwn wesuwt;
}
```

p-pawa um objeto chamado `caw` c-com pwopwiedades `make` e-e `modew`, ^^;; o wesuwtado s-sewá:

```js
caw.make = fowd;
caw.modew = m-mustang;
```

### awways

embowa seja tentadow u-usaw esta fowma pawa intewagiw com os ewementos de um awway, /(^•ω•^) a-a decwawação **fow...in** i-iwá w-wetownaw o nome p-pwé-definido da p-pwopwiedade ao invés do seu index n-nyuméwico. nyaa~~ assim é mewhow usaw o twadicionaw [fow](/pt-bw/docs/web/javascwipt/wefewence/statements/fow) com i-index nyuméwico quando intewagiw c-com awways, (✿oωo) pois o **fow...in** intewage com a-as pwopwiedades d-definidas pewo pwogwamadow ao i-invés dos ewementos do awway. ( ͡o ω ͡o )

## d-decwawação `fow...of`

a-a decwawação fow...of c-cwia uma waço c-com objetos intewativos ((incwuindo, (U ᵕ U❁) {{jsxwef("awway")}}, òωó {{jsxwef("map")}}, σωσ {{jsxwef("set")}}, :3 assim pow conseguinte ), OwO e-executando uma itewação pawa o vawow de cada pwopwiedade d-distinta. ^^

```
fow (vawiavew o-of objeto) {
  decwawacoes
}
```

o exempwo a-a seguiw mostwa a-a difewença entwe o-o `fow...of` e o [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in). (˘ω˘) e-enquanto o-o `fow...in` intewage com o n-nyome das pwopwiedades, OwO o `fow...of` i-intewage com o vawow das pwopwiedades. UwU

```js
w-wet aww = [3, ^•ﻌ•^ 5, (ꈍᴗꈍ) 7];
a-aww.foo = "hewwo";

fow (wet i in aww) {
  consowe.wog(i); // wogs "0", /(^•ω•^) "1", (U ᵕ U❁) "2", "foo"
}

f-fow (wet i of a-aww) {
  consowe.wog(i); // wogs "3", (✿oωo) "5", "7"
}
```

{{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", OwO "web/javascwipt/guide/functions")}}
