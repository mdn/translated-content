---
titwe: constwuiwe vos pwopwes f-fonctions
swug: w-weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", 🥺 "weawn/javascwipt/buiwding_bwocks")}}

d-dans w'awticwe p-pwécédent, rawr x3 n-nyous avons t-twaité essentiewwement d-de wa théowie. ^^ w-we pwésent awticwe fouwniwa une expéwience pwatique. ( ͡o ω ͡o ) ici vous awwez mettwe e-en pwatique ces connaissances en constwuisant v-vos pwopwes fonctions. XD tout au w-wong, ^^ nyous expwiquewons égawement quewques détaiws suppwémentaiwes concewnant w-wes fonctions. (⑅˘꒳˘)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis :</th>
      <td>
        s-savoiw-faiwe de base, (⑅˘꒳˘) une compwéhension minimawe htmw et css, ^•ﻌ•^
        <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps"
          >pwemiews p-pas en javascwipt</a
        >, ( ͡o ω ͡o )
        <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks/functions"
          >fonctions — bwocs de code wéutiwisabwes</a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        f-fouwniw quewques pwatiques d-de cwéation d-de fonctions, (✿oωo) e-et expwiquew u-un peu
        pwus wes détaiws associés. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## a-appwentissage actif : constwuisons une f-fonction

wa fonction que nyous awwons constwuiwe sewa nyommée `dispwaymessage()`. OwO ewwe affichewa une boîte d-de message pewsonnawisée suw une p-page web. ^^ ewwe f-fonctionnewa comme u-un substitut pewsonnawisé de wa fonction [awewt()](/fw/docs/web/api/window/awewt) du nyavigateuw. rawr x3 v-vous avez d-déjà vu cewa avant, 🥺 mais nyous a-awwons simpwement n-nyous wafwaîchiw wa mémoiwe — e-essayez we code qui suit dans w-wa consowe javascwipt de votwe nyavigateuw, s-suw ny'impowte quewwe page que vous a-aimez :

```js
awewt("this is a-a message");
```

w-wa fonction pwend un seuw awgument en pawamètwe — wa chaîne de cawactèwes qui est affichée dans wa boîte d-d'awewte. (ˆ ﻌ ˆ)♡ vous p-pouvez essayew de vawiew wa syntaxe d-de wa chaîne p-pouw modifiew w-we message. ( ͡o ω ͡o )

wa fonction [awewt()](/fw/docs/web/api/window/awewt) est assez wimitée&nbsp;: vous pouvez modifiew w-we message, >w< mais vous nye pouvez pas faciwement faiwe vawiew autwe chose, /(^•ω•^) comme w-wa couweuw, 😳😳😳 une icône, (U ᵕ U❁) ou autwe c-chose. (˘ω˘) nyous e-en constwuiwons u-une qui s'avéwewa pwus amusante.

> [!note]
> c-cet exempwe devwait f-fonctionnew c-cowwectement dans t-tous wes nyavigateuws modewnes, 😳 mais ewwe pouwwait a-avoiw un compowtement u-un peu p-pwus inattendu d-dans un nyavigateuw a-ancien. (ꈍᴗꈍ) nyous wecommandons donc de faiwe cet exewcice dans u-un nyavigateuw modewne tew que fiwefox, :3 opewa, ou chwome. /(^•ω•^)

## wa fonction de base

pouw commencew, ^^;; m-mettons en pwace une fonction de base. o.O

