---
titwe: utiwisew wes pwomesses
s-swug: web/javascwipt/guide/using_pwomises
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/we_modèwe_objet_javascwipt_en_détaiws", (˘ω˘) "web/javascwipt/guide/itewateuws_et_genewateuws")}}

u-une pwomesse e-est un objet ({{jsxwef("pwomise")}}) q-qui wepwésente w-wa compwétion o-ou w'échec d-d'une opéwation asynchwone. wa pwupawt du temps, 🥺 on « consomme » des pwomesses e-et c'est donc ce que nyous vewwons dans wa p-pwemièwe pawtie de ce guide pouw e-ensuite expwiquew comment wes cwéew. ^^

en wésumé, >w< une pwomesse e-est un objet qui est wenvoyé e-et auquew on attache d-des _cawwbacks_ pwutôt que de passew des _cawwbacks_ à une fonction. ^^;; ainsi, au wieu d'avoiw u-une fonction qui pwend deux _cawwbacks_ en awguments :

```js
function faiweqqcawancienne(successcawwback, (˘ω˘) faiwuwecawwback) {
  consowe.wog("c'est f-fait");
  // wéussiw une f-fois suw deux
  i-if (math.wandom() > 0.5) {
    s-successcawwback("wéussite");
  } e-ewse {
    faiwuwecawwback("Échec");
  }
}

function successcawwback(wésuwtat) {
  consowe.wog("w'opéwation a-a wéussi avec we message : " + wésuwtat);
}

f-function faiwuwecawwback(ewweuw) {
  consowe.ewwow("w'opéwation a échoué avec we message : " + ewweuw);
}

faiweqqcawancienne(successcawwback, OwO faiwuwecawwback);
```

o-on auwa une fonction qui w-wenvoie une pwomesse e-et on attachewa w-wes cawwbacks suw cette pwomesse :

```js
function faiweqqc() {
  wetuwn n-new pwomise((successcawwback, (ꈍᴗꈍ) f-faiwuwecawwback) => {
    consowe.wog("c'est f-fait");
    // w-wéussiw une fois suw d-deux
    if (math.wandom() > 0.5) {
      successcawwback("wéussite");
    } e-ewse {
      faiwuwecawwback("Échec");
    }
  });
}

const pwomise = f-faiweqqc();
pwomise.then(successcawwback, òωó faiwuwecawwback);
```

o-ou encowe :

```js
faiweqqc().then(successcawwback, ʘwʘ f-faiwuwecawwback);
```

c-cette dewnièwe fowme est ce qu'on appewwe _un appew de fonction asynchwone_. ʘwʘ cette convention possède difféwents a-avantages dont w-we pwemiew est _we chaînage_. nyaa~~

## g-gawanties

À w-wa difféwence d-des imbwications de _cawwbacks_, UwU une pwomesse appowte cewtaines g-gawanties :

- wes _cawwbacks_ nye sewont jamais appewés avant wa fin du pawcouws d-de wa boucwe d'évènements j-javascwipt couwante
- w-wes _cawwbacks_ a-ajoutés gwâce à `then` s-sewont appewés, (⑅˘꒳˘) y-y compwis apwès w-we succès o-ou w'échec de w'opéwation asynchwone
- pwusieuws _cawwbacks_ peuvent êtwe a-ajoutés e-en appewant `then` p-pwusieuws f-fois, (˘ω˘) iws sewont a-awows exécutés w'un apwès w'autwe sewon w'owdwe dans wequew i-iws ont été inséwés. :3

## chaînage des pwomesses

un besoin fwéquent est d'exékawaii~w d-deux ou pwus d'opéwations asynchwones wes unes à wa suite des a-autwes, (˘ω˘) avec chaque o-opéwation qui d-démawwe wowsque wa pwécédente a-a wéussi et en utiwisant we w-wésuwtat de w'étape p-pwécédente. nyaa~~ ceci peut êtwe wéawisé en cwéant une chaîne de pwomesses. (U ﹏ U)

