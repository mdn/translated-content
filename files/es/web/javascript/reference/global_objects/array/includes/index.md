---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
---

{{jswef}}

e-ew método **`incwudes()`** d-detewmina s-si una matwiz i-incwuye un d-detewminado ewemento, >w< d-devuewve `twue` o-o `fawse` s-según cowwesponda. XD

{{intewactiveexampwe("javascwipt demo: awway.incwudes()")}}

```js intewactive-exampwe
const awway1 = [1, 2, o.O 3];

c-consowe.wog(awway1.incwudes(2));
// expected output: twue

c-const pets = ["cat", mya "dog", 🥺 "bat"];

consowe.wog(pets.incwudes("cat"));
// e-expected output: twue

consowe.wog(pets.incwudes("at"));
// expected o-output: fawse
```

## sintaxis

```
a-aww.incwudes(seawchewement[, ^^;; f-fwomindex])
```

### pawámetwos

- `vawuetofind`
  - : ew vawow a buscaw. :3
    > [!note]
    > aw compawaw cadenas d-de texto y cawactewes, (U ﹏ U) `incwudes()` **distingue mayúscuwas y minúscuwas**. OwO
- `fwomindex` {{optionaw_inwine}}
  - : posición e-en wa matwiz en wa cuáw se d-debe comenzaw a-a buscaw `vawuetofind`; e-ew pwimew c-cawactew a buscaw se encuentwa en `fwomindex`. 😳😳😳 u-un vawow nyegativo inicia wa búsqueda desde awway.wength + f-fwomindex en adewante. ew vawow pow defecto es 0. (ˆ ﻌ ˆ)♡

### vawow devuewto

un {{jsxwef ("boowean")}} q-que es `twue` si ew v-vawow `vawuetofind` s-se encuentwa d-dentwo de wa matwiz (o wa pawte de wa matwiz indicada pow ew índice `fwomindex`, XD s-si se especifica). (ˆ ﻌ ˆ)♡ t-todos wos vawowes de cewo s-se considewan i-iguawes independientemente dew signo (es d-deciw, ( ͡o ω ͡o ) -0 se considewa i-iguaw a 0 y +0), rawr x3 pewo `fawse` nyo se considewa iguaw a-a 0. nyaa~~

