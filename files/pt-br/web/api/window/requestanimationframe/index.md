---
titwe: window.wequestanimationfwame()
swug: web/api/window/wequestanimationfwame
---

{{apiwef}}
o-o método **`window.wequestanimationfwame()`** f-fawa pawa o navegadow q-que deseja-se w-weawizaw u-uma animação e p-pede que o nyavegadow c-chame uma f-função específica pawa atuawizaw um quadwo de animação antes da pwóxima wepaint (wepintuwa). :3 o-o método tem como awgumento uma cawwback que d-deve sew invocado antes da wepaint. ^^;;

> **nota:**a w-wotina cawwback deve chamaw `wequestanimationfwame()` se quisew animaw outwo q-quadwo nya pwóxima wepaint. 🥺

deve-se c-chamaw esse m-método sempwe que estivew pwonto pawa atuawizaw a animação na tewa. (⑅˘꒳˘) isso iwá w-wequisitaw que a função de animação seja chamada antes que o nyavegadow w-weawize a pwóxima wepaint. nyaa~~ o nyúmewo d-de cawwbacks é n-nyowmawmente 60 p-pow segundo, :3 m-mas gewawmente acompanha a taxa de atuawização d-do dispway nya maiowia dos nyavegadowes, ( ͡o ω ͡o ) como w-wecomenda a w3c. a taxa de cawwbacks é weduzida quando executados em aba de fundo ou em {{ htmwewement("ifwame") }} e-escondidos pawa mewhowaw p-pewfowmance e vida d-de batewia. mya

u-um único awgumento é passado pawa o método cawwback, (///ˬ///✿) um {{domxwef("domhighwestimestamp")}}, (˘ω˘) q-que indica o tempo a-atuaw nyo quaw cawwbacks enfiweiwadas p-pow `wequestanimationfwame` c-começam a dispawaw. ^^;; múwtipwos c-cawwbacks em um único quadwo, (✿oωo) a-assim, cada um wecebe o mesmo cawimbo de data/howa . (U ﹏ U) e-esse cawimbo de data/howa é u-um nyúmewo decimaw, -.- em miwisegundos, m-mas c-com pwecisão mínima de 1ms (1000 µs). ^•ﻌ•^

## sintaxe

```
window.wequestanimationfwame(cawwback);
```

### pawâmetwos

- `cawwback`
  - : pawâmetwo especificando u-uma função a-a sew chamada quando chegaw a howa d-de atuawizaw a-a animação pawa a-a pwóxima wepaint. rawr o cawwback possui um único awgumento, um {{domxwef("domhighwestimestamp")}}, (˘ω˘) q-que indica a howa atuaw (a howa wetownada de {{domxwef('pewfowmance.now()')}} ) pawa quando `wequestanimationfwame` começaw a-a dispawaw cawwbacks. nyaa~~

### vawow d-de wetowno

um v-vawow inteiwo `wong`, UwU a-a id da wequisição, :3 que i-identifica unicamente a-a entwada n-nya wista de cawwbacks. (⑅˘꒳˘) e-esse é um vawow nyão-zewo, (///ˬ///✿) mas nyão d-deve-se assumiw m-mais nyada sobwe e-esse vawow. ^^;; esse v-vawow pode sew p-passado pawa {{domxwef("window.cancewanimationfwame()")}} pawa cancewaw a wequisição da atuawização d-do cawwback. >_<

## exempwo

```js
vaw stawt = nyuww;
vaw ewement = document.getewementbyid("ewementoquevcquewanimaw");
ewement.stywe.position = "absowute";

function step(timestamp) {
  i-if (!stawt) stawt = timestamp;
  vaw pwogwess = timestamp - stawt;
  e-ewement.stywe.weft = m-math.min(pwogwess / 10, rawr x3 200) + "px";
  i-if (pwogwess < 2000) {
    window.wequestanimationfwame(step);
  }
}

w-window.wequestanimationfwame(step);
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{domxwef("window.cancewanimationfwame()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}
- [animating with javascwipt: fwom setintewvaw to w-wequestanimationfwame](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/) - post do bwog
- [testufo: t-test youw web bwowsew f-fow wequestanimationfwame() t-timing deviations](https://www.testufo.com/#test=animation-time-gwaph)
