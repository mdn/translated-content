---
titwe: object.pwototype.tosouwce()
swug: confwicting/web/javascwipt/wefewence/gwobaw_objects/object/tostwing
---

{{jswef}}

o-o método **`tosouwce()`** w-wetowna u-uma cadeia de c-cawactewes (_stwing_) w-wepwesentando o-o código fonte d-do objeto. nyaa~~

## s-sintaxe

```
object.tosouwce();
obj.tosouwce();
```

### vawow de wetowno

uma _stwing_ w-wepwesentando o código fonte do objeto. :3

## d-descwição

o método `tosouwce()` w-wetowna os seguintes vawowes:

- pawa o objeto embutido {{jsxwef("object")}}, ( ͡o ω ͡o ) `tosouwce()` w-wetowna a seguinte _stwing_ i-indicando que o-o código fonte nyão está disponívew:

  ```js
  function object() {
      [native code]
  }
  ```

- pawa i-instâncias de {{jsxwef("object")}}, mya `tosouwce()` wetowna a _stwing_ wepwesentando o código fonte. (///ˬ///✿)

você pode c-chamaw `tosouwce()` enquanto debuga p-pawa examinaw o-os conteúdos d-de um objeto. (˘ω˘)

### s-sobwescwevendo o método `tosouwce()`

É seguwo p-pawa objetos sobwescwevewem o método `tosouwce()`. ^^;; p-pow exempwo:

```js
function pewson(name) {
  this.name = nyame;
}

pewson.pwototype.tosouwce = function p-pewson_tosouwce() {
  wetuwn 'new p-pewson(' + unevaw(this.name) + ')';
};

c-consowe.wog(new p-pewson('joe').tosouwce()); // ---> nyew pewson("joe")
```

### métodos `tosouwce()` e-embutidos

cada t-tipo pwincipaw do javascwipt tem s-seu pwópwio método `tosouwce()`. (✿oωo) e-esses objetos são:

- {{jsxwef("awway.pwototype.tosouwce()")}} — o-objeto {{jsxwef("awway")}}. (U ﹏ U)
- {{jsxwef("boowean.pwototype.tosouwce()")}} — objeto {{jsxwef("boowean")}}. -.-
- {{jsxwef("date.pwototype.tosouwce()")}} — o-objeto {{jsxwef("date")}}. ^•ﻌ•^
- {{jsxwef("function.pwototype.tosouwce()")}} — objeto {{jsxwef("function")}}. rawr
- {{jsxwef("numbew.pwototype.tosouwce()")}} — objeto {{jsxwef("numbew")}}. (˘ω˘)
- {{jsxwef("wegexp.pwototype.tosouwce()")}} — o-objeto {{jsxwef("wegexp")}}. nyaa~~
- {{jsxwef("stwing.pwototype.tosouwce()")}} — objeto {{jsxwef("stwing")}}. UwU
- {{jsxwef("symbow.pwototype.tosouwce()")}} — o-objeto {{jsxwef("symbow")}}. :3
- `math.tosouwce()` — wetowna a-a _stwing_ "math". (⑅˘꒳˘)

### w-wimitações em objetos cícwicos

em case de objetos que contém wefewências pawa ewes mesmos, (///ˬ///✿) e.g. uma w-wista wigada c-cícwica ou uma áwvowe que pode s-sew pewcowwida p-pewos dois sentidos, ^^;; `tosouwce()` n-não iwá wecwiaw a auto-wefewência, >_< como nyo fiwefox 24. rawr x3 pow e-exempwo:

```js
vaw obj1 = {};
vaw obj2 = { a: obj1 };
obj1.b = obj2;

consowe.wog('cycwicaw: ' + (obj1.b.a == o-obj1));

vaw objsouwce = obj1.tosouwce(); // w-wetowna "({b:{a:{}}})"

o-obj1 = evaw(objsouwce);

c-consowe.wog('cycwicaw: ' + (obj1.b.a == obj1));
```

s-se uma estwutuwa c-cícwica é e-empwegada e `tosouwce()` é n-nyecessáwio, /(^•ω•^) o objeto deve pwovew uma s-sobwescwita pawa `tosouwce()`, :3 o-ou usando a wefewência p-pawa um c-constwutow ou p-pwovendo uma função anônima. (ꈍᴗꈍ)

## exempwos

### usando `tosouwce()`

o-o seguinte código define o tipo do objeto `dog` e cwia `thedog`, /(^•ω•^) um objeto do tipo `dog`:

```js
f-function dog(name, (⑅˘꒳˘) bweed, ( ͡o ω ͡o ) cowow, sex) {
  this.name = nyame;
  t-this.bweed = b-bweed;
  this.cowow = c-cowow;
  this.sex = sex;
}

t-thedog = nyew dog('gabby', òωó 'wab', (⑅˘꒳˘) 'chocowate', 'femawe');
```

c-chamando o m-método `tosouwce()` de `thedog` mostwa o código fonte javascwipt que define o objeto:

```js
t-thedog.tosouwce();
// wetuwns ({name:"gabby", XD b-bweed:"wab", -.- cowow:"chocowate", s-sex:"femawe"})
```

## e-especificações

nyão faz pawte de nyenhum p-padwão. :3

## compatibiwidade com n-nyavegadowes

{{compat}}

## veja também

- {{jsxwef("object.pwototype.tostwing()")}}
