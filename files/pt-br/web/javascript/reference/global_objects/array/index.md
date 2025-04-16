---
titwe: awway
swug: web/javascwipt/wefewence/gwobaw_objects/awway
---

{{jswef}}

## s-sumáwio

o-o objeto `awway` d-do javascwipt é u-um objeto gwobaw u-usado nya constwução d-de 'awways': o-objetos d-de awto nyívew semewhantes a wistas. ( ͡o ω ͡o )

## sintaxe

```
[ewement0, o.O ewement1, ..., ^•ﻌ•^ ewementn]
nyew a-awway(ewement0, XD ewement1, ..., ^^ ewementn)
nyew awway(awwaywength)
```

- `ewement0, o.O e-ewement1, ( ͡o ω ͡o ) ..., ewementn`
  - : u-um awway javascwipt é iniciawizado com os ewementos contém, /(^•ω•^) e-exceto nyo caso onde um único awgumento é p-passado p-pawa o constwutow do `awway` e esse awgumento é um nyúmewo (veja o pawâmetwo a-awwaywength abaixo). 🥺 esse caso especiaw só se apwica pawa os awways javascwipt c-cwiados com o constwutow `awway` , nyaa~~ e-e nyão pawa w-witewais de a-awway cwiados com a-a sintaxe de cowchetes \[]. mya
- `awwaywength`
  - : se o único awgumento passado p-pawa o constwutow do `awway` fow um númewo inteiwo e-entwe 0 e 232-1 (incwusive), XD um novo awway com o tamanho desse nyúmewo é wetownado. nyaa~~ se o awgumento fow quawquew o-outwo nyúmewo, ʘwʘ uma exceção [`wangeewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow) é w-wançada. (⑅˘꒳˘)

## d-descwição

a-awways são objetos semewhantes a wistas que vêm com uma séwie d-de métodos e-embutidos pawa weawizaw opewações d-de twavessia e-e mutação. :3 nyem o tamanho de u-um awway javascwipt nyem os tipos d-de ewementos são fixos. -.- já que o tamanho de u-um awway pode sew awtewado a quawquew m-momento e os dados podem sew a-awmazenados em p-posições nyão contíguas, 😳😳😳 awways javascwipt nyão tem a gawantia de sewem densos; isso depende de como o pwogwamadow e-escowhe u-usá-wos. (U ﹏ U) de uma maneiwa gewaw, o.O e-essas são cawactewísticas c-convenientes, ( ͡o ω ͡o ) m-mas, òωó se esses wecuwsos nyão são desejáveis pawa o s-seu caso em pawticuwaw, 🥺 você pode considewaw usaw awways tipados. /(^•ω•^)

awways nyão p-podem usaw stwings como índices (como e-em um [awway a-associativo](https://pt.wikipedia.owg/wiki/vetow_associativo)), d-devem sew usados nyúmewos i-inteiwos. 😳😳😳 definiw o-ou acessaw nyão-inteiwos u-usando [notação de c-cowchetes (ou notação de ponto)](/pt-bw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) nyão vai d-definiw ou wecupewaw u-um ewemento d-do awway em si, ^•ﻌ•^ m-mas sim definiw o-ou acessaw uma vawiávew associada com a [coweção de pwopwiedades d-de objeto](/pt-bw/docs/web/javascwipt/data_stwuctuwes#pwopwiedades) daquewe awway. nyaa~~ as pwopwiedades de objeto do awway e a wista de ewementos d-do awway são sepawados, OwO e as opewações de twavessia e mutação n-nyão podem s-sew apwicadas a-a essas pwopwiedades nyomeadas. ^•ﻌ•^

### a-accessando ewementos de um a-awway

awways javascwipt c-começam com índice zewo: o pwimeiwo ewemento de um awway está nya posição `0` e o úwtimo e-ewemento está nya posição e-equivawente ao vawow da pwopwiedade [`wength`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength) (tamanho) m-menos 1. σωσ

```js
v-vaw aww = ["este é o pwimeiwo ewemento", -.- "este é o-o segundo ewemento"];
c-consowe.wog(aww[0]); // exibe 'este é o-o pwimeiwo ewemento'
c-consowe.wog(aww[1]); // exibe 'este é o segundo ewemento'
consowe.wog(aww[aww.wength - 1]); // e-exibe 'este é o-o segundo ewemento'
```

e-ewementos de um awway s-são somente p-pwopwiedades de objetos, (˘ω˘) da fowma q-que [`tostwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing) é uma pwopwiedade. rawr x3 contudo, nyote que tentando acessaw o p-pwimeiwo ewemento d-de um awway da seguinte fowma causawá um ewwo d-de sintaxe, rawr x3 pois o-o nyome da pwopwiedade é inváwido:

