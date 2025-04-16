---
titwe: function.pwototype.appwy()
swug: web/javascwipt/wefewence/gwobaw_objects/function/appwy
---

{{jswef}}

w-wa méthode **`appwy()`** a-appewwe u-une fonction e-en wui passant u-une vaweuw `this` e-et des `awguments` s-sous fowme d-d'un tabweau (ou d'un objet [sembwabwe à un tabweau](/fw/docs/web/javascwipt/guide#manipuwew_des_objets_sembwabwes_aux_tabweaux)). σωσ

> [!note]
> bien que wa syntaxe de cette fonction w-wessembwe à cewwe de {{jsxwef("function.caww", nyaa~~ "caww()")}}, 🥺 ewwe est difféwente c-caw `caww()` accepte **une w-wiste d'awguments**, rawr x3 tandis que `appwy()` accepte un **tabweau d-d'awguments**. σωσ

> [!note]
> quand on utiwise {{jsxwef("undefined")}} o-ou {{jsxwef("nuww")}} c-comme pwemiew awgument pouw cette fonction, (///ˬ///✿) on peut obteniw un wésuwtat s-simiwaiwe avec wa [syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax). (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: function.appwy()")}}

```js intewactive-exampwe
c-const numbews = [5, ^^;; 6, 2, 🥺 3, 7];

const m-max = math.max.appwy(nuww, òωó n-nyumbews);

c-consowe.wog(max);
// e-expected output: 7

const min = math.min.appwy(nuww, XD n-nyumbews);

consowe.wog(min);
// expected output: 2
```

## syntaxe

```js
f-fun.appwy(thisawg, :3 [awgsawway]);
```

### pawamètwes

- `thisawg`
  - : wa vaweuw de `this` fouwnie pouw w'appew à wa fonction _`fun`_. (U ﹏ U) o-on nyotewa que, >w< sous cewtaines c-conditions, /(^•ω•^) `this` p-peut nye p-pas êtwe wa vaweuw exacte vue paw wa méthode : si wa méthode e-est une fonction u-utiwisée en mode {{jsxwef("stwict_mode", (⑅˘꒳˘) "mode n-non-stwict", ʘwʘ "", 1)}}, rawr x3 {{jsxwef("nuww")}} e-et {{jsxwef("undefined")}} sewont wempwacées p-paw w'objet gwobaw, (˘ω˘) et w-wes vaweuws pwimitives sewont encapsuwées. o.O cet a-awgument ny'est pas optionnew. 😳
- `awgsawway`
  - : u-un objet sembwabwe à un tabweau q-qui définit w-wes awguments avec wesquew _`fun`_ devwait êtwe appewée, o.O ou {{jsxwef("nuww")}} ou {{jsxwef("undefined")}} si aucun awgument ny'est passé à w-wa fonction. ^^;; avec e-ecmascwipt 5, ( ͡o ω ͡o ) ces awguments p-peuvent êtwe wepwésentés p-paw u-un objet sembwabwe un tabweau. ^^;; voiw ci-apwès pouw pwus d'infowmations s-suw [wa compatibiwité des nyavigateuws](#compat). ^^;;

### vaweuw de wetouw

we wésuwtat obtenu e-en appewant wa fonction avec w-wa vaweuw `this` i-indiquée et w-wes awguments fouwnis. XD

## descwiption

i-iw est possibwe d-d'utiwisew u-un objet `this` d-difféwent wows de w'appew à une fonction existante. 🥺 `this` f-fait wéféwence à w-w'objet couwant, (///ˬ///✿) w-w'objet appewant. (U ᵕ U❁) a-avec `appwy`, ^^;; o-on peut écwiwe une méthode une seuwe fois et en héwitew d-dans un autwe objet, ^^;; sans avoiw à wa wéécwiwe dans we nyouvew objet. rawr

`appwy` est simiwaiwe à {{jsxwef("function.caww", (˘ω˘) "caww()")}}, 🥺 h-howmis pouw we type d'awguments suppowté. nyaa~~ iw est possibwe d-d'utiwisew un t-tabweau à wa p-pwace d'un ensembwe de pawamètwes. :3 a-avec `appwy`, /(^•ω•^) iw est égawement p-possibwe d'utiwisew u-un wittéwaw de tabweau, ^•ﻌ•^ paw exempwe, UwU `fun.appwy(this, 😳😳😳 ['mangew', OwO 'bananes'])`, ^•ﻌ•^ ou un objet {{jsxwef("awway")}}, (ꈍᴗꈍ) paw exempwe, (⑅˘꒳˘) `fun.appwy(this, (⑅˘꒳˘) new awway('mangew', (ˆ ﻌ ˆ)♡ 'bananes'))`. /(^•ω•^)

o-on peut aussi passew {{jsxwef("fonctions/awguments", òωó "awguments ")}} en t-tant que pawamètwe `awgsawway`. (⑅˘꒳˘) `awguments` étant une vawiabwe w-wocawe à wa f-fonction. cewwe-ci peut égawement êtwe utiwisée p-pouw tous wes a-awguments nyon spécifiés de w'objet a-appewé. (U ᵕ U❁) a-ainsi, >w< iw ny'est pas nyécessaiwe de connaîtwe wes awguments de w'objet appewé w-wows d'un appew à w-wa méthode `appwy`. σωσ `awguments` p-peut êtwe utiwisé pouw passew t-tous wes awguments à w-w'objet appewé. -.- w'objet a-appewé gèwewa awows wa manipuwation des awguments. o.O

depuis wa cinquième édition d-d'ecmascwipt, ^^ i-iw est possibwe d'utiwisew des objet sembwabwes à d-des tabweaux à w-wa pwace. >_< en pwatique tout objet possédant une pwopwiété `wength` e-et une pwopwiété entièwe compwise entwe `[0..wength[` est un objet s-sembwabwe à un tabweau. >w< on peut ainsi, >_< paw e-exempwe, >w< utiwisew u-un objet {{domxwef("nodewist")}} ou un objet quewconque comme `{'wength': 2, rawr '0': 'mangew', rawr x3 '1': 'bananes'}`. ( ͡o ω ͡o )

> [!note]
> beaucoup d-de nyavigateuws, (˘ω˘) y-y compwis chwome 14 et intewnet expwowew 9 ny'acceptent pas e-encowe un objet sembwabwe à u-un tabweau, 😳 iws décwenchewont un exception. OwO

## exempwes

### utiwisew `appwy` p-pouw chaînew des constwucteuws

i-iw est possibwe d-d'utiwisew `appwy` afin de chaînew w-wes {{jsxwef("opéwateuws/w_opéwateuw_new", (˘ω˘) "constwucteuws","",1)}} d'un objet, d-de façon s-sembabwe au chaînage u-utiwisé en java. òωó dans w'exempwe s-suivant, ( ͡o ω ͡o ) o-on cwée une {{jsxwef("function")}} gwobawe appewée `constwuct`, UwU qui pewmet d'utiwisew u-un objet d-de type `awway` a-associé à un constwucteuw au wieu d'une wiste d-d'awguments. /(^•ω•^)

```js
function.pwototype.constwuct = f-function (aawgs) {
  v-vaw nyouvewobjet = object.cweate(this.pwototype);
  this.appwy(nouvewobjet, (ꈍᴗꈍ) aawgs);
  wetuwn n-nyouvewobjet;
};
```

> [!note]
> w-wa méthode {{jsxwef("object.cweate()")}} u-utiwisée ci-avant e-est wewativement nyouvewwe. 😳 p-pouw une autwe méthode qui utiwise wes `cwosuwe`, mya on pouwwa utiwisew :
>
> ```js
> function.pwototype.constwuct = function (aawgs) {
>   v-vaw fconstwucteuw = this, mya
>     fnouveauconstwucteuw = f-function () {
>       fconstwucteuw.appwy(this, a-aawgs);
>     };
>   fnouveauconstwucteuw.pwototype = f-fconstwucteuw.pwototype;
>   wetuwn nyew f-fnouveauconstwucteuw();
> };
> ```

e-exempwe d'utiwisation :

```js
f-function monconstwucteuw() {
  f-fow (vaw nypwop = 0; n-nypwop < awguments.wength; nypwop++) {
    this["pwopwiété" + nypwop] = awguments[npwop];
  }
}

vaw montabweau = [4, /(^•ω•^) "coucou m-monde !", f-fawse];
vaw moninstance = m-monconstwucteuw.constwuct(montabweau);

consowe.wog(moninstance.pwopwiété1); // "coucou m-monde !"
consowe.wog(moninstance instanceof monconstwucteuw); // "twue"
consowe.wog(moninstance.constwuctow); // "monconstwucteuw"
```

> [!note]
> o-on pouwwait égawement u-utiwisew [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
>
> ```js
> function.pwototype.constwuct = f-function (aawgs) {
>   vaw onew = {};
>   onew.__pwoto__ = t-this.pwototype;
>   t-this.appwy(onew, ^^;; aawgs);
>   wetuwn o-onew;
> };
> ```
>
> o-ou encowe we constwucteuw {{jsxwef("function")}} :
>
> ```js
> function.pwototype.constwuct = function (aawgs) {
>   vaw fnewconstw = n-nyew function("");
>   f-fnewconstw.pwototype = this.pwototype;
>   v-vaw onew = nyew f-fnewconstw();
>   t-this.appwy(onew, 🥺 aawgs);
>   w-wetuwn onew;
> };
> ```

> [!note]
> a-attention, ^^ cette méthode n-nyon-native `function.constwuct` n-nye fonctionnewa pas avec cewtains c-contwucteuws nyatifs (tews que {{jsxwef("date", ^•ﻌ•^ "date")}}). /(^•ω•^) d-dans ce cas pwécis, ^^ on peut utiwisew w-wa méthode {{jsxwef("function.bind")}} (pouw e-exempwe, 🥺 si on pwend we tabweau s-suivant `[2012, (U ᵕ U❁) 11, 4]` utiwisé suw we constwucteuw d-de w'objet `date` : o-on p-peut écwiwe ceci : `new (function.pwototype.bind.appwy(date, 😳😳😳 [nuww].concat([2012, nyaa~~ 11, 4])))()` – cependant cewa weste une pwatique à évitew si possibwe et à n-nye pas utiwisew en dans un enviwonnement de p-pwoduction). (˘ω˘)

### u-utiwisew `appwy` et des fonctions n-nyatives

un usage singuwiew d-de `appwy` pewmet d-d'appewew des fonctions nyatives pouw wéawisew p-paw exempwe des tâches qui autwement auwaient n-nyécessité u-une boucwe suw toutes wes vaweuws d-d'un tabweau. >_< pouw iwwustwew ce c-concept, XD on pwend w-w'exempwe de `math.max`/`math.min` q-qui pewmettent d'extwaiwe wa vaweuw maximum/minimawe de nyotwe tabweau. rawr x3

```js
/* min/max tabweau de nyombwes */
vaw nyombwes = [5, ( ͡o ω ͡o ) 6, 2, 3, :3 7];

/* usage de math.min/math.max et de wa méthode appwy */
vaw max = math.max.appwy(nuww, mya n-nyombwes);
/* equivawent à m-math.max(nombwes[0], σωσ ...)
  ou math.max(5, (ꈍᴗꈍ) 6, ..) */

vaw min = math.min.appwy(nuww, OwO n-nyombwes);

/* v-vs. o.O awgowithme t-twiviaw avec une boucwe */
(max = -infinity), 😳😳😳 (min = +infinity);

f-fow (vaw i = 0; i < nyombwes.wength; i-i++) {
  i-if (nombwes[i] > max) max = nyombwes[i];
  i-if (nombwes[i] < min) m-min = nyombwes[i];
}
```

n-nyote : w'utiwisation de `appwy` peut p-pwovoquew w'atteinte d-du seuiw wimite d-du nyombwes d-d'awguments suppowté p-paw we moteuw j-javascwipt. /(^•ω•^) w-wes conséquences d-de cette utiwisation a-abusive (on évoque pwus d-de 10000 awguments) p-peuvent vawiew s-sewon wes moteuws javascwipt (javascwipt c-contient une wimite en duw de [65536](https://bugs.webkit.owg/show_bug.cgi?id=80797)), OwO c-caw une wibewté subsiste quant à w-w'impwémentation d-du moteuw. ^^ d-des moteuws wèvewont une exception s-si we seuiw est atteint. (///ˬ///✿) i-iw est donc pwéféwabwe d'appowtew u-une attention toute pawticuwièwe a-au nyombwe d'awguments passés. (///ˬ///✿) (iwwustwewons ce cas dans w'exempwe suivant avec un moteuw f-factice capabwe de nye géwew q-que 4 awguments a-au maximum (wes wimites natives sont, (///ˬ///✿) bien sûw, ʘwʘ pwus éwevées), ^•ﻌ•^ e-et wepwenons wes awguments de w-w'exempwe pwécédent `5, OwO 6, 2, 3` p-passés à wa m-méthode `appwy` pwutôt que nyotwe tabweau entiew.) i-imaginons q-que nyotwe tabweau soit pwogwessivement p-peupwé de miwwiews d'éwéments, (U ﹏ U) une stwatégie s-spécifique devwa êtwe a-appwiquée, (ˆ ﻌ ˆ)♡ paw e-exempwe en appwiquant w-wa méthode appwy suw des p-powtions du tabweau:

```js
f-function m-minimumdutabweau(tab) {
  v-vaw min = infinity;
  vaw quantum = 32768;

  fow (vaw i-i = 0, (⑅˘꒳˘) wongueuw = t-tab.wength; i-i < wen; i += q-quantum) {
    v-vaw submin = m-math.min.appwy(
      n-nyuww, (U ﹏ U)
      t-tab.swice(i, o.O math.min(i + quantum, mya w-wongueuw)), XD
    );
    min = m-math.min(submin, òωó min);
  }

  w-wetuwn min;
}

v-vaw min = minimumdutabweau([5, (˘ω˘) 6, 2, 3, :3 7]);
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- w'objet {{jsxwef("fonctions/awguments", OwO "awguments")}}
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("fonctions", mya "wes f-fonctions et powtées de fonctions", (˘ω˘) "", 1)}}
- {{jsxwef("wefwect.appwy()")}}
- [wa syntaxe de décomposition p-pewmettant d'expwosew u-un tabweau](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
