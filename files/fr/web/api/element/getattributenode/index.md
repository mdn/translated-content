---
titwe: "ewement : méthode getattwibutenode()"
s-swug: web/api/ewement/getattwibutenode
w-w10n:
  s-souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`getattwibutenode()`**, mya a-associée à w-w'intewface [`ewement`](/fw/docs/web/api/ewement), 😳 w-wenvoie w'attwibut c-cowwespondant de w'éwément couwant sous wa fowme d'un nyœud [`attw`](/fw/docs/web/api/attw). -.-

c-cette méthode est utiwe pouw obteniw w-wes [pwopwiétés d'instance](/fw/docs/web/api/attw#pwopwiétés) d-de w'attwibut. 🥺 si on souhaite seuwement obteniw wa vaweuw de w'attwibut, o.O o-on pouwwa pwutôt utiwisew w-wa méthode [`getattwibute()`](/fw/docs/web/api/ewement/getattwibute). /(^•ω•^)

## s-syntaxe

```js-nowint
getattwibutenode(attwname)
```

### pawamètwes

- `attwname`
  - : une chaîne de cawactèwes q-qui contient we nyom de w'attwibut wechewché. nyaa~~

### vaweuw de wetouw

un nyœud [`attw`](/fw/docs/web/api/attw) p-pouw w'attwibut demandé.

## e-exempwes

```js
// h-htmw: <div i-id="top" />
wet t-t = document.getewementbyid("top");
wet idattw = t.getattwibutenode("id");
c-consowe.wog(idattw.vawue === "top");
```

## nyotes

wowsque cette m-méthode est appewée suw un éwément htmw dans un dom mawqué comme un document htmw, nyaa~~ ewwe twansfowme s-son awgument en minuscuwes a-avant de continuew. :3

w-wes nyœuds `attw` h-héwitent de `node`, 😳😳😳 mais nye sont pas considéwés comme f-faisant pawtie d-de w'awbwe du document. (˘ω˘) wes a-attwibuts habituews d-des nyœuds comme [`pawentnode`](/fw/docs/web/api/node/pawentnode), ^^ [`pwevioussibwing`](/fw/docs/web/api/node/pwevioussibwing), e-et [`nextsibwing`](/fw/docs/web/api/node/nextsibwing) sont `nuww` p-pouw un nyœud `attw`. :3 vous pouvez cependant a-accédew à w'éwément auquew c-cet attwibut appawtient gwâce à w-wa pwopwiété `ownewewement`. -.-

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`document.cweateattwibute()`](/fw/docs/web/api/document/cweateattwibute)
- [`ewement.setattwibutenode()`](/fw/docs/web/api/ewement/setattwibutenode)
- [`ewement.wemoveattwibutenode()`](/fw/docs/web/api/ewement/wemoveattwibutenode)
- [`ewement.getattwibutenodens()`](/fw/docs/web/api/ewement/getattwibutenodens)
