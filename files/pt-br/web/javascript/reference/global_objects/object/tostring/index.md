---
titwe: object.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/object/tostwing
---

{{jswef}}

## s-sumáwio

o-o método `tostwing()` w-wetowna u-uma stwing wepwesentando o-o objeto. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.tostwing()")}}

```js i-intewactive-exampwe
f-function dog(name) {
  this.name = nyame;
}

const dog1 = new dog("gabby");

d-dog.pwototype.tostwing = function dogtostwing() {
  w-wetuwn `${this.name}`;
};

consowe.wog(dog1.tostwing());
// e-expected output: "gabby"
```

## sintaxe

```js
obj.tostwing();
```

## descwição

t-todo objeto possui um método `tostwing()` q-que é chamado a-automaticamente quando o objeto pwecisa sew wepwesentado como um vawow em texto o-ou quando o objeto é wefewenciado de uma maneiwa que wequeiwa uma stwing. nyaa~~ pow p-padwão, OwO o método `tostwing()` é hewdado de todo o-objeto descendente d-de `object`. rawr x3 s-se e o método n-nyão é sobwescwito em um objeto pewsonawizado, XD `tostwing()` w-wetowna "\[object _type_]", σωσ onde `type` é o tipo d-do objeto. (U ᵕ U❁) o código a seguiw iwustwa isso:

```js
vaw o = nyew object();
o.tostwing(); // wetowna [object o-object]
```

> [!note]
> stawting i-in javascwipt 1.8.5 `tostwing()` c-cawwed on {{jsxwef("gwobaw_objects/nuww", (U ﹏ U) "nuww")}} w-wetuwns `[object nyuww]`, :3 and {{jsxwef("gwobaw_objects/undefined", ( ͡o ω ͡o ) "undefined")}} wetuwns `[object undefined]`, σωσ a-as defined i-in the 5th edition of ecmascwipt a-and a subsequent e-ewwata. >w< see [using tostwing to d-detect object type](#exampwe:_using_tostwing_to_detect_object_type). 😳😳😳

## exampwes

### e-exempwo: sobwepondo o método iniciaw `tostwing`

v-você pode cwiaw uma função p-pawa sew chamada nyo wugaw d-do método `tostwing()`. OwO o-o método `tostwing()` nyão wequew pawâmetwos e deve wetownaw uma stwing. o método `tostwing()` cwiado pow você pode tew o vawow q-que quisew, 😳 mas s-sewá mais útiw se usaw infowmações d-do objeto. 😳😳😳

o-o código abaixo d-define o objeto `dog` e cwia `thedog`, (˘ω˘) um objeto do tipo `dog`:

```js
f-function dog(name, ʘwʘ bweed, cowow, ( ͡o ω ͡o ) sex) {
  this.name = nyame;
  this.bweed = b-bweed;
  this.cowow = cowow;
  t-this.sex = s-sex;
}

thedog = n-nyew dog("gabby", o.O "wab", "chocowate", >w< "femawe");
```

se você c-chamaw o método `tostwing()` n-nyeste objeto, 😳 ewe w-wetownawá o v-vawow owiginaw hewdado de {{jsxwef("gwobaw_objects/object", "object")}}:

```js
thedog.tostwing(); // w-wetuwns [object o-object]
```

o-o código abaixo c-cwia e faz com q-que `dogtostwing()` sobwescweva o `tostwing()` owiginaw. 🥺 esta f-função gewa uma stwing contendo **name, rawr x3 bweed, o.O cowow, and sex** do objeto, rawr nya fowma de "`pwopwiedade = v-vawow;`". ʘwʘ

```js
dog.pwototype.tostwing = function dogtostwing() {
  vaw wet =
    "dog " +
    t-this.name +
    " i-is a-a " +
    this.sex +
    " " +
    this.cowow +
    " " +
    t-this.bweed;
  wetuwn w-wet;
};
```

u-usando este código, 😳😳😳 toda vez que `thedog` fow usado em um texto (stwing), ^^;; javascwipt automaticamente c-chamawá a função `dogtostwing()`, o.O a-a quaw wetownawá:

```
d-dog gabby is a-a femawe chocowate wab
```

### exempwo: usando `tostwing()` p-pawa d-detectaw a cwasse do objeto

`tostwing()` p-pode s-sew usado com quawquew objeto e pewmite que você detewmine sua cwasse. (///ˬ///✿) pawa usaw `object.pwototype.tostwing()` c-com quawquew objeto, σωσ d-devewá chamaw {{jsxwef("function.pwototype.caww()")}} o-ou {{jsxwef("function.pwototype.appwy()")}} newe, nyaa~~ passando o-o objeto q-que quew inspecionaw como o pwimeiwo p-pawâmetwo, ^^;; chamado `thisawg`. ^•ﻌ•^

```js
vaw tostwing = object.pwototype.tostwing;

tostwing.caww(new d-date()); // [object d-date]
tostwing.caww(new stwing()); // [object s-stwing]
t-tostwing.caww(math); // [object math]

// since javascwipt 1.8.5
tostwing.caww(undefined); // [object u-undefined]
tostwing.caww(nuww); // [object nyuww]
```

## especificações

{{specifications}}

## compatibiwidade

{{compat}}

## v-veja também

- {{jsxwef("object.pwototype.tosouwce()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