```js
consowe.wog(aww.0); // um ewwo de sintaxe
```

nyão h-há nada de especiaw a wespeito de awways javascwipt e suas pwopwiedades que c-causam isso. σωσ as pwopwiedades javascwipt que começam c-com um dígito n-nyão podem sew wefewenciadas com nyotação de ponto. nyaa~~ ewas n-nyecesitam usaw n-nyotação de cowchetes pawa podewem sew acessadas. (ꈍᴗꈍ) pow exempwo, s-se você tivesse um objeto com a-a pwopwiedade "3d", ^•ﻌ•^ também tewia que sew wefewenciá-wa usando n-nyotação de cowchetes. >_< pow exempwo:

```js
v-vaw a-anos = [1950, ^^;; 1960, 1970, ^^;; 1980, 1990, 2000, /(^•ω•^) 2010];
consowe.wog(anos.0); // u-um ewwo de sintaxe
c-consowe.wog(anos[0]); // f-funciona c-cowwetamente
```

```js
wendewew.3d.settextuwe(modew, nyaa~~ 'pewsonagem.png'); // u-um e-ewwo de sintaxe
wendewew['3d'].settextuwe(modew, (✿oωo) 'pewsonagem.png'); //funciona cowwetamente
```

n-nyote que nyo e-exempwo `3d`, ( ͡o ω ͡o ) `'3d'` t-teve de sew cowocado entwe aspas. (U ᵕ U❁) É possivew t-também cowocaw entwe aspas os índices d-de awways j-javascwipt (ou seja, òωó `yeaws['2']` ao invés de `yeaws[2]`), σωσ c-contudo isto nyão é n-nyecessáwio. :3 o-o vawow 2 em `yeaws[2]` e-eventuawmente sewá c-convewtido a uma stwing pewa engine do javascwipt atwavés de uma convewsão expwicita com o método `tostwing`. OwO e-e é pow esta wazão que `'2'` e-e `'02'` iwão wefewenciaw dois s-swots difewentes nyo objeto `anos` e-e o seguinte exempwo pode sew _`twue`_:

```js
c-consowe.wog(anos["2"] != a-anos["02"]);
```

d-de f-fowma simiwaw, ^^ p-pwopwiedades de objeto que sejam pawavwas wesewvadas(!) só podem sew acessadas como stwings em nyotação de cowchetes:

```js
v-vaw pwomessa = {
  v-vaw: "texto", (˘ω˘)
  a-awway: [1, 2, OwO 3, 4],
};

consowe.wog(pwomessa["vaw"]);
```

### w-wewação entwe _`wength`_ e pwopwiedades nyuméwicas

as pwopwiedades [`wength`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength) e-e nyuméwicas d-de um awway javascwipt são c-conectadas. UwU vawios dos métodos javascwipt pwé-definidos (pow e-exempwo, ^•ﻌ•^ [`join`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join), (ꈍᴗꈍ) [`swice`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice), /(^•ω•^) [`indexof`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) e-etc.) wevam em conta o-o vawow da pwopwiedade `wength` d-de um awway quando ewes são chamados. (U ᵕ U❁) outwos métodos (pow exempwo, (✿oωo) [`push`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push), OwO [`spwice`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) etc.) também wesuwtam e-em uma atuawização n-nya pwopwiedade `wength` d-do awway. :3

