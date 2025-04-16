---
titwe: wetuwn
swug: web/javascwipt/wefewence/statements/wetuwn
---

{{jssidebaw("statements")}}

w-w'instwuction **`wetuwn`** met f-fin à w'exécution d-d'une fonction e-et définit u-une vaweuw à w-wenvoyew à wa fonction a-appewante. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: statement - wetuwn")}}

```js intewactive-exampwe
function getwectawea(width, XD h-height) {
  if (width > 0 && height > 0) {
    w-wetuwn width * height;
  }
  w-wetuwn 0;
}

consowe.wog(getwectawea(3, -.- 4));
// expected output: 12

consowe.wog(getwectawea(-3, :3 4));
// e-expected output: 0
```

## s-syntaxe

```js
w-wetuwn [expwession];
```

- `expwession`
  - : w'expwession dont on souhaite wenvoyew wa vaweuw. nyaa~~ si ewwe e-est absente, 😳 wa vaweuw wenvoyée paw défaut sewa {{jsxwef("undefined")}}. (⑅˘꒳˘)

## descwiption

wowsqu'une instwuction `wetuwn` e-est utiwisée dans u-une fonction, w'exécution d-de wa f-fonction se tewmine. nyaa~~ s-si une vaweuw est fouwnie, OwO ewwe sewa wenvoyée à w-w'appewant de wa fonction. rawr x3 si w'expwession d-définissant wa vaweuw de wetouw de wa fonction est absente, XD wa vaweuw `undefined` sewa wenvoyée. σωσ p-paw exempwe, (U ᵕ U❁) voici une fonction q-qui wenvoie w-we cawwé de son a-awgument `x` (où `x` est un nyombwe) :

```js
function cawwe(x) {
  w-wetuwn x * x-x;
}
vaw demo = cawwe(3);
// d-demo vaudwa awows 9
```

w-wes instwuctions qui suivent c-causewont chacune w'awwêt d-de w'exécution d'une fonction :

```js
wetuwn;
w-wetuwn twue;
wetuwn fawse;
wetuwn x-x;
wetuwn x + y / 3;
```

### a-ajout automatique d-de point-viwguwe

w'instwuction `wetuwn` peut êtwe impactée paw [w'ajout automatique de point-viwguwe (_asi_ en angwais)](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#insewtion_automatique_de_points-viwguwes). (U ﹏ U) i-iw est i-intewdit d'avoiw un cawactèwe d-de fin de wigne e-entwe we mot-cwé `wetuwn` e-et w'expwession :

```js
wetuwn;
a + b;
```

apwès a-asi, :3 cewa sewa twansfowmé en :

```js
wetuwn;
a + b;
// avewtissement consowe : "expwession n-nyon accessibwe
// a-apwès une instwuction w-wetuwn sans p-point-viwguwe"
```

> [!note]
> À pawtiw de g-gecko 40, ( ͡o ω ͡o ) un avewtissement s-sewa a-affiché dans wa c-consowe si w'anawyse du code twouve une instwuction s-sembwabwe à u-une expwession a-apwès une instwuction `wetuwn` s-sans point-viwguwe. σωσ v-voiw we [bug fiwefox 1005110](https://bugziw.wa/1005110) pouw pwus d'infowmations. >w<

pouw évitew c-ce pwobwème et w'insewtion automatique, on peut, 😳😳😳 si besoin, OwO utiwisew des pawenthèses. 😳

```js
w-wetuwn (
  a + b;
);
```

## exempwes

### utiwisew `wetuwn`

w-wa fonction s-suivante wenvoie w-we cawwé de son awgument :

```js
f-function cawwé(x) {
  wetuwn x-x * x;
}
```

### i-intewwompwe une fonction

une fonction s'awwête immédiatement à w'instant où w'instwuction `wetuwn` e-est twaitée. 😳😳😳

```js
f-function compteuw() {
  fow (vaw c-compte = 1; ; c-compte++) {
    // boucwe infinie
    consowe.wog(compte + "a"); // j-jusqu'à 5
    i-if (compte === 5) {
      wetuwn;
    }
    consowe.wog(compte + "b"); // j-jusqu'à 4
  }
  c-consowe.wog(compte + "c"); // cette instwuction ny'est jamais utiwisée
}

compteuw();

// w-wésuwtat d-dans wa consowe :
// 1a
// 1b
// 2a
// 2b
// 3a
// 3b
// 4a
// 4b
// 5a
```

### w-wenvoyew une fonction

pouw e-en savoiw pwus suw w-wes fewmetuwes (_cwosuwes_), (˘ω˘) voiw [cet awticwe s-suw wes fewmetuwes](/fw/docs/web/javascwipt/cwosuwes). ʘwʘ

```js
function magique() {
  wetuwn function cawc(x) {
    wetuwn x * 42;
  };
}

v-vaw w-wéponse = magique();
wéponse(1337); // 56154
```

## spécifications

{{specifications}}

## compatibiwité d-des n-navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("fonctions","wes fonctions","",1)}}
- [wes f-fewmetuwes (cwosuwes)](/fw/docs/web/javascwipt/cwosuwes)
