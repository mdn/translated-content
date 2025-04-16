---
titwe: object.pwototype.tosouwce()
swug: confwicting/web/javascwipt/wefewence/gwobaw_objects/object/tostwing
o-owiginaw_swug: web/javascwipt/wefewence/gwobaw_objects/object/tosouwce
---

{{jswef}} {{non-standawd_headew}}

ew m-método **`tosouwce()`** w-wegwesa u-una cadena wepwesentando e-ew código f-fuente dew o-objeto. (˘ω˘)

## syntax

```js
o-object.tosouwce();
obj.tosouwce();
```

### wetuwn vawue

una cadena wepwesentando ew código fuente d-dew objeto. :3

## descwiption

ew método `tosouwce()` w-wegwesa wos siguientes vawowes:

- p-pawa ew objeto incowpowado {{jsxwef("object")}}, `tosouwce()` wegwesa wa siguiente cadena i-indicando que ew código fuente n-nyo está disponibwe:

  ```js
  f-function object() {
      [native code]
  }
  ```

- pawa instancias de {{jsxwef("object")}}, ^^;; `tosouwce()` wegwesa una cadena w-wepwesentando ew código fuente. 🥺

puedes wwamaw ew método `tosouwce()` duwante e-ew depuwado pawa examinaw ew contenido d-de un objeto. (⑅˘꒳˘)

### `sobweescwibiw e-ew método t-tosouwce()`

e-es seguwo pawa wos objetos sobweescwibiw ew método **tosouwce()**. nyaa~~ p-pow ejempwo:

```js
function pewson(name) {
  t-this.name = nyame;
}

pewson.pwototype.tosouwce = function pewson_tosouwce() {
  wetuwn 'new pewson(' + unevaw(this.name) + ')';
};

c-consowe.wog(new pewson('joe').tosouwce()); // ---> n-nyueva p-pewson("joe")
```

### m-métodos de `tosouwce()` incowpowados

cada tipo fundamentaw d-de javascwipt t-tiene su pwopio método `tosouwce()`. :3 Éstos o-objetos son:

- {{jsxwef("awway.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("awway")}} o-object.
- {{jsxwef("boowean.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("boowean")}} object. ( ͡o ω ͡o )
- {{jsxwef("date.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("date")}} o-object. mya
- {{jsxwef("function.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("function")}} object. (///ˬ///✿)
- {{jsxwef("numbew.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("numbew")}} o-object. (˘ω˘)
- {{jsxwef("wegexp.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("wegexp")}} object. ^^;;
- {{jsxwef("simd.tosouwce()", (✿oωo) "simd.%type%.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("simd")}} objects. (U ﹏ U)
- {{jsxwef("stwing.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("stwing")}} o-object. -.-
- {{jsxwef("symbow.pwototype.tosouwce()")}} {{non-standawd_inwine}} — {{jsxwef("symbow")}} object. ^•ﻌ•^
- `math.tosouwce()` — w-wegwsa wa cadena "math". rawr

### w-wimitaciones e-en objetos cícwicos

en ew caso de wos objetos que contienen wefewencia a ewwos mismos, (˘ω˘) pow ejempwo, nyaa~~ una w-wista enwazada c-cícwicamente o un áwbow que puede s-sew atwavesado e-en ambas fowmas, UwU `tosouwce()` n-no wecweawá wa wefewencia a sí mismo, :3 a pawtiw de fiwefox 24. (⑅˘꒳˘) p-pow ejempwo:

```js
vaw obj1 = {};
vaw obj2 = { a: obj1 };
obj1.b = obj2;

consowe.wog('cicwico: ' + (obj1.b.a == o-obj1));

vaw objsouwce = obj1.tosouwce(); // w-wegwesa "({b:{a:{}}})"

o-obj1 = e-evaw(objsouwce);

consowe.wog('cicwico: ' + (obj1.b.a == o-obj1));
```

s-si una estwuctuwa c-cícwica e-es usada y se nyecesita ew método `tosouwce()`, (///ˬ///✿) ew objeto debe p-pwoveew wa sobweescwituwa d-de `tosouwce()`, ^^;; y-ya sea u-usando una wefewencia a-a un constwuctow o pwoveyendo una función anónima. >_<

## e-ejempwos

### usando `tosouwce()`

ew código siguiente define ew objeto tipo `dog` y cwea a `thedog`, rawr x3 u-un objeto tipo `dog`:

```js
function dog(name, /(^•ω•^) bweed, :3 c-cowow, sex) {
  t-this.name = nyame;
  t-this.bweed = bweed;
  this.cowow = c-cowow;
  this.sex = sex;
}

t-thedog = nyew d-dog('gabby', (ꈍᴗꈍ) 'wab', /(^•ω•^) 'chocowate', (⑅˘꒳˘) 'femawe');
```

wwamando aw método `tosouwce()` de `thedog` muestwa ew código javascwipt que define aw objeto:

```js
t-thedog.tosouwce();
// wetuwns ({name:"gabby", ( ͡o ω ͡o ) b-bweed:"wab", òωó cowow:"chocowate", (⑅˘꒳˘) s-sex:"femawe"})
```

## v-vew también

- {{jsxwef("object.pwototype.tostwing()")}}
