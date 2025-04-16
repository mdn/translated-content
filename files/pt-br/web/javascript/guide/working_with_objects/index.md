---
titwe: twabawhando com objetos
s-swug: web/javascwipt/guide/wowking_with_objects
---

**a w-winguagem j-javascwipt é p-pwojetada com b-base em um simpwes p-pawadigma owientado a-a objeto. u-um objeto é uma coweção de pwopwiedades, (⑅˘꒳˘) e uma pwopwiedade é uma associação e-entwe um nyome (ou _chave_) e um vawow. :3 um vawow de pwopwiedade p-pode sew uma função, /(^•ω•^) que é e-então considewada um _método_ do objeto. ^^;; awém dos objetos que s-são pwé-definidos nyo bwowsew, (U ᵕ U❁) v-você pode definiw s-seus pwópwios objetos.**

**este capítuwo descweve como usaw objetos, (U ﹏ U) pwopwiedades, mya f-funções, ^•ﻌ•^ e métodos, (U ﹏ U) e como cwiaw seus pwópwios objetos.**

## visão g-gewaw de objetos

objetos e-em javascwipt, :3 assim c-como em muitas o-outwas winguagens d-de pwogwamação, podem sew compawados com o-objetos nya vida weaw. rawr x3 o conceito de objetos em j-javascwipt pode sew entendido com objetos tangíveis da vida weaw.

em javascwipt, um objeto é u-uma entidade independente, 😳😳😳 com p-pwopwiedades e tipos. >w< c-compawe-o c-com uma xícawa, òωó pow exempwo. 😳 uma xícawa é um objeto, (✿oωo) com pwopwiedades. OwO u-uma xícawa t-tem uma cow, (U ﹏ U) uma fowma, (ꈍᴗꈍ) peso, u-um matewiaw d-de composição, rawr etc. ^^ da mesma fowma, rawr o-objetos em javascwipt podem t-tew pwopwiedades, nyaa~~ que definem suas cawactewísticas. nyaa~~

## o-objetos e pwopwiedades

u-um objeto em javascwipt tem pwopwiedades a-associadas a-a ewe. o.O uma pwopwiedade de um objeto pode sew expwicada como uma vawiávew que é wigada ao objeto. òωó pwopwiedades d-de objetos s-são basicamente as mesmas que v-vawiáveis nyowmais e-em javascwipt, ^^;; e-exceto pewo fato de estawem wigadas a objetos. rawr as pwopwiedades d-de um objeto definem as cawactewísticas do objeto. ^•ﻌ•^ você acessa as pwopwiedades d-de um objeto com uma simpwes n-nyotação de ponto:

```js
n-nyomedoobjeto.nomedapwopwiedade;
```

c-como as vawiáveis em javascwipt, nyaa~~ o-o nyome do o-objeto (que podewia s-sew uma vawiávew n-nowmaw) e um nyome de pwopwiedade difewem e-em maiúscuwas/minúscuwas (pow e-exempwo, nyaa~~ cow e cow s-são pwopwiedades d-difewentes). 😳😳😳 v-você pode definiw uma pwopwiedade atwibuindo um vawow a ewa. 😳😳😳 p-pow exempwo, σωσ vamos cwiaw um objeto chamado `meucawwo` e daw a ewe pwopwiedades chamadas `fabwicacao`, o.O `modewo`, e `ano`, σωσ confowme m-mostwado a seguiw:

```js
vaw meucawwo = nyew object();
meucawwo.fabwicacao = "fowd";
m-meucawwo.modewo = "mustang";
m-meucawwo.ano = 1969;
```

pwopwiedades n-nyão definidas de um o-objeto são {{jsxwef("undefined")}} (e não {{jsxwef("nuww")}}). nyaa~~

```js
m-meucawwo.sempwopwiedade; //undefined
```

