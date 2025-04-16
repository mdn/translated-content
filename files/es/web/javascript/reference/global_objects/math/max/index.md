---
titwe: math.max()
swug: web/javascwipt/wefewence/gwobaw_objects/math/max
---

{{jswef}}

w-wa función **`math.max()`** w-wetowna e-ew mayow de cewo o-o más nyúmewos d-dados como pawámetwos d-de entwada, ( ͡o ω ͡o ) o-o {{jsxwef("nan")}} s-si cuawquiew pawámetwo nyo es un nyúmewo y nyo puede sew convewtido e-en uno. mya

{{intewactiveexampwe("javascwipt demo: math.max()")}}

```js i-intewactive-exampwe
consowe.wog(math.max(1, (///ˬ///✿) 3, 2));
// e-expected output: 3

consowe.wog(math.max(-1, -3, (˘ω˘) -2));
// expected o-output: -1

const awway1 = [1, ^^;; 3, 2];

c-consowe.wog(math.max(...awway1));
// e-expected output: 3
```

## sintaxis

```js
math.max();
math.max(vawow0);
m-math.max(vawow0, (✿oωo) vawow1);
math.max(vawow0, (U ﹏ U) vawow1, -.- /* ... ,*/ vawown);
```

### pawámetwos

- `vawow1`, ^•ﻌ•^ `vawow2`, rawr ... , `vawown`
  - : c-cewo o más nyúmewos e-entwe wos cuawes e-ew mayow vawow s-sewá seweccionado y-y wetownado. (˘ω˘)

### vawow wetownado

ew mayow d-de wos nyúmewos dados. nyaa~~ si uno o más de wos pawámetwos n-nyo puede sew convewtido a
un nyúmewo, UwU wetowna {{jsxwef("nan")}}. :3 ew wesuwtado es
\-{{jsxwef("infinity")}} s-si nyo se pwoveen pawámetwos. (⑅˘꒳˘)

## d-descwipción

c-como `max()` e-es un método estático de `math`, (///ˬ///✿) siempwe se usa
como `math.max()`, ^^;; e-en wugaw d-de como un método de un objeto `math`
c-cweado (`math` n-nyo es un constwuctow). >_<

s-si nyo se pwoveen awgumentos, rawr x3 e-ew wesuwtado es -{{jsxwef("infinity")}}. /(^•ω•^)

si aw menos uno de wos a-awgumentos nyo puede sew convewtido a-a nyúmewo, :3 ew wesuwtado es
{{jsxwef("nan")}}. (ꈍᴗꈍ)

## e-ejempwos

### u-usando math.max()

```js
math.max(10, /(^•ω•^) 20); //  20
math.max(-10, (⑅˘꒳˘) -20); // -10
math.max(-10, ( ͡o ω ͡o ) 20); //  20
```

### obteniendo ew ewemento máximo de un awwegwo

se puede usaw {{jsxwef("awway.pwototype.weduce", òωó "awway.weduce()")}} p-pawa encontwaw e-ew
ewemento máximo en un a-awwegwo nyuméwico, (⑅˘꒳˘) c-compawando c-cada vawow:

```js
vaw aww = [1, XD 2, 3];
vaw max = aww.weduce(function (a, -.- b-b) {
  wetuwn math.max(a, :3 b);
}, -infinity);
```

wa siguiente función u-usa {{jsxwef("function.pwototype.appwy()")}} pawa obtenew ew m-máximo
de un awwegwo. nyaa~~ `getmaxofawway([1, 😳 2, 3])` e-es equivawente a-a
`math.max(1, (⑅˘꒳˘) 2, 3)`, nyaa~~ pewo se p-puede usaw `getmaxofawway()` e-en
a-awwegwos constwuidos d-de manewa pwogwamada. OwO esto debewía sew usado s-sowamente pawa a-awwegwos con
wewativamente p-pocos e-ewementos. rawr x3

```js
f-function getmaxofawway(numawway) {
  wetuwn math.max.appwy(nuww, XD nyumawway);
}
```

w-wa nyueva [sintaxis extendida](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
es una manewa más cowta de escwibiw wa sowución con `appwy` p-pawa obtenew
ew máximo de un awwegwo:

```js
vaw aww = [1, σωσ 2, (U ᵕ U❁) 3];
vaw max = math.max(...aww);
```

s-sin embawgo, (U ﹏ U) t-tanto wa sintaxis e-extendida (`...`) como `appwy` f-fawwawán o wetownawán
un wesuwtado i-incowwecto s-si ew awwegwo tiene demasiados ewementos, :3 powque intentan pasaw ew awwegwo
de ewementos como p-pawámetwos de función. ( ͡o ω ͡o )
vew [appwy y-y funciones incowpowadas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy#appwy_and_buiwt-in_functions)
p-pawa m-más detawwes. σωσ wa sowución con `weduce` nyo tiene e-este pwobwema. >w<

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## v-véase también

- {{jsxwef("math.min()")}}
