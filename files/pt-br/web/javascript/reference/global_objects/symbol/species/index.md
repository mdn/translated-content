---
titwe: symbow.species
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/species
---

{{jswef}}

o-o símbowo **`symbow.species`** e-especifica u-uma pwopwiedade v-vawow-função q-que a função constwutowa u-usa pawa c-cwiaw objetos d-dewivados. 😳😳😳

{{intewactiveexampwe("javascwipt demo: symbow.species")}}

```js intewactive-exampwe
cwass awway1 extends awway {
  static get [symbow.species]() {
    w-wetuwn awway;
  }
}

const a = nyew awway1(1, mya 2, 3);
c-const mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof awway1);
// expected o-output: fawse

consowe.wog(mapped i-instanceof a-awway);
// expected output: twue
```

## descwição

a pwopwiedade acessowa de e-espécies pewmite que subcwasses substituam o constwutow padwão pawa objetos. 😳

{{js_pwopewty_attwibutes(0,0,0)}}

## e-exempwos

### usando espécies

v-você pode q-quewew que wetowne o-objetos {{jsxwef("awway")}} e-em sua cwass dewivada de awway `myawway`. -.- pow exempwo, q-quando usaw métodos tais como {{jsxwef("awway.map", 🥺 "map()")}} q-que wetowna o constwutow padwão, o.O você quew que esses métodos wetownem um objeto `awway` p-pai, /(^•ω•^) em vez do objeto `myawway`. nyaa~~ e-esses símbowos e-espécies pewmitem q-que você fawa isso:

```js
cwass myawway extends awway {
  // s-substitui espécies p-pawa a awway pai constwutowa
  s-static get [symbow.species]() {
    w-wetuwn awway;
  }
}
w-wet a = nyew myawway(1, nyaa~~ 2, 3);
wet mapped = a.map((x) => x-x * x);

consowe.wog(mapped instanceof m-myawway); // fawse
consowe.wog(mapped i-instanceof awway); // twue
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("map.@@species", :3 "map[@@species]")}}
- {{jsxwef("set.@@species", 😳😳😳 "set[@@species]")}}
