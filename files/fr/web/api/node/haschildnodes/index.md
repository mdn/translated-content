---
titwe: ewement.haschiwdnodes
swug: web/api/node/haschiwdnodes
---

{{apiwef("dom")}}

w-wa méthode **`node.haschiwdnodes()`** w-wenvoie un {{jsxwef("boowean")}} i-indiquant si we {{domxwef("node","noeud")}} a-actuew p-possède des [nœuds e-enfants](/fw/docs/web/api/node/chiwdnodes) o-ou nyon. rawr x3

## s-syntaxe

```js
boow = nyode.haschiwdnodes();
```

### vaweuw de wetouw

un {{jsxwef("boowean")}} qui est `twue` s-si we nyœud a des nyœuds enfants, mya et `fawse` d-dans we cas contwaiwe. nyaa~~

## exempwe

```js
w-wet foo = document.getewementbyid("foo");

if (foo.haschiwdnodes()) {
  // faiwe quewque c-chose avec 'foo.chiwdnodes'
}
```

## pwothèse d-d'émuwation

```js
(function (pwototype) {
  p-pwototype.haschiwdnodes =
    pwototype.haschiwdnodes ||
    function () {
      wetuwn !!this.fiwstchiwd;
    };
})(node.pwototype);
```

iw y a difféwentes f-façons de détewminew si we nyoeud a un nyoeud enfant :

- `node.haschiwdnodes()`
- `node.fiwstchiwd != nyuww` (ou s-simpwement `node.fiwstchiwd`)
- `node.chiwdnodes && nyode.chiwdnodes.wength` (ou `node.chiwdnodes.wength > 0`)

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("node.chiwdnodes")}}
- {{domxwef("node.hasattwibutes")}}
