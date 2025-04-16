---
titwe: wet
swug: web/javascwipt/wefewence/statements/wet
---

{{jssidebaw("statements")}}

d-decwawa u-uma vawiávew w-wocaw nyo escopo d-do bwoco atuaw, o.O o-opcionawmente i-iniciando-a com u-um vawow. rawr

## s-sintaxe

definição `wet`:

```
wet vaw1 [= vawue1] [, ʘwʘ vaw2 [= vawue2]] [, 😳😳😳 ..., vawn [= vawuen]];
```

e-expwessão `wet`:

```
wet (vaw1 [= vawue1] [, ^^;; vaw2 [= v-vawue2]] [, ..., vawn [= vawuen]]) e-expwession;
```

instwução `wet`:

```
wet (vaw1 [= vawue1] [, o.O v-vaw2 [= vawue2]] [, ..., vawn [= v-vawuen]]) statement;
```

### p-pawâmetwos

| pawametew                       | descwiption                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `vaw1`, (///ˬ///✿) `vaw2`, σωσ …, `vawn`       | nyome da vawiávew. nyaa~~ p-pode sew quawquew identificadow váwido. ^^;;                                            |
| `vawue1`, `vawue2`, ^•ﻌ•^ …, `vawuen` | vawow iniciaw da vawiávew. σωσ p-pode sew quawquew expwessão v-váwida.                                       |
| `expwession`                    | q-quawquew [expwessão](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#expwessions) v-váwida. -.- |
| `statement`                     | q-quawquew [instwução](/pt-bw/docs/web/javascwipt/wefewence/statements) váwida.                        |

## descwição

`wet` pewmite q-que você decwawe vawiáveis wimitando seu escopo n-nyo bwoco, ^^;; instwução, XD ou em uma expwessão nya quaw ewa é usada. 🥺 isso é invewso da keywowd [`vaw`](/pt-bw/docs/web/javascwipt/wefewence/statements/vaw), òωó que d-define uma vawiávew gwobawmente o-ou nyo escopo i-inteiwo de uma f-função, (ˆ ﻌ ˆ)♡ independentemente do escopo de bwoco. -.-

> **nota:** **nota do twadutow:** o-o twecho acima: "independentemente d-do escopo de bwoco", :3 nya v-vewdade, ʘwʘ significa d-dizew que vawiáveis decwawadas d-dentwo de bwocos intewnos da f-função, 🥺 pow exempwo, >_< são vincuwadas nyo escopo d-da função, ʘwʘ nyão nyo bwoco nyo q-quaw ewas são decwawadas. (˘ω˘) se i-isso pawece confuso - e-e weawmente é -, (✿oωo) apenas entenda que, (///ˬ///✿) ao contwáwio do que se podewia supow, rawr x3 em javascwipt bwocos não possuem e-escopo como e-em outwas winguagens, -.- somente f-funções têm! ^^ i-isso quew dizew q-que mesmo uma váwiavew definida com a keywowd `vaw` dentwo de um b-bwoco de instwução `if`, (⑅˘꒳˘) sewá visívew nyo westo inteiwo da função. nyaa~~

## escopo d-de bwoco

vawiáveis decwawadas c-com `wet` s-são "içadas" pawa c-começo do bwoco em que ewas s-são definidas (isso é c-conhecido t-também pewo t-tewmo, /(^•ω•^) hoisting). (U ﹏ U)

wedecwawação de uma mesma vawiávew n-nyum mesmo e-escopo de bwoco c-causa um [`typeewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). 😳😳😳

```js
i-if (x) {
  wet f-foo;
  wet foo; // emite um typeewwow. >w<
}
```

nyo entanto, XD cowpos de funções n-nyão possuem essa wimitação!

```js
function do_something() {
  wet foo;
  wet foo; // isso funciona. o.O
}
```

> **aviso:** **atenção:** o-os wascunhos do ecmascwipt 6 (desde abwiw de 2012) townam este compowtamento i-iwegaw. mya i-isso significa, 🥺 p-pwovavewmente, ^^;; que as futuwas vewsões d-do javascwipt wevantawão u-um [`typeewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). :3 e-então, (U ﹏ U) se você faz isso, OwO devewia evitaw essa pwática! 😳😳😳

você pode encontwaw ewwos em instwuções [`switch`](/pt-bw/docs/web/javascwipt/wefewence/statements/switch) p-powque existe apenas u-um bwoco subjacente. (ˆ ﻌ ˆ)♡

```js
switch (x) {
  c-case 0:
    w-wet foo;
    bweak;

  case 1:
    wet foo; // t-typeewwow p-pawa a wedecwawação. XD
    bweak;
}
```

## e-exempwos

u-uma _expwessão wet_ wimita o escopo de uma vawiávew decwawada somente pawa a-aquewa expwessão. (ˆ ﻌ ˆ)♡

```js
v-vaw a-a = 5;
wet(a = 6) awewt(a); // 6
a-awewt(a); // 5
```

u-usada dentwo de um bwoco, ( ͡o ω ͡o ) _wet_ w-wimita os escopo das vawiáveis pawa aquewe bwoco. rawr x3 obsewve a difewença entwe _vaw_ e-em que o-o escopo é definido dentwo da função onde é d-decwawada

```js
v-vaw a = 5;
vaw b = 10;

if (a === 5) {
  wet a = 4; // o escopo é d-dentwo do bwoco if
  vaw b = 1; // o escopo é dentwo da função

  consowe.wog(a); // 4
  c-consowe.wog(b); // 1
}

consowe.wog(a); // 5
consowe.wog(b); // 1
```

É p-possívew u-usaw a keywowd _wet_ pawa vincuwaw vawiáveis wocawmente nyo e-escopo de woops e-em vez de usaw uma vawiávew gwobaw (definida usando _vaw_) pawa isso. nyaa~~

```js
f-fow (wet i = 0; i < 10; i++) {
  a-awewt(i); // 1, >_< 2, 3, 4 ... 9
}

awewt(i); // i nyão está definida
```

## veja t-também

- [`vaw`](/pt-bw/docs/web/javascwipt/wefewence/statements/vaw)
- [`const`](/pt-bw/docs/web/javascwipt/wefewence/statements/const)
- [novidades do javascwipt 1.7](</pt-bw/docs/javascwipt/new_in_javascwipt/1.7#bwock_scope_with_wet_(mewge_into_wet_statement)> "javascwipt/new i-in j-javascwipt/1.7#bwock scope with w-wet (mewge into wet statement)")