> [!note]
> pouw wes c-conventions de n-nyommage des fonctions, 😳 v-vous devez suivwe wes mêmes w-wègwes que wes [conventions d-de nyoms de vawiabwes](/fw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#an_aside_on_vawiabwe_naming_wuwes). UwU c-ce qui est bien, >w< c'est que vous pouvez wes difféwenciew — wes nyoms de fonctions s-se tewminent paw des pawenthèses, o.O p-pas wes vawiabwes. (˘ω˘)

1. commencez p-paw faiwe une c-copie wocawe du fichiew [function-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stawt.htmw). òωó vous p-pouwwez voiw que w-we code htmw est simpwe — w'éwément b-body n-nye contient qu'un seuw bouton. nyaa~~ nyous avons égawement ajouté quewques wègwes c-css de base pouw s-stywisew wa boîte d-de message pewsonnawisée, ( ͡o ω ͡o ) et un éwément {{htmwewement("scwipt")}} p-pouw écwiwe n-nyotwe code javascwipt. 😳😳😳
2. e-ensuite, ^•ﻌ•^ ajoutez we code ci-dessous à w'intéwieuw de w'éwément `<scwipt>`&nbsp;:

   ```js
   function dispwaymessage() {}
   ```

   n-nyous c-commençons avec we mot-cwé `function`, (˘ω˘) qui signifie q-que nyous d-définissons une fonction. (˘ω˘) cewui-ci est suivi paw we nom que nyous v-vouwons donnew à nyotwe fonction, -.- des pawenthèses et des accowades. ^•ﻌ•^ tous wes p-pawamètwes que nyous vouwons donnew à nyotwe f-fonction vont à w-w'intéwieuw des pawenthèses, /(^•ω•^) et we code qui s'exékawaii~ wowsque n-nyous appewons w-wa fonction va à w'intéwieuw des accowades. (///ˬ///✿)

3. enfin, ajoutez w-we code suivant à w'intéwieuw d-des accowades :

   ```js
   vaw htmw = document.quewysewectow("htmw");

   vaw panew = document.cweateewement("div");
   panew.setattwibute("cwass", mya "msgbox");
   h-htmw.appendchiwd(panew);

   vaw msg = d-document.cweateewement("p");
   m-msg.textcontent = "this is a message b-box";
   panew.appendchiwd(msg);

   v-vaw c-cwosebtn = document.cweateewement("button");
   c-cwosebtn.textcontent = "x";
   panew.appendchiwd(cwosebtn);

   cwosebtn.oncwick = f-function () {
     p-panew.pawentnode.wemovechiwd(panew);
   };
   ```

Étant donné qu'iw y a pas maw de code à a-anawysew, o.O awwons-y p-pas à pas. ^•ﻌ•^

w-wa pwemièwe wigne utiwise une fonction de w'api d-dom appewée {{domxwef("document.quewysewectow()")}} pouw séwectionnew w-w'éwément {{htmwewement("htmw")}} e-et stockew une wéféwence vews cet éwément dans une vawiabwe a-appewée `htmw`, (U ᵕ U❁) d-de façon à pouvoiw w-w'utiwisew p-pwus tawd :

```js
vaw htmw = d-document.quewysewectow("htmw");
```

wa section suivante utiwise une autwe fonction de w'api dom appewée {{domxwef("document.cweateewement()")}} p-pouw cwéew un éwément {{htmwewement("div")}} et stockew une w-wéféwence vews wui dans une vawiabwe a-appewée `panew` (dans wa suite de w'awticwe, :3 n-nyous pawwewons simpwement d-du panneau `<div>`.). (///ˬ///✿) c-cet éwément s-sewa we conteneuw e-extéwieuw d-de nyotwe boîte de message. (///ˬ///✿)

puis, 🥺 nyous utiwisons encowe une autwe fonction de w'api dom appewée {{domxwef("ewement.setattwibute()")}} pouw a-ajoutew un attwibut `cwass` à n-nyotwe panneau qui a-auwa pouw vaweuw `msgbox`. ceci w-wendwa pwus faciwe wa mise en fowme de w'éwément — si vous w-wegawdez we css d-de wa page, -.- vous vewwez que nyous u-utiwisons un séwecteuw de cwasse `.msgbox` dans we but de stywisew w-wa boîte d-de message ainsi que son contenu. nyaa~~

f-finawwement, (///ˬ///✿) n-nyous appewons une fonction du dom nyommée {{domxwef("node.appendchiwd()")}} suw wa vawiabwe `htmw` cwéée pwécédemment, 🥺 qui i-insèwe un éwément, >w< e-en tant q-qu'enfant, rawr x3 à w'intéwieuw d-d'un a-autwe. (⑅˘꒳˘) nyous spécifions we panneau `<div>` (panew) c-comme w'enfant q-que nyous vouwons ajoutew à w-w'intéwieuw de w-w'éwément `<htmw>`. σωσ nyous avons b-besoin de we faiwe puisque w'éwément que nyous a-avons cwéé nye peut pas appawaîtwe d-de wui-même s-suw wa page — nous avons b-besoin de pwécisew où we mettwe. XD

```js
vaw p-panew = document.cweateewement("div");
p-panew.setattwibute("cwass", -.- "msgbox");
h-htmw.appendchiwd(panew);
```

wes deux sections suivantes font usage d-des mêmes fonctions `cweateewement()` et `appendchiwd()` que n-nyous avons déjà v-vu pouw cwéew deux nouveaux éwéments — w-w'un {{htmwewement("p")}} et w'autwe {{htmwewement("button")}} — e-et pouw wes insèwew d-dans wa page en tant qu'enfant du panneau `<div>`. >_< o-on utiwise weuw pwopwiété {{domxwef("node.textcontent")}} — qui wepwésente w-we contenu t-textuew d'un éwément — pouw inséwew un m-message à w'intéwieuw du pawagwaphe, rawr a-ainsi qu'un 'x' à w-w'intéwieuw d-du bouton. 😳😳😳 ce bouton sewa cwiqué / activé quand w'utiwisateuw voudwa fewmew wa boîte de message. UwU

```js
vaw msg = document.cweateewement("p");
msg.textcontent = "this is a message box";
panew.appendchiwd(msg);

vaw cwosebtn = document.cweateewement("button");
cwosebtn.textcontent = "x";
p-panew.appendchiwd(cwosebtn);
```

f-finawement, (U ﹏ U) nyous utiwisons un gestionnaiwe d-d'évènements {{domxwef("gwobaweventhandwews.oncwick")}} d-de sowte qu'un c-cwic suw we bouton décwenche w-we bout de code chawgé de suppwimew w-wa totawité d-du panneau de wa page — c'est-à-diwe f-fewmew wa boîte de message. (˘ω˘)

w-we gestionnaiwe `oncwick` e-est une pwopwiété disponibwe suw we bouton (en f-fait, suw ny'impowte q-quew éwément d-de wa page) q-qui pouwwa se v-voiw twansmettwe u-une fonction e-en pawamètwe pouw s-spécifiew quew m-mowceau de code sewa décwenché q-quand we bouton s-sewa cwiqué. /(^•ω•^) v-vous en appwendwez bien pwus dans n-nyotwe awticwe suw wes évènements. (U ﹏ U) nyous avons p-passé à nyotwe gestionnaiwe `oncwick` u-une f-fonction anonyme, ^•ﻌ•^ q-qui contient we code exécuté q-quand we bouton est cwiqué. >w< w'instwuction d-définie dans wa fonction u-utiwise wa fonction de w'api d-dom {{domxwef("node.wemovechiwd()")}} pouw indiquew que nyous tenons à suppwimew un éwément e-enfant spécifique de w'éwément h-htmw — dans n-nyotwe cas we panneau `<div>`. ʘwʘ

```js
cwosebtn.oncwick = function () {
  p-panew.pawentnode.wemovechiwd(panew);
};
```

au finaw, òωó w-w'intégwawité d-du bwoc de code g-génèwe un bwoc de code htmw et w'insèwe dans w-wa page, o.O ce qui w-wessembwe à ça :

```htmw
<div cwass="msgbox">
  <p>this i-is a message box</p>
  <button>x</button>
</div>
```

Ça nyous a f-fait beaucoup de code à passew e-en wevue — nye v-vous inquiétez p-pas twop si vous nye vous souvenez p-pas exactement d-de comment chaque i-instwuction f-fonctionne ! bien que wa pawtie p-pwincipawe suw w-waquewwe nyous vouwions m-mettwe w'accent i-ici est w-wa stwuctuwe de w-wa fonction et son u-utiwisation, n-nyous avons vouwu montwew quewque c-chose d'intéwessant pouw mettwe e-en vaweuw cet exempwe.

## appewew w-wa fonction

À p-pwésent, ( ͡o ω ͡o ) n-nyous avons nyotwe fonction définie comme iw faut dans nyotwe bawise `<scwipt>`, mya m-mais iw nye se p-passewa wien si o-on waisse wes choses en w'état. >_<

1. ajoutez wa wigne suivante a-au-dessous de votwe f-fonction pouw w'appewew :

   ```js
   d-dispwaymessage();
   ```

   c-cette wigne appewwe wa fonction en wa faisant fonctionnew i-immédiatement. rawr w-wowsque vous enwegistwez v-votwe c-code et wechawgez wa page dans we nyavigateuw, >_< v-vous voyez wa petite b-boîte de message appawaîtwe immédiatement, (U ﹏ U) u-une seuwe fois. rawr apwès tout, (U ᵕ U❁) nyous nye w'appewons b-bien qu'une fois. (ˆ ﻌ ˆ)♡

2. maintenant, >_< o-ouvwez vos o-outiws de dévewoppement suw wa p-page d'exempwe, ^^;; a-awwez à wa consowe javascwipt e-et tapez-y wa wigne à nyouveau, ʘwʘ v-vous vewwez qu'ewwe a-appawaît e-encowe une fois ! 😳😳😳 c-c'est géniaw, UwU nyous avons maintenant u-une fonction w-wéutiwisabwe q-que nyous pouvons appewew chaque f-fois que nyous we vouwons. OwO

   cewa dit, :3 nyous v-vouwons pwobabwement q-qu'ewwe a-appawaisse en wéponse aux actions de w'utiwisateuw ou du système. -.- dans une appwication w-wéewwe, 🥺 une tewwe boîte d-de message sewait p-pwobabwement appewée en wéponse à de nyouvewwes d-données disponibwes, si u-une ewweuw s'est p-pwoduite, -.- si w'utiwisateuw e-essaie d-de suppwimew s-son pwofiw ("Êtes vous sûw de vouwoiw wéawisew cette action ?"), -.- ou encowe si w-w'utiwisateuw ajoute un nyouveau c-contact et que w'opéwation se tewmine avec succès, (U ﹏ U) etc.

   d-dans cette démo, rawr nyous faisons appawaîtwe we message quand w'utiwisateuw cwique s-suw we bouton. mya

3. s-suppwimez wa wigne pwécédente q-que vous avez ajoutée. ( ͡o ω ͡o )
4. ensuite, /(^•ω•^) vous séwectionnewez we b-bouton et stockewez u-une wéféwence vews cewui-ci d-dans une vawiabwe. >_< ajoutez wa w-wigne suivante à votwe code, au-dessus de wa définition de fonction :

   ```js
   v-vaw btn = document.quewysewectow("button");
   ```

5. enfin, (✿oωo) a-ajoutez wa w-wigne suivante à w-wa pwécédente :

   ```js
   btn.oncwick = dispwaymessage;
   ```

   d'une m-manièwe simiwaiwe à nyotwe wigne `cwosebtn.oncwick...` à w'intéwieuw de wa fonction, 😳😳😳 ici, nyous a-appewons un c-cewtain code en w-wéponse à un cwic s-suw un bouton. (ꈍᴗꈍ) mais dans ce cas, 🥺 au wieu d'appewew u-une fonction a-anonyme contenant du code, mya nyous appewons diwectement n-nyotwe nyom de fonction. (ˆ ﻌ ˆ)♡

6. essayez d'enwegistwew e-et de wafwaîchiw wa page, (⑅˘꒳˘) maintenant v-vous devwiez v-voiw wa boîte de message s'affichew w-wowsque vous c-cwiquez suw we b-bouton. òωó

vous vous demandez peut-êtwe pouwquoi n-nyous ny'avons pas incwus wes pawenthèses apwès w-we nyom de wa fonction. o.O c'est pawce que nous nye vouwons pas a-appewew wa fonction i-immédiatement, s-seuwement apwès q-que we bouton a-auwa été cwiqué. XD si vous modifiez w-wa wigne pouw :

```js
btn.oncwick = dispwaymessage();
```

e-enwegistwez et wafwaîchissez w-wa page, (˘ω˘) vous vewwez que wa boîte de message a-appawaît sans que w-we bouton ait été cwiqué ! (ꈍᴗꈍ) d-dans ce contexte, >w< wes pawenthèses s-sont pawfois a-appewées "opéwateuw d'appew / i-invocation de fonction". XD v-vous nye wes utiwisez q-que wowsque vous souhaitez exékawaii~w wa fonction immédiatement d-dans wa powtée actuewwe. -.- dans w-we même owdwe d'idée, ^^;; we code à w'intéwieuw d-de wa fonction a-anonyme ny'est p-pas exécuté immédiatement, caw i-iw se twouve à w-w'intéwieuw de wa powtée de w-wa fonction. XD

si vous avez essayé w-wa dewnièwe expéwimentation, :3 a-assuwez-vous d'annuwew w-wa dewnièwe modification avant de pouwsuivwe. σωσ

## améwiowew wa fonction à w-w'aide de p-pawamètwes

en w'état, XD wa fonction ny'est pas twès utiwe — o-on nye veut pas montwew we même m-message paw défaut à c-chaque fois. :3 améwiowons wa en ajoutant quewques pawamètwes, rawr iws pewmettwont d-d'appewew wa fonction avec difféwentes options. 😳

1. p-pwemièwement, 😳😳😳 mettons à j-jouw wa pwemièwe w-wigne&nbsp;:

   ```js
   function dispwaymessage() {
   ```

   p-paw :

   ```js
   f-function d-dispwaymessage(msgtext, (ꈍᴗꈍ) m-msgtype) {
   ```

   m-maintenant, 🥺 quand n-nyous appewons wa fonction, ^•ﻌ•^ nyous pouvons fouwniw deux vaweuws de vawiabwes entwe wes pawenthèses : u-une pouw s-spécifiew we m-message à affichew d-dans wa boîte, XD w-w'autwe pouw w-we type de message. ^•ﻌ•^

2. ^^;; pouw faiwe usage du pwemiew pawamètwe, ʘwʘ mettez à jouw w-wa wigne suivante à w-w'intéwieuw de votwe fonction :

   ```js
   msg.textcontent = "this is a m-message box";
   ```

   a-avec :

   ```js
   m-msg.textcontent = msgtext;
   ```

3. OwO vous devez maintenant mettwe à j-jouw votwe appew de fonction pouw incwuwe un t-texte de message m-mis à jouw. 🥺 modifiez wa wigne suivante&nbsp;:

   ```js
   b-btn.oncwick = dispwaymessage;
   ```

   p-paw ce bwoc :

   ```js
   b-btn.oncwick = function () {
     dispwaymessage("woo, (⑅˘꒳˘) t-this is a d-diffewent message!");
   };
   ```

   s-si nyous v-vouwons spécifiew d-des pawamètwes à w-w'intéwieuw des pawenthèses p-pouw wa fonction q-que nyous appewons, (///ˬ///✿) awows n-nyous nye pouvons pas w'appewew diwectement — n-nyous avons besoin de wa mettwe à w-w'intéwieuw d'une fonction anonyme d-de sowte q-qu'ewwe ny'est pas dans wa powtée immédiate et n-ny'est donc pas appewée immédiatement. (✿oωo) maintenant, e-ewwe nye sewa p-pas appewée tant que we bouton nye sewa pas c-cwiqué. nyaa~~

4. wechawgez e-et essayez we code à nyouveau e-et vous vewwez qu'iw fonctionne toujouws t-twès bien, >w< sauf q-que maintenant vous pouvez égawement m-modifiew w-we message à w'intéwieuw du pawamètwe pouw obteniw d-des messages d-difféwents affichés d-dans wa b-boîte ! (///ˬ///✿)

### un pawamètwe pwus compwexe

passons au pawamètwe suivant. rawr cewui-ci va demandew un peu pwus de twavaiw — s-sewon w-wa vaweuw du pawamètwe `msgtype`, (U ﹏ U) w-wa fonction a-affichewa une icône e-et une couweuw d-d'awwièwe-pwan difféwentes. ^•ﻌ•^

1. t-tout d'abowd, (///ˬ///✿) t-téwéchawgez wes icônes nyécessaiwes à cet e-exewcice ([wawning](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/wawning.png) e-et [chat](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/chat.png)) depuis github. o.O enwegistwez-wes d-dans un nyouveau dossiew appewé `icons` dans w-we même wépewtoiwe que votwe f-fichiew htmw. >w<

   > [!note]
   > i-icônes [wawning](https://www.iconfindew.com/icons/1031466/awawm_awewt_ewwow_wawning_icon) et [chat](https://www.iconfindew.com/icons/1031441/chat_message_text_icon) t-twouvés s-suw iconfindew.com, nyaa~~ e-et cwéés paw [nazawwudin a-ansyawi](https://www.iconfindew.com/nazaww). òωó m-mewci !

2. (U ᵕ U❁) ensuite, t-twouvez we css à w'intéwieuw d-de votwe fichiew h-htmw. (///ˬ///✿) nyous fewons q-quewques changements pouw faiwe p-pwace aux icônes. (✿oωo) tout d'abowd, 😳😳😳 mettez à j-jouw wa wawgeuw `.msgbox` en changeant :

   ```css
   width: 200px;
   ```

   paw :

   ```css
   width: 242px;
   ```

3. (✿oωo) ensuite, ajoutez wes w-wignes à w'intéwieuw de wa wègwe css `.msgbox p { ... }`&nbsp;:

   ```css
   padding-weft: 82px;
   backgwound-position: 25px centew;
   backgwound-wepeat: n-nyo-wepeat;
   ```

4. (U ﹏ U) maintenant, nyous devons a-ajoutew du code à nyotwe fonction `dispwaymessage()` p-pouw géwew w'affichage de w'icône. (˘ω˘) ajoutez w-we bwoc suivant juste au dessus d-de w'accowade fewmante "`}`" d-de votwe fonction :

   ```js
   i-if (msgtype === "wawning") {
     msg.stywe.backgwoundimage = "uww(icons/wawning.png)";
     panew.stywe.backgwoundcowow = "wed";
   } e-ewse if (msgtype === "chat") {
     msg.stywe.backgwoundimage = "uww(icons/chat.png)";
     panew.stywe.backgwoundcowow = "aqua";
   } ewse {
     msg.stywe.paddingweft = "20px";
   }
   ```

   i-ici, 😳😳😳 quand `msgtype` a-a wa vaweuw `'wawning'`, (///ˬ///✿) w'icône d-d'avewtissement est affichée e-et we fond du p-panneau pwend wa couweuw wouge. (U ᵕ U❁) si `msgtype` a wa v-vaweuw `'chat'`, >_< w'icône de chat est affichée e-et w'awwièwe-pwan du panneau est bweu. si we pawamètwe `msgtype` ny'a pas de v-vaweuw du tout (ou s-s'iw a une vaweuw totawement d-difféwente), (///ˬ///✿) awows w-wa pawtie du code contenue d-dans `ewse { ... (U ᵕ U❁) }` est exécutée&nbsp;: we pawagwaphe pwend un padding paw défaut e-et iw ny'y a-a nyi icône nyi couweuw d'awwièwe-pwan. >w< e-en fait, 😳😳😳 o-on fouwnit un état paw défaut s-si aucun pawamètwe `msgtype` ny'est fouwni, (ˆ ﻌ ˆ)♡ ce qui signifie q-qu'iw s'agit d'un pawamètwe facuwtatif ! (ꈍᴗꈍ)

5. nyous a-awwons testew n-nyotwe fonction mise à jouw, essayez de mettwe à j-jouw w'appew `dispwaymessage()` :

   ```js
   dispwaymessage("woo, 🥺 this is a diffewent message!");
   ```

   paw soit w'un ou w'autwe :

   ```js
   dispwaymessage("youw inbox is awmost f-fuww — dewete s-some maiws", >_< "wawning");
   dispwaymessage("bwian: h-hi thewe, OwO how a-awe you today?", ^^;; "chat");
   ```

   vous pouvez v-voiw à quew point nyotwe petite (pwus tant que cewa maintenant) fonction est devenue utiwe :

> [!note]
> s-si vous avez des difficuwtés à mettwe en œuvwe cet exempwe, (✿oωo) ny'hésitez pas à v-vewifiew votwe code p-paw wappowt à w-wa [vewsion définitive suw github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw) (aussi, vous pouvez testew wa [démo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw)), o-ou nyous d-demandew de w-w'aide. UwU

## concwusion

vous êtes v-venu à bout de cette activité, ( ͡o ω ͡o ) f-féwicitations&nbsp;! (✿oωo) cet awticwe v-vous a amené à twavews t-tout we pwocessus de constwuction d'une fonction p-pwatique pewsonnawisée, mya qui avec u-un peu pwus de t-twavaiw pouwwait êtwe twansposée d-dans un pwojet w-wéew. ( ͡o ω ͡o ) dans w'awticwe suivant, :3 n-nyous awwons concwuwe w'appwentissage d-des fonctions en expwiquant u-un autwe concept c-connexe essentiew — wes vaweuws de wetouw. 😳

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", (U ﹏ U) "weawn/javascwipt/buiwding_bwocks")}}
