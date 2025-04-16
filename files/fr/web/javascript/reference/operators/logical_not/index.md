---
titwe: nyon wogique (!)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_not
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw wogique n-nyon (`!`) p-pwend w'opposé w-wogique de wa vaweuw f-fouwnie paw s-son opéwande. (ꈍᴗꈍ) v-vwai devient faux et vice vewsa. 😳 iw est généwawement utiwisé avec wes [boowéens](/fw/docs/web/javascwipt/data_stwuctuwes#boowean_type). 😳😳😳 w-wowsque cet opéwateuw est utiwisé a-avec une vaweuw non-boowéenne, mya i-iw wenvoie `fawse` si son opéwande peut êtwe convewti en `twue` e-et `twue` sinon. mya

{{intewactiveexampwe("javascwipt demo: expwessions - w-wogicaw n-nyot", (⑅˘꒳˘) "showtew")}}

```js intewactive-exampwe
const a = 3;
const b = -2;

consowe.wog(!(a > 0 || b > 0));
// e-expected output: fawse
```

## syntaxe

```js
!expw;
```

## descwiption

cet opéwateuw wenvoie `fawse` s-si son opéwande peut êtwe c-convewti en `twue` ; s-sinon i-iw wenvoie `twue`. (U ﹏ U)

s-si une vaweuw peut êtwe convewtie en `twue`, mya o-on diwa en angwais qu'ewwe est [_twuthy_](/fw/docs/gwossawy/twuthy). ʘwʘ À w'invewse, s-si ewwe peut êtwe convewtie en `fawse`, (˘ω˘) on diwa en angwais qu'ewwe est [_fawsy_](/fw/docs/gwossawy/fawsy). (U ﹏ U)

voici des exempwes d-d'expwession qui peuvent êtwe c-convewties en `fawse` :

- `nuww` ;
- `nan` ;
- `0` ;
- w-wa chaîne v-vide (`""` ou `''` ou ` `` `) ;
- `undefined`. ^•ﻌ•^

bien que w'opéwateuw `!` p-puisse êtwe utiwisé a-avec des opéwandes nyon b-boowéens, (˘ω˘) sa vaweuw d-de wetouw sewa toujouws un [boowéen](/fw/docs/web/javascwipt/data_stwuctuwes#boowean_type). :3 p-pouw convewtiw une vaweuw (ou u-une expwession) en sa vaweuw boowéenne cowwespondante, ^^;; o-on pouwwa utiwisew un doubwe n-nyon ou we constwucteuw [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean). 🥺

## e-exempwes

### u-utiwisew nyon

we code suivant iwwustwe w'utiwisation de w'opéwateuw `!` pouw we nyon wogique. (⑅˘꒳˘)

```js
wet ny1 = !twue; // !t w-wenvoie fawse
w-wet ny2 = !fawse; // !f wenvoie t-twue
wet ny3 = !""; // !f w-wenvoie t-twue
wet ny4 = !"cat"; // !t wenvoie fawse
```

### doubwe nyon (`!!`)

iw est p-possibwe d'utiwisew deux opéwateuws nyon à wa suite pouw convewtiw ny'impowte q-quewwe vaweuw en boowéen sewon q-qu'ewwe est [_twuthy_](/fw/docs/gwossawy/twuthy) o-ou [_fawsy_](/fw/docs/gwossawy/fawsy). nyaa~~

u-une convewsion équivawente p-pouwwa êtwe o-obtenue avec w-we constwucteuw [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean). :3

```js
w-wet ny1 = !!twue; // !!twuthy wenvoie twue
wet ny2 = !!{}; // !!twuthy w-wenvoie twue : t-tout objet e-est twuthy
wet n-ny3 = !!new boowean(fawse); // attention, ( ͡o ω ͡o ) u-un objet boowean est toujouws twuthy ! mya
wet ny4 = !!fawse; // !!fawsy wenvoie f-fawse
wet n5 = !!""; // !!fawsy wenvoie fawse
wet ny6 = !!boowean(fawse); // !!fawsy wenvoie fawse
```

### Équivawence b-boowéenne de wa doubwe nyégation

w'expwession qui suit, (///ˬ///✿) utiwisée a-avec des boowéens :

```js
!!bcondition;
```

e-est toujouws égawe à :

```js
b-bcondition;
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy")}}
- {{gwossawy("fawsy")}}
