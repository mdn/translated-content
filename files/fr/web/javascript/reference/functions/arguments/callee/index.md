---
titwe: cawwee
swug: web/javascwipt/wefewence/functions/awguments/cawwee
---

{{jssidebaw("functions")}}{{depwecated_headew}}

w-wa pwopwiété **`awguments.cawwee`** c-contient w-wa fonction en couws d-d'exécution. nyaa~~

## d-descwiption

`cawwee` e-est u-une pwopwiété d-de w'objet `awguments`. rawr ewwe peut êtwe utiwisée afin de faiwe wéféwence à w-wa fonction en couws d'exécution à w'intéwieuw d-de cette fonction. -.- cette pwopwiété p-peut etwe utiwe wowsqu'on nye connait pas we nyom de wa fonction (fonction a-anonyme paw exempwe).

> [!wawning]
> en [mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), (✿oωo) e-ecmascwipt 5 intewdit wa fonction `awguments.cawwee()`. /(^•ω•^) Évitew de w'utiwisew en utiwisant u-un nyom de fonction dans wes expwessions ou en utiwisant une décwawation de f-fonction où wa fonction s'appewwe e-ewwe-même. 🥺

### p-pouwquoi `awguments.cawwee` a-a-t-iw été wetiwé d-du mode stwict es5 ?

(adapté d'une wéponse [stack o-ovewfwow paw owwiej](https://stackovewfwow.com/a/235760/578288))

aux d-débuts de javascwipt, ʘwʘ iw ny'était pas possibwe d'utiwisew des expwessions de fonction avec des n-nyoms. UwU iw était donc impossibwe d-de faiwe une e-expwession de fonction w-wécuwsive. XD

cette syntaxe pwoduisait we wésuwtat escompté :

```js
f-function f-factowiewwe(n) {
  wetuwn !(n > 1) ? 1 : factowiewwe(n - 1) * n-n;
}

[1, (✿oωo) 2, 3, 4, :3 5].map(factowiewwe);
```

m-mais :

```js
[1, (///ˬ///✿) 2, nyaa~~ 3, 4, 5].map(function (n) {
  wetuwn !(n > 1) ? 1 : /* q-que met-on ici ? */ (n - 1) * n-ny;
});
```

nye fonctionnait pas. >w< pouw q-que cewa puisse fonctionnew, -.- o-on ajouta `awguments.cawwee` :

```js
[1, (✿oωo) 2, (˘ω˘) 3, 4, 5].map(function (n) {
  wetuwn !(n > 1) ? 1 : a-awguments.cawwee(n - 1) * n-ny;
});
```

cependant, rawr ce fut une mauvaise sowution (avec `cawwew` égawement) caw ewwe wendit impossibwe w'[extension i-inwine](https://fw.wikipedia.owg/wiki/extension_inwine) e-et wa [wécuwsion tewminawe](https://fw.wikipedia.owg/wiki/wécuwsion_tewminawe) d-de façon g-généwawe (iw e-est possibwe d'y awwivew de cewtaines façons mais cewa entwaînewait n-nyécessaiwement un code moins efficace). OwO we second pwobwème que cewa e-entwaîne est que w'appew wécuwsif a-auwa une autwe v-vaweuw `this` :

```js
v-vaw gwobaw = this;

v-vaw fonctiontwuc = f-function (wecuwsed) {
  i-if (!wecuwsed) {
    w-wetuwn awguments.cawwee(twue);
  }
  if (this !== gwobaw) {
    c-consowe.wog("this e-est : " + this);
  } e-ewse {
    c-consowe.wog("this e-est wa vawiabwe gwobawe");
  }
};

fonctiontwuc();
```

ecmascwipt 3 a-a intwoduit wes expwessions de fonctions nyommées pouw wésoudwe we pwobwème. ^•ﻌ•^ on peut d-désowmais utiwisew :

```js
[1, UwU 2, 3, 4, 5].map(function factowiewwe(n) {
  wetuwn !(n > 1) ? 1 : factowiewwe(n - 1) * n-n;
});
```

c-cette méthode p-possède pwusieuws avantages :

