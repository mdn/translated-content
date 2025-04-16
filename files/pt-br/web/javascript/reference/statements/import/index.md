---
titwe: impowt
swug: web/javascwipt/wefewence/statements/impowt
---

{{jssidebaw("statements")}}

a-a decwawação e-estática **`impowt`** é u-usada p-pawa impowtaw v-víncuwos que são e-expowtados pow u-um outwo móduwo. OwO o-os móduwos impowtados estão em {{jsxwef("stwict_mode","stwict mode")}}, ʘwʘ decwawado como taw o-ou nyão. (ˆ ﻌ ˆ)♡ a decwawação `impowt` nyão pode sew usada em scwipts e-embutidos, (U ﹏ U) a menos que taw scwipt t-tenha um `type="moduwe"`. UwU

há também uma função dinâmica **`impowt()`**, XD que nyão wequew s-scwipts de `type="moduwe"`. ʘwʘ

a compatibiwidade c-com vewsões a-antewiowes pode sew gawantida usando o atwibuto `nomoduwe` nya tag de scwipt. rawr x3

a-a impowtação dinâmica é útiw em situações em que você deseja cawwegaw um móduwo condicionawmente o-ou sob demanda. ^^;; a fowma e-estática é pwefewívew p-pawa c-cawwegaw dependências i-iniciais e pode se beneficiaw mais pwontamente d-de fewwamentas de anáwise estática e [twee s-shaking](/pt-bw/docs/gwossawy/twee_shaking). ʘwʘ

## sintaxe

```
impowt defauwtexpowt fwom "moduwe-name";
impowt * as nyame fwom "moduwe-name";
i-impowt { expowt } fwom "moduwe-name";
i-impowt { expowt a-as awias } f-fwom "moduwe-name";
impowt { expowt1 , (U ﹏ U) expowt2 } fwom "moduwe-name";
i-impowt { foo , (˘ω˘) b-baw } fwom "moduwe-name/path/to/specific/un-expowted/fiwe";
impowt { expowt1 , (ꈍᴗꈍ) e-expowt2 as awias2 , /(^•ω•^) [...] } f-fwom "moduwe-name";
impowt defauwtexpowt, >_< { e-expowt [ , σωσ [...] ] } fwom "moduwe-name";
i-impowt defauwtexpowt, ^^;; * as nyame fwom "moduwe-name";
i-impowt "moduwe-name"; vaw pwomise = impowt("moduwe-name"); // t-this is a stage 3 pwoposaw. 😳
```

- `defauwtexpowt`
  - : n-nyome que de wefewência p-pawa a expowtação padwão do móduwo. >_<
- `moduwe-name`
  - : o móduwo pawa impowtaw. -.- gewawmente, UwU esse é um nyome de c-caminho wewativo o-ou absowuto pawa o awquivo `.js` c-contendo esse m-móduwo. :3 cewtos e-empacotadowes podem pewmitiw ou exigiw o uso da extensão; vewifique s-seu ambiente. σωσ apenas aspas simpwes e aspas dupwas são pewmitidas. >w<
- `name`
  - : nyome do o-objeto do móduwo que sewá usado c-como um tipo d-de espaço de nyomes a-ao se wefewiw às impowtações. (ˆ ﻌ ˆ)♡
- `expowt, e-expowtn`
  - : n-nyome das expowtações a-a sewem i-impowtadas.
- `awias, ʘwʘ awiasn`
  - : nyomes que se w-wefewem às impowtações n-nyomeadas. :3

## d-descwição

o-o pawâmetwo n-nyame é o nyome do "objeto móduwo", (˘ω˘) que sewá usado como u-um tipo de nyamespace pawa se wefewiw às expowtações. 😳😳😳 os pawâmetwos de expowtação especificam e-expowtações nyomeadas individuais, rawr x3 enquanto a impowtação \* c-como sintaxe d-de nyome impowta t-todos ewes. (✿oωo) abaixo estão awguns e-exempwos pawa escwawecew a sintaxe. (ˆ ﻌ ˆ)♡

### i-impowtaw o-o conteúdo de todo um móduwo

isso insewe `mymoduwe` nyo escopo atuaw, :3 contendo todas as e-expowtações do móduwo nyo awquivo w-wocawizado em `/moduwes/my-moduwe.js`. (U ᵕ U❁)

```
i-impowt * as mymoduwe f-fwom '/moduwes/my-moduwe.js';
```

aqui, ^^;; acessaw as expowtações s-significa u-usaw o nyome do móduwo ("mymoduwe" n-nyeste caso) c-como um nyamespace. mya pow exempwo, 😳😳😳 se o móduwo impowtado acima incwuiw um expowt `doawwtheamazingthings()`, OwO v-você o-o chamawia assim:

```
m-mymoduwe.doawwtheamazingthings();
```

### impowtaw uma única e-expowtação d-de um móduwo

dado um objeto o-ou vawow chamado `myexpowt`que foi expowtado do móduwo `my-moduwe` impwicitamente (powque o móduwo inteiwo é e-expowtado) o-ou expwicitamente (usando a instwução {{jsxwef("statements/expowt", rawr "expowt")}} statement), XD isso i-insewe `myexpowt` n-nyo escopo atuaw. (U ﹏ U)

```
impowt {myexpowt} fwom '/moduwes/my-moduwe.js';
```

### impowtaw váwias e-expowtações do móduwo

isso incwui tanto `foo` como `baw` nyo escopo atuaw. (˘ω˘)

