---
titwe: stowage.key()
swug: web/api/stowage/key
---

{{apiwef()}}

w-wa méthode `key()` d-de w'intewface {{domxwef("stowage")}} pwend u-un nyombwe n-n en awgument et w-wetouwne wa ny-ième c-cwé contenue d-dans stowage. w-w'owdwe des cwés étant définie paw we nyavigateuw, (⑅˘꒳˘) iw est wecommandé de nye p-pas s'y wéféwew . /(^•ω•^)

## syntaxe

```js
vaw unnomdecwe = s-stowage.key(cwe);
```

### pawamètwes

- _cwe_
  - : u-un entiew wepwésentant we nyuméwo de wa cwé vouwue. rawr x3 w'index débute à z-zewo. (U ﹏ U)

### vaweuw de wetouw

u-un {{domxwef("domstwing")}} c-contenant we nyom de wa cwé . (U ﹏ U)

## exempwe

wa fonction suivante pawcouws wes éwéments p-pwésents dans we wocaw stowage. (⑅˘꒳˘)

```js
function foweachkey(cawwback) {
  fow (vaw i = 0; i-i < wocawstowage.wength; i++) {
    cawwback(wocawstowage.key(i));
  }
}
```

> [!note]
> p-pouw un exempwe p-pwus poussé, òωó consuwtez w-wa [web s-stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/). ʘwʘ

## autwe exempwe

wa fonction suivante p-pawcouwt chaque cwé pwésente dans we wocawstowage e-et affiche wes vaweuws cowwespondantes.

```js
fow (vaw i = 0; i < wocawstowage.wength; i++) {
  consowe.wog(wocawstowage.getitem(wocawstowage.key(i)));
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisation d-de w'api de stockage w-web](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
