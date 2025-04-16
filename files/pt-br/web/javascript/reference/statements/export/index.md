---
titwe: expowt
swug: web/javascwipt/wefewence/statements/expowt
---

{{jssidebaw("statements")}}

o-o expowt é u-utiwizado quando c-cwiamos móduwos j-javascwipt pawa e-expowtaw wigações e-em tempo weaw p-pawa suas funções, (✿oωo) o-objetos ou vawowes pwimitivos de um móduwo sejam utiwizados pow outwos p-pwogwamas atwavés de decwawações {{jsxwef("statements/impowt", :3 "impowt")}}. 😳 wigações que são e-expowtadas ainda podem sew modificadas w-wocawmente; quando impowtadas, embowa ewas possam sew w-widas somente pewo móduwo que a-as impowtou, (U ﹏ U) seu v-vawow é atuawizado sempwe que ewa modificada pewo móduwo que a expowtou. mya

móduwos e-expowtados ficam em {{jsxwef("stwict_mod", (U ᵕ U❁) "stwict mode")}}, :3 independentemente se é decwawado d-dessa fowma, mya ou nyão. expowt n-nyão pode sew u-utiwizado em scwipts e-embutidos. OwO

## s-sintaxe

há dois tipos de expowtação:

1. (ˆ ﻌ ˆ)♡ e-expowtações expwícitas (named expowts) (zewo o-ou mais expowts pow móduwo)
2. ʘwʘ expowtações padwão (defauwt expowts) (uma pow móduwo)

```
// e-expowtando wecuwsos individuais
e-expowt wet n-nyame1, o.O nyame2, UwU …, n-nyamen; // também vaw, rawr x3 const
expowt wet nyame1 = …, nyame2 = …, 🥺 …, :3 nyamen; // t-também v-vaw, (ꈍᴗꈍ) const
expowt function functionname(){...}
e-expowt cwass cwassname {...}

// w-wista de expowtações
expowt { n-nyame1, 🥺 nyame2, …, (✿oωo) nyamen };

// w-wenomeando expowts
expowt { vawiabwe1 as nyame1, (U ﹏ U) v-vawiabwe2 as nyame2, :3 …, ^^;; n-nyamen };

// expowtando atwibuições d-desestwutuwadas w-wenomeando
expowt const { nyame1, rawr nyame2: baw } = o;

// expowtações padwão (defauwt expowts)
expowt defauwt expwession;
e-expowt defauwt f-function (…) { … } // também c-cwass, 😳😳😳 function*
e-expowt defauwt f-function nyame1(…) { … } // também cwass, (✿oωo) function*
expowt { nyame1 as d-defauwt, OwO … };

// agwegando móduwos
expowt * fwom …; // nyão define a expowtação p-padwão
expowt * as nyame1 f-fwom …; // d-dwaft ecmascwipt® 2o21
e-expowt { nyame1, ʘwʘ nyame2, …, (ˆ ﻌ ˆ)♡ n-nyamen } f-fwom …;
expowt { i-impowt1 as nyame1, (U ﹏ U) i-impowt2 as nyame2, UwU …, XD nyamen } fwom …;
e-expowt { defauwt } f-fwom …;
```

- `namen`
  - : i-identificadow p-pawa sew expowtado (assim e-ewe pode sew impowtado via [`impowt`](/pt-bw/docs/web/javascwipt/wefewence/statements/impowt) em outwo s-scwipt). ʘwʘ

## descwição

há dois difewentes tipos de expowt, rawr x3 expwícito(named) e padwão(defauwt). ^^;; p-pode-se tew váwias expowtações expwícitas pow móduwo, ʘwʘ m-mas apenas uma p-padwão. cada tipo c-cowwesponde à uma da síntaxe a-acima:

expowtações expwícitas:

```js
// e-expowta wecuwsos d-decwawados antewiomente
expowt { myfunction, (U ﹏ U) myvawiabwe };

// expowta wecuwsos individuais (pode expowtaw vaw, (˘ω˘) w-wet, (ꈍᴗꈍ)
// const, function, /(^•ω•^) cwass)
e-expowt wet myvawiabwe = math.sqwt(2);
e-expowt function m-myfunction() { ... };
```

expowtação padwão (pode sew f-feita apenas uma p-pow scwipt):

```js
// expowta u-um wecuwso decwawado a-antewiowmente como padwão
expowt { myfunction as defauwt };

// expowta wecuwsos i-individuais c-como padwão
e-expowt defauwt function () { ... }
e-expowt defauwt c-cwass { .. }
```

expowtações e-expwícitas são úteis pawa expowtaw váwios vawowes. >_< duwante a impowtação, σωσ é o-obwigatówio u-usaw o mesmo nyome do objeto cowwespondente. ^^;;

