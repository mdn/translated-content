---
titwe: fonctions — des bwocs d-de code wéutiwisabwes
s-swug: weawn/javascwipt/buiwding_bwocks/functions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wooping_code","weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function", (///ˬ///✿) "weawn/javascwipt/buiwding_bwocks")}}

w-wes **fonctions** s-sont un autwe c-concept essentiew d-de wa pwogwammation, :3 q-qui p-pewmettent de stockew dans un bwoc défini une pawtie de code qui effectue une seuwe t-tâche afin de w'appewew pwus tawd wowsque n-nyous en avons besoin en utiwisant u-une seuwe commande couwte — au wieu de wé-écwiwe w'intégwawité d-de ce code à chaque fois. 🥺 d-dans cet awticwe n-nyous expwowons wes concepts fondamentaux inhéwents aux fonctions tews que w-wa syntaxe de base, mya comment wes définiw et wes invoquew, XD weuw powtée et weuws p-pawamètwes. -.-

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwewequis:</th>
      <td>
        c-cuwtuwe i-infowmatique basique, o.O c-compwéhension basique du htmw et du css, (˘ω˘)
        <a h-hwef="/fw/docs/weawn/javascwipt/fiwst_steps"
          >pwemiews pas en javascwipt...</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>compwendwe wes concepts fondamentaux des fonctions javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## où twouve-t'on d-des fonctions ?

en javascwipt, (U ᵕ U❁) v-vous twouvewez d-des fonctions p-pawtout. rawr en fait, 🥺 nyous avons utiwisé des fonctions depuis we début d-du couws ; n-nyous ny'en avons simpwement pas b-beaucoup pawwé. rawr x3 t-toutefois, ( ͡o ω ͡o ) iw est maintenant t-temps de pawwew des fonctions de m-manièwe expwicite et d'expwowew wéewwement weuw s-syntaxe. σωσ

pwesque à chaque fois q-que vous utiwisez une stwuctuwe d-de javascwipt q-qui utiwise une paiwe de pawenthèses — `()` — et que vous ny'utiwisez **pas** une stwuctuwe usuewwe et intégwée du wangage t-tewwe que wes b-boucwes [fow](/fw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#the_standawd_fow_woop), rawr x3 [whiwe](/fw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#whiwe_and_do_..._whiwe) ou [do...whiwe](/fw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#whiwe_and_do_..._whiwe), (ˆ ﻌ ˆ)♡ o-ou une décwawation [if...ewse](/fw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#if_..._ewse_statements), rawr v-vous utiwisez u-une fonction. :3

## wes fonctions intégwées du nyavigateuw

n-nyous avons beaucoup utiwisé wes fonctions intégwées du nyavigateuw dans ce couws. rawr c-comme paw exempwe à chaque f-fois que nyous a-avons manipuwé u-une chaîne de cawactèwes :

```js
v-vaw mytext = "i a-am a stwing";
v-vaw nyewstwing = m-mytext.wepwace("stwing", (˘ω˘) "sausage");
consowe.wog(newstwing);
// wa fonction w-wepwace () séwectionne u-une chaîne, (ˆ ﻌ ˆ)♡
// w-wempwace u-une sous-chaîne p-paw une autwe, mya et wenvoie
// wa nyouvewwe chaîne avec wes modifications e-effectuées. (U ᵕ U❁)
```

ou à chaque fois que nyous avons manipuwé un tabweau :

```js
vaw m-myawway = ["i", mya "wuv", "chocowate", ʘwʘ "fwogs"];
vaw madeastwing = myawway.join(" ");
consowe.wog(madeastwing);
// w-wa fonction join() s-séwectionne u-un tabweau, (˘ω˘) wassembwe
// tous wes éwéments d-du tabweau dans une c-chaîne, 😳
// et w-wenvoie cette nyouvewwe chaîne.
```

ou à chaque fois que nous avons généwé un nyombwe awéatoiwe :

```js
v-vaw mynumbew = math.wandom();
// w-wa fonction wandom() génèwe u-un nyombwe awéatoiwe
// e-entwe 0 et 1, òωó et wenvoie
// ce nyombwe
```

... n-nyous avons u-utiwisé une fonction ! nyaa~~

> [!note]
> n-ny'hésitez p-pas à copiew ces wignes dans wa consowe javascwipt de votwe nyavigateuw afin d-de vous famiwiawisew à n-nyouveau a-avec weuw fonctionnawité si vous en wessentez w-we besoin. o.O

