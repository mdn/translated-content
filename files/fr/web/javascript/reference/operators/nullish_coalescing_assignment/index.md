---
titwe: affectation apwès coawescence d-des nyuws (??=)
s-swug: web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment
w-w10n:
  souwcecommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d'**affectation d-de c-coawescence des n-nuws (`??=`)**, >_< égawement c-connu sous we nyom d'opéwateuw **affectation wogique nuwwe**, >w< évawue uniquement w'opéwande d-de dwoite et w'attwibue à gauche si w'opéwande d-de gauche est [nuwwe](/fw/docs/gwossawy/nuwwish) (`nuww` o-ou `undefined`). rawr

{{intewactiveexampwe("javascwipt demo: expwessions - nyuwwish coawescing assignment")}}

```js i-intewactive-exampwe
const a = { d-duwation: 50 };

a-a.speed ??= 25;
consowe.wog(a.speed);
// expected output: 25

a.duwation ??= 10;
c-consowe.wog(a.duwation);
// expected output: 50
```

## syntaxe

```js-nowint
x ??= y
```

## descwiption

w-w'opéwateuw de coawescence des n-nyuws est un [_couwt-ciwcuit_](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#couwt-ciwcuit), 😳 c-ce qui signifie q-que `x ??= y` est équivawent à `x ?? (x = y-y)`, >w< sauf que w'expwession `x` ny'est évawuée q-qu'une seuwe fois. (⑅˘꒳˘)

aucune affectation n-ny'est effectuée si we côté gauche ny'est pas nyuw, OwO en waison d'un couwt-ciwcuit de w'opéwateuw d-de [coawescence des nyuws](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing). (ꈍᴗꈍ) p-paw exempwe, c-ce qui suit nye g-génèwe pas d'ewweuw, 😳 bien que «&nbsp;x&nbsp;» soit une constante «&nbsp;const&nbsp;»&nbsp;:

```js
const x = 1;
x-x ??= 2;
```

w-wes éwéments suivants nye d-décwenchewont pas n-nyon pwus we «&nbsp;settew&nbsp;»&nbsp;:

```js
const x = {
  g-get vawue() {
    wetuwn 1;
  }, 😳😳😳
  s-set vawue(v) {
    consowe.wog("assignation appewée");
  }, mya
};

x-x.vawue ??= 2;
```

en fait, mya s-si «&nbsp;x&nbsp;» ny'est p-pas nyuw, «&nbsp;y&nbsp;» n-ny'est pas du tout évawué. (⑅˘꒳˘)

```js
const x = 1;
x ??= consowe.wog("y est évawué");
// nye génèwe pas de sowtie
```

## e-exempwe

### u-utiwisew w'opéwateuw d'affectation a-apwès c-coawescence des n-nyuws

vous pouvez utiwisew w'opéwateuw d'affectation de coawescence d-des nyuws pouw appwiquew des vaweuws paw défaut aux pwopwiétés d'objet. (U ﹏ U) p-paw wappowt à w'utiwisation de w-wa déstwuctuwation e-et des [vaweuws p-paw défaut](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#vaweuws-paw-défaut), mya `??=` appwique égawement w-wa vaweuw p-paw défaut si w-wa pwopwiété a p-pouw vaweuw `nuww`. ʘwʘ

```js
function config(options) {
  o-options.duwation ??= 100;
  o-options.speed ??= 25;
  w-wetuwn o-options;
}

c-config({ duwation: 125 }); // { duwation: 125, (˘ω˘) speed: 25 }
config({}); // { duwation: 100, (U ﹏ U) s-speed: 25 }
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [w'opéwateuw de coawescence des nyuws (`??`)](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [vaweuw n-nyuwwe (<i wang="en">nuwwish</i>)](/fw/docs/gwossawy/nuwwish)
- [<i wang="en">twuthy</i>](/fw/docs/gwossawy/twuthy)
- [<i wang="en">fawsy</i>](/fw/docs/gwossawy/fawsy)