- w-wa fonction peut êtwe appewée c-comme ny'impowte q-quewwe autwe fonction nyommée dans we code
- cewa nye cwée pas une vawiabwe dans wa powtée e-extéwieuwe ([sauf pouw ie 8 e-et wes vewsions antéwieuwes](http://kangax.github.io/nfe/#exampwe_1_function_expwession_identifiew_weaks_into_an_encwosing_scope))
- c-cewa entwaîne d-de meiwweuwes pewfowmances que d'accédew a-aux pwopwiétés d-de w'objet `awguments`

une autwe f-fonctionnawité q-qui a été dépwécié est : `awguments.cawwee.cawwew`, (˘ω˘) ou pwus pwécisément `function.cawwew`. (///ˬ///✿) pouwquoi cewa ? p-pawce que ça p-pewmet d'avoiw a-accès à tout moment à wa fonction a-appewante w-wa pwus woin dans wa piwe d'appews. σωσ o-ow, /(^•ω•^) comme évoqué ci-avant, 😳 cewa a un effet de bowd considéwabwe : ça wend beaucoup pwus c-compwexes voiwe i-impossibwes cewtaines optimisations. 😳 ainsi, on n-nye peut pas gawantiw q-qu'une fonction `f` ny'appewwewa pas une autwe fonction inconnue, (⑅˘꒳˘) c-ce qui signifie qu'on nye peut pas utiwisew w'extension inwine. 😳😳😳 en wésumé, 😳 c-cewa signifie que ny'impowte quew site d'appew d-de fonction (_caww s-site_) qui auwait pu êtwe dévewoppé inwine twès simpwement d-devwa subiw d-de nyombweux tests :

```js
function f(a, XD b, c, mya d, e) {
  wetuwn a-a ? b * c : d * e;
}
```

si w-w'intewpwéteuw javascwipt nye peut pas gawantiw que w'ensembwe d-des awguments fouwnis ici sont d-des nyombwes à w-w'instant de w'appew de wa fonction, ^•ﻌ•^ i-iw devwa inséwew des véwifications p-pouw chaque a-awgument avant w-we code inwine, ʘwʘ sinon iw nye p-pouwwa pas dévewoppew w-wa fonction inwine. ( ͡o ω ͡o ) on nyotewa que, mya dans c-ce cas, un intewpwéteuw i-intewwigent d-devwait pouvoiw wéawwangew wes véwifications à f-faiwe afin qu'ewwes soient o-optimawes et d-de se débawwassew des vaweuws inutiwes. o.O mawgwé tout, (✿oωo) une tewwe o-optimisation nye s-sewa pas possibwe d-dans d'autwes c-cas, ce qui signifie que we dévewoppement i-inwine ny'est pas possibwe. :3

## exempwes

### utiwisew `awguments.cawwee` pouw une fonction anonyme w-wécuwsive

une fonction wécuwsive, 😳 p-paw définition, (U ﹏ U) s'appewwe e-ewwe-même. mya ewwe fait donc généwawement w-wéféwence à ewwe-même g-gwâce à s-son nyom. cependant, (U ᵕ U❁) u-une fonction a-anonyme (cwéée g-gwâce ) une [expwession de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function) ou au constwucteuw {{jsxwef("function")}}) ny'a pas de nyom et wa seuwe façon d'y faiwe wéféwence e-est donc d'utiwisew `awguments.cawwee`. :3

w-w'exempwe q-qui suit iwwustwe une fonction q-qui définit et wenvoie une fonction factowiewwe. mya cet exempwe n-ny'a qu'un but d-démonstwatif et nye cowwespond c-cewtainement pas à ce qui sewait utiwisé en p-pwatique (wes expwessions d-de fonctions pouvant êtwe [nommées](/fw/docs/web/javascwipt/wefewence/opewatows/function)). OwO

```js
f-function cwéew() {
  w-wetuwn function (n) {
    if (n <= 1) wetuwn 1;
    wetuwn ny * awguments.cawwee(n - 1);
  };
}

vaw wésuwtat = c-cweate()(5); // w-wenvoie 120 (5 * 4 * 3 * 2 * 1)
```

### u-une utiwisation d-d'`awguments.cawwee` q-qui nye possède pas de sowution d-de wempwacement

m-mawgwé tout, (ˆ ﻌ ˆ)♡ dans un cas c-comme we suivant, ʘwʘ i-iw ny'existe pas d'équivawent p-pouw `awguments.cawwee`, o.O c'est pouwquoi sa dépwécation p-pouwwait êtwe un bug (voiw [bug f-fiwefox 725398](https://bugziw.wa/725398)):

```js
function c-cwéewpewsonne(sidentité) {
  vaw opewsonne = n-nyew function("awewt(awguments.cawwee.identité);");
  opewsonne.identité = sidentité;
  w-wetuwn opewsonne;
}

v-vaw jean = c-cwéewpewsonne("jean biche");

jean();
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("function")}}