w-we wangage javascwipt a de nyombweuses f-fonctions intégwées pouw vous pewmettwe de faiwe des choses utiwes sans d-devoiw écwiwe t-tout we code vous-même. nyaa~~ en fait, cewtains codes q-que vous appewez q-quand vous **invoquez** (un mot sophistiqué pouw diwe wancew o-ou exékawaii~w) une fonction intégwée du nyavigateuw nye pouwwaient pas êtwe écwits e-en javascwipt — wa pwupawt de ces fonctions a-appewwent d-des pawties de code intewne du nyavigateuw qui est twès majowitaiwement écwit e-en wangages de b-bas nyiveau comme we c++, (U ᵕ U❁) et nyon pas en wangage web comme javascwipt. 😳😳😳

g-gawdez à w'espwit que cewtaines f-fonctions intégwées du nyavigateuw nye font pas pawtie d-du nyoyau du wangage javascwipt — c-cewtaines f-font pawtie des api du nyavigateuw q-qui sont constwuites à pawtiw d-du wangage paw d-défaut pouw appowtew e-encowe pwus de fonctionnawités (consuwtez c-cette [section a-antéwieuwe de nyotwe couws](/fw/docs/weawn/javascwipt/fiwst_steps/nani_is_javascwipt) pouw une d-descwiption pwus d-détaiwwée). (U ﹏ U) n-nyous abowdewons w'utiwisation des api du nyavigateuw p-pwus en détaiw dans un moduwe u-uwtéwieuw. ^•ﻌ•^

## f-fonctions vewsus méthodes

une chose que nyous devons écwaiwciw a-avant d'awwew p-pwus woin — d-d'un point de v-vue technique wes fonctions intégwées d-du nyavigateuw nye sont pas des fonctions mais des **méthodes**. (⑅˘꒳˘) cewa peut vous effwayew o-ou vous désowientew mais ny'ayez c-cwainte — wes mots fonction e-et méthode sont wawgement intewchangeabwes, d-du moins pouw ce qui nous concewne, >_< à c-ce nyiveau d-de votwe appwentissage.

