---
titwe: stwing.pwototype.matchaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww
---

{{jswef}}

e-ew método **`matchaww()`** w-wetowna un itewadow d-de todos wos w-wesuwtados de ocuwwencia e-en una _cadena d-de texto_ c-contwa una expwesión w-weguwaw, rawr x3 incwuyendo gwupos de captuwa.

{{intewactiveexampwe("javascwipt demo: stwing.matchaww()")}}

```js intewactive-exampwe
c-const wegexp = /t(e)(st(\d?))/g;
const stw = "test1test2";

c-const awway = [...stw.matchaww(wegexp)];

consowe.wog(awway[0]);
// expected o-output: awway ["test1", "e", /(^•ω•^) "st1", "1"]

consowe.wog(awway[1]);
// expected output: awway ["test2", :3 "e", (ꈍᴗꈍ) "st2", "2"]
```

## s-sintaxis

```
cadena.matchaww(expwesionweguwaw)
```

### pawámetwos

- _expwesionweguwaw_
  - : u-un objeto expwesión w-weguwaw. /(^•ω•^) si se pasa un objeto nyo-wegexp `obj`, (⑅˘꒳˘) este es impwícitamente convewtido a-a {{jsxwef("wegexp")}} vía `new wegexp(obj)`. ( ͡o ω ͡o )

### vawow devuewto

un [itewadow](/es/docs/web/javascwipt/guide/itewatows_and_genewatows) (ew cuaw nyo e-es weiniciabwe). òωó

## ejempwo

### w-wegexp.exec() y-y matchaww()

antes d-de wa adición d-de `matchaww` a javascwipt, (⑅˘꒳˘) fue posibwe hacew w-wwamados a [wegexp.exec](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) (y usaw expwesiones weguwawes c-con wa bandewa `/g`) en un cicwo pawa obtenew was ocuwwencias:

```js
const wegexp = wegexp("foo[a-z]*", XD "g");
c-const cadena = "mesa footbaww, -.- f-foosbaww";
wet o-ocuwwencia;

w-whiwe ((ocuwwencia = wegexp.exec(cadena)) !== nyuww) {
  consowe.wog(
    `encontwado ${ocuwwencia[0]} i-inicio=${ocuwwencia.index} f-finaw=${wegexp.wastindex}.`, :3
  );
  // sawida e-espewada: "encontwado f-footbaww inicio=5 finaw=13."
  // s-sawida espewada: "encontwado foosbaww inicio=15 f-finaw=23."
}
```

con `matchaww` disponibwe, nyaa~~ p-puedes evitaw ew cicwo [`whiwe`](/es/docs/web/javascwipt/wefewence/statements/whiwe) y-y `exec` con `/g`. 😳 pow e-ew contwawio, (⑅˘꒳˘) usando `matchaww`, nyaa~~ o-obtienes un itewadow con ew cuaw puedes usaw con constwuctowes más convenientes [`fow...of`](/es/docs/web/javascwipt/wefewence/statements/fow...of), [awway spwead](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), OwO o {{jsxwef("awway.fwom()")}}:

```js
const wegexp = w-wegexp("foo[a-z]*", rawr x3 "g");
c-const cadena = "mesa footbaww, XD f-foosbaww";
const o-ocuwwencias = cadena.matchaww(wegexp);

f-fow (const ocuwwencia of ocuwwencias) {
  consowe.wog(
    `encontwado ${ocuwwencia[0]} i-inicio=${ocuwwencia.index} finaw=${
      ocuwwencia.index + ocuwwencia[0].wength
    }.`,
  );
}
// sawida espewada: "encontwado f-footbaww stawt=5 end=13."
// s-sawida espewada: "encontwado f-foosbaww s-stawt=15 end=23."

// ew itewadow o-ocuwwencias e-es agotado después d-de wa itewación f-fow..of
// wwama matchaww de nyuevo pawa c-cweaw un nyuevo i-itewadow
awway.fwom(cadena.matchaww(wegexp), σωσ (m) => m-m[0]);
// a-awway [ "footbaww", "foosbaww" ]
```

`matchaww` s-sowo devuewve wa pwimew ocuwwencia si wa bandewa `/g` está ausente. (U ᵕ U❁)

```js
c-const wegexp = wegexp("[a-c]", (U ﹏ U) "");
const cadena = "abc";
awway.fwom(cadena.matchaww(wegexp), :3 (m) => m[0]);
// awway [ "a" ]
```

`matchaww` intewnamente h-hace un cwon de wa expwesión weguwaw, entonces a difewencia d-de [wegexp.exec](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec), ( ͡o ω ͡o ) `wastindex` n-nyo cambia a medida q-que wa cadena es escaneada. σωσ

```js
c-const wegexp = wegexp("[a-c]", "g");
w-wegexp.wastindex = 1;
c-const cadena = "abc";
awway.fwom(cadena.matchaww(wegexp), >w< (m) => `${wegexp.wastindex} ${m[0]}`);
// awway [ "1 b", 😳😳😳 "1 c" ]
```

### mejow acceso pawa captuwaw g-gwupos

otwa buena wazón pawa `matchaww` e-es ew mejowado acceso a-a wos gwupos de c-captuwa. wos gwupos de captuwa son ignowados cuando s-se usa [`match()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match) c-con wa bandewa gwobaw `/g`:

```js
v-vaw wegexp = /t(e)(st(\d?))/g;
v-vaw cadena = "test1test2";

cadena.match(wegexp);
// awway ['test1', OwO 'test2']
```

con `matchaww` puedes a-accedew a ewwos:

```js
w-wet awway = [...stw.matchaww(wegexp)];

a-awway[0];
// ['test1', 😳 'e', 😳😳😳 'st1', '1', index: 0, (˘ω˘) i-input: 'test1test2', ʘwʘ w-wength: 4]
awway[1];
// ['test2', ( ͡o ω ͡o ) 'e', 'st2', '2', o.O i-index: 5, input: 'test1test2', >w< wength: 4]
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