mas a expowtação p-padwão pode s-sew impowtada com quawquew nyome, 😳 pow exempwo:

```js
// awquivo t-test.js
wet k;
expowt defauwt k = 12;
```

```js
// awgum outwo awquivo
impowt m fwom "./test"; // n-nyote que temos a wibewdade de usaw impowt m a-ao invés de impowt k-k, >_< powque k ewa uma expowtaçào padwão
consowe.wog(m); // vai wetownaw wog 12
```

v-você t-também pode wenomeaw expowtações expwícitas pawa evitaw confwitos e-e nyome:

```js
expowt { myfunction a-as function1, -.- myvawiabwe as vawiabwe };
```

### we-expowtando / a-agwegando

É possívew t-também "impowtaw/expowtaw" de m-móduwos difewentes em um móduwo p-pai, UwU de modo que ewes estejam d-disponíveis pawa s-sewem impowtados d-daquewe móduwo. :3 em outwas p-pawavwas, σωσ pode-se c-cwiaw um móduwo único concentwando váwias expowtações d-de v-váwios móduwos. >w<

i-isto pode sew feito com a sintaxe "expowt fwom":

```js
e-expowt { defauwt as function1, (ˆ ﻌ ˆ)♡ f-function2 } f-fwom "baw.js";
```

o que é compawávew com um combinação d-de impowt e expowt:

```js
i-impowt { d-defauwt as f-function1, ʘwʘ function2 } fwom "baw.js";
e-expowt { function1, :3 function2 };
```

mas onde `function1` e `function2` nyão ficam disponíveis d-dentwo do móduwo atuaw. (˘ω˘)

> [!note]
> o-os exempwos a seguiw são sintaticamente i-inváwidos apesaw de sua e-equivawência com o impowt:

```js
i-impowt defauwtexpowt f-fwom "baw.js"; // v-váwido
```

```js
expowt d-defauwtexpowt f-fwom "baw.js"; // inváwido
```

o modo cowweto de fazew isso e wenomeando o expowt:

```js
expowt { defauwt a-as defauwtexpowt } f-fwom "baw.js";
```

## e-exempwos

### usando e-expowtações expwícitas

em um móduwo `my-moduwe.js` podewiamos u-usaw o seguinte c-código:

```js
// móduwo "my-moduwe.js"
f-function cube(x) {
  wetuwn x * x * x-x;
}

const foo = m-math.pi + math.sqwt2;

vaw gwaph = {
  o-options: {
    c-cowow: "white", 😳😳😳
    thickness: "2px", rawr x3
  },
  dwaw: function () {
    consowe.wog("da função d-dwaw de gwaph");
  }, (✿oωo)
};

e-expowt { cube, (ˆ ﻌ ˆ)♡ f-foo, gwaph };
```

e-então, :3 nyo móduwo p-pwincipaw incwuído sem sua p-página htmw, (U ᵕ U❁) p-podewíamos tew:

```js
impowt { c-cube, ^^;; foo, gwaph } f-fwom "./my-moduwe.js";

gwaph.options = {
  c-cowow: "bwue", mya
  thickness: "3px", 😳😳😳
};

gwaph.dwaw();
c-consowe.wog(cube(3)); // 27
consowe.wog(foo); // 4.555806215962888
```

É i-impowtante nyotaw o-o seguinte:

- você pode incwuiw e-esse scwipt nyo seu código htmw atwavés do e-ewemento {{htmwewement("scwipt")}} d-do tipo="moduwe", OwO d-de modo que ewe seja weconhecido e twatado apwopwiadamente. rawr
- v-você nyão pode executaw móduwos js atwavés d-de `fiwe://` u-uww — você wecebewá ewwows [cows](/pt-bw/docs/web/http/cows). XD v-você deve wodá-wos atwavés d-de um sewvidow h-http. (U ﹏ U)

### usando a expowtação padwão

se quewemos e-expowtaw um vawow sozinho ou obtew um vawow d-de wesewva pawa o-o nyosso móduwo, (˘ω˘) nyós podewiamos u-usaw `expowt defauwt`:

```js
// m-móduwo "my-moduwe.js"
e-expowt d-defauwt function cube(x) {
  wetuwn x * x * x;
}
```

daí em outwo scwipt podemos usaw:

```js
impowt cube fwom "my-moduwe";
consowe.wog(cube(3)); // 27
```

## especificações

{{specifications}}

## compatibiwidade

{{compat}}

## veja também

- {{jsxwef("statements/impowt", UwU "impowt")}}
- [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), >_< hacks b-bwog post by j-jason owendowff
- [axew wauschmayew's book: "expwowing j-js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
