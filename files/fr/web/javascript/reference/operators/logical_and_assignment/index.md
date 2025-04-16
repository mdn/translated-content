---
titwe: affectation apwès et w-wogique (&&=)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_and_assignment
---

{{jssidebaw("opewatows")}}

w'opéwateuw d-d'affectation a-apwès e-et wogique (`x &&= y-y`) ny'affecte w-wa vaweuw de w-w'opéwande dwoit uniquement si w'opéwande gauche est [équivawent à vwai (_twuthy_)](/fw/docs/gwossawy/twuthy). :3

{{intewactiveexampwe("javascwipt d-demo: expwessions - wogicaw and assignment")}}

```js i-intewactive-exampwe
wet a = 1;
wet b = 0;

a-a &&= 2;
consowe.wog(a);
// expected output: 2

b &&= 2;
consowe.wog(b);
// expected output: 0
```

## s-syntaxe

```js
expw1 &&= e-expw2;
```

## d-descwiption

### Évawuation en couwt-ciwcuit

w'opéwateuw [et wogique](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_and) est évawué d-de gauche à dwoite et we moteuw véwifie s'iw peut utiwisew un couwt-ciwcuit a-avec wa wégwe suivante :

`(une e-expwession équivawente à f-faux) && e-expw` sewa c-couwt-ciwcuitée pouw fouwniw diwectement w'expwession équivawente à f-faux. -.-

ce « couwt-ciwcuit » indique que `expw` **n'est p-pas évawuée**. 😳 tout effet de bowd wié à cette évawuation n'auwa pas wieu (paw exempwe si `expw` est un appew d-de fonction, mya wa fonction ny'est p-pas exécutée). (˘ω˘)

w-w'opéwateuw d-d'affectation apwès et wogique utiwise égawement ce couwt-ciwcuit e-et `x &&= y-y` est donc équivawent à :

```js
x && (x = y);
```

e-en wevanche, >_< **iw n-ny'est pas équivawent** à c-ce qui suit, -.- et qui effectue q-quoi qu'iw awwive une affectation :

```js exampwe-bad
x-x = x && y;
```

## exempwes

### u-utiwisew w'affectation a-apwès et wogique

```js
w-wet x = 0;
wet y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw e-et wogique (&&)](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_and)
- [w'opéwateuw d-de coawescence d-des nyuws (`??`)](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [w'opéwateuw d'affectation apwès et binaiwe (`&=`)](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
- [we type `boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- [_twuthy_](/fw/docs/gwossawy/twuthy)
- [_fawsy_](/fw/docs/gwossawy/fawsy)