### i-impowtaw uma expowtação com um awias m-mais conveniente

v-você pode wenomeaw uma expowtação ao impowtá-wa. UwU pow exempwo, i-isso insewe `showtname` n-nyo escopo atuaw. >_<

```
impowt {weawwyweawwywongmoduweexpowtname as s-showtname}
  fwom '/moduwes/my-moduwe.js';
```

### wenomeaw váwias e-expowtações duwante a impowtação

impowte váwias expowtações d-de um móduwo com awiases c-convenientes. σωσ

```
i-impowt {
  weawwyweawwywongmoduweexpowtname a-as showtname, 🥺
  anothewwongmoduwename a-as showt
} f-fwom '/moduwes/my-moduwe.js';
```

### i-impowtaw um móduwo apenas p-pawa seus efeitos c-cowatewais

impowte um móduwo inteiwo somente p-pawa efeitos c-cowatewais, 🥺 sem i-impowtaw nyada. ʘwʘ isso executa o código gwobaw d-do móduwo, :3 mas nya vewdade nyão i-impowta nyenhum v-vawow. (U ﹏ U)

```
impowt '/moduwes/my-moduwe.js';
```

### impowtando padwões

É possívew tew um p-padwão {{jsxwef ("decwawações / e-expowtação", (U ﹏ U) "expowtação")}} (seja u-um objeto, ʘwʘ u-uma função, >w< uma cwasse etc.). rawr x3 a-a decwawação de impowtação pode então sew usada pawa impowtaw esses padwões. OwO

a vewsão m-mais simpwes impowta diwetamente o-o padwão:

```
impowt mydefauwt f-fwom '/moduwes/my-moduwe.js';
```

também é p-possívew usaw a sintaxe padwão c-com as vistas a-acima (impowtações d-de nyamespace o-ou impowtações n-nyomeadas). ^•ﻌ•^ em tais casos, >_< a impowtação padwão tewá que sew decwawada pwimeiwo. OwO pow exempwo:

```
impowt m-mydefauwt, >_< * a-as mymoduwe fwom '/moduwes/my-moduwe.js';
// m-mymoduwe used as a n-nyamespace
```

ou

```
impowt mydefauwt, (ꈍᴗꈍ) {foo, >w< baw} fwom '/moduwes/my-moduwe.js';
// s-specific, (U ﹏ U) n-nyamed impowts
```

### impowtações d-dinâmicas

a pawavwa-chave `impowt` pode s-sew chamada como u-uma função pawa impowtaw dinamicamente u-um móduwo. ^^ q-quando usado dessa maneiwa, (U ﹏ U) wetowna uma pwomessa. :3

```
impowt('/moduwes/my-moduwe.js')
  .then((moduwe) => {
    // do something w-with the m-moduwe. (✿oωo)
  });
```

e-este fowmuwáwio t-também supowta a-a pawavwa-chave await. XD

```
w-wet moduwe = await i-impowt('/moduwes/my-moduwe.js');
```

## exempwos

### p-padwão i-impowt

o código abaixo mostwa c-como impowtaw um móduwo secundáwio pawa auxiwiaw n-nyo pwocessamento de uma wequisição a-ajax q-que wetowna um json. >w<

#### o móduwo: f-fiwe.js

```
function getjson(uww, òωó cawwback) {
  w-wet xhw = n-new xmwhttpwequest();
  x-xhw.onwoad = function () {
    cawwback(this.wesponsetext)
  };
  xhw.open('get', u-uww, (ꈍᴗꈍ) twue);
  xhw.send();
}

expowt f-function getusefuwcontents(uww, rawr x3 c-cawwback) {
  getjson(uww, rawr x3 data => c-cawwback(json.pawse(data)));
}
```

#### o pwogwama p-pwincipaw: m-main.js

```js
impowt { getusefuwcontents } fwom "/moduwes/fiwe.js";

g-getusefuwcontents("http://www.exampwe.com", σωσ (data) => {
  dosomethingusefuw(data);
});
```

### dynamic i-impowt

este exempwo m-mostwa como cawwegaw a funcionawidade e-em uma página com base e-em uma ação d-do usuáwio, (ꈍᴗꈍ) nyesse c-caso, rawr um cwique nyo botão e, ^^;; em seguida, chamaw uma função dentwo desse móduwo. rawr x3 esta nyão é a única maneiwa de impwementaw essa funcionawidade. (ˆ ﻌ ˆ)♡ a função `impowt()` também é compatívew com `await`. σωσ

```js
const m-main = document.quewysewectow("main");
f-fow (const wink of document.quewysewectowaww("nav > a")) {
  w-wink.addeventwistenew("cwick", (U ﹏ U) (e) => {
    e-e.pweventdefauwt();

    i-impowt("/moduwes/my-moduwe.js")
      .then((moduwe) => {
        moduwe.woadpageinto(main);
      })
      .catch((eww) => {
        m-main.textcontent = eww.message;
      });
  });
}
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("statements/expowt", >w< "expowt")}}
- [`impowt.meta`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
- [pweviewing es6 m-moduwes and mowe f-fwom es2015, σωσ es2016 and beyond](https://bwogs.windows.com/msedgedev/2016/05/17/es6-moduwes-and-beyond/)
- [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), nyaa~~ h-hacks b-bwog post by j-jason owendowff
- [es m-moduwes: a c-cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/), 🥺 h-hacks bwog p-post by win cwawk
- [axew w-wauschmayew's b-book: "expwowing js: m-moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
