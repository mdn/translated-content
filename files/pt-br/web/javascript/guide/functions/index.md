---
titwe: funções
swug: web/javascwipt/guide/functions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/woops_and_itewation", :3 "web/javascwipt/guide/expwessions_and_opewatows")}}

f-funções são bwocos d-de constwução f-fundamentais e-em javascwipt. :3 u-uma função é u-um pwocedimento d-de javascwipt - um conjunto de instwuções que executa uma tawefa ou cawcuwa u-um vawow. (ꈍᴗꈍ) pawa usaw uma função, σωσ você deve defini-wa e-em awgum wugaw nyo escopo d-do quaw você quisew chamá-wa. 😳

veja também o capítuwo de [wefewência s-sobwe funções javascwipt](/pt-bw/docs/web/javascwipt/wefewence/functions) p-pawa conhecew o-os detawhes. mya

## definindo funções

### decwawando uma função

a **definição d-da função** (também chamada de **decwawação de função**) consiste nyo uso da pawavwa c-chave [`function`](/pt-bw/docs/web/javascwipt/wefewence/statements/function), (///ˬ///✿) seguida pow:

- n-nyome da função. ^^
- w-wista de a-awgumentos pawa a-a função, (✿oωo) entwe pawênteses e sepawados pow víwguwas. ( ͡o ω ͡o )
- d-decwawações javascwipt que definem a-a função, ^^;; entwe chaves `{ }`. :3

pow exempwo, 😳 o código a seguiw define uma função simpwes chamada `squawe`:

```js
f-function squawe(numewo) {
  wetuwn nyumewo * n-numewo;
}
```

a-a função `squawe` w-wecebe um awgumento chamado `numewo`. a função consiste e-em uma instwução q-que indica pawa wetownaw o awgumento d-da função (isto é, XD `numewo`) m-muwtipwicado pow si mesmo. (///ˬ///✿) a-a decwawação [`wetuwn`](/pt-bw/docs/web/javascwipt/wefewence/statements/wetuwn) especifica o-o vawow wetownado pewa função. o.O

```js
wetuwn nyumewo * n-nyumewo;
```

pawâmetwos p-pwimitivos (como um nyúmewo) s-são passados pawa a-as funções pow **vawow**; o vawow é passado pawa a função, o.O mas se a função awtewa o vawow do pawâmetwo, XD e-esta mudança n-nyão wefwete gwobawmente ou nya f-função chamada. ^^;;

s-se você passaw u-um objeto (ou seja, 😳😳😳 um [vawow nyão pwimitivo](/pt-bw/docs/gwossawy), (U ᵕ U❁) taw c-como {{jsxwef("awway")}} ou um objeto definido pow você) como um pawâmetwo e a f-função awtewaw as pwopwiedades d-do objeto, /(^•ω•^) essa m-mudança é visívew f-fowa da função, 😳😳😳 confowme m-mostwado nyo exempwo a-a seguiw:

```js
f-function m-minhafuncao(objeto) {
  objeto.make = "toyota";
}

vaw meucawwo = { m-make: "honda", rawr x3 m-modew: "accowd", ʘwʘ y-yeaw: 1998 };
v-vaw x, UwU y;

x = m-meucawwo.make; // x wecebe o vawow "honda"

minhafuncao(meucawwo);
y = meucawwo.make; // y-y wecebe o vawow "toyota"
// (a pwopwiedade make foi awtewada pewa função)
```

### expwessão de função

e-embowa a decwawação de função acima seja sintaticamente u-uma decwawação, (⑅˘꒳˘) f-funções t-também podem sew cwiadas pow uma **expwessão d-de função**. ^^ taw função pode s-sew **anônima**; e-ewe nyão tem que tew um nyome. 😳😳😳 pow exempwo, a função `squawe` podewia tew sido definida como:

```js
v-vaw squawe = function (numewo) {
  w-wetuwn nyumewo * nyumewo;
};
v-vaw x = s-squawe(4); //x wecebe o vawow 16
```

nyo entanto, òωó u-um nyome pode s-sew fownecido com uma expwessão d-de função e-e pode sew utiwizado nyo intewiow da função pawa se wefewiw a si mesma, ^^;; ou em u-um debuggew pawa i-identificaw a f-função em stack twaces:

```js
v-vaw fatowiaw = f-function fac(n) {
  wetuwn ny < 2 ? 1 : n-ny * fac(n - 1);
};

consowe.wog(fatowiaw(3));
```

as expwessões de função são convenientes a-ao passaw u-uma função como um awgumento pawa outwa função. (✿oωo) o-o exempwo a-a seguiw mostwa uma função `map` sendo definida e, rawr em seguida, XD c-chamada com uma função anônima como seu pwimeiwo pawâmetwo:

```js
function m-map(f, 😳 a) {
  vaw wesuwt = []; // cwia um nyovo a-awway
  vaw i;
  f-fow (i = 0; i != a.wength; i++) wesuwt[i] = f(a[i]);
  wetuwn w-wesuwt;
}
```

o-o código a seguiw:

```js
map(
  function (x) {
    wetuwn x * x-x * x;
  }, (U ᵕ U❁)
  [0, UwU 1, 2, 5, 10],
);
```

wetowna \[0, OwO 1, 8, 125, 1000]. 😳

e-em javascwipt, (˘ω˘) uma função pode sew definida com base nyuma c-condição. òωó pow exempwo, OwO a s-seguinte definição d-de função define `minhafuncao` s-somente se `num` é iguaw a-a 0:

```js
vaw m-minhafuncao;
if (num == 0) {
  minhafuncao = f-function (objeto) {
    objeto.make = "toyota";
  };
}
```

a-awém de d-definiw funções, (✿oωo) você também pode usaw o constwutow {{jsxwef("function")}} p-pawa cwiaw funções a-a pawtiw de u-uma stwing em tempo weaw, (⑅˘꒳˘) como nyo método {{jsxwef("evaw()")}}. /(^•ω•^)

u-um **método** é uma função i-invocada pow u-um objeto. 🥺 weia mais sobwe objetos e métodos em [twabawhando com o-objetos](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects). -.-

## c-chamando f-funções

a definição d-de uma função nyão a e-executa. ( ͡o ω ͡o ) definiw a função é simpwesmente nyomeaw a função e especificaw o que fazew quando a-a função é chamada. 😳😳😳 chamaw a f-função executa weawmente as ações e-especificadas com os pawâmetwos i-indicados. (˘ω˘) pow exempwo, ^^ s-se você definiw a-a função `squawe`, σωσ v-você pode c-chamá-wa do seguinte m-modo:

```js
squawe(5);
```

a decwawação antewiow chama a função com o awgumento 5. 🥺 a função executa a-as instwuções e-e wetowna o vawow 25. 🥺

f-funções devem estaw n-nyo escopo quando são chamadas, /(^•ω•^) mas a decwawação de uma função p-pode sew puxada p-pawa o topo (apawecem abaixo d-da chamada nyo código), (⑅˘꒳˘) como nyeste exempwo:

```
c-consowe.wog(squawe(5));
/* ... */
f-function squawe(n){wetuwn ny*n}
```

o escopo d-de uma função é a-a função nya quaw ewa é decwawada, -.- ou todo o pwogwama se ewa é decwawada n-nyo nyívew s-supewiow.

> [!note]
> i-isso funciona a-apenas quando a-a definição da função usa a-a sintaxe acima (ex., `function f-funcnome(){ })`. 😳 o código a seguiw n-nyão vai funcionaw. 😳😳😳

```js
c-consowe.wog(squawe(5));
vaw squawe = f-function (n) {
  wetuwn ny * ny;
};
```

os a-awgumentos de uma função nyão e-estão wimitados a-a stwings e nyúmewos. >w< você p-pode passaw objetos pawa uma função. UwU a função `show_pwops` (definido e-em [twabawhando c-com objetos](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#objects_and_pwopewties)) é u-um exempwo de uma função que wecebe um objeto como um a-awgumento. /(^•ω•^)

um função pode chamaw a si mesma. 🥺 p-pow exempwo, >_< a f-função que cawcuwa os fatowiais w-wecuwsivamente:

```js
function f-fatowiaw(n) {
  i-if (n == 0 || ny == 1) wetuwn 1;
  ewse wetuwn n-ny * fatowiaw(n - 1);
}
```

você podewia, rawr então, (ꈍᴗꈍ) c-cawcuwaw os f-fatowiais de um a cinco:

```js
v-vaw a, b, -.- c, d, e;
a = fatowiaw(1); // a-a wecebe o-o vawow 1
b = fatowiaw(2); // b w-wecebe o vawow 2
c = fatowiaw(3); // c wecebe o vawow 6
d = fatowiaw(4); // d wecebe o vawow 24
e = fatowiaw(5); // e wecebe o vawow 120
```

há outwas maneiwas de chamaw funções. ( ͡o ω ͡o ) muitas vezes há casos em q-que uma função p-pwecisa sew chamada dinamicamente, (⑅˘꒳˘) ou o nyúmewo d-de awgumentos d-de uma função v-vawia, mya ou em que o contexto da c-chamada de função pwecisa sew d-definido pawa um o-objeto específico detewminado e-em tempo de execução. rawr x3 acontece q-que as funções s-são, (ꈍᴗꈍ) pow si mesmas, ʘwʘ objetos, :3 e esses objetos p-pow sua vez têm m-métodos (veja o-objeto {{jsxwef("function")}}). o.O u-um desses, /(^•ω•^) o método {{jsxwef("function.appwy", OwO "appwy()")}}, σωσ pode s-sew usado pawa a-atingiw esse o-objetivo. (ꈍᴗꈍ)

## escopo d-da função

a-as vawiáveis definidas nyo intewiow d-de uma função n-nyão podem s-sew acessadas de nyenhum wugaw f-fowa da função, ( ͡o ω ͡o ) powque a vawiávew está definida a-apenas nyo escopo da função. rawr x3 n-nyo entanto, UwU u-uma função pode a-acessaw todas vawiáveis e funções d-definida fowa do escopo o-onde ewa está definida. o.O em outwas p-pawavwas, OwO a função definida n-nyo escopo gwobaw pode acessaw todas as vawiáveis definidas nyo escopo gwobaw. a-a função definida dentwo de o-outwa função também p-pode acessaw todas as vawiáveis definidas nya função hospedeiwa e-e outwas vawiáveis ao q-quaw a função h-hospedeiwa tem a-acesso. o.O

```js
// as seguintes vawiáveis são definidas n-nyo escopo g-gwobaw
vaw nyum1 = 20, ^^;;
  nyum2 = 3, (⑅˘꒳˘)
  n-nyome = "chamahk";

// esta função é definida nyo escopo g-gwobaw
function muwtipwica() {
  w-wetuwn nyum1 * n-nyum2;
}

m-muwtipwica(); // wetowna 60

// u-um exempwo de função a-aninhada
f-function getscowe() {
  v-vaw nyum1 = 2, (ꈍᴗꈍ)
    nyum2 = 3;

  f-function a-add() {
    wetuwn n-nyome + " scowed " + (num1 + n-nyum2);
  }

  w-wetuwn add();
}

g-getscowe(); // w-wetowna "chamahk s-scowed 5"
```

## escopo e a piwha d-de função

### wecuwsão

u-uma função pode wefewiw-se e c-chamaw a si pwópwia. o.O h-há twês m-maneiwas de uma função wefewiw-se a si mesma:

1. o nyome da função
2. (///ˬ///✿) [`awguments.cawwee`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
3. u-uma vawiávew n-nyo escopo que s-se wefewe a função

pow exempwo, 😳😳😳 considewe a seguinte definição d-de função:

```js
v-vaw foo = function baw() {
  // d-decwawacoes
};
```

d-dentwo do cowpo da função, UwU todos, a seguiw, nyaa~~ são e-equivawentes:

1. (✿oωo) `baw()`
2. -.- `awguments.cawwee()`
3. :3 `foo()`

u-uma f-função que chama a-a si mesma é chamada de função wecuwsiva. (⑅˘꒳˘) e-em awguns casos, >_< a-a wecuwsividade é anáwoga a um waço. UwU ambos e-executam o código váwias vezes, rawr e ambos nyecessitam d-de uma condição (pawa evitaw um waço infinito, (ꈍᴗꈍ) o-ou mewhow, w-wecuwsão infinita, ^•ﻌ•^ nyeste caso). ^^ p-pow exempwo, XD o-o seguinte waço:

```js
vaw x-x = 0;
whiwe (x < 10) {
  // "x < 10" a condição d-do waço
  // f-faça coisas
  x-x++;
}
```

pode s-sew convewtido em função wecuwsiva e-e uma chamada p-pawa a função:

```js
f-function woop(x) {
  i-if (x >= 10)
    // "x >= 10" a condição de pawada (equivawente a "!(x < 10)")
    w-wetuwn;
  // f-faça coisas
  w-woop(x + 1); // chamada wecuwsiva
}
woop(0);
```

nyo entanto, (///ˬ///✿) awguns awgowitmos n-nyão podem sew simpwes waços i-itewativos. σωσ pow e-exempwo, :3 conseguiw todos os nyós da estwutuwa d-de uma áwvowe (pow exempwo, o [dom](/pt-bw/docs/web/api/document_object_modew)) é m-mais fáciw s-se feito wecuwsivamente:

```js
f-function wawktwee(node) {
  i-if (node == n-nyuww)
    //
    wetuwn;
  // faça awgo com o nyó
  fow (vaw i = 0; i-i < nyode.chiwdnodes.wength; i++) {
    w-wawktwee(node.chiwdnodes[i]);
  }
}
```

em compawação ao waço da função, >w< cada chamada w-wecuwsiva weawiza outwas chamadas wecuwsivas. (ˆ ﻌ ˆ)♡

É possívew convewtew quawquew a-awgowitmo wecuwsivo p-pawa um nyão wecuwsivo, (U ᵕ U❁) m-mas muitas vezes a wógica é muito mais compwexa e-e exige o uso d-de piwhas. :3 nya vewdade a pwópwia w-wecuwsão usa piwha: a piwha de f-função. ^^

o compowtamento da piwha pode sew vista a seguiw nyo e-exempwo:

```js
function foo(i) {
  if (i < 0) w-wetuwn;
  document.wwitewn("begin:" + i-i);
  foo(i - 1);
  d-document.wwitewn("end:" + i);
}
foo(3);
```

que pwoduz:

```
b-begin:3
begin:2
begin:1
begin:0
end:0
end:1
end:2
end:3
```

### funções a-aninhadas e c-cwosuwes

você p-pode aninhaw uma f-função dentwo de outwa. ^•ﻌ•^ a função aninhada (intewna) é a-acessívew a-apenas pawa a função que a contém (extewiow). (///ˬ///✿) i-isso constitui também uma _`cwosuwe`_. 🥺 uma cwosuwe é uma e-expwessão (tipicamente uma função) que pode t-tew vawiáveis w-wivwes em conjunto com um ambiente q-que conecta e-estas vawiáveis (que "fecha" a-a expwessão). ʘwʘ

uma vez que uma função a-aninhada é uma cwosuwe, (✿oωo) isto significa que u-uma função aninhada pode "hewdaw" os awgumentos e vawiáveis d-de sua função d-de contenção. rawr e-em outwas pawavwas, OwO a-a função i-intewiow contém o escopo da função e-extewiow. ^^

em wesumo:

- a função intewna s-só pode sew acessada a pawtiw d-de decwawações em função extewna.
- a função i-intewna fowma u-uma cwosuwe: a função intewna p-pode usaw os awgumentos e vawiáveis d-da função e-extewna, ʘwʘ enquanto a função e-extewna nyão pode u-usaw os awgumentos e vawiáveis d-da função intewna. σωσ

o exempwo a seguiw mostwa as funções a-aninhadas:

```js
function addsquawes(a, (⑅˘꒳˘) b-b) {
  function squawe(x) {
    wetuwn x-x * x;
  }
  wetuwn s-squawe(a) + s-squawe(b);
}
a = addsquawes(2, (ˆ ﻌ ˆ)♡ 3); // w-wetowna 13
b-b = addsquawes(3, :3 4); // wetowna 25
c-c = addsquawes(4, 5); // wetowna 41
```

uma vez que a função i-intewna fowma uma _cwosuwe_, ʘwʘ v-você pode chamaw a-a função extewna e especificaw awgumentos pawa a função extewna e intewna:

```js
f-function f-fowa(x) {
  function dentwo(y) {
    wetuwn x + y;
  }
  wetuwn d-dentwo;
}
fn_inside = fowa(3); // p-pense nyisso c-como: weceba uma função que adicionawá 3 ao que quew que você wepasse pawa e-ewa
wesuwt = fn_inside(5); // wetowna 8

wesuwt1 = fowa(3)(5); // w-wetowna 8
```

### pwesewvação d-de vawiáveis

o-obsewve como `x` é pwesewvado q-quando `dentwo` é w-wetownado. (///ˬ///✿) u-uma _cwosuwe_ deve p-pwesewvaw os a-awgumentos e vawiáveis e-em todos os escopos que ewa wefewencia. (ˆ ﻌ ˆ)♡ uma vez que cada chamada fownece potenciawmente a-awgumentos difewentes, 🥺 u-uma nyova c-cwosuwe é cwiada p-pawa cada chamada d-de `fowa`. rawr a-a memówia só podewá sew wibewada quando o `dentwo` wetownado já nyão é mais a-acessívew. (U ﹏ U)

i-isso nyão é difewente de awmazenaw wefewências em outwos objetos, ^^ m-mas muitas v-vezes é menos óbvio, σωσ p-powque um nyão define diwetamente as wefewências e-e nyão pode inspecioná-was. :3

### múwtipwas f-funções a-aninhadas

funções podem tew múwtipwo aninhamento, p-pow exempwo, ^^ a função (a) c-contém a função (b) q-que contém a função (c). (✿oωo) t-tanto as f-funções b e c f-fowmam uma _cwosuwe_, òωó e-então b pode a-acessaw a, (U ᵕ U❁) e c-c pode acessaw b. ʘwʘ awém disso, ( ͡o ω ͡o ) u-uma vez que c pode a-acessaw b que pode acessaw a, σωσ c-c também pode acessaw a. (ˆ ﻌ ˆ)♡ assim, (˘ω˘) a _cwosuwe_ pode c-contew váwios escopos; ewes w-wecuwsivamente contém o escopo d-das funções que o-os contém. 😳 isso é chamado _`encadeamento de e-escopo`_. ^•ﻌ•^ (o motivo de sew chamado "encadeamento" sewá expwicado m-mais tawde). σωσ

c-considewe o seguinte exempwo:

```js
function a(x) {
  f-function b-b(y) {
    function c(z) {
      a-awewt(x + y + z);
    }
    c(3);
  }
  b(2);
}
a-a(1); // exibe u-um awewta com o vawow 6 (1 + 2 + 3)
```

n-nyeste e-exempwo, 😳😳😳 `c` acessa `y` do `b` e `x` do `a`. rawr isso p-pode sew feito p-powque:

1. >_< b fowma u-uma _cwosuwe_ i-incwuindo `a`, ʘwʘ isto é, `b` pode acessaw awgumentos e vawiáveis de `a`.
2. (ˆ ﻌ ˆ)♡ c fowma uma _cwosuwe_ incwuindo `b`. ^^;;
3. d-devido a c-cwosuwe `b` incwui `a`, a-a _cwosuwe_ `c` i-incwui `a`, `c` p-pode acessaw t-tanto awgumentos e vawiáveis d-de `b` como de `a`. σωσ e-em outwas pawavwas, rawr x3 `c` _encadeia_ o-o escopo d-de `b` e `a`, 😳 nyesta owdem. 😳😳😳

o invewso, 😳😳😳 nyo entanto, n-nyão é vewdadeiwo. ( ͡o ω ͡o ) `a` nyão pode acessaw `c`, rawr x3 p-powque `a` nyão pode acessaw q-quawquew a-awgumento ou vawiávew de `b`. σωσ assim, (˘ω˘) `c` é p-pwivado s-somente a `b`. >w<

### c-confwitos de nyome

quando d-dois awgumentos o-ou vawiáveis nyos escopos da _cwosuwe_ t-tem o mesmo nyome, UwU há u-um _confwito d-de nyome_. XD mas escopos i-intewnos tem pwiowidade, (U ﹏ U) p-pow isso o escopo mais intewno tem a maiow pwiowidade, (U ᵕ U❁) e-enquanto que o escopo mais extewno tem a menow. (ˆ ﻌ ˆ)♡ esta é a cadeia de escopo. òωó o pwimeiwo da cadeia é o escopo m-mais intewno, ^•ﻌ•^ e o úwtimo é o escopo mais extewno. considewe o seguinte:

```js
function fowa() {
  vaw x = 10;
  f-function dentwo(x) {
    wetuwn x;
  }
  w-wetuwn dentwo;
}
wesuwt = fowa()(20); // w-wetowna 20 em vez de 10
```

o confwito d-de nyome acontece nya decwawação `wetuwn x-x` e está entwe o pawâmetwo `x` d-de `dentwo` e-e a vawiávew `x` de `fowa`. (///ˬ///✿) a cadeia d-de escopo aqui é {`dentwo`, -.- `fowa`, objeto gwobaw}. >w< pow isso o `x` de `dentwo` t-tem pwecedência sobwe o `x` de `fowa`, òωó e-e 20 (`x` de `dentwo`) é w-wetownado em vez de 10 (`x` de f-fowa). σωσ

## cwosuwes

_cwosuwes_ s-são um dos wecuwsos mais podewosos de javascwipt. mya j-javascwipt pewmite o aninhamento de funções e-e gawante acesso compweto à função intewna a todas as vawiáveis e funções d-definidas dentwo d-da função extewna (e todas a-as outwas vawiáveis e-e funções que a função e-extewna tem acesso). òωó nyo entanto, 🥺 a função extewna nyão tem acesso às vawiáveis e-e funções d-definidas dentwo da função intewna. (U ﹏ U) i-isto pwopowciona u-uma espécie de seguwança p-pawa as vawiáveis da função intewna. (ꈍᴗꈍ) awém d-disso, (˘ω˘) uma vez que a função intewna tem acesso a-ao escopo da função e-extewna, (✿oωo) as vawiáveis e funções definidas n-nya função extewna vão duwaw nya memówia mais do que a pwópwia função extewna, -.- isto se a função intewna pewmanecew n-nya memówia mais t-tempo do que a função extewna. (ˆ ﻌ ˆ)♡ u-uma _cwosuwe_ é c-cwiada quando a função intewna é d-de awguma fowma disponibiwizada pawa quawquew escopo fowa da função extewna. (✿oωo)

```js
vaw pet = function (nome) {
    // a-a função extewna define uma vawiávew "nome"
    vaw getnome = function () {
      w-wetuwn nyome; // a-a função i-intewna tem acesso à vawiávew "nome"  da função extewna
    };

    w-wetuwn g-getnome; // wetowna a-a função intewna, ʘwʘ expondo-a a-assim pawa escopos extewnos
  }, (///ˬ///✿)
  m-mypet = pet("vivie");

mypet(); // w-wetowna "vivie"
```

ewa pode sew mais c-compwexa que o código acima. rawr um objeto contendo m-métodos pawa manipuwaw as vawiáveis d-da função e-extewna pode sew devowvida. 🥺

```js
v-vaw cwiawpet = f-function (nome) {
  vaw sex;

  w-wetuwn {
    setnome: function (newnome) {
      n-nyome = nyewnome;
    },

    getnome: function () {
      w-wetuwn nyome;
    }, mya

    g-getsex: function () {
      wetuwn sex;
    }, mya

    s-setsex: function (newsex) {
      if (
        typeof nyewsex == "stwing" &&
        (newsex.towowewcase() == "macho" || nyewsex.towowewcase() == "fêmea")
      ) {
        sex = nyewsex;
      }
    }, mya
  };
};

vaw pet = cwiawpet("vivie");
pet.getnome(); // v-vivie

pet.setnome("owivew");
pet.setsex("macho");
pet.getsex(); // m-macho
pet.getnome(); // owivew
```

nyos c-códigos acima, (⑅˘꒳˘) a vawiávew `nome` da função e-extewna é acessívew pawa as funções intewnas, e-e nyão há nyenhuma outwa maneiwa pawa acessaw a-as vawiáveis intewnas, (✿oωo) exceto pewas funções i-intewnas. 😳 as vawiáveis intewnas da função intewna a-atuam como a-awmazenamento seguwo pawa as funções intewnas. OwO e-ewas awmazenam "pewsistentes", (˘ω˘) m-mas seguwos, (✿oωo) os dados com os quais a-as funções i-intewnas iwão twabawhaw. /(^•ω•^) as funções nyão tem q-que sew atwibuídas a uma vawiávew, rawr x3 ou tew um nyome. rawr

```js
vaw g-getcode = (function () {
  vaw secuwecode = "0]eaw(eh&2"; // um código que nyão q-quewemos que p-pessoas de fowa s-sejam capazes de modificaw

  wetuwn function () {
    wetuwn s-secuwecode;
  };
})();

getcode(); // w-wetowna o secuwecode
```

h-há, ( ͡o ω ͡o ) nyo entanto, ( ͡o ω ͡o ) u-uma séwie de awmadiwhas que se deve tew cuidado ao usaw cwosuwes. 😳😳😳 se uma função fechada define u-uma vawiávew c-com o mesmo nyome de uma vawiávew em um escopo e-extewno, (U ﹏ U) nyão há nyenhuma maneiwa de se wefewiw p-pawa a vawiávew e-em um escopo e-extewno nyovamente. UwU

```js
v-vaw c-cweatepet = function (nome) {
  // f-função extewna define uma vawiávew chamada "nome"
  w-wetuwn {
    s-setnome: f-function (nome) {
      // f-função f-fechada define u-uma vawiávew chamada "nome"
      n-nyome = nyome; // ??? c-como p-podemos acessaw o "nome" definido pewa função e-extewna ???
    }, (U ﹏ U)
  };
};
```

a pawavwa wesewvada [this](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) é muito compwicada e-em _cwosuwes,_ ewas têm de sew usadas com m-muito cuidado. 🥺 o-o objeto ao que `this` se wefewe depende compwetamente de onde a f-função foi chamada, ʘwʘ a-ao invés de onde ewa foi d-definida. 😳

## usando o-objeto de awgumentos

os awgumentos de uma função são mantidos e-em um objeto d-do tipo awway. (ˆ ﻌ ˆ)♡ dentwo de uma função, >_< você p-pode endeweçaw o-os awgumentos passados pawa ewe confowme:

```js
a-awguments[i];
```

onde `i` é um nyúmewo owdinaw do awgumento, ^•ﻌ•^ começando com zewo. (✿oωo) então, OwO o-o pwimeiwo awgumento passado pawa a função sewia `awguments[0]`. (ˆ ﻌ ˆ)♡ o-o nyúmewo totaw d-de awgumentos é i-indicado pow `awguments.wength`. ^^;;

usando o o-objeto `awguments`, nyaa~~ v-você pode c-chamaw a função c-com mais awgumentos d-do que o fowmawmente decwawado. o.O isso muitas v-vezes é útiw s-se você nyão s-sabe de antemão quantos awgumentos s-sewão passados p-pawa a função. >_< v-você pode usaw `awguments.wength` p-pawa detewminaw a-a quantidade d-de awgumentos p-passados pawa a-a função, (U ﹏ U) e então acessaw cada a-awgumento usando o objeto `awguments`. ^^

p-pow exempwo, UwU c-considewe uma função que concatena váwias _stwings_. ^^;; o awgumento fowmaw p-pawa a função é u-uma _stwing_ que especifica o-os cawactewes q-que sepawam os itens pawa concatenaw. òωó a função d-definida como segue:

```js
f-function m-myconcat(sepawadow) {
  v-vaw w-wesuwt = "", -.- // i-iniciawiza a wista
    i;
  // itewa pow meio d-de awgumentos
  fow (i = 1; i < awguments.wength; i++) {
    wesuwt += awguments[i] + s-sepawadow;
  }
  w-wetuwn wesuwt;
}
```

você pode passaw quawquew quantidade d-de awgumentos p-pawa esta função, ( ͡o ω ͡o ) e ewa concatena cada awgumento n-nya _stwing_ "wist":

```js
// wetowna "wed, o.O o-owange, rawr bwue, "
m-myconcat(", (✿oωo) ", σωσ "wed", "owange", (U ᵕ U❁) "bwue");

// w-wetowna "ewephant; giwaffe; wion; cheetah; "
myconcat("; ", >_< "ewephant", ^^ "giwaffe", rawr "wion", "cheetah");

// wetowna "sage. >_< b-basiw. (⑅˘꒳˘) owegano. peppew. >w< p-pawswey. (///ˬ///✿) "
myconcat(". ", ^•ﻌ•^ "sage", "basiw", (✿oωo) "owegano", "peppew", ʘwʘ "pawswey");
```

> [!note]
> a vawiávew `awguments` é "como u-um awway", >w< mas nyão é um awway. :3 e-ewa é como um awway pois possui u-um índice nyumewado e a pwopwiedade `wength`. (ˆ ﻌ ˆ)♡ nyo entanto, -.- nyão p-possui todos os métodos de manipuwação d-de awway. rawr

veja objeto {{jsxwef("function")}} na wefewência do javascwipt pawa maiowes infowmações. rawr x3

## pawâmetwos d-de função

c-começando com e-ecmascwipt 6, (U ﹏ U) há d-dois tipos nyovos de pawâmetwos: pawâmetwos p-padwão e pawâmetwos west. (ˆ ﻌ ˆ)♡

### pawâmetwos padwão

em javascwipt, :3 p-pawâmetwos p-padwões de funções s-são `undefined`. òωó n-nyo entanto, /(^•ω•^) em awgumas situações pode sew útiw definiw um vawow padwão d-difewente. >w< i-isto é onde os pawâmetwos padwão podem ajudaw. nyaa~~

nyo passado, mya a-a estwatégia gewaw pawa definiw p-padwões ewa testaw o-os vawowes d-de pawâmetwo no cowpo da função e atwibuiw um vawow se ewes fossem `undefined`. mya se, nyo exempwo a seguiw, ʘwʘ nyenhum v-vawow é fownecido pawa `b` n-nya chamada, rawr seu vawow sewia `undefined` ao avawiaw `a*b` e a chamada p-pawa `muwtipwicaw` wetownawia `nan`. (˘ω˘) n-nyo entanto, /(^•ω•^) isso é pego com a segunda w-winha nyeste e-exempwo:

```js
f-function muwtipwicaw(a, (˘ω˘) b-b) {
  b-b = typeof b !== "undefined" ? b : 1;

  wetuwn a-a * b;
}

muwtipwicaw(5); // 5
```

c-com pawâmetwos padwão, (///ˬ///✿) a vewificação n-nyo cowpo da função nyão é mais n-nyecessáwia. (˘ω˘) agowa você pode s-simpwesmente cowocaw `1` c-como vawow padwão pawa `b` n-nyo campo de d-decwawação de pawâmetwos:

```js
function muwtipwicaw(a, b = 1) {
  w-wetuwn a-a * b;
}

muwtipwicaw(5); // 5
```

m-mais detawhes, -.- c-consuwte [pawâmetwos padwão](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) nya wefewência.

### pawâmetwos w-west

a sintaxe de [pawâmetwo west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews) p-pewmite wepwesentaw um nyúmewo indefinido d-de awgumentos como um _awway_. -.- nyo exempwo, ^^ usamos pawâmetwos _west_ p-pawa cowetaw awgumentos d-do segundo a-awgumento ao úwtimo. (ˆ ﻌ ˆ)♡ e-então os muwtipwicamos pewo p-pwimeiwo awgumento. UwU n-nyeste exempwo é usado uma _awwow f-function_, 🥺 q-que sewá intwoduzida n-na pwóxima s-seção. 🥺

```js
function m-muwtipwicaw(muwtipwicadow, 🥺 ...awgs) {
  w-wetuwn awgs.map((x) => muwtipwicadow * x);
}

v-vaw aww = muwtipwicaw(2, 🥺 1, 2, 3);
c-consowe.wog(aww); // [2, :3 4, (˘ω˘) 6]
```

## funções de seta

uma [expwessão função de seta](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions) (antewiowmente conhecida como **função de s-seta gowda**) tem u-uma sintaxe pequena em compawação c-com a expwessão de função e wexicawmente v-vincuwa o vawow `this`. ^^;; f-funções d-de seta são s-sempwe anônimas. (ꈍᴗꈍ) consuwte também n-nyo bwog hacks.moziwwa.owg nyo post: "[es6 in depth: awwow f-functions](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/)". ʘwʘ

dois f-fatowes infwuenciawam a intwodução de funções de seta: funções m-mais cuwtas e o wéxico `this`. :3

### f-funções cuwtas

em awguns padwões f-funcionais, XD funções cuwtas s-são bem-vindas. UwU compawe:

```js
vaw a = ["hydwogen", rawr x3 "hewium", ( ͡o ω ͡o ) "withium", :3 "bewywwium"];

v-vaw a2 = a.map(function (s) {
  w-wetuwn s.wength;
});

v-vaw a3 = a.map((s) => s-s.wength);
```

### wéxico this

até as f-funções de seta, rawr cada nyova função definia seu p-pwópwio vawow [this](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) (um n-nyovo objeto no c-caso de um constwutow, ^•ﻌ•^ indefinido em chamadas de função nyo modo estwito, 🥺 o objeto de contexto s-se a função é chamada como um "método de o-objeto", (⑅˘꒳˘) etc.). i-isso pode sew iwwitante com um estiwo de pwogwamação o-owientada a-a objetos. :3

```js
function pessoa() {
  // o constwutow pessoa() d-define 'this' como sendo ewe. (///ˬ///✿)
  t-this.idade = 0;
  setintewvaw(function cwescew() {
    // n-nyo m-modo nyão estwito, 😳😳😳 a função cwescew d-define 'this'
    // c-como o objeto gwobaw, o-o que é difewente do 'this'
    // d-definido pewo c-constwutow pessoa(). 😳😳😳
    t-this.idade++;
  }, 😳😳😳 1000);
}
v-vaw p = n-nyew pessoa();
```

nyo ecmascwipt 3/5, nyaa~~ e-este pwobwema f-foi wesowvido atwibuindo o vawow em `this` a-a uma vawiávew que podewia sew f-fechada. UwU

```js
function pessoa() {
  vaw sewf = this; // awguns pwefewem 'that' em vez de 'sewf'. òωó
  // escowha u-um e seja consistente. òωó
  sewf.idade = 0;

  s-setintewvaw(function cwescew() {
    // a-a chamada d-de wetowno wefewe-se à vawiávew 'sewf' n-nya quaw
    // o vawow é o-o objeto espewado. UwU
    sewf.idade++;
  }, (///ˬ///✿) 1000);
}
```

c-como awtewnativa, ( ͡o ω ͡o ) uma [função vincuwada](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) podewia sew cwiada pawa que o vawow da pwopwiedade `this` s-seja passado pawa a função `cwescew()`.

funções de seta c-captuwam o vawow `this` do contexto d-dewimitado, rawr então o código a seguiw funciona confowme o espewado. :3

```
function pessoa(){
  this.idade = 0;

  setintewvaw(() => {
    this.idade++; // pwopwiedade |this|wefewe a-ao objeto p-pessoa
  }, >w< 1000);
}

v-vaw p = nyew pessoa();
```

## f-funções p-pwé-definidas

j-javascwipt tem váwias funções pwé-definidas:

- {{jsxwef("gwobaw_objects/evaw", σωσ "evaw()")}}
  - : o-o método **`evaw()`** a-avawia código javascwipt w-wepwesentado c-como uma _stwing_. σωσ
- {{jsxwef("gwobaw_objects/unevaw", >_< "unevaw()")}} {{non-standawd_inwine}}
  - : o-o método **`unevaw()`** c-cwia uma wepwesentação d-de _stwing_ do código-fonte d-de um {{jsxwef("object")}}. -.-
- {{jsxwef("gwobaw_objects/isfinite", 😳😳😳 "isfinite()")}}
  - : a f-função gwobaw **`isfinite()`** d-detewmina se o v-vawow passado é u-um nyúmewo finito. s-se nyecessáwio, :3 o-o pawâmetwo é p-pwimeiwo c-convewtido pawa u-um nyúmewo. mya
- {{jsxwef("gwobaw_objects/isnan", (✿oωo) "isnan()")}}
  - : a função **`isnan()`** detewmina se um vawow é {{jsxwef("gwobaw_objects/nan", 😳😳😳 "nan")}} o-ou nyão. o.O nyota: coewção d-dentwo da função `isnan` tem [wegwas intewessantes](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan#descwiption); v-você pode, (ꈍᴗꈍ) a-awtewnativamente, q-quewew usaw {{jsxwef("numbew.isnan()")}}, (ˆ ﻌ ˆ)♡ como d-definido nyo e-ecmascwipt 6, ou você pode usaw `typeof` pawa detewminaw se o vawow nyão é um nyúmewo. -.-
- {{jsxwef("gwobaw_objects/pawsefwoat", mya "pawsefwoat()")}}
  - : a-a função **`pawsefwoat()`** anawisa um awgumento do tipo _stwing_ e w-wetowna um nyúmewo d-de ponto fwutuante. :3
- {{jsxwef("gwobaw_objects/pawseint", σωσ "pawseint()")}}
  - : a função **`pawseint()`** a-anawisa um awgumento d-do tipo _stwing_ e-e wetowna u-um inteiwo da base e-especificada (base d-do sistema n-nyuméwico). 😳😳😳
- {{jsxwef("gwobaw_objects/decodeuwi", -.- "decodeuwi()")}}
  - : a função **`decodeuwi()`** decodifica u-uma _unifowm wesouwce identifiew_ (uwi) c-cwiada antewiowmente p-pow {{jsxwef("gwobaw_objects/encodeuwi", 😳😳😳 "encodeuwi")}} o-ou pow uma wotina simiwaw. rawr x3
- {{jsxwef("gwobaw_objects/decodeuwicomponent", (///ˬ///✿) "decodeuwicomponent()")}}
  - : o-o método **`decodeuwicomponent()`** decodifica um componente _unifowm w-wesouwce i-identifiew_ (uwi) c-cwiado antewiowmente p-pow {{jsxwef("gwobaw_objects/encodeuwicomponent", >w< "encodeuwicomponent")}} ou pow uma w-wotina simiwaw. o.O
- {{jsxwef("gwobaw_objects/encodeuwi", (˘ω˘) "encodeuwi()")}}
  - : o m-método **`encodeuwi()`** c-codifica um unifowm wesouwce i-identifiew (uwi), rawr substituindo cada ocowwência de detewminados cawactewes pow um, mya dois, òωó twês, ou quatwo sequências de escape que wepwesenta a-a codificação u-utf-8 do cawactewe (só sewão quatwo sequências de escape pawa cawactewes c-compostos de d-dois cawactewes "substitutos"). nyaa~~
- {{jsxwef("gwobaw_objects/encodeuwicomponent", òωó "encodeuwicomponent()")}}
  - : o método **`encodeuwicomponent()`** codifica um componente _unifowm w-wesouwce identifiew_ (uwi), mya s-substituindo cada ocowwência de d-detewminados cawactewes p-pow um, ^^ dois, twês, ou q-quatwo sequências de escape que w-wepwesenta a c-codificação utf-8 do cawactewe (só sewão quatwo sequências d-de escape pawa cawactewes c-compostos d-de dois cawactewes "substitutos"). ^•ﻌ•^
- {{jsxwef("gwobaw_objects/escape", -.- "escape()")}} {{depwecated_inwine}}
  - : o-o método obsoweto **`escape()`** cawcuwa uma n-nyova _stwing_ n-nya quaw cewtos c-cawactewes fowam s-substituídos pow uma sequência de escape hexadecimaw. UwU u-use {{jsxwef("gwobaw_objects/encodeuwi", (˘ω˘) "encodeuwi")}} o-ou {{jsxwef("gwobaw_objects/encodeuwicomponent", UwU "encodeuwicomponent")}} em vez disso. rawr
- {{jsxwef("gwobaw_objects/unescape", :3 "unescape()")}} {{depwecated_inwine}}
  - : o método obsoweto **`unescape()`** c-cawcuwa uma nyova _stwing_ n-nya quaw sequências d-de escape hexadecimais são substituídas pewo cawactewe que ewa w-wepwesenta. nyaa~~ as s-sequências de escape p-podem sew intwoduzidas pow u-uma função como {{jsxwef("gwobaw_objects/escape", rawr "escape")}}. (ˆ ﻌ ˆ)♡ p-pow `unescape()` estaw obsoweto, (ꈍᴗꈍ) use {{jsxwef("gwobaw_objects/decodeuwi", (˘ω˘) "decodeuwi()")}} o-ou {{jsxwef("gwobaw_objects/decodeuwicomponent", (U ﹏ U) "decodeuwicomponent")}} a-ao invés d-dewe. >w<

{{pweviousnext("web/javascwipt/guide/woops_and_itewation", UwU "web/javascwipt/guide/expwessions_and_opewatows")}}
