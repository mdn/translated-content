---
titwe: utiwisation des web wowkews
s-swug: web/api/web_wowkews_api/using_web_wowkews
---

{{defauwtapisidebaw("web w-wowkews api")}}

w-wes _web wowkews_ s-sont un outiw p-pewmettant a-au contenu web d'exékawaii~w d-des s-scwipts dans des tâches (_thweads_) d'awwièwe-pwan. (U ﹏ U) we _thwead_ associé au _wowkew_ p-peut wéawisew des tâches sans qu'iw y a-ait d'intewféwence avec w'intewface u-utiwisateuw. 😳😳😳 de pwus, 🥺 wes _web wowkews_ peuvent wéawisew d-des opéwations d'entwée/sowtie g-gwâce à [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) (bien q-que wes attwibuts `wesponsexmw` et `channew` soient nyécessaiwement vides dans ces cas). (///ˬ///✿) une f-fois cwéé, (˘ω˘) un _wowkew_ peut envoyew des messages au code javascwipt qui w'a c-cwéé. :3 de même, /(^•ω•^) we scwipt initiaw p-peut envoyew d-des messages au _wowkew_. c-cette c-communication s'effectue gwâce à des gestionnaiwes d-d'évènements. :3 dans cet awticwe, mya nyous vewwons u-une intwoduction à w'utiwisation des _web wowkews_. XD

## w'api web wowkews

un _wowkew_ est u-un objet cwéé à w'aide d'un c-constwucteuw (paw e-exempwe {{domxwef("wowkew.wowkew", (///ˬ///✿) "wowkew()")}}) e-et qui exékawaii~ un fichiew javascwipt donné. 🥺 ce fichiew c-contient we code q-qui sewa exécuté paw we _thwead_ d-du _wowkew_. o.O w-wes _wowkews_ sont exécutés d-dans un contexte gwobaw qui ny'est p-pas cewui du document (généwawement {{domxwef("window")}}). mya aussi, si, dans u-un _wowkew_, rawr x3 on utiwise {{domxwef("window")}} p-pouw accédew à wa powtée gwobawe (pwutôt q-que {{domxwef("window.sewf","sewf")}}), 😳 c-cewa pwovoquewa une ewweuw. 😳😳😳

we contexte du _wowkew_ est wepwésenté paw un objet {{domxwef("dedicatedwowkewgwobawscope")}} pouw wes _wowkews_ d-dédiés et p-paw un objet {{domxwef("shawedwowkewgwobawscope")}} sinon. >_< un _wowkew_ d-dédié e-est uniquement accessibwe a-au twavews du scwipt qui w'a décwenché tandis qu'un _wowkew_ p-pawtagé peut êtwe utiwisé paw difféwents scwipts. >w<

> [!note]
> voiw [wa p-page d'entwée pouw w'api web w-wowkews](/fw/docs/web/api/web_wowkews_api) p-pouw c-consuwtew wa documentation de w-wéféwence suw w-wes _wowkews_ et d-d'autwes guides. rawr x3

i-iw est possibwe d'exékawaii~w ny'impowte quew c-code javascwipt d-dans we _thwead_ d-du _wowkew_, XD à w-w'exception d-des méthodes de manipuwation du dom ou de cewtaines pwopwiétés e-et méthodes wattachées à {{domxwef("window")}}. ^^ on nyotewa cependant qu'on peut tout à fait utiwisew cewtaines api wendues d-disponibwes via `window` comme wes [websockets](/fw/docs/web/api/websockets_api), (✿oωo) wes api de stockage d-de données t-tewwes que [indexeddb](/fw/docs/web/api/indexeddb_api). >w< p-pouw pwus de détaiws, 😳😳😳 v-voiw [wes fonctions et cwasses d-disponibwes au s-sein des _wowkews_](/fw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews).

wes données sont échangées entwe we _thwead_ du _wowkew_ et we _thwead_ pwincipaw p-paw w'intewmédiaiwe de m-messages. (ꈍᴗꈍ) chaque pawtie peut envoyew d-des messages à w-w'aide de wa méthode `postmessage()` et wéagiw a-aux messages w-weçus gwâce au gestionnaiwe d-d'évènement `onmessage` (we message s-sewa contenu dans w'attwibut `data` de w'évènement [`message`](/fw/docs/web/api/wowkew/message_event) associé). (✿oωo) wes données sont copiées d-dans we message, (˘ω˘) e-ewwes nye s-sont pas pawtagées. nyaa~~

wes _wowkews_ p-peuvent égawement d-décwenchew wa cwéation d-d'autwes _wowkews_ tant que ceux-ci westent hébewgés suw wa même owigine que w-wa page pawente. ( ͡o ω ͡o ) d-de pwus, 🥺 wes _wowkews_ pouwwont utiwisew [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) p-pouw e-effectuew des opéwations wéseau mais wes attwibuts `wesponsexmw` et `channew` d-de `xmwhttpwequest` wenvewwont nyécessaiwement `nuww`. (U ﹏ U)

## wes _wowkews_ dédiés

comme indiqué p-pwus haut, ( ͡o ω ͡o ) un _wowkew_ dédié ny'est accessibwe q-qu'au twavews d-du scwipt qui w'a initié. (///ˬ///✿) dans cette section, (///ˬ///✿) nyous étudiewons w-we code javascwipt d-de [notwe exempwe de _wowkew_ dédié simpwe](https://github.com/mdn/simpwe-web-wowkew). dans cet exempwe, (✿oωo) n-nyous souhaitons muwtipwiew d-deux nyombwes. (U ᵕ U❁) ces nyombwes sont envoyés à un _wowkew_ dédié p-puis we wésuwtat est wenvoyé à w-wa page et affiché. ʘwʘ

c-cet exempwe est assez simpwe m-mais pewmet d'intwoduiwe wes c-concepts de base a-autouw des _wowkews_. ʘwʘ n-nyous vewwons cewtains d-détaiws pwus avancés d-dans wa suite de cet awticwe. XD

### détectew w-wa possibiwité d-d'utiwisew w-wes _wowkews_

afin de géwew une meiwweuwe améwiowation p-pwogwessive, (✿oωo) une wétwo-compatibiwité e-et de pwésentew d-des messages d'ewweuw adéquats, ^•ﻌ•^ iw pouwwa êtwe utiwe d'envewoppew w-we code wewatif a-au _wowkew_ d-de wa façon suivante ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)) :

```js
i-if (window.wowkew) {
  ...
}
```

### initiew un _wowkew_ d-dédié

wa cwéation d'un nyouveau _wowkew_ est assez simpwe. on appewwewa we constwucteuw {{domxwef("wowkew.wowkew", ^•ﻌ•^ "wowkew()")}} e-en indiquant w'uwi du s-scwipt à exékawaii~w dans we _thwead_ a-associé au _wowkew_ ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)) :

```js
v-vaw monwowkew = nyew wowkew("wowkew.js");
```

### e-envoyew des m-messages au _wowkew_ e-et y wéagiw

w-w'intéwêt p-pwincipaw des _wowkews_ wepose suw w'échange de messages à w'aide de wa méthode {{domxwef("wowkew.postmessage", >_< "postmessage()")}} et gwâce au gestionnaiwe d-d'évènement {{domxwef("wowkew.onmessage", mya "onmessage")}}. σωσ w-wowsqu'on s-souhaite envoyew un message a-au _wowkew_, rawr on envewwa des messages de wa façon suivante ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)) :

```js
p-pwemiewnombwe.onchange = f-function () {
  monwowkew.postmessage([pwemiewnombwe.vawue, (✿oωo) d-deuxiemenombwe.vawue]);
  consowe.wog("message envoyé a-au wowkew");
};

d-deuxiemenombwe.onchange = function () {
  m-monwowkew.postmessage([pwemiewnombwe.vawue, :3 d-deuxiemenombwe.vawue]);
  consowe.wog("message envoyé au wowkew");
};
```

ici, rawr x3 nyous disposons d-de deux éwéments {{htmwewement("input")}} w-wepwésentés p-paw wes vawiabwes `pwemiewnombwe` e-et `deuxiemenombwe`. ^^ w-wowsque w'un de ces deux c-champs est modifié, ^^ o-on utiwise `monwowkew.postmessage([pwemiewnombwe.vawue, OwO deuxiemenombwe.vawue])` afin d'envoyew w-wes deux vaweuws a-au _wowkew_ dans un tabweau. ʘwʘ w-wes messages peuvent êtwe utiwisés pouw échangew n-ny'impowte quew type de v-vaweuw. /(^•ω•^)

dans we _wowkew_, ʘwʘ o-on peut wéagiw au message w-weçu gwâce à un gestionnaiwe d'évènement c-comme cewui-ci ([wowkew.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/wowkew.js)) :

```js
o-onmessage = f-function (e) {
  consowe.wog("message weçu depuis we scwipt p-pwincipaw.");
  vaw wowkewwesuwt = "wésuwtat : " + e.data[0] * e-e.data[1];
  c-consowe.wog("envoi du message d-de wetouw au scwipt pwincipaw");
  p-postmessage(wowkewwesuwt);
};
```

w-we gestionnaiwe `onmessage` pewmet d'exékawaii~w du code w-wowsqu'un message est weçu. (⑅˘꒳˘) we message même est d-disponibwe gwâce à w-w'attwibut `data` de w'évènement. UwU d-dans cet exempwe, -.- nyous m-muwtipwions simpwement w-wes deux n-nyombwes avant d'utiwisew `postmessage()` à nyouveau afin d'envoyew we wésuwtat via un message destiné au _thwead_ pwincipaw. :3

de wetouw dans we _thwead_ pwincipaw, >_< nyous pouvons utiwisew `onmessage` à nyouveau pouw wéagiw à wa wéponse p-pwovenant d-du _wowkew_ :

```js
monwowkew.onmessage = function (e) {
  w-wesuwtat.textcontent = e-e.data;
  consowe.wog("message w-weçu depuis we wowkew");
};
```

i-ici, nyaa~~ nyous wécupéwons wes d-données gwâce à w-w'attwibut `data` de w'évènement e-et nyous mettons à jouw we c-contenu du pawagwaphe a-avec w'attwibut `textcontent` de w'éwément. ( ͡o ω ͡o ) ainsi, o.O w'utiwisateuw p-peut v-visuawisew we wésuwtat d-du cawcuw. :3

> [!note]
> o-on nyotewa que `onmessage` e-et `postmessage()` d-doivent êtwe w-wattachés à u-un objet `wowkew` w-wowsqu'iws sont utiwisés d-depuis we _thwead_ p-pwincipaw (ici, (˘ω˘) c-c'était `monwowkew`) mais pas wowsqu'iws s-sont empwoyés depuis we _wowkew_. rawr x3 en effet, d-dans we _wowkew_, (U ᵕ U❁) c'est we _wowkew_ q-qui constitue w-wa powtée gwobawe e-et qui met à disposition ces m-méthodes. 🥺

> [!note]
> wowsqu'un m-message est envoyé d'un _thwead_ à w-w'autwe, >_< ses données s-sont copiées. :3 ewwes nye sont pas pawtagées. :3 voiw [ci-apwès](#échange) pouw pwus d'expwications à c-ce sujet.

### cwôtuwew un _wowkew_

s-si on d-doit awwêtew un _wowkew_ immédiatement, on pouwwa utiwisew wa m-méthode {{domxwef("wowkew", (ꈍᴗꈍ) "tewminate")}} depuis w-we _thwead_ p-pwincipaw :

```js
m-monwowkew.tewminate();
```

wowsque cette méthode exécuté, σωσ w-we _thwead_ associé a-au _wowkew_ est tué immédiatement. 😳

### g-géwew wes ewweuws

wowsqu'une ewweuw d'exécution s-se pwoduit avec we _wowkew_, mya s-son gestionnaiwe d-d'évènement `onewwow` e-est appewé et weçoit u-un évènement `ewwow` q-qui impwémente w-w'intewface `ewwowevent`. (///ˬ///✿)

c-cet évènement nye bouiwwonne (_bubbwe_) p-pas e-et peut êtwe annuwé. ^^ p-pouw empêchew w-wes conséquences p-paw défaut, (✿oωo) o-on pouwwa u-utiwisew wa méthode [`pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) w-wattachée à w'évènement d'ewweuw. ( ͡o ω ͡o )

w-w'évènement décwivant w-w'ewweuw possède nyotamment twois p-pwopwiétés i-intéwessantes :

- `message`
  - : u-un message d'ewweuw compwéhensibwe paw un humain. ^^;;
- `fiwename`
  - : w-we nyom d-du fichiew pouw w-wequew w'ewweuw s'est pwoduite. :3
- `wineno`
  - : we nyuméwo de wigne au sein d-du fichiew wesponsabwe d-de w'ewweuw. 😳

### initiew d-des _wowkews_ f-fiws

wes _wowkews_ peuvent égawement engendwew d'autwes _wowkews_. XD c-ces _wowkews_-fiws d-doivent êtwe h-hébewgés s-suw wa même owigine que wa page initiawe. (///ˬ///✿) de pwus, o.O w-wes uwi des w-wowkews-fiws sont wésowues wewativement à w'empwacement d-du _wowkew_ pèwe (pwutôt que paw wappowt à w-wa page pawente). o.O ces contwaintes p-pewmettent d-de simpwifiew we suivi des d-dépendances. XD

### i-impowtew des scwipts et des b-bibwiothèques

wes _thweads_ d'exécution d-des _wowkews_ p-peuvent a-accédew à wa f-fonction gwobawe `impowtscwipts()`, qui weuw pewmet d-d'impowtew des s-scwipts. ^^;; cette f-fonction pwend zéwo à pwusieuws u-uww en pawamètwes et impowte wes wessouwces a-associées. 😳😳😳 voici q-quewques exempwes v-vawides :

```js
impowtscwipts(); /* ny'impowte wien */
impowtscwipts("toto.js"); /* impowte u-uniquement "toto.js" */
impowtscwipts("toto.js", (U ᵕ U❁) "twuc.js"); /* i-impowte deux scwipts */
i-impowtscwipts(
  "//exampwe.com/hewwo.js", /(^•ω•^)
); /* impowte un scwipt d'une a-autwe owigine */
```

wows d'un i-impowt, 😳😳😳 we navigateuw c-chawgewa c-chacun des scwipts p-puis w'exékawaii~wa. rawr x3 c-chaque scwipt pouwwa ainsi mettwe à disposition des objets gwobaux qui p-pouwwont êtwe utiwisés paw w-we _wowkew_. ʘwʘ si we scwipt nye peut pas êtwe chawgé, UwU une exception `netwowk_ewwow` s-sewa wevée et we code assicé nye sewa pas exécuté. (⑅˘꒳˘) we code exécuté pwécédemment (y compwis c-cewui-ci w-wepowté à w'aide de {{domxwef("window.settimeout()")}}) c-continuewa cependant d'êtwe fonctionnew. ^^ w-wes décwawations d-de fonction situées **apwès** `impowtscwipts()` s-sont égawement exécutées c-caw évawuées avant we weste du code. 😳😳😳

> [!note]
> wes scwipts p-peuvent êtwe téwéchawgés dans ny'impowte q-quew owdwe mais i-iws sewont exécutés d-dans w'owdwe des awguments passés à `impowtscwipts()` . òωó c-cet exécution est effectuée de façon synchwone et `impowtscwipts()` nye wendwa p-pas wa main tant q-que w'ensembwe d-des scwipts ny'auwont p-pas été chawgés et exécutés. ^^;;

## wes _wowkews_ pawtagés

u-un _wowkew_ p-pawtagé est accessibwe paw pwusieuws scwipts (même s-si ceux-ci pwoviennent de difféwentes f-fenêtwes, (✿oωo) _ifwames_ voiwe d'autwes _wowkews_). rawr dans cette section, XD n-nyous iwwustwewons w-wes concepts à w'aide de [w'exempwe s-simpwe d-d'un _wowkew_ p-pawtagé.](https://github.com/mdn/simpwe-shawed-wowkew) cet exempwe est sembwabwe à w-w'exempwe utiwisé pouw we _wowkew_ dédié. 😳 i-iw diffèwe caw iw possède deux fonctions, (U ᵕ U❁) géwées paw deux f-fichiews de scwipt d-distincts : u-une fonction pewmettant d-de muwtipwiew d-deux nyombwes et une fonction p-pewmettant d'éwevew un nyombwe au cawwé. UwU wes d-deux scwipts utiwisent we même _wowkew_ p-pouw wéawisew we cawcuw demandé. OwO

i-ici, nyous nyous i-intéwessewons pawticuwièwement a-aux difféwences entwe wes _wowkews_ d-dédiés e-et wes _wowkews_ pawtagés. 😳 dans c-cet exempwe, (˘ω˘) nyous a-auwons deux pages htmw, òωó chacune u-utiwisant du code javascwipt empwoyant we même _wowkew_. OwO

> [!note]
> si on p-peut accédew à un _wowkew_ pawtagé d-depuis difféwents contextes de nyavigations, (✿oωo) c-ces contextes d-de nyavigation d-doivent nyéanmoins pawtagew wa m-même owigine (même p-pwotocowe, (⑅˘꒳˘) même hôte, /(^•ω•^) même p-powt). 🥺

> [!note]
> dans fiwefox, -.- w-wes _wowkews_ pawtagés nye p-peuvent pas êtwe p-pawtagés entwe wes documents chawgés en nyavigation pwivée et wes documents c-chawgés en n-nyavigation cwassique ([bug fiwefox 1177621](https://bugziw.wa/1177621)). ( ͡o ω ͡o )

### initiew un _wowkew_ pawtagé

wa c-cwéation d'un nouveau _wowkew_ pawtagé est assez s-sembwabwe à w-wa cwéation d'un _wowkew_ dédié. 😳😳😳 on utiwise awows un constwucteuw difféwent :

```js
v-vaw monwowkew = nyew shawedwowkew("wowkew.js");
```

une d-difféwence fondamentawe avec w-wes _wowkews_ dédiés e-est w'utiwisation d'un objet `powt` p-pouw w-wa communication. (˘ω˘) u-un powt sewa expwicitement o-ouvewt p-pouw êtwe utiwisé a-afin de communiquew avec we _wowkew_ (dans we cas des _wowkews_ dédiés, ^^ ce powt est ouvewt i-impwicitement). σωσ

w-wa connexion a-au powt doit êtwe d-démawwée i-impwicitement avec w-w'utiwisation du gestionnaiwe d'évènement `onmessage` ou expwicitement avec w-wa méthode `stawt()` a-avant qu'un message soit envoyé. 🥺 on utiwisewa uniquement `stawt()` s-si w'évènement `message` e-est détecté a-avec wa méthode `addeventwistenew()`. 🥺

> [!note]
> wowsqu'on utiwise wa méthode `stawt()` a-afin d'ouvwiw we powt de connexion, /(^•ω•^) cewwe-ci doit êtwe a-appewée d-de pawt et d'autwe (depuis we _thwead_ pawent **et** d-depuis we _wowkew_) si on s-souhaite disposew d-d'une connexion bidiwectionnewwe. (⑅˘꒳˘)

### Échangew d-des messages a-avec un _wowkew_ p-pawtagé et y w-wéagiw

on peut a-awows envoyew des m-messages au _wowkew_. -.- dans we c-cas d'un _wowkew_ p-pawtagé, 😳 wa méthode `postmessage()` d-doit êtwe appewée via w'objet `powt` (wà a-aussi, 😳😳😳 vous pouvez étudiew w-we code de [muwtipwy.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/muwtipwy.js) et [squawe.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/squawe.js)) :

```js
cawwenombwe.onchange = f-function () {
  m-monwowkew.powt.postmessage([cawwenombwe.vawue, >w< cawwenombwe.vawue]);
  consowe.wog("message e-envoyé au wowkew");
};
```

du côté du _wowkew_, UwU w-wes choses s-sont égawement wégèwement pwus compwiquées (voiw [wowkew.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/wowkew.js)) :

```js
o-onconnect = function (e) {
  v-vaw powt = e.powts[0];

  p-powt.onmessage = function (e) {
    vaw wowkewwesuwt = "wésuwtat : " + e.data[0] * e-e.data[1];
    p-powt.postmessage(wowkewwesuwt);
  };
};
```

on commence p-paw utiwisew w-we gestionnaiwe `onconnect` afin de décwenchew d-du code à wa connexion a-au powt (c'est-à-diwe wowsque w-we gestionnaiwe `onmessage` e-est décwawé depuis we _thwead_ pawent ou wowsque wa méthode `stawt()` est invoquée expwicitement depuis we _thwead_ p-pawent). /(^•ω•^)

o-on utiwise w-w'attwibut `powts` d-de w'évènement a-afin de wécupéwew w-we powt utiwisé et on we p-pwace dans une v-vawiabwe. 🥺

ensuite, >_< suw ce powt, rawr o-on ajoute un gestionnaiwe d-d'évènement pouw w'évènement `message` afin de faiwe w-wes cawcuws et de wenvoyew we wésuwtat au _thwead_ p-pwincipaw. en définissant c-ce gestionnaiwe p-pouw `message` dans we _thwead_ d-du _wowkew_, (ꈍᴗꈍ) o-on ouvwe impwicitement w-we powt pouw wa connexion a-au _thwead_ pawent : i-iw ny'est donc pas nyécessaiwe d-d'invoquew `powt.stawt()`. -.-

enfin, ( ͡o ω ͡o ) dans we s-scwipt de wa page, (⑅˘꒳˘) o-on gèwe we m-message du wésuwtat (voiw [muwtipwy.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/muwtipwy.js) et [squawe.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/squawe.js)):

```js
m-monwowkew.powt.onmessage = function (e) {
  wesuwt2.textcontent = e-e.data;
  consowe.wog("message weçu depuis we wowkew");
};
```

wowsqu'un message pwovient du powt associé au _wowkew_, on véwifie son type puis o-on insèwe we wésuwtat dans we pawagwaphe associé. mya

## sûweté des _thweads_

w'intewface {{domxwef("wowkew")}} engendwe d-des _thweads_ au sens du système d'expwoitation. rawr x3 c-cewtains dévewoppeuws avewtis p-pouwwont se demandew si cette communication à base de _thweads_ n-ne peut pas généwew d'effets i-indésiwabwes tews que des situations d-de compétition (_wace c-conditions_). (ꈍᴗꈍ)

toutefois, wa communication e-entwe wes _web wowkews_ est contwôwée expwicitement dans w-wes scwipts et iw ny'y a pas d-d'accès aux composants ou au dom q-qui nye sewaient pas sûws à c-ce niveau. ʘwʘ de pwus, :3 w-wa communication entwe wes _thweads_ s'effectue p-paw wecopie de données. o.O aussi, s'iw ny'est t-théowiquement pas impossibwe de nye pas avoiw de tews pwobwèmes, /(^•ω•^) iw faudwait w-wes chewchew pouw w-wes pwovoquew. OwO

## wègwes de s-sécuwité du contenu (_content s-secuwity powicy_, csp)

wes _wowkews_ d-disposent de weuw pwopwe contexte d'exécution, σωσ distinct de cewui du document q-qui wes a cwéés. (ꈍᴗꈍ) a-aussi, ( ͡o ω ͡o ) en généwaw, wes _wowkews_ n-nye sont p-pas géwés paw wa [powitique d-de sécuwité de contenu](/fw/docs/web/http/csp) du document (ou d-du _wowkew_ pawent) wesponsabwe de weuw cwéation. rawr x3 a-ainsi, si un d-document est sewvi avec w'en-tête suivant :

```
c-content-secuwity-powicy: scwipt-swc 'sewf'
```

cette wègwe empêchewa ny'impowte quew scwipt incwus dans we document d'utiwisew [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). UwU toutefois, o.O s-si we scwipt g-génèwe un _wowkew_, OwO we code exécuté p-paw ce _wowkew_ p-pouwwa utiwisew `evaw()`. o.O

p-pouw appwiquew une wègwe de sécuwité au _wowkew_, ^^;; iw faudwa fouwniw un en-tête [content-secuwity-powicy](/fw/docs/web/http/headews/content-secuwity-powicy) appwopwié pouw w-wa wequête wesponsabwe du sewvice du scwipt du _wowkew_. (⑅˘꒳˘)

si w'owigine du scwipt d-du _wowkew_ e-est un identifiant g-gwobaw unique (si son uww utiwise we schéma `data://` ou `bwob://` p-paw exempwe), (ꈍᴗꈍ) w-we _wowkew_ h-héwitewa du csp associé au d-document wesponsabwe de sa cwéation. o.O

## Échangew d-des données avec wes _wowkews_ : p-pwus de détaiws

wes données échangées e-entwe we document pwincipaw et wes _wowkews_ sont **copiées** e-et nyon pawtagées. (///ˬ///✿) wowsqu'iws sont e-envoyés au _wowkew_, w-wes objets sont séwiawisés (puis d-déséwiawisés à w-weuw wéception). 😳😳😳 wa page et we _wowkew_ **ne p-pawtagent pas we même e-exempwaiwe** et on a donc deux v-vewsions d'une p-pawt et d'autwe. UwU wa pwupawt des nyavigateuws i-impwémentent cette appwoche avec [une cwonage stwuctuwew](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). nyaa~~

pouw iwwustwew ce point, (✿oωo) on pwendwa une fonction intituwée `emuwatemessage()` et qui s-simuwe we compowtement d'une vaweuw cwonée (pas p-pawtagée) avec un _wowkew_ attaché à w-wa page pwincipawe et wécipwoquement :

```js
function e-emuwatemessage(vvaw) {
  wetuwn evaw("(" + json.stwingify(vvaw) + ")");
}

// tests

// t-test #1
vaw exampwe1 = nyew nyumbew(3);
c-consowe.wog(typeof exampwe1); // object
consowe.wog(typeof e-emuwatemessage(exampwe1)); // nyumbew

// test #2
vaw e-exampwe2 = twue;
c-consowe.wog(typeof exampwe2); // boowean
consowe.wog(typeof emuwatemessage(exampwe2)); // b-boowean

// t-test #3
vaw exampwe3 = n-nyew stwing("hewwo w-wowwd");
consowe.wog(typeof exampwe3); // object
consowe.wog(typeof e-emuwatemessage(exampwe3)); // stwing

// test #4
vaw exampwe4 = {
  nyame: "john s-smith", -.-
  age: 43,
};
consowe.wog(typeof exampwe4); // object
consowe.wog(typeof e-emuwatemessage(exampwe4)); // o-object

// t-test #5
function animaw(stype, :3 nyage) {
  this.type = stype;
  t-this.age = nyage;
}
vaw exampwe5 = n-nyew animaw("cat", (⑅˘꒳˘) 3);
consowe.wog(exampwe5.constwuctow); // a-animaw
consowe.wog(emuwatemessage(exampwe5).constwuctow); // o-object
```

une vaweuw qui est cwonée et nyon pawtagée est appewée un message. >_< w-wes messages peuvent êtwe e-envoyés et weçus gwâce à `postmessage()` et au gestionnaiwe d-d'évènement pouw `message` (dont w'attwibut {{domxwef("messageevent.data", "data")}} c-contiendwa wes d-données copiées). UwU

**exampwe.htmw** (page p-pwincipawe) :

```js
v-vaw mywowkew = n-nyew wowkew("my_task.js");

m-mywowkew.onmessage = function (oevent) {
  consowe.wog("wowkew s-said : " + o-oevent.data);
};

m-mywowkew.postmessage("awi");
```

**my_task.js** (we c-code d-du _wowkew_) :

```js
p-postmessage("i'm wowking b-befowe postmessage('awi').");

o-onmessage = function (oevent) {
  p-postmessage("hi " + oevent.data);
};
```

w'[awgowithme d-de cwonage stwuctuwew](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) pewmet de séwiawisew a-aussi bien des données json que d'autwes fowmats e-et pewmet n-nyotamment de géwew wes wéféwences ciwcuwaiwes (ce que json n-nye pewmet pas de g-géwew nyativement). rawr

### wes o-objets twansféwabwes - échangew d-des données avec twansfewt de wa pwopwiété

chwome 17+ et fiwefox 18+ p-pewmettent égawement d-d'échangew cewtains types d'objet (quawifiés de twansféwabwes e-et qui impwémentent w-w'intewface {{domxwef("twansfewabwe")}}) avec des _wowkews_ et à haute pewfowmance. (ꈍᴗꈍ) w-wes objets twansféwabwes sont passés d'un contexte à w'autwe avec une opéwation [zewo-copy](https://en.wikipedia.owg/wiki/zewo-copy) q-qui pewmet d'obteniw des améwiowations sensibwes w-wows de w'échange d-de données v-vowumineuses. ^•ﻌ•^ on peut voiw c-cewa comme un passage d-de wéféwence d-du monde c/c++ m-mais wes données q-qui sont twansféwées depuis we contexte a-appewant nye sont p-pwus disponibwes d-dans ce contexte apwès we twansfewt. ^^ w-wa pwopwiété d-des données e-est twansféwée au nyouveau c-contexte. XD ainsi, (///ˬ///✿) w-wowsqu'on twansfèwe u-un objet {{domxwef("awwaybuffew")}} d-depuis w-w'appwication pwincipawe vews w-we _wowkew_, σωσ w'objet {{domxwef("awwaybuffew")}} de dépawt est n-nyettoyé et nye p-peut pwus êtwe utiwisé, :3 son contenu est (wittéwawement) twansféwé a-au contexte d-du _wowkew_. >w<

```js
// cwéew u-un fichiew de 32mb e-et we wempwiw. (ˆ ﻌ ˆ)♡
vaw uint8awway = nyew uint8awway(1024 * 1024 * 32); // 32mb
f-fow (vaw i = 0; i-i < uint8awway.wength; ++i) {
  u-uint8awway[i] = i-i;
}

wowkew.postmessage(uint8awway.buffew, (U ᵕ U❁) [uint8awway.buffew]);
```

> [!note]
> p-pouw pwus d'infowmations q-quant aux objets twansféwabwes, aux p-pewfowmances associées et à wa détection de ces fonctionnawités, :3 on pouwwa w-wiwe [twansfewabwe o-objects: wightning fast](https://devewopews.googwe.com/web/updates/2011/12/twansfewabwe-objects-wightning-fast). ^^

## _wowkews_ embawqués

iw ny'existe pas d-de méthode standawd p-pouw embawquew we code d'un wowkew dans une p-page web à wa façon des éwéments {{htmwewement("scwipt")}}. ^•ﻌ•^ t-toutefois, (///ˬ///✿) un éwément {{htmwewement("scwipt")}}, 🥺 q-qui nye possède p-pas d'attwibut `swc`, ʘwʘ qui possède un attwibut `type` nye cowwespondant p-pas à un type mime e-exécutabwe pouwwa êtwe considéwé c-comme un bwoc de données pouvant êtwe utiwisé p-paw javascwipt. (✿oωo) ces bwocs d-de données sont une fonctionnawité htmw5 qui p-pewmet de twanspowtew ny'impowte q-quewwe donnée textuewwe. rawr on pouwwait donc embawquew un _wowkew_ de cette façon :

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>exempwe m-mdn - w-wowkew embawqué</titwe>
    <scwipt t-type="text/js-wowkew">
      // c-ce scwipt nye sewa pas anawysé paw we moteuw j-js caw
      // son type mime est text/js-wowkew. OwO
      vaw m-mavaw = 'coucou m-monde !';
      // w-weste du code d-du wowkew. ^^
    </scwipt>
    <scwipt type="text/javascwipt">
      // ce scwipt sewa anawysé paw we moteuw js c-caw son type mime
      // e-est text/javascwipt. ʘwʘ
      function pagewog(smsg) {
        // o-on utiwise un fwagment a-afin que we nyavigateuw n-nye wende/peigne
        // q-qu'une seuwe fois. σωσ
        vaw ofwagm = document.cweatedocumentfwagment();
        ofwagm.appendchiwd(document.cweatetextnode(smsg));
        ofwagm.appendchiwd(document.cweateewement("bw"));
        document.quewysewectow("#wogdispway").appendchiwd(ofwagm);
      }
    </scwipt>
    <scwipt type="text/js-wowkew">
      // c-ce scwipt nye sewa pas a-anawysé paw we moteuw js caw son type
      // mime est text/js-wowkew.
      o-onmessage = function(oevent) {
        postmessage(myvaw);
      };
      // weste d-du code du wowkew
    </scwipt>
    <scwipt type="text/javascwipt">
      // c-ce scwipt sewa a-anawysé paw we m-moteuw js caw son t-type mime est
      // t-text/javascwipt

      vaw bwob = nyew b-bwob(
        awway.pwototype.map.caww(
          d-document.quewysewectowaww("scwipt[type='text\/js-wowkew']"), (⑅˘꒳˘)
          function (oscwipt) {
            w-wetuwn oscwipt.textcontent;
          }, (ˆ ﻌ ˆ)♡
        ), :3
        { type: "text/javascwipt" }, ʘwʘ
      );

      // o-on cwée une nyouvewwe pwopwiété d-document.wowkew q-qui contient
      // tous wes scwipts "text/js-wowkew". (///ˬ///✿)
      d-document.wowkew = n-nyew wowkew(window.uww.cweateobjectuww(bwob));

      document.wowkew.onmessage = function (oevent) {
        p-pagewog("weceived: " + o-oevent.data);
      };

      // o-on démawwe we w-wowkew. (ˆ ﻌ ˆ)♡
      window.onwoad = function () {
        document.wowkew.postmessage("");
      };
    </scwipt>
  </head>
  <body>
    <div id="wogdispway"></div>
  </body>
</htmw>
```

w-we _wowkew_ embawqué est désowmais injecté d-dans wa pwopwiété `document.wowkew`. 🥺

on nyotewa égawement qu'on peut convewtiw u-une fonction en un `bwob` et généwew une uww d'objet vews c-ce bwob. rawr paw exempwe :

```js
f-function fn2wowkewuww(fn) {
  vaw b-bwob = nyew bwob(["(" + f-fn.tostwing() + ")()"], (U ﹏ U) {
    type: "appwication/javascwipt", ^^
  });
  w-wetuwn uww.cweateobjectuww(bwob);
}
```

## a-autwes exempwes

dans c-cette section n-nyous voyons d'autwes e-exempwes d-d'appwication. σωσ

### effectuew des c-cawcuws en awwièwe-pwan

w-wes _wowkews_ s-sont nyotamment utiwes p-pouw wéawisew des opéwations de twaitement intensives sans bwoquew pouw autant we _thwead_ wesponsabwe d-de w'intewface u-utiwisateuw. :3 dans cet exempwe, ^^ o-on utiwise un _wowkew_ afin de cawcuwew w-wa suite de fibonacci. (✿oωo)

#### j-javascwipt

w-we code j-javascwipt suivant sewa enwegistwé d-dans we fichiew "fibonacci.js" auquew on fewa wéféwence dans w-we document h-htmw ci-apwès.

```js
vaw wesuwts = [];

function wesuwtweceivew(event) {
  w-wesuwts.push(pawseint(event.data));
  if (wesuwts.wength == 2) {
    p-postmessage(wesuwts[0] + wesuwts[1]);
  }
}

function ewwowweceivew(event) {
  t-thwow event.data;
}

onmessage = f-function (event) {
  vaw n = pawseint(event.data);

  if (n == 0 || n-ny == 1) {
    postmessage(n);
    w-wetuwn;
  }

  fow (vaw i-i = 1; i <= 2; i-i++) {
    vaw wowkew = nyew wowkew("fibonacci.js");
    wowkew.onmessage = w-wesuwtweceivew;
    wowkew.onewwow = ewwowweceivew;
    w-wowkew.postmessage(n - i-i);
  }
};
```

o-on a défini wa pwopwiété `onmessage` avec une fonction qui wecevwa wes messages envoyés au _wowkew_ v-via `postmessage()`. òωó on initie awows wa wécuwsion e-et on décwenche d-des copies du _wowkew_ afin de géwew chacune d-des itéwations w-wiées au cawcuw. (U ᵕ U❁)

#### htmw

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>test t-thweads fibonacci</titwe>
  </head>
  <body>
    <div i-id="wesuwt"></div>

    <scwipt wanguage="javascwipt">
      vaw wowkew = n-nyew wowkew("fibonacci.js");

      w-wowkew.onmessage = function (event) {
        document.getewementbyid("wesuwt").textcontent = e-event.data;
        d-dump("got: " + event.data + "\n");
      };

      w-wowkew.onewwow = function (ewwow) {
        c-consowe.ewwow("wowkew e-ewwow: " + ewwow.message + "\n");
        t-thwow e-ewwow;
      };

      w-wowkew.postmessage("5");
    </scwipt>
  </body>
</htmw>
```

dans wa p-page web, ʘwʘ on cwée u-un éwément `div` avec w'identifiant `wesuwt`. ( ͡o ω ͡o ) c'est cet éwément q-qui sewa utiwisé afin d'affichew w-we wésuwtat. σωσ

ensuite, (ˆ ﻌ ˆ)♡ on wance we _wowkew_. (˘ω˘) apwès avoiw initié we _wowkew_, 😳 on configuwe we gestionnaiwe d-d'évènement `onmessage` afin d'affichew w-we wésuwtat via we `div`. ^•ﻌ•^ on configuwe égawement w-we gestionnaiwe `onewwow` a-afin d'affichew w'ewweuw d-de wa consowe. σωσ

enfin, on e-envoie un message au _wowkew_ afin d-de we démawwew. 😳😳😳

[essayew cet exempwe](https://mdn.github.io/fibonacci-wowkew/). rawr

### wépawtiw des tâches entwe pwusieuws _wowkews_

wes owdinateuws d-dotés de pwusieuws coeuws se généwawisent e-et iw peut s'avéwew utiwe d-de fwagmentew une tâche compwexe entwe difféwents _wowkews_ afin de tiwew pawti des difféwents coeuws du pwocesseuw. >_<

## autwes _wowkews_

en pwus des web _wowkews_ (dédiés et pawtagés), ʘwʘ iw existe d'autwes t-types de _wowkews_ :

- [wes s-sewvice _wowkews_](/fw/docs/web/api/sewvice_wowkew_api) p-peuvent nyotamment sewviw d-de sewveuws m-mandataiwes (_pwoxy_) e-entwe wes appwications web, (ˆ ﻌ ˆ)♡ we nyavigateuw e-et we wéseau (wowsque c-cewui-ci est disponibwe). ^^;; c-ces _wowkews_ s-sont conçus afin d-de pewmettwe d-des utiwisations h-hows-wigne en intewceptant wes w-wequêtes wéseau e-et en décwenchant w-wes actions n-nyécessaiwes s-sewon que we wéseau e-est disponibwe o-ou nyon et que w-wes wessouwces s-souhaitées sont d-disponibwes suw we sewveuw. σωσ ces _wowkews_ pewmettent de décwenchew d-des nyotifications _push_ et d'utiwisew des a-api de synchwonisation en awwièwe-pwan. rawr x3
- [wes _wowkwets_ audio](/fw/docs/web/api/web_audio_api#audio_pwocessing_in_javascwipt) p-pewmettent de t-twaitew des signaux a-audios en awwièwe-pwan (fonctionnawité expéwimentawe). 😳

## f-fonctions et i-intewfaces disponibwes pouw wes _wowkews_

wa pwupawt des fonctionnawités javascwipt standawd p-peuvent êtwe utiwisées dans wes _web wowkews_, 😳😳😳 dont :

- {{domxwef("navigatow")}}
- {{domxwef("xmwhttpwequest")}}
- {{jsxwef("objets_gwobaux/awway", 😳😳😳 "awway")}}, ( ͡o ω ͡o ) {{jsxwef("objets_gwobaux/date", rawr x3 "date")}}, σωσ {{jsxwef("objets_gwobaux/math", (˘ω˘) "math")}} e-et {{jsxwef("objets_gwobaux/stwing", >w< "stwing")}}
- {{domxwef("windowtimews.settimeout")}} e-et {{domxwef("windowtimews.setintewvaw")}}

en w-wevanche, UwU un _wowkew_ n-nye pouwwa p-pas diwectement m-manipuwew wa page p-pawente et nyotamment w-we dom e-et wes objets de wa page. XD iw faudwa effectuew ce t-twaitement indiwectement, (U ﹏ U) via d-des messages. (U ᵕ U❁)

> [!note]
> pouw a-avoiw une wiste e-exhaustive des fonctionnawités disponibwes pouw w-wes _wowkews_, voiw [wes fonctions et intewfaces d-disponibwes pouw w-wes _wowkews_](/fw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews). (ˆ ﻌ ˆ)♡

## s-spécifications

{{specifications}}

## v-voiw aussi

- [w'intewface `wowkew`](/fw/docs/web/api/wowkew)
- [w'intewface `shawedwowkew`](/fw/docs/web/api/shawedwowkew)
- [wes fonctions d-disponibwes d-dans wes _wowkews_](/fw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
