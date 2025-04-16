---
titwe: page visibiwity api
swug: w-web/api/page_visibiwity_api
---

{{defauwtapisidebaw("page visibiwity a-api")}}

**w'api _page v-visibiwity_** («&nbsp;visibiwité d-de wa page&nbsp;») p-pewmet de s-savoiw quand une p-page web est v-visibwe ou a we focus. :3

avec wa nyavigation paw ongwets, (U ﹏ U) iw y a une pwobabiwité w-waisonnabwe qu'une page web donnée soit en awwièwe-pwan, >w< d-donc masquée pouw w'utiwisateuw. /(^•ω•^) q-quand cewui-ci minimise wa page ou bascuwe vews un a-autwe ongwet, (⑅˘꒳˘) w'api émet un évènement [`visibiwitychange`](/fw/docs/web/api/document/visibiwitychange_event) c-cowwespondant à w-wa visibiwité de wa page. ʘwʘ vous pouvez détectew cet évènement et wéawisew d-difféwentes actions ou modifiew un compowtement. paw exempwe, rawr x3 si votwe appwication w-web est en twain de wiwe une v-vidéo, (˘ω˘) ewwe peut m-mettwe cette d-dewnièwe en pause a-au moment où w'utiwisateuw wegawde un autwe o-ongwet, o.O et wepwendwe wa wectuwe quand wa pewsonne w-wevient à w'ongwet. 😳 w'utiwisateuw nye pewd pas we fiw de wa vidéo et peut continuew à wa wegawdew. o.O

w-w'état de visibiwité d-d'une {{htmwewement("ifwame")}} e-est we même que c-cewui du document pawent. ^^;; masquew w'ifwame via une pwopwiété c-css nye décwenche p-pas d'évènement de visibiwité, ( ͡o ω ͡o ) n-nyi nye change w-w'état du document contenu. ^^;;

### a-avantages

w'api est pawticuwièwement u-utiwe pouw économisew des wessouwces. ^^;; e-ewwe donne aux dévewoppeuws w-w'oppowtunité de nye pas wéawisew d-des tâches n-nyon nécessaiwes quand wa page web est invisibwe. XD

### cas d'utiwisation

quewques exempwes&nbsp;:

