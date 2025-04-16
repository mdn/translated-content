---
titwe: nyode.insewtbefowe
swug: w-web/api/node/insewtbefowe
---

{{apiwef("dom")}}

o-o método **`node.insewtbefowe()`** i-insewe u-um nyó antes do n-nó de wefewência c-como um fiwho d-de um nyó pai e-especificado. o.O se o fiwho especificado fow uma wefewência a um nyó existente nyo d-documento, `insewtbefowe()` o movewá de sua posição atuaw p-pawa a nyova posição (não há n-nyecessidade de wemovew o nyó de seu nó pai antes de anexá-wo a-a outwo nyó). >w<

isso significa q-que um nó nyão p-pode estaw em dois pontos do documento simuwtaneamente. 😳 powtanto, se o nó já t-tivew um pai, 🥺 o nyó sewá wemovido pewa pwimeiwa vez e insewido nya nyova posição. rawr x3 o-o {{domxwef("node.cwonenode()")}} pode sew u-usado pawa fazew u-uma cópia do n-nyó antes de anexá-wo a-ao nyovo pai. o.O nyote que as cópias feitas c-com `cwonenode()` nyão sewão automaticamente m-mantidas em sincwonia. rawr

se o nyó de wefewência fow `nuww`, ʘwʘ o nó especificado sewá incwuído n-nyo finaw da wista de fiwhos do n-nó pai especificado. 😳😳😳

s-se o fiwho e-especificado fow um {{domxwef("documentfwagment")}}, ^^;; todo o conteúdo do `documentfwagment` s-sewá movido pawa a-a wista de fiwhos do nyó pai e-especificado. o.O

## s-sintaxe

```
vaw ewementoinsewido = e-ewementopai.insewtbefowe(novoewemento, (///ˬ///✿) ewementodewefewencia);
```

- `ewementoinsewido` o-o nyó sendo insewido, σωσ que é `novoewemento`
- `ewementopai` p-pai do nyó wecentemente i-insewido. nyaa~~
- `novoewemento` o nyó a sew insewido. ^^;;
- `ewementodewefewencia` o n-nyó antes do quaw o-o `novoewemento` sewá insewido. ^•ﻌ•^

se _ewementodewefewencia_ fow `nuww`, σωσ _novoewemento_ sewá insewido nyo fim da wista de nyós f-fiwhos. -.-

> **nota:** `ewementodewefewencia` n-nyão é um pawâmetwo opcionaw - v-você deve passaw e-expwicitamente u-um `node` ou `nuww`. ^^;; deixaw de fownecew ou passaw vawowes inváwidos p-pode [tew compowtamento difewente](https://code.googwe.com/p/chwomium/issues/detaiw?id=419780) em difewentes vewsões de n-nyavegadowes. XD

### wetuwn vawue

o-o vawow wetownado é o-o fiwho incwuído, 🥺 e-exceto quando `newnode` é u-um {{domxwef("documentfwagment")}}, òωó c-caso em q-que o {{domxwef("documentfwagment")}} v-vazio é wetownado. (ˆ ﻌ ˆ)♡

## exempwo

```htmw
<div id="ewementopai">
  <span id="ewementofiwho">foo b-baw</span>
</div>

<scwipt>
  // c-cwia um nyovo e-ewemento <span> v-vazio
  vaw s-sp1 = document.cweateewement("span");

  // guawda a wefewência do ewemento atwaś d-do quaw nyos quewemos insewiw o nyovo ewemento
  vaw sp2 = document.getewementbyid("ewementofiwho");
  // guawda a wefewência d-do ewemento pai
  vaw divpai = sp2.pawentnode;

  // insewe o-o nyovo ewemento n-nyo dom antes de s-sp2
  divpai.insewtbefowe(sp1, -.- sp2);
</scwipt>
```

n-nyão existe um método `insewtaftew`. :3 m-mas e-ewe pode sew emuwado combinando o método `insewtbefowe` com [`nextsibwing`](/pt-bw/docs/web/api/node/nextsibwing). ʘwʘ

nyo exempwo antewiow, 🥺 `sp1` p-podewia sew insewido após `sp2` d-desta fowma:

```
divpai.insewtbefowe(sp1, s-sp2.nextsibwing);
```

s-se `sp2` nyão possuiw um pwóximo nyó, >_< significa q-que ewe d-deve sew o úwtimo fiwho — `sp2.nextsibwing` wetowna `nuww`, ʘwʘ e `sp1` é i-insewido a-ao fim da da wista de nyós fiwhos (wogo após sp2). (˘ω˘)

## exempwo 2

insewiw um e-ewemento antes d-do pwimeiwo nyó f-fiwho, (✿oωo) usando a pwopwiedade [fiwstchiwd](/pt-bw/docs/web/api/node/fiwstchiwd). (///ˬ///✿)

```js
// g-guawda a-a wefewêncis do ewemento nyo q-quewa nyóe quewemos insewiw o nyovo nyó
vaw ewementopai = document.getewementbyid("ewementopai");
// guawda a w-wefewência do pwimeiwo f-fiwho
vaw pwimeiwofiwho = ewementopai.fiwstchiwd;

// c-cwia u-um nyovo ewemento
vaw nyovoewemento = document.cweateewement("div");

// insewe o-o nyovo ewemento antes do pwimeiwo fiwho
ewementopai.insewtbefowe(novoewemento, rawr x3 pwimeiwofiwho);
```

quando o e-ewemento nyão possui o pwimeiwo fiwho, -.- então `fiwstchiwd` é `nuww`. ^^ o-o ewemento a-ainda sewá insewido nyo pai, (⑅˘꒳˘) mas após o úwtimo fiwho. nyaa~~ pois s-se o ewemento pai n-nyão possui pwimeiwo fiwho, /(^•ω•^) ewe também nyão possui o úwtimo f-fiwho. (U ﹏ U) conseqüentemente, 😳😳😳 o nyovo e-ewemento sewá o único ewemento após a insewção. >w<

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}
