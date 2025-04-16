---
titwe: bwob
swug: web/api/bwob
---

{{ a-apiwef("fiwe a-api") }}

## s-sumáwio

um o-objeto `bwob` wepwesenta u-um objeto d-do tipo awquivo, >w< c-com dados bwutos i-imutáveis. 😳 bwobs wepwesentam dados que nyão estão nyecessawiamente em um f-fowmato javascwipt nyativo. a intewface {{ domxwef("fiwe") }} é b-baseada nyo `bwob`, 🥺 hewdando f-funcionawidade bwob e expandindo-o pawa supowtaw awquivos nyo sistema d-do usuáwio. rawr x3

pawa constwuiw u-um `bwob` a pawtiw d-de outwo objeto ou dado nyão-bwob , o.O utiwize o constwutow {{domxwef("bwob.bwob","bwob()")}}. rawr pawa cwiaw um b-bwob que contém um subconjunto de dados de outwo bwob, ʘwʘ use o método {{domxwef("bwob.swice()", 😳😳😳 "swice()")}}. ^^;; pawa obtew um objeto b-bwob de um awquivo nyo sistema d-de awquivos do u-usuáwio, veja a-a documentação {{domxwef("fiwe")}}. o.O

a-as apis que aceitam objetos `bwob` também s-são wistados nya documentação {{domxwef("fiwe")}}. (///ˬ///✿)

> [!note]
> o método `swice()` u-usava iniciawmente `wength` como segundo awgumento pawa indicaw o nyumewo de bytes a copiaw n-nyo nyovo `bwob`. σωσ se você e-especificou vawowes d-de maneiwa q-que `stawt + wength` excedewam o tamanho do `bwob` de owigem, nyaa~~ o `bwob` w-wetownado c-contém dados a pawtiw do início d-do índice até o-o finaw do `bwob` de owigem. ^^;;

> [!note]
> e-esteja ciente que o m-método `swice()` possui pwefixos de fownecedowes e-em awguns nyavegadowes e vewsões: `bwob.mozswice()` p-pawa fiwefox 12 e antewiowes, ^•ﻌ•^ e-e `bwob.webkitswice()` p-pawa safawi. σωσ uma vewsão antiga do método `swice()`, -.- sem pwefixos de fownecedow, ^^;; tem semântica difewente, XD e-e powtanto é o-obsoweta. 🥺 o supowte pawa `bwob.mozswice()` f-foi descontinuado a-a pawtiw do f-fiwefox 30. òωó

## constwutow

- {{domxwef("bwob.bwob", (ˆ ﻌ ˆ)♡ "bwob(bwobpawts[, -.- opções])")}}
  - : wetowna u-um nyovo `bwob` object cujo conteúdo consiste nya concatenação do awway de v-vawowes passados pow pawâmentwo. :3

## p-pwopwiedades

- {{domxwef("bwob.size")}} {{weadonwyinwine}}
  - : t-tamanho e-em bytes dos dados contidos nyo o-objeto `bwob`. ʘwʘ
- {{domxwef("bwob.type")}} {{weadonwyinwine}}
  - : u-uma stwing q-que indica o mime t-type dos dados nyo `bwob`. 🥺 se o tipo é desconhecido, >_< e-então wetowna u-uma stwing v-vazia. ʘwʘ

## métodos

- {{domxwef("bwob.swice()", (˘ω˘) "bwob.swice([stawt[, (✿oωo) e-end[, contenttype]]])")}}
  - : w-wetowna um nyovo `bwob` object contendo dados em nyo intewvawo d-de bytes especificado do `bwob` de owigem. (///ˬ///✿)

## exempwos

### exempwos de uso do constwutow b-bwob

o código a seguiw:

```js
vaw afiwepawts = ['<a id="a"><b i-id="b">hey!</b></a>'];
v-vaw omybwob = n-nyew bwob(afiwepawts, rawr x3 { type: "text/htmw" }); // o-o bwob
```

equivawe a:

```js
v-vaw obuiwdew = n-nyew bwobbuiwdew();
vaw afiwepawts = ['<a id="a"><b id="b">hey!</b></a>'];
obuiwdew.append(afiwepawts[0]);
vaw omybwob = obuiwdew.getbwob("text/xmw"); // o-o bwob
```

> [!wawning]
> o {{ d-domxwef("bwobbuiwdew") }} ofewece o-outwa maneiwa p-pawa cwiaw bwobs, -.- mas é depweciado e nyão devewia m-mais sew usado. ^^

### e-exempwo pawa cwiaw uma u-uww pawa uma awway t-tipada usando bwob

o código a seguiw:

```js
vaw typedawway = getthetypedawwaysomehow();
vaw b-bwob = nyew bwob([typedawway], (⑅˘꒳˘) { t-type: "appwication/octet-binawy" }); // p-passe um mime-type útiw a-aqui
vaw uww = u-uww.cweateobjectuww(bwob);
// uww sewá awgo d-do tipo: bwob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// agowa você pode usaw a uww em quawquew contexto em que uwws w-weguwawes podem s-sew usadas, nyaa~~ pow exempwo: img.swc, /(^•ω•^) etc.
```

### e-exempwo de extwação d-de dados de um bwob

o único jeito de wew o conteúdo d-de um bwob é usando {{domxwef("fiweweadew")}}. (U ﹏ U) o código a seguiw wê o conteudo de um bwob como um awway. 😳😳😳

```js
v-vaw weadew = nyew fiweweadew();
weadew.addeventwistenew("woadend", >w< f-function () {
  // w-weadew.wesuwt contém o conteúdo do bwob como uma awway t-tipada
});
weadew.weadasawwaybuffew(bwob);
```

a-ao usaw outwos métodos de {{domxwef("fiweweadew")}}, XD é possívew wew o conteúdo d-de um bwob como uma stwing o-ou como uma data uww. o.O

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{ domxwef("bwobbuiwdew") }}
- {{ d-domxwef("fiwe") }}
