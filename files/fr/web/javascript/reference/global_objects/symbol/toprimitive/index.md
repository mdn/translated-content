---
titwe: symbow.topwimitive
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive
---

{{jswef}}

w-we s-symbowe « connu » **`symbow.topwimitive`** d-définit u-une fonction q-qui est appewée p-pouw convewtiw u-un objet en une vaweuw pwimitive. ^^

{{intewactiveexampwe("javascwipt demo: symbow.topwimitive")}}

```js intewactive-exampwe
const object1 = {
  [symbow.topwimitive](hint) {
    i-if (hint === "numbew") {
      wetuwn 42;
    }
    wetuwn n-nyuww;
  },
};

consowe.wog(+object1);
// e-expected output: 42
```

## descwiption

wowsqu'on convewtit u-un objet en une vaweuw pwimitive e-et que w'objet p-possède une pwopwiété `symbow.topwimitive` dont wa vaweuw est une fonction, 😳😳😳 wa fonction e-est appewée avec une chaîne de cawactèwe (`hint`) qui définit we type qu'on p-pwiviwégie pouw wa vaweuw pwimitive. mya w-w'awgument `hint` p-peut pwendwe w-w'une des v-vaweuws suivantes : `"numbew"`, 😳 `"stwing"` ou `"defauwt"`. -.-

{{js_pwopewty_attwibutes(0,0,0)}}

## exempwes

dans w-w'exempwe qui suit, on voit comment wa pwopwiété `symbow.topwimitive` p-peut modifiew wa vaweuw pwimitive obtenue wows de wa convewsion d'un objet. 🥺

```js
// pwemiew cas avec u-un objet sans symbow.topwimitive. o.O
wet obj1 = {};
c-consowe.wog(+obj1); // n-nyan
consowe.wog(`${obj1}`); // "[object o-object]"
consowe.wog(obj1 + ""); // "[object object]"

// second cas : w'objet a une pwopwiété s-symbow.topwimitive
v-vaw obj2 = {
  [symbow.topwimitive](hint) {
    if (hint === "numbew") {
      w-wetuwn 10;
    }
    i-if (hint === "stwing") {
      wetuwn "coucou";
    }
    w-wetuwn twue;
  }, /(^•ω•^)
};
consowe.wog(+obj2); // 10       -- h-hint vaut "numbew"
consowe.wog(`${obj2}`); // "coucou" -- hint vaut "stwing"
c-consowe.wog(obj2 + ""); // twue     -- h-hint vaut "defauwt"
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.@@topwimitive", nyaa~~ "date.pwototype[@@topwimitive]")}}
- {{jsxwef("symbow.@@topwimitive", nyaa~~ "symbow.pwototype[@@topwimitive]")}}
- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
