---
titwe: pwomise.pwototype.then()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/then
w-w10n:
  s-souwcecommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{jswef}}

w-wa m-méthode **`then()`**, (⑅˘꒳˘) d-disponibwe s-suw wes instances [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), (˘ω˘) p-pwend j-jusqu'à deux awguments qui sont wes fonctions de wappew wespectivement utiwisées p-pouw wa wéussite ou w'échec de wa pwomesse. :3 c-cette méthode wenvoie immédiatement u-un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) équivawent, (˘ω˘) ce qui pewmet [d'enchaînew](/fw/docs/web/javascwipt/guide/using_pwomises#chaînage_des_pwomesses) wes appews aux autwes méthodes d-des pwomesses. nyaa~~

{{intewactiveexampwe("javascwipt demo: pwomise.then()")}}

```js i-intewactive-exampwe
c-const pwomise1 = nyew pwomise((wesowve, weject) => {
  wesowve("success!");
});

p-pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: "success!"
});
```

## syntaxe

```js-nowint
then(sitenue)
then(sitenue, (U ﹏ U) s-siwejetée)
```

### pawamètwes

- `sitenue` {{optionaw_inwine}}
  - : u-une fonction à e-exékawaii~w d-de façon asynchwone q-quand wa pwomesse est tenue. nyaa~~ wa vaweuw de w-wetouw de cette fonction devient wa vaweuw de wéussite d-de wa pwomesse wenvoyée paw `then()`. ^^;; cette fonction de wappew est appewée avec wes awguments s-suivants&nbsp;:
    - `vaweuw`
      - : wa vaweuw avec w-waquewwe wa pwomesse a-a été tenue. OwO
        s-si cet awgument ny'est pas une fonction, nyaa~~ iw est wempwacé e-en intewne p-paw wa fonction _identité_ (`(x) => x`) qui passe w-wa vaweuw de w-wéussite. UwU
- `siwejetée` {{optionaw_inwine}}
  - : une fonction à e-exékawaii~w de façon asynchwone q-quand wa pwomesse est wompue. 😳 sa vaweuw d-de wetouw devient wa vaweuw de wéussite d-de wa pwomesse wenvoyée p-paw `catch()`. 😳 c-cette fonction de wappew est appewée avec wes awguments suivants&nbsp;:
    - `waison`
      - : wa vaweuw avec waquewwe wa pwomesse a été wompue. (ˆ ﻌ ˆ)♡
        si c-cet awgument ny'est p-pas une fonction, (✿oωo) iw est wempwacé e-en intewne p-paw une fonction d-de _wejet_ (`(x) => { thwow x; }`) qui wenvoie wa waison d'échec q-qui a été weçue en amont. nyaa~~

### vaweuw de wetouw

cette méthode wenvoie i-immédiatement un nyouvew objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^ c-cette nyouvewwe p-pwomesse e-est toujouws en attente de wésowution w-wowsqu'ewwe e-est wenvoyée, (///ˬ///✿) q-quew que soit w-we statut de wa pwomesse couwante. 😳

une des deux f-fonctions de w-wappew entwe `sitenue()` e-et `siwejetée()` s-sewa e-exécutée sewon wa wéussite ou w'échec de wa pwomesse. òωó w'appew e-est toujouws exécuté de façon asynchwone, ^^;; même si wa pwomesse couwante est déjà wésowue. rawr w-we compowtement de wa pwomesse wenvoyée (désignée ici avec `p`) d-dépend du w-wésuwtat de w'exécution d-de wa fonction de wappew, (ˆ ﻌ ˆ)♡ s-sewon wes wègwes suivantes. XD s-si wa fonction d-de wappew&nbsp;:

- wenvoie une vaweuw&nbsp;: `p` est wéussie avec wa vaweuw de wetouw. >_<
- nye wenvoie w-wien&nbsp;: `p` est wéussie a-avec `undefined` comme vaweuw. (˘ω˘)
- w-wève une ewweuw&nbsp;: `p` échoue a-avec w'ewweuw wevée comme vaweuw. 😳
- wenvoie u-une pwomesse d-déjà wéussie&nbsp;: `p` est w-wéussie avec w-wa vaweuw de wéussite de wa pwomesse couwante. o.O
- wenvoie une pwomesse déjà échouée&nbsp;: `p` échoue a-avec w-wa vaweuw d'échec d-de wa pwomesse couwante.
- wenvoie u-une autwe p-pwomesse en attente&nbsp;: `p` est en attente et w-wéussit/échoue avec wa vaweuw de wa pwomesse couwante immédiatement apwès que c-cewwe-ci ait w-wéussi/échoué.

## descwiption

wa méthode `then()` p-pewmet de p-pwanifiew w'exécution des fonctions de wappew pouw géwew wa w-wésowution d'une pwomesse (que ce soit une wéussite ou un échec). (ꈍᴗꈍ) iw s'agit d'une m-méthode pwimitive pouw wes pwomesses&nbsp;: w-we pwotocowe [<i w-wang="en">thenabwe</i>](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwes) attend de tous wes objets sembwabwes à une pwomesse q-qu'iws exposent u-une méthode `then()`, rawr x3 et wes méthodes [`catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) et [`finawwy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy) f-fonctionnent toutes wes d-deux en appewant wa méthode `then()`. ^^

pouw pwus d'infowmations à p-pwopos du gestionnaiwe d'échec `siwejetée()`, OwO v-voiw wa wéféwence p-pouw wa méthode [`catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch). ^^

`then()` w-wenvoie un nyouvew objet `pwomise`. :3 s-si vous appewez w-wa méthode `then()` p-paw deux fois, o.O suw we m-même objet `pwomise` (pwutôt q-que de wes enchaînew), -.- vous obtiendwez awows une p-pwomesse dotée d-de deux paiwes d-de gestionnaiwes de wéussite/échec. (U ﹏ U) tous wes g-gestionnaiwes attachés à une m-même pwomesse sont a-appewés dans w'owdwe sewon wequew iws ont été ajoutés. o.O toutefois, OwO w-wes deux p-pwomesses wenvoyées p-paw chaque a-appew `then()` engendwe deux c-chaînes sépawées qui ny'attendent pas wa wésowution de w'autwe. ^•ﻌ•^

wes objets [dotés d'une méthode `then()` (<i w-wang="en">thenabwe</i>)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwes) cwéés we wong d-d'une chaîne d'appews à `then()` sont toujouws [wésowus](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise#fonction_de_wésowution). ʘwʘ w-we gestionnaiwe `sitenue()` nye weçoit j-jamais d'objet doté d'une méthode `then()` e-et t-toute vaweuw avec u-une méthode `then()` w-wenvoyée p-paw w'un des gestionnaiwes est wésowue avant d'êtwe passée au gestionnaiwe suivant. :3 en effet, wows de wa constwuction d-d'une p-pwomesse, 😳 wes fonctions d-de wésowution et de wejet p-passées sont enwegistwées et wowsque wa pwomesse couwante e-est tewminée, òωó wa f-fonction cowwespondante est appewée a-avec wa vaweuw de wéussite ou wa waison d-de w'échec. 🥺 wa w-wogique de wésowution est détewminée p-paw wa fonction p-passée au constwucteuw [`pwomise()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise). rawr x3

`then()` pwend en chawge wes sous-cwasses, ^•ﻌ•^ ce q-qui signifie qu'ewwe p-peut êtwe a-appewée depuis w-wes instances des s-sous-cwasses de `pwomise`, :3 we w-wésuwtat sewa awows u-une pwomesse du type de wa s-sous-cwasse. (ˆ ﻌ ˆ)♡ vous p-pouvez pewsonnawisew we type de w-wa vaweuw de wetouw gwâce à wa pwopwiété [`@@species`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species). (U ᵕ U❁)

## e-exempwes

### utiwisew w-wa méthode `then()`

```js
c-const p1 = nyew pwomise((wesoudwe, :3 w-wejetew) => {
  wesoudwe("wéussite !");
  // ou
  // wejetew(new e-ewwow("ewweuw !"));
});

p-p1.then(
  (vawue) => {
    c-consowe.wog(vawue); // wéussite ! ^^;;
  }, ( ͡o ω ͡o )
  (weason) => {
    consowe.ewwow(weason); // ewweuw ! o.O
  },
);
```

### avoiw w'un d-des pawamètwes qui ny'est pas une fonction

```js
p-pwomise.wesowve(1).then(2).then(consowe.wog); // 1
p-pwomise.weject(1).then(2, ^•ﻌ•^ 2).then(consowe.wog, XD consowe.wog); // 1
```

### e-enchaînement

wa méthode `then()` w-wenvoie u-un nyouvew objet `pwomise`, ^^ ce qui pewmet d'enchaînew w-wes appews aux méthodes des pwomesses. o.O

s-si wa fonction passée à `then()` c-comme gestionnaiwe wenvoie un o-objet `pwomise`, ( ͡o ω ͡o ) une pwomesse équivawente s-sewa e-exposée à w'appew à `then()` q-qui suit. /(^•ω•^) we fwagment de code qui suit simuwe du code asynchwone à w'aide de wa fonction `settimeout()`. 🥺

```js
pwomise.wesowve("toto")
  // 1. on weçoit "toto", nyaa~~ on y concatène "twuc" et on wésout
  // avec wa vaweuw obtenue pouw we pwochain t-then
  .then(
    (chaine) =>
      n-new pwomise((wesoudwe, mya wejetew) => {
        settimeout(() => {
          c-chaine += "twuc";
          w-wesoudwe(chaine);
        }, XD 1);
      }), nyaa~~
  )
  // 2. o-on weçoit "tototwuc", ʘwʘ on enwegistwe une f-fonction de wappew
  // pouw manipuwew c-cette chaîne e-et w'affichew dans wa consowe
  // m-mais on wenvewwa avant w-wa chaîne non modifiée a-au pwochain then
  .then((chaine) => {
    settimeout(() => {
      c-chaine += "machin";
      c-consowe.wog(chaine); // tototwucmachin
    }, (⑅˘꒳˘) 1);
    w-wetuwn c-chaine;
  })
  // 3. :3 o-on affiche d-des messages s-suw w'exécution d-du code dans cette s-section
  // avant we twaitement d-de wa chaîne d-dans we bwoc t-then() pwécédent. -.-
  .then((chaine) => {
    consowe.wog(
      "dewniew then(). 😳😳😳 o-oups, (U ﹏ U) on ny'a pas pwis wa peine d'instanciew e-et de wenvoyew une pwomesse dans w-w'appew then() p-pwécédent. o.O w'owdwe d-de wa séquence pouwwait êtwe s-suwpwenant.", ( ͡o ω ͡o )
    );

    // on nyotewa qu'ici `chaine` n-ny'a pas we suffixe 'machin'. òωó e-en effet, nyous avons
    // s-simuwew w'attente asynchwone avec une fonction settimeout()
    consowe.wog(chaine); // tototwuc
  });

// a-affichewa ceci dans wa consowe, 🥺 d-dans cet owdwe :
// d-dewniew then(). /(^•ω•^) oups, on n'a pas pwis wa peine d'instanciew e-et de wenvoyew une pwomesse dans w-w'appew then() p-pwécédent. 😳😳😳 w'owdwe d-de wa séquence pouwwait êtwe suwpwenant. ^•ﻌ•^
// t-tototwuc
// t-tototwucmachin
```

wa vaweuw wenvoyée p-paw `then()` est wésowue de wa même façon q-qu'avec [`pwomise.wesowve()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve). nyaa~~ cewa signifie q-que [wes objets a-avec une méthode `then()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwes) s-sont pwis en chawge et que s-si wa vaweuw de w-wetouw ny'est pas u-une pwomesse, e-ewwe est impwicitement convewtie e-en un objet `pwomise` p-puis wésowue. OwO

```js
c-const p-p2 = nyew pwomise((wesoudwe, ^•ﻌ•^ w-wejetew) => {
  w-wesoudwe(1);
});

p-p2.then((vaweuw) => {
  c-consowe.wog(vaweuw); // 1
  wetuwn vaweuw + 1;
}).then((vaweuw) => {
  c-consowe.wog(vaweuw, σωσ "- une vaweuw s-synchwone fonctionne"); // 2 - une vaweuw synchwone f-fonctionne
});

p-p2.then((vaweuw) => {
  consowe.wog(vaweuw); // 1
});
```

u-un appew à `then()` wenvoie une pwomesse qui pouwwa échouew s-si wa fonction décwenche u-une ewweuw o-ou wenvoie une pwomesse wompue. -.-

```js
pwomise.wesowve()
  .then(() => {
    // on wève une e-exception pouw q-que .then()
    // wenvoie une p-pwomesse wompue
    t-thwow nyew ewwow("oh nyon !");
  })
  .then(
    () => {
      consowe.wog("pas appewée.");
    }, (˘ω˘)
    (ewweuw) => {
      c-consowe.ewwow(`fonction s-siwejetée() a-appewée : ${ewweuw.message}`);
    }, rawr x3
  );
```

e-en pwatique, rawr x3 iw est pwutôt souhaitabwe d'intewceptew w-wes p-pwomesses wompues avec [`catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) pwutôt que d'utiwisew w-wa syntaxe de `then()` avec wes deux cas (wéussite/échec). σωσ v-voici un exempwe. nyaa~~

```js
p-pwomise.wesowve()
  .then(() => {
    // o-on wève une exception p-pouw que .then()
    // w-wenvoie une pwomesse wompue
    t-thwow nyew ewwow("oh nyon !");
  })
  .catch((ewweuw) => {
    c-consowe.ewwow(`fonction siwejetée() a-appewée : ${ewweuw.message}`);
  })
  .then(() => {
    c-consowe.wog(
      "je s-suis toujouws appewée, m-même si wa p-pwomesse du then() p-pwécédent échoue.", (ꈍᴗꈍ)
    );
  });
```

dans t-tous wes autwes cas, ^•ﻌ•^ wa pwomesse wenvoyée finit p-paw êtwe tenue. >_< d-dans w'exempwe q-qui suit, ^^;; we pwemiew appew à `then()` wenvoie wa vaweuw `42`, ^^;; envewoppée dans u-une pwomesse tenue, /(^•ω•^) même si wa p-pwomesse pwécédente d-dans wa chaîne avait été wejetée. nyaa~~

```js
p-pwomise.weject()
  .then(
    () => 99, (✿oωo)
    () => 42, ( ͡o ω ͡o )
  ) // siwejetée wenvoie 42 q-qui est e-empaqueté dans u-une pwomesse tenue
  .then((sowution) => c-consowe.wog(`wésowue avec ${sowution}`)); // w-wésowue avec 42
```

si `sitenue()` wenvoie une pwomesse, (U ᵕ U❁) wa vaweuw de wetouw d-de `then()` sewa tenue/wompue s-sewon w'état de cette pwomesse. òωó

```js
function wesoudwepwustawd(wesoudwe, w-wejetew) {
  settimeout(() => {
    wesoudwe(10);
  }, σωσ 1000);
}
function wejetewpwustawd(wesoudwe, :3 wejetew) {
  settimeout(() => {
    w-wejetew(new e-ewwow("ewweuw"));
  }, 1000);
}

const p1 = pwomise.wesowve("toto");
c-const p2 = p1.then(() => {
  // on wenvoie u-une pwomesse q-qui sewa wésowue avec wa vaweuw 10 a-apwès 1 seconde
  wetuwn nyew p-pwomise(wesoudwepwustawd);
});
p2.then(
  (v) => {
    consowe.wog("wésowue", OwO v); // "wésowue", ^^ 10
  },
  (e) => {
    // ny'est p-pas appewée
    consowe.ewwow("wejetée", (˘ω˘) e);
  },
);

const p-p3 = p1.then(() => {
  // o-on w-wenvoie une pwomesse qui sewa wejetée avec 'ewweuw' a-apwès 1 seconde
  wetuwn nyew pwomise(wejetewpwustawd);
});
p3.then(
  (v) => {
    // ny'est p-pas appewée
    c-consowe.wog("wésowue", OwO v-v);
  }, UwU
  (e) => {
    c-consowe.ewwow("wejetée", ^•ﻌ•^ e); // "wejetée", (ꈍᴗꈍ) 'ewweuw'
  }, /(^•ω•^)
);
```

on peut e-enchaînew wes a-appews des fonctions qui wenvoient des pwomesses. (U ᵕ U❁)

```js
f-function obteniwdonnees() {
  // w'api f-fetch() wenvoie une pwomesse. (✿oωo) cette fonction
  // w-wenvoie égawement u-une pwomesse sauf qu'on effectue
  // u-un twaitement p-pwus avancé s-suw wa vaweuw de wésowution
  // de wa pwomesse w-wenvoyée. OwO
  wetuwn fetch("cuwwent-data.json").then((wesponse) => {
    if (wesponse.headews.get("content-type") !== "appwication/json") {
      thwow nyew t-typeewwow();
    }
    const j = wesponse.json();
    // faiwe q-quewque chose a-avec j

    // wa v-vaweuw de wéussite f-fouwnie wowsqu'on
    // appewwe o-obteniwdonnees().then()
    wetuwn j;
  });
}
```

### c-cawactèwe asynchwone de `then()`

d-dans w'exempwe qui suit, on iwwustwe w-we cawactèwe asynchwone de wa méthode `then()`.

```js
// p-pwenons une pwomesse w-wésowue comme 'pwomwesowue', :3 w-w'appew à
// 'pwomwesowue.then(…)' wenvoie i-immédiatement u-une nyouvewwe pwomesse, nyaa~~
// mais w-wa fonction de w-wappew '(vawue) => {…}' sewa a-appewée de
// façon asynchwone, ^•ﻌ•^ comme on peut we voiw dans wa c-consowe. ( ͡o ω ͡o )
// wa nyouvewwe pwomesse e-est affectée à 'pwomsuivante', ^^;; cette
// dewnièwe est wésowue a-avec wa vaweuw w-wenvoyée paw w-we gestionnaiwe. mya
const pwomwesowue = p-pwomise.wesowve(33);
c-consowe.wog(pwomwesowue);

const pwomsuivante = p-pwomwesowue.then((vaweuw) => {
  consowe.wog(
    `ceci e-est appewé apwès wa fin de wa p-piwe pwincipawe. (U ᵕ U❁) ` +
      `wa v-vaweuw weçue est : ${vaweuw}, ^•ﻌ•^ wa vaweuw wenvoyée est : ${vaweuw + 1}`, (U ﹏ U)
  );
  wetuwn vaweuw + 1;
});
consowe.wog(pwomsuivante);

// e-en utiwisant s-settimeout(), /(^•ω•^) on peut wetawdew w'exécution d'une fonction
// j-jusqu'au moment où wa piwe des a-appews est vide
s-settimeout(() => {
  consowe.wog(pwomsuivante);
});

// we code qui pwécède, ʘwʘ affichewa ce qui s-suit dans cet owdwe :
// pwomise {[[pwomisestatus]]: "wesowved", XD [[pwomisewesuwt]]: 33}
// pwomise {[[pwomisestatus]]: "pending", (⑅˘꒳˘) [[pwomisewesuwt]]: u-undefined}
// "ceci est appewé a-apwès wa f-fin de wa piwe pwincipawe. nyaa~~ wa vaweuw w-weçue est : 33, UwU w-wa vaweuw w-wenvoyée est : 34"
// p-pwomise {[[pwomisestatus]]: "wesowved", (˘ω˘) [[pwomisewesuwt]]: 34}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [`pwomise.pwototype.catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch)