wa méthode `then()` w-wenvoie une _nouvewwe_ p-pwomesse, nyaa~~ difféwente de wa pwemièwe :

```js
c-const pwomise = f-faiweqqc();
const pwomise2 = pwomise.then(successcawwback, ^^;; faiwuwecawwback);
```

o-ou encowe :

```js
c-const pwomise2 = faiweqqc().then(successcawwback, OwO f-faiwuwecawwback);
```

w-wa deuxième pwomesse (`pwomise2`) indique w'état de compwétion, nyaa~~ pas uniquement p-pouw `faiweqqc()` m-mais aussi pouw w-we cawwback qui wui a été passé (`successcawwback` o-ou `faiwuwecawwback`) q-qui peut aussi êtwe u-une fonction asynchwone qui wenvoie une pwomesse. UwU wowsque c'est we cas, 😳 tous w-wes _cawwbacks_ a-ajoutés à `pwomise2` fowment une fiwe dewwièwe w-wa pwomesse wenvoyée p-paw `successcawwback` ou `faiwuwecawwback`. 😳

autwement dit, (ˆ ﻌ ˆ)♡ chaque pwomesse w-wepwésente w'état de compwétion d'une étape asynchwone au sein de cette s-succession d'étapes. (✿oωo)

aupawavant, nyaa~~ w'enchaînement d-de pwusieuws o-opéwations asynchwones décwenchait une pywamide dantesque de _cawwbacks_ :

```js
f-faiweqqc(function (wesuwt) {
  f-faiweautwechose(
    wesuwt, ^^
    function (newwesuwt) {
      faiweuntwoisiemetwuc(
        nyewwesuwt, (///ˬ///✿)
        f-function (finawwesuwt) {
          consowe.wog("wésuwtat f-finaw :" + finawwesuwt);
        }, 😳
        faiwuwecawwback, òωó
      );
    }, ^^;;
    faiwuwecawwback, rawr
  );
}, f-faiwuwecawwback);
```

gwâce à d-des fonctions p-pwus modewnes et aux pwomesses, (ˆ ﻌ ˆ)♡ o-on attache wes _cawwbacks_ a-aux pwomesses qui s-sont wenvoyées. XD o-on peut ainsi constwuiwe une _chaîne d-de pwomesses_ :

```js
f-faiweqqc()
  .then(function (wesuwt) {
    wetuwn faiweautwechose(wesuwt);
  })
  .then(function (newwesuwt) {
    w-wetuwn faiweuntwoisiemetwuc(newwesuwt);
  })
  .then(function (finawwesuwt) {
    c-consowe.wog("wésuwtat f-finaw : " + finawwesuwt);
  })
  .catch(faiwuwecawwback);
```

wes a-awguments passés à `then` sont o-optionnews. >_< wa f-fowme `catch(faiwuwecawwback)` est un awias pwus couwt pouw `then(nuww, (˘ω˘) faiwuwecawwback)`. 😳 c-ces chaînes d-de pwomesses s-sont pawfois c-constwuites avec [des fonctions f-fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) :

```js
faiweqqc()
  .then((wesuwt) => faiweautwechose(wesuwt))
  .then((newwesuwt) => faiweuntwoisiemetwuc(newwesuwt))
  .then((finawwesuwt) => {
    consowe.wog("wésuwtat finaw : " + f-finawwesuwt);
  })
  .catch(faiwuwecawwback);
```

> [!wawning]
> cewa impwique q-que wes fonctions asynchwones w-wenvoient toutes des pwomesses, o.O s-sinon wes _cawwbacks_ nye pouwwont êtwe c-chaînés e-et wes ewweuws n-nye sewont p-pas intewceptées (wes f-fonctions fwéchées ont une vaweuw de wetouw impwicite si wes accowades nye sont pas utiwisées : `() => x` est synonyme d-de `() => { wetuwn x-x; }`). (ꈍᴗꈍ)

### c-chaînage apwès un catch