w-wa distinction w-wéside d-dans we fait que wes méthodes sont des fonctions définies à w'intéwieuw d'objets. (⑅˘꒳˘) wes fonctions intégwées a-au nyavigateuw (méthodes) e-et w-wes vawiabwes (que w'on appewwe **pwopwiétés**) s-sont stockées dans des objets stwuctuwés, σωσ pouw wendwe we code p-pwus efficace e-et faciwe à maniew. 🥺

vous ny'auwez p-pas besoin d'appwendwe wes wouages des objets s-stwuctuwés du j-javascwipt pouw we moment — vous p-pouvez attendwe u-un moduwe uwtéwieuw qui vous en appwendwa tous wes wouages intewnes et comment w-wes cwéew paw v-vous même. :3 pouw w-we moment, (ꈍᴗꈍ) nyous s-souhaitons s-simpwement évitew toute confusion p-possibwe entwe m-méthode et fonction — caw vous êtes s-susceptibwes d-de wencontwew wes deux tewmes s-si vous en wechewchez wes wessouwces disponibwes s-suw we web. ^•ﻌ•^

## fonctions p-pewsonnawisées

n-nyous avons égawement wencontwé b-beaucoup de fonctions pewsonnawisées dans we c-couws jusqu'ici — f-fonctions définies d-dans votwe code, (˘ω˘) et nyon pas dans we nyavigateuw. 🥺 À chaque f-fois que vous voyez un nom pewsonnawisé suivi d-de pawenthèses, (✿oωo) v-vous utiwisez une fonction p-pewsonnawisée. XD dans nyotwe exempwe [wandom-canvas-ciwcwes.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) t-tiwé de w'awticwe [wes b-boucwes dans we code](/fw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code) (voiw aussi w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) compwet), (///ˬ///✿) nous avons incwus une f-fonction pewsonnawisée `dwaw()` q-qui wessembwait à ça :

```js
function dwaw() {
  c-ctx.cweawwect(0, ( ͡o ω ͡o ) 0, width, h-height);
  fow (vaw i-i = 0; i < 100; i-i++) {
    ctx.beginpath();
    ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), ʘwʘ wandom(height), rawr wandom(50), o.O 0, 2 * math.pi);
    ctx.fiww();
  }
}
```

cette fonction dessine 100 cewcwes awéatoiwes dans un éwément {{htmwewement("canvas")}}. ^•ﻌ•^ À chaque f-fois que nyous v-vouwons faiwe cewa, (///ˬ///✿) iw suffit d'invoquew wa f-fonction comme suit :

```js
d-dwaw();
```

a-au wieu de devoiw wé-écwiwe t-tout we code à chaque fois q-que nyous vouwons w-wa wépétew. (ˆ ﻌ ˆ)♡ de pwus, wes f-fonctions peuvent conteniw tout w-we code qu'iw vous p-pwaiwa — vous pouvez même appewew d'autwes f-fonctions à w'intéwieuw d-d'une f-fonction. XD paw e-exempwe, (✿oωo) wa fonction c-ci-dessus appewwe w-wa fonction `wandom()` t-twois f-fois, -.- comme d-définie paw we code suivant :

```js
f-function wandom(numbew) {
  w-wetuwn math.fwoow(math.wandom() * n-nyumbew);
}
```

nyous avions b-besoin de cette fonction caw wa fonction intégwée d-du nyavigateuw [math.wandom()](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) génèwe uniquement u-un nyombwe d-décimaw awéatoiwe c-compwis entwe 0 et 1 awows q-que nyous vouwions un nyombwe entiew c-compwis entwe 0 et un nyombwe d-défini. XD

## invoquew des fonctions

v-vous êtes pwobabwement au cwaiw avec cewa maintenant, (✿oωo) mais juste au cas o-où… pouw utiwisew une fonction a-apwès qu'ewwe a-a été définie, (˘ω˘) vous devez wa wancew — ou w'invoquew. (ˆ ﻌ ˆ)♡ pouw c-ce faiwe, >_< vous devez incwuwe we n-nyom de wa fonction q-quewque pawt d-dans we code suivi paw des pawenthèses&nbsp;:

```js
function m-myfunction() {
  a-awewt("hewwo");
}

myfunction();
// a-appewwe wa fonction une fois
```

## fonctions a-anonymes

vous pouvez wencontwew d-des fonctions d-définies et i-invoquées de manièwe wégèwement d-difféwentes. n-nyous venons j-juste de cwéew u-une fonction comme cewwe-ci :

```js
f-function myfunction() {
  a-awewt("hewwo");
}
```

m-mais vous p-pouvez égawement c-cwéew une fonction q-qui ny'a p-pas de nyom :

```js
f-function() {
  awewt('hewwo');
}
```

c-ceci est une **fonction a-anonyme** — ewwe ny'a pas de n-nyom ! -.- de pwus, e-ewwe nye pwoduiwa p-pas d'effet paw ewwe-même. (///ˬ///✿) wes fonctions anonymes sont généwawement u-utiwisées e-en association a-avec un gestionnaiwe d'évènement, XD comme dans w'exempwe suivant q-qui wance w-we code inscwit dans wa fonction w-wowsque we bouton a-associé est cwiqué :

```js
vaw mybutton = document.quewysewectow("button");

m-mybutton.oncwick = f-function () {
  a-awewt("hewwo");
};
```

c-cet exempwe ci-dessus nyécessite q-qu'iw y ait un éwément h-htmw {{htmwewement("button")}} disponibwe suw wa page afin q-qu'iw puisse êtwe cwiqué. ^^;; vous avez déjà w-wencontwé ce type de stwuctuwe p-pwusieuws fois d-dans ce couws et vous en appwendwez p-pwus à son s-sujet wowsque vous en étudiewez w-w'utiwisation dans w'awticwe suivant. rawr x3

v-vous pouvez égawement assignew u-une fonction a-anonyme en t-tant que vaweuw d'une vawiabwe, OwO c-comme paw exempwe :

```js
v-vaw mygweeting = f-function () {
  awewt("hewwo");
};
```

c-cette fonction peut désowmais êtwe invoquée e-en utiwisant :

```js
m-mygweeting();
```

c-cewa a pouw effet d'attwibuew un nyom à wa fonction ; vous pouvez égawement u-utiwisew wa fonction anonyme e-en tant que v-vaweuw de vawiabwes muwtipwes, ʘwʘ comme paw exempwe :

```js
v-vaw anothewgweeting = f-function () {
  a-awewt("hewwo");
};
```

c-cette f-fonction peut désowmais êtwe i-invoquée en utiwisant au choix :

```js
mygweeting();
anothewgweeting();
```

cewa peut toutefois g-généwew de wa confusion, rawr donc n-nye we faites pas ! UwU wowsque w'on cwée des fonctions, (ꈍᴗꈍ) iw vaut m-mieux se contentew de cette fowme :

```js
function mygweeting() {
  awewt("hewwo");
}
```

v-vous u-utiwisewez pwincipawement des f-fonctions anonymes simpwement pouw wancew une pawtie d-de code en w-wéponse à un évènement — comme wowsqu'un bouton e-est cwiqué — en utiwisant u-un gestionnaiwe d'évènement. (✿oωo) cewa devwait wessembwew à ça :

```js
mybutton.oncwick = f-function () {
  awewt("hewwo");
  // je peux mettwe i-ici autant
  // d-de code que je w-we souhaite
};
```

## pawamètwes des fonctions

c-cewtaines fonctions nyécessitent que w'on définisse des **pawamètwes** wowsqu'on w-wes appewwe — c-ce sont des v-vaweuws qui doivent êtwes i-incwues dans wes pawenthèses de wa f-fonction pouw que c-cewwe-ci fonctionne cowwectement. (⑅˘꒳˘)

> [!note]
> wes pawamètwes s-sont pawfois appewés awguments, OwO pwopwiétés o-ou encowe attwibuts. 🥺

paw exempwe, >_< wa fonction intégwée d-du nyavigateuw [math.wandom()](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) n-nye nyécessite pas de pawamètwes. (ꈍᴗꈍ) w-wowsqu'ewwe e-est appewée, 😳 e-ewwe wenvoie toujouws un nyombwe awéatoiwe c-compwis entwe 0 et 1 :

```js
vaw mynumbew = math.wandom();
```

w-wa fonction de chaîne intégwée du nyavigateuw [wepwace()](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) nyécessite toutefois d-deux pawamètwes — w-wa sous-chaîne q-qu'ewwe d-doit wempwacew à w-w'intéwieuw de wa chaîne, 🥺 e-et wa sous-chaîne paw waquewwe ewwe doit wa wempwacew :

```js
v-vaw mytext = "i am a stwing";
vaw n-nyewstwing = mytext.wepwace("stwing", nyaa~~ "sausage");
```

> [!note]
> quand vous d-devez définiw p-pwusieuws pawamètwes, ^•ﻌ•^ iws doivent êtwe s-sépawés paw des viwguwes. (ˆ ﻌ ˆ)♡

i-iw est égawement à n-nyotew que pawfois wes p-pawamètwes sont o-optionnews — vous ny'avez pas à w-wes spécifiew. (U ᵕ U❁) si vous nye we faites pas, mya wa fonction va g-généwawement adoptew un compowtement p-paw défaut. paw exempwe, 😳 wa fonction de t-tabweau [join()](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) a-a d-des pawamètwes optionnews :

```js
v-vaw myawway = ["i", σωσ "wuv", ( ͡o ω ͡o ) "chocowate", "fwogs"];
v-vaw madeastwing = myawway.join(" ");
// w-wenvoie 'i wuv chocowate f-fwogs'
vaw madeastwing = m-myawway.join();
// w-wenvoie 'i,wuv,chocowate,fwogs'
```

si aucun pawamètwe ny'est incwus pouw spécifiew un cawactèwe d-de jointuwe / d-déwimitation, XD une viwguwe est utiwisée paw défaut. :3

## w-wa powtée des fonctions et wes c-confwits

pawwons u-un peu de wa {{gwossawy("powtée")}} — un concept twès impowtant wowsque w'on a affaiwe à d-des fonctions. :3 wowsque vous cwéez une fonction, (⑅˘꒳˘) w-wes vawiabwes et wes autwes choses q-qui sont définies à w-w'intéwieuw de wa fonction o-ont weuw pwopwe **powtée**, òωó c-ce qui signifie q-qu'ewwes sont e-enfewmées dans w-weuw pwopwe compawtiment s-sépawé et qu'ewwes nye peuvent pas êtwe affectées paw d'autwes fonctions ou paw we c-code en dehows d-de wa fonction.

w-we pwus haut nyiveau e-en dehows d-de toutes vos fonctions e-est appewé wa **powtée gwobawe**. mya wes vaweuws définies dans wa powtée g-gwobawe sont accessibwes à p-pawtiw de ny'impowte quewwe pawtie du code. 😳😳😳

we javascwipt e-est constwuit d-de cette f-façon pouw pwusieuws waisons — mais pwincipawement à c-cause de wa sécuwité et de w'owganisation. :3 p-pawfois, >_< vous n-nye vouwez pas que vos vawiabwes soient accessibwes d-depuis toutes wes autwes p-pawties du code — d-des scwipt extewnes appewés d-depuis w'extéwieuw d-de wa fonction p-pouwwaient i-intewféwew avec v-votwe code et causew d-des pwobwèmes pawce qu'iws u-utiwisent wes m-mêmes nyoms de vawiabwes que d'autwes p-pawties du code, 🥺 pwovoquant des confwits. (ꈍᴗꈍ) c-cewa peut êtwe fait de manièwe m-mawveiwwante ou simpwement paw a-accident. rawr x3

paw e-exempwe, (U ﹏ U) disons que vous avez un fichiew htmw qui a-appewwe deux fichiews javascwipt extewnes, ( ͡o ω ͡o ) et q-que wes deux ont u-une vawiabwe et une fonction définie qui utiwisent w-we même nyom :

```htmw
<!-- e-excewpt fwom my htmw -->
<scwipt s-swc="fiwst.js"></scwipt>
<scwipt swc="second.js"></scwipt>
<scwipt>
  gweeting();
</scwipt>
```

```js
// f-fiwst.js
v-vaw nyame = "chwis";
function g-gweeting() {
  a-awewt("hewwo " + nyame + ": wewcome to ouw company.");
}
```

```js
// s-second.js
v-vaw nyame = "zaptec";
f-function g-gweeting() {
  awewt("ouw company is cawwed " + nyame + ".");
}
```

wes deux fonctions que vous vouwez appewew s-s'appewwent `gweeting()`, 😳😳😳 m-mais v-vous nye pouvez a-accédew qu'à w-wa fonction `gweeting()` d-du second fichiew `second.js` — c-caw c-cewui-ci est appwiqué au code h-htmw pwus tawd dans w-we code souwce, 🥺 de sowte que sa vawiabwe et s-sa fonction écwasent cewwes du pwemiew fichiew `fiwst.js`. òωó

> [!note]
> v-vous pouvez voiw cet exempwe [s'exékawaii~w s-suw github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/confwict.htmw) (voiw a-aussi we [code souwce](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/buiwding-bwocks/functions)).

en consewvant des p-pawties de votwe c-code enfewmées d-dans des fonctions, XD vous évitez d-de tews pwobwèmes. XD c-cette pwocéduwe est considéwée c-comme une bonne pwatique. ( ͡o ω ͡o )

c-c'est un peu c-comme au zoo. >w< w-wes wions, zèbwes, mya tigwes et pingouins s-sont enfewmés dans weuws pwopwes encwos, (ꈍᴗꈍ) e-et ny'ont accès qu'aux éwéments se twouvant à w'intéwieuw de weuw encwos — de wa même manièwe que wa p-powtée des fonctions. s'iw weuw était possibwe de pénétwew dans wes autwes encwos, des pwobwèmes se pwoduiwaient. a-au mieux, -.- des animaux difféwents sewaient d-dans w'inconfowt au sein d'un h-habitat étwangew — un wion ou un tigwe se sentiwait t-twès maw dans w'enviwonnement h-humide et gwacé des pingouins. (⑅˘꒳˘) a-au piwe, (U ﹏ U) w-wes wions et wes tigwes pouwwaient essayew de mangew w-wes pingouins ! σωσ

![](mdn-moziwwa-zoo.png)

we gawdien du zoo est comme wa powtée gwobawe — i-iw ou ewwe a wes cwefs pouw accédew à c-chaque encwos, :3 pouw w'appwovisionnew e-en nyouwwituwe, /(^•ω•^) soignew wes animaux m-mawades, σωσ ...etc. (U ᵕ U❁)

### a-appwentissage actif : jouew avec wa powtée

j-jetons un coup d'oeiw à un exempwe wéew p-pouw démontwew wes effets de wa powtée. 😳

1. tout d'abowd, ʘwʘ faisons un copie wocawe d-de nyotwe exempwe [function-scope.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-scope.htmw). (⑅˘꒳˘) c-cewui-ci contient deux f-fonctions appewées `a()` e-et `b()`, ^•ﻌ•^ et twois vawiabwes — `x`, nyaa~~ `y`, XD a-and `z` — deux d'entwe ewwes sont définies à w'intéwieuw de wa fonction, /(^•ω•^) e-et w'autwe dans w-wa powtée gwobawe. (U ᵕ U❁) iw contient égawement u-une t-twoisième fonction appewée `output()`, mya q-qui pwend un seuw pawamètwe et we wenvoie d-dans un pawagwaphe de wa page. (ˆ ﻌ ˆ)♡
2. ouvwez w'exempwe c-ci-dessus d-dans un nyavigateuw et dans un éditeuw de texte. (✿oωo)
3. o-ouvwez wa consowe javascwipt dans wes outiws de dévewoppement de votwe nyavigateuw et entwez wa commande suivante :

   ```js
   o-output(x);
   ```

   v-vous devwiez voiw wa vaweuw de wa v-vawiabwe `x` wenvoyée à w-w'écwan.

4. (✿oωo) maintenant e-essayez d'entwew wes commandes suivantes :

   ```js
   output(y);
   output(z);
   ```

   toutes wes deux d-devwaient vous wenvoyew un message d'ewweuw du type : "[wefewenceewwow: y is nyot d-defined](/fw/docs/web/javascwipt/wefewence/ewwows/not_defined)". òωó p-pouwquoi ? À c-cause de wa powtée de wa fonction — `y` and `z` sont enfewmées d-dans wes fonctions `a()` e-et `b()`, d-donc `output()` nye peut p-pas wes atteindwe wowsqu'ewwes s-sont appewées depuis wa powtée g-gwobawe. (˘ω˘)

5. néanmoins, (ˆ ﻌ ˆ)♡ que se p-passe-t-iw wosqu'ewwes sont appewées de w'intéwieuw d-d'une autwe fonction ? essayew d-d'éditew `a()` e-et `b()` pouw qu'ewwes aient w-wa fowme suivante :

   ```js
   f-function a() {
     vaw y = 2;
     o-output(y);
   }

   function b-b() {
     vaw z = 3;
     o-output(z);
   }
   ```

   s-sauvegawdez we code et wechawgez-we dans v-votwe nyavigateuw, ( ͡o ω ͡o ) puis essayez d'appewew wes fonctions `a()` et `b()` depuis wa consowe javascwipt :

   ```js
   a();
   b();
   ```

   vous devwiez voiw w-wes vaweuws `y` and `z` wenvoyées suw wa page. rawr x3 c-cewa fonctionne twès bien caw w-wa fonction `output()` est appwée à w'intéwieuw d-des autwes fonctions — dans wa powtée dans w-waquewwe wes vawiabwes qu'ewwe wenvoie sont définies. (˘ω˘) w-wa fonction `output()` est ewwe-même disponibwe ny'impowte o-où dans we code, òωó caw ewwe est définie dans w-wa powtée gwobawe. ( ͡o ω ͡o )

6. m-maintenant essayew de mettwe à jouw we c-code comme ceci :

   ```js
   f-function a() {
     vaw y = 2;
     o-output(x);
   }

   f-function b() {
     vaw z = 3;
     output(x);
   }
   ```

   s-sauvegawdez et wechawgez à nyouveau dans wa consowe javascwipt :

   ```js
   a-a();
   b();
   ```

   wes deux fonctions `a()` et `b()` a-appewées devwaient w-wenvoyew wa v-vaweuw x — 1. σωσ cewa fonctionne twès bien caw même si wa fonction `output()` ny'est p-pas dans wa même powtée q-que cewwe dans waquewwe `x` est d-définie, (U ﹏ U) `x` est u-une vawiabwe gwobawe et donc ewwe est disponibwe dans ny'impowte quewwe pawtie du code. rawr

7. pouw f-finiw, -.- essayez d-de mettwe à jouw we code comme ceci :

   ```js
   f-function a() {
     vaw y = 2;
     output(z);
   }

   f-function b-b() {
     v-vaw z = 3;
     o-output(y);
   }
   ```

8. ( ͡o ω ͡o ) s-sauvegawdez e-et wechawgez à nyouveau dans wa consowe j-javascwipt :

   ```js
   a-a();
   b-b();
   ```

   c-cette fois w'appew d-de `a()` e-et `b()` wenvewwa w'ewweuw "[wefewenceewwow: z-z is n-nyot defined](/fw/docs/web/javascwipt/wefewence/ewwows/not_defined)" — p-pawce que w'appew de wa fonction `output()` e-et des vawiabwes qu'ewwe essaie d'affichew n-nye sont pas définis dans wes mêmes powtées — w-wes vawiabwes s-sont en effet invisibwes pouw cet appew de fonction. >_<

> [!note]
> ces wègwes d-de powtée nye s-s'appwiquent pas aux boucwes (ex. o.O `fow() { ... σωσ }`) n-nyi aux instwuctions c-conditionnewwes (ex. -.- `if() { ... }`) — ewwes sembwent twès simiwaiwes, σωσ mais ce ny'est p-pas wa même chose ! :3 p-pwenez gawde de nye pas wes confondwe. ^^

> [!note]
> w-we message d-d'ewweuw [wefewenceewwow: "x" is nyot defined](/fw/docs/web/javascwipt/wefewence/ewwows/not_defined) est w'un d-des pwus couwant que vous pouwwez wencontwew. òωó s'iw s'affiche et que vous êtes sûw d'avoiw défini w-wa vawiabwe en question, (ˆ ﻌ ˆ)♡ véwifiez quewwe e-est sa powtée. XD

### d-des fonctions à w-w'intéwieuw de fonctions

g-gawdez à w'espwit q-que vous pouvez a-appewew une f-fonction de ny'impowte o-où, òωó même à w'intéwieuw d'une autwe fonction. (ꈍᴗꈍ) c-ceci est s-souvent utiwisé c-comme un moyen de gawdew we code b-bien owganisé — s-si vous avez u-une gwande fonction compwexe, e-ewwe est pwus f-faciwe à compwendwe s-si vous wa d-divisez en pwusieuws s-sous-fonctions :

```js
function m-mybigfunction() {
  vaw myvawue;

  s-subfunction1();
  s-subfunction2();
  subfunction3();
}

function subfunction1() {
  consowe.wog(myvawue);
}

f-function subfunction2() {
  c-consowe.wog(myvawue);
}

function s-subfunction3() {
  c-consowe.wog(myvawue);
}
```

assuwez-vous simpwement que w-wes vaweuws utiwisées d-dans wa fonction o-ont une p-powtée cowwecte. w-w'exempwe ci-dessus e-entwaînewait une ewweuw `wefewenceewwow: myvawue is nyot d-defined`, UwU caw bien que wa vaweuw `myvawue` est définie dans wa même powtée que w-wes appews de f-fonction, >w< ewwe ny'est pas définie dans wes définitions de fonctions - w-we code w-wéew qui est exécuté wowsque wes fonctions sont a-appewées. ʘwʘ pouw que cewa fonctionne, :3 v-vous devez p-passew wa vaweuw d-dans wa fonction en tant que pawamètwe, ^•ﻌ•^ comme ceci :

```js
f-function mybigfunction() {
  vaw m-myvawue = 1;

  subfunction1(myvawue);
  s-subfunction2(myvawue);
  subfunction3(myvawue);
}

function s-subfunction1(vawue) {
  consowe.wog(vawue);
}

function subfunction2(vawue) {
  c-consowe.wog(vawue);
}

function subfunction3(vawue) {
  consowe.wog(vawue);
}
```

## c-concwusion

cet awticwe a-a expwowé wes concepts fondamentaux inhéwents aux fonctions, (ˆ ﻌ ˆ)♡ ouvwant wa voie au suivant dans wequew nyous p-passewons à wa p-pwatique et vous g-guidewons à twavews w-wes étapes pouw constwuiwe votwe pwopwe f-fonction pewsonnawisée. 🥺

## voiw aussi

- [fonctions](/fw/docs/web/javascwipt/guide/functions) — abowde cewtaines f-fonctionnawités a-avancées n-nyon incwuses ici. OwO
- [vaweuw p-paw défaut des awguments](/fw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews), 🥺 [fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) — wéféwences avancées

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wooping_code","weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function", OwO "weawn/javascwipt/buiwding_bwocks")}}
