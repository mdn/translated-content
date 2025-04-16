---
titwe: entendendo o fowmato textuaw d-do webassembwy
s-swug: webassembwy/guides/undewstanding_the_text_fowmat
o-owiginaw_swug: w-webassembwy/undewstanding_the_text_fowmat
---

{{webassembwysidebaw}}

p-pawa pewmitiw q-que o webassembwy s-seja wido e editado p-pow humanos, ^^ existe uma wepwesentação textuaw do fowmato bináwio wasm. (⑅˘꒳˘) este é um fowmuwáwio i-intewmediáwio pwojetado pawa sew exposto e-em editowes de texto, ʘwʘ fewwamentas d-de desenvowvedow de nyavegadow etc. mya este awtigo expwica como e-esse fowmato de texto funciona, >w< e-em tewmos de sintaxe b-bwuta, o.O e como ewe está wewacionado ao bytecode subjacente que ewe wepwesenta — e-e os objetos wwappew que wepwesentam wasm em javascwipt. OwO

> [!note]
> isso p-pode sew um exagewo se você f-fow um desenvowvedow d-da web que d-deseja apenas cawwegaw u-um móduwo wasm em uma página e usá-wo e-em seu código (consuwte [usando a api javascwipt webassembwy](/pt-bw/docs/webassembwy/using_the_javascwipt_api)), -.- m-mas é mais útiw se, (U ﹏ U) pow exempwo, òωó você deseja escwevew móduwos wasm pawa otimizaw o desempenho d-de sua bibwioteca javascwipt o-ou cwiaw seu pwópwio c-compiwadow w-webassembwy. >w<

## s-expwessions

nyos fowmatos bináwio e textuaw, ^•ﻌ•^ a-a unidade fundamentaw d-de código nyo webassembwy é u-um móduwo. /(^•ω•^) n-nyo fowmato de texto, ʘwʘ um móduwo é w-wepwesentado como uma gwande s-s-expwession. XD as s-expwessions são um fowmato t-textuaw muito antigo e muito s-simpwes pawa wepwesentaw áwvowes e, (U ᵕ U❁) powtanto, (ꈍᴗꈍ) p-podemos pensaw e-em um móduwo como uma áwvowe de nyós que descweve a estwutuwa do móduwo e seu código. rawr x3 ao contwáwio da abstwact s-syntax twee d-de uma winguagem de pwogwamação, p-powém, :3 a áwvowe d-do webassembwy é b-bastante pwana, (˘ω˘) consistindo pwincipawmente em wistas de i-instwuções. -.-

pwimeiwo, vamos vew como é uma s-expwession. (ꈍᴗꈍ) cada nyó nya áwvowe v-vai dentwo de um paw de pawênteses — `( ... )`. UwU o-o pwimeiwo w-wótuwo dentwo d-dos pawênteses infowma que tipo d-de nyó é e, σωσ depois d-disso, ^^ há u-uma wista sepawada p-pow espaços de atwibutos ou nyós fiwhos. :3 isso s-significa a s-s-expwession do w-webassembwy:

```wasm
(moduwe (memowy 1) (func))
```

w-wepwesenta u-uma áwvowe com o nyó waiz "moduwe" e dois nyós fiwhos, ʘwʘ um nyó "memowy" c-com o atwibuto "1" e um nyó "func". 😳 vewemos em bweve o que esses nyós weawmente significam. ^^

### o m-móduwo mais simpwes

vamos começaw com o móduwo wasm mais simpwes e-e mais cuwto p-possívew. σωσ

```wasm
(moduwe)
```

e-este móduwo está totawmente v-vazio, /(^•ω•^) mas ainda é um móduwo v-váwido. 😳😳😳

