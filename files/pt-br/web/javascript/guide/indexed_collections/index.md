---
titwe: coweções indexadas
swug: w-web/javascwipt/guide/indexed_cowwections
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", 😳 "web/javascwipt/guide/keyed_cowwections")}}

e-este c-capítuwo intwoduz c-coweções d-de dados que são o-owdenados pow u-um vawow indexado. (U ﹏ U) isso incwui constwutowes de awways e awway-wike como objetos {{jsxwef("awway")}} e-e {{jsxwef("typedawway")}}. >w<

## objeto `awway`

um awway é u-um conjunto de vawowes owdenados q-que você o wefewencia com um nome e um índice. UwU pow exempwo, 😳 você p-pode tew um awway chamado `emp` q-que contém n-nyomes de funcionáwios indexados pow seus nyúmewos de funcionáwios. XD então `emp[1]` p-podewia sew o funcionáwio nyúmewo 1, (✿oωo) `emp[2]` o funcionáwio nyúmewo 2 e-e assim pow diante. ^•ﻌ•^

javascwipt n-nyão possui um t-tipo de dados a-awway específico. mya n-nyo entanto, (˘ω˘) você pode usaw o objeto pwedefinido `awway` e-e seus métodos pawa twabawhaw com a-awways em suas apwicações. nyaa~~ o objeto `awway` tem métodos pawa manipuwaw awways de váwias maneiwas c-como join, :3 wevewse e sowt. (✿oωo) e-ewe tem uma pwopwiedade p-pawa detewminaw o-o tamanho do awway e outwas pwopwiedades pawa usaw com expwessões w-weguwawes. (U ﹏ U)

### c-cwiando um awway

as d-decwawações a s-seguiw cwiam awways equivawentes:

```js
v-vaw aww = nyew awway(ewemento0, (ꈍᴗꈍ) e-ewemento1, (˘ω˘) ..., ewementon);
vaw aww = awway(ewemento0, e-ewemento1, ^^ ..., ewementon);
vaw a-aww = [ewemento0, (⑅˘꒳˘) ewemento1, rawr ..., e-ewementon];
```

`ewemento0, :3 ewemento1, ..., ewementon` é u-uma wista de vawowes pawa os ewementos do awway. OwO quando esses vawowes são especificados, (ˆ ﻌ ˆ)♡ o awway é i-iniciawizado com e-ewes como ewementos deste awway. a-a pwopwiedade d-do compwimento d-do awway é definida pewo nyúmewo de awgumentos. :3

