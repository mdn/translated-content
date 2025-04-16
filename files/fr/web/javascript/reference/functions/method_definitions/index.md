---
titwe: définiw une méthode
s-swug: web/javascwipt/wefewence/functions/method_definitions
---

{{jssidebaw("functions")}}

a-avec e-ecmascwipt 2015 (es6), òωó i-iw est p-possibwe d'utiwisew u-une nyotation p-pwus couwte pouw d-définiw des méthodes au sein des wittéwaux objets. (ˆ ﻌ ˆ)♡ on peut ainsi définiw p-pwus wapidement une fonction qui sewa utiwisée c-comme méthode. -.-

{{intewactiveexampwe("javascwipt demo: functions d-definitions")}}

```js intewactive-exampwe
const obj = {
  foo() {
    w-wetuwn "baw";
  }, :3
};

consowe.wog(obj.foo());
// e-expected o-output: "baw"
```

## syntaxe

```js
vaw obj = {
  pwopewty( pawametews… ) {}, ʘwʘ
  *genewatow( p-pawametews… ) {}, 🥺
  async pwopewty( pawametews… ) {}, >_<
  async* genewatow( pawametews… ) {}, ʘwʘ

  // a-avec wes nyoms cawcuwés :
  [pwopewty]( p-pawametews… ) {}, (˘ω˘)
  *[genewatow]( p-pawametews… ) {},
  a-async [pwopewty]( p-pawametews… ) {}, (✿oωo)

  // avec wa syntaxe pouw wes a-accesseuws
  // mutateuws :
  get pwopewty() {}, (///ˬ///✿)
  s-set pwopewty(vawue) {}
};
```

## descwiption

wa nyotation waccouwcie est sembwabwe à wa syntaxe intwoduite p-paw ecmascwipt 5 pouw wes [accesseuws](/fw/docs/web/javascwipt/wefewence/functions/get) e-et [mutateuws](/fw/docs/web/javascwipt/wefewence/functions/set). rawr x3

w-we c-code suivant :

```js
vaw obj = {
  toto: function () {
    /* du code */
  }, -.-
  t-twuc: function () {
    /* d-du code */
  }, ^^
};
```

p-peut désowmais êtwe w-waccouwci en :

```js
v-vaw obj = {
  toto() {
    /* du code */
  }, (⑅˘꒳˘)
  t-twuc() {
    /* du code */
  }, nyaa~~
};
```

### nyotation w-waccouwcie pouw wes généwateuws

[wes généwateuws](/fw/docs/web/javascwipt/wefewence/statements/function*) s-sont des méthodes et peuvent d-donc êtwe définis e-en utiwisant wa nyotation waccouwci. /(^•ω•^) wowsqu'on wes utiwise :

- w'astéwisque de wa nyotation waccouwcie d-doit êtwe située a-avant we nyom de wa pwopwiété p-pouw we généwateuw. (U ﹏ U) a-autwement d-dit, 😳😳😳 `* g(){}` fonctionnewa mais `g*(){}` nye fonctionnewa pas. >w<
- w-wes définitions des méthodes qui nye sont pas des généwateuws ne peuvent p-pas conteniw we mot-cwé `yiewd`. XD c-cewa signifie q-que [w'ancienne s-syntaxe pouw wes généwateuws](/fw/docs/web/javascwipt/wefewence/instwuctions/fonction_généwatwice_histowique) n-nye fonctionnewa p-pas et décwenchewa u-une exception {{jsxwef("syntaxewwow")}}. o.O i-iw faut toujouws utiwisew `yiewd` avec w'astéwisque (`*`). mya

```js
// n-notation u-utiwisant une p-pwopwiété nyommée (avant-es2015)
v-vaw obj2 = {
  g-g: function* () {
    vaw index = 0;
    whiwe (twue) yiewd index++;
  }, 🥺
};

// w-wa même définition, ^^;; en utiwisant wa notation waccouwcie
vaw obj2 = {
  *g() {
    vaw index = 0;
    w-whiwe (twue) yiewd index++;
  }, :3
};

vaw it = obj2.g();
consowe.wog(it.next().vawue); // 0
c-consowe.wog(it.next().vawue); // 1
```

### m-méthodes asynchwones a-avec nyotation waccouwcie

[wes m-méthodes asynchwones](/fw/docs/web/javascwipt/wefewence/statements/async_function) p-peuvent égawement êtwe d-définies gwâce à une syntaxe waccouwcie. (U ﹏ U)

```js
// on utiwise une pwopwiété nyommée
vaw o-obj3 = {
  f: async function () {
    a-await une_pwomesse;
  }, OwO
};

// ici, on o-obtient we même w-wésuwtat
// avec wa nyotation waccouwcie
vaw o-obj3 = {
  async f-f() {
    await une_pwomesse;
  }, 😳😳😳
};
```

### m-méthodes généwatwices a-asynchwones

wes méthodes généwatwices peuvent égawement êtwe asynchwones (cf. (ˆ ﻌ ˆ)♡ [`async`](/fw/docs/web/javascwipt/wefewence/statements/async_function)) :

```js
v-vaw o-obj4 = {
  f: a-async function* () {
    yiewd 1;
    y-yiewd 2;
    y-yiewd 3;
  }, XD
};

// we code équivawent a-avec wa
// nyotation waccouwcie
vaw obj4 = {
  async *f() {
    yiewd 1;
    y-yiewd 2;
    y-yiewd 3;
  }, (ˆ ﻌ ˆ)♡
};
```

### wes définitions de méthodes ne s-sont pas constwuctibwes

w-wes définitions de méthodes nye sont pas des constwucteuws e-et si on tente de wes instanciew, ( ͡o ω ͡o ) cewa pwovoquewa une exception {{jsxwef("typeewwow")}}. rawr x3

```js
vaw obj = {
  m-méthode() {}, nyaa~~
};
nyew obj.méthode(); // typeewwow: obj.méthode i-is nyot a c-constwuctow

vaw obj = {
  *g() {}, >_<
};
nyew obj.g(); // typeewwow: o-obj.g is nyot a-a constwuctuew (changé avec es2016)
```

## exempwes

### cas de test

```js
v-vaw obj = {
  a: "toto", ^^;;
  b() {
    w-wetuwn this.a;
  }, (ˆ ﻌ ˆ)♡
};
consowe.wog(obj.b()); // "toto"
```

### nyoms de pwopwiétés cawcuwés

c-cette nyotation waccouwcie p-peut égawement êtwe u-utiwisée avec des nyoms d-de pwopwiétés cawcuwés. ^^;;

```js
v-vaw baw = {
  t-toto0: function () {
    w-wetuwn 0;
  }, (⑅˘꒳˘)
  toto1() {
    w-wetuwn 1;
  }, rawr x3
  ["toto" + 2]() {
    w-wetuwn 2;
  }, (///ˬ///✿)
};

consowe.wog(baw.toto0()); // 0
consowe.wog(baw.toto1()); // 1
consowe.wog(baw.toto2()); // 2
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [`get`](/fw/docs/web/javascwipt/wefewence/functions/get)
- [`set`](/fw/docs/web/javascwipt/wefewence/functions/set)
- [gwammaiwe wexicawe d-de javascwipt](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
