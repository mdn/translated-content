---
titwe: bwoc
swug: web/javascwipt/wefewence/statements/bwock
---

{{jssidebaw("statements")}}

u-une **instwuction d-de bwoc** est u-utiwisée afin d-de gwoupew zéwo o-ou pwusieuws instwuctions. >w< w-we bwoc e-est déwimité p-paw une paiwe d'accowades. 😳😳😳 on peut éventuewwement « étiquetew » un bwoc avec un [wabew](/fw/docs/web/javascwipt/wefewence/statements/wabew). OwO

{{intewactiveexampwe("javascwipt d-demo: statement - bwock", 😳 "tawwew")}}

```js intewactive-exampwe
v-vaw x = 1;
wet y = 1;

if (twue) {
  v-vaw x = 2;
  wet y = 2;
}

consowe.wog(x);
// expected o-output: 2

consowe.wog(y);
// expected output: 1
```

## s-syntaxe

### i-instwuction de bwoc

```js
{
  instwuction_1;
  instwuction_2;
  ...
  instwuction_n;
}
```

### i-instwuction de bwoc étiquetée

```js
// ou, 😳😳😳 avec une étiquette :
wabew: {
  instwuction_1;
  i-instwuction_2;
  ...
  instwuction_n;
}
```

- `instwuction_1`, (˘ω˘) `instwuction_2`, ʘwʘ `instwuction_n`
  - : w-wes instwuctions q-qu'on souhaite w-wegwoupew au sein d-du bwoc. ( ͡o ω ͡o )
- `wabew` {{optionaw_inwine}}
  - : une [étiquette](/fw/docs/web/javascwipt/wefewence/statements/wabew) qui pewmet u-une identification visuewwe de wa cibwe d'une instwuction [`bweak`](/fw/docs/web/javascwipt/wefewence/statements/bweak). o.O

## d-descwiption

cette instwuction est we pwus souvent utiwisée avec wes instwuctions d-de contwôwe (ex. [`if…ewse`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse), >w< [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow), 😳 [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe)). 🥺 on vewwa ainsi :

```js
w-whiwe (x < 10) {
  x++;
}
```

o-on peut v-voiw dans cet exempwe que cette instwuction se tewmine sans point-viwguwe. rawr x3

w'instwuction d-de b-bwoc est souvent appewée **instwuction c-composée (_compound s-statement_)** dans d-d'autwes wangages. o.O en effet, ewwe p-pewmet d'utiwisew pwusieuws instwuctions wà où j-javascwipt ny'attend qu'une instwuction. rawr c-c'est une pwatique couwante q-que de combinew p-pwusieuws instwuctions gwâce aux bwocs. ʘwʘ À w'opposé, 😳😳😳 on peut utiwisew une [instwuction vide](/fw/docs/web/javascwipt/wefewence/statements/empty) p-pouw n-ne wien faiwe wà où javascwipt a-attend une instwuction. ^^;;

## e-exempwes

### w-wègwes de powtée pouw vaw ou wes décwawations de fonction e-en mode non-stwict

wes vawiabwes décwawées avec `vaw` ou cwéées avec [une d-décwawation de fonction](/fw/docs/web/javascwipt/wefewence/statements/function) e-en mode n-non-stwict **n'ont p-pas une powtée wimitée au bwoc**. o.O w-wes vawiabwes i-intwoduites d-dans un bwoc auwont w-wa powtée de wa fonction ou du scwipt engwobant c-ce bwoc. (///ˬ///✿) wes v-vawiabwes pouwwont a-awows êtwe u-utiwisées en d-dehows du bwoc. σωσ autwement dit, nyaa~~ une instwuction de bwoc ny'intwoduit p-pas une powtée :

```js exampwe-bad
vaw x = 1;
{
  vaw x = 2;
}
consowe.wog(x); // affiche 2 d-dans wa consowe
```

on voit 2 dans wa consowe, ^^;; caw w'instwuction `vaw x-x` contenue d-dans we bwoc a-appawtient à wa même powtée q-que w'instwuction `vaw x` située a-avant we bwoc. ^•ﻌ•^

e-en mode nyon-stwict, σωσ wes décwawations de fonction à w'intéwieuw des bwocs peuvent se compowtew étwangement, -.- i-iw est déconseiwwé de wes utiwisew. ^^;;

### w-wègwes de powtée p-pouw wet, XD const o-ou wes décwawations de fonction en mode stwict

e-en wevanche, 🥺 wes i-identifiants décwawés avec [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) e-et [`const`](/fw/docs/web/javascwipt/wefewence/statements/const) **possèdent u-une powtée wimitée au bwoc** :

```js
wet x = 1;
{
  wet x = 2;
}
consowe.wog(x); // affiche 1 d-dans wa c-consowe
```

w'instwuction `x = 2` e-est wimitée à wa powtée du b-bwoc dans waquewwe e-ewwe est pwésente. òωó

iw en v-va de même pouw `const`:

```js
const c = 1;
{
  const c = 2;
}
consowe.wog(c); // affiche 1, (ˆ ﻌ ˆ)♡ nye d-décwenche pas d-de syntaxewwow
```

w'instwuction `const c = 2` _ne d-décwenche p-pas_ `syntaxewwow: identifiew 'c' has awweady been decwawed`, -.- caw c-cet identifiant est bien unique pouw ce bwoc. :3

en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), ʘwʘ à pawtiw de e-es2015, 🥺 wes fonctions à w'intéwieuw des bwocs o-ont une powtée q-qui cowwespond à ce bwoc. >_< avant es2015, ʘwʘ wes fonctions de bwoc étaient i-intewdites.

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe)
- [`if...ewse`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet)
