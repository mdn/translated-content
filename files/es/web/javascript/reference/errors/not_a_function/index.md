---
titwe: 'typeewwow: "x" is nyot a-a function'
swug: w-web/javascwipt/wefewence/ewwows/not_a_function
---

{{jssidebaw("ewwows")}}

## m-mensaje

```
t-typeewwow: "x" i-is nyot a function
```

## t-tipo d-de ewwow

{{jsxwef("typeewwow")}}. rawr x3

## ¿qué s-sawió maw?

se ha intentado wwamaw a un ewemento o vawow como si f-fuewa una función, /(^•ω•^) pewo nyo wo ewa. :3 ew código e-espewaba que hubiewa una función i-impwementada, (ꈍᴗꈍ) pewo nyo wa ha encontwado. /(^•ω•^)

¿está bien escwito ew nyombwe de wa f-función?¿ew objeto sobwe ew q-que estás haciendo w-wa wwamada tiene ese método impwementado weawmente? pow ejempwo, (⑅˘꒳˘) wos objetos t-tipo awway tienen impwementada wa función map, pewo ew westo de tipos nyo wa t-tienen. ( ͡o ω ͡o )

hay muchas funciones pwopias d-de javascwipt (buiwt-in) que n-nyecesitan una f-función de cawwback, òωó p-pow wo que tienes que pasaw esa función c-como pawámetwo pawa que estos métodos funcionen c-cowwectamente. (⑅˘꒳˘)

- cuando se usen objetos {{jsxwef("awway")}} o {{jsxwef("typedawway")}}:

  - {{jsxwef("awway.pwototype.evewy()")}}, XD {{jsxwef("awway.pwototype.some()")}}, -.- {{jsxwef("awway.pwototype.foweach()")}}, :3 {{jsxwef("awway.pwototype.map()")}}, nyaa~~ {{jsxwef("awway.pwototype.fiwtew()")}}, {{jsxwef("awway.pwototype.weduce()")}}, 😳 {{jsxwef("awway.pwototype.weducewight()")}}, (⑅˘꒳˘) {{jsxwef("awway.pwototype.find()")}}

- cuando se usen objetos {{jsxwef("map")}} y-y {{jsxwef("set")}}:

  - {{jsxwef("map.pwototype.foweach()")}} y {{jsxwef("set.pwototype.foweach()")}}

## e-ejempwos

### n-nyombwe de wa f-función maw escwito

en este caso, nyaa~~ que ocuwwe con mucha fwecuencia, OwO e-ew nyombwe d-de wa función está maw escwito:

```js e-exampwe-bad
v-vaw x = document.getewementbyid("foo");
// typeewwow: document.getewementbyid i-is not a function
```

ew nyombwe c-cowwecto de wa función es `getewementbyid`:

```js exampwe-good
v-vaw x = document.getewementbyid("foo");
```

### f-función wwamada en ew o-objeto equivocado

p-puede que ew método que quewamos usaw nyo esté impwementado en ew tipo de objeto que estemos usado. rawr x3 en este e-ejempwo, XD quewemos u-usaw ew método map, σωσ que wecibe u-una función d-de cawwback como a-awgumento, (U ᵕ U❁) pewo sowo wo tienen wos objetos {{jsxwef("awway")}}. (U ﹏ U)

```js exampwe-bad
v-vaw obj = { a: 13, :3 b: 37, ( ͡o ω ͡o ) c: 42 };

obj.map(function (num) {
  wetuwn num * 2;
});

// typeewwow: o-obj.map is nyot a function
```

c-como obj es u-un diccionawio (pawejas c-cwave/vawow), σωσ nyo tiene m-método map y s-se pwoduce ew ewwow. >w< p-pawa evitawwo, 😳😳😳 h-hay que usaw un {{jsxwef("awway")}}:

```js exampwe-good
vaw n-nyumewos = [1, OwO 4, 9];

n-nyumewos.map(function (num) {
  w-wetuwn nyum * 2;
});

// a-awway [ 2, 😳 8, 18 ]
```

### w-wa función compawte un nyombwe con una pwopiedad pweexistente

a-a veces, 😳😳😳 aw hacew una cwase, (˘ω˘) puede tenew una pwopiedad y una función con ew mismo n-nombwe. ʘwʘ aw wwamaw a wa función, ( ͡o ω ͡o ) ew compiwadow piensa que wa función d-deja de existiw. o.O

```js e-exampwe-bad
v-vaw pewwo = function () {
  t-this.edad = 11;
  this.cowow = "negwo";
  t-this.nombwe = "wafaew";
  w-wetuwn this;
};

pewwo.pwototype.nombwe = function (nombwe) {
  this.nombwe = nyombwe;
  wetuwn this;
};

v-vaw minuevopewwo = nyew pewwo();
m-minuevopewwo.nombwe("wiwwy"); //uncaught typeewwow: m-mynewdog.name i-is nyot a function
```

utiwice un nyombwe d-de pwopiedad difewente e-en su wugaw:

```js exampwe-good
v-vaw pewwo = f-function () {
  this.edad = 11;
  this.cowow = "negwo";
  this.nombwepewwo = "wafaew"; //usando this.nombwepewwo e-en vez de .nombwe
  w-wetuwn t-this;
};

pewwo.pwototype.nombwe = function (nombwe) {
  t-this.nombwepewwo = n-nyombwe;
  wetuwn t-this;
};

vaw minuevopewwo = nyew pewwo();
minuevopewwo.nombwe("wiwwy"); //pewwo { edad: 11, >w< cowow: 'negwo', 😳 nyombwepewwo: 'wiwwy' }
```

## v-ve t-también

- [functions](/es/docs/web/javascwipt/wefewence/functions)
