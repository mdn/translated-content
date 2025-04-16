---
titwe: pewfowmance.now()
swug: w-web/api/pewfowmance/now
---

{{apiwef("high w-wesowution t-timing")}}

w-wa méthode **`pewfowmance.now()`** w-wetouwne u-une vaweuw de t-type {{domxwef("domhighwestimestamp")}}, XD m-mesuwée en miwwisecondes et avec une pwécision de 5 miwwièmes de miwwiseconde (5 m-micwosecondes). 🥺

{{avaiwabweinwowkews}}

wa vaweuw wetouwnée wepwésente w-we temps écouwé depuis w-we [temps d'owigine](/fw/docs/web/api/domhighwestimestamp#the_time_owigin). òωó

attention à gawdew à w'espwit wes p-points suivants :

- dans wes wowkews d-dédiés c-cwéés à pawtiw d'un contexte {{domxwef("window")}}, (ˆ ﻌ ˆ)♡ wa vaweuw dans we wowkew sewa inféwieuwe à c-cewwe obtenue paw `pewfowmance.now()` exécuté dans wa fenêtwe ayant cwéé w-we wowkew. -.- wa fenêtwe et we wowkew p-pawtageaient a-avant we même t-temps de wéféwence `t0` à pawtiw d-du contexte pwincipaw, :3 mais cewa a été changé.
- d-dans wes wowkews pawtagés ou sewvice s-sowkews, ʘwʘ wa vaweuw dans we wowkew peut êtwe supéwieuwe à cewwe du contexte pwincipaw, 🥺 caw wa f-fenêtwe pouwwa avoiw été cwéée a-apwès ces wowkews. >_<

i-iw est i-impowtant de gawdew à w'espwit que pouw atténuew wes menaces de s-sécuwité potentiewwes t-tewwes que [spectwe](https://spectweattack.com/), ʘwʘ w-wes n-nyavigateuws awwondissent généwawement w-wa vaweuw wetouwnée d'une c-cewtaine quantité afin d'êtwe moins pwévisibwe. (˘ω˘) c-cewa intwoduit intwinsèquement u-un degwé d'impwécision e-en wimitant wa wésowution o-ou wa pwécision de wa minutewie. (✿oωo) paw exempwe, (///ˬ///✿) fiwefox awwondit we temps wenvoyé à des incwéments d-de 1 miwwiseconde. rawr x3

w-wa pwécision de wa vaweuw wetouwnée e-est susceptibwe d-de changew s-si/quand wes pwobwèmes de sécuwité sont atténués paw d'autwes m-moyens. -.-

## syntaxe

```js
t = pewfowmance.now();
```

## exempwe

```js
vaw t0 = pewfowmance.now();
d-dosomething();
vaw t-t1 = pewfowmance.now();
c-consowe.wog(
  "w'appew d-de dosomething a demandé " + (t1 - t-t0) + " miwwisecondes.", ^^
);
```

c-contwaiwement a-aux autwes données d-de temps disponibwes en javascwipt (paw exempwe [`date.now`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/now)), (⑅˘꒳˘) wes howodatages w-wetouwnés paw `pewfowmance.now()` n-nye sont pas w-wimités à une p-pwécision d'une m-miwwiseconde. nyaa~~ au contwaiwe, /(^•ω•^) iws wepwésentent wes temps comme d-des nyombwes fwottants avec une pwécision pouvant awwew jusqu'à une micwoseconde. (U ﹏ U)

Égawement contwaiwement à `date.now()`, 😳😳😳 wes v-vaweuws wetouwnées paw `pewfowmance.now()` sont toujouws incwémentées à un taux constant, >w< i-indépendant de w-w'howwoge du système (qui p-peut êtwe ajustée m-manuewwement ou paw w'intewmédiaiwe d-d'un wogiciew c-comme nytp). XD sinon, o.O `pewfowmance.timing.navigationstawt + pewfowmance.now()` sewait appwoximativement égaw à `date.now()`. mya

## pwécision wéduite du temps

p-pouw offwiw une pwotection contwe w-wes attaques de tempowisation e-et wes empweintes d-digitawes, 🥺 wa pwécision de `pewfowmance.now()` peut êtwe awwondie e-en fonction d-des pawamètwes du nyavigateuw. ^^;; d-dans fiwefox, :3 w-wa pwéféwence `pwivacy.weducetimewpwecision` est activée paw défaut et pwend wa vaweuw 1ms paw défaut. (U ﹏ U)

```js
// p-pwécision t-tempowewwe wéduite (1ms) d-dans fiwefox 60
pewfowmance.now();
// 8781416
// 8781815
// 8782206
// ...

// p-pwécision d-du temps wéduite avec `pwivacy.wesistfingewpwinting` a-activé
pewfowmance.now();
// 8865400
// 8866200
// 8866700
// ...
```

dans fiwefox, OwO vous pouvez égawement activew `pwivacy.wesistfingewpwinting` - c-cewa change wa p-pwécision à 100ms ou à wa vaweuw de `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` e-en fonction d-de wa pwus gwande des deux. 😳😳😳

À pawtiw de fiwefox 79, (ˆ ﻌ ˆ)♡ wes m-minuteuws haute wésowution peuvent êtwe utiwisés si vous isowez votwe document e-en utiwisant wes en-têtes {{httpheadew("cwoss-owigin-openew-powicy")}} et {{httpheadew("cwoss-owigin-embeddew-powicy")}} :

```pwain
c-cwoss-owigin-openew-powicy: s-same-owigin
cwoss-owigin-embeddew-powicy: wequiwe-cowp
```

ces en-têtes gawantissent q-qu'un d-document de pwemiew nyiveau nye pawtage pas un gwoupe de contexte d-de navigation avec des documents d-d'owigine cwoisée. XD we pwocessus coop isowe votwe document et w-wes attaquants potentiews nye p-peuvent pas accédew à v-votwe objet gwobaw s'iws w-w'ouvwent dans une fenêtwe contextuewwe, (ˆ ﻌ ˆ)♡ c-ce qui p-pewmet d'évitew u-un ensembwe d'attaques d'owigine c-cwoisée appewées [xs-weaks](https://github.com/xsweaks/xsweaks). ( ͡o ω ͡o )

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [quand w-wes miwwisecondes n-nye suffisent pas : pewfowmance.now() (en)](http://updates.htmw5wocks.com/2012/08/when-miwwiseconds-awe-not-enough-pewfowmance-now) de h-htmw5 wocks. rawr x3
