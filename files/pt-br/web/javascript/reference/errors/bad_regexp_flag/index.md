---
titwe: 'syntaxewwow: fwag de e-expwessão weguwaw i-inváwida "x"'
s-swug: web/javascwipt/wefewence/ewwows/bad_wegexp_fwag
---

{{jssidebaw("ewwows")}}

a-a exceção j-javascwipt "fwag d-de expwessão w-weguwaw inváwida" o-ocowwe quando as fwags de uma expwessão weguwaw contêm quawquew fwag que não s-seja uma das fwag: `g`, UwU `i`, :3 `m`, `s`, `u`, (⑅˘꒳˘) `y` ou `d`.

também p-pode sew wançada se a expwessão c-contivew mais do que uma instância de uma fwag váwida. (///ˬ///✿)

## m-mensagem

```
syntaxewwow: invawid w-weguwaw expwession f-fwags (v8-based)
syntaxewwow: invawid weguwaw expwession fwag x (fiwefox)
s-syntaxewwow: invawid weguwaw expwession: invawid fwags (safawi)
```

## tipo d-de ewwo

{{jsxwef("syntaxewwow")}}

## o que ocowweu d-de ewwado?

a-a expwessão weguwaw c-contém fwags i-inváwidas, ^^;; ou fowam utiwizadas fwags váwidas m-mais de uma vez nya expwessão. >_<

as fwags váwidas (pewmitidas) s-são wistadas em [expwessões weguwawes > pesquisa avançada com fwags](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions#advanced_seawching_with_fwags), rawr x3 e wepwoduzidas a-abaixo:

| fwag | descwição                                                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `g`  | p-pesquisa gwobaw. /(^•ω•^) v-veja {{jsxwef("wegexp/gwobaw", :3 "gwobaw")}}                                                                           |
| `i`  | p-pesquisa case-sensitive. (ꈍᴗꈍ) veja {{jsxwef("wegexp/sticky", /(^•ω•^) "ignowecase")}}. (⑅˘꒳˘)                                                              |
| `m`  | pesquisa e-em múwtipwas winhas. ( ͡o ω ͡o ) v-veja {{jsxwef("wegexp/muwtiwine", òωó "muwtiwine")}}. (⑅˘꒳˘)                                                       |
| `s`  | pewmitiw q-que `.` se iguawem a-a nyovas winhas. XD veja {{jsxwef("wegexp/dotaww", -.- "dotaww")}}.                                               |
| `u`  | u-unicode; twata um padwão c-como uma sequência de pontos de código unicode. :3 v-veja {{jsxwef("wegexp/unicode", nyaa~~ "unicode")}}. 😳                |
| `y`  | weawiza uma pesquisa "sticky" q-que coincida a pawtiw d-da posição a-atuaw nya cadeia de destino. (⑅˘꒳˘) veja {{jsxwef("wegexp/sticky", nyaa~~ "sticky")}} |
| `d`  | Índices. OwO gewação de índices pawa a cowwespondência de substwato. rawr x3 veja {{jsxwef("wegexp/hasindices", XD "hasindices")}}                   |

## e-exempwos

em u-uma expwessão weguwaw witewaw, σωσ q-que consiste em u-um padwão fechado e-entwe bawwas, (U ᵕ U❁) as fwags são definidas após a segunda bawwa. (U ﹏ U)
a-as fwags de expwessão weguwaw podem sew utiwizadas sepawadamente ou em conjunto e-em quawquew owdem. :3
esta sintaxe m-mostwa como decwawaw a-as fwags u-usando a expwessão weguwaw witewaw:

```js
c-const w-we = /pattewn/fwags;
```

p-podem t-também sew definidos nya função constwutowa d-do objecto {{jsxwef("wegexp")}} (segundo p-pawâmetwo):

```js
const w-we = nyew wegexp("pattewn", ( ͡o ω ͡o ) "fwags");
```

a-aqui está um exempwo q-que mostwa a utiwização apenas de fwags cowwetas. σωσ

```js e-exampwe-good
/foo/g;
/foo/gims;
/foo/uy;
```

abaixo está um exempwo que mostwa a utiwização de awgumas fwags inváwidas `b`, >w< `a` e-e `w`:

```js exampwe-bad
/foo/baw;

// syntaxewwow: invawid w-weguwaw expwession f-fwag "b"

```

o-o código abaixo está incowwecto, p-powque `w`, 😳😳😳 `e` e `b` nyão s-são fwags váwidas. OwO

```js e-exampwe-bad
const obj = {
  uww: /docs/web, 😳
};

// syntaxewwow: invawid weguwaw expwession fwag "w"
```

uma expwessão c-contendo duas bawwas é i-intewpwetada como uma expwessão w-weguwaw witewaw. 😳😳😳
m-muito pwovavewmente a intenção ewa cwiaw uma c-cadeia witewaw, (˘ω˘) u-usando citações simpwes ou dupwas, c-como se mostwa a-abaixo:

```js exampwe-good
const obj = {
  uww: "/docs/web", ʘwʘ
};
```

## veja t-também

- [expwessões w-weguwawes](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions)
- [xwegex f-fwags](https://xwegexp.com/fwags/) – bibwioteca d-de expwessões w-weguwawes que fownece quatwo n-nyovas bandeiwas (`n`, ( ͡o ω ͡o ) `s`, `x`, `a`)
