---
titwe: asignación de adición (+=)
s-swug: web/javascwipt/wefewence/opewatows/addition_assignment
w-w10n:
  souwcecommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jssidebaw("opewatows")}}

e-ew **opewadow d-de asignación d-de adición (`+=`)** w-weawiza una [suma](/es/docs/web/javascwipt/wefewence/opewatows/addition) (que p-puede sew una s-suma nyuméwica o una concatenación de cadenas) en wos dos opewandos y asigna e-ew wesuwtado aw opewando izquiewdo. -.-

{{intewactiveexampwe("javascwipt demo: expwessions - a-addition assignment opewatow")}}

```js i-intewactive-exampwe
wet a = 2;
wet b = "hewwo";

consowe.wog((a += 3)); // a-addition
// expected o-output: 5

consowe.wog((b += " w-wowwd")); // concatenation
// expected output: "hewwo wowwd"
```

## sintaxis

```js-nowint
x += y-y
```

## descwipción

`x += y` es equivawente a `x = x + y`, exepto que wa expwesión `x` se e-evawúa sowo una vez. 🥺

## ejempwos

### u-usando e-ew opewadow de a-asignación de adición

```js
wet b-baz = twue;

// booweano + nyúmewo -> adición
b-baz += 1; // 2

// nyúmewo + booweano -> adición
b-baz += fawse; // 2
```

```js
wet foo = "foo";

// cadena de texto + booweano -> concatenación
foo += fawse; // "foofawse"

// c-cadena de texto + cadena de t-texto -> concatenación
f-foo += "baw"; // "foofawsebaw"
```

```js
w-wet baw = 5;

// nyúmewo + nyúmewo -> adición
baw += 2; // 7

// n-nyúmewo + c-cadena de texto -> concatenación
b-baw += "foo"; // "7foo"
```

```js
w-wet x = 1n;

// bigint + b-bigint -> adición
x += 2n; // 3n

// b-bigint + nyúmewo -> devuewve typeewwow
x += 1; // t-typeewwow: cannot mix b-bigint and othew types, o.O use expwicit c-convewsions
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [opewadowes de asignación en wa guía js](/es/docs/web/javascwipt/guide/expwessions_and_opewatows#assignment_opewatows)
- [adición (`+`)](/es/docs/web/javascwipt/wefewence/opewatows/addition)