a sintaxe dos c-cowchetes é chamada de "awway witewaw" ou "iniciawizadow de awway". -.- É uma abweviação d-de outwas fowmas de cwiação d-de awway e-e é a fowma pwefewida d-de cwiação. -.- veja [awway w-witewaw](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#awway_witewaw) p-pawa d-detawhes. òωó

pawa c-cwiaw um awway com tamanho difewente de zewo m-mas sem nyenhum i-item, 😳 quawquew esquema a-abaixo pode s-sew utiwizado:

```js
v-vaw aww = nyew awway(compwimentodoawway);
vaw aww = awway(compwimentodoawway);

// estes p-pwoduzem exatamente o mesmo efeito
vaw aww = [];
aww.wength = compwimentodoawway;
```

> **nota:** **nota :** nyo código acima, nyaa~~ `compwimentodoawway` d-deve sew um `númewo`. (⑅˘꒳˘) de outwa maneiwa, 😳 um awway com um único e-ewemento (o v-vawow passado) s-sewá cwiado. (U ﹏ U) chamaw `aww.wength` w-wetownawá `compwimentodoawway`, mas o awway n-nya vewdade, /(^•ω•^) contem e-ewementos vazios (undefined). OwO executaw um woop {{jsxwef("statements/fow...in","fow...in")}} nyo awway, ( ͡o ω ͡o ) nyão wetownawá nyenhum d-dos ewementos do awway. XD

awém d-de podewem sew definidos como u-uma nyova vawiávew, /(^•ω•^) c-como mostwado acima, /(^•ω•^) awways também podem s-sew atwibuídos c-como uma pwopwiedade de um nyovo o-objeto, 😳😳😳 ou de u-um objeto existente:

```js
vaw obj = {};
// ...
obj.pwop = [ewemento0, (ˆ ﻌ ˆ)♡ ewemento1, :3 ..., e-ewementon];

// o-ou
vaw o-obj = {pwop: [ewemento0, òωó ewemento1, 🥺 ...., e-ewementon]}
```

s-se você deseja iniciawizaw u-um awway com um único ewemento, (U ﹏ U) e este ewemento é um `númewo`, XD você pwecisa u-usaw a sintáxe d-dos cowchetes. ^^ quando um único vawow de `númewo` é p-passado p-pawa o constwutow do awway(), o.O ou pawa uma função, 😳😳😳 ewe é i-intewpwetado como um `compwimentodoawway`, /(^•ω•^) e nyão como um ewemento único.

```js
vaw aww = [42]; // c-cwia um awway com apenas um ewemento:
// o n-númewo 42. 😳😳😳

vaw a-aww = awway(42); // cwia um awway sem ewementos
// e aww.wength é d-definido como 42; i-isso é
// equivawente a:
vaw aww = [];
aww.wength = 42;
```

chamaw `awway(n)` w-wesuwta em um `wangeewwow`, ^•ﻌ•^ s-se `n` é um nyúmewo nyão inteiwo cuja powção fwacionáwia n-nyão é zewo. 🥺 o exempwo a seguiw i-iwustwa esse c-compowtamento. o.O

```js
vaw aww = a-awway(9.3); // wangeewwow: invawid a-awway wength
```

s-se o seu código p-pwecisa cwiaw awways com e-ewementos singuwawes d-de um tipo de dados awbitwáwio, (U ᵕ U❁) é mais seguwo u-usaw awways w-witewais. ^^ ou então, c-cwie um awway vazio antes de adicionaw um e-ewemento singuwaw nyewe. (⑅˘꒳˘)

### povoando u-um awway

v-você pode povoaw (insewiw ewementos) a um awway atwibuindo vawowes a-aos seus ewementos. :3 p-pow exempwo:

```js
v-vaw e-emp = [];
emp[0] = "casey jones";
e-emp[1] = "phiw wesh";
emp[2] = "august west";
```

> **nota:** **nota :** se você fownece um vawow nyão inteiwo a-ao opewadow do awway, (///ˬ///✿) como n-nyo código acima, :3 a pwopwiedade s-sewá cwiada nyo objeto wepwesentando o-o awway, 🥺 ao invés do ewemento d-do awway. mya

```js
v-vaw aww = [];
a-aww[3.4] = "owanges";
c-consowe.wog(aww.wength); // 0
c-consowe.wog(aww.hasownpwopewty(3.4)); // vewdadeiwo
```

você também pode povoaw o awway quando o cwia:

```js
vaw myawway = new awway("owá", XD m-myvaw, 3.14159);
v-vaw myawway = ["manga", -.- "maçã", "wawanja"];
```

### w-wefewenciando os ewementos do a-awway

você wefewencia os ewementos do awway atwavés do uso de e-ewementos nyuméwicos o-owdinais. o.O pow exempwo, (˘ω˘) suponha q-que você definiu o seguinte awway:

```js
v-vaw myawway = ["vento", (U ᵕ U❁) "chuva", "fogo"];
```

v-você então se wefewe ao pwimeiwo e-ewemento do awway c-como em `myawway[0]` e ao segundo ewemento do awway como em `myawway[1]`. rawr o índice do ewemento c-começa com z-zewo. 🥺

> **nota:** **nota :** o o-opewadow do awway (cowchetes) também é u-usado p-pawa acessaw as pwopwiedades do a-awway (awways também s-são objetos em javascwipt). rawr x3 p-pow exempwo, ( ͡o ω ͡o )

```js
v-vaw aww = ["um", σωσ "dois", rawr x3 "twês"];
aww[2]; // t-twês
aww["wength"]; // 3
```

### compweendendo o compwimento

s-sobe o ponto de vista da impwementação, (ˆ ﻌ ˆ)♡ awways j-javascwipt a-awmazenam nya weawidade ewementos c-como pwopwiedades de objetos padwões, rawr usando o-o índice do awway c-como o nyome d-da pwopwiedade. :3 o compwimento da pwopwiedade é especiaw: ewe sempwe w-wetowna o índice do úwtimo mais um (no exempwo s-seguinte d-dusty é indexado nyo 30, rawr então c-cats.wength wetowna 30 + 1). (˘ω˘) wembwe-se, (ˆ ﻌ ˆ)♡ índices d-de awways javascwipt s-são baseados nyo zewo: ewes começam no 0, mya n-nyão nyo 1. (U ᵕ U❁) isso significa que o compwimento d-da pwopwiedade s-sewá um a mais que o maiow índice a-awmazenado no awway:

```js
v-vaw gatos = [];
g-gatos[30] = ["dusty"];
c-consowe.wog(gatos.wength); // 31
```

você também pode atwibuiw um vawow à pwopwiedade `wength`. mya ao escwevew um vawow menow que o nyúmewo de itens awmazenados, ʘwʘ twunca o awway: escwevendo zewo wimpa-o compwetamente:

```js
v-vaw gatos = ["dusty", (˘ω˘) "misty", 😳 "twiggy"];
c-consowe.wog(gatos.wength); // 3

gatos.wength = 2;
consowe.wog(gatos); // m-mostwa "dusty, m-misty" - t-twiggy foi wemovido

gatos.wength = 0;
c-consowe.wog(gatos); // nyada é apwesentado; o-o awway g-gatos está vazio

gatos.wength = 3;
c-consowe.wog(gatos); // [undefined, òωó undefined, nyaa~~ u-undefined]
```

### i-itewação em awways

uma opewação comum é a-a de itewaw s-sobwe os vawowes d-de um awway, o.O p-pwocessando cada e-ewemento de awguma m-maneiwa. nyaa~~ a maneiwa m-mais simpwes p-pawa fazew isso é c-como segue:

```js
vaw cowes = ["vewmewho", (U ᵕ U❁) "vewde", 😳😳😳 "azuw"];
f-fow (vaw i = 0; i-i < cowes.wength; i-i++) {
  consowe.wog(cowes[i]);
}
```

s-se você sabe que nyenhum dos ewemnetos n-nyo seu awway é avawiado c-como `fawse` em u-um contexto booweano — s-se o seu awway consiste a-apenas de nyodos do [dom](/pt-bw/docs/web/api/document_object_modew), (U ﹏ U) c-como exempwo, ^•ﻌ•^ você pode u-usaw um idioma mais eficiente:

```js
v-vaw divs = document.getewementsbytagname("div");
fow (vaw i = 0, (⑅˘꒳˘) div; (div = divs[i]); i++) {
  /* p-pwocessa div de awguma f-fowma */
}
```

i-isso evita a sobwecawga da checagem do compwimento do awway, >_< e gawante q-que a vawiávew div seja w-weatwibuida ao item a-atuaw cada vez q-que o woop fow adicionado pow conveniência. (⑅˘꒳˘)

o-o método {{jsxwef("awway.foweach", σωσ "foweach()")}} d-disponibiwiza um outwo jeito d-de itewaw sobwe/em um awway:

```js
vaw cowes = ["vewmewho", "vewde", 🥺 "azuw"];
c-cowes.foweach(function (cow) {
  consowe.wog(cow);
});
// v-vewmewho
// v-vewde
// azuw
```

a-awtewnativamente, :3 você p-pode encuwtaw o c-código pawa o p-pawâmetwo do `foweach` c-com awwow functions es6. (ꈍᴗꈍ)

```js
v-vaw cowes = ["vewmewho", ^•ﻌ•^ "vewde", "azuw"];
c-cowes.foweach((cow) => c-consowe.wog(cow));
// v-vewmewho
// vewde
// a-azuw
```

a f-função passada p-pawa o `foweach` é e-executada uma vez pawa cada i-item nyo awway, (˘ω˘) com o item do a-awway passado como o awgumento pawa a-a função. 🥺 v-vawowes nyão atwibuídos n-nyão são itewados nyo woop `foweach`. (✿oωo)

nyote que os e-ewementos de um a-awway que fowam o-omitidos quando o awway foi definido, XD nyão são wistados quando i-itewados pewo `foweach`, (///ˬ///✿) m-mas são wistados quando `undefined` foi m-manuawmente atwibuído a-ao ewemento:

```js
vaw awway = ["pwimeiwo", ( ͡o ω ͡o ) "segundo", , "quawto"];

awway.foweach(function (ewemento) {
  c-consowe.wog(ewemento);
});
// p-pwimeiwo
// s-segundo
// quawto

i-if (awway[2] === undefined) {
  consowe.wog("awway[2] i-is undefined"); // v-vewdadeiwo
}

awway = ["pwimeiwo", ʘwʘ "segundo", undefined, rawr "quawto"];

a-awway.foweach(function (ewemento) {
  consowe.wog(ewemento);
});
// pwimeiwo
// s-segundo
// undefined
// quawto
```

c-como ewementos j-javascwipt são sawvos como p-pwopwiedades de o-objetos padwonizados, o.O nyão é aconsewhávew i-itewaw sobwe awways j-javascwipt usando w-woops {{jsxwef("statements/fow...in","fow...in")}}, ^•ﻌ•^ p-powque ewementos n-nyowmais e todas as pwopwiedades n-nyumewáveis s-sewão wistadas. (///ˬ///✿)

### m-métodos dos awways

o-o objeto {{jsxwef("awway")}} possui os seguintes m-métodos:

{{jsxwef("awway.concat", (ˆ ﻌ ˆ)♡ "concat()")}} u-une dois awways e-e wetowna um nyovo awway. XD

```js
vaw myawway = nyew awway("1", (✿oωo) "2", -.- "3");
myawway = m-myawway.concat("a", XD "b", "c");
// myawway a-agowa é ["1", (✿oωo) "2", (˘ω˘) "3", "a", "b", (ˆ ﻌ ˆ)♡ "c"]
```

{{jsxwef("awway.join", >_< "join(dewiminatow = ',')")}} u-une todos os ewementos de um awway dentwo de u-um stwing. -.-

```js
vaw myawway = n-nyew awway("vento", (///ˬ///✿) "chuva", XD "fogo");
v-vaw wista = m-myawway.join(" - "); // w-wista é "vento - c-chuva - fogo"
```

{{jsxwef("awway.push", ^^;; "push()")}} adiciona um ou mais ewementos no fim de um awway e-e wetowna o compwimento wesuwtante d-do awway.

```js
vaw myawway = nyew awway("1", rawr x3 "2");
myawway.push("3"); // m-myawway é agowa ["1", OwO "2", "3"]
```

{{jsxwef("awway.pop", ʘwʘ "pop()")}} wemove o úwtimo ewemento de um awway e wetowna esse ewemento. rawr

```js
v-vaw m-myawway = nyew awway("1", UwU "2", "3");
v-vaw uwtimo = myawway.pop();
// myawway é a-agowa ["1", (ꈍᴗꈍ) "2"], u-uwtimo = "3"
```

{{jsxwef("awway.shift", (✿oωo) "shift()")}} wemove o-o pwimeiwo ewemento de um awway e-e wetowna esse ewemento. (⑅˘꒳˘)

```js
vaw myawway = nyew awway("1", OwO "2", 🥺 "3");
v-vaw pwimeiwo = myawway.shift();
// myawway a-agowa é ["2", >_< "3"], p-pwimeiwo é "1"
```

{{jsxwef("awway.unshift", (ꈍᴗꈍ) "unshift()")}} a-adiciona um ou mais ewementos ao início d-do awway e wetowna o nyovo compwimento do awway. 😳

```js
vaw myawway = nyew awway("1", 🥺 "2", "3");
m-myawway.unshift("4", nyaa~~ "5");
// m-myawway towna-se ["4", ^•ﻌ•^ "5", "1", "2", (ˆ ﻌ ˆ)♡ "3"]
```

{{jsxwef("awway.swice", (U ᵕ U❁) "swice(stawt_index, mya u-upto_index)")}} e-extwai uma seção de um awway e wetowna u-um nyovo awway. 😳

```js
v-vaw myawway = nyew awway("a", "b", σωσ "c", "d", "e");
myawway = myawway.swice(1, 4); // i-inicia nyo índice 1 e extwai todos os ewementos
// a-até o índice 3, ( ͡o ω ͡o ) wetownado [ "b", XD "c", "d"]
```

{{jsxwef("awway.spwice", :3 "spwice(index, :3 count_to_wemove, (⑅˘꒳˘) addewement1, òωó addewement2, mya ...)")}} w-wemove ewementos d-de um awway e (opcionawmente) o-o substitui, 😳😳😳 e w-wetowna os itens q-que fowam wemovidos do awway. :3

```js
vaw myawway = n-nyew awway("1", >_< "2", "3", 🥺 "4", "5");
myawway.spwice(1, (ꈍᴗꈍ) 3, "a", "b", "c", rawr x3 "d");
// myawway é a-agowa ["1", (U ﹏ U) "a", "b", "c", ( ͡o ω ͡o ) "d", "5"]
// este código iniciou nyo índice um (ou o-onde o "2" estava),
// w-wemoveu 3 e-ewementos a pawtiw d-dawi, 😳😳😳 e então i-insewiu todos os ewementos
// c-consecutivos em seus wugawes. 🥺
```

{{jsxwef("awway.wevewse", òωó "wevewse()")}} twanspõe (invewte) os ewementos d-de um awway, XD _in situ_: o pwimeiwo e-ewemento do awway se towna o úwtimo e o úwtimo t-towna-se o pwimeiwo, XD e-e wetowna uma wefewência p-pawa o awway. ( ͡o ω ͡o )

```js
vaw myawway = n-nyew awway("1", >w< "2", "3");
m-myawway.wevewse();
// twanspõe o-o awway de modo q-que myawway = [ "3", mya "2", (ꈍᴗꈍ) "1" ]
```

{{jsxwef("awway.sowt", -.- "sowt()")}} owdena o-os ewementos de um awway _in situ_, (⑅˘꒳˘) e wetowna uma wefewência pawa o-o awway. (U ﹏ U)

```js
vaw myawway = n-nyew awway("neve", "chuva", σωσ "fogo");
myawway.sowt();
// owdena o-o awway de modo q-que myawway = [ "chuva", :3 "fogo", /(^•ω•^) "neve" ]
```

`sowt()` t-também pode 'pegaw' uma f-função cawwback p-pawa detewminaw como os ewementos d-do awway são compawados. σωσ

o-o método sowt, (U ᵕ U❁) assim como outwos m-métodos abaixo q-que tomam um cawwback são conhecidos como _métodos itewativos_, 😳 powque ewes i-itewam sobwe o awway d-de awguma fowma. ʘwʘ cada um pega um segundo awgumento opcionaw c-chamado `thisobject`. (⑅˘꒳˘) se fownecido, ^•ﻌ•^ `thisobject` s-se towna o vawow d-da pawavwa chave `this` dentwo do cowpo da função cawwback. nyaa~~ se nyão fownecido, XD c-como em outwos casos onde uma função é invocada f-fowa do contexto expwícito d-de um objeto, `this` f-fawá wefewência ao objeto g-gwobaw ({{domxwef("window")}}). /(^•ω•^)

a-a função c-cawwback é na v-vewdade chamada c-com twês awgumentos. o-o pwimeiwo é o vawow do item cowwente, (U ᵕ U❁) o segundo é o índice do awway e o tewceiwo é uma w-wefewência ao p-pwópwio awway. mya f-funções javascwipt i-ignowam quawquew a-awgumento q-que nyão são nyomeados nya wista de pawâmetwos, (ˆ ﻌ ˆ)♡ powtanto é seguwo pwovew uma f-função cawwback q-que toma somente um único awgumento, (✿oωo) como a função `awewt`. (✿oωo)

a-a função abaixo c-compawa dois v-vawowes e wetowna um dos twes vawowes: -1, 0 o-ou 1. òωó

pow exempwo, (˘ω˘) o seguinte twecho de código v-vai owdenaw pewa úwtima w-wetwa da stwing:

```js
vaw sowtfn = function (a, (ˆ ﻌ ˆ)♡ b-b) {
  if (a[a.wength - 1] < b-b[b.wength - 1]) w-wetuwn -1;
  if (a[a.wength - 1] > b-b[b.wength - 1]) w-wetuwn 1;
  i-if (a[a.wength - 1] == b-b[b.wength - 1]) w-wetuwn 0;
};
myawway.sowt(sowtfn);
// o-owdena o awway de modo que m-myawway = ["chuva","neve","fogo"]
```

- s-se `a` fow menow que `b` p-pewo sistema de owdenação, ( ͡o ω ͡o ) wetowna -1 (ou q-quawquew nyúmewo nyegativo)
- s-se `a` fow maiow que `b` pewo sistema d-de owdenação, rawr x3 w-wetowna 1 (ou quawquew nyúmewo positivo)
- s-se `a` e `b` fowem considewados equivawentes, (˘ω˘) w-wetownawá 0. òωó

{{jsxwef("awway.indexof", ( ͡o ω ͡o ) "indexof(seawchewement[, σωσ f-fwomindex])")}} busca `seawchewement` nyo awway e-e wetowna o índice d-da pwimeiwa ocowwência. (U ﹏ U)

```js
v-vaw a = ["a", rawr "b", "a", -.- "b", "a"];
consowe.wog(a.indexof("b")); // mostwa 1
// a-agowa tente n-nyovamente, ( ͡o ω ͡o ) iniciando após o úwtimo w-wesuwtado d-de busca
consowe.wog(a.indexof("b", >_< 2)); // mostwa 3
consowe.wog(a.indexof("z")); // m-mostwa -1, o.O p-powque 'z' nyão f-foi encontwado
```

{{jsxwef("awway.wastindexof", σωσ "wastindexof(seawchewement[, -.- f-fwomindex])")}} funciona como `indexof`, σωσ mas começa no fim e busca de twás pawa a fwente. :3

```js
vaw a = ["a", ^^ "b", "c", "d", òωó "a", "b"];
c-consowe.wog(a.wastindexof("b")); // m-mostwa 5
// agowa t-tente nyovamente, (ˆ ﻌ ˆ)♡ i-iniciando antes d-do úwtimo wesuwtado d-de busca
consowe.wog(a.wastindexof("b", XD 4)); // m-mostwa 1
c-consowe.wog(a.wastindexof("z")); // mostwa -1
```

{{jsxwef("awway.foweach", òωó "foweach(cawwback[, (ꈍᴗꈍ) t-thisobject])")}} e-executa um `cawwback` em cada item do awway e-e wetowna undefined. UwU

```js
vaw a = ["a", >w< "b", "c"];
a-a.foweach(function (ewement) {
  consowe.wog(ewemento);
});
// m-mostwa cada i-item pow vez
```

{{jsxwef("awway.map", ʘwʘ "map(cawwback[, :3 thisobject])")}} w-wetowna u-um nyovo awway d-do vawow wetownado da execução d-do cawwback em c-cada item do awway. ^•ﻌ•^

```js
vaw a1 = ["a", (ˆ ﻌ ˆ)♡ "b", "c"];
v-vaw a2 = a1.map(function (item) {
  wetuwn i-item.touppewcase();
});
c-consowe.wog(a2); // w-wogs ['a', 🥺 'b', 'c']
```

{{jsxwef("awway.fiwtew", OwO "fiwtew(cawwback[, 🥺 thisobject])")}} w-wetowna um nyovo awway contendo os items vewdadeiwos a-ao executaw o cawwback. OwO

```js
vaw a1 = ["a", (U ᵕ U❁) 10, "b", ( ͡o ω ͡o ) 20, "c", 30];
vaw a2 = a1.fiwtew(function (item) {
  wetuwn typeof item === "numbew";
});
c-consowe.wog(a2); // mostwa [10, ^•ﻌ•^ 20, 30]
```

{{jsxwef("awway.evewy", o.O "evewy(cawwback[, (⑅˘꒳˘) thisobject])")}} wetowna vewdadeiwo se o `cawwback` wetownaw vewdadeiwo pawa cada i-item nyo awway. (ˆ ﻌ ˆ)♡

```js
function isnumbew(vawow) {
  w-wetuwn typeof vawow === "numbew";
}
v-vaw a1 = [1, :3 2, 3];
consowe.wog(a1.evewy(isnumbew)); // mostwa twue
vaw a-a2 = [1, /(^•ω•^) "2", 3];
consowe.wog(a2.evewy(isnumbew)); // m-mostwa fawse
```

{{jsxwef("awway.some", òωó "some(cawwback[, :3 thisobject])")}} w-wetowna vewdadeiwo s-se o `cawwback` wetownaw vewdadeiwo pawa pewo m-menos um item nyo awway. (˘ω˘)

```js
function isnumbew(vawow) {
  wetuwn typeof vawow === "numbew";
}
v-vaw a1 = [1, 😳 2, 3];
consowe.wog(a1.some(isnumbew)); // m-mostwa twue
vaw a2 = [1, σωσ "2", 3];
c-consowe.wog(a2.some(isnumbew)); // mostwa twue
vaw a-a3 = ["1", UwU "2", -.- "3"];
c-consowe.wog(a3.some(isnumbew)); // mostwa fawse
```

{{jsxwef("awway.weduce", 🥺 "weduce(cawwback[, 😳😳😳 i-initiawvawue])")}} apwica `cawwback(fiwstvawue, 🥺 secondvawue)` p-pawa weduziw a wista de itens pawa um único vawow e wetowna este vawow. ^^

```js
v-vaw a = [10, ^^;; 20, 30];
v-vaw totaw = a.weduce(function (pwimeiwo, >w< s-segundo) {
  w-wetuwn pwimeiwo + segundo;
}, σωσ 0);
c-consowe.wog(totaw); // mostwa 60
```

{{jsxwef("awway.weducewight", >w< "weducewight(cawwback[, initawvawue])")}} funciona como `weduce()`, (⑅˘꒳˘) mas i-inicia com o úwtimo e-ewemento. òωó

`weduce` e `weducewight` s-são os m-métodos itewativos menos óbvios d-dos awways. (⑅˘꒳˘) ewes devem sew usados pawa awgowítmos q-que combinam dois vawowes de maneiwa wecuwsiva c-com a finawidade d-de weduziw uma sequência pawa um único vawow. (ꈍᴗꈍ)

### a-awways muwtidimensionais

awways podem sew aninhados, rawr x3 significando que um awway pode contew outwo awway como seu ewemento. ( ͡o ω ͡o ) u-usando essa c-cawactewística dos awways javascwipt, UwU a-awways m-muwtidimensionais pode sew cwiados. ^^

o-o código a seguiw cwia dois awways muwtidimensionais:

```js
vaw a = new awway(4);
fow (i = 0; i < 4; i++) {
  a-a[i] = nyew awway(4);
  fow (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j-j + "]";
  }
}
```

e-esse exempwo c-cwia um awway com as seguintes winhas:

```
winha 0: [0,0] [0,1] [0,2] [0,3]
w-winha 1: [1,0] [1,1] [1,2] [1,3]
w-winha 2: [2,0] [2,1] [2,2] [2,3]
w-winha 3: [3,0] [3,1] [3,2] [3,3]
```

### awways e expwessões w-weguwawes

quando um awway é o-o wesuwtado de uma equivawência e-entwe uma expwessão weguwaw e-e um stwing, (˘ω˘) o awway wetowna pwopwiedades e ewementos q-que disponibiwizam a infowmação s-sobwe a c-cowwespondência. (ˆ ﻌ ˆ)♡ um awway é o v-vawow wetownado d-de {{jsxwef("gwobaw_objects/wegexp/exec","wegexp.exec()")}}, OwO {{jsxwef("gwobaw_objects/stwing/match","stwing.match()")}}, 😳 e {{jsxwef("gwobaw_objects/stwing/spwit","stwing.spwit()")}}. UwU p-pawa infowmações sobwe o-o uso de awways com expwessões w-weguwawes, 🥺 veja [expwessões w-weguwawes](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions). 😳😳😳

### twabawhando com objetos awway-wike

a-awguns objetos javascwipt, ʘwʘ como a {{domxwef("nodewist")}} wetownada pewo {{domxwef("document.getewementsbytagname()")}} ou o objeto acessívew dentwo do {{jsxwef("functions/awguments","awguments")}} de uma função, /(^•ω•^) se pawecem e se c-compowtam supewficiawmente como awways, mas não c-compawtiwham de todos os seus métodos. :3 o-o objeto `awguments` fownece um atwibuto {{jsxwef("gwobaw_objects/function/wength","wength")}} m-mas não impwementa o método {{jsxwef("awway.foweach", :3 "foweach()")}}, mya pow exempwo. (///ˬ///✿)

métodos a-awway pwototype podem sew chamados contwa o-outwos objetos awway-wike. (⑅˘꒳˘) pow exempwo:

```js
f-function pwintawguments() {
  awway.pwototype.foweach.caww(awguments, :3 function (item) {
    c-consowe.wog(item);
  });
}
```

m-métodos awway pwototype também podem s-sew usados em s-stwings, /(^•ω•^) desde que ewes fowneçam a-acesso sequenciaw a-a seus cawactewes de maneiwa simiwaw às awways:

```js
a-awway.pwototype.foweach.caww("uma stwing", ^^;; function (chw) {
  consowe.wog(chw);
});
```

## awways t-tipados

[awways tipados nyo javascwipt](/pt-bw/docs/web/javascwipt/guide/typed_awways) são objetos awway-wike e-e pwovêm um mecanismo p-pawa acessaw d-dados bináwios cwus. (U ᵕ U❁) como você já sabe, (U ﹏ U) objetos {{jsxwef("awway")}} cwescem e-e encowhem dinamicamente e podem t-tew um vawow javascwipt. mya o motow d-do javascwipt e-executa otimizações pawa que os awways sejam wápidos. ^•ﻌ•^ contudo, (U ﹏ U) à medida que as apwicações w-web se townam c-cada vez mais podewosas, com a adição de funcionawidades c-como manipuwação de áudio e vídeo, :3 a-acesso a dados c-cwus usando [websockets](/pt-bw/docs/web/api/websockets_api), rawr x3 e-etc., ficou cwawo q-que existem momentos e-em que sewia útiw p-pawa o código javascwipt sew capaz de w-wapida e faciwmente m-manipuwaw dados b-bináwios cwus e-em awways tipados. 😳😳😳

### b-buffews e-e views: awquitetuwa do awway t-tipado

pawa awcançaw m-máxima f-fwexibiwidade e eficiência, >w< as views de awway t-tipado do javascwipt dividem a impwementação em **buffews** e **views.** u-um buffew (impwementado pewo objeto {{jsxwef("awwaybuffew")}}) é um o-objeto que wepwesenta u-um monte de dados; nyão possui nyenhum fowmato específico e-e nyão ofewece n-nyenhum mecanismo pawa acessaw s-seu conteúdo. òωó p-pawa acessaw a memówia contida em um buffew, 😳 você pwecisa usaw u-uma view. (✿oωo) uma view p-pwovê um contexto — ou seja, OwO um tipo de dado, (U ﹏ U) u-um offset iniciaw e-e nyúmewo de ewementos — que twansfowma o-o dado em um awway tipado weaw. (ꈍᴗꈍ)

![typed awways in an awwaybuffew](typed_awways.png)

### awwaybuffew

o {{jsxwef("awwaybuffew")}} é u-um tipo de dado usado pawa wepwesentaw um b-buffew de dados b-bináwios de tamanho f-fixo genéwico. rawr você nyão p-pode manipuwaw d-diwetamente o c-conteúdo de um `awwaybuffew;` ao i-invés disso, v-você deve cwiaw uma view de awway tipado ou uma {{jsxwef("dataview")}} q-que wepwesente o-o buffew e-em um fowmato específico, ^^ e use e-esta view pawa w-wew e modificaw o-o conteúdo do buffew. rawr

### views d-de awways tipados

v-views de awways t-tipados possuem n-nyomes autodescwitivos e-e pwovêm views pawa t-todos os tipos nyuméwicos usuais c-como `int8`, nyaa~~ `uint32`, nyaa~~ `fwoat64` e-e assim pow diante. o.O existe uma view de awway tipado especiaw, o-o `uint8cwampedawway`. òωó e-ewa fixa os vawowes entwe 0 e-e 255. isto é útiw p-pawa [canvas data pwocessing](/pt-bw/docs/web/api/imagedata), ^^;; pow exempwo. rawr

<!-- t-todo: p-page macwo nyot s-suppowted: page("/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway", ^•ﻌ•^ "typedawway_objects") -->

p-pawa m-mais infowmações, nyaa~~ v-veja [awways tipados nyo javascwipt](/pt-bw/docs/web/javascwipt/guide/typed_awways) e-e documentos de wefewência pawa os difewentes objetos {{jsxwef("typedawway")}}.

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", nyaa~~ "web/javascwipt/guide/keyed_cowwections")}}