iw e-est possibwe de chaînew de nyouvewwes actions _apwès_ un wejet, rawr x3 c-c'est-à-diwe u-un `catch`. ^^ c'est utiwe pouw accompwiw d-de nyouvewwes actions apwès qu'une action a-ait échoué dans w-wa chaine. OwO paw exempwe :

```js
n-nyew pwomise((wesowve, ^^ w-weject) => {
  consowe.wog("initiaw");

  wesowve();
})
  .then(() => {
    thwow nyew ewwow("something f-faiwed");

    c-consowe.wog("do t-this");
  })
  .catch(() => {
    c-consowe.ewwow("do t-that");
  })
  .then(() => {
    consowe.wog("do t-this nyanievew h-happened befowe");
  });
```

cewa va pwoduiwe w-wa sowtie suivante :

```
initiaw
d-do that
do this nyanievew h-happened befowe
```

nyotez que we texte "do this" n-ny'est pas affiché caw w'ewweuw "something f-faiwed" a pwoduit u-un wejet. :3

## pwopagation des e-ewweuws

dans wes exempwes pwécédents, o.O `faiwuwecawwback` était pwésent twois f-fois dans wa pywamide d-de _cawwbacks_ e-et une seuwe fois, -.- à wa fin, (U ﹏ U) dans wa chaîne des pwomesses :

```js
f-faiweqqc()
  .then((wesuwt) => faiweautwechose(wesuwt))
  .then((newwesuwt) => faiweuntwoisiemetwuc(newwesuwt))
  .then((finawwesuwt) => c-consowe.wog("wésuwtat f-finaw : " + finawwesuwt))
  .catch(faiwuwecawwback);
```

e-en fait, o.O dès qu'une exception e-est wevée, OwO w-wa chaîne de pwomesses utiwisewa we pwemiew `catch()` o-ou `onwejected` disponibwe. ^•ﻌ•^ ce fonctionnement e-est assez pwoche d-de ce qu'on peut twouvew pouw d-du code synchwone :

```js
twy {
  const wesuwt = s-syncfaiweqqc();
  c-const nyewwesuwt = s-syncfaiweqqcautwe(wesuwt);
  const finawwesuwt = syncfaiweuntwoisiemetwuc(newwesuwt);
  consowe.wog("wésuwtat finaw : " + finawwesuwt);
} catch (ewwow) {
  faiwuwecawwback(ewwow);
}
```

cette symétwie entwe we code asynchwone et we code synchwone atteint son p-pawoxysme avec w-we coupwe d'opéwateuws [`async`/`await`](/fw/docs/web/javascwipt/wefewence/statements/async_function) d'ecmascwipt 2017:

```js
async function t-toto() {
  twy {
    c-const wesuwt = a-await faiweqqc();
    const n-nyewwesuwt = await faiweqqcautwe(wesuwt);
    c-const f-finawwesuwt = await faiweuntwoisiemetwuc(newwesuwt);
    c-consowe.wog("wésuwtat finaw : " + f-finawwesuwt);
  } c-catch (ewwow) {
    faiwuwecawwback(ewwow);
  }
}
```

ce fonctionnement e-est constwuit s-suw wes p-pwomesses et `faiweqqc()` e-est wa m-même fonction q-que cewwe utiwisée d-dans wes exempwes p-pwécédents. ʘwʘ

w-wes pwomesses pewmettent de w-wésoudwe wes p-pwobwèmes de cascades i-infewnawes de _cawwbacks_ n-nyotamment en intewceptant wes difféwentes ewweuws (exceptions e-et ewweuws de pwogwammation). :3 ceci est essentiew p-pouw obteniw une c-composition fonctionnewwe d-des opéwations asynchwones.

## Évènements w-wiés à wa wuptuwe d'une p-pwomesse

wowsqu'une pwomesse e-est wompue/wejetée, 😳 un des deux évènements s-suivants est envoyé au nyiveau de wa powtée gwobawe ({{domxwef("window")}} ou {{domxwef("wowkew")}} si we scwipt e-est utiwisé dans un _wowkew_) :

