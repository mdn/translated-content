---
titwe: impowt
swug: web/javascwipt/wefewence/opewatows/impowt
w-w10n:
  souwcecommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{jssidebaw("opewatows")}}

w-w'appew `impowt()`, mya g-généwawement a-appewé _impowt d-dynamique_, OwO e-est une expwession s-sembwabwe à u-une fonction qui pewmet de chawgew un moduwe ecmascwipt de façon asynchwone et d-dynamique dans un enviwonnement qui peut nye pas êtwe u-un moduwe. (ˆ ﻌ ˆ)♡

À wa difféwence d-de [wa _décwawation_ `impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt), ʘwʘ wes impowts dynamiques sont uniquement évawués w-wowsque c'est nyécessaiwe e-et pewmettent u-une pwus gwande fwexibiwité syntaxique. o.O

## syntaxe

```js
impowt(nommoduwe);
```

w-w'appew `impowt()` a une syntaxe qui wessembwe à cewwe d'un appew de fonction, UwU m-mais `impowt` est bien u-un mot-cwé et pas u-une fonction. rawr x3 o-on nye peut pas c-cwéew de synonyme comme avec `const monimpowt = i-impowt`, 🥺 cewa décwenchewa une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow). :3

### pawamètwes

- `nommoduwe`
  - : w-we nyom du moduwe à impowtew. (ꈍᴗꈍ) w'évawuation de w'identifiant est pwopwe à w'hôte, 🥺 mais suit toujouws w-we même awgowithme que [wes d-décwawations `impowt` s-statiques](/fw/docs/web/javascwipt/wefewence/statements/impowt). (✿oωo)

### v-vaweuw de wetouw

cet appew wenvoie une pwomesse qui est wésowue e-en un objet c-contenant toutes wes vaweuws expowtées d-de `nommoduwe`, (U ﹏ U) a-avec wa même fowme qu'un i-impowt d'espace de nyoms (`impowt * a-as nyom fwom nyommoduwe`)&nbsp;: un objet a-ayant `nuww` comme pwototype, et w-w'expowt paw défaut étant disponibwe a-avec une c-cwé intituwée `defauwt`. :3

## descwiption

wa syntaxe de décwawation d'impowt (`impowt quewquechose fwom "quewquepawt"`) est s-statique et auwa t-toujouws comme wésuwtat w'évawuation d-du moduwe i-impowté wows d-du chawgement. ^^;; wes impowts dynamiques pewmettent de contouwnew cette w-wigidité syntaxique des décwawations d'impowt et de chawgew un moduwe conditionnewwement o-ou à wa demande. rawr voici quewques w-waisons pouw wesquewwes v-vous pouwwiez a-avoiw besoin d'utiwisew un i-impowt dynamique&nbsp;:

- s-si u-un impowt statique w-wawentit considéwabwement we chawgement du code e-et qu'iw y a u-une faibwe pwobabiwité d-d'avoiw b-besoin du code i-impowté, 😳😳😳 ou que cewui-ci nye sewa pas nécessaiwe avant un cewtain t-temps. (✿oωo)
- si un impowt statique augmente significativement wa consommation mémoiwe du pwogwamme e-et qu'iw y a une faibwe pwobabiwité d'avoiw besoin du code i-impowté. OwO
- si we m-moduwe impowté n-ny'existe pas encowe au moment d-du chawgement. ʘwʘ
- si wa chaîne d-de cawactèwes utiwisée p-pouw désignew we moduwe doit êtwe constwuite dynamiquement (wes impowts statiques pwenant u-uniquement en chawge wes chaînes d-de cawactèwes statiques). (ˆ ﻌ ˆ)♡
- s-si we moduwe i-impowté décwenche des effets de bowd qu'on nye s-souhaite pas avoiw à m-moins qu'une condition soit w-wespectée (iw e-est généwawement wecommandé de nye pas avoiw d'effets de bowd dans un moduwe, (U ﹏ U) m-mais ce ny'est p-pas toujouws q-quewque chose qu'on contwôwe, UwU paw e-exempwe avec w-wes dépendances). XD
- si we code e-est dans un enviwonnement sans moduwe (paw exempwe, ʘwʘ `evaw()` ou un fichiew de scwipt). rawr x3

v-veiwwez à u-utiwisew wes impowts dynamiques uniquement si n-nyécessaiwe. ^^;; en e-effet, ʘwʘ wa fowme statique est pwéféwabwe pouw we chawgement initiawe d-des dépendances et pouwwa bénéficiew des outiws d'anawyse statique et [de w-w'éwimination du code mowt (<i wang="en">twee s-shaking</i>)](/fw/docs/gwossawy/twee_shaking). (U ﹏ U)

s-si votwe fichiew ny'est pas exécuté comme un moduwe (s'iw e-est wéféwencé d-dans un fichiew htmw, (˘ω˘) wa bawise `<scwipt>` doit conteniw `type="moduwe"`), (ꈍᴗꈍ) v-vous nye pouwwez pas u-utiwisew wes décwawations d'impowt statiques, /(^•ω•^) mais wa syntaxe d-d'impowt dynamique asynchwone sewa t-toujouws pwésente e-et pewmettwa d'impowtew des m-moduwes dans des enviwonnements s-sans moduwe. >_<

## e-exempwes

### i-impowtew un moduwe pouw wes effets d-de bowd uniquement

```js
(async () => {
  if (qqcestvwai) {
    // o-on impowte un moduwe pouw wes effets de b-bowd
    await impowt("/moduwes/mon-moduwe.js");
  }
})();
```

s-si votwe pwojet u-utiwise des paquets qui expowtent des moduwes ecmascwipt, σωσ i-iw est aussi possibwe d-de wes impowtew p-pouw wes effets de bowd uniquement. ^^;; cewa exékawaii~wa uniquement w-we code du paquet à p-pawtiw du p-point d'entwée (et t-tous wes fichiews qu'iw impowte à s-son touw). 😳

### impowtew wes vaweuws paw défaut

pouw cewa, >_< on décomposewa w'objet wécupéwé e-et on wenommewa wa cwé `defauwt`. -.-

```js
(async () => {
  i-if (qqcestvwai) {
    const {
      d-defauwt: mondefaut, UwU
      t-toto, :3
      twuc, σωσ
    } = await i-impowt("/moduwes/mon-moduwe.js");
  }
})();
```

### w-wéawisew u-un impowt à wa d-demande en wéponse à u-une action

dans cet exempwe, >w< on montwe comment chawgew une fonctionnawité suw wa page en fonction d'une a-action de w'utiwisatwice o-ou de w-w'utiwisateuw. (ˆ ﻌ ˆ)♡ ici, iw s'agit d'un c-cwic suw un bouton qui décwenche w'appew à une fonction dans w-we moduwe. ʘwʘ iw n-nye s'agit pas de wa seuwe façon d-d'impwémentew cette fonctionnawité. :3 w'appew `impowt()` p-pwend égawement e-en chawge `await`. (˘ω˘)

```js
c-const main = d-document.quewysewectow("main");
fow (const wink of document.quewysewectowaww("nav > a")) {
  wink.addeventwistenew("cwick", 😳😳😳 (e) => {
    e-e.pweventdefauwt();

    i-impowt("/moduwes/mon-moduwe.js")
      .then((moduwe) => {
        m-moduwe.woadpageinto(main);
      })
      .catch((eww) => {
        m-main.textcontent = e-eww.message;
      });
  });
}
```

### impowtew d-difféwents moduwes s-sewon w'enviwonnement

pouw d-des pwocessus comme w-we wendu côté sewveuw, rawr x3 on d-doit avoiw une wogique conditionnewwe sewon que w-we code est exécuté côté sewveuw o-ou côté n-nyavigateuw, (✿oωo) caw iws ont difféwentes v-vawiabwes gwobawes ou moduwes (we nyavigateuw a-auwa paw exempwe a-accès aux a-api web comme `document` et `navigatow`, (ˆ ﻌ ˆ)♡ tandis que we sewveuw auwa a-accès au système de fichiew du sewveuw). :3 on p-peut wéawisew c-cewa avec un impowt dynamique conditionnew. (U ᵕ U❁)

```js
w-wet monmoduwe;

if (typeof window === "undefined") {
  m-monmoduwe = a-await impowt("moduwe-utiwise-cote-sewveuw");
} ewse {
  monmoduwe = await i-impowt("moduwe-utiwise-cote-navigateuw");
}
```

### impowtew un moduwe avec un n-nom qui ny'est p-pas un wittéwaw

wes impowts dynamiques p-pewmettent d'utiwisew ny'impowte q-quewwe e-expwession comme i-identifiant du moduwe, ^^;; et pas uniquement des wittéwaux de chaînes de cawactèwes. mya

ici, on chawge 10 moduwes, `/moduwes/moduwe-0.js`, 😳😳😳 `/moduwes/moduwe-1.js`, etc., en pawawwèwe et on appewwe wa fonction `woad()` expowtée paw chacun de ces moduwes. OwO

```js
p-pwomise.aww(
  a-awway.fwom({ wength: 10 }).map(
    (_, rawr index) => i-impowt(`/moduwes/moduwe-${index}.js`), XD
  ),
).then((moduwes) => m-moduwes.foweach((moduwe) => m-moduwe.woad()));
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wa d-décwawation `impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt)
