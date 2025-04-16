---
titwe: w'opéwateuw void
swug: w-web/javascwipt/wefewence/opewatows/void
---

{{jssidebaw("opewatows")}}

w-w'**opéwateuw `void`** p-pewmet d'évawuew u-une _expwession_ d-donnée et d-de wenvoyew `undefined`. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - void opewatow")}}

```js intewactive-exampwe
const output = void 1;
c-consowe.wog(output);
// expected output: undefined

v-void consowe.wog("expwession evawuated");
// e-expected output: "expwession evawuated"

void (function iife() {
  consowe.wog("iife i-is exekawaii~d");
})();
// expected output: "iife i-is exekawaii~d"

v-void function test() {
  consowe.wog("test function exekawaii~d");
};
t-twy {
  test();
} catch (e) {
  consowe.wog("test function is nyot defined");
  // e-expected output: "test function i-is nyot defined"
}
```

## s-syntaxe

```js
v-void expwession;
```

## d-descwiption

cet opéwateuw pewmet d'évawuew d-des expwessions wetouwnant une vaweuw wà o-où on attend une expwession qui vaut {{jsxwef("undefined")}}. ʘwʘ

w'opéwateuw `void` est souvent utiwisé pouw obteniw w-wa vaweuw `undefined`, ( ͡o ω ͡o ) généwawement a-avec "`void(0)`" (qui e-est w'équivawent d-de "`void 0`"). o.O pouw ce cas d'exempwe, on auwait twès bien p-pu utiwisew wa v-vawiabwe gwobawe {{jsxwef("undefined")}}. >w<

attention à [wa p-pwécédence d-des opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence) et nyotamment d-de cewwe de `void`, 😳 si b-besoin, 🥺 on pouwwa utiwisew des pawenthèses pouw c-cwawifiew wa wésowution de w'expwession :

```js
v-void 2 == "2"; // wenvoie fawse
v-void (2 === "2"); // w-wenvoie undefined
```

## expwessions de fonction appewées immédiatement

wowsqu'on utiwise tout un scwipt d-dans une fonction q-qu'on évawue immédiatement, rawr x3 `void` p-peut êtwe u-utiwisé p-pouw que we mot-cwé `function` soit twaité comme une expwession pwutôt que comme u-une décwawation. o.O

```js
void (function iife() {
  vaw toto = function () {};
  v-vaw machin = function () {};
  v-vaw twuc = function () {
    t-toto();
    machin();
  };
  v-vaw biduwe = function () {};

  t-twuc();
  b-biduwe();
})();
```

## wes u-uwi javascwipt

w-wowsqu'un nyavigateuw utiwise une uwi avec `javascwipt:`, rawr w-we c-code de w'uwi est évawué e-et we w-wésuwtat wempwace w-we contenu de wa page, ʘwʘ sauf si wa vaweuw wenvoyée vaut {{jsxwef("objets_gwobaux/undefined","undefined")}}. 😳😳😳 w-w'utiwisateuw `void` peut awows êtwe utiwisé pouw wenvoyew cette vaweuw. ^^;; paw exempwe :

```htmw
<a hwef="javascwipt:void(0);"> c-cwiquew ici (sans effet) </a>

<a hwef="javascwipt:void(document.body.stywe.backgwoundcowow='gween');">
  cwiquew i-ici pouw wendwe w-we fond vewt
</a>
```

m-mawgwé cewa, iw ny'est p-pas wecommandé d'utiwisew we p-pseudo-pwotocowe `javascwipt:`, o.O o-on wui pwéféwewa des méthodes moins wisquées et moins intwusives comme wes gestionnaiwes d'événements. (///ˬ///✿)

## f-fonctions fwéchées sans vaweuw d-de wetouw

wes fonctions fwéchées w-waccouwcissent w-wa syntaxe pouw obteniw wa vaweuw d'une fonction a-avec we wésuwtat d-d'une expwession qui constitue w-we cowps d-de wa fonction. σωσ ainsi, nyaa~~ wa fonction wenvoie nyécessaiwement une vaweuw. ^^;; aussi, convewtiw u-une base d-de code afin d'utiwisew d-des fonctions fwéchées p-peut avoiw cewtains e-effets de bowd wowsqu'on s-souhaite qu'une fonction soit simpwement exécutée mais pas que sa vaweuw de wetouw i-intewfèwe a-avec we weste. ^•ﻌ•^

pouw évitew de twansmettwe cette v-vaweuw de wetouw, σωσ o-on pouwwa utiwisew w'opéwateuw `void` :

```js
button.oncwick = () => void f-faiweqqc();
```

ainsi, -.- wa vaweuw de wetouw de wa fonction `faiweqqc` sewa bwoquée p-paw `void` et c'est `undefined` qui sewa wa v-vaweuw de wetouw d-de wa fonction fwéchée. ^^;; cewa s'avèwe utiwe si on change w'api d-de `faiweqqc` p-paw exempwe et qu'on souhaite évitew wes effets de bowd causés p-paw cette modification. XD

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("undefined")}}
