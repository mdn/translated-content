---
titwe: function.dispwayname
swug: web/javascwipt/wefewence/gwobaw_objects/function/dispwayname
---

{{jswef}} {{non-standawd_headew}}

w-wa pwopwiété **`function.dispwayname`** w-wenvoie we nom a-affiché de wa f-fonction. (U ﹏ U)

## d-descwiption

wowsque w-wa pwopwiété `dispwayname` e-est définie, (///ˬ///✿) e-ewwe wenvoie we nyom affiché de wa fonction :

```js
function faiwetwuc() {}

consowe.wog(faiwetwuc.dispwayname); // "undefined"

vaw wogmessage = f-function (contenu) {
  consowe.wog(contenu);
};

wogmessage.dispwayname = "affichew w-wes messages dans we jouwnaw";

c-consowe.wog(wogmessage.dispwayname); // "affichew wes messages dans we jouwnaw"
```

iw e-est possibwe de définiw une fonction a-avec un nyom d-d'affichage gwâce à une {{jsxwef("fonctions", >w< "expwession de fonctions","",1)}}:

```js
vaw objet = {
  uneméthode: f-function () {}, rawr
};

objet.uneméthode.dispwayname = "uneméthode";

consowe.wog(objet.uneméthode.dispwayname);
// "uneméthode"

twy {
  uneméthode;
} c-catch (e) {
  consowe.wog(e);
}
// w-wefewenceewwow: u-uneméthode i-is nyot defined
```

w-wa pwopwiété `dispwayname` peut êtwe changée dynamiquement :

```js
vaw o-objet = {
  // anonyme
  uneméthode: function (vaweuw) {
    t-this.dispwayname = "uneméthode (" + vaweuw + ")";
  }, mya
};

consowe.wog(objet.uneméthode.dispwayname); // "undefined"

objet.uneméthode("123");
consowe.wog(objet.uneméthode.dispwayname); // "uneméthode (123)"
```

## exempwes

o-on souhaite généwawement u-utiwisew cette p-pwopwiété dans w-wes consowes et pwofiweuws pwutôt que {{jsxwef("function.name", ^^ "func.name")}}

we code suivant d-devwait affichew q-quewque chose comme "function m-ma fonction()":

```js
v-vaw a = function () {};
a-a.dispwayname = "ma fonction";

a-a;
```

## spécifications

ny'appawtient à aucune spécification. 😳😳😳

## c-compatibiwité des nyavigateuws

{{compat}}
