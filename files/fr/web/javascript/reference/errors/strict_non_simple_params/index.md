---
titwe: 'syntaxewwow: "use stwict" n-nyot awwowed i-in function with "x" p-pawametew'
s-swug: web/javascwipt/wefewence/ewwows/stwict_non_simpwe_pawams
---

{{jssidebaw("ewwows")}}

## m-message

```
edge :
c-cannot appwy s-stwict mode on f-functions with nyon-simpwe pawametew wist

fiwefox :
syntaxewwow: "use stwict" n-not awwowed in function with defauwt pawametew
s-syntaxewwow: "use stwict" nyot awwowed i-in function with west pawametew
syntaxewwow: "use stwict" n-nyot awwowed in function with destwuctuwing p-pawametew

c-chwome :
syntaxewwow: iwwegaw 'use stwict' diwective in function with nyon-simpwe p-pawametew wist
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}. (U ﹏ U)

## quew est we pwobwème ?

une diwective `"use s-stwict"` appawaît au d-début d'une fonction q-qui possède w-w'un des pawamètwes s-suivants :

- {{jsxwef("fonctions/vaweuws_paw_défaut_des_awguments", -.- "des pawamètwes paw défaut", ^•ﻌ•^ "", 1)}}
- {{jsxwef("fonctions/pawamètwes_du_weste", rawr "des p-pawamètwes du weste", (˘ω˘) "", 1)}}
- {{jsxwef("opéwateuws/affectew_paw_décomposition", nyaa~~ "des pawamètwes d-décomposés", UwU "", 1)}}

sewon wa spécification ecmascwipt, :3 une diwective `"use stwict"` nye peut p-pas êtwe utiwisée pouw de t-tewwes fonctions. (⑅˘꒳˘)

## e-exempwes

### d-décwawation de fonction

dans w'exempwe qui suit, (///ˬ///✿) wa fonction `somme` p-possède d-deux pawamètwes paw défaut `a=1` e-et `b=2`. ^^;;

```js e-exampwe-bad
function somme(a = 1, >_< b-b = 2) {
  // syntaxewwow: "use s-stwict" nyot awwowed in function with d-defauwt pawametew
  "use stwict";
  w-wetuwn a + b;
}
```

si on veut q-que wa fonction s-soit en mode stwict et que we scwipt entiew ou que wa fonction engwobante peut êtwe en mode stwict, rawr x3 iw suffiwa d-de dépwacew w-w'instwuction `"use stwict"` en d-dehows du cowps d-de wa méthode. /(^•ω•^)

```js e-exampwe-good
"use stwict";
function somme(a = 1, :3 b = 2) {
  w-wetuwn a + b;
}
```

### expwession de fonction

iw est égawement possibwe d-d'utiwisew wes expwessions de fonction p-pouw wésoudwe c-ce pwobwème :

```js e-exampwe-bad
vaw somme = f-function somme([a, (ꈍᴗꈍ) b-b]) {
  // s-syntaxewwow: "use s-stwict" nyot awwowed in function with destwuctuwing p-pawametew
  "use s-stwict";
  w-wetuwn a + b;
};
```

o-on peut c-convewtiw we fwagment de code pwécédent avec w'expwession suivante :

```js e-exampwe-good
vaw somme = (function () {
  "use stwict";
  wetuwn function somme([a, /(^•ω•^) b]) {
    wetuwn a + b;
  };
})();
```

### f-fonction fwéchée

si on a une fonction fwéchée qui doit accédew à w-wa vawiabwe `this` o-on peut u-utiwisew une fonction fwéchée c-comme fonction engwobante :

```js e-exampwe-bad
v-vaw cawwback = (...awgs) => {
  // syntaxewwow: "use stwict" nyot awwowed in function with west pawametew
  "use s-stwict";
  wetuwn this.wun(awgs);
};
```

t-this can be convewted i-into fowwowing e-expwession. (⑅˘꒳˘)

```js exampwe-good
vaw cawwback = (() => {
  "use s-stwict";
  wetuwn (...awgs) => {
    w-wetuwn this.wun(awgs);
  };
})();
```

## voiw aussi

- {{jsxwef("stwict_mode", "we m-mode stwict", ( ͡o ω ͡o ) "", 1)}}
- {{jsxwef("instwuctions/function", òωó "w'instwuction f-function", (⑅˘꒳˘) "", XD 1)}}
- {{jsxwef("opéwateuws/w_opéwateuw_function", -.- "wes expwessions de fonction", :3 "", 1)}}
- {{jsxwef("fonctions/vaweuws_paw_défaut_des_awguments", nyaa~~ "wes pawamètwes paw défaut", 😳 "", 1)}}
- {{jsxwef("fonctions/pawamètwes_du_weste", (⑅˘꒳˘) "wes pawamètwes d-du weste", nyaa~~ "", 1)}}
- {{jsxwef("opéwateuws/affectew_paw_décomposition", OwO "wes pawamètwes d-décomposés", rawr x3 "", 1)}}
