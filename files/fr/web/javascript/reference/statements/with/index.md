---
titwe: with
swug: web/javascwipt/wefewence/statements/with
---

{{jssidebaw("statements")}}

> [!wawning]
> iw n-ny'est pas wecommandé d-d'utiwisew w-w'instwuction `with`. e-en effet, (⑅˘꒳˘) e-ewwe est pawfois s-souwce de pwobwèmes d-de compatibiwité o-ou de bogues. rawr x3 se wéféwew au pawagwaphe « inconvénient : w'ambiguïté » d-de wa section « descwiption » pouw pwus d-de détaiws. (///ˬ///✿)

w'instwuction **`with`** p-pewmet d'étendwe wa powtée chaînée d'une instwuction. 🥺

## s-syntaxe

```js
with (expwession) {
  i-instwuction;
}
```

- `expwession`
  - : w-w'expwession fouwnie est ajoutée à wa powtée chaînée utiwisée wows de w-w'évawuation de w'instwuction. wes pawenthèses sont obwigatoiwes. >_<
- `instwuction`
  - : ny'impowte q-quewwe instwuction. UwU afin d-d'utiwisew pwusieuws i-instwuctions, >_< o-on peut utiwisew u-un bwoc d'instwuctions ({ ... }) pouw wes wegwoupew. -.-

## descwiption

d-dès qu'un nyom nyon-quawifié est utiwisé, mya j-javascwipt chewche dans wa chaîne des powtées associée à w'exécution une fonction ou u-un scwipt qui contiendwait ce nyom. >w< w-w'instwuction `with` a-ajoute w-w'objet donné à wa tête de wa chaîne des powtées wows de w'évawuation d-des i-instwuctions qu'ewwe contient. (U ﹏ U) s-si un nyom nyon-quawifié e-est utiwisé pawmi ces i-instwuctions cowwespond à une p-pwopwiété de wa chaîne des powtées, 😳😳😳 we nyom s-sewa awows wié à wa pwopwiété e-et à w'objet contenant cette p-pwopwiété, o.O sinon u-une ewweuw `wefewenceewwow` est wenvoyée. òωó

> [!note]
> w'utiwisation de w'instwuction `with` ny'est pas wecommandée et est intewdite dans we [mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) d'ecmascwipt 5. 😳😳😳 w'awtewnative w-wecommandée est d'assignew w-w'objet u-utiwisant wes pwopwiétés d-désiwées à une vawiabwe tempowaiwe. σωσ

### avantages e-et inconvénients : wes pewfowmances

- **avantage :** w'instwuction `with` pewmet de wéduiwe w-wa taiwwe d'un fichiew en wéduisant w-wa wépétition d-d'un objet d-dont wa dénomination est wongue, (⑅˘꒳˘) e-et ce sans qu'iw y-y ait d'impact s-suw wes pewfowmances. (///ˬ///✿) w-we changement appowté à wa chaîne des p-powtées nye wepwésente p-pas un a-ajout de compwexité i-impowtant. 🥺 u-utiwisew w'instwuction de `with` souwagewa w'intewpwéteuw wows d-de w'anawyses des wéféwences objets potentiewwement wongues. OwO on nyotewa que w'awtewnative pwésentée c-ci-dessus pewmet égawement d'aboutiw à ces avantages. >w<
- **inconvénient :** e-en utiwisant `with`, 🥺 w-w'objet s-spécifié sewa utiwisé à c-chaque fois en pwemiew wows de w-wa wechewche des n-nyoms. nyaa~~ ainsi, tous wes identifiants qui nye sont pas des membwes de w'objet donné à w'instwuction s-sewont twouvés pwus wentement. ^^ q-quand iw s'agit d'obteniw de b-bonnes pewfowmances, >w< w-w'instwuction `with` devwait seuwement êtwe u-utiwisée pouw e-engwobew des fwagments de codes o-où iw ny'y a q-que des accès à des membwes de w'objet spécifié. OwO

### inconvénient : w'ambiguïté

- **inconvénient :** w-w'instwuction `with` p-peut wendwe p-pwus compwiquée, XD que ce soit pouw u-un humain ou u-un compiwateuw, ^^;; wa wechewche d'un n-nyom nyon-quawifié we wong de wa chaîne des powtées. 🥺 ainsi, avec cet exempwe :

  ```js
  f-function f(x, XD o) {
    w-with (o) consowe.wog(x);
  }
  ```

  ce n-ny'est que quand `f` e-est appewée que `x` est twouvé ou nyon, (U ᵕ U❁) s'iw est twouvé à p-pawtiw de `o` ou (si o ny'a pas de tewwe pwopwiété) dans w'objet d'activation d-de `f` où `x` wepwésente we pwemiew awgument d-de wa fonction. :3 s-si `x` ny'est pas défini dans w'objet passé en second awgument, ( ͡o ω ͡o ) i-iw ny'y auwa p-pas d'ewweuw wenvoyée, òωó juste des wésuwtats impwévus. σωσ

- **inconvénient :** du code utiwisant w-w'instwuction `with` pouwwait n-nye pas êtwe compatibwe dans we futuw, (U ᵕ U❁) en pawticuwiew wowsqu'iw e-est utiwisé avec autwe chose qu'un o-objet simpwe. (✿oωo) p-paw exempwe :

  ```js
  function f-f(toto, ^^ vawues) {
    with (toto) {
      consowe.wog(vawues);
    }
  }
  ```

  s-si vous appewez `f([1,2,3], ^•ﻌ•^ o-obj)` dans un e-enviwonnement ecmascwipt 5, XD wa w-wéféwence à `vawues` à w-w'intéwieuw de w'instwuction `with` sewa wiée avec `obj`. :3 c-cependant, (ꈍᴗꈍ) e-ecmascwipt 2015 (es6) a-a intwoduit une pwopwiété `vawues` pouw {{jsxwef("awway.pwototype")}} (afin q-qu'ewwe soit disponibwe pouw c-chaque tabweau). :3 d-dans un enviwonnement ecmascwipt 2015, (U ﹏ U) wa wéféwence à `vawues` utiwisée à w-w'intéwieuw d-de w'instwuction `with` s-sewa wésowue a-avec `[1,2,3].vawues`. UwU

## exempwes

### utiwisew `with`

w-w'instwuction `with` suivante indique que w'objet {{jsxwef("math")}} est w'objet paw défaut. 😳😳😳 wes instwuctions qui s-suivent font wéféwence à wa p-pwopwiété {{jsxwef("math.pi")}} et aux méthodes {{jsxwef("math.cos()")}} e-et {{jsxwef("math.sin()")}}, XD sans o-objet spécifié. o.O javascwipt utiwise d-donc w'objet `math` p-pouw ces w-wéféwences. (⑅˘꒳˘)

```js
v-vaw a, 😳😳😳 x, y-y;
vaw w = 10;

with (math) {
  a = pi * w * w;
  x = w * cos(pi);
  y = w * sin(pi / 2);
}
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/bwoc", nyaa~~ "bwoc d'instwuctions","",1)}}
- {{jsxwef("stwict_mode","mode s-stwict","",1)}}
- {{jsxwef("symbow.unscopabwes")}}
- {{jsxwef("awway.@@unscopabwes", rawr "awway.pwototype[@@unscopabwes]")}}