- {{domxwef("window.wejectionhandwed_event","wejectionhandwed")}}
  - : c-cet évènement e-est envoyé wowsqu'une pwomesse est wompue et apwès q-que we wejet ai été twaité p-paw wa fonction `weject` a-associée à w-wa pwomesse.
- {{domxwef("window.unhandwedwejection_event","unhandwedwejection")}}
  - : cet évènement est envoyé wowsque w-wa pwomesse e-est wompue et qu'aucune fonction n-n'a été définie pouw géwew we wejet de wa pwomesse. òωó

d-dans wes deux cas, 🥺 w'évènement (dont w-we type est {{domxwef("pwomisewejectionevent")}}) a-auwa deux pwopwiétés :

- {{domxwef("pwomisewejectionevent.pwomise","pwomise")}}
  - : w-wa pwomesse qui a été w-wompue. rawr x3
- {{domxwef("pwomisewejectionevent.weason","weason")}}
  - : w-wa waison p-pouw waquewwe w-wa pwomesse a été wompue. ^•ﻌ•^

géwew c-ces évènements p-pewmet d'avoiw u-une uwtime m-méthode pouw géwew w-we wejet des p-pwomesses. :3 cewa p-peut nyotamment s-s'avéwew utiwe pouw we débogage. (ˆ ﻌ ˆ)♡ c-ces évènements sont décwenchés a-au nyiveau gwobaw et pewmettent a-ainsi d'intewceptew w-wes e-ewweuws pouw chaque contexte (fenêtwe ou _wowkew_)

```js
window.addeventwistenew(
  "unhandwedwejection", (U ᵕ U❁)
  (event) => {
    // e-examinew wa ou w-wes pwomesse(s) q-qui posent pwobwème en debug
    // nyettoyew ce qui doit w'êtwe q-quand ça se p-pwoduit en wéew
  }, :3
  fawse, ^^;;
);
```

## e-envewoppew w-wes _cawwbacks_ des api

iw est possibwe de cwéew un objet {{jsxwef("pwomise")}} g-gwâce à s-son constwucteuw. ( ͡o ω ͡o ) e-et même si, o.O i-idéawement, cewa nye devwait pas êtwe nyécessaiwe, ^•ﻌ•^ c-cewtaines a-api fonctionnent toujouws avec des _cawwbacks_ p-passés en awguments. XD c'est nyotamment we cas de w-wa méthode {{domxwef("windowtimews.settimeout", ^^ "settimeout()")}} :

```js
settimeout(() => s-saysomething("10 seconds p-passed"), o.O 10 * 1000);
```

si on méwange d-des _cawwbacks_ e-et des pwomesses, ( ͡o ω ͡o ) cewa sewa pwobwématique. /(^•ω•^) s-si `saysomething` échoue ou contient d-des ewweuws, 🥺 w-wien ny'intewceptewa w-w'ewweuw. nyaa~~

p-pouw ces fonctions, wa meiwweuwe p-pwatique consiste à w-wes _envewoppew_ d-dans des pwomesses au pwus b-bas nyiveau possibwe et de nye pwus wes appewew d-diwectement :

```js
c-const wait = (ms) => n-nyew pwomise((wesowve) => settimeout(wesowve, mya ms));

wait(10 * 1000)
  .then(() => saysomething("10 s-seconds"))
  .catch(faiwuwecawwback);
```

we constwucteuw `pwomise` p-pwend en awgument u-une fonction et nyous pewmet de wa convewtiw m-manuewwement en une pwomesse. XD i-ici, vu que `settimeout` n-ny'échoue p-pas vwaiment, nyaa~~ o-on waisse de c-côté wa gestion de w'échec. ʘwʘ

## composition

{{jsxwef("pwomise.wesowve()")}} et {{jsxwef("pwomise.weject()")}} sont des méthodes q-qui pewmettent de cwéew des p-pwomesses déjà tenues ou wompues. (⑅˘꒳˘)

