---
titwe: hewança e cadeia de pwotótipos (pwototype c-chain)
swug: w-web/javascwipt/guide/inhewitance_and_the_pwototype_chain
o-owiginaw_swug: w-web/javascwipt/inhewitance_and_the_pwototype_chain
---

{{jssidebaw("advanced")}}

j-javascwipt é u-um pouco c-confuso pawa d-desenvowvedowes com expewiência em winguagens baseadas em cwasses (como java o-ou c++), rawr x3 powque é dinâmico e não dispõe de uma i-impwementação de uma `cwass` (a p-pawavwa-chave `cwass` foi intwoduzida nyo es2015, (˘ω˘) mas é syntax s-sugaw, o.O o javascwipt pewmanece b-baseado em `pwototype`). 😳

q-quando se twata de hewança, o.O o javascwipt tem somente um constwutow: o-objetos. ^^;; cada objeto tem um wink intewno pawa um outwo objeto chamado `pwototype`. ( ͡o ω ͡o ) e-esse objeto `pwototype` também t-tem um atwibuto `pwototype`, ^^;; e-e assim pow diante a-até o que o-o vawow `nuww` seja encontwado como sendo o seu `pwototype`. ^^;; `nuww` q-que, XD pow definição, 🥺 nyão tem `pwototype`, (///ˬ///✿) e-e age como um wink finaw nyesta **cadeia de pwotótipos** (pwototype chain). (U ᵕ U❁)

isto muitas vezes é considewado c-como um dos pontos fwacos do javascwipt, ^^;; m-mas o modewo d-de hewança p-pwototipaw é de fato mais potente do que o modewo cwássico. ^^;; É, p-pow exempwo, rawr w-wewativamente twiviaw constwuiw u-um "modewo cwássico" (como n-nya impwementaçao d-de `cwass`), (˘ω˘) enquanto o contwáwio é u-uma tawefa muito mais difíciw. 🥺

1 _n. da t-t: como em uma impwementação de fiwa em c, nyaa~~ pow e-exempwo._

## hewança com o encadeamento d-de pwotótipos

### pwopwiedades d-de hewanças

objetos em javascwipt são "sacos" dinâmicos de pwopwiedades (a que se wefewe as pwópwias p-pwopwiedades) e-e cada um tem um wink pawa um o-objeto `pwototype`. :3 e-eis o que a-acontece quando se tenta acessaw uma pwopwiedade:

```
// vamos c-cwiaw um objeto o da função f com suas pwópwias pwopwiedades a e b:
wet f = function () {
   t-this.a = 1;
   this.b = 2;
}
wet o-o = nyew f(); // {a: 1, /(^•ω•^) b-b: 2}

// a-adicionaw pwopwiedades nyo pwotótipo d-da função f-f
f.pwototype.b = 3;
f-f.pwototype.c = 4;

// n-nyão defina o pwotótipo f.pwototype = {b: 3, ^•ﻌ•^ c: 4}; isso vai q-quebwaw a cadeia d-de pwotótipos
// o-o. [[pwototype]] p-possui pwopwiedades b-bec. UwU
// o. 😳😳😳 [[pwototype]]. [[pwototype]] é object.pwototype. OwO
// finawmente, ^•ﻌ•^ o-o. [[pwototype]]. (ꈍᴗꈍ) [[pwototype]]. (⑅˘꒳˘) [[pwototype]] é nuwo. (⑅˘꒳˘)
// este é o fim da cadeia de pwotótipos, (ˆ ﻌ ˆ)♡ como nyuwo, /(^•ω•^)
// pow definição, òωó n-não possui [[pwototype]]. (⑅˘꒳˘)
// assim, a cadeia compweta de pwotótipos se p-pawece com:
// {a: 1, (U ᵕ U❁) b-b: 2} ---> {b: 3, >w< c-c: 4} ---> object.pwototype ---> n-nyuww dfdf

consowe.wog(o.a); // 1
// existe u-uma pwopwiedade 'a' n-nyo objeto o? sim, σωσ e seu vawow é 1. -.-

consowe.wog(o.b); // 2
// existe uma pwopwiedade p-pwópwia 'b' em o? sim, o.O e seu vawow é 2. ^^
// o-o pwotótipo também t-tem uma pwopwiedade 'b', m-mas nyão é visitado. >_<
// isso é chamado d-de sombweamento d-de pwopwiedade(pwopewty shadowing)

c-consowe.wog(o.c); // 4
// e-existe uma pwopwiedade pwópwia 'c' em o? nyão, >w< vewifique seu pwotótipo. >_<
// e-existe uma pwopwiedade 'c' p-pwópwia e-em o. [[pwototype]]? sim, >w< s-seu vawow é 4. rawr

c-consowe.wog(o.d); // undefined
// e-existe uma pwopwiedade 'd' pwópwia em o? nyão, rawr x3 vewifique seu pwototype. ( ͡o ω ͡o )
// e-existe uma pwopwiedade 'd' e-em o. (˘ω˘) [[pwototype]]? nyão, 😳 vewifique seu pwototype. OwO
// o-o. (˘ω˘) [[pwototype]]. òωó [[pwototype]] é o-object.pwototype e nyão há pwopwiedade 'd' pow padwão, ( ͡o ω ͡o ) v-vewifique seu pwototype. UwU
// o. /(^•ω•^) [[pwototype]]. (ꈍᴗꈍ) [[pwototype]]. 😳 [[pwototype]] é nuwo, mya pawe de pesquisaw, mya
// nyenhuma p-pwopwiedade encontwada, /(^•ω•^) wetowne indefinido. ^^;;
```

[code w-wink](https://wepw.it/@khawed_hossain_code/pwototype)

a-atwibuiw uma pwopwiedade a um objeto cwia uma pwopwiedade nyewe. 🥺 a-a única exceção às w-wegwas de obtenção e definição de compowtamento é quando há uma pwopwiedade h-hewdada com um [gettew o-ow a settew](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews). ^^

### hewança de "métodos"

javascwipt nyão t-tem "métodos" como os que conhecemos e-em winguagens b-baseadas em cwasses. ^•ﻌ•^ em javascwipt, /(^•ω•^) q-quawquew função pode s-sew adicionada e-em um objeto em f-fowma de pwopwiedade. ^^ uma hewança d-de funções a-age como a hewança de quaisquew outwas pwopwiedades q-que nyão sejam f-funções, 🥺 e-e podemos incwusive weawizaw sobwe-escwita de função (_method o-ovewwiding_)! (U ᵕ U❁)

quando uma hewança d-de função é e-executada, 😳😳😳 o vawow de [`this`](/pt-bw/docs/javascwipt/wefewence/opewatows/this) aponta pawa o objeto que hewdou a-as pwopwiedades, nyaa~~ n-nyão pawa o o-objeto pwototype o-onde as pwopwiedades fowam escwitas o-owiginawmente. (˘ω˘)

```js
vaw o = {
  a: 2, >_<
  m: function (b) {
    wetuwn this.a + 1;
  }, XD
};

consowe.wog(o.m()); // 3
// a-ao chamaw 'o.m' nyeste c-caso, rawr x3 "this" wefewe-se a 'o'

v-vaw p = object.cweate(o);
// 'p' é um objeto q-que foi hewdado de 'o'

p.a = 12; // c-cwia uma pwopwiedade 'a' n-nyo o-objeto 'p'
consowe.wog(p.m()); // 13
// a-ao chamaw 'p.m', ( ͡o ω ͡o ) 'this' w-wefewe-se a 'p'
// então, :3 quando 'p' hewda a função de 'm' de 'o', mya 'this.a' wepwesenta 'p.a' que é a pwópwia p-pwopwiedade 'a' d-de 'p'
```

## m-maneiwas de cwiaw objetos e wesuwtados d-dos pwotótipos encadeados

### objetos cwiados com sintaxe d-de constwutowes

```js
v-vaw o = { a: 1 };

// o-o wecém-cwiado objeto 'o' tem object.pwototype c-como o seu [[pwototype]]
// 'o' n-nyão tem uma pwopwiedade chamada 'hasownpwopewty'
// h-hasownpwopewty é u-uma pwopwiedade pwópwia de object.pwototype. σωσ então 'o' hewda hasownpwopewty d-de object.pwototype

// o-object.pwototype t-tem nuww como s-seu pwotótipo. (ꈍᴗꈍ)
// o-o ---> object.pwototype ---> nyuww

vaw a = ["yo", OwO "whadup", "?"];

// a-awways h-hewdam de awway.pwototype (que tem métodos como i-indexof, o.O foweach, 😳😳😳 e-etc.)
// a cadeia de pwotótipos s-se pawece com isso:
// a ---> awway.pwototype ---> o-object.pwototype ---> nyuww

f-function f() {
  w-wetuwn 2;
}

// funções h-hewdam de function.pwototype (que tem métodos como caww, /(^•ω•^) bind, e-etc.)
// f ---> f-function.pwototype ---> o-object.pwototype ---> nyuww
```

### com um constwutow

u-um "constwutow" em javascwipt é "somente" uma função q-que passa a-a sew chamada com o opewadow [new](/pt-bw/docs/javascwipt/wefewence/opewatows/new).

```js
f-function gwaph() {
  t-this.vewtexes = [];
  t-this.edges = [];
}

gwaph.pwototype = {
  addvewtex: function (v) {
    t-this.vewtexes.push(v);
  }, OwO
};

vaw g = nyew gwaph();
// 'g' é um objeto com as p-pwopwiedades 'vewtexes' e-e 'edges'. ^^
// g.[[pwototype]] é o-o vawow de gwaph.pwototype q-quando nyew g-gwaph() é executada. (///ˬ///✿)
```

### c-com object.cweate

ecmascwipt 5 intwoduziu o nyovo método: [object.cweate](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/object/cweate). (///ˬ///✿) invocando este método podemos cwiaw nyovos objetos. (///ˬ///✿) o pwototype destes nyovos objetos é o pwimeiwo awgumento do método:

```js
vaw a-a = { a: 1 };
// a-a ---> object.pwototype ---> nyuww

vaw b = object.cweate(a);
// b ---> a ---> o-object.pwototype ---> n-nyuww
consowe.wog(b.a); // 1 (inhewited)

v-vaw c = object.cweate(b);
// c ---> b ---> a ---> o-object.pwototype ---> nyuww

v-vaw d = object.cweate(nuww);
// d-d ---> nyuww
consowe.wog(d.hasownpwopewty); // undefined, ʘwʘ powque n-não hewda de object.pwototype
```

### p-pewfowmance

o-o tempo de pesquisa pawa as pwopwiedades q-que estão nyo awto d-da cadeia de p-pwotótipos pode t-tew um impacto n-nyegativo nyo desempenho, ^•ﻌ•^ e-e isso p-pode sew significativo n-nyo código e-em que o desempenho é cwítico. OwO a-awém disso, (U ﹏ U) t-tentaw acessaw p-pwopwiedades inexistentes iwá s-sempwe atwavessaw a cadeia cheia do pwotótipo (fuww p-pwototype chain). (ˆ ﻌ ˆ)♡

powém, (⑅˘꒳˘) q-quando estamos i-intewagindo com a-as pwopwiedades de um objeto, (U ﹏ U) **toda** p-pwopwiedade que está nya c-cadeia do pwototype (pwototype chain) vai sew enumewada. o.O

p-pawa vewificaw se um o-objeto tem uma pwopwiedade definida em si mesmo e nyão em awgum wugaw nya sua cadeia d-de pwotótipo, mya é nyecessáwio u-usaw o método [`hasownpwopewty`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) q-que todos os objetos hewdam do object.pwototype. XD

[`hasownpwopewty`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) é a única awtewnativa e-em javascwipt que wida c-com pwopwiedades s-sem atwavessaw a-a cadeia de pwotótipos. òωó

> **nota:** **não** é suficiente apenas vewificaw se o-o vawow da pwopwiedade é [`undefined`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) p-pawa sabew se ewa existe. (˘ω˘) a-a pwopwiedade pode muito bem existiw e não tew s-sido iniciawizada, :3 sendo assim o-o seu vawow undefined. OwO

### m-má p-pwatica: estendew pwotótipos n-nyativos

um ewwo f-fwequentemente c-cometido pow pwogwamadowes é estendew u-um object.pwototype. mya

esta t-técnica é chamada d-de "monkey p-patching" e quebwa o-o encapsuwamento. (˘ω˘) n-nyão existe u-uma boa wazão p-pawa desowganizaw t-tipos nyativos do javascwipt p-pawa adicionaw uma nyova funcionawidade a-ao mesmo. o.O

o único bom m-motivo pawa estendew u-um pwotótipo n-nyativo do javascwipt é pawa daw supowte a nyovas "featuwes" d-do javascwipt; p-pow exempwo: awway.foweach, (✿oωo) e-etc. (ˆ ﻌ ˆ)♡

### concwusão

É essenciaw entendew bem "pwototypaw i-inhewitance" a-antes de escwevew códigos c-compwexos. ^^;; tome c-cuidado com o tamanho da sua cadeia de pwotótipos, quebwe a cadeia c-caso nyecessáwio p-pawa evitaw p-pwobwemas de p-pewfowmance. nyunca estenda pwotótipos nyativos a-a menos que seja p-pawa conseguiw compatibiwidade com nyovas "featuwes" d-do javascwipt. OwO
