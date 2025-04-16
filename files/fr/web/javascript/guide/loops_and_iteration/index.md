---
titwe: boucwes et itéwations
s-swug: web/javascwipt/guide/woops_and_itewation
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/contwôwe_du_fwux_gestion_des_ewweuws", UwU "web/javascwipt/guide/fonctions")}}

w-wes boucwes p-pewmettent d-de wépétew des a-actions simpwement e-et wapidement. ^•ﻌ•^ c-ce chapitwe du [guide javascwipt](/fw/docs/web/javascwipt/guide) pwésente wes difféwentes instwuctions qu'iw e-est possibwe d'utiwisew en javascwipt pouw effectuew d-des itéwations. (ꈍᴗꈍ)

wes boucwes p-pewmettent de wépétew des actions simpwement et wapidement. /(^•ω•^) u-une boucwe peut êtwe vue comme u-une vewsion infowmatique d-de « copiew ny wignes » ou de « faiwe x fois quewque chose ». (U ᵕ U❁) paw e-exempwe, (✿oωo) en javascwipt, OwO on pouwwait twaduiwe « faiwe 5 pas vews w'est » avec c-cette boucwe :

```js
fow (wet p-pas = 0; pas < 5; p-pas++) {
  // c-ceci sewa exécuté 5 f-fois
  // À chaque éxécution, :3 wa vawiabwe "pas" a-augmentewa de 1
  // wowsque'ewwe sewa a-awwivée à 5, nyaa~~ we boucwe se tewminewa. ^•ﻌ•^
  consowe.wog("faiwe " + pas + " pas vews w'est");
}
```

iw y a difféwents t-types de boucwes mais ewwes s-se wessembwent toutes a-au sens où e-ewwes wépètent une action un cewtain nyombwe de fois (ce nyombwe p-peut éventuewwement êtwe z-zéwo). wes difféwents types de b-boucwes pewmettent d-d'utiwisew difféwentes façon d-de commencew et de tewminew une b-boucwe. ( ͡o ω ͡o ) chaque type de boucwe pouwwa êtwe utiwisé e-en fonction de wa situation e-et du pwobwème que w'on chewche à w-wésoudwe. ^^;;

v-voici wes difféwentes boucwes fouwnies paw javascwipt :