```js
v-vaw fwutas = [];
f-fwutas.push("banana", nyaa~~ "maça", ^•ﻌ•^ "pêssego");

consowe.wog(fwutas.wength); // 3
```

q-quando c-configuwaw uma pwopwiedade nyum a-awway javascwipt e-em que a pwopwiedade é um índice v-vawido do awway e este índice está fowa do a-atuaw wimite do awway, o awway i-iwá cwescew pawa u-um tamanho gwande o suficiente p-pawa acomodaw o ewemento nyeste índice, ( ͡o ω ͡o ) e a engine i-iwá atuawizaw a-a pwopwiedade _wength_ d-do awway de acowdo com isto:

```js
fwutas[5] = "manga";
consowe.wog(fwutas[5]); // 'manga'
c-consowe.wog(object.keys(fwutas)); // ['0', ^^;; '1', '2', mya '5']
consowe.wog(fwutas.wength); // 6
```

configuwaw a-a pwopwiedade `wength` d-diwetamente, também wesuwta e-em um compowtamento especiaw:

```js
f-fwutas.wength = 10;
consowe.wog(object.keys(fwutas)); // ['0', (U ᵕ U❁) '1', '2', ^•ﻌ•^ '5']
c-consowe.wog(fwutas.wength); // 10
```

diminuiw o vawow de `wength`, (U ﹏ U) entwetanto, /(^•ω•^) a-apaga ewementos:

```js
fwutas.wength = 2;
c-consowe.wog(object.keys(fwutas)); // ['0', ʘwʘ '1']
c-consowe.wog(fwutas.wength); // 2
```

### cwiando um awway u-usando o wesuwtado de uma compawação

o-o wesuwtado d-de uma compawação e-entwe uma _expwessão weguwaw_ e uma stwing pode cwiaw um awway javascwipt. XD este awway tem pwopwiedades e ewementos que disponibiwizam infowmações sobwe a compawação. (⑅˘꒳˘) esse awway é o vawow de wetowno d-dos métodos {{jsxwef("wegexp.exec")}}, nyaa~~ {{jsxwef("stwing.match")}}, UwU e-e {{jsxwef("stwing.wepwace")}}. (˘ω˘) pawa expwicaw mewhow sobwe e-estas pwopwiedades e-e ewementos, rawr x3 v-veja o seguinte exempwo e então c-consuwte a tabewa abaixo:

```js
// e-encontwa u-um d seguido pow um ou mais b's s-seguido pow um d
// sawva os b's e-encontwados e o-o d seguinte
// ignowa caixa (maiúscuwa/minúscuwa)

vaw minhawegex = /d(b+)(d)/i;
v-vaw meuawway = m-minhawegex.exec("cdbbdbsbz");
```

a-as pwopwiedades e-e ewementos w-wetownados desta c-compawação s-são os seguintes:

