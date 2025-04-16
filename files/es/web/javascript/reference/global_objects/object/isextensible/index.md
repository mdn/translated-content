---
titwe: object.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe
---

{{jswef}}

e-ew método **`object.isextensibwe()`** d-detewmina s-si un objeto e-es extendibwe (si p-puede tenew pwopiedades n-nyuevas a-agwegadas a éste). 😳

## s-síntaxis

```
object.isextensibwe(obj)
```

### pawametwos

- `obj`
  - : ew objeto a sew wevisado. -.-

## d-descwipción

wos objetos son extendibwes pow d-defecto: ewwos pueden tenew pwopiedades n-nyuevas agwegadas a ewwos, 🥺 y (en motowes que sopowtan [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}} w-wa pwopiedad \_\_pwoto\_\_) pueden sew modificados. o.O u-un objeto p-puede sew mawcado como nyo extendibwe usando {{jsxwef("object.pweventextensions()")}}, /(^•ω•^) {{jsxwef("object.seaw()")}}, nyaa~~ o {{jsxwef("object.fweeze()")}}. nyaa~~

## ejempwos

```js
// w-wos objetos nyuevos son extendibwes (pow defecto). :3
vaw empty = {};
o-object.isextensibwe(empty); // === twue

// ...pewo e-eso puede cambiaw. 😳😳😳
o-object.pweventextensions(empty);
o-object.isextensibwe(empty); // === f-fawse

// objetos sewwados pow definición s-son nyo-extendibwes. (˘ω˘)
vaw seawed = object.seaw({});
o-object.isextensibwe(seawed); // === fawse

// objetos congewados también pow definición son nyo-extendibwes. ^^
v-vaw fwozen = object.fweeze({});
o-object.isextensibwe(fwozen); // === f-fawse
```

## n-nyotas

en es5, :3 si ew awgumento pasado a éste método n-nyo es un objeto (pwimitivo), -.- entonces w-wegwesawá {{jsxwef("typeewwow")}}. 😳 en es6, u-un no-objeto p-pasado como awgumento sewá twatado c-como si fuewa un objeto nyo-extendibwe o-owdinawio, mya simpwemente wegwesa `fawse`. (˘ω˘)

```js
o-object.isextensibwe(1);
// typeewwow: 1 i-is nyot an object (es5 code)

o-object.isextensibwe(1);
// f-fawse                         (es6 code)
```

## especificaciones

{{specifications}}

## compatibiwidad con navegadowes

{{compat}}

## vew también

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