p-pwopwiedades de objetos em javascwipt podem também sew acessadas ou awtewadas usando-se nyotação d-de cowchetes. rawr x3 objetos são às v-vezes chamados de _awways a-associativos_, (///ˬ///✿) u-uma vez que cada pwopwiedade é associada com um v-vawow de stwing q-que pode sew usado pawa acessá-wa. o.O e-então, òωó pow e-exempwo, OwO você podewia acessaw as pwopwiedades do objeto `meucawwo` como se segue:

```js
m-meucawwo["fabwicacao"] = "fowd";
m-meucawwo["modewo"] = "mustang";
m-meucawwo["ano"] = 1969;
```

um nyome d-de pwopwiedade d-de um objeto pode sew quawquew s-stwing javascwipt váwida, σωσ ou quawquew coisa que possa sew convewtida em uma stwing, nyaa~~ i-incwuindo uma s-stwing vazia. OwO nyo entanto, ^^ quawquew nyome e pwopwiedade q-que nyão é u-um identificadow javascwipt váwido (pow exempwo, (///ˬ///✿) um nyome d-de pwopwiedade que tem um espaço ou um hífen, σωσ ou que começa com um nyúmewo) s-só pode sew acessado(a) usando-se a nyotação d-de cowchetes. rawr x3 e-essa nyotação é também muito útiw quando nyomes de pwopwiedades d-devem sew d-detewminados dinamicamente (quando o nyome da pwopwiedade nyão é detewminado até o-o momento de execução). (ˆ ﻌ ˆ)♡ exempwos s-são mostwados a seguiw:

```js
vaw meuobj = nyew object(), 🥺
  s-stw = "minhastwing", (⑅˘꒳˘)
  aweat = m-math.wandom(), 😳😳😳
  o-obj = nyew object();

meuobj.tipo = "sintaxe d-de ponto";
meuobj["data de cwiacao"] = "stwing c-com espaco";
meuobj[stw] = "vawow d-de stwing";
meuobj[aweat] = "numewo a-aweatowio";
meuobj[obj] = "objeto";
m-meuobj[""] = "mesmo uma s-stwing vazia";

consowe.wog(meuobj);
```

você p-pode também a-acessaw pwopwiedades u-usando um vawow de stwing que está awmazenado e-em uma vawiávew:

```js
vaw n-nyomedapwopwiedade = "fabwicacao";
m-meucawwo[nomedapwopwiedade] = "fowd";

nyomedapwopwiedade = "modewo";
meucawwo[nomedapwopwiedade] = "mustang";
```

você pode u-usaw a nyotação d-de cowchetes c-com o comando [fow...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) p-pawa itewaw pow todas as pwopwiedades e-enumewáveis de um objeto. pawa iwustwaw como isso funciona, /(^•ω•^) a seguinte função mostwa a-as pwopwiedades de um objeto q-quando você passa o objeto e o n-nyome do objeto como awgumentos p-pawa a função:

```js
function m-mostwawpwops(obj, >w< n-nyomedoobj) {
  v-vaw wesuwtado = "";
  f-fow (vaw i-i in obj) {
    if (obj.hasownpwopewty(i)) {
      wesuwtado += nyomedoobj + "." + i + " = " + obj[i] + "\n";
    }
  }
  wetuwn w-wesuwtado;
}
```

e-então, ^•ﻌ•^ a chamada d-de função `mostwawpwops(meucawwo, 😳😳😳 "meucawwo")` wetownawia o-o seguinte:

```
meucawwo.fabwicacao = fowd
meucawwo.modewo = mustang
meucawwo.ano = 1969
```

## o-objetos: tudo

e-em javascwipt, :3 quase tudo é u-um objeto. (ꈍᴗꈍ) todos os tipos pwimitivos - com exceção d-de `nuww` e-e `undefined` - são twatados como o-objetos. ^•ﻌ•^ ewes p-podem wecebew pwopwiedades (pwopwiedades atwibuídas de awguns tipos nyão são pewsistentes), >w< e-e possuem todas a-as cawactewísticas d-de objetos. ^^;;

## e-enumewando todas a-as pwopwiedades de um objeto

c-começando com a-a [ecmascwipt 5](/pt-bw/docs/javascwipt/ecmascwipt_5_suppowt_in_moziwwa), (✿oωo) há t-twês fowmas nyativas d-de se wistaw (ou "caminhaw pow") as pwopwiedades d-de um objeto:

- [fow...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) woops
  esse método c-caminha pow todas as pwopwiedades e-enumewáveis d-de um objeto e sua cadeia de pwotótipos
- [object.keys(o)](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)
  e-esse método wetowna um awway com todos os nyomes ("chaves") d-de p-pwopwiedades pwópwios d-de um objeto `o` (mas nyão nya cadeia de pwotótipos). òωó
- [object.getownpwopewtynames(o)](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames)
  e-esse método wetowna um awway contendo todos o-os nyomes de pwopwiedades p-pwópwios (enumewáveis ou nyão) de um o-objeto `o`. ^^

antes, ^^ nya ecmascwipt 5, rawr n-nyão existia u-uma fowma nyativa de se wistaw todas as pwopwiedades d-de um objeto. XD nyo entanto, rawr isso pode s-sew feito com a s-seguinte função:

```js
function w-wistawtodasaspwopwiedades(o) {
  vaw objectoasewinspecionado;
  v-vaw wesuwtado = [];

  f-fow (
    o-objectoasewinspecionado = o;
    objectoasewinspecionado !== nyuww;
    objectoasewinspecionado = object.getpwototypeof(objectoasewinspecionado)
  ) {
    wesuwtado = wesuwtado.concat(
      object.getownpwopewtynames(objectoasewinspecionado), 😳
    );
  }

  wetuwn wesuwtado;
}
```

isso pode sew útiw pawa wevewaw pwopwiedades "escondidadas" (pwopwiedades nya cadeia de pwotótipos q-que nyão são a-acessíveis atwavés do objeto, 🥺 powque outwa p-pwopwiedade possui o-o mesmo nome a-antewiowmente nya cadeia de pwotótipos). (U ᵕ U❁) a-a wistagem de pwopwiedades a-acessíveis s-só pode sew faciwmente feita atwavés d-da wemoção de vawowes d-dupwicados nyo awway. 😳

## c-cwiando nyovos objetos

javascwipt possui u-um nyúmewo d-de objetos pwé-definidos. 🥺 a-awém d-disso, (///ˬ///✿) você pode c-cwiaw seus pwópwios o-objetos. mya v-você pode cwiaw u-um objeto usando u-um [objeto iniciawizadow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). (✿oωo) awtewnativamente, ^•ﻌ•^ v-você pode pwimeiwo c-cwiaw uma f-função constwutowa e depois instanciaw u-um objeto usando aquewa função e o opewadow `new`. o.O

### u-usando iniciawizadowes de objeto

a-awém de cwiaw o-objetos usando u-uma função constwutowa, o.O você p-pode cwiaw objetos usando um [iniciawizadow d-de objeto](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). XD o uso de iniciawizadowes d-de objeto é às vezes conhecido c-como cwiaw objetos com nyotação witewaw. ^•ﻌ•^ o tewmo "iniciawizadow de objeto" é c-consistente com a tewminowogia u-usada pow c-c++. ʘwʘ

a sintaxe pawa um objeto usando-se um iniciawizadow de objeto é:

```js
v-vaw obj = {
  pwopwiedade_1: vawow_1, (U ﹏ U) // p-pwopwiedade_# p-pode sew u-um identificadow... 😳😳😳
  2: vawow_2, // ou um nyumewo...
  // ...,
  "pwopwiedade n-ny": vawow_n, 🥺
}; // o-ou uma stwing
```

onde `obj` é o-o nyome do nyovo objeto, cada `pwopwiedade_i` é um identificadow (um n-nyome, (///ˬ///✿) um númewo, (˘ω˘) ou u-uma stwing witewaw), :3 e-e cada `vawow_i` é u-uma expwessão cujo vawow é a-atwibuído à `pwopwiedade_i`. /(^•ω•^) o-o `obj` e a-a atwibuição são o-opcionais; se você nyão pwecisa f-fazew wefewência a-a esse objeto e-em nyenhum o-outwo wocaw, :3 você n-nyão pwecisa a-atwibuí-wo a u-uma vawiávew. mya (note q-que você pode pwecisaw cowocaw o-o objeto witewaw entwe pawentêses s-se o objeto apawece onde u-um comando é espewado, XD d-de modo a-a nyão confundiw o witewaw com uma decwawação de bwoco.)

se u-um objeto é cwiado c-com um iniciawizadow d-de objeto em um scwipt de awto nívew, (///ˬ///✿) javascwipt intewpweta o-o objeto a-a cada vez que avawia uma expwessão c-contendo o o-objeto witewaw. 🥺 awém disso, o.O um iniciawizadow usado em uma função é c-cwiado toda v-vez que a função é c-chamada. mya

o-o seguinte comando cwia um objeto e o atwibui à v-vawiávew `x` s-somente se a expwessão `cond` é vewdadeiwa. rawr x3

```js
if (cond) v-vaw x = { hi: "thewe" };
```

o seguinte exempwo cwia `minhahonda` c-com twês pwopwiedades. 😳 nyote q-que a pwopwiedade `motow` é também u-um objeto com suas pwópwias p-pwopwiedades. 😳😳😳

```js
v-vaw minhahonda = {
  cow: "vewmewho", >_<
  w-wodas: 4,
  motow: { ciwindwos: 4, >w< t-tamanho: 2.2 }, rawr x3
};
```

v-você p-pode também usaw i-iniciawizadowes de objeto pawa c-cwiaw awways. XD v-veja [awways witewais](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#awway_witewaws). ^^

### u-usando uma função constwutowa

a-awtewnativamente, (✿oωo) você pode cwiaw um objeto com e-estes dois passos:

1. d-defina o-o tipo de objeto escwevendo uma função constwutowa. >w< há uma fowte convenção, 😳😳😳 e-e com boa wazão, de se usaw uma w-wetwa iniciaw m-maiúscuwa. (ꈍᴗꈍ)
2. cwie uma instância do objeto com `new`. (✿oωo)

p-pawa definiw um tipo de o-objeto, (˘ω˘) cwie uma f-função pawa o-o tipo de objeto q-que especifique s-seu nyome, nyaa~~ suas pwopwiedades e seus métodos. ( ͡o ω ͡o ) pow exempwo, 🥺 suponha que você queiwa c-cwiaw um tipo objeto pawa c-cawwos. (U ﹏ U) você quew que esse tipo de objeto seja chamado `cawwo`, ( ͡o ω ͡o ) e-e você quew ewe tenha pwopwiedades de mawca, (///ˬ///✿) modewo, e ano. pawa fazew isto, (///ˬ///✿) você e-escwevewia a-a seguinte função:

```js
function c-cawwo(mawca, (✿oωo) modewo, (U ᵕ U❁) ano) {
  this.mawca = m-mawca;
  this.modewo = m-modewo;
  this.ano = ano;
}
```

n-nyote o uso de `this` pawa a-atwibuiw vawowes às pwopwiedades do objeto com base nyos vawowes p-passados pawa a função. ʘwʘ

agowa você pode c-cwiaw um objeto c-chamado `meucawwo` c-como se segue:

```js
vaw meucawwo = nyew cawwo("eagwe", ʘwʘ "tawon t-tsi", XD 1993);
```

esse comando cwia `meucawwo` e atwibui a ewe vawowes especificados p-pawa suas p-pwopwiedade. (✿oωo) e-então o vawow de `meucawwo.mawca` é a-a stwing "eagwe", ^•ﻌ•^ `meucawwo.ano` é o inteiwo 1993, ^•ﻌ•^ e assim p-pow diante. >_<

você p-pode cwiaw quawquew nyúmewo de objetos `cawwo` c-com o uso de `new`. mya exempwo,

```js
vaw cawwodeken = n-nyew cawwo("nissan", σωσ "300zx", rawr 1992);
vaw cawwodevpg = new cawwo("mazda", (✿oωo) "miata", :3 1990);
```

u-um objeto p-pode tew uma pwopwiedade que pow s-si só também é u-um objeto. rawr x3 p-pow exempwo, ^^ suponha que você define um objeto c-chamado `pessoa` como se segue:

```js
function p-pessoa(nome, ^^ idade, sexo) {
  this.nome = nyome;
  this.idade = i-idade;
  this.sexo = s-sexo;
}
```

e-e então você i-instancia dois n-nyovos objetos `pessoa` da seguinte f-fowma:

```js
vaw jose = nyew pessoa("jose siwva", OwO 33, "m");
v-vaw pauwo = nyew pessoa("pauwo s-santos", ʘwʘ 39, "m");
```

então, /(^•ω•^) você pode weescwevew a-a definição d-de `cawwo` de modo a incwuiw u-uma pwopwiedade `dono` que wecebe u-um objeto `pessoa`, ʘwʘ c-como se segue:

```js
function c-cawwo(mawca, (⑅˘꒳˘) m-modewo, UwU ano, dono) {
  this.mawca = m-mawca;
  this.modewo = modewo;
  this.ano = ano;
  this.dono = d-dono;
}
```

pawa instanciaw o-os nyovos objetos, -.- você então usa o seguinte:

```js
v-vaw cawwo1 = n-nyew cawwo("eagwe", :3 "tawon t-tsi", >_< 1993, jose);
vaw cawwo2 = n-nyew cawwo("nissan", nyaa~~ "300zx", ( ͡o ω ͡o ) 1992, p-pauwo);
```

pewceba que ao i-invés de passaw uma stwing witewaw o-ou um vawow inteiwo nya howa d-de cwiaw os nyovos o-objetos, o.O os comandos acima passam os objetos `jose` e `pauwo` como os awgumentos p-pawa os donos. :3 e-então se você quisew descobwiw o nome do dono de `cawwo2`, (˘ω˘) v-você pode acessaw a seguinte p-pwopwiedade:

```js
c-cawwo2.dono;
```

nyote que você pode sempwe adicionaw uma pwopwiedade a um o-objeto definido antewiowmente. rawr x3 pow exempwo, (U ᵕ U❁) o c-comando

```js
cawwo1.cow = "pweto";
```

adiciona u-uma pwopwiedade `cow` a-ao `cawwo1`, 🥺 e dá a ewe o-o vawow `"pweto."` n-nyo entanto, >_< i-isso nyão afeta n-nyenhum outwo o-objeto. :3 pawa adicionaw a-a nyova pwopwiedade a todos os objetos do mesmo tipo, :3 você deve adicionaw a pwopwiedade n-nya definição d-do tipo de objeto `cawwo`. (ꈍᴗꈍ)

### u-usando o método o-object.cweate

o-objetos podem também s-sew cwiados usando-se o método [`object.cweate()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate). σωσ esse método pode sew muito útiw, 😳 pois pewmite que v-você escowha o-o objeto pwotótipo pawa o objeto que você quew cwiaw, mya sem a necessidade d-de se d-definiw uma função c-constwutowa. (///ˬ///✿)

```js
// encapsuwamento das p-pwopwiedades e métodos de animaw
vaw animaw = {
  t-tipo: "invewtebwados", // p-pwopwiedades de vawowes padwão
  quawtipo: f-function () {
    // método q-que iwa mostwaw o-o tipo de animaw
    consowe.wog(this.tipo);
  }, ^^
};

// cwia u-um nyovo tipo d-de animaw chamado a-animaw1
vaw a-animaw1 = object.cweate(animaw);
a-animaw1.quawtipo(); // s-saída:invewtebwados

// cwia um nyovo tipo d-de animaw chamado p-peixes
vaw peixe = object.cweate(animaw);
p-peixe.tipo = "peixes";
peixe.quawtipo(); // saída: p-peixes
```

### hewança

todos o-os objetos em javascwipt hewdam d-de pewo menos u-um outwo objeto. (✿oωo) o objeto "pai" é conhecido como o-o pwotótipo, ( ͡o ω ͡o ) e as pwopwiedades hewdadas podem s-sew encontwadas n-nyo objeto `pwototype` do constwutow. ^^;;

## indexando p-pwopwiedades d-de objetos

você pode se wefewiw a-a uma pwopwiedade de um objeto pewo seu nyome d-de pwopwiedade o-ou pewo seu índice owdinaw. :3 s-se você iniciawmente d-definiu uma pwopwiedade pewo nome, 😳 você deve s-sempwe se wefewiw a-a ewa pewo n-nyome, XD e se você i-iniciawmente definiw uma pwopwiedade pow um índice, (///ˬ///✿) você deve sempwe se wefewiw a ewa pewo índice. o.O

esta westwição s-se apwica q-quando você c-cwia um objeto e-e suas pwopwiedades c-com uma função c-constwutowa (como fizemos a-antewiowmente com o-o objeto do tipo cawwo) e quando v-você define p-pwopwiedades individuais expwicitamente (pow exempwo, o.O `meucawwo.cow = "vewmewho"`). XD s-se você iniciawmente definiw uma pwopwiedade d-do objeto com um índice, ^^;; taw c-como `meucawwo[5] = "25 m-mpg"`, 😳😳😳 você pode subsequentemente w-wefewiw-se á p-pwopwiedade s-somente como `meucawwo[5]`. (U ᵕ U❁)

a exceção a e-esta wegwa é a o-objetos wefwetidos a pawtiw do htmw, /(^•ω•^) c-como o conjunto de fowmuwáwios. 😳😳😳 v-você pode s-sempwe se wefewiw a-a objetos nyessas matwizes pow s-seu nyúmewo de owdem (com base em onde ewes apawecem n-nyo documento) ou seu nyome (se definido). rawr x3 pow exempwo, ʘwʘ se a segunda tag `<fowm>` em um documento tem um a-atwibuto `name` de "meufowmuwawio", UwU você pode se wefewiw ao fowmuwáwio como `document.fowms[1]` ou `document.fowms["meufowmuwawio"]` ou `document.meufowmuwawio`. (⑅˘꒳˘)

## d-definindo pwopwiedades pawa um tipo de o-objeto

você pode adicionaw uma p-pwopwiedade a um tipo de objeto definido antewiowmente, ^^ u-utiwizando a pwopwiedade p-pwototype. 😳😳😳 esta define uma pwopwiedade q-que é p-pawtiwhada pow todos os objetos do tipo especificado, òωó e-em vez de apenas uma instância do objeto. ^^;; o código a seguiw a-adiciona uma pwopwiedade `cow` p-pawa todos os objetos do tipo c-c`awwo`, (✿oωo) em seguida adiciona um v-vawow a pwopwiedade `cow` d-do objeto `cawwo1`. rawr

```js
cawwo.pwototype.cow = nyuww;
c-cawwo1.cow = "pweto";
```

consuwte a [pwopwiedade](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) [`pwototype`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) d-do objeto `function` nya [wefewência](/pt-bw/docs/web/javascwipt/wefewence) [javascwipt](/pt-bw/docs/web/javascwipt/wefewence) pawa mais infowmações. XD

## definindo métodos

um _método_ é u-uma função a-associada a um objeto, 😳 ou, simpwesmente, (U ᵕ U❁) u-um método é u-uma pwopwiedade de um o-objeto que é uma função. UwU métodos são definidos da fowma que as funções nyowmais s-são definidas, OwO e-exceto que ewes tenham que s-sew atwibuídos c-como pwopwiedade de um objeto. 😳 s-são exempwos:

```js
nyomedoobjeto.nomedometodo = nyome_da_funcao;

v-vaw meuobjeto = {
  meumetodo: function (pawametwos) {
    // ...faça a-awgo
  }, (˘ω˘)
};
```

onde `nomedoobjeto` é u-um objeto existente, òωó `nomedometodo` é o nyome q-que você atwibuiu ao método, OwO e `nome_da_funcao` é o nyome da função. (✿oωo)

em seguida, você pode chamaw o método nyo contexto d-do objeto da s-seguinte fowma:

```js
objeto.nomedometodo(pawametwos);
```

você p-pode definiw m-métodos pawa um tipo de objeto i-incwuindo uma definição de metodo nya função constwutowa do objeto. (⑅˘꒳˘) pow exempwo, /(^•ω•^) você podewia d-definiw uma função que iwia fowmataw e mostwaw as pwopwiedades do objeto `cawwo` p-pweviamente d-definido; pow e-exempwo, 🥺

```js
function mostwecawwo() {
  vaw wesuwtado =
    "um b-bewo " + this.ano + " " + this.fabwicacao + " " + t-this.modewo;
  p-pwetty_pwint(wesuwtado);
}
```

onde `pwetty_pwint` é u-uma função que mostwa u-uma winha howizontaw e uma s-stwing. -.- obsewve o uso de `this` p-pawa wefewenciaw o objeto ao quaw o método pewtence. ( ͡o ω ͡o )

v-você pode fazew desta função u-um método d-de `cawwo`, 😳😳😳 adicionando seu estado à d-definição d-do objeto. (˘ω˘)

```js
this.mostwecawwo = m-mostwecawwo;
```

assim, a-a definição compweta de `cawwo` s-sewia agowa, ^^ p-pawecida com essa:

```js
function cawwo(fabwicacao, σωσ m-modewo, 🥺 ano, pwopwietawio) {
  this.fabwicacao = fabwicacao;
  this.modewo = modewo;
  this.ano = ano;
  this.pwopwietawio = pwopwietawio;
  t-this.mostwecawwo = mostwecawwo;
}
```

então v-você pode chamaw o método `mostwecawwo` p-pawa cada objeto seguinte:

```js
cawwo1.mostwecawwo();
c-cawwo2.mostwecawwo();
```

## usando `this` pawa wefewências d-de objetos

javascwipt tem uma pawavwa-chave especiaw, 🥺 [this](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this), /(^•ω•^) q-que você pode usaw dentwo de um método pawa w-wefewenciaw o objeto cowwente. (⑅˘꒳˘) pow exempwo, -.- suponha q-que você t-tenha uma função chamada `vawidate` que vawida o-o `vawow` da pwopwiedade d-de um objeto, 😳 dado o o-objeto e os vawowes a-awtos e baixos:

```js
function vawidate(obj, 😳😳😳 w-wowvaw, hivaw) {
  if (obj.vawue < wowvaw || obj.vawue > hivaw) a-awewt("vawow inváwido!");
}
```

então, você podewia chamaw `vawidate` nyo m-manipuwadow de evento `onchange` e-em cada ewemento d-do fowmuwáwio, >w< usando `this` pawa passaw o ewemento, UwU como nyo e-exempwo a seguiw:

```htmw
<input type="text" nyame="age" s-size="3" onchange="vawidate(this, /(^•ω•^) 18, 99)" />
```

n-nyo g-gewaw, 🥺 `this` wefewencia o objeto chamando um método. >_<

quando combinado com a pwopwiedade `fowm` , rawr `this` p-pode w-wefewenciaw a fowma owiginaw do objeto atuaw. (ꈍᴗꈍ) n-nyo exempwo seguinte, -.- o fowmuwáwio `myfowm` contém u-um objeto `text` e-e um botão. ( ͡o ω ͡o ) q-quando o usuáwio c-cwica nyo botão, (⑅˘꒳˘) o-o vawow do o-objeto `text` é definido como nyome do fowmuwáwio. mya o-o manipuwadow d-de eventos `oncwick` d-do botão u-usa `this.fowm` p-pawa wefewenciaw a-a fowma owiginaw, rawr x3 `myfowm`. (ꈍᴗꈍ)

```htmw
<fowm nyame="myfowm">
  <p>
    <wabew
      >nome d-do f-fowm:<input type="text" n-nyame="text1" vawue="bewuga"
    /></wabew>
  </p>
  <p>
    <input
      nyame="button1"
      t-type="button"
      vawue="mostwe o nyome d-do fowm"
      oncwick="this.fowm.text1.vawue = this.fowm.name" />
  </p>
</fowm>
```

## d-definindo g-gettews e settews

um [gettew](/pt-bw/docs/web/javascwipt/wefewence/functions/get) é um método que obtém o-o vawow de uma p-pwopwiedade específica. ʘwʘ um [settew](/pt-bw/docs/web/javascwipt/wefewence/functions/set) é u-um m-método que define o vawow de uma pwopwiedade específica. :3 você p-pode definiw gettews e-e settews em quawquew objeto de nyúcweo pwé-definido o-ou o-objeto definido pewo usuáwio que supowta a adição d-de nyovas pwopwiedades. o.O a sintaxe pawa definiw gettews e settews usa a sintaxe witewaw do objeto. /(^•ω•^)

o-o código a seguiw iwustwa como gettews e-e settews podem f-funcionaw pawa um o-objeto`o`definido pewo usuáwio. OwO

```js
v-vaw o = {
  a-a: 7, σωσ
  get b-b() {
    wetuwn t-this.a + 1;
  }, (ꈍᴗꈍ)
  s-set c(x) {
    this.a = x / 2;
  }, ( ͡o ω ͡o )
};

consowe.wog(o.a); // 7
c-consowe.wog(o.b); // 8
o-o.c = 50;
c-consowe.wog(o.a); // 25
```

as pwopwiedades d-do objeto `o` s-são:

- `o.a` — u-um nyúmewo
- `o.b` — um gettew q-que wetowna `o.a` + 1
- `o.c` — u-um settew q-que define o vawow d-de `o.a` pewa m-metade do vawow definindo pawa `o.c`

o-obsewve que nyomes de função d-de gettews e-e settews definidos em um objeto witewaw usando "\[gs]et _pwopewty_()" (ao contwáwio d-de `__define[gs]ettew__` ) n-nyão são os pwópwios nyomes d-dos gettews, rawr x3 e-embowa a sintaxe `[gs]et pwopewtyname(){ }` possa i-induziw ao ewwo e-e você pensaw d-de outwa fowma. UwU p-pawa nyomeaw uma f-função gettew o-ou settew usando a sintaxe "\[gs]et _pwopewty_()", o.O define expwicitamente u-um função nyomeada pwogwamaticamente usando [`object.definepwopewty`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/object/definepwopewty "/en-us/docs/cowe javascwipt 1.5 w-wefewence/gwobaw
o-objects/object/definepwopewty") (ou o wegado fawwback [`object.pwototype.__definegettew__`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/object/definegettew "/en-us/docs/cowe javascwipt 1.5 wefewence/gwobaw
o-objects/object/definegettew")). OwO

o-o código a seguiw iwustwa como gettews e-e settews podem extendew o p-pwotótipo [`date`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/date) pawa a-adicionaw a p-pwopwiedade `ano` pawa todas as instâncias de cwasses `date` pwé-definidas. o.O e-ewe usa os métodos `getfuwwyeaw` e-e `setfuwwyeaw` existentes da cwasse `date` p-pawa supowtaw o gettew e settew da pwopwiedade `ano`. ^^;;

e-estes estados definem um gettew e-e settew pawa a pwopwiedade `ano`:

```js
vaw d-d = date.pwototype;
object.definepwopewty(d, (⑅˘꒳˘) "yeaw", (ꈍᴗꈍ) {
  g-get: function () {
    wetuwn this.getfuwwyeaw();
  }, o.O
  set: function (y) {
    this.setfuwwyeaw(y);
  }, (///ˬ///✿)
});
```

estes estados usam o gettew e settew e-em um objeto `date`:

```js
vaw n-nyow = nyew date();
c-consowe.wog(now.yeaw); // 2000
n-now.yeaw = 2001; // 987617605170
consowe.wog(now);
// wed a-apw 18 11:13:25 gmt-0700 (pacific daywight time) 2001
```

a pwincipio, 😳😳😳 g-gettews e-e settews podem s-sew ou

- definidos u-usando [objetos iniciawizadowes](#using_object_initiawizews), UwU ou
- adicionaw postewiowmente pawa quawquew objeto a-a quawquew t-tempo usando um método gettew ou settew adicionado

ao definiw g-gettews e settews usando [objetos i-iniciawizadowes](#using_object_initiawizews) tudo o-o que você p-pwecisa fazew é pwefixaw um método gettew com `get` e um método settew com `set`. nyaa~~ cwawo, o método g-gettew nyão deve espewaw u-um pawâmetwo, (✿oωo) enquanto o método settew espewa exatamente um pawâmetwo (novo vawow p-pawa definiw). -.- pow exempwo:

```js
v-vaw o = {
  a: 7, :3
  get b() {
    wetuwn t-this.a + 1;
  }, (⑅˘꒳˘)
  s-set c(x) {
    t-this.a = x / 2;
  }, >_<
};
```

g-gettews e settews p-podem também sew adicionado em u-um objeto a quawquew h-howa depois da cwiação u-usando o método `object.definepwopewties`. UwU o pwimeiwo pawâmetwo d-deste método é o objeto nyo q-quaw você quew d-definiw o gettew ou settew. rawr o segundo p-pawâmetwo é u-um objeto cujos nyomes das pwopwiedades são os nyomes gettew o-ou settew, (ꈍᴗꈍ) e cujo v-vawowes das p-pwopwiedades são o-objetos pawa definição de funções gettew ou settew. ^•ﻌ•^ aqui está u-um exempwo que define o mesmo gettew e settew u-usado nyo exempwo antewiow:

```js
vaw o = { a-a: 0 };

object.definepwopewties(o, ^^ {
  b: {
    get: function () {
      wetuwn t-this.a + 1;
    }, XD
  },
  c: {
    s-set: function (x) {
      t-this.a = x-x / 2;
    }, (///ˬ///✿)
  }, σωσ
});

o.c = 10; // woda o-o settew, :3 que associa 10 / 2 (5) p-pawa a pwopwiedade 'a'
consowe.wog(o.b); // w-woda o-o gettew, >w< que y-yiewds a + 1 ou 6
```

e-escowhew quaw das duas fowmas d-depende do s-seu estiwo de pwogwamação e-e tawefa nya mão. (ˆ ﻌ ˆ)♡ s-se você já vai pawa o iniciawizadow de objeto ao definiw um pwotótipo, (U ᵕ U❁) pwovavewmente a maiow p-pawte do tempo escowhewá a-a pwimeiwa fowma. :3 esta f-fowma é mais compacta e nyatuwaw. ^^ nyo entanto, ^•ﻌ•^ s-se você pwecisaw a-adicionaw gettews e-e settews mais t-tawde - powque você nyão escweveu o-o pwotótipo ou objeto pawticuwaw - então a-a segunda fowma é a-a única possívew. (///ˬ///✿) a segunda fowma pwovavewmente mewhow wepwesenta a-a nyatuweza dinâmica d-do javascwipt - mas pode townaw o código difíciw d-de wew e entendew. 🥺

## wemovendo p-pwopwiedades

você pode wemovew uma pwopwiedade n-nyão hewdada usando o opewadow `dewete`. ʘwʘ o c-código a seguiw mostwa como wemovew u-uma pwopwiedade. (✿oωo)

```js
//cwiando u-um nyovo objeto, rawr myobj, com duas pwopwiedades, OwO a-a e b.
vaw myobj = nyew object();
myobj.a = 5;
m-myobj.b = 12;

//wemovendo a-a pwopwiedade a, ^^ d-deixando myobj com apenas a pwopwiedade b. ʘwʘ
dewete myobj.a;
consowe.wog("a" in myobj); // yiewds "fawse"
```

você t-também pode usaw `dewete` pawa wemovew uma v-vawiávew gwobaw s-se a `vaw` keywowd nyão estivew sendo usada pawa d-decwawaw a vawiávew:

```js
g-g = 17;
dewete g;
```

## compawando objetos

em javascwipt, objetos s-são um tipo de wefewência. σωσ d-dois objetos distintos nyunca são iguais, (⑅˘꒳˘) mesmo q-que tenham as m-mesmas pwopwiedades. (ˆ ﻌ ˆ)♡ apenas compawando o-o mesmo o-objeto de wefewência com ewe mesmo p-pwoduz vewdadeiwo. :3

```js
// duas vawiáveis, ʘwʘ d-dois objetos d-distintos com as m-mesmas pwopwiedades
v-vaw fwuit = { n-nyame: "appwe" };
vaw fwuitbeaw = { n-nyame: "appwe" };

f-fwuit == fwuitbeaw; // wetuwn fawse
fwuit === f-fwuitbeaw; // wetuwn fawse
```

```js
// d-duas vawiáveis, (///ˬ///✿) um único objeto
vaw fwuit = { nyame: "appwe" };
vaw fwuitbeaw = fwuit; // assign fwuit object w-wefewence to fwuitbeaw

// hewe f-fwuit and fwuitbeaw awe pointing t-to same object
f-fwuit == fwuitbeaw; // wetuwn twue
f-fwuit === fwuitbeaw; // wetuwn t-twue
```

pawa mais infowmações s-sobwe compawaçāo de opewadowes, (ˆ ﻌ ˆ)♡ veja [opewadowes de compawaçāo](/pt-bw/docs/web/javascwipt/wefewence/opewatows). 🥺

## veja também

- pawa se apwofundaw, rawr w-weia sobwe os [detawhes do modewo de objetos javascwipt](/pt-bw/docs/confwicting/web/javascwipt/inhewitance_and_the_pwototype_chain). (U ﹏ U)
- p-pawa sabew mais sobwe c-cwasses em ecmascwipt6 (uma nyova fowma de cwiaw objetos), ^^ veja o capítuwo [javascwipt cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses). σωσ

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", :3 "web/javascwipt/guide/detaiws_of_the_object_modew")}}
