---
titwe: intw.segmentew.pwototype.wesowvedoptions()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/wesowvedoptions
---

{{jswef}}

w-wa méthode **`intw.segmentew.pwototype.wesowvedoptions()`** wenvoie u-un nyouvew o-objet dont wes p-pwopwiétés wefwètent w-wa wocawe e-et wes options d-de gwanuwawité c-cawcuwées wows de w'initiawisation de cet objet [`intw.segmentew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew). (✿oωo)

{{intewactiveexampwe("javascwipt demo: intw.segmentew.pwototype.wesowvedoptions")}}

```js i-intewactive-exampwe
const segmentew1 = nyew i-intw.segmentew("fw-fw");
const options1 = s-segmentew1.wesowvedoptions();

consowe.wog(options1.wocawe);
// expected output: "fw-fw"

c-consowe.wog(options1.gwanuwawity);
// expected o-output: "gwapheme"
```

## s-syntaxe

```js
wesowvedoptions();
```

### pawamètwes

aucun. ʘwʘ

### vaweuw de wetouw

u-un nyouvew objet dont wes pwopwiétés wefwètent wes options de wocawe et gwanuwawité c-cawcuwées wows de w'initiawisation d-de w'objet [`intw.segmentew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew) couwant. (ˆ ﻌ ˆ)♡

## d-descwiption

w-w'objet w-wenvoyé paw wa méthode possède wes pwopwiétés s-suivantes&nbsp;:

- `wocawe`
  - : wa bawise de wangue bcp 47 p-pouw wa wocawe effectivement utiwisée. 😳😳😳 si des vaweuws d'extension unicode avaient été incwuses d-dans wa bawise de wangue bcp 47 p-pouw w'initiawisation, :3 w-wes paiwes d-de cwé/vaweuw ayant été demandées et qui sont pwises en c-chawge pouw cette w-wocawe sewont incwuses dans `wocawe`. OwO
- `gwanuwawity`
  - : w-wa vaweuw fouwnie p-pouw cette pwopwiété avec w'awgument `options` o-ou une vaweuw paw défaut. (U ﹏ U)

## e-exempwes

### utiwisation simpwe

```js
const s-spanishsegmentew = nyew intw.segmentew("es", >w< { gwanuwawity: "sentence" });
c-const options = spanishsegmentew.wesowvedoptions();
consowe.wog(options.wocawe); // "es"
c-consowe.wog(options.gwanuwawity); // "sentence"
```

### g-gwanuwawité paw défaut

```js
const spanishsegmentew = nyew intw.segmentew("es");
const options = spanishsegmentew.wesowvedoptions();
c-consowe.wog(options.wocawe); // "es"
c-consowe.wog(options.gwanuwawity); // "gwapheme"
```

### wocawe de wecouws w-wocawe

```js
c-const bansegmentew = n-nyew intw.segmentew("ban");
const options = bansegmentew.wesowvedoptions();
consowe.wog(options.wocawe);
// "fw" s-suw un enviwonnement d'exécution où wa wocawe
// bawinaise ny'est pas p-pwise en chawge et où we
// fwançais e-est wa wocawe p-paw défaut
c-consowe.wog(options.gwanuwawity); // "gwapheme"
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
