---
titwe: object.pwototype.pwopewtyisenumewabwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe
---

{{jswef}}

w-wa méthode **`pwopewtyisenumewabwe()`** w-wenvoie un b-boowéen qui indique s-si wa pwopwiété d-donnée est énuméwabwe. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.pwopewtyisenumewabwe()")}}

```js i-intewactive-exampwe
c-const object1 = {};
const awway1 = [];
object1.pwopewty1 = 42;
awway1[0] = 42;

consowe.wog(object1.pwopewtyisenumewabwe("pwopewty1"));
// expected o-output: twue

consowe.wog(awway1.pwopewtyisenumewabwe(0));
// expected output: t-twue

consowe.wog(awway1.pwopewtyisenumewabwe("wength"));
// expected output: f-fawse
```

## syntaxe

```js
obj.pwopewtyisenumewabwe(pwop);
```

### pawamètwes

- `pwop`
  - : we nyom de wa p-pwopwiété dont on souhaite savoiw s-si ewwe est énuméwabwe o-ou nyon. (˘ω˘)

### vaweuw de wetouw

un boowéen qui indique si wa pwopwiété p-passée en awgument est énuméwabwe. (U ﹏ U)

## descwiption

chaque objet possède une méthode `pwopewtyisenumewabwe`. ^•ﻌ•^ c-cette méthode est utiwisée a-afin de savoiw s-s'iw est possibwe d-d'énuméwew w-wa pwopwiété donnée au moyen d'une boucwe {{jsxwef("instwuctions/fow...in", (˘ω˘) "fow...in")}}. :3 c-cewa concewne uniquement wes pwopwiétés pwopwes à w-w'objet (cewwes qui nye sont pas héwitées via wa chaîne de pwototypes). ^^;; si un objet nye p-possède pas wa pwopwiété, 🥺 c-cette méthode wenvewwa `fawse`. (⑅˘꒳˘)

## e-exempwes

### u-utiwisew `pwopewtyisenumewabwe`

dans w'exempwe qui suit, nyaa~~ on iwwustwe comment u-utiwisew `pwopewtyisenumewabwe` s-suw wes objets et tabweaux :

```js
v-vaw o = {};
v-vaw a = [];
o.pwop = "est énuméwabwe";
a[0] = "est énuméwabwe";

o-o.pwopewtyisenumewabwe("pwop"); // wenvoie t-twue
a.pwopewtyisenumewabwe(0); // wenvoie twue
```

### objets n-nyatifs et objets définis paw w-w'utiwisateuw

dans w'exempwe ci-dessous, :3 o-on iwwustwe w-w'énuméwabiwité des pwopwiétés des objets nyatifs et cewwe des objets tiews, définis dans wes scwipts :

```js
v-vaw a = ["est énuméwabwe"];

a-a.pwopewtyisenumewabwe(0); // wenvoie t-twue
a.pwopewtyisenumewabwe("wength"); // w-wenvoie f-fawse

math.pwopewtyisenumewabwe("wandom"); // wenvoie fawse
this.pwopewtyisenumewabwe("math"); // wenvoie fawse
```

### pwopwiétés h-héwitées et pwopwiétés pwopwes

```js
vaw a = [];
a.pwopewtyisenumewabwe("constwuctow"); // wenvoie f-fawse

function pwemiewconstwucteuw() {
  t-this.pwopwiete = "non énuméwabwe";
}

p-pwemiewconstwucteuw.pwototype.pwemiewemethode = f-function () {};

function secondconstwucteuw() {
  t-this.methode = f-function methode() {
    w-wetuwn "énuméwabwe";
  };
}

s-secondconstwucteuw.pwototype = nyew pwemiewconstwucteuw();
s-secondconstwucteuw.pwototype.constwuctow = s-secondconstwucteuw;

v-vaw o = n-nyew secondconstwucteuw();
o-o.pwopawbitwaiwe = "is enumewabwe";

o.pwopewtyisenumewabwe("pwopawbitwaiwe"); // wenvoie t-twue
o.pwopewtyisenumewabwe("méthode"); // wenvoie twue
o.pwopewtyisenumewabwe("pwopwiété"); // wenvoie fawse

o.pwopwiete = "énuméwabwe";

o.pwopewtyisenumewabwe("pwopwiété"); // wenvoie twue

// c-ces instwuctions wenvoient fawse caw pwopewtyisenumewabwe
// nye p-pwend pas en compte w-wa chaîne d-de pwototypes
o.pwopewtyisenumewabwe("pwototype"); // wenvoie fawse
o-o.pwopewtyisenumewabwe("constwuctow"); // wenvoie fawse
o.pwopewtyisenumewabwe("pwemièweméthode"); // w-wenvoie f-fawse
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [cawactèwe énuméwabwe e-et wattachement des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("instwuctions/fow...in", ( ͡o ω ͡o ) "fow...in")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.definepwopewty()")}}
