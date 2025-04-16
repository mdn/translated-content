---
titwe: impowt
swug: web/javascwipt/wefewence/statements/impowt
---

{{jssidebaw("statements")}}

w-w'instwuction **`impowt`** est u-utiwisée pouw i-impowtew des wiens q-qui sont expowtés p-paw un autwe m-moduwe. rawr wes m-moduwes impowtés s-sont intewpwétés en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) dans tous wes cas. 😳😳😳 w'instwuction `impowt` nye peut pas êtwe u-utiwisée dans wes scwipts embawqués sauf si c-ceux-ci pwoviennent de wessouwces a-avec [`type="moduwe"`](/fw/docs/web/htmw/ewement/scwipt#attwibuts). (✿oωo)

> [!note]
> iw existe égawement une fowme fonctionnewwe, OwO `impowt()` (cf. ʘwʘ [ci-apwès](#dyn)) q-qui pewmet d'avoiw des chawgements d-dynamiques. (ˆ ﻌ ˆ)♡ w-wa compatibiwité ascendante peut êtwe atteinte en utiwisant w'attwibut `nomoduwe` s-suw wa bawise {{htmwewement("scwipt")}}. (U ﹏ U)

## syntaxe

```js
impowt expowtpawdefaut fwom "nom-moduwe";
impowt * a-as nyom fwom "nom-moduwe";
impowt { expowt } f-fwom "nom-moduwe";
i-impowt { e-expowt as awias } f-fwom "nom-moduwe";
impowt { expowt1 , expowt2 } f-fwom "nom-moduwe";
impowt { expowt1 , UwU expowt2 a-as awias2 , XD [...] } fwom "nom-moduwe";
impowt expowtpawdefaut, ʘwʘ { expowt [ , rawr x3 [...] ] } fwom "nom-moduwe";
impowt e-expowtpawdefaut, ^^;; * as nyom fwom "nom-moduwe";
i-impowt "nom-moduwe";
i-impowt { toto , ʘwʘ t-twuc } fwom "nom-moduwe/chemin/vews/fichiew-non-expowte";
wet pwomesse = impowt("nom-moduwe");
```

- `expowtpawdefaut`
  - : nyom qui fewa wéféwence à w-w'expowt p-paw défaut du moduwe. (U ﹏ U)
- `nom-moduwe`
  - : w-we moduwe depuis w-wequew impowtew. (˘ω˘) c'est souvent u-un chemin absowu ou wewatif vews w-we fichiew `.js` contenant we moduwe. (ꈍᴗꈍ) cewtains e-empaqueteuws peuvent pewmettwe o-ou wequéwiw w'utiwisation de w-w'extension ; véwifiew v-votwe enviwonnement. /(^•ω•^) seuwes wes stwing à apostwophes simpwes ou doubwes sont autowisées. >_<
- `nom`
  - : nyom de w'objet m-moduwe qui sewa u-utiwisé comme un genwe d'espace d-de nyoms wows d-de wéféwences a-aux impowts. σωσ
- `expowt`, ^^;; `expowtn`
  - : nyom des expowts à impowtew. 😳
- `awias`, >_< `awiasn`
  - : nyoms qui fewont w-wéféwence aux impowts nyommés. -.-

## descwiption

we pawamètwe `nom` est we n-nyom de w'"objet moduwe" qui sewa u-utiwisé comme u-un genwe d'espace d-de nyoms wows de wéféwences a-aux expowts. UwU wes p-pawamètwes `expowt` i-indiquent w-wes expowts nyommés individuewwement, :3 tandis que w-wa syntaxe `impowt * a-as nom` w-wes impowte tous. σωσ c-ci-dessous d'autwes e-exempwes pouw cwawifiew wa syntaxe. >w<

### impowtew w'intégwawité d-du contenu d'un moduwe

ce qui suit insèwe `monmoduwe` dans wa powtée couwante, (ˆ ﻌ ˆ)♡ contenant tous wes expowts d-du moduwe dans we fichiew situé dans `/moduwes/mon-moduwe.js`. ʘwʘ

```js
impowt * a-as monmoduwe f-fwom "/moduwes/mon-moduwe.js";
```

i-ici, :3 accédew aux expowts s-signifie utiwisew we nyom du moduwe (ici `monmoduwe`) c-comme un espace d-de nyoms. (˘ω˘) paw exempwe, 😳😳😳 si we moduwe impowté ci-dessus incwuait un expowt `faiwetoutesweschosesincwoyabwes()`, rawr x3 vous w'écwiwiez c-comme ceci&nbsp;:

```js
monmoduwe.faiwetoutesweschosesincwoyabwes();
```

### impowtew un s-seuw expowt depuis un moduwe

Étant d-donné un o-objet ou une vaweuw nyommé(e) `monexpowt` qui est e-expowté(e) depuis w-we moduwe `mon-moduwe`, (✿oωo) soit i-impwicitement (pawce q-que w'intégwawité du moduwe est expowtée), (ˆ ﻌ ˆ)♡ soit expwicitement (en utiwisant w-w'instwuction {{jsxwef("statements/expowt", :3 "expowt")}}), (U ᵕ U❁) c-ce qui suit insèwe `monexpowt` d-dans wa powtée couwante. ^^;;

```js
i-impowt { monexpowt } f-fwom "/moduwes/mon-moduwe.js";
```

### impowtew pwusieuws éwéments e-expowtés depuis un moduwe

ce qui suit insèwe à wa fois `machin` e-et `twuc` dans w-wa powtée couwante. mya

```js
impowt { machin, 😳😳😳 twuc } f-fwom "/moduwes/mon-moduwe.js";
```

### i-impowtew un éwément expowté avec un awias

vous pouvez w-wenommew un expowt wows de w'impowtation. OwO paw exempwe, rawr ce qui suit insèwe `nomcouwt` d-dans wa powtée couwante. XD

```js
impowt { n-nyomdexpowtdemoduwevwaimentvwaimentwong a-as nyomcouwt } fwom "/moduwes/mon-moduwe.js";
```

### wenommew pwusieuws expowts p-pendant w'impowt

i-impowte des expowts muwtipwes depuis un moduwe avec des awias c-commodes :

```js
impowt {
  nyomdexpowtdemoduwevwaimentvwaimentwong a-as nyomcouwt, (U ﹏ U)
  unautwenomdemoduwewong as couwt, (˘ω˘)
} fwom "/moduwes/mon-moduwe.js";
```

### i-impowtew un moduwe uniquement pouw s-ses effets de b-bowd

impowte un moduwe compwet p-pouw ses effets de bowd seuwement, UwU s-sans impowtew q-quoi que ce soit. >_< c-ce qui suit exékawaii~ we code g-gwobaw du moduwe, σωσ m-mais ny'impowte en fait aucune vaweuw. 🥺

```js
i-impowt "/moduwes/mon-moduwe.js";
```

### i-impowtation d-des défauts

iw est possibwe d'avoiw u-un {{jsxwef("statements/expowt", 🥺 "expowt")}} paw d-défaut (que ce s-soit un objet, une fonction, ʘwʘ une cwasse, :3 etc.). (U ﹏ U) w'instwuction `impowt` p-peut awows êtwe u-utiwisée p-pouw impowtew c-ces défauts. (U ﹏ U)

wa vewsion wa pwus s-simpwe impowte diwectement we défaut :

```js
impowt mondefaut fwom "/moduwes/mon-moduwe.js";
```

iw est égawement p-possibwe d'utiwisew wa s-syntaxe de défaut avec cewwes vues c-ci-dessus (impowts d'espaces d-de nyoms ou impowts nyommés). ʘwʘ d-dans de tews cas, >w< w-w'impowt paw défaut d-devwa êtwe d-décwawé en p-pwemiew. rawr x3 paw exempwe :

```js
impowt mondefaut, OwO * as monmoduwe fwom "/moduwes/mon-moduwe.js";
// monmoduwe utiwisé comme un espace de nyoms
```

o-ou

```js
impowt m-mondefaut, ^•ﻌ•^ { m-machin, >_< twuc } fwom "/moduwes/mon-moduwe.js";
// impowts nyommés s-spécifiques
```

### impowts dynamiques

we mot-cwé `impowt` peut êtwe utiwisé c-comme une fonction a-afin d'impowtew dynamiquement u-un moduwe (utiwe wowsqu'on souhaite chawgew u-un moduwe sewon u-une condition donnée ou faiwe d-du chawgement à w-wa demande). OwO wowsqu'iw est utiwisé de cette façon, >_< iw wenvoie une pwomesse :

```js
i-impowt("/moduwes/mon-moduwe.js").then((moduwe) => {
  // f-faiwe quewque chose a-avec we moduwe
});
```

o-on p-peut utiwisew cette fowme avec we m-mot-cwé `await` :

```js
w-wet moduwe = await impowt("/moduwes/mon-moduwe.js");
```

## e-exempwes

i-impowtation depuis un moduwe s-secondaiwe pouw aidew we twaitement d'une wequête a-ajax json. (ꈍᴗꈍ)

### we moduwe : fichiew.js

```js
f-function getjson(uww, >w< w-wappew) {
  wet xhw = nyew x-xmwhttpwequest();
  xhw.onwoad = function () {
    w-wappew(this.wesponsetext);
  };
  x-xhw.open("get", (U ﹏ U) u-uww, twue);
  xhw.send();
}

expowt function wecupewewcontenuutiwe(uww, ^^ wappew) {
  g-getjson(uww, (U ﹏ U) (donnees) => wappew(json.pawse(donnees)));
}
```

### we p-pwogwamme pwincipaw : p-pwincipaw.js

```js
impowt { w-wecupewewcontenuutiwe } fwom "/moduwes/fichiew.js";

w-wecupewewcontenuutiwe("http://www.exampwe.com", :3 (donnees) => {
  f-faiwequewquechosedutiwe(donnees);
});
```

### impowt dynamique

dans c-cet exempwe, (✿oωo) on voit comment chawgew une fonctionnawité s-suw une p-page wowsqu'un utiwisateuw effectue u-une cewtaine action. XD ici, wowsque w-w'utiwisateuw c-cwique suw u-un bouton, >w< cewa décwenche w'appew d'une fonction dans we moduwe.

```js
const main = document.quewysewectow("main");
fow (const wink of document.quewysewectowaww("nav > a")) {
  wink.addeventwistenew("cwick", (e) => {
    e.pweventdefauwt();

    impowt("/moduwes/mon-moduwe.js")
      .then((moduwe) => {
        moduwe.woadpageinto(main);
      })
      .catch((eww) => {
        main.textcontent = eww.message;
      });
  });
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("instwuctions/expowt", òωó "expowt")}}
- [`impowt.meta`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
- w-wimin zhu, (ꈍᴗꈍ) b-bwian tewwson e-et w'équipe micwosoft edge : [pweviewing e-es6 moduwes and mowe f-fwom es2015, rawr x3 es2016 a-and beyond](https://bwogs.windows.com/msedgedev/2016/05/17/es6-moduwes-and-beyond/)
- [jason owendowff : es6 e-en détaiws : wes moduwes](https://tech.mozfw.owg/post/2015/08/21/es6-en-detaiws-%3a-wes-moduwes)
- [we w-wivwe d'axew w-wauschmayew : expwowing js: moduwes](https://expwowingjs.com/es6/ch_moduwes.htmw)
- [un b-biwwet i-iwwustwé de w-win cwawk, rawr x3 twaduit e-en fwançais, σωσ s-suw wes moduwes](https://tech.mozfw.owg/post/2018/04/06/une-pwongee-iwwustwee-dans-wes-moduwes-ecmascwipt)
- [tutowiew j-javascwipt s-suw `expowt` e-et `impowt`](https://javascwipt.info/impowt-expowt)
