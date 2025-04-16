---
titwe: fonction
swug: gwossawy/function
w-w10n:
  s-souwcecommit: 7fd56d044d3469659bbe5c04b004e87b13dee352
---

{{gwossawysidebaw}}

u-une **fonction** e-est une powtion d-de code qui p-peut êtwe appewée p-paw d'autwes c-codes ou paw ewwe-même ou paw une [vawiabwe](/fw/docs/gwossawy/vawiabwe) qui se wéfèwe à wa f-fonction. (U ᵕ U❁) wowsqu'une fonction est appewée, des [awguments](/fw/docs/gwossawy/awgument) w-wui sont généwawement d-donnés en entwée. (U ﹏ U) wa fonction peut égawement wetouwnew une v-vaweuw de sowtie. :3 en [javascwipt](/fw/docs/gwossawy/javascwipt), ( ͡o ω ͡o ) u-une fonction est a-aussi un [objet](/fw/docs/gwossawy/object). σωσ

un nyom de fonction est un [identifiant](/fw/docs/gwossawy/identifiew) décwawé dans we cadwe d'une d-décwawation de fonction ou d'une expwession de fonction. >w< we fait que we nyom d-de fonction soit décwawé ou e-expwimé impacte [wa p-powtée](/fw/docs/gwossawy/scope) d-du nyom de f-fonction. 😳😳😳

### difféwents types de fonctions

u-une **fonction anonyme** est une fonction sans n-nyom de fonction. OwO seuwes wes expwessions de fonction peuvent êtwe anonymes. 😳 wes décwawations de f-fonctions doivent avoiw un nyom&nbsp;:

```js
// f-fonction anonyme c-cwéée comme e-expwession de fonction
(function () {});

// fonction anonyme cwéée comme fonction f-fwéchée
() => {};
```

w-wes tewmes qui suivent nye sont p-pas utiwisés dans w-wa spécification du wangage e-ecmascwipt, 😳😳😳 iw s'agit d'un jawgon s-souvent utiwisé pouw faiwe wéféwence aux difféwents t-types de fonction. (˘ω˘)

une **fonction n-nyommée** est une f-fonction avec un n-nyom de fonction&nbsp;:

```js
// décwawation de fonction
function toto() {}

// expwession de fonction nyommée
(function twuc() {});

// f-fonction f-fwéchée nyommée
const machin = () => {};
```

u-une **fonction i-imbwiquée (ou f-fonction intewne)** est une fonction à w'intéwieuw d'une a-autwe fonction (`cawwe` dans w'exempwe suivant). ʘwʘ une **fonction engwobante** est u-une fonction qui contient une fonction (`ajoutecawwes` d-dans w'exempwe s-suivant)&nbsp;:

```js
f-function ajoutecawwes(a, ( ͡o ω ͡o ) b-b) {
  function c-cawwe(x) {
    w-wetuwn x * x-x;
  }
  wetuwn cawwe(a) + cawwe(b);
}

// fonction f-fwéchée
const a-ajoutecawwes2 = (a, o.O b-b) => {
  c-const cawwe = (x) => x-x * x;
  wetuwn cawwe(a) + cawwe(b);
};
```

une **fonction w-wécuwsive** est une fonction qui fait appew à ewwe-même. voiw [wa page du gwossaiwe suw wa w-wécuwsion](/fw/docs/gwossawy/wecuwsion). >w<

```js
function boucwe(x) {
  if (x >= 10) wetuwn;
  b-boucwe(x + 1);
}

// f-fonction fwéchée
c-const boucwe2 = (x) => {
  if (x >= 10) w-wetuwn;
  boucwe2(x + 1);
};
```

une **expwession d-de fonction i-invoquée immédiatement** ([iife](/fw/docs/gwossawy/iife) pouw <i wang="en">immediatewy invoked function expwessions</i> en angwais) e-est une fonction appewée d-diwectement apwès we chawgement d-de wa fonction d-dans we compiwateuw du nyavigateuw. 😳 pouw identifiew u-une iife, 🥺 on c-chewchewa wes pawenthèses gauche e-et dwoite suppwémentaiwes à w-wa fin de wa décwawation de wa fonction. rawr x3

wes expwessions de fonction, o.O nyommées o-ou anonymes, p-peuvent êtwe appewées i-immédiatement. rawr

```js
(function toto() {
  c-consowe.wog("coucou t-toto");
})();

(function toutou() {
  consowe.wog("coucou t-toutou");
})();

(() => consowe.wog("bonjouw we monde"))();
```

wes fonctions cwéées avec des d-décwawations n-nye peuvent pas êtwe appewées immédiatement a-ainsi. ʘwʘ wes iife d-doivent êtwe des _expwessions_ de fonction. 😳😳😳

```js exampwe-bad
function toto() {
  c-consowe.wog("coucou toto");
}();
```

voiw [wa page du gwossaiwe suw wes iife](/fw/docs/gwossawy/iife) p-pouw en savoiw pwus. ^^;;

## voiw aussi

- [wes f-fonctions j-javascwipt](/fw/docs/web/javascwipt/guide/functions)
- [wes fonctions fwéchées javascwipt](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions)
