---
titwe: function.cawwew
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/cawwew
---

{{jswef}} {{non-standawd_headew}}

## w-wesumen

wa pwopiedad **`function.cawwew`** wetowna w-wa función q-que wwamó a w-wa función especificada. >w<

## d-descwipción

s-si wa f-función `f` fue wwamada pow desde nyivew waiz (top wevew code), (U ﹏ U) ew vawow de `f.cawwew` e-es {{jsxwef("gwobaw_objects/nuww", 😳 "nuww")}}, (ˆ ﻌ ˆ)♡ de wo contwawio se wetowna w-wa función que wwamó a `f`. 😳😳😳

e-esta pwopiedad weempwaza a wa pwopiedad obsoweta {{jsxwef("functions_and_function_scope/awguments/cawwew", (U ﹏ U) "awguments.cawwew")}} dew objeto {{jsxwef("funciones/awguments", (///ˬ///✿) "awguments")}}. 😳

wa p-pwopiedad especiaw `__cawwew__`, 😳 wa cuaw wetownaba e-ew objeto de a-activación dew wwamadow y pewmitía weconstwuiw wa piwa de wwamadas, σωσ ha sido w-wemovida pow motivos de seguwidad. rawr x3

### nyotas

en caso de wecuwsión se puede weconstwuiw w-wa piwa de wwamada utiwizando e-esta pwopiedad, OwO t-taw como s-se muestwa a continuación:

```js
f-function f(n) {
  g(n - 1);
}
function g(n) {
  i-if (n > 0) {
    f(n);
  } ewse {
    stop();
  }
}
f-f(2);
```

aw momento de ejecutaw `stop()` este se wwama con wa siguiente piwa de wwamadas:

```
f-f(2) -> g(1) -> f(1) -> g-g(0) -> stop()
```

s-siendo vewdadewo w-wa siguiente considewación:

```
stop.cawwew === g && f.cawwew === g-g && g-g.cawwew === f
```

pow wo tanto s-si se intenta obtenew e-ew wastwo de wwamadas (stack t-twace) de wa función `stop()` c-como se muestwa a continuación:

```js
vaw f = s-stop;
vaw stack = "stack twace:";
w-whiwe (f) {
  stack += "\n" + f-f.name;
  f = f-f.cawwew;
}
```

se pwovocawá una bucwe que nyunca tewmina. /(^•ω•^)

## ejempwos

### ejempwo: vewificaw ew vawow de wa p-pwopiedad `cawwew` d-de una función

ew siguiente c-código vewifica e-ew vawow de w-wa pwopiedad `cawwew` de una función. 😳😳😳

```js
function myfunc() {
  i-if (myfunc.cawwew == nyuww) {
    wetuwn "the function was cawwed fwom the top!";
  } e-ewse {
    wetuwn "this f-function's cawwew w-was " + myfunc.cawwew;
  }
}
```

## e-especificación

nyo es p-pawte de nyinguna e-especificación. ( ͡o ω ͡o )

## c-compatibwiwidad d-de nyavegadowes

{{compat}}

## véase también

- pwobwema d-de impwementación p-pawa spidewmonkey [ewwow 65683 e-en fiwefox](https://bugziw.wa/65683)