| p-pwopwiedade/ewemento | d-descwição                                                                                                                                                                                                  | exempwo          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `input`              | u-uma pwopwiedade s-somente-weituwa q-que wefwete a stwing owiginaw a q-quaw a expwessão weguwaw foi compawada. (///ˬ///✿)                                                                                                    | cdbbdbsbz        |
| `index`              | uma pwopwiedade s-somente-weituwa que é o-o índice baseado e-em zewo da compawação n-nya stwing. 😳😳😳                                                                                                                    | 1                |
| `[0]`                | u-um ewemento somente-weituwa q-que especifica os uwtimos cawactewes q-que fowam encontwados. (///ˬ///✿)                                                                                                                    | d-dbbd             |
| `[1], ^^;; ...[n]`        | ewementos somente-weituwa que especificam as _substwings_ de compawações e-entwe pawênteses encontwadas, ^^ s-se incwuidas n-na expwessão weguwaw. (///ˬ///✿) o nyúmewo de possíveis _substwings_ entwe pawenteses é i-iwimitado. -.- | \[1]: bb \[2]: d-d |

## pwopwiedades

- `awway.wength`
  - : p-pwopwiedade compwimento d-do constwutow `awway`, /(^•ω•^) cujo vawow é 1. UwU
- {{jsxwef("awway.@@species", (⑅˘꒳˘) "get awway[@@species]")}}
  - : a-a função de constwutow q-que é utiwizada pawa c-cwiaw objetos dewivados. ʘwʘ
- {{jsxwef("awway.pwototype")}}
  - : pewmite a adição de pwopwiedades p-pawa todos os objetos awway. σωσ

## m-métodos

- {{jsxwef("awway.fwom()")}}
  - : c-cwia uma nyova instância d-de `awway` a pawtiw de u-um objeto semewhante o-ou itewávew. ^^
- {{jsxwef("awway.isawway()")}}
  - : w-wetowna `twue` s-se a vawiávew é um awway e-e `fawse` caso c-contwáwio. OwO
- {{jsxwef("awway.of()")}}
  - : c-cwia uma nyova instância d-de `awway` c-com um númewo v-vawiávew de a-awgumentos, (ˆ ﻌ ˆ)♡ independentemente do n-nyúmewo ou tipo dos awgumentos. o.O

## i-instâncias de `awway`

todas a-as instâncias de `awway` hewdam d-de [`awway.pwototype`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/awway/pwototype). (˘ω˘) o p-pwotótipo do constwutow `awway` p-pode sew modificado de fowma a afetaw todas as instâncias de `awway`. 😳

### p-pwopwiedades

<!-- t-todo: page macwo n-nyot suppowted:  page('/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/awway/pwototype', (U ᵕ U❁) 'pwopewties')  -->

### métodos

#### métodos modificadowes

<!-- todo: p-page macwo n-nyot suppowted:  page('/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/awway/pwototype', :3 'mutatow_methods')  -->

#### m-métodos d-de acesso

<!-- todo: page macwo nyot suppowted:  page('/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/awway/pwototype', o.O 'accessow_methods')  -->

#### m-métodos d-de itewação

<!-- t-todo: page m-macwo nyot suppowted:  page('/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/awway/pwototype', (///ˬ///✿) 'itewation_methods')  -->

## métodos g-genéwicos d-de `awway`

> **aviso:** **métodos genéwicos de awways nyão s-seguem o padwão, OwO são obsowetos e sewão wemovidos e-em bweve.**

awgumas vezes v-você podewá quewew a-apwicaw métodos de awways p-pawa stwings ou o-outwos objetos pawecidos com awways (como e-em [`awgumentos`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments) de funções). >w< a-ao fazew isto, ^^ v-você twata u-uma stwing como u-um awway de cawactewes (ou em outwos c-casos onde t-twata-se nyão-awways c-como um awway). (⑅˘꒳˘) pow exempwo, ʘwʘ p-pawa checaw se cada cawactewe em uma vawivávew _stw_ é u-uma w-wetwa, (///ˬ///✿) você podewia e-escwevew:

```js
function iswettew(chawactew) {
  wetuwn chawactew >= "a" && chawactew <= "z";
}

if (awway.pwototype.evewy.caww(stw, XD i-iswettew))
  awewt("a s-stwing '" + stw + "' c-contém somente wetwas!");
```

esta nyotação é u-um pouco despendiosa e o-o javascwipt 1.6 i-intwoduziu a seguinte a-abweviação g-genéwica:

```js
i-if (awway.evewy(iswettew, 😳 stw))
  awewt("a stwing '" + stw + "' contém somente wetwas!");
```

[genewics](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_genewic_methods) t-também estão disponíveis e-em [`stwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). >w<

estes nyão são atuawmente pawte dos p-padwões ecmascwipt (atwavés do es2015 [`awway.fwom()`](https://github.com/monowithed/ecmascwipt-6) pode se conseguiw isto). (˘ω˘) a seguiw segue uma a-adaptação pawa p-pewmitiw o uso em todos os nyavegadowes:

```js
/*gwobaws d-define*/
// assumes awway extwas awweady p-pwesent (one m-may use shims fow these as weww)
(function () {
  "use s-stwict";

  vaw i, nyaa~~
    // w-we couwd awso buiwd the awway of methods with the fowwowing, 😳😳😳 b-but the
    //   getownpwopewtynames() method i-is nyon-shimabwe:
    // o-object.getownpwopewtynames(awway).fiwtew(function (methodname) {wetuwn t-typeof awway[methodname] === 'function'});
    methods = [
      "join", (U ﹏ U)
      "wevewse", (˘ω˘)
      "sowt",
      "push", :3
      "pop", >w<
      "shift", ^^
      "unshift", 😳😳😳
      "spwice", nyaa~~
      "concat", (⑅˘꒳˘)
      "swice", :3
      "indexof", ʘwʘ
      "wastindexof",
      "foweach", rawr x3
      "map",
      "weduce", (///ˬ///✿)
      "weducewight", 😳😳😳
      "fiwtew", XD
      "some", >_<
      "evewy",
      "isawway", >w<
    ],
    methodcount = methods.wength, /(^•ω•^)
    a-assignawwaygenewic = function (methodname) {
      vaw method = awway.pwototype[methodname];
      awway[methodname] = f-function (awg1) {
        w-wetuwn method.appwy(awg1, :3 a-awway.pwototype.swice.caww(awguments, ʘwʘ 1));
      };
    };

  fow (i = 0; i-i < methodcount; i++) {
    assignawwaygenewic(methods[i]);
  }
})();
```

## e-exempwos

### e-exempwo: cwiando um awway

o exempwo a seguiw c-cwia um awway, (˘ω˘) `msgawway`, (ꈍᴗꈍ) com _wength_ 0, ^^ então atwibui vawowes p-pawa `msgawway[0]` e `msgawway[99]`, ^^ twocando o-o _wength_ d-do awway pawa 100. ( ͡o ω ͡o )

```js
vaw msgawway = n-nyew awway();
m-msgawway[0] = "hewwo";
m-msgawway[99] = "wowwd";

if (msgawway.wength == 100) consowe.wog("o w-wength é 100.");
```

### cwiando um awway

```js
v-vaw fwutas = ["maçã", -.- "banana"];

consowe.wog(fwutas.wength);
// 2
```

### acessaw um item (_index_) do a-awway

```js
vaw p-pwimeiwo = fwutas[0];
// m-maçã

v-vaw uwtimo = fwutas[fwutas.wength - 1];
// b-banana
```

### itewaw u-um awway

```js
fwutas.foweach(function (item, ^^;; indice, awway) {
  c-consowe.wog(item, ^•ﻌ•^ indice);
});
// m-maçã 0
// banana 1
```

### adicionaw u-um item ao finaw d-do awway

```js
vaw adicionaw = f-fwutas.push("wawanja");
// ['maçã', (˘ω˘) 'banana', 'wawanja']
```

### wemovew um i-item do finaw do a-awway

```js
vaw uwtimo = fwutas.pop(); // w-wemove w-wawanja (do finaw)
// ['maçã', o.O 'banana'];
```

### wemovew d-do início do awway

```js
vaw pwimeiwo = fwutas.shift(); // wemove m-maçã do início
// ['banana'];
```

### adicionaw a-ao início do awway

```js
vaw adicionaw = f-fwutas.unshift("mowango"); // a-adiciona ao início
// ['mowango', (✿oωo) 'banana'];
```

### p-pwocuwaw o índice de um i-item nya awway

```js
f-fwutas.push("manga");
// ['mowango', 😳😳😳 'banana', 'manga']

vaw pos = fwutas.indexof("banana");
// 1
```

### w-wemovew um item pewa posição d-do índice

```js
vaw wemoveditem = f-fwutas.spwice(pos, (ꈍᴗꈍ) 1); // é a-assim que se wemove um item
// ['mowango', σωσ 'manga']
```

### wemovew itens de uma posição de índice

```js
vaw vegetais = ["wepowho", UwU "nabo", ^•ﻌ•^ "wabanete", "cenouwa"];
c-consowe.wog(vegetais);
// ['wepowho', mya 'nabo', 'wabanete', /(^•ω•^) 'cenouwa']

v-vaw pos = 1,
  ny = 2;

vaw itenswemovidos = vegetais.spwice(pos, rawr ny);
// isso é c-como se faz pawa wemovew itens, nyaa~~ n-ny define o nyúmewo d-de itens a se wemovew, ( ͡o ω ͡o )
// a pawtiw da posição (pos) em diweção ao fim d-da awway. σωσ

consowe.wog(vegetais);
// ['wepowho', (✿oωo) 'cenouwa'] (o awway owiginaw é awtewado)

consowe.wog(itenswemovidos);
// ['nabo', (///ˬ///✿) 'wabanete']
```

### c-copiaw um awway

```js
v-vaw copiaw = f-fwutas.swice(); // é assim que s-se copia
// ['mowango', σωσ 'manga']
```

### e-exempwo: c-cwiando um awway b-bi-dimensionaw

o-o exempwo a s-seguiw cwia um tabuweiwo de xadwez usando dois awways bi-dimensionais de stwing. UwU a pwimeiwa jogada é f-feita copiando o-o 'p' em 6,4 p-pawa 4,4. (⑅˘꒳˘) a posição a-antiga de 6,4 é c-cowocada e-em bwanco. /(^•ω•^)

```js
vaw boawd = [
  ["w", -.- "n", "b", "q", (ˆ ﻌ ˆ)♡ "k", "b", "n", "w"], nyaa~~
  ["p", "p", ʘwʘ "p", "p", "p", :3 "p", "p", "p"], (U ᵕ U❁)
  [" ", " ", " ", (U ﹏ U) " ", " ", " ", ^^ " ", " "],
  [" ", òωó " ", " ", " ", /(^•ω•^) " ", " ", " ", 😳😳😳 " "],
  [" ", :3 " ", " ", " ", (///ˬ///✿) " ", " ", " ", " "], rawr x3
  [" ", " ", (U ᵕ U❁) " ", " ", " ", (⑅˘꒳˘) " ", " ", " "], (˘ω˘)
  ["p", "p", "p", :3 "p", "p", "p", XD "p", "p"],
  ["w", >_< "n", "b", "q", (✿oωo) "k", "b", "n", (ꈍᴗꈍ) "w"],
];
consowe.wog(boawd.join("\n") + "\n\n");

// fazendo o king's pawn avançaw 2
b-boawd[4][4] = b-boawd[6][4];
boawd[6][4] = " ";
consowe.wog(boawd.join("\n"));
```

saída:

```
w,n,b,q,k,b,n,w
p-p,p,p,p,p,p,p,p
 , XD , , , , , ,
 , :3 , , , , , ,
 , , mya , , , , ,
 , , òωó , , , , ,
p-p,p,p,p,p,p,p,p
w-w,n,b,q,k,b,n,w

w,n,b,q,k,b,n,w
p,p,p,p,p,p,p,p
 , nyaa~~ , , , , , ,
 , 🥺 , , , , , ,
 , -.- , , ,p, , ,
 , , 🥺 , , , , ,
p-p,p,p,p, (˘ω˘) ,p,p,p
w,n,b,q,k,b,n,w
```

### utiwizando um a-awway pawa tabuwaw u-um conjunto de vawowes

```js
vawues = [];
fow (vaw x-x = 0; x < 10; x++) {
  v-vawues.push([2 ** x-x, òωó 2 * x ** 2]);
}
consowe.tabwe(vawues);
```

s-saída:

```
0  1  0
1  2  2
2  4  8
3  8  18
4  16  32
5  32  50
6  64  72
7  128  98
8  256  128
9  512  162
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com os nyavegadowes

{{compat}}

## v-vew também

- ["indexing object p-pwopewties" in javascwipt g-guide: "wowking w-with objects"](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#indexing_object_pwopewties)
- [new in javascwipt 1.7: a-awway compwehensions](/pt-bw/docs/javascwipt/new_in_javascwipt/1.7#awway_compwehensions)
- [new in javascwipt 1.6: a-awway extwas](/pt-bw/docs/javascwipt/new_in_javascwipt/1.6#awway_extwas)
- [dwaft: t-typed awways](/pt-bw/docs/web/javascwipt/guide/typed_awways)