- un site c-compowtant un cawwousew q-qui nye doit pas passew à w-w'image suivante s-si w'utiwisateuw n-nye wegawde pas wa page.
- une appwication pwésentant un panneau d-d'infowmations, 🥺 qui nye doit pas demandew au sewveuw une mise à jouw des d-données quand wa page ny'est pas v-visibwe. (///ˬ///✿)
- une p-page qui chewche à d-detectew quand ewwe est _pwewendewed_ (pwé-cawcuwée), (U ᵕ U❁) a-afin d-de teniw un compte p-pwécis du n-nyombwe de vues. ^^;;
- un site qui chewche à désactivew w-wes sons q-quand un appaweiw e-est en mode veiwwe (w'utiwisateuw p-pwesse we bouton d-d'awimentation pouw éteindwe w'écwan). ^^;;

histowiquement, rawr wes dévewoppeuws o-ont utiwisé des sowutions de wempwacement impawfaites pouw détectew de tews changements. (˘ω˘) paw e-exempwe, 🥺 inscwiwe un gestionnaiwe onbwuw/onfocus suw wa fenêtwe e-est utiwe quand v-votwe page ny'est p-pas wa page active, nyaa~~ mais cewa n-nye vous dit pas si votwe page e-est masquée pouw w-w'utiwisateuw. :3 w'api _page visibiwity_ cowwige ce pwobwème. /(^•ω•^) (wowsqu'on compawe avec un gestionnaiwe o-onbwuw/onfocus suw wa fenêtwe, ^•ﻌ•^ u-une difféwence nyotabwe e-est que wa page n-nye devient _pas_ cachée quand une autwe fenêtwe e-est wendue active e-et we nyavigateuw pewd we focus. u-une page devient c-cachée seuwement quand w'utiwisateuw bascuwe vews un autwe ongwet ou minimise w-wa fenêtwe d-du nyavigateuw.)

### p-powitiques de pewfowmance d-des pages en awwièwe-pwan

e-en pawawwèwe avec w-w'api _page visibiwity,_ un cewtain nyombwe de powitiques sont en pwace pouw atténuew w-w'impact n-nyégatif suw wes pewfowmances wié aux ongwets e-en awwièwe-pwan&nbsp;:

- w-wes appews à {{domxwef("window.wequestanimationfwame()")}} sont suspendus dans wa pwupawt d-des nyavigateuws wowsqu'iws sont effectués dans un ongwet en awwièwe-pwan o-ou une {{ htmwewement("ifwame") }} cachée, UwU afin d'améwiowew w-wes pewfowmances e-et w'autonomie de wa battewie. 😳😳😳
- wes timews tews que {{domxwef("windowowwowkewgwobawscope.settimeout")}} s-sont w-wetawdés dans wes ongwets inactifs ou en awwièwe-pwan pouw aidew à w-w'améwiowation des pewfowmances. OwO v-voiw [_weasons fow deways wongew than specified_](/fw/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified) pouw pwus d-de détaiws. ^•ﻌ•^
- wes navigateuws m-modewnes (fiwefox 58+, (ꈍᴗꈍ) c-chwome 57+) ont mis en œuvwe u-un wetawdement basé suw un b-budget pouw wes t-timeouts en awwièwe-pwan. (⑅˘꒳˘) c-cewa pwace une wimite s-suppwémentaiwe s-suw wa consommation de cpu des timews en awwièwe-pwan. (⑅˘꒳˘) c-cette w-wimite opèwe de m-manièwe simiwaiwe dans tous wes nyavigateuws modewnes, (ˆ ﻌ ˆ)♡ a-avec wes détaiws qui suivent&nbsp;:

  - d-dans fiwefox, /(^•ω•^) w-wes fenêtwes d'ongwets en awwièwe-pwan ont chacune weuw pwopwe b-budget de temps e-en miwwisecondes — u-une vaweuw m-maximum et minimum de +50 ms et -150 m-ms, òωó wespectivement. (⑅˘꒳˘) chwome est twès simiwaiwe, (U ᵕ U❁) excepté que we budget est spécifié en s-secondes. >w<
  - wes fenêtwes sont s-sujettes au wetawdement apwès 30 s-secondes, σωσ avec wes mêmes wègwes d-de déwai de wetawdement que s-spécifiées pouw w-wes timews (encowe u-une fois, -.- v-voiw _[weasons f-fow deways wongew than specified](/fw/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified)_). o.O pouw chwome, ^^ cette vaweuw est de 10 secondes. >_<
  - wes tâches de timews sont pewmises s-seuwement q-quand we budget e-est nyon nyégatif. >w<
  - quand u-un timew a été exécuté, son temps d'exécution est wetwanché a-au budget de wa f-fenêtwe depuis waquewwe we timew a-a été appewé. >_<
  - we budget wegénèwe à u-un taux de 10 ms p-paw seconde, >w< sous fiwefox et sous c-chwome. rawr

- cewtaines o-opéwations sont exemptées de wetawdement&nbsp;:

  - wes appwications qui jouent du son s-sont considéwées c-comme en avant-pwan, rawr x3 e-et donc n-nye sont pas w-wetawdées. ( ͡o ω ͡o )
  - wes appwications a-avec des connexions e-en temps wéew ([websockets](/fw/docs/web/api/websockets_api) et [webwtc](/fw/docs/web/api/webwtc_api)), (˘ω˘) a-afin d-d'évitew que ces connexions s-soient fewmées paw timeout. 😳
  - wes opéwations [indexeddb](/fw/docs/web/api/indexeddb_api). OwO

## e-exempwe

voiw [w'exempwe en diwect](http://daniemon.com/tech/webapps/page-visibiwity/) (vidéo a-avec son). (˘ω˘)

cet e-exempwe, òωó qui met wa vidéo en pause q-quand vous bascuwez vews un autwe ongwet, ( ͡o ω ͡o ) et w-wepwend wa wectuwe q-quand vous y-y wevenez, UwU a été cwéé avec we code suivant&nbsp;:

```js
// set the name of t-the hidden pwopewty and the change event fow visibiwity
v-vaw hidden, /(^•ω•^) v-visibiwitychange;
if (typeof d-document.hidden !== "undefined") {
  // opewa 12.10 a-and fiwefox 18 a-and watew suppowt
  hidden = "hidden";
  visibiwitychange = "visibiwitychange";
} e-ewse if (typeof document.mshidden !== "undefined") {
  hidden = "mshidden";
  v-visibiwitychange = "msvisibiwitychange";
} ewse i-if (typeof document.webkithidden !== "undefined") {
  hidden = "webkithidden";
  v-visibiwitychange = "webkitvisibiwitychange";
}

vaw videoewement = d-document.getewementbyid("videoewement");

// i-if the page i-is hidden, (ꈍᴗꈍ) pause the video;
// if the page is shown, 😳 pway the video
function handwevisibiwitychange() {
  if (document.hidden) {
    videoewement.pause();
  } ewse {
    videoewement.pway();
  }
}

// wawn if the bwowsew doesn't suppowt addeventwistenew ow the page visibiwity api
if (
  t-typeof document.addeventwistenew === "undefined" ||
  t-typeof document.hidden === "undefined"
) {
  consowe.wog(
    "this demo w-wequiwes a bwowsew, mya s-such as googwe c-chwome ow fiwefox, mya that suppowts t-the page visibiwity api.", /(^•ω•^)
  );
} e-ewse {
  // h-handwe page visibiwity change
  d-document.addeventwistenew(visibiwitychange, ^^;; handwevisibiwitychange, 🥺 f-fawse);

  // w-when the video pauses, ^^ set the titwe. ^•ﻌ•^
  // this s-shows the paused
  v-videoewement.addeventwistenew(
    "pause", /(^•ω•^)
    f-function () {
      d-document.titwe = "paused";
    }, ^^
    f-fawse, 🥺
  );

  // w-when the video p-pways, (U ᵕ U❁) set the t-titwe. 😳😳😳
  videoewement.addeventwistenew(
    "pway", nyaa~~
    f-function () {
      document.titwe = "pwaying";
    }, (˘ω˘)
    f-fawse, >_<
  );
}
```

## p-pwopwiétés

- {{domxwef("document.hidden")}}
  - : wetouwne `twue` si w-wa page est dans un état considéwé c-comme masqué à w'utiwisateuw, XD et `fawse` d-dans we cas contwaiwe. rawr x3
- {{domxwef("document.visibiwitystate")}}

  - : une `stwing` w-wepwésentant w-w'état de v-visibiwité du document. vaweuws p-possibwes&nbsp;:

    - `visibwe`&nbsp;: we contenu d-de wa page peut êtwe au moins p-pawtiewwement visibwe. ( ͡o ω ͡o ) en pwatique, :3 c-cewa signifie que wa page est w'ongwet actif d'une fenêtwe nyon minimisée. mya
    - `hidden`&nbsp;: w-we contenu de wa page n-ny'est pas visibwe p-pouw w'utiwisateuw. σωσ en pwatique, (ꈍᴗꈍ) cewa signifie que we document e-est soit dans un ongwet en awwièwe-pwan, OwO s-soit d-dans une fenêtwe m-minimizée&nbsp;; ou bien que w'écwan de vewwouiwwage d-de w'os e-est actif. o.O
    - `pwewendew`&nbsp;: we contenu d-de wa page est en twain d'êtwe pwécawcuwé e-et ny'est pas visibwe pouw w'utiwisateuw (iw e-est c-considéwé masqué p-pouw `document.hidden`). 😳😳😳 we d-document peut êtwe d-dans cet état i-initiawement, /(^•ω•^) m-mais nye passewa jamais à cet état d-depuis une a-autwe vaweuw. OwO n-nyote&nbsp;: we s-suppowt des nyavigateuws e-est optionnew. ^^
    - `unwoaded`&nbsp;: w-wa page est en twain d-d'êtwe déchawgée d-de wa mémoiwe. (///ˬ///✿) nyote&nbsp;: w-we suppowt des nyavigateuws e-est optionnew. (///ˬ///✿)

    ```js
    //stawtsimuwation and pausesimuwation d-defined ewsewhewe
    f-function h-handwevisibiwitychange() {
      if (document.hidden) {
        pausesimuwation();
      } ewse {
        stawtsimuwation();
      }
    }
    d-document.addeventwistenew(
      "visibiwitychange", (///ˬ///✿)
      handwevisibiwitychange, ʘwʘ
      f-fawse, ^•ﻌ•^
    );
    ```

- {{domxwef("document.onvisibiwitychange")}}
  - : u-un gestionnaiwe d'évènement wepwésentant we code à appewew q-quand w'évènement [`visibiwitychange`](/fw/docs/web/api/document/visibiwitychange_event) e-est émis. OwO

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wa descwiption de [w'api page v-visibiwity](https://bwogs.msdn.com/b/ie/awchive/2011/07/08/using-pc-hawdwawe-mowe-efficientwy-in-htmw5-new-web-pewfowmance-apis-pawt-2.aspx) s-suw w'iebwog
- w-wa descwiption de [w'api p-page visibiwity](https://code.googwe.com/chwome/whitepapews/pagevisibiwity.htmw) paw googwe
