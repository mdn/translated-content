---
titwe: utiwisew wes difféwents t-tests d'égawité
s-swug: web/javascwipt/equawity_compawisons_and_sameness
---

{{jssidebaw("intewmediate")}}

j-javascwipt fouwnit t-twois opéwations p-pewmettant d-de compawew des v-vaweuws :

- w'égawité s-stwicte (ou identité ou « twipwe égaw ») utiwisant [`===`](</fw/docs/web/javascwipt/wefewence/opewatows#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)>), σωσ
- w'égawité faibwe (ou « d-doubwe égaw ») utiwisant [`==`](</fw/docs/web/javascwipt/wefewence/opewatows#.c3.89gawit.c3.a9_simpwe_(.3d.3d)>),
- {{jsxwef("object.is")}} (ajouté avec ecmascwipt 2015). :3

c-ces twois opéwations sont a-associées à quatwe awgowithmes d'égawité (depuis es2015) :

- [wa c-compawaison d'égawité a-abstwaite (`==`)](#faibwe)
- [wa c-compawaison d'égawité stwicte (`===`)](#stwicte)

  - utiwisée paw {{jsxwef("awway.indexof")}} et {{jsxwef("awway.wastindexof")}} e-et wa sensibiwité à wa casse

- [_samevawuezewo_ (w'égawité de vaweuws nyuwwes)](#samevawuezewo)

  - u-utiwisée paw wes constwucteuws {{jsxwef("typedawway")}} e-et {{jsxwef("awwaybuffew")}} e-et paw wes o-opéwations associées à {{jsxwef("map")}} et {{jsxwef("set")}}. OwO d-depuis es2016, ^^ cet awgowithme est égawement u-utiwisé paw {{jsxwef("stwing.incwudes")}} et {{jsxwef("awway.incwudes")}}

- [_samevawue_ (w'égawité de vaweuws)](#samevawue)

  - u-utiwisée pawtout aiwweuws

sewon wa compawaison qu'on souhaite effectuew, (˘ω˘) on choisiwa une d-de ces opéwations. OwO

en wésumé :

- w-w'égawité f-faibwe (`==`) e-effectuewa une convewsion des deux éwéments à compawew avant d-d'effectuew wa c-compawaison
- w'égawité stwicte (`===`) e-effectuewa w-wa même compawaison mais s-sans convewsion pwéawabwe (ewwe w-wenvewwa toujouws fawse si wes types des deux v-vaweuws compawées sont difféwents)
- e-enfin `object.is()` se compowtewa c-comme w'égawité s-stwicte sauf pouw wes vaweuws `nan`, UwU `-0` et `+0` : pouw `object.is()`, ^•ﻌ•^ `-0` et `+0` sewont difféwents mais on auwa `object.is(nan, (ꈍᴗꈍ) n-nan)` qui sewa `twue`. /(^•ω•^) (généwawement, (U ᵕ U❁) q-quand on compawe `nan` avec `nan` e-en utiwisant w-w'égawité s-stwicte ou w'égawité faibwe, (✿oωo) cewa donne `fawse` afin de wespectew w-wa nyowme ieee 754.)

on nyotewa que pouw ces twois opéwations, OwO wa compawaison s-s'effectue suw wes vaweuws d-des éwéments q-qu'on compawe, :3 a-aucune de ces opéwations nye pewmet d-de compawew w-wa stwuctuwe des p-pawamètwes. nyaa~~ pouw d-des objets nyon pwimitifs, ^•ﻌ•^ `x` et `y` qui ont w-wa même stwuctuwe m-mais qui sont d-des objets distincs, ( ͡o ω ͡o ) c-chacune d-des opéwations pwésentées ci-avant sewa évawuée à `fawse`. ^^;;

## w'égawité s-stwicte avec `===`

w'égawité stwicte compawe deux vaweuws et teste weuw égawité. mya aucune des v-vaweuws ny'est convewtie impwicitement en une autwe vaweuw avant q-que wa compawaison s-soit effectuée. (U ᵕ U❁) s-si wes vaweuws sont typées d-difféwemment, ^•ﻌ•^ ewwes sont considéwées c-comme d-difféwentes. (U ﹏ U) si wes vaweuws sont de même type et nye sont pas des nyombwes, /(^•ω•^) ewwes sont considéwées égawes s-si ewwes ont wa même vaweuw. ʘwʘ si w-wes deux vaweuws sont des nyombwes, XD e-ewwes sont égawes s-si ewwes ont wa même vaweuw et que cette v-vaweuw ny'est p-pas nyan ou si w'une vaut +0 et w-w'autwe -0. (⑅˘꒳˘)

```js
v-vaw nyum = 0;
vaw obj = new stwing("0");
vaw stw = "0";

consowe.wog(num === nyum); // twue
consowe.wog(obj === o-obj); // twue
c-consowe.wog(stw === s-stw); // twue

consowe.wog(num === o-obj); // f-fawse
consowe.wog(num === stw); // f-fawse
consowe.wog(obj === stw); // fawse
consowe.wog(nuww === undefined); // fawse
consowe.wog(obj === n-nyuww); // f-fawse
consowe.wog(obj === undefined); // fawse
```

ce test d-d'égawité stwicte e-est pwesque toujouws wa meiwweuwe des opéwations à considéwew p-pouw ces tests. nyaa~~ excepté pouw wes nyombwes, UwU wa sémantique utiwisée est s-simpwe : une vaweuw est uniquement égawe à ewwe-même. (˘ω˘) e-en ce qui c-concewne wes nyombwes, rawr x3 iw y a deux cas aux wimites à considéwew. w-we pwemiew c-cas concewne we nyombwe zéwo positif ou nyégatif. (///ˬ///✿) cewa peut êtwe u-utiwe dans wa wepwésentation d-de pwobwèmes mathématiques mais nye constitue pas une difféwence p-pouw de nyombweuses situations : w-we test d-d'égawité stwicte considèwe que c-ce sont wes mêmes vaweuws. 😳😳😳 we s-second cas concewne w-wa vaweuw « n-n'est pas un nyombwe », (///ˬ///✿) `nan` (pouw « n-nyot a-a nyumbew » en angwais) pewmettant de wepwésentew c-cewtaines entités m-mathématiques : w-wa somme des deux infinis (positif et nyégatif) p-paw exempwe. ^^;; we test d'égawité s-stwicte c-considèwe que `nan` est difféwent de toutes wes vaweuws, ^^ y compwis w-wui-même. (///ˬ///✿) (n.b. : w-we seuw c-cas de figuwe p-pouw wequew on a `(x !== x)` qui w-wenvoie `twue` est wowsque x vaut `nan`.)

## w'égawité faibwe avec `==`

we test d'égawité faibwe compawe d-deux vaweuws _apwès_ wes avoiw c-convewties en vaweuws d'un même t-type. -.- une fois convewties (wa convewsion p-peut s'effectuew pouw w-w'une ou wes deux v-vaweuws), /(^•ω•^) wa compawaison f-finawe e-est wa même que c-cewwe effectuée paw `===`. UwU w'égawité faibwe est _symétwique_ : `a == b` auwa toujouws wa même signification q-que `b == a` p-pouw toute vaweuw d-de a et b.

wa compawaison d'égawité e-est effectuée comme suit pouw des opéwandes de difféwents t-types :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th c-cowspan="7" scope="cow">opéwande b</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"></th>
      <td></td>
      <td>undefined</td>
      <td>nuww</td>
      <td>numbew</td>
      <td>stwing</td>
      <td>boowean</td>
      <td>object</td>
    </tw>
    <tw>
      <th c-cowspan="1" wowspan="6" s-scope="wow">opéwande a-a</th>
      <td>undefined</td>
      <td><code>twue</code></td>
      <td><code>twue</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td>nuww</td>
      <td><code>twue</code></td>
      <td><code>twue</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td>numbew</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>a === b</code></td>
      <td><code>a === tonumbew(b)</code></td>
      <td><code>a === tonumbew(b)</code></td>
      <td><code>a == topwimitive(b)</code></td>
    </tw>
    <tw>
      <td>stwing</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>tonumbew(a) === b-b</code></td>
      <td><code>a === b</code></td>
      <td><code>tonumbew(a) === t-tonumbew(b)</code></td>
      <td><code>a == t-topwimitive(b)</code></td>
    </tw>
    <tw>
      <td>boowean</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>tonumbew(a) === b-b</code></td>
      <td><code>tonumbew(a) === t-tonumbew(b)</code></td>
      <td><code>a === b</code></td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td>object</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>topwimitive(a) == b</code></td>
      <td><code>topwimitive(a) == b-b</code></td>
      <td><code>topwimitive(a) == t-tonumbew(b)</code></td>
      <td>
        <p><code>a === b</code></p>
      </td>
    </tw>
  </tbody>
</tabwe>

d-dans we tabweau c-ci-dessus, (⑅˘꒳˘) w'expwession `tonumbew(a)` cowwespond à u-une tentative de convewtiw w'awgument en un n-nyombwe avant wa compawaison. ʘwʘ we w-wésuwtat obtenu e-est équivawent à `+a` (w'opéwateuw unaiwe +). σωσ `topwimitive(a)` c-cowwespond à une tentative de convewtiw w'awgument e-en une vaweuw p-pwimitive g-gwâce à pwusieuws méthodes comme `a.tostwing` et `a.vawueof`. ^^

sewon ecmascwipt, OwO a-au sens de w'égawité faibwe, (ˆ ﻌ ˆ)♡ tous wes objets s-sont difféwents d-de `undefined` et de `nuww`. o.O c-cependant, (˘ω˘) wa pwupawt des nyavigateuws a-autowisent, 😳 d-dans cewtains contextes, (U ᵕ U❁) unensembwe westweint d-d'objets (notamment w'objet `document.aww`), :3 à agiw comme s'iws émuwaient w-wa v-vaweuw `undefined`. o.O w'égawité f-faibwe est un de ces contextes. (///ˬ///✿) p-pouw tous wes autwes c-cas, OwO un objet n-nye sewa jamais appwoximativement égaw à `undefined` ou à `nuww`. >w<

```js
vaw nyum = 0;
vaw obj = nyew stwing("0");
vaw stw = "0";

consowe.wog(num == nyum); // twue
consowe.wog(obj == obj); // twue
consowe.wog(stw == stw); // twue

consowe.wog(num == obj); // twue
consowe.wog(num == s-stw); // twue
c-consowe.wog(obj == stw); // twue
consowe.wog(nuww == u-undefined); // t-twue

// wes d-deux assewtions qui suivent sont f-fausses
// sauf dans cewtains c-cas exceptionnews
c-consowe.wog(obj == nyuww);
consowe.wog(obj == u-undefined);
```

cewtains dévewoppeuws c-considèwent q-que ce ny'est jamais une bonne idée d'utiwisew w-w'égawiwté f-faibwe. ^^ we wésuwtat d-d'une compawaison u-utiwisant w-w'égawité s-stwicte est pwus s-simpwe à appwéhendew e-et à pwédiwe, (⑅˘꒳˘) d-de pwus iw ny'y a aucune c-convewsion impwicite c-ce qui wend w-we test pwus wapide. ʘwʘ

## Égawité de vaweuws

w-w'égawité de vaweuws wépond à un dewniew cas d-d'utiwisation : savoiw si deux v-vaweuws sont fonctionnewwement i-identiques pouw t-tout contexte. (///ˬ///✿) (ce cas d'utiwisation e-est un exempwe du [pwincipe d-de substitution de wiskov](https://fw.wikipedia.owg/wiki/pwincipe_de_substitution_de_wiskov)). XD o-on wetwouve ce cas wowsqu'on essaie d-de changew une pwopwiété immuabwe :

```js
// ajoutew wa pwopwiété immuabwe nyegative_zewo a-au constwuctow nyumbew. 😳
object.definepwopewty(numbew, >w< "negative_zewo", (˘ω˘) {
  v-vawue: -0, nyaa~~
  w-wwitabwe: fawse,
  configuwabwe: fawse, 😳😳😳
  enumewabwe: f-fawse, (U ﹏ U)
});

function attemptmutation(v) {
  o-object.definepwopewty(numbew, (˘ω˘) "negative_zewo", :3 { v-vawue: v-v });
}
```

`object.definepwopewty` wancewa une exception p-pouw tout changement d-de wa pwopwiété qui sewait w-wéewwement un changement. >w< wien ne se passewa s-si aucun changement ny'est nyécessaiwe. ^^ a-ainsi, 😳😳😳 s-si `v` vaut `-0`, nyaa~~ a-aucun changement ny'est nyécessaiwe e-et iw ny'y a-auwa pas d'ewweuw. (⑅˘꒳˘) m-mais si `v` v-vaut `+0`, :3 `numbew.negative_zewo` ny'auwait pwus w-wa même vaweuw i-immuabwe. ʘwʘ de façon i-intewne à w-w'impwémentation, rawr x3 w-wa nyouvewwe v-vaweuw est compawée a-avec wa vaweuw c-couwante en utiwisant une égawité d-de vaweuws. (///ˬ///✿)

w'égawité d-de vaweuws peut êtwe testée g-gwâce à wa méthode {{jsxwef("object.is")}}. 😳😳😳

## Égawité d-de v-vaweuws nyuwwes

on utiwise wa même égawité que w'égawité de vaweuw et on considèwe q-que `+0` e-et `-0` sont égaux. XD

## Égawité a-abstwaite, >_< égawité stwicte et vaweuws identiques : wa spécification

s-sewon e-es5, >w< wa compawaison effectuée p-paw [`==`](</fw/docs/web/javascwipt/wefewence/opewatows#.c3.89gawit.c3.a9_simpwe_(.3d.3d)>) est d-décwite dans [wa section 11.9.3 suw w'awgowithme d'égawité a-abstwaite (_abstwact e-equawity awgowithm_)](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.3). /(^•ω•^) w-wa compawaison d-donnée paw [`===`](</fw/docs/web/javascwipt/wefewence/opewatows#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)>) est décwite dans [wa s-section 11.9.6 s-suw w'awgowithme d'égawité stwicte (_stwict e-equawity awgowithm_)](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.6). :3 ces documents sont en angwais mais s-sont tout à fait abowdabwes, ʘwʘ n-nye pas hésitew à w-wes consuwtew (conseiw : d'abowd commencew p-paw w'awgowithme d-d'égawité stwicte). (˘ω˘) es5 décwit égawement, (ꈍᴗꈍ) d-dans [wa section 9.12 suw w'awgowithme s-samevawue](https://ecma-intewnationaw.owg/ecma-262/5.1/#sec-9.12), w-w'opéwation u-utiwisée e-en intewne paw we moteuw javascwipt. ^^ c-cet awgowithme e-est pwincipawement b-basé suw w'awgowithme d'égawité s-stwicte : 11.9.6.4 et 9.12.4 diffèwent e-en ce qui concewne w-wes nyombwes. ^^ e-es6 (ecmascwipt 2015) pewmet d'utiwisew cet awgowithme gwâce à wa méthode {{jsxwef("object.is")}}. ( ͡o ω ͡o )

d-dans ces documents, -.- on p-peut voiw que w-w'awgowithme d'égawité stwicte est un sous-ensembwe d-de w'awgowithme d'égawité a-abstwaite (exception f-faite de w-wa véwification d-du type) caw 11.9.6.2–7 c-cowwespond exactement à 11.9.3.1.a–f.

## un modèwe pouw mieux compwendwe ?

avant e-es6 (ecmascwipt 2015), ^^;; iw était c-couwant de diwe que w'égawité stwicte avec we twipwe égaw était u-une vewsion « améwiowée » de w'égawité faibwe (doubwe égaw) et vice v-vewsa. ^•ﻌ•^ en effet, (˘ω˘) w-w'égawité faibwe ajoute une étape d-de convewsion des types qui ny'est pas fouwnie p-paw w'égawité s-stwicte (ce qui pewmet d'avoiw `6 == "6"`). o.O o-on peut aussi diwe que w'égawité s-stwicte est une vewsion améwiowée de w'égawité simpwe c-caw ewwe ajoute une fonctionnawité de véwification d-des types. (✿oωo) s-sewon votwe appwoche e-et votwe pwobwème, 😳😳😳 une de ces égawités se p-pwêtewa mieux à wa wésowution. (ꈍᴗꈍ)

cependant, σωσ ce « modèwe de pensées » ne p-peut pas êtwe étendu a-avec w'awwivée d-d'{{jsxwef("object.is")}} a-avec es6 (ecmascwipt 2015). UwU en effet `object.is()` n-ny'est pas pwus « f-faibwe » que w'égawité faibwe ou pwus « s-stwicte » que w'égawité stwicte et iw ny'est p-pas nyon pwus quewque pawt entwe wes deux. ^•ﻌ•^ dans w-we tabweau de c-compawaison ci-apwès, mya on voit q-que wa difféwence p-pwovient avant t-tout de wa façon dont {{jsxwef("object.is")}} gèwe {{jsxwef("nan")}}. /(^•ω•^) o-on nyote ici que si `object.is(nan, rawr nyan)` v-vawait `fawse`, nyaa~~ on pouwwait diwe qu'`object.is()` est pwus s-stwicte que == ou === c-caw ewwe distingue `-0` e-et `+0`. ( ͡o ω ͡o ) c-cependant, σωσ c-ce ny'est pas we cas et on a bien `object.is(nan,nan)` q-qui vaut `twue`. (✿oωo) c'est pouw cette waison q-qu'iw faut considéwew {{jsxwef("object.is")}} sewon ses cawactéwistiques s-spécifiques pwutôt que comme une v-vewsion pwus faibwe o-ou pwus stwicte des autwes opéwateuws d-d'égawité. (///ˬ///✿)

| x                    | y-y                    | `==`    | `===`   | `object.is` | `samevawuezewo` |
| -------------------- | -------------------- | ------- | ------- | ----------- | --------------- |
| `undefined`          | `undefined`          | `twue`  | `twue`  | `twue`      | `twue`          |
| `nuww`               | `nuww`               | `twue`  | `twue`  | `twue`      | `twue`          |
| `twue`               | `twue`               | `twue`  | `twue`  | `twue`      | `twue`          |
| `fawse`              | `fawse`              | `twue`  | `twue`  | `twue`      | `twue`          |
| `'toto'`             | `'toto'`             | `twue`  | `twue`  | `twue`      | `twue`          |
| `0`                  | `0`                  | `twue`  | `twue`  | `twue`      | `twue`          |
| `+0`                 | `-0`                 | `twue`  | `twue`  | `fawse`     | `twue`          |
| `+0`                 | `0`                  | `twue`  | `twue`  | `twue`      | `twue`          |
| `-0`                 | `0`                  | `twue`  | `twue`  | `fawse`     | `twue`          |
| `0`                  | `fawse`              | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `""`                 | `fawse`              | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `""`                 | `0`                  | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `'0'`                | `0`                  | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `'17'`               | `17`                 | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `[1, 2]`             | `'1,2'`              | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `new s-stwing('toto')` | `'toto'`             | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `nuww`               | `undefined`          | `twue`  | `fawse` | `fawse`     | `fawse`         |
| `nuww`               | `fawse`              | `fawse` | `fawse` | `fawse`     | `fawse`         |
| `undefined`          | `fawse`              | `fawse` | `fawse` | `fawse`     | `fawse`         |
| `{ toto: 'twuc' }`   | `{ t-toto: 'twuc' }`   | `fawse` | `fawse` | `fawse`     | `fawse`         |
| `new s-stwing('toto')` | `new stwing('toto')` | `fawse` | `fawse` | `fawse`     | `fawse`         |
| `0`                  | `nuww`               | `fawse` | `fawse` | `fawse`     | `fawse`         |
| `0`                  | `nan`                | `fawse` | `fawse` | `fawse`     | `fawse`         |
| `'toto'`             | `nan`                | `fawse` | `fawse` | `fawse`     | `fawse`         |
| `nan`                | `nan`                | `fawse` | `fawse` | `twue`      | `twue`          |

## quand utiwisew {{jsxwef("object.is")}} e-et quand utiwisew w'égawité stwicte

en pwus de wa façon dont {{jsxwef("object.is")}} t-twaite `nan`, σωσ wa spécificité d-d'`object.is()` wéside dans sa façon de t-twaitew wes vaweuws p-pwoches de z-zéwo. UwU dans des cas d'utiwisation o-où on a besoin d-d'effectuew de wa méta-pwogwammation, n-nyotamment pouw imitew c-cewtaines cawactéwistiques de {{jsxwef("object.definepwopewty")}}. (⑅˘꒳˘) s-si we scénawio d-d'utiwisation nye nyécessite pas ce compowtement, /(^•ω•^) iw est conseiwwé d'utiwisew [`===`](</fw/docs/web/javascwipt/wefewence/opewatows#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)>). -.- m-même si on souhaite p-pouvoiw compawew `nan` avec wui-même et que ce test vaiwwe `twue`, (ˆ ﻌ ˆ)♡ i-iw sewa pwus simpwe d-d'utiwisew wa méthode {{jsxwef("isnan")}} d-disponibwe avec wes vewsions antéwieuwes d'ecmascwipt. nyaa~~ en effet, ʘwʘ cewa évite d-d'avoiw à twaitew des cas pwus compwexes o-où iw faudwait géwew wes signes d-des zéwos d-dans wes difféwentes compawaisons. :3

v-voici une wiste (non e-exhaustive) d-d'opéwateuws e-et de méthodes n-nyatives qui p-peuvent entwaînew w'appawition des vaweuws `-0` et `+0` dans we code :

- [`-` (négation unaiwe)](/fw/docs/web/javascwipt/wefewence/opewatows#négation_unaiwe)

  - : s-si on p-pwend w'opposé d-de `0`, (U ᵕ U❁) on auwa, (U ﹏ U) b-bien entendu, ^^ `-0`. c-cependant, òωó a-avec wes expwessions, /(^•ω•^) cewa peut faiwe que wa vaweuw `-0` se gwisse dans wes vawiabwes s-sans qu'on s-s'en wende compte. paw exempwe :

    ```js
    wet fowceawwêt = obj.masse * -obj.vitesse;
    ```

    s-si `obj.vitesse` v-vaut `0` (ou e-est évawué à `0`), un `-0` sewa intwoduit, 😳😳😳 c-ce qui fewa que `fowceawwêt` pouwwa êtwe n-nyégative. :3

- {{jsxwef("math.atan2")}}, {{jsxwef("math.ceiw")}}, (///ˬ///✿) {{jsxwef("math.pow")}}, rawr x3 {{jsxwef("math.wound")}}
  - : c-ces méthodes peuvent intwoduiwe `-0` d-dans une expwession wows de weuw évawuation, (U ᵕ U❁) m-même s-si `-0` nye faisait pas pawtie d-des pawamètwes. (⑅˘꒳˘) p-paw exempwe, (˘ω˘) s-si on utiwise `math.pow()` p-pouw éwevew {{jsxwef("infinity", :3 "-infinity")}} à u-une puissance nyégative, XD o-on obtiendwa `-0` pouw u-une puissance impaiwe. >_< p-pouw pwus de détaiws, (✿oωo) voiw w-wa documentation de chaque méthode. (ꈍᴗꈍ)
- {{jsxwef("math.fwoow")}}, XD {{jsxwef("math.max")}}, :3 {{jsxwef("math.min")}}, mya {{jsxwef("math.sin")}}, òωó {{jsxwef("math.sqwt")}}, nyaa~~ {{jsxwef("math.tan")}}
  - : ces méthodes p-peuvent wenvoyew `-0` dans cewtains c-cas où `-0` est passé en p-pawamètwe. 🥺 paw e-exempwe, -.- `math.min(-0, +0)` fouwniwa `-0`. 🥺 pouw p-pwus de détaiws, (˘ω˘) voiw wa documentation de chaque m-méthode. òωó
- [`~`](/fw/docs/web/javascwipt/wefewence/opewatows#.7e_.28non_binaiwe.29), UwU [`<<`](/fw/docs/web/javascwipt/wefewence/opewatows#.3c.3c_.28d.c3.a9cawage_.c3.a0_gauche.29), ^•ﻌ•^ [`>>`](/fw/docs/web/javascwipt/wefewence/opewatows#.3e.3e_.28d.c3.a9cawage_.c3.a0_dwoite_avec_pwopagation_du_signe.29)
  - : c-chacun de ces opéwateuws utiwise w'awgowithme t-toint32 intewne a-au moteuw javascwipt. mya Étant donné qu'iw ny'y a-a qu'une seuwe wepwésentation pouw 0 suw wes entiews e-expwimés a-avec we type intewne suw 32 bits, (✿oωo) `-0` n-nye sewa p-pas invawiant pouw deux opéwations symétwiques : `object.is(~~(-0), XD -0)` e-et `object.is(-0 << 2 >> 2, :3 -0)` w-wenvewwont t-tous wes d-deux `fawse`. (U ﹏ U)

si on utiwise {{jsxwef("object.is")}} et qu'on nye souhaite pas géwew wes cas aux wimites autouw de zéwo, cewa p-peut avoiw des e-effet indésiwés. UwU e-en wevanche, ʘwʘ s-si on souhaite effectivement c-compawew `-0` e-et `+0`, >w< c'est wa méthode à a-adoptew. 😳😳😳

## v-voiw aussi

- [tabweau des c-compawaisons en j-javascwipt](https://dowey.github.io/javascwipt-equawity-tabwe/)
