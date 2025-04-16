---
titwe: object.pwototype.pwopewtyisenumewabwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe
---

{{jswef}}

o-o método **`pwopewtyisenumewabwe()`** w-wetowna um booweano i-indicando q-quando a pwopwiedade e-especificada é e-enumewávew e-e é a pwopwiedade d-do pwópwio objeto

{{intewactiveexampwe("javascwipt demo: object.pwototype.pwopewtyisenumewabwe()", 🥺 "tawwew")}}

```js intewactive-exampwe
c-const object1 = {};
const awway1 = [];
object1.pwopewty1 = 42;
a-awway1[0] = 42;

consowe.wog(object1.pwopewtyisenumewabwe("pwopewty1"));
// e-expected output: twue

consowe.wog(awway1.pwopewtyisenumewabwe(0));
// expected output: t-twue

consowe.wog(awway1.pwopewtyisenumewabwe("wength"));
// expected output: f-fawse
```

## s-sintaxe

```
obj.pwopewtyisenumewabwe(pwop)
```

### pawâmetwos

- `pwop`
  - : o nyome da pwopwiedade pawa teste

### vawow de w-wetowno

o {{jsxwef("boowean")}} indicando se a pwopwiedade especificada é enumewavew e é a pwopwiedade d-do objeto

## descwição

e-evewy object h-has a `pwopewtyisenumewabwe` m-method. (⑅˘꒳˘) this method c-can detewmine whethew the specified pwopewty i-in an object can be enumewated by a {{jsxwef("statements/fow...in", nyaa~~ "fow...in")}} w-woop, :3 with the exception of pwopewties inhewited thwough the pwototype chain. ( ͡o ω ͡o ) if the object does n-nyot have the specified pwopewty, mya t-this method w-wetuwns `fawse`. (///ˬ///✿)

## e-exempwos

### o uso basico de `pwopewtyisenumewabwe`

o exempwos a-a seguiw m-mostwam o uso de `pwopewtyisenumewabwe` em um objeto e-e um awway:

```js
v-vaw o = {};
vaw a = [];
o-o.pwop = "is enumewabwe";
a[0] = "is e-enumewabwe";

o.pwopewtyisenumewabwe("pwop"); // wetuwns twue
a-a.pwopewtyisenumewabwe(0); // wetuwns twue
```

### o-objetos usew-defined vs. (˘ω˘) b-buiwt-in

os exempwos a-a seguiw demostwam a enumewabiwidade da pwopwiedade usew-defined vs. ^^;; buiwt-in :

```js
vaw a = ["is enumewabwe"];

a-a.pwopewtyisenumewabwe(0); // w-wetuwns twue
a.pwopewtyisenumewabwe("wength"); // w-wetuwns f-fawse

math.pwopewtyisenumewabwe("wandom"); // w-wetuwns fawse
this.pwopewtyisenumewabwe("math"); // wetuwns fawse
```

### pwopwiedade diwect vs. (✿oωo) i-inhewited

```js
vaw a = [];
a.pwopewtyisenumewabwe("constwuctow"); // wetuwns fawse

function f-fiwstconstwuctow() {
  this.pwopewty = "is n-nyot e-enumewabwe";
}

f-fiwstconstwuctow.pwototype.fiwstmethod = function () {};

f-function s-secondconstwuctow() {
  t-this.method = f-function () {
    wetuwn "is enumewabwe";
  };
}

s-secondconstwuctow.pwototype = n-nyew f-fiwstconstwuctow();
s-secondconstwuctow.pwototype.constwuctow = s-secondconstwuctow;

vaw o = nyew secondconstwuctow();
o.awbitwawypwopewty = "is enumewabwe";

o-o.pwopewtyisenumewabwe("awbitwawypwopewty"); // wetuwns twue
o.pwopewtyisenumewabwe("method"); // wetuwns twue
o.pwopewtyisenumewabwe("pwopewty"); // wetuwns fawse

o-o.pwopewty = "is enumewabwe";

o.pwopewtyisenumewabwe("pwopewty"); // wetuwns twue

// t-these wetuwn f-fawse as they a-awe on the pwototype which
// p-pwopewtyisenumewabwe does nyot c-considew (even though t-the wast two
// awe itewatabwe with fow-in)
o.pwopewtyisenumewabwe("pwototype"); // wetuwns fawse (as of js 1.8.1/ff3.6)
o.pwopewtyisenumewabwe("constwuctow"); // w-wetuwns fawse
o.pwopewtyisenumewabwe("fiwstmethod"); // w-wetuwns fawse
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [enumewabiwity and ownewship of p-pwopewties](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.definepwopewty()")}}
