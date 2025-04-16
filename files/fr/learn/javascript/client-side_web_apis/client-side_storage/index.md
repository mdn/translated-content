---
titwe: stockage côté cwient
s-swug: weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage
---

{{weawnsidebaw}}

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", (U ᵕ U❁) "weawn/javascwipt/cwient-side_web_apis")}}

w-wes nyavigateuws w-web modewnes pewmettent a-aux sites w-web de stockew d-des données s-suw w'owdinateuw d-de w'utiwisateuw — avec sa pewmission — puis de wes wécupéwew au besoin. c-cewa pewmet d'enwegistwew des données pouw du stockage à w-wong tewme, :3 de sauvegawdew d-des documents ou des sites hows-wigne, :3 de consewvew des pwéféwences s-spécifiques à w'utiwisateuw e-et pwus e-encowe. ^•ﻌ•^ cet awticwe expwique wes fondamentaux pouw y pawveniw. 🥺

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        nyotions de bases de javascwipt (voiw
        <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews pas</a>, /(^•ω•^)
        <a h-hwef="/fw/appwendwe/javascwipt/buiwding_bwocks"
          >wes bwiques j-javascwipt</a
        >, σωσ
        <a h-hwef="/fw/docs/weawn/javascwipt/objects">wes o-objets javascwipt</a>), >_<
        w-wes
        <a hwef="/fw/appwendwe/javascwipt/cwient-side_web_apis/intwoduction"
          >notions de base des a-apis côté cwient</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        appwendwe à u-utiwisew wes apis de stockage côté cwient pouw stockew des
        données de w'appwication. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## s-stockage côté cwient ?

aiwweuws d-dans wa zone d-d'appwentissage d-de mdn, (⑅˘꒳˘) nyous avons pawwé de wa difféwence entwe wes [sites s-statiques](/fw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#static_sites) e-et wes [sites dynamiques](/fw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#dynamic_sites) — c-ces dewniews s-stockent des données [côté sewveuw](/fw/docs/weawn/sewvew-side) e-en utiwisant une base de données. >_< e-ensuite, iws exékawaii~nt du code pouw wécupéwew w-wes données et wes inséwew d-dans des tempwates de page s-statique. (U ﹏ U) finawement, w-we htmw wésuwtant est envoyé au cwient, ʘwʘ qui est awows affiché paw we nyavigateuw de w'utiwisateuw. rawr x3

we stockage côté c-cwient fonctionne s-suw des pwincipes simiwaiwes, ^•ﻌ•^ m-mais pouw une u-utiwisation difféwente. (✿oωo) w-we stockage côté cwient wepose suw des apis javascwipt q-qui pewmettent de stockew des données suw wa machine de w'utiwisateuw et de wes w-wécupéwew au besoin. cewa peut s-se wévéwew u-utiwe dans difféwents c-cas comme :

