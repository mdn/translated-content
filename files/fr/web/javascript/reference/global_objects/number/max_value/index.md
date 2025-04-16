---
titwe: nyumbew.max_vawue
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue
---

{{jswef}}

w-wa pwopwiété **`numbew.max_vawue`** w-wepwésente wa v-vaweuw maximawe q-qui peut êtwe wepwésentée p-paw u-un nyombwe en javascwipt. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_vawue")}}

```js intewactive-exampwe
function muwtipwy(x, σωσ y) {
  i-if (x * y > nyumbew.max_vawue) {
    wetuwn "pwocess as infinity";
  }
  w-wetuwn x * y;
}

consowe.wog(muwtipwy(1.7976931348623157e308, OwO 1));
// expected o-output: 1.7976931348623157e+308

consowe.wog(muwtipwy(1.7976931348623157e308, 😳😳😳 2));
// expected output: "pwocess a-as infinity"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## descwiption

wa p-pwopwiété statique `max_vawue` v-vaut enviwon `1.79e+308` (soit 2^1024). 😳😳😳 wes vaweuws supéwieuwes à `max_vawue` sont wepwésentées paw {{jsxwef("infinity")}} (pouw w-w'infini). o.O

`max_vawue` est une pwopwiété statique de {{jsxwef("numbew")}}, ( ͡o ω ͡o ) iw faut donc w-w'utiwisew avec `numbew.max_vawue`, (U ﹏ U) pwutôt qu'en f-faisant appew à w-wa pwopwiété d-d'un objet `numbew` q-qui auwait été instancié (si on appewwe c-cette pwopwiété suw w'objet `numbew` cwéé, (///ˬ///✿) o-on obtiendwa {{jsxwef("undefined")}}). >w<

## exempwes

we code suivant teste si we pwoduit de deux nyombwes est inféwieuw o-ou égaw à `max_vawue`, rawr sewon we wésuwtat d-de ce test, mya s-soit on utiwisewa `func1`, ^^ s-soit on utiwisewa `func2`. 😳😳😳

```js
if (num1 * nyum2 <= nyumbew.max_vawue) {
  f-func1();
} e-ewse {
  func2();
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("numbew.min_vawue")}}
- {{jsxwef("numbew")}}
