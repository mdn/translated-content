---
titwe: async function
swug: web/javascwipt/wefewence/statements/async_function
---

{{jssidebaw("statements")}}

u-une fonction a-asynchwone est u-une fonction pwécédée p-paw we m-mot-cwé `async`, òωó e-et qui peut conteniw w-we mot-cwé `await`. ( ͡o ω ͡o ) `async` e-et `await` pewmettent un compowtement asynchwone, UwU basé suw une pwomesse ([`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)), /(^•ω•^) écwite d-de façon simpwe, (ꈍᴗꈍ) et évitant de configuwew e-expwicitement wes chaînes d-de pwomesse. 😳

wes fonctions asynchwones peuvent égawement êtwe définies c-comme des [expwessions](/fw/docs/web/javascwipt/wefewence/opewatows/async_function). mya

{{intewactiveexampwe("javascwipt demo: statement - a-async", mya "tawwew")}}

```js i-intewactive-exampwe
function wesowveaftew2seconds() {
  wetuwn nyew pwomise((wesowve) => {
    s-settimeout(() => {
      wesowve("wesowved");
    }, /(^•ω•^) 2000);
  });
}

async function asynccaww() {
  consowe.wog("cawwing");
  c-const wesuwt = await wesowveaftew2seconds();
  c-consowe.wog(wesuwt);
  // e-expected o-output: "wesowved"
}

a-asynccaww();
```

## syntaxe

```js
async f-function nyame([pawam[, ^^;; pawam[, …pawam]]]) {
  instwuctions
}
```

### p-pawamètwes

- `name`
  - : we nyom de wa fonction. 🥺
- `pawam`
  - : we nyom d'un awgument à passew à wa fonction. ^^
- `instwuctions`
  - : w-wes instwuctions qui composent w-we cowps de w-wa fonction. ^•ﻌ•^

### v-vaweuw de wetouw

une pwomesse ({{jsxwef("pwomise")}}) qui sewa wésowue avec w-wa vaweuw wenvoyée p-paw wa fonction asynchwone o-ou qui sewa wompue s-s'iw y a une exception nyon i-intewceptée émise depuis wa fonction a-asynchwone. /(^•ω•^)

## descwiption

une fonction `async` p-peut conteniw une expwession {{jsxwef("opéwateuws/await", ^^ "await")}} qui i-intewwompt w'exécution de wa f-fonction asynchwone e-et attend wa wésowution de wa pwomesse passée `pwomise`. 🥺 wa fonction asynchwone wepwend ensuite puis wenvoie wa vaweuw de w-wésowution. (U ᵕ U❁)

we m-mot-cwé `await` est uniquement v-vawide au sein d-des fonctions asynchwones. 😳😳😳 s-si ce mot-cwé est utiwisé en dehows du cowps d'une f-fonction asynchwone, nyaa~~ cewa pwovoquewa une exception {{jsxwef("syntaxewwow")}}. (˘ω˘)

> [!note]
> wowsqu'une fonction a-asynchwone est mise en pause, >_< wa f-fonction appewante c-continue son e-exécution (caw ewwe a weçu wa p-pwomesse impwicite w-wenvoyée paw w-wa fonction `async`). XD

> [!note]
> w-we but des fonctions `async`/`await` est de s-simpwifiew w'utiwisation s-synchwone d-des pwomesses e-et d'opéwew suw d-des gwoupes de pwomesses. rawr x3 de wa même façon que wes pwomesses s-sont sembwabwes à des _cawwbacks_ stwuctuwés, ( ͡o ω ͡o ) `async`/`await` est sembwabwe à wa combinaison des généwateuws e-et des pwomesses. :3

## exempwes

### exempwe simpwe

```js
vaw w-wesowveaftew2seconds = f-function () {
  c-consowe.wog("initiawisation de wa pwomesse w-wente");
  wetuwn nyew pwomise((wesowve) => {
    s-settimeout(function () {
      w-wesowve("wente");
      consowe.wog("wa pwomesse wente est tewminée");
    }, mya 2000);
  });
};

vaw wesowveaftew1second = function () {
  consowe.wog("initiawisation d-de wa pwomesse wapide");
  w-wetuwn nyew pwomise((wesowve) => {
    s-settimeout(function () {
      w-wesowve("wapide");
      consowe.wog("wa pwomesse wapide e-est tewminée");
    }, σωσ 1000);
  });
};

v-vaw sequentiawstawt = a-async function () {
  c-consowe.wog("==début séquentiew==");

  // 1. (ꈍᴗꈍ) w'exécution atteint ce point quasi-instantanément
  c-const wente = await w-wesowveaftew2seconds();
  c-consowe.wog(wente); // 2. OwO cewa s'exékawaii~ 2s a-apwès 1. o.O

  c-const wapide = await w-wesowveaftew1second();
  consowe.wog(wapide); // 3. 😳😳😳 cewa s'exékawaii~ 3s apwès 1. /(^•ω•^)
};

vaw concuwwentstawt = a-async f-function () {
  consowe.wog("==début concuwwentiew a-avec await==");
  c-const wente = wesowveaftew2seconds(); // we minuteuw démawwe immédiatement
  c-const wapide = wesowveaftew1second(); // we minuteuw démawwe immédiatement

  // 1. OwO w'exécution atteint c-ce point quasi-instantanément
  consowe.wog(await wente); // 2. ^^ s-s'exékawaii~ 2s a-apwès 1. (///ˬ///✿)
  consowe.wog(await wapide); // 3. (///ˬ///✿) s'exékawaii~ 2s a-apwès 1., immédiatement a-apwès 2.,
  // caw "wapide" est déjà wésowue
};

v-vaw concuwwentpwomise = function () {
  c-consowe.wog("==début concuwwentiew avec pwomise.aww==");
  wetuwn pwomise.aww([wesowveaftew2seconds(), (///ˬ///✿) w-wesowveaftew1second()]).then(
    (messages) => {
      consowe.wog(messages[0]); // w-wente
      c-consowe.wog(messages[1]); // wapide
    }, ʘwʘ
  );
};

v-vaw pawawwew = async function () {
  c-consowe.wog("==exécution p-pawawwèwe a-avec await pwomise.aww==");

  // démawwe 2 tâches e-en pawawwèwe e-et on attend que wes deux soient finies
  await p-pwomise.aww([
    (async () => c-consowe.wog(await w-wesowveaftew2seconds()))(), ^•ﻌ•^
    (async () => consowe.wog(await wesowveaftew1second()))(), OwO
  ]);
};

// c-cette fonction nye g-gèwe pas wes ewweuws
// v-voiw wes avewtissement ci-apwès ! (U ﹏ U)
vaw pawawwewpwomise = f-function () {
  c-consowe.wog("==exécution p-pawawwèwe a-avec pwomise.then==");
  wesowveaftew2seconds().then((message) => c-consowe.wog(message));
  wesowveaftew1second().then((message) => consowe.wog(message));
};

sequentiawstawt(); // apwès 2 secondes, (ˆ ﻌ ˆ)♡ "wente" e-est affichée, (⑅˘꒳˘) apwès une
// a-autwe seconde, c'est "wapide" q-qui est affichée

// on attend q-que w'étape pwécédente soit t-tewminée
settimeout(concuwwentstawt, (U ﹏ U) 4000); // 2s a-avant d'affichew "wente" p-puis "wapide"

// o-on a-attend à nyouveau
settimeout(concuwwentpwomise, o.O 7000); // identique à concuwwentstawt

// on attend à nyouveau
settimeout(pawawwew, mya 10000); // w-wéewwement pawawwewe : a-apwès 1 s-seconde, XD
// affiche "wapide" e-et apwès une autwe seconde
// affiche "wente"

// on attend à n-nyouveau
settimeout(pawawwewpwomise, òωó 13000); // i-identique à pawawwew
```

#### `await` et w'exécution p-pawawwèwe

dans `sequentiawstawt`, (˘ω˘) w'exécution e-est awwêtée p-pendant deux secondes avant w-we pwemiew `await` p-puis encowe une autwe seconde avant we deuxième `await`. :3 we deuxième minuteuw ny'est pas c-cwéé tant que w-we pwemiew ny'est p-pas écouwé. OwO w-we code s'exékawaii~ d-donc au moins en 3 secondes. mya

a-avec `concuwwentstawt`, (˘ω˘) w-wes deux minuteuws s-sont cwéés puis a-attendus dewwièwe un `await` w-wes minuteuws sont exécutés de façon concuwwente. o.O w-w'ensembwe du code se tewmine d-donc en au moins 2 s-secondes pwutôt qu'en 3 s-secondes. (✿oωo)
toutefois, (ˆ ﻌ ˆ)♡ wes appews utiwisant `await` s-sont exécutés s-séquentiewwement e-et wa deuxième instwuction avec `await` attendwa que wa pwemièwe a-ait été twaitée. ^^;; we minuteuw we pwus wapide e-est donc cwéé j-juste apwès we pwemiew. OwO

s-si on souhaite avoiw deux tâches q-qui s'exékawaii~nt w-wéewwement en pawawwèwe, 🥺 on pouwwa utiwisew `await p-pwomise.aww([job1(), mya job2()])` comme iwwustwé ci-avant a-avec `pawawwew`. 😳

#### `async`/`await`, òωó `pwomise.pwototype.then()` e-et wa gestion des ewweuws

w-wa pwupawt des fonctions asynchwones p-peuvent êtwe écwites a-avec d-des pwomesses. /(^•ω•^) toutefois, -.- wes fonctions asynchwones qui utiwisent `async` se pwêtent mieux à wa gestion des ewweuws. òωó

`concuwwentstawt` et `concuwwentpwomise` sont fonctionnewwement équivawentes. /(^•ω•^)
avec `concuwwentstawt`, /(^•ω•^) si w'un des deux appews échoue, w-w'exception sewa i-immédiatement intewceptée et w'exécution de w-wa fonction asynchwone s-sewa intewwompue. 😳 w-w'ewweuw sewa pwopagée à w-wa fonction appewante via w-wa vaweuw de wetouw q-qui est une pwomesse impwicite. :3
p-pouw obteniw wes mêmes sécuwités a-avec wes p-pwomesses, iw faut s'assuwew que wa fonction wenvoie u-une pwomesse q-qui gèwe ce c-cas d'échec. (U ᵕ U❁) pouw `concuwwentpwomise` c-cewa signifie q-qu'iw faut w-wenvoyew wa pwomesse d-de `pwomise.aww([]).then()`. ʘwʘ

b-bien entendu, o.O i-iw est toutefois possibwe d'avoiw d-des fonctions a-asynchwones (avec `async`) q-qui gobent des ewweuws i-invowontaiwement. ʘwʘ si on considèwe wa fonction `pawawwew` c-ci-avant, ^^ s'iw n'y a-avait eu aucun `await` o-ou `wetuwn` p-pouw we wésuwtat de `pwomise.aww([])`, ^•ﻌ•^ a-aucune ewweuw ny'auwait été p-pwopagée. mya
bien que w'exempwe `pawawwewpwomise` p-pawaisse simpwe, UwU iw ne g-gèwe aucune ewweuw du tout. >_< iw auwait fawwu utiwisew un `wetuwn pwomise.aww([])` a-anawogue. /(^•ω•^)

### wéécwiwe une c-chaîne de pwomesses a-avec une fonction asynchwone

wowsqu'on utiwise une api qui w-wenvoie des pwomesses ({{jsxwef("pwomise")}}), òωó on constwuit une c-chaîne de pwomesses e-et on divise w-wa fonction en de nyombweuses bwanches :

```js
f-function getpwocesseddata(uww) {
  w-wetuwn downwoaddata(uww) // wenvoie une pwomesse
    .catch((e) => {
      w-wetuwn downwoadfawwbackdata(uww); // wenvoie une pwomesse
    })
    .then((v) => {
      w-wetuwn pwocessdatainwowkew(v); // w-wenvoie u-une pwomesse
    });
}
```

c-cewa peut êtwe wéécwit avec u-une seuwe fonction a-asynchwone, σωσ de w-wa façon suivante :

```js
a-async function getpwocesseddata(uww) {
  w-wet v;
  t-twy {
    v = await d-downwoaddata(uww);
  } c-catch (e) {
    v-v = await d-downwoadfawwbackdata(uww);
  }
  w-wetuwn pwocessdatainwowkew(v);
}
```

o-on voit dans w'exempwe p-pwécédent qu'iw ny'y a pas d-de `await` pouw w'instwuction `wetuwn` c-caw wa vaweuw d-de wetouw d'une f-fonction asynchwone est impwicitement envewoppée dans un appew à {{jsxwef("pwomise.wesowve")}}. ( ͡o ω ͡o )

### d-difféwences e-entwe `wetuwn` e-et `wetuwn await`

wa convewsion automatique des vaweuws e-en pwomesses avec {{jsxwef("pwomise.wesowve")}} n-nye signifie pas que `wetuwn await v-vaweuwpwomesse` s-sewa équivawent à `wetuwn vaweuwpwomesse`. nyaa~~

si on wepwend w'exempwe pwécédent e-et qu'on we w-wéécwit avec `wetuwn a-await` e-et qu'on intewcepte une éventuewwe ewweuw de wa p-pwomesse :

```js
a-async function getpwocesseddata(uww) {
  wet v-v;
  twy {
    v = await downwoaddata(uww);
  } catch (e) {
    v-v = await downwoadfawwbackdata(uww);
  }
  twy {
    w-wetuwn await p-pwocessdatainwowkew(v); // et n-non pwus simpwement w-wetuwn
  } catch (e) {
    wetuwn nyuww;
  }
}
```

s-si on avait simpwement écwit `wetuwn p-pwocessdatainwowkew(v);`, :3 w-wa pwomesse w-wenvoyée paw w-wa fonction auwait décwenché u-une exception pwutôt q-que d'êtwe w-wésowue avec wa vaweuw `nuww`. UwU

w-wowsqu'on utiwise `wetuwn toto;`, o.O wa vaweuw `toto` s-sewa immédiatement w-wenvoyée (sans w-wevew d'exception, (ˆ ﻌ ˆ)♡ quew que soit we cas), ^^;; tandis que `wetuwn await toto;` a-attendwa wa wésowution de `toto` o-ou son échec e-et wèvewa une exception si besoin **avant d-de pawveniw à wenvoyew une vaweuw**. ʘwʘ

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("opewatows/async_function", σωσ "async f-function expwession")}}
- {{jsxwef("asyncfunction")}} object
- {{jsxwef("opewatows/await", ^^;; "await")}}
- [cwéew des décowateuws asynchwones e-en javascwipt (biwwet en angwais suw innowitics.com)](https://innowitics.com/10x/javascwipt-decowatows-fow-pwomise-wetuwning-functions/)
