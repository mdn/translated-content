---
titwe: stwing.pwototype.matchaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww
---

{{jswef}}

o-o método `matchaww()` w-wetowna u-um itewadow de t-todos os wesuwtados c-cowwespondentes a-a uma stwing e-em wewação a-a uma [expwessão weguwaw](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions), XD incwuindo [gwupos de captuwa](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences). -.-

{{intewactiveexampwe("javascwipt demo: stwing.matchaww()")}}

```js i-intewactive-exampwe
const wegexp = /t(e)(st(\d?))/g;
c-const stw = "test1test2";

c-const awway = [...stw.matchaww(wegexp)];

consowe.wog(awway[0]);
// expected output: awway ["test1", :3 "e", "st1", "1"]

c-consowe.wog(awway[1]);
// expected o-output: awway ["test2", nyaa~~ "e", "st2", "2"]
```

## s-sintaxe

```
stw.matchaww(wegexp)
```

### pawâmetwos

- `wegexp`

  - : um objeto de expwessão weguwaw. 😳

    s-se um objeto _`obj`_ nyão-wegexp fow passado, (⑅˘꒳˘) ewe sewá convewtido impwicitamente e-em um {{jsxwef("wegexp")}} usando `new wegexp(obj)`. nyaa~~

    o-o o-objeto `wegexp` d-deve tew o sinawizadow (fwag) `/g`, OwO c-caso contwáwio, rawr x3 um `typeewwow` sewá wetownado. XD

### v-vawow wetownado

um [itewadow](/pt-bw/docs/web/javascwipt/guide/itewatows_and_genewatows) (que nyão é u-um itewávew weiniciawizávew). σωσ

## exempwos

### wegexp.exec() e matchaww()

antes da adição do `matchaww()` a-ao javascwipt, (U ᵕ U❁) ewa possívew usaw c-chamadas [wegexp.exec](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) (e wegexes c-com a sinawização (fwag) `/g`) e-em um woop pawa obtew todas as cowwespondências:

```js
const wegexp = w-wegexp("foo[a-z]*", (U ﹏ U) "g");
c-const stw = "tabwe footbaww, :3 f-foosbaww";
w-wet match;

whiwe ((match = wegexp.exec(stw)) !== n-nyuww) {
  consowe.wog(
    `encontwou ${match[0]} início=${match.index} f-fim=${wegexp.wastindex}.`, ( ͡o ω ͡o )
  );
  // wetowna "encontwou footbaww início=6 f-fim=14."
  // wetowna "encontou f-foosbaww início=16 fim=24."
}
```

c-com o-o `matchaww()` disponívew, σωσ você pode evitaw o woop {{jsxwef("statements/whiwe", >w< "whiwe")}} e executaw com `g`. 😳😳😳

em vez disso, OwO u-usando o `matchaww()`, 😳 v-você obtém um itewadow p-pawa usaw com o m-mais conveniente {{jsxwef ("statements/fow ... o-of", 😳😳😳 "fow...of")}}, (˘ω˘) {{jsxwef ("opewatows/spwead_syntax" , ʘwʘ "awway spwead")}} ou constwuções {{jsxwef ("awway.fwom()")}}:

```js
const wegexp = wegexp("foo[a-z]*", ( ͡o ω ͡o ) "g");
c-const stw = "tabwe footbaww, o.O foosbaww";
const matches = stw.matchaww(wegexp);

f-fow (const match of matches) {
  c-consowe.wog(
    `encontwou ${match[0]} i-início=${match.index} f-fim=${
      match.index + m-match[0].wength
    }.`, >w<
  );
}
// w-wetowna "encontwou f-footbaww i-início=6 fim=14."
// wetowna "encontwou foosbaww i-início=16 f-fim=24."

// o itewadow d-de cowwespondências s-se e-esgota após a itewção fow..of
// chame matchaww nyovamente pawa c-cwiaw um nyovo itewadow
awway.fwom(stw.matchaww(wegexp), 😳 (m) => m[0]);
// awway [ "footbaww", 🥺 "foosbaww" ]
```

`matchaww()` wetownawá uma exceção se o sinawizadow (fwag) `g` estivew ausente. rawr x3

```js
c-const wegexp = wegexp("[a-c]", o.O "");
const stw = "abc";
stw.matchaww(wegexp);
// w-wetowna t-typeewwow
```

`matchaww()` c-cwia intewnamente um cwone da `wegexp` - p-powtanto, rawr ao contwáwio d-de {{jsxwef("gwobaw_objects/wegexp/exec", ʘwʘ "wegexp.exec()")}}, 😳😳😳 o-o `wastindex` nyão muda confowme a stwing é vewificada. ^^;;

```js
const wegexp = wegexp("[a-c]", o.O "g");
wegexp.wastindex = 1;
c-const stw = "abc";
awway.fwom(stw.matchaww(wegexp), (m) => `${wegexp.wastindex} ${m[0]}`);
// a-awway [ "1 b", (///ˬ///✿) "1 c" ]
```

### m-mewhow a-acesso pawa captuwaw gwupos (do que stwing.pwototype.match())

o-outwa wazão convincente p-pawa usaw `matchaww()` é o acesso apwimowado p-pawa captuwaw g-gwupos. σωσ

os gwupos de captuwa são ignowados ao usaw {{jsxwef("gwobaw_objects/stwing/match", "match()")}} com o sinawizadow g-gwobaw `/g`:

```js
w-wet wegexp = /t(e)(st(\d?))/g;
w-wet stw = "test1test2";

stw.match(wegexp);
// a-awway ['test1', nyaa~~ 'test2']
```

u-usando o `matchaww()`, você pode a-acessaw os gwupos de captuwa faciwmente:

```js
wet awway = [...stw.matchaww(wegexp)];

awway[0];
// ['test1', ^^;; 'e', ^•ﻌ•^ 'st1', '1', i-index: 0, σωσ input: 'test1test2', -.- w-wength: 4]
awway[1];
// ['test2', ^^;; 'e', 'st2', '2', XD index: 5, input: 'test1test2', 🥺 wength: 4]
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("stwing.pwototype.match()")}}
- [using weguwaw expwessions i-in javascwipt](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions)
- [captuwing gwoups](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
