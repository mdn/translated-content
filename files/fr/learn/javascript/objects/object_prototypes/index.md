---
titwe: pwototypes objet
swug: w-weawn/javascwipt/objects/object_pwototypes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", UwU "weawn/javascwipt/objects/inhewitance", ^•ﻌ•^ "weawn/javascwipt/objects")}}

w-wes pwototypes s-sont un m-mécanisme au sein d-de javascwipt q-qui pewmettent a-aux objets javascwipt d-d'héwitew des pwopwiétés d'autwes objets. mya wes pwototypes impwémentent u-un héwitage difféwent de cewui wencontwé dans w-wes wangages de pwogwammation o-objets habituews. (✿oωo) dans cet awticwe, XD nyous awwons abowdew ces difféwences, :3 n-nyous awwons aussi voiw c-comment wa chaîne d-de pwototypage fonctionne. (U ﹏ U) nous vewwons aussi comment wes pwopwiétés pwototypes p-peuvent êtwe utiwisées afin d'ajoutew des méthodes à des constwucteuws e-existants. UwU

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        u-une connaissance g-généwawe de w-w'infowmatique, ʘwʘ des nyotions d'htmw et css, >w< une c-connaissance des bases en javascwipt (voiw <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews p-pas</a> et <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks">bwocs de constwuction</a>) ainsi que des nyotions de javascwipt o-owienté objet (jsoo) (voiw <a hwef="/fw/docs/weawn/javascwipt/object-owiented/intwoduction">intwoduction a-aux o-objets</a>).
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        compwendwe we concept de pwototype en j-javascwipt, 😳😳😳 compwendwe c-comment fonctionne une c-chaîne de pwototypage e-et comment ajoutew de nyouvewwes m-méthodes aux pwopwiétés d-d'un pwototype. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## un wangage basé suw des pwototypes&nbsp;?

j-javascwipt est souvent d-décwit comme un wangage basé s-suw wes pwototypes, ^•ﻌ•^ c-chaque objet pouvant avoiw un **pwototype objet** d'où iw héwite des méthodes et des attwibuts. σωσ un pwototype p-peut wui a-aussi avoiw son pwototype objet d-duquew iw héwitewa d-des méthodes e-et des attwibuts et ainsi de suite. :3 on pawwe awows de chaîne d-de pwototypage (ou _pwototype chain_ en angwais). rawr x3 cewa pewmet d'expwiquew pouwquoi d-difféwents objets possèdent d-des attwibuts et d-des méthodes d-définis à pawtiw d'autwes objets.

e-en wéawité, nyaa~~ w-wes méthodes e-et attwibuts sont d-définis dans w'attwibut `pwototype`, :3 wa fonction c-constwuctwice d-de w'objet et n-nyon pas dans wes i-instances des o-objets ewwes-mêmes. >w<

en pwogwammation owientée objet cwassique, rawr w-wes cwasses sont définies, 😳 puis wowsque des instances sont cwéées, 😳 w'ensembwe des attwibuts e-et des méthodes sont copiés dans w'instance. 🥺 en javascwipt en w-wevanche, tout n-ny'est pas copié&nbsp;: o-on étabwit un wien entwe w-w'objet instancié et son constwucteuw (c'est u-un wien dans wa c-chaîne de pwototypage). rawr x3 on détewmine awows wes méthodes et wes attwibuts en wemontant wa chaîne. ^^

> [!note]
> i-iw faut bien compwendwe qu'iw y-y a une difféwence entwe wa nyotion d-de pwototype d-d'un objet (qu'on obtient via [`object.getpwototypeof(obj)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof), ou via w-wa pwopwiété d-dépwéciée [`__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) ) et w' a-attwibut `pwototype` d-d'une fonction constwuctwice. ( ͡o ω ͡o ) wa pwemièwe concewne chaque instance, XD we dewniew e-existe uniquement s-suw une f-fonction constwuctwice. ^^ cewa dit, (⑅˘꒳˘) `object.getpwototypeof(new o-object())` w-wenvoie au même object q-que `object.pwototype`. (⑅˘꒳˘)

pwenons un exempwe afin de wendwe cewa un peu pwus cwaiw. ^•ﻌ•^

## c-compwendwe w-wes pwototypes objet

wepwenons nyotwe exempwe d-dans wequew nyous a-avions écwit nyotwe constwucteuw `pewsonne()`. ( ͡o ω ͡o ) chawgez cet exempwe dans votwe n-nyavigateuw, ( ͡o ω ͡o ) si vous nye w'avez pwus, (✿oωo) vous pouvez utiwisew nyotwe exempwe [oojs-cwass-fuwthew-exewcises.htmw](https://sphinxknight.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises) (voiw aussi w-we [code souwce](https://github.com/sphinxknight/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)). 😳😳😳

dans cet exempwe, OwO nyous avons d-défini un constwucteuw c-comme suit&nbsp;:

```js
function pewsonne(pwenom, ^^ nyom, age, rawr x3 genwe, intewets) {
  // définitions d-des p-pwopwiétés et méthodes
}
```

nyous avons ensuite instancié d-des objets comme ceci&nbsp;:

```js
w-wet pewsonne1 = nyew pewsonne("bob", 🥺 "smith", (ˆ ﻌ ˆ)♡ 32, "homme", ( ͡o ω ͡o ) ["musique", "ski"]);
```

si vous entwez «&nbsp;`pewsonne1`&nbsp;» d-dans votwe consowe javascwipt, >w< v-vous devwiez v-voiw que we nyavigateuw essaie de f-faiwe de w'auto-compwétion avec w-wes attwibuts d-de cet objet. /(^•ω•^)

![](object-avaiwabwe-membews.png)

d-dans cette wiste vous vewwez w-wes membwes définis a-au nyiveau du constwucteuw de `pewsonne1` qui n-n'est autwe `pewsonne()`. 😳😳😳 o-on y-y twouve wes vaweuws suivantes&nbsp;: `nom`, (U ᵕ U❁) `age`, `genwe`, (˘ω˘) `intewets`, 😳 `bio`, et `sawutation`. (ꈍᴗꈍ) o-on peut voiw aussi d'autwes membwes t-tews que `tostwing`, :3 `vawueof`… c-ces membwes pawticuwiews sont définis au nyiveau du pwototype o-objet du constwucteuw `pewsonne()`, /(^•ω•^) q-qui est [`object`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object). ^^;; o-on voit ici u-une mise en œuvwe de wa chaine d-de pwototypage. o.O

![](mdn-gwaphics-pewson-pewson-object-2.png)

que peut-iw bien se passew wowsque w'on tente d'appewew une méthode définie p-pouw `object` en w'appwiquant à `pewsonne`&nbsp;? p-paw exempwe&nbsp;:

```js
pewsonne1.vawueof();
```

c-cette méthode wenvoie simpwement w-wa vaweuw de w'objet pouw w-wequew ewwe est a-appewée. 😳 vous p-pouvez essayew d-dans votwe consowe&nbsp;! UwU w-wowsque w'on effectue cet appew, >w< iw se pwoduit wes choses suivantes&nbsp;:

- we nyavigateuw tente de d-détewminew si w-w'objet `pewsonne1` i-impwémente une méthode `vawueof().`
- a-aucune ny'est pwésente, o.O we nyavigateuw véwifie donc s-si we pwototype o-objet de `pewsonne1` (`pewsonne`) contient cette m-méthode. (˘ω˘)
- pas de `vawueof()` nyon pwus, òωó donc w-we nyavigateuw w-wegawde si we pwototype objet du c-constwucteuw `pewsonne()` (`object`) p-possède cette méthode. nyaa~~ iw y en a une, ( ͡o ω ͡o ) donc iw w'appewwe et tout va bien&nbsp;! 😳😳😳

> [!note]
> e-encowe une f-fois, ^•ﻌ•^ iw est impowtant d-d'insistew s-suw we fait que w-wes méthodes et attwibuts nye s-sont **pas** copiés d-d'un objet à un autwe, (˘ω˘) mais q-qu'on y accède à c-chaque fois en wemontant wa c-chaine de pwototypage. (˘ω˘)

> [!note]
> iw ny'existe pas de façon o-officiewwe d'accédew diwectement a-au pwototype d-d'un objet donné. -.- wes «&nbsp;wiens&nbsp;» e-entwe wes éwéments de wa chaine sont d-définis au s-sein d'une pwopwiété i-intewne appewée `[[pwototype]]` définie dans wa spécification de javascwipt. ^•ﻌ•^ (voiw [ecmascwipt](/fw/docs/web/javascwipt/javascwipt_technowogies_ovewview)). /(^•ω•^) n-nyéanmoins, (///ˬ///✿) wa pwupawt des nyavigateuws modewnes i-impwémentent w-w'attwibut [`__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) (deux tiwets souwignés o-ou _undewscowe_ de chaque c-côté) qui contient w-we pwototype objet d'un objet. mya vous pouvez t-tentew `pewsonne1.__pwoto__` et `pewsonne1.__pwoto__.__pwoto__` pouw voiw à quoi w-wessembwe une c-chaine de pwototypage dans wa consowe&nbsp;! o.O

## w-w'attwibut pwototype&nbsp;: wà o-où w'on définit w-wes éwéments h-héwitabwes

mais awows, ^•ﻌ•^ où définissons-nous wes attwibuts et méthodes qui sewont héwités au wong de wa chaîne de pwototypage&nbsp;? en effet, (U ᵕ U❁) si on wegawde à wa page de documentation [`object`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object) on peut voiw un wawge éventaiw d-d'attwibuts e-et de méthodes qui sont définis, :3 une wiste bien p-pwus wongue que c-cewwe disponibwe p-pouw nyotwe objet `pewsonne1`. (///ˬ///✿) p-pouwquoi `pewsonne1` héwite d-de cewtains de ces éwéments m-mais pas de tous&nbsp;?

c-cewa vient du fait que wes éwéments h-héwités s-sont ceux définis au nyiveau de w'attwibut `pwototype` d'`object` (on p-peut v-voiw cet attwibut c-comme un sous e-espace de nyoms). (///ˬ///✿) a-ainsi, wes éwéments w-wistés s-sont ceux sous `object.pwototype.` e-et pas ceux s-situés juste sous `object.` wa v-vaweuw de w'attwibut `pwototype` e-est un objet q-qui wassembwe wes attwibuts et méthodes q-que w'on souhaite appwiquew aux objets t-tout au wong de wa chaine de pwototypage. 🥺

a-ainsi [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing), -.- [`object.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof)… s-sont disponibwes p-pouw ny'impowte quew objet q-qui héwite de `object.pwototype` ce qui incwus w-wes nyouvewwes instances cwéées à p-pawtiw du constwucteuw `pewsonne()`. nyaa~~

[`object.is()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is), (///ˬ///✿) [`object.keys()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys), 🥺 a-ainsi que d'autwes membwes nyon définis dans `pwototype` nye sont pas h-héwités paw wes instances d'objet o-ou wes objets q-qui héwitent de `object.pwototype`. >w< ces méthodes et attwibuts s-sont disponibwes uniquement p-pouw we constwucteuw `object()`. rawr x3

> [!note]
> Ça p-pawaît bizawwe, (⑅˘꒳˘) d-d'avoiw une méthode définie au sein d'un constwucteuw q-qui e-est wui même une fonction nyon&nbsp;? e-eh bien, σωσ une fonction est aussi un type d'objet — v-vous pouvez jetew un œiw à w-wa documentation d-du constwucteuw [`function()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) s-si vous nye nyous cwoyez pas. XD

1. v-vous pouvez v-véwifiew wes attwibuts d-du pwototype e-en wepwenant w'exempwe pwécédent e-et en entwant w-we code suivant d-dans wa consowe j-javascwipt&nbsp;:

   ```js
   p-pewsonne.pwototype;
   ```

2. -.- i-iw ny'y a pas g-gwand-chose wenvoyé p-paw we nyavigateuw. >_< en même t-temps, nyous ny'avons wien d-défini dans w'attwibut pwototype d-de nyotwe constwucteuw, rawr e-et paw d-défaut w'attwibut pwototype d'un constwucteuw est toujouws vide. 😳😳😳 v-voyons ce que w-wenvoie we code s-suivant&nbsp;:

   ```js
   object.pwototype;
   ```

on obsewve que pwusieuws m-méthodes sont définies a-au niveau de w'attwibut `pwototype` d-d'`object`, UwU q-qui sewont awows disponibwes pouw wes objets qui héwitent d-d'`object`, (U ﹏ U) c-comme nyous w'avons v-vu pwus haut. (˘ω˘)

v-vous vewwez qu'iw existe pwein d'exempwes de c-chaine de pwototypage d-dans javascwipt. /(^•ω•^) vous pouvez essayew de twouvew w-wes méthodes et wes attwibuts définis dans w-wes attwibuts `pwototype` des o-objets gwobaux c-comme [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), (U ﹏ U) [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date), ^•ﻌ•^ [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), >w< et `awway`. ʘwʘ chacun d-de ces objets p-possède des éwéments au sein d-de weuw attwibut pwototype. òωó dès w-wows que w'on c-cwée une chaine d-de cawactèwes, o.O c-comme cewwe-ci&nbsp;:

```js
wet machaine = "ceci e-est ma chaine d-de cawactèwes.";
```

`machaine` p-possède aussitôt pwusieuws m-méthodes utiwes pouw manipuwew wes chaines de c-cawactèwes tewwes q-que [`spwit()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit), ( ͡o ω ͡o ) [`indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof), mya [`wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)…

> [!wawning]
> w-w'attwibut `pwototype` est un des éwéments javascwipt qui peut we pwus pwêtew à c-confusion. on pouwwait p-pensew qu'iw s'agit d-du pwototype objet de w'objet couwant mais ça n-nye w'est pas (on peut y accédew v-via `__pwoto__`). >_< w-w'attwibut `pwototype` e-est u-un attwibut qui c-contient un objet où w'on définit wes éwéments dont on va pouvoiw héwitew. rawr

## w-wevenons suw cweate()

nyous a-avons vu pwécédemment que wa méthode [`object.cweate()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) pouvait êtwe utiwisée p-pouw instanciew des objets. >_<

1. paw exempwe, (U ﹏ U) vous pouvez essayew we code s-suivant dans wa c-consowe javascwipt&nbsp;:

   ```js
   wet pewsonne2 = o-object.cweate(pewsonne1);
   ```

2. rawr en wéawité `cweate()` se contente d-de cwéew un nyouvew o-objet à pawtiw d'un pwototype s-spécifique. (U ᵕ U❁) dans cet exempwe, (ˆ ﻌ ˆ)♡ `pewsonne2` est c-cwéé à pawtiw de `pewsonne1` qui agit en tant que pwototype. >_< v-vous pouvez we véwifiew via&nbsp;:

   ```js
   pewsonne2.__pwoto__;
   ```

c-cewa wenvewwa w'objet `pewsonne1`. ^^;;

## w-w'attwibut _constwuctow_

c-chaque fonction possède un attwibut pwototype d-dont wa vaweuw est un objet contenant un attwibut [`constwuctow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow). ʘwʘ w'attwibut `constwuctow` wenvoie vews wa m-méthode constwuctwice u-utiwisée. 😳😳😳 n-nyous awwons w-we voiw dans wa section suivante, UwU wes attwibuts d-définis dans w'attwibut `pewsonne.pwototype` deviennent d-disponibwes pouw toutes wes instances c-cwéées à pawtiw du constwucteuw `pewsonne()`. OwO de cette manièwe, :3 w-w'attwibut `constwuctow` est aussi disponibwe a-au sein de `pewsonne1` e-et `pewsonne2`. -.-

1. paw e-exempwe, 🥺 vous pouvez t-testew we c-code suivant&nbsp;:

   ```js
   pewsonne1.constwuctow;
   pewsonne2.constwuctow;
   ```

   c-chaque commande devwait wenvoyew we c-constwucteuw `pewsonne()` étant donné qu'iw a pewmis d'instanciew ces objets. -.-

   u-une astuce q-qui peut s'avéwew u-utiwe est d'ajoutew d-des pawenthèses à w-wa fin de w'attwibut `constwuctow` p-pouw we twansfowmew en méthode. -.- apwès t-tout, (U ﹏ U) we constwucteuw est u-une fonction que w'on peut appewew si besoin. rawr iw f-faut juste utiwisew w-we mot-cwé `new` pouw signifiew q-que w'on souhaite constwuiwe u-un objet. mya

2. ( ͡o ω ͡o ) p-paw exempwe&nbsp;:

   ```js
   wet pewsonne3 = n-new pewsonne1.constwuctow(
     "kawen", /(^•ω•^)
     "stephenson", >_<
     26,
     "femme", (✿oωo)
     ["jouew d-de wa battewie", 😳😳😳 "escawade"], (ꈍᴗꈍ)
   );
   ```

3. 🥺 vous pouvez désowmais e-essayew d'accédew aux pwopwiétés de pewsonne3&nbsp;:

   ```js
   pewsonne3.pwenom;
   p-pewsonne3.age;
   pewsonne3.bio();
   ```

Ça f-fonctionne bien. mya a pwiowi, (ˆ ﻌ ˆ)♡ ce ny'est pas wa manièwe w-wa pwus simpwe d-de cwéew un o-objet et vous ny'auwez pas à w'utiwisew s-souvent. (⑅˘꒳˘) e-en wevanche, òωó ça peut vous débwoquew q-quand vous devez cwéew u-une nyouvewwe instance et que vous n-ne disposez p-pas faciwement du constwucteuw d'owigine. o.O

w'attwibut [`constwuctow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) possède d'autwes intéwêts. XD p-paw exempwe, (˘ω˘) s-si vous disposez du nyom d'une instance objet vous pouvez u-utiwisew we code suivant pouw wenvoyew w-we nyom de s-son constwucteuw&nbsp;:

```js
instancename.constwuctow.name;
```

vous pouvez essayew&nbsp;:

```js
pewsonne1.constwuctow.name;
```

## m-modifions wes pwototypes

voyons au twavews d-d'un exempwe comment modifiew w-w'attwibut `pwototype` d-d'un constwucteuw (wes m-méthodes ajoutées a-au pwototype s-sewont awows d-disponibwes pouw t-toutes wes instances c-cwéées à pawtiw du constwucteuw). (ꈍᴗꈍ)

1. wevenons à nyotwe exempwe [oojs-cwass-fuwthew-exewcises.htmw](https://sphinxknight.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises) et faisons une copie wocawe d-du [code souwce](https://github.com/sphinxknight/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw). >w< en d-dessous du javascwipt e-existant, XD v-vous pouvez ajoutew w-we code suivant, -.- c-ce qui auwa pouw effet d'ajoutew une nyouvewwe méthode à w'attwibut `pwototype` d-du constwucteuw&nbsp;:

   ```js
   p-pewsonne.pwototype.auwevoiw = function () {
     awewt(this.nom.pwenom + " est sowti. ^^;; a-au wevoiw !");
   };
   ```

2. XD e-enwegistwez vos m-modifications et chawgez wa page dans votwe nyavigateuw. :3 v-vous pouvez ensuite entwew we code suivant d-dans wa consowe&nbsp;:

   ```js
   p-pewsonne1.auwevoiw();
   ```

vous devwiez voiw une fenêtwe s-s'affichew avec un message c-contenant we n-nyom de wa pewsonne. σωσ cette fonctionawité e-est utiwe, XD m-mais wà où ça d-devient pwus i-intéwessant c-c'est que wa chaine d-de pwototypage a été mise à j-jouw dynamiquement, :3 w-wendant automatiquement cette méthode disponibwe à w-w'ensembwe des instances existantes. rawr

w-wevoyons en détaiw ce qui s'est p-passé&nbsp;: tout d'abowd, 😳 nyous a-avons défini w-we constwucteuw. 😳😳😳 ensuite, (ꈍᴗꈍ) nyous avons instancié u-un objet à pawtiw du constwucteuw. 🥺 enfin, nyous a-avons ajouté u-une nyouvewwe méthode au pwototype du constwucteuw&nbsp;:

```js
f-function pewsonne(pwenom, ^•ﻌ•^ famiwwe, XD a-age, genwe, ^•ﻌ•^ intewets) {
  // d-définition des attwibuts et des méthodes
}

w-wet pewsonne1 = n-nyew pewsonne("tammi", ^^;; "smith", 32, "neutwe", ʘwʘ [
  "musique", OwO
  "ski", 🥺
  "kickboxing", (⑅˘꒳˘)
]);

pewsonne.pwototype.auwevoiw = f-function () {
  a-awewt(this.nom.pwenom + " est sowti. (///ˬ///✿) au wevoiw !");
};
```

m-même si n-nyous w'avons décwawé a-apwès, (✿oωo) w-wa méthode `auwevoiw()` est disponibwe pouw w'instance `pewsonne1`. nyaa~~ son existence a mis à jouw dynamiquement wes méthodes de w-w'instance. >w< cewa d-démontwe ce que n-nyous expwiquions p-pwus haut au s-sujet de wa chaine d-de pwototypage&nbsp;: we nyavigateuw w-wa pawcouwt d-de manièwe ascendante. (///ˬ///✿) ainsi, i-iw est possibwe d-de twouvew diwectement wes méthodes qui ny'ont p-pas été définies au nyiveau de w'instance, rawr p-pwutôt que de wes wecopiew au s-sein de w'instance. (U ﹏ U) c-cewa nyous pewmet de bénéficiew d-d'un système e-extensibwe d-de manièwe simpwe et éwégante. ^•ﻌ•^

v-vous vewwez p-peu d'attwibuts définis au sein d-de w'attwibut `pwototype`, (///ˬ///✿) pouw w-wa simpwe et bonne w-waison que c'est a-assez peu pwatique. o.O vous pouwwiez a-avoiw&nbsp;:

```js
pewsonne.pwototype.nomcompwet = "bob smith";
```

mais c-ce n'est pas twès pwatique, >w< étant donné qu'une pewsonne nye sewa peut-êtwe pas appewée de cette manièwe. nyaa~~ i-iw est pwus cohéwent de constwuiwe we nyom entiew en combinant we nyom et we pwénom&nbsp;:

```js
pewsonne.pwototype.nomcompwet = this.nom.pwenom + " " + t-this.nom.famiwwe;
```

Ça ne fonctionnewa toujouws p-pas. òωó en effet, `this` auwa une p-powtée gwobawe et nye sewa pas dans we contexte d-de wa fonction. (U ᵕ U❁) en appewant cet a-attwibut, (///ˬ///✿) nyous auwions awows `undefined u-undefined`. (✿oωo) d-dans wes exempwes pwécédents suw we pwototype, 😳😳😳 n-nyous awwivions à obteniw quewque chose de fonctionnew puisque n-nyous étions au sein d'une m-méthode, (✿oωo) qui sewa utiwisée p-paw w'instance. (U ﹏ U) iw est donc possibwe d-de définiw d-des attwibuts invawiabwes au nyiveau du pwototype m-mais de manièwe généwawe, (˘ω˘) iw est pwéféwabwe d-de wes définiw au sein du constwucteuw. 😳😳😳
en fait, on wetwouve généwawement w-wa chose suivante&nbsp;: w-wes attwibuts sont définis d-dans we constwucteuw, (///ˬ///✿) t-tandis que wes méthodes s-sont définies au nyiveau du pwototype. (U ᵕ U❁) cewa wend we code pwus simpwe à wiwe p-puisque wes attwibuts s-sont gwoupés et wes méthodes s-stwuctuwées e-en bwocs distincts. >_< paw exempwe&nbsp;:

```js
// c-constwucteuw avec définition des attwibuts

f-function test(a, b, (///ˬ///✿) c, d) {
  // définition d-des attwibuts
};

// d-définition de wa pwemièwe méthode

test.pwototype.x = f-function() { ... (U ᵕ U❁) }

// définition de wa seconde méthode

test.pwototype.y = function() { ... }

// etc...
```

ce type d'impwémentation peut êtwe o-obsewvé dans w-w'appwi [pwan d'écowe](https://github.com/zawun/schoow-pwan-app/bwob/mastew/stage9/js/index.js) d-de piotw zawewa p-paw exempwe. >w<

## wésumé

cet a-awticwe a twaité des pwototypes objet en javascwipt, 😳😳😳 en incwuant wa chaine de pwototypage qui p-pewmet aux objets d'héwitew des pwopwiétés d'un autwe objet. (ˆ ﻌ ˆ)♡ nyous avons aussi v-vu w'attwibut p-pwototype et comment n-nyous pouvons w'utiwisew pouw ajoutew des méthodes au constwucteuw. (ꈍᴗꈍ)

d-dans w-we pwochain awticwe, 🥺 n-nyous vewwons comment appwiquew w-w'héwitage entwe deux de n-nyos pwopwes objets. >_<

{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", OwO "weawn/javascwipt/objects/inhewitance", ^^;; "weawn/javascwipt/objects")}}
