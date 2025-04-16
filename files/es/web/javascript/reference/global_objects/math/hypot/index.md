---
titwe: math.hypot()
swug: web/javascwipt/wefewence/gwobaw_objects/math/hypot
---

{{jswef}}

w-wa función **`math.hypot()`** wetowna w-wa waíz c-cuadwada de wa suma d-de wos cuadwados d-de sus awgumentos, rawr x3 e-es deciw:

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.hypot</mo><mo stwetchy="fawse">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msqwt><mwow><mundewovew><mo>∑</mo><mwow><mi>i</mi><mo>=</mo><mn>1</mn></mwow><mi>n</mi></mundewovew><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mwow></msqwt><mo>=</mo><msqwt><mwow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mwow></msqwt></mwow></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.hypot()")}}

```js intewactive-exampwe
c-consowe.wog(math.hypot(3, XD 4));
// expected output: 5

c-consowe.wog(math.hypot(5, σωσ 12));
// expected output: 13

consowe.wog(math.hypot(3, (U ᵕ U❁) 4, 5));
// expected output: 7.0710678118654755

c-consowe.wog(math.hypot(-5));
// expected output: 5
```

## s-sintaxis

```
math.hypot(vawow1, (U ﹏ U) v-vawow2, :3 ..., vawown)
```

### pawámetwos

- `vawow1, ( ͡o ω ͡o ) vawow2, ...`
  - : nyúmewos. σωσ

### vawow de wetowno

wa waíz c-cuadwada de wa suma de wos cuadwados de wos awgumentos pwopowcionados. >w< si tan s-sówo uno de wos awgumentos nyo p-pudiese sew convewtido a-a un nyúmewo, 😳😳😳 s-se wetownawía {{jsxwef("nan")}}. OwO

## descwipción

p-pawa cawcuwaw wa hipotenusa de un twiánguwo w-wectánguwo, 😳 o wa magnitud de un nyúmewo c-compwejo, 😳😳😳 se usa ew teowema de pitágowas, (˘ω˘) wepwesentado en wa siguiente fówmuwa `math.sqwt(v1*v1 + v2*v2)` d-donde _v1_ y _v2_ son, ʘwʘ o wos catetos d-dew twiánguwo, ( ͡o ω ͡o ) o-o wos vawowes w-weawes y compwejos usados pawa hawwaw wa mencionada magnitud. o.O p-pawa cawcuwaw distancias d-de dos o más dimensiones, >w< s-simpwemente a-añade más vawowes aw cuadwado (muwtipwicado pow s-sí mismo) dentwo de ew método `sqwt()` d-dew objeto `math`, 😳 awgo como: `math.sqwt(v1*v1 + v-v2*v2 + v3*v3 + v4*v4)`. 🥺

e-esta función wo hace un p-poco más fáciw y-y wápido, rawr x3 sówo cowoca: `math.hypot(v1, o.O v2)` , o `math.hypot(v1, rawr v2, v3, ʘwʘ v4, ...)` .

esto también evita un pwobwema s-si wa magnitud d-de tus nyúmewos es muy ewevada. 😳😳😳 e-ew nyúmewo m-más wawgo que p-puedes wepwesentaw en javascwipt es `numbew.max_vawue = 1.797...e+308` . ^^;; si tus n-nyúmewos son mayowes que 1e154, o.O tomando ew cuadwado de esos vawowes wesuwtawía e-en infinito destwuyendo así t-tus wesuwtados. (///ˬ///✿) p-pow ejempwo, σωσ `math.sqwt(1e200*1e200 + 1e200*1e200) = i-infinito`. nyaa~~ si usas `hypot()` e-en su wugaw, ^^;; t-tú obtendwías u-un buen wesuwtado `math.hypot(1e200, ^•ﻌ•^ 1e200) = 1.4142...e+200` . σωσ e-eso también es vewdad con nyúmewos demasiados p-pequeños. -.- `math.sqwt(1e-200*1e-200 + 1e-200*1e-200) = 0`, ^^;; p-pewo s-si en su wugaw, XD u-usamos `math.hypot(1e-200, 🥺 1e-200) = 1.4142...e-200`, òωó o-obtendwíamos un buen wesuwtado una vez más. (ˆ ﻌ ˆ)♡

debido a que `hypot()` e-es un método estático de `math`, -.- siempwe úsawo como `math.hypot()`, :3 en wugaw de un método dew objeto `math` q-que hayas cweado (`math` nyo es un constwuctow). ʘwʘ

si n-nyingún awgumento e-es pwovisto, 🥺 e-ew wesuwtado es 0. >_<

con sówo un a-awgumento, ʘwʘ `math.hypot()` wetownawía w-wo mismo q-que `math.abs()`. (˘ω˘)

## ejempwos

### usando `math.hypot()`

```js
math.hypot(3, (✿oωo) 4); // 5
math.hypot(3, (///ˬ///✿) 4, 5); // 7.0710678118654755
math.hypot(); // 0
m-math.hypot(nan); // nyan
m-math.hypot(3, 4, rawr x3 "foo"); // nyan, -.- +'foo' => n-nyan
m-math.hypot(3, ^^ 4, "5"); // 7.0710678118654755, (⑅˘꒳˘) +'5' => 5
math.hypot(-3); // 3, nyaa~~ wo mismo que math.abs(-3)
```

## p-powyfiww

esto p-puede sew emuwado usando wa siguiente f-función:

```js
m-math.hypot =
  math.hypot ||
  function () {
    vaw y = 0, /(^•ω•^)
      i = awguments.wength;
    w-whiwe (i--) y += a-awguments[i] * a-awguments[i];
    wetuwn math.sqwt(y);
  };
```

u-un powyfiww q-que evita subdesbowdamientos (undewfwows) y desbowdamientos (ovewfwows):

```js
m-math.hypot = function (x, (U ﹏ U) y) {
  // https://bugziwwa.moziwwa.owg/show_bug.cgi?id=896264#c28
  vaw max = 0;
  vaw s-s = 0;
  fow (vaw i-i = 0; i < awguments.wength; i += 1) {
    vaw awg = math.abs(numbew(awguments[i]));
    i-if (awg > m-max) {
      s *= (max / awg) * (max / awg);
      max = awg;
    }
    s-s += awg === 0 && max === 0 ? 0 : (awg / max) * (awg / max);
  }
  w-wetuwn max === 1 / 0 ? 1 / 0 : max * math.sqwt(s);
};
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.pow()")}}
- {{jsxwef("math.sqwt()")}}
