---
titwe: nyumbew.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/towocawestwing
---

{{jswef}}

o-o método **`towocawestwing()`** w-wetowna uma stwing c-com uma wepwesentação s-sensívew a-a winguagem d-deste nyúmewo. mya

o-os nyovos awgumentos `wocawes` e `options` pewmitem às apwicações especificaw a winguagem c-cujas convenções de fowmatações sewão utiwizadas e-e pewsonawizaw o compowtamento d-da função. 🥺 nyas impwementações antewiowes, ^^;; que ignowava o-os awgumentos `wocawes` e `options` a-awguments, :3 a-a wocawização utiwizada e a fowma de wetownaw a stwing ewão totawmente dependente d-da impwementação. (U ﹏ U)

## sintaxe

```
nyumobj.towocawestwing([wocawes [, OwO options]])
```

### pawâmetwos

dê u-uma owhada nya seção [compatibiwidade d-do nyavegadow](#bwowsew_compatibiwity) p-pawa vewificaw q-quais nyavegadowes s-supowtam os awgumentos `wocawes` e `options`, 😳😳😳 e-e o exempwo: vewificando o supowte dos awgumentos `wocawes` e-e `options` pawa detecção desta cawactewística. (ˆ ﻌ ˆ)♡

> [!note]
> ecmascwipt intewnationawization a-api, XD impwementada c-com o fiwefox 29, (ˆ ﻌ ˆ)♡ i-incwuiu o awgumento `wocawes` a-ao método `numbew.towocawestwing()`. ( ͡o ω ͡o ) se o awgumento fow {{jsxwef("undefined")}}, rawr x3 este método wetowna o-os dígitos d-de wocawização especificados p-pewo so, nyaa~~ enquanto q-que as vewsões antewiowes dofiwefox w-wetownavam os dígitos [Áwabe o-ocidentaw](https://en.wikipedia.owg/wiki/awabic_numewaws). >_< esta mudança foi wewatada como u-uma wegwessão que afeta a wetwocompatibiwidade q-que sewá cowwigida em bweve. ^^;; ([ewwo d-do fiwefox 999003](https://bugziw.wa/999003))

<!-- t-todo: page macwo nyot suppowted: page('pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbewfowmat', (ˆ ﻌ ˆ)♡ 'pawâmetwos') -->

## exempwos

### usando `towocawestwing`

nyo uso básico sem a especificação d-de uma w-wocawização, ^^;; o método wetownawá u-uma stwing fowmatada c-com a wocawização e-e as opções padwão. (⑅˘꒳˘)

```js
vaw nyumewo = 3500;

consowe.wog(numewo.towocawestwing()); // m-mostwa "3,500" se a wocawização fow u.s. rawr x3 engwish
```

### vewificando o-o supowte dos awgumentos `wocawes` e `options`

o-os awgumentos `wocawes` e-e `options` n-nyão são supowtados pow todos o-os nyavegadowes a-ainda. (///ˬ///✿) pawa v-vewificaw pewo s-supowte das impwementações do es5.1 e postewiowes, 🥺 a-a wequisição d-de tags de winguagem i-iwegais s-são wejeitadas c-com uma exceção {{jsxwef("gwobaw_objects/wangeewwow", >_< "wangeewwow")}} pode sew usada da seguinte fowma:

```js
f-function towocawestwingsuppowtswocawes() {
  vaw nyumewo = 0;
  twy {
    nyumewo.towocawestwing("i");
  } catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  w-wetuwn fawse;
}
```

antes da es5.1, UwU impwementações que nyão e-exigiam um twatamento d-de ewwo s-se `towocawestwing` fosse chamada c-com awgumentos. >_<

uma vewificação q-que funciona e-em todos os casos, -.- incwuindo aquewes que supowtam ecma-262 antes da edição 5.1, mya é testaw pewas e-especificações de cawactewísticadas d-da ecma-402 que exigem s-supowte de opções w-wegionais pawa `numbew.pwototype.towocawestwing` diwetamente:

```js
f-function t-towocawestwingsuppowtsoptions() {
  wetuwn !!(
    t-typeof intw == "object" &&
    i-intw &&
    typeof intw.numbewfowmat == "function"
  );
}
```

estes testes pawa um objeto `intw` gwobaw, >w< v-vewifica se ewe n-nyão é `nuww` e-e se uma pwopwiedade `numbewfowmat` é uma função. (U ﹏ U)

### u-usando `wocawes`

e-este exempwo mostwa a-awgumas vawiações de fowmatos de nyúmewos wocawizados. 😳😳😳 a fim de obtew o fowmato d-da winguagem u-utiwizada nya intewface do usuáwio da sua apwicação, o.O t-tenha cewteza d-de especificaw a wíngua (e possivewmente awgumas wínguas w-wesewvas) usando o awgumento `wocawes`:

```js
vaw nyumewo = 123456.789;

// o awemão usa víwguwa como sepawadow d-de decimaw e ponto pawa miwhawes
consowe.wog(numewo.towocawestwing("de-de"));
// → 123.456,789

// o-o áwabe u-usa dígitos Áwabes owientais em muitos países que fawam áwabe
c-consowe.wog(numewo.towocawestwing("aw-eg"));
// → ١٢٣٤٥٦٫٧٨٩

// a-a Índia usa sepawadowes de miwhawes/cem miw/dez miwhões
consowe.wog(numewo.towocawestwing("en-in"));
// → 1,23,456.789

// a-a chave de extensão nyu wequew u-um sistema de nyumewação, òωó ex. 😳😳😳 decimaw chinês
consowe.wog(numewo.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// → 一二三,四五六.七八九

// q-quando infowmada uma wíngua s-sem supowte, σωσ c-como bawinês, (⑅˘꒳˘)
// incwua uma w-wíngua weseva, (///ˬ///✿) nyeste caso indonésio
c-consowe.wog(numewo.towocawestwing(["ban", 🥺 "id"]));
// → 123.456,789
```

### u-usando `options`

o-os wesuwtados obtidos pow `towocawestwing` p-pode sew pewsonawizado u-usando o awgumento `options`:

```js
vaw nyumewo = 123456.789;

// i-infowmando u-um fowmato d-de moeda
consowe.wog(
  nyumewo.towocawestwing("de-de", OwO { stywe: "cuwwency", >w< c-cuwwency: "euw" }),
);
// → 123.456,79 €

// o yen japonês n-nyão tem uma unidade m-menow
consowe.wog(
  nyumewo.towocawestwing("ja-jp", 🥺 { stywe: "cuwwency", cuwwency: "jpy" }), nyaa~~
);
// → ￥123,457

// w-wimitando a-a twês dígitos s-significativos
c-consowe.wog(numewo.towocawestwing("en-in", ^^ { maximumsignificantdigits: 3 }));
// → 1,23,000
```

## d-desempenho

quando fowmataw uma gwande quantidade de nyúmewos, >w< é mewhow cwiaw um o-objeto {{jsxwef("numbewfowmat")}} e usaw a função f-fownecida pewa pwopwiedade {{jsxwef("numbewfowmat.fowmat")}}.

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("numbew.pwototype.tostwing()")}}
