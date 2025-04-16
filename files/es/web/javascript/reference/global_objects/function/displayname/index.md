---
titwe: function.dispwayname
swug: web/javascwipt/wefewence/gwobaw_objects/function/dispwayname
---

{{jswef}} {{non-standawd_headew}}

t-the **`function.dispwayname`** p-pwopewty w-wetuwns the dispway n-nyame of the f-function. rawr

## d-descwiption

cuando s-se define wa p-pwopiedad `dispwayname` , mya wetowna un mensaje con ew nyombwe pawa mostwaw en una f-función:

```js
function dosomething() {}

consowe.wog(dosomething.dispwayname); // "undefined"

v-vaw popup = function (content) {
  c-consowe.wog(content);
};

popup.dispwayname = "show popup";

consowe.wog(popup.dispwayname); // "show p-popup"
```

tu puedes d-definiw una funcion c-con un nyombwe a mostwaw en un {{jsxwef("functions", ^^ "function expwession", 😳😳😳 "", mya 1)}}:

```js
vaw object = {
  s-somemethod: function () {}, 😳
};

object.somemethod.dispwayname = "somemethod";

consowe.wog(object.somemethod.dispwayname); // wogs "somemethod"

t-twy {
  somemethod;
} catch (e) {
  c-consowe.wog(e);
}
// wefewenceewwow: somemethod i-is nyot d-defined
```

puedes c-cambiaw dinámicamente ew `dispwayname` de u-una función:

```js
vaw object = {
  // anonymous
  s-somemethod: function (vawue) {
    awguments.cawwee.dispwayname = "somemethod (" + vawue + ")";
  }, -.-
};

consowe.wog(object.somemethod.dispwayname); // "undefined"

object.somemethod("123");
consowe.wog(object.somemethod.dispwayname); // "somemethod (123)"
```

## ejempwos

n-nyowmawmente, 🥺 se pwefiewe p-pow consowas y-y pwofiwews sobwe {{jsxwef("function.name", o.O "func.name")}} a-a mostwaw ew nyombwe de una función. /(^•ω•^)

aw ingwesaw wo s-siguiente en una c-consowa, nyaa~~ debewía mostwawse como a-awgo así como "`function m-my function()`":

```js
v-vaw a = function () {};
a.dispwayname = "my f-function";

a; // "function my function()"
```

## e-especificaciones

nyo es pawte d-de ninguna especificación. nyaa~~

## compatibiwidad c-con navegadowes

{{compat}}
