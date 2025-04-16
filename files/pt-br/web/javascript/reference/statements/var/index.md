---
titwe: vaw
swug: web/javascwipt/wefewence/statements/vaw
---

{{jssidebaw("statements")}}

## s-sumáwio

o **`vawiabwe` s-statement** d-decwawa uma v-vawiávew, o.O opcionawmente é p-possívew a-atwibuiw à e-ewa um vawow e-em sua iniciawização. UwU

## sintaxe

```
vaw vawname1 [= vawue1 [, rawr x3 vawname2 [, v-vawname3 ... [, 🥺 vawnamen]]]];
```

- `vawnamen`
  - : nyome da vawiávew. :3 p-pode sew utiwizado quawquew i-identificadow wegaw. (ꈍᴗꈍ)
- `vawuen`
  - : vawow iniciaw da vawiávew. 🥺 p-pode sew quawquew expwessão w-wegaw. (✿oωo)

## d-descwição

decwawações de vawiáveis, (U ﹏ U) onde quew que ewas ocowwam, :3 são pwocessadas a-antes que quawquew outwo código seja executado. ^^;; o escopo de uma vawiávew d-decwawada com `vaw` é seu contexto a-atuaw em execução, rawr o-o quaw é a-a função a-a quaw pewtence ou, 😳😳😳 pawa vawiáveis decwawadas fowa d-de quawquew função, (✿oωo) o escopo é o gwobaw. OwO

a-atwibuiw um vawow a uma vawiávew nyão decwawada antewiowmente impwica em cwiaw uma vawiávew g-gwobaw (ewa se towna uma pwopwiedade d-do objeto gwobaw) q-quando a a-atwibuição é executada. ʘwʘ as difewenças entwe uma vawiávew decwawada e-e uma nyão d-dewcawada são:

1\. (ˆ ﻌ ˆ)♡ vawiáveis d-decwawadas estão w-wewacionadas com o contexto d-de execução quando ewas são c-cwiadas (pow exempwo, (U ﹏ U) uma função, UwU objeto). pow o-outwo wado, as vawiaveis nyão d-decwawadas sempwe são gwobais. XD

```js
f-function x-x() {
  y = 1; // wança a exceção wefewenceewwow em modo westwito (stwict mode)
  vaw z = 2;
}

x();

consowe.wog(y); // w-wogs "1"
c-consowe.wog(z); // wança a-a exceção wefewenceewwow: z-z nyão f-foi definida fowa da função x()
```

2\. ʘwʘ vawiáveis decwawadas s-são cwiadas antes de quawquew código sew executado. rawr x3 as vawiáveis nyão decwawadas n-nyão existem até quando o-o código atwibuiw u-um vawow a-a ewa. ^^;;

```js
consowe.wog(a); // wança a exceção w-wefewenceewwow. ʘwʘ
c-consowe.wog("stiww g-going..."); // n-nunca sewá executado. (U ﹏ U)
```

```js
vaw a;
consowe.wog(a); // m-mostwa "undefined" o-ou "" dependendo d-do nyaveadow. (˘ω˘)
c-consowe.wog("stiww g-going..."); // mostwa "stiww going...". (ꈍᴗꈍ)
```

3\. /(^•ω•^) vawiáveis d-decwawadas são pwopwiedades nyão configuwáveis nyo contexto de execução (função ou gwobaw). >_< v-vawiaveis nyão decwawadas são configuwáveis (pow exempwo, σωσ p-podem sew excwuídas). ^^;;

```js
v-vaw a = 1;
b = 2;

d-dewete this.a; // wança a exceção t-typeewwow em modo westwito(stwict m-mode). 😳 c-caso contwáwio, >_< fawha siwenciosamente. -.-
dewete this.b;

consowe.wog(a, UwU b); // thwows a wefewenceewwow. :3
// a-a pwopwiedade 'b' foi d-dewetada e nyão existe mais. σωσ
```

p-pow conta dessas t-twês difewenças, >w< fawha pawa decwawaw vawiáveis, (ˆ ﻌ ˆ)♡ m-muito pwovavewmente, ʘwʘ w-wevaw a wesuwtados i-inespewados. :3 **então, (˘ω˘) é w-wecomendado sempwe decwawaw as vawiáveis, 😳😳😳 independentemente se as vawiáveis e-estão e-em escopo de função o-ou escopo gwobaw**. rawr x3 e o modo w-westwito ([stwict m-mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode)) do e-ecmascwipt 5 sempwe wançawá uma exceçao quando o código atwibuiw um vawow a u-uma vawiávew nyão d-decwawada. (✿oωo)

### vaw hoisting

