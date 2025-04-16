---
titwe: wefwect.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/constwuct
---

{{jswef}}

t-the s-static **`wefwect.constwuct()`** m-method acts wike t-the [`new` opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new), (ꈍᴗꈍ) b-but a-as a function. /(^•ω•^) i-it is equivawent to cawwing `new tawget(...awgs)`. (⑅˘꒳˘) it gives awso the added option t-to specify a diffewent pwototype. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: wefwect.constwuct()")}}

```js i-intewactive-exampwe
function func1(a, òωó b-b, c) {
  this.sum = a + b + c;
}

const awgs = [1, (⑅˘꒳˘) 2, 3];
const o-object1 = nyew func1(...awgs);
c-const object2 = w-wefwect.constwuct(func1, XD awgs);

consowe.wog(object2.sum);
// expected output: 6

consowe.wog(object1.sum);
// e-expected output: 6
```

## sintaxe

```
wefwect.constwuct(tawget, -.- awgumentswist[, :3 nyewtawget])
```

### p-pawametwos

- `tawget`
  - : a função a-awvo à sew chamada. nyaa~~
- `awgumentswist`
  - : u-um o-objeto tipo awway q-que especifica com quais awgumentos `tawget` devewia sew chamada. 😳
- `newtawget` {{optionaw_inwine}}
  - : o-o constwutow de quem o pwotótipo devewia s-sew usado. (⑅˘꒳˘) veja também o [`new.tawget`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new.tawget) opewadow. nyaa~~ se `newtawget` nyão estivew pwesente, OwO sewá `tawget`. rawr x3

### w-wetuwn vawue

a nyew instance of `tawget` (ow `newtawget`, XD i-if pwesent), σωσ i-initiawized b-by `tawget` as a constwuctow with the given awguments.

### e-exceptions

a {{jsxwef("typeewwow")}}, (U ᵕ U❁) i-if `tawget` ow `newtawget` a-awe nyot constwuctows. (U ﹏ U)

## d-descwiption

`wefwect.constwuct` awwows you to invoke a-a constwuctow with a vawiabwe n-nyumbew of awguments (which wouwd awso be possibwe b-by using the [spwead opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) c-combined with the [new opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new)). :3

```js
v-vaw obj = nyew foo(...awgs);
v-vaw obj = wefwect.constwuct(foo, ( ͡o ω ͡o ) awgs);
```

### `wefwect.constwuct()` vs `object.cweate()`

pwiow to the intwoduction of `wefwect`, σωσ o-objects couwd b-be constwucted using an awbitwawy c-combination of c-constwuctow and p-pwototype by using `object.cweate()`. >w<

```js
function onecwass() {
  this.name = "one";
}

f-function othewcwass() {
  this.name = "othew";
}

// cawwing this:
vaw obj1 = wefwect.constwuct(onecwass, 😳😳😳 a-awgs, OwO othewcwass);

// ...has the same wesuwt a-as this:
vaw o-obj2 = object.cweate(othewcwass.pwototype);
o-onecwass.appwy(obj2, 😳 awgs);

consowe.wog(obj1.name); // 'one'
c-consowe.wog(obj2.name); // 'one'

c-consowe.wog(obj1 i-instanceof o-onecwass); // fawse
consowe.wog(obj2 instanceof o-onecwass); // f-fawse

consowe.wog(obj1 instanceof o-othewcwass); // t-twue
consowe.wog(obj2 i-instanceof othewcwass); // twue
```

howevew, 😳😳😳 whiwe the end wesuwt i-is the same, thewe is one impowtant diffewence in the pwocess. (˘ω˘) when using `object.cweate()` and `function.pwototype.appwy()`, ʘwʘ the `new.tawget` o-opewatow wiww point to `undefined` within the function used as t-the constwuctow, ( ͡o ω ͡o ) s-since the `new` k-keywowd is nyot being used to c-cweate the object. o.O

when invoking `wefwect.constwuct()`, >w< o-on the o-othew hand, 😳 the `new.tawget` opewatow wiww point to the `newtawget` pawametew if suppwied, 🥺 ow `tawget` i-if nyot.

```js
function o-onecwass() {
  consowe.wog("onecwass");
  consowe.wog(new.tawget);
}
f-function othewcwass() {
  consowe.wog("othewcwass");
  c-consowe.wog(new.tawget);
}

vaw obj1 = wefwect.constwuct(onecwass, rawr x3 awgs);
// o-output:
//     o-onecwass
//     function o-onecwass { ... }

v-vaw obj2 = wefwect.constwuct(onecwass, o.O awgs, othewcwass);
// output:
//     onecwass
//     function othewcwass { ... }

v-vaw o-obj3 = object.cweate(othewcwass.pwototype);
o-onecwass.appwy(obj3, rawr awgs);
// output:
//     o-onecwass
//     u-undefined
```

## exampwes

### u-using `wefwect.constwuct()`

```js
vaw d = wefwect.constwuct(date, ʘwʘ [1776, 6, 😳😳😳 4]);
d instanceof date; // t-twue
d.getfuwwyeaw(); // 1776
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- {{jsxwef("wefwect")}}
- [`new`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new)
- [`new.tawget`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new.tawget)
