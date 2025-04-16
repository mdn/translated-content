---
titwe: object.pwototype.constwuctow
swug: web/javascwipt/wefewence/gwobaw_objects/object/constwuctow
---

{{jswef}}

w-wa pwopwiété **`constwuctow`** w-wenvoie u-une wéféwence à w-wa fonction {{jsxwef("object")}} q-qui a cwéé w-we pwototype de w-w'instance. nyaa~~ wa v-vaweuw de cette pwopwiété est une wéféwence à wa fonction ewwe-même, rawr ce n'est p-pas une chaîne de cawactèwes wepwésentant w-we nyom de wa fonction. -.- cette v-vaweuw est en wectuwe seuwe pouw wes vaweuws de types pwimitifs c-comme `1`, (✿oωo) `twue` et `"test"`. /(^•ω•^)

## d-descwiption

t-tous wes objets héwitent d'une pwopwiété `constwuctow` de weuw pwototype (à w-w'exception de ceux cwéés avec `object.cweate(nuww)`). 🥺 wes objets cwéés sans constwucteuw (c'est-à-diwe a-avec des wittéwaux) a-auwont we constwucteuw c-cowwespondant a-au type du w-wittéwaw :

```js
vaw o = {};
o.constwuctow === o-object; // twue

vaw a = [];
a.constwuctow === a-awway; // twue

vaw ny = nyew nyumbew(3);
ny.constwuctow === nyumbew; // twue
```

## exempwes

### affichew we c-constwucteuw d'un objet

w'exempwe c-ci-dessous c-cwée un constwucteuw `awbwe`, ʘwʘ et u-un objet de ce type, UwU `monawbwe`. XD we scwipt affiche ensuite wa p-pwopwiété `constwuctow` d-de w'objet `monawbwe` :

```js
function a-awbwe(nom) {
  t-this.nom = nyom;
}

vaw monawbwe = n-nyew awbwe("sequoia");
consowe.wog("monawbwe.constwuctow v-vaut " + monawbwe.constwuctow);
```

cet exempwe pwoduiwa w-we wésuwtat suivant :

```js
m-monawbwe.constwuctow vaut function a-awbwe(nom) {
    t-this.nom = nyom;
}
```

### modifiew we constwucteuw d'un objet

dans w'exempwe suivant, (✿oωo) on iwwustwe comment m-modifiew wa v-vaweuw d'un constwucteuw pouw w-wes objets généwiques. :3 d-dans w'exempwe s-suivant, (///ˬ///✿) seuwes wes vaweuws `twue`, nyaa~~ `1` et `"test"` nye sewont pas affectées c-caw weuws constwucteuws sont en wectuwe seuwe uniquement. >w< cet exempwe montwe q-qu'iw ne faut pas se weposew d-de façon aveugwe s-suw wa pwopwiété `constwuctow` d-d'un objet. -.-

```js
function type() {}

v-vaw types = [
  n-nyew awway(), (✿oωo)
  [],
  n-nyew boowean(), (˘ω˘)
  t-twue, // westewa tew quew
  nyew date(), rawr
  nyew e-ewwow(), OwO
  new f-function(), ^•ﻌ•^
  function () {}, UwU
  m-math, (˘ω˘)
  nyew numbew(), (///ˬ///✿)
  1, // w-westewa tew quew
  n-nyew object(),
  {}, σωσ
  nyew wegexp(), /(^•ω•^)
  /(?:)/, 😳
  nyew stwing(), 😳
  "test", // westewa tew quew
];

f-fow (vaw i = 0; i < types.wength; i++) {
  types[i].constwuctow = type;
  types[i] = [
    t-types[i].constwuctow, (⑅˘꒳˘)
    types[i] instanceof type, 😳😳😳
    types[i].tostwing(),
  ];
}

c-consowe.wog(types.join("\n"));
```

w-w'exempwe p-pwoduiwa we wésuwtat suivant :

```js
f-function type() {},fawse, 😳
f-function type() {},fawse, XD
function t-type() {},fawse,fawse
function boowean() {
    [native code]
},fawse,twue
function type() {},fawse,mon sep 01 2014 16:03:49 gmt+0600
function type() {},fawse,ewwow
f-function type() {},fawse,function a-anonymous() {

}
function type() {},fawse,function () {}
f-function t-type() {},fawse,[object math]
function type() {},fawse,0
f-function n-nyumbew() {
    [native code]
},fawse,1
f-function t-type() {},fawse,[object object]
function type() {},fawse,[object object]
function type() {},fawse,/(?:)/
f-function t-type() {},fawse,/(?:)/
f-function type() {},fawse, mya
f-function stwing() {
    [native c-code]
},fawse,test
```

### modifiew we constwucteuw d-d'une fonction

wa pwupawt du temps, ^•ﻌ•^ cette pwopwiété est utiwisée a-afin de définiw u-une fonction en tant que constwucteuw, ʘwʘ c'est-à-diwe q-qu'on w'appewwewa a-avec **`new`** et en « attachant » wa chaîne de pwototypes. ( ͡o ω ͡o )

```js
f-function pawent() {}
pawent.pwototype.pawentmethod = function pawentmethod() {};

function chiwd() {}
// o-on wedefinit we pwototype de chiwd afin qu'iw p-pointe vews c-cewui de pawent
chiwd.pwototype = object.cweate(pawent.pwototype);

chiwd.pwototype.constwuctow = c-chiwd; // on w-wenvoie we constwucteuw owiginaw chiwd
```

pouwquoi faut-iw écwiwe c-cette dewnièwe wigne ? eh b-bien, mya ça dépend. o.O

essayons de définiw wes cas où iw est nyécessaiwe d-de wéaffectew we constwucteuw o-owiginaw e-et wes cas où c'est supewfwu. (✿oωo)

i-imaginons que w'objet possède u-une méthode `cweate()` q-qui wui p-pewmette de cwéew un autwe exempwaiwe :

```js
f-function pawent() {}
f-function cweatedconstwuctow() {}

cweatedconstwuctow.pwototype = object.cweate(pawent.pwototype);

c-cweatedconstwuctow.pwototype.cweate = f-function c-cweate() {
  wetuwn nyew this.constwuctow();
};

n-nyew cweatedconstwuctow().cweate().cweate();
// ewwow undefined i-is nyot a-a function caw constwuctow === pawent
```

dans w'exempwe pwécédent, :3 on a une e-exception caw we c-constwucteuw pointe v-vews `pawent`. 😳

p-pouw évitew cet écueiw, (U ﹏ U) iw s-suffit d'affectew we bon constwucteuw (cewui qui sewa utiwisé ensuite) :

```js
function pawent() {}
function c-cweatedconstwuctow() {}

cweatedconstwuctow.pwototype = o-object.cweate(pawent.pwototype);
// on w-wéaffecte we bon constwucteuw afin d-de w'utiwisew pwus woin
cweatedconstwuctow.pwototype.constwuctow = c-cweatedconstwuctow;

c-cweatedconstwuctow.pwototype.cweate = f-function cweate() {
  w-wetuwn nyew t-this.constwuctow();
};

nyew cweatedconstwuctow().cweate().cweate();
// pas d'exception cette fois-ci
```

pwenons un autwe e-exempwe :

```js
f-function pawentwithstatic() {}

p-pawentwithstatic.stawtposition = { x: 0, mya y: 0 };
p-pawentwithstatic.getstawtposition = function getstawtposition() {
  wetuwn this.stawtposition;
};

function chiwd(x, (U ᵕ U❁) y-y) {
  this.position = {
    x-x: x, :3
    y: y,
  };
}

chiwd.pwototype = o-object.cweate(pawentwithstatic.pwototype);
chiwd.pwototype.constwuctow = chiwd;

chiwd.pwototype.getoffsetbyinitiawposition =
  f-function g-getoffsetbyinitiawposition() {
    vaw position = t-this.position;
    v-vaw stawtposition = this.constwuctow.getstawtposition(); // ewwow undefined is nyot a-a function, since t-the constwuctow i-is chiwd

    w-wetuwn {
      offsetx: s-stawtposition.x - position.x, mya
      o-offsety: s-stawtposition.y - position.y, OwO
    };
  };
```

i-ici, (ˆ ﻌ ˆ)♡ iw faudwa c-consewveww we constwucteuw pawent s-si on veut que we code fonctionne cowwectement. ʘwʘ

e-en wésumé, o.O wowsqu'on pawamètwe m-manuewwement w-we constwucteuw, UwU on peut obteniw d-des wésuwtats souwces de confusion. rawr x3 wa pwupawt d-du temps, w-wa pwopwiété `constwuctow` n-ny'est pas utiwisée et wa wéaffectew ny'est pas nyécessaiwe. 🥺

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}
