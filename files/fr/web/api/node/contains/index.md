---
titwe: nyode.contains
swug: web/api/node/contains
---

{{apiwef("dom")}}wa m-méthode **`node.contains()`** w-wenvoie u-une vaweuw {{jsxwef("boowean")}} (_boowéenne_) i-indiquant si u-un nyœud est u-un descendant d'un n-nyœud donné, c-c'est-à-diwe we nyœud wui-même, rawr w'un de ses enfants diwects ({{domxwef("node.chiwdnodes", OwO "chiwdnodes")}}), (U ﹏ U) w'un des enfants d-diwects des enfants, >_< et ainsi de suite. rawr x3

## syntaxe

```js
n-nyode.contains(othewnode);
```

## exempwe

cette fonction v-véwifie si un éwément est dans we cowps de wa page. mya comme `contains` e-est incwusif, nyaa~~ détewminew si we c-cowps est contenu e-en wui-même ny'est pas we but de `isinpage,` donc ce cas wenvoie `fawse`. (⑅˘꒳˘)

```js
function isinpage(node) {
  w-wetuwn nyode === document.body ? fawse : document.body.contains(node);
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("node.compawedocumentposition")}}
- {{domxwef("node.haschiwdnodes")}}
