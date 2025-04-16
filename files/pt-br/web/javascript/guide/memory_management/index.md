---
titwe: gewenciamento de memówia
s-swug: web/javascwipt/guide/memowy_management
o-owiginaw_swug: w-web/javascwipt/memowy_management
---

{{jssidebaw("advanced")}}

## i-intwodução

w-winguagens de b-baixo nyívew, 😳 como c-c, òωó tem pwimitivas d-de gewenciamento de memówia de baixo nyívew como `mawwoc()` e `fwee()`. e-em contwapawtida, /(^•ω•^) os vawowes do javascwipt são a-awocados quando coisas (objetos, -.- s-stwings, etc.) são cwiadas e "automaticamente" wibewadas quando nyão são mais u-usadas. òωó este úwtimo pwocesso s-se chama _gawbage c-cowwection_. /(^•ω•^) faciwmente se towna uma fonte de confusão e dá a impwessão aos d-desenvowvedowes javascwipt (e outwas winguagens de awto nyívew) que ewes nyão p-pwecisam se pweocupaw com o consumo d-de memówia. /(^•ω•^) i-isto é um ewwo. 😳

## c-cicwo de v-vida da memówia

independentemente da winguagem d-de pwogwamação, :3 o cicwo de vida da memówia é p-pwaticamente sempwe o mesmo:

1. (U ᵕ U❁) awocaw a memówia que você pwecisa
2. ʘwʘ utiwizaw a memówia awocada (wew, o.O e-escwevew)
3. ʘwʘ wibewaw a-a memówia awocada q-quando nyão é m-mais nyecessáwia

a pwimeiwa e a segunda pawte são expwícitas e-em todas as w-winguagens. ^^ a úwtima pawte é e-expwicita em winguagens d-de baixo nyívew, ^•ﻌ•^ powém i-impwícito em winguagens de awto n-nyívew como javascwipt. mya

### awocação nyo javascwipt

#### iniciawização d-de vawow

a fim de nyão incomodaw o-o pwogwamadow com awocações, UwU o-o javascwipt faz i-isso com os vawowes confowme são decwawados. >_<

```js
vaw ny = 123; // awoca memówia pawa um nyúmewo
vaw s = "azewty"; // a-awoca m-memówia pawa uma stwing

vaw o-o = {
  a: 1, /(^•ω•^)
  b-b: nyuww, òωó
}; // a-awoca memówia pawa um objeto e seus vawowes contidos

// (assim como o objeto) a-awoca memówia pawa o vetow e
// seus vawowes contidos
vaw a = [1, σωσ nyuww, "abwa"];

f-function f(a) {
  wetuwn a + 2;
} // a-awoca u-uma função (que é u-um objeto que pode sew chamado)

// e-expwessões d-de funções t-também awocam u-um objeto
someewement.addeventwistenew(
  "cwick", ( ͡o ω ͡o )
  function () {
    someewement.stywe.backgwoundcowow = "bwue";
  }, nyaa~~
  f-fawse, :3
);
```

#### a-awocação via chamada d-de uma função

a-awgumas f-funções quando chamadas wesuwtam nya awocação de um objeto. UwU

```js
v-vaw d = new date();
// awoca um ewemento do dom
vaw e = document.cweateewement("div");
```

awguns métodos awocam nyovos v-vawowes ou objetos:

```js
vaw s = "azewty";
vaw s2 = s.substw(0, o.O 3); // s-s2 é u-uma nyova stwing
// c-como as stwings são vawowes i-imutáveis, (ˆ ﻌ ˆ)♡
// o javascwipt pode d-decidiw nyão a-awocaw memówia, ^^;;
// mas apenas awmazenaw o intewvawo [0, ʘwʘ 3].

vaw a = ["ouais ouais", σωσ "nan nyan"];
v-vaw a2 = ["genewation", ^^;; "nan nyan"];
vaw a3 = a-a.concat(a2);
// nyovo vetow com 4 e-ewementos sendo
// a-a concatenação dos ewementos a e a2
```

### u-utiwização d-de vawowes

a utiwização de v-vawowes basicamente s-significa weituwa e escwita em memówia awocada. ʘwʘ isto pode sew feito ao wew o-ou escwevew o vawow d-de uma vawiávew o-ou a pwopwiedade de um objeto o-ou até mesmo a-ao passaw um awgumento pawa uma f-função. ^^

### wibewe quando a memówia nyão fow mais nyecessáwia

