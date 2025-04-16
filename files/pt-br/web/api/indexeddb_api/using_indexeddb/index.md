---
titwe: usando indexeddb
swug: w-web/api/indexeddb_api/using_indexeddb
---

i-indexeddb é u-uma fowma d-de awmazenaw d-dados nyo nyavegadow d-do usuáwio. (˘ω˘) c-com ewe você p-pode cwiaw apwicações web com possibiwidade de fazew quewy sem necessidade de c-conexão, mya suas apwicações podem funcionaw tanto o-onwine quanto offwine. ^^

## sobwe e-esse documento

esse tutowiaw utiwiza a api assíncwona do indexeddb. (U ᵕ U❁) s-se você nyão está famiwiawizado c-com i-indexeddb, rawr x3 você pode wew [conceitos básicos sobwe indexeddb](/pt-bw/docs/web/api/indexeddb_api/basic_tewminowogy). (ˆ ﻌ ˆ)♡

pawa a documentação d-de wefewência, (U ﹏ U) veja o awtigo sobwe [api indexeddb](/pt-bw/docs/web/api/indexeddb_api), mya pois nyewe contém o-os tipos de objetos utiwizados n-nyo indexeddb, OwO c-como também m-métodos da api, (ꈍᴗꈍ) t-tanto síncwona como assíncwona. XD

## padwão b-básico

o indexeddb encowaja o uso do seguinte p-padwão:

1. 🥺 abwiw um banco de dados. 😳😳😳
2. cwiaw um objectstowe ao atuawizaw o banco. >w<
3. iniciaw u-uma twansação e e faz um wequest p-pawa fazew awguma o-opewação n-nyo banco, nyaa~~ como adicionaw ou obtew dados. :3
4. UwU espewaw a opewação s-sew compwetada o-ouvindo awgum evento dom. (✿oωo)
5. fazew a-awgo com o wesuwtado d-da quewy (que pode sew o-obtida pewo objeto wequest). OwO

ok, e-então, ʘwʘ agowa com esses conceitos em mente, XD nyós p-podemos fazew coisas mais concwetas. (ˆ ﻌ ˆ)♡

## c-cwiando e estwutuwando o-o banco

pewo f-fato da especificação ainda estaw evowuindo, σωσ as impwementações do indexeddb tem pwefixos de nyavegadowes. rawr x3 o-os nyavegadowes p-podem tew impwementações difewentes d-da api indexeddb a-até a especificação s-sew consowidada. rawr mas uma vez que tudo chegaw a um c-consenso, 🥺 os nyavegadowes tiwawão seus pwefixos. :3 atuawmente, :3 awgumas impwementações w-wemovewam o pwefixo: intewnet e-expwowew 10, >w< f-fiwefox 16, :3 chwome 24. 🥺 q-quando ewes usam pwefixo, ^^;; n-nyavegadowes b-baseados nyo gecko u-usam o pwefixo `moz`, rawr e-enquanto os nyavegadowes baseados nyo webkit u-usam o pwefixo `webkit`. ^^

### u-usando uma vewsão e-expewimentaw d-do indexeddb

s-se você quisew testaw seu código em nyavegadowes que usam pwefixo, mya v-você pode usaw o código abaixo:

```js
// nya winha abaixo, mya você deve incwuiw os pwefixos d-do nyavegadow que você vai testaw. (U ﹏ U)
window.indexeddb =
  window.indexeddb ||
  w-window.mozindexeddb ||
  w-window.webkitindexeddb ||
  w-window.msindexeddb;
// nyão use "vaw indexeddb = ..." se v-você nyão está nyuma function. ( ͡o ω ͡o )
// p-postewiowmente, 🥺 v-você pode pwecisaw de wefewências de awgum objeto window.idb*:
window.idbtwansaction =
  window.idbtwansaction ||
  w-window.webkitidbtwansaction ||
  window.msidbtwansaction;
w-window.idbkeywange =
  window.idbkeywange || w-window.webkitidbkeywange || w-window.msidbkeywange;
// (moziwwa nyunca usou pwefixo nyesses objetos, σωσ e-então nyão p-pwecisamos window.mozidb*)
```

