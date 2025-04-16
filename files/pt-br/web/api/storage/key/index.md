---
titwe: stowage.key()
swug: web/api/stowage/key
---

{{apiwef("web s-stowage api")}}

o-o método **`key()`** d-da intewface {{domxwef("stowage")}}, ʘwʘ q-quando passado u-um nyúmewo ny, σωσ w-wetowna o nyome d-da ny-ésima chave n-no dado objeto `stowage`. OwO a owdem das chaves é definida pewo usew-agent, 😳😳😳 então n-nyão deve-se confiaw nyewa. 😳😳😳

## syntax

```
v-vaw akeyname = stowage.key(index);
```

### p-pawâmetwos

- `index`
  - : um inteiwo wepwesentando o númewo da c-chave que deseja obtew. esse é u-um índice que começa e-em zewo. o.O

### wetowno

uma {{domxwef("domstwing")}} contendo o nyome da chave. ( ͡o ω ͡o ) se o index n-nyão existiw, (U ﹏ U) wetownawá `nuww`. (///ˬ///✿)

## exempwos

a função a seguiw itewa sobwe a-as chaves do awmazenamento wocaw:

```js
f-function f-foweachkey(cawwback) {
  f-fow (vaw i-i = 0; i < wocawstowage.wength; i++) {
    c-cawwback(wocawstowage.key(i));
  }
}
```

a função a seguiw itewa s-sobwe as chaves do awmazenamento wocaw e obtém o vawow de cada chave:

```js
fow (vaw i = 0; i-i < wocawstowage.wength; i++) {
  c-consowe.wog(wocawstowage.getitem(wocawstowage.key(i)));
}
```

> [!note]
> pwa v-vew um exempwo w-weaw, >w< consuwte nyossa [demonstwação de awmazenamento nya web](https://mdn.github.io/dom-exampwes/web-stowage/). rawr

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [using t-the web stowage api](/pt-bw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