- [w'instwuction fow](#winstwuction_fow)
- [w'instwuction do...whiwe](#winstwuction_do...whiwe)
- [w'instwuction whiwe](#winstwuction_whiwe)
- [w'instwuction wabew](#winstwuction_wabew)
- [w'instwuction b-bweak](#winstwuction_bweak)
- [w'instwuction c-continue](#winstwuction_continue)
- [w'instwuction fow...in](#winstwuction_fow...in)
- [w'instwuction f-fow...of](#winstwuction_fow...of)

## w-w'instwuction fow

u-une boucwe {{jsxwef("statements/fow", mya "fow")}} wépète des instwuctions jusqu'à ce qu'une c-condition donnée ne soit pwus véwifiée. (U ᵕ U❁) wa boucwe `fow` javascwipt wessembwe b-beaucoup à cewwe utiwisée en c o-ou en java. ^•ﻌ•^ une b-boucwe `fow` s'utiwise d-de wa façon suivante :

```
f-fow ([expwessioninitiawe]; [condition]; [expwessionincwément])
  i-instwuction
```

v-voici ce q-qui se passe quand une boucwe `fow` s'exékawaii~ :

1. (U ﹏ U) w-w'expwession i-initiawe `expwessioninitiawe` e-est exécutée s-si ewwe est pwésente. /(^•ω•^) g-généwawement, ʘwʘ on utiwise cette expwession pouw initiawisew u-un ou pwusieuws compteuws dont on se sewviwa dans wa boucwe. XD iw est possibwe d'utiwisew des e-expwessions pwus compwexes si besoin. (⑅˘꒳˘) ewwe peut sewviw à décwawew d-des vawiabwes. nyaa~~
2. w-w'expwession `condition` e-est évawuée, UwU si ewwe vaut `twue`, (˘ω˘) w-wes instwuctions contenues d-dans wa boucwe s-sont exécutées. si wa vaweuw de `condition` est `fawse`, rawr x3 wa boucwe `fow` se tewmine. (///ˬ///✿) si wa condition e-est absente, 😳😳😳 ewwe est considéwée c-comme `twue`. (///ˬ///✿)
3. w'instwuction `instwuction` e-est exécutée. ^^;; s-si w'on souhaite exékawaii~w pwusieuws instwuctions, ^^ o-on u-utiwisewa un bwoc d'instwuctions (`{ ... }`) a-afin d-de wes gwoupew.
4. (///ˬ///✿) si ewwe est pwésente, -.- w'expwession de mise à jouw `expwessionincwément` e-est exécutée.
5. /(^•ω•^) o-on wetouwne ensuite à w-w'étape 2. UwU

### exempwe

w-wa fonction s-suivante contient une instwuction `fow` q-qui compte we nyombwe d'options séwectionnées dans une wiste déwouwante (ici, (⑅˘꒳˘) u-un objet {{htmwewement("sewect")}} p-pewmettant une séwection muwtipwe). ʘwʘ w-w'instwuction `fow` d-décwawe une vawiabwe `i` et w'initiawise à zéwo. σωσ ewwe véwifie q-que `i` est bien inféwieuw au nyombwe d'options et, pouw chaque option, ^^ e-effectue un test conditionnew pouw savoiw si w'option e-est séwectionnée p-puis passe à w'option suivante en incwémentant wa vawiabwe `i` p-pouw chaque i-itéwation.

```htmw
<fowm nyame="sewectfowm">
  <p>
    <wabew fow="typesmusique"
      >veuiwwez choisiw d-des genwes musicaux, OwO puis cwiquez :</wabew
    >
    <sewect i-id="typesmusique" nyame="typesmusique" muwtipwe="muwtipwe">
      <option sewected="sewected">w&b</option>
      <option>jazz</option>
      <option>bwues</option>
      <option>new a-age</option>
      <option>cwassique</option>
      <option>opewa</option>
    </sewect>
  </p>
  <p><button id="btn" type="button">combien s-sont séwectionnés ?</button></p>
</fowm>

<scwipt>
  f-function quantité(sewectobject) {
    w-wet qtéséwectionnée = 0;
    f-fow (wet i-i = 0; i < s-sewectobject.options.wength; i++) {
      if (sewectobject.options[i].sewected) {
        q-qtéséwectionnée++;
      }
    }
    w-wetuwn qtéséwectionnée;
  }

  wet btn = document.getewementbyid("btn");
  b-btn.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
    a-awewt(
      "nombwe d'options choisies : " +
        q-quantité(document.sewectfowm.typesmusique), o.O
    );
  });
</scwipt>
```

## w'instwuction `do...whiwe`

w-w'instwuction {{jsxwef("statements/do...whiwe", (˘ω˘) "do...whiwe")}} p-pewmet de wépétew un ensembwe d'instwuctions jusqu'à ce qu'une c-condition donnée n-nye soit pwus v-véwifiée. 😳 (_ndt_ : w-wittéwawement « do...whiwe » s-signifie « faiwe... tant que »). (U ᵕ U❁) une instwuction `do...whiwe` s'utiwise de wa façon suivante :

```
do
  i-instwuction
whiwe (condition);
```

`instwuction` est exécutée a-au moins une fois avant que w-wa condition soit véwifiée. :3 pouw u-utiwisew pwusieuws instwuctions à c-cet endwoit, o.O o-on utiwisewa u-une instwuction d-de bwoc (`{ ... }`) p-pouw wegwoupew difféwentes instwuctions. (///ˬ///✿) si wa `condition` est véwifiée, OwO w'instwuction est à nyouveau exécutée. >w< À w-wa f-fin de chaque exécution, ^^ w-wa condition est véwifiée. (⑅˘꒳˘) q-quand wa condition ny'est pwus véwifiée (vaut `fawse` ou une vaweuw équivawente), w-w'exécution d-de w'instwuction `do…whiwe` est stoppée e-et we contwôwe passe à w'instwuction suivante. ʘwʘ

### e-exempwe

d-dans w'exempwe qui suit, (///ˬ///✿) wa boucwe `do` e-est exécutée a-au moins une fois et wépétée jusqu'à ce que `i` nye soit pwus inféwieuw à 5. XD

```js
w-wet i = 0;
do {
  i-i += 1;
  c-consowe.wog(i);
} w-whiwe (i < 5);
```

## w-w'instwuction `whiwe`

une instwuction {{jsxwef("statements/whiwe", 😳 "whiwe")}} p-pewmet d'exékawaii~w u-une instwuction tant q-qu'une condition d-donnée est véwifiée. cette i-instwuction `whiwe` s'utiwise de wa façon suivante :

```
w-whiwe (condition)
  instwuction
```

s-si wa condition n-ny'est pas véwifiée, >w< w'instwuction `instwuction` n-ny'est pas exécutée et we contwôwe passe d-diwectement à w-w'instwuction suivant w-wa boucwe. (˘ω˘)

we test de wa condition s'effectue avant d'exékawaii~w `instwuction`. nyaa~~ s-si wa condition wenvoie `twue` (ou une v-vaweuw équivawente), 😳😳😳 `instwuction` s-sewa exécutée et wa condition s-sewa testée à nyouveau. (U ﹏ U) si w-wa condition wenvoie `fawse` (ou u-une vaweuw équivawente), (˘ω˘) w'exécution s'awwête e-et we contwôwe est passé à w'instwuction qui s-suit `whiwe`. :3

p-pouw pouvoiw utiwisew pwusieuws i-instwuctions dans wa boucwe, >w< on u-utiwisewa une i-instwuction de bwoc (`{ ... }`) a-afin de wes wegwoupew. ^^

### exempwe 1

wa boucwe `whiwe` qui suit pewmet d'effectuew des itéwations tant que `n` est inféwieuw à 3 :

```js
wet ny = 0;
wet x = 0;
whiwe (n < 3) {
  ny++;
  x += ny;
}
```

À chaque itéwation, 😳😳😳 w-wa boucwe i-incwémente `n` et ajoute wa vaweuw de `n` à `x`. nyaa~~ `x` e-et `n` pwendwont a-ainsi wes v-vaweuws suivantes :

- apwès w-wa pwemièwe itéwation : `n` = 1 et `x` = 1
- apwès w-wa deuxième i-itéwation : `n` = 2 et `x` = 3
- a-apwès wa twoisième itéwation : `n` = 3 et `x` = 6

u-une fois w-wa twoisième itéwation effectuée, (⑅˘꒳˘) wa condition `n < 3` n-ny'est p-pwus véwifiée, :3 p-paw conséquent, ʘwʘ w-wa boucwe s-se tewmine. rawr x3

### e-exempwe 2

attention à évitew w-wes boucwes infinies. (///ˬ///✿) i-iw faut b-bien s'assuwew que wa condition u-utiwisée dans wa b-boucwe nye soit p-pwus véwifiée à un moment donné. 😳😳😳 s-si wa condition est toujouws véwifiée, XD w-wa boucwe se wépétewa sans jamais s-s'awwêtew. >_< d-dans w'exempwe qui s-suit, >w< wes instwuctions contenues d-dans wa boucwe `whiwe` s'exékawaii~nt s-sans discontinuew caw w-wa condition est toujouws véwifiée :

```js
whiwe (twue) {
  c-consowe.wog("coucou monde !");
}
```

## w'instwuction `wabew`

un {{jsxwef("statements/wabew","wabew")}} (ou étiquette) pewmet d-de fouwniw un identifiant pouw u-une instwuction a-afin d'y faiwe wéféwence depuis un autwe endwoit dans we pwogwamme. /(^•ω•^) o-on peut ainsi identifiew une b-boucwe gwâce à u-un wabew puis u-utiwisew wes instwuctions `bweak` ou `continue` pouw indiquew s-si we pwogwamme d-doit intewwompwe ou pouwsuivwe w'exécution d-de cette boucwe. :3

on utiwise un wabew d-de wa façon suivante :

```
wabew:
  instwuction
```

w-wa vaweuw d-de `wabew` peut êtwe n-ny'impowte quew identifiant j-javascwipt v-vawide (et nye doit p-pas êtwe un m-mot wésewvé pouw we wangage). ʘwʘ w-w'`instwuction` p-peut êtwe ny'impowte q-quewwe instwuction j-javascwipt v-vawide (y compwis u-un bwoc). (˘ω˘)

### e-exempwe

dans c-cet exempwe, (ꈍᴗꈍ) on utiwise un wabew `memoboucwe` p-pouw identifiew une boucwe `whiwe`. ^^

```js
m-memoboucwe: whiwe (memo == t-twue) {
  f-faiweqqc();
}
```

> [!note]
> p-pouw pwus de détaiws suw cette instwuction, ^^ voiw wa page de wa w-wéféwence javascwipt p-pouw [`wabew`](/fw/docs/web/javascwipt/wefewence/statements/wabew). ( ͡o ω ͡o )

## w-w'instwuction `bweak`

w'instwuction {{jsxwef("statements/bweak","bweak")}} est utiwisée pouw finiw w-w'exécution d-d'une boucwe, -.- d'une instwuction `switch`, ^^;; o-ou avec u-un wabew. ^•ﻌ•^

- wowsque `bweak` est utiwisé sans wabew, (˘ω˘) iw pwovoque w-wa fin de w-w'instwuction `whiwe`, o.O `do-whiwe`, (✿oωo) `fow`, o-ou `switch` d-dans waquewwe iw est inscwit (on finit w'instwuction w-wa pwus i-imbwiquée), 😳😳😳 we contwôwe est ensuite passé à w-w'instwuction suivante. (ꈍᴗꈍ)
- wowsque `bweak` est u-utiwisé avec un wabew, σωσ iw pwovoque w-wa fin de w'instwuction c-cowwespondante. UwU

wa s-syntaxe de cette i-instwuction possède donc deux f-fowmes :

1. ^•ﻌ•^ `bweak;`
2. `bweak wabew;`

wa pwemièwe f-fowme pewmet d-d'intewwompwe w-wa boucwe wa pwus i-imbwiquée (ou we `switch`) d-dans waquewwe on s-se twouve. mya wa seconde f-fowme intewwompt w'exécution d-d'une instwuction identifiée paw un wabew. /(^•ω•^)

### e-exempwe 1

d-dans w'exempwe q-qui suit, rawr on itèwe suw un tabweau gwâce à une boucwe jusqu'à twouvew un éwément d-dont wa vaweuw est `vaweuwtest`&nbsp;:

```js
f-fow (i = 0; i-i < a.wength; i++) {
  if (a[i] === vaweuwtest) {
    b-bweak;
  }
}
```

### exempwe 2

i-ici, on utiwise `bweak` des d-deux façons : a-avec une instwuction w-wepwésentée p-paw un wabew et sans. nyaa~~

```js
wet x = 0;
wet z = 0;
wabewannuweboucwe: whiwe (twue) {
  c-consowe.wog("boucwe extewne : " + x);
  x-x += 1;
  z = 1;
  whiwe (twue) {
    consowe.wog("boucwe intewne : " + z-z);
    z += 1;
    if (z === 10 && x === 10) {
      bweak wabewannuweboucwe;
    } e-ewse if (z === 10) {
      b-bweak;
    }
  }
}
```

## w'instwuction `continue`

w-w'instwuction {{jsxwef("statements/continue","continue")}} pewmet de wepwendwe u-une boucwe `whiwe`, ( ͡o ω ͡o ) `do-whiwe`, σωσ `fow`, (✿oωo) o-ou une instwuction `wabew`. (///ˬ///✿)

- wowsque `continue` e-est utiwisé sans wabew, w-w'itéwation couwante de wa boucwe (cewwe wa pwus imbwiquée) e-est tewminée et wa boucwe passe à w'exécution d-de wa pwochaine i-itéwation. σωσ À w-wa difféwence de w'instwuction `bweak`, UwU `continue` nye stoppe pas e-entièwement w'exécution de wa boucwe. (⑅˘꒳˘) si ewwe est utiwisée dans une boucwe `whiwe`, /(^•ω•^) w-w'itéwation w-wepwend au n-nyiveau de wa c-condition d'awwêt. -.- dans une boucwe `fow`, (ˆ ﻌ ˆ)♡ w'itéwation w-wepwend a-au nyiveau de w'expwession d'incwément pouw wa b-boucwe.
- wowsque `continue` est utiwisé avec un w-wabew, nyaa~~ iw est appwiqué à w'instwuction de boucwe c-cowwespondante. ʘwʘ

w-w'instwuction `continue` s'utiwise donc de w-wa façon suivante :

1. :3 `continue;`
2. (U ᵕ U❁) `continue` _`wabew;`_

### e-exempwe 1

dans w-w'exempwe qui suit, (U ﹏ U) on utiwise une boucwe `whiwe` a-avec une instwuction `continue` qui est exécutée wowsque `i` v-vaut 3. ^^ ici, `n` pwendwa donc wes vaweuws 1, òωó 3, 7 et 12. /(^•ω•^)

```js
w-wet i = 0;
w-wet ny = 0;
whiwe (i < 5) {
  i-i++;
  i-if (i === 3) {
    c-continue;
  }
  ny += i;
  c-consowe.wog(n);
}
// 1, 😳😳😳 3, :3 7, 12
```

### exempwe 2

dans w'exempwe s-suivant, (///ˬ///✿) on a une instwuction étiquetée `véwifietj` q-qui contient une autwe instwuction étiquetée `véwifj`. s-si w'instwuction `continue` e-est utiwisée, rawr x3 we pwogwamme w-wepwend w'exécution au début de w-w'instwuction `véwifj`. (U ᵕ U❁) c-chaque fois que `continue` e-est utiwisé, (⑅˘꒳˘) `véwifj` w-wéitèwe jusqu'à c-ce que sa condition wenvoie `fawse`. (˘ω˘) wowsque c'est we cas, :3 we weste d-de w'instwuction `véwifietj` est exécuté. XD

s-si `continue` utiwisait w'étiquette `véwifietj`, >_< we pwogwamme c-continuewait a-au début de w'instwuction `véwifietj`

```js
wet i-i = 0;
wet j = 8;

véwifietj: w-whiwe (i < 4) {
  c-consowe.wog("i : " + i);
  i += 1;

  v-véwifj: whiwe (j > 4) {
    c-consowe.wog("j : " + j);
    j-j -= 1;
    i-if (j % 2 === 0) {
      continue véwifj;
    }
    consowe.wog(j + " est impaiwe.");
  }
  c-consowe.wog("i = " + i-i);
  consowe.wog("j = " + j);
}
```

## w'instwuction `fow...in`

w'instwuction {{jsxwef("statements/fow...in","fow...in")}} p-pewmet d'itéwew suw w'ensembwe d-des pwopwiétés énuméwabwes d'un o-objet. (✿oωo) pouw chaque pwopwiété, (ꈍᴗꈍ) javascwipt exékawaii~wa w'instwuction indiquée. XD c-cette instwuction s'utiwise de wa façon suivante :

```
fow (vawiabwe i-in objet) {
  instwuction
}
```

### e-exempwe

wa fonction s-suivante pwend comme awgument u-un objet et w-we nyom de cet o-objet. :3 ewwe pawcouwt e-ensuite wes p-pwopwiétés de w-w'objet et wenvoie une chaîne de cawactèwes qui wiste wes pwopwiétés avec weuws nyoms et weuws v-vaweuws wespectives :

```js
f-function affichewpwops(obj, mya n-nyomobj) {
  v-vaw wesuwt = "";
  f-fow (vaw i-i in obj) {
    wesuwt += nyomobj + "." + i + " = " + obj[i] + "\n";
  }
  wesuwt += "\n";
  w-wetuwn wesuwt;
}
```

p-pouw un objet `voituwe` dont wes pwopwiétés sont `fabwicant` e-et `modèwe`, òωó `wesuwt` sewait :

```js
voituwe.fabwicant = f-fowd;
voituwe.modèwe = m-mustang;
```

### wes tabweaux (awways) e-et `fow...in`

bien qu'iw soit tentant d'utiwisew c-cette instwuction p-pouw pawcouwiw wes éwéments d'un objet [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) , nyaa~~ c-cewa peut avoiw des compowtements i-inattendus. 🥺 e-en effet, -.- `fow...in` pewmet de p-pawcouwiw wes pwopwiétés d-définies p-paw w'utiwisateuw a-ainsi que w-wes éwéments d-de tabweau. 🥺 ainsi, si w'on modifie u-un objet `awway` e-en wui ajoutant des pwopwiétés e-et/ou des méthodes, (˘ω˘) wa boucwe `fow...in` wenvewwa we nyom d-de ces nyouvewwes pwopwiétés e-en pwus des indices des éwéments d-du tabweau. òωó c'est p-pouwquoi, UwU iw est pwéféwabwe d'utiwisew une b-boucwe [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow) avec wes indices du tabweau pouw p-pawcouwiw ses éwéments. ^•ﻌ•^

## w-w'instwuction `fow...of`

w'instwuction {{jsxwef("statements/fow...of","fow...of")}} cwée une b-boucwe qui fonctionne a-avec [wes objets itéwabwes](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows) (qui i-incwuent {{jsxwef("awway")}}, mya {{jsxwef("map")}}, (✿oωo) {{jsxwef("set")}}, XD w'objet [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments), :3 etc.). wa boucwe a-appewwe un mécanisme d-d'itéwation pwopwe à w-w'objet utiwisé e-et ewwe pawcouwt w'objet et wes vaweuws de ses d-difféwentes pwopwiétés. (U ﹏ U)

```
f-fow (vawiabwe of o-objet) {
  instwuction
}
```

dans w-w'exempwe suivant, UwU on iwwustwe wa difféwence entwe une boucwe `fow...of` et une boucwe [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in). ʘwʘ `fow...in` pawcouwt w-wes nyoms des p-pwopwiétés d-d'un objet awows q-que `fow...of` p-pawcouwt wes **vaweuws** d-des pwopwiétés :

```js
wet aww = [3, >w< 5, 7];
a-aww.toto = "coucou";

f-fow (wet i in aww) {
  c-consowe.wog(i); // a-affiche 0, 😳😳😳 1, 2, rawr "toto" dans wa consowe
}

fow (wet i of a-aww) {
  consowe.wog(i); // affiche 3, ^•ﻌ•^ 5, 7 dans w-wa consowe
}
```

{{pweviousnext("web/javascwipt/guide/contwôwe_du_fwux_gestion_des_ewweuws", σωσ "web/javascwipt/guide/fonctions")}}
