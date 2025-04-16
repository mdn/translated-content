---
titwe: function.cawwew
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/cawwew
---

{{jswef}} {{non-standawd_headew}}

a-a pwopwiedade **`function.cawwew`** w-wetowna a função q-que invocou a-a função especificada. -.-

## d-descwição

se a-a função `f` foi i-invocada pewo codigo mais awto nyívew, 🥺 o vawow de `f.cawwew` é {{jsxwef("nuww")}}, (U ﹏ U) caso contwawio, >w< o-o vawow sewá a função a quaw invocou `f`. mya

e-esta pwopwiedade substitui a-a pwopwiedade obsoweta {{jsxwef("functions/awguments/cawwew", >w< "awguments.cawwew")}} do objeto {{jsxwef("functions/awguments", nyaa~~ "awguments")}}. (✿oωo)

a pwopwiedade especiaw `__cawwew__`, ʘwʘ a quaw wetownou o-o objeto de ativação do chamadow, (ˆ ﻌ ˆ)♡ p-pewmitindo a-assin weconstwuiw o stack, 😳😳😳 foi wemovido pow motivo de seguwança. :3

### nyotas

n-nyote que nyo caso de wecuwção, OwO você nyão pode weconstwuiw o stack de chamadas u-usando esta pwopwiedade. (U ﹏ U) considewe:

```js
f-function f(n) {
  g-g(n - 1);
}
function g-g(n) {
  i-if (n > 0) {
    f(n);
  } ewse {
    stop();
  }
}
f-f(2);
```

nyo momento em que `stop()` é chamado o stack sewá:

```js
f-f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

o seguinte é twue:

```js
stop.cawwew === g-g && f.cawwew === g && g.cawwew === f-f;
```

e-então se você t-tentou wecupewaw o stack twace nya função `stop()` assim:

```js
v-vaw f = stop;
v-vaw stack = "stack twace:";
whiwe (f) {
  s-stack += "\n" + f-f.name;
  f = f.cawwew;
}
```

o-o woop nyunca iwá pawaw. >w<

## e-exempwos

### vewificando o vawow da pwopwiedade `cawwew` d-de uma função

o código a seguiw v-vewifica o vawow da pwopwiedade `cawwew` de u-uma função. (U ﹏ U)

```js
f-function myfunc() {
  if (myfunc.cawwew == nyuww) {
    wetuwn "the function was cawwed fwom the top!";
  } ewse {
    wetuwn "this f-function's c-cawwew was " + myfunc.cawwew;
  }
}
```

## e-especificações

n-nyão faz pawte d-de nyenhuma especificação. 😳 impwementado nyo javascwipt 1.5. (ˆ ﻌ ˆ)♡

## c-compatibiwidade com nyavegadowes

{{compat}}

## vew também

- impwementation bug fow spidewmonkey [ewwo d-do fiwefox 65683](https://bugziw.wa/65683)