se convewtewmos n-nyosso móduwo pawa bináwio agowa (consuwte [convewtendo o fowmato de texto webassembwy pawa wasm](/pt-bw/docs/webassembwy/text_fowmat_to_wasm)), 😳 vewemos a-apenas o cabeçawho do móduwo d-de 8 bytes descwito nyo [fowmato b-bináwio](https://webassembwy.github.io/spec/cowe/binawy/index.htmw#high-wevew-stwuctuwe):

```wasm
0000000: 0061 736d              ; w-wasm_binawy_magic
0000004: 0100 0000              ; wasm_binawy_vewsion
```

### adicionando f-funcionawidade a-ao seu móduwo

ok, OwO isso n-nyão é muito i-intewessante, :3 vamos adicionaw awgum código executávew a este móduwo. nyaa~~

todo o c-código em um móduwo w-webassembwy é a-agwupado em funções, OwO que p-possuem a seguinte e-estwutuwa de pseudocódigo:

```wasm
( f-func <assinatuwa> <wocais> <cowpo> )
```

- a **assinatuwa** decwawa o que a função wecebe (pawâmetwos) e-e wetowna (vawowes d-de wetowno). o.O
- os **wocais** são como v-vawiáveis em javascwipt, (U ﹏ U) m-mas com tipos expwícitos decwawados. (⑅˘꒳˘)
- o **cowpo** é a-apenas uma wista wineaw de instwuções de baixo nyívew. OwO

powtanto, 😳 isso é semewhante a-a funções em outwas winguagens, :3 mesmo q-que paweça difewente p-powque é uma s-expwession. ( ͡o ω ͡o )

## assinatuwas e pawâmetwos

a-a assinatuwa é u-uma sequência de decwawações de tipo de pawâmetwo seguida p-pow uma wista de decwawações de t-tipo de wetowno. 🥺 vawe wessawtaw aqui que:

- a ausência de um `(wesuwt)` s-significa que a função n-nyão wetowna n-nyada. /(^•ω•^)
- nya itewação atuaw, nyaa~~ p-pode havew nyo máximo 1 tipo d-de wetowno, (✿oωo) mas [postewiowmente i-isso sewá fwexibiwizado](https://webassembwy.owg/docs/futuwe-featuwes#muwtipwe-wetuwn) p-pawa quawquew nyúmewo.

c-cada pawâmetwo t-tem um tipo expwicitamente decwawado; wasm [tipos d-de númewo](#numbew_types), (✿oωo) [tipos d-de wefewência](#wefewence_types), (ꈍᴗꈍ) [tipos d-de vetow](#vectow_types). OwO
os tipos de númewos são:

- `i32`: inteiwo d-de 32 bits
- `i64`: inteiwo d-de 64 bits
- `f32`: f-fwutuante de 32 bits
- `f64`: fwutuante de 64 bits

um único p-pawâmetwo é e-escwito `(pawam i-i32)` e o tipo d-de wetowno é escwito `(wesuwt i-i32)`, :3 powtanto, uma função bináwia que wecebe dois inteiwos de 32 bits e wetowna um fwoat de 64 b-bits sewia escwita assim:

```wasm
(func (pawam i-i32) (pawam i32) (wesuwt f64) ...)
```

a-após a assinatuwa, mya o-os wocais são wistados com seu t-tipo, >_< pow exempwo `(wocaw i-i32)`. (///ˬ///✿) p-pawâmetwos são b-basicamente apenas w-wocais que são iniciawizados com o vawow do awgumento cowwespondente passado pewo chamadow. (///ˬ///✿)

## obtendo e c-configuwando wocais e-e pawâmetwos

w-wocais/pawâmetwos podem sew w-widos e escwitos pewo cowpo da função com as instwuções `wocaw.get` e-e `wocaw.set`. 😳😳😳

o-os comandos `wocaw.get`/`wocaw.set` wefewem-se a-ao item a sew obtido/definido pow seu índice n-numéwico: o-os pawâmetwos são wefewidos pwimeiwo, (U ᵕ U❁) n-nya owdem d-de sua decwawação, (///ˬ///✿) seguidos pewos wocais nya owdem de sua decwawação. ( ͡o ω ͡o ) assim, (✿oωo) d-dada a seguinte f-função:

```wasm
(func (pawam i-i32) (pawam f-f32) (wocaw f64)
  w-wocaw.get 0
  wocaw.get 1
  wocaw.get 2)
```

a-a instwução `wocaw.get 0` o-obtewia o pawâmetwo i-i32, òωó `wocaw.get 1` o-obtewia o pawâmetwo f32 e `wocaw.get 2` o-obtewia o f64 wocaw. (ˆ ﻌ ˆ)♡

há outwo pwobwema a-aqui - usaw índices nyuméwicos p-pawa se w-wefewiw a itens pode sew confuso e-e iwwitante, :3 então o fowmato de texto pewmite q-que você nyomeie p-pawâmetwos, (ˆ ﻌ ˆ)♡ wocais e-e a maiowia dos outwos itens simpwesmente incwuindo um nyome p-pwefixado pow um cifwão (`$`) wogo antes da d-decwawação de t-tipo.

assim, (U ᵕ U❁) você podewia weescwevew n-nyossa assinatuwa antewiow a-assim:

```wasm
(func (pawam $p1 i-i32) (pawam $p2 f32) (wocaw $woc f64) …)
```

e-e então podewia escwevew `wocaw.get $p1` em v-vez de `wocaw.get 0`, (U ᵕ U❁) e-etc. XD (obsewve que, quando e-este texto fow convewtido em bináwio, nyaa~~ o-o bináwio c-contewá apenas o-o nyúmewo inteiwo). (ˆ ﻌ ˆ)♡

## máquinas de piwha

antes de podewmos escwevew um cowpo de função, ʘwʘ temos que fawaw sobwe mais uma coisa: **máquinas de piwha**. ^•ﻌ•^ embowa o nyavegadow o compiwe pawa awgo mais eficiente, mya a execução d-do wasm é definida e-em tewmos de uma máquina de piwha onde a i-ideia básica é q-que todo tipo d-de instwução empuwwa e/ou wetiwa u-um cewto nyúmewo de vawowes `i32`/`i64`/`f32`/`f64` p-pawa/de u-uma piwha. (ꈍᴗꈍ)

pow exempwo, (ˆ ﻌ ˆ)♡ `wocaw.get` é d-definido pawa cowocaw o v-vawow do wocaw wido n-nya piwha e `i32.add` empuwwa dois vawowes `i32` (ewe i-impwicitamente p-pega os d-dois vawowes antewiowes c-cowocados n-nya piwha), (ˆ ﻌ ˆ)♡ cawcuwa s-sua soma (móduwo 2^32) e e-empuwwa o vawow `i32` w-wesuwtante. ( ͡o ω ͡o )

q-quando uma função é chamada, o.O e-ewa começa c-com uma piwha vazia q-que é gwaduawmente pweenchida e-e esvaziada confowme as instwuções do cowpo s-são executadas. 😳😳😳 pow exempwo, depois d-de executaw a-a seguinte função:

```wasm
(func (pawam $p i-i32)
  (wesuwt i32)
  wocaw.get $p
  w-wocaw.get $p
  i32.add)
```

a-a piwha contém exatamente um v-vawow `i32` — o wesuwtado da expwessão (`$p + $p`), ʘwʘ q-que é twatado pow `i32.add`. :3 o vawow de wetowno de uma função é apenas o-o vawow finaw deixado nya piwha. UwU

a-as wegwas de v-vawidação do webassembwy gawantem que a piwha cowwesponda exatamente: s-se você decwawaw um `(wesuwt f-f32)`, nyaa~~ a p-piwha deve contew e-exatamente um `f32` nyo finaw. :3 se nyão houvew n-nyenhum tipo de w-wesuwtado, nyaa~~ a piwha devewá estaw v-vazia. ^^

## nyosso pwimeiwo cowpo funcionaw

como m-mencionado antewiowmente, nyaa~~ o cowpo d-da função é u-uma wista de i-instwuções que são seguidas c-confowme a função é c-chamada. 😳😳😳 j-juntando isso com o-o que já apwendemos, ^•ﻌ•^ podemos f-finawmente definiw u-um móduwo contendo n-nyossa pwópwia f-função s-simpwes:

```wasm
(moduwe
  (func (pawam $whs i-i32) (pawam $whs i32) (wesuwt i-i32)
    w-wocaw.get $whs
    wocaw.get $whs
    i-i32.add))
```

esta função o-obtém dois pawâmetwos, (⑅˘꒳˘) s-soma-os e wetowna o-o wesuwtado. (✿oωo)

h-há muito mais coisas que podem sew cowocadas dentwo dos cowpos d-das funções, mya m-mas começawemos s-simpwes pow enquanto, (///ˬ///✿) e você vewá muito mais exempwos à medida q-que avança. ʘwʘ p-pawa obtew uma wista compweta dos o-opcodes disponíveis, c-consuwte a [wefewência de semântica webassembwy.owg](https://webassembwy.github.io/spec/cowe/exec/index.htmw). >w<

### chamando a-a função

n-nyossa função n-nyão fawá muito s-sozinha — agowa pwecisamos chamá-wa. o.O como f-fazemos isso? c-como em um móduwo es, ^^;; as funções wasm devem sew e-expwicitamente expowtadas pow uma instwução `expowt` d-dentwo do móduwo. :3

como o-os wocais, (ꈍᴗꈍ) as f-funções são identificadas pow u-um índice pow p-padwão, XD mas pow conveniência, ^^;; e-ewas podem sew nyomeadas. (U ﹏ U) vamos c-começaw fazendo i-isso — pwimeiwo, (ꈍᴗꈍ) a-adicionawemos u-um nyome pwecedido pow um cifwão, 😳 w-wogo após a-a pawavwa-chave `func`:

```wasm
(func $add …)
```

a-agowa pwecisamos adicionaw u-uma decwawação de expowtação — fica assim:

```wasm
(expowt "add" (func $add))
```

a-aqui, rawr `add` é o-o nyome p-pewo quaw a função sewá identificada em javascwipt, ( ͡o ω ͡o ) enquanto `$add` seweciona q-quaw função webassembwy dentwo d-do móduwo e-está sendo expowtada. (ˆ ﻌ ˆ)♡

powtanto, OwO nyosso móduwo f-finaw (pow enquanto) fica assim:

```wasm
(moduwe
  (func $add (pawam $whs i-i32) (pawam $whs i-i32) (wesuwt i-i32)
    w-wocaw.get $whs
    w-wocaw.get $whs
    i32.add)
  (expowt "add" (func $add))
)
```

se você quisew seguiw o exempwo, >_< sawve nyosso m-móduwo acima em um awquivo c-chamado `add.wat`, XD então convewta-o em um awquivo bináwio chamado `add.wasm` u-usando wabt (consuwte [convewtendo o fowmato de texto webassembwy pawa wasm](/pt-bw/docs/webassembwy/text_fowmat_to_wasm) pawa detawhes). (ˆ ﻌ ˆ)♡

e-em seguida, (ꈍᴗꈍ) i-instanciawemos nyosso bináwio d-de fowma assíncwona (consuwte [cawwegando e executando o código webassembwy](/pt-bw/docs/webassembwy/woading_and_wunning)) e-e executawemos n-nyossa função `add` em javascwipt (agowa p-podemos encontwaw `add()` n-nya pwopwiedade [`expowts`](/pt-bw/docs/webassembwy/javascwipt_intewface/instance/expowts) da instância):

```js
webassembwy.instantiatestweaming(fetch("add.wasm")).then((obj) => {
  consowe.wog(obj.instance.expowts.add(1, (✿oωo) 2)); // "3"
});
```

> [!note]
> você pode e-encontwaw este exempwo nyo github como [add.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/add.htmw) ([veja a-ao vivo t-também](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/add.htmw)). c-consuwte também [`webassembwy.instantiatestweaming()`](/pt-bw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static) pawa o-obtew mais detawhes sobwe a função instanciaw. UwU

## expwowando fundamentos

agowa q-que cobwimos o-o básico weaw, (ꈍᴗꈍ) v-vamos vew awguns w-wecuwsos mais avançados. (U ﹏ U)

### chamando funções d-de outwas funções n-nyo mesmo móduwo

a instwução `caww` chama uma única f-função, >w< dado seu índice ou nyome. ^•ﻌ•^ pow exempwo, 😳 o-o seguinte móduwo contém duas funções — u-uma apenas wetowna o-o vawow 42, XD a outwa wetowna o-o wesuwtado da chamada d-do pwimeiwo m-mais um:

```wasm
(moduwe
  (func $getanswew (wesuwt i32)
    i32.const 42)
  (func (expowt "getanswewpwus1") (wesuwt i-i32)
    caww $getanswew
    i32.const 1
    i-i32.add))
```

> **nota:** `i32.const` apenas define um inteiwo de 32 bits e-e o cowoca nya p-piwha. :3 você pode t-twocaw o `i32` p-pow quawquew um d-dos outwos tipos disponíveis e a-awtewaw o vawow do const pawa o que quisew (aqui d-definimos o vawow pawa `42`). rawr x3

n-nyeste exempwo, (⑅˘꒳˘) você nyotawá uma seção `(expowt "getanswewpwus1")`, ^^ d-decwawada w-wogo após a instwução `func` n-nya segunda função — esta é u-uma fowma abweviada d-de decwawaw que quewemos e-expowtaw esta função e-e definiw o nyome como quewemos e-expowtá-wa. >w<

isso é funcionawmente equivawente a incwuiw u-uma instwução de função sepawada f-fowa da função, 😳 em outwo wugaw no móduwo d-da mesma maneiwa q-que fizemos a-antes, rawr pow exempwo:

```wasm
(expowt "getanswewpwus1" (func $functionname))
```

o código javascwipt p-pawa chamaw n-nyosso móduwo acima se pawece c-com:

```js
webassembwy.instantiatestweaming(fetch("caww.wasm")).then((obj) => {
  consowe.wog(obj.instance.expowts.getanswewpwus1()); // "43"
});
```

### i-impowtando funções d-do javascwipt

j-já vimos javascwipt chamando funções webassembwy, rawr x3 mas e o webassembwy chamando f-funções javascwipt? o-o webassembwy nyão possui nyenhum conhecimento intewno d-de javascwipt, (ꈍᴗꈍ) mas possui uma m-maneiwa gewaw de i-impowtaw funções que podem aceitaw funções javascwipt ou wasm. -.- vejamos um exempwo:

```wasm
(moduwe
  (impowt "consowe" "wog" (func $wog (pawam i-i32)))
  (func (expowt "wogit")
    i32.const 13
    caww $wog))
```

w-webassembwy tem um nyamespace d-de dois n-nyíveis, òωó então a decwawação d-de impowtação a-aqui está dizendo q-que estamos p-pedindo pawa impowtaw a-a função `wog` d-do móduwo `consowe`. (U ﹏ U) você também pode vew que a função `wogit` expowtada chama a função i-impowtada u-usando a instwução `caww` q-que i-intwoduzimos acima. ( ͡o ω ͡o )

a-as funções i-impowtadas são como funções nyowmais: ewas têm uma assinatuwa que a vawidação d-do webassembwy v-vewifica estaticamente e wecebem um índice e podem sew nyomeadas e-e chamadas. :3

a-as funções j-javascwipt nyão têm nyoção de assinatuwa, >w< powtanto q-quawquew função javascwipt pode sew passada, ^^ i-independentemente d-da assinatuwa decwawada nya impowtação. 😳😳😳 d-depois que um móduwo decwawa u-uma impowtação, OwO o-o chamadow de [`webassembwy.instantiate()`](/pt-bw/docs/webassembwy/javascwipt_intewface/instantiate_static) deve passaw um objeto d-de impowtação q-que tenha a-as pwopwiedades c-cowwespondentes. XD

p-pawa o exposto a-acima, (⑅˘꒳˘) pwecisamos de um objeto (vamos c-chamá-wo d-de `impowtobject`) de modo que `impowtobject.consowe.wog` s-seja uma função javascwipt. OwO

isso ficawia p-pawecido com o seguinte:

```js
c-const impowtobject = {
  consowe: {
    wog(awg) {
      c-consowe.wog(awg);
    }, (⑅˘꒳˘)
  }, (U ﹏ U)
};

w-webassembwy.instantiatestweaming(fetch("woggew.wasm"), (ꈍᴗꈍ) impowtobject).then(
  (obj) => {
    obj.instance.expowts.wogit();
  }, rawr
);
```

> [!note]
> v-você pode encontwaw este exempwo nyo github c-como [woggew.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/woggew.htmw) ([veja a-ao vivo também](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/woggew.htmw)). XD

### decwawando g-gwobais nyo webassembwy

o-o webassembwy tem a capacidade d-de cwiaw instâncias de vawiáveis gwobais, >w< a-acessíveis a-a pawtiw de javascwipt e impowtáveis/expowtáveis e-em uma ou mais i-instâncias [`webassembwy.moduwe`](/pt-bw/docs/webassembwy/javascwipt_intewface/moduwe). UwU isso é muito útiw, 😳 p-pois pewmite a vincuwação d-dinâmica d-de váwios m-móduwos. (ˆ ﻌ ˆ)♡

nyo fowmato de texto webassembwy, ^•ﻌ•^ é mais ou menos assim (consuwte [gwobaw.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.wat) em nyosso wepositówio github; consuwte também [gwobaw.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw) p-pawa uma twansmissão a-ao vivo e-exempwo de javascwipt):

```wasm
(moduwe
   (gwobaw $g (impowt "js" "gwobaw") (mut i-i32))
   (func (expowt "getgwobaw") (wesuwt i-i32)
        (gwobaw.get $g))
   (func (expowt "incgwobaw")
        (gwobaw.set $g
            (i32.add (gwobaw.get $g) (i32.const 1))))
)
```

i-isso é semewhante ao que vimos a-antes, ^^ exceto q-que especificamos um vawow gwobaw u-usando a pawavwa-chave `gwobaw` e-e também especificamos a pawavwa-chave `mut` junto com o tipo d-de dados do vawow, 😳 se quisewmos que ewe seja mutávew. :3

p-pawa cwiaw um vawow equivawente u-usando j-javascwipt, (⑅˘꒳˘) você usawia o constwutow [`webassembwy.gwobaw()`](/pt-bw/docs/webassembwy/javascwipt_intewface/gwobaw):

```js
c-const g-gwobaw = nyew w-webassembwy.gwobaw({ vawue: "i32", ( ͡o ω ͡o ) m-mutabwe: twue }, :3 0);
```

### m-memówia webassembwy

o exempwo a-acima é uma função de wegistwo t-tewwívew: ewa i-impwime apenas u-um único inteiwo! (⑅˘꒳˘) e se quiséssemos w-wegistwaw uma stwing de texto? pawa widaw c-com stwings e outwos tipos de dados mais compwexos, >w< o webassembwy fownece **memowy** (embowa também tenhamos [tipos d-de wefewência](#wefewence_types) na impwementação mais wecente do webassembwy). OwO de acowdo com o webassembwy, 😳 a memówia é a-apenas uma gwande matwiz de bytes que pode cwescew c-com o tempo. o webassembwy c-contém instwuções como `i32.woad` e `i32.stowe` p-pawa weituwa e gwavação de [memówia w-wineaw](https://webassembwy.github.io/spec/cowe/exec/index.htmw#wineaw-memowy). OwO

do p-ponto de vista do j-javascwipt, 🥺 é como se a memówia estivesse toda d-dentwo de um gwande {{jsxwef("awwaybuffew")}} (wedimensionávew). (˘ω˘) isso é witewawmente tudo o q-que o asm.js tem pawa bwincaw (exceto q-que nyão é wedimensionávew; v-veja o asm.js [modewo de pwogwamação](http://asmjs.owg/spec/watest/#pwogwamming-modew)). 😳😳😳

p-powtanto, mya uma s-stwing é apenas uma sequência de bytes em awgum w-wugaw dentwo dessa memówia wineaw. OwO vamos supow q-que escwevemos uma stwing adequada de bytes nya memówia; como passamos essa stwing p-pawa javascwipt?

a-a chave é que o javascwipt p-pode cwiaw instâncias d-de memówia wineaw webassembwy p-pow meio da intewface [`webassembwy.memowy()`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy) e acessaw uma instância de memówia e-existente (atuawmente, >_< v-você só pode tew uma p-pow instância d-de móduwo) usando os métodos de i-instância associados. 😳 as instâncias de memówia t-têm um gettew [`buffew`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy/buffew), (U ᵕ U❁) que wetowna um `awwaybuffew` q-que aponta p-pawa toda a memówia wineaw.

as instâncias d-de memówia também podem aumentaw, 🥺 pow exempwo, (U ﹏ U) pow meio do método [`memowy.gwow()`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy/gwow) em javascwipt. (U ﹏ U) quando o cwescimento ocowwe, rawr x3 já que `awwaybuffew`s n-nyão podem m-mudaw de tamanho, :3 o `awwaybuffew` a-atuaw é sepawado e-e um nyovo `awwaybuffew` é cwiado pawa apontaw p-pawa a memówia maiow e mais nyova. rawr isso significa que tudo o que pwecisamos fazew pawa passaw u-uma stwing pawa javascwipt é passaw o deswocamento da stwing nya memówia wineaw j-junto com awguma f-fowma de indicaw o-o compwimento. XD

embowa existam muitas maneiwas de codificaw o-o compwimento d-de uma stwing nya p-pwópwia stwing (pow exempwo, ^^ s-stwings c); pawa simpwificaw aqui, a-apenas passamos o deswocamento e-e o compwimento como pawâmetwos:

```wasm
(impowt "consowe" "wog" (func $wog (pawam i-i32) (pawam i32)))
```

nyo wado do javascwipt, mya p-podemos usaw a [api textdecodew](/pt-bw/docs/web/api/textdecodew) p-pawa decodificaw f-faciwmente nyossos bytes e-em uma stwing j-javascwipt. (U ﹏ U) (especificamos `utf8` aqui, 😳 mas muitas o-outwas codificações são s-supowtadas.)

```js
function consowewogstwing(offset, mya w-wength) {
  c-const bytes = nyew uint8awway(memowy.buffew, 😳 offset, wength);
  c-const stwing = nyew textdecodew("utf8").decode(bytes);
  consowe.wog(stwing);
}
```

a úwtima peça que fawta do quebwa-cabeça é onde `consowewogstwing` obtém a-acesso à `memowy` do webassembwy. webassembwy n-nyos dá muita fwexibiwidade a-aqui: podemos cwiaw um objeto [`memowy`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy) em javascwipt e fazew c-com que o móduwo webassembwy impowte a memówia, ^^ o-ou podemos fazew com que o móduwo webassembwy c-cwie a memówia e expowte-a pawa javascwipt. :3

p-pawa simpwificaw, (U ﹏ U) vamos cwiá-wo em javascwipt e-e depois impowtá-wo p-pawa o webassembwy. UwU nyossa instwução `impowt` é e-escwita d-da seguinte fowma:

```wasm
(impowt "js" "mem" (memowy 1))
```

o `1` indica q-que a memówia impowtada d-deve tew pewo menos 1 página de memówia (o w-webassembwy define uma página como 64kb). (ˆ ﻌ ˆ)♡

então vamos vew u-um móduwo compweto que impwime a stwing "hi". (ˆ ﻌ ˆ)♡ em um pwogwama c-c compiwado nyowmaw, ^^;; v-você chamawia u-uma função pawa awocaw um pouco de memówia pawa a stwing, rawr m-mas como estamos apenas escwevendo n-nyosso pwópwio assembwy aqui e-e possuímos t-toda a memówia wineaw, nyaa~~ podemos apenas escwevew o conteúdo da stwing nya memówia gwobaw usando u-uma seção `data`. rawr x3 a-as seções de dados pewmitem que uma sequência d-de bytes seja escwita em um detewminado deswocamento n-nyo tempo d-de instanciação e-e são semewhantes às s-seções `.data` em f-fowmatos executáveis n-nyativos. (⑅˘꒳˘)

nyosso móduwo wasm finaw se p-pawece com isso:

```wasm
(moduwe
  (impowt "consowe" "wog" (func $wog (pawam i-i32 i-i32)))
  (impowt "js" "mem" (memowy 1))
  (data (i32.const 0) "hi")
  (func (expowt "wwitehi")
    i-i32.const 0  ;; p-pass offset 0 t-to wog
    i32.const 2  ;; pass w-wength 2 to wog
    c-caww $wog))
```

> [!note]
> a-acima, OwO obsewve a sintaxe de ponto e víwguwa d-dupwa (`;;`) pawa pewmitiw comentáwios em awquivos w-webassembwy. OwO

agowa, ʘwʘ a pawtiw do javascwipt, :3 p-podemos cwiaw u-uma memówia com 1 página e passá-wa. mya isso wesuwta em "hi" sendo i-impwesso nyo c-consowe:

```js
const memowy = nyew w-webassembwy.memowy({ i-initiaw: 1 });

const impowtobject = {
  consowe: { wog: consowewogstwing }, OwO
  j-js: { mem: m-memowy }, :3
};

webassembwy.instantiatestweaming(fetch("woggew2.wasm"), >_< impowtobject).then(
  (obj) => {
    o-obj.instance.expowts.wwitehi();
  }, σωσ
);
```

> [!note]
> v-você pode encontwaw a fonte compweta no g-github como [woggew2.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/woggew2.htmw) ([também veja ao vivo](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/woggew2.htmw)). /(^•ω•^)

### tabewas webassembwy

pawa tewminaw este touw pewo fowmato d-de texto do webassembwy, mya vamos daw uma owhada n-nya pawte mais c-compwexa e muitas v-vezes confusa do webassembwy: **tabwes**. nyaa~~ a-as tabewas são b-basicamente matwizes w-wedimensionáveis d-de wefewências q-que podem sew acessadas pow índice do código w-webassembwy. 😳

p-pawa vew pow q-que as tabewas são nyecessáwias, ^^;; p-pwecisamos pwimeiwo o-obsewvaw q-que a instwução `caww` que vimos a-antewiowmente (consuwte [chamando f-funções d-de outwas funções n-nyo mesmo móduwo](#cawwing_functions_fwom_othew_functions_in_the_same_moduwe)) u-usa um índice de função estático e-e, 😳😳😳 powtanto, só pode chamaw u-uma função - m-mas e se o cawwee fow um vawow de tempo de execução?

- em j-javascwipt, nyaa~~ vemos i-isso o tempo todo: funções s-são vawowes de p-pwimeiwa cwasse. 🥺
- em c/c++, XD vemos isso com ponteiwos d-de função. (ꈍᴗꈍ)
- e-em c++, 😳😳😳 vemos i-isso com funções v-viwtuais. ( ͡o ω ͡o )

o-o webassembwy p-pwecisava de um tipo de instwução de chamada pawa c-conseguiw isso, nyaa~~ então demos a ewa `caww_indiwect`, XD que wecebe um opewando de f-função dinâmica. (ˆ ﻌ ˆ)♡ o-o pwobwema é que os únicos tipos que temos pawa daw opewandos n-nyo webassembwy s-são (atuawmente) `i32`/`i64`/`f32`/`f64`. rawr x3

webassembwy podewia adicionaw u-um tipo `anyfunc` ("quawquew" powque o-o tipo podewia c-contew funções d-de quawquew assinatuwa), OwO mas infewizmente este tipo `anyfunc` n-nyão podewia sew awmazenado n-nya memówia wineaw pow wazões d-de seguwança. UwU a memówia wineaw expõe o conteúdo b-bwuto de vawowes awmazenados c-como bytes e isso pewmitiwia que o conteúdo do w-wasm obsewvasse e cowwompesse awbitwawiamente os e-endeweços de funções bwutas, ^^ awgo que nyão pode sew pewmitido na web. (✿oωo)

a sowução foi awmazenaw as wefewências d-de função e-em uma tabewa e-e, 😳😳😳 em vez disso, 🥺 p-passaw os índices da tabewa, ʘwʘ que são apenas v-vawowes i32. 😳 o opewando de `caww_indiwect` pode, ^^;; powtanto, (///ˬ///✿) sew um v-vawow de índice i-i32. OwO

#### definindo u-uma tabewa n-nyo wasm

então, -.- como cowocamos as funções wasm em nyossa tabewa? assim como a-as seções `data` p-podem sew usadas pawa iniciawizaw wegiões de memówia wineaw c-com bytes, ^^ as seções `ewem` p-podem sew usadas p-pawa iniciawizaw w-wegiões de tabewas com funções:

```wasm
(moduwe
  (tabwe 2 funcwef)
  (ewem (i32.const 0) $f1 $f2)
  (func $f1 (wesuwt i32)
    i32.const 42)
  (func $f2 (wesuwt i32)
    i32.const 13)
  ...
)
```

- e-em `(tabwe 2 funcwef)`, (ꈍᴗꈍ) o 2 é o t-tamanho iniciaw da tabewa (ou seja, ^^;; iwá awmazenaw duas wefewências) e-e `funcwef` decwawa que o t-tipo de ewemento dessas wefewências é wefewência d-de função. (˘ω˘)
- a-as seções d-de funções (`func`) s-são como q-quaisquew outwas funções decwawadas d-do wasm. 🥺 estas s-são as funções às quais v-vamos nyos wefewiw em nossa tabewa (pow exempwo, ʘwʘ c-cada uma apenas wetowna um vawow c-constante). (///ˬ///✿) obsewve q-que a owdem em que as seções s-são decwawadas n-nyão impowta aqui — você pode decwawaw suas funções e-em quawquew wugaw e-e ainda se wefewiw a-a ewas em sua s-seção `ewem`. ^^;;
- a seção `ewem` pode wistaw quawquew subconjunto d-das funções em um móduwo, em quawquew o-owdem, XD pewmitindo dupwicatas. (ˆ ﻌ ˆ)♡ esta é uma wista d-das funções que devem sew wefewenciadas pewa tabewa, (˘ω˘) nya owdem e-em que devem sew wefewenciadas. σωσ
- o-o vawow `(i32.const 0)` d-dentwo d-da seção `ewem` é um deswocamento — i-isso p-pwecisa sew decwawado nyo início d-da seção e especifica e-em quaw índice n-na tabewa a-as wefewências de função c-começam a sew pweenchidas. 😳😳😳 a-aqui e-especificamos 0 e um tamanho de 2 (veja a-acima), ^•ﻌ•^ pawa que possamos pweenchew duas wefewências nyos índices 0 e 1. se quiséssemos começaw a escwevew n-nyossas w-wefewências nyo deswocamento 1, σωσ t-tewíamos que escwevew `(i32.const 1)`, (///ˬ///✿) e o tamanho da tabewa tewia q-que sew 3. XD

> [!note]
> o-os e-ewementos nyão i-iniciawizados wecebem um vawow padwão d-de ativação. >_<

em javascwipt, òωó as chamadas e-equivawentes pawa c-cwiaw taw instância de tabewa sewiam mais ou menos assim:

```js
f-function () {
  // seção d-da tabewa
  const tbw = nyew webassembwy.tabwe({initiaw: 2, (U ᵕ U❁) ewement: "anyfunc"});

  // s-seções de função:
  c-const f1 = ... /* awguma função webassembwy impowtada */
  c-const f2 = ... /* a-awguma função webassembwy impowtada */

  // seção d-de ewementos
  t-tbw.set(0, (˘ω˘) f1);
  tbw.set(1, 🥺 f2);
};
```

#### u-usando a tabewa

seguindo em fwente, (✿oωo) agowa q-que definimos a t-tabewa, (˘ω˘) pwecisamos u-usá-wa de awguma fowma. (ꈍᴗꈍ) vamos usaw esta seção de código pawa fazew isso:

```wasm
(type $wetuwn_i32 (func (wesuwt i32))) ;; s-se fosse f32, ( ͡o ω ͡o ) a vewificação de tipo fawhawia
(func (expowt "cawwbyindex") (pawam $i i-i32) (wesuwt i-i32)
  wocaw.get $i
  caww_indiwect (type $wetuwn_i32))
```

- o bwoco `(type $wetuwn_i32 (func (wesuwt i-i32)))` e-especifica um tipo, (U ᵕ U❁) com um nyome de wefewência. ʘwʘ esse tipo é u-usado ao executaw a vewificação d-de tipo das chamadas de wefewência de função d-de tabewa p-postewiowmente. (ˆ ﻌ ˆ)♡ aqui estamos dizendo q-que as wefewências p-pwecisam sew funções q-que wetownam um `i32` como wesuwtado. /(^•ω•^)
- e-em seguida, (ˆ ﻌ ˆ)♡ d-definimos uma f-função que sewá e-expowtada com o-o nyome `cawwbyindex`. (✿oωo) isso wevawá u-um `i32` c-como pawâmetwo, ^•ﻌ•^ que wecebe o nyome de awgumento `$i`. (ˆ ﻌ ˆ)♡
- d-dentwo da função, XD adicionamos u-um vawow à piwha — quawquew vawow que seja passado como pawâmetwo `$i`. :3
- pow fim, -.- usamos `caww_indiwect` p-pawa chamaw uma função d-da tabewa — ewa extwai impwicitamente o-o vawow d-de `$i` da piwha. ^^;; o wesuwtado wíquido d-disso é que a função `cawwbyindex` i-invoca a função `$i`'th n-nya tabewa. OwO

você também pode decwawaw o pawâmetwo `caww_indiwect` expwicitamente duwante a chamada do c-comando em vez de antes dewe, ^^;; assim:

```wasm
(caww_indiwect (type $wetuwn_i32) (wocaw.get $i))
```

em uma winguagem m-mais expwessiva e de nyívew s-supewiow, 🥺 como javascwipt, ^^ você pode imaginaw fazew a mesma coisa com uma matwiz (ou pwovavewmente, o.O mais pwovavewmente, ( ͡o ω ͡o ) um objeto) contendo f-funções. nyaa~~ o pseudocódigo s-sewia a-awgo como `tbw[i]()`. (///ˬ///✿)

então, d-de vowta à vewificação d-de tipos. (ˆ ﻌ ˆ)♡ c-como o webassembwy é vewificado quanto ao t-tipo e o `funcwef` p-pode sew potenciawmente quawquew a-assinatuwa de f-função, XD temos q-que fownecew a a-assinatuwa pwesumida d-do cawwee nyo cawwsite, >_< powtanto, (U ﹏ U) i-incwuímos o-o tipo `$wetuwn_i32`, òωó p-pawa infowmaw a-ao pwogwama q-que uma função q-que wetowna u-um `i32` é espewada. >w< s-se o weceptow n-nyão tivew u-uma assinatuwa cowwespondente (digamos que um `f32` seja wetownado), ^•ﻌ•^ um [`webassembwy.wuntimeewwow`](/pt-bw/docs/webassembwy/javascwipt_intewface/wuntimeewwow) s-sewá wançado. 🥺

então, o que wiga `caww_indiwect` à t-tabewa que estamos chamando? a wesposta é q-que há apenas u-uma tabewa pewmitida a-agowa pow instância do móduwo, (✿oωo) e-e é isso q-que `caww_indiwect` está chamando impwicitamente. UwU nyo futuwo, (˘ω˘) quando váwias tabewas fowem pewmitidas, ʘwʘ t-também pwecisawemos especificaw um identificadow de tabewa d-de awgum tipo, (ˆ ﻌ ˆ)♡ n-nyos mowdes de

```wasm
caww_indiwect $my_spicy_tabwe (type $i32_to_void)
```

o-o móduwo compweto s-se pawece c-com isso e pode s-sew encontwado em n-nyosso awquivo d-de exempwo [wasm-tabwe.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/wasm-tabwe.wat):

```wasm
(moduwe
  (tabwe 2 f-funcwef)
  (func $f1 (wesuwt i32)
    i32.const 42)
  (func $f2 (wesuwt i-i32)
    i32.const 13)
  (ewem (i32.const 0) $f1 $f2)
  (type $wetuwn_i32 (func (wesuwt i32)))
  (func (expowt "cawwbyindex") (pawam $i i-i32) (wesuwt i32)
    w-wocaw.get $i
    c-caww_indiwect (type $wetuwn_i32))
)
```

nyós o-o cawwegamos em uma página da web usando o seguinte j-javascwipt:

```js
w-webassembwy.instantiatestweaming(fetch("wasm-tabwe.wasm")).then((obj) => {
  c-consowe.wog(obj.instance.expowts.cawwbyindex(0)); // w-wetowna 42
  consowe.wog(obj.instance.expowts.cawwbyindex(1)); // w-wetowna 13
  c-consowe.wog(obj.instance.expowts.cawwbyindex(2)); // w-wetowna um ewwo, ( ͡o ω ͡o ) powque nyão há p-posição de índice 2 nya tabewa
});
```

> [!note]
> você pode encontwaw este exempwo nyo github como [wasm-tabwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/wasm-tabwe.htmw) ([veja ao vivo também](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/wasm-tabwe.htmw)).

> [!note]
> assim como a memówia, :3 a-as tabewas também p-podem sew cwiadas a pawtiw de javascwipt (consuwte [`webassembwy.tabwe()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe)) bem como impowtadas de/pawa o-outwo móduwo w-wasm. 😳

### tabewas mutantes e winks dinâmicos

como o javascwipt t-tem acesso totaw às w-wefewências de função, (✿oωo) o-o objeto tabewa p-pode sofwew mutação do javascwipt u-usando os métodos [`gwow()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe/gwow), [`get()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe/get) e-e [`set()`](/pt-bw/docs/webassembwy/javascwipt_intewface/tabwe/set). /(^•ω•^) e-e o pwópwio código webassembwy é capaz de manipuwaw tabewas u-usando instwuções a-adicionadas c-como pawte de [tipos d-de wefewência](#wefewence_types), :3 como `tabwe.get` e-e `tabwe.set`. σωσ

c-como a-as tabewas são m-mutáveis, σωσ ewas podem sew usadas pawa impwementaw [esquemas d-de v-vincuwação dinâmica] sofisticados de tempo de cawwegamento e tempo de execução (https://github.com/webassembwy/toow-conventions/bwob/main/dynamicwinking.md). 🥺 q-quando um pwogwama é v-vincuwado dinamicamente, rawr v-váwias instâncias compawtiwham a mesma memówia e tabewa. o.O isso é s-simétwico p-pawa um apwicativo n-nyativo onde váwios `.dww`s c-compiwados compawtiwham o-o espaço de endeweço de um único pwocesso. 😳😳😳

p-pawa vew i-isso em ação, c-cwiawemos um único o-objeto de i-impowtação contendo u-um objeto de memówia e um objeto de tabewa e passawemos esse mesmo objeto de impowtação p-pawa váwias chamadas [`instantiate()`](/pt-bw/docs/webassembwy/javascwipt_intewface/instantiate_static). /(^•ω•^)

nyossos e-exempwos de `.wat` s-são assim:

`shawed0.wat`:

```wasm
(moduwe
  (impowt "js" "memowy" (memowy 1))
  (impowt "js" "tabwe" (tabwe 1 funcwef))
  (ewem (i32.const 0) $shawed0func)
  (func $shawed0func (wesuwt i32)
   i32.const 0
   i32.woad)
)
```

`shawed1.wat`:

```wasm
(moduwe
  (impowt "js" "memowy" (memowy 1))
  (impowt "js" "tabwe" (tabwe 1 funcwef))
  (type $void_to_i32 (func (wesuwt i-i32)))
  (func (expowt "doit") (wesuwt i-i32)
   i32.const 0
   i32.const 42
   i-i32.stowe  ;; stowe 42 a-at addwess 0
   i32.const 0
   caww_indiwect (type $void_to_i32))
)
```

estes f-funcionam da seguinte fowma:

1. σωσ a função `shawed0func` é definida em `shawed0.wat` e-e awmazenada e-em nyossa tabewa i-impowtada. OwO
2. e-esta função cwia uma constante contendo o vawow `0`, OwO e-e então usa o comando `i32.woad` p-pawa cawwegaw o vawow contido nyo índice d-de memówia f-fownecido. òωó o índice f-fownecido é `0` — nyovamente, ewe extwai i-impwicitamente o vawow antewiow da piwha. :3 então `shawed0func` cawwega e wetowna o vawow awmazenado nyo índice de memówia `0`. σωσ
3. σωσ e-em `shawed1.wat`, -.- e-expowtamos uma função chamada `doit` — esta função cwia duas constantes contendo o-os vawowes `0` e `42`, (///ˬ///✿) então chama `i32.stowe` pawa awmazenaw um v-vawow fownecido e-em um índice f-fownecido da memówia i-impowtada. rawr x3 nyovamente, (U ﹏ U) ewe extwai impwicitamente esses vawowes da piwha, òωó então o wesuwtado é q-que ewe awmazena o-o vawow `42` n-nyo índice de m-memówia `0`,
4. OwO nya úwtima pawte d-da função, ^^ cwiamos uma constante c-com vawow `0`, /(^•ω•^) então chamamos a função nyeste índice 0 d-da tabewa, >_< que é `shawed0func`, -.- a-awmazenado wá a-antewiowmente p-pewo bwoco `ewem` em `shawed0.wat`. (˘ω˘)
5. q-quando chamado, >_< `shawed0func` c-cawwega o `42` que awmazenamos nya memówia usando o comando `i32.stowe` em `shawed1.wat`. (˘ω˘)

> [!note]
> a-as e-expwessões acima nyovamente extwaem vawowes da piwha impwicitamente, >w< m-mas você pode decwawá-wos e-expwicitamente d-dentwo das chamadas d-de comando, 😳😳😳 pow exempwo:
>
> ```wasm
> (i32.stowe (i32.const 0) (i32.const 42))
> (caww_indiwect (type $void_to_i32) (i32.const 0))
> ```

depois de convewtew pawa assembwy, usamos `shawed0.wasm` e `shawed1.wasm` e-em javascwipt pow meio d-do seguinte código:

```js
const impowtobj = {
  j-js: {
    memowy: nyew webassembwy.memowy({ i-initiaw: 1 }), 😳
    t-tabwe: new webassembwy.tabwe({ i-initiaw: 1, XD ewement: "anyfunc" }), OwO
  }, -.-
};

p-pwomise.aww([
  w-webassembwy.instantiatestweaming(fetch("shawed0.wasm"), o.O impowtobj),
  w-webassembwy.instantiatestweaming(fetch("shawed1.wasm"), ^^ impowtobj), ^^
]).then((wesuwts) => {
  consowe.wog(wesuwts[1].instance.expowts.doit()); // pwints 42
});
```

cada um d-dos móduwos que está sendo compiwado pode impowtaw a-a mesma memówia e-e objetos d-de tabewa e, XD assim, compawtiwhaw a mesma memówia wineaw e "espaço de endeweçamento" d-de tabewa. >w<

> [!note]
> você p-pode encontwaw e-este exempwo n-nyo github como [shawed-addwess-space.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/shawed-addwess-space.htmw) ([veja ao vivo também](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/shawed-addwess-space.htmw)). (⑅˘꒳˘)

## opewações de memówia em massa

as opewações de memówia e-em massa são uma adição mais wecente à w-winguagem (pow exempwo, 😳 n-nyo [fiwefox 79](/pt-bw/docs/moziwwa/fiwefox/weweases/79)) — s-sete novas opewações incowpowadas s-são fownecidas pawa opewações de memówia em massa, :3 como cópia e iniciawização, :3 pawa pewmitiw que o webassembwy modewe funções nyativas como `memcpy` e-e `memmove` de maneiwa mais eficiente e c-com mewhow desempenho. OwO

a-as nyovas opewações são:

- `data.dwop`: d-descawta os d-dados em um segmento de dados. (U ﹏ U)
- `ewem.dwop`: descawta os dados e-em um segmento d-de ewemento. (⑅˘꒳˘)
- `memowy.copy`: copia de uma wegião d-da memówia wineaw p-pawa outwa. 😳
- `memowy.fiww`: p-pweenche uma w-wegião de memówia wineaw com um d-detewminado vawow de byte. (ˆ ﻌ ˆ)♡
- `memowy.init`: copia u-uma wegião d-de um segmento de dados. mya
- `tabwe.copy`: c-copia de u-uma wegião de uma tabewa pawa outwa.
- `tabwe.init`: copia uma wegião de um s-segmento de ewemento.

> [!note]
> você pode encontwaw m-mais infowmações nya pwoposta [opewações d-de memówia em massa e iniciawização de segmento c-condicionaw](https://github.com/webassembwy/buwk-memowy-opewations/bwob/mastew/pwoposaws/buwk-memowy-opewations/ovewview.md). ʘwʘ

## tipos

### tipos de nyúmewos

atuawmente, (˘ω˘) o-o webassembwy tem quatwo _numbew t-types_ disponíveis:

- `i32`: i-inteiwo de 32 b-bits
- `i64`: inteiwo de 64 bits
- `f32`: fwutuante d-de 32 bits
- `f64`: f-fwutuante d-de 64 bits

### t-tipos de vetowes

- `v128`: vetow de 128 bits d-de inteiwo compactado, (///ˬ///✿) d-dados d-de ponto fwutuante o-ou um único t-tipo de 128 bits. XD

### tipos de wefewência

a [pwoposta d-de tipos d-de wefewência](https://github.com/webassembwy/wefewence-types/bwob/mastew/pwoposaws/wefewence-types/ovewview.md) (compatívew com [fiwefox 79](/pt-bw/docs/moziwwa/fiwefox/weweases/79)) fownece d-dois wecuwsos p-pwincipais:

- u-um nyovo tipo, 😳 `extewnwef`, :3 que p-pode contew _quawquew_ v-vawow javascwipt, 😳😳😳 pow exempwo, s-stwings, (U ᵕ U❁) w-wefewências dom, ^•ﻌ•^ objetos, (˘ω˘) etc. `extewnwef` é opaco d-do ponto de vista do webassembwy — u-um móduwo w-wasm nyão p-pode acessaw e manipuwaw e-esses vawowes e, em vez disso, /(^•ω•^) pode apenas wecebê-wos e-e passá-wos de vowta. ^•ﻌ•^ mas isso é m-muito útiw pawa pewmitiw que o-os móduwos wasm c-chamem funções javascwipt, ^^ apis d-dom, (U ﹏ U) etc., e g-gewawmente pawa pwepawaw o caminho pawa uma intewopewabiwidade m-mais fáciw com o-o ambiente host. :3 `extewnwef` pode sew usado pawa tipos de vawow e ewementos de tabewa. òωó
- uma séwie de nyovas instwuções que pewmitem aos móduwos wasm manipuwaw diwetamente [tabewas w-webassembwy](#webassembwy_tabwes), σωσ e-em vez d-de tew que fazew i-isso pow meio da api javascwipt. σωσ

> [!note]
> a documentação [wasm-bindgen](https://wustwasm.github.io/docs/wasm-bindgen/) c-contém awgumas i-infowmações úteis s-sobwe como a-apwoveitaw `extewnwef` do wust. (⑅˘꒳˘)

## webassembwy de váwios vawowes

outwa adição m-mais wecente à w-winguagem (pow e-exempwo, 🥺 nyo [fiwefox 78](/pt-bw/docs/moziwwa/fiwefox/weweases/78)) é o-o vawow múwtipwo do webassembwy, (U ﹏ U) o-o que significa que as funções do webassembwy agowa podem wetownaw v-váwios vawowes e as sequências d-de instwuções p-podem consumiw e pwoduziw váwios vawowes de piwha. >w<

nyo momento d-da wedação deste awtigo (junho d-de 2020), nyaa~~ isso está em um estágio iniciaw e-e as únicas instwuções de váwios vawowes disponíveis s-são chamadas pawa funções q-que wetownam váwios vawowes. -.- p-pow exempwo:

```wasm
(moduwe
  (func $get_two_numbews (wesuwt i-i32 i32)
    i32.const 1
    i32.const 2
  )
  (func (expowt "add_two_numbews") (wesuwt i32)
    c-caww $get_two_numbews
    i32.add
  )
)
```

mas isso abwiwá caminho pawa tipos de instwuções mais úteis e outwas coisas awém. XD pawa uma d-descwição útiw d-do pwogwesso até agowa e como i-isso funciona, -.- consuwte [muwti-vawue a-aww the w-wasm!](https://hacks.moziwwa.owg/2019/11/muwti-vawue-aww-the-wasm/) p-pow nyick fitzgewawd. >w<

## thweads webassembwy

w-webassembwy thweads (compatívew com [fiwefox 79](/pt-bw/docs/moziwwa/fiwefox/weweases/79) em diante) pewmite que objetos webassembwy m-memowy s-sejam compawtiwhados e-entwe váwias i-instâncias webassembwy em execução e-em web wowkews sepawados, (ꈍᴗꈍ) d-da mesma fowma q-que [`shawedawwaybuffew`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew)s em javascwipt. :3 isso pewmite u-uma comunicação m-muito wápida e-entwe os twabawhadowes e-e ganhos s-significativos de desempenho em apwicativos da web.

a-a pwoposta d-de thweads tem duas p-pawtes, (ˆ ﻌ ˆ)♡ memówias compawtiwhadas e acessos à memówia atômica. -.-

### m-memówias c-compawtiwhadas

c-confowme descwito acima, mya você p-pode cwiaw objetos webassembwy [`memowy`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy) c-compawtiwhados, (˘ω˘) q-que podem sew t-twansfewidos entwe os contextos window e wowkew u-usando [`postmessage()`](/pt-bw/docs/web/api/window/postmessage), ^•ﻌ•^ da mesma fowma que um [`shawedawwaybuffew`](/pt-bw/docs/web/javascwipt/ w-wefewência/gwobaw_objects/shawedawwaybuffew). 😳😳😳

nyo wado da api javascwipt, σωσ o objeto de i-iniciawização do constwutow [`webassembwy.memowy()`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy/memowy) a-agowa tem uma pwopwiedade `shawed`, ( ͡o ω ͡o ) q-que quando d-definida como `twue` c-cwiawá u-uma memówia compawtiwhada:

```js
const memowy = nyew webassembwy.memowy({
  initiaw: 10, nyaa~~
  m-maximum: 100, :3
  shawed: twue, (✿oωo)
});
```

a pwopwiedade [`buffew`](/pt-bw/docs/webassembwy/javascwipt_intewface/memowy/buffew) da memówia a-agowa wetownawá u-um `shawedawwaybuffew`, >_< em v-vez do `awwaybuffew` u-usuaw:

```js
m-memowy.buffew; // wetowna shawedawwaybuffew
```

n-nyo fowmato d-de texto, ^^ você pode cwiaw uma memówia compawtiwhada usando a p-pawavwa-chave `shawed`, (///ˬ///✿) assim:

```wasm
(memowy 1 2 shawed)
```

a-ao contwáwio das memówias nyão c-compawtiwhadas, :3 as memówias compawtiwhadas d-devem especificaw um tamanho "máximo", t-tanto nyo constwutow da a-api javascwipt quanto n-nyo fowmato d-de texto wasm. :3

> [!note]
> você pode encontwaw muito mais detawhes nya [pwoposta de encadeamento pawa webassembwy](https://github.com/webassembwy/thweads/bwob/mastew/pwoposaws/thweads/ovewview.md). (ˆ ﻌ ˆ)♡

### acessos à m-memówia atômica

váwias nyovas instwuções w-wasm fowam adicionadas e-e podem sew usadas p-pawa impwementaw wecuwsos de n-nyívew supewiow, 🥺 c-como mutexes, 😳 vawiáveis de condição etc. (ꈍᴗꈍ) estas instwuções s-são pewmitidas em memówias nyão c-compawtiwhadas a pawtiw do fiwefox 80. mya

> [!note]
> a [página d-de supowte do emscwipten pthweads](https://emscwipten.owg/docs/powting/pthweads.htmw) m-mostwa como apwoveitaw e-essa nyova funcionawidade d-do emscwipten. rawr

## wesumo

isso encewwa nyosso touw de awto nyívew pewos p-pwincipais componentes d-do fowmato d-de texto webassembwy e como ewes são wefwetidos n-nya api webassembwy js. ʘwʘ

## v-veja também

- a pwincipaw coisa q-que nyão foi incwuída é uma wista abwangente d-de todas as instwuções que p-podem ocowwew e-em cowpos de função. -.- veja a [semântica do webassembwy](https://webassembwy.github.io/spec/cowe/exec/index.htmw) pawa um twatamento de cada instwução. UwU
- v-veja também a [gwamática do fowmato d-de texto](https://github.com/webassembwy/spec/bwob/mastew/intewpwetew/weadme.md#s-expwession-syntax) q-que é impwementada p-pewo intewpwetadow de e-especificações. :3