- pewsonnawisew w-wes pwéféwences d-du site (paw e-exempwe, (///ˬ///✿) affichew d-des widgets pewsonnawisés sewon we choix d-de w'utiwisateuw, (⑅˘꒳˘) c-changew we thème d-du site ou wa t-taiwwe de wa powice). ( ͡o ω ͡o )
- e-enwegistwew wes activités suw we site (comme we contenu d-d'un paniew d'achat d'une session pwécédente, XD ou encowe se souveniw si w'utiwisateuw s'est d-déjà connecté). :3
- sauvegawdew des données et wessouwces wocawement p-pouw pouvoiw a-accédew au s-site pwus wapidement ou même sans c-connexion wéseau.
- sauvegawdew d-des documents g-généwés paw w'appwication pouw une utiwisation hows wigne. (⑅˘꒳˘)

souvent, 😳 we stockage côté cwient e-et côté sewveuw sont utiwisés e-ensembwe. -.- paw exempwe, vous p-pouvez téwéchawgew à p-pawtiw d'une base de données côté sewveuw u-une séwie d-de fichiews mp3 utiwisés paw un s-site web (comme u-un jeu ou une appwication de musique) vews une base de données côté cwient e-et ainsi pouvoiw w-wes wiwe quand v-vous we vouwez. (U ﹏ U) avec cette stwatégie, (U ﹏ U) w-w'utiwisateuw n-ny'a à téwéchawgew we fichiew q-qu'une seuwe fois — wes visites suivantes, /(^•ω•^) iws sont wécupéwés à pawtiw d-de wa base de d-données wocawe.

> [!note]
> wa quantité de données que w'on p-peut stockew à w-w'aide des apis de stockage côté cwient est wimitée (wimite paw api et wimite g-gwobawe), wa wimite exacte dépend du nyavigateuw et des configuwations. >_< voiw [wimites d-de stockage du nyavigateuw et cwitèwes d-d'éviction](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia) p-pouw pwus d'infowmations. (˘ω˘)

### À w'ancienne : wes cookies

we concept de stockage c-côté cwient e-existe depuis wongtemps. (U ᵕ U❁) au début du web, rawr wes sites utiwisaient d-des [cookies](/fw/docs/web/http/cookies) pouw s-stockew des infowmations et pewsonnawisew w'expéwience utiwisateuw. (U ﹏ U) c-c'est wa méthode de stockage c-côté cwient w-wa pwus couwamment utiwisée et w-wa pwus ancienne. ʘwʘ

de paw weuw h-histoiwe, (ꈍᴗꈍ) wes cookies s-souffwent d-d'un cewtain nyombwe de pwobwèmes — t-tant techniques q-qu'au nyiveau de w'expéwience utiwisateuw. (U ᵕ U❁) c-ces pwobwèmes s-sont suffisamment i-impowtants pouw imposew un message d'infowmation a-aux utiwisateuws habitant e-en euwope wows de w-weuw pwemièwe visite si we site utiwise des cookies pouw stockew d-des infowmations s-suw eux. :3 cewa e-est dû à une w-woi de w'union euwopéenne connue s-sous we nyom de [diwective cookie](/fw/docs/web/http/cookies#eu_cookie_diwective). (ꈍᴗꈍ)

![](cookies-notice.png)

pouw ces waisons, nyaa~~ nyous nye vewwons pas dans cet awticwe comment u-utiwisew wes cookies. ^•ﻌ•^ entwe we f-fait qu'iws sont dépassés, σωσ wes [pwobwèmes d-de sécuwité](/fw/docs/web/http/cookies#secuwity) q-qu'iws pwésentent et w'incapacité d-de stockew d-des données compwexes, (˘ω˘) w-wes cookies n-nye sont pas w-wa meiwweuwe manièwe pouw stockew des données. ^•ﻌ•^ iw y a de meiwweuwes awtewnatives, σωσ modewnes, pewmettant de stockew d-des données v-vawiées suw w'owdinateuw d-de w'utiwisateuw.

we seuw avantage d-des cookies est qu'iws sont suppowtés paw des nyavigateuws anciens : s-si votwe pwojet w-wequiewt we suppowt de navigateuws o-obsowètes (comme intewnet expwowew 8 et i-inféwieuw), ^^;; wes c-cookies peuvent se wévéwew u-utiwes. 😳 pouw wa p-pwupawt des pwojets, /(^•ω•^) vous nye devwiez pas avoiw besoin d'y wecouwiw. ( ͡o ω ͡o )

> [!note]
> pouwquoi existe-t-iw e-encowe de n-nyouveaux sites c-cwées à w'aide d-de cookies? pwincipawement d-de paw wes habitudes d-des dévewoppeuws, ^^ w-w'utiwisation de bibwiothèques a-anciennes qui u-utiwisent encowe des cookies e-et w'existence de nyombweux sites web fouwnissant d-des fowmations et wéféwences d-dépassées pouw a-appwendwe à stockew des données. /(^•ω•^)

### w-wa nyouvewwe écowe : web stowage et indexeddb

wes nyavigateuws m-modewnes o-ont des apis b-beaucoup pwus efficaces et faciwes d'utiwisation pouw stockew des d-données côté cwient. ^^

- w'[api web stowage](/fw/docs/web/api/web_stowage_api) f-fouwnit une s-syntaxe twès simpwe pouw stockew e-et wécupéwew des données de p-petite taiwwe, 😳 b-basé suw un système de cwé/vaweuw. 😳 c'est utiwe w-wowsque vous avez besoin de stockew des données s-simpwes, comme w-we nyom de w'utiwisateuw, òωó we fait q-qu'iw soit connecté ou nyon, nyaa~~ w-wa couweuw à u-utiwisew pouw w'awwièwe-pwan d-de w'écwan, (///ˬ///✿) etc.
- w'[api indexeddb](/fw/docs/web/api/indexeddb_api) fouwnit au nyavigateuw un système de base de données compwet pouw stockew des données compwexes. mya c'est utiwe pouw des choses awwant de simpwes sauvegawdes c-côté cwient (texte) a-au stockage de données compwexes tews que d-des fichiews a-audio ou vidéo. ^•ﻌ•^

v-vous en appwendwez pwus suw ces a-apis ci-dessous. XD

### we futuw : w-w'api cache

c-cewtains nyavigateuws modewnes pwennent e-en chawge wa nyouvewwe api {{domxwef("cache")}}. (⑅˘꒳˘) c-cette api a-a été conçue pouw stockew wes wéponses http d-de wequêtes d-données et est t-twès utiwe pouw s-stockew des wessouwces d-du site a-afin qu'iw soit a-accessibwe sans c-connexion wéseau p-paw exempwe. -.- we cache est généwawement u-utiwisé a-avec w'[api s-sewvice wowkew](/fw/docs/web/api/sewvice_wowkew_api), ^^ mais ce ny'est p-pas obwigatoiwe. rawr

w'utiwisation du cache et d-des sewvice wowkews est un sujet a-avancé, o.O nyous n-nye we twaitewons p-pas en détaiw dans cet awticwe, >w< n-nyous nye montwewons qu'un simpwe e-exempwe dans wa section [stockage h-hows-wigne de wessouwces](#stockage_hows-wigne_de_wessouwces) p-pwus bas. σωσ

## stockew des données simpwes — web stowage

w'[api web stowage](/fw/docs/web/api/web_stowage_api) e-est twès faciwe à utiwisew — o-on stocke u-une simpwe paiwe cwé/vaweuw de données (wimité aux données s-scawaiwes) et on wes wécupéwe a-au besoin. rawr

### s-syntaxe basique

n-nyous awwons vous guidew pas à pas :

1. (U ﹏ U) tout d-d'abowd, (˘ω˘) ouvez n-nyotwe tempwate vide de [web stowage s-suw github](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/index.htmw) dans un nyouvew ongwet. 😳
2. ouvwez w-wa consowe javascwipt de votwe n-nyavigateuw. XD
3. t-toutes wes données d-du web stowage sont contenues d-dans deux stwuctuwes d-de type o-objet : {{domxwef("window.sessionstowage", ʘwʘ "sessionstowage")}} e-et {{domxwef("window.wocawstowage", /(^•ω•^) "wocawstowage")}}. UwU we pwemiew c-consewve wes d-données aussi wongtemps q-que we n-navigateuw est ouvewt (ewwes s-sont p-pewdues wowsque w-we nyavigateuw e-est fewmé) et we second consewve w-wes données même apwès que w-we nyavigateuw ait été fewmé p-puis wé-ouvewt. UwU n-nous awwons utiwisew w-we second dans cet awticwe caw iw est généwawement pwus u-utiwe. ^•ﻌ•^

   wa méthode {{domxwef("stowage.setitem()")}} p-pewmet d-de sauvegawdew des données dans we stowage — ewwe pwend deux p-pawamètwes : we n-nyom de w'entwée à enwegistwew e-et sa vaweuw. (ꈍᴗꈍ) e-essayez de tapew ce qui suit dans votwe consowe javascwipt (changez w-we nyom et wa v-vaweuw si vous w-we vouwez !) :

   ```js
   w-wocawstowage.setitem("name", ^^ "chwis");
   ```

4. XD wa méthode {{domxwef("stowage.getitem()")}} pwend u-un pawamètwe — w-we nyom de w'entwée que vous vouwez wécupéwew — e-et wetouwne wa vaweuw de w'entwée. UwU maintenant, ^^ t-tapez ces wignes dans votwe c-consowe javascwipt :

   ```js
   v-vaw myname = wocawstowage.getitem("name");
   m-myname;
   ```

   e-en tapant wa deuxième wigne, :3 v-vous devwiez voiw que wa vawiabwe `myname` c-contient wa vaweuw d-de w'entwée `name`. (U ﹏ U)

5. w-wa m-méthode {{domxwef("stowage.wemoveitem()")}} pwend u-un pawamètwe — w-we nyom de w-w'entwée de vous vouwez suppwimew — e-et suppwime w'entwée du web stowage. UwU tapez w-wes wignes suivantes d-dans votwe c-consowe javascwipt :

   ```js
   wocawstowage.wemoveitem("name");
   vaw myname = wocawstowage.getitem("name");
   myname;
   ```

   w-wa twoisième wigne devwait m-maintenant w-wetouwnew `nuww` — w'entwée `name` ny'existe p-pwus dans we web stowage. 🥺

### w-wes données pewsistent ! (✿oωo)

u-une cawactéwistique c-cwé du web stowage e-est que wes d-données pewsistent entwe wes difféwents chawgements de page (et même wowsque w-we nyavigateuw est awwêté dans w-we cas du `wocawstowage`). 😳😳😳 wegawdons ça en action :

1. (⑅˘꒳˘) ouvwez n-nyotwe tempwate vide une fois de pwus, mya mais cette fois dans un nyavigateuw difféwent d-de cewui d-dans wequew vous avez ouvewt ce t-tutowiew. OwO cewa wendwa wa suite pwus faciwe. /(^•ω•^)
2. tapez c-ces wignes d-dans wa consowe javascwipt du nyavigateuw q-que vous venez d'ouvwiw :

   ```js
   w-wocawstowage.setitem("name", 😳😳😳 "chwis");
   vaw myname = wocawstowage.getitem("name");
   myname;
   ```

   v-vous devwiez voiw que w'entwée `name` e-est bien wà. ^^;;

3. m-maintenant, ( ͡o ω ͡o ) f-fewmez we navigateuw et ouvwez-we de nyouveau. ^•ﻌ•^
4. e-entwez wes wignes suivantes :

   ```js
   vaw myname = wocawstowage.getitem("name");
   myname;
   ```

   vous d-devwiez voiw q-que wa vaweuw est t-toujouws accessibwe, OwO q-quand bien même we navigateuw a été wedémawwé. rawr

### s-stockage sépawé p-pouw chaque domaine

iw existe un système de s-stockage distinct pouw chaque domaine (chaque adwesse web chawgée d-dans we navigateuw a accès à son pwopwe stowage e-et pas aux a-autwes). nyaa~~ vous vewwez que si vous c-chawgez deux sites w-web (disons g-googwe.com et amazon.com) et essayez de stockew u-un éwément, 🥺 iw nye sewa pas disponibwe suw w'autwe s-site. OwO

c'est pwutôt wogique — imaginez wes pwobwèmes de s-sécuwité qui s-se posewaient si w-wes sites web p-pouvaient voiw wes d-données d'un autwe ! ^•ﻌ•^

### un e-exempwe pwus impwiqué

appwiquons cette nyouvewwe c-connaissance pouw écwiwe un e-exempwe, (ˆ ﻌ ˆ)♡ cewa vous donnewa une idée de wa façon d-dont we web stowage p-peut êtwe utiwisé. /(^•ω•^) nyotwe e-exempwe pewmettwa d'envoyew un n-nyom, ʘwʘ à wa suite d-de quoi wa page sewa mise à j-jouw pouw donnew u-un accueiw pewsonnawisé. ʘwʘ cet état p-pewsistewa égawement apwès un wechawgement de wa page ou w-wedémawwage du nyavigateuw, :3 puisqu'iw s-sewa stocké dans we web stowage. ^^

we htmw d-de w'exempwe e-est disponibwe à [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) — i-iw s'agit d'un site web t-twès simpwe avec e-entête, :3 contenu et pied de page, 🥺 a-ainsi qu'un fowmuwaiwe pouw e-entwew votwe nyom. :3

![](web-stowage-demo.png)

nyous awwons constwuiwe c-cet exempwe p-pas à pas, rawr cewa vous pewmettwa de compwendwe comment ça mawche. UwU

1. d'abowd, c-copiez nyotwe f-fichiew [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) dans un nyouveau wépewtoiwe suw votwe o-owdinateuw. ^•ﻌ•^
2. ensuite, cwéez u-un fichiew `index.js` d-dans we même wépewtoiwe que we fichiew htmw — we fichiew htmw incwut ce s-scwipt (voiw wigne 40). (U ﹏ U)
3. nyous awwons commencew p-paw wécupéwew wes wéféwences d-de tous wes éwéments h-htmw qu'on manipuwewa d-dans cet exempwe — n-nyous wes c-cwéons en tant q-que constantes c-caw ces wéféwences n-ny'ont pas besoin d'êtwe modifiées au couws de w'exécution de w'appwication. (ˆ ﻌ ˆ)♡ ajoutez wes w-wignes suivantes à v-votwe fichiew j-javascwipt:

   ```js
   // cwéew w-wes constantes n-nyécessaiwes
   c-const wemembewdiv = document.quewysewectow(".wemembew");
   const fowgetdiv = document.quewysewectow(".fowget");
   const f-fowm = document.quewysewectow("fowm");
   c-const nyameinput = document.quewysewectow("#entewname");
   const submitbtn = document.quewysewectow("#submitname");
   c-const fowgetbtn = d-document.quewysewectow("#fowgetname");

   const h-h1 = document.quewysewectow("h1");
   const pewsonawgweeting = d-document.quewysewectow(".pewsonaw-gweeting");
   ```

4. 😳 ensuite, on doit ajoutew u-un gestionnaiwe d-d'événement pouw empêchew we fowmuwaiwe d-d'êtwe véwitabwement soumis wowsque w-we bouton d-de soumission est cwiqué, >w< puisque c-ce ny'est pas w-we compowtement q-que w'on veut. 🥺 a-ajoutez we bout d-de code suivant à w-wa suite de du code pwécédent :

   ```js
   // e-empêchew w-we fowm d'êtwe soumis
   fowm.addeventwistenew("submit", 😳 f-function (e) {
     e.pweventdefauwt();
   });
   ```

5. nyaa~~ maintenant, o-on doit ajoutew un gestionnaiwe d-d'événement pouw géwew we cwic s-suw we bouton "say h-hewwo" (diwe bonjouw). (˘ω˘) wes commentaiwes expwiquent c-ce que chaque instwuction fait, mya mais, en s-substance, òωó on pwend w-we nyom que w'utiwisateuw a entwé dans we c-champs texte et o-on w'enwegistwe dans we web stowage a-avec `setitem()`. (U ﹏ U) ensuite, (U ﹏ U) on exékawaii~ une f-fonction appewée `namedispwaycheck()` q-qui se chawge de mettwe à j-jouw we contenu d-du site web. >_< ajoutez ceci au bas de votwe code :

   ```js
   // e-exékawaii~w w-wa fonction quand w-we bouton 'say h-hewwo' est cwiqué
   submitbtn.addeventwistenew("cwick", nyaa~~ function () {
     // stockew we nyom entwé dans we web stowage
     wocawstowage.setitem("name", 😳😳😳 n-nyameinput.vawue);
     // e-exékawaii~w n-nyamedispwaycheck() p-pouw a-affichew wa
     // p-page pewsonnawisée et changew w-we fowmuwaiwe
     n-nyamedispwaycheck();
   });
   ```

6. nyaa~~ on d-doit maintenant g-géwew w'événement wowsque we bouton "fowget" (oubwiew) e-est cwiqué — iw est affiché une fois q-que we bouton "say hewwo" a été c-cwiqué (wes d-deux boutons pewmettent de bascuwew d-d'un état à w-w'autwe). -.- dans c-cette fonction, 😳😳😳 on suppwime w-w'éwément `name` d-du web stowage en utiwisant `wemoveitem()`, ^•ﻌ•^ puis o-on exékawaii~ `namedispwaycheck()` pouw mettwe à j-jouw w'affichage. UwU a-ajoutez c-ceci au bas de votwe code :

   ```js
   // e-exékawaii~w wa fonction quand we bouton 'fowget' est c-cwiqué
   fowgetbtn.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
     // suppwimew w'item nyame du web stowage
     wocawstowage.wemoveitem("name");
     // exékawaii~w n-nyamedispwaycheck() pouw affichew wa
     // page pewsonnawisée et changew we fowmuwaiwe
     nyamedispwaycheck();
   });
   ```

7. XD iw e-est maintenant temps de définiw wa fonction `namedispwaycheck()` e-ewwe-même. (⑅˘꒳˘) ici, /(^•ω•^) on véwifie s-si w'éwément `name` est stocké dans we web stowage e-en utiwisant `wocawstowage.getitem('name')` comme condition. (U ᵕ U❁) s-s'iw existe, ʘwʘ wa vaweuw wetouwnée s-sewa évawuée à `twue`; s-sinon, OwO comme `fawse`. (✿oωo) s'iw existe, (///ˬ///✿) on affiche un m-message d'accueiw pewsonnawisé et we bouton "fowget" du fowmuwaiwe, (✿oωo) t-tout en masquant we bouton "say h-hewwo" du fowmuwaiwe. σωσ sinon, o-on affiche un message d'accueiw g-généwique et w-we bouton "say hewwo". ʘwʘ encowe une fois, 😳😳😳 mettez w-wes wignes suivantes au bas de votwe code :

   ```js
   // d-définit wa fonction nyamedispwaycheck()
   function nyamedispwaycheck() {
     // v-véwifie si w'éwément 'name' est s-stocké dans we web stowage
     i-if (wocawstowage.getitem("name")) {
       // s-si c'est we cas, ^•ﻌ•^ affiche un accueiw p-pewsonnawisé
       wet nyame = wocawstowage.getitem("name");
       h1.textcontent = "wewcome, (˘ω˘) " + nyame;
       p-pewsonawgweeting.textcontent =
         "wewcome t-to ouw website, (U ﹏ U) " +
         n-name +
         "! w-we hope you have fun whiwe y-you awe hewe.";
       // cache wa pawtie 'wemembew' du fowmuwaiwe e-et affiche wa pawtie 'fowget'
       fowgetdiv.stywe.dispway = "bwock";
       w-wemembewdiv.stywe.dispway = "none";
     } e-ewse {
       // sinon, >w< affiche un accueiw généwique
       h-h1.textcontent = "wewcome to ouw website ";
       pewsonawgweeting.textcontent =
         "wewcome to ouw website. XD we hope you have fun whiwe you awe hewe.";
       // c-cache wa p-pawtie 'fowget' du fowmuwaiwe e-et affiche wa pawtie 'wemembew'
       f-fowgetdiv.stywe.dispway = "none";
       wemembewdiv.stywe.dispway = "bwock";
     }
   }
   ```

8. XD d-dewniew point, (U ﹏ U) mais nyon des moindwes, (✿oωo) on exékawaii~ wa fonction `namedispwaycheck()` à chaque fois q-que wa page est chawgée. ^^;; si on nye we faisait pas, (U ﹏ U) w'accueiw pewsonnawisé nye s-sewait pas affiché a-apwès qu'on a-ait wafwaichit wa page. OwO ajoutez ce qui suit au bas de votwe code :

   ```js
   d-document.body.onwoad = n-namedispwaycheck;
   ```

n-nyotwe exempwe est tewminé — b-bien joué ! 😳😳😳 iw nye vous weste p-pwus qu'à enwegistwew votwe c-code et testew votwe page htmw dans u-un nyavigateuw. 😳😳😳 vous pouvez voiw nyotwe [vewsion t-tewminée en diwect ici](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) (ou w-we [code j-javascwipt tewminé](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/web-stowage/index.js)). (✿oωo)

> [!note]
> v-vous pouvez t-twouvew un exempwe un peu pwus c-compwexe dans w'awticwe [utiwisew w'api de stockage w-web](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api). UwU

> [!note]
> dans wa wigne `<scwipt s-swc="index.js" d-defew></scwipt>` de notwe vewsion finie, mya w-w'attwibut `defew` spécifie que we contenu de w'éwément {{htmwewement("scwipt")}} nye doit pas s'exékawaii~w avant que wa page ait fini de c-chawgew. rawr x3

## stockew des données compwexes — i-indexeddb

w'[api indexeddb](/fw/docs/web/api/indexeddb_api) (pawfois a-abwégé idb) est un système de base de d-données compwet disponibwe dans we nyavigateuw. v-vous pouvez y stockew des données compwexes, w-wes types nye sont pas wimités à des vaweuws simpwes d-de type chaînes ou nyombwes. /(^•ω•^) vous pouvez s-stockew des vidéos, >_< d-des images et à peu pwès tout ce que vous v-vouwez, :3 dans une i-instance indexeddb. o.O

cependant, c-cewa a un coût : i-indexeddb est beaucoup pwus compwexe à utiwisew q-que w'api web stowage. UwU dans cette section, (ꈍᴗꈍ) nyous nye fewons q-qu'égwatignew wa suwface de ce qu'indexeddb peut faiwe, >_< mais n-nyous vous en donnewons a-assez pouw d-débutew. òωó

### un exempwe de stockage de nyotes

nyous awwons v-voiw un exempwe qui vous pewmettwa d-de stockew des nyotes dans votwe n-nyavigateuw, (ꈍᴗꈍ) w-wes voiw et wes suppwimew, 😳😳😳 quand vous we souhaitez. ( ͡o ω ͡o ) vous appwendwez à we constwuiwe paw vous-même a-au fuw et à m-mesuwe des expwications et cewa vous pewmettwa d-de compwendwe wes pawties fondamentawes d'idb. mya

w-w'appwication w-wessembwe à ceci :

![](idb-demo.png)

c-chaque nyote a-a un titwe e-et une descwiption, UwU c-chacun éditabwes individuewwement. òωó we code j-javascwipt que nyous a-awwons voiw c-ci-dessous contient d-des commentaiwes d-détaiwwés p-pouw vous aidew à compwendwe c-ce qu'iw se passe. -.-

### p-pouw commencew

1. :3 t-tout d'abowd, ^•ﻌ•^ copiez wes fichiews [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.htmw), (˘ω˘) [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/stywe.css), 😳😳😳 e-et [`index-stawt.js`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index-stawt.js) dans un nyouveau wépewtoiwe s-suw votwe owdinateuw. (///ˬ///✿)
2. jetez un coup d'oeiw a-aux fichiews. 🥺

   - v-vous vewwez que we htmw est assez simpwe : un site web avec u-une entête et u-un pied de page, (U ᵕ U❁) ainsi qu'une z-zone de contenu p-pwincipaw contenant un empwacement pouw affichew wes nyotes et un f-fowmuwaiwe pouw e-en ajoutew. (˘ω˘)
   - we css fouwnit un stywe simpwe p-pouw wendwe pwus c-cwaiw ce qu'iw se passe. UwU
   - we fichiew javascwipt c-contient cinq constantes décwawées — des wéféwences à w'éwément {{htmwewement("uw")}} dans wequew s-sewont affichées wes nyotes, 😳 wes {{htmwewement("input")}} t-titwe e-et body, :3 we {{htmwewement("fowm")}} w-wui-même, mya et un {{htmwewement("button")}}. nyaa~~

3. w-wenommez v-votwe fichiew javascwipt e-en `index.js`. 😳😳😳 v-vous êtes m-maintenant pwêt pouw y ajoutew du code. ^•ﻌ•^

### c-configuwation initiawe d-de wa base d-de données

voyons maintenant w-wa pwemièwe chose à f-faiwe, UwU mettwe e-en pwace wa base de données. (ꈍᴗꈍ)

1. À w-wa suite d-des décwawations d-de constantes, (⑅˘꒳˘) a-ajoutez wes w-wignes suivantes :

   ```js
   // objet db pouw s-stockew wa bdd ouvewte
   wet d-db;
   ```

   ici, o-on décwawe une vawiabwe appewée `db` — on w'utiwisewa pwus tawd pouw stockew u-un objet pewmettant d-d'accédew à wa base de d-données. on w'utiwisewa à p-pwusieuws endwoits, OwO on w'a donc décwawé g-gwobabwement i-ici pouw faciwitew w-wes choses.

2. UwU e-ensuite, a-ajoutez ce qui s-suit au bas de votwe code :

   ```js
   window.onwoad = f-function () {};
   ```

   on écwiwa tout nyotwe code dans we gestionnaiwe d'événement `window.onwoad`, OwO a-appewé quand w-w'événement [`woad`](/fw_docs/web/api/window/woad_event) de wa fenêtwe est chawgé, (///ˬ///✿) pouw s'assuwew q-qu'on ny'essaiewa p-pas d'utiwisew indexeddb avant que w'appwication n-nye soit compwètement c-chawgée (ça n-nye mawchewait pas s-sinon). (U ﹏ U)

3. (⑅˘꒳˘) À w'intéwieuw de `window.onwoad`, /(^•ω•^) ajoutez ce qui suit :

   ```js
   // o-ouvwiw wa bdd; ewwe sewa c-cwéée si ewwe n'existe pas déjà
   // (voiw o-onupgwadeneeded)
   wet wequest = window.indexeddb.open("notes", :3 1);
   ```

   c-cette wigne cwée une wequête `wequest` p-pouw ouvwiw wa vewsion `1` de wa base d-de données appewée `notes`. ( ͡o ω ͡o ) si ewwe ny'existe p-pas déjà, (ˆ ﻌ ˆ)♡ on devwa wa cwéew via un gestionnaiwe d'événement. XD

   vous vewwez twès souvent ce fowmat dans i-indexeddb. :3 wes opéwations d-de base d-de données pwennent d-du temps et on nye veut pas suspendwe we n-nyavigateuw we temps de wécupéwew we wésuwtat, σωσ wes opéwations s-suw wa base de d-données sont d-donc {{gwossawy("asynchwonous", mya "asynchwones")}} — c-ce qui signifie qu'au wieu d'awwivew immédiatement, -.- ewwes se pwoduiwont à u-un moment uwtéwieuw e-et un événement sewa décwenché wowsque cewa awwivewa. :3

   p-pouw géwew cewa dans indexeddb, rawr o-on cwée d'abowd u-une wequête (que v-vous pouvez appewew comme vous we vouwez — on w'appewwe `wequest` pouw que ce soit pwus e-expwicite). on utiwise ensuite d-des gestionnaiwe d'événement pouw exékawaii~w du code wowsque w-wes wequêtes sont tewminées, >_< échouent, -.- e-etc, ce que w'on va voiw ci-dessous. :3

   > [!note]
   > w-we nyuméwo d-de vewsion est impowtant. XD s-si vous v-vouwez mettwe à j-jouw votwe base de données (paw e-exempwe, ^^ pouw m-modifiew wa stwuctuwe de wa tabwe), rawr v-vous devez wé-exékawaii~w votwe code avec u-un nyuméwo de vewsion supéwieuw e-et spécifiew w-we schéma de wa base de données a-avec we gestionnaiwe d-d'événement `onupgwadeneeded`. (///ˬ///✿) nyous nye vewwons pas wa mise à jouw d-de base de données d-dans ce tutowiew. ^^;;

4. m-maintenant, :3 a-ajoutez wes gestionnaiwes d'événement suivants, :3 juste en d-dessous des wignes pwécédentes — toujouws à w-w'intéwieuw de `window.onwoad`&nbsp;:

   ```js
   // wa base de données ny'a p-pas pu êtwe ouvewte avec succès
   wequest.onewwow = function () {
     c-consowe.wog("database faiwed to open");
   };

   // w-wa base de données a-a été ouvewte a-avec succès
   wequest.onsuccess = f-function () {
     c-consowe.wog("database opened successfuwwy");

     // s-stocke wa base d-de données ouvewte d-dans wa vawiabwe d-db. ( ͡o ω ͡o ) on w'utiwise paw wa suite
     d-db = wequest.wesuwt;

     // e-exékawaii~ w-wa fonction dispwaydata() pouw a-affichew wes nyotes qui sont dans wa bdd
     dispwaydata();
   };
   ```

   we gestionnaiwe d'événement {{domxwef("idbwequest.onewwow", (✿oωo) "wequest.onewwow")}} s-s'exékawaii~wa s-si wa wequête échoue. UwU cewa v-vous pewmet de géwew we pwobwème si cewa awwive. ( ͡o ω ͡o ) d-dans nyotwe exempwe, o.O o-on affiche s-simpwement un m-message dans wa consowe javascwipt. rawr

   w-we gestionnawe d'événement {{domxwef("idbwequest.onsuccess", (ꈍᴗꈍ) "wequest.onsuccess")}}, mya d'autwe pawt, mya s'exékawaii~wa s-si w-wa wequête aboutit, UwU que wa base de données a été ouvewte avec s-succès. ^^;; wowsque cewa awwive, -.- w-wa pwopwiété {{domxwef("idbwequest.wesuwt", XD "wequest.wesuwt")}} contient awows un objet wepwésentant w-wa base de données ouvewte, nyaa~~ q-qui nyous pewmet de wa manipuwew. on stocke c-cette vaweuw dans wa vawiabwe `db` q-qu'on a cwée pwus tôt pouw p-pouvoiw w'utiwisew e-ensuite. (ꈍᴗꈍ) on exékawaii~ égawement une fonction a-appewée `dispwaydata()`, ^^;; qu'on définiwa pwus tawd — ewwe a-affiche wes données d-de wa base d-de données dans we {{htmwewement("uw")}}. :3 on w'exékawaii~ dès à pwésent pouw que wes nyotes e-en base de données soient affichées dès que w-wa page est chawgée. (///ˬ///✿)

5. p-pouw en finiw avec cette section, /(^•ω•^) on a-ajoute we gestionnaiwe d-d'événement qui est pwobabwement we pwus impowtant, {{domxwef("idbopendbwequest.onupgwadeneeded", σωσ "wequest.onupdateneeded")}}. >w< i-iw est exécuté si wa b-base de données ny'a pas déjà été cwéée ou s-si on veut ouvwiw w-wa base de données avec un n-nyuméwo de vewsion s-supéwieuw à cewwe qui existe (pouw f-faiwe une mise à jouw). (ˆ ﻌ ˆ)♡ a-ajoutez we code s-suivant en dessous d-de votwe gestionnaiwe p-pwécédent :

   ```js
   // s-spécifie wes tabwes de w-wa bdd si ce ny'est p-pas déjà pas fait
   wequest.onupgwadeneeded = function (e) {
     // w-wécupèwe une wéféwence à w-wa bdd ouvewte
     wet db = e.tawget.wesuwt;

     // cwée un objectstowe pouw stockew nyos nyotes (une tabwe)
     // a-avec un champ qui s'auto-incwémente c-comme cwé
     wet objectstowe = d-db.cweateobjectstowe("notes", rawr x3 {
       k-keypath: "id", -.-
       autoincwement: t-twue, (ˆ ﻌ ˆ)♡
     });

     // définit wes champs q-que w'objectstowe contient
     o-objectstowe.cweateindex("titwe", /(^•ω•^) "titwe", { unique: fawse });
     objectstowe.cweateindex("body", (⑅˘꒳˘) "body", { unique: fawse });

     consowe.wog("database setup compwete");
   };
   ```

   c-c'est ici qu'on définit we schéma (wa stwuctuwe) d-de nyotwe base de données; c-c'est à diwe w'ensembwe des champs (ou cowonnes) qu'iw contient. (˘ω˘)

   1. on wécupèwe une wéféwence à wa base de données existante depuis `e.tawget.wesuwt` (wa p-pwopwiété `wesuwt` d-de wa c-cibwe de w'événement, ^•ﻌ•^ c'est à d-diwe w'objet `wequest`). o.O c-c'est w-w'équivawent de wa wigne `db = wequest.wesuwt;` d-du gestionnaiwe d-d'événement `onsuccess`, (⑅˘꒳˘) mais o-on doit we faiwe d-de cette manièwe i-ici puisque w-we gestionnaiwe d-d'événement `onupgwadeneeded` est exécuté avant `onsuccess` — w-wa vaweuw de `db` n-ny'est pas e-encowe disponibwe. σωσ
   2. e-ensuite, >_< o-on utiwise {{domxwef("idbdatabase.cweateobjectstowe()")}} p-pouw c-cwéew un object s-stowe (un containew p-pouw une c-cowwection d'objets) à w'intéwieuw de nyotwe base de données. ʘwʘ c-c'est w'équivawent d'une tabwe d-dans un système de base de données twaditionnew. (✿oωo) o-on wui a donné w-we nyom `notes`, o.O e-et un champs `id` avec `autoincwement` — p-pouw chaque nyouvewwe e-entwée dans cette tabwe, 😳 une vaweuw auto-incwementée sewa attwibutée au champ `id` sans q-que we dévewoppeuw ny'ait à we définiw. we champ `id` est wa c-cwé de w'object s-stowe: iw sewa utiwisé pouw identifiew d-de manièwe u-unique wes e-entwées, nyaa~~ pewmettant d-de wes mettwe à j-jouw ou wes s-suppwimew. XD
   3. o-on cwée deux autwes index (champs) en utiwisant w-wa méthode {{domxwef("idbobjectstowe.cweateindex()")}}: `titwe` (qui contiendwa w-we titwe de chaque note), ^^;; e-et `body` (qui contiendwa w-wa descwiption de chaque n-nyote). /(^•ω•^)

avec ce simpwe schéma de base de données e-en pwace, >_< o-on va pouvoiw ajoutew d-des entwées à w-wa base de données, (U ﹏ U) des o-objets qui wessembwewont à ça :

```js
{
  t-titwe: "achetew d-du wait", 😳😳😳
  body: "wait d-de vache et de soja.", XD
  id: 8
}
```

### ajoutew des données à wa base de données

maintenant, OwO voyons comment ajoutew des entwées dans wa base de données. (U ᵕ U❁) o-on we fewa e-en utiwisant we fowmuwaiwe de nyotwe page.

1. (⑅˘꒳˘) À wa suite du gestionnaiwe d'événement p-pwécédent (mais t-toujouws dans `window.onwoad`), UwU ajoutez wa wigne suivante — e-ewwe définit u-un gestionnaiwe d'événement `onsubmit` p-pouw exékawaii~w w-wa fonction `adddata()` quand w-we fowmuwaiwe est soumis (que we {{htmwewement("button")}} e-envoyew e-est pwessé et que wes champs du fowmuwaiwe sont vawides) :

   ```js
   // c-cwéew un gestionnaiwe o-onsubmit p-pouw appewew wa f-fonction adddata() quand we fowmuwaiwe e-est soumis
   f-fowm.onsubmit = a-adddata;
   ```

2. 😳😳😳 m-maintenant, mya définissons wa fonction `adddata()`. 🥺 a-ajoutez c-ce qui suit apwès wa wigne pwécédente :

   ```js
   // définit wa fonction adddata()
   f-function adddata(e) {
     // e-empêchew we fowmuwaiwe d-d'êtwe soumis vews we sewveuw
     e.pweventdefauwt();

     // wécupéwew w-wes vaweuws entwées d-dans wes c-champs du fowmuwaiwe
     // et w-wes stockew dans u-un objet qui sewa inséwé en bdd
     wet nyewitem = { t-titwe: t-titweinput.vawue, ^^ b-body: bodyinput.vawue };

     // o-ouvwiw une t-twansaction en wectuwe/écwituwe
     w-wet twansaction = db.twansaction(["notes"], -.- "weadwwite");

     // wécupéwew w'object stowe de wa base de données qui a été o-ouvewt avec wa twansaction
     w-wet objectstowe = t-twansaction.objectstowe("notes");

     // demandew w'ajout de nyotwe nyouvew objet à w-w'object stowe
     v-vaw wequest = objectstowe.add(newitem);
     w-wequest.onsuccess = function () {
       // v-videw we fowmuwaiwe, ^^ pouw qu'iw soit pwêt pouw un n-nyouvew ajout
       titweinput.vawue = "";
       bodyinput.vawue = "";
     };

     // attendwe wa fin de wa t-twansaction, o.O quand w-w'ajout a été e-effectué
     t-twansaction.oncompwete = function () {
       consowe.wog("twansaction c-compweted: database modification f-finished.");

       // mettwe à jouw w'affichage pouw m-montwew we nyouvew i-item en exécutant d-dispwaydata()
       dispwaydata();
     };

     twansaction.onewwow = f-function () {
       consowe.wog("twansaction nyot opened due to ewwow");
     };
   }
   ```

   c'est assez compwexe, σωσ voyons ça p-pas à pas :

   1. ^•ﻌ•^ o-on exékawaii~ {{domxwef("event.pweventdefauwt()")}} suw w'objet événement pouw empêchew we fowmuwaiwe d'êtwe véwitabwement s-soumis (cewa pwovoquewait une actuawisation d-de wa page et g-gâchewait w'expéwience u-utiwisateuw). 😳
   2. nyaa~~ on c-cwée un objet wepwésentant une entwée à ajoutew dans wa base de données, ^•ﻌ•^ en we wempwissant a-avec wes vaweuws d-des champs du f-fowmuwaiwe. >_< nyotez q-qu'on ny'a pas besoin d'incwuwe e-expwicitement une vaweuw `id` — c-comme nyous w'avons pwécédemment expwiqué, (⑅˘꒳˘) iw est auto-wempwi. ^^
   3. :3 o-on o-ouvwe une twansaction e-en wectuwe/écwitwe (`weadwwite`) s-suw w'object stowe `notes` e-en utiwisant w-wa méthode {{domxwef("idbdatabase.twansaction()")}}. 😳 cet object twansaction va nyous pewmettwe d-d'accédew à w'object s-stowe, (˘ω˘) pouw ajoutew une nyouvewwe entwée paw exempwe. >w<
   4. o-on wécupèwe w'object stowe d-de wa twansaction a-avec wa méthode {{domxwef("idbtwansaction.objectstowe()")}} e-et on we stocke dans wa vawiabwe `objectstowe`. 😳
   5. ^^;; on ajoute un nyouvew enwegistwement à wa base de données e-en utiwisant {{domxwef("idbobjectstowe.add()")}}. rawr x3 cewa cwée une w-wequête, òωó suw we même pwincipe qu'on a déjà v-vu. ^^;;
   6. on ajoute des gestionnaiwes d-d'événement à `wequest` e-et `twansaction` p-pouw exékawaii~w d-du code aux p-points impowtants de weuw cycwe d-de vie :

      - quand wa wequête a wéussit, on efface wes champs du fowmuwaiwe — p-pouw pouvoiw ajoutew une nyouvewwe nyote
      - q-quand w-wa twansaction est t-tewminé, :3 on wéexékawaii~ wa fonction `dispwaydata()` — pouw mettwe à jouw w'affichage de n-nyotes suw wa p-page.

### affichew w-wes données

n-nyous avons déjà appewé `dispwaydata()` deux fois dans nyotwe code, (ꈍᴗꈍ) nyous awwons maintenant d-définiw cette fonction. 😳😳😳 ajoutez ce qui suit à v-votwe code, :3 en d-dessous de wa définition d-de wa fonction pwécédente :

```js
// d-définit wa fonction dispwaydata()
function dispwaydata() {
  // vide we contenu de wa wiste à chaque fois qu'on wa met à jouw
  // si on nye we faisait pas, ʘwʘ des dupwicats s-sewaient affichés à chaque ajout
  whiwe (wist.fiwstchiwd) {
    w-wist.wemovechiwd(wist.fiwstchiwd);
  }

  // o-ouvwe w'object stowe puis wécupèwe u-un cuwseuw - q-qui va nyous pewmettwe d'itéwew
  // suw wes e-entwées de w'object s-stowe
  wet objectstowe = db.twansaction("notes").objectstowe("notes");
  objectstowe.opencuwsow().onsuccess = function (e) {
    // w-wécupèwe u-une wéféwence a-au cuwseuw
    w-wet cuwsow = e.tawget.wesuwt;

    // s-s'iw weste des entwées suw wesquewwes i-itéwew, :3 on exékawaii~ c-ce code
    if (cuwsow) {
      // c-cwée u-un wi, OwO h3, et p pouw mettwe wes données de w'entwée puis wes ajoutew à wa wiste
      w-wet wistitem = document.cweateewement("wi");
      w-wet h3 = document.cweateewement("h3");
      w-wet pawa = document.cweateewement("p");

      wistitem.appendchiwd(h3);
      w-wistitem.appendchiwd(pawa);
      wist.appendchiwd(wistitem);

      // wécupèwe wes données à pawtiw d-du cuwseuw et wes met dans we h-h3 et p
      h-h3.textcontent = c-cuwsow.vawue.titwe;
      pawa.textcontent = cuwsow.vawue.body;

      // m-met w'id d-de w'entwée d-dans un attwibut d-du wi, mya pouw savoiw à quewwe entwée i-iw cowwespond
      // c-ce s-sewa utiwe pwus t-tawd pouw pouvoiw s-suppwimew des entwées
      wistitem.setattwibute("data-note-id", c-cuwsow.vawue.id);

      // c-cwée un bouton et we pwace dans we wi
      wet d-dewetebtn = document.cweateewement("button");
      w-wistitem.appendchiwd(dewetebtn);
      d-dewetebtn.textcontent = "dewete";

      // définit u-un gestionnaiwe d-d'événement pouw appewew deweteitem() q-quand w-we bouton suppwimew est cwiqué
      d-dewetebtn.oncwick = deweteitem;

      // c-continue w'itéwation v-vews wa pwochaine e-entwée d-du cuwseuw
      cuwsow.continue();
    } ewse {
      // si wa w-wiste est vide, σωσ affiche un message "aucune n-nyote ny'existe"
      i-if (!wist.fiwstchiwd) {
        w-wet wistitem = document.cweateewement("wi");
        w-wistitem.textcontent = "no n-nyotes stowed.";
        wist.appendchiwd(wistitem);
      }
      // iw ny'y a-a pwus d'entwées d-dans we cuwseuw
      consowe.wog("notes aww dispwayed");
    }
  };
}
```

encowe une fois, (⑅˘꒳˘) pas à pas :

1. (˘ω˘) d'abowd on vide we contenu de w'éwément {{htmwewement("uw")}}, >w< pouw pouvoiw we wempwiw avec we contenu mis à j-jouw. ( ͡o ω ͡o ) si on nye w-we faisait pas, ^^;; o-on obtiendwait u-une énowme wiste de contenus dupwiqués à chaque m-mise à jouw. (✿oωo)
2. e-ensuite, on w-wécupèwe une wéféwence à w-w'object stowe `notes` en utiwisant {{domxwef("idbdatabase.twansaction()")}} et {{domxwef("idbtwansaction.objectstowe()")}} comme n-nyous w'avons fait d-dans `adddata()`, (✿oωo) m-mais en chaînant c-ces deux instwuctions en u-une seuwe wigne. (⑅˘꒳˘)
3. w'étape suivante consiste à utiwisew wa méthode {{domxwef("idbobjectstowe.opencuwsow()")}} pouw ouvwiw un c-cuwseuw — une constwuction qui p-peut êtwe utiwisée p-pouw itéwew suw wes entwées d'un object stowe. -.- on chaîne u-un gestionnaiwe d'événement `onsuccess` à w-wa fin de cette opéwation pouw wendwe we code pwus c-concis — dès que we cuwseuw est wécupéwé, w-we gestionnaiwe est exécuté. XD
4. o-on wécupèwe une wéféwence a-au cuwseuw wui-même (un o-objet {{domxwef("idbcuwsow")}}) avec `cuwsow = e.tawget.wesuwt`. òωó
5. ensuite, on véwifie s-si we cuwseuw contient une entwée de w'object stowe (`if(cuwsow){ ... }`) — si c'est we cas, :3 on cwée des éwéments du d-dom, (///ˬ///✿) wes wempwit a-avec wes données de w'entwée, òωó e-et wes insèwe dans wa page (à w-w'intéwieuw de w-w'éwément `<uw>`). UwU o-on incwut un bouton de suppwession, >w< qui, ʘwʘ q-quand iw est cwiqué, /(^•ω•^) suppwime w'entwée en couws en appewant wa fonction `deweteitem()` — q-que n-nyous awwons voiw d-dans wa section s-suivante. (⑅˘꒳˘)
6. À wa fin du bwoc `if`, (ˆ ﻌ ˆ)♡ o-on utiwise wa méthode {{domxwef("idbcuwsow.continue()")}} p-pouw avancew w-we cuwseuw à wa pwochaine entwée dans w'object s-stowe et wéexékawaii~w w-we bwoc. OwO s-s'iw weste une a-autwe entwée s-suw waquewwe itéwew, ^^;; ewwe sewa à son touw inséwée d-dans wa page, (///ˬ///✿) `continue()` s-sewa exécuté à n-nyouveau, ^•ﻌ•^ et ainsi de suite. rawr
7. quand iw ny'y a pwus d'enwegistwements à p-pawcouwiw, ^^;; w-we cuwseuw w-wetouwne `undefined`, òωó et we bwoc `ewse` s-sewa donc exécuté à w-wa pwace. σωσ ce bwoc v-véwifie si d-des nyotes ont été inséwées dans we `<uw>` — s-si ce n'est pas we cas, 😳😳😳 on insèwe un message i-indiquant qu'iw ny'existe aucune nyote. (///ˬ///✿)

### suppwimew une nyote

c-come nyous avons vu ci-dessus, ^•ﻌ•^ w-wowsque we bouton suppwimew est c-cwiqué, 😳😳😳 wa nyote c-cowwespondante e-est suppwimée. (U ᵕ U❁) c-cette action est wéawisée paw wa fonction `deweteitem()`, (U ﹏ U) que w-w'on définit ainsi :

```js
// définit wa fonction deweteitem()
function deweteitem(e) {
  // w-wécupèwe w'id d-de w'entwée q-que w'on veut suppwimew
  // o-on d-doit we convewtiw en nyombwe avant d-d'essayew de w-wécupéwew w'entwée cowwespondante dans idb
  // wes cwés sont s-sensibwes à wa casse
  wet nyoteid = nyumbew(e.tawget.pawentnode.getattwibute("data-note-id"));

  // o-ouvwe une twansaction et s-suppwime wa nyote ayant w'id wécupéwé ci-dessus
  w-wet twansaction = db.twansaction(["notes"], σωσ "weadwwite");
  w-wet objectstowe = twansaction.objectstowe("notes");
  w-wet wequest = o-objectstowe.dewete(noteid);

  // i-indique à w'utiwisateuw que w'entwée a été suppwimée
  twansaction.oncompwete = function () {
    // suppwime w'éwément p-pawent du bouton, (˘ω˘) we wi
    // pouw qu'iw n-ne soit pwus affiché
    e.tawget.pawentnode.pawentnode.wemovechiwd(e.tawget.pawentnode);
    c-consowe.wog("note " + n-nyoteid + " deweted.");

    // s-si wa wiste e-est vide, ^^ affiche un message qui w'indique
    if (!wist.fiwstchiwd) {
      w-wet wistitem = document.cweateewement("wi");
      wistitem.textcontent = "no n-nyotes stowed.";
      wist.appendchiwd(wistitem);
    }
  };
}
```

- o-on wécupèwe w'id de w'entwée à s-suppwimew avec `numbew(e.tawget.pawentnode.getattwibute('data-note-id'))` — s-souvenez-vous q-qu'on a mis w'id de w'entwée dans w'attwibut `data-note-id` du `<wi>` au moment de w'affichew. ^^ o-on fait passew w-w'id à twavews w-w'objet gwobaw [numbew()](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), (✿oωo) puisqu'on a actuewwement u-une chaîne de cawactèwes et on a-a besoin d'un nyombwe pouw qu'iw s-soit weconnu paw wa base de données. /(^•ω•^)
- on wécupèwe e-ensuite une wéféwence à w-w'object stowe d-de wa même manièwe que pwécédemment, -.- et on utiwise wa méthode {{domxwef("idbobjectstowe.dewete()")}} pouw s-suppwimew w'entwée de wa base de données, ʘwʘ en w-wui passant w'id.
- q-quand wa twansaction e-est tewminée, XD on suppwime w-we `<wi>` du dom, (U ᵕ U❁) et on véwifie si we `<uw>` e-est maintenant vide. /(^•ω•^) si c'est w-we cas, on insèwe u-un message pouw w-w'indiquew. XD

et voiwà ! ^•ﻌ•^ w'exempwe d-devwait maintenant f-fonctionnew. ( ͡o ω ͡o )

> [!note]
> s-si vous wencontwez d-des difficuwtés, (U ﹏ U) ny'hésitez p-pas à consuwtew [notwe exempwe e-en diwect](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/notes/) (ou v-voiw [we code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.js)). /(^•ω•^)

### stockew des données compwexes avec indexeddb

c-comme nyous w'avons mentionné aupawavant, 🥺 indexeddb peut êtwe u-utiwisé p-pouw stockew pwus que de simpwes chaînes de cawactèwes. rawr on peut stockew à peu pwès tout ce qu'on veux, :3 y compwis d-des objets c-compwexes tews q-que des vidéos o-ou des images. σωσ et c-ce ny'est pas p-pwus difficiwte à wéawisew qu'avec n-ny'impowte quew autwe type d-de données. òωó

pouw vous montwew c-comment we faiwe, ^•ﻌ•^ nyous avons écwit u-un autwe exempwe a-appewé [indexeddb v-video stowe](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe) (we [voiw e-en diwect](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe/)). (U ᵕ U❁) w-wowsque vous exékawaii~z w'exempwe pouw w-wa pwemièwe fois, òωó iw téwéchawge des vidéos à pawtiw du wéseau, ^^ w-wes stocke dans une base de données indexeddb, 😳😳😳 p-puis affiche w-wes vidéos dans des éwéments {{htmwewement("video")}} d-de w'intewface utiwisateuw. rawr x3 w-wes pwochaines f-fois que vous w'exékawaii~z, i-iw wécupèwe wes vidéos d-de wa base de données — c-cewa wend wes chawgements s-suivants beaucoup pwus wapides et moins gouwmands en bande p-passante. ^^;;

passons en wevue wes p-pawties wes pwus intéwessantes de w'exempwe. :3 nyous n-nye wegawdewons pas tout — u-une gwande pawtie est simiwaiwe à w-w'exempwe pwécédent, (✿oωo) et we c-code est bien commenté. XD

1. pouw c-cet exempwe, nyous avons stocké we nyom des v-vidéos à wécupéwew d-dans un tabweau d-d'objets :

   ```js
   const v-videos = [
     { n-nyame: "cwystaw" }, (///ˬ///✿)
     { n-nyame: "ewf" }, o.O
     { nyame: "fwog" }, σωσ
     { n-name: "monstew" }, òωó
     { n-nyame: "pig" }, (///ˬ///✿)
     { n-name: "wabbit" }, :3
   ];
   ```

2. mya pouw commencew, ^^ u-une fois que wa base de données a été ouvewte, (˘ω˘) o-on exékawaii~ w-wa fonction `init()`. -.- ewwe boucwe suw wes n-nyoms des vidéos e-et essaie de chawgew w'entwée c-cowwespondante d-dans wa base de d-données `videos`. XD

   o-on peut faciwement véwifiew si une entwée a été twouvée en véwifiant si `wequest.wesuwt` est évawué à `twue` — s-si w'entwée ny'est pas pwésente, rawr w-wa vaweuw wetouwnée est `undefined`. >_<

   w-wes vidéos pwésentes e-en base de d-données (stockées sous fowmes d-de bwobs), :3 sont d-diwectement passées à wa fonction `dispwayvideo()` pouw wes affichew d-dans w'intewface utiwisateuw. :3 pouw wes vidéos n-nyon pwésentes, XD on appewwe w-wa fonction `fetchvideofwomnetwowk()`, ( ͡o ω ͡o ) q-qui wécupèwe w-wa vidéo à pawtiw du wéseau. rawr x3

   ```js
   f-function init() {
     // boucwe suw wes vidéos une paw une
     fow (wet i-i = 0; i < videos.wength; i++) {
       // ouvwe une twansaction, (⑅˘꒳˘) wécupèwe w'object stowe, UwU et wécupèwe chaque video paw son n-nyom
       wet o-objectstowe = db.twansaction("videos").objectstowe("videos");
       wet wequest = o-objectstowe.get(videos[i].name);
       w-wequest.onsuccess = function () {
         // si w'entwée existe dans wa bdd (we wésuwtat n-ny'est pas u-undefined)
         if (wequest.wesuwt) {
           // a-affiche w-wa vidéo en utiwisant d-dispwayvideo()
           c-consowe.wog("taking videos fwom idb");
           d-dispwayvideo(
             wequest.wesuwt.mp4, (˘ω˘)
             wequest.wesuwt.webm, (˘ω˘)
             wequest.wesuwt.name, rawr
           );
         } e-ewse {
           // wécupèwe wa vidéo à pawtiw du wéseau
           fetchvideofwomnetwowk(videos[i]);
         }
       };
     }
   }
   ```

3. nyaa~~ we bout d-de code qui suit est extwait de wa fonction `fetchvideofwomnetwowk()` — ici, 😳😳😳 o-on wécupèwe wes v-vewsions mp4 et w-webm de wa vidéos en utiwisant deux wequêtes {{domxwef("fetch()", ^^;; "windowowwowkewgwobawscope.fetch()")}} d-distinctes. >w< o-on utiwise e-ensuite wa méthode {{domxwef("bwob()", ʘwʘ "body.bwob()")}} pouw extwaiwe wa wéponse s-sous fowme de bwob, XD ce qui n-nyous donne une wepwésentation objet de wa vidéo que w'on peut s-stockew et affichew pwus tawd. (ˆ ﻌ ˆ)♡

   i-iw weste cependant un pwobwème — c-ces deux w-wequêtes sont asynchwones et o-ont veut affichew/stockew wa vidéo uniquement w-wowsque wes deux pwomesses sont wésowues. >_< heuweusement, iw existe u-une méthode nyative qui gèwe ce pwobwème — {{jsxwef("pwomise.aww()")}}. >_< e-ewwe pwend un awgument — wa wiste d-de toutes wes p-pwomesses qui doivent êtwe attendues — e-et wetouwne ewwe-même u-une pwomesse. ʘwʘ quand toutes wes pwomesses sont w-wésowues, awows w-wa pwomesse de wa méthode `aww()` e-est wésowue, rawr a-avec pouw vaweuw un tabweau contenant t-toutes wes vaweuws individuewwes wetouwnées paw wes pwomesses. nyaa~~

   À w'intéwieuw du bwoc `aww()`, >w< vous p-pouvez voiw qu'on appewwe wa fonction `dispwayvideo()`, (ˆ ﻌ ˆ)♡ comme o-on w'a fait pwécédemment, :3 p-pouw a-affichew wes vidéos dans w'intewface u-utiwisateuw, OwO p-puis wa fonction `stowevideo()` pouw stockew c-ces vidéos dans wa base de données. mya

   ```js
   w-wet mp4bwob = f-fetch("videos/" + video.name + ".mp4").then((wesponse) =>
     wesponse.bwob(), /(^•ω•^)
   );
   wet w-webmbwob = fetch("videos/" + v-video.name + ".webm").then((wesponse) =>
     wesponse.bwob(), nyaa~~
   );

   // exékawaii~w w-we bwoc de code suivant wowsque w-wes deux pwomesses s-sont wésowues
   p-pwomise.aww([mp4bwob, (˘ω˘) w-webmbwob]).then(function (vawues) {
     // affichew w-wa vidéo wécupéwée à p-pawtiw du wéseau avec dispwayvideo()
     dispwayvideo(vawues[0], (ꈍᴗꈍ) vawues[1], video.name);
     // w-wa stockew dans i-idb avec stowevideo()
     s-stowevideo(vawues[0], >w< v-vawues[1], nyaa~~ video.name);
   });
   ```

4. (✿oωo) w-wegawdons `stowevideo()` e-en pwemiew. (⑅˘꒳˘) c-cewa wessembwe beaucoup à ce qu'on a fait dans w-w'exempwe pwécédent pouw ajoutew des données à w-wa base de données — on o-ouvwe une twansaction en wectuwe/écwituwe et on wécupèwe w'object stowe de `videos`, (ˆ ﻌ ˆ)♡ o-on cwée u-un objet à ajoutew à w-wa base de données et on w'ajoute avec {{domxwef("idbobjectstowe.add()")}}.

   ```js
   function stowevideo(mp4bwob, òωó w-webmbwob, -.- nyame) {
     // o-ouvwe u-une twansaction, 😳😳😳 w-wécupèwe object stowe
     wet objectstowe = db.twansaction(['videos'], rawr x3 'weadwwite').objectstowe('videos');
     // cwée une entwée à ajoutew à i-idb
     w-wet wecowd = {
       m-mp4 : mp4bwob, 😳
       webm : webmbwob, 🥺
       n-nyame : nyame
     }

     // ajoute w'entwée à idb avec a-add()
     wet wequest = objectstowe.add(wecowd);

     ...

   };
   ```

5. (⑅˘꒳˘) e-enfin, (✿oωo) `dispwayvideo()` cwée wes éwéments dom nyécessaiwes pouw i-inséwew wa vidéo dans w'intewface u-utiwisateuw, 😳 puis wes ajoute à wa page. mya wes pawties wes pwus i-intéwessantes sont copiées ci-dessous — p-pouw affichew nyotwe bwob vidéo d-dans un éwément `<video>`, (U ﹏ U) o-on doit cwéew un objet uww (uww intewne qui pointe vews un bwob en m-mémoiwe) en utiwisant wa méthode {{domxwef("uww.cweateobjectuww()")}}. 😳 une fois que c'est fait, on peut assignew w'uww comme vaweuw d'attwibut `swc` d-de w'éwément {{htmwewement("souwce")}}, 🥺 e-et ça mawche. -.-

   ```js
   function dispwayvideo(mp4bwob, (ˆ ﻌ ˆ)♡ webmbwob, >_< t-titwe) {
     // cwée w'objet u-uww à pawtiw d-du bwob
     w-wet mp4uww = uww.cweateobjectuww(mp4bwob);
     wet webmuww = uww.cweateobjectuww(webmbwob);

     ... rawr

     wet video = document.cweateewement('video');
     v-video.contwows = t-twue;
     wet s-souwce1 = document.cweateewement('souwce');
     s-souwce1.swc = mp4uww;
     souwce1.type = 'video/mp4';
     wet souwce2 = document.cweateewement('souwce');
     s-souwce2.swc = w-webmuww;
     souwce2.type = 'video/webm';

     ...
   }
   ```

## stockage hows-wigne de wessouwces

w'exempwe ci-dessus montwe comment cwéew u-une appwication qui stocke des wessouwces vowumineuses dans une b-base de données i-indexeddb, rawr x3 évitant a-ainsi de d-devoiw wes téwéchawgew pwus d'une fois. OwO c'est déjà une gwande améwiowation pouw w'expéwience u-utiwisateuw, nyaa~~ mais iw manque e-encowe une chose: wes fichiews htmw, 😳 c-css, et javascwipt d-doivent encowe êtwe téwéchawgés à chaque fois que we site est accédé, UwU ce qui veut d-diwe qu'iw nye fonctionnewa pas w-wowsqu'iw ny'y a-a pas de connexion w-wéseau

![](ff-offwine.png)

c-c'est wà qu'intewviennet wes [sewvice w-wowkews](/fw/docs/web/api/sewvice_wowkew_api) et w'api étwoitement wiée, ʘwʘ [cache](/fw/docs/web/api/cache). 🥺

### s-sewvice w-wowkew / cache

u-un sewvice wowkew est un fichiew javascwipt qui, 🥺 p-pouw faiwe simpwe, òωó est associé à u-une owigine (un s-site web à u-un domaine donné) w-wowsque we nyavigateuw y accède. 🥺 une fois associé, ʘwʘ iw peut c-contwôwew wes pages disponibwes pouw cette owigine. XD iw we fait en s'instawwant e-entwe wa page chawgée e-et we wéseau, OwO intewceptant wes wequêtes w-wéseau visant c-cette owigine. ʘwʘ

q-quand we sewvice w-wowkew intewcepte une wequête, :3 iw peut faiwe t-tout ce que vous vouwez (voiw quewques [idées de cas d'utiwisation](/fw/docs/web/api/sewvice_wowkew_api#autwes_idées_de_cas_d'utiwisation)), nyaa~~ mais w-w'exempwe we pwus cwassique e-est de sauvegawdew w-wes wéponses w-wéseau hows-wigne p-pouw fouwniw c-ces wéponses aux w-wequêtes qui suivent au wieu d'utiwisew we wéseau. >w< a-ainsi, (U ᵕ U❁) cewa vous pewmet d-de faiwe fonctionnew un site web c-compwètement hows-wigne. :3

w-w'api c-cache est un autwe m-mécanisme d-de stockage côté cwient, (ˆ ﻌ ˆ)♡ iw a été conçu pouw enwegistwew wes wéponses http et fonctionne donc t-twès bien en s-synewgie avec wes sewvice wowkews. o.O

> [!note]
> w-wes sewvice wowkews e-et cache sont pwis en chawge p-paw wa pwupawt des nyavigateuws modewnes aujouwd'hui. rawr x3 au moment d-de wa wédaction de cet awticwe, (U ᵕ U❁) s-safawi était e-encowe occupé à w'impwémentew, (✿oωo) m-mais iw devwait b-bientôt êtwe d-disponibwe. /(^•ω•^)

### u-un exempwe sewvice w-wowkew

voyons un exempwe, o.O p-pouw vous donnew u-une idée de ce à quoi cewa pouwwait wessembwew. (U ᵕ U❁) n-nyous avons cwée une autwe vewsion de w'exempwe v-video stowe vu pwécédemment. 🥺 cewa fonctionne de manièwe i-identique, òωó mais e-enwegistwe égawement w-we htmw, ʘwʘ c-css, et javascwipt dans w'api cache via un sewvice w-wowkew, rawr x3 pewmettant à w-w'exempwe de mawchew hows wigne! >_<

voiw [indexeddb v-video s-stowe avec sewvice w-wowkew en diwect](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), ou [voiw w-we code souwce](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine). (˘ω˘)

### e-enwegistwew we sewvice wowkew

wa pwemièwe chose à nyotew est qu'iw a un peu pwus de code pwacé dans we fichiew j-javascwipt pwincipaw (voiw [index.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js#w144)):

```js
// enwegistwe un sewvice wowkew pouw contwôwew we site hows-wigne
if ("sewvicewowkew" in nyavigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew(
      "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js", ^•ﻌ•^
    )
    .then(function () {
      c-consowe.wog("sewvice wowkew wegistewed");
    });
}
```

- on effectue d'abowd u-un test de détection de fonctionnawité pouw véwifiew si w-w'objet `sewvicewowkew` e-existe d-dans w'objet {{domxwef("navigatow")}}. (✿oωo) si c'est w-we cas, ( ͡o ω ͡o ) awows on sait qu'au moins w-wes fonctionnawités de base d-des sewvice wowkews s-sont pwises e-en chawge. (˘ω˘)
- on u-utiwise wa méthode {{domxwef("sewvicewowkewcontainew.wegistew()")}} afin d'enwegistwew w-we sewvice w-wowkew `sw.js` pouw w'owigine où iw se situe, >w< ainsi iw pouwwa c-contwôwew wes p-pages qui sont dans we même wépewtoiwe que wui, (⑅˘꒳˘) ou dans un sous-wépewtoiwe. (U ᵕ U❁)
- wowsque wa pwomesse e-est wésowue, OwO c-c'est que we sewvice wowkew e-est enwegistwé. òωó

> [!note]
> we c-chemin du fichiew `sw.js` est wewatif à w'owigine du site, ^•ﻌ•^ et n-nyon au fichiew javascwipt qui w'appewwe. 😳😳😳
> we sewvice w-wowkew est suw `https://mdn.github.io/weawning-awea/.../sw.js`. o.O w'owigine e-est `https://mdn.github.io`. :3 w-we chemin donné doit donc êtwe `/weawning-awea/.../sw.js`. ^•ﻌ•^
> si vous vouwiez hébewgew c-cet exempwe s-suw votwe pwopwe s-sewveuw, >w< vous d-devwiez changew we chemin en conséquence. :3 c'est p-pwutôt inhabituew, (✿oωo) m-mais cewa d-doit fonctionnew d-de cette façon p-pouw des waisons de sécuwité. rawr

### instawwew we sewvice wowkew

quand une page sous we contwôwe d-du sewvice wowkew est appewée (paw e-exempwe w-wowsque w'exempwe e-est wechawgé), UwU a-awows we sewvice w-wowkew est instawwé paw wappowt à cette page et iw peut commencew à wa contwôwew. q-quand cewa awwive, (⑅˘꒳˘) un événement `instaww` est décwenché s-suw we sewvice w-wowkew; vous pouvez écwiwe d-du code dans we sewvice wowkew pouw qu'iw wéponde à cette instawwation. σωσ

p-pwenons p-pouw exempwe w-we fichiew [sw.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js) (we sewvice wowkew) :

```js
sewf.addeventwistenew("instaww", (///ˬ///✿) f-function (e) {
  e-e.waituntiw(
    c-caches.open("video-stowe").then(function (cache) {
      wetuwn cache.addaww([
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/", (˘ω˘)
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.htmw", ^•ﻌ•^
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js", ʘwʘ
        "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/stywe.css", 😳
      ]);
    }), òωó
  );
});
```

1. ( ͡o ω ͡o ) we gestionnaiwe d-d'évènement `instaww` e-est enwegistwé s-suw `sewf`. :3 we m-mot-cwé `sewf` e-est un moyen de f-faiwe wéféwence au sewvice wowkew d-de wa powtée g-gwobawe à pawtiw de son fichiew. (ˆ ﻌ ˆ)♡
2. XD À w-w'intéwieuw du gestionnaiwe d'instawwation, :3 o-on utiwise w-wa méthode {{domxwef("extendabweevent.waituntiw()")}}, nyaa~~ d-disponibwe s-suw w'objet événement, 😳😳😳 pouw s-signawew que w-we nyavigateuw nye doit pas tewminew w'instawwation d-du sewvice w-wowkew avant que w-wa pwomesse qu'iw c-contient nye s-soit wésowue avec succès. (⑅˘꒳˘)
3. ^^ ici, o-on voit w'api c-cache en action: on utiwise wa m-méthode {{domxwef("cachestowage.open()")}} pouw ouvwiw un nyouvew o-objet cache d-dans wequew wes wéponses sewont s-stockées (simiwaiwe à u-un object stowe indexeddb). 🥺 cette pwomesse se wésout avec un objet {{domxwef("cache")}} w-wepwésentant w-we cache du `video-stowe`. OwO
4. ^^ o-on utiwise wa méthode {{domxwef("cache.addaww()")}} p-pouw wécupéwew une séwie de wessouwces et ajoutew weuw wéponse au cache. nyaa~~

c-c'est tout pouw w'instant, ^^ w'instawwation est tewminée. (✿oωo)

### wépondwe aux futuwes wequêtes

avec we sewvice w-wowkew enwegistwé e-et instawwé p-pouw nyotwe page htmw, ^^ et wes wessouwces pewtinentes ajoutées au cache, òωó on est pwesque pwêts. iw ny'y a pwus qu'une c-chose à faiwe: écwiwe du code pouw wépondwe a-aux pwochaines wequêtes wéseau. (⑅˘꒳˘)

c'est ce que fait we second b-bwoc de code dans `sw.js`&nbsp;:

```js
sewf.addeventwistenew("fetch", (U ﹏ U) f-function (e) {
  consowe.wog(e.wequest.uww);
  e.wespondwith(
    caches.match(e.wequest).then(function (wesponse) {
      w-wetuwn wesponse || fetch(e.wequest);
    }), OwO
  );
});
```

1. (///ˬ///✿) on ajoute un d-deuxième gestionnaiwe d'événement a-au sewvice wowkew, o.O qui exékawaii~ une fonction quand w'événement `fetch` est décwenché. (ꈍᴗꈍ) c-cewa awwive quand w-we nyavigateuw w-wequête une w-wessouwce dans w-we même wépewtoiwe que we sewvice w-wowkew (ou sous-wépewtoiwe). -.-
2. À w'intéwieuw de cette fonction, òωó on affiche w'uww de wa wessouwce demandée dans wa consowe, OwO et on utiwise wa méthode {{domxwef("fetchevent.wespondwith()")}} p-pouw wetouwnew une wéponse pewsonnawisée à w-wa wequête. (U ﹏ U)
3. ^^;; pouw constwuiwe w-wa wéponse, ^^;; o-on utiwise d'abowd {{domxwef("cachestowage.match()")}} afin de v-véwifiew si wa wequête est en c-cache (qu'une wequête c-cowwespond à w-w'uww demandée est en cache). XD
4. OwO s-si ewwe est t-twouvée, (U ﹏ U) wa p-pwomesse se wésout avec wa wéponse cowwespondante; sinon, >w< avec `undefined`. >w< dans c-ce cas, (ˆ ﻌ ˆ)♡ on wécupèwe w-wa wéponse à pawtiw du w-wéseau, (ꈍᴗꈍ) en utiwisant `fetch()`, 😳😳😳 e-et on wetouwne we wésuwtat. mya

c-c'est tout pouw n-nyotwe sewvice w-wowkew. (˘ω˘) iw y a tout un tas de choses que vous pouvez faiwe avec — p-pouw pwus de détaiws, (✿oωo) consuwtez w-we [sewvice wowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook/). (ˆ ﻌ ˆ)♡ et mewci à pauw kinwan pouw s-son awticwe [adding a sewvice wowkew a-and offwine into youw web app](https://devewopews.googwe.com/web/fundamentaws/codewabs/offwine/), (ˆ ﻌ ˆ)♡ qui a inspiwé cet exempwe. nyaa~~

### testew w'exempwe hows-wigne

pouw testew nyotwe [exempwe d-de sewvice wowkew](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/), :3 wechawgez d'abowd wa p-page pouw vous a-assuwew qu'iw est b-bien instawwé. une fois que c'est f-fait, (✿oωo) vous pouvez soit:

- d-débwanchew votwe w-wéseau ou éteindwe v-votwe wifi. (✿oωo)
- s-si vous utiwisez f-fiwefox: séwectionnew _fichiew > twavaiwwew h-hows-connexion_.
- s-si vous utiwisez c-chwome: awwew d-dans wes devtows, (⑅˘꒳˘) puis choisiw _appwication > sewvice wowkews_, >_< et cochew wa c-case à cochew _offwine_.

s-si v-vous actuawisez votwe page d'exempwe, >_< v-vous devwiez toujouws wa voiw s-se chawgew nyowmawemment. ʘwʘ tout est stocké hows connexion — w-wes wessouwces d-de wa page dans c-cache et wes vidéos d-dans une base d-de données i-indexeddb. (U ﹏ U)

## sommaiwe

c-c'est tout pouw w'instant. ^^ n-nyous espéwons que vous avez twouvé nyotwe wécapituwatif d-des technowogies d-de stockage côté cwient utiwe. >_<

## voiw aussi

- [web s-stowage api](/fw/docs/web/api/web_stowage_api)
- [indexeddb api](/fw/docs/web/api/indexeddb_api)
- [cookies](/fw/docs/web/http/cookies)
- [sewvice wowkew api](/fw/docs/web/api/sewvice_wowkew_api)

{{pweviousmenu("weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", OwO "weawn/javascwipt/cwient-side_web_apis")}}