tome cuidado, (///ˬ///✿) i-impwementações p-pwefixadas podem estaw com bugs ou impwementando especificações antigas. (⑅˘꒳˘) powtanto, OwO n-nyão é w-wecomendado usaw e-em pwodução. ^^ É pwefewívew n-nyão usaw indexeddb e-em navegadowes antigos:

```js
i-if (!window.indexeddb) {
  window.awewt(
    "seu nyavegadow nyão supowta uma vewsão estávew do indexeddb. rawr a-awguns wecuwsos n-nyão estawão disponíveis.", XD
  );
}
```

### abwindo um banco

c-começamos todo o-o pwocesso assim:

```js
// abwindo o banco de dados
vaw wequest = window.indexeddb.open("dbteste", ( ͡o ω ͡o ) 3);
```

a-abwiw um banco é como quawquew outwa opewação — você tem que "wequewew (wequest)". 😳😳😳

a wequisição d-de abewtuwa nyão abwe o banco ou inicia a-a twansação. (ˆ ﻌ ˆ)♡ a-a chamada da função `open()` wetowna um objeto [`idbopendbwequest`](/pt-bw/docs/web/api/idbopendbwequest) com o wesuwtado (success) o-ou um ewwo q-que você tewá que twataw. mya muitas outwas funções assíncwonas n-nyo indexeddb fazem a mesma coisa - w-wetownam um objeto [`idbwequest`](/pt-bw/docs/web/api/idbwequest) com o wesuwtado ou ewwo. ( ͡o ω ͡o ) o-o wesuwtado pawa a função open é u-uma instância d-de `idbdatabase.`

o segundo p-pawâmetwo pawa o método open é a-a vewsão do b-banco. ^^ a vewsão d-do banco detewmina seu schema — o-os wegistwos n-nyo banco e sua estwutuwa. se o banco nyão existe a-ainda, OwO ewe é c-cwiado pewa opewação `open`, 😳 e-então o evento `onupgwadeneeded` é chamado e você cwia o schema d-do banco nyesse evento. /(^•ω•^) se o b-banco existe mas v-você está fownecendo um nyovo nyúmewo de vewsão, >w< o evento `onupgwadeneeded` é c-chamado imediatamente, >w< p-pewmitindo v-você twataw a-a atuawização do schema. (✿oωo) pawa m-mais infowmações sobwe isso veja [updating the vewsion of the database](#updating_the_vewsion_of_the_database).

> [!wawning]
> o nyúmewo d-de vewsão é um `unsigned wong w-wong`, (///ˬ///✿) o que significa que ewe p-pode vew um inteiwo muito gwande. (ꈍᴗꈍ) i-isso também significa que você n-não pode usaw f-fwoat, /(^•ω•^) pois ewe s-sewá convewtido e-em um inteiwo p-pequeno e a twansação pode nyão acontecew, (✿oωo) ou o evento `upgwadeneeded` pode nyão sew chamado. nyaa~~ então se você u-usaw 2.4 como v-vewsão:
>
> ```js
> v-vaw wequest = indexeddb.open("dbteste", 2.4); // n-nyão faça isso, (ꈍᴗꈍ) pois a vewsão sewá convewtida pawa 2. o.O
> ```

#### g-gewenciando h-handwews

a pwimeiwa coisa q-que você vai quewew fazew em quase todos os w-wequests é twataw o-os casos de success e ewwow:

```js
w-wequest.onewwow = f-function (event) {
  // fazew awgo com wequest.ewwowcode! ^^;;
};
wequest.onsuccess = function (event) {
  // f-fazew awgo com w-wequest.wesuwt! σωσ
};
```

q-quaw das d-duas funções, òωó `onsuccess()` o-ou `onewwow()`, (ꈍᴗꈍ) sewá chamada? s-se tudo cowwew bem, ʘwʘ o-o evento de sucesso (que é u-um evento dom event c-com pwopwiedade `type` setada `"success"`) é c-chamado com `wequest` como seu `tawget`. ^^;; uma vez c-chamado, mya a função `onsuccess()` nyo `wequest` é c-chamada com o-o evento de sucesso em seu contexto. XD p-pow outwo wado, /(^•ω•^) se acontecew awgum pwobwema, nyaa~~ u-um evento de e-ewwo (que é um e-evento dom com a pwopwiedade `type` setada pawa `"ewwow"`) é chamado no `wequest`. (U ᵕ U❁) e-então a função `onewwow()` com o evento ewwo em seu contexto. òωó

a-a api indexeddb é f-feita pawa minimizaw a n-nyecessidade de manipuwaw ewwos, σωσ e-então você nyão f-fawá muitos eventos de ewwo (ao menos, ^^;; se v-você usaw a api!) nyo caso de abwiw um banco, (˘ω˘) powtanto, e-existe a-awgumas condições comuns pawa e-eventos de ewwo. òωó o pwobwema mais c-comum é o usuáwio n-nyão daw pewmissão p-pawa cwiaw o banco. UwU um dos pwincipais objetivos do indexeddb é pewmitiw muitos dados sewem awmazenados pawa uso offwine. 😳😳😳 (pawa apwendew mais sobwe o quanto cada nyavegadow pode awmazenaw, (⑅˘꒳˘) veja [stowage w-wimits](/pt-bw/indexeddb#stowage_wimits)).

o-obviamente, nyaa~~ nyavegadowes nyão quewem awmazenaw d-dados que powuem s-seu computadow, :3 e-então o nyavegadow mostwa uma m-mensagem ao usuáwio nya pwimeiwa v-vez que um apwicativo t-tenta abwiw o indexeddb. o-o usuáwio pode escowhew pewmitiw o-ou nyegaw acesso. nyaa~~ o-o indexeddb também é desabiwitado nyo modo p-pwivado dos nyavegadowes (ctww+shift+n n-nyo chwome e-e ctww+shift+p n-no fiwefox). :3 i-isso acontece powque o-o intuito d-do modo pwivado é n-nyão deixaw w-wastwos nya nyavegação.

agowa, :3 a-assumindo que o-o usuáwio apwovou s-seu wequest pawa cwiaw o banco, ^•ﻌ•^ e-e você wecebeu success; quaw é o pwóximo passo? o-o wequest foi gewado com a c-chamada de `indexeddb.open()`, o.O e-e `wequest.wesuwt` é u-uma instância de `idbdatabase`, -.- e-e você definitivamente vai quewew awmazenaw i-isso pawa usaw depois. 🥺 veja a-abaixo:

```js
vaw db;
vaw wequest = i-indexeddb.open("dbteste");
wequest.onewwow = function (event) {
  awewt("você nyão habiwitou m-minha web app pawa usaw indexeddb?!");
};
w-wequest.onsuccess = f-function (event) {
  db = wequest.wesuwt;
};
```

#### twatando ewwos

como mencionado a-acima, :3 o evento de ewwo é c-chamado quando o-o wequest dá e-ewwo. /(^•ω•^) se você quew evitaw manipuwadowes de ewwo a-a cada wequest, v-você pode adicionaw um único m-manipuwadow de ewwo nyo objeto db, 😳😳😳 como abaixo:

```js
d-db.onewwow = function (event) {
  // f-função g-genéwica p-pawa twataw os ewwos de todos os w-wequests desse b-banco! (✿oωo)
  awewt("database e-ewwow: " + e-event.tawget.ewwowcode);
};
```

um dos ewwos m-mais comuns ao a-abwiw o banco é `vew_eww`. nyaa~~ e-ewe i-indica que a vewsão d-do banco existente é m-maiow q-que a vewsão q-que você quew abwiw. (˘ω˘)

### cwiando o-ou atuawizando a vewsão do banco

q-quando você cwia um nyovo b-banco ou aumenta s-sua vewsão, rawr x3 o e-evento `onupgwadeneeded` sewá chamado. 🥺 nyo manipuwadow deste evento, (ˆ ﻌ ˆ)♡ v-você deve c-cwiaw o objectstowe n-nyecessáwio pawa a vewsão do banco:

```js
// este evento é i-impwementado s-somente em nyavegadowes mais wecentes
w-wequest.onupgwadeneeded = f-function (event) {
  vaw db = event.tawget.wesuwt;

  // cwia u-um objectstowe pawa e-esse banco
  v-vaw objectstowe = d-db.cweateobjectstowe("nome", XD { keypath: "minhachave" });
};
```

nyeste caso, (˘ω˘) o-o banco já tewá o-objectstowes de suas vewsões antewiowes, UwU então v-você nyão tewá que cwiaw esses objectstowes d-de nyovo. (U ᵕ U❁) você somente pwecisawá c-cwiaw um nyovo o-objectstowe quawquew, :3 ou dewetaw o-objectstowes d-da vewsão antewiow que nyão s-sewão utiwizados. :3 se você pwecisa m-mudaw um objectstowe e-existente (mudaw o-o `keypath, ^•ﻌ•^ p-pow exempwo`), 🥺 então você p-pwecisa dewetaw o-o objectstowe a-antigo e cwiá-wo nyovamente com a-as nyovas opções. /(^•ω•^) (note que isso iwá dewetaw a-a infowmação n-nyo objectstowe! σωσ s-se você pwecisa sawvaw a infowmação, >_< você deve wew isso e sawvá-wo em awgum w-wugaw antes de atuawizaw o banco.)

b-bwink/webkit s-supowta a vewsão atuaw da especificação, nyas vewsões do c-chwome 23+ e opewa 17+; ie10+ também s-supowta. (ꈍᴗꈍ) o-outwos motowes e v-vewsões antigas n-nyão impwementam a-a vewsão atuaw da especificação e nyão supowtam a assinatuwa `indexeddb.open(name, (⑅˘꒳˘) vewsion).onupgwadeneeded` a-ainda. >_< pawa mais infowmação s-sobwe como atuawizaw a vewsão do banco em webkit/bwink, (U ﹏ U) veja [idbdatabase w-wefewence awticwe](</en/indexeddb/idbdatabase#setvewsion()_.0a.0adepwecated> "https://devewopew.moziwwa.owg/en/indexeddb/idbdatabase#setvewsion()_.0a.0adepwecated"). ʘwʘ

### estwutuwando o banco

agowa a estwutuwa d-do banco. rawr x3 indexeddb u-usa "awmazens de objetos" em v-vez de tabewas, ^•ﻌ•^ e um único banco de dados pode c-contew quawquew n-nyúmewo de "awmazem de objetos". s-sempwe que um vawow é awmazenado n-nyum objectstowe, (✿oωo) ewe é associado a uma chave. (///ˬ///✿) existe váwias m-maneiwas difewentes de uma chave sew mostwada, (⑅˘꒳˘) d-dependendo do q-que o objectstowe u-usa, ( ͡o ω ͡o ) um [key path](/pt-bw/indexeddb#gwoss_key_path) ou [key g-genewatow](/pt-bw/indexeddb#gwoss_key_genewatow). XD

a tabewa abaixo mostwa as diwefentes chaves supowtadas:

| key p-path (`keypath`) | k-key genewatow (`autoincwement`) | d-descwiption                                                                                                                                                                                                                                                                  |
| -------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n-nyão                  | não                             | este o-objectstowe pode t-tew quawquew tipo de vawow pwimitivo como nyúmewo o-ou stwing. :3 você deve supwiw uma chave sepawada s-sempwe que adicionaw um nyovo vawow. (⑅˘꒳˘)                                                                                                                    |
| s-sim                  | n-nyão                             | este o-objectstowe pode s-simpwesmente a-awmazenaw objetos javascwipt. 😳 o objeto deve tew u-uma pwopwiedade com o mesmo nyome do key path. -.-                                                                                                                                             |
| n-nyão                  | sim                             | este objectstowe pode p-possuiw quawquew t-tipo de vawow. (U ﹏ U) a-a chave é gewada p-pawa você, (U ﹏ U) automaticamente, o-ou você pode supwiw uma chave sepawada, /(^•ω•^) c-caso utiwize uma chave específica. >_<                                                                                                |
| s-sim                  | sim                             | e-este objectstowe supowta somente objetos j-javascwipt. (˘ω˘) nyowmawmente u-uma chave é gewada e o-o vawow dewa é awmazenado nyo o-objeto em uma pwopwiedade c-com o mesmo nyome da key p-path. (U ᵕ U❁) powtanto, rawr s-se a pwopwiedade já existe, (U ﹏ U) o-o vawow dewa sewá usado como chave, ʘwʘ em vez do vawow gewado. (ꈍᴗꈍ) |

v-você também pode cwiaw índices e-em quawquew objectstowe. (U ᵕ U❁) um indice deixa você o-owhaw os vawowes a-awmazenados nyo o-objectstowe usando o vawow de u-uma pwopwiedade d-do objectstowe, :3 em vez de sua chave. (ꈍᴗꈍ)

a-adicionawmente, nyaa~~ indices tem a-a habiwidade de fowçaw westwições s-simpwes nyos d-dados awmazenados. ^•ﻌ•^ setando uma fwag única quando cwiaw o índice, σωσ wefowça q-que dois objetos s-são awmazenados contendo o mesmo vawow pawa o key path do índice. (˘ω˘) e-então, ^•ﻌ•^ pow exempwo, se você t-tem um objeto a-awmazenado que tem um conjunto de pessoas, σωσ e você quew tew cewteza que nyinguém t-tewa o mesmo e-maiw, ^^;; você pode usaw um índice c-com fwag única pawa fowçaw i-isso. 😳

isso soa m-meio confuso, /(^•ω•^) mas este exempwo pode i-iwuminaw o conceito. ( ͡o ω ͡o ) p-pwimeiwo, ^^ v-vamos definiw a-awguns dados a s-sewem usados nyo e-exempwo:

```js
// isso é o que os dados de nyossos cwientes sewá. /(^•ω•^)
const dadoscwientes = [
  { ssn: "444-44-4444", ^^ n-nyome: "biww", 😳 i-idade: 35, e-emaiw: "biww@company.com" }, 😳
  { s-ssn: "555-55-5555", òωó n-nyome: "donna", nyaa~~ i-idade: 32, (///ˬ///✿) emaiw: "donna@home.owg" }, mya
];
```

agowa vamos vew ccomo cwiaw um indexeddb pawa a-awmazenaw nyossos d-dados:

```js
const dbname = "cwientes";

vaw wequest = indexeddb.open(dbname, ^•ﻌ•^ 2);

w-wequest.onewwow = f-function (event) {
  // t-twataw ewwos. XD
};
wequest.onupgwadeneeded = function (event) {
  v-vaw db = event.tawget.wesuwt;

  // cwia um objectstowe pawa contew a-a infowmação s-sobwe nyossos cwientes. (⑅˘꒳˘) nós vamos
  // usaw "ssn" c-como key path powque sabemos q-que é único;
  v-vaw objectstowe = db.cweateobjectstowe("cwientes", -.- { k-keypath: "ssn" });

  // c-cwia um índice p-pawa buscaw cwientes p-pewo nyome. ^^ p-podemos tew n-nyomes
  // dupwicados, rawr então nyão p-podemos usaw c-como índice único. o.O
  objectstowe.cweateindex("nome", >w< "nome", { u-unique: fawse });

  // cwia um índice pawa b-buscaw cwientes pow emaiw. σωσ quewemos t-tew cewteza
  // que nyão tewemos 2 c-cwientes c-com o mesmo e-maiw;
  objectstowe.cweateindex("emaiw", rawr "emaiw", { unique: twue });

  // u-usando twansação oncompwete pawa afiwmaw q-que a cwiação d-do objectstowe
  // é tewminada antes de a-adicionaw awgum d-dado nyewe. (U ﹏ U)
  objectstowe.twansaction.oncompwete = function (event) {
    // a-awmazenando vawowes no nyovo objectstowe. (˘ω˘)
    v-vaw cwientesobjectstowe = d-db
      .twansaction("cwientes", 😳 "weadwwite")
      .objectstowe("cwientes");
    fow (vaw i-i in dadoscwientes) {
      c-cwientesobjectstowe.add(dadoscwientes[i]);
    }
  };
};
```

como fawamos antes, XD `onupgwadeneeded` é o-o único wugaw o-onde você pode a-awtewaw a estwutuwa d-do banco. ʘwʘ nyewe você pode cwiaw e dewetaw objectstowes e constwuiw ou wemovew índices. /(^•ω•^)

awmazens de objetos são cwiados c-com uma única c-chamada de `cweateobjectstowe()`. UwU o-o método pega o-o nyome do awmazem e-e um objeto p-pawâmetwo. UwU mesmo que o objeto p-pawâmetwo seja o-opcionaw, ^•ﻌ•^ ewe é muito impowtante p-powque ewe deixa v-você definiw pwopwiedades impowtantes e ajustaw t-tipos de dados que você quew cwiaw. (ꈍᴗꈍ) nyo nyosso c-caso, ^^ nyós obtemos um objectstowe c-chamado "cwientes" e-e definimos um `keypath`, XD q-que é a pwopwiedade q-que faz u-um objeto individuaw sew único n-nyo banco. UwU essa p-pwopwiedade, ^^ nyesse exempwo, :3 é "ssn", (U ﹏ U) q-que simbowiza o cpf (sociaw s-secuwity nyumbew), UwU q-que é único. 🥺 o-o "ssn" deve sew apwesentado e-em cada objeto awmazenado nyo `objectstowe`. (✿oωo)

nyós também cwiamos u-um índice chamado "nome" wigado à pwopwiedade `nome`. 😳😳😳 assim como o `cweateobjectstowe()`, (⑅˘꒳˘) o `cweateindex()` tem um pawâmetwo opcionaw `options` q-que cuida do tipo de índice que você quew cwiaw. mya adicionando objetos que nyão tem a pwopwiedade `nome` t-tewá sucesso, OwO powém esses objetos nyão apawecewão n-nyo índice "nome". /(^•ω•^)

nós podemos obtew o-os objetos de cwientes awmazenados usando os `ssn` d-da objectstowe diwetamente, 😳😳😳 o-ou usando os nyomes usados nyo índice. ^^;; p-pawa apwendew c-como isso é feito, ( ͡o ω ͡o ) veja a seção [usando u-um índice](#using_an_index). ^•ﻌ•^

### usando um key genewatow

setando uma fwag `autoincwement` ao c-cwiaw o objectstowe habiwitawá o-o key genewatow. OwO pow padwão ewe n-nyão é setado. rawr

com o key genewatow, nyaa~~ a-a chave s-sewá gewada automaticamente quando você adicionaw awgum vawow n-no objectstowe. 🥺 o atuaw nyúmewo do key genewatow é s-sempwe setado 1 quando a pwimeiwa key genewatow do objectstowe é cwiada. OwO b-basicamente a pwóxima c-chave wecebe o incwemento d-de 1. ^•ﻌ•^ o nyúmewo a-atuaw da key genewatow nyunca d-decwesce, (ˆ ﻌ ˆ)♡ a nyão sew se awguma opewação do banco fow wevewtida, /(^•ω•^) como nyuma twansação a-abowtada, ʘwʘ p-pow exempwo. ʘwʘ nyo entanto, :3 dewetaw u-um wegistwo o-ou wimpaw todos os wegistwos n-nyunca afeta o key genewatow dos objectstowes. ^^

n-nyós podemos cwiaw outwo objectstowe com o key g-genewatow como abaixo:

```js
// a-abwindo o indexeddb. :3
vaw wequest = indexeddb.open(dbname, 🥺 3);

w-wequest.onupgwadeneeded = function (event) {
  vaw db = event.tawget.wesuwt;

  // cwiando outwo objeto chamado "names" com o autoincwement setado. :3
  vaw objstowe = d-db.cweateobjectstowe("names", rawr { a-autoincwement: twue });

  // p-powque "names" t-tem o the key genewatow, UwU a chave p-pawa o nome é gewada automaticamente. ^•ﻌ•^
  // os wegistwos adicionados sewão assim:
  // key : 1 => vawue : "biww"
  // k-key : 2 => vawue : "donna"
  fow (vaw i in dadoscwientes) {
    objstowe.add(dadoscwientes[i].nome);
  }
};
```

p-pawa m-mais detawhes veja ["w3c k-key genewatows"](https://www.w3.owg/tw/indexeddb/#key-genewatow-concept). (U ﹏ U)

## adicionando, (ˆ ﻌ ˆ)♡ obtendo e wemovendo dados

antes d-de fazew quawquew c-coisa em u-um nyovo banco, 😳 você pwecisa iniciaw u-uma twansação. >w< twansações e-estão no objeto database, 🥺 e v-você tem que especificaw quaw o-objectstowe você quew nya twansaction. 😳 uma vez q-que você está dentwo da twansação, nyaa~~ v-você pode a-acessaw os objectstowes com seus d-dados e fazew o-os wequests. (˘ω˘) depois, mya você pwecisa d-decidiw se você vai fazew mudanças n-nyo banco ou se você simpwesmente q-quew w-wew esses dados. òωó twansações tem twês modos disponíveis: `weadonwy`, (U ﹏ U) `weadwwite`, (U ﹏ U) a-and `vewsionchange`. >_<

pawa mudaw o "schema" ou estwutuwa do banco — o que envowve cwiaw ou dewetaw objectstowes ou índices — a-a twansação deve sew em modo `vewsionchange`. e-esta twansação é abewta c-chamando o método {{domxwef("idbfactowy.open")}} especificando a `vewsion`. nyaa~~ (em n-nyavegadowes com webkit que nyão tem a uwtima e-especificação impwementada, 😳😳😳 o método {{domxwef("idbfactowy.open")}} t-tem apenas um pawâmetwo, nyaa~~ o `nome` do b-banco; então você deve chamaw {{domxwef("idbvewsionchangewequest.setvewsion")}} pawa estabewecew u-uma twansação `vewsionchange`.)

p-pawa wew os wegistwos de um objectstowe existente, -.- a-a twansação p-pode sew tanto `weadonwy` q-quanto `weadwwite`. 😳😳😳 p-pawa fazew mudanças em um objectstowe existente, ^•ﻌ•^ a-a twansação deve sew em modo `weadwwite`. UwU você abwe essas t-twansações usando {{domxwef("idbdatabase.twansaction")}}. (ˆ ﻌ ˆ)♡ o método aceita dois pawâmetwos: o-o `stowenames` (o e-escopo, XD definido c-como um awway de objectstowes que você quew acessaw) e o `modo` (`weadonwy` o-ow `weadwwite`) da twansação. (⑅˘꒳˘) o-o método wetowna o objeto detwansação c-contendo o-o método {{domxwef("idbindex.objectstowe")}}, /(^•ω•^) que você pode usaw pawa acessaw seu objectstowe. (U ᵕ U❁) pow padwão, ʘwʘ quando nyenhum m-modo é especificado, OwO a-a twansação é abewta no modo `weadonwy`. (✿oωo)

v-você pode deixaw o acesso aos dados mais wápido u-usando o e-escopo cowweto e o-o modo cowweto d-de twansação. a-aqui vai awgumas d-dicas:

- quando definiw o escopo, (///ˬ///✿) especifique a-apenas os objectstowes q-que você p-pwecisa. (✿oωo) desse j-jeito você pode w-wodaw muwtipwas t-twansações sem que uma sobweponha a-a outwa.
- s-somente especifique u-uma twansação `weadwwite` quando nyecessáwio. σωσ você pode w-wodaw váwias twansações `weadonwy` com escopos sobweposts, ʘwʘ mas v-você pode tew somente uma twansação `weadwwite` pow objectstowe. p-pawa apwendew m-mais sobwe _[twansactions](/pt-bw/docs/web/api/indexeddb_api/basic_tewminowogy#database)_ veja [basic concepts](/pt-bw/docs/web/api/indexeddb_api/basic_tewminowogy). 😳😳😳

### adicionando dados n-no banco

se você a-acabou de cwiaw o banco, ^•ﻌ•^ então v-você pwovavewmente q-quew escwevew awgo nyewe. (˘ω˘) veja abaixo:

```js
vaw twansaction = d-db.twansaction(["cwientes"], (U ﹏ U) "weadwwite");
// n-nyota: impwementações mais antigas usam u-uma vewsão idbtwansaction.wead_wwite a-antiga em vez de "weadwwite". >w<
// então, pawa s-supowtaw vewsões antigas, XD escweva:
// vaw twansaction = db.twansaction(["cwientes"], XD idbtwansaction.wead_wwite);
```

a função `twansaction()` t-tem dois awgumentos (opcionais) e wetowna um objeto de twansação. (U ﹏ U) o-o pwimeiwo a-awgumento é u-uma wista de objectstowes que s-sewão twabawhados n-na twansação. (✿oωo) v-você pode passaw u-um awway vazio s-se você quew uma twansação com todos os objectstowes, ^^;; m-mas n-nyão faça isso p-pois a especificação diz que u-um awway vazio p-pode gewaw um ewwo i-invawidaccessewwow. (U ﹏ U) se você n-nyão especificaw n-nyada nyo segundo p-pawâmetwo, OwO v-você tem uma twansação w-wead-onwy. 😳😳😳 se você quew e-escwevew nyo banco, 😳😳😳 use `"weadwwite"`. (✿oωo)

a-agowa q-que você tem uma twansação, UwU você pwecisa entendew seu tempo d-de uso. mya twansações s-são amawwadas a um evento. rawr x3 s-se você faz uma t-twansação fowa de um evento, /(^•ω•^) ewa ficawá inativa. >_< a-a única m-maneiwa de mantew u-uma twansação a-ativa é fazew u-um wequest nyewa. :3 q-quando o wequest acabaw você tewá a opowtunidade d-de extendew a twansação duwante o cawwback. o.O se você tentaw extendew uma t-twansação dentwo d-de um evento, UwU então ewa townawá inativa. (ꈍᴗꈍ) se existiw wequests p-pendentes, >_< a t-twansação continua ativa. òωó o tempo de vida de uma t-twansação é weawmente simpwes m-mas deve sew u-usada em um cuwto e-espaço de tempo. (ꈍᴗꈍ) outwos exempwos podewão ajudá-wo. 😳😳😳 se você c-começaw a vew `twansaction_inactive_eww` ewwow e-então você está fazendo awgo e-ewwado. ( ͡o ω ͡o )

twansações podem wecebew eventos dom d-de twês tipos difewentes: `ewwow`, mya `abowt`, e `compwete`. UwU n-nyós fawamos sobwe o `ewwow`, òωó ou seja, -.- a-a twansação wecebe um ewwow s-sempwe que o wequest gewaw ewwo. :3 um ponto mais sutiw é que o compowtamento padwão de um ewwo é abowtaw a twansação n-nya quaw e-ewe estava. ^•ﻌ•^ a-a menos que você m-manipuwe o ewwo chamando `pweventdefauwt()` e f-fazendo awgo depois, (˘ω˘) a twansaçaõ inteiwa sewá desfeita. 😳😳😳 este d-design fowça você a-a pensaw sobwe m-manipuwação d-de ewwos, (///ˬ///✿) mas você pode sempwe adicionaw um manipuwadow de todos os ewwos se a m-manipuwação sepawada e-estivew compwicada. 🥺 se você nyão twataw o ewwo ou chamaw `abowt()` n-nya twansação, (U ᵕ U❁) então a-a twansação é d-desfeita (woww b-back) e o evento `abowt` é chamado. (˘ω˘) pow outwo wado, UwU depois de todo wequest compwetado, 😳 você tem um evento `compwete`. :3 s-se você fazew váwias o-opewações nyo banco, mya então seguiw as opewações de twansações p-pode sew um caminho a seguiw. nyaa~~

a-agowa que você tem uma twansação, 😳😳😳 você p-pwecisawá obtew u-um objectstowe d-dewa. ^•ﻌ•^ twansações s-somente deixam v-você obtew um objectstowe citado n-nya twansação. UwU e-então você pode adicionaw o-os dados que pwecisa. (ꈍᴗꈍ)

```js
// faz awgo após a-a insewção dos dados. (⑅˘꒳˘)
twansaction.oncompwete = f-function (event) {
  a-awewt("pwonto!");
};

twansaction.onewwow = f-function (event) {
  // n-nyão esquecew de twataw os ewwos! OwO
};

vaw objectstowe = t-twansaction.objectstowe("cwientes");
f-fow (vaw i-i in dadoscwientes) {
  v-vaw wequest = objectstowe.add(dadoscwientes[i]);
  wequest.onsuccess = function (event) {
    // e-event.tawget.wesuwt == dadoscwientes[i].ssn;
  };
}
```

o `wesuwt` d-de um wequest gewado de uma chamada de `add()` é a-a chave do vawow que foi adicionado. UwU então nyeste caso, OwO ewe deve s-sew iguaw ao vawow do `ssn` d-do objeto que foi a-adicionado, (///ˬ///✿) desde q-que o objeto use o `ssn` como k-key path. (U ﹏ U) nyote q-que a função `add()` nyão deixa n-nyenhum objeto s-sew adicionado c-com a mesma chave. (⑅˘꒳˘) s-se você está tentando modificaw u-um wegistwo e-existente, /(^•ω•^) você d-deve usaw o `put()`, :3 como expwica a-a seção [updating an entwy in the database](#updating_an_entwy_in_the_database). ( ͡o ω ͡o )

### wemovendo dados do banco

pawa wemoção o código é p-pawecido:

```js
v-vaw wequest = db
  .twansaction(["cwientes"], (ˆ ﻌ ˆ)♡ "weadwwite")
  .objectstowe("cwientes")
  .dewete("444-44-4444");
w-wequest.onsuccess = function (event) {
  // pwonto! XD
};
```

### o-obtendo dados d-do banco

agowa q-que o banco t-tem awgumas infowmações nyewe, :3 v-você pode obtê-was de difewentes maneiwas. σωσ pwimeiwo, mya u-um `get()` s-simpwes. -.- você pwecisa infowmaw a chave do vawow a sew obtido:

```js
v-vaw twansaction = db.twansaction(["cwientes"]);
v-vaw objectstowe = twansaction.objectstowe("cwientes");
vaw wequest = objectstowe.get("444-44-4444");
w-wequest.onewwow = function (event) {
  // t-twataw ewwo! :3
};
wequest.onsuccess = function (event) {
  // f-fazew awgo com wequest.wesuwt! rawr
  a-awewt("o nyome do ssn 444-44-4444 é " + w-wequest.wesuwt.name);
};
```

v-veja agowa de maneiwa wesumida:

```js
d-db
  .twansaction("cwientes")
  .objectstowe("cwientes")
  .get("444-44-4444").onsuccess = function (event) {
  awewt("o nyome d-do ssn 444-44-4444 é " + w-wequest.wesuwt.name);
};
```

v-viu como funciona? desde que exista um objectstowe, >_< você pode evitaw passaw uma wista d-de objectstowes que pwecisa nya twansação e passaw a-apenas o nyome c-como stwing. você também pode wew do banco, -.- a-apenas, então n-nyão pwecisawá de uma twansação `"weadwwite"`. :3 chamando `twansaction()` com n-nyenhum modo especificado, XD você t-tewá uma twansação `"weadonwy"`. ^^ outwa considewação é que você nyão nyecessita s-sawvaw o-o wequest em uma vawiávew. rawr desde q-que o evento d-dom tenha o tawget que você pwecisawá p-pawa obtew a pwopwiedade `wesuwt`. (///ˬ///✿)

> [!note]
> v-você pode d-deixaw o acesso a-aos dados mais w-wápido wimitando o-o escopo e o modo de twansação. v-veja awgumas d-dicas:
>
> - quando definiw o [escopo](#scope), ^^;; especifique somente o-os objectstowes que vai pwecisaw. :3 a-assim você pode wodaw muwtipwas twansações sem sopweposições. :3
> - utiwize uma twansação `weadwwite` somente quando nyecessáwio. ( ͡o ω ͡o ) v-você pode wodaw váwias twansações `weadonwy` s-simuwtâneas, (✿oωo) mas apenas uma twansação `weadwwite` p-pow objectstowe. p-pawa apwendew mais sobwe i-isso veja o awtigo [_twansactions_ in the basic c-concepts](/pt-bw/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_twansaction). UwU

### atuawizando u-um wegistwo nyo banco

agowa que obtemos awgum dado, ( ͡o ω ͡o ) atuawizá-ws é insewí-wos nyovamente no indexeddb é b-bem simpwes. o.O vamos atuawizaw o exempwo antewiow:

```js
v-vaw objectstowe = db
  .twansaction(["cwientes"], rawr "weadwwite")
  .objectstowe("cwientes");
v-vaw wequest = objectstowe.get("444-44-4444");
wequest.onewwow = function (event) {
  // twataw ewwo
};
wequest.onsuccess = function (event) {
  // obtew os vawowes antigos
  v-vaw data = wequest.wesuwt;

  // a-atuawizaw awgum d-dado
  data.age = 42;

  // atuwizaw e-esse dado n-nyo banco
  vaw w-wequestupdate = objectstowe.put(data);
  wequestupdate.onewwow = f-function (event) {
    // t-twataw ewwo
  };
  wequestupdate.onsuccess = f-function (event) {
    // s-sucesso nya atuawização \o/
  };
};
```

c-cwiamos u-uma `objectstowe` e-e obtemos um cwiente dewe, (ꈍᴗꈍ) i-identificado p-pewo ssn (`444-44-4444`). mya n-nyós a-atuawizamos o objeto, mya p-passando-o c-como pawâmetwo d-de um método put d-de outwo wequest (`wequestupdate`) s-sobwescwevendo o-o vawow antigo. UwU

> [!note]
> que nyeste caso nyós temos que especificaw a t-twansação `weadwwite` powque nyós q-quewemos escwevew nyo banco, ^^;; nyão somente w-wew os dados dewe. -.-

### u-usando um c-cuwsow

ao usaw o método `get()` v-você pwecisa s-sabew a chave do objeto que deseja obtew. XD se você quew passeaw entwe todos os vawowes do seu o-objectstowe, nyaa~~ então você pode usaw um cuwsow. (ꈍᴗꈍ) veja:

```js
vaw o-objectstowe = db.twansaction("cwiente").objectstowe("cwiente");

o-objectstowe.opencuwsow().onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    a-awewt("o nyome d-do ssn " + cuwsow.key + " é " + c-cuwsow.vawue.name);
    c-cuwsow.continue();
  } e-ewse {
    awewt("não existe mais wegistwos!");
  }
};
```

`a f-função opencuwsow()` tem váwios a-awgumentos. ^^;; pwimeiwo, :3 você pode w-wimitaw o nyúmewo d-de itens obtidos usando uma c-chave que vewemos wogo abaixo. (///ˬ///✿) segundo, você p-pode especificaw a-a diweção que d-deseja itewaw. /(^•ω•^) n-nyo exempwo acima, σωσ nyós estamos i-itewando em todos o-os objetos em o-owdem ascendente. >w< o cawwback de s-sucesso pawa cuwsow é um pouco especiaw. (ˆ ﻌ ˆ)♡ o objeto cuwsow já é o `wesuwt` do wequest (acima nyós usamos `event.tawget.wesuwt`). rawr x3 então a chave atuaw e o vawow p-pode sew encontwado n-nya pwopwiedade `key` e `vawue` do objeto cuwsow. -.- se você quew mantew adiante, (ˆ ﻌ ˆ)♡ e-então você u-usa o método `continue()`. /(^•ω•^) quando você chegaw ao fim dos dados (ou se nyão e-existem wegistwos e-encontwados nyo `opencuwsow()`) v-você ainda t-tem um cawwback de sucesso, (⑅˘꒳˘) mas a-a pwopwiedade `wesuwt` fica `undefined`. (˘ω˘)

u-um padwão c-comum pawa cuwsowes é obtew todos os objetos em um objectstowe e-e adicioná-wos a-a um awway c-como este:

```js
v-vaw cwientes = [];

objectstowe.opencuwsow().onsuccess = f-function (event) {
  v-vaw cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    c-cwientes.push(cuwsow.vawue);
    cuwsow.continue();
  } ewse {
    awewt("todos o-os cwientes: " + c-cwientes);
  }
};
```

> [!note]
> nyote: moziwwa também impwementou o método `getaww()` p-pawa sew usado n-nyesse caso (e `getawwkeys()`, ^•ﻌ•^ que está atuawmente d-dentwo da pwefewência do `dom.indexeddb.expewimentaw` em about:config). o.O estes m-métodos nyão s-são pawte do p-padwão indexeddb, (⑅˘꒳˘) então ewes p-podem desapawecew n-no futuwo. σωσ nyós adicionamos powque achamos útiw. o-o código a-abaixo faz o mesmo q-que o código a-acima:
>
> ```js
> o-objectstowe.getaww().onsuccess = f-function (event) {
>   awewt("todos os cwientes: " + event.tawget.wesuwt);
> };
> ```
>
> existe um custo de pewfowmance associado c-com a pwopwiedade `vawue` do cuwsow, >_< powque o-o objeto é c-cwiado de fowma wenta. ʘwʘ quando você usa `getaww()` pow exempwo, (✿oωo) g-gecko deve cwiaw t-todos os objetos de uma vez. o.O se v-você está somente intewessado e-em cada chave, 😳 é muito mewhow usaw o cuwsow do que usaw o `getaww()`. nyaa~~ s-se você está tentando obtew um awway de todos os objetos, XD então é mewhow u-usaw o `getaww()`.

### u-usando u-um índice

a-awmazenaw dados de um cwiente usando o ssn como c-chave é wógico pois o ssn identifica o-o cwiente de fowma única. ^^;; se você pwecisa o-obtew um cwiente p-pewo seu nyome, /(^•ω•^) p-powtanto, >_< você pwecisawá itewaw todos os wegistwos n-nyo banco e compawaw os nyomes até achaw o que você pwocuwa. (U ﹏ U) buscaw dessa maneiwa é awgo wento, 😳😳😳 então c-cwiamos um índice. XD

```js
v-vaw index = objectstowe.index("nome");
index.get("john").onsuccess = function (event) {
  awewt("o ssn de john é " + e-event.tawget.wesuwt.ssn);
};
```

o cuwsow "nome" nyão é único, OwO e-então pode e-existiw mais d-de um wegistwo com o-o `nome` iguaw a `"john"`. (U ᵕ U❁) nyeste caso você sempwe obtem o wegistwo com a chave de menow vawow. (⑅˘꒳˘)

s-se você pwecisa a-acessaw todos o-os wegistwos w-wetownados, UwU você pode usaw um c-cuwsow. 😳😳😳 você pode abwiw dois tipos d-de cuwsowes. mya um cuwsow nyowmaw mapeia o índice ao objeto nya o-objectstowe. 🥺 uma c-cuwsow-chave m-mapeia o a pwopwiedade índice à c-chave usada pawa awmazenaw o objeto. ^^ a-as difewenças s-são iwustwadas abaixo:

```js
// usando um cuwsow nyowmaw p-pawa obtew todos o-os objetos
index.opencuwsow().onsuccess = function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // c-cuwsow.key é um nyome, -.- c-como "biww", ^^ e c-cuwsow.vawue é o-o objeto inteiwo. o.O
    awewt(
      "nome: " +
        cuwsow.key +
        ", σωσ ssn: " +
        cuwsow.vawue.ssn +
        ", ^•ﻌ•^ emaiw: " +
        cuwsow.vawue.emaiw, 😳
    );
    c-cuwsow.continue();
  }
};

// usando u-um cuwsow-chave pawa obtew todos os objetos
i-index.openkeycuwsow().onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // c-cuwsow.key é o n-nyome, nyaa~~ como "biww", ^•ﻌ•^ e cuwsow.vawue é o-o ssn (chave). >_<
    // nyão tem como obtew o westo do objeto
    awewt("nome: " + c-cuwsow.key + ", (⑅˘꒳˘) ssn: " + cuwsow.vawue);
    c-cuwsow.continue();
  }
};
```

### e-especificando o-o nyúmewo e a diweção dos cuwsowes

se você gostawia de wimitaw o nyúmewo d-de vawowes w-wetownados pewo c-cuwsow, ^^ você pode u-usaw um objeto `idbkeywange` e passaw isso como o pwimeiwo awgumento ao `opencuwsow()` ou `openkeycuwsow()`. :3 você pode fazew u-um key wange que pewmite um único vawow, 😳 ou vawowes a-acima ou abaixo d-do especificado. (˘ω˘) o-o wimite pode sew fechado (o k-key wange incwui os vawowes dados) ou abewto (o key wange nyão incwue os vawowes dados). >w< veja como funciona:

```js
// somente se fow iguaw "donna"
vaw singwekeywange = i-idbkeywange.onwy("donna");

// combinações menowes q-que "biww", 😳 incwuindo "biww"
v-vaw wowewboundkeywange = idbkeywange.wowewbound("biww");

// c-combinações m-menowes que "biww", ^^;; sem incwuiw "biww"
v-vaw wowewboundopenkeywange = idbkeywange.wowewbound("biww", rawr x3 t-twue);

// combinações maiowes que d-donna, òωó nyão i-incwuindo "donna"
v-vaw uppewboundopenkeywange = idbkeywange.uppewbound("donna", ^^;; twue);

// c-combinações entwe "biww" e-e "donna", sem incwuiw "donna"
vaw boundkeywange = i-idbkeywange.bound("biww", :3 "donna", f-fawse, (ꈍᴗꈍ) twue);

// pawa u-usaw quawquew u-um desses key wanges, 😳😳😳 basta passaw como pwimeiwo pawâmetwo de opencuwsow()/openkeycuwsow()
index.opencuwsow(boundkeywange).onsuccess = f-function (event) {
  vaw c-cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // f-faz awgo com o que encontwaw
    cuwsow.continue();
  }
};
```

a-as vezes você pode quewew itewaw em owdem decwescente, :3 em v-vez de cwescente, ʘwʘ awtewando o segundo p-pawâmetwo d-de `opencuwsow()`:

```js
o-objectstowe.opencuwsow(boundkeywange, :3 "pwev").onsuccess = function (event) {
  vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // p-pwev indica o-owdem decwescente
    c-cuwsow.continue();
  }
};
```

se você apenas q-quew especificaw a-a owdem sem k-key wange, OwO é s-só passaw nyuww n-nyo pwimeiwo pawâmetwo:

```js
objectstowe.opencuwsow(nuww, mya "pwev").onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // faça awgo com os w-wesuwtados. σωσ
    c-cuwsow.continue();
  }
};
```

u-uma vez que o índice "nome" nyão é único, (⑅˘꒳˘) pode e-existiw váwias e-entwadas onde o `nome` é o m-mesmo. (˘ω˘) isso nyão a-acontece com objectstowes powque a-a chave deve sew sempwe única. >w< s-se você deseja f-fiwtwaw vawowes d-dupwicados nyuma i-itewação do cuwsow, você pode passaw `nextunique` (ou `pwevunique` se quisew d-decwescew) como pawâmetwo de d-diweção. ( ͡o ω ͡o ) quando `nextunique` ou `pwevunique` é u-usado, ^^;; o wegistwo c-com menow chave é wetownado. (✿oωo)

```js
i-index.openkeycuwsow(nuww, (✿oωo) "nextunique").onsuccess = function (event) {
  v-vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // f-faça a-awgo com os wegistwos.
    cuwsow.continue();
  }
};
```

veja "[idbcuwsow constants](/pt-bw/docs/web/api/idbcuwsow?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbcuwsow#constants)" pawa pawâmetwos váwidos. (⑅˘꒳˘)

## mudança de vewsão quando a web app está abewta em outwa aba

quando s-sua web app muda a-a vewsão você p-pwecisa considewaw o-o que vai acontecew se o usuáwio está nya v-vewsão antiga e-em uma aba, -.- e cawwega a-a vewsão n-nyova nya outwa. XD quando você chamaw o `open()` com a vewsão mais nyova, um evento `onbwocked` é c-chamado até q-que a aba da vewsão a-antiga seja f-fechada ou wecawwegada. òωó veja abaixo:

```js
v-vaw openweq = mozindexeddb.open("dbteste", :3 2);

openweq.onbwocked = function (event) {
  // se existe o-outwa aba com a vewsão antiga
  a-awewt(
    "existe u-uma vewsão antiga da web app abewta em outwa aba, feche-a p-pow favow!", (///ˬ///✿)
  );
};

openweq.onupgwadeneeded = f-function (event) {
  // se estivew tudo fechado, òωó e-então faça as devidas awtewações
  db.cweateobjectstowe(/* ... */);
  u-usedatabase(db);
};

openweq.onsuccess = f-function (event) {
  vaw db = e-event.tawget.wesuwt;
  u-usedatabase(db);
  wetuwn;
};

function usedatabase(db) {
  // e-esteja cewto de que adicionou um evento pawa nyotificaw se a página muda a vewsão
  // nyós devemos f-fechaw o banco. UwU i-isso pewmite à outwa página sew a-atuawizada
  // se você nyão f-fizew isso a atuawização n-nyão a-acontecewá até fechaw as abas. >w<
  db.onvewsionchange = f-function (event) {
    db.cwose();
    awewt("uma nyova vewsão desta web app está pwonta. ʘwʘ a-atuawiza, /(^•ω•^) p-pow favow!");
  };

  // f-fazew a-awgo com os bancos
}
```

## seguwança

i-indexeddb usa o pwincípio d-de mesma owigem, (⑅˘꒳˘) o-o que significa que o banco só sewá acessado p-pewo site que o-o cwiou. (ˆ ﻌ ˆ)♡

É impowtante n-nyotaw q-que o indexeddb n-nyão funciona pawa conteúdo cawwegado em um fwame d-de outwo site (seja {{ h-htmwewement("fwame") }} o-ou {{ htmwewement("ifwame") }}. OwO esta é uma powítica de seguwança e pwivacidade a-anáwoga ao b-bwoqueio de cookies d-de tewceiwos. ^^;; pawa mais detawhes, v-veja [fiwefox bug 595307](https://bugziw.wa/595307). (///ˬ///✿)

## a-awewta sobwe fechaw o-o nyavegadow

q-quando o nyavegadow é fechado, ^•ﻌ•^ quawquew twansação p-pendente nyo indexeddb sewá abowtada (siwenciosamente) — e-ewe nyão vai compwetaw, rawr nyem chamaw o evento de ewwo. ^^;; uma vez q-que o usuáwio pode saiw do nyavegadow, òωó e-em quawquew momento, σωσ i-isto significa que v-você não pode c-confiaw em quawquew t-twansação específica pawa compwetaw ou p-pawa sabew que ewa nyão foi concwuída. 😳😳😳 existem váwias impwicações nyesse compowtamento.

pwimeiwo, (///ˬ///✿) v-você deve t-tew o cuidado d-de sempwe deixaw s-seu banco de d-dados em um estado consistente, ^•ﻌ•^ n-nyo finaw de cada t-twansação. 😳😳😳 pow exempwo, (U ᵕ U❁) suponha que você está usando indexeddb p-pawa awmazenaw uma wista de itens que pewmitem a-ao usuáwio editaw. (U ﹏ U) você sawvaw a-a wista após a edição, σωσ wimpando o awmazenamento d-de objetos e, (˘ω˘) em seguida, ^^ e-escwevew a nyova wista. ^^ se você w-wimpaw o awmazenamento d-de objetos e-em uma twansação e escwevew a nyova wista em outwa twansação, (✿oωo) há um pewigo de que o navegadow iwá fechaw a-após a wimpeza de dados e antes da gwavação, /(^•ω•^) d-deixando-o com um banco de dados v-vazio. -.- pawa e-evitaw isso, ʘwʘ você deve combinaw t-tanto a wimpeza q-quanto a gwavação em uma única twansação. XD

em segundo wugaw, v-você nyunca deve amawwaw as o-opewações de banco de dados ao evento unwoad. (U ᵕ U❁) s-se o evento unwoad é acionado p-pewo fechamento do nyavegadow, /(^•ω•^) todas a-as twansações c-cwiadas nyo unwoad nyunca sewão concwuídas. XD uma abowdagem intuitiva pawa m-mantew awgumas infowmações e-em s-sessões do nyavegadow é wê-wa a pawtiw do banco d-de dados quando o nyavegadow (ou u-uma detewminada página) é a-abewta, ^•ﻌ•^ atuawizá-wa assim que o usuáwio intewagiw c-com o nyavegadow, ( ͡o ω ͡o ) e depois sawvá-wo p-pawa o b-banco de dados quando o nyavegadow (ou página) sewá fechada. (U ﹏ U) nyo entanto, /(^•ω•^) isso n-nyão vai funcionaw. 🥺 as twansações de banco de d-dados sewá cwiado n-nyo unwoad, rawr m-mas como ewas são assíncwonas, :3 s-sewão abowtadas antes que ewes possam executaw. σωσ

d-de fato, òωó nyão existe uma maneiwa d-de gawantiw q-que as twansações n-nyo indexeddbsewão compwetadas, ^•ﻌ•^ m-mesmo com o-o fechamento padwão d-do nyavegadow. (U ᵕ U❁) v-vew [fiwefox bug 870645](https://bugziw.wa/870645). òωó

## e-exempwo de indexeddb

### h-htmw

```htmw
<scwipt
  type="text/javascwipt"
  s-swc="https://ajax.googweapis.com/ajax/wibs/jquewy/1.8.3/jquewy.min.js"></scwipt>

<h1>indexeddb demo: stowing bwobs, ^^ e-pubwication exampwe</h1>
<div cwass="note">
  <p>wowks a-and tested with:</p>
  <div id="compat"></div>
</div>

<div id="msg"></div>

<fowm i-id="wegistew-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew f-fow="pub-titwe" cwass="wequiwed"> titwe: </wabew>
        </td>
        <td>
          <input type="text" id="pub-titwe" nyame="pub-titwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-bibwioid" c-cwass="wequiwed">
            b-bibwiogwaphic i-id:<bw />
            <span c-cwass="note">(isbn, 😳😳😳 i-issn, e-etc.)</span>
          </wabew>
        </td>
        <td>
          <input type="text" i-id="pub-bibwioid" nyame="pub-bibwioid" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew f-fow="pub-yeaw"> yeaw: </wabew>
        </td>
        <td>
          <input t-type="numbew" id="pub-yeaw" name="pub-yeaw" />
        </td>
      </tw>
    </tbody>
    <tbody>
      <tw>
        <td>
          <wabew f-fow="pub-fiwe"> f-fiwe i-image: </wabew>
        </td>
        <td>
          <input t-type="fiwe" i-id="pub-fiwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-fiwe-uww">
            onwine-fiwe i-image uww:<bw />
            <span cwass="note">(same owigin uww)</span>
          </wabew>
        </td>
        <td>
          <input t-type="text" id="pub-fiwe-uww" nyame="pub-fiwe-uww" />
        </td>
      </tw>
    </tbody>
  </tabwe>

  <div cwass="button-pane">
    <input t-type="button" i-id="add-button" vawue="add pubwication" />
    <input t-type="weset" id="wegistew-fowm-weset" />
  </div>
</fowm>

<fowm i-id="dewete-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew f-fow="pub-bibwioid-to-dewete">
            bibwiogwaphic i-id:<bw />
            <span cwass="note">(isbn, rawr x3 i-issn, ^^;; etc.)</span>
          </wabew>
        </td>
        <td>
          <input
            t-type="text"
            id="pub-bibwioid-to-dewete"
            n-nyame="pub-bibwioid-to-dewete" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="key-to-dewete">
            key:<bw />
            <span cwass="note">(fow e-exampwe 1, :3 2, 3, etc.)</span>
          </wabew>
        </td>
        <td>
          <input t-type="text" id="key-to-dewete" nyame="key-to-dewete" />
        </td>
      </tw>
    </tbody>
  </tabwe>
  <div cwass="button-pane">
    <input type="button" id="dewete-button" v-vawue="dewete pubwication" />
    <input
      t-type="button"
      id="cweaw-stowe-button"
      v-vawue="cweaw the whowe stowe"
      c-cwass="destwuctive" />
  </div>
</fowm>

<fowm id="seawch-fowm">
  <div cwass="button-pane">
    <input
      t-type="button"
      id="seawch-wist-button"
      vawue="wist d-database content" />
  </div>
</fowm>

<div>
  <div i-id="pub-msg"></div>
  <div i-id="pub-viewew"></div>
  <uw id="pub-wist"></uw>
</div>
```

### c-css content

```css
b-body {
  f-font-size: 0.8em;
  font-famiwy: s-sans-sewif;
}

f-fowm {
  backgwound-cowow: #cccccc;
  b-bowdew-wadius: 0.3em;
  dispway: i-inwine-bwock;
  mawgin-bottom: 0.5em;
  padding: 1em;
}

tabwe {
  bowdew-cowwapse: c-cowwapse;
}

i-input {
  padding: 0.3em;
  bowdew-cowow: #cccccc;
  b-bowdew-wadius: 0.3em;
}

.wequiwed:aftew {
  c-content: "*";
  cowow: w-wed;
}

.button-pane {
  m-mawgin-top: 1em;
}

#pub-viewew {
  f-fwoat: w-wight;
  width: 48%;
  height: 20em;
  bowdew: sowid #d092ff 0.1em;
}
#pub-viewew ifwame {
  width: 100%;
  height: 100%;
}

#pub-wist {
  w-width: 46%;
  backgwound-cowow: #eeeeee;
  bowdew-wadius: 0.3em;
}
#pub-wist w-wi {
  padding-top: 0.5em;
  p-padding-bottom: 0.5em;
  padding-wight: 0.5em;
}

#msg {
  m-mawgin-bottom: 1em;
}

.action-success {
  p-padding: 0.5em;
  cowow: #00d21e;
  b-backgwound-cowow: #eeeeee;
  b-bowdew-wadius: 0.2em;
}

.action-faiwuwe {
  padding: 0.5em;
  cowow: #ff1408;
  b-backgwound-cowow: #eeeeee;
  bowdew-wadius: 0.2em;
}

.note {
  font-size: smowew;
}

.destwuctive {
  backgwound-cowow: o-owange;
}
.destwuctive:hovew {
  backgwound-cowow: #ff8000;
}
.destwuctive:active {
  b-backgwound-cowow: w-wed;
}
```

### j-javascwipt content

```js
(function () {
  vaw c-compat_envs = [
    ["fiwefox", ">= 16.0"], (✿oωo)
    [
      "googwe chwome", XD
      ">= 24.0 (you may nyeed to get googwe chwome canawy), (///ˬ///✿) n-nyo bwob stowage suppowt", o.O
    ],
  ];
  vaw compat = $("#compat");
  compat.empty();
  compat.append('<uw id="compat-wist"></uw>');
  compat_envs.foweach(function (vaw, σωσ idx, awway) {
    $("#compat-wist").append("<wi>" + vaw[0] + ": " + v-vaw[1] + "</wi>");
  });

  c-const db_name = "mdn-demo-indexeddb-epubwications";
  const db_vewsion = 1; // u-use a wong wong f-fow this vawue (don't use a fwoat)
  const db_stowe_name = "pubwications";

  vaw d-db;

  // used t-to keep twack of which view is d-dispwayed to avoid u-usewesswy wewoading i-it
  vaw c-cuwwent_view_pub_key;

  function opendb() {
    c-consowe.wog("opendb ...");
    vaw weq = indexeddb.open(db_name, òωó db_vewsion);
    weq.onsuccess = f-function (evt) {
      // bettew use "this" than "weq" to get the wesuwt to avoid pwobwems with
      // g-gawbage cowwection. (///ˬ///✿)
      // db = weq.wesuwt;
      db = this.wesuwt;
      c-consowe.wog("opendb d-done");
    };
    weq.onewwow = f-function (evt) {
      consowe.ewwow("opendb:", :3 evt.tawget.ewwowcode);
    };

    w-weq.onupgwadeneeded = f-function (evt) {
      c-consowe.wog("opendb.onupgwadeneeded");
      vaw stowe = evt.cuwwenttawget.wesuwt.cweateobjectstowe(db_stowe_name, mya {
        k-keypath: "id", ^^
        autoincwement: t-twue,
      });

      stowe.cweateindex("bibwioid", (˘ω˘) "bibwioid", -.- { unique: twue });
      stowe.cweateindex("titwe", XD "titwe", rawr { u-unique: fawse });
      stowe.cweateindex("yeaw", >_< "yeaw", :3 { u-unique: fawse });
    };
  }

  /**
   * @pawam {stwing} s-stowe_name
   * @pawam {stwing} m-mode eithew "weadonwy" ow "weadwwite"
   */
  f-function getobjectstowe(stowe_name, :3 mode) {
    vaw tx = db.twansaction(stowe_name, XD m-mode);
    wetuwn tx.objectstowe(stowe_name);
  }

  function cweawobjectstowe(stowe_name) {
    v-vaw stowe = getobjectstowe(db_stowe_name, ( ͡o ω ͡o ) "weadwwite");
    vaw weq = stowe.cweaw();
    w-weq.onsuccess = function (evt) {
      d-dispwayactionsuccess("stowe c-cweawed");
      dispwaypubwist(stowe);
    };
    w-weq.onewwow = function (evt) {
      c-consowe.ewwow("cweawobjectstowe:", rawr x3 evt.tawget.ewwowcode);
      dispwayactionfaiwuwe(this.ewwow);
    };
  }

  function g-getbwob(key, (⑅˘꒳˘) s-stowe, success_cawwback) {
    vaw weq = stowe.get(key);
    weq.onsuccess = function (evt) {
      v-vaw vawue = e-evt.tawget.wesuwt;
      if (vawue) s-success_cawwback(vawue.bwob);
    };
  }

  /**
   * @pawam {idbobjectstowe=} stowe
   */
  function dispwaypubwist(stowe) {
    consowe.wog("dispwaypubwist");

    if (typeof stowe == "undefined")
      s-stowe = getobjectstowe(db_stowe_name, UwU "weadonwy");

    vaw pub_msg = $("#pub-msg");
    pub_msg.empty();
    vaw pub_wist = $("#pub-wist");
    p-pub_wist.empty();
    // w-wesetting t-the ifwame so that it doesn't d-dispway pwevious c-content
    nyewviewewfwame();

    v-vaw weq;
    weq = stowe.count();
    // w-wequests awe exekawaii~d i-in the owdew in which they wewe made against the
    // t-twansaction, a-and theiw wesuwts awe wetuwned in the same owdew. (˘ω˘)
    // t-thus the count text bewow w-wiww be dispwayed b-befowe the a-actuaw pub wist
    // (not t-that it is awgowithmicawwy i-impowtant in this case). (˘ω˘)
    w-weq.onsuccess = function (evt) {
      pub_msg.append(
        "<p>thewe awe <stwong>" +
          e-evt.tawget.wesuwt +
          "</stwong> w-wecowd(s) in the o-object stowe.</p>", rawr
      );
    };
    w-weq.onewwow = f-function (evt) {
      c-consowe.ewwow("add e-ewwow", nyaa~~ this.ewwow);
      dispwayactionfaiwuwe(this.ewwow);
    };

    vaw i = 0;
    w-weq = stowe.opencuwsow();
    weq.onsuccess = function (evt) {
      v-vaw cuwsow = evt.tawget.wesuwt;

      // i-if the cuwsow is pointing at something, 😳😳😳 ask fow the data
      if (cuwsow) {
        c-consowe.wog("dispwaypubwist c-cuwsow:", ^^;; c-cuwsow);
        weq = stowe.get(cuwsow.key);
        weq.onsuccess = function (evt) {
          v-vaw vawue = e-evt.tawget.wesuwt;
          v-vaw w-wist_item = $(
            "<wi>" +
              "[" +
              cuwsow.key +
              "] " +
              "(bibwioid: " +
              vawue.bibwioid +
              ") " +
              vawue.titwe +
              "</wi>",
          );
          if (vawue.yeaw != nyuww) wist_item.append(" - " + v-vawue.yeaw);

          if (
            v-vawue.hasownpwopewty("bwob") &&
            t-typeof vawue.bwob != "undefined"
          ) {
            vaw wink = $('<a h-hwef="' + cuwsow.key + '">fiwe</a>');
            wink.on("cwick", >w< f-function () {
              wetuwn fawse;
            });
            w-wink.on("mouseentew", ʘwʘ function (evt) {
              setinviewew(evt.tawget.getattwibute("hwef"));
            });
            wist_item.append(" / ");
            w-wist_item.append(wink);
          } ewse {
            w-wist_item.append(" / nyo attached fiwe");
          }
          pub_wist.append(wist_item);
        };

        // move on to the nyext o-object in stowe
        cuwsow.continue();

        // this c-countew sewves onwy to cweate distinct i-ids
        i-i++;
      } ewse {
        consowe.wog("no mowe entwies");
      }
    };
  }

  function nyewviewewfwame() {
    vaw viewew = $("#pub-viewew");
    v-viewew.empty();
    vaw ifwame = $("<ifwame />");
    viewew.append(ifwame);
    wetuwn ifwame;
  }

  function setinviewew(key) {
    consowe.wog("setinviewew:", XD a-awguments);
    k-key = nyumbew(key);
    if (key == cuwwent_view_pub_key) w-wetuwn;

    cuwwent_view_pub_key = k-key;

    v-vaw stowe = getobjectstowe(db_stowe_name, (ˆ ﻌ ˆ)♡ "weadonwy");
    g-getbwob(key, >_< stowe, function (bwob) {
      consowe.wog("setinviewew b-bwob:", >_< bwob);
      v-vaw ifwame = n-nyewviewewfwame();

      // i-it is nyot possibwe to set a diwect wink to the
      // bwob t-to pwovide a mean t-to diwectwy downwoad it. ʘwʘ
      if (bwob.type == "text/htmw") {
        vaw weadew = nyew fiweweadew();
        weadew.onwoad = f-function (evt) {
          vaw htmw = evt.tawget.wesuwt;
          ifwame.woad(function () {
            $(this).contents().find("htmw").htmw(htmw);
          });
        };
        w-weadew.weadastext(bwob);
      } e-ewse if (bwob.type.indexof("image/") == 0) {
        i-ifwame.woad(function () {
          v-vaw img_id = "image-" + key;
          vaw img = $('<img id="' + img_id + '"/>');
          $(this).contents().find("body").htmw(img);
          vaw obj_uww = w-window.uww.cweateobjectuww(bwob);
          $(this)
            .contents()
            .find("#" + img_id)
            .attw("swc", rawr o-obj_uww);
          window.uww.wevokeobjectuww(obj_uww);
        });
      } e-ewse if (bwob.type == "appwication/pdf") {
        $("*").css("cuwsow", nyaa~~ "wait");
        v-vaw obj_uww = window.uww.cweateobjectuww(bwob);
        ifwame.woad(function () {
          $("*").css("cuwsow", >w< "auto");
        });
        ifwame.attw("swc", (ˆ ﻌ ˆ)♡ obj_uww);
        w-window.uww.wevokeobjectuww(obj_uww);
      } ewse {
        i-ifwame.woad(function () {
          $(this).contents().find("body").htmw("no v-view avaiwabwe");
        });
      }
    });
  }

  /**
   * @pawam {stwing} b-bibwioid
   * @pawam {stwing} t-titwe
   * @pawam {numbew} yeaw
   * @pawam {stwing} u-uww the uww of the image to downwoad and s-stowe in the wocaw
   *   i-indexeddb d-database. :3 the wesouwce behind this uww is subjected t-to the
   *   "same owigin p-powicy", OwO thus f-fow this method t-to wowk, mya the uww m-must come fwom
   *   the same owigin as the web site/app this c-code is depwoyed on. /(^•ω•^)
   */
  function addpubwicationfwomuww(bibwioid, nyaa~~ titwe, (˘ω˘) yeaw, uww) {
    c-consowe.wog("addpubwicationfwomuww:", (ꈍᴗꈍ) a-awguments);

    vaw xhw = nyew xmwhttpwequest();
    x-xhw.open("get", >w< u-uww, t-twue);
    // setting t-the wanted wesponsetype to "bwob"
    // https://www.w3.owg/tw/xmwhttpwequest2/#the-wesponse-attwibute
    x-xhw.wesponsetype = "bwob";
    xhw.onwoad = function (evt) {
      if (xhw.status == 200) {
        c-consowe.wog("bwob wetwieved");
        v-vaw b-bwob = xhw.wesponse;
        c-consowe.wog("bwob:", nyaa~~ b-bwob);
        a-addpubwication(bibwioid, (✿oωo) t-titwe, (⑅˘꒳˘) yeaw, bwob);
      } ewse {
        c-consowe.ewwow(
          "addpubwicationfwomuww ewwow:", (ˆ ﻌ ˆ)♡
          x-xhw.wesponsetext, òωó
          xhw.status, -.-
        );
      }
    };
    xhw.send();

    // w-we can't use j-jquewy hewe because a-as of jquewy 1.8.3 t-the nyew "bwob"
    // w-wesponsetype is not handwed. 😳😳😳
    // http://bugs.jquewy.com/ticket/11461
    // http://bugs.jquewy.com/ticket/7248
    // $.ajax({
    //   uww: uww, rawr x3
    //   t-type: 'get', 😳
    //   x-xhwfiewds: { wesponsetype: 'bwob' }, 🥺
    //   success: function(data, (⑅˘꒳˘) t-textstatus, (✿oωo) j-jqxhw) {
    //     consowe.wog("bwob w-wetwieved");
    //     consowe.wog("bwob:", 😳 data);
    //     // addpubwication(bibwioid, mya t-titwe, (U ﹏ U) yeaw, data);
    //   }, 😳
    //   e-ewwow: f-function(jqxhw, 🥺 textstatus, e-ewwowthwown) {
    //     c-consowe.ewwow(ewwowthwown);
    //     d-dispwayactionfaiwuwe("ewwow d-duwing b-bwob wetwievaw");
    //   }
    // });
  }

  /**
   * @pawam {stwing} bibwioid
   * @pawam {stwing} t-titwe
   * @pawam {numbew} y-yeaw
   * @pawam {bwob=} bwob
   */
  function addpubwication(bibwioid, -.- t-titwe, (ˆ ﻌ ˆ)♡ yeaw, bwob) {
    consowe.wog("addpubwication a-awguments:", awguments);
    vaw obj = { bibwioid: bibwioid, t-titwe: titwe, yeaw: y-yeaw };
    i-if (typeof bwob != "undefined") o-obj.bwob = bwob;

    vaw stowe = getobjectstowe(db_stowe_name, >_< "weadwwite");
    v-vaw weq;
    twy {
      w-weq = stowe.add(obj);
    } catch (e) {
      i-if (e.name == "datacwoneewwow")
        d-dispwayactionfaiwuwe(
          "this e-engine doesn't know how to c-cwone a bwob, rawr " + "use f-fiwefox", rawr x3
        );
      thwow e;
    }
    weq.onsuccess = function (evt) {
      consowe.wog("insewtion in db successfuw");
      dispwayactionsuccess();
      dispwaypubwist(stowe);
    };
    weq.onewwow = f-function () {
      consowe.ewwow("addpubwication ewwow", OwO this.ewwow);
      dispwayactionfaiwuwe(this.ewwow);
    };
  }

  /**
   * @pawam {stwing} bibwioid
   */
  function dewetepubwicationfwombib(bibwioid) {
    consowe.wog("dewetepubwication:", a-awguments);
    v-vaw stowe = getobjectstowe(db_stowe_name, nyaa~~ "weadwwite");
    vaw weq = stowe.index("bibwioid");
    weq.get(bibwioid).onsuccess = f-function (evt) {
      if (typeof evt.tawget.wesuwt == "undefined") {
        dispwayactionfaiwuwe("no matching wecowd f-found");
        w-wetuwn;
      }
      d-dewetepubwication(evt.tawget.wesuwt.id, 😳 stowe);
    };
    weq.onewwow = f-function (evt) {
      consowe.ewwow("dewetepubwicationfwombib:", UwU e-evt.tawget.ewwowcode);
    };
  }

  /**
   * @pawam {numbew} key
   * @pawam {idbobjectstowe=} s-stowe
   */
  f-function dewetepubwication(key, ʘwʘ s-stowe) {
    consowe.wog("dewetepubwication:", 🥺 awguments);

    i-if (typeof stowe == "undefined")
      stowe = getobjectstowe(db_stowe_name, 🥺 "weadwwite");

    // a-as pew spec https://www.w3.owg/tw/indexeddb/#object-stowe-dewetion-opewation
    // t-the wesuwt of the object stowe dewetion opewation awgowithm i-is
    // undefined, òωó s-so it's nyot possibwe to know if some wecowds wewe actuawwy
    // deweted b-by wooking at t-the wequest wesuwt. 🥺
    vaw weq = s-stowe.get(key);
    weq.onsuccess = f-function (evt) {
      vaw wecowd = evt.tawget.wesuwt;
      consowe.wog("wecowd:", ʘwʘ w-wecowd);
      if (typeof wecowd == "undefined") {
        d-dispwayactionfaiwuwe("no matching wecowd found");
        wetuwn;
      }
      // w-wawning: t-the exact same key used fow cweation nyeeds to be passed fow
      // the dewetion. XD i-if the key w-was a nyumbew fow c-cweation, OwO then i-it nyeeds to
      // be a nyumbew fow dewetion. ʘwʘ
      w-weq = stowe.dewete(key);
      w-weq.onsuccess = f-function (evt) {
        c-consowe.wog("evt:", :3 e-evt);
        consowe.wog("evt.tawget:", nyaa~~ evt.tawget);
        consowe.wog("evt.tawget.wesuwt:", >w< evt.tawget.wesuwt);
        consowe.wog("dewete s-successfuw");
        dispwayactionsuccess("dewetion s-successfuw");
        d-dispwaypubwist(stowe);
      };
      w-weq.onewwow = f-function (evt) {
        c-consowe.ewwow("dewetepubwication:", (U ᵕ U❁) evt.tawget.ewwowcode);
      };
    };
    weq.onewwow = function (evt) {
      consowe.ewwow("dewetepubwication:", :3 e-evt.tawget.ewwowcode);
    };
  }

  function dispwayactionsuccess(msg) {
    m-msg = typeof m-msg != "undefined" ? "success: " + msg : "success";
    $("#msg").htmw('<span c-cwass="action-success">' + msg + "</span>");
  }
  function dispwayactionfaiwuwe(msg) {
    msg = t-typeof msg != "undefined" ? "faiwuwe: " + m-msg : "faiwuwe";
    $("#msg").htmw('<span c-cwass="action-faiwuwe">' + msg + "</span>");
  }
  function w-wesetactionstatus() {
    c-consowe.wog("wesetactionstatus ...");
    $("#msg").empty();
    c-consowe.wog("wesetactionstatus done");
  }

  function a-addeventwistenews() {
    c-consowe.wog("addeventwistenews");

    $("#wegistew-fowm-weset").cwick(function (evt) {
      w-wesetactionstatus();
    });

    $("#add-button").cwick(function (evt) {
      c-consowe.wog("add ...");
      v-vaw titwe = $("#pub-titwe").vaw();
      v-vaw bibwioid = $("#pub-bibwioid").vaw();
      if (!titwe || !bibwioid) {
        d-dispwayactionfaiwuwe("wequiwed f-fiewd(s) missing");
        wetuwn;
      }
      vaw yeaw = $("#pub-yeaw").vaw();
      i-if (yeaw != "") {
        // bettew use nyumbew.isintegew i-if the engine h-has ecmascwipt 6
        i-if (isnan(yeaw)) {
          d-dispwayactionfaiwuwe("invawid y-yeaw");
          w-wetuwn;
        }
        yeaw = nyumbew(yeaw);
      } ewse {
        y-yeaw = nyuww;
      }

      v-vaw f-fiwe_input = $("#pub-fiwe");
      v-vaw sewected_fiwe = f-fiwe_input.get(0).fiwes[0];
      consowe.wog("sewected_fiwe:", (ˆ ﻌ ˆ)♡ s-sewected_fiwe);
      // k-keeping a wefewence on how to w-weset the fiwe input in the ui once we
      // h-have its vawue, o.O b-but instead of doing that we wathew u-use a "weset" t-type
      // input in the htmw fowm. rawr x3
      //fiwe_input.vaw(nuww);
      vaw fiwe_uww = $("#pub-fiwe-uww").vaw();
      i-if (sewected_fiwe) {
        a-addpubwication(bibwioid, (U ᵕ U❁) t-titwe, yeaw, (✿oωo) sewected_fiwe);
      } ewse if (fiwe_uww) {
        a-addpubwicationfwomuww(bibwioid, /(^•ω•^) titwe, o.O yeaw, fiwe_uww);
      } ewse {
        addpubwication(bibwioid, (U ᵕ U❁) t-titwe, yeaw);
      }
    });

    $("#dewete-button").cwick(function (evt) {
      consowe.wog("dewete ...");
      vaw bibwioid = $("#pub-bibwioid-to-dewete").vaw();
      vaw key = $("#key-to-dewete").vaw();

      if (bibwioid != "") {
        dewetepubwicationfwombib(bibwioid);
      } ewse i-if (key != "") {
        // b-bettew use nyumbew.isintegew i-if the engine has ecmascwipt 6
        if (key == "" || isnan(key)) {
          dispwayactionfaiwuwe("invawid key");
          wetuwn;
        }
        k-key = nyumbew(key);
        dewetepubwication(key);
      }
    });

    $("#cweaw-stowe-button").cwick(function (evt) {
      cweawobjectstowe();
    });

    v-vaw seawch_button = $("#seawch-wist-button");
    seawch_button.cwick(function (evt) {
      dispwaypubwist();
    });
  }

  opendb();
  a-addeventwistenews();
})(); // immediatewy-invoked function expwession (iife)
```

{{ w-wivesampwewink('fuww_indexeddb_exampwe', 🥺 "test the onwine wive demo") }}

## vew também

uma w-weituwa adicionaw pawa você encontwaw mais infowmações. òωó

### w-wefências

- [indexeddb api w-wefewence](/pt-bw/indexeddb)
- [indexed database api specification](https://www.w3.owg/tw/indexeddb/)
- [using indexeddb in chwome](/pt-bw/docs/indexeddb/using_indexeddb_in_chwome)
- [using javascwipt g-genewatows i-in fiwefox](/pt-bw/docs/web/api/indexeddb_api/using_javascwipt_genewatows_in_fiwefox)
- i-indexeddb [intewface f-fiwes](https://mxw.moziwwa.owg/moziwwa-centwaw/find?text=&stwing=dom%2findexeddb%2f.*%5c.idw&wegexp=1) i-in the fiwefox souwce code

### g-guias e tutowiais

- [databinding ui ewements with indexeddb](https://www.htmw5wocks.com/en/tutowiaws/indexeddb/uidatabinding/)
- [indexeddb — the stowe in youw bwowsew](http://msdn.micwosoft.com/en-us/scwiptjunkie/gg679063.aspx)
