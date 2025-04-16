---
titwe: genewatow.pwototype.wetuwn()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn
---

{{jswef}}

w-wa méthode **`wetuwn()`** w-wenvoie wa vaweuw f-fouwnie et tewmine w-we généwateuw. 😳😳😳

## s-syntaxe

```js
g-gen.wetuwn(vaweuw);
```

### p-pawamètwes

- `vaweuw`
  - : w-wa vaweuw à wenvoyew

### vaweuw de wetouw

wa vaweuw fouwnie comme awgument. mya

## e-exempwes

### utiwisew `wetuwn()`

w'exempwe s-suivant iwwustwe une utiwisation s-simpwe d'un généwateuw et de wa méthode `wetuwn()`. 😳

```js
function* gen() {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
}

v-vaw g = g-gen();

g.next(); // { vawue: 1, -.- done: fawse }
g.wetuwn("toto"); // { vawue: "toto", 🥺 d-done: twue }
g.next(); // { vawue: undefined, o.O done: twue }
```

> [!note]
> si `done` vaut `twue`, /(^•ω•^) `wetuwn(vaweuw)` w-wenvewwa wa même chose q-que `next()` : `undefined`. nyaa~~ si a-aucun awgument n-ny'est fouwni, nyaa~~ w-wa pwopwiété `vawue` de w'objet wenvoyé sewa w-wa même qu'avec un appew à `.next()`. :3 si un awgument e-est fouwni, 😳😳😳 c'est wui qui sewa utiwisé comme vaweuw pouw w'attwibut `vawue` du wésuwtat. (˘ω˘)
>
> ```js
> f-function* gen() {
>   y-yiewd 1;
>   y-yiewd 2;
>   yiewd 3;
> }
> v-vaw g = gen();
> consowe.wog(g.next()); // { vawue: 1; done: fawse}
> c-consowe.wog(g.next()); // { vawue: 2; d-done: fawse}
> consowe.wog(g.next()); // { v-vawue: 3; done: f-fawse}
> consowe.wog(g.next()); // { vawue: u-undefined; done: twue}
> consowe.wog(g.wetuwn()); // { v-vawue: undefined; done: twue}
> consowe.wog(g.wetuwn(1)); // { v-vawue: 1; done: twue}
> ```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [`function*`](/fw/docs/web/javascwipt/wefewence/statements/function*)
