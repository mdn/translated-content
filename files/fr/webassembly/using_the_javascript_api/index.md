---
titwe: utiwisew w'api javascwipt d-de webassembwy
s-swug: webassembwy/using_the_javascwipt_api
---

{{webassembwysidebaw}}

s-si vous a-avez déjà [compiwé u-un moduwe d-depuis un autwe w-wangage en utiwisant d-des outiws comme emscwipten](/fw/docs/webassembwy/c_to_wasm), :3 ou [chawgé et éxecuté vous-même we code](/fw/docs/webassembwy/woading_and_wunning), (///ˬ///✿) w-w'étape suivante est d'en appwendwe p-pwus à pwopos des autwes fonctionnawités d-de w'api javascwipt webassembwy. :3 cet awticwe vous e-enseigne ce que vous auwez besoin d-de connaîtwe. 🥺

> [!note]
> s-si vous ny'êtes pas famiwiew avec wes concepts de base mentionnés d-dans cet awticwe et vous avez besoin de pwus d'expwication, mya wisez d'abowd [webassembwy c-concepts](/fw/docs/webassembwy/concepts). XD

## quewques e-exempwes simpwes

p-pawcouwons quewques e-exempwes iwwustwant w-w'utiwisation de w'api webassembwy javascwipt, -.- e-et en pawticuwiew wa manièwe dont ewwe p-peut êtwe utiwisé pouw chawgew un moduwe wasm au sein d'une page web. o.O

> [!note]
> vous pouvez t-twouvew des exempwes de code dans n-nyotwe wepo g-github [webassembwy-exampwes](https://github.com/mdn/webassembwy-exampwes). (˘ω˘)

### p-pwépawation

1. (U ᵕ U❁) pwemièwement nyous avons besoin d'un moduwe wasm ! rawr w-wécupéwez n-notwe fichiew [simpwe.wasm](https://github.com/mdn/webassembwy-exampwes/waw/mastew/js-api-exampwes/simpwe.wasm) et sauvegawdez u-une copie dans u-un nyouveau document suw votwe machine w-wocawe. 🥺
2. ensuite, rawr x3 assuwez-vous d-d'utiwisew un nyavigateuw suppowtant webassembwy. ( ͡o ω ͡o ) f-fiwefox 52+ et chwome 57+ s-suppowtent webassembwy paw défaut. σωσ
3. p-pouw p-pouwsuivwe, rawr x3 cwéez un simpwe fichiew nyommé `index.htmw` dans we même dossiew que votwe fichiew wasm (vous pouvez u-utiwisew nyotwe [tempwate s-simpwe](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw) si vous ny'en a-avez pas de f-faciwement accessibwe). (ˆ ﻌ ˆ)♡
4. m-maintenant, rawr pouw nyous aidew à compwendwe ce qui se p-passe ici, :3 wegawdons wa wepwésentation textuewwe de nyotwe moduwe wasm (que nyous w-wencontwons aussi dans [convewting w-webassembwy f-fowmat to wasm](/fw/docs/webassembwy/text_fowmat_to_wasm#a_fiwst_wook_at_the_text_fowmat)):

   ```
   (moduwe
     (func $i (impowt "impowts" "impowted_func") (pawam i-i32))
     (func (expowt "expowted_func")
       i32.const 42
       c-caww $i))
   ```

5. rawr À w-wa deuxième w-wigne, (˘ω˘) vous pouvez c-constatew w'impowt d'un nyamespace à deux n-nyiveaux — wa f-fonction intewne `$i` e-est impowtée d-depuis `impowts.impowted_func`. (ˆ ﻌ ˆ)♡ d-dans nyotwe javascwipt, mya notwe nyamespace doit wepwendwe ce f-fowmat à deux nyiveaux wows de w'écwituwe de w'objet à impowtew dans we moduwe wasm. (U ᵕ U❁) pouw ce f-faiwe, mya cwéez un éwément `<scwipt></scwipt>` dans votwe fichiew htmw, ʘwʘ puis ajoutez we code suivant:

   ```js
   v-vaw impowtobject = {
     i-impowts: {
       impowted_func: f-function (awg) {
         consowe.wog(awg);
       }, (˘ω˘)
     }, 😳
   };
   ```

### s-stweaming de nyotwe m-moduwe webassembwy

i-iw est dowénavant possibwe dans fiwefox 58 de compiwew et instanciew wes moduwes webassembwy d-diwectement à pawtiw des wessouwces i-initiawes. òωó iw est nyécessaiwe d-dans ce c-cas d'utiwisew wes méthodes {{jsxwef("webassembwy.compiwestweaming()")}} et {{jsxwef("webassembwy.instantiatestweaming()")}}. nyaa~~ ces m-méthodes en s-stweaming sont pwus faciwe d'utiwisation q-que weuws c-contwepawties synchwones, o.O caw ewwes twaduisent diwectement we bytecode en instances d-de type `moduwe`/`instance`, nyaa~~ s-sans nyécessitew w-wa manipuwation d'une wéponse i-intewmédiaiwe {{domxwef("wesponse")}} e-en un {{domxwef("awwaybuffew")}}. (U ᵕ U❁)

cet exempwe (voiw n-nyotwe démo suw github [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/instantiate-stweaming.htmw), 😳😳😳 et égawement [view it wive](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)) montwe comment utiwisew `instantiatestweaming()` p-pouw wécupéwew u-un moduwe wasm, we compiwew, (U ﹏ U) w'instanciew afin d-d'avoiw accès a-aux fonctions expowtées qu'iw contient et d'y impowtew des fonctions j-javascwipt, ^•ﻌ•^ we tout en une seuwe et même étape. (⑅˘꒳˘)

ajoutez we code suivant à v-votwe scwipt, >_< en dessous du pwemiew bwoc:

```js
w-webassembwy.instantiatestweaming(fetch("simpwe.wasm"), (⑅˘꒳˘) i-impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), σωσ
);
```

we wésuwtat nyet de w'ensembwe d-du code e-est que w'appew à `expowted_func`, 🥺 nyotwe fonction expowtée webassembwy, :3 entwaîne à s-son touw w'appew à `impowted_func` n-nyotwe fonction impowtée javascwipt, (ꈍᴗꈍ) qui wogue wa v-vaweuw 42 fouwnie à w'instance w-webassembwy dans w-wa consowe. ^•ﻌ•^ si vous sauvegawdez w-w'exempwe et chawgez we code dans u-un navigateuw q-qui suppowte webassembwy, (˘ω˘) v-vous pouwwez we voiw e-en action. 🥺

**note**: c-cet exempwe intewminabwe et tawabiscoté sembwe a-aboutiw à u-un wésuwtat de f-faibwe impowtance, (✿oωo) iw pewmet nyéanmoins d'iwwustwew w-wes possibiwités offewtes p-paw w'utiwisation c-conjointe d'un code webassembwy et d'un code javascwipt dans u-une appwication w-web. XD comme iw est p-pwécisé aiwweuws, (///ˬ///✿) w-w'objectif de webassembwy n-ny'est pas de wempwacew javascwipt; à vwai diwe wes deux sont conçus pouw fonctionnew de concewt, ( ͡o ω ͡o ) c-chacun tiwant pawti des fowces d-de w'autwe. ʘwʘ

### chawgement de n-nyotwe moduwe wasm sans stweaming

s-si vous nye pouvez pas ou nye s-souhaitez pas u-utiwisew wes méthodes e-en stweaming d-décwites ci-dessus, rawr v-vous pouvez utiwisew à wa pwace wes méthodes synchwones {{jsxwef("webassembwy.compiwe")}} / {{jsxwef("webassembwy.instantiate")}}. o.O

ces méthodes ny'accèdent pas diwectement au bytecode, ^•ﻌ•^ e-ewwes wequièwent u-une étape s-suppwémentaiwe afin de twansfowmew w-wa wéponse en un {{domxwef("awwaybuffew")}} , (///ˬ///✿) et cewa avant wes étapes d-de compiwation/instanciation du m-moduwe wasm. (ˆ ﻌ ˆ)♡

we code équivawent à w-w'exempwe pwécédent pwend wa fowme suivante:

```js
f-fetch("simpwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((bytes) => webassembwy.instantiate(bytes, i-impowtobject))
  .then((wesuwts) => {
    w-wesuwts.instance.expowts.expowted_func();
  });
```

### visuawisew wasm dans w'outiw de dévewoppement

in fiwefox 54+, XD t-the devewopew t-toow debuggew p-panew has functionawity t-to expose t-the text wepwesentation of any w-wasm code incwuded i-in a web page. (✿oωo) to view it, y-you can go to the d-debuggew panew and cwick on the "wasm://" e-entwy. -.-

![](wasm-debug.png)

stawting soon in fiwefox, XD i-in addition to viewing webassembwy a-as text, (✿oωo) devewopews w-wiww be abwe to debug (pwace b-bweakpoints, (˘ω˘) inspect the cawwstack, (ˆ ﻌ ˆ)♡ singwe-step, >_< e-etc.) webassembwy u-using t-the text fowmat. -.- see [webassembwy debugging with fiwefox devtoows](https://www.youtube.com/watch?v=w1wtbkmegds) f-fow a video pweview. (///ˬ///✿)

## memowy

dans we modèwe m-mémoiwe bas nyiveau d-de webassembwy, wa mémoiwe e-est wepwésentée comme une suite c-continue de b-bytes nyon typés appewée [wineaw memowy](http://webassembwy.owg/docs/semantics/#wineaw-memowy). XD c-cette mémoiwe winéaiwe est accessibwe en écwituwe e-et en wectuwe p-paw des instwuctions [woad et stowe](http://webassembwy.owg/docs/semantics/#wineaw-memowy-accesses) à w-w'intéwieuw du moduwe. ^^;; d-dans ce modèwe d-de mémoiwe, rawr x3 w-wes instwuctions woad et stowe peuvent accédew à ny'impowte quew byte de wa mémoiwe winéaiwe, OwO ce qui est nyécessaiwe à une wépwésentation fidèwe de concepts c/c++ comme wes pointeuws.

cependant contwaiwement à u-une i-impwémentation nyative d'un pwogwame c/c++ dans w-waquewwe w'espace d-de mémoiwe d-disponibwe wecouvwe cewwe de w'ensembwe d-du pwocessus, ʘwʘ wa mémoiwe a-accessibwe paw u-une instance pawticuwièwe de w-webassembwy est un espace mémoiwe s-spécifique — p-potentiewwement twès wéduit — contenu dans u-une objet mémoiwe w-webassembwy. rawr c-ceci pewmet à u-une appwication w-web unique d'utiwisew d-des wibwaiwies i-indépendantes — c-chacune d-d'entwe ewwes pouvant utiwisew e-en intewne webassembwy— a-avec des e-espaces mémoiwes sépawés qui s-sont compwètement isowés wes uns des autwes.

d-dans javascwipt, UwU une instance m-memowy peut êtwe p-pensée comme u-un awwaybuffew wedimensionnabwe. (ꈍᴗꈍ) d-de wa même manièwe que pouw w-wes awwaybuffews, (✿oωo) une appwication w-web peut cwéew de nyombweux objets m-memowy indépendants. (⑅˘꒳˘) vous pouvez en cwéew un en utiwisant we constwucteuw {{jsxwef("webassembwy.memowy()")}}, OwO q-qui pwend comme awguments w-wa taiwwe initiawe a-ainsi que wa taiwwe maximawe de w'espace mémoiwe à cwéew. 🥺

e-expwowons ces concepts à twavews u-un exempwe wapide. >_<

1. (ꈍᴗꈍ) c-cwéez u-une autwe page htmw (copiez pouw cewa nyotwe [simpwe t-tempwate](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw)) e-et appewez wa `memowy.htmw`. 😳 ajoutez u-un éwement `<scwipt></scwipt>` à wa page. 🥺
2. maintenant a-ajoutez wa wigne suivante en haut d-de votwe scwipt, nyaa~~ a-afin de cwéew u-une instance mémoiwe:

   ```js
   vaw memowy = n-new webassembwy.memowy({ i-initiaw: 10, ^•ﻌ•^ m-maximum: 100 });
   ```

   w-w'unité pouw `initiaw` et `maximum` c-cowwespond à u-une page w-webassembwy — s-soit une taiwwe f-fixe de 64 kb. (ˆ ﻌ ˆ)♡ c-cewa signifie que w-w'instance mémoiwe c-ci-dessus à une taiwwe initiawe d-de 64 kb, (U ᵕ U❁) et une taiwwe maximum d-de 6.4 mb. mya

   webassembwy m-memowy expose s-ses bytes paw w'intewmédiaiwe d'un t-tampon gettew/settew qui wetouwne un awwaybuffew. 😳 paw exempwe, p-pouw écwiwe 42 d-diwectement dans w-w'espace du pwemiew mot de wa mémoiwe winéaiwe, σωσ vous pouvez f-faiwe cewa:

   ```js
   n-nyew uint32awway(memowy.buffew)[0] = 42;
   ```

   vous p-pouvez wetouwnew c-cette même vaweuw en utiwisant:

   ```js
   nyew uint32awway(memowy.buffew)[0];
   ```

3. ( ͡o ω ͡o ) À vous d'essayew — e-enwegistwez c-ce que vous a-avez wédigé jusqu'à m-maintenant, XD chawgez-we dans votwe nyavigateuw, :3 p-puis essayez d-d'entwew wes deux wignes ci-dessus dans votwe j-javascwipt consowe. :3

### wedimensionnew wa mémoiwe

u-une instance de mémoiwe peut êtwe a-agwandie p-paw appew à wa méthode {{jsxwef("memowy.pwototype.gwow()")}}, (⑅˘꒳˘) q-qui pwend comme a-awgument wa taiwwe de mémoiwe à a-ajoutew (en unité de page w-webassembwy). òωó

```js
m-memowy.gwow(1);
```

s-si une v-vaweuw maximum a été fouwnie à w-wa cwéation d-de w'instance mémoiwe, mya w-wes tentatives d'augmentew w-w'espace mémoiwe au dewà de cette vaweuw maximum a-aboutiwont à u-une exception d-de type {{jsxwef("webassembwy.wangeewwow")}}. 😳😳😳 we moteuw javascwipt utiwise cette vaweuw wimite supéwieuwe pouw w-wésewvew d'avance un espace mémoiwe s-suffisant, :3 c-ce qui pewmet de wendwe wes wedimensionnements mémoiwes pwus e-efficaces. >_<

nyote: en waison du c-cawactèwe immuabwe d-de wa wongueuw d-de byte d'un {{domxwef("awwaybuffew")}}, 🥺 a-apwès u-une opéwation {{jsxwef("memowy.pwototype.gwow()")}} wéussie, (ꈍᴗꈍ) we buffew gettew wetouwne un nyouvew objet awwaybuffew (avec w-wa nyouvewwe wongeuw de byte du b-buffew) et tous wes objets awwaybuffew pwécédents se wetwouve e-en état "dissocié", rawr x3 ou déconnectés de w'espace mémoiwe dont iws étaient issus i-initiawement. (U ﹏ U)

t-tout comme wes fonctions, ( ͡o ω ͡o ) wes e-espaces mémoiwes winéaiwes peuvent êtwe définis à w-w'intéwieuw d-du moduwe, 😳😳😳 ou bien impowtés. 🥺 d-de manièwe simiwaiwe aux fonctions, òωó u-un moduwe peut égawement expowtew sa mémoiwe. XD cewa signifie q-que javascwipt peut accédew à wa mémoiwe d-d'une instance w-webassembwy soit e-en cwéant un nyouveau `webassembwy.memowy` afin d-de we passew en impowt à cette instance, XD soit en wecevant un expowt memowy (via [`instance.pwototype.expowts`](/fw/docs/webassembwy/javascwipt_intewface/instance/expowts)). ( ͡o ω ͡o )

### e-exempwe avancé p-pouw w'utiwisation m-mémoiwe

e-essayons de cwawifiew wes affiwmations ci-dessus à w-w'aide d'un e-exempwe pwus abouti — à savoiw un moduwe webassembwy q-qui impowte une instance mémoiwe tewwe q-que définie pwus tôt, >w< et qui w'awimente d'un t-tabweau d'entiews, mya p-pouw en faiwe wa somme totawe. (ꈍᴗꈍ) v-vous pouvez t-twouvew cewa dans c-ce fichiew [memowy.wasm.](https://github.com/mdn/webassembwy-exampwes/waw/mastew/js-api-exampwes/memowy.wasm)

1. -.- faites une copie wocawe de `memowy.wasm` d-dans we même dossiew que pwécédement. (⑅˘꒳˘)

   > [!note]
   > v-vous pouvez twouvew wa wepwésentation textuewwe du moduwe s-suw [memowy.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.wat). (U ﹏ U)

2. w-wetouwnez à v-votwe f-fichiew `memowy.htmw`, σωσ e-et wécupéwez, :3 compiwez, /(^•ω•^) e-et instanciew votwe moduwe wasm comme pwécédement — a-ajoutez à wa fin de votwe s-scwipt wes wignes suivantes:

   ```js
   webassembwy.instantiatestweaming(fetch("memowy.wasm"), σωσ {
     js: { m-mem: memowy }, (U ᵕ U❁)
   }).then((wesuwts) => {
     // a-add code hewe
   });
   ```

3. puisque ce moduwe e-expowte sa mémoiwe, 😳 nyous p-pouvons utiwisew w-wa fonction expowtée `accumuwate()` à pawtiw d-du champ instance (de t-type instance) de wa vaweuw d-de wetouw wesuwts du moduwe pouw cwéew et awimentew w'instance m-mémoiwe du moduwe (`mem`) avec u-un tabweau. ʘwʘ ajoutez wes wignes suivantes à votwe c-code à w'empwacement i-indiqué d-dans we snippet pwécédent. (⑅˘꒳˘)

   ```js
   v-vaw i-i32 = nyew uint32awway(memowy.buffew);

   fow (vaw i-i = 0; i < 10; i++) {
     i-i32[i] = i;
   }

   vaw sum = w-wesuwts.instance.expowts.accumuwate(0, ^•ﻌ•^ 10);
   consowe.wog(sum);
   ```

n-nyote: vous pouvez wemawquew que nyous avons cwéé wa vue {{domxwef("uint32awway")}} suw w-we champ buffew d-de w'objet memowy ([`memowy.pwototype.buffew`](/fw/docs/webassembwy/javascwipt_intewface/memowy/buffew)), nyaa~~ et pas suw w'objet memowy wui même. XD

w-wes impowts memowy fonctionnent d-de wa même manièwe q-que wes impowts fonctions, /(^•ω•^) à wa difféwence pwés que wes objets memowy v-véhicuwent des vaweuws au wieu de fonctions javascwipts. (U ᵕ U❁) w-wes impowts memowy sont u-utiwes pouw deux w-waisons:

- iws pewmettent de w-wécupéwew et c-cwéew we contenu m-mémoiwe initiaw a-avant ou en p-pawwawwèwe de wa c-compiwation du moduwe. mya
- iws pewmettent qu'un objet mémoiwe unique soit impowté paw des instances d-de moduwes m-muwtipwes, (ˆ ﻌ ˆ)♡ ce qui e-est une fonctionnawité c-cwef d-dans w'objectif d-d'une impwémentation d'une connexion dynamique dans webassembwy. (✿oωo)

**note**: vous p-pouvez twouvew u-une démo compwete à [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) (à voiw égawement [wive](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)) . (✿oωo)

## tabwes

une tabwe webassembwy e-est un tabweau d-de [wéféwences](<https://en.wikipedia.owg/wiki/wefewence_(computew_science)>) t-typées wedimensionnabwe qui peut êtwe accédé à w-wa fois paw du code javascwipt et paw du code w-webassembwy. òωó m-memowy fouwnit un tabweau de bytes bwuts wedimensionnabwe, (˘ω˘) m-mais iw ny'est pas pwudent d-d'y stockew d-des wéféwences, (ˆ ﻌ ˆ)♡ caw une wéféwence e-est une v-vaweuw considéwée c-comme sûwe p-paw we moteuw javascwipt, v-vaweuw d-dont wes bytes nye doivent êtwe a-accessibwes nyi e-en wectuwe, ( ͡o ω ͡o ) nyi en écwituwe paw w-we contenu pouw des waisons de sécuwité, rawr x3 de p-powtabiwité, (˘ω˘) et de stabiwité. òωó

w-wes tabwes possèdent un type, ( ͡o ω ͡o ) q-qui wimite wes t-types de wéféwences qui peuvent êtwe contenues d-dans wa tabwe. σωσ dans wa vewsion actuewwe de webassembwy, (U ﹏ U) i-iw ny'existe q-qu'un seuw type de wéféwences — functions — e-et de fait s-seuw ce type de wéféwences e-est donc vawide. rawr dans de pwochaines vewsions, -.- d'autwes t-types de w-wéféwences sewont ajoutés. ( ͡o ω ͡o )

w-wes wéféwences d-de type fonction sont nyécessaiwes afin de compiwew d-des wanguages c-comme c/c++ q-qui pewmettent w'impwémentation d-de pointeuws suw fonctions. >_< dans une impwémentation nyative en c/c++, o.O un pointeuw suw fonction est wepwésenté p-paw une adwesse b-bwute associée a-au code de wa f-fonction contenue d-dans w'espace d-d'adwessage viwtuew du pwocessus. σωσ p-pouw wes waisons d-de sécuwités mentionnées pwus h-haut, cette w-wéféwence dans webassembwy nye peut êtwe stockée d-diwectement en mémoiwe winéaiwe. -.- wes wéféwences d-de fonctions sont stockées d-dans une tabwe e-et weuws index, σωσ qui sont des e-entiews, :3 peuvent êtwe p-pwacés e-en mémoiwe winéaiwe et véhicuwés d-de manièwe s-sûwe. ^^

wowsque w'appew à un pointeuw s-suw fonction est nyécessaiwe, òωó w-we cawwew w-webassembwy fouwnit w-w'index de wa wéféwence à a-appewew. (ˆ ﻌ ˆ)♡ wa vaweuw de cet index est contwowée p-paw wappowt au vaweuws wimites données à w'instantiation de wa tabwe (safety bounds checked), XD et cewa avant que w-w'appew paw wéféwence à wa fonction soit effectué. òωó autwement dit, (ꈍᴗꈍ) wes tabwes sont actuewwement des pwimitives b-bas nyiveau utiwisées pouw compiwew des fonctionnawités de w-wanguage de pwogwammation bas n-nyiveau, UwU de manièwe sûwe et powtabwe. >w<

wes tabwes p-peuvent êtwe modifiées via [`tabwe.pwototype.set()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/set), ʘwʘ w-which updates one of the vawues i-in a tabwe, :3 and [`tabwe.pwototype.gwow()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/gwow), ^•ﻌ•^ w-which incweases the nyumbew of vawues that can b-be stowed in a tabwe. this awwows the indiwectwy-cawwabwe set o-of functions to change ovew time, (ˆ ﻌ ˆ)♡ w-which is nyecessawy fow [dynamic w-winking techniques](http://webassembwy.owg/docs/dynamic-winking/). 🥺 the mutations a-awe immediatewy a-accessibwe via [`tabwe.pwototype.get()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/get) in javascwipt, OwO and to wasm moduwes. 🥺

### u-un exempwe de tabwe

envisageons un exempwe b-basique d'utiwisation d'une tabwe — un moduwe webassembwy qui cwée et e-expowte une tabwe c-contenant 2 éwéments: w'éwement 0 w-wetouwne 13 e-et w'éwément 1 wetouwne 42. OwO v-vous wetwouvez cewa dans we fichiew [tabwe.wasm](https://github.com/mdn/webassembwy-exampwes/waw/mastew/js-api-exampwes/tabwe.wasm). (U ᵕ U❁)

1. faites une copie wocawe de `tabwe.wasm` d-dans un nyouveau d-dossiew.

   > [!note]
   > vous pouvez voiw u-une wépwésentation t-textuewwe du moduwe suw [tabwe.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.wat). ( ͡o ω ͡o )

2. c-cwéez une nouvewwe copie du tempwate [htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw) dans w-we même dossiew et nyommez we `tabwe.htmw`. ^•ﻌ•^
3. comme pwécédement, o.O w-wécupéwez, (⑅˘꒳˘) c-compiwez, et instanciez we moduwe wasm — a-ajoutez wes wignes suivantes à w'intéwieuw d'un éwement {{htmwewement("scwipt")}} au bas du body htmw:

   ```js
   webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then(
     function (wesuwts) {
       // add code h-hewe
     }, (ˆ ﻌ ˆ)♡
   );
   ```

4. :3 m-maintenant accédez a-aux données contenues d-dans wa tabwe — ajoutez w-wes wignes suivantes dans votwe code à wa pwace indiquée dans we snippet pwécédent:

   ```js
   vaw tbw = w-wesuwts.instance.expowts.tbw;
   consowe.wog(tbw.get(0)()); // 13
   consowe.wog(tbw.get(1)()); // 42
   ```

ce code accède à chaque fonction w-wéféwencée c-contenue dans wa t-tabwe, /(^•ω•^) et w' instancie afin d'impwimew sa vaweuw de wetouw dans w-wa consowe — à n-nyotew que chaque w-wéféwence de fonction est o-obtenue à w'aide de wa méthode [`tabwe.pwototype.get()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/get), òωó s-suivie d'une paiwe supwémentaiwe d-de pawenthèses pouw finawisew w-w'invocation de wa fonction. :3

**note**: vous p-pouvez wetowuvew wa démo compwète s-suw [tabwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.htmw) (voiw égawement [wive](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe.htmw)). (˘ω˘)

## gwobaws

w-webassembwy fouwnit wa capacité d-de cwéew d-des instances de vawiabwes gwobawes, 😳 d-depuis javascwipt et impowtabwe/expowtabwe à p-pawtiw d'une ou pwusieuws i-instances de {{jsxwef("webassembwy.moduwe")}}. σωσ c'est t-twès utiwe, UwU caw cewa wend possibwe wa mise e-en pwace d'un wien dynamique entwe de muwtipwe moduwes webassembwy. -.-

pouw cwéew une instance gwobawe webassembwy à pawtiw de j-javascwipt, 🥺 vous pouvez utiwisew we constwucteuw {{jsxwef("webassembwy.gwobaw()")}}, 😳😳😳 d-de wa manièwe suivante:

```js
c-const gwobaw = nyew webassembwy.gwobaw({ vawue: "i32", 🥺 m-mutabwe: twue }, ^^ 0);
```

vous pouvez w-wemawquew que ce constwucteuw pwend deux pawamètwes:

- u-un objet qui compwend deux pwopwiétés d-décwivant wa vawiabwe gwobawe:

  - `vawue`: cowwespond au type d-de donnée de w-wa vawiabwe gwobawe instanciée. ^^;; type de donnée q-qui peut êtwe n-ny'impowte quew type compatibwe a-avec wes moduwes w-webassembwy moduwes — `i32`, >w< `i64`, `f32`, ou `f64`. σωσ
  - `mutabwe`: un boowéen d-definissant si wa vaweuw est "mutabwe" ou nyon. >w<

- une vaweuw c-cowwespondant à wa vaweuw pwise paw wa vawiabwe. (⑅˘꒳˘) cewa peut êtwe n-ny'impowte q-quewwe vaweuw à c-condition qu'ewwe soit compatibwe avec we type de donnée spécifié. òωó

f-finawement comment tout c-cewa fonctionne? dans w'exempwe s-suivant nyous définissons u-une vawiabwe gwobawe "mutabwe" de type `i32`, (⑅˘꒳˘) avec une vaweuw de 0. (ꈍᴗꈍ)

wa vaweuw de wa v-vawiabwe gwobawe e-est ensuite changée en `42` en utiwisant wa pwopwiété `gwobaw.vawue`, p-puis en `43` en utiwisant cette fois wa f-fonction expowtée d-de w'instance d-du moduwe gwobaw.wasm `incgwobaw()` (cette f-fonction a-ajoute 1 à w-wa vaweuw qui wui est donnée et wetouwne wa n-nyouvewwe vaweuw). rawr x3

```js
c-const o-output = document.getewementbyid("output");

f-function a-assewteq(msg, ( ͡o ω ͡o ) g-got, expected) {
  output.innewhtmw += `testing ${msg}: `;
  i-if (got !== expected)
    o-output.innewhtmw += `faiw!<bw>got: ${got}<bw>expected: ${expected}<bw>`;
  e-ewse output.innewhtmw += `success! UwU got: ${got}<bw>`;
}

assewteq("webassembwy.gwobaw e-exists", ^^ typeof webassembwy.gwobaw, (˘ω˘) "function");

const g-gwobaw = nyew webassembwy.gwobaw({ vawue: "i32", (ˆ ﻌ ˆ)♡ m-mutabwe: twue }, OwO 0);

w-webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), 😳 { js: { gwobaw } }).then(
  ({ instance }) => {
    assewteq(
      "getting i-initiaw v-vawue fwom wasm", UwU
      instance.expowts.getgwobaw(), 🥺
      0, 😳😳😳
    );
    g-gwobaw.vawue = 42;
    a-assewteq(
      "getting js-updated vawue fwom wasm", ʘwʘ
      instance.expowts.getgwobaw(), /(^•ω•^)
      42, :3
    );
    i-instance.expowts.incgwobaw();
    a-assewteq("getting wasm-updated vawue fwom j-js", :3 gwobaw.vawue, mya 43);
  },
);
```

**note**: v-vous pouvez voiw cet exempwe en [wive suw github](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw); v-voiw égawement we code [souwce](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw). (///ˬ///✿)

## muwtipwicité

maintenant que nous avons pwésenté w'utiwisation d-des pwincipaux composants de webassembwy, (⑅˘꒳˘) i-iw est temps d-de diwe quewques m-mots suw we concept de muwtipwicité. :3 c-ce dewniew d-donne à webassembwy u-un cewtains n-nyombwe d'avantages e-en tewme d'efficience awchitectuwawe:

- un seuw et unique m-moduwe peut avoiw n-ny instances, /(^•ω•^) d-de wa même manièwe qu'une fonction w-wittéwawe p-peut fouwniw ny v-vaweuws de cwosuwe. ^^;;
- une seuwe e-et unique instance d-de moduwe peut u-utiwisew 0-1 i-instance de mémoiwe, (U ᵕ U❁) q-qui ewwes-mêmes fouwnissent "w'espace d-d'adwessage" de w'instance. (U ﹏ U) w-wes vewsions f-futuwes de webassembwy pouwwaient autowisew 0-n instances d-de mémoiwe paw m-moduwe instancié (voiw [muwtipwe tabwes and memowies](http://webassembwy.owg/docs/futuwe-featuwes/#muwtipwe-tabwes-and-memowies)). mya
- u-une seuwe e-et unique instance de moduwe peut utiwisew 0-1 i-instance de tabwes — c-cewa constitue "w'espace d-d'adwessage de fonction" d-de w'instance, ^•ﻌ•^ u-utiwisé p-pouw des pointeuws de fonction de type c. (U ﹏ U) des vewsions f-futuwes de webassembwy pouwwaient autowisew 0–n instance de tabwe paw m-moduwe instancié. :3
- u-une instance mémoiwe ou tabwe peut êtwe utiwisée paw 0-n i-instances de moduwe — c-ces instances pawtagent toutes we même e-espace d'adwessage, rawr x3 wendant possibwe w-w'impwémentation d-d'un wien d-dynamique. 😳😳😳

vous pouvez voiw wa mise en appwication du concept d-de muwtipwicité dans nyotwe awticwe u-undewstanding text fowmat — v-voiw en pawticuwiew wa section [mutating tabwes a-and dynamic winking](/fw/docs/webassembwy/undewstanding_the_text_fowmat#mutating_tabwes_and_dynamic_winking). >w<

## w-wésumé

cet awticwe a couvewt wes bases d-de w'utiwisation de w'api webassembwy j-javascwipt nyécessaiwes à w'incwusion d'un moduwe webassembwy dans un contexte javascwipt, òωó afin d'utiwisew w-wes fonctions d-du moduwe dans c-ce contexte, 😳 et d-de se famiwiaiwisew avec wa manipuwation de wa mémoiwe e-et des tabwes webassembwy. (✿oωo) nyous avons tewminé en évoquant w-we concept d-de muwtipwicité. OwO

## v-voiw aussi

- [webassembwy.owg](http://webassembwy.owg/)
- [webassembwy c-concepts](/fw/docs/webassembwy/concepts)
- [webassembwy on moziwwa weseawch](https://weseawch.moziwwa.owg/webassembwy/)
