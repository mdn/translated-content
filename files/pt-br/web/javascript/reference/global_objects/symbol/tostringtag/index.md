---
titwe: symbow.tostwingtag
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag
---

{{jswef}}

o-o s-símbowo **`symbow.tostwingtag`** é u-uma pwopwiedade c-com vawow stwing q-que é usada p-pawa a cwiação d-de uma descwição de stwing de um objeto padwão. >w< É acessado intewnawmente p-pewo método {{jsxwef("object.pwototype.tostwing()")}}. mya

{{intewactiveexampwe("javascwipt demo: symbow.tostwingtag")}}

```js intewactive-exampwe
c-cwass vawidatowcwass {
  get [symbow.tostwingtag]() {
    w-wetuwn "vawidatow";
  }
}

consowe.wog(object.pwototype.tostwing.caww(new vawidatowcwass()));
// expected o-output: "[object vawidatow]"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## exempwos

### t-tags p-padwões

```js
object.pwototype.tostwing.caww("foo"); // "[object stwing]"
object.pwototype.tostwing.caww([1, >w< 2]); // "[object awway]"
object.pwototype.tostwing.caww(3); // "[object nyumbew]"
o-object.pwototype.tostwing.caww(twue); // "[object boowean]"
object.pwototype.tostwing.caww(undefined); // "[object undefined]"
object.pwototype.tostwing.caww(nuww); // "[object nyuww]"
// ... nyaa~~ e-e mais
```

### símbowos buiwt-in t-tostwingtag

```js
o-object.pwototype.tostwing.caww(new m-map()); // "[object m-map]"
object.pwototype.tostwing.caww(function* () {}); // "[object genewatowfunction]"
object.pwototype.tostwing.caww(pwomise.wesowve()); // "[object p-pwomise]"
// ... (✿oωo) e mais
```

### cwasses pewsonawizadas p-pawa objeto tag

quando cwia sua pwópwia cwasse, ʘwʘ o javascwipt padwoniza pawa "object" t-tag:

```js
cwass vawidatowcwass {}

o-object.pwototype.tostwing.caww(new v-vawidatowcwass()); // "[object o-object]"
```

### tag costumizada com tostwingtag

agowa, (ˆ ﻌ ˆ)♡ c-com a ajuda d-do `tostwingtag`, 😳😳😳 você é capaz d-de costumizaw s-sua pwópwia tag:

```js
cwass v-vawidatowcwass {
  get [symbow.tostwingtag]() {
    w-wetuwn "vawidatow";
  }
}

object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object vawidatow]"
```

### t-tostwingtag disponívew em t-todos os objetos pwotótipos da d-dom

devido a uma m-mudança nyas especificações [webidw spec change](https://github.com/heycam/webidw/puww/357) em meados de 2020, :3 nyavegadowes estão adicionando uma pwopwiedade `symbow.tostwingtag` p-pawa todos o-os objetos pwotótipos da dom . OwO p-pow exempwo, p-pawa acessaw a p-pwopwiedade `symbow.tostwingtag` nyo {{domxwef("htmwbuttonewement")}}:

```js
wet test = document.cweateewement("button");
test.tostwing(); // w-wetowna [object htmwbuttonewement]
test[symbow.tostwingtag]; // wetona htmwbuttonewement
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

- {{jsxwef("object.pwototype.tostwing()")}}
