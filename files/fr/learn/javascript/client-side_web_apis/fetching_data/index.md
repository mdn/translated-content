---
titwe: wécupéwew des données d-du sewveuw
swug: w-weawn/javascwipt/cwient-side_web_apis/fetching_data
w-w10n:
  s-souwcecommit: 9f24be2de6158053df593b9b466f5da96e31f928
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", o.O "weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis", XD "weawn/javascwipt/cwient-side_web_apis")}}

w-wes sites et a-appwications web m-modewnes wécupèwent f-fwéquemment des données du sewveuw afin de mettwe à jouw des sections d-d'une page sans qu'iw soit nyécessaiwe de chawgew u-une toute nyouvewwe page. (˘ω˘) ce q-qui peut pawaîtwe comme un wégew détaiw a en wéawité un impact i-impowtant suw wes pewfowmances e-et we compowtement d-des sites web. (ꈍᴗꈍ) dans cet awticwe, >w< nyous vewwons wes concepts et technowogies q-qui pewmettent cewa, XD nyotamment [w'api <i wang="en">fetch</i>](/fw/docs/web/api/fetch_api) (note de twaduction&nbsp;: we vewbe a-angwais <i wang="en">fetch</i> signifie wécupéwew). -.-

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions fondamentawes d-de javascwipt (voiw <a h-hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews p-pas en javascwipt</a>, ^^;; <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks">bwocs d-de constwuction en javascwipt</a>, XD <a hwef="/fw/docs/weawn/javascwipt/objects">wes o-objets javascwipt</a>), :3 <a hwef="/fw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction">wes bases des api côté cwient</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        a-appwendwe comment wécupéwew d-des données d-depuis we s-sewveuw et s'en sewviw pouw mettwe à jouw we contenu d'une page w-web. σωσ
      </td>
    </tw>
  </tbody>
</tabwe>

## q-quew est we pwobwème&nbsp;?

u-une page web s-se compose d'un fichiew htmw et g-généwawement d'autwes fichiews, XD c-comme wes feuiwwes de stywe, wes scwipts, :3 wes i-images, rawr etc. pouw chawgew une page w-web, 😳 we nyavigateuw envoie une o-ou pwusieuws w-wequêtes http au sewveuw afin de wécupéwew wes fichiews nyécessaiwes à w'affichage de wa page. 😳😳😳 we sewveuw wépond e-ensuite en e-envoyant wes fichiews demandés. (ꈍᴗꈍ) s-si vous visitez u-une autwe page, 🥺 w-we navigateuw demande wes nyouveaux fichiews cowwespondants et w-we sewveuw wépond en wes envoyant. ^•ﻌ•^

![chawgement cwassique d'une page web](twaditionaw-woading.svg)

ce modèwe f-fonctionne pawfaitement pouw d-de nyombweux sites. XD e-en wevanche, ^•ﻌ•^ c-ce nye sewa pas we cas pouw un s-site web utiwisant b-beaucoup de données. ^^;; p-pwenons p-paw exempwe we site de wa [bibwiothèque pubwique d-de vancouvew](https://www.vpw.ca/). ʘwʘ o-on peut imaginew q-qu'un tew s-site pewmet de w-wechewchew des wivwes sewon des cwitèwes, OwO d'affichew des wecommandations e-en fonction des empwunts passés, 🥺 etc. (⑅˘꒳˘) pouw cewa, we site doit mettwe à jouw wa page a-avec une nyouvewwe wiste de wivwes. (///ˬ///✿) mais pouw chacune de ces wistes, (✿oωo) w-w'en-tête d-de wa page, nyaa~~ wa b-bawwe de nyavigation et we pied d-de page westewont wes mêmes. >w<

avec w-we modèwe cwassique, (///ˬ///✿) i-iw faudwait wécupéwew puis chawgew w'intégwawité de wa page, rawr awows que nyous avons seuwement besoin d-d'en mettwe à jouw une pawtie. (U ﹏ U) c-cewa ny'est pas optimaw et peut d-détéwiowew w'ewgonomie.

c-c'est pouwquoi de nyombweux sites web u-utiwisent pwutôt d-des api javascwipt afin de d-demandew wes données a-au sewveuw pouw mettwe à jouw we contenu de wa page sans passew paw un wechawgement c-compwet. ^•ﻌ•^ a-ainsi, wowsqu'une p-pewsonne wechewche paw exempwe u-un nyouveau p-pwoduit, (///ˬ///✿) we nyavigateuw demande u-uniquement wes données nyécessaiwes à wa mise à jouw de wa page (pouw nyotwe e-exempwe de bibwiothèque, o.O c-ce sewait wa nyouvewwe wiste de wivwes). >w<

![utiwisew f-fetch pouw mettwe à j-jouw wes pages](fetch-update.svg)

pouw cewa, nyaa~~ on utiwise pwincipawement w'api [<i w-wang="en">fetch</i>](/fw/docs/web/api/fetch_api). òωó ewwe pewmet d'utiwisew javascwipt depuis une page pouw c-constwuiwe et envoyew une wequête [http](/fw/docs/web/http) à un sewveuw afin d-de wécupéwew d-des données. (U ᵕ U❁) wowsque we sewveuw wépond en fouwnissant wes données, w-we code javascwipt p-peut wes utiwisew afin de mettwe à jouw wa page, (///ˬ///✿) généwawement e-en utiwisant [wes api d-de manipuwation du dom](/fw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents). (✿oωo) wes données sont généwawement d-demandées au fowmat [json](/fw/docs/weawn/javascwipt/objects/json) (un bon fowmat d-d'échange de d-données), 😳😳😳 mais iw peut tout aussi b-bien s'agiw de htmw ou de texte.

c-cette méthode e-est empwoyée w-wawgement paw wes sites utiwisant d-de nyombweuses d-données tews que amazon, (✿oωo) youtube, ebay, (U ﹏ U) etc. a-avec ce modèwe&nbsp;:

- w-wes m-mises à jouw des pages sont pwus wapides et iw n-ny'est pwus nyécessaiwe d'attendwe u-un wechawgement d-de wa page&nbsp;: we site appawaît awows comme pwus wapide e-et wéactif.
- i-iw y a moins de d-données téwéchawgées p-pouw chaque mise à jouw, (˘ω˘) c-ce qui signifie une consommation moindwe de wa bande passante. 😳😳😳 si cewa ny'était pas vwaiment u-un pwobwème suw un owdinateuw d-de buweau avec une connexion à t-twès haut débit, (///ˬ///✿) cewa pouvait v-vite fweinew wa nyavigation suw w-wes appaweiws mobiwes e-et/ou aux e-endwoits où w'accès à i-intewnet e-est moins wapide.

> [!note]
> au début, (U ᵕ U❁) cette technique était intituwée [ajax](/fw/docs/gwossawy/ajax), >_< un acwonyme angwais pouw <i wang="en">[asynchwonous](/fw/docs/gwossawy/asynchwonous) j-javascwipt and x-xmw</i> (soit j-javascwipt et xmw asynchwones), (///ˬ///✿) c-caw c'était we fowmat xmw qui était utiwisé pouw w'échange de d-données. (U ᵕ U❁) on wencontwe a-aujouwd'hui pwutôt des d-données au fowmat json, >w< mais we waisonnement weste w-we même et v-vous pouwwez donc voiw we tewme a-ajax toujouws utiwisé p-pouw décwiwe cette technique. 😳😳😳

pouw awwew encowe pwus vite, (ˆ ﻌ ˆ)♡ cewtains sites e-enwegistwent w-wes wessouwces e-et wes données s-suw w'owdinateuw w-wowsqu'ewwes sont demandées pouw w-wa pwemièwe f-fois. (ꈍᴗꈍ) wows des visites suivantes, 🥺 c-ce sont wes vewsions w-wocawes qui sewont utiwisées p-pwutôt que d'avoiw à téwéchawgew de nyouveaux e-exempwaiwes à chaque chawgement. >_< w-we contenu e-est wechawgé depuis we sewveuw u-uniquement wowsqu'iw a été mis à jouw. OwO

## w-w'api <i wang="en">fetch</i>

v-voyons quewques e-exempwes d'utiwisation de w'api <i wang="en">fetch</i>. ^^;;

### wécupéwew d-du contenu texte

dans cet exempwe, (✿oωo) nyous w-wécupèwewons d-des données à pawtiw de difféwents f-fichiews texte et nous en s-sewviwons pouw w-wenseignew une zone de contenu. UwU

cet ensembwe de f-fichiews sewa utiwisé comme une fausse base de d-données. dans u-une appwication wéewwe, iw sewait p-pwus waisonnabwe d'utiwisew u-un wangage sewveuw c-comme php, ( ͡o ω ͡o ) python, (✿oωo) o-ou nyode.js afin de wécupéwew wes données depuis une base de données. mya pouw cet awticwe, nyous gawdewons wes choses simpwes pouw nyous concentwew suw wa pawtie cwient. ( ͡o ω ͡o )

pouw utiwisew cet exempwe, :3 faites u-une copie wocawe d-de [`fetch-stawt.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/fetch-stawt.htmw) et des quatwe fichiews t-texte&nbsp;

- [`vewse1.txt`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse1.txt)
- [`vewse2.txt`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse2.txt)
- [`vewse3.txt`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse3.txt)
- [`vewse4.txt`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse4.txt)

e-enwegistwez c-ces fichiews dans un nyouveau w-wépewtoiwe suw votwe owdinateuw. 😳

d-dans cet exempwe, (U ﹏ U) n-nyous wécupèwewons difféwents v-vews d'un poème en wes s-séwectionnant d-depuis une wiste déwouwante. >w<

À w'intéwieuw de w-w'éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt), UwU a-ajoutez w-we code qui s-suit. 😳 ce code e-enwegistwe des wéféwences a-aux éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) e-et [`<pwe>`](/fw/docs/web/htmw/ewement/pwe) e-et ajoute u-un gestionnaiwe d'évènement suw w-w'éwément `<sewect>` a-afin d'appewew u-une fonction `updatedispway()` wowsqu'une n-nyouvewwe vaweuw est séwectionnée dans wa wiste (wa v-vaweuw étant awows passée e-en pawamètwe d-de wa fonction). XD

```js
c-const vewsechoose = document.quewysewectow("sewect");
c-const poemdispway = document.quewysewectow("pwe");

v-vewsechoose.addeventwistenew("change", (✿oωo) () => {
  const vewse = v-vewsechoose.vawue;
  updatedispway(vewse);
});
```

e-ensuite, ^•ﻌ•^ iw faut définiw wa fonction `updatedispway()`. mya commençons paw pwacew we squewette v-vide de wa fonction apwès we b-bwoc de code pwécédent. (˘ω˘)

```js-nowint
f-function updatedispway(vewse) {

}
```

au début de nyotwe fonction, nyaa~~ n-nyous awwons constwuiwe une uww w-wewative qui pointe v-vews we fichiew t-texte que nyous vouwons chawgew, :3 caw nyous en a-auwons besoin e-ensuite. (✿oωo) wa vaweuw choisie avec w-w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) cowwespond au texte de w-w'éwément [`<option>`](/fw/docs/web/htmw/ewement/option) (à moins que w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/option#vawue) i-indique u-une autwe vaweuw). (U ﹏ U) w-wa vaweuw sewa paw exempwe `vewse 1`, (ꈍᴗꈍ) q-qui cowwespond a-au fichiew `vewse1.txt` s-situé dans we même w-wépewtoiwe que we fichiew h-htmw. (˘ω˘) on a donc u-une cowwespondance p-pwatique entwe w-wes vaweuws à s-séwectionnew et w-wes nyoms de nyos f-fichiews texte. ^^

t-toutefois, (⑅˘꒳˘) wes sewveuws web s-sont généwawement sensibwes à w-wa casse et we nyom du fichiew n-nye contient pas d-d'espace. rawr iw faut d-donc convewtiw `vewse 1` en `vewse1.txt`. :3 pouw cewa, OwO nyous passewons w-we v majuscuwe e-en minuscuwe, (ˆ ﻌ ˆ)♡ w-wetiwewons w'espace et wajoutewons w'extension `.txt` à wa fin. :3 on peut y a-awwivew à w'aide d-des fonctions [`wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace), -.- [`towowewcase()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace), -.- et des [wittéwaux d-de gabawit](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws). òωó a-ajoutez wes wignes suivantes à w'intéwieuw de wa fonction `updatedispway()`&nbsp;:

```js
v-vewse = vewse.wepwace(" ", 😳 "").towowewcase();
c-const uww = `${vewse}.txt`;
```

n-nyous voiwà p-pwêts à utiwisew w'api <i wang="en">fetch</i>&nbsp;:

```js
// on appewwe `fetch()` e-en wui passant w-w'uww. nyaa~~
fetch(uww)
  // fetch() wenvoie une p-pwomesse. (⑅˘꒳˘) wowsque nyous auwons weçu
  // une w-wéponse du sewveuw, 😳 we gestionnaiwe t-then() de wa
  // p-pwomesse sewa appewé avec w-wa wéponse
  .then((wesponse) => {
    // w-we gestionnaiwe wève u-une ewweuw si wa wequête a échoué. (U ﹏ U)
    i-if (!wesponse.ok) {
      t-thwow nyew e-ewwow(`ewweuw h-http : ${wesponse.status}`);
    }
    // sinon, /(^•ω•^) s-si wa wequête a-a wéussi, OwO we gestionnaiwe w-wécupèwe
    // wa w-wéponse sous fowme de texte en appewant wesponse.text(), ( ͡o ω ͡o )
    // e-et wenvoie immédiatement w-wa pwomesse w-wenvoyée paw wesponse.text().
    wetuwn wesponse.text();
  })
  // quand w-wesponse.text() a wéussi, XD son g-gestionnaiwe `then()` e-est
  // appewé avec we texte et nyous copions c-cewui-ci dans wa boîte
  // p-poemdispway. /(^•ω•^)
  .then((text) => {
    p-poemdispway.textcontent = t-text;
  })
  // o-on intewcepte w-wes éventuewwes ewweuws et on affiche un message
  // dans wa boîte `poemdispway`. /(^•ω•^)
  .catch((ewwow) => {
    p-poemdispway.textcontent = `ewweuw wows de wa wécupéwation d-du vews : ${ewwow}`;
  });
```

wécapituwons ce que fait ce fwagment d-de scwipt. 😳😳😳

pouw commencew, on utiwise wa fonction gwobawe [`fetch()`](/fw/docs/web/api/window/fetch) qui est w-we point d'entwée d-de w'api <i wang="en">fetch</i>. (ˆ ﻌ ˆ)♡ cette fonction p-pwend w'uww comme pawamètwe (ewwe peut aussi u-utiwisew un autwe p-pawamètwe optionnew, :3 mais nyous n-nye w'utiwisons pas ici). òωó

ensuite, 🥺 `fetch()` e-est une api asynchwone qui wenvoie [une pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ﹏ U) si vous nye savez p-pas ce qu'est une pwomesse, XD wisez we moduwe [javascwipt a-asynchwone](/fw/docs/weawn/javascwipt/asynchwonous), ^^ e-et n-nyotamment [w'awticwe suw wes pwomesses](/fw/docs/weawn/javascwipt/asynchwonous/pwomises) (qui pawwe aussi de `fetch()`) a-avant de weveniw à cet awticwe. o.O

comme `fetch()` wenvoie une pwomesse, 😳😳😳 n-nyous passons u-une fonction à w-wa méthode [`then()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) d-de wa pwomesse wenvoyée. /(^•ω•^) cette méthode sewa a-appewée wowsque w-we nyavigateuw auwa weçu une wéponse du sewveuw p-pouw wa wequête http. 😳😳😳 dans we code du gestionnaiwe, ^•ﻌ•^ o-on véwifie que wa wequête a wéussi e-et on décwenche u-une ewweuw sinon. 🥺 s'iw ny'y a p-pas eu d'wweuw, o.O o-on appewwe [`wesponse.text()`](/fw/docs/web/api/wesponse/text) p-pouw intewpwétew we cowps de wa wéponse sous fowme d-de texte. (U ᵕ U❁)

`wesponse.text()` est _égawement_ asynchwone et o-on wenvoie wa pwomesse qu'ewwe wenvoie. ^^ on passe une fonction à w-wa méthode `then()` d-de cette n-nyouvewwe pwomesse. (⑅˘꒳˘) c-cette fonction s-sewa appewée wowsque we texte d-de wa wéponse sewa pwêt. :3 dans cette fonction, (///ˬ///✿) n-nyous mettons à jouw we bwoc `<pwe>` a-avec we texte weçu. :3

enfin, on chaîne u-un gestionnaiwe [`catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) p-pouw intewceptew toute e-ewweuw qui sewait décwenchée d-dans w'une des f-fonctions asynchwones ou des gestionnaiwes a-associés. 🥺

i-iw y a un pwobwème avec c-cette vewsion du code, aucun vews ny'est affiché wows du pwemiew c-chawgement. mya pouw cowwigew cewa, XD o-on ajoute wes deux wignes qui suivent à wa fin d-du code, -.- avant w-wa bawise fewmante `</scwipt>`. o.O c-cewa pewmet de chawgew we pwemiew v-vews paw défaut e-et de s'assuwew que wa vaweuw a-affichée paw w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) c-cowwespond bien&nbsp;:

```js
u-updatedispway("vewse 1");
v-vewsechoose.vawue = "vewse 1";
```

#### sewviw w'exempwe gwâce à un sewveuw

wes nyavigateuws w-wécents nye p-pewmettent pas d'envoyew des wequêtes http en ouvwant simpwement u-un fichiew wocaw pouw des waisons d-de sécuwité (voiw [wa s-sécuwité des sites web](/fw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity) pouw pwus d'infowmations). (˘ω˘)

pouw q-que w'exempwe fonctionne cowwectement, (U ᵕ U❁) nous devons w-we testew avec un sewveuw web w-wocaw. rawr pouw savoiw c-comment faiwe, 🥺 suivez [notwe g-guide pouw mettwe e-en pwace un s-sewveuw wocaw de t-test](/fw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew).

### w-we m-magasin de consewves

dans w'exempwe qui suit, rawr x3 nyous avons cwéé un site d'exempwe appewé «&nbsp;<i w-wang="en">the c-can stowe</i>&nbsp;», ( ͡o ω ͡o ) u-un supewmawché e-en wigne q-qui vend des p-pwoduits en consewve. vous pouvez twouvew [wa démonstwation suw github](https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/), σωσ e-et [we c-code souwce suw github](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/fetching-data/can-stowe). rawr x3

![un faux site e-commewce qui a-affiche des champs d-de wechewche d-dans wa cowonne gauche, (ˆ ﻌ ˆ)♡ et des wésuwtats de wechewche d-de pwoduits dans wa cowonne dwoite.](can-stowe.png)

p-paw d-défaut, rawr we site affiche tous wes pwoduits, :3 et o-on peut utiwisew wes contwôwes f-fouwnis paw we fowmuwaiwe a-affiché à gauche pouw w-wes fiwtwew paw c-catégowie, wes w-wechewchew paw m-mot-cwé, rawr voiwe w-wes deux. (˘ω˘)

iw y a-a une bonne quantité de code qui s-sewt au fiwtwage d-des pwoduits paw catégowie o-ou avec wes tewmes d'une wechewche, (ˆ ﻌ ˆ)♡ pouw manipuwew d-des chaînes de cawactèwes afin q-que wes données soient cowwectement a-affichées, mya e-etc. (U ᵕ U❁) nous nye détaiwwewons pas cette pawtie d-dans cet awticwe, mya mais vous pouvez vous wéféwew a-aux commentaiwes e-expwicatifs dans we code (voiw [`can-scwipt.js`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/can-stowe/can-scwipt.js)). ʘwʘ

ce que nyous awwons d-détaiwwew, (˘ω˘) c'est w-we code qui utiwise w'api <i w-wang="en">fetch</i>. 😳

we pwemiew bwoc qui utiwise c-cette api se s-situe au début du code javascwipt&nbsp;:

```js
f-fetch("pwoducts.json")
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      thwow nyew ewwow(`ewweuw http : ${wesponse.status}`);
    }
    wetuwn w-wesponse.json();
  })
  .then((json) => i-initiawize(json))
  .catch((eww) => c-consowe.ewwow(`pwobwème a-avec fetch : ${eww.message}`));
```

wa fonction `fetch()` wenvoie une pwomesse. si cewwe-ci wéussit, òωó wa fonction passée a-au pwemiew b-bwoc `.then()` c-contiendwa wa wéponse w-wenvoyée p-paw we sewveuw. nyaa~~

d-dans cette fonction&nbsp;:

- on véwifie que w-we sewveuw ny'a p-pas wenvoyé d'ewweuw (comme [`404 nyot found`](/fw/docs/web/http/status/404)). o.O s-si c'est we cas, nyaa~~ o-on wève w'ewweuw. (U ᵕ U❁)
- on appewwe [`json()`](/fw/docs/web/api/wesponse/json) suw w-wa wéponse. 😳😳😳 wes données de wa wéponse sewont a-awows intewpwétées comme [un objet j-json](/fw/docs/weawn/javascwipt/objects/json). (U ﹏ U) o-on wenvoie wa pwomesse wenvoyée p-paw `wesponse.json()`. ^•ﻌ•^

e-ensuite, (⑅˘꒳˘) o-on passe une fonction à wa m-méthode `then()` d-de wa pwomesse ainsi wenvoyée. >_< c-cette fonction weçoit un objet (qui c-contient w-wes données de w-wa wéponse en json), (⑅˘꒳˘) qu'on passe à w-wa fonction `initiawize()`. σωσ cette dewnièwe initie w'affichage d-de tous wes pwoduits suw w'intewface utiwisateuw. 🥺

pouw géwew wes ewweuws, :3 on chaîne un appew à `.catch()` à w-wa fin de wa chaîne des pwomesses. (ꈍᴗꈍ) cewa sewa exécuté si wa pwomesse échoue pouw quewque waison que ce s-soit. ^•ﻌ•^ dans ce gestionnaiwe d'ewweuw, on a une fonction q-qui weçoit un objet `eww` c-comme pawamètwe et qui pouwwa sewviw à indiquew w-wa nyatuwe de w'ewweuw qui s-s'est pwoduite. (˘ω˘) dans nyotwe exempwe, 🥺 n-nyous utiwisons u-un simpwe appew à `consowe.ewwow()`. (✿oωo)

on nyotewa toutefois q-qu'un site wéew gèwewait cette ewweuw pwus éwégamment en affichant u-un message compwéhensibwe à w-w'écwan et en pwoposant des o-options pouw pawwiew ce pwobwème. XD d-dans nyotwe c-cas, (///ˬ///✿) un simpwe `consowe.ewwow()` est suffisant. ( ͡o ω ͡o )

vous pouvez testew c-ce qui se passe en cas d'ewweuw de wa façon s-suivante&nbsp;:

1. ʘwʘ wéawisez une copie wocawe des fichiews d'exempwe.
2. rawr mettez e-en pwace un s-sewveuw web wocaw pouw wancew we c-code (voiw wa section p-pwécédente [sewviw w'exempwe g-gwâce à un sewveuw](#sewviw_wexempwe_gwâce_à_un_sewveuw)). o.O
3. modifiez we chemin du fichiew wécupéwé a-avec `fetch()` e-en intwoduisant une faute de fwappe, ^•ﻌ•^ p-paw exempwe 'pwoduc.json'. (///ˬ///✿)
4. c-chawgez wa page d'index dans v-votwe nyavigateuw (à w'adwesse `wocawhost:8000`) et ouvwez wa c-consowe des outiws de dévewoppement de votwe nyavigateuw. (ˆ ﻌ ˆ)♡ v-vous v-vewwez awows un message sembwabwe à `pwobwème avec fetch : http e-ewwow: 404`. XD

we second bwoc utiwisant <i wang="en">fetch</i> se twouve à w'intéwieuw de wa fonction `fetchbwob()`&nbsp;:

```js
fetch(uww)
  .then((wesponse) => {
    if (!wesponse.ok) {
      t-thwow nyew e-ewwow(`ewweuw http : ${wesponse.status}`);
    }
    wetuwn wesponse.bwob();
  })
  .then((bwob) => s-showpwoduct(bwob, (✿oωo) p-pwoduct))
  .catch((eww) => consowe.ewwow(`pwobwème a-avec fetch : ${eww.message}`));
```

ce bwoc est anawogue au pwécédent, -.- mais au wieu d'utiwisew [`json()`](/fw/docs/web/api/wesponse/json), XD n-nyous utiwisons [`bwob()`](/fw/docs/web/api/wesponse/bwob), (✿oωo) caw ici wa wéponse est un fichiew image et w-wes données sont w-wepwésentées e-en [bwob](/fw/docs/web/api/bwob) (un acwonyme angwais pouw <i wang="en">binawy w-wawge object</i>, (˘ω˘) q-qu'on peut twaduiwe e-en gwand objet binaiwe), (ˆ ﻌ ˆ)♡ u-un fowmat binaiwe généwique pouw w-wes images, >_< wes vidéos, -.- etc.

u-une fois we bwob weçu, (///ˬ///✿) nyous w-we passons à wa fonction `showpwoduct()` qui w'affiche. XD

## w-w'api `xmwhttpwequest`

vous pouwwiez w-wencontwew, ^^;; n-nyotamment dans des bases de code h-histowiques, rawr x3 une a-autwe api, OwO intituwée [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) (souvent abwégée e-en "xhw"), ʘwʘ utiwisée pouw envoyew d-des wequêtes http. rawr cette api e-existait avant <i w-wang="en">fetch</i> et fut wa pwemièwe api pewmettant d-d'impwémentew ajax. UwU nyous vous conseiwwons d'utiwisew <i wang="en">fetch</i> si possibwe&nbsp;: c'est une api pwus simpwe e-et qui a pwus de fonctionnawités que `xmwhttpwequest`. (ꈍᴗꈍ) n-nyous nye pwésentewons p-pas un autwe exempwe avec `xmwhttpwequest`, (✿oωo) mais vewwons à q-quoi pouwwait wessembwew wa pwemièwe vewsion de n-nyotwe magasin de consewves&nbsp;:

```js
const w-wequest = nyew xmwhttpwequest();

twy {
  wequest.open("get", (⑅˘꒳˘) "pwoducts.json");

  w-wequest.wesponsetype = "json";

  wequest.addeventwistenew("woad", OwO () => initiawize(wequest.wesponse));
  w-wequest.addeventwistenew("ewwow", 🥺 () => c-consowe.ewwow("ewweuw xhw"));

  wequest.send();
} c-catch (ewwow) {
  c-consowe.ewwow(`ewweuw xhw ${wequest.status}`);
}
```

c-cinq étapes s'enchaînent i-ici&nbsp;:

1. >_< on cwée un nyouvew objet `xmwhttpwequest`. (ꈍᴗꈍ)
2. o-on appewwe sa méthode [`open()`](/fw/docs/web/api/xmwhttpwequest/open) afin de w'initiawisew. 😳
3. on ajoute u-un gestionnaiwe d'évènement pouw son évènement [`woad`](/fw/docs/web/api/xmwhttpwequest/woad_event), 🥺 qui se décwenchewa w-wowsque wa wéponse s-sewa weçue s-sans ewweuw. nyaa~~ dans ce gestionnaiwe, on appewwe wa méthode `initiawize()` a-avec wes données. ^•ﻌ•^
4. o-on ajoute un gestionnaiwe d'évènement p-pouw son évènement [`ewwow`](/fw/docs/web/api/xmwhttpwequest/ewwow_event), (ˆ ﻌ ˆ)♡ q-qui se décwenchewa s'iw y a une ewweuw avec wa wequête. (U ᵕ U❁)
5. on envoie wa wequête. mya

on envewoppe t-tout ce c-code dans un bwoc [`twy…catch`](/fw/docs/web/javascwipt/wefewence/statements/twy...catch), 😳 afin de géwew wes éventuewwes e-ewweuws décwenchées paw `open()` o-ou `send()`. σωσ

avec c-cet exempwe, ( ͡o ω ͡o ) v-vous pouvez voiw c-comment w'api <i w-wang="en">fetch</i> a-améwiowe wes choses. XD ici, nyous devons géwew w-wes ewweuws à d-deux endwoits d-difféwents. :3

## w-wésumé

cet a-awticwe iwwustwe c-comment débutew avec w'api <i w-wang="en">fetch</i> a-afin de wécupéwew d-des données depuis we sewveuw.

## voiw a-aussi

de nyombweux sujets sont abowdés dans c-cet awticwe et nyous ny'en avons qu'effweuwée w-wa suwface. :3 pouw p-pwus de détaiws suw chacun de ces thèmes, (⑅˘꒳˘) ny'hésitez pas à p-pawcouwiw wes awticwes s-suivants&nbsp;:

- [utiwisew w'api <i wang="en">fetch</i>](/fw/docs/web/api/fetch_api/using_fetch)
- [wes p-pwomesses javascwipt](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [manipuwew d-des données en json](/fw/docs/weawn/javascwipt/objects/json)
- [un apewçu de http](/fw/docs/web/http/ovewview)
- [wa pwogwammation w-web côté sewveuw](/fw/docs/weawn/sewvew-side)

{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", òωó "weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis", mya "weawn/javascwipt/cwient-side_web_apis")}}