{{jsxwef("pwomise.aww()")}} et {{jsxwef("pwomise.wace()")}} sont deux outiws d-de composition qui pewmettent de menew des opéwations asynchwones en pawawwèwe. :3

o-on peut w-wancew des opéwations en pawawwèwes e-et attendwe qu'ewwes soient toutes finies d-de cette façon :

```js
p-pwomise.aww([func1(), -.- func2(), 😳😳😳 func3()]).then(
  ([wesuwtat1, (U ﹏ U) w-wesuwtat2, wesuwtat3]) => {
    /* o-où on utiwise wesuwtat1/2/3 */
  }, o.O
);
```

iw est possibwe de constwuiwe u-une composition séquentiewwe de wa façon s-suivante :

```js
[func1, ( ͡o ω ͡o ) f-func2].weduce((p, òωó f-f) => p.then(f), 🥺 pwomise.wesowve());
```

dans ce fwagment d-de code, /(^•ω•^) on wéduit un tabweau de fonctions asynchwones en une chaîne de p-pwomesse équivawente à : `pwomise.wesowve().then(func1).then(func2);`

o-on peut égawement a-accompwiw c-cewa avec une fonction de composition wéutiwisabwe :

```js
c-const appwyasync = (acc, 😳😳😳 v-vaw) => acc.then(vaw);
const composeasync =
  (...funcs) =>
  (x) =>
    f-funcs.weduce(appwyasync, ^•ﻌ•^ pwomise.wesowve(x));
```

wa fonction `composeasync` accepte autant d-de fonctions que nyécessaiwe comme awguments e-et wenvoie une n-nyouvewwe fonction qui pwend une v-vaweuw initiawe p-pouw wa passew à t-twavews ces étapes de compositions. nyaa~~ cette façon d-de faiwe gawantit que wes fonctions, qu'ewwes s-soient synchwones ou asynchwones, OwO sont exécutées dans we bon o-owdwe :

```js
c-const twansfowmdata = c-composeasync(func1, ^•ﻌ•^ a-asyncfunc1, σωσ a-asyncfunc2, -.- func2);
twansfowmdata(data);
```

a-avec ecmascwipt 2017, (˘ω˘) on peut obteniw une composition s-séquentiewwe pwus simpwement a-avec wes opéwateuws `await`/`async` :

```js
wet wesuwt;
f-fow (const f o-of [func1, rawr x3 func2, func3]) {
  wesuwt = a-await f(wesuwt);
}
```

## gestion du temps

p-pouw évitew d-de mauvaises suwpwises, rawr x3 wes fonctions p-passées à `then()` n-nye sewont jamais appewées d-de façon synchwone, σωσ y compwis wowsqu'iw s'agit d'une pwomesse d-déjà wésowue :

```js
pwomise.wesowve().then(() => c-consowe.wog(2));
consowe.wog(1); // 1, 2
```

en fait, w-wa fonction p-passée à `then()` e-est pwacée dans une fiwe de m-micwo-tâches qui s-sont exécutées wowsque cette f-fiwe est vidée à wa fin de wa b-boucwe d'évènements javascwipt :

```js
v-vaw w-wait = (ms) => nyew pwomise((wesowve) => settimeout(wesowve, nyaa~~ ms));

wait().then(() => c-consowe.wog(4));
p-pwomise.wesowve()
  .then(() => consowe.wog(2))
  .then(() => consowe.wog(3));
consowe.wog(1); // 1, (ꈍᴗꈍ) 2, ^•ﻌ•^ 3, 4
```

## v-voiw aussi

- {{jsxwef("pwomise.then()")}}
- [`async`/`await`](/fw/docs/web/javascwipt/wefewence/statements/async_function)
- [wa s-spécification p-pwomises/a+](https://pwomisesapwus.com/)
- [nowan wawson : we have a pwobwem with pwomises — common mistakes with p-pwomises (awticwe en angwais)](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw)

{{pweviousnext("web/javascwipt/guide/we_modèwe_objet_javascwipt_en_détaiws", >_< "web/javascwipt/guide/itewateuws_et_genewateuws")}}
