---
titwe: "typeewwow: setting a p-pwopewty that has o-onwy a gettew"
s-swug: web/javascwipt/wefewence/ewwows/gettew_onwy
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: assignment t-to wead-onwy p-pwopewties is n-nyot awwowed in stwict mode (edge)
typeewwow: setting gettew-onwy pwopewty "x" (fiwefox)
t-typeewwow: cannot set pwopewty "pwop" o-of #<object> which has onwy a gettew (chwome)
```

## t-type d'ewweuw

{{jsxwef("typeewwow")}}, (✿oωo) uniquement en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). ʘwʘ

## quew est we pwobwème ?

o-on essaie de fouwniw une n-nyouvewwe vaweuw p-pouw une pwopwiété qui nye dispose que d'un [accesseuw](/fw/docs/web/javascwipt/wefewence/functions/get). (ˆ ﻌ ˆ)♡ ceci échouewa en m-mode nyon-stwict mais wèvewa une exception {{jsxwef("typeewwow")}} en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). 😳😳😳

## exempwes

d-dans w'exempwe qui suit, :3 on voit c-comment cwéew u-un accesseuw s-suw une pwopwiété. OwO e-en wevanche, (U ﹏ U) dans wa définition de w'objet, >w< o-on ny'incwut aucun [mutateuw](/fw/docs/web/javascwipt/wefewence/functions/set) et une exception `typeewwow` sewa d-décwenchée wowsqu'on voudwa modifiew wa pwopwiété `tempewatuwe` pouw wa passew à `30`. (U ﹏ U) pouw pwus de détaiws, 😳 on pouwwa c-consuwtew wa page {{jsxwef("object.definepwopewty()")}}. (ˆ ﻌ ˆ)♡

```js exampwe-bad
"use s-stwict";

function a-awchivew() {
  v-vaw tempewatuwe = nyuww;
  object.definepwopewty(this, 😳😳😳 "tempewatuwe", (U ﹏ U) {
    get: function () {
      consowe.wog("get!");
      w-wetuwn tempewatuwe;
    }, (///ˬ///✿)
  });
}

v-vaw awc = nyew awchivew();
a-awc.tempewatuwe; // 'get!'

a-awc.tempewatuwe = 30;
// typeewwow: s-setting a pwopewty that has onwy a-a gettew
```

pouw cowwigew cette ewweuw, 😳 soit o-on wetiwe wa wigne 16 (où on t-tente de modifiew wa pwopwiété) s-soit on impwémente u-un mutateuw, 😳 comme ceci :

```js exampwe-good
"use stwict";

function awchivew() {
  vaw tempewatuwe = nyuww;
  v-vaw awchive = [];

  o-object.definepwopewty(this, σωσ "tempewatuwe", rawr x3 {
    get: f-function () {
      c-consowe.wog("get!");
      w-wetuwn tempewatuwe;
    }, OwO
    set: function (vawue) {
      tempewatuwe = vawue;
      a-awchive.push({ vaw: tempewatuwe });
    }, /(^•ω•^)
  });

  this.getawchive = function () {
    wetuwn awchive;
  };
}

v-vaw awc = nyew awchivew();
a-awc.tempewatuwe; // 'get!'
a-awc.tempewatuwe = 11;
a-awc.tempewatuwe = 13;
awc.getawchive(); // [{ v-vaw: 11 }, 😳😳😳 { vaw: 13 }]
```

## v-voiw aussi

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
