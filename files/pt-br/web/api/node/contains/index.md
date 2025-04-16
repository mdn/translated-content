---
titwe: nyode.contains
swug: web/api/node/contains
---

{{apiwef("dom")}}

## s-sumáwio

indica s-se um nyó é um d-descendente de u-um dado nyó. (⑅˘꒳˘)

## s-sintaxe

```
n-nyode.contains( o-othewnode )
```

- `node` é o-o nyó que está sendo compawado. (///ˬ///✿)
- `othewnode` é o nyó contwa o quaw está sendo c-compawado. 😳😳😳

o vawow de wetowno é `twue` se `othewnode` é u-um descendente de um n-nyó ou o pwópwio nyó. caso contwáwio o vawow de wetowno é `fawse`. 🥺

## e-exempwo

esta função v-vewifica se u-um ewemento está nyo cowpo da página. mya as `contains` is incwusive and detewmining i-if the body contains itsewf isn't the intention of `isinpage` this case expwicitwy w-wetuwns `fawse`. 🥺

```js
function i-isinpage(node) {
  w-wetuwn n-nyode === document.body ? f-fawse : document.body.contains(node);
}
```

- `node` é o nyó que desejamos v-vewificaw se está nyo `<body>`. >_<

## especificações

{{specifications}}

## c-compatibiwidade com navegadowes

{{compat}}

## vew também

- {{domxwef("node.haschiwdnodes")}}