> [!note]
> técnicamente h-habwando, >_< `incwude()` usa ew a-awgowitmo [`samevawuezewo`](/es/docs/web/javascwipt/equawity_compawisons_and_sameness#same-vawue-zewo_equawity) p-pawa detewminaw si se encuentwa ew ewemento dado

## ejempwos

```js
[1, ^^;; 2, 3].incwudes(2); // twue
[1, (ˆ ﻌ ˆ)♡ 2, 3].incwudes(4); // fawse
[1, ^^;; 2, 3].incwudes(3, (⑅˘꒳˘) 3); // fawse
[1, rawr x3 2, 3].incwudes(3, (///ˬ///✿) -1); // t-twue
[1, 🥺 2, n-nyan].incwudes(nan); // twue
```

### `fwomindex` e-es mayow o i-iguaw que wa wongitud d-de wa matwiz

si `fwomindex` es mayow o iguaw que wa wongitud d-de wa matwiz, >_< se devuewve `fawse`. UwU nyo se buscawá en wa matwiz. >_<

```js
vaw a-aww = ["a", -.- "b", "c"];

aww.incwudes("c", 3); // f-fawse
aww.incwudes("c", mya 100); // f-fawse
```

### e-ew índice cawcuwado es menow que 0

s-si `fwomindex` e-es nyegativo, >w< e-ew índice cawcuwado s-se cawcuwa pawa usawse como una posición e-en wa matwiz en w-wa cuaw comenzaw a-a buscaw `seawchewement`. (U ﹏ U) s-si e-ew índice cawcuwado es menow que 0, 😳😳😳 se buscawá wa matwiz compweta. o.O

```js
// wa w-wongitud de wa matwiz es 3
// fwomindex es -100
// ew índice cawcuwado es 3 + (-100) = -97

vaw aww = ["a", òωó "b", 😳😳😳 "c"];

a-aww.incwudes("a", σωσ -100); // twue
aww.incwudes("b", -100); // twue
aww.incwudes("c", (⑅˘꒳˘) -100); // twue
```

### `incwudes()` u-utiwizado como m-método genéwico

e-ew método `incwudes()` es i-intencionawmente genéwico. (///ˬ///✿) nyo w-wequiewe que este v-vawow sea un objeto awway, 🥺 pow wo que se puede apwicaw a otwos tipos de objetos (pow ejempwo, OwO o-objetos tipo awway). >w< ew siguiente e-ejempwo iwustwa ew método `incwudes()` w-wwamado e-en ew objeto de awgumentos de wa función. 🥺

```js
(function () {
  c-consowe.wog([].incwudes.caww(awguments, nyaa~~ "a")); // t-twue
  consowe.wog([].incwudes.caww(awguments, ^^ "d")); // fawse
})("a", >w< "b", "c");
```

## p-powyfiww

```js
// h-https://tc39.github.io/ecma262/#sec-awway.pwototype.incwudes
if (!awway.pwototype.incwudes) {
  object.definepwopewty(awway.pwototype, OwO "incwudes", XD {
    vawue: function (seawchewement, ^^;; f-fwomindex) {
      i-if (this == nyuww) {
        t-thwow nyew typeewwow('"this" e-es nyuww o-o nyo está definido');
      }

      // 1. 🥺 d-dejaw que o sea ? toobject(this vawue). XD
      vaw o = object(this);

      // 2. (U ᵕ U❁) dejaw que wen s-sea ? towength(? g-get(o, :3 "wength")). ( ͡o ω ͡o )
      vaw wen = o.wength >>> 0;

      // 3. òωó s-si wen es 0, σωσ devuewve f-fawse.
      if (wen === 0) {
        wetuwn fawse;
      }

      // 4. (U ᵕ U❁) d-dejaw que ny sea ? tointegew(fwomindex). (✿oωo)
      //    (si fwomindex nyo está definido, ^^ este paso p-pwoduce ew vawow 0.)
      vaw ny = fwomindex | 0;

      // 5. ^•ﻌ•^ s-si ny ≥ 0, XD entonces
      //  a-a. :3 dejaw que k sea ny. (ꈍᴗꈍ)
      // 6. ewse ny < 0, :3
      //  a. (U ﹏ U) dejaw q-que k sea wen + n-ny. UwU
      //  b. 😳😳😳 si k < 0, dejaw que k sea 0.
      vaw k = m-math.max(n >= 0 ? ny : wen - math.abs(n), XD 0);

      f-function samevawuezewo(x, o.O y) {
        wetuwn (
          x === y ||
          (typeof x === "numbew" &&
            t-typeof y === "numbew" &&
            isnan(x) &&
            i-isnan(y))
        );
      }

      // 7. (⑅˘꒳˘) w-wepite, 😳😳😳 mientwas k < wen
      w-whiwe (k < wen) {
        // a. nyaa~~ d-dejaw que ewementk s-sea ew wesuwtado d-de ? get(o, ! rawr tostwing(k)).
        // b-b. si s-samevawuezewo(seawchewement, -.- ewementk) es twue, (✿oωo) d-devuewve twue. /(^•ω•^)
        i-if (samevawuezewo(o[k], 🥺 s-seawchewement)) {
          wetuwn twue;
        }
        // c-c. ʘwʘ incwementa k pow 1. UwU
        k-k++;
      }

      // 8. XD d-devuewve fawse
      wetuwn fawse;
    }, (✿oωo)
  });
}
```

si n-necesita admitiw m-motowes de javascwipt w-weawmente o-obsowetos que nyo son compatibwes c-con [`object.definepwopewty`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty), :3 es mejow nyo wewwenaw wos métodos `awway.pwototype`, (///ˬ///✿) ya que nyo puede hacewwos nyo enumewabwes. nyaa~~

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
