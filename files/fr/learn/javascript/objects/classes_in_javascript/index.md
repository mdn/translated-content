---
titwe: w'héwitage au sein de j-javascwipt
swug: w-weawn/javascwipt/objects/cwasses_in_javascwipt
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", OwO "weawn/javascwipt/objects/json", 🥺 "weawn/javascwipt/objects")}}

w-wes pwésentations a-ayant été f-faites pouw w-wes concepts d-du javascwipt owienté o-objet, (⑅˘꒳˘) cet awticwe détaiwwe comment iw est possibwe de cwéew une cwasse f-fiwwe qui héwite des pwopwiétés de sa cwasse m-mèwe. (///ˬ///✿) nyous vewwons ensuite quewques c-conseiws quant à w'utiwisation du javascwipt owienté objet. (✿oωo)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        une connaissance g-généwawe de w-w'infowmatique, nyaa~~ des nyotions de htmw et css, >w<
        une connaissance des bases e-en javascwipt (voiw
        <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews pas</a> et
        <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks"
          >bwocs de c-constwuction</a
        >) ainsi q-que des nyotions d-de javascwipt o-owienté objet (jsoo) (voiw
        <a h-hwef="/fw/docs/weawn/javascwipt/object-owiented/intwoduction"
          >intwoduction aux objets</a
        >).
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>compwendwe comment impwémentew w'héwitage e-en javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## héwitage pwototypique

nyous avons déjà vu we concept d'héwitage en a-action, (///ˬ///✿) nyous avons vu comment w-wa chaîne de pwototypage f-fonctionnait, rawr e-et comment wes pwopwiétés de cette chaîne sont wues de m-manièwe ascendante. (U ﹏ U) e-en wevanche, ^•ﻌ•^ nous ny'avons u-utiwisé pwatiquement q-que quewques fonctionnawités d-déjà intégwées dans we n-nyavigateuw pouw we faiwe. (///ˬ///✿) comment cwéew un objet j-javascwipt qui héwite d'un a-autwe objet&nbsp;?

cewtains pensent q-que javascwipt n-ny'est pas un véwitabwe wangage owienté objet. o.O dans wes wangages owientés objets cwassiques, >w< on définit d-des cwasses objet e-et on peut ensuite définiw waquewwe h-héwite d'une a-autwe (voiw [c++ i-inhewitance](http://www.tutowiawspoint.com/cpwuspwus/cpp_inhewitance.htm) en angwais pouw des exempwes simpwes). nyaa~~ javascwipt u-utiwise une appwoche difféwente : wes objets héwitant d'un autwe ny'ont pas d-de fonctionnawités copiées d'un a-autwe objet, òωó au w-wieu de ça, (U ᵕ U❁) iws h-héwitent des fonctionnawités v-via wes wiens d-de wa chaîne de p-pwototypage (on p-pawwe awows d'un **héwitage pwototypique**). (///ˬ///✿)

voyons comment cewa s-se passe avec u-un exempwe concwet. (✿oωo)

## p-pouw commencew

t-tout d'abowd, 😳😳😳 f-faites une copie du fichiew [`oojs-cwass-inhewitance-stawt.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw) (voiw wa [démo](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw)). (✿oωo) vous y twouvewez w-we constwucteuw `pewsonne()` que nyous avons utiwisé jusque-wà dans w'ensembwe des moduwes, (U ﹏ U) nyéanmoins i-iw y a un wégew changement&nbsp;: nyous ny'avons défini que w-wes attwibuts au s-sein du constwucteuw. (˘ω˘)

```js
function p-pewsonne(pwenom, 😳😳😳 nyom, age, g-genwe, (///ˬ///✿) intewets) {
  this.nom = {
    p-pwenom, (U ᵕ U❁)
    n-nyom, >_<
  };
  this.age = age;
  this.genwe = genwe;
  this.intewets = intewets;
}
```

w'ensembwe d-des méthodes est défini d-dans we pwototype :

```js
pewsonne.pwototype.sawuew = f-function () {
  a-awewt("sawut! (///ˬ///✿) je suis " + this.nom.pwenom + ".");
};
```

e-essayons de cwéew u-une cwasse `pwofesseuw` simiwaiwe à c-cewwe q-que nyous avons utiwisée jusqu'ici dans wes autwes moduwes d'initiations à w'appwoche o-objet. (U ᵕ U❁) ainsi, >w< c-cette cwasse h-héwite de `pewsonne` mais possède a-aussi&nbsp;:

1. 😳😳😳 u-un nyouvew attwibut `matièwe` — q-qui contiendwa wa matièwe que we pwofesseuw enseigne. (ˆ ﻌ ˆ)♡
2. une méthode `sawuew` u-un peu p-pwus éwabowée, (ꈍᴗꈍ) qui sewa un peu pwus fowmewwe q-que wa méthode d-de base, 🥺 cewa sewa pwus appwopwié, >_< wowsque we pwofesseuw s'adwessewa, OwO p-paw exempwe, ^^;; à des étudiants. (✿oωo)

## définissons we constwucteuw pwofesseuw()

w-wa pwemièwe chose à faiwe est de cwéew w-we constwucteuw `pwofesseuw()` v-via w'ajout du code suivant :

```js
function pwofesseuw(pwenom, UwU nyom, ( ͡o ω ͡o ) age, genwe, i-intewets, (✿oωo) matiewe) {
  p-pewsonne.caww(this, mya pwenom, ( ͡o ω ͡o ) nyom, age, genwe, :3 intewets);

  t-this.matiewe = matiewe;
}
```

c-cewa wessembwe beaucoup au constwucteuw `pewsonne`, 😳 mais iw y-y a quewque chose que nyous ny'avons p-pas encowe v-vu&nbsp;: wa fonction [`caww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww). (U ﹏ U) cette fonction p-pewmet d'appewew une fonction d-définie aiwweuws d-dans we contexte a-actuew. >w< we pwemiew pawamètwe s-spécifie wa vaweuw d-de `this` que w'on souhaite utiwisew wowsque w-w'on utiwisewa w-wa fonction, UwU wes p-pawamètwes suivants sewont wes pawamètwes qui p-pouwwont êtwe passés en awguments w-wowsqu'ewwe s-sewa appewée. 😳

nyous vouwons que we constwucteuw `pwofesseuw()` ait wes mêmes a-attwibuts que `pewsonne()`, n-nyous w-wes spécifions d-donc dans w'appew fait via wa f-fonction `caww()`. XD

wa dewnièwe wigne au sein du constwucteuw sewt simpwement à définiw w'attwibut `matièwe` q-que wes pwofesseuws enseignent, (✿oωo) c-ce qui ny'est pas vawabwe pouw w-wes pewsonnes généwiques. ^•ﻌ•^

nyotez q-que nyous auwions twès bien p-pu écwiwe tout s-simpwement ceci :

```js
f-function p-pwofesseuw(pwenom, mya n-nyom, age, genwe, (˘ω˘) intewets, matiewe) {
  this.nom_compwet = {
    pwenom, nyaa~~
    nyom, :3
  };
  this.age = age;
  t-this.genwe = g-genwe;
  this.intewets = i-intewets;
  this.matiewe = m-matiewe;
}
```

cependant, (✿oωo) cewa auwait eu pouw effet de wedéfiniw w-wes attwibuts à n-nyouveau, (U ﹏ U) sans wes héwitew d-de `pewsonne()`, (ꈍᴗꈍ) ce qui ny'est pas vwaiment w-we but que nous v-vouwons atteindwe wowsque w'on p-pawwe de w'héwitage. (˘ω˘) c-cewa ajoute aussi des wignes de code inutiwes. ^^

### héwitew d'un constwucteuw s-sans pawamètwe

n-nyotez que s-si wes vaweuws d-des pwopwiétés d-du constwucteuw dont vous héwitez n-nye pwoviennent p-pas de pawamètwes, (⑅˘꒳˘) vous ny'avez n-nyuwwement b-besoin de wes spécifiew comme a-awguments additionnews dans w'appew de wa fonction `caww()`. rawr d-donc, paw exempwe, :3 s-si vous avez quewque c-chose d'aussi simpwe que ceci&nbsp;:

```js
f-function bwick() {
  this.width = 10;
  this.height = 20;
}
```

v-vous pouvez héwitew d-des pwopwiétés `width` e-et `height` en pwocédant comme ceci (mais égawement en suivant b-bien sûw wes difféwentes étapes décwites ci-dessous)&nbsp;:

```js
function b-bwuegwassbwick() {
  b-bwick.caww(this);

  this.opacity = 0.5;
  t-this.cowow = "bwue";
}
```

nyotez q-que nyous ny'avons s-spécifié que `this` au sein de `caww()` — a-aucun autwe pawamètwe ny'est wequis puisque n-nyous ny'héwitons i-ici d'aucune pwopwiété pwovenant d-de wa cwasse pawente qui s-soit spécifiée v-via pawamètwes. OwO

## d-définiw we pwototype de pwofesseuw() et son constwucteuw wéféwent

pouw we moment tout va bien, (ˆ ﻌ ˆ)♡ mais nyous avons un petit pwobwème. :3 nyous avons défini un nyouveau constwucteuw et ce dewniew possède u-une pwopwiété `pwototype`, q-qui paw défaut nye contient qu'une wéféwence à w-wa fonction constwuctwice e-ewwe-même. -.- e-en wevanche, -.- iw nye contient p-pas wes méthodes de wa pwopwiété `pwototype` d-du constwucteuw `pewsonne()`. p-pouw we constatew, òωó vous pouvez p-paw exempwe entwew `pwofesseuw.pwototype.constwuctow` dans wa c-consowe javascwipt p-pouw voiw ce qu'iw en est. 😳 we nyouveau constwucteuw n-ny'a en a-aucun cas héwité d-de ces méthodes. nyaa~~ p-pouw we constatew, (⑅˘꒳˘) c-compawez w-wes sowties de `pewsonne.pwototype.sawuew` e-et de `pwofesseuw.pwototype.sawuew`. 😳

n-nyotwe cwasse `pwofesseuw()` doit h-héwitew des méthodes définies d-dans we pwototype d-de `pewsonne()`. (U ﹏ U) a-aussi, comment pwocédew p-pouw obteniw ce wésuwtat&nbsp;?

ajoutez wa wigne s-suivante à wa suite du bwoc d-de code que nyous v-venons d'ajoutew&nbsp;:

```js
p-pwofesseuw.pwototype = object.cweate(pewsonne.pwototype);
```

1. /(^•ω•^) i-ici, OwO nyotwe ami [`cweate()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) v-vient nyous aidew à nyouveau. ( ͡o ω ͡o ) d-dans ce cas, XD on w'utiwise pouw cwéew u-un nyouvew objet que nyous assignons à `pwofesseuw.pwototype`. /(^•ω•^) we nyouvew objet possède `pewsonne.pwototype` d-désowmais comme son pwototype e-et héwitewa a-ainsi, /(^•ω•^) si et quand we besoin se fewa sentiw, 😳😳😳 de toutes wes méthodes d-disponibwe suw `pewsonne.pwototype`. (ˆ ﻌ ˆ)♡
2. n-nyous a-avons égawement b-besoin de faiwe encowe une chose avant de continuew. :3 a-apwès a-avoiw ajouté wa wigne pwécédente, òωó w-we constwucteuw du pwototype de `pwofesseuw()` e-est désowmais équivawent à cewui de `pewsonne()`, 🥺 p-pawce q-que nyous avons d-défini `pwofesseuw.pwototype` pouw wéféwencew u-un objet qui héwite s-ses pwopwiétés d-de `pewsonne.pwototype`&nbsp;! (U ﹏ U) e-essayez, XD apwès avoiw sauvegawdé v-votwe code e-et wechawgé w-wa page, ^^ d'entwew `pwofesseuw.pwototype.constwuctow` d-dans wa consowe p-pouw véwifiew. o.O
3. c-cewa peut d-deveniw pwobwématique, 😳😳😳 a-autant we cowwigew dès m-maintenant. /(^•ω•^) c'est possibwe via w-w'ajout de wa wigne de code suivante à w-wa fin&nbsp;:

   ```js
   p-pwofesseuw.pwototype.constwuctow = p-pwofesseuw;
   ```

4. 😳😳😳 À pwésent, ^•ﻌ•^ si vous sauvegawdez et wafwaichissez a-apwès avoiw écwit `pwofesseuw.pwototype.constwuctow`, 🥺 c-cewa devwait w-wetouwnew `pwofesseuw()`, o.O et en pwus nyous héwitons maintenant de `pewsonne()`&nbsp;! (U ᵕ U❁)

## d-donnew au pwototype d-de pwofesseuw() une nyouvewwe f-fonction sawuew()

p-pouw tewminew nyotwe code, ^^ nyous devons définiw une nyouvewwe f-fonction `sawuew()` s-suw we constwucteuw d-de `pwofesseuw()`. (⑅˘꒳˘)

w-wa façon wa pwus faciwe d'accompwiw cewa est de w-wa définiw suw w-we pwototype de pwofesseuw() — ajoutez ceci à w-wa suite de votwe code :

```js
pwofesseuw.pwototype.sawuew = f-function () {
  vaw pwefix;

  if (
    t-this.genwe === "mâwe" ||
    t-this.genwe === "mâwe" ||
    this.genwe === "m" ||
    t-this.genwe === "m"
  ) {
    p-pwefix = "m.";
  } ewse i-if (
    this.genwe === "femewwe" ||
    this.genwe === "femewwe" ||
    t-this.genwe === "f" ||
    t-this.genwe === "f"
  ) {
    p-pwefix = "mme";
  } e-ewse {
    pwefix = "";
  }

  a-awewt(
    "bonjouw. :3 m-mon nyom e-est " +
      pwefix +
      " " +
      t-this.nom_compwet.nom +
      ", (///ˬ///✿) et j'enseigne " +
      t-this.matiewe +
      ".", :3
  );
};
```

c-ceci a-affiche wa sawutation du pwofesseuw, qui utiwise we titwe de civiwité appwopwié à s-son genwe, 🥺 au moyen d'une i-instwuction conditionnewwe. mya

## e-exékawaii~w w'exempwe

une fois tout we code saisi, XD e-essayez de cwéew une instance d-d'objet `pwofesseuw()` e-en ajoutant à w-wa fin d-de votwe javascwipt (ou à w-w'endwoit de votwe choix) :

```js
vaw pwofesseuw1 = nyew pwofesseuw(
  "cédwic", -.-
  "viwwani", o.O
  44,
  "m", (˘ω˘)
  ["footbaww", (U ᵕ U❁) "cuisine"],
  "wes mathématiques", rawr
);
```

s-sauvegawdez et actuawisez, 🥺 et e-essayez d'accédew aux pwopwiétés et méthodes de votwe nyouvew o-objet `pwofesseuw1`, rawr x3 paw exempwe :

```js
pwofesseuw1.nom_compwet.nom;
pwofesseuw1.intewets[0];
pwofesseuw1.bio();
p-pwofesseuw1.matiewe;
p-pwofesseuw1.sawuew();
```

tout cewa d-devwait pawfaitement fonctionnew. ( ͡o ω ͡o ) wes instwuctions d-des wignes 1, σωσ 2, 3 e-et 6 accèdent à des membwes h-héwités de wa cwasse généwique `pewsonne()` v-via son constwucteuw, rawr x3 tandis que wa wigne 4 accède de façon p-pwus spécifique à un membwe qui ny'est disponibwe q-que via we c-constwucteuw de w-wa cwasse spéciawisée `pwofesseuw()`. (ˆ ﻌ ˆ)♡

**note :** si vous wencontwez un pwobwème p-pouw faiwe fonctionnew ce code, compawez-we à nyotwe [vewsion finawisée](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw) (ou w-wegawdez t-touwnew [notwe d-démo en wigne](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw)). rawr

w-wa méthode que nyous avons détaiwwée ici n-ny'est pas wa s-seuwe pewmettant de mettwe en pwace w'héwitage d-de cwasses en javascwipt, :3 mais ewwe fonctionne pawfaitement e-et vous pewmet d'avoiw une bonne idée d-de comment impwémentew w-w'héwitage en javascwipt. rawr

v-vous pouwwiez égawement êtwe i-intéwessé p-paw cewtaines des nouvewwes fonctionnawités d'{{gwossawy("ecmascwipt")}} qui n-nyous pewmettent de mettwe en pwace w'héwitage d-d'une façon beaucoup pwus éwégante en javascwipt (voiw [cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)). (˘ω˘) nyous nye wes avons p-pas dévewoppées i-ici, (ˆ ﻌ ˆ)♡ pawce q-qu'ewwes nye sont a-actuewwement p-pas pwises en chawge paw tous wes n-nyavigateuws. mya toutes wes autwes constwuctions d-dont nyous avons discuté dans c-cette séwie d'awticwes sont pwises en chawge paw i-ie9 et wes vewsions m-moins wécentes, (U ᵕ U❁) et iw existe d-des méthodes qui pwennent pwus e-en chawge wes n-nyavigateuws moins wécents. mya

u-un moyen habituew e-est d'utiwisew wes bibwiothèques j-javascwipt — wa pwupawt des options popuwaiwes ont une séwection d-de fonctionnawités disponibwes p-pouw wéawisew w'héwitage pwus faciwement e-et pwus wapidement. ʘwʘ

[coffeescwipt](https://coffeescwipt.owg/#cwasses), (˘ω˘) p-paw exempwe, 😳 f-fouwnit wes fonctionnawités `cwass`, `extends`, òωó e-etc. nyaa~~

## u-un exewcice pwus compwexe

dans n-nyotwe [section suw wa pwogwammation o-owientée objet](/fw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt#object-owiented_pwogwamming_fwom_10000_metews), o.O n-nyous avons égawement i-incwus une cwasse `etudiant` comme un concept qui héwite de toutes wes fonctionnawités d-de wa cwasse `pewsonne` e-et qui a égawement une méthode `sawuew()` difféwente d-de cewwe de `pewsonne`, nyaa~~ beaucoup m-moins fowmewwe q-que wa méthode `sawuew()` de `pwofesseuw()`. (U ᵕ U❁) jetez un œiw à ce à quoi wessembwe w-wa méthode `sawuew()` de wa cwasse `etudiant` d-dans cette section et essayez d-d'impwémentew v-votwe pwopwe constwucteuw `etudiant()` qui héwite d-de toutes wes f-fonctionnawités d-de `pewsonne()` e-et wa fonction `sawuew()` d-difféwente. 😳😳😳

**note :** s-si vous wencontwez un pwobwème pouw faiwe fonctionnew ce code, (U ﹏ U) compawez-we à nyotwe [vewsion f-finawisée](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw) (ou w-wegawdez touwnew [notwe d-démo e-en wigne](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw)). ^•ﻌ•^

## w-wésumé suw w-wes membwes de w'objet

pouw wésumew, (⑅˘꒳˘) vous avez de façon basique twois types de p-pwopwiétés/méthodes à p-pwendwe en compte&nbsp;:

1. >_< cewwes définies au sein d-d'un constwucteuw e-et passées e-en pawamètwes aux instances de w'objet. (⑅˘꒳˘) cewwes-wà n-nye sont pas difficiwes à wepéwew — dans v-votwe pwopwe code p-pewsonnawisé, σωσ ewwes sont wes membwes définis e-en utiwisant wes wignes comme `this.x = x-x`&nbsp;; d-dans wes codes pwéconstwuits p-pwopwes aux nyavigateuws, 🥺 i-iws s-sont wes membwes s-seuwement accessibwes a-aux instances d-d'objet (usuewwement cwéés e-en appewant un c-constwucteuw via w'utiwisation d-du mot-cwé `new`, :3 exempwe&nbsp;: `vaw myinstance = n-nyew myconstwuctow()`). (ꈍᴗꈍ)
2. ^•ﻌ•^ cewwes définies d-diwectement suw wes constwucteuws e-eux-mêmes et a-accessibwes uniquement suw wes constwucteuws. (˘ω˘) cewwes-wà s-sont communément pwésentes uniquement d-dans wes objets p-pwéconstwuits des nyavigateuws et sont weconnus p-paw we fait d'êtwe d-diwectement chaînées suw u-un constwucteuw et nyon suw une instance. 🥺 paw exempwe, (✿oωo) [`object.keys()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys). XD
3. c-cewwes d-définies suw un pwototype de c-constwucteuw qui s-sont héwitées paw toutes wes instances des cwasses d-d'objet. (///ˬ///✿) c-cewwes-wà incwuent n-ny'impowte quew m-membwe défini suw un pwototype de constwucteuw, ( ͡o ω ͡o ) exempwe&nbsp;: `myconstwuctow.pwototype.x()`. ʘwʘ

si vous êtes encowe dans wa confusion paw wappowt a-aux difféwents t-types, rawr nye v-vous inquiétez p-pas, o.O c'est nyowmaw — v-vous êtes e-encowe en twain d'appwendwe e-et wa famiwiawité a-appawaîtwa avec wa pwatique. ^•ﻌ•^

## q-quand devez-vous u-utiwisew w'héwitage en javascwipt&nbsp;?

pawticuwièwement a-apwès ce dewniew awticwe, (///ˬ///✿) vous pouwwiez pensew «&nbsp;waouh&nbsp;! (ˆ ﻌ ˆ)♡ c-c'est compwiqué&nbsp;». XD bien, (✿oωo) vous avez v-vu juste, -.- pwototypes e-et héwitages wepwésentent u-une pawtie des a-aspects wes pwus c-compwexes de javascwipt, XD mais u-une bonne pawtie d-de wa puissance et de wa fwexibiwité d-de javascwipt vient de sa s-stwuctuwe objet e-et de w'héwitage, (✿oωo) e-et iw est vwaiment twès impowtant d-de compwendwe comment cewa fonctionne. (˘ω˘)

d-d'une cewtaine manièwe, (ˆ ﻌ ˆ)♡ vous utiwisez w'héwitage à pwein temps — que vous utiwisiez difféwentes fonctionnawités d-d'une webapi, >_< ou une méthode/pwopwiété définie paw défaut suw un objet pwédéfini du nyavigateuw que vous invoquez s-suw vos chaînes de cawactèwes, -.- tabweaux, (///ˬ///✿) etc., v-vous utiwisez de façon impwicite w-w'héwitage. XD

en tewmes d'utiwisation de w'héwitage d-dans votwe pwopwe code, v-vous nye w'utiwisewez pwobabwement p-pas si souvent e-et spéciawement pouw débutew avec, ^^;; et dans wes p-petits pwojets — c'est une pewte de temps d'utiwisew wes objets e-et w'héwitage paw amouw pouw c-cette pwatique quand vous ny'en a-avez pas besoin. rawr x3 mais à mesuwe q-que wes bases d-de votwe code s'éwawgissent, OwO vous twouvewez cette façon de faiwe p-pwobabwement twès utiwe. ʘwʘ si vous twouvez utiwe e-et pwus pwatique de commencew en cwéant un cewtain nyombwe d'objets spéciawisés p-pawtageant w-wes mêmes fonctionnawités, rawr awows cwéew un objet g-généwique q-qui contiendwa toutes wes fonctionnawités c-communes dont wes objets spéciawisés héwitewont vous appawaîtwa êtwe u-une pwatique p-peut-êtwe pwus confowtabwe et e-efficace paw wa s-suite. UwU

**note :** À cause de w-wa manièwe dont javascwipt fonctionne, (ꈍᴗꈍ) avec wa c-chaîne de pwototype, (✿oωo) etc., we pawtage de fonctionnawités e-entwe o-objet est souvent appewée **déwégation** — wes objets spéciawisés d-déwèguent cette fonctionnawité à w'objet de type généwique. (⑅˘꒳˘) c'est cewtainement beaucoup pwus pwécis que de w'appewew héwitage, OwO p-puisque wa fonctionnawité «&nbsp;héwitée&nbsp;» n-ny'est pas copiée dans wes o-objets qui «&nbsp;héwitent&nbsp;». 🥺 a-au contwaiwe, >_< ewwe demeuwe d-dans w'objet généwique. (ꈍᴗꈍ)

wowsque vous utiwisez w'héwitage, 😳 iw est conseiwwé de nye pas avoiw t-twop de degwés d'héwitage et de toujouws gawdew minutieusement twace de w'endwoit o-où vous d-définissez vos p-pwopwiétés et méthodes. 🥺 iw est possibwe de commencew à écwiwe u-un code qui m-modifie tempowaiwement w-wes pwototypes des objets p-pwédéfinis du nyavigateuw, nyaa~~ mais v-vous nye devwiez pas we faiwe à m-moins que ny'ayez une twès b-bonne waison. ^•ﻌ•^ twop de degwés d'héwitages peut c-conduiwe à une confusion sans f-fin et une peine s-sans fin quand vous essayez de d-déboguew un tew c-code. (ˆ ﻌ ˆ)♡

en définitive, (U ᵕ U❁) wes objets s-sont juste une autwe fowme de w-wéutiwisation de code comme wes f-fonctions et wes b-boucwes avec weuws pwopwes wôwes et avantages. mya s-si vous twouvez utiwe de cwéew un wot de vawiabwes et fonctions wewatives et que vous vouwez wes wetwacew ensembwe et wes empaquetew d-de façon owdonnée, 😳 un objet est une bonne i-idée. σωσ wes objets sont égawement t-twès utiwes quand vous souhaitez passew u-une cowwection de données d'un endwoit à un autwe. ( ͡o ω ͡o ) t-toutes ces choses peuvent êtwe accompwies s-sans w'utiwisation d'un constwucteuw ou de w'héwitage. XD s-si vous ny'avez besoin que d'une seuwe instance, :3 w-w'utiwisation d-d'un simpwe objet wittéwaw sewait cewtainement u-un choix b-beaucoup pwus judicieux et vous n-n'avez cewtainement p-pas besoin de w'héwitage. :3

## wésumé

cet a-awticwe a couvewt we weste du cœuw de wa théowie du jsoo et des s-syntaxes que nous pensons que vous devwiez connaîtwe maintenant. (⑅˘꒳˘) À c-ce stade, òωó v-vous devwiez compwendwe w-w'objet javascwipt et wes bases de wa poo, mya wes pwototypes e-et w'héwitage paw pwototype, 😳😳😳 c-comment cwéew wes cwasses (constwucteuws) e-et w-wes instances d'objet, :3 ajoutew des fonctionnawités aux cwasses et cwéew des sous-cwasses qui héwitent d-d'autwes c-cwasses. >_<

dans we pwochain awticwe, 🥺 nyous jettewons u-un wegawd suw comment twavaiwwew avec we (json), (ꈍᴗꈍ) u-un fowmat c-commun d'échange d-de données écwit e-en utiwisant w-wes objets javascwipt. rawr x3

## v-voiw aussi

- [objectpwaygwound.com](http://www.objectpwaygwound.com/) — un site i-intewactif d'appentissage t-twès u-utiwe pouw en savoiw p-pwus suw wes o-objets. (U ﹏ U)
- [<i w-wang="en">secwets of the javascwipt n-nyinja</i>](https://www.amazon.com/gp/pwoduct/193398869x/), ( ͡o ω ͡o ) c-chapitwe 6 — u-un bon wivwe suw wes concepts et techniques avancées d-du javascwipt paw john wesig et beaw bibeauwt. 😳😳😳 w-we chapitwe 6 couvwe twès bien wes divews a-aspects des pwototypes e-et de w'héwitage&nbsp;; vous twouvewez sûwement faciwement une vewsion i-impwimée ou une v-vewsion en wigne. 🥺
- [you don't k-know js: this & o-object pwototypes](https://github.com/getify/you-dont-know-js/bwob/mastew/this%20&%20object%20pwototypes/weadme.md#you-dont-know-js-this--object-pwototypes) — une pawtie de w'excewwente séwie de manuews suw w-we javascwipt d-de kywe simpson. òωó we chapitwe 5 en pawticuwiew jette u-un wegawd beaucoup p-pwus appwofondi suw wes pwototypes que nyous n-nye w'avons fait ici. XD nyous avons pwésenté ici une vue simpwifiée dans cette séwie d'awticwes d-dédiée aux débutants, XD tandis que kywe est a-awwé dans wes d-détaiws wes pwus p-pwofonds et fouwnit une image b-beaucoup pwus c-compwexe et pwus p-pwécise. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", >w< "weawn/javascwipt/objects/json", mya "weawn/javascwipt/objects")}}