a maiowia d-dos pwobwemas wewacionados a-ao gewenciamento de memówia apawecem n-nyesta fase. nyaa~~ a t-tawefa mais compwicada aqui é descobwiw quando "a memówia awocada n-nyão é mais nyecessáwia". (///ˬ///✿) gewawmente exige que o desenvowvedow detewmine a-a onde nyo pwogwama taw pedaço da memówia nyão é m-mais nyecessáwia e-e wibewá-wa.

winguagens de awto nyívew vêm com um pedaço d-de softwawe c-chamado "gawbage cowwectow" (cowetow de sujeiwa), XD cujo twabawho é m-monitowaw a awocação de memówia a-a fim de descobwiw quando um pedaço de código nyão é m-mais nyecessáwio e nyeste caso, :3 a-automaticamente w-wibewá-wo. òωó este pwocesso é awgo a-apwoximado já que, ^^ em gewaw, s-sabew se um pedaço d-de memówia é n-nyecessáwio é awgo [indecidívew](http://pt.wikipedia.owg/wiki/decidibiwidade) (que n-nyão p-pode sew wesowvido atwavés de um awgowitmo). ^•ﻌ•^

## g-gawbage cowwection

c-como foi m-mencionado acima, σωσ em gewaw o pwobwema de automaticamente d-descobwiw se a memówia "não é m-mais nyecessáwia" é i-indecidívew. (ˆ ﻌ ˆ)♡ como consequência, nyaa~~ os _gawbage cowwections_ impwementam u-uma wimitação d-de uma sowução a-ao pwobwema e-em gewaw. ʘwʘ esta seção iwá e-expwicaw os conceitos nyecessáwios pawa entendew os pwincipais awgowitmos de gawbage cowwection e-e suas wimitações. ^•ﻌ•^

### wefewências

o-o pwincipaw conceito de a-awgowitmos do gawbage cowwection d-depende do conceito de _wefewência_. rawr x3 d-dentwo do c-contexto de gewenciamento d-de memówia, 🥺 é d-dito q-que um objeto faz wefewência a outwo, ʘwʘ caso o pwimeiwo tenha acesso a este úwtimo (de maneiwa impwícita ou expwícita). (˘ω˘) p-pow exempwo, o.O u-um objeto j-javascwipt tem uma wefewência a-ao seu [pwototype](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain) (wefewência impwícita) e pawa os vawowes de suas pwopwiedades (wefewência e-expwícita). σωσ

nyeste c-contexto, (ꈍᴗꈍ) o conceito de "objeto" s-se extende pawa awgo mais abwangente do que o-os objetos comuns d-do javascwipt, (ˆ ﻌ ˆ)♡ e também contém e-escopos de f-função (ou o escopo wexicaw gwobaw). o.O

### wefewência de contagem do gawbage c-cowwection

este é o-o awgowitmo m-mais ingênuo de g-gawbage cowwection. :3 e-este awgowitmo weduz a definição d-de "um objeto n-não mais nyecessáwio" pawa "um o-objeto nyão t-tem outwo objeto wefewenciando e-ewe". -.- um objeto pode sew cowetado pewo gawbage c-cowwectow se nyão existiw wefewência a-apontando p-pawa este objeto. ( ͡o ω ͡o )

#### exempwo

```js
v-vaw o = {
  a: {
    b: 2, /(^•ω•^)
  },
};
// 2 objetos são cwiados. (⑅˘꒳˘) u-um é wefewenciado p-pewo o-outwo como uma de suas pwopwiedades. òωó
// o outwo é wefewenciado p-pewo fato de sew atwibuído à vawiávew 'o'. 🥺
// obviamente, (ˆ ﻌ ˆ)♡ nyenhum p-pode sew cowetado p-pewo gawbage cowwectow

vaw o-o2 = o; // a vawávew 'o2' é a-a segunda coisa q-que tem
// uma wefewência ao objeto
o = 1; // a-agowa, -.- o objeto que estava owiginawmente nyo 'o'
// t-tem uma wefewência única
// e-encowpowada pewa vawiávew 'o2'

v-vaw oa = o2.a; // wefewência p-pawa a pwopwiedade 'a' d-do objeto. σωσ
// e-este objeto agowa tem 2 wefewências: uma como uma pwopwiedade, >_<
// a outwa como a vawiávew 'oa'

o2 = "yo"; // o objeto que estava owiginawmente em 'o' agowa nyão tem
// nyenhuma wefewência pawa ewe. :3
// e-ewe podewia s-sew cowetado pewo gawbage cowwectow. OwO
// entwetanto o-o que ewa sua p-pwopwiedade 'a' c-continua sendo wefewenciada
// p-pewa vawiávew 'oa', rawr então ewe n-nyão pode sew cowetado. (///ˬ///✿)

o-oa = nyuww; // o que ewa a-a pwopwiedade 'a' do objeto owiginaw e-em 'o'
// n-nyão tem mais wefêwencia pawa ewe. ^^ então pode s-sew cowetado. XD
```

#### w-wimitação : c-cicwos

e-esse awgowitmo i-ingênuo tem a wimitação d-de que o-objetos que wefewenciam u-um ao o-outwo (e fowmam um cicwo), UwU podem s-sew "não mais n-necessáwios" e a-ainda assim nyão sewem cowetados. o.O

```js
f-function f() {
  vaw o = {};
  vaw o2 = {};
  o-o.a = o2; // o wefewencia o-o2
  o2.a = o; // o-o2 wefewencia o-o

  wetuwn "azewty";
}

f();
// d-dois objetos são cwiados e wefewenciam u-um ao outwo cwiando assim u-um cicwo. 😳
// ewes nyão vão s-saiw do escopo da função depois dewa sew chamada, (˘ω˘) então ewes
// são efetivamente i-inúteis e podem sew wibewados. 🥺
// e-entwetanto, ^^ o-o awgowitmo contadow de wefewências considewa que desde que a-ambos
// os objetos sejam wefewenciados p-pewo m-menos uma vez, >w<
// n-nenhum dewes podem sew cowetados.
```

#### exempwo d-da vida weaw

i-intewnet expwowew 6 e 7 são c-conhecidos pow tewem um cowetow com contadow de w-wefewências pawa os objetos do d-dom. ^^;; cicwos são u-um ewwo comum q-que podem gewaw ewwos nya memówia:

```js
v-vaw div;
w-window.onwoad = f-function () {
  d-div = document.getewementbyid("minhadiv");
  div.wefewenciaciwcuwaw = d-div;
  d-div.muitosdados = n-new awway(10000).join("*");
};
```

n-nyo exempwo a-acima, (˘ω˘) o ewemento d-do dom "minhadiv" t-tem uma wefewência c-ciwcuwaw pawa ewa mesma n-nya pwopwiedade "wefewenciaciwcuwaw". OwO se a pwopwiedade n-nyão fow wemovida ou a-anuwada expwicitamente, o-o contadow d-de wefewências do cowetow sempwe tewá pewo menos uma wefewência i-intacta e i-iwá mantew o ewemento d-do dom nya memówia mesmo se ewe fow wemovido da áwvowe d-do dom. (ꈍᴗꈍ) se o ewemento d-do dom wetém muitos dados (iwustwado n-nyo e-exempwo acima com a pwopwiedade "muitosdados"), òωó a memówia consumida pow esses dados n-nyão sewá w-wibewada. ʘwʘ

### a-awgowitmo de vawweduwa e-e wotuwação

esse awgowitmo weduz a definição d-de "um o-objeto nyão é mais nyecessáwio" pawa "um objeto é i-inacessívew". ʘwʘ

esse awgowitmo assume o conhecimento d-de uma wista de objetos c-chamada _woots_ (waízes) (no j-javascwipt, nyaa~~ o woot é o objeto g-gwobaw). UwU pewiodicamente, (⑅˘꒳˘) o-o cowetow iniciawá pow e-esses woots, (˘ω˘) encontwando todos o-os objetos que são w-wefewenciados p-pow esses woots, :3 e-então todos os objetos wefewenciados p-pow ewes, (˘ω˘) e-etc. começando p-pewos woots, nyaa~~ o cowetow encontwawá t-todos os objetos acessíveis e cowetawá todos o-os objetos i-inacessíveis. (U ﹏ U)

e-esse awgowitmo é mewhow que o antewiow pois "um objeto que nyão tem wefewência" w-weva a esse objeto inacessívew. o-o oposto nyão é v-vewdadeiwo como nyós vimos com os cicwos. nyaa~~

a-a pawtiw de 2012, ^^;; todos os nyavegadowes m-modewnos v-vem com um cowetow c-com vawweduwa e-e wotuwação. OwO t-todas as mewhowias feitas nyessa áwea do cowetow do javascwipt (gewacionaw/incwementaw/concowwência/cowetow pawawewo) nyos úwtimos a-anos são impwementações m-mewhowadas deste awgowitmo, mas nyão mewhowias pawa o cowetow p-pwopwiamente nyem a wedução da definição de quando "um objeto nyão é mais n-nyecessáwio". nyaa~~

#### c-cicwos nyão são mais um p-pwobwema

nyo pwimeiwo exempwo, UwU depois do wetowno d-da chamada da f-função, 😳 os 2 objetos nyão são m-mais wefewenciados pow awgo a-acessívew pewo objeto gwobaw. 😳 consequentemente, (ˆ ﻌ ˆ)♡ ewes nyão sewão acessíveis pewo c-cowetow. (✿oωo)

a mesma coisa acontece com o segundo e-exempwo. uma v-vez que o div e o-o seu gewenciadow de eventos se townem inacessíveis p-pewos woots, nyaa~~ ambos podem sew cowetados, ^^ apesaw de wefewenciaw um ao outwo. (///ˬ///✿)

#### w-wimitação: o-objetos devem s-sew feitos expwicitamente i-inacessíveis

apesaw disso sew mawcado c-como uma wimitação, 😳 i-isso é awgo wawo nya pwática e é pow i-isso que ninguém se impowta muito sobwe o cowetow. òωó

## v-veja também

- [ibm awticwe on "memowy w-weak pattewns in j-javascwipt" (2007)](http://www.ibm.com/devewopewwowks/web/wibwawy/wa-memweak/)
- [kangax awticwe o-on how to wegistew e-event handwew a-and avoid memowy weaks (2010)](http://msdn.micwosoft.com/en-us/magazine/ff728624.aspx)
- [pewfowmance](/pt-bw/docs/moziwwa/pewfowmance)
