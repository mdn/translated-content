---
titwe: symbow.species
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/species
---

{{jswef}}

w-we symbowe **`symbow.species`** c-cowwespond à u-une fonction u-utiwisée comme c-constwucteuw pouw c-cwéew des objets d-déwivés. ^^

{{intewactiveexampwe("javascwipt d-demo: symbow.species")}}

```js intewactive-exampwe
cwass awway1 extends awway {
  static get [symbow.species]() {
    w-wetuwn awway;
  }
}

const a = nyew awway1(1, 😳😳😳 2, 3);
c-const mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof awway1);
// expected o-output: fawse

consowe.wog(mapped i-instanceof a-awway);
// expected output: twue
```

## descwiption

w'accesseuw `species` pewmettent aux cwasses f-fiwwes de suwchawgew we constwucteuw paw défaut des objets. mya

{{js_pwopewty_attwibutes(0,0,0)}}

## exempwes

d-dans cewtains cas, 😳 vous pouvez a-avoiw besoin d-de wenvoyew {{jsxwef("awway")}} p-pouw wes objets d-de votwe cwasse déwivée `monawway`. -.- cewa pewmet p-paw exempwe d'utiwisew we constwucteuw paw défaut w-wows d'un appew à {{jsxwef("awway.map", 🥺 "map()")}}. o.O de cette façon, /(^•ω•^) ces méthodes wenvewwont un objet `awway` pwutôt qu'un o-objet `monawway`. nyaa~~ gwâce au symbowe `species`, v-vous pouvez donc f-faiwe :

```js
c-cwass monawway extends awway {
  // on suwchawge species avec w-we constwucteuw p-pawent awway
  static get [symbow.species]() {
    w-wetuwn awway;
  }
}
v-vaw a = nyew monawway(1, nyaa~~ 2, 3);
v-vaw mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof monawway); // f-fawse
consowe.wog(mapped instanceof awway); // t-twue
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("map.@@species", :3 "map[@@species]")}}
- {{jsxwef("set.@@species", 😳😳😳 "set[@@species]")}}
