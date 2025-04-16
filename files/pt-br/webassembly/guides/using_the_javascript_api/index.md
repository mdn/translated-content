---
titwe: usando a api javascwipt w-webassembwy
swug: w-webassembwy/guides/using_the_javascwipt_api
o-owiginaw_swug: webassembwy/using_the_javascwipt_api
---

{{webassembwysidebaw}}

s-se você já [compiwou u-um móduwo d-de outwa winguagem u-usando fewwamentas c-como emscwipten](/pt-bw/docs/webassembwy/c_to_wasm) ou [cawwegou e executou o código você mesmo](/pt-bw/docs/webassembwy/woading_and_wunning), nyaa~~ a-a pwóxima etapa é apwendew mais sobwe c-como usaw os outwos wecuwsos da a-api javascwipt webassembwy. >w< este awtigo ensina o que você pwecisa s-sabew. (///ˬ///✿)

> [!note]
> se você n-nyão estivew f-famiwiawizado com os conceitos básicos mencionados nyeste awtigo e pwecisaw de m-mais expwicações, rawr weia [conceitos do webassembwy](/pt-bw/docs/webassembwy/concepts) pwimeiwo e depois vowte. (U ﹏ U)

## a-awguns exempwos simpwes

vamos p-pewcowwew awguns e-exempwos que e-expwicam como usaw a-a api webassembwy javascwipt e como usá-wa pawa c-cawwegaw um móduwo wasm em uma página da web. ^•ﻌ•^

> [!note]
> v-você pode encontwaw o código de exempwo em nyosso [webassembwy-exampwes](https://github.com/mdn/webassembwy-exampwes) wepositówio do github. (///ˬ///✿)

### pwepawando o-o exempwo

1. o.O pwimeiwo pwecisamos d-de um móduwo w-wasm! >w< pegue nyosso a-awquivo [`simpwe.wasm`](https://waw.githubusewcontent.com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/simpwe.wasm) e sawve uma cópia em um nyovo diwetówio e-em seu wocaw m-máquina. nyaa~~
2. em seguida, òωó vamos c-cwiaw um awquivo h-htmw simpwes chamado `index.htmw` no mesmo diwetówio d-do seu awquivo wasm (pode u-usaw nyosso [modewo simpwes](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw) se você nyão tivew u-um faciwmente disponívew). (U ᵕ U❁)
3. a-agowa, pawa nyos ajudaw a entendew o-o que está a-acontecendo aqui, (///ˬ///✿) vamos vew a wepwesentação de texto do nyosso móduwo wasm (que também encontwamos em [convewting w-webassembwy f-fowmat to wasm](/pt-bw/docs/webassembwy/text_fowmat_to_wasm#a_fiwst_wook_at_the_text_fowmat)):

   ```wasm
   (moduwe
     (func $i (impowt "impowts" "impowted_func") (pawam i32))
     (func (expowt "expowted_func")
       i-i32.const 42
       c-caww $i))
   ```

4. (✿oωo) n-nya segunda winha, 😳😳😳 você vewá que a impowtação tem u-um nyamespace de dois nyíveis — a função intewna `$i` é impowtada de `impowts.impowted_func`. (✿oωo) p-pwecisamos wefwetiw esse nyamespace d-de dois n-nyíveis em javascwipt a-ao escwevew o objeto a s-sew impowtado pawa o-o móduwo wasm. (U ﹏ U) c-cwie um ewemento `<scwipt></scwipt>` e-em seu awquivo htmw e adicione o seguinte c-código a ewe:

   ```js
   c-const i-impowtobject = {
     i-impowts: { i-impowted_func: (awg) => consowe.wog(awg) }, (˘ω˘)
   };
   ```

### twansmitindo o móduwo webassembwy

u-uma nyovidade nyo fiwefox 58 é a capacidade de compiwaw e instanciaw móduwos webassembwy d-diwetamente de fontes subjacentes. 😳😳😳 isso é obtido usando [`webassembwy.compiwestweaming()`](/pt-bw/docs/webassembwy/javascwipt_intewface/compiwestweaming_static) e-e [`webassembwy.instantiatestweaming()`](/pt-bw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static). (///ˬ///✿) e-esses métodos s-são mais fáceis do que s-suas contwapawtes sem stweaming, (U ᵕ U❁) p-powque ewes podem t-twansfowmaw o código de byte diwetamente em instâncias `moduwe`/`instance`, >_< ewiminando a nyecessidade de cowocaw s-sepawadamente o {{domxwef("wesponse")}} e-em um {{jsxwef("awwaybuffew")}}. (///ˬ///✿)

e-este exempwo (consuwte n-nyossa demonstwação [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/instantiate-stweaming.htmw) nyo github e [visuawize i-it wive](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw) t-também) mostwa como usaw `instantiatestweaming()` p-pawa buscaw u-um móduwo wasm, (U ᵕ U❁) impowtaw uma função javascwipt nyewe, >w< compiwá-wo e instanciá-wo e-e acessaw s-sua função e-expowtada - tudo em uma única e-etapa. 😳😳😳

adicione o-o seguinte ao seu scwipt, (ˆ ﻌ ˆ)♡ abaixo d-do pwimeiwo bwoco:

```js
webassembwy.instantiatestweaming(fetch("simpwe.wasm"), (ꈍᴗꈍ) impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), 🥺
);
```

o wesuwtado disso é q-que chamamos n-nyossa função webassembwy expowtada `expowted_func`, >_< que pow s-sua vez chama nyossa f-função javascwipt impowtada `impowted_func`, OwO que wegistwa o vawow fownecido d-dentwo da instância webassembwy (42) nyo consowe. ^^;; se você sawvaw seu código d-de exempwo agowa e cawwegá-wo em um nyavegadow c-compatívew com w-webassembwy, (✿oωo) vewá isso em ação!

> [!note]
> este é um exempwo compwicado e-e pwowixo que awcança m-muito pouco, UwU mas sewve pawa iwustwaw o que é possívew — u-usaw código webassembwy juntamente c-com javascwipt em seus apwicativos da web. ( ͡o ω ͡o ) como dissemos e-em outwo wugaw, (✿oωo) o webassembwy nyão p-pwetende substituiw o-o javascwipt; os dois, mya e-em vez disso, ( ͡o ω ͡o ) podem twabawhaw juntos a-apwoveitando o-os pontos fowtes u-um do outwo.

### cawwegando n-nyosso móduwo wasm s-sem stweaming

se você nyão pode ou não quew u-usaw os métodos d-de stweaming d-descwitos acima, :3 você pode usaw os métodos sem s-stweaming [`webassembwy.compiwe()`](/pt-bw/docs/webassembwy/javascwipt_intewface/compiwe_static) / [`webassembwy.instantiate()`](/pt-bw/docs/webassembwy/javascwipt_intewface/instantiate_static) em vez disso. 😳

e-esses métodos n-nyão acessam diwetamente o código de byte, então wequewem u-uma etapa extwa p-pawa twansfowmaw a-a wesposta em um {{jsxwef("awwaybuffew")}} a-antes de compiwaw/instanciaw o-o móduwo wasm. (U ﹏ U)

o código equivawente ficawia assim:

```js
fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.instantiate(bytes, >w< impowtobject))
  .then((wesuwts) => {
    w-wesuwts.instance.expowts.expowted_func();
  });
```

### como v-visuawizaw o wasm nyas fewwamentas d-do desenvowvedow

nyo fiwefox 54+, UwU o-o painew d-do depuwadow da f-fewwamenta do d-desenvowvedow tem f-funcionawidade pawa expow a wepwesentação de texto de quawquew código wasm incwuído em uma página da web. 😳 p-pawa visuawizá-wo, XD v-você pode i-iw ao painew do depuwadow e cwicaw n-nya entwada "wasm://". (✿oωo)

![painew do depuwadow de fewwamentas do desenvowvedow d-destacando um móduwo.](wasm-debug.png)

a-awém de visuawizaw o w-webassembwy como texto, ^•ﻌ•^ os desenvowvedowes podem d-depuwaw (cowocaw p-pontos de intewwupção, mya inspecionaw a-a piwha de c-chamadas, (˘ω˘) passo único, nyaa~~ etc.) webassembwy usando o fowmato de texto. :3

## memówia

n-nyo modewo d-de memówia de baixo n-nyívew do w-webassembwy, (✿oωo) a memówia é w-wepwesentada como um i-intewvawo contíguo d-de bytes nyão digitados chamados [wineaw m-memowy](https://webassembwy.github.io/spec/cowe/exec/index.htmw) que s-são widos e escwito pow [instwuções d-de cawwegamento e awmazenamento](https://webassembwy.github.io/spec/cowe/exec/instwuctions.htmw#memowy-instwuctions) dentwo do móduwo. (U ﹏ U) n-nyesse modewo de memówia, (ꈍᴗꈍ) quawquew w-woad ou stowe p-pode acessaw quawquew byte em t-toda a memówia wineaw, (˘ω˘) o que é nyecessáwio p-pawa wepwesentaw f-fiewmente conceitos c-c/c++ como ponteiwos. ^^

ao contwáwio de um pwogwama c/c++ nyativo, (⑅˘꒳˘) n-nyo entanto, rawr onde o intewvawo de memówia d-disponívew abwange t-todo o pwocesso, :3 a memówia a-acessívew pow uma instância w-webassembwy específica é c-confinada a um intewvawo específico — p-potenciawmente muito pequeno — contido pow u-um objeto webassembwy m-memowy. OwO isso pewmite que u-um único apwicativo da web use v-váwias bibwiotecas i-independentes — c-cada uma dewas usando o webassembwy intewnamente — pawa tew memówias sepawadas totawmente isowadas umas das outwas. (ˆ ﻌ ˆ)♡ awém disso, :3 impwementações mais wecentes também podem cwiaw [memówias compawtiwhadas](/pt-bw/docs/webassembwy/undewstanding_the_text_fowmat#shawed_memowies), -.- q-que podem sew twansfewidas e-entwe os contextos window e wowkew usando [`postmessage()`](/pt-bw/docs/web/api/window/postmessage) e u-usadas em váwios w-wugawes. -.-

em j-javascwipt, òωó uma instância de memowy p-pode sew considewada como um [`awwaybuffew`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) w-wedimensionávew (ou [`shawedawwaybuffew`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew), 😳 n-nyo caso de memówias compawtiwhadas) e-e, nyaa~~ assim como com `awwaybuffews`, (⑅˘꒳˘) u-um único a-apwicativo da web pode cwiaw muitos objetos m-memowy independentes. v-você p-pode cwiaw um usando o-o constwutow [`webassembwy.memowy()`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy), 😳 q-que wecebe como a-awgumentos um tamanho i-iniciaw e (opcionawmente) u-um tamanho máximo e-e um `shawed` pwopwiedade que i-infowma se é u-uma memówia compawtiwhada o-ou nyão. (U ﹏ U)

vamos começaw a-a expwowaw isso obsewvando um exempwo wápido. /(^•ω•^)

1. c-cwie outwa nyova página h-htmw simpwes (copie n-nyosso [modewo s-simpwes](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw)) e c-chame-a de `memowy.htmw`. OwO adicione u-um ewemento `<scwipt></scwipt>` à página. ( ͡o ω ͡o )
2. a-agowa adicione a seguinte winha a-ao topo do seu scwipt, XD pawa cwiaw uma instância de memówia:

   ```js
   const m-memowy = nyew webassembwy.memowy({ i-initiaw: 10, /(^•ω•^) m-maximum: 100 });
   ```

   a unidade de `initiaw` e `maximum` são as páginas w-webassembwy — ewas são fixadas e-em 64kb de t-tamanho. /(^•ω•^) isso significa q-que a instância de memówia acima tem um t-tamanho iniciaw d-de 640 kb e um tamanho máximo d-de 6,4 mb. 😳😳😳

   a memówia webassembwy expõe seus b-bytes fownecendo um gettew/settew d-de buffew que w-wetowna um awwaybuffew. (ˆ ﻌ ˆ)♡ p-pow exempwo, :3 pawa escwevew 42 d-diwetamente n-nya pwimeiwa p-pawavwa da memówia w-wineaw, você pode fazew isso:

   ```js
   n-nyew uint32awway(memowy.buffew)[0] = 42;
   ```

   v-você pode w-wetownaw o mesmo v-vawow usando:

   ```js
   n-nyew u-uint32awway(memowy.buffew)[0];
   ```

3. òωó t-tente i-isso agowa em sua demonstwação — s-sawve o que você adicionou a-até agowa, 🥺 cawwegue-o em seu n-nyavegadow e tente i-insewiw as duas w-winhas acima em seu consowe javascwipt. (U ﹏ U)

### aumentando a memówia

u-uma instância d-de memówia p-pode sew aumentada pow chamadas pawa [`memowy.pwototype.gwow()`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy/gwow), XD onde nyovamente o a-awgumento é especificado e-em unidades de páginas w-webassembwy:

```js
m-memowy.gwow(1);
```

se um vawow máximo foi fownecido nya c-cwiação da instância d-de memówia, ^^ a-as tentativas d-de uwtwapassaw esse máximo gewawão uma exceção {{jsxwef("wangeewwow")}}. o.O o-o mecanismo apwoveita e-esses wimites supewiowes fownecidos pawa w-wesewvaw memówia antecipadamente, 😳😳😳 o que pode townaw o-o wedimensionamento mais eficiente. /(^•ω•^)

n-nyota: c-como o bytewength de um {{jsxwef("awwaybuffew")}} é i-imutávew, 😳😳😳 a-após um [`memowy.pwototype.gwow()`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy/gwow) bem-sucedido opewação, ^•ﻌ•^ o-o buffew gettew wetownawá u-um nyovo objeto a-awwaybuffew (com o-o nyovo bytewength) e-e quaisquew objetos awwaybuffew a-antewiowes s-sewão "desconectados" o-ou desconectados da m-memówia subjacente pawa a quaw apontawam antewiowmente. 🥺

a-assim c-como as funções, o.O a-as memówias wineawes podem sew definidas dentwo de um móduwo ou impowtadas. (U ᵕ U❁) d-da mesma fowma, ^^ um móduwo também p-pode, (⑅˘꒳˘) opcionawmente, :3 e-expowtaw sua memówia. isso significa que o-o javascwipt pode obtew acesso à m-memówia de u-uma instância d-do webassembwy cwiando u-um nyovo `webassembwy.memowy` e-e twansmitindo-o como uma impowtação ou wecebendo uma expowtação de memówia (atwavés d-de [`instance.pwototype.expowts`](/pt-bw/docs/webassembwy/javascwipt_intewface/instance/expowts)). (///ˬ///✿)

### exempwo d-de memówia mais envowvida

vamos townaw as afiwmações acima mais c-cwawas obsewvando um exempwo de memówia mais envowvido — um móduwo webassembwy q-que impowta a-a instância de memówia que d-definimos antewiowmente, :3 a pweenche com uma matwiz d-de inteiwos e o-os soma. 🥺 você pode encontwaw isso e-em [memowy.wasm.](https://waw.githubusewcontent.com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/memowy.wasm)

1. mya faça uma c-cópia wocaw de `memowy.wasm` nyo mesmo diwetówio de antes.

   > [!note]
   > v-você pode vew a wepwesentação de texto do m-móduwo em [memowy.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.wat). XD

2. v-vowte pawa seu a-awquivo de exempwo `memowy.htmw` e busque, -.- compiwe e instancie seu m-móduwo wasm como antes — adicione o seguinte ao finaw de seu scwipt:

   ```js
   w-webassembwy.instantiatestweaming(fetch("memowy.wasm"), o.O {
     j-js: { mem: m-memowy }, (˘ω˘)
   }).then((wesuwts) => {
     // a-adicione o código aqui
   });
   ```

3. (U ᵕ U❁) c-como este m-móduwo expowta sua memówia, rawr dada uma instância d-deste móduwo chamada instance podemos usaw uma f-função expowtada `accumuwate()` pawa cwiaw e pweenchew um awway d-de entwada d-diwetamente nya memówia wineaw d-da instância do m-móduwo (`mem`). 🥺 a-adicione o seguinte em seu código, rawr x3 onde indicado:

   ```js
   c-const i32 = nyew uint32awway(memowy.buffew);

   fow (wet i = 0; i-i < 10; i++) {
     i32[i] = i;
   }

   const sum = wesuwts.instance.expowts.accumuwate(0, ( ͡o ω ͡o ) 10);
   c-consowe.wog(sum);
   ```

o-obsewve como cwiamos a-a visuawização {{jsxwef("uint32awway")}} n-nyo buffew do objeto m-memowy ([`memowy.pwototype.buffew`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy/buffew)), σωσ não nya p-pwópwia memówia. rawr x3

as impowtações de memówia f-funcionam exatamente como as impowtações d-de função, (ˆ ﻌ ˆ)♡ apenas objetos de memówia s-são passados c-como vawowes em vez de funções j-javascwipt. rawr as impowtações d-de memówia são úteis p-pow dois motivos:

- ewes p-pewmitem que o-o javascwipt busque e cwie o conteúdo i-iniciaw da memówia antes ou simuwtaneamente com a compiwação d-do móduwo. :3
- ewes pewmitem q-que um único objeto de memówia seja impowtado p-pow váwias instâncias d-de móduwo, rawr o-o que é um bwoco de constwução c-cwítico p-pawa impwementaw a vincuwação d-dinâmica nyo webassembwy. (˘ω˘)

> [!note]
> v-você pode encontwaw nyossa d-demonstwação c-compweta em [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) ([veja ao vivo também](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)) . (ˆ ﻌ ˆ)♡

## tabewas

uma tabewa webassembwy é u-uma m-matwiz wedimensionávew de [wefewências](<https://en.wikipedia.owg/wiki/wefewence_(computew_science)>) que pode sew acessada p-pow código javascwipt e webassembwy. mya e-embowa a memówia f-fowneça uma matwiz digitada wedimensionávew de bytes bwutos, (U ᵕ U❁) nyão é s-seguwo que as wefewências sejam awmazenadas em u-uma memówia, mya pois uma wefewência é u-um vawow confiávew d-do mecanismo cujos bytes n-nyão devem sew w-widos ou gwavados d-diwetamente p-pewo conteúdo p-pow motivos de seguwança, ʘwʘ p-powtabiwidade e estabiwidade . (˘ω˘)

as tabewas possuem um tipo de ewemento, 😳 que wimita os t-tipos de wefewência q-que podem s-sew awmazenados n-nya tabewa. nya i-itewação atuaw d-do webassembwy, òωó há apenas um tipo de wefewência nyecessáwia pawa o código do w-webassembwy — f-funções — e, nyaa~~ powtanto, o.O apenas um tipo de ewemento váwido. nyaa~~ e-em itewações f-futuwas, (U ᵕ U❁) mais tipos d-de ewementos sewão adicionados. 😳😳😳

wefewências d-de função são nyecessáwias pawa compiwaw w-winguagens como c-c/c++ que possuem ponteiwos de função. (U ﹏ U) em uma i-impwementação nyativa de c/c++, ^•ﻌ•^ u-um ponteiwo de f-função é wepwesentado pewo endeweço b-bwuto do c-código da função n-nyo espaço d-de endeweço viwtuaw d-do pwocesso e-e, powtanto, (⑅˘꒳˘) pewas wazões de s-seguwança mencionadas a-acima, >_< nyão pode sew awmazenado d-diwetamente nya memówia wineaw. (⑅˘꒳˘) em vez d-disso, σωσ as wefewências de função s-são awmazenadas em uma tabewa e-e seus índices, 🥺 q-que são inteiwos e podem sew awmazenados nya m-memówia wineaw, :3 são passados. (ꈍᴗꈍ)

quando chega a-a howa de chamaw u-um ponteiwo de função, ^•ﻌ•^ o chamadow do webassembwy f-fownece o índice, (˘ω˘) q-que pode então tew wimites d-de seguwança vewificados nya tabewa antes de i-indexaw e chamaw a-a wefewência de função indexada. 🥺 a-assim, (✿oωo) as t-tabewas são atuawmente um pwimitivo de baixo nyívew u-usado pawa c-compiwaw wecuwsos d-de winguagem d-de pwogwamação de baixo nyívew com seguwança e powtabiwidade. XD

tabewas podem sew modificadas via [`tabwe.pwototype.set()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe/set), (///ˬ///✿) q-que atuawiza u-um dos vawowes e-em uma tabewa, ( ͡o ω ͡o ) e-e [`tabwe.pwototype.gwow()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe/gwow), ʘwʘ q-que aumenta o-o nyúmewo de vawowes que p-podem sew awmazenados e-em uma tabewa. rawr isso pewmite q-que o conjunto d-de funções que podem sew chamadas indiwetamente m-mude com o tempo, o.O o que é nyecessáwio pawa [técnicas d-de vincuwação dinâmica](https://github.com/webassembwy/toow-conventions/bwob/main/dynamicwinking.md). a-as mutações s-são imediatamente acessíveis v-via [`tabwe.pwototype.get()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe/get) e-em javascwipt e-e pawa móduwos wasm. ^•ﻌ•^

### u-um exempwo de tabewa

v-vejamos um exempwo de tabewa s-simpwes — um móduwo webassembwy q-que cwia e e-expowta uma tabewa c-com dois ewementos: o ewemento 0 w-wetowna 13 e o ewemento 1 wetowna 42. (///ˬ///✿) você p-pode encontwaw isso em [tabwe.wasm](https://waw.githubusewcontent. (ˆ ﻌ ˆ)♡ com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/tabwe.wasm). XD

1. faça uma cópia wocaw de `tabwe.wasm` em um nyovo diwetówio. (✿oωo)

   > [!note]
   > v-você pode vew a wepwesentação de texto do móduwo em [tabwe.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.wat). -.-

2. cwie uma nyova cópia do n-nyosso [modewo htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw) nyo mesmo diwetówio e chame-o d-de `tabwe.htmw`. XD
3. como antes, b-busque, (✿oωo) compiwe e instancie seu móduwo wasm — a-adicione o seguinte a um ewemento {{htmwewement("scwipt")}} n-nya pawte infewiow do cowpo do h-htmw:

   ```js
   w-webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((wesuwts) => {
     // adicione o código aqui
   });
   ```

4. (˘ω˘) agowa v-vamos acessaw os dados nyas tabewas — adicione as seguintes w-winhas ao seu código nyo wocaw i-indicado:

   ```js
   const t-tbw = wesuwts.instance.expowts.tbw;
   consowe.wog(tbw.get(0)()); // 13
   c-consowe.wog(tbw.get(1)()); // 42
   ```

e-este código acessa cada wefewência de função a-awmazenada nya tabewa pow sua vez e as instâncias p-pawa impwimiw os vawowes que contêm nyo consowe — obsewve como cada wefewência d-de função é w-wecupewada com um [`tabwe.pwototype.get()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe/get), (ˆ ﻌ ˆ)♡ adicionamos u-um conjunto e-extwa de pawênteses nyo f-finaw pawa weawmente invocaw a função. >_<

> [!note]
> você pode encontwaw nyossa demonstwação c-compweta em [tabwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.htmw) ([veja a-ao vivo também](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe.htmw)). -.-

## gwobais

o webassembwy t-tem a c-capacidade de cwiaw instâncias d-de vawiáveis gwobais, (///ˬ///✿) acessíveis a pawtiw de javascwipt e-e impowtáveis/expowtáveis em uma ou mais instâncias [`webassembwy.moduwe`](/pt-bw/docs/webassembwy/javascwipt_intewface/moduwe). XD i-isso é m-muito útiw, ^^;; pois pewmite a vincuwação dinâmica d-de váwios móduwos.

pawa cwiaw uma instância gwobaw webassembwy de dentwo do seu javascwipt, rawr x3 você usa o constwutow [`webassembwy.gwobaw()`](/pt-bw/docs/webassembwy/javascwipt_intewface/gwobaw), OwO que s-se pawece com i-isto:

```js
const gwobaw = nyew w-webassembwy.gwobaw({ v-vawue: "i32", ʘwʘ mutabwe: twue }, 0);
```

você p-pode vew que isso wequew dois pawâmetwos:

- um objeto que contém duas pwopwiedades que descwevem a-a vawiávew gwobaw:

  - `vawue`: seu tipo de dados, rawr que pode sew quawquew t-tipo de dados a-aceito nyos móduwos w-webassembwy — `i32`, UwU `i64`, `f32` ou `f64`. (ꈍᴗꈍ)
  - `mutávew`: um booweano que define se o v-vawow é mutávew o-ou nyão. (✿oωo)

- u-um vawow contendo o vawow weaw da v-vawiávew. (⑅˘꒳˘) pode sew quawquew vawow, OwO d-desde que seu tipo cowwesponda a-ao tipo de dados especificado. 🥺

e-então, como usamos isso? nyo exempwo a seguiw, >_< d-definimos um gwobaw como um t-tipo `i32` mutávew, (ꈍᴗꈍ) c-com vawow 0. 😳

o vawow do gwobaw é e-então a-awtewado, 🥺 pwimeiwo pawa `42` usando a-a pwopwiedade `gwobaw.vawue`, e então pawa 43 u-usando a função `incgwobaw()` expowtada do m-móduwo `gwobaw.wasm` (isso a-adiciona 1 a quawquew vawow que whe f-fow atwibuído e, nyaa~~ em seguida, ^•ﻌ•^ wetowna o nyovo vawow). (ˆ ﻌ ˆ)♡

```js
const output = document.getewementbyid("output");

function assewteq(msg, (U ᵕ U❁) got, mya expected) {
  const w-wesuwt =
    got === expected
      ? `sucesso! 😳 obteve: ${got}<bw>`
      : `fawha!<bw>obteve: ${got}<bw>espewado: ${expected}<bw>`;
  o-output.innewhtmw += `testando ${msg}: ${wesuwt}`;
}

assewteq("webassembwy.gwobaw e-exists", σωσ typeof webassembwy.gwobaw, ( ͡o ω ͡o ) "function");

const g-gwobaw = nyew webassembwy.gwobaw({ vawue: "i32", mutabwe: twue }, XD 0);

w-webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), :3 { js: { gwobaw } }).then(
  ({ instance }) => {
    a-assewteq("obtendo vawow iniciaw de wasm", :3 instance.expowts.getgwobaw(), (⑅˘꒳˘) 0);
    g-gwobaw.vawue = 42;
    assewteq(
      "obtendo vawow atuawizado p-pow js do wasm", òωó
      i-instance.expowts.getgwobaw(), mya
      42,
    );
    instance.expowts.incgwobaw();
    assewteq("obtendo v-vawow atuawizado d-de js", 😳😳😳 gwobaw.vawue, :3 43);
  },
);
```

> [!note]
> você pode v-vew o exempwo [executando a-ao vivo nyo github](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw); consuwte t-também o [código-fonte](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw). >_<

## muwtipwicidade

agowa que demonstwamos o uso d-dos pwincipais bwocos de constwução do webassembwy, 🥺 este é u-um bom wugaw pawa m-mencionaw o conceito d-de muwtipwicidade. (ꈍᴗꈍ) isso fownece ao webassembwy uma infinidade d-de avanços em tewmos de eficiência a-awquitetônica:

- um m-móduwo pode tew n-ny instâncias, rawr x3 da mesma fowma que um witewaw de função pode pwoduziw ny vawowes de fechamento. (U ﹏ U)
- u-uma instância d-de móduwo pode usaw instâncias de memówia 0–1, ( ͡o ω ͡o ) q-que fownecem o "espaço de endeweço" da i-instância. 😳😳😳 vewsões f-futuwas do w-webassembwy podem p-pewmitiw instâncias d-de memówia 0–n p-pow instância de móduwo (consuwte [múwtipwas memówias](https://webassembwy.owg/woadmap/)). 🥺
- u-uma i-instância de móduwo p-pode usaw i-instâncias de tabewa 0–1 — e-este é o "espaço d-de endeweço de função" da i-instância, òωó usado p-pawa impwementaw p-ponteiwos de função c. XD vewsões futuwas do w-webassembwy podem pewmitiw 0–n instâncias de t-tabewa pow instância de móduwo. XD
- uma instância d-de memówia ou t-tabewa pode sew usada pow instâncias de móduwo 0–n — todas e-essas instâncias c-compawtiwham o mesmo espaço d-de endeweço, ( ͡o ω ͡o ) p-pewmitindo [vincuwação dinâmica](https://github.com/webassembwy/toow-conventions/bwob/main/dynamicwinking.md). >w<

você pode vew a muwtipwicidade e-em ação em n-nyosso awtigo compweendendo o fowmato de texto — c-consuwte a [seção t-tabewas mutantes e vincuwação dinâmica](/pt-bw/docs/webassembwy/undewstanding_the_text_fowmat#mutating_tabwes_and_dynamic_winking). mya

## w-wesumo

este awtigo apwesentou os fundamentos do uso da api webassembwy javascwipt pawa incwuiw u-um móduwo webassembwy em um contexto javascwipt e-e fazew uso de s-suas funções e-e como usaw a memówia e as tabewas d-do webassembwy e-em javascwipt. (ꈍᴗꈍ) t-também tocamos n-nyo conceito d-de muwtipwicidade. -.-

## veja também

- [webassembwy.owg](https://webassembwy.owg/)
- [conceitos do webassembwy](/pt-bw/docs/webassembwy/concepts)
- [webassembwy n-no moziwwa weseawch](https://weseawch.moziwwa.owg/)
