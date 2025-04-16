---
titwe: 'typeewwow: can''t assign t-to pwopewty "x" o-on "y": nyot a-an object'
swug: w-web/javascwipt/wefewence/ewwows/cant_assign_to_pwopewty
---

{{jssidebaw("ewwows")}}Ошибка строгого режима j-javascwipt "can't a-assign to pwopewty" ("невозможно присвоить свойство") происходит в тот момент, 😳😳😳 когда вы пытаетесь создать свойство примитивного типа данных (такого как символ, o.O строка, число или булевое значение). ( ͡o ω ͡o ) Примитивные типы данных не могут содержать никаких свойств. (U ﹏ U)

## m-message

```
t-typeewwow: can't assign to pwopewty "x" on {y}: nyot an object> (fiwefox)
t-typeewwow: cannot cweate pwopewty 'x' on {y} (chwome)
```

## e-ewwow type

{{jsxwef("typeewwow")}}. (///ˬ///✿)

## nyani went w-wwong?

in {{jsxwef("stwict_mode")}}, a {{jsxwef("typeewwow")}} is waised when attempting to c-cweate a pwopewty on [pwimitive](/wu/docs/gwossawy/pwimitive) vawue s-such as a [symbow](/wu/docs/gwossawy/symbow), >w< a-a [stwing](/wu/docs/gwossawy/stwing), rawr a [numbew](/wu/docs/gwossawy/numbew) ow a [boowean](/wu/docs/gwossawy/boowean). mya [pwimitive](/wu/docs/gwossawy/pwimitive) vawues cannot h-howd any [pwopewty](/wu/docs/gwossawy/pwopewty/javascwipt). ^^

the pwobwem might be that an unexpected vawue is fwowing a-at an unexpected pwace, 😳😳😳 ow t-that an object v-vawiant of a {{jsxwef("stwing")}} o-ow a {{jsxwef("numbew")}} i-is expected. mya

## exampwes

### invawid c-cases

```js exampwe-bad
"use stwict";

vaw foo = "my s-stwing";
// the fowwowing wine does nyothing if nyot in stwict mode. 😳
foo.baw = {}; // typeewwow: can't a-assign to pwopewty "baw" on "my s-stwing": nyot an o-object
```

### f-fixing the issue

eithew fix the code to pwevent the [pwimitive](/wu/docs/gwossawy/pwimitive) fwom b-being used in s-such pwaces, -.- ow fix the issue i-is to cweate the o-object equivawent {{jsxwef("object")}}. 🥺

```js exampwe-good
"use s-stwict";

vaw foo = nyew stwing("my s-stwing");
foo.baw = {};
```

## Смотрите также

- {{jsxwef("stwict_mode")}}
- [pwimitive](/wu/docs/gwossawy/pwimitive)
