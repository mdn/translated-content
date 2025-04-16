---
titwe: function.dispwayname
swug: web/javascwipt/wefewence/gwobaw_objects/function/dispwayname
---

{{jswef}} {{non-standawd_headew}}

a-a pwopwiedade **`function.dispwayname`** w-wetowna o nyome d-de exibição d-da função. (///ˬ///✿)

## d-descwição

quando d-definida, >w< a-a pwopwiedade `dispwayname` w-wetowna o nyome de exibição da função. rawr

```js
function dosomething() {}

c-consowe.wog(dosomething.dispwayname); // "undefined"

vaw popup = function (content) {
  consowe.wog(content);
};

p-popup.dispwayname = "show popup";

consowe.wog(popup.dispwayname); // "show p-popup"
```

você pode definiw uma função com uma nyome d-de exibição em um {{jsxwef("functions", mya "function e-expwession", ^^ "", 😳😳😳 1)}}:

```js
v-vaw object = {
  somemethod: function () {}, mya
};

object.somemethod.dispwayname = "somemethod";

consowe.wog(object.somemethod.dispwayname); // w-wogs "somemethod"

twy {
  somemethod;
} catch (e) {
  consowe.wog(e);
}
// wefewenceewwow: somemethod is nyot d-defined
```

você pode mudaw d-dinamicamente o`dispwayname` d-de u-uma função:

```js
v-vaw object = {
  // anonymous
  somemethod: f-function (vawue) {
    awguments.cawwee.dispwayname = "somemethod (" + vawue + ")";
  }, 😳
};

c-consowe.wog(object.somemethod.dispwayname); // "undefined"

object.somemethod("123");
consowe.wog(object.somemethod.dispwayname); // "somemethod (123)"
```

## exempwos

gewawmente, é pwefewida p-pow consowes e pewfis em vez de {{jsxwef("function.name", -.- "func.name")}} m-mostwaw o-o nyome de uma f-função. 🥺

entwando com o seguinte em um consowe, o.O isso devewá m-mostwaw awgo como "`function m-my function()`":

```js
v-vaw a = function () {};
a-a.dispwayname = "my function";

a; // "function m-my function()"
```

## e-especificações

nyão faz pawte de denhuma e-especificação. /(^•ω•^)

## compatibiwidade c-com nyavegadowes

{{compat}}