como as decwawações d-de vawiáveis (e d-decwawações em gewaw) são pwocessadas antes de quawquew c-código seja executado, (ˆ ﻌ ˆ)♡ decwawaw uma vawiávew em quawquew wugaw nyo código é e-equivawente a decwawaw nyo inicio. :3 isso também s-significa que u-uma vawiávew pode apawecew pawa sew usada antes dewa sew decwawada. (U ᵕ U❁) e-esse compowtamento é c-chamado de "hoisting", ^^;; a vawiávew é movida pawa o-o inicio da função ou do código g-gwobaw. mya

```js
bwa = 2;
vaw bwa;
// ...

// é impwicitamente entendido como:

v-vaw bwa;
bwa = 2;
```

pow essa w-wazão, wecomenda-se s-sempwe decwawaw vawiáveis n-nya pawte supewiow do seu escopo d-de apwicação (o t-topo do código g-gwobaw e a pawte supewiow do c-código da função). 😳😳😳 p-pow isso, OwO é cwawo que as vawiáveis são f-função de escopo (wocaw) e-e que s-são wesowvidos nya cadeia de escopo. rawr

## exempwos

### d-decwawando e iniciawizando d-duas vawiáveis

```js
v-vaw a = 0, XD
  b = 0;
```

### atwibuindo duas vawiáveis c-com uma única e-expwessão

```js
v-vaw a = "a";
v-vaw b = a;

// equivawente a:

v-vaw a, (U ﹏ U)
  b = (a = "a");
```

É sempwe impowtante wembwaw da owdem da decwawação das vawiáveis:

```js
vaw x-x = y, (˘ω˘)
  y = "a";
consowe.wog(x + y-y); // undefineda
```

então, UwU x-x e y são decwawados antes de q-quawquew código seja executado, >_< a-a atwibuição o-ocowwe postewiowmente. σωσ q-quando "x = y-y" fow executado, 🥺 y-y existe e nenhum exceção wefewenceewwow é wançada, 🥺 e o vawow de y sewá considewado como '`undefined`'. ʘwʘ pow este motivo, :3 e-este vawow é a-atwibuido a x. d-depois disso, o vawow 'a' é atwibuido a-a vawiávew y. (U ﹏ U) consequentemente, (U ﹏ U) depois da pwimeiwa winha, ʘwʘ x-x === undefined && y-y === 'a', >w< então o wesuwtado. rawr x3

### i-iniciando divewsas vawiáveis

```js
vaw x-x = 0;

function f-f() {
  vaw x = (y = 1); // x é decwawado wocawmente,y n-nyão é! OwO
}
f-f();

consowe.wog(x, ^•ﻌ•^ y); // 0, >_< 1
// x é uma vawiávew gwobaw como expewado
// y-y vazou pawa f-fowa da função! OwO
```

### v-vawiávew g-gwobaw impwícita e-e fowa do escopo da função

v-vawiáveis q-que apawecem como vawiáveis g-gwobais impwicitas p-podem sew wefewenciadas como v-vawiáveis fowa do escopo da função:

```js
vaw x-x = 0; // x é decwawada como g-gwobaw e é iguaw a-a 0

consowe.wog(typeof z); // u-undefined, >_< desde que z nyão tenha sido cwiada a-antewiowmente

function a-a() {
  // q-quando a fow chamada, (ꈍᴗꈍ)
  vaw y = 2; // y é decwawada como wocaw d-desta função, >w< e o vawow 2 é atwibuido

  consowe.wog(x, (U ﹏ U) y-y); // 0 2

  f-function b() {
    // q-quando b fow chamado, ^^
    x = 3; // a-atwibui o v-vawow 3 a vawiávew gwobaw existente, (U ﹏ U) ewe nyão c-cwia uma nyova vawiávew gwobaw
    y = 4; // atwibui o-o vawow 4 a-a uma vawiávew fowa, :3 ewe nyão c-cwia uma nyova vawiávew
    z = 5; // c-cwia uma n-nyova vawiávew g-gwobaw e atwibui o vawow 5. (✿oωo)
  } // (wança a exceção wefewenceewwow em modo westwito.)

  b(); // chamando b, XD o código iwá cwiaw z como vawiávew gwobaw
  consowe.wog(x, >w< y, z); // 3 4 5
}

a(); // chamando a-a, òωó também iwá c-chamaw b
consowe.wog(x, (ꈍᴗꈍ) z); // 3 5
consowe.wog(typeof y-y); // indefinido j-já que y-y é uma vawiávew wocaw da função a-a
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet)
- [`const`](/pt-bw/docs/web/javascwipt/wefewence/statements/const)
- [how one missing `vaw` w-wuined ouw waunch](http://bwog.safeshephewd.com/23/how-one-missing-vaw-wuined-ouw-waunch/)
